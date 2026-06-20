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

    // Determine whether the pending editor should use a rich editor. All
    // custom sections and subsections use rich editors. Tools, design
    // objects and other built‑in forms continue to use plain text areas.
    function pendingEditorUsesRichDescription(editor = pendingEditor) {
        return Boolean(editor && ["custom", "custom-section"].includes(editor.type));
    }

    // Build a folder name for images uploaded via the pending editor. For
    // custom sections and subsections, use a prefix based on the section
    // id so that uploaded images are organised under docs/<project>/<folder>/.
    function pendingEditorFolder(editor = pendingEditor) {
        if (!editor) return "custom-overview";
        if (editor.type === "custom-section") {
            return `custom-${slugify(editor.sectionId || "section")}-overview`;
        }
        if (editor.type === "custom") {
            return `custom-${slugify(editor.sectionId || "section")}-subsection`;
        }
        return "custom-overview";
    }

    // Derive blocks from a rich value or fallback plain text. When the
    // editor is empty, provide a single text block so that the content
    // area is editable.
    function pendingEditorRichBlocks(editor = pendingEditor) {
        if (!editor) return textBlocksFromPlainText("");
        return richBlocksFromValue(editor.richDescription, editor.description || "");
    }

    // Render the rich description field for the pending editor. This
    // function builds a UI similar to other rich editors in the builder,
    // including a toolbar and editable area with appropriate data
    // attributes. The label varies depending on whether we're editing
    // a section or a subsection.
    function renderPendingRichDescriptionEditor(editor = pendingEditor) {
        const label = editor?.type === "custom-section" ? "Section overview" : "Subsection overview";
        const folder = pendingEditorFolder(editor);
        return `
      <div class="pending-rich-description rich-design-summary-field">
        <div class="summary-builder-heading">
          <span>${label}</span>
        </div>
        <div class="rich-summary-panel">
          <div class="rich-summary-toolbar" aria-label="${escapeHtml(label)} tools">
            <button type="button" data-rich-action="font-small">Small</button>
            <button type="button" data-rich-action="font-normal">Normal</button>
            <button type="button" data-rich-action="font-large">Large</button>
            <button type="button" data-rich-action="align-left">Left</button>
            <button type="button" data-rich-action="align-center">Center</button>
            <button type="button" data-rich-action="align-right">Right</button>
            <button type="button" data-rich-action="add-image">Add image</button>
            <button type="button" data-rich-action="add-formula">Add formula</button>
            <button type="button" data-rich-action="edit-block">Edit selected</button>
            <button class="danger-icon" type="button" data-rich-action="delete-block">Delete selected</button>
          </div>
          <div
            class="rich-summary-editor"
            data-rich-editor="pending-description"
            data-rich-folder="${escapeHtml(folder)}"
            data-placeholder="Write the overview here. You can paste images directly into this area."
            aria-label="${escapeHtml(label)} rich editor"
          ></div>
        </div>
      </div>
    `;
    }

    // Save references to original functions if they exist. This allows
    // graceful degradation: if the builder changes internal names these
    // assignments will be undefined and the patch will not execute.
    const originalPopulateRichEditor = typeof populateRichEditor === "function" ? populateRichEditor : null;
    const originalSaveRichEditorToProject = typeof saveRichEditorToProject === "function" ? saveRichEditorToProject : null;
    const originalOpenPendingEditor = typeof openPendingEditor === "function" ? openPendingEditor : null;
    const originalOpenEditorFromButton = typeof openEditorFromButton === "function" ? openEditorFromButton : null;
    const originalRenderPendingEditor = typeof renderPendingEditor === "function" ? renderPendingEditor : null;
    const originalRenderSectionContent = typeof renderSectionContent === "function" ? renderSectionContent : null;
    const originalSavePendingEditor = typeof savePendingEditor === "function" ? savePendingEditor : null;
    const originalRenderCustomSection = typeof renderCustomSection === "function" ? renderCustomSection : null;
    const originalParseProjectForPortfolio = typeof parseProjectForPortfolio === "function" ? parseProjectForPortfolio : null;
    const originalParsedSectionHasContent = typeof parsedSectionHasContent === "function" ? parsedSectionHasContent : null;
    const originalPreviewSectionHasRenderableContent = typeof previewSectionHasRenderableContent === "function" ? previewSectionHasRenderableContent : null;

    // Override populateRichEditor to handle our pending-description editor.
    if (originalPopulateRichEditor) {
        populateRichEditor = function patchedPopulateRichEditor(editor, project = selectedProject()) {
            if (!editor) return;
            // Handle our pending description editors specially.
            if (editor.dataset.richEditor === "pending-description") {
                editor.innerHTML = "";
                pendingEditorRichBlocks().forEach((block) => editor.append(createRichBlockElement(block)));
                if (!editor.children.length) editor.append(createRichTextBlock(""));
                return;
            }
            return originalPopulateRichEditor(editor, project);
        };
    }

    // Override saveRichEditorToProject to save pending description changes.
    if (originalSaveRichEditorToProject) {
        saveRichEditorToProject = function patchedSaveRichEditorToProject(editor) {
            if (!editor) return true;
            if (editor.dataset.richEditor === "pending-description") {
                const rich = extractRichSummary(editor);
                pendingEditor.richDescription = rich;
                pendingEditor.description = richPlainTextOrSpacer(rich);
                setStatus("Unsaved local changes.");
                return true;
            }
            return originalSaveRichEditorToProject(editor);
        };
    }

    // Override renderPendingEditor to inject our rich overview field.
    if (originalRenderPendingEditor) {
        renderPendingEditor = function patchedRenderPendingEditor() {
            if (!pendingEditor) return "";
            const title = pendingEditor.title || "";
            const description = pendingEditor.description || "";
            const isTool = pendingEditor.type === "tool";
            const isSimpleText = pendingEditor.type === "text-array";
            const isSectionDetails = pendingEditor.type === "custom-section";
            const usesRich = pendingEditorUsesRichDescription();
            return `
        <form class="pending-editor" id="pending-editor">
          <div>
            <h3>${pendingEditor.mode === "edit" ? "Edit" : "Add"} ${isTool ? "tool" : isSimpleText ? "item" : isSectionDetails ? "section" : "subsection"}</h3>
          </div>
          <div class="${isTool ? "tool-editor-grid" : "pending-editor-grid"}">
            <label>
              <span>${isTool ? "Tool name" : "Title"}</span>
              <input name="title" type="text" value="${escapeHtml(title)}" required>
            </label>
            ${isSimpleText ? "" : usesRich ? renderPendingRichDescriptionEditor(pendingEditor) : `
              <label>
                <span>${isTool ? "What it was used for" : "Description"}</span>
                <textarea name="description" rows="${isTool ? "7" : "5"}">${escapeHtml(description)}</textarea>
              </label>
            `}
          </div>
          <div class="pending-editor-actions">
            <button class="button primary" type="submit">Save</button>
            <button class="button secondary" type="button" data-cancel-pending="true">Cancel</button>
          </div>
        </form>
      `;
        };
    }

    // Override openPendingEditor to populate our rich editors when opened.
    if (originalOpenPendingEditor) {
        openPendingEditor = function patchedOpenPendingEditor(config) {
            pendingEditor = config;
            renderSectionContent(selectedProject());
            requestAnimationFrame(() => {
                populateRichEditors(sectionContent);
                document.querySelector("#pending-editor")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
        };
    }

    // Override openEditorFromButton to initialise our pending editor with
    // richDescription for custom sections and items.
    if (originalOpenEditorFromButton) {
        openEditorFromButton = function patchedOpenEditorFromButton(button) {
            const project = selectedProject();
            if (!project) return;
            const type = button.dataset.openEditor;
            const mode = button.dataset.mode || "add";
            const index = button.dataset.index;
            if (type === "custom") {
                const section = (project.sections || []).find((item) => item.id === button.dataset.sectionId);
                const item = mode === "edit" ? section?.items?.[Number(index)] : {};
                openPendingEditor({
                    type,
                    mode,
                    sectionId: button.dataset.sectionId,
                    index,
                    title: item?.title || "",
                    description: item?.description || "",
                    richDescription: item?.richDescription || null
                });
                return;
            }
            if (type === "custom-section") {
                const section = (project.sections || []).find((item) => item.id === button.dataset.sectionId);
                openPendingEditor({
                    type,
                    mode: "edit",
                    sectionId: button.dataset.sectionId,
                    title: section?.title || "",
                    description: section?.description || "",
                    richDescription: section?.richDescription || null
                });
                return;
            }
            return originalOpenEditorFromButton(button);
        };
    }

    // Override savePendingEditor so that custom items and sections save
    // their richDescription field back to the project model. Fallback to
    // original behaviour for other item types.
    if (originalSavePendingEditor) {
        savePendingEditor = function patchedSavePendingEditor(form) {
            const project = selectedProject();
            if (!project || !pendingEditor) return;
            const title = form.elements.title.value.trim();
            const richEditor = form.querySelector("[data-rich-editor='pending-description']");
            const richDescription = richEditor ? extractRichSummary(richEditor) : null;
            const description = richEditor ? richPlainTextOrSpacer(richDescription) : form.elements.description?.value.trim() || "";
            if (!title) {
                setStatus("Type a title before saving.");
                return;
            }
            if (pendingEditor.type === "custom") {
                const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);
                if (!section) return;
                section.items = section.items || [];
                const nextItem = {
                    title,
                    description,
                    richDescription,
                    type: "Text",
                    status: "draft"
                };
                if (pendingEditor.mode === "edit") {
                    section.items[Number(pendingEditor.index)] = {
                        ...section.items[Number(pendingEditor.index)],
                        ...nextItem
                    };
                } else {
                    section.items.push(nextItem);
                }
                pendingEditor = null;
                setStatus("Saved in the project editor. Click Save project to include this version in the portfolio preview.");
                scheduleAutosave();
                renderAll();
                return;
            }
            if (pendingEditor.type === "custom-section") {
                const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);
                if (!section) return;
                section.title = title;
                section.description = description;
                section.richDescription = richDescription;
                pendingEditor = null;
                setStatus("Saved in the project editor. Click Save project to include this version in the portfolio preview.");
                scheduleAutosave();
                renderAll();
                return;
            }
            return originalSavePendingEditor(form);
        };
    }

    // Override renderCustomSection so that richDescription is rendered in
    // the builder preview and custom items show their own rich content.
    if (originalRenderCustomSection) {
        renderCustomSection = function patchedRenderCustomSection(project, sectionId) {
            const section = (project.sections || []).find((item) => item.id === sectionId);
            if (!section) return `<p class="evidence-empty">Section not found.</p>`;
            return `
        <div class="section-window-heading">
          <h3>${escapeHtml(section.title || "Custom section")}</h3>
          <div>
            <button type="button" data-open-editor="custom-section" data-section-id="${escapeHtml(section.id)}">Edit section</button>
            <button class="danger-icon" type="button" data-delete-section="${escapeHtml(section.id)}">Delete section</button>
          </div>
        </div>
        ${hasRichContent(section.richDescription)
                    ? renderRichContent(section.richDescription, section.description || "")
                    : section.description
                        ? `<p>${renderInlineMath(section.description)}</p>`
                        : `<p class="evidence-empty">No section overview has been added yet.</p>`}
        <div class="section-actions">
          <button class="button primary" type="button" data-add-custom-item="${escapeHtml(section.id)}">Add subsection</button>
          <button class="button secondary" type="button" data-upload-custom="${escapeHtml(section.id)}">Add file or image</button>
        </div>
        <div class="builder-items">
          ${(section.items || []).map((item, index) => `
            <article class="builder-item">
              <div>
                <strong>${escapeHtml(item.title || "Untitled subsection")}</strong>
                <span>${escapeHtml(item.url || item.artifact || "Text only")}</span>
                ${hasRichContent(item.richDescription)
                                ? renderRichContent(item.richDescription, item.description || "")
                                : item.description
                                    ? `<p>${renderInlineMath(item.description)}</p>`
                                    : ""}
              </div>
              <button type="button" data-open-editor="custom" data-mode="edit" data-section-id="${escapeHtml(section.id)}" data-index="${index}">Edit</button>
              <button class="danger-icon" type="button" data-delete-custom-item="${escapeHtml(section.id)}" data-index="${index}">Delete</button>
            </article>
          `).join("") || `<p class="evidence-empty">No subsections added yet.</p>`}
        </div>
        ${renderPendingEditor()}
      `;
        };
    }

    // Override renderSectionContent to populate rich editors in the pending editor.
    if (originalRenderSectionContent) {
        renderSectionContent = function patchedRenderSectionContent(project) {
            originalRenderSectionContent(project);
            requestAnimationFrame(() => populateRichEditors(sectionContent));
        };
    }

    // Extend parseProjectForPortfolio so that richDescription from custom
    // sections propagates to the parsed project. Without this, the
    // published website would ignore the rich overview for custom
    // sections.
    if (originalParseProjectForPortfolio) {
        parseProjectForPortfolio = function patchedParseProjectForPortfolio(project) {
            const parsed = originalParseProjectForPortfolio(project);
            (parsed.portfolioView?.sections || []).forEach((parsedSection) => {
                if (!parsedSection.id?.startsWith("custom:")) return;
                const sectionId = parsedSection.id.replace("custom:", "");
                const sourceSection = (project.sections || []).find((section) => section.id === sectionId);
                if (hasRichContent(sourceSection?.richDescription)) {
                    parsedSection.rich = clone(sourceSection.richDescription);
                    parsedSection.description = sourceSection.description || richPlainTextOrSpacer(sourceSection.richDescription);
                }
            });
            return parsed;
        };
    }

    // Extend parsedSectionHasContent and previewSectionHasRenderableContent to
    // treat richDescription as content for custom sections. Without
    // overriding these functions, a custom section with only rich
    // description would be considered empty and would not render in the
    // preview.
    if (originalParsedSectionHasContent) {
        parsedSectionHasContent = function patchedParsedSectionHasContent(section) {
            return Boolean(
                section?.description ||
                hasRichContent(section?.rich) ||
                (section?.items || []).some((item) => parsedItemHasContent(item))
            );
        };
    }
    if (originalPreviewSectionHasRenderableContent) {
        previewSectionHasRenderableContent = function patchedPreviewSectionHasRenderableContent(section) {
            return Boolean(
                section?.description ||
                hasRichContent(section?.rich) ||
                (section?.items || []).some((item) => parsedItemHasContent(item))
            );
        };
    }

    // Hook into context menu display so right‑click on any rich editor
    // triggers the summary context menu with proper styling and controls.
    function improveRichContextMenu() {
        document.addEventListener("contextmenu", (event) => {
            const editor = event.target.closest("[data-rich-editor]");
            const block = event.target.closest(".rich-block");
            if (!editor && !block) return;
            event.preventDefault();
            activeSummaryEditor = editor || block.closest("[data-rich-editor]");
            selectRichBlock(block || currentRichBlock(activeSummaryEditor));
            syncRichContextMenuControls(activeSummaryBlock);
            summaryContextMenu.style.left = `${event.clientX}px`;
            summaryContextMenu.style.top = `${event.clientY}px`;
            summaryContextMenu.hidden = false;
        }, true);
    }
    improveRichContextMenu();

    // Mark the patch as loaded to prevent double loading.
    window.builderRichFutureSectionsPatchLoaded = true;
})();