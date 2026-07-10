# template-preview.js

Builder frontend brain: state handling, rich editors, project builder, previews, parser triggers, publishing UI, compile workspace, and guide windows.

## Quick Facts

- Lines: 10,826
- Size: 453,974 bytes
- Talks to: builder frontend, public website runtime, portfolio catalog, Cloudflare/AI layer, GitHub/release layer
- API endpoints mentioned: 13
- Named functions discovered: 570

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## API Endpoints Mentioned

- Line 1637: `/api/save-draft` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.
- Line 5430: `/api/upload` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.
- Line 8413: `/api/upload` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.
- Line 8473: `/api/upload` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.
- Line 8613: `/api/apply-catalog` - Loads project/catalog data for the builder.
- Line 8637: `/api/apply-catalog` - Loads project/catalog data for the builder.
- Line 8647: `/api/apply-catalog` - Loads project/catalog data for the builder.
- Line 8662: `/api/apply-catalog` - Loads project/catalog data for the builder.
- Line 8674: `/api/apply-catalog` - Loads project/catalog data for the builder.
- Line 8685: `/api/save-draft` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.
- Line 10770: `/api/save-draft` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.
- Line 10772: `/api/apply-catalog` - Loads project/catalog data for the builder.
- Line 10796: `/api/save-draft` - Project-specific local API endpoint. Inspect server.mjs and the fetch caller for exact behavior.

## Functions

### `isHdlLanguage` line 240

Part of the private builder frontend and editing experience.

Signature or declaration: `function isHdlLanguage(language = "") {`

### `inferCompileFileRole` line 244

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function inferCompileFileRole(fileName = "", code = "", language = "") {`

### `normalizeCompileFileRole` line 253

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function normalizeCompileFileRole(value = "", language = "") {`

### `compileFileRoleLabel` line 259

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileFileRoleLabel(role = "source") {`

### `setStatus` line 509

Part of the private builder frontend and editing experience.

Signature or declaration: `function setStatus(message) {`

### `setSaveState` line 513

Part of the private builder frontend and editing experience.

Signature or declaration: `function setSaveState(state, message) {`

### `projectSearchText` line 519

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectSearchText(value = "") {`

### `regexEscape` line 523

Part of the private builder frontend and editing experience.

Signature or declaration: `function regexEscape(value = "") {`

### `highlightSearchText` line 527

Part of the private builder frontend and editing experience.

Signature or declaration: `function highlightSearchText(value = "", query = "") {`

### `projectSearchHaystack` line 535

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectSearchHaystack(project = {}, category = {}) {`

### `projectMatchesSearch` line 557

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectMatchesSearch(project, category, query) {`

### `updateProjectSearchStatus` line 563

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateProjectSearchStatus(matchCount = catalog.projects.length) {`

### `updateBuilderWorkflow` line 577

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateBuilderWorkflow() {`

### `savedCount` line 580

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `const savedCount = (catalog.projects || []).filter((projectItem) => savedIds.has(projectItem.id)).length;`

### `dialogDragHandles` line 599

Part of the private builder frontend and editing experience.

Signature or declaration: `function dialogDragHandles(dialog) {`

### `dialogWindowActionTarget` line 606

Part of the private builder frontend and editing experience.

Signature or declaration: `function dialogWindowActionTarget(handle) {`

### `updateDialogWindowButtons` line 610

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateDialogWindowButtons(dialog) {`

### `dialogTitleForDock` line 637

Part of the private builder frontend and editing experience.

Signature or declaration: `function dialogTitleForDock(dialog) {`

### `makeDialogControl` line 641

Part of the private builder frontend and editing experience.

Signature or declaration: `function makeDialogControl(action, label, title) {`

### `ensureDialogLeftControls` line 652

Part of the private builder frontend and editing experience.

Signature or declaration: `function ensureDialogLeftControls(dialog, handle) {`

### `ensureDialogWindowControls` line 676

Part of the private builder frontend and editing experience.

Signature or declaration: `function ensureDialogWindowControls(dialog, handle) {`

### `ensureDialogResizeHandles` line 722

Part of the private builder frontend and editing experience.

Signature or declaration: `function ensureDialogResizeHandles(dialog) {`

### `markDialogDragHandles` line 733

Part of the private builder frontend and editing experience.

Signature or declaration: `function markDialogDragHandles(dialog) {`

### `draggableDialogFromEvent` line 742

Part of the private builder frontend and editing experience.

Signature or declaration: `function draggableDialogFromEvent(event) {`

### `clampDialogPosition` line 753

Part of the private builder frontend and editing experience.

Signature or declaration: `function clampDialogPosition(left, top, dialog) {`

### `anchorDialogForDrag` line 764

Part of the private builder frontend and editing experience.

Signature or declaration: `function anchorDialogForDrag(dialog) {`

### `saveDialogRestoreState` line 775

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `function saveDialogRestoreState(dialog) {`

### `restoreDialogWindowState` line 790

Part of the private builder frontend and editing experience.

Signature or declaration: `function restoreDialogWindowState(dialog) {`

### `anchorDialogForResize` line 807

Part of the private builder frontend and editing experience.

Signature or declaration: `function anchorDialogForResize(dialog) {`

### `resizeDialogBounds` line 816

Part of the private builder frontend and editing experience.

Signature or declaration: `function resizeDialogBounds(state, event) {`

### `beginDialogResize` line 845

Part of the private builder frontend and editing experience.

Signature or declaration: `function beginDialogResize(event) {`

### `moveDialogResize` line 865

Part of the private builder frontend and editing experience.

Signature or declaration: `function moveDialogResize(event) {`

### `endDialogResize` line 874

Part of the private builder frontend and editing experience.

Signature or declaration: `function endDialogResize() {`

### `beginDialogDrag` line 881

Part of the private builder frontend and editing experience.

Signature or declaration: `function beginDialogDrag(event) {`

### `moveDialogDrag` line 899

Part of the private builder frontend and editing experience.

Signature or declaration: `function moveDialogDrag(event) {`

### `endDialogDrag` line 910

Part of the private builder frontend and editing experience.

Signature or declaration: `function endDialogDrag() {`

### `toggleDialogMinimized` line 917

Part of the private builder frontend and editing experience.

Signature or declaration: `function toggleDialogMinimized(dialog) {`

### `toggleDialogMaximized` line 929

Part of the private builder frontend and editing experience.

Signature or declaration: `function toggleDialogMaximized(dialog) {`

### `toggleDialogHidden` line 951

Part of the private builder frontend and editing experience.

Signature or declaration: `function toggleDialogHidden(dialog) {`

### `dialogCanStepBack` line 972

Part of the private builder frontend and editing experience.

Signature or declaration: `function dialogCanStepBack(dialog) {`

### `dialogCanStepForward` line 978

Part of the private builder frontend and editing experience.

Signature or declaration: `function dialogCanStepForward(dialog) {`

### `renderProjectWindowSectionFromHistory` line 984

Renders UI, markup, or display output.

Signature or declaration: `function renderProjectWindowSectionFromHistory(sectionId) {`

### `stepProjectWindowBack` line 992

Part of the private builder frontend and editing experience.

Signature or declaration: `function stepProjectWindowBack() {`

### `stepProjectWindowForward` line 998

Part of the private builder frontend and editing experience.

Signature or declaration: `function stepProjectWindowForward() {`

### `refreshDialogWindow` line 1004

Part of the private builder frontend and editing experience.

Signature or declaration: `function refreshDialogWindow(dialog) {`

### `closeDialogFromControl` line 1017

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function closeDialogFromControl(dialog, button) {`

### `handleDialogWindowAction` line 1027

Handles an event, request, command, or user action.

Signature or declaration: `function handleDialogWindowAction(button) {`

### `enableDraggableDialogs` line 1046

Part of the private builder frontend and editing experience.

Signature or declaration: `function enableDraggableDialogs() {`

### `markDraftNeedsSave` line 1086

Part of the private builder frontend and editing experience.

Signature or declaration: `function markDraftNeedsSave() {`

### `showBuilderError` line 1091

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function showBuilderError(title, message, details = "") {`

### `appUpdateWasSnoozed` line 1105

Part of the private builder frontend and editing experience.

Signature or declaration: `function appUpdateWasSnoozed(version = "") {`

### `shouldShowUpdateDialog` line 1112

Part of the private builder frontend and editing experience.

Signature or declaration: `function shouldShowUpdateDialog(update = {}) {`

### `showUpdateDialog` line 1119

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function showUpdateDialog(update = {}, options = {}) {`

### `startAppUpdateInstall` line 1160

Part of the private builder frontend and editing experience.

Signature or declaration: `async function startAppUpdateInstall() {`

### `checkForAppUpdates` line 1195

Part of the private builder frontend and editing experience.

Signature or declaration: `async function checkForAppUpdates(options = {}) {`

### `formatReportDate` line 1237

Part of the private builder frontend and editing experience.

Signature or declaration: `function formatReportDate(value = "") {`

### `renderSecurityReport` line 1242

Renders UI, markup, or display output.

Signature or declaration: `function renderSecurityReport(report = {}) {`

### `openSecurityReport` line 1296

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `async function openSecurityReport() {`

### `scheduleAppUpdateChecks` line 1316

Part of the private builder frontend and editing experience.

Signature or declaration: `function scheduleAppUpdateChecks() {`

### `renderPublishTargetInfo` line 1327

Renders UI, markup, or display output.

Signature or declaration: `function renderPublishTargetInfo(target = {}) {`

### `renderSystemReadiness` line 1355

Renders UI, markup, or display output.

Signature or declaration: `function renderSystemReadiness(system = {}, target = {}) {`

### `markPublishTargetNeedsAuthentication` line 1396

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function markPublishTargetNeedsAuthentication() {`

### `loadSystemReadiness` line 1407

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function loadSystemReadiness() {`

### `setPublishTargetProgress` line 1420

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function setPublishTargetProgress(title, steps = []) {`

### `loadPublishTargetInfo` line 1428

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function loadPublishTargetInfo() {`

### `openPublishTargetDialog` line 1441

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function openPublishTargetDialog() {`

### `savePublishTarget` line 1447

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function savePublishTarget(event) {`

### `currentPublishTargetPayload` line 1452

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function currentPublishTargetPayload() {`

### `installGitForPublishing` line 1458

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function installGitForPublishing() {`

### `authenticatePublishTarget` line 1483

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function authenticatePublishTarget(options = {}) {`

### `syncFromPublishTarget` line 1538

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function syncFromPublishTarget(options = {}) {`

### `showPublishResult` line 1586

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function showPublishResult(result) {`

### `scheduleAutosave` line 1621

Part of the private builder frontend and editing experience.

Signature or declaration: `function scheduleAutosave(delay = 900) {`

### `autosaveDraft` line 1629

Part of the private builder frontend and editing experience.

Signature or declaration: `async function autosaveDraft() {`

### `schedulePreviewRender` line 1661

Part of the private builder frontend and editing experience.

Signature or declaration: `function schedulePreviewRender() {`

### `scheduleChromeRender` line 1669

Part of the private builder frontend and editing experience.

Signature or declaration: `function scheduleChromeRender() {`

### `updateAssetDialogVisibility` line 1678

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateAssetDialogVisibility() {`

### `slugify` line 1693

Part of the private builder frontend and editing experience.

Signature or declaration: `function slugify(value) {`

### `wordCount` line 1701

Part of the private builder frontend and editing experience.

Signature or declaration: `function wordCount(value) {`

### `limitWords` line 1705

Part of the private builder frontend and editing experience.

Signature or declaration: `function limitWords(value, maxWords = 1000) {`

### `normalizeFunFacts` line 1710

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeFunFacts(value) {`

### `syncFunFactsFromInput` line 1718

Keeps two places aligned, such as local data and target files.

Signature or declaration: `function syncFunFactsFromInput() {`

### `renderFunFactsEditor` line 1728

Renders UI, markup, or display output.

Signature or declaration: `function renderFunFactsEditor() {`

### `populateTextOnlyRichField` line 1736

Part of the private builder frontend and editing experience.

Signature or declaration: `function populateTextOnlyRichField(field, rich, fallbackText = "") {`

### `richFieldValue` line 1742

Part of the private builder frontend and editing experience.

Signature or declaration: `function richFieldValue(field, fallbackText = "") {`

### `mergeRichFieldMaps` line 1756

Part of the private builder frontend and editing experience.

Signature or declaration: `function mergeRichFieldMaps(current = {}, fallback = {}) {`

### `parsedSiteContentRich` line 1763

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedSiteContentRich() {`

### `parsedProfileRich` line 1767

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedProfileRich() {`

### `parsedFunFactsRich` line 1771

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedFunFactsRich() {`

### `syncPortfolioTextInputsForParsing` line 1777

Keeps two places aligned, such as local data and target files.

Signature or declaration: `function syncPortfolioTextInputsForParsing() {`

### `parsedPortfolioGlobals` line 1783

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedPortfolioGlobals() {`

### `syncParsedPortfolioGlobalsIntoSaved` line 1798

Keeps two places aligned, such as local data and target files.

Signature or declaration: `function syncParsedPortfolioGlobalsIntoSaved() {`

### `siteContentRichValue` line 1802

Part of the private builder frontend and editing experience.

Signature or declaration: `function siteContentRichValue(key) {`

### `profileRichValue` line 1806

Part of the private builder frontend and editing experience.

Signature or declaration: `function profileRichValue(key) {`

### `syncSiteRichField` line 1810

Keeps two places aligned, such as local data and target files.

Signature or declaration: `function syncSiteRichField(editor) {`

### `syncProfileRichField` line 1825

Keeps two places aligned, such as local data and target files.

Signature or declaration: `function syncProfileRichField(editor) {`

### `renderSiteContentEditor` line 1840

Renders UI, markup, or display output.

Signature or declaration: `function renderSiteContentEditor() {`

### `renderProfileEditor` line 1853

Renders UI, markup, or display output.

Signature or declaration: `function renderProfileEditor() {`

### `syncSiteContentFromInputs` line 1883

Keeps two places aligned, such as local data and target files.

Signature or declaration: `function syncSiteContentFromInputs() {`

### `syncProfileFromInputs` line 1899

Keeps two places aligned, such as local data and target files.

Signature or declaration: `function syncProfileFromInputs() {`

### `clone` line 1928

Part of the private builder frontend and editing experience.

Signature or declaration: `function clone(value) {`

### `closeDialogElement` line 1932

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function closeDialogElement(dialog, returnValue = "close") {`

### `getByPath` line 1950

Part of the private builder frontend and editing experience.

Signature or declaration: `function getByPath(target, pathValue) {`

### `setByPath` line 1954

Part of the private builder frontend and editing experience.

Signature or declaration: `function setByPath(target, pathValue, value) {`

### `defaultDesignModel` line 1965

Part of the private builder frontend and editing experience.

Signature or declaration: `function defaultDesignModel() {`

### `isAnalogProject` line 1973

Part of the private builder frontend and editing experience.

Signature or declaration: `function isAnalogProject(project) {`

### `ensureDesignModel` line 1977

Part of the private builder frontend and editing experience.

Signature or declaration: `function ensureDesignModel(project) {`

### `ensureCompileCode` line 1994

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function ensureCompileCode(project) {`

### `escapeHtml` line 2036

Part of the private builder frontend and editing experience.

Signature or declaration: `function escapeHtml(value) {`

### `escapeCodeHtml` line 2045

Part of the private builder frontend and editing experience.

Signature or declaration: `function escapeCodeHtml(value) {`

### `normalizeCodeLanguage` line 2053

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCodeLanguage(value = "") {`

### `codeLanguageProfile` line 2061

Part of the private builder frontend and editing experience.

Signature or declaration: `function codeLanguageProfile(value = "") {`

### `codeLanguageLabel` line 2065

Part of the private builder frontend and editing experience.

Signature or declaration: `function codeLanguageLabel(value = "") {`

### `sourceLooksCpp` line 2069

Part of the private builder frontend and editing experience.

Signature or declaration: `function sourceLooksCpp(source = "") {`

### `sourceLooksC` line 2075

Part of the private builder frontend and editing experience.

Signature or declaration: `function sourceLooksC(source = "") {`

### `languageFromFileName` line 2081

Part of the private builder frontend and editing experience.

Signature or declaration: `function languageFromFileName(fileName = "", source = "") {`

### `defaultCodeFileName` line 2092

Part of the private builder frontend and editing experience.

Signature or declaration: `function defaultCodeFileName(language = "javascript") {`

### `safeClientCodeFileName` line 2096

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function safeClientCodeFileName(fileName = "", language = "javascript") {`

### `normalizeCodePasteMode` line 2106

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCodePasteMode(value = "") {`

### `normalizeCodeText` line 2110

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCodeText(value = "", pasteMode = "source") {`

### `detectCodeLanguage` line 2121

Part of the private builder frontend and editing experience.

Signature or declaration: `function detectCodeLanguage(value = "", fileName = "") {`

### `tokenizedCodeHtml` line 2138

Part of the private builder frontend and editing experience.

Signature or declaration: `function tokenizedCodeHtml(code = "", language = "javascript") {`

### `tokenName` line 2141

Part of the private builder frontend and editing experience.

Signature or declaration: `const tokenName = (index) => {`

### `protect` line 2151

Part of the private builder frontend and editing experience.

Signature or declaration: `const protect = (pattern, className) => {`

### `renderRichCodeBlock` line 2194

Renders UI, markup, or display output.

Signature or declaration: `function renderRichCodeBlock(block = {}) {`

### `renderPlainMultiline` line 2206

Renders UI, markup, or display output.

Signature or declaration: `function renderPlainMultiline(value = "") {`

### `normalizeSiteContent` line 2210

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeSiteContent(content = {}) {`

### `normalizeProfile` line 2218

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeProfile(profile = {}) {`

### `normalizePlainFieldStyle` line 2236

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizePlainFieldStyle(style = {}) {`

### `normalizeFieldStyles` line 2252

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeFieldStyles(styles = {}) {`

### `loadBuilderPreferences` line 2261

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `function loadBuilderPreferences() {`

### `applyBuilderPreferences` line 2275

Part of the private builder frontend and editing experience.

Signature or declaration: `function applyBuilderPreferences() {`

### `setBuilderTheme` line 2282

Part of the private builder frontend and editing experience.

Signature or declaration: `function setBuilderTheme(theme = "light") {`

### `openPreferencesDialog` line 2289

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openPreferencesDialog() {`

### `saveBuilderPreferencesFromDialog` line 2294

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `function saveBuilderPreferencesFromDialog() {`

### `plainFieldStyleToCss` line 2299

Part of the private builder frontend and editing experience.

Signature or declaration: `function plainFieldStyleToCss(style = {}) {`

### `plainFieldStyleAttribute` line 2311

Part of the private builder frontend and editing experience.

Signature or declaration: `function plainFieldStyleAttribute(styles = {}, fieldId = "") {`

### `plainStyleFromControl` line 2316

Part of the private builder frontend and editing experience.

Signature or declaration: `function plainStyleFromControl(control) {`

### `applyPlainFieldStyleToControl` line 2328

Part of the private builder frontend and editing experience.

Signature or declaration: `function applyPlainFieldStyleToControl(control, style = {}) {`

### `applyStoredPlainFieldStyle` line 2345

Part of the private builder frontend and editing experience.

Signature or declaration: `function applyStoredPlainFieldStyle(control) {`

### `storePlainControlStyle` line 2351

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `function storePlainControlStyle(control) {`

### `mailComposeLink` line 2367

Part of the private builder frontend and editing experience.

Signature or declaration: `function mailComposeLink(email = "") {`

### `phoneLink` line 2372

Part of the private builder frontend and editing experience.

Signature or declaration: `function phoneLink(phone = "") {`

### `textBlocksFromPlainText` line 2377

Part of the private builder frontend and editing experience.

Signature or declaration: `function textBlocksFromPlainText(text) {`

### `richBlocksForProject` line 2387

Part of the private builder frontend and editing experience.

Signature or declaration: `function richBlocksForProject(project) {`

### `plainTextFromRich` line 2391

Part of the private builder frontend and editing experience.

Signature or declaration: `function plainTextFromRich(rich, separator = "\n\n") {`

### `unwrapFormula` line 2404

Part of the private builder frontend and editing experience.

Signature or declaration: `function unwrapFormula(value) {`

### `isFormulaOnly` line 2419

Part of the private builder frontend and editing experience.

Signature or declaration: `function isFormulaOnly(value) {`

### `renderInlineMath` line 2428

Renders UI, markup, or display output.

Signature or declaration: `function renderInlineMath(text) {`

### `renderMultilineInlineText` line 2439

Renders UI, markup, or display output.

Signature or declaration: `function renderMultilineInlineText(text = "") {`

### `looksLikeBareWebAddress` line 2443

Part of the private builder frontend and editing experience.

Signature or declaration: `function looksLikeBareWebAddress(value = "") {`

### `looksLikeWebOrContactText` line 2452

Part of the private builder frontend and editing experience.

Signature or declaration: `function looksLikeWebOrContactText(value = "") {`

### `normalizeLinkTarget` line 2462

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeLinkTarget(target = "", options = {}) {`

### `isWebsiteLinkItem` line 2471

Part of the private builder frontend and editing experience.

Signature or declaration: `function isWebsiteLinkItem(item = {}, target = "") {`

### `extensionFromUrl` line 2481

Part of the private builder frontend and editing experience.

Signature or declaration: `function extensionFromUrl(value = "") {`

### `urlLooksLikeDirectImage` line 2487

Part of the private builder frontend and editing experience.

Signature or declaration: `function urlLooksLikeDirectImage(value = "") {`

### `inferUrlAssetKind` line 2493

Part of the private builder frontend and editing experience.

Signature or declaration: `function inferUrlAssetKind(value = "", source = "web") {`

### `labelForUrlAssetKind` line 2508

Part of the private builder frontend and editing experience.

Signature or declaration: `function labelForUrlAssetKind(kind = "link") {`

### `displayNameFromUrl` line 2524

Part of the private builder frontend and editing experience.

Signature or declaration: `function displayNameFromUrl(value = "", fallback = "Linked asset") {`

### `linkifyRichTextNodes` line 2535

Part of the private builder frontend and editing experience.

Signature or declaration: `function linkifyRichTextNodes(root) {`

### `inlineStyleSignature` line 2572

Part of the private builder frontend and editing experience.

Signature or declaration: `function inlineStyleSignature(element) {`

### `normalizeInlineStyleSpans` line 2585

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeInlineStyleSpans(root) {`

### `sanitizeRichInlineHtml` line 2607

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function sanitizeRichInlineHtml(value = "") {`

### `displayTitle` line 2653

Part of the private builder frontend and editing experience.

Signature or declaration: `function displayTitle(value, fallback = "Untitled item") {`

### `cleanFontFamily` line 2664

Part of the private builder frontend and editing experience.

Signature or declaration: `function cleanFontFamily(value = "") {`

### `normalizeFontPx` line 2673

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeFontPx(value) {`

### `normalizeTextColor` line 2677

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeTextColor(value = "") {`

### `summaryRichPathFromTextPath` line 2686

Part of the private builder frontend and editing experience.

Signature or declaration: `function summaryRichPathFromTextPath(pathValue = "") {`

### `overviewFolderFromPath` line 2690

Part of the private builder frontend and editing experience.

Signature or declaration: `function overviewFolderFromPath(pathValue = "") {`

### `richBlocksFromValue` line 2697

Part of the private builder frontend and editing experience.

Signature or declaration: `function richBlocksFromValue(rich, fallbackText = "") {`

### `richTextStyle` line 2700

Part of the private builder frontend and editing experience.

Signature or declaration: `function richTextStyle(block = {}) {`

### `normalizeCropAspect` line 2716

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCropAspect(value = "") {`

### `normalizeCropZoom` line 2720

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCropZoom(value = 1) {`

### `normalizeCropPosition` line 2725

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCropPosition(value = 50) {`

### `richImageCropStyle` line 2730

Part of the private builder frontend and editing experience.

Signature or declaration: `function richImageCropStyle(block = {}) {`

### `richImageDownloadLink` line 2740

Part of the private builder frontend and editing experience.

Signature or declaration: `function richImageDownloadLink(block = {}) {`

### `cleanRichImageTitle` line 2747

Part of the private builder frontend and editing experience.

Signature or declaration: `function cleanRichImageTitle(block = {}) {`

### `renderRichContent` line 2752

Renders UI, markup, or display output.

Signature or declaration: `function renderRichContent(rich, fallbackText = "") {`

### `renderRichFieldContent` line 2789

Renders UI, markup, or display output.

Signature or declaration: `function renderRichFieldContent(rich, fallbackText = "") {`

### `saveSelectedProjectToPortfolio` line 2801

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `function saveSelectedProjectToPortfolio() {`

### `nextProjects` line 2806

Part of the private builder frontend and editing experience.

Signature or declaration: `const nextProjects = (savedPortfolioCatalog.projects || []).filter((item) => item.id !== project.id);`

### `removeProjectFromPortfolio` line 2819

Part of the private builder frontend and editing experience.

Signature or declaration: `function removeProjectFromPortfolio(projectId) {`

### `deleteProjectById` line 2823

Part of the private builder frontend and editing experience.

Signature or declaration: `function deleteProjectById(projectId) {`

### `openDeleteConfirm` line 2838

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openDeleteConfirm({ title = "Delete project", message, onConfirm }) {`

### `requestProjectDelete` line 2845

Part of the private builder frontend and editing experience.

Signature or declaration: `function requestProjectDelete(projectId) {`

### `parserItem` line 2855

Part of the private builder frontend and editing experience.

Signature or declaration: `function parserItem(title, description = "", url = "", meta = "", kind = "text", rich = null, children = []) {`

### `canonicalTemplateId` line 2868

Part of the private builder frontend and editing experience.

Signature or declaration: `function canonicalTemplateId(id) {`

### `projectTemplateId` line 2872

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectTemplateId(project) {`

### `projectTemplateFor` line 2876

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectTemplateFor(project) {`

### `projectTemplateClass` line 2881

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectTemplateClass(project) {`

### `responsiveClassName` line 2886

Part of the private builder frontend and editing experience.

Signature or declaration: `function responsiveClassName(value, fallback) {`

### `projectResponsiveClass` line 2893

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectResponsiveClass(project) {`

### `responsiveStyleValues` line 2898

Part of the private builder frontend and editing experience.

Signature or declaration: `function responsiveStyleValues(project) {`

### `hasPublicTemplate` line 2908

Part of the private builder frontend and editing experience.

Signature or declaration: `function hasPublicTemplate(project) {`

### `projectTemplateVisual` line 2912

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectTemplateVisual(project) {`

### `projectTemplateStyle` line 2916

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectTemplateStyle(project, accent) {`

### `applyProjectTemplateToElement` line 2936

Part of the private builder frontend and editing experience.

Signature or declaration: `function applyProjectTemplateToElement(element, project, accent) {`

### `resourcesFrom` line 2972

Part of the private builder frontend and editing experience.

Signature or declaration: `function resourcesFrom(project, key) {`

### `resourcesFromItems` line 2990

Part of the private builder frontend and editing experience.

Signature or declaration: `function resourcesFromItems(items = [], fallbackKind = "document") {`

### `parsedSubsection` line 3005

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedSubsection(title, description = "", items = [], rich = null) {`

### `richHasContent` line 3009

Part of the private builder frontend and editing experience.

Signature or declaration: `function richHasContent(rich) {`

### `parsedItemHasContent` line 3020

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedItemHasContent(item) {`

### `parsedSectionHasContent` line 3033

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedSectionHasContent(section) {`

### `responsiveChildren` line 3037

Part of the private builder frontend and editing experience.

Signature or declaration: `function responsiveChildren(node) {`

### `richContainsMedia` line 3041

Part of the private builder frontend and editing experience.

Signature or declaration: `function richContainsMedia(rich) {`

### `responsiveNodeHasMedia` line 3045

Part of the private builder frontend and editing experience.

Signature or declaration: `function responsiveNodeHasMedia(node) {`

### `responsiveNodeCount` line 3053

Part of the private builder frontend and editing experience.

Signature or declaration: `function responsiveNodeCount(node) {`

### `responsiveNodeDepth` line 3058

Part of the private builder frontend and editing experience.

Signature or declaration: `function responsiveNodeDepth(node) {`

### `buildResponsiveProfile` line 3065

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function buildResponsiveProfile(project, parsedSections = []) {`

### `visibleSections` line 3066

Part of the private builder frontend and editing experience.

Signature or declaration: `const visibleSections = (parsedSections || []).filter((section) => section?.id !== "brief" && parsedSectionHasContent(section));`

### `projectResponsiveProfile` line 3098

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectResponsiveProfile(project) {`

### `parsedSection` line 3109

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedSection(id, title, items = [], description = "", rich = null) {`

### `parsedDesignSection` line 3120

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedDesignSection(project) {`

### `parsedSimulationSection` line 3148

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedSimulationSection(project) {`

### `parsedToolsSection` line 3158

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedToolsSection(project) {`

### `toolItems` line 3159

Part of the private builder frontend and editing experience.

Signature or declaration: `const toolItems = (project.tools || []).map((tool) => parserItem(toolName(tool), toolDescription(tool), "", "Tool", "tool", tool?.richDescription));`

### `languageItems` line 3160

Part of the private builder frontend and editing experience.

Signature or declaration: `const languageItems = (project.languages || []).map((language) => {`

### `parseProjectForPortfolio` line 3171

Part of the private builder frontend and editing experience.

Signature or declaration: `function parseProjectForPortfolio(project) {`

### `custom` line 3185

Part of the private builder frontend and editing experience.

Signature or declaration: `const custom = (project.sections || []).find((item) => item.id === sectionId);`

### `refreshOpenPreviews` line 3221

Part of the private builder frontend and editing experience.

Signature or declaration: `function refreshOpenPreviews() {`

### `savedProject` line 3224

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `const savedProject = (savedPortfolioCatalog.projects || []).find((item) => item.id === project?.id);`

### `saveSelectedProjectAndClose` line 3232

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `function saveSelectedProjectAndClose() {`

### `commitActiveProjectEdits` line 3238

Part of the private builder frontend and editing experience.

Signature or declaration: `async function commitActiveProjectEdits() {`

### `saveAllSections` line 3248

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function saveAllSections(options = {}) {`

### `selectedProject` line 3261

Part of the private builder frontend and editing experience.

Signature or declaration: `function selectedProject() {`

### `sectionWindowId` line 3265

Part of the private builder frontend and editing experience.

Signature or declaration: `function sectionWindowId(sectionId) {`

### `resetProjectWindowScroll` line 3271

Part of the private builder frontend and editing experience.

Signature or declaration: `function resetProjectWindowScroll() {`

### `openProjectWindow` line 3281

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openProjectWindow(projectId, sectionId = "brief") {`

### `categoryById` line 3304

Part of the private builder frontend and editing experience.

Signature or declaration: `function categoryById(id) {`

### `normalizeCategory` line 3308

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCategory(category = {}) {`

### `refreshCategoryControls` line 3320

Part of the private builder frontend and editing experience.

Signature or declaration: `function refreshCategoryControls() {`

### `linkAttributes` line 3329

Part of the private builder frontend and editing experience.

Signature or declaration: `function linkAttributes(url, item = {}) {`

### `isLocalDownloadTarget` line 3334

Part of the private builder frontend and editing experience.

Signature or declaration: `function isLocalDownloadTarget(target = "") {`

### `downloadAttribute` line 3339

Part of the private builder frontend and editing experience.

Signature or declaration: `function downloadAttribute(target = "", item = {}) {`

### `resourceLink` line 3344

Part of the private builder frontend and editing experience.

Signature or declaration: `function resourceLink(item, label = item.label || item.title || item.name) {`

### `pillList` line 3355

Part of the private builder frontend and editing experience.

Signature or declaration: `function pillList(items, className = "") {`

### `evidenceList` line 3362

Part of the private builder frontend and editing experience.

Signature or declaration: `function evidenceList(items, renderItem, emptyMessage) {`

### `detailBlock` line 3367

Part of the private builder frontend and editing experience.

Signature or declaration: `function detailBlock(title, className, content) {`

### `mediaGrid` line 3376

Part of the private builder frontend and editing experience.

Signature or declaration: `function mediaGrid(items) {`

### `itemTitle` line 3400

Part of the private builder frontend and editing experience.

Signature or declaration: `function itemTitle(item) {`

### `itemUrl` line 3405

Part of the private builder frontend and editing experience.

Signature or declaration: `function itemUrl(item) {`

### `itemDescription` line 3409

Part of the private builder frontend and editing experience.

Signature or declaration: `function itemDescription(item) {`

### `isImageUrl` line 3413

Part of the private builder frontend and editing experience.

Signature or declaration: `function isImageUrl(url) {`

### `portfolioLink` line 3417

Part of the private builder frontend and editing experience.

Signature or declaration: `function portfolioLink(url, label) {`

### `renderPortfolioResourceList` line 3423

Renders UI, markup, or display output.

Signature or declaration: `function renderPortfolioResourceList(title, items, emptyMessage) {`

### `renderPortfolioMedia` line 3446

Renders UI, markup, or display output.

Signature or declaration: `function renderPortfolioMedia(items) {`

### `renderPortfolioTools` line 3470

Renders UI, markup, or display output.

Signature or declaration: `function renderPortfolioTools(project) {`

### `renderPortfolioCustomSections` line 3488

Renders UI, markup, or display output.

Signature or declaration: `function renderPortfolioCustomSections(project) {`

### `publicCustomSectionBlocks` line 3507

Part of the private builder frontend and editing experience.

Signature or declaration: `function publicCustomSectionBlocks(project) {`

### `renderProjectPortfolioPreview` line 3520

Renders UI, markup, or display output.

Signature or declaration: `function renderProjectPortfolioPreview(project) {`

### `briefSection` line 3525

Part of the private builder frontend and editing experience.

Signature or declaration: `const briefSection = (project.portfolioView.sections || []).find((section) => section.id === "brief");`

### `otherSections` line 3526

Part of the private builder frontend and editing experience.

Signature or declaration: `const otherSections = (project.portfolioView.sections || []).filter((section) => section.id !== "brief" && previewSectionHasRenderableContent(section));`

### `fullProjectPreviewHtmlExact` line 3558

Part of the private builder frontend and editing experience.

Signature or declaration: `function fullProjectPreviewHtmlExact(project) {`

### `renderProjectWebsitePreview` line 3687

Renders UI, markup, or display output.

Signature or declaration: `function renderProjectWebsitePreview(project) {`

### `openProjectPortfolioPreview` line 3707

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openProjectPortfolioPreview() {`

### `savedProject` line 3709

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `const savedProject = (savedPortfolioCatalog.projects || []).find((item) => item.id === project?.id);`

### `updateProjectPreviewNavigation` line 3717

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateProjectPreviewNavigation() {`

### `openProjectPreviewNode` line 3723

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openProjectPreviewNode(sectionIndex, path = [], options = {}) {`

### `sections` line 3725

Part of the private builder frontend and editing experience.

Signature or declaration: `const sections = (activeProjectPreviewProject.portfolioView.sections || []).filter((section) => section.id !== "brief" && previewSectionHasRenderableContent(section));`

### `projectPreviewBackStep` line 3747

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectPreviewBackStep() {`

### `projectPreviewForwardStep` line 3771

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectPreviewForwardStep() {`

### `closeOrStepBackProjectPreview` line 3777

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function closeOrStepBackProjectPreview() {`

### `closeProjectPreviewWindow` line 3785

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function closeProjectPreviewWindow() {`

### `publicProjectCard` line 3793

Part of the private builder frontend and editing experience.

Signature or declaration: `function publicProjectCard(project) {`

### `renderParsedBriefBlock` line 3858

Renders UI, markup, or display output.

Signature or declaration: `function renderParsedBriefBlock(section, fallbackSummary = "") {`

### `previewPathToString` line 3870

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewPathToString(path = []) {`

### `previewPathFromString` line 3874

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewPathFromString(value = "") {`

### `previewNodeAtPath` line 3879

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewNodeAtPath(section, path = []) {`

### `previewNodeChildren` line 3890

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewNodeChildren(node) {`

### `previewSectionHasRenderableContent` line 3894

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewSectionHasRenderableContent(section) {`

### `previewNodeSummary` line 3898

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewNodeSummary(title, rich, text, emptyMessage = "No summary has been added yet.") {`

### `previewNodeIsOverview` line 3908

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewNodeIsOverview(item = {}) {`

### `previewNodeOverviewDetails` line 3913

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewNodeOverviewDetails(node, children = []) {`

### `previewNodeCard` line 3933

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewNodeCard(node, sectionIndex, path) {`

### `previewChildCards` line 3942

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewChildCards(children, sectionIndex, basePath = []) {`

### `previewFileList` line 3952

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewFileList(children = []) {`

### `previewNodeContent` line 3971

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewNodeContent(node, sectionIndex, path = []) {`

### `parsedPublicSectionContent` line 3985

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedPublicSectionContent(section, sectionIndex = 0, path = []) {`

### `parsedPublicSection` line 3991

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedPublicSection(section, index = 0) {`

### `parsedPublicProjectCard` line 4001

Part of the private builder frontend and editing experience.

Signature or declaration: `function parsedPublicProjectCard(project) {`

### `briefSection` line 4005

Part of the private builder frontend and editing experience.

Signature or declaration: `const briefSection = (view.sections || []).find((section) => section.id === "brief");`

### `otherSections` line 4006

Part of the private builder frontend and editing experience.

Signature or declaration: `const otherSections = (view.sections || []).filter((section) => section.id !== "brief" && previewSectionHasRenderableContent(section));`

### `publicCategorySection` line 4021

Part of the private builder frontend and editing experience.

Signature or declaration: `function publicCategorySection(category, visibleProjects) {`

### `renderedPublicProjects` line 4038

Renders UI, markup, or display output.

Signature or declaration: `function renderedPublicProjects() {`

### `sectionControls` line 4053

Part of the private builder frontend and editing experience.

Signature or declaration: `function sectionControls(sectionId, uploadKey = "", folder = "") {`

### `customSectionBlocks` line 4062

Part of the private builder frontend and editing experience.

Signature or declaration: `function customSectionBlocks(project) {`

### `projectCard` line 4076

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectCard(project, isSelected = false) {`

### `buildTemplateProject` line 4156

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function buildTemplateProject() {`

### `insertProject` line 4188

Part of the private builder frontend and editing experience.

Signature or declaration: `function insertProject(project) {`

### `renderCategoryDropdown` line 4206

Renders UI, markup, or display output.

Signature or declaration: `function renderCategoryDropdown() {`

### `toggleCategoryDropdown` line 4215

Part of the private builder frontend and editing experience.

Signature or declaration: `function toggleCategoryDropdown(forceOpen = null) {`

### `createProjectInCategory` line 4221

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function createProjectInCategory(categoryId) {`

### `openProjectCreateDialog` line 4235

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openProjectCreateDialog(categoryId) {`

### `groupedTemplateOptions` line 4247

Part of the private builder frontend and editing experience.

Signature or declaration: `function groupedTemplateOptions() {`

### `showTemplatePreview` line 4255

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function showTemplatePreview(template) {`

### `renderTree` line 4278

Renders UI, markup, or display output.

Signature or declaration: `function renderTree() {`

### `summaryWordCount` line 4321

Part of the private builder frontend and editing experience.

Signature or declaration: `function summaryWordCount(project) {`

### `renderSummaryPreview` line 4325

Renders UI, markup, or display output.

Signature or declaration: `function renderSummaryPreview(project) {`

### `renderSummaryBuilder` line 4331

Renders UI, markup, or display output.

Signature or declaration: `function renderSummaryBuilder(project) {`

### `applyRichTextBlockStyle` line 4361

Part of the private builder frontend and editing experience.

Signature or declaration: `function applyRichTextBlockStyle(block) {`

### `createRichTextBlock` line 4374

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function createRichTextBlock(text = "", fontSize = "normal", align = "left", fontFamily = "Arial", fontPx = "", color = "", bold = false, html = "", italic = false, underline = fal`

### `richBlockActions` line 4393

Part of the private builder frontend and editing experience.

Signature or declaration: `function richBlockActions(label = "block", options = {}) {`

### `createRichImageBlock` line 4403

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function createRichImageBlock(blockData) {`

### `createRichFormulaBlock` line 4433

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function createRichFormulaBlock(blockData) {`

### `createRichCodeBlock` line 4448

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function createRichCodeBlock(blockData = {}) {`

### `refreshRichImageBlock` line 4467

Part of the private builder frontend and editing experience.

Signature or declaration: `function refreshRichImageBlock(block, blockData) {`

### `refreshRichFormulaBlock` line 4499

Part of the private builder frontend and editing experience.

Signature or declaration: `function refreshRichFormulaBlock(block, blockData) {`

### `refreshRichCodeBlock` line 4512

Part of the private builder frontend and editing experience.

Signature or declaration: `function refreshRichCodeBlock(block, blockData = {}) {`

### `createRichBlockElement` line 4527

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function createRichBlockElement(block) {`

### `populateSummaryEditor` line 4546

Part of the private builder frontend and editing experience.

Signature or declaration: `function populateSummaryEditor(project) {`

### `populateStandaloneRichEditor` line 4552

Part of the private builder frontend and editing experience.

Signature or declaration: `function populateStandaloneRichEditor(editor, rich, fallbackText = "") {`

### `populateRichEditor` line 4562

Part of the private builder frontend and editing experience.

Signature or declaration: `function populateRichEditor(editor, project = selectedProject()) {`

### `populateRichEditors` line 4594

Part of the private builder frontend and editing experience.

Signature or declaration: `function populateRichEditors(root = document) {`

### `saveRichEditorToProject` line 4598

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `function saveRichEditorToProject(editor) {`

### `saveVisibleRichEditors` line 4660

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `function saveVisibleRichEditors() {`

### `currentRichBlock` line 4666

Part of the private builder frontend and editing experience.

Signature or declaration: `function currentRichBlock(editor) {`

### `selectionRangeInsideEditor` line 4674

Part of the private builder frontend and editing experience.

Signature or declaration: `function selectionRangeInsideEditor(editor) {`

### `captureRichSelection` line 4684

Part of the private builder frontend and editing experience.

Signature or declaration: `function captureRichSelection(editor) {`

### `rememberRichFormattingSelection` line 4690

Part of the private builder frontend and editing experience.

Signature or declaration: `function rememberRichFormattingSelection(editor = activeSummaryEditor) {`

### `restoreRichSelection` line 4702

Part of the private builder frontend and editing experience.

Signature or declaration: `function restoreRichSelection(editor) {`

### `showPersistentTextSelection` line 4715

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function showPersistentTextSelection(range) {`

### `clearPersistentTextSelection` line 4747

Part of the private builder frontend and editing experience.

Signature or declaration: `function clearPersistentTextSelection(clearRanges = false) {`

### `refreshPersistentSelectionHighlight` line 4758

Part of the private builder frontend and editing experience.

Signature or declaration: `function refreshPersistentSelectionHighlight() {`

### `rangeBelongsToEditor` line 4767

Part of the private builder frontend and editing experience.

Signature or declaration: `function rangeBelongsToEditor(range, editor) {`

### `editorFromRange` line 4775

Part of the private builder frontend and editing experience.

Signature or declaration: `function editorFromRange(range) {`

### `pointInsideRange` line 4783

Part of the private builder frontend and editing experience.

Signature or declaration: `function pointInsideRange(range, x, y) {`

### `richEditorFromContextEvent` line 4795

Part of the private builder frontend and editing experience.

Signature or declaration: `function richEditorFromContextEvent(event) {`

### `displayRichFontName` line 4807

Part of the private builder frontend and editing experience.

Signature or declaration: `function displayRichFontName(value = "") {`

### `rgbColorToHex` line 4814

Part of the private builder frontend and editing experience.

Signature or declaration: `function rgbColorToHex(value = "") {`

### `textNodesInRichSelection` line 4825

Part of the private builder frontend and editing experience.

Signature or declaration: `function textNodesInRichSelection(range, editor, includeWhitespace = false) {`

### `richBlockFromRange` line 4846

Part of the private builder frontend and editing experience.

Signature or declaration: `function richBlockFromRange(range, editor) {`

### `uniformSelectionValue` line 4855

Part of the private builder frontend and editing experience.

Signature or declaration: `function uniformSelectionValue(values) {`

### `richSelectionStyleState` line 4863

Part of the private builder frontend and editing experience.

Signature or declaration: `function richSelectionStyleState(range, editor) {`

### `closeSelectionInspectorOptions` line 4873

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function closeSelectionInspectorOptions(except = "") {`

### `positionSelectionInspector` line 4879

Part of the private builder frontend and editing experience.

Signature or declaration: `function positionSelectionInspector(range) {`

### `showTextSelectionInspector` line 4902

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function showTextSelectionInspector(editor, range) {`

### `hideTextSelectionInspector` line 4926

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function hideTextSelectionInspector() {`

### `refreshTextSelectionInspector` line 4933

Part of the private builder frontend and editing experience.

Signature or declaration: `function refreshTextSelectionInspector() {`

### `scheduleTextSelectionInspectorRefresh` line 4955

Part of the private builder frontend and editing experience.

Signature or declaration: `function scheduleTextSelectionInspectorRefresh(delay = 0) {`

### `applySelectionInspectorFormat` line 4960

Part of the private builder frontend and editing experience.

Signature or declaration: `function applySelectionInspectorFormat(kind, rawValue) {`

### `renderSelectionInspectorOptions` line 4992

Renders UI, markup, or display output.

Signature or declaration: `function renderSelectionInspectorOptions() {`

### `applyStyleToRichSelection` line 5009

Part of the private builder frontend and editing experience.

Signature or declaration: `function applyStyleToRichSelection(editor, range, command, value = "") {`

### `applyRichInlineCommand` line 5057

Part of the private builder frontend and editing experience.

Signature or declaration: `function applyRichInlineCommand(editor, command, value = "") {`

### `selectRichBlock` line 5105

Part of the private builder frontend and editing experience.

Signature or declaration: `function selectRichBlock(block) {`

### `selectedRichBlock` line 5115

Part of the private builder frontend and editing experience.

Signature or declaration: `function selectedRichBlock(editor) {`

### `syncRichContextMenuControls` line 5125

Keeps two places aligned, such as local data and target files.

Signature or declaration: `function syncRichContextMenuControls(block) {`

### `focusTextBlock` line 5146

Part of the private builder frontend and editing experience.

Signature or declaration: `function focusTextBlock(block) {`

### `setTextBlockCaretOffset` line 5160

Part of the private builder frontend and editing experience.

Signature or declaration: `function setTextBlockCaretOffset(block, offset) {`

### `textBlockCaretOffset` line 5176

Part of the private builder frontend and editing experience.

Signature or declaration: `function textBlockCaretOffset(block) {`

### `matchingTextBlock` line 5185

Part of the private builder frontend and editing experience.

Signature or declaration: `function matchingTextBlock(block, text = "") {`

### `richInsertionRange` line 5200

Part of the private builder frontend and editing experience.

Signature or declaration: `function richInsertionRange(editor) {`

### `insertRichBlockAtCursor` line 5223

Part of the private builder frontend and editing experience.

Signature or declaration: `function insertRichBlockAtCursor(editor, blockElement, insertionRange = null) {`

### `insertRichBlockAfterCursor` line 5259

Part of the private builder frontend and editing experience.

Signature or declaration: `function insertRichBlockAfterCursor(editor, blockElement) {`

### `cleanupEmptyRichTextBlocks` line 5263

Part of the private builder frontend and editing experience.

Signature or declaration: `function cleanupEmptyRichTextBlocks(editor) {`

### `normalizeRichEditorStructure` line 5277

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeRichEditorStructure(editor) {`

### `richElementPlainText` line 5309

Part of the private builder frontend and editing experience.

Signature or declaration: `function richElementPlainText(element) {`

### `updateCurrentTextBlock` line 5315

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateCurrentTextBlock(editor, updates) {`

### `extractRichSummary` line 5359

Part of the private builder frontend and editing experience.

Signature or declaration: `function extractRichSummary(editor) {`

### `uploadSummaryImageFile` line 5418

Part of the private builder frontend and editing experience.

Signature or declaration: `async function uploadSummaryImageFile(file, options = {}) {`

### `updateSummaryImageDialogVisibility` line 5460

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateSummaryImageDialogVisibility() {`

### `openSummaryImageDialog` line 5467

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `async function openSummaryImageDialog(existingBlock = null, options = {}) {`

### `openSummaryFormulaDialog` line 5548

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `async function openSummaryFormulaDialog(existingBlock = null) {`

### `refreshSummaryCodeDialogPreview` line 5565

Part of the private builder frontend and editing experience.

Signature or declaration: `function refreshSummaryCodeDialogPreview() {`

### `beautifyCodeClient` line 5577

Part of the private builder frontend and editing experience.

Signature or declaration: `function beautifyCodeClient(code = "", language = "javascript") {`

### `beautifySummaryCodeDialog` line 5599

Part of the private builder frontend and editing experience.

Signature or declaration: `async function beautifySummaryCodeDialog() {`

### `openSummaryCodeDialog` line 5620

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `async function openSummaryCodeDialog(existingBlock = null, options = {}) {`

### `configureSummaryContextMenu` line 5642

Part of the private builder frontend and editing experience.

Signature or declaration: `function configureSummaryContextMenu(mode = "rich", options = {}) {`

### `applyPlainTextControlFormat` line 5667

Part of the private builder frontend and editing experience.

Signature or declaration: `function applyPlainTextControlFormat(control, updates = {}) {`

### `syncPlainContextMenuControls` line 5703

Keeps two places aligned, such as local data and target files.

Signature or declaration: `function syncPlainContextMenuControls(control) {`

### `plainTextControlFromContextEvent` line 5721

Part of the private builder frontend and editing experience.

Signature or declaration: `function plainTextControlFromContextEvent(event) {`

### `handlePlainTextAction` line 5730

Handles an event, request, command, or user action.

Signature or declaration: `async function handlePlainTextAction(action) {`

### `handleRichAction` line 5780

Handles an event, request, command, or user action.

Signature or declaration: `async function handleRichAction(action, editor) {`

### `hideSummaryContextMenu` line 5880

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function hideSummaryContextMenu() {`

### `editSelectedRichBlock` line 5886

Part of the private builder frontend and editing experience.

Signature or declaration: `async function editSelectedRichBlock(editor) {`

### `copyRichCodeBlock` line 5911

Part of the private builder frontend and editing experience.

Signature or declaration: `async function copyRichCodeBlock(block) {`

### `removeRichBlock` line 5920

Part of the private builder frontend and editing experience.

Signature or declaration: `function removeRichBlock(block, editor) {`

### `deleteSelectedRichBlock` line 5933

Part of the private builder frontend and editing experience.

Signature or declaration: `function deleteSelectedRichBlock(editor) {`

### `deleteProjectSummary` line 5950

Part of the private builder frontend and editing experience.

Signature or declaration: `function deleteProjectSummary(project) {`

### `saveRichSummary` line 5968

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function saveRichSummary() {`

### `renderFields` line 5989

Renders UI, markup, or display output.

Signature or declaration: `function renderFields(project) {`

### `sectionOptions` line 6006

Part of the private builder frontend and editing experience.

Signature or declaration: `function sectionOptions(project) {`

### `custom` line 6007

Part of the private builder frontend and editing experience.

Signature or declaration: `const custom = (project.sections || []).map((section) => ({`

### `ensureSiteSections` line 6018

Part of the private builder frontend and editing experience.

Signature or declaration: `function ensureSiteSections() {`

### `siteSectionHasContent` line 6023

Part of the private builder frontend and editing experience.

Signature or declaration: `function siteSectionHasContent(section) {`

### `siteSectionRenderable` line 6034

Part of the private builder frontend and editing experience.

Signature or declaration: `function siteSectionRenderable(section) {`

### `siteSectionLinkCount` line 6038

Part of the private builder frontend and editing experience.

Signature or declaration: `function siteSectionLinkCount(section) {`

### `renderSiteSectionList` line 6046

Renders UI, markup, or display output.

Signature or declaration: `function renderSiteSectionList() {`

### `siteSectionDialogValue` line 6096

Part of the private builder frontend and editing experience.

Signature or declaration: `async function siteSectionDialogValue(section = {}) {`

### `siteSubsectionDialogValue` line 6120

Part of the private builder frontend and editing experience.

Signature or declaration: `async function siteSubsectionDialogValue(subsection = {}) {`

### `dialogLinkValue` line 6145

Part of the private builder frontend and editing experience.

Signature or declaration: `function dialogLinkValue(link = {}) {`

### `onClose` line 6151

Part of the private builder frontend and editing experience.

Signature or declaration: `const onClose = () => {`

### `addSiteSection` line 6171

Part of the private builder frontend and editing experience.

Signature or declaration: `async function addSiteSection() {`

### `editSiteSection` line 6193

Part of the private builder frontend and editing experience.

Signature or declaration: `async function editSiteSection(sectionId) {`

### `addSiteSubsection` line 6208

Part of the private builder frontend and editing experience.

Signature or declaration: `async function addSiteSubsection(sectionId) {`

### `section` line 6209

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (catalog.siteSections || []).find((item) => item.id === sectionId);`

### `editSiteSubsection` line 6221

Part of the private builder frontend and editing experience.

Signature or declaration: `async function editSiteSubsection(sectionId, index) {`

### `section` line 6222

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (catalog.siteSections || []).find((item) => item.id === sectionId);`

### `deleteSiteSubsection` line 6234

Part of the private builder frontend and editing experience.

Signature or declaration: `function deleteSiteSubsection(sectionId, index) {`

### `section` line 6235

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (catalog.siteSections || []).find((item) => item.id === sectionId);`

### `addSiteSectionLink` line 6250

Part of the private builder frontend and editing experience.

Signature or declaration: `async function addSiteSectionLink(sectionId) {`

### `section` line 6251

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (catalog.siteSections || []).find((item) => item.id === sectionId);`

### `editSiteSectionLink` line 6263

Part of the private builder frontend and editing experience.

Signature or declaration: `async function editSiteSectionLink(sectionId, index) {`

### `section` line 6264

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (catalog.siteSections || []).find((item) => item.id === sectionId);`

### `deleteSiteSectionLink` line 6276

Part of the private builder frontend and editing experience.

Signature or declaration: `function deleteSiteSectionLink(sectionId, index) {`

### `section` line 6277

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (catalog.siteSections || []).find((item) => item.id === sectionId);`

### `toggleSiteSectionVisibility` line 6286

Part of the private builder frontend and editing experience.

Signature or declaration: `function toggleSiteSectionVisibility(sectionId) {`

### `section` line 6287

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (catalog.siteSections || []).find((item) => item.id === sectionId);`

### `deleteSiteSection` line 6296

Part of the private builder frontend and editing experience.

Signature or declaration: `function deleteSiteSection(sectionId) {`

### `section` line 6297

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (catalog.siteSections || []).find((item) => item.id === sectionId);`

### `setSiteSectionBackground` line 6312

Part of the private builder frontend and editing experience.

Signature or declaration: `async function setSiteSectionBackground(sectionId) {`

### `section` line 6313

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (catalog.siteSections || []).find((item) => item.id === sectionId);`

### `clearSiteSectionBackground` line 6345

Part of the private builder frontend and editing experience.

Signature or declaration: `function clearSiteSectionBackground(sectionId) {`

### `section` line 6346

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (catalog.siteSections || []).find((item) => item.id === sectionId);`

### `renderSectionTabs` line 6355

Renders UI, markup, or display output.

Signature or declaration: `function renderSectionTabs(project) {`

### `renderTextArray` line 6371

Renders UI, markup, or display output.

Signature or declaration: `function renderTextArray(project, key, label) {`

### `toolName` line 6391

Part of the private builder frontend and editing experience.

Signature or declaration: `function toolName(item) {`

### `toolDescription` line 6395

Part of the private builder frontend and editing experience.

Signature or declaration: `function toolDescription(item) {`

### `renderToolsSection` line 6399

Renders UI, markup, or display output.

Signature or declaration: `function renderToolsSection(project) {`

### `renderObjectSection` line 6422

Renders UI, markup, or display output.

Signature or declaration: `function renderObjectSection(project, key, folder, label) {`

### `designArray` line 6452

Part of the private builder frontend and editing experience.

Signature or declaration: `function designArray(project, pathValue) {`

### `makeDesignItem` line 6460

Part of the private builder frontend and editing experience.

Signature or declaration: `function makeDesignItem(kind, title, description = "", url = "") {`

### `renderDesignObjectSection` line 6468

Renders UI, markup, or display output.

Signature or declaration: `function renderDesignObjectSection(project, pathValue, folder, label, kind = "document") {`

### `renderDesignSummaryField` line 6498

Renders UI, markup, or display output.

Signature or declaration: `function renderDesignSummaryField(project, pathValue, label, placeholder) {`

### `designPathHasContent` line 6532

Part of the private builder frontend and editing experience.

Signature or declaration: `function designPathHasContent(project, pathValue) {`

### `renderEmptyDynamicSectionPrompt` line 6538

Renders UI, markup, or display output.

Signature or declaration: `function renderEmptyDynamicSectionPrompt(label = "section") {`

### `renderAnalogDesignWorkspace` line 6550

Renders UI, markup, or display output.

Signature or declaration: `function renderAnalogDesignWorkspace(project) {`

### `renderAnalogSimulationWorkspace` line 6595

Renders UI, markup, or display output.

Signature or declaration: `function renderAnalogSimulationWorkspace(project) {`

### `pendingEditorUsesRichDescription` line 6630

Part of the private builder frontend and editing experience.

Signature or declaration: `function pendingEditorUsesRichDescription(editor = pendingEditor) {`

### `pendingEditorFolder` line 6634

Part of the private builder frontend and editing experience.

Signature or declaration: `function pendingEditorFolder(editor = pendingEditor) {`

### `renderPendingRichDescriptionEditor` line 6643

Renders UI, markup, or display output.

Signature or declaration: `function renderPendingRichDescriptionEditor(editor = pendingEditor) {`

### `renderPendingEditor` line 6668

Renders UI, markup, or display output.

Signature or declaration: `function renderPendingEditor() {`

### `openPendingEditor` line 6694

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openPendingEditor(config) {`

### `savePendingEditor` line 6703

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `function savePendingEditor(form) {`

### `section` line 6762

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);`

### `section` line 6774

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);`

### `openEditorFromButton` line 6787

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openEditorFromButton(button) {`

### `section` line 6841

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === button.dataset.sectionId);`

### `section` line 6869

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === button.dataset.sectionId);`

### `builderPreviewContent` line 6881

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function builderPreviewContent(rich, text = "", emptyText = "No content has been added yet.") {`

### `renderCustomSection` line 6890

Renders UI, markup, or display output.

Signature or declaration: `function renderCustomSection(project, sectionId) {`

### `section` line 6891

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === sectionId);`

### `compileLanguageOptions` line 6935

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileLanguageOptions(selected = "javascript") {`

### `compileRoleOptions` line 6942

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileRoleOptions(selected = "design") {`

### `hdlTestbenchTemplate` line 6949

Part of the private builder frontend and editing experience.

Signature or declaration: `function hdlTestbenchTemplate(language = "systemverilog", designName = "design") {`

### `firstHdlModuleName` line 6975

Part of the private builder frontend and editing experience.

Signature or declaration: `function firstHdlModuleName(code = "") {`

### `compileAppendDestinations` line 6980

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileAppendDestinations(project) {`

### `compileAppendDestinationOptions` line 7028

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileAppendDestinationOptions(project, selectedId = "") {`

### `activeCompileFile` line 7038

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function activeCompileFile(project) {`

### `compileLogTimestamp` line 7043

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileLogTimestamp(value = new Date().toISOString()) {`

### `addCompileMessage` line 7049

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function addCompileMessage(project, text, level = "info") {`

### `renderCompileMessages` line 7064

Renders UI, markup, or display output.

Signature or declaration: `function renderCompileMessages(workspace) {`

### `updateCompileTerminalPanel` line 7075

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateCompileTerminalPanel(project, file = activeCompileFile(project)) {`

### `updateCompileMessagesPanel` line 7086

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateCompileMessagesPanel(project) {`

### `showCompileOutput` line 7093

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function showCompileOutput(project, file = activeCompileFile(project)) {`

### `activeCompileWaveform` line 7107

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function activeCompileWaveform(project, file = activeCompileFile(project)) {`

### `scopeSignalValueAt` line 7112

Part of the private builder frontend and editing experience.

Signature or declaration: `function scopeSignalValueAt(changes = [], index = 0) {`

### `renderScalarWavePath` line 7119

Renders UI, markup, or display output.

Signature or declaration: `function renderScalarWavePath(changes = [], maxTime = 1, rowY = 0, left = 150, width = 680) {`

### `yFor` line 7126

Part of the private builder frontend and editing experience.

Signature or declaration: `const yFor = (value) => value === "1" ? top : value === "0" ? bottom : middle;`

### `xFor` line 7127

Part of the private builder frontend and editing experience.

Signature or declaration: `const xFor = (time) => left + Math.max(0, Math.min(1, (Number(time) || 0) / Math.max(1, maxTime))) * width;`

### `renderBusWaveLabels` line 7142

Renders UI, markup, or display output.

Signature or declaration: `function renderBusWaveLabels(changes = [], maxTime = 1, rowY = 0, left = 150, width = 680) {`

### `renderHdlScope` line 7154

Renders UI, markup, or display output.

Signature or declaration: `function renderHdlScope(waveform) {`

### `renderCompileScopePanel` line 7205

Renders UI, markup, or display output.

Signature or declaration: `function renderCompileScopePanel(project, file = activeCompileFile(project)) {`

### `showCompileScope` line 7219

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function showCompileScope(project, file = activeCompileFile(project)) {`

### `copyCompileOutput` line 7230

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `async function copyCompileOutput(project, file = activeCompileFile(project)) {`

### `clearCompileOutput` line 7247

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function clearCompileOutput(project, file = activeCompileFile(project)) {`

### `richBlocksForCompileAppend` line 7258

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function richBlocksForCompileAppend(project, destination) {`

### `codeBlockForCompileFile` line 7267

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function codeBlockForCompileFile(file) {`

### `compileFileDirtyLabel` line 7276

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compileFileDirtyLabel(file) {`

### `renderCompileCodeSection` line 7285

Renders UI, markup, or display output.

Signature or declaration: `function renderCompileCodeSection(project) {`

### `renderSectionContent` line 7410

Renders UI, markup, or display output.

Signature or declaration: `function renderSectionContent(project) {`

### `fullPortfolioPreviewHtml` line 7474

Part of the private builder frontend and editing experience.

Signature or declaration: `function fullPortfolioPreviewHtml() {`

### `previewValue` line 7478

Part of the private builder frontend and editing experience.

Signature or declaration: `function previewValue(source, key, fallback) {`

### `fullPortfolioPreviewHtmlExact` line 7482

Part of the private builder frontend and editing experience.

Signature or declaration: `function fullPortfolioPreviewHtmlExact(dataOverride = null) {`

### `renderPreview` line 7704

Renders UI, markup, or display output.

Signature or declaration: `function renderPreview() {`

### `openPortfolioPreview` line 7708

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `async function openPortfolioPreview() {`

### `renderAll` line 7715

Renders UI, markup, or display output.

Signature or declaration: `function renderAll() {`

### `updateProjectField` line 7734

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateProjectField(field, value) {`

### `renameSelectedProject` line 7770

Part of the private builder frontend and editing experience.

Signature or declaration: `function renameSelectedProject() {`

### `projectMetaRows` line 7777

Part of the private builder frontend and editing experience.

Signature or declaration: `function projectMetaRows(project) {`

### `savedProject` line 7781

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `const savedProject = (savedPortfolioCatalog.projects || []).find((item) => item.id === project.id);`

### `openProjectMetaDetails` line 7815

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openProjectMetaDetails() {`

### `selectTitleText` line 7829

Part of the private builder frontend and editing experience.

Signature or declaration: `function selectTitleText() {`

### `beginTitleRename` line 7837

Part of the private builder frontend and editing experience.

Signature or declaration: `function beginTitleRename() {`

### `endTitleRename` line 7848

Part of the private builder frontend and editing experience.

Signature or declaration: `function endTitleRename(saveChanges) {`

### `makeItemForSection` line 7867

Part of the private builder frontend and editing experience.

Signature or declaration: `function makeItemForSection(key, title, description = "", url = "") {`

### `addTextItem` line 7876

Part of the private builder frontend and editing experience.

Signature or declaration: `function addTextItem(key) {`

### `editObjectItem` line 7893

Part of the private builder frontend and editing experience.

Signature or declaration: `function editObjectItem(key, index) {`

### `chooseFile` line 7916

Part of the private builder frontend and editing experience.

Signature or declaration: `function chooseFile() {`

### `newCompileFile` line 7924

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function newCompileFile(language = "javascript", seed = {}) {`

### `activeCompileWorkspaceAndFile` line 7944

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function activeCompileWorkspaceAndFile(project = selectedProject()) {`

### `updateCompilePreview` line 7949

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateCompilePreview(file) {`

### `syncCompileEditorScroll` line 7954

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function syncCompileEditorScroll(textarea) {`

### `compilePayload` line 7962

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function compilePayload(project, file, options = {}) {`

### `selectedCompileAppendDestination` line 7986

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function selectedCompileAppendDestination(project) {`

### `appendCompileCodeToProject` line 7992

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `function appendCompileCodeToProject(project, file) {`

### `saveCompileFile` line 8021

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function saveCompileFile(project, file) {`

### `importCompileFile` line 8040

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `async function importCompileFile(project) {`

### `beautifyCompileFile` line 8065

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `async function beautifyCompileFile(project, file) {`

### `compileActiveFile` line 8087

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `async function compileActiveFile(project, file, options = {}) {`

### `checkCompileTools` line 8147

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `async function checkCompileTools(project) {`

### `installCompileTools` line 8164

Part of the Compile Code language/tool/build/run flow.

Signature or declaration: `async function installCompileTools(project, file) {`

### `readFileAsDataUrl` line 8189

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `function readFileAsDataUrl(file) {`

### `uploadProfileAsset` line 8198

Part of the private builder frontend and editing experience.

Signature or declaration: `async function uploadProfileAsset(kind) {`

### `extensionFor` line 8244

Part of the private builder frontend and editing experience.

Signature or declaration: `function extensionFor(fileName) {`

### `withExtension` line 8249

Part of the private builder frontend and editing experience.

Signature or declaration: `function withExtension(name, fallbackFileName) {`

### `uploadProfile` line 8255

Part of the private builder frontend and editing experience.

Signature or declaration: `function uploadProfile(key) {`

### `allowedFileMessage` line 8288

Part of the private builder frontend and editing experience.

Signature or declaration: `function allowedFileMessage(profile) {`

### `isAllowedUpload` line 8293

Part of the private builder frontend and editing experience.

Signature or declaration: `function isAllowedUpload(key, fileName, mimeType = "") {`

### `validateAssetForSection` line 8308

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function validateAssetForSection(key, asset) {`

### `dialogValue` line 8319

Part of the private builder frontend and editing experience.

Signature or declaration: `function dialogValue(dialog) {`

### `onClose` line 8321

Part of the private builder frontend and editing experience.

Signature or declaration: `const onClose = () => {`

### `openAssetDialog` line 8330

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `async function openAssetDialog(key) {`

### `uploadToSection` line 8394

Part of the private builder frontend and editing experience.

Signature or declaration: `async function uploadToSection(key, folder, customSectionId = "", customItemIndex = null) {`

### `section` line 8433

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === customSectionId);`

### `uploadToDesignSection` line 8456

Part of the private builder frontend and editing experience.

Signature or declaration: `async function uploadToDesignSection(pathValue, folder, kind = "document") {`

### `openSectionDialog` line 8504

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `async function openSectionDialog() {`

### `openCategoryDialog` line 8525

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openCategoryDialog() {`

### `saveCategoryFromDialog` line 8533

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `function saveCategoryFromDialog() {`

### `addCustomSection` line 8561

Part of the private builder frontend and editing experience.

Signature or declaration: `async function addCustomSection() {`

### `addCustomItem` line 8584

Part of the private builder frontend and editing experience.

Signature or declaration: `function addCustomItem(sectionId) {`

### `section` line 8586

Part of the private builder frontend and editing experience.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === sectionId);`

### `editCustomItem` line 8598

Part of the private builder frontend and editing experience.

Signature or declaration: `function editCustomItem(sectionId, index) {`

### `item` line 8600

Part of the private builder frontend and editing experience.

Signature or declaration: `const item = (project.sections || []).find((section) => section.id === sectionId)?.items?.[index];`

### `catalogForSave` line 8611

Part of the private builder frontend and editing experience.

Signature or declaration: `function catalogForSave(endpoint) {`

### `saveCatalog` line 8635

Persists data to local state, disk, credentials, or browser storage.

Signature or declaration: `async function saveCatalog(endpoint, message) {`

### `loadData` line 8699

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `async function loadData() {`

### `prepareBuilderGuideTopicLinks` line 8758

Part of the private builder frontend and editing experience.

Signature or declaration: `function prepareBuilderGuideTopicLinks() {`

### `updateBuilderGuideStats` line 8770

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateBuilderGuideStats() {`

### `guideSectionText` line 8790

Part of the private builder frontend and editing experience.

Signature or declaration: `function guideSectionText(section) {`

### `filterBuilderGuide` line 8798

Part of the private builder frontend and editing experience.

Signature or declaration: `function filterBuilderGuide() {`

### `setBuilderGuideTopic` line 8821

Part of the private builder frontend and editing experience.

Signature or declaration: `function setBuilderGuideTopic(topic = "all") {`

### `closeGuideAndFocus` line 8829

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function closeGuideAndFocus(target) {`

### `handleBuilderGuideAction` line 8837

Handles an event, request, command, or user action.

Signature or declaration: `function handleBuilderGuideAction(action = "") {`

### `openBuilderGuideTopic` line 8856

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openBuilderGuideTopic(section) {`

### `handleRichEditorContextMenu` line 9312

Handles an event, request, command, or user action.

Signature or declaration: `function handleRichEditorContextMenu(event) {`

### `handlePlainTextContextMenu` line 9398

Handles an event, request, command, or user action.

Signature or declaration: `function handlePlainTextContextMenu(event) {`

### `handleRichEditorPaste` line 9437

Handles an event, request, command, or user action.

Signature or declaration: `async function handleRichEditorPaste(event) {`

### `restoreRichInsertionPoint` line 9494

Part of the private builder frontend and editing experience.

Signature or declaration: `function restoreRichInsertionPoint(editor) {`

### `insertFragmentIntoRichEditor` line 9505

Part of the private builder frontend and editing experience.

Signature or declaration: `function insertFragmentIntoRichEditor(editor, fragment) {`

### `insertPlainTextIntoRichEditor` line 9523

Part of the private builder frontend and editing experience.

Signature or declaration: `function insertPlainTextIntoRichEditor(editor, pastedText) {`

### `insertHtmlIntoRichEditor` line 9535

Part of the private builder frontend and editing experience.

Signature or declaration: `function insertHtmlIntoRichEditor(editor, pastedHtml) {`

### `handleRichEditorKeydown` line 9565

Handles an event, request, command, or user action.

Signature or declaration: `function handleRichEditorKeydown(event) {`

### `handleRichEditorFocus` line 9632

Handles an event, request, command, or user action.

Signature or declaration: `function handleRichEditorFocus(event) {`

### `handleRichEditorInput` line 9639

Handles an event, request, command, or user action.

Signature or declaration: `function handleRichEditorInput(event) {`

### `handleRichEditorBeforeInput` line 9646

Handles an event, request, command, or user action.

Signature or declaration: `function handleRichEditorBeforeInput(event) {`

### `finishTextSelectionGesture` line 9728

Part of the private builder frontend and editing experience.

Signature or declaration: `function finishTextSelectionGesture(event) {`

### `endSelectionInspectorDrag` line 9814

Part of the private builder frontend and editing experience.

Signature or declaration: `function endSelectionInspectorDrag() {`

### `handleSelectionInspectorTextField` line 9843

Handles an event, request, command, or user action.

Signature or declaration: `function handleSelectionInspectorTextField(event) {`

### `scheduleSelectionInspectorTextField` line 9851

Part of the private builder frontend and editing experience.

Signature or declaration: `function scheduleSelectionInspectorTextField(event) {`

### `focusAdjacentImageText` line 9871

Part of the private builder frontend and editing experience.

Signature or declaration: `function focusAdjacentImageText(block, direction) {`

### `handleRichCaretClick` line 9884

Handles an event, request, command, or user action.

Signature or declaration: `function handleRichCaretClick(event) {`

### `handleRichDragStart` line 9891

Handles an event, request, command, or user action.

Signature or declaration: `function handleRichDragStart(event) {`

### `handleRichDragOver` line 9912

Handles an event, request, command, or user action.

Signature or declaration: `function handleRichDragOver(event) {`

### `richRangeFromPoint` line 9921

Part of the private builder frontend and editing experience.

Signature or declaration: `function richRangeFromPoint(x, y) {`

### `richDropLocation` line 9935

Part of the private builder frontend and editing experience.

Signature or declaration: `function richDropLocation(editor, movingBlock, x, y, eventTarget = null) {`

### `validDropRangeForEditor` line 9952

Part of the private builder frontend and editing experience.

Signature or declaration: `function validDropRangeForEditor(editor, movingBlock, range) {`

### `ensureRichDropMarker` line 9962

Part of the private builder frontend and editing experience.

Signature or declaration: `function ensureRichDropMarker() {`

### `hideRichDropMarker` line 9973

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function hideRichDropMarker() {`

### `updateRichDropMarker` line 9977

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateRichDropMarker(editor, movingBlock, x, y, eventTarget = null) {`

### `moveRichBlockToPoint` line 10008

Part of the private builder frontend and editing experience.

Signature or declaration: `function moveRichBlockToPoint(editor, movingBlock, x, y, eventTarget = null, options = {}) {`

### `handleRichDrop` line 10031

Handles an event, request, command, or user action.

Signature or declaration: `function handleRichDrop(event) {`

### `imageMoveDragControl` line 10041

Part of the private builder frontend and editing experience.

Signature or declaration: `function imageMoveDragControl(target) {`

### `beginRichImageMoveDrag` line 10045

Part of the private builder frontend and editing experience.

Signature or declaration: `function beginRichImageMoveDrag(event) {`

### `moveRichImageMoveDrag` line 10063

Part of the private builder frontend and editing experience.

Signature or declaration: `function moveRichImageMoveDrag(event) {`

### `endRichImageMoveDrag` line 10079

Part of the private builder frontend and editing experience.

Signature or declaration: `function endRichImageMoveDrag(event) {`

### `beginImageCropDrag` line 10094

Part of the private builder frontend and editing experience.

Signature or declaration: `function beginImageCropDrag(event) {`

### `moveImageCropDrag` line 10111

Part of the private builder frontend and editing experience.

Signature or declaration: `function moveImageCropDrag(event) {`

### `endImageCropDrag` line 10123

Part of the private builder frontend and editing experience.

Signature or declaration: `function endImageCropDrag() {`

### `handleStandaloneRichClick` line 10211

Handles an event, request, command, or user action.

Signature or declaration: `async function handleStandaloneRichClick(event) {`

### `hasDataset` line 10323

Part of the private builder frontend and editing experience.

Signature or declaration: `const hasDataset = (key) => Object.prototype.hasOwnProperty.call(button.dataset, key);`

## Important Constants And Variables

- Line 1: `builderGuideOpen` from `const builderGuideOpen = document.querySelector("#builder-guide-open");`
- Line 2: `builderGuideDialog` from `const builderGuideDialog = document.querySelector("#builder-guide-dialog");`
- Line 3: `builderGuideClose` from `const builderGuideClose = document.querySelector("#builder-guide-close");`
- Line 4: `builderGuideSearch` from `const builderGuideSearch = document.querySelector("#builder-guide-search");`
- Line 5: `builderGuideResults` from `const builderGuideResults = document.querySelector("#builder-guide-results");`
- Line 6: `builderGuideSections` from `const builderGuideSections = document.querySelector("#builder-guide-sections");`
- Line 7: `builderGuideTopicDialog` from `const builderGuideTopicDialog = document.querySelector("#builder-guide-topic-dialog");`
- Line 8: `builderGuideTopicTitle` from `const builderGuideTopicTitle = document.querySelector("#builder-guide-topic-title");`
- Line 9: `builderGuideTopicBody` from `const builderGuideTopicBody = document.querySelector("#builder-guide-topic-body");`
- Line 10: `builderGuideTopicClose` from `const builderGuideTopicClose = document.querySelector("#builder-guide-topic-close");`
- Line 11: `templateSelect` from `const templateSelect = document.querySelector("#template-select");`
- Line 12: `newCategorySelect` from `const newCategorySelect = document.querySelector("#new-category-select");`
- Line 13: `placementSelect` from `const placementSelect = document.querySelector("#placement-select");`
- Line 14: `newProjectTitle` from `const newProjectTitle = document.querySelector("#new-project-title");`
- Line 15: `addProjectButton` from `const addProjectButton = document.querySelector("#add-project");`
- Line 16: `addCategoryButton` from `const addCategoryButton = document.querySelector("#add-category");`
- Line 17: `addSiteSectionButton` from `const addSiteSectionButton = document.querySelector("#add-site-section");`
- Line 18: `funFactsInput` from `const funFactsInput = document.querySelector("#fun-facts-input");`
- Line 19: `funFactsCount` from `const funFactsCount = document.querySelector("#fun-facts-count");`
- Line 20: `saveFunFactsButton` from `const saveFunFactsButton = document.querySelector("#save-fun-facts");`
- Line 21: `clearFunFactsButton` from `const clearFunFactsButton = document.querySelector("#clear-fun-facts");`
- Line 22: `siteHeroEyebrowInput` from `const siteHeroEyebrowInput = document.querySelector("#site-hero-eyebrow");`
- Line 23: `siteHeroTitleInput` from `const siteHeroTitleInput = document.querySelector("#site-hero-title");`
- Line 24: `siteHeroCopyInput` from `const siteHeroCopyInput = document.querySelector("#site-hero-copy");`
- Line 25: `saveSiteContentButton` from `const saveSiteContentButton = document.querySelector("#save-site-content");`
- Line 26: `profileDisplayNameInput` from `const profileDisplayNameInput = document.querySelector("#profile-display-name");`
- Line 27: `profilePortfolioLabelInput` from `const profilePortfolioLabelInput = document.querySelector("#profile-portfolio-label");`
- Line 28: `profileContactIntroInput` from `const profileContactIntroInput = document.querySelector("#profile-contact-intro");`
- Line 29: `profileEmailInput` from `const profileEmailInput = document.querySelector("#profile-email");`
- Line 30: `profilePhoneInput` from `const profilePhoneInput = document.querySelector("#profile-phone");`
- Line 31: `profileGithubInput` from `const profileGithubInput = document.querySelector("#profile-github");`
- Line 32: `profileLinkedinInput` from `const profileLinkedinInput = document.querySelector("#profile-linkedin");`
- Line 33: `profileWebsiteInput` from `const profileWebsiteInput = document.querySelector("#profile-website");`
- Line 34: `saveProfileContentButton` from `const saveProfileContentButton = document.querySelector("#save-profile-content");`
- Line 35: `profileImageUploadButton` from `const profileImageUploadButton = document.querySelector("#profile-image-upload");`
- Line 36: `profileHeroUploadButton` from `const profileHeroUploadButton = document.querySelector("#profile-hero-upload");`
- Line 37: `profileResumeUploadButton` from `const profileResumeUploadButton = document.querySelector("#profile-resume-upload");`
- Line 38: `profileBrandUploadButton` from `const profileBrandUploadButton = document.querySelector("#profile-brand-upload");`
- Line 39: `profileAssetStatus` from `const profileAssetStatus = document.querySelector("#profile-asset-status");`
- Line 40: `categoryDropdown` from `const categoryDropdown = document.querySelector("#category-dropdown");`
- Line 41: `siteSectionList` from `const siteSectionList = document.querySelector("#site-section-list");`
- Line 42: `projectCreateDialog` from `const projectCreateDialog = document.querySelector("#project-create-dialog");`
- Line 43: `projectCreateForm` from `const projectCreateForm = document.querySelector("#project-create-form");`
- Line 44: `projectCreateCategory` from `const projectCreateCategory = document.querySelector("#project-create-category");`
- Line 45: `projectCreateCancel` from `const projectCreateCancel = document.querySelector("#project-create-cancel");`
- Line 46: `categoryDialog` from `const categoryDialog = document.querySelector("#category-dialog");`
- Line 47: `categoryForm` from `const categoryForm = document.querySelector("#category-form");`
- Line 48: `categoryTitle` from `const categoryTitle = document.querySelector("#category-title");`
- Line 49: `categoryDescription` from `const categoryDescription = document.querySelector("#category-description");`
- Line 50: `categoryAccent` from `const categoryAccent = document.querySelector("#category-accent");`
- Line 51: `categoryCancel` from `const categoryCancel = document.querySelector("#category-cancel");`
- Line 52: `projectTree` from `const projectTree = document.querySelector("#project-tree");`
- Line 53: `projectSearchInput` from `const projectSearchInput = document.querySelector("#project-search");`
- Line 54: `projectSearchClear` from `const projectSearchClear = document.querySelector("#project-search-clear");`
- Line 55: `projectSearchStatus` from `const projectSearchStatus = document.querySelector("#project-search-status");`
- Line 56: `projectDialog` from `const projectDialog = document.querySelector("#project-dialog");`
- Line 57: `projectWindowTitle` from `const projectWindowTitle = document.querySelector("#project-window-title");`
- Line 58: `projectWindowClose` from `const projectWindowClose = document.querySelector("#project-window-close");`
- Line 59: `projectWindowDelete` from `const projectWindowDelete = document.querySelector("#project-window-delete");`
- Line 60: `viewProjectPreviewButton` from `const viewProjectPreviewButton = document.querySelector("#view-project-preview");`
- Line 61: `saveProjectButton` from `const saveProjectButton = document.querySelector("#save-project");`
- Line 62: `saveProjectCloseButton` from `const saveProjectCloseButton = document.querySelector("#save-project-close");`
- Line 63: `projectTitleMenu` from `const projectTitleMenu = document.querySelector("#project-title-menu");`
- Line 64: `titleRenameActions` from `const titleRenameActions = document.querySelector("#title-rename-actions");`
- Line 65: `titleRenameSave` from `const titleRenameSave = document.querySelector("#title-rename-save");`
- Line 66: `titleRenameCancel` from `const titleRenameCancel = document.querySelector("#title-rename-cancel");`
- Line 67: `projectMetaDialog` from `const projectMetaDialog = document.querySelector("#project-meta-dialog");`
- Line 68: `projectMetaTitle` from `const projectMetaTitle = document.querySelector("#project-meta-title");`
- Line 69: `projectMetaGrid` from `const projectMetaGrid = document.querySelector("#project-meta-grid");`
- Line 70: `projectMetaClose` from `const projectMetaClose = document.querySelector("#project-meta-close");`
- Line 71: `projectFields` from `const projectFields = document.querySelector("#project-fields");`
- Line 72: `sectionTabs` from `const sectionTabs = document.querySelector("#section-tabs");`
- Line 73: `sectionContent` from `const sectionContent = document.querySelector("#section-content");`
- Line 74: `projectWindowContent` from `const projectWindowContent = document.querySelector(".project-window-content");`
- Line 75: `projectPreviewDialog` from `const projectPreviewDialog = document.querySelector("#project-preview-dialog");`
- Line 76: `projectPreviewTitle` from `const projectPreviewTitle = document.querySelector("#project-preview-title");`
- Line 77: `projectPreviewContent` from `const projectPreviewContent = document.querySelector("#project-preview-content");`
- Line 78: `projectPreviewClose` from `const projectPreviewClose = document.querySelector("#project-preview-close");`
- Line 79: `projectPreviewBack` from `const projectPreviewBack = document.querySelector("#project-preview-back");`
- Line 80: `projectPreviewForward` from `const projectPreviewForward = document.querySelector("#project-preview-forward");`

## Event Handlers

- Line 1048: `document.addEventListener("pointerdown", beginDialogResize);`
- Line 1049: `document.addEventListener("pointerdown", beginDialogDrag);`
- Line 1050: `document.addEventListener("pointermove", moveDialogResize);`
- Line 1051: `document.addEventListener("pointermove", moveDialogDrag);`
- Line 1052: `document.addEventListener("pointerup", endDialogResize);`
- Line 1053: `document.addEventListener("pointerup", endDialogDrag);`
- Line 1054: `document.addEventListener("pointercancel", endDialogResize);`
- Line 1055: `document.addEventListener("pointercancel", endDialogDrag);`
- Line 1056: `document.addEventListener("click", (event) => {`
- Line 1061: `document.addEventListener("click", (event) => {`
- Line 1067: `dialog.addEventListener("close", () => {`
- Line 1076: `window.addEventListener("resize", () => {`
- Line 1319: `document.addEventListener("visibilitychange", () => {`
- Line 6166: `siteLinkDialog.addEventListener("close", onClose);`
- Line 8325: `dialog.addEventListener("close", onClose);`
- Line 8747: `templateSelect.addEventListener("change", () => {`
- Line 8752: `templatePreviewClose.addEventListener("click", () => {`
- Line 8880: `builderGuideOpen.addEventListener("click", () => {`
- Line 8887: `builderGuideClose.addEventListener("click", () => {`
- Line 8891: `builderGuideTopicClose?.addEventListener("click", () => {`
- Line 8895: `builderGuideTopicDialog?.addEventListener("close", () => {`
- Line 8899: `builderGuideSearch?.addEventListener("input", filterBuilderGuide);`
- Line 8900: `builderGuideDialog?.addEventListener("click", (event) => {`
- Line 8915: `builderGuideDialog?.addEventListener("keydown", (event) => {`
- Line 8923: `projectWindowTitle.addEventListener("dblclick", (event) => {`
- Line 8929: `projectWindowTitle.addEventListener("keydown", (event) => {`
- Line 8946: `projectWindowTitle.addEventListener("contextmenu", (event) => {`
- Line 8954: `projectTitleMenu.addEventListener("click", async (event) => {`
- Line 8991: `titleRenameSave.addEventListener("click", () => endTitleRename(true));`
- Line 8992: `titleRenameCancel.addEventListener("click", () => endTitleRename(false));`
- Line 8993: `projectMetaClose.addEventListener("click", () => closeDialogElement(projectMetaDialog));`
- Line 8995: `viewProjectPreviewButton.addEventListener("click", openProjectPortfolioPreview);`
- Line 8996: `projectPreviewClose.addEventListener("click", closeProjectPreviewWindow);`
- Line 8997: `projectPreviewDialog.addEventListener("close", () => {`
- Line 9001: `projectPreviewBack.addEventListener("click", projectPreviewBackStep);`
- Line 9002: `projectPreviewForward.addEventListener("click", projectPreviewForwardStep);`
- Line 9004: `projectPreviewContent.addEventListener("click", (event) => {`
- Line 9012: `saveProjectButton.addEventListener("click", saveSelectedProjectToPortfolio);`
- Line 9013: `saveProjectCloseButton.addEventListener("click", saveSelectedProjectAndClose);`
- Line 9014: `openPortfolioPreviewButton.addEventListener("click", openPortfolioPreview);`
- Line 9015: `saveAllSectionsButton.addEventListener("click", saveAllSections);`
- Line 9016: `portfolioPreviewClose.addEventListener("click", () => {`
- Line 9019: `portfolioPreviewDialog.addEventListener("close", () => {`
- Line 9022: `publishTargetOpen?.addEventListener("click", openPublishTargetDialog);`
- Line 9023: `publishTargetClose?.addEventListener("click", () => {`
- Line 9026: `publishTargetCancel?.addEventListener("click", () => {`
- Line 9029: `publishTargetForm?.addEventListener("submit", savePublishTarget);`
- Line 9030: `publishTargetSync?.addEventListener("click", syncFromPublishTarget);`
- Line 9031: `publishTargetCheck?.addEventListener("click", loadSystemReadiness);`
- Line 9032: `publishTargetInstallGit?.addEventListener("click", installGitForPublishing);`
- Line 9033: `publishTargetRepository?.addEventListener("input", () => {`
- Line 9036: `publishTargetDomain?.addEventListener("input", () => {`
- Line 9040: `publishTargetUsername?.addEventListener("input", markPublishTargetNeedsAuthentication);`
- Line 9041: `publishTargetPassword?.addEventListener("input", markPublishTargetNeedsAuthentication);`
- Line 9042: `publishResultClose.addEventListener("click", () => {`
- Line 9046: `appUpdateClose?.addEventListener("click", () => {`
- Line 9050: `appUpdateLater?.addEventListener("click", () => {`
- Line 9058: `appUpdateSkip?.addEventListener("click", () => {`
- Line 9065: `appUpdateApply?.addEventListener("click", () => {`
- Line 9069: `appUpdateCheckButton?.addEventListener("click", () => {`
- Line 9073: `securityReportOpen?.addEventListener("click", openSecurityReport);`
- Line 9074: `securityReportRefresh?.addEventListener("click", openSecurityReport);`
- Line 9075: `securityReportClose?.addEventListener("click", () => {`
- Line 9078: `securityReportOk?.addEventListener("click", () => {`
- Line 9082: `addProjectButton.addEventListener("click", () => {`
- Line 9086: `projectSearchInput?.addEventListener("input", () => {`
- Line 9091: `projectSearchClear?.addEventListener("click", () => {`
- Line 9100: `quickOpenSelected?.addEventListener("click", () => {`
- Line 9106: `quickPreviewSelected?.addEventListener("click", () => {`
- Line 9112: `addCategoryButton?.addEventListener("click", openCategoryDialog);`
- Line 9113: `categoryCancel?.addEventListener("click", () => closeDialogElement(categoryDialog, "cancel"));`
- Line 9114: `categoryForm?.addEventListener("submit", (event) => {`
- Line 9120: `addSiteSectionButton.addEventListener("click", addSiteSection);`
- Line 9122: `funFactsInput?.addEventListener("input", () => {`
- Line 9128: `saveFunFactsButton?.addEventListener("click", () => {`
- Line 9135: `clearFunFactsButton?.addEventListener("click", () => {`
- Line 9146: `input.addEventListener("input", () => {`
- Line 9154: `saveSiteContentButton?.addEventListener("click", () => {`
- Line 9171: `input.addEventListener("input", () => {`
- Line 9179: `saveProfileContentButton?.addEventListener("click", () => {`

## Representative Opening Snippet

```
const builderGuideOpen = document.querySelector("#builder-guide-open");
const builderGuideDialog = document.querySelector("#builder-guide-dialog");
const builderGuideClose = document.querySelector("#builder-guide-close");
const builderGuideSearch = document.querySelector("#builder-guide-search");
const builderGuideResults = document.querySelector("#builder-guide-results");
const builderGuideSections = document.querySelector("#builder-guide-sections");
const builderGuideTopicDialog = document.querySelector("#builder-guide-topic-dialog");
const builderGuideTopicTitle = document.querySelector("#builder-guide-topic-title");
const builderGuideTopicBody = document.querySelector("#builder-guide-topic-body");
const builderGuideTopicClose = document.querySelector("#builder-guide-topic-close");
const templateSelect = document.querySelector("#template-select");
const newCategorySelect = document.querySelector("#new-category-select");
const placementSelect = document.querySelector("#placement-select");
const newProjectTitle = document.querySelector("#new-project-title");
const addProjectButton = document.querySelector("#add-project");
const addCategoryButton = document.querySelector("#add-category");
const addSiteSectionButton = document.querySelector("#add-site-section");
const funFactsInput = document.querySelector("#fun-facts-input");
const funFactsCount = document.querySelector("#fun-facts-count");
const saveFunFactsButton = document.querySelector("#save-fun-facts");
const clearFunFactsButton = document.querySelector("#clear-fun-facts");
const siteHeroEyebrowInput = document.querySelector("#site-hero-eyebrow");
const siteHeroTitleInput = document.querySelector("#site-hero-title");
const siteHeroCopyInput = document.querySelector("#site-hero-copy");
const saveSiteContentButton = document.querySelector("#save-site-content");
const profileDisplayNameInput = document.querySelector("#profile-display-name");
const profilePortfolioLabelInput = document.querySelector("#profile-portfolio-label");
const profileContactIntroInput = document.querySelector("#profile-contact-intro");
const profileEmailInput = document.querySelector("#profile-email");
const profilePhoneInput = document.querySelector("#profile-phone");
const profileGithubInput = document.querySelector("#profile-github");
const profileLinkedinInput = document.querySelector("#profile-linkedin");
const profileWebsiteInput = document.querySelector("#profile-website");
const saveProfileContentButton = document.querySelector("#save-profile-content");
const profileImageUploadButton = document.querySelector("#profile-image-upload");
const profileHeroUploadButton = document.querySelector("#profile-hero-upload");
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?