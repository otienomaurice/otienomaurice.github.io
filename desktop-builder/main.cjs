const { app, BrowserWindow, dialog, shell } = require("electron");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const net = require("node:net");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

let mainWindow = null;
let builderOrigin = "";

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

async function preparePackagedWorkspace() {
  const bundledSiteRoot = path.join(process.resourcesPath, "site");
  const workspaceRoot = path.join(app.getPath("userData"), "workspace");

  await fsp.mkdir(workspaceRoot, { recursive: true });

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
  if (envWorkspace && fileExists(path.join(envWorkspace, "server.mjs"))) return envWorkspace;
  if (!app.isPackaged) return path.resolve(__dirname, "..");
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
