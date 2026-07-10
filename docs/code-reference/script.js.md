# script.js

Public website JavaScript for navigation, portfolio rendering, search, AI UI, and interactive project windows.

## Quick Facts

- Lines: 3,710
- Size: 158,530 bytes
- Talks to: portfolio catalog, GitHub/release layer
- API endpoints mentioned: 2
- Named functions discovered: 236

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## API Endpoints Mentioned

- Line 1492: `/api/portfolio-ai` - Handles AI assistant questions.
- Line 1493: `/api/portfolio-ai` - Handles AI assistant questions.

## Functions

### `normalize` line 132

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalize(value) {`

### `normalizeFunFacts` line 136

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeFunFacts(value) {`

### `renderFunFacts` line 144

Renders UI, markup, or display output.

Signature or declaration: `function renderFunFacts() {`

### `clampSectionDialogPosition` line 161

Part of the public website runtime.

Signature or declaration: `function clampSectionDialogPosition(left, top, dialog) {`

### `anchorSectionDialog` line 172

Part of the public website runtime.

Signature or declaration: `function anchorSectionDialog(dialog) {`

### `ensureSectionResizeHandles` line 183

Part of the public website runtime.

Signature or declaration: `function ensureSectionResizeHandles(dialog) {`

### `anchorSectionDialogForResize` line 194

Part of the public website runtime.

Signature or declaration: `function anchorSectionDialogForResize(dialog) {`

### `sectionDialogResizeBounds` line 203

Part of the public website runtime.

Signature or declaration: `function sectionDialogResizeBounds(state, event) {`

### `sectionDialogFromDragEvent` line 232

Part of the public website runtime.

Signature or declaration: `function sectionDialogFromDragEvent(event) {`

### `beginSectionDialogDrag` line 241

Part of the public website runtime.

Signature or declaration: `function beginSectionDialogDrag(event) {`

### `moveSectionDialogDrag` line 259

Part of the public website runtime.

Signature or declaration: `function moveSectionDialogDrag(event) {`

### `endSectionDialogDrag` line 270

Part of the public website runtime.

Signature or declaration: `function endSectionDialogDrag() {`

### `beginSectionDialogResize` line 277

Part of the public website runtime.

Signature or declaration: `function beginSectionDialogResize(event) {`

### `moveSectionDialogResize` line 297

Part of the public website runtime.

Signature or declaration: `function moveSectionDialogResize(event) {`

### `endSectionDialogResize` line 306

Part of the public website runtime.

Signature or declaration: `function endSectionDialogResize() {`

### `updateSectionDialogMinimize` line 313

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateSectionDialogMinimize(dialog) {`

### `toggleSectionDialogMinimized` line 322

Part of the public website runtime.

Signature or declaration: `function toggleSectionDialogMinimized(dialog) {`

### `enableSectionDialogDrag` line 328

Part of the public website runtime.

Signature or declaration: `function enableSectionDialogDrag() {`

### `escapeHtml` line 349

Part of the public website runtime.

Signature or declaration: `function escapeHtml(value) {`

### `normalizeCodeLanguage` line 358

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCodeLanguage(value = "") {`

### `codeLanguageLabel` line 366

Part of the public website runtime.

Signature or declaration: `function codeLanguageLabel(value = "") {`

### `normalizeCodePasteMode` line 370

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCodePasteMode(value = "") {`

### `normalizeCodeText` line 374

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCodeText(value = "", pasteMode = "source") {`

### `sourceLooksCpp` line 385

Part of the public website runtime.

Signature or declaration: `function sourceLooksCpp(source = "") {`

### `sourceLooksC` line 391

Part of the public website runtime.

Signature or declaration: `function sourceLooksC(source = "") {`

### `detectCodeLanguage` line 397

Part of the public website runtime.

Signature or declaration: `function detectCodeLanguage(value = "") {`

### `tokenizedCodeHtml` line 412

Part of the public website runtime.

Signature or declaration: `function tokenizedCodeHtml(code = "", language = "javascript") {`

### `protect` line 415

Part of the public website runtime.

Signature or declaration: `const protect = (pattern, className) => {`

### `renderRichCodeBlock` line 456

Renders UI, markup, or display output.

Signature or declaration: `function renderRichCodeBlock(block = {}) {`

### `renderPlainMultiline` line 467

Renders UI, markup, or display output.

Signature or declaration: `function renderPlainMultiline(value = "") {`

### `normalizeSiteContent` line 471

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeSiteContent(content = {}) {`

### `normalizeProfile` line 479

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeProfile(profileValue = {}) {`

### `mailComposeLink` line 497

Part of the public website runtime.

Signature or declaration: `function mailComposeLink(email = "") {`

### `phoneLink` line 502

Part of the public website runtime.

Signature or declaration: `function phoneLink(phone = "") {`

### `renderSiteContent` line 507

Renders UI, markup, or display output.

Signature or declaration: `function renderSiteContent() {`

### `renderProfile` line 517

Renders UI, markup, or display output.

Signature or declaration: `function renderProfile() {`

### `textBlocksFromPlainText` line 629

Part of the public website runtime.

Signature or declaration: `function textBlocksFromPlainText(text) {`

### `unwrapFormula` line 639

Part of the public website runtime.

Signature or declaration: `function unwrapFormula(value) {`

### `renderInlineMath` line 654

Renders UI, markup, or display output.

Signature or declaration: `function renderInlineMath(text) {`

### `renderMultilineInlineText` line 665

Renders UI, markup, or display output.

Signature or declaration: `function renderMultilineInlineText(text = "") {`

### `looksLikeBareWebAddress` line 669

Part of the public website runtime.

Signature or declaration: `function looksLikeBareWebAddress(value = "") {`

### `looksLikeWebOrContactText` line 678

Part of the public website runtime.

Signature or declaration: `function looksLikeWebOrContactText(value = "") {`

### `normalizeLinkTarget` line 688

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeLinkTarget(target = "", options = {}) {`

### `isWebsiteLinkItem` line 697

Part of the public website runtime.

Signature or declaration: `function isWebsiteLinkItem(item = {}, target = "") {`

### `linkifyRichTextNodes` line 707

Part of the public website runtime.

Signature or declaration: `function linkifyRichTextNodes(root) {`

### `sanitizeRichInlineHtml` line 744

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function sanitizeRichInlineHtml(value = "") {`

### `displayTitle` line 789

Part of the public website runtime.

Signature or declaration: `function displayTitle(value, fallback = "Untitled item") {`

### `cleanFontFamily` line 800

Part of the public website runtime.

Signature or declaration: `function cleanFontFamily(value = "") {`

### `normalizeFontPx` line 809

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeFontPx(value) {`

### `normalizeTextColor` line 813

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeTextColor(value = "") {`

### `rgbColorToHex` line 822

Part of the public website runtime.

Signature or declaration: `function rgbColorToHex(value = "") {`

### `normalizePlainFieldStyle` line 832

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizePlainFieldStyle(style = {}) {`

### `normalizeFieldStyles` line 846

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeFieldStyles(styles = {}) {`

### `plainFieldStyleToCss` line 854

Part of the public website runtime.

Signature or declaration: `function plainFieldStyleToCss(style = {}) {`

### `applyPlainFieldStyle` line 866

Part of the public website runtime.

Signature or declaration: `function applyPlainFieldStyle(element, fieldId = "") {`

### `plainFieldStyleAttribute` line 877

Part of the public website runtime.

Signature or declaration: `function plainFieldStyleAttribute(fieldId = "") {`

### `richTextStyle` line 882

Part of the public website runtime.

Signature or declaration: `function richTextStyle(block = {}) {`

### `normalizeCropAspect` line 898

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCropAspect(value = "") {`

### `normalizeCropZoom` line 902

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCropZoom(value = 1) {`

### `normalizeCropPosition` line 907

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCropPosition(value = 50) {`

### `richImageCropStyle` line 912

Part of the public website runtime.

Signature or declaration: `function richImageCropStyle(block = {}) {`

### `richImageDownloadLink` line 923

Part of the public website runtime.

Signature or declaration: `function richImageDownloadLink(block = {}) {`

### `cleanRichImageTitle` line 942

Part of the public website runtime.

Signature or declaration: `function cleanRichImageTitle(block = {}) {`

### `renderRichContent` line 947

Renders UI, markup, or display output.

Signature or declaration: `function renderRichContent(rich, fallbackText = "") {`

### `renderRichFieldContent` line 984

Renders UI, markup, or display output.

Signature or declaration: `function renderRichFieldContent(rich, fallbackText = "") {`

### `slugLabel` line 996

Part of the public website runtime.

Signature or declaration: `function slugLabel(value) {`

### `canonicalTemplateId` line 1001

Part of the public website runtime.

Signature or declaration: `function canonicalTemplateId(id) {`

### `projectTemplateId` line 1005

Part of the public website runtime.

Signature or declaration: `function projectTemplateId(project) {`

### `projectTemplateClass` line 1009

Part of the public website runtime.

Signature or declaration: `function projectTemplateClass(project) {`

### `responsiveClassName` line 1014

Part of the public website runtime.

Signature or declaration: `function responsiveClassName(value, fallback) {`

### `projectResponsiveClass` line 1021

Part of the public website runtime.

Signature or declaration: `function projectResponsiveClass(project) {`

### `responsiveStyleValues` line 1026

Part of the public website runtime.

Signature or declaration: `function responsiveStyleValues(project) {`

### `hasPublicTemplate` line 1036

Part of the public website runtime.

Signature or declaration: `function hasPublicTemplate(project) {`

### `projectTemplateVisual` line 1040

Part of the public website runtime.

Signature or declaration: `function projectTemplateVisual(project) {`

### `projectTemplateStyle` line 1044

Part of the public website runtime.

Signature or declaration: `function projectTemplateStyle(project, accent) {`

### `applyProjectTemplateToElement` line 1064

Part of the public website runtime.

Signature or declaration: `function applyProjectTemplateToElement(element, project, accent) {`

### `parsedItemTerms` line 1100

Part of the public website runtime.

Signature or declaration: `function parsedItemTerms(item) {`

### `flattenProject` line 1112

Part of the public website runtime.

Signature or declaration: `function flattenProject(project) {`

### `richSummaryTerms` line 1117

Part of the public website runtime.

Signature or declaration: `const richSummaryTerms = (project.summaryRich?.blocks || []).flatMap((block) => [`

### `parsedChildTerms` line 1123

Part of the public website runtime.

Signature or declaration: `const parsedChildTerms = (project.portfolioView?.sections || []).flatMap((section) =>`

### `projectMatches` line 1167

Part of the public website runtime.

Signature or declaration: `function projectMatches(project, query) {`

### `projectVisible` line 1171

Part of the public website runtime.

Signature or declaration: `function projectVisible(project, query) {`

### `normalizeCategory` line 1176

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeCategory(category = {}) {`

### `hydrateProjectCategories` line 1186

Part of the public website runtime.

Signature or declaration: `function hydrateProjectCategories(rawCategories = [], rawProjects = []) {`

### `setActiveFilter` line 1203

Part of the public website runtime.

Signature or declaration: `function setActiveFilter(filter = "all") {`

### `bindFilterButtons` line 1211

Part of the public website runtime.

Signature or declaration: `function bindFilterButtons() {`

### `renderCategoryFilters` line 1222

Renders UI, markup, or display output.

Signature or declaration: `function renderCategoryFilters() {`

### `flattenSearchText` line 1243

Part of the public website runtime.

Signature or declaration: `function flattenSearchText(values = []) {`

### `richTextTerms` line 1253

Part of the public website runtime.

Signature or declaration: `function richTextTerms(rich) {`

### `addSearchEntry` line 1266

Part of the public website runtime.

Signature or declaration: `function addSearchEntry(entries, entry) {`

### `searchSnippet` line 1278

Part of the public website runtime.

Signature or declaration: `function searchSnippet(text = "", query = "") {`

### `entryScore` line 1288

Part of the public website runtime.

Signature or declaration: `function entryScore(entry, query) {`

### `entryMatches` line 1316

Part of the public website runtime.

Signature or declaration: `function entryMatches(entry, query) {`

### `fileIsBrowserSearchable` line 1320

Part of the public website runtime.

Signature or declaration: `function fileIsBrowserSearchable(url = "") {`

### `indexSearchableFileText` line 1325

Part of the public website runtime.

Signature or declaration: `async function indexSearchableFileText(entry) {`

### `addProjectSearchEntries` line 1340

Part of the public website runtime.

Signature or declaration: `function addProjectSearchEntries(entries, project) {`

### `sections` line 1364

Part of the public website runtime.

Signature or declaration: `const sections = (project.portfolioView?.sections || []).filter((section) => section.id !== "brief" && sectionHasRenderableContent(section));`

### `addSiteSectionSearchEntries` line 1416

Part of the public website runtime.

Signature or declaration: `function addSiteSectionSearchEntries(entries) {`

### `rebuildSearchIndex` line 1465

Part of the public website runtime.

Signature or declaration: `function rebuildSearchIndex() {`

### `searchResultsFor` line 1472

Part of the public website runtime.

Signature or declaration: `function searchResultsFor(query) {`

### `assistantEndpoint` line 1488

Part of the public website runtime.

Signature or declaration: `function assistantEndpoint() {`

### `assistantSourceLabel` line 1496

Part of the public website runtime.

Signature or declaration: `function assistantSourceLabel(result = {}) {`

### `assistantProjectSummary` line 1507

Part of the public website runtime.

Signature or declaration: `function assistantProjectSummary(project = {}) {`

### `assistantProjectTitleAcronyms` line 1524

Part of the public website runtime.

Signature or declaration: `function assistantProjectTitleAcronyms(title = "") {`

### `assistantProjectIsNamedInQuestion` line 1537

Part of the public website runtime.

Signature or declaration: `function assistantProjectIsNamedInQuestion(question = "", project = {}) {`

### `assistantNamedProjectIds` line 1555

Part of the public website runtime.

Signature or declaration: `function assistantNamedProjectIds(question = "") {`

### `assistantProjectTitleMatches` line 1561

Part of the public website runtime.

Signature or declaration: `function assistantProjectTitleMatches(question = "") {`

### `assistantUrlKind` line 1565

Part of the public website runtime.

Signature or declaration: `function assistantUrlKind(url = "") {`

### `assistantAbsoluteUrl` line 1579

Part of the public website runtime.

Signature or declaration: `function assistantAbsoluteUrl(url = "") {`

### `assistantLinkRecordsFromValue` line 1589

Part of the public website runtime.

Signature or declaration: `function assistantLinkRecordsFromValue(value, context = "") {`

### `assistantUrlsFromTextValue` line 1606

Part of the public website runtime.

Signature or declaration: `function assistantUrlsFromTextValue(value, context = "") {`

### `assistantPublicProfileLinks` line 1621

Part of the public website runtime.

Signature or declaration: `function assistantPublicProfileLinks() {`

### `assistantProjectEvidence` line 1651

Part of the public website runtime.

Signature or declaration: `function assistantProjectEvidence(project = {}) {`

### `assistantQuestionIsCasual` line 1669

Part of the public website runtime.

Signature or declaration: `function assistantQuestionIsCasual(question = "") {`

### `assistantQuestionHasPortfolioIntent` line 1677

Part of the public website runtime.

Signature or declaration: `function assistantQuestionHasPortfolioIntent(question = "") {`

### `assistantConversationSuggestsPortfolioContext` line 1684

Part of the public website runtime.

Signature or declaration: `function assistantConversationSuggestsPortfolioContext(history = []) {`

### `assistantQuestionAllowsPublicLookup` line 1690

Part of the public website runtime.

Signature or declaration: `function assistantQuestionAllowsPublicLookup(question = "", intent = assistantQuestionIntent(question)) {`

### `assistantQuestionLooksConceptual` line 1697

Part of the public website runtime.

Signature or declaration: `function assistantQuestionLooksConceptual(question = "") {`

### `assistantQuestionIntent` line 1704

Part of the public website runtime.

Signature or declaration: `function assistantQuestionIntent(question = "", history = assistantChatHistory) {`

### `assistantQuestionTokens` line 1719

Part of the public website runtime.

Signature or declaration: `function assistantQuestionTokens(question = "") {`

### `assistantSpecificSourceTokens` line 1732

Part of the public website runtime.

Signature or declaration: `function assistantSpecificSourceTokens(question = "") {`

### `assistantPromptTargetsProjectLanding` line 1741

Part of the public website runtime.

Signature or declaration: `function assistantPromptTargetsProjectLanding(question = "") {`

### `assistantEntryRelationScore` line 1748

Part of the public website runtime.

Signature or declaration: `function assistantEntryRelationScore(result = {}, question = "") {`

### `assistantNamedProjectTopicTokens` line 1764

Part of the public website runtime.

Signature or declaration: `function assistantNamedProjectTopicTokens(question = "", namedIds = assistantNamedProjectIds(question)) {`

### `assistantSourcesForDisplay` line 1778

Part of the public website runtime.

Signature or declaration: `function assistantSourcesForDisplay(question = "", results = [], intent = assistantQuestionIntent(question)) {`

### `assistantContextForQuestion` line 1815

Part of the public website runtime.

Signature or declaration: `function assistantContextForQuestion(question = "", intent = assistantQuestionIntent(question), knownResults = null) {`

### `assistantRemember` line 1892

Part of the public website runtime.

Signature or declaration: `function assistantRemember(role, content = "") {`

### `assistantConversationForRequest` line 1903

Part of the public website runtime.

Signature or declaration: `function assistantConversationForRequest(currentQuestion = "", priorConversation = assistantChatHistory) {`

### `assistantFallbackResults` line 1914

Part of the public website runtime.

Signature or declaration: `function assistantFallbackResults(question = "", intent = assistantQuestionIntent(question)) {`

### `assistantQuestionIsEngineeringRelated` line 1974

Part of the public website runtime.

Signature or declaration: `function assistantQuestionIsEngineeringRelated(question = "") {`

### `assistantGeneralEngineeringAnswer` line 1979

Part of the public website runtime.

Signature or declaration: `function assistantGeneralEngineeringAnswer(question = "") {`

### `assistantLocalAnswer` line 2093

Part of the public website runtime.

Signature or declaration: `function assistantLocalAnswer(question = "", results = [], intent = assistantQuestionIntent(question)) {`

### `assistantSourcesMarkup` line 2190

Part of the public website runtime.

Signature or declaration: `function assistantSourcesMarkup(results = []) {`

### `setAssistantStatus` line 2210

Part of the public website runtime.

Signature or declaration: `function setAssistantStatus(message, state = "ready") {`

### `assistantDesktopDockedHeight` line 2216

Part of the public website runtime.

Signature or declaration: `function assistantDesktopDockedHeight() {`

### `updateAssistantPanelGrowth` line 2223

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateAssistantPanelGrowth() {`

### `renderAssistantInline` line 2248

Renders UI, markup, or display output.

Signature or declaration: `function renderAssistantInline(value = "") {`

### `renderAssistantAnswerContent` line 2252

Renders UI, markup, or display output.

Signature or declaration: `function renderAssistantAnswerContent(content = "") {`

### `flushBullets` line 2257

Part of the public website runtime.

Signature or declaration: `const flushBullets = () => {`

### `flushCode` line 2262

Part of the public website runtime.

Signature or declaration: `const flushCode = () => {`

### `appendAssistantMessage` line 2306

Part of the public website runtime.

Signature or declaration: `function appendAssistantMessage(role, content, sources = []) {`

### `scrollAssistantAnswerToStart` line 2319

Part of the public website runtime.

Signature or declaration: `function scrollAssistantAnswerToStart(article) {`

### `scrollToAnswer` line 2321

Part of the public website runtime.

Signature or declaration: `const scrollToAnswer = () => {`

### `appendAssistantPendingMessage` line 2331

Part of the public website runtime.

Signature or declaration: `function appendAssistantPendingMessage() {`

### `replaceAssistantMessage` line 2337

Part of the public website runtime.

Signature or declaration: `function replaceAssistantMessage(article, content, sources = []) {`

### `setAssistantBusy` line 2348

Part of the public website runtime.

Signature or declaration: `function setAssistantBusy(isBusy) {`

### `clearAssistantChat` line 2354

Part of the public website runtime.

Signature or declaration: `function clearAssistantChat() {`

### `assistantRemoteTimeoutMs` line 2365

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `function assistantRemoteTimeoutMs(question = "", context = {}, options = {}) {`

### `askRemoteAssistant` line 2376

Part of publishing, Git, target repository, or authorization behavior.

Signature or declaration: `async function askRemoteAssistant(question, context, options = {}) {`

### `answerAssistantQuestion` line 2413

Part of the public website runtime.

Signature or declaration: `async function answerAssistantQuestion(question = "") {`

### `linkAttributes` line 2459

Part of the public website runtime.

Signature or declaration: `function linkAttributes(url, item = {}) {`

### `isLocalDownloadTarget` line 2464

Part of the public website runtime.

Signature or declaration: `function isLocalDownloadTarget(target = "") {`

### `downloadAttribute` line 2469

Part of the public website runtime.

Signature or declaration: `function downloadAttribute(target = "", item = {}) {`

### `fileNameFromUrl` line 2474

Part of the public website runtime.

Signature or declaration: `function fileNameFromUrl(url = "") {`

### `resourceLink` line 2483

Part of the public website runtime.

Signature or declaration: `function resourceLink(item = {}, label = item.label || item.title || item.name || fileNameFromUrl(item.url || item.artifact)) {`

### `pillList` line 2503

Part of the public website runtime.

Signature or declaration: `function pillList(items, className = "") {`

### `evidenceList` line 2512

Part of the public website runtime.

Signature or declaration: `function evidenceList(items, renderItem, emptyMessage) {`

### `detailBlock` line 2520

Part of the public website runtime.

Signature or declaration: `function detailBlock(title, className, content) {`

### `mediaGrid` line 2529

Part of the public website runtime.

Signature or declaration: `function mediaGrid(items) {`

### `siteSectionHasContent` line 2551

Part of the public website runtime.

Signature or declaration: `function siteSectionHasContent(section) {`

### `siteSectionRenderable` line 2562

Part of the public website runtime.

Signature or declaration: `function siteSectionRenderable(section) {`

### `renderDynamicLinks` line 2566

Renders UI, markup, or display output.

Signature or declaration: `function renderDynamicLinks(items = []) {`

### `renderSiteSections` line 2572

Renders UI, markup, or display output.

Signature or declaration: `function renderSiteSections() {`

### `subsections` line 2579

Part of the public website runtime.

Signature or declaration: `const subsections = (section.subsections || []).filter((item) => item.title || item.description || item.richDescription?.blocks?.length || (item.links || []).length);`

### `customSectionBlocks` line 2611

Part of the public website runtime.

Signature or declaration: `function customSectionBlocks(project) {`

### `itemUrl` line 2623

Part of the public website runtime.

Signature or declaration: `function itemUrl(item = {}) {`

### `itemLabel` line 2627

Part of the public website runtime.

Signature or declaration: `function itemLabel(item = {}, fallback = "Download file") {`

### `normalizeDownloadAsset` line 2632

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeDownloadAsset(item = {}, fallbackType = "File") {`

### `collectRichDownloads` line 2645

Part of the public website runtime.

Signature or declaration: `function collectRichDownloads(rich, fallbackType = "File", output = []) {`

### `collectDownloadsFromValue` line 2661

Part of the public website runtime.

Signature or declaration: `function collectDownloadsFromValue(value, fallbackType = "File", output = []) {`

### `uniqueDownloads` line 2691

Part of the public website runtime.

Signature or declaration: `function uniqueDownloads(items = []) {`

### `renderDownloadBlock` line 2702

Renders UI, markup, or display output.

Signature or declaration: `function renderDownloadBlock(title, items = []) {`

### `renderCollectedDownloadSections` line 2719

Renders UI, markup, or display output.

Signature or declaration: `function renderCollectedDownloadSections(project) {`

### `renderParsedBriefBlock` line 2761

Renders UI, markup, or display output.

Signature or declaration: `function renderParsedBriefBlock(section, fallbackSummary = "") {`

### `pathToString` line 2773

Part of the public website runtime.

Signature or declaration: `function pathToString(path = []) {`

### `pathFromString` line 2777

Part of the public website runtime.

Signature or declaration: `function pathFromString(value = "") {`

### `sectionRouteState` line 2782

Part of the public website runtime.

Signature or declaration: `function sectionRouteState(projectId, sectionIndex, resourcePath = "") {`

### `canUseSectionHistory` line 2791

Part of the public website runtime.

Signature or declaration: `function canUseSectionHistory() {`

### `sectionBaseUrl` line 2795

Part of the public website runtime.

Signature or declaration: `function sectionBaseUrl() {`

### `sectionRouteUrl` line 2801

Part of the public website runtime.

Signature or declaration: `function sectionRouteUrl(projectId, sectionIndex, resourcePath = "") {`

### `sectionRouteFromState` line 2811

Part of the public website runtime.

Signature or declaration: `function sectionRouteFromState(state) {`

### `sectionRouteFromLocation` line 2821

Part of the public website runtime.

Signature or declaration: `function sectionRouteFromLocation() {`

### `sameSectionRoute` line 2833

Part of the public website runtime.

Signature or declaration: `function sameSectionRoute(left, right) {`

### `syncSectionRouteToHistory` line 2840

Keeps two places aligned, such as local data and target files.

Signature or declaration: `function syncSectionRouteToHistory(projectId, sectionIndex, resourcePath = "", mode = "push") {`

### `clearSectionRouteInHistory` line 2853

Part of the public website runtime.

Signature or declaration: `function clearSectionRouteInHistory() {`

### `initializeSectionHistoryState` line 2862

Part of the public website runtime.

Signature or declaration: `function initializeSectionHistoryState() {`

### `nodeAtPath` line 2873

Part of the public website runtime.

Signature or declaration: `function nodeAtPath(section, path = []) {`

### `nodeChildren` line 2884

Part of the public website runtime.

Signature or declaration: `function nodeChildren(node) {`

### `richHasRenderableContent` line 2888

Part of the public website runtime.

Signature or declaration: `function richHasRenderableContent(rich) {`

### `nodeHasRenderableContent` line 2899

Part of the public website runtime.

Signature or declaration: `function nodeHasRenderableContent(node) {`

### `sectionHasRenderableContent` line 2912

Part of the public website runtime.

Signature or declaration: `function sectionHasRenderableContent(section) {`

### `responsiveChildren` line 2916

Part of the public website runtime.

Signature or declaration: `function responsiveChildren(node) {`

### `richContainsMedia` line 2920

Part of the public website runtime.

Signature or declaration: `function richContainsMedia(rich) {`

### `responsiveNodeHasMedia` line 2924

Part of the public website runtime.

Signature or declaration: `function responsiveNodeHasMedia(node) {`

### `responsiveNodeCount` line 2932

Part of the public website runtime.

Signature or declaration: `function responsiveNodeCount(node) {`

### `responsiveNodeDepth` line 2937

Part of the public website runtime.

Signature or declaration: `function responsiveNodeDepth(node) {`

### `inferResponsiveProfile` line 2944

Part of the public website runtime.

Signature or declaration: `function inferResponsiveProfile(project) {`

### `projectResponsiveProfile` line 2978

Part of the public website runtime.

Signature or declaration: `function projectResponsiveProfile(project) {`

### `nodeSummary` line 2984

Part of the public website runtime.

Signature or declaration: `function nodeSummary(title, rich, text, emptyMessage = "No summary has been added yet.") {`

### `nodeIsOverview` line 2994

Part of the public website runtime.

Signature or declaration: `function nodeIsOverview(item = {}) {`

### `nodeOverviewDetails` line 2999

Part of the public website runtime.

Signature or declaration: `function nodeOverviewDetails(node, children = []) {`

### `parsedNodeCard` line 3019

Part of the public website runtime.

Signature or declaration: `function parsedNodeCard(node, projectId, sectionIndex, path) {`

### `parsedChildCards` line 3034

Part of the public website runtime.

Signature or declaration: `function parsedChildCards(children, projectId, sectionIndex, basePath = []) {`

### `parsedNodeContent` line 3044

Part of the public website runtime.

Signature or declaration: `function parsedNodeContent(node, projectId, sectionIndex, path = []) {`

### `parsedSectionContent` line 3060

Part of the public website runtime.

Signature or declaration: `function parsedSectionContent(section, projectId, sectionIndex, path = []) {`

### `parsedSection` line 3066

Part of the public website runtime.

Signature or declaration: `function parsedSection(section, index, project) {`

### `projectCard` line 3082

Part of the public website runtime.

Signature or declaration: `function projectCard(project) {`

### `categorySection` line 3166

Part of the public website runtime.

Signature or declaration: `function categorySection(category, visibleProjects) {`

### `escapeRegExp` line 3183

Part of the public website runtime.

Signature or declaration: `function escapeRegExp(value = "") {`

### `highlightQueryHtml` line 3187

Part of the public website runtime.

Signature or declaration: `function highlightQueryHtml(value = "", query = "") {`

### `clearSearchHighlights` line 3195

Part of the public website runtime.

Signature or declaration: `function clearSearchHighlights() {`

### `textNodeSearchTargets` line 3199

Part of the public website runtime.

Signature or declaration: `function textNodeSearchTargets() {`

### `applySearchHighlights` line 3206

Part of the public website runtime.

Signature or declaration: `function applySearchHighlights(query) {`

### `queueSearchHighlights` line 3240

Part of the public website runtime.

Signature or declaration: `function queueSearchHighlights() {`

### `ensureSearchPanel` line 3245

Part of the public website runtime.

Signature or declaration: `function ensureSearchPanel() {`

### `setSearchMessage` line 3285

Part of the public website runtime.

Signature or declaration: `function setSearchMessage(message, state = "neutral") {`

### `renderSearchResults` line 3291

Renders UI, markup, or display output.

Signature or declaration: `function renderSearchResults(query, visibleCount) {`

### `updateSearchDropdown` line 3329

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateSearchDropdown() {`

### `showSearchPanelIfNeeded` line 3335

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function showSearchPanelIfNeeded() {`

### `scrollToDomTarget` line 3340

Part of the public website runtime.

Signature or declaration: `function scrollToDomTarget(id) {`

### `goToSearchResult` line 3354

Part of the public website runtime.

Signature or declaration: `function goToSearchResult(result) {`

### `handleSearchInput` line 3379

Handles an event, request, command, or user action.

Signature or declaration: `function handleSearchInput() {`

### `renderProjects` line 3384

Renders UI, markup, or display output.

Signature or declaration: `function renderProjects() {`

### `ensureSectionDialog` line 3411

Part of the public website runtime.

Signature or declaration: `function ensureSectionDialog() {`

### `sectionForwardStack` line 3472

Part of the public website runtime.

Signature or declaration: `function sectionForwardStack(dialog) {`

### `updateSectionNavigation` line 3480

Updates UI, state, cache, or stored data.

Signature or declaration: `function updateSectionNavigation(dialog, path) {`

### `closeSectionDialog` line 3488

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function closeSectionDialog(dialog) {`

### `closeOrStepBackSectionDialog` line 3493

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function closeOrStepBackSectionDialog(dialog) {`

### `openParsedSection` line 3506

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function openParsedSection(projectId, sectionIndex, resourcePath = "", options = {}) {`

### `sections` line 3508

Part of the public website runtime.

Signature or declaration: `const sections = (project?.portfolioView?.sections || []).filter((section) => section.id !== "brief" && sectionHasRenderableContent(section));`

### `closeSectionDialogForRoute` line 3534

Controls a window, dialog, panel, menu, or visible state.

Signature or declaration: `function closeSectionDialogForRoute() {`

### `applySectionRoute` line 3539

Part of the public website runtime.

Signature or declaration: `function applySectionRoute(route) {`

### `restoreSectionRouteAfterCatalogLoad` line 3557

Part of the public website runtime.

Signature or declaration: `function restoreSectionRouteAfterCatalogLoad() {`

### `renderInlineSectionFiles` line 3621

Renders UI, markup, or display output.

Signature or declaration: `function renderInlineSectionFiles(items = []) {`

### `normalizeTextColor` line 3640

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalizeTextColor(value = "") {`

### `loadProjectCatalog` line 3648

Loads data from disk, network, browser storage, or a service.

Signature or declaration: `function loadProjectCatalog() {`

## Important Constants And Variables

- Line 1: `grid` from `const grid = document.querySelector("#project-grid");`
- Line 2: `searchInput` from `const searchInput = document.querySelector("#project-search");`
- Line 3: `projectFilters` from `const projectFilters = document.querySelector("#project-filters");`
- Line 4: `filterButtons` from `let filterButtons = [...document.querySelectorAll(".filter-button")];`
- Line 5: `projectCount` from `const projectCount = document.querySelector("#project-count");`
- Line 6: `projectTrackCount` from `const projectTrackCount = document.querySelector("#project-track-count");`
- Line 7: `projectTrackLabels` from `const projectTrackLabels = document.querySelector("#project-track-labels");`
- Line 8: `year` from `const year = document.querySelector("#year");`
- Line 9: `funFactsCallout` from `const funFactsCallout = document.querySelector("#fun-facts-callout");`
- Line 10: `heroEyebrow` from `const heroEyebrow = document.querySelector(".hero-content .eyebrow");`
- Line 11: `heroTitle` from `const heroTitle = document.querySelector("#hero-title");`
- Line 12: `heroCopy` from `const heroCopy = document.querySelector(".hero-copy");`
- Line 13: `brandName` from `const brandName = document.querySelector(".brand strong");`
- Line 14: `brandSubtitle` from `const brandSubtitle = document.querySelector(".brand small");`
- Line 15: `brandIcon` from `const brandIcon = document.querySelector(".brand-icon");`
- Line 16: `brandText` from `const brandText = document.querySelector(".omb-engraving");`
- Line 17: `headerAvatar` from `const headerAvatar = document.querySelector(".header-avatar");`
- Line 18: `headerAvatarImage` from `const headerAvatarImage = document.querySelector(".header-avatar img");`
- Line 19: `heroImage` from `const heroImage = document.querySelector(".hero-image");`
- Line 20: `resumeSection` from `const resumeSection = document.querySelector("#resume");`
- Line 21: `contactBand` from `const contactBand = document.querySelector("#contact");`
- Line 22: `profilePhoto` from `const profilePhoto = document.querySelector(".profile-photo");`
- Line 23: `contactTitle` from `const contactTitle = document.querySelector("#contact-title");`
- Line 24: `contactIntro` from `const contactIntro = document.querySelector(".contact-intro");`
- Line 25: `contactDetails` from `const contactDetails = document.querySelector(".contact-details");`
- Line 26: `contactLinks` from `const contactLinks = document.querySelector(".contact-links");`
- Line 27: `footerOwner` from `const footerOwner = document.querySelector(".site-footer span");`
- Line 28: `searchWrap` from `const searchWrap = searchInput?.closest(".search-wrap");`
- Line 29: `aiAssistantForm` from `const aiAssistantForm = document.querySelector("#ai-assistant-form");`
- Line 30: `aiAssistantPanel` from `const aiAssistantPanel = document.querySelector("#ask-ai");`
- Line 31: `aiAssistantInput` from `const aiAssistantInput = document.querySelector("#ai-assistant-input");`
- Line 32: `aiAssistantLog` from `const aiAssistantLog = document.querySelector("#ai-assistant-log");`
- Line 33: `aiAssistantStatus` from `const aiAssistantStatus = document.querySelector("#ai-assistant-status");`
- Line 34: `aiClearChatButton` from `const aiClearChatButton = document.querySelector("#ai-clear-chat");`
- Line 36: `categories` from `let categories = [];`
- Line 37: `projects` from `let projects = [];`
- Line 38: `siteSections` from `let siteSections = [];`
- Line 39: `funFacts` from `let funFacts = [];`
- Line 40: `funFactsRich` from `let funFactsRich = null;`
- Line 41: `fieldStyles` from `let fieldStyles = {};`
- Line 42: `siteContent` from `let siteContent = null;`
- Line 43: `siteContentRich` from `let siteContentRich = {};`
- Line 44: `profile` from `let profile = null;`
- Line 45: `profileRich` from `let profileRich = {};`
- Line 46: `activeFilter` from `let activeFilter = "all";`
- Line 47: `activeSectionDialogDrag` from `let activeSectionDialogDrag = null;`
- Line 48: `activeSectionDialogResize` from `let activeSectionDialogResize = null;`
- Line 49: `sectionDialogDragEnabled` from `let sectionDialogDragEnabled = false;`
- Line 50: `isApplyingSectionRoute` from `let isApplyingSectionRoute = false;`
- Line 51: `searchPanel` from `let searchPanel = null;`
- Line 52: `searchStatus` from `let searchStatus = null;`
- Line 53: `searchLimitSelect` from `let searchLimitSelect = null;`
- Line 54: `currentSearchResults` from `let currentSearchResults = [];`
- Line 55: `assistantSourceCounter` from `let assistantSourceCounter = 0;`
- Line 56: `assistantSourceMap` from `let assistantSourceMap = new Map();`
- Line 57: `assistantChatHistory` from `let assistantChatHistory = [];`
- Line 58: `searchableEntries` from `let searchableEntries = [];`
- Line 59: `searchResultLimit` from `let searchResultLimit = 10;`
- Line 60: `searchHighlightTimer` from `let searchHighlightTimer = 0;`
- Line 61: `searchHighlightName` from `const searchHighlightName = "portfolio-search-highlight";`
- Line 63: `sectionRouteKey` from `const sectionRouteKey = "portfolio-section";`
- Line 64: `sectionRouteParams` from `const sectionRouteParams = {`
- Line 70: `supportedCodeLanguages` from `const supportedCodeLanguages = [`
- Line 82: `legacyTemplateSkins` from `const legacyTemplateSkins = {`
- Line 108: `defaultSiteContent` from `const defaultSiteContent = {`
- Line 114: `defaultProfile` from `const defaultProfile = {`
- Line 137: `items` from `const items = Array.isArray(value) ? value : String(value || "").split(/\r?\n/);`
- Line 146: `facts` from `const facts = normalizeFunFacts(funFacts);`
- Line 147: `hasRichFacts` from `const hasRichFacts = Boolean(funFactsRich?.blocks?.length);`
- Line 162: `rect` from `const rect = dialog.getBoundingClientRect();`
- Line 163: `margin` from `const margin = 12;`
- Line 164: `maxLeft` from `const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin);`
- Line 165: `maxTop` from `const maxTop = Math.max(margin, window.innerHeight - rect.height - margin);`
- Line 173: `rect` from `const rect = dialog.getBoundingClientRect();`
- Line 174: `position` from `const position = clampSectionDialogPosition(rect.left, rect.top, dialog);`
- Line 186: `handle` from `const handle = document.createElement("div");`
- Line 196: `rect` from `const rect = dialog.getBoundingClientRect();`
- Line 204: `margin` from `const margin = 12;`
- Line 205: `minWidth` from `const minWidth = Math.min(320, Math.max(180, window.innerWidth - margin * 2));`
- Line 206: `minHeight` from `const minHeight = Math.min(170, Math.max(120, window.innerHeight - margin * 2));`

## Event Handlers

- Line 331: `document.addEventListener("pointerdown", beginSectionDialogResize);`
- Line 332: `document.addEventListener("pointerdown", beginSectionDialogDrag);`
- Line 333: `document.addEventListener("pointermove", moveSectionDialogResize);`
- Line 334: `document.addEventListener("pointermove", moveSectionDialogDrag);`
- Line 335: `document.addEventListener("pointerup", endSectionDialogResize);`
- Line 336: `document.addEventListener("pointerup", endSectionDialogDrag);`
- Line 337: `document.addEventListener("pointercancel", endSectionDialogResize);`
- Line 338: `document.addEventListener("pointercancel", endSectionDialogDrag);`
- Line 339: `window.addEventListener("resize", () => {`
- Line 1214: `button.addEventListener("click", () => {`
- Line 3272: `searchLimitSelect.addEventListener("change", () => {`
- Line 3276: `searchPanel.addEventListener("mousedown", (event) => event.preventDefault());`
- Line 3277: `searchPanel.addEventListener("click", (event) => {`
- Line 3434: `dialog.querySelector(".section-view-close").addEventListener("click", () => closeSectionDialog(dialog));`
- Line 3435: `dialog.addEventListener("cancel", () => clearSectionRouteInHistory());`
- Line 3436: `dialog.addEventListener("close", () => {`
- Line 3445: `dialog.querySelector(".section-view-back").addEventListener("click", () => {`
- Line 3457: `dialog.querySelector(".section-view-forward").addEventListener("click", () => {`
- Line 3464: `dialog.querySelector("#section-view-content").addEventListener("click", (event) => {`
- Line 3562: `window.addEventListener("popstate", (event) => {`
- Line 3567: `searchInput.addEventListener("input", handleSearchInput);`
- Line 3568: `searchInput.addEventListener("focus", showSearchPanelIfNeeded);`
- Line 3569: `searchInput.addEventListener("keydown", (event) => {`
- Line 3580: `document.addEventListener("click", (event) => {`
- Line 3586: `document.addEventListener("click", (event) => {`
- Line 3599: `aiAssistantForm?.addEventListener("submit", (event) => {`
- Line 3606: `aiClearChatButton?.addEventListener("click", clearAssistantChat);`
- Line 3607: `window.addEventListener("resize", updateAssistantPanelGrowth);`
- Line 3609: `aiAssistantLog?.addEventListener("click", (event) => {`
- Line 3616: `grid.addEventListener("click", (event) => {`

## Representative Opening Snippet

```
const grid = document.querySelector("#project-grid");
const searchInput = document.querySelector("#project-search");
const projectFilters = document.querySelector("#project-filters");
let filterButtons = [...document.querySelectorAll(".filter-button")];
const projectCount = document.querySelector("#project-count");
const projectTrackCount = document.querySelector("#project-track-count");
const projectTrackLabels = document.querySelector("#project-track-labels");
const year = document.querySelector("#year");
const funFactsCallout = document.querySelector("#fun-facts-callout");
const heroEyebrow = document.querySelector(".hero-content .eyebrow");
const heroTitle = document.querySelector("#hero-title");
const heroCopy = document.querySelector(".hero-copy");
const brandName = document.querySelector(".brand strong");
const brandSubtitle = document.querySelector(".brand small");
const brandIcon = document.querySelector(".brand-icon");
const brandText = document.querySelector(".omb-engraving");
const headerAvatar = document.querySelector(".header-avatar");
const headerAvatarImage = document.querySelector(".header-avatar img");
const heroImage = document.querySelector(".hero-image");
const resumeSection = document.querySelector("#resume");
const contactBand = document.querySelector("#contact");
const profilePhoto = document.querySelector(".profile-photo");
const contactTitle = document.querySelector("#contact-title");
const contactIntro = document.querySelector(".contact-intro");
const contactDetails = document.querySelector(".contact-details");
const contactLinks = document.querySelector(".contact-links");
const footerOwner = document.querySelector(".site-footer span");
const searchWrap = searchInput?.closest(".search-wrap");
const aiAssistantForm = document.querySelector("#ai-assistant-form");
const aiAssistantPanel = document.querySelector("#ask-ai");
const aiAssistantInput = document.querySelector("#ai-assistant-input");
const aiAssistantLog = document.querySelector("#ai-assistant-log");
const aiAssistantStatus = document.querySelector("#ai-assistant-status");
const aiClearChatButton = document.querySelector("#ai-clear-chat");

let categories = [];
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?