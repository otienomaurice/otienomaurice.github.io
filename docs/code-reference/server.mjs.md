# server.mjs

Local backend server used by the builder for drafts, parsing, publishing, compiler execution, authentication checks, and file operations.

## Quick Facts

- Lines: 3,632
- Size: 146,677 bytes
- Talks to: public website runtime, portfolio catalog, Cloudflare/AI layer, GitHub/release layer
- API endpoints mentioned: 21
- Named functions discovered: 141

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Imports Or Requires

- Line 1: `import { createServer } from "node:http";`
- Line 2: `import { execFile, spawn } from "node:child_process";`
- Line 3: `import { createHash } from "node:crypto";`
- Line 4: `import { access as fsAccess, chmod, cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";`
- Line 5: `import os from "node:os";`
- Line 6: `import path from "node:path";`
- Line 7: `import { promisify } from "node:util";`
- Line 8: `import { fileURLToPath } from "node:url";`

## API Endpoints Mentioned

- Line 3343: `/api/catalog` - Loads project/catalog data for the builder.
- Line 3353: `/api/templates` - Loads appearance template definitions.
- Line 3358: `/api/publish-target` - Reads or writes the Git publishing target and authorization state.
- Line 3367: `/api/system-check` - Checks local tool/system readiness.
- Line 3372: `/api/app-update` - Checks or starts builder app update behavior.
- Line 3377: `/api/security-report` - Returns security/download/auth reporting for the builder.
- Line 3386: `/api/code/tools` - Checks compiler/runtime availability.
- Line 3402: `/api/portfolio-ai` - Handles AI assistant questions.
- Line 3407: `/api/code/beautify` - Formats source code for cleaner display and editing.
- Line 3422: `/api/code/save` - Saves source code into the local compile workspace.
- Line 3433: `/api/code/compile` - Compiles or runs a source file and returns terminal output.
- Line 3444: `/api/code/install-tools` - Attempts to install missing compiler tools.
- Line 3455: `/api/publish-target` - Reads or writes the Git publishing target and authorization state.
- Line 3465: `/api/install-git` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.
- Line 3479: `/api/app-update/install` - Checks or starts builder app update behavior.
- Line 3493: `/api/github-authenticate` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.
- Line 3510: `/api/sync-from-publish-target` - Reads or writes the Git publishing target and authorization state.
- Line 3525: `/api/save-draft` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.
- Line 3525: `/api/apply-catalog` - Loads project/catalog data for the builder.
- Line 3534: `/api/apply-catalog` - Loads project/catalog data for the builder.
- Line 3577: `/api/upload` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.

## Functions

### `securityHeaders` line 218

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function securityHeaders(extra = {}) {`

### `sendJson` line 228

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function sendJson(response, status, data) {`

### `clampText` line 237

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function clampText(value, maxLength = 12000) {`

### `stripHtmlToText` line 241

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function stripHtmlToText(value = "") {`

### `normalizeCodeLanguage` line 256

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCodeLanguage(value = "") {`

### `sourceLooksCpp` line 282

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function sourceLooksCpp(source = "") {`

### `sourceLooksC` line 288

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function sourceLooksC(source = "") {`

### `languageFromFileName` line 294

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function languageFromFileName(fileName = "", code = "") {`

### `detectCodeLanguageFromSource` line 304

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function detectCodeLanguageFromSource(code = "", fileName = "") {`

### `safeCodeFileName` line 321

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function safeCodeFileName(value = "", language = "javascript") {`

### `indentBraceCode` line 331

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function indentBraceCode(code = "") {`

### `beautifyCode` line 350

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function beautifyCode(code = "", language = "javascript") {`

### `findExecutableUnder` line 374

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function findExecutableUnder(folder, names = [], maxDepth = 5) {`

### `findTool` line 394

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function findTool(toolName) {`

### `terminalLine` line 439

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function terminalLine(label, text = "") {`

### `processTerminalText` line 443

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function processTerminalText(result = {}) {`

### `pathVariantsForReplacement` line 453

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function pathVariantsForReplacement(value = "") {`

### `replacePathReferences` line 463

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function replacePathReferences(text = "", replacements = []) {`

### `processTerminalTextWithPaths` line 476

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function processTerminalTextWithPaths(result = {}, replacements = []) {`

### `cFamilyCompileProfile` line 480

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function cFamilyCompileProfile(language = "c", fileName = "main.c") {`

### `cFamilyBinaryName` line 503

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function cFamilyBinaryName(fileName = "program") {`

### `toolVersionLine` line 508

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function toolVersionLine(toolPath = "") {`

### `cFamilyRunOutput` line 523

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function cFamilyRunOutput(result = {}) {`

### `cleanHdlSimulationOutput` line 532

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function cleanHdlSimulationOutput(result = {}) {`

### `runProcess` line 559

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function runProcess(command, args = [], options = {}) {`

### `compileToolStatus` line 601

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `async function compileToolStatus() {`

### `isHdlLanguage` line 622

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function isHdlLanguage(language = "") {`

### `inferCompileFileRole` line 626

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function inferCompileFileRole(fileName = "", code = "", language = "") {`

### `normalizeCompileFileRole` line 635

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function normalizeCompileFileRole(value = "", language = "") {`

### `saveCompileSource` line 641

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function saveCompileSource({ projectId, fileId, title, fileName, language, role = "", code, stdin = "" }) {`

### `javaMainClassName` line 664

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function javaMainClassName(code = "", fileName = "Main.java") {`

### `compileCacheKey` line 672

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileCacheKey(parts = {}) {`

### `compileCacheDirectory` line 679

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileCacheDirectory(projectId, language, key) {`

### `cachedBuildLine` line 683

Reads, writes, or validates cached state.

Signature or declaration: `function cachedBuildLine(type, outputPath) {`

### `hdlModuleNames` line 687

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function hdlModuleNames(code = "") {`

### `hdlHasWaveDump` line 691

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function hdlHasWaveDump(code = "") {`

### `hdlFilesFromPayload` line 696

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function hdlFilesFromPayload(payload = {}, activeFileName = "", activeLanguage = "verilog") {`

### `compileActionFromPayload` line 729

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileActionFromPayload(value = "", language = "") {`

### `compileActionLabel` line 735

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileActionLabel(action = "run", language = "") {`

### `compileWorkspaceFilesFromPayload` line 742

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileWorkspaceFilesFromPayload(payload = {}, activeFileName = "", activeLanguage = "javascript") {`

### `writeCompileWorkspaceSources` line 772

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function writeCompileWorkspaceSources(files = [], targetDir = "", options = {}) {`

### `sourceDisplayName` line 790

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function sourceDisplayName(file = {}) {`

### `cFamilyWorkspaceSources` line 794

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function cFamilyWorkspaceSources(files = [], language = "c", activeFileName = "") {`

### `writeHdlSimulationSources` line 805

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function writeHdlSimulationSources(files = [], cacheDir = "") {`

### `findFilesByExtension` line 823

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function findFilesByExtension(folder = "", extension = ".vcd", maxDepth = 3) {`

### `normalizeVcdValue` line 838

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeVcdValue(raw = "") {`

### `parseVcdScopeText` line 846

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function parseVcdScopeText(text = "", source = "waveform.vcd") {`

### `readHdlWaveform` line 935

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function readHdlWaveform(cacheDir = "") {`

### `clearHdlWaveforms` line 944

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function clearHdlWaveforms(cacheDir = "") {`

### `compileAndRunCode` line 949

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `async function compileAndRunCode(payload = {}) {`

### `append` line 996

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `const append = (label, result) => {`

### `missing` line 999

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `const missing = async (tools) => {`

### `installCompilerTools` line 1321

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `async function installCompilerTools(language = "") {`

### `sourceLooksTextual` line 1354

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function sourceLooksTextual(source = {}) {`

### `sourceUrlAllowed` line 1362

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function sourceUrlAllowed(url) {`

### `gitHubHeaders` line 1384

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function gitHubHeaders(accept = "application/vnd.github+json") {`

### `parseGitHubSourceUrl` line 1391

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function parseGitHubSourceUrl(url) {`

### `fetchGitHubJson` line 1420

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function fetchGitHubJson(url) {`

### `fetchLimitedText` line 1426

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function fetchLimitedText(url, maxLength = 12000) {`

### `githubQuestionTokens` line 1436

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function githubQuestionTokens(question = "") {`

### `scoreGitHubFile` line 1444

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function scoreGitHubFile(filePath = "", question = "") {`

### `wantsGitHubCode` line 1457

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function wantsGitHubCode(question = "") {`

### `scoreGitHubRepo` line 1461

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function scoreGitHubRepo(repo = {}, question = "") {`

### `fetchGitHubProfileSource` line 1483

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function fetchGitHubProfileSource(source = {}, parsed = {}) {`

### `fetchGitHubRepositorySource` line 1545

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function fetchGitHubRepositorySource(source = {}, parsed = {}) {`

### `fetchGitHubSourceText` line 1614

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function fetchGitHubSourceText(source = {}) {`

### `readLocalSourceText` line 1621

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function readLocalSourceText(url) {`

### `fetchSourceText` line 1641

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function fetchSourceText(source = {}) {`

### `enrichPortfolioContext` line 1681

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function enrichPortfolioContext(context = {}) {`

### `cleanConversationHistory` line 1694

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function cleanConversationHistory(value) {`

### `extractOpenAiText` line 1705

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function extractOpenAiText(data) {`

### `extractOllamaText` line 1719

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function extractOllamaText(data = {}) {`

### `callOllamaPortfolioAi` line 1725

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function callOllamaPortfolioAi({ question, intent, conversation, context, allowWebSearch }) {`

### `ruleBasedConversationAnswer` line 1775

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function ruleBasedConversationAnswer(question = "") {`

### `isLocalRequest` line 1788

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function isLocalRequest(request) {`

### `readJsonFile` line 1793

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function readJsonFile(filePath) {`

### `readRequestJson` line 1797

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function readRequestJson(request) {`

### `safeSegment` line 1812

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function safeSegment(value, fallback = "item") {`

### `safeFileName` line 1821

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function safeFileName(value) {`

### `resolveInsideRoot` line 1828

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function resolveInsideRoot(...segments) {`

### `resolveInsidePortfolioRoot` line 1836

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function resolveInsidePortfolioRoot(...segments) {`

### `resolveInsideCompileRoot` line 1845

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function resolveInsideCompileRoot(...segments) {`

### `samePath` line 1854

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function samePath(left, right) {`

### `pathExists` line 1858

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function pathExists(filePath) {`

### `publishAccessError` line 1867

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function publishAccessError(message, details = "", extra = {}) {`

### `gitFailureText` line 1879

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function gitFailureText(error) {`

### `remoteUrlForDisplay` line 1887

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function remoteUrlForDisplay(remoteUrl = "") {`

### `parseGitHubRemote` line 1893

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function parseGitHubRemote(remoteUrl = "") {`

### `validatePublishRemoteUrl` line 1909

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function validatePublishRemoteUrl(value = "") {`

### `validateCustomDomain` line 1929

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function validateCustomDomain(value = "") {`

### `compareVersions` line 1938

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function compareVersions(left = "", right = "") {`

### `bumpPublishedAssetVersions` line 1949

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function bumpPublishedAssetVersions(baseRoot = portfolioRoot) {`

### `workspaceHasCompatibleSiteFiles` line 1967

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function workspaceHasCompatibleSiteFiles(baseRoot = portfolioRoot) {`

### `getPublishTargetInfo` line 1978

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function getPublishTargetInfo() {`

### `runGit` line 2046

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function runGit(args, options = {}) {`

### `runPublishGit` line 2066

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function runPublishGit(args, options = {}) {`

### `runOptionalCommand` line 2070

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function runOptionalCommand(command, args = [], options = {}) {`

### `getGitStatus` line 2089

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function getGitStatus() {`

### `publishPathIsStageable` line 2138

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function publishPathIsStageable(relativePath) {`

### `stageablePublishPaths` line 2154

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function stageablePublishPaths(pathsToCheck) {`

### `runGitWithInput` line 2162

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function runGitWithInput(args, input, options = {}) {`

### `storeGitCredentials` line 2206

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function storeGitCredentials(remoteUrl, username, password) {`

### `validateCredentialPair` line 2239

Part of authentication, authorization, or credential checking.

Signature or declaration: `function validateCredentialPair(username, password) {`

### `normalizeGitBranchName` line 2248

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function normalizeGitBranchName(value = "") {`

### `detectRemoteDefaultBranch` line 2266

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function detectRemoteDefaultBranch(remoteUrl = "") {`

### `originRemoteExists` line 2277

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function originRemoteExists() {`

### `setOriginRemote` line 2286

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function setOriginRemote(remoteUrl) {`

### `checkoutPublishBranch` line 2294

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function checkoutPublishBranch(branch) {`

### `verifyPublishWriteAccess` line 2306

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function verifyPublishWriteAccess(access = {}) {`

### `ensurePublishHeadForWriteCheck` line 2325

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function ensurePublishHeadForWriteCheck() {`

### `synchronizePublishBranchFromRemote` line 2344

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function synchronizePublishBranchFromRemote(branch, access = {}) {`

### `capturePublishTargetState` line 2375

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function capturePublishTargetState() {`

### `restorePublishTargetState` line 2405

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function restorePublishTargetState(snapshot = {}) {`

### `writeTargetCustomDomain` line 2431

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function writeTargetCustomDomain(domain, customDomainProvided) {`

### `ensureGitRepository` line 2441

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function ensureGitRepository() {`

### `configurePublishTarget` line 2456

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function configurePublishTarget(options = {}) {`

### `readPublishAuthCache` line 2488

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function readPublishAuthCache() {`

### `writePublishAuthCache` line 2496

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function writePublishAuthCache(access = {}) {`

### `publishAuthCacheScope` line 2537

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function publishAuthCacheScope() {`

### `parsePublishAuthTimestamp` line 2554

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function parsePublishAuthTimestamp(value = "") {`

### `publishAuthCacheExpiresAt` line 2561

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function publishAuthCacheExpiresAt(cache) {`

### `publishAuthCacheIsFresh` line 2569

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function publishAuthCacheIsFresh(cache, access) {`

### `assertPublishAccess` line 2578

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function assertPublishAccess(options = {}) {`

### `syncFromPublishTarget` line 2671

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function syncFromPublishTarget() {`

### `authenticateGitHubForTarget` line 2747

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function authenticateGitHubForTarget(options = {}) {`

### `installGitForWindows` line 2845

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function installGitForWindows() {`

### `getUpdateInfo` line 2870

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function getUpdateInfo() {`

### `installer` line 2881

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `const installer = (release.assets || []).find((asset) => /Setup-.*\.exe$/i.test(asset.name));`

### `portable` line 2882

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `const portable = (release.assets || []).find((asset) => /Portable-.*\.exe$/i.test(asset.name));`

### `getBuilderReleaseDownloadReport` line 2909

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function getBuilderReleaseDownloadReport() {`

### `assets` line 2917

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `const assets = (release.assets || []).map((asset) => ({`

### `getSecurityReport` line 2933

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function getSecurityReport() {`

### `safeUpdateFileSegment` line 2979

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function safeUpdateFileSegment(value = "") {`

### `powershellSingleQuoted` line 2986

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `function powershellSingleQuoted(value = "") {`

### `downloadAndLaunchAppUpdate` line 2990

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `async function downloadAndLaunchAppUpdate() {`

### `syncPortfolioPublishFiles` line 3167

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function syncPortfolioPublishFiles(options = {}) {`

### `publishSiteChanges` line 3202

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function publishSiteChanges(publishAccess = null) {`

### `handlePortfolioAi` line 3240

Handles an event, request, command, or user action.

Signature or declaration: `async function handlePortfolioAi(request, response) {`

### `buildPayload` line 3275

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `const buildPayload = (selectedModel) => ({`

### `callModel` line 3305

Part of the local backend API, filesystem, compiler, Git, AI, update, or publish workflow.

Signature or declaration: `const callModel = async (selectedModel) => {`

### `handleApi` line 3342

Handles an event, request, command, or user action.

Signature or declaration: `async function handleApi(request, response, url) {`

## Important Constants And Variables

- Line 10: `root` from `const root = path.dirname(fileURLToPath(import.meta.url));`
- Line 11: `portfolioRoot` from `const portfolioRoot = path.resolve(process.env.OMB_PORTFOLIO_WORKSPACE || root);`
- Line 12: `compileRoot` from `const compileRoot = path.resolve(process.env.OMB_CODE_WORKSPACE || path.join(path.dirname(root), "compile-code"));`
- Line 13: `port` from `const port = Number(process.env.PORT || 8080);`
- Line 14: `host` from `const host = process.env.HOST || "0.0.0.0";`
- Line 15: `execFileAsync` from `const execFileAsync = promisify(execFile);`
- Line 16: `packageJson` from `const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8").catch(() => "{}"));`
- Line 18: `types` from `const types = {`
- Line 38: `draftPath` from `const draftPath = path.join(root, "projects.local.json");`
- Line 39: `catalogPath` from `const catalogPath = path.join(root, "projects.json");`
- Line 40: `publishAuthCachePath` from `const publishAuthCachePath = path.join(root, ".omb-publish-session.json");`
- Line 41: `publishPaths` from `const publishPaths = [`
- Line 57: `publishAuthCacheTtlMs` from `const publishAuthCacheTtlMs = 24 * 60 * 60 * 1000;`
- Line 58: `publishAuthExtendedTtlMs` from `const publishAuthExtendedTtlMs = 30 * 24 * 60 * 60 * 1000;`
- Line 59: `publishAuthHistoryWindowMs` from `const publishAuthHistoryWindowMs = 7 * 24 * 60 * 60 * 1000;`
- Line 60: `publishAuthExtendedThreshold` from `const publishAuthExtendedThreshold = 3;`
- Line 61: `defaultSiteRepository` from `const defaultSiteRepository = process.env.OMB_BUILDER_REPOSITORY || "";`
- Line 62: `blockedAppUpdateVersions` from `const blockedAppUpdateVersions = new Set(["0.2.16"]);`
- Line 63: `publishAuthorizationHelp` from `const publishAuthorizationHelp = [`
- Line 71: `gitCandidates` from `const gitCandidates = [`
- Line 82: `compileLanguageProfiles` from `const compileLanguageProfiles = {`
- Line 148: `compileToolCandidates` from `const compileToolCandidates = {`
- Line 186: `compileToolCache` from `const compileToolCache = new Map();`
- Line 187: `compileToolVersionCache` from `const compileToolVersionCache = new Map();`
- Line 189: `portfolioAiInstructions` from `const portfolioAiInstructions = [`
- Line 257: `clean` from `const clean = String(value || "").trim().toLowerCase().replace(/[_\s-]+/g, "");`
- Line 258: `aliases` from `const aliases = {`
- Line 283: `text` from `const text = String(source || "");`
- Line 289: `text` from `const text = String(source || "");`
- Line 295: `ext` from `const ext = path.extname(String(fileName || "").toLowerCase());`
- Line 305: `byName` from `const byName = languageFromFileName(fileName, code);`
- Line 307: `source` from `const source = String(code || "");`
- Line 322: `profile` from `const profile = compileLanguageProfiles[normalizeCodeLanguage(language)] || compileLanguageProfiles.javascript;`
- Line 323: `fallback` from `const fallback = profile.defaultFile;`
- Line 324: `parsed` from `const parsed = path.parse(String(value || fallback));`
- Line 325: `safeName` from `const safeName = safeSegment(parsed.name, path.parse(fallback).name);`
- Line 326: `ext` from `let ext = String(parsed.ext || path.extname(fallback)).toLowerCase();`
- Line 332: `depth` from `let depth = 0;`
- Line 337: `line` from `const line = rawLine.trim();`
- Line 340: `formatted` from `const formatted = `${"  ".repeat(depth)}${line}`;`
- Line 341: `opens` from `const opens = (line.match(/[{\[(]/g) || []).length;`
- Line 342: `closes` from `const closes = (line.match(/[}\])]/g) || []).length;`
- Line 351: `normalized` from `const normalized = String(code || "").replace(/\r\n?/g, "\n").replace(/\t/g, "  ");`
- Line 352: `lang` from `const lang = normalizeCodeLanguage(language);`
- Line 376: `entries` from `let entries = [];`
- Line 383: `fullPath` from `const fullPath = path.join(folder, entry.name);`
- Line 388: `found` from `const found = await findExecutableUnder(path.join(folder, entry.name), names, maxDepth - 1);`
- Line 396: `candidates` from `const candidates = (compileToolCandidates[toolName] || [toolName]).filter(Boolean);`
- Line 406: `command` from `const command = process.platform === "win32" ? "where" : "command";`
- Line 407: `args` from `const args = process.platform === "win32" ? [candidate] : ["-v", candidate];`
- Line 408: `result` from `const result = await execFileAsync(command, args, { timeout: 5000, windowsHide: true });`
- Line 409: `found` from `const found = String(result.stdout || "").split(/\r?\n/).map((line) => line.trim()).find(Boolean);`
- Line 420: `found` from `const found = await findExecutableUnder(`
- Line 430: `found` from `const found = await findExecutableUnder("C:\\Program Files\\Eclipse Adoptium", [`${toolName}.exe`], 5);`
- Line 444: `elapsedSeconds` from `const elapsedSeconds = Number.isFinite(result.elapsedMs) ? (result.elapsedMs / 1000).toFixed(2) : "";`
- Line 445: `elapsed` from `const elapsed = elapsedSeconds ? ` in ${elapsedSeconds}s` : "";`
- Line 446: `status` from `const status = result.timedOut`
- Line 449: `output` from `const output = [result.stdout, result.stderr].map((part) => String(part || "").trimEnd()).filter(Boolean).join("\n");`
- Line 454: `clean` from `const clean = String(value || "");`
- Line 464: `output` from `let output = String(text || "");`
- Line 466: `from` from `const from = replacement?.from || "";`
- Line 467: `to` from `const to = replacement?.to || "";`
- Line 481: `isCpp` from `const isCpp = language === "cpp";`
- Line 482: `ext` from `const ext = path.extname(String(fileName || "").toLowerCase());`
- Line 483: `header` from `const header = [".h", ".hpp", ".hh", ".hxx"].includes(ext);`
- Line 504: `parsed` from `const parsed = path.parse(String(fileName || "program"));`
- Line 511: `result` from `const result = await runProcess(toolPath, ["--version"], { timeoutMs: 7000 });`
- Line 512: `version` from `const version = [result.stdout, result.stderr]`
- Line 524: `elapsedSeconds` from `const elapsedSeconds = Number.isFinite(result.elapsedMs) ? (result.elapsedMs / 1000).toFixed(2) : "";`
- Line 525: `status` from `const status = result.timedOut`
- Line 528: `output` from `const output = [result.stdout, result.stderr].map((part) => String(part || "").trimEnd()).filter(Boolean).join("\n");`
- Line 533: `raw` from `const raw = [result.stdout, result.stderr].map((part) => String(part || "").trimEnd()).filter(Boolean).join("\n");`
- Line 534: `lines` from `const lines = raw.split(/\r?\n/).map((line) => line.trimEnd()).filter(Boolean);`
- Line 535: `finishLines` from `const finishLines = [];`
- Line 536: `signalLines` from `const signalLines = [];`
- Line 544: `elapsedSeconds` from `const elapsedSeconds = Number.isFinite(result.elapsedMs) ? (result.elapsedMs / 1000).toFixed(2) : "";`
- Line 545: `status` from `const status = result.timedOut`
- Line 548: `body` from `const body = signalLines.length`
- Line 555: `suffix` from `const suffix = signalLines.length && finishLines.length ? `\n${finishLines.join("\n")}` : "";`
- Line 560: `timeoutMs` from `const timeoutMs = options.timeoutMs || 20000;`

## Representative Opening Snippet

```
import { createServer } from "node:http";
import { execFile, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { access as fsAccess, chmod, cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const portfolioRoot = path.resolve(process.env.OMB_PORTFOLIO_WORKSPACE || root);
const compileRoot = path.resolve(process.env.OMB_CODE_WORKSPACE || path.join(path.dirname(root), "compile-code"));
const port = Number(process.env.PORT || 8080);
const host = process.env.HOST || "0.0.0.0";
const execFileAsync = promisify(execFile);
const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8").catch(() => "{}"));

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
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?