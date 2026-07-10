# main.cjs

Electron main process: creates the desktop window, starts the local backend, handles menus, update handoff, and application lifecycle.

## Quick Facts

- Lines: 453
- Size: 15,134 bytes
- Talks to: builder frontend, local backend, public website runtime, portfolio catalog, Cloudflare/AI layer, GitHub/release layer
- API endpoints mentioned: 0
- Named functions discovered: 21

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Imports Or Requires

- Line 3: `const fs = require("node:fs");`
- Line 4: `const fsp = require("node:fs/promises");`
- Line 5: `const net = require("node:net");`
- Line 6: `const path = require("node:path");`

## Functions

### `dispatchBuilderMenuAction` line 61

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `function dispatchBuilderMenuAction(action) {`

### `quitForBuilderUpdate` line 70

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `function quitForBuilderUpdate() {`

### `setBuilderFullScreen` line 96

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `function setBuilderFullScreen(nextState = null) {`

### `createAppMenu` line 105

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function createAppMenu(origin) {`

### `fileExists` line 178

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `function fileExists(filePath) {`

### `copyFileIfAvailable` line 187

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `async function copyFileIfAvailable(source, target, overwrite = false) {`

### `copyDirectoryMissingFiles` line 194

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `async function copyDirectoryMissingFiles(source, target) {`

### `copyDirectoryRefresh` line 209

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `async function copyDirectoryRefresh(source, target) {`

### `directoryIsEmpty` line 216

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `async function directoryIsEmpty(directory) {`

### `runGit` line 225

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function runGit(args, cwd) {`

### `workspaceLooksUsable` line 244

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `function workspaceLooksUsable(workspaceRoot) {`

### `workspaceIsGitBacked` line 249

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function workspaceIsGitBacked(workspaceRoot) {`

### `findRepositoryNearExecutable` line 253

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `function findRepositoryNearExecutable() {`

### `cloneWorkspaceIfPossible` line 264

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `async function cloneWorkspaceIfPossible(workspaceRoot) {`

### `preparePackagedWorkspace` line 277

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `async function preparePackagedWorkspace() {`

### `resolveWorkspaceRoots` line 314

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `async function resolveWorkspaceRoots() {`

### `findFreePort` line 339

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `function findFreePort() {`

### `startBuilderServer` line 351

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `async function startBuilderServer(workspaceRoot, portfolioRoot) {`

### `createWindow` line 366

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function createWindow(workspaceRoot, origin) {`

### `refreshFullscreenMenu` line 388

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `const refreshFullscreenMenu = () => {`

### `boot` line 425

Part of Electron desktop startup, window control, workspace setup, menu behavior, or update handoff.

Signature or declaration: `async function boot() {`

## Important Constants And Variables

- Line 3: `fs` from `const fs = require("node:fs");`
- Line 4: `fsp` from `const fsp = require("node:fs/promises");`
- Line 5: `net` from `const net = require("node:net");`
- Line 6: `path` from `const path = require("node:path");`
- Line 10: `mainWindow` from `let mainWindow = null;`
- Line 11: `builderOrigin` from `let builderOrigin = "";`
- Line 12: `updateShutdownStarted` from `let updateShutdownStarted = false;`
- Line 13: `execFileAsync` from `const execFileAsync = promisify(execFile);`
- Line 14: `defaultRepositoryUrl` from `const defaultRepositoryUrl = process.env.OMB_BUILDER_REPOSITORY || "";`
- Line 15: `defaultWorkspaceHomeName` from `const defaultWorkspaceHomeName = "OMB Portfolio Builder";`
- Line 17: `rootFilesToRefresh` from `const rootFilesToRefresh = [`
- Line 30: `rootFilesToSeed` from `const rootFilesToSeed = [`
- Line 38: `directoryRefreshes` from `const directoryRefreshes = ["cloudflare"];`
- Line 39: `directorySeeds` from `const directorySeeds = ["assets", "Backgrounds", "docs", ".well-known"];`
- Line 40: `portfolioFilesToSeed` from `const portfolioFilesToSeed = [`
- Line 51: `portfolioDirectoriesToSeed` from `const portfolioDirectoriesToSeed = ["assets", "Backgrounds", "docs", ".well-known"];`
- Line 52: `gitCandidates` from `const gitCandidates = [`
- Line 63: `payload` from `const payload = JSON.stringify(action);`
- Line 98: `shouldFullscreen` from `const shouldFullscreen = typeof nextState === "boolean" ? nextState : !mainWindow.isFullScreen();`
- Line 197: `entries` from `const entries = await fsp.readdir(source, { withFileTypes: true });`
- Line 199: `sourcePath` from `const sourcePath = path.join(source, entry.name);`
- Line 200: `targetPath` from `const targetPath = path.join(target, entry.name);`
- Line 218: `entries` from `const entries = await fsp.readdir(directory);`
- Line 226: `lastError` from `let lastError = null;`
- Line 254: `current` from `let current = path.dirname(process.execPath);`
- Line 257: `next` from `const next = path.dirname(current);`
- Line 278: `bundledSiteRoot` from `const bundledSiteRoot = path.join(process.resourcesPath, "site");`
- Line 279: `defaultWorkspaceHome` from `const defaultWorkspaceHome = process.platform === "win32" && process.env.LOCALAPPDATA`
- Line 282: `workspaceHome` from `const workspaceHome = process.env.OMB_WORKSPACE_HOME || defaultWorkspaceHome;`
- Line 283: `workspaceRoot` from `const workspaceRoot = path.join(workspaceHome, "builder");`
- Line 284: `portfolioRoot` from `const portfolioRoot = process.env.OMB_PORTFOLIO_WORKSPACE || path.join(workspaceHome, "portfolio");`
- Line 315: `envWorkspace` from `const envWorkspace = process.env.OMB_BUILDER_WORKSPACE;`
- Line 323: `workspaceRoot` from `const workspaceRoot = path.resolve(__dirname);`
- Line 329: `nearbyRepository` from `const nearbyRepository = findRepositoryNearExecutable();`
- Line 341: `tester` from `const tester = net.createServer();`
- Line 344: `address` from `const address = tester.address();`
- Line 345: `port` from `const port = typeof address === "object" && address ? address.port : 0;`
- Line 352: `port` from `const port = await findFreePort();`
- Line 361: `serverPath` from `const serverPath = path.join(workspaceRoot, "server.mjs");`
- Line 367: `iconPath` from `const iconPath = path.join(workspaceRoot, "assets", "omb-app-icon-256.png");`
- Line 388: `refreshFullscreenMenu` from `const refreshFullscreenMenu = () => {`
- Line 426: `gotLock` from `const gotLock = app.requestSingleInstanceLock();`

## Representative Opening Snippet

```
const { app, BrowserWindow, Menu, dialog, nativeTheme, shell } = require("electron");
const { execFile } = require("node:child_process");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const net = require("node:net");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { promisify } = require("node:util");

let mainWindow = null;
let builderOrigin = "";
let updateShutdownStarted = false;
const execFileAsync = promisify(execFile);
const defaultRepositoryUrl = process.env.OMB_BUILDER_REPOSITORY || "";
const defaultWorkspaceHomeName = "OMB Portfolio Builder";

const rootFilesToRefresh = [
  "server.mjs",
  "index.html",
  "styles.css",
  "script.js",
  "electronics-search.js",
  "builder-rich-future-sections.js",
  "template-preview.html",
  "template-preview.css",
  "template-preview.js",
  "_headers"
];

const rootFilesToSeed = [
  "projects.json",
  "project-templates.json",
  "README.md",
  ".nojekyll",
  "robots.txt"
];
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?