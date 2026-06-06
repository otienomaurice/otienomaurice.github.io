import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 8080);
const host = process.env.HOST || "0.0.0.0";
const execFileAsync = promisify(execFile);

const types = {
  ".css": "text/css",
  ".csv": "text/csv",
  ".html": "text/html",
  ".js": "application/javascript",
  ".json": "application/json",
  ".md": "text/markdown",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".txt": "text/plain",
  ".webp": "image/webp",
  ".xml": "application/xml",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".zip": "application/zip"
};

const draftPath = path.join(root, "projects.local.json");
const catalogPath = path.join(root, "projects.json");
const gitCandidates = [
  process.env.GIT_EXE,
  "git",
  "C:\\Program Files\\Git\\cmd\\git.exe",
  "C:\\Program Files\\Git\\bin\\git.exe",
  "C:\\Program Files (x86)\\Git\\cmd\\git.exe",
  "C:\\Program Files (x86)\\Git\\bin\\git.exe"
].filter(Boolean);

function sendJson(response, status, data) {
  response.writeHead(status, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data, null, 2));
}

function isLocalRequest(request) {
  const address = request.socket.remoteAddress || "";
  return address === "127.0.0.1" || address === "::1" || address === "::ffff:127.0.0.1";
}

async function readJsonFile(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function readRequestJson(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > 60 * 1024 * 1024) {
      throw new Error("Request body is too large.");
    }
    chunks.push(chunk);
  }

  return JSON.parse((Buffer.concat(chunks).toString("utf8") || "{}").replace(/^\uFEFF/, ""));
}

function safeSegment(value, fallback = "item") {
  const segment = String(value || fallback)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return segment || fallback;
}

function safeFileName(value) {
  const parsed = path.parse(String(value || "file"));
  const name = safeSegment(parsed.name, "file");
  const ext = safeSegment(parsed.ext.replace(".", ""), "");
  return ext ? `${name}.${ext}` : name;
}

function resolveInsideRoot(...segments) {
  const target = path.normalize(path.join(root, ...segments));
  if (!target.startsWith(root)) {
    throw new Error("Resolved path is outside the workspace.");
  }
  return target;
}

async function runGit(args) {
  let lastError = null;
  for (const candidate of gitCandidates) {
    try {
      const result = await execFileAsync(candidate, args, {
        cwd: root,
        maxBuffer: 10 * 1024 * 1024,
        windowsHide: true
      });
      return { ...result, git: candidate };
    } catch (error) {
      lastError = error;
      if (error.code === "ENOENT") continue;
      throw error;
    }
  }
  throw lastError || new Error("Git executable was not found.");
}

async function publishSiteChanges() {
  const publishPaths = [
    "projects.json",
    "docs",
    "assets",
    "index.html",
    "styles.css",
    "script.js",
    "electronics-search.js"
  ];

  await runGit(["add", "--", ...publishPaths]);
  const status = await runGit(["status", "--porcelain", "--", ...publishPaths]);
  const hasChanges = status.stdout.trim().length > 0;

  let commit = null;
  if (hasChanges) {
    const message = `Update portfolio site ${new Date().toISOString().slice(0, 10)}`;
    commit = await runGit(["commit", "-m", message]);
  }

  const branch = (await runGit(["branch", "--show-current"])).stdout.trim();
  const pushArgs = branch ? ["push", "origin", branch] : ["push"];
  const push = await runGit(pushArgs);

  return {
    branch: branch || "current branch",
    committed: hasChanges,
    commitOutput: commit?.stdout || commit?.stderr || "",
    pushed: true,
    pushOutput: push.stdout || push.stderr || ""
  };
}

async function handleApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/catalog") {
    try {
      const catalog = await readJsonFile(draftPath);
      sendJson(response, 200, { source: "draft", catalog });
    } catch {
      sendJson(response, 200, { source: "published", catalog: await readJsonFile(catalogPath) });
    }
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/templates") {
    sendJson(response, 200, await readJsonFile(path.join(root, "project-templates.json")));
    return true;
  }

  if (request.method !== "POST") return false;

  if (!isLocalRequest(request)) {
    sendJson(response, 403, { error: "Write actions are only allowed from this computer." });
    return true;
  }

  if (url.pathname === "/api/save-draft" || url.pathname === "/api/apply-catalog") {
    const body = await readRequestJson(request);
    const catalog = body.catalog;

    if (!catalog || !Array.isArray(catalog.categories) || !Array.isArray(catalog.projects) || !catalog.categories.length) {
      sendJson(response, 400, { error: "Catalog must include categories and projects arrays." });
      return true;
    }

    const target = url.pathname === "/api/save-draft" ? draftPath : catalogPath;
    await writeFile(target, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
    if (url.pathname === "/api/apply-catalog") {
      try {
        const publish = await publishSiteChanges();
        sendJson(response, 200, { ok: true, file: path.relative(root, target), publish });
      } catch (error) {
        sendJson(response, 200, {
          ok: true,
          file: path.relative(root, target),
          publish: {
            pushed: false,
            error: error.stderr || error.stdout || error.message || "Git push failed."
          }
        });
      }
      return true;
    }
    sendJson(response, 200, { ok: true, file: path.relative(root, target) });
    return true;
  }

  if (url.pathname === "/api/upload") {
    const body = await readRequestJson(request);
    const projectId = safeSegment(body.projectId, "project");
    const section = safeSegment(body.section, "documents");
    const fileName = safeFileName(body.fileName);
    const base64 = String(body.data || "").replace(/^data:[^;]+;base64,/, "");

    if (!base64) {
      sendJson(response, 400, { error: "Upload data is missing." });
      return true;
    }

    const folder = resolveInsideRoot("docs", projectId, section);
    const filePath = resolveInsideRoot("docs", projectId, section, fileName);
    await mkdir(folder, { recursive: true });
    await writeFile(filePath, Buffer.from(base64, "base64"));

    sendJson(response, 200, {
      ok: true,
      url: path.relative(root, filePath).replaceAll(path.sep, "/")
    });
    return true;
  }

  return false;
}

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    if (url.pathname.startsWith("/api/") && await handleApi(request, response, url)) return;

    const pathname = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
    const filePath = path.normalize(path.join(root, pathname));

    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream"
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(port, host, () => {
  console.log(`Portfolio preview running at http://localhost:${port}`);
  console.log("For phone access, use this computer's Wi-Fi/LAN IP address with the same port.");
});
