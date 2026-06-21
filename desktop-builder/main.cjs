const { app, BrowserWindow, dialog, shell } = require("electron");
const { execFile } = require("node:child_process");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const net = require("node:net");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { promisify } = require("node:util");

let mainWindow = null;
let builderOrigin = "";
const execFileAsync = promisify(execFile);
const defaultRepositoryUrl = process.env.OMB_BUILDER_REPOSITORY || "https://github.com/otienomaurice/otienomaurice.github.io.git";

const rootFilesToRefresh = [
  "server.mjs",
  "index.html",
  "styles.css",
  "script.js",
  "electronics-search.js",
  "builder-rich-future-sections.js",
  "template-preview.html",
  "template-preview.css",
  "template-preview.js"
];

const rootFilesToSeed = [
  "projects.json",
  "project-templates.json",
  "README.md",
  ".nojekyll",
  "robots.txt",
  "sitemap.xml",
  "CNAME"
];

const directorySeeds = ["assets", "Backgrounds", "docs"];
const gitCandidates = [
  process.env.GIT_EXE,
  "git",
  "C:\\Program Files\\Git\\cmd\\git.exe",
  "C:\\Program Files\\Git\\bin\\git.exe",
  "C:\\Program Files (x86)\\Git\\cmd\\git.exe",
  "C:\\Program Files (x86)\\Git\\bin\\git.exe"
].filter(Boolean);

function fileExists(filePath) {
  try {
    fs.accessSync(filePath);
    return true;
  } catch {
    return false;
  }
}

async function copyFileIfAvailable(source, target, overwrite = false) {
  if (!fileExists(source)) return;
  if (!overwrite && fileExists(target)) return;
  await fsp.mkdir(path.dirname(target), { recursive: true });
  await fsp.copyFile(source, target);
}

async function copyDirectoryMissingFiles(source, target) {
  if (!fileExists(source)) return;
  await fsp.mkdir(target, { recursive: true });
  const entries = await fsp.readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      await copyDirectoryMissingFiles(sourcePath, targetPath);
    } else if (entry.isFile()) {
      await copyFileIfAvailable(sourcePath, targetPath, false);
    }
  }
}

async function directoryIsEmpty(directory) {
  try {
    const entries = await fsp.readdir(directory);
    return entries.length === 0;
  } catch {
    return true;
  }
}

async function runGit(args, cwd) {
  let lastError = null;
  for (const candidate of gitCandidates) {
    try {
      await execFileAsync(candidate, args, {
        cwd,
        maxBuffer: 10 * 1024 * 1024,
        windowsHide: true
      });
      return true;
    } catch (error) {
      lastError = error;
      if (error.code === "ENOENT") continue;
      throw error;
    }
  }
  throw lastError || new Error("Git executable was not found.");
}

function workspaceLooksUsable(workspaceRoot) {
  return fileExists(path.join(workspaceRoot, "server.mjs"))
    && fileExists(path.join(workspaceRoot, "index.html"));
}

function workspaceIsGitBacked(workspaceRoot) {
  return fileExists(path.join(workspaceRoot, ".git"));
}

function findRepositoryNearExecutable() {
  let current = path.dirname(process.execPath);
  for (let index = 0; index < 8; index += 1) {
    if (workspaceLooksUsable(current) && workspaceIsGitBacked(current)) return current;
    const next = path.dirname(current);
    if (next === current) break;
    current = next;
  }
  return "";
}

async function cloneWorkspaceIfPossible(workspaceRoot) {
  if (workspaceIsGitBacked(workspaceRoot)) return true;
  await fsp.mkdir(workspaceRoot, { recursive: true });
  if (!(await directoryIsEmpty(workspaceRoot))) return false;
  try {
    await runGit(["clone", "--depth", "1", defaultRepositoryUrl, workspaceRoot], path.dirname(workspaceRoot));
    return workspaceIsGitBacked(workspaceRoot);
  } catch {
    return false;
  }
}

async function preparePackagedWorkspace() {
  const bundledSiteRoot = path.join(process.resourcesPath, "site");
  const workspaceRoot = path.join(app.getPath("documents"), "OMB Portfolio Builder Workspace");

  await fsp.mkdir(workspaceRoot, { recursive: true });
  await cloneWorkspaceIfPossible(workspaceRoot);

  for (const fileName of rootFilesToRefresh) {
    await copyFileIfAvailable(path.join(bundledSiteRoot, fileName), path.join(workspaceRoot, fileName), true);
  }
  for (const fileName of rootFilesToSeed) {
    await copyFileIfAvailable(path.join(bundledSiteRoot, fileName), path.join(workspaceRoot, fileName), false);
  }
  for (const directoryName of directorySeeds) {
    await copyDirectoryMissingFiles(path.join(bundledSiteRoot, directoryName), path.join(workspaceRoot, directoryName));
  }

  return workspaceRoot;
}

async function resolveWorkspaceRoot() {
  const envWorkspace = process.env.OMB_BUILDER_WORKSPACE;
  if (envWorkspace && workspaceLooksUsable(envWorkspace)) return envWorkspace;
  if (!app.isPackaged) return path.resolve(__dirname, "..");
  const nearbyRepository = findRepositoryNearExecutable();
  if (nearbyRepository) return nearbyRepository;
  return preparePackagedWorkspace();
}

function findFreePort() {
  return new Promise((resolve, reject) => {
    const tester = net.createServer();
    tester.once("error", reject);
    tester.listen(0, "127.0.0.1", () => {
      const address = tester.address();
      const port = typeof address === "object" && address ? address.port : 0;
      tester.close(() => resolve(port));
    });
  });
}

async function startBuilderServer(workspaceRoot) {
  const port = await findFreePort();
  process.env.PORT = String(port);
  process.env.HOST = "127.0.0.1";
  process.env.OMB_DESKTOP_APP = "1";
  process.env.OMB_BUILDER_WORKSPACE = workspaceRoot;
  process.env.OMB_BUILDER_REPOSITORY = defaultRepositoryUrl;

  const serverPath = path.join(workspaceRoot, "server.mjs");
  await import(`${pathToFileURL(serverPath).href}?desktop=${Date.now()}`);
  return `http://127.0.0.1:${port}`;
}

function createWindow(workspaceRoot, origin) {
  const iconPath = path.join(workspaceRoot, "assets", "omb-app-icon-256.png");
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 960,
    minWidth: 980,
    minHeight: 680,
    title: "OMB Portfolio Builder",
    icon: fileExists(iconPath) ? iconPath : undefined,
    backgroundColor: "#eef8fd",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith(origin)) return { action: "allow" };
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (url.startsWith(origin)) return;
    event.preventDefault();
    shell.openExternal(url);
  });

  mainWindow.loadURL(`${origin}/template-preview.html`);
}

async function boot() {
  const gotLock = app.requestSingleInstanceLock();
  if (!gotLock) {
    app.quit();
    return;
  }

  app.on("second-instance", () => {
    if (!mainWindow) return;
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  });

  await app.whenReady();
  try {
    const workspaceRoot = await resolveWorkspaceRoot();
    builderOrigin = await startBuilderServer(workspaceRoot);
    createWindow(workspaceRoot, builderOrigin);
  } catch (error) {
    dialog.showErrorBox("OMB Portfolio Builder could not start", error?.message || String(error));
    app.quit();
  }
}

app.on("window-all-closed", () => {
  app.quit();
});

boot();
