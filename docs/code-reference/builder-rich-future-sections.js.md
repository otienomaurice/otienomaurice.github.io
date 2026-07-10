# builder-rich-future-sections.js

Builder-side helper code for richer future portfolio sections and section defaults.

## Quick Facts

- Lines: 410
- Size: 21,340 bytes
- Talks to: Mostly local to its own feature area.
- API endpoints mentioned: 0
- Named functions discovered: 13

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Functions

### `hasRichContent` line 23

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function hasRichContent(rich) {`

### `richPlainTextOrSpacer` line 33

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function richPlainTextOrSpacer(rich) {`

### `pendingEditorUsesRichDescription` line 41

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function pendingEditorUsesRichDescription(editor = pendingEditor) {`

### `pendingEditorFolder` line 48

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function pendingEditorFolder(editor = pendingEditor) {`

### `pendingEditorRichBlocks` line 62

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function pendingEditorRichBlocks(editor = pendingEditor) {`

### `renderPendingRichDescriptionEditor` line 72

Renders UI, markup, or display output.

Signature or declaration: `function renderPendingRichDescriptionEditor(editor = pendingEditor) {`

### `section` line 208

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === button.dataset.sectionId);`

### `section` line 222

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === button.dataset.sectionId);`

### `section` line 253

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);`

### `section` line 278

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);`

### `section` line 297

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `const section = (project.sections || []).find((item) => item.id === sectionId);`

### `sourceSection` line 356

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `const sourceSection = (project.sections || []).find((section) => section.id === sectionId);`

### `improveRichContextMenu` line 392

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function improveRichContextMenu() {`

## Important Constants And Variables

- Line 34: `text` from `const text = plainTextFromRich(rich).trim();`
- Line 73: `label` from `const label = editor?.type === "custom-section" ? "Section overview" : "Subsection overview";`
- Line 74: `folder` from `const folder = pendingEditorFolder(editor);`
- Line 108: `originalPopulateRichEditor` from `const originalPopulateRichEditor = typeof populateRichEditor === "function" ? populateRichEditor : null;`
- Line 109: `originalSaveRichEditorToProject` from `const originalSaveRichEditorToProject = typeof saveRichEditorToProject === "function" ? saveRichEditorToProject : null;`
- Line 110: `originalOpenPendingEditor` from `const originalOpenPendingEditor = typeof openPendingEditor === "function" ? openPendingEditor : null;`
- Line 111: `originalOpenEditorFromButton` from `const originalOpenEditorFromButton = typeof openEditorFromButton === "function" ? openEditorFromButton : null;`
- Line 112: `originalRenderPendingEditor` from `const originalRenderPendingEditor = typeof renderPendingEditor === "function" ? renderPendingEditor : null;`
- Line 113: `originalRenderSectionContent` from `const originalRenderSectionContent = typeof renderSectionContent === "function" ? renderSectionContent : null;`
- Line 114: `originalSavePendingEditor` from `const originalSavePendingEditor = typeof savePendingEditor === "function" ? savePendingEditor : null;`
- Line 115: `originalRenderCustomSection` from `const originalRenderCustomSection = typeof renderCustomSection === "function" ? renderCustomSection : null;`
- Line 116: `originalParseProjectForPortfolio` from `const originalParseProjectForPortfolio = typeof parseProjectForPortfolio === "function" ? parseProjectForPortfolio : null;`
- Line 117: `originalParsedSectionHasContent` from `const originalParsedSectionHasContent = typeof parsedSectionHasContent === "function" ? parsedSectionHasContent : null;`
- Line 118: `originalPreviewSectionHasRenderableContent` from `const originalPreviewSectionHasRenderableContent = typeof previewSectionHasRenderableContent === "function" ? previewSectionHasRenderableContent : null;`
- Line 140: `rich` from `const rich = extractRichSummary(editor);`
- Line 154: `title` from `const title = pendingEditor.title || "";`
- Line 155: `description` from `const description = pendingEditor.description || "";`
- Line 156: `isTool` from `const isTool = pendingEditor.type === "tool";`
- Line 157: `isSimpleText` from `const isSimpleText = pendingEditor.type === "text-array";`
- Line 158: `isSectionDetails` from `const isSectionDetails = pendingEditor.type === "custom-section";`
- Line 159: `usesRich` from `const usesRich = pendingEditorUsesRichDescription();`
- Line 202: `project` from `const project = selectedProject();`
- Line 204: `type` from `const type = button.dataset.openEditor;`
- Line 205: `mode` from `const mode = button.dataset.mode || "add";`
- Line 206: `index` from `const index = button.dataset.index;`
- Line 208: `section` from `const section = (project.sections || []).find((item) => item.id === button.dataset.sectionId);`
- Line 209: `item` from `const item = mode === "edit" ? section?.items?.[Number(index)] : {};`
- Line 222: `section` from `const section = (project.sections || []).find((item) => item.id === button.dataset.sectionId);`
- Line 242: `project` from `const project = selectedProject();`
- Line 244: `title` from `const title = form.elements.title.value.trim();`
- Line 245: `richEditor` from `const richEditor = form.querySelector("[data-rich-editor='pending-description']");`
- Line 246: `richDescription` from `const richDescription = richEditor ? extractRichSummary(richEditor) : null;`
- Line 247: `description` from `const description = richEditor ? richPlainTextOrSpacer(richDescription) : form.elements.description?.value.trim() || "";`
- Line 253: `section` from `const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);`
- Line 256: `nextItem` from `const nextItem = {`
- Line 278: `section` from `const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);`
- Line 297: `section` from `const section = (project.sections || []).find((item) => item.id === sectionId);`
- Line 352: `parsed` from `const parsed = originalParseProjectForPortfolio(project);`
- Line 355: `sectionId` from `const sectionId = parsedSection.id.replace("custom:", "");`
- Line 356: `sourceSection` from `const sourceSection = (project.sections || []).find((section) => section.id === sectionId);`
- Line 394: `editor` from `const editor = event.target.closest("[data-rich-editor]");`
- Line 395: `block` from `const block = event.target.closest(".rich-block");`

## Event Handlers

- Line 393: `document.addEventListener("contextmenu", (event) => {`

## Representative Opening Snippet

```
// JavaScript source code
(() => {
    "use strict";

    /**
     * Extend the portfolio builder with rich description editors for custom
     * sections and subsections. This patch adds a new rich editor to the
     * pending editor for custom items so that images, formulas and other
     * formatted content can be used in overviews of future sections. It
     * hooks into existing helper functions such as `populateRichEditor`
     * and `saveRichEditorToProject` by overriding them at runtime. To
     * avoid interfering with built‑in behaviour, everything is wrapped
     * inside an IIFE and existing functions are stored before being
     * redefined. If a function is not present in the current context
     * (because the builder script changed), the patch simply does
     * nothing.
     */

    // Guard against applying the patch multiple times.
    if (window.builderRichFutureSectionsPatchLoaded) return;

    // Helpers to detect whether an object has meaningful rich content.
    function hasRichContent(rich) {
        return Boolean(rich?.blocks?.some((block) =>
            (block.type === "image" && block.url) ||
            (block.type === "formula" && block.formula) ||
            block.text ||
            block.title ||
            block.caption
        ));
    }

    function richPlainTextOrSpacer(rich) {
        const text = plainTextFromRich(rich).trim();
        return text || (hasRichContent(rich) ? "\u200B" : "");
    }
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?