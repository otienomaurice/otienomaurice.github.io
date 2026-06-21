import { createServer } from "node:http";
import { execFile, spawn } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
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
  ".ico": "image/x-icon",
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
const defaultSiteRepository = process.env.OMB_BUILDER_REPOSITORY || "https://github.com/otienomaurice/otienomaurice.github.io.git";
const publishAuthorizationHelp = [
  "Publishing was blocked before live website files were applied.",
  "Sign in to GitHub with an account that has write access to the selected Pages repository, then try Apply to site again.",
  "If this is not Maurice Otieno's website, associate the builder workspace with your own GitHub Pages repository or compatible static website repository.",
  "For a custom domain, add or update the repository CNAME file after the repository is associated.",
  "Until a compatible writable website repository is associated, the builder remains local-only."
].join(" ");
const gitCandidates = [
  process.env.GIT_EXE,
  "git",
  "C:\\Program Files\\Git\\cmd\\git.exe",
  "C:\\Program Files\\Git\\bin\\git.exe",
  "C:\\Program Files (x86)\\Git\\cmd\\git.exe",
  "C:\\Program Files (x86)\\Git\\bin\\git.exe"
].filter(Boolean);

const portfolioAiInstructions = [
  "You are the AI assistant for Maurice Otieno's electrical and computer engineering portfolio.",
  "Behave like a careful senior electrical and computer engineering mentor who can also navigate Maurice's portfolio.",
  "Answer the visitor's question first in a concise ChatGPT-like format, then add portfolio links or context only when they help.",
  "Use the supplied question intent to decide whether this is a general engineering question or a portfolio-specific question.",
  "For general_conversation intent, respond naturally and briefly. Use the recent conversation instead of a fixed template. If the visitor says hi, a good answer is a short greeting such as: Hi, what can I do for you?",
  "If the visitor asks 'what is my name?' or 'who am I?' and they have not identified themselves, do not pretend to know the visitor. Say you are an AI agent for Maurice Otieno's portfolio and that the portfolio owner is Maurice Otieno.",
  "For general_knowledge intent, answer the question directly using broad general knowledge. Do not force portfolio context unless the visitor asks to connect the answer to Maurice's work.",
  "For general_engineering intent, begin with the general electronics or engineering explanation. Do not lead with Maurice's project context unless the visitor asks to connect it.",
  "For portfolio_specific intent, answer from Maurice's portfolio context first, then explain related engineering concepts only when useful.",
  "Use recent conversation history for follow-up questions, pronouns, comparisons, and corrections.",
  "Use the supplied portfolio context as the trusted source for Maurice's projects, links, files, resume, and contact information.",
  "Use sourceExcerpts when present as higher-detail evidence from uploaded text files, extracted resume text, same-site files, GitHub pages, or other safe public sources.",
  "Use knowledgeManifest to understand project files, image evidence, public profiles, resumes, and project areas. Treat filenames, captions, surrounding text, and descriptions as evidence.",
  "Do not claim to visually inspect an image unless actual image analysis is provided. If only image metadata is supplied, say what the caption/path/context suggests.",
  "For GitHub, LinkedIn, resume, or uploaded-file questions, cite what is present in the supplied context or fetched excerpts and then point to the link when useful. Access public pages and fetched excerpts when the website allows it.",
  "When a visitor asks for source code, use public GitHub source excerpts when provided. Show concise relevant snippets with file paths, and explain what the code is doing. Do not imply private repository access.",
  "If sourceExcerpts include lines labeled Source file, include at least one fenced code block with the file path immediately before it, unless the visitor explicitly asks for links only.",
  "Never invent, infer, or write hypothetical code for Maurice's repositories. Every fenced code block about Maurice's work must be copied from a fetched Source file excerpt. If no source file excerpt is available, say that the code was not available in the fetched public sources and give the repository link instead.",
  "For questions about Maurice's public GitHub repositories, prefer fetched public GitHub source excerpts over portfolio summaries or project descriptions. You may fetch and display concise code from public GitHub URLs supplied in the portfolio context or safe source fetches, but never imply access to private repositories.",
  "You may answer related electronics, hardware, analog, mixed-signal, digital, embedded, FPGA, ASIC, PCB, and firmware questions even when the answer is broader than the saved portfolio.",
  "Do not invent portfolio projects, credentials, employers, files, or test results that are not in the context.",
  "If context is missing, say what is missing and answer generally only for the engineering concept.",
  "When useful, state assumptions, define terms, explain signal or data flow, identify tradeoffs, and name what evidence would prove the claim.",
  "Only mention or recommend portfolio links that are directly relevant to the visitor's current question or the active follow-up context. Do not append random links.",
  "Keep the answer recruiter-friendly, specific, and easy to skim. Use short paragraphs and bullets when helpful.",
  "Do not expose chain-of-thought. Give the polished answer only."
].join("\n");

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate"
  });
  response.end(JSON.stringify(data, null, 2));
}

function clampText(value, maxLength = 12000) {
  return String(value || "").slice(0, maxLength);
}

function stripHtmlToText(value = "") {
  return String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function sourceLooksTextual(source = {}) {
  const url = String(source.url || "");
  const kind = String(source.kind || "").toLowerCase();
  if (["text", "webpage", "github", "linkedin", "public_profile", "resume_text", "code"].includes(kind)) return true;
  return /\.(txt|md|markdown|csv|json|xml|log|c|h|cpp|hpp|py|js|mjs|ts|tsx|v|sv|vhdl?|spice|cir|net|asc|sch|kicad_sch|kicad_pcb|ino|xdc|sdc|tcl)$/i.test(url)
    || /github\.com|raw\.githubusercontent\.com/i.test(url);
}

function sourceUrlAllowed(url) {
  try {
    const parsed = new URL(url);
    const hostName = parsed.hostname.toLowerCase();
    return [
      "localhost",
      "127.0.0.1",
      "mauriceotieno.com",
      "www.mauriceotieno.com",
      "github.com",
      "api.github.com",
      "raw.githubusercontent.com",
      "gist.githubusercontent.com",
      "linkedin.com",
      "www.linkedin.com"
    ].includes(hostName);
  } catch {
    return false;
  }
}

const githubTextFilePattern = /\.(txt|md|markdown|csv|json|xml|log|c|h|cpp|hpp|cc|hh|py|js|mjs|ts|tsx|v|sv|vhdl?|spice|cir|net|asc|sch|kicad_sch|kicad_pcb|ino|xdc|sdc|tcl|yaml|yml)$/i;
const githubSkipFilePattern = /\.(png|jpe?g|gif|webp|svg|pdf|zip|7z|rar|exe|dll|bin|obj|o|a|so|dylib|mp4|mov|avi|mp3|wav|xlsx?|pptx?|docx?)$/i;

function gitHubHeaders(accept = "application/vnd.github+json") {
  return {
    "Accept": accept,
    "User-Agent": "Maurice-Otieno-Portfolio-AI"
  };
}

function parseGitHubSourceUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const parts = parsed.pathname.split("/").filter(Boolean);
    if (host === "raw.githubusercontent.com" && parts.length >= 4) {
      return {
        type: "file",
        owner: parts[0],
        repo: parts[1],
        branch: parts[2],
        filePath: parts.slice(3).join("/")
      };
    }
    if (host !== "github.com" || !parts.length) return null;
    if (parts.length === 1) return { type: "profile", owner: parts[0] };
    const base = { owner: parts[0], repo: parts[1] };
    if (parts[2] === "blob" && parts.length >= 5) {
      return { ...base, type: "file", branch: parts[3], filePath: parts.slice(4).join("/") };
    }
    if (parts[2] === "tree" && parts.length >= 4) {
      return { ...base, type: "repo", branch: parts[3] };
    }
    return { ...base, type: "repo" };
  } catch {
    return null;
  }
}

async function fetchGitHubJson(url) {
  const response = await fetch(url, { headers: gitHubHeaders() });
  if (!response.ok) return null;
  return response.json().catch(() => null);
}

async function fetchLimitedText(url, maxLength = 12000) {
  const response = await fetch(url, {
    headers: gitHubHeaders("text/plain,text/markdown,text/html,application/json;q=0.8,*/*;q=0.1")
  });
  if (!response.ok) return "";
  const rawText = clampText(await response.text(), maxLength);
  const contentType = response.headers.get("Content-Type") || "";
  return /html/i.test(contentType) ? stripHtmlToText(rawText) : rawText;
}

function githubQuestionTokens(question = "") {
  return [...new Set(String(question || "")
    .toLowerCase()
    .replace(/[^a-z0-9_#+.\s-]+/g, " ")
    .split(/\s+/)
    .filter((token) => token.length >= 3 && !["the", "and", "with", "from", "show", "code", "file", "github"].includes(token)))];
}

function scoreGitHubFile(filePath = "", question = "") {
  const cleanPath = filePath.toLowerCase();
  const tokens = githubQuestionTokens(question);
  let score = githubTextFilePattern.test(cleanPath) ? 10 : 0;
  if (/readme\.md$/.test(cleanPath)) score += 55;
  if (/\.(c|h|cpp|hpp|py|js|mjs|ts|v|sv|vhdl?|ino|tcl|xdc|sdc)$/i.test(cleanPath)) score += 28;
  if (/\b(test|tb|bench|sim|simulation|src|firmware|hardware|rtl|driver|main)\b/i.test(cleanPath)) score += 12;
  tokens.forEach((token) => {
    if (cleanPath.includes(token)) score += 18;
  });
  return score;
}

function wantsGitHubCode(question = "") {
  return /\b(code|source|snippet|implementation|firmware|driver|module|verilog|vhdl|python|javascript|typescript|c\+\+|cpp|c\s+code|pull|show|display)\b/i.test(question);
}

function scoreGitHubRepo(repo = {}, question = "") {
  const tokens = githubQuestionTokens(question);
  const haystack = [
    repo.full_name,
    repo.name,
    repo.description,
    repo.language,
    ...(Array.isArray(repo.topics) ? repo.topics : [])
  ].join(" ").toLowerCase();
  let score = repo.fork ? -10 : 12;
  if (!repo.archived) score += 6;
  if (repo.language) score += 4;
  if (repo.name && !/\.github\.io$/i.test(repo.name)) score += 3;
  tokens.forEach((token) => {
    if (haystack.includes(token)) score += 22;
  });
  if (/\b(vco|oscillator|pwm|analog|mixed|pcb|firmware|stm32|fpga|asic|verilog|embedded|signal|design)\b/i.test(haystack)) {
    score += 12;
  }
  return score;
}

async function fetchGitHubProfileSource(source = {}, parsed = {}) {
  const owner = parsed.owner;
  const [profile, repos] = await Promise.all([
    fetchGitHubJson(`https://api.github.com/users/${encodeURIComponent(owner)}`),
    fetchGitHubJson(`https://api.github.com/users/${encodeURIComponent(owner)}/repos?per_page=30&sort=updated`)
  ]);
  const repoList = Array.isArray(repos) ? repos : [];
  const includeCode = wantsGitHubCode(source.question || "");
  const selectedRepos = includeCode
    ? [...repoList]
      .sort((a, b) => scoreGitHubRepo(b, source.question || "") - scoreGitHubRepo(a, source.question || ""))
      .slice(0, 3)
    : [];
  const repoBlocks = [];

  for (const repo of selectedRepos) {
    if (!repo?.name || !repo?.html_url) continue;
    const repoSource = await fetchGitHubRepositorySource({
      ...source,
      context: `Public GitHub repository selected from ${owner}'s profile`,
      label: repo.full_name,
      maxCodeFiles: 3,
      maxFileTextLength: 3600,
      maxRepositoryTextLength: 9000,
      url: repo.html_url
    }, {
      owner,
      repo: repo.name,
      type: "repo",
      branch: repo.default_branch
    });
    if (repoSource?.text?.trim()) repoBlocks.push(repoSource.text.trim());
  }

  const lines = [
    `GitHub public profile: ${owner}`,
    profile?.name ? `Name: ${profile.name}` : "",
    profile?.bio ? `Bio: ${profile.bio}` : "",
    profile?.html_url ? `Profile URL: ${profile.html_url}` : source.url,
    "",
    "Public repositories visible from the profile:",
    ...repoList.slice(0, 20).map((repo) => [
      `- ${repo.full_name}`,
      repo.description ? `: ${repo.description}` : "",
      repo.language ? ` | Language: ${repo.language}` : "",
      repo.html_url ? ` | URL: ${repo.html_url}` : "",
      repo.updated_at ? ` | Updated: ${repo.updated_at}` : ""
    ].join("")),
    includeCode && selectedRepos.length ? "" : "",
    includeCode && selectedRepos.length ? "Selected public repositories inspected for source code:" : "",
    ...selectedRepos.map((repo) => `- ${repo.full_name}${repo.language ? ` | Language: ${repo.language}` : ""}${repo.description ? ` | ${repo.description}` : ""}`),
    ...repoBlocks.flatMap((block) => ["", "---", block])
  ].filter(Boolean);
  return {
    context: source.context || "Public GitHub profile",
    title: source.title || source.label || `GitHub profile: ${owner}`,
    type: includeCode ? "public GitHub profile and selected repository code" : "public GitHub profile",
    url: source.url,
    text: clampText(lines.join("\n"), includeCode ? 30000 : 9000)
  };
}

async function fetchGitHubRepositorySource(source = {}, parsed = {}) {
  const { owner, repo } = parsed;
  const metadata = await fetchGitHubJson(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`);
  const branch = parsed.branch || metadata?.default_branch || "main";
  const question = source.question || "";
  const requestedMaxCodeFiles = Number(source.maxCodeFiles || (wantsGitHubCode(question) ? 6 : 3));
  const maxCodeFiles = Math.max(1, Math.min(8, Number.isFinite(requestedMaxCodeFiles) ? requestedMaxCodeFiles : 3));
  const requestedFileTextLength = Number(source.maxFileTextLength || (wantsGitHubCode(question) ? 7000 : 3000));
  const maxFileTextLength = Math.max(1000, Math.min(10000, Number.isFinite(requestedFileTextLength) ? requestedFileTextLength : 3000));
  const requestedRepoTextLength = Number(source.maxRepositoryTextLength || (wantsGitHubCode(question) ? 22000 : 14000));
  const maxRepositoryTextLength = Math.max(5000, Math.min(26000, Number.isFinite(requestedRepoTextLength) ? requestedRepoTextLength : 14000));
  const lines = [
    `GitHub repository: ${owner}/${repo}`,
    metadata?.description ? `Description: ${metadata.description}` : "",
    metadata?.language ? `Primary language: ${metadata.language}` : "",
    metadata?.html_url ? `Repository URL: ${metadata.html_url}` : source.url,
    metadata?.default_branch ? `Default branch: ${metadata.default_branch}` : "",
    ""
  ].filter(Boolean);

  if (parsed.type === "file" && parsed.filePath) {
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${parsed.filePath}`;
    const text = await fetchLimitedText(rawUrl, 14000);
    if (text.trim()) lines.push(`Source file: ${parsed.filePath}`, text.trim());
    return {
      context: source.context || "Public GitHub source file",
      title: source.title || source.label || `${owner}/${repo}/${parsed.filePath}`,
      type: "public GitHub source file",
      url: source.url,
      text: clampText(lines.join("\n"), 14000)
    };
  }

  const tree = await fetchGitHubJson(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/git/trees/${encodeURIComponent(branch)}?recursive=1`);
  const files = Array.isArray(tree?.tree)
    ? tree.tree
      .filter((item) => item.type === "blob" && item.path && githubTextFilePattern.test(item.path) && !githubSkipFilePattern.test(item.path))
      .sort((a, b) => scoreGitHubFile(b.path, question) - scoreGitHubFile(a.path, question))
    : [];

  const readmePath = files.find((file) => /(^|\/)readme\.md$/i.test(file.path))?.path || "README.md";
  const readmeText = await fetchLimitedText(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${readmePath}`, 9000).catch(() => "");
  if (readmeText.trim()) lines.push(`README excerpt from ${readmePath}:`, readmeText.trim(), "");

  if (files.length) {
    lines.push("Repository text/code file list:", ...files.slice(0, 30).map((file) => `- ${file.path}`), "");
  }

  const includeCode = wantsGitHubCode(question);
  const selectedFiles = files
    .filter((file) => !/readme\.md$/i.test(file.path))
    .slice(0, maxCodeFiles);

  for (const file of selectedFiles) {
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${file.path}`;
    const fileText = await fetchLimitedText(rawUrl, maxFileTextLength).catch(() => "");
    if (!fileText.trim()) continue;
    lines.push(`Source file: ${file.path}`, fileText.trim(), "");
  }

  return {
    context: source.context || "Public GitHub repository",
    title: source.title || source.label || `${owner}/${repo}`,
    type: includeCode ? "public GitHub repository and code" : "public GitHub repository",
    url: source.url,
    text: clampText(lines.join("\n"), maxRepositoryTextLength)
  };
}

async function fetchGitHubSourceText(source = {}) {
  const parsed = parseGitHubSourceUrl(source.url || "");
  if (!parsed) return null;
  if (parsed.type === "profile") return fetchGitHubProfileSource(source, parsed);
  return fetchGitHubRepositorySource(source, parsed);
}

async function readLocalSourceText(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return "";
  }
  const localHosts = new Set(["localhost", "127.0.0.1", "mauriceotieno.com", "www.mauriceotieno.com"]);
  if (!localHosts.has(parsed.hostname.toLowerCase())) return "";
  const pathname = decodeURIComponent(parsed.pathname.replace(/^\/+/, ""));
  if (!pathname || pathname.includes("..")) return "";
  const ext = path.extname(pathname).toLowerCase();
  if (![".txt", ".md", ".json", ".csv", ".log", ".xml", ".js", ".mjs", ".css", ".c", ".h", ".cpp", ".hpp", ".py", ".v", ".sv", ".spice", ".cir", ".net", ".asc", ".sch", ".kicad_sch", ".kicad_pcb"].includes(ext)) return "";
  try {
    return await readFile(resolveInsideRoot(pathname), "utf8");
  } catch {
    return "";
  }
}

async function fetchSourceText(source = {}) {
  const url = String(source.url || "");
  if (!url || !sourceLooksTextual(source) || !sourceUrlAllowed(url)) return null;
  if (/github\.com|raw\.githubusercontent\.com/i.test(url)) {
    const githubText = await fetchGitHubSourceText(source);
    if (githubText?.text?.trim()) return githubText;
  }
  const localText = await readLocalSourceText(url);
  if (localText.trim()) {
    return {
      context: source.context || "",
      title: source.title || source.label || url,
      type: source.type || source.kind || "text source",
      url,
      text: clampText(localText.replace(/\s+\n/g, "\n").trim(), 9000)
    };
  }

  try {
    const response = await fetch(url, {
      headers: { "Accept": "text/plain,text/markdown,text/html,application/json;q=0.8,*/*;q=0.1" }
    });
    if (!response.ok) return null;
    const contentType = response.headers.get("Content-Type") || "";
    if (!/text|json|xml|html|markdown/i.test(contentType)) return null;
    const rawText = clampText(await response.text(), 12000);
    const text = /html/i.test(contentType) ? stripHtmlToText(rawText) : rawText;
    if (!text.trim()) return null;
    return {
      context: source.context || "",
      title: source.title || source.label || url,
      type: source.type || source.kind || "public source",
      url,
      text: clampText(text.trim(), 9000)
    };
  } catch {
    return null;
  }
}

async function enrichPortfolioContext(context = {}) {
  const question = String(context.question || "");
  const sources = Array.isArray(context.sourceFetches)
    ? context.sourceFetches.slice(0, 10).map((source) => ({ ...source, question: source.question || question }))
    : [];
  const sourceExcerpts = (await Promise.all(sources.map(fetchSourceText))).filter(Boolean);
  return {
    ...context,
    sourceExcerpts,
    sourceFetchPolicy: "Fetched excerpts are limited to safe text-like same-site, GitHub/raw GitHub, LinkedIn, and public portfolio URLs. GitHub repository links can be expanded into repository metadata, README text, and selected public source files when a question asks for code. PDFs/images are represented by captions, metadata, filenames, and companion text files when available."
  };
}

function cleanConversationHistory(value) {
  if (!Array.isArray(value)) return [];
  return value
    .slice(-8)
    .map((item) => ({
      role: item?.role === "assistant" ? "assistant" : "user",
      content: clampText(item?.content, 1400).trim()
    }))
    .filter((item) => item.content);
}

function extractOpenAiText(data) {
  if (typeof data?.output_text === "string" && data.output_text.trim()) return data.output_text.trim();
  const output = Array.isArray(data?.output) ? data.output : [];
  const chunks = [];

  output.forEach((item) => {
    (item.content || []).forEach((content) => {
      if (typeof content.text === "string" && content.text.trim()) chunks.push(content.text.trim());
    });
  });

  return chunks.join("\n\n").trim();
}

function ruleBasedConversationAnswer(question = "") {
  const clean = String(question || "").toLowerCase();
  if (/\b(thanks|thank you|appreciate it)\b/.test(clean)) {
    return "You're welcome. I can keep helping with Maurice's portfolio, project evidence, resume links, or related electronics and embedded-systems questions.";
  }

  if (/\b(who are you|what are you)\b/.test(clean)) {
    return "I am Maurice Otieno's portfolio assistant. I can help visitors explore his engineering work, explain project details, summarize portfolio evidence, and answer related electronics, embedded, analog, digital, FPGA, ASIC, PCB, and firmware questions.";
  }

  return "Hi. I can help you explore Maurice Otieno's portfolio, explain his projects, summarize project evidence, open relevant sections, or answer related electronics and embedded-systems questions. You can ask about a specific project, a tool like KiCad or STM32CubeIDE, or a general topic such as embedded systems, op amps, FPGA design, ASICs, or PCB testing.";
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

function publishAccessError(message, details = "", extra = {}) {
  const error = new Error(message);
  error.code = "PUBLISH_AUTHORIZATION_REQUIRED";
  error.details = details || publishAuthorizationHelp;
  error.publishAccess = {
    authorizationRequired: true,
    help: publishAuthorizationHelp,
    ...extra
  };
  return error;
}

function gitFailureText(error) {
  return [
    error?.stderr,
    error?.stdout,
    error?.message
  ].filter(Boolean).join("\n").trim();
}

function remoteUrlForDisplay(remoteUrl = "") {
  return String(remoteUrl || "")
    .replace(/^https:\/\/([^:@/]+):[^@/]+@/i, "https://$1:***@")
    .replace(/^https:\/\/[^@/]+@/i, "https://");
}

function parseGitHubRemote(remoteUrl = "") {
  const trimmed = String(remoteUrl || "").trim();
  const sshMatch = trimmed.match(/^git@github\.com:([^/]+)\/(.+?)(?:\.git)?$/i);
  if (sshMatch) return { owner: sshMatch[1], repo: sshMatch[2].replace(/\.git$/i, "") };

  try {
    const parsed = new URL(trimmed.replace(/^git\+/, ""));
    if (!/github\.com$/i.test(parsed.hostname)) return null;
    const parts = parsed.pathname.replace(/^\/+/, "").split("/");
    if (parts.length < 2) return null;
    return { owner: parts[0], repo: parts[1].replace(/\.git$/i, "") };
  } catch {
    return null;
  }
}

function validatePublishRemoteUrl(value = "") {
  const remoteUrl = String(value || "").trim();
  if (!remoteUrl) return "";
  if (/^git@github\.com:[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+(?:\.git)?$/i.test(remoteUrl)) return remoteUrl;
  try {
    const parsed = new URL(remoteUrl);
    if (parsed.protocol !== "https:" || parsed.hostname.toLowerCase() !== "github.com") {
      throw new Error("Only GitHub HTTPS repository URLs are supported by the guided setup.");
    }
    const parts = parsed.pathname.replace(/^\/+/, "").split("/");
    if (parts.length < 2 || !parts[0] || !parts[1]) {
      throw new Error("GitHub repository URL must include owner and repository name.");
    }
    return `https://github.com/${parts[0]}/${parts[1].replace(/\.git$/i, "")}.git`;
  } catch (error) {
    if (error.message?.includes("Only GitHub") || error.message?.includes("owner")) throw error;
    throw new Error("Enter a GitHub repository URL such as https://github.com/USERNAME/USERNAME.github.io.git.");
  }
}

function validateCustomDomain(value = "") {
  const domain = String(value || "").trim().toLowerCase();
  if (!domain) return "";
  if (!/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i.test(domain)) {
    throw new Error("Custom domain must look like example.com or portfolio.example.com.");
  }
  return domain;
}

async function workspaceHasCompatibleSiteFiles() {
  for (const fileName of ["index.html", "styles.css", "script.js"]) {
    try {
      await readFile(resolveInsideRoot(fileName));
    } catch {
      return false;
    }
  }
  return true;
}

async function getPublishTargetInfo() {
  const info = {
    workspace: root,
    defaultRepository: defaultSiteRepository,
    gitBacked: false,
    compatible: await workspaceHasCompatibleSiteFiles(),
    remote: "",
    branch: "",
    repository: "",
    customDomain: ""
  };

  try {
    info.gitBacked = (await runGit(["rev-parse", "--is-inside-work-tree"])).stdout.trim() === "true";
  } catch {
    return info;
  }

  try {
    info.remote = remoteUrlForDisplay((await runGit(["remote", "get-url", "origin"])).stdout.trim());
  } catch {
    info.remote = "";
  }

  try {
    info.branch = (await runGit(["branch", "--show-current"])).stdout.trim();
  } catch {
    info.branch = "";
  }

  const parsedRemote = parseGitHubRemote(info.remote);
  info.repository = parsedRemote ? `${parsedRemote.owner}/${parsedRemote.repo}` : info.remote;

  try {
    info.customDomain = (await readFile(resolveInsideRoot("CNAME"), "utf8")).trim();
  } catch {
    info.customDomain = "";
  }

  return info;
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

async function runGitWithInput(args, input) {
  let lastError = null;
  for (const candidate of gitCandidates) {
    try {
      return await new Promise((resolve, reject) => {
        const child = spawn(candidate, args, {
          cwd: root,
          windowsHide: true,
          stdio: ["pipe", "pipe", "pipe"]
        });
        let stdout = "";
        let stderr = "";

        child.stdout.on("data", (chunk) => {
          stdout += chunk.toString();
        });
        child.stderr.on("data", (chunk) => {
          stderr += chunk.toString();
        });
        child.once("error", reject);
        child.once("close", (code) => {
          if (code === 0) {
            resolve({ stdout, stderr, git: candidate });
            return;
          }
          const error = new Error(stderr || stdout || `Git exited with code ${code}.`);
          error.stdout = stdout;
          error.stderr = stderr;
          error.code = code;
          error.git = candidate;
          reject(error);
        });

        child.stdin.end(input);
      });
    } catch (error) {
      lastError = error;
      if (error.code === "ENOENT") continue;
      throw error;
    }
  }
  throw lastError || new Error("Git executable was not found.");
}

async function storeGitCredentials(remoteUrl, username, password) {
  const cleanUsername = String(username || "").trim();
  const cleanPassword = String(password || "");
  if (!cleanUsername && !cleanPassword) return { stored: false };
  if (!cleanUsername || !cleanPassword) {
    throw new Error("Both username and password/token are required when credentials are provided.");
  }

  let parsed = null;
  try {
    parsed = new URL(remoteUrl);
  } catch {
    throw new Error("Username and password/token credentials require a GitHub HTTPS repository URL.");
  }

  if (parsed.protocol !== "https:" || parsed.hostname.toLowerCase() !== "github.com") {
    throw new Error("Username and password/token credentials require a GitHub HTTPS repository URL.");
  }

  const pathName = parsed.pathname.replace(/^\/+/, "");
  await runGit(["config", "--local", "credential.useHttpPath", "true"]);
  const credentialInput = [
    "protocol=https",
    "host=github.com",
    `path=${pathName}`,
    `username=${cleanUsername}`,
    `password=${cleanPassword}`,
    ""
  ].join("\n");
  await runGitWithInput(["credential", "approve"], credentialInput);
  return { stored: true, username: cleanUsername };
}

function validateCredentialPair(username, password) {
  const cleanUsername = String(username || "").trim();
  const cleanPassword = String(password || "");
  if ((cleanUsername && !cleanPassword) || (!cleanUsername && cleanPassword)) {
    throw new Error("Both username and password/token are required when credentials are provided.");
  }
  return { cleanUsername, cleanPassword };
}

async function ensureGitRepository() {
  try {
    const insideWorkTree = (await runGit(["rev-parse", "--is-inside-work-tree"])).stdout.trim();
    if (insideWorkTree === "true") return;
  } catch {
    await runGit(["init"]);
  }

  const branch = (await runGit(["branch", "--show-current"])).stdout.trim();
  if (!branch) {
    await runGit(["checkout", "-B", "main"]);
  }
}

async function configurePublishTarget(options = {}) {
  const {
    repositoryUrl = "",
    customDomain = "",
    authUsername = "",
    authPassword = ""
  } = options;
  const customDomainProvided = Object.prototype.hasOwnProperty.call(options, "customDomain");
  const remoteUrl = validatePublishRemoteUrl(repositoryUrl);
  const domain = validateCustomDomain(customDomain);
  validateCredentialPair(authUsername, authPassword);

  await ensureGitRepository();

  if (remoteUrl) {
    try {
      await runGit(["remote", "set-url", "origin", remoteUrl]);
    } catch {
      await runGit(["remote", "add", "origin", remoteUrl]);
    }
  }

  if (customDomainProvided && domain) {
    await writeFile(resolveInsideRoot("CNAME"), `${domain}\n`, "utf8");
  } else if (customDomainProvided && !domain) {
    await rm(resolveInsideRoot("CNAME"), { force: true });
  }

  const currentRemote = remoteUrl || (await getPublishTargetInfo()).remote;
  const credentials = await storeGitCredentials(currentRemote, authUsername, authPassword);
  const target = await getPublishTargetInfo();
  return {
    ...target,
    credentialsStored: credentials.stored,
    credentialUsername: credentials.username || ""
  };
}

async function assertPublishAccess() {
  let insideWorkTree = "";
  try {
    insideWorkTree = (await runGit(["rev-parse", "--is-inside-work-tree"])).stdout.trim();
  } catch (error) {
    throw publishAccessError(
      "This workspace is not connected to a Git repository.",
      gitFailureText(error),
      { repository: defaultSiteRepository }
    );
  }

  if (insideWorkTree !== "true") {
    throw publishAccessError(
      "This workspace is local-only and cannot publish yet.",
      "Clone or associate a GitHub Pages/static-site repository before applying to site.",
      { repository: defaultSiteRepository }
    );
  }

  let remote = "";
  let branch = "";
  try {
    remote = (await runGit(["remote", "get-url", "origin"])).stdout.trim();
    branch = (await runGit(["branch", "--show-current"])).stdout.trim();
  } catch (error) {
    throw publishAccessError(
      "A publish remote or branch is missing.",
      gitFailureText(error),
      { repository: defaultSiteRepository }
    );
  }

  if (!remote || !branch) {
    throw publishAccessError(
      "A publish remote or branch is missing.",
      "Set the origin remote and use a named branch before applying to site.",
      { remote: remoteUrlForDisplay(remote), branch }
    );
  }

  if (!await workspaceHasCompatibleSiteFiles()) {
    throw publishAccessError(
      "This repository does not look like a compatible static portfolio website.",
      "The workspace must include index.html, styles.css, and script.js before it can be used as a publish target.",
      { remote: remoteUrlForDisplay(remote), branch }
    );
  }

  const parsedRemote = parseGitHubRemote(remote);
  const repository = parsedRemote ? `${parsedRemote.owner}/${parsedRemote.repo}` : remoteUrlForDisplay(remote);

  try {
    await runGit(["push", "--dry-run", "origin", branch]);
  } catch (error) {
    throw publishAccessError(
      "GitHub authorization is required before this website can be changed.",
      gitFailureText(error),
      { remote: remoteUrlForDisplay(remote), branch, repository }
    );
  }

  return {
    branch,
    remote: remoteUrlForDisplay(remote),
    repository,
    authorizationChecked: true
  };
}

async function publishSiteChanges(publishAccess = null) {
  const access = publishAccess || await assertPublishAccess();
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

  const branch = access.branch || (await runGit(["branch", "--show-current"])).stdout.trim();
  const pushArgs = branch ? ["push", "origin", branch] : ["push"];
  const push = await runGit(pushArgs);

  return {
    ...access,
    branch: branch || "current branch",
    committed: hasChanges,
    commitOutput: commit?.stdout || commit?.stderr || "",
    pushed: true,
    pushOutput: push.stdout || push.stderr || ""
  };
}

async function handlePortfolioAi(request, response) {
  const body = await readRequestJson(request);
  const question = clampText(body.question, 1200).trim();
  const conversation = cleanConversationHistory(body.conversation);
  const validIntents = new Set(["general_conversation", "general_engineering", "general_knowledge", "portfolio_specific"]);
  const intent = validIntents.has(body.intent) ? body.intent : "portfolio_specific";
  const allowWebSearch = body.allowWebSearch === true;

  if (!question) {
    sendJson(response, 400, { error: "Question is required." });
    return;
  }

  const context = await enrichPortfolioContext({ ...(body.context || {}), question });

  const apiKey = process.env.OPENAI_API_KEY || "";
  if (!apiKey) {
    sendJson(response, 503, { error: "OPENAI_API_KEY is not configured for the local backend." });
    return;
  }

  const model = process.env.OPENAI_MODEL || "gpt-5.4";
  const fallbackModel = process.env.OPENAI_FALLBACK_MODEL || "gpt-4.1";
  const webSearchMode = String(process.env.OPENAI_ENABLE_WEB_SEARCH || "auto").toLowerCase();
  const enableWebSearch = webSearchMode === "true" || (webSearchMode !== "false" && allowWebSearch);
  const buildPayload = (selectedModel) => ({
    model: selectedModel,
    input: [
      {
        role: "developer",
        content: [{ type: "input_text", text: portfolioAiInstructions }]
      },
      {
        role: "user",
        content: [{
          type: "input_text",
          text: [
            `Visitor question: ${question}`,
            `Question intent: ${intent}`,
            `Web search allowed for this question: ${enableWebSearch ? "yes" : "no"}`,
            "",
            "Recent conversation JSON:",
            clampText(JSON.stringify(conversation, null, 2), 8000),
            "",
            "Portfolio context JSON:",
            clampText(JSON.stringify(context, null, 2), 18000)
          ].join("\n")
        }]
      }
    ],
    max_output_tokens: Number(process.env.OPENAI_MAX_OUTPUT_TOKENS || 1100),
    reasoning: { effort: process.env.OPENAI_REASONING_EFFORT || "medium" },
    text: { verbosity: process.env.OPENAI_VERBOSITY || "medium" }
  });

  const callModel = async (selectedModel) => {
    const payload = buildPayload(selectedModel);
    if (enableWebSearch) {
      payload.tools = [{ type: "web_search", search_context_size: process.env.OPENAI_WEB_SEARCH_CONTEXT_SIZE || "low" }];
    }

    const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await openAiResponse.json().catch(() => ({}));
    return { data, openAiResponse, selectedModel };
  };

  let { data, openAiResponse, selectedModel } = await callModel(model);
  if (!openAiResponse.ok && !process.env.OPENAI_MODEL && fallbackModel && fallbackModel !== model && [400, 404].includes(openAiResponse.status)) {
    ({ data, openAiResponse, selectedModel } = await callModel(fallbackModel));
  }
  if (!openAiResponse.ok) {
    sendJson(response, openAiResponse.status, {
      error: data?.error?.message || "OpenAI request failed."
    });
    return;
  }

  sendJson(response, 200, {
    answer: extractOpenAiText(data),
    model: selectedModel,
    usedWebSearch: enableWebSearch
  });
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

  if (request.method === "GET" && url.pathname === "/api/publish-target") {
    if (!isLocalRequest(request)) {
      sendJson(response, 403, { error: "Publishing target details are only available from this computer." });
      return true;
    }
    sendJson(response, 200, { ok: true, target: await getPublishTargetInfo() });
    return true;
  }

  if (request.method !== "POST") return false;

  if (!isLocalRequest(request)) {
    sendJson(response, 403, { error: "Write actions are only allowed from this computer." });
    return true;
  }

  if (url.pathname === "/api/portfolio-ai") {
    await handlePortfolioAi(request, response);
    return true;
  }

  if (url.pathname === "/api/publish-target") {
    try {
      const body = await readRequestJson(request);
      const target = await configurePublishTarget(body || {});
      sendJson(response, 200, { ok: true, target });
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message || "Publishing target could not be updated." });
    }
    return true;
  }

  if (url.pathname === "/api/save-draft" || url.pathname === "/api/apply-catalog") {
    const body = await readRequestJson(request);
    const catalog = body.catalog;

    if (!catalog || !Array.isArray(catalog.categories) || !Array.isArray(catalog.projects) || !catalog.categories.length) {
      sendJson(response, 400, { error: "Catalog must include categories and projects arrays." });
      return true;
    }

    const applyingToSite = url.pathname === "/api/apply-catalog";
    let publishAccess = null;
    if (applyingToSite) {
      try {
        publishAccess = await assertPublishAccess();
      } catch (error) {
        sendJson(response, 200, {
          ok: false,
          file: path.relative(root, catalogPath),
          publish: {
            pushed: false,
            authorizationRequired: true,
            error: error.message || "Publishing authorization failed.",
            details: error.details || publishAuthorizationHelp,
            ...(error.publishAccess || {})
          }
        });
        return true;
      }
    }

    const target = applyingToSite ? catalogPath : draftPath;
    await writeFile(target, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
    if (applyingToSite) {
      try {
        const publish = await publishSiteChanges(publishAccess);
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
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store, no-cache, must-revalidate"
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
