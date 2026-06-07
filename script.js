const grid = document.querySelector("#project-grid");
const searchInput = document.querySelector("#project-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const projectCount = document.querySelector("#project-count");
const year = document.querySelector("#year");

let categories = [];
let projects = [];
let siteSections = [];
let activeFilter = "all";
let activeSectionDialogDrag = null;
let activeSectionDialogResize = null;
let sectionDialogDragEnabled = false;

const legacyTemplateSkins = {
  "skin-light-blue": "appearance-light-blue-red-click",
  "skin-clean-white": "appearance-white-blue-click",
  "skin-deep-navy": "appearance-deep-navy-cyan-click",
  "skin-red-warm": "appearance-warm-red-pale-click",
  "skin-emerald-instrument": "appearance-emerald-mint-click",
  "skin-amber-power": "appearance-amber-cream-click",
  "skin-violet-mixed": "appearance-violet-lilac-click",
  "skin-graphite-asic": "appearance-graphite-white-click",
  "analog-opamp-topology": "appearance-light-blue-red-click",
  "analog-power-charger": "appearance-amber-cream-click",
  "analog-filter-front-end": "appearance-light-blue-red-click",
  "analog-sensor-interface": "appearance-emerald-mint-click",
  "analog-mixed-signal-timing": "appearance-violet-lilac-click",
  "digital-fpga-pipeline": "appearance-deep-navy-cyan-click",
  "digital-asic-block": "appearance-graphite-white-click",
  "digital-verification-suite": "appearance-graphite-white-click",
  "digital-interface-controller": "appearance-deep-navy-cyan-click",
  "digital-signal-processing": "appearance-violet-lilac-click",
  "embedded-stm32-sensor": "appearance-emerald-mint-click",
  "embedded-rtos-control": "appearance-graphite-white-click",
  "embedded-power-monitor": "appearance-amber-cream-click",
  "embedded-wireless-node": "appearance-deep-navy-cyan-click",
  "embedded-motor-control": "appearance-violet-lilac-click"
};

year.textContent = new Date().getFullYear();

function normalize(value) {
  return String(value || "").toLowerCase();
}

function clampSectionDialogPosition(left, top, dialog) {
  const rect = dialog.getBoundingClientRect();
  const margin = 12;
  const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin);
  const maxTop = Math.max(margin, window.innerHeight - rect.height - margin);
  return {
    left: Math.min(Math.max(left, margin), maxLeft),
    top: Math.min(Math.max(top, margin), maxTop)
  };
}

function anchorSectionDialog(dialog) {
  const rect = dialog.getBoundingClientRect();
  const position = clampSectionDialogPosition(rect.left, rect.top, dialog);
  dialog.classList.add("is-draggable-dialog");
  dialog.style.left = `${position.left}px`;
  dialog.style.top = `${position.top}px`;
  dialog.style.right = "auto";
  dialog.style.bottom = "auto";
  dialog.style.margin = "0";
}

function ensureSectionResizeHandles(dialog) {
  if (dialog.querySelector("[data-section-dialog-resize-handle]")) return;
  ["n", "e", "s", "w", "ne", "nw", "se", "sw"].forEach((direction) => {
    const handle = document.createElement("div");
    handle.className = `dialog-resize-handle resize-${direction}`;
    handle.dataset.sectionDialogResizeHandle = direction;
    handle.setAttribute("aria-hidden", "true");
    dialog.append(handle);
  });
}

function anchorSectionDialogForResize(dialog) {
  anchorSectionDialog(dialog);
  const rect = dialog.getBoundingClientRect();
  dialog.classList.add("is-resized-dialog");
  dialog.style.width = `${rect.width}px`;
  dialog.style.height = `${rect.height}px`;
  dialog.style.maxHeight = "none";
}

function sectionDialogResizeBounds(state, event) {
  const margin = 12;
  const minWidth = Math.min(320, Math.max(180, window.innerWidth - margin * 2));
  const minHeight = Math.min(170, Math.max(120, window.innerHeight - margin * 2));
  const direction = state.direction;
  let { left, top, width, height } = state.rect;
  const dx = event.clientX - state.startX;
  const dy = event.clientY - state.startY;

  if (direction.includes("e")) {
    width = Math.min(Math.max(state.rect.width + dx, minWidth), window.innerWidth - left - margin);
  }
  if (direction.includes("s")) {
    height = Math.min(Math.max(state.rect.height + dy, minHeight), window.innerHeight - top - margin);
  }
  if (direction.includes("w")) {
    const right = state.rect.left + state.rect.width;
    left = Math.min(Math.max(state.rect.left + dx, margin), right - minWidth);
    width = right - left;
  }
  if (direction.includes("n")) {
    const bottom = state.rect.top + state.rect.height;
    top = Math.min(Math.max(state.rect.top + dy, margin), bottom - minHeight);
    height = bottom - top;
  }

  return { height, left, top, width };
}

function sectionDialogFromDragEvent(event) {
  if (event.target.closest("[data-section-dialog-resize-handle]")) return null;
  const handle = event.target.closest("[data-section-dialog-drag='true']");
  if (!handle) return null;
  if (event.target.closest("button, a, input, textarea, select, label, summary")) return null;
  const dialog = handle.closest("dialog");
  return dialog?.open ? dialog : null;
}

function beginSectionDialogDrag(event) {
  if (event.button !== 0) return;
  const dialog = sectionDialogFromDragEvent(event);
  if (!dialog) return;
  anchorSectionDialog(dialog);
  const rect = dialog.getBoundingClientRect();
  activeSectionDialogDrag = {
    dialog,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
    pointerId: event.pointerId,
    pointerTarget: event.target
  };
  event.target.setPointerCapture?.(event.pointerId);
  dialog.classList.add("is-dragging-dialog");
  event.preventDefault();
}

function moveSectionDialogDrag(event) {
  if (!activeSectionDialogDrag) return;
  const next = clampSectionDialogPosition(
    event.clientX - activeSectionDialogDrag.offsetX,
    event.clientY - activeSectionDialogDrag.offsetY,
    activeSectionDialogDrag.dialog
  );
  activeSectionDialogDrag.dialog.style.left = `${next.left}px`;
  activeSectionDialogDrag.dialog.style.top = `${next.top}px`;
}

function endSectionDialogDrag() {
  if (!activeSectionDialogDrag) return;
  activeSectionDialogDrag.pointerTarget?.releasePointerCapture?.(activeSectionDialogDrag.pointerId);
  activeSectionDialogDrag.dialog.classList.remove("is-dragging-dialog");
  activeSectionDialogDrag = null;
}

function beginSectionDialogResize(event) {
  if (event.button !== 0) return;
  const handle = event.target.closest("[data-section-dialog-resize-handle]");
  const dialog = handle?.closest("dialog");
  if (!handle || !dialog?.open || dialog.classList.contains("is-minimized-dialog")) return;
  anchorSectionDialogForResize(dialog);
  activeSectionDialogResize = {
    dialog,
    direction: handle.dataset.sectionDialogResizeHandle,
    pointerId: event.pointerId,
    pointerTarget: event.target,
    rect: dialog.getBoundingClientRect(),
    startX: event.clientX,
    startY: event.clientY
  };
  event.target.setPointerCapture?.(event.pointerId);
  dialog.classList.add("is-resizing-dialog");
  event.preventDefault();
}

function moveSectionDialogResize(event) {
  if (!activeSectionDialogResize) return;
  const next = sectionDialogResizeBounds(activeSectionDialogResize, event);
  activeSectionDialogResize.dialog.style.left = `${next.left}px`;
  activeSectionDialogResize.dialog.style.top = `${next.top}px`;
  activeSectionDialogResize.dialog.style.width = `${next.width}px`;
  activeSectionDialogResize.dialog.style.height = `${next.height}px`;
}

function endSectionDialogResize() {
  if (!activeSectionDialogResize) return;
  activeSectionDialogResize.pointerTarget?.releasePointerCapture?.(activeSectionDialogResize.pointerId);
  activeSectionDialogResize.dialog.classList.remove("is-resizing-dialog");
  activeSectionDialogResize = null;
}

function updateSectionDialogMinimize(dialog) {
  const minimized = dialog.classList.contains("is-minimized-dialog");
  const button = dialog.querySelector(".section-view-minimize");
  if (!button) return;
  button.textContent = minimized ? "+" : "-";
  button.title = minimized ? "Restore window" : "Minimize window";
  button.setAttribute("aria-label", minimized ? "Restore window" : "Minimize window");
}

function toggleSectionDialogMinimized(dialog) {
  anchorSectionDialog(dialog);
  dialog.classList.toggle("is-minimized-dialog");
  updateSectionDialogMinimize(dialog);
}

function enableSectionDialogDrag() {
  if (sectionDialogDragEnabled) return;
  sectionDialogDragEnabled = true;
  document.addEventListener("pointerdown", beginSectionDialogResize);
  document.addEventListener("pointerdown", beginSectionDialogDrag);
  document.addEventListener("pointermove", moveSectionDialogResize);
  document.addEventListener("pointermove", moveSectionDialogDrag);
  document.addEventListener("pointerup", endSectionDialogResize);
  document.addEventListener("pointerup", endSectionDialogDrag);
  document.addEventListener("pointercancel", endSectionDialogResize);
  document.addEventListener("pointercancel", endSectionDialogDrag);
  window.addEventListener("resize", () => {
    document.querySelectorAll(".section-view-dialog.is-draggable-dialog[open]").forEach((dialog) => {
      const rect = dialog.getBoundingClientRect();
      const next = clampSectionDialogPosition(rect.left, rect.top, dialog);
      dialog.style.left = `${next.left}px`;
      dialog.style.top = `${next.top}px`;
    });
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function textBlocksFromPlainText(text) {
  const lines = String(text || "").split(/\n{2,}/).map((item) => item.trim()).filter(Boolean);
  return (lines.length ? lines : [""]).map((item) => ({
    align: "left",
    fontSize: "normal",
    text: item,
    type: "paragraph"
  }));
}

function unwrapFormula(value) {
  const text = String(value || "").trim();
  const wrappers = [
    [/^\$\$([\s\S]+)\$\$$/, 1],
    [/^\\\[([\s\S]+)\\\]$/, 1],
    [/^\\\(([\s\S]+)\\\)$/, 1],
    [/^\$([^$]+)\$$/, 1]
  ];
  for (const [pattern, group] of wrappers) {
    const match = text.match(pattern);
    if (match) return match[group].trim();
  }
  return text;
}

function renderInlineMath(text) {
  const escaped = escapeHtml(text);
  const withMath = escaped.replace(/\$([^$]+)\$/g, '<span class="rich-inline-formula">$1</span>');
  return withMath.replace(/\b(https?:\/\/[^\s<]+|www\.[^\s<]+)/g, (match) => {
    const trailing = match.match(/[),.;:!?]+$/)?.[0] || "";
    const clean = trailing ? match.slice(0, -trailing.length) : match;
    const href = clean.startsWith("www.") ? `https://${clean}` : clean;
    return `<a href="${href}" target="_blank" rel="noreferrer">${clean}</a>${trailing}`;
  });
}

function renderRichContent(rich, fallbackText = "") {
  const blocks = rich?.blocks?.length ? rich.blocks : textBlocksFromPlainText(fallbackText);
  return `
    <div class="rich-content">
      ${blocks.map((block) => {
        const align = ["left", "center", "right"].includes(block.align) ? block.align : "left";
        if (block.type === "image") {
          return `
            <figure class="rich-image justify-${align}">
              <img src="${escapeHtml(block.url)}" alt="${escapeHtml(block.title || "Summary image")}">
              ${(block.title || block.caption) ? `<figcaption>${block.title ? `<strong>${escapeHtml(block.title)}</strong>` : ""}${block.caption ? `<span>${escapeHtml(block.caption)}</span>` : ""}</figcaption>` : ""}
            </figure>
          `;
        }
        if (block.type === "formula") {
          return `<div class="rich-formula justify-${align}">${escapeHtml(unwrapFormula(block.formula))}</div>`;
        }
        const size = ["small", "normal", "large"].includes(block.fontSize) ? block.fontSize : "normal";
        return `<p class="rich-paragraph rich-text-${size} text-${align}">${renderInlineMath(block.text || "")}</p>`;
      }).join("")}
    </div>
  `;
}

function slugLabel(value) {
  const category = categories.find((item) => item.id === value);
  return category ? category.label : value;
}

function canonicalTemplateId(id) {
  return legacyTemplateSkins[id] || id || "";
}

function projectTemplateId(project) {
  return canonicalTemplateId(project.portfolioView?.template?.id || project.templateId || "");
}

function projectTemplateClass(project) {
  const templateId = projectTemplateId(project);
  return templateId ? `project-template project-template-${templateId}` : "project-template-white";
}

function hasPublicTemplate(project) {
  return Boolean(projectTemplateId(project));
}

function projectTemplateVisual(project) {
  return project?.portfolioView?.template?.visual || project?.templateVisual || null;
}

function projectTemplateStyle(project, accent) {
  const visual = projectTemplateVisual(project) || {};
  const values = {
    "--accent": accent,
    "--template-bg": visual.background,
    "--template-panel": visual.panel,
    "--template-accent": visual.accent,
    "--template-hover": visual.hover,
    "--template-click": visual.click,
    "--template-click-text": visual.clickText,
    "--template-line": visual.line,
    "--template-text": visual.text
  };
  return Object.entries(values)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}

function applyProjectTemplateToElement(element, project, accent) {
  if (!element) return;
  [...element.classList]
    .filter((className) => className === "project-template" || className === "project-template-white" || className.startsWith("project-template-"))
    .forEach((className) => element.classList.remove(className));
  projectTemplateClass(project).split(" ").forEach((className) => element.classList.add(className));
  const visual = projectTemplateVisual(project) || {};
  const values = {
    "--accent": accent,
    "--template-bg": visual.background,
    "--template-panel": visual.panel,
    "--template-accent": visual.accent,
    "--template-hover": visual.hover,
    "--template-click": visual.click,
    "--template-click-text": visual.clickText,
    "--template-line": visual.line,
    "--template-text": visual.text
  };
  Object.entries(values).forEach(([key, value]) => {
    if (value) {
      element.style.setProperty(key, value);
    } else {
      element.style.removeProperty(key);
    }
  });
}

function parsedItemTerms(item) {
  return [
    item?.title,
    item?.description,
    item?.meta,
    item?.url,
    item?.kind,
    ...(item?.rich?.blocks || []).flatMap((block) => [block.text, block.formula, block.title, block.caption]),
    ...(item?.children || []).flatMap(parsedItemTerms)
  ];
}

function flattenProject(project) {
  const categoryLabel = slugLabel(project.category);
  const electronicsKeywords = window.electronicsSearchKeywords
    ? window.electronicsSearchKeywords(project, categoryLabel)
    : [];
  const richSummaryTerms = (project.summaryRich?.blocks || []).flatMap((block) => [
    block.text,
    block.formula,
    block.title,
    block.caption
  ]);
  const parsedChildTerms = (project.portfolioView?.sections || []).flatMap((section) =>
    (section.items || []).flatMap(parsedItemTerms)
  );
  const design = project.design || {};
  const designTerms = [
    design.brief?.summary,
    ...(design.brief?.files || []).flatMap((item) => [item.title, item.description, item.url]),
    design.documentation?.summary,
    ...(design.documentation?.files || []).flatMap((item) => [item.title, item.description, item.url]),
    ...(design.documentation?.references || []).flatMap((item) => [item.title, item.description, item.url]),
    ...(design.documentation?.mathAnalysis || []).flatMap((item) => [item.title, item.description]),
    design.simulation?.summary,
    ...(design.simulation?.files || []).flatMap((item) => [item.title, item.description, item.url]),
    ...(design.simulation?.results || []).flatMap((item) => [item.title, item.description, item.url])
  ];
  return [
    project.id,
    project.title,
    categoryLabel,
    project.status,
    project.summary,
    ...richSummaryTerms,
    ...parsedChildTerms,
    ...designTerms,
    ...(project.focus || []),
    ...(project.highlights || []),
    ...(project.tools || []).map((item) => typeof item === "string" ? item : [item.name, item.title, item.label, item.description].filter(Boolean).join(" ")),
    ...(project.languages || []),
    ...(project.documents || []).flatMap((item) => [item.title, item.type, item.status, item.url]),
    ...(project.tests || []).flatMap((item) => [item.name, item.method, item.status, item.result, item.artifact]),
    ...(project.pcbs || []).flatMap((item) => [item.name, item.revision, item.status, item.artifact]),
    ...(project.media || []).flatMap((item) => [item.title, item.caption, item.url]),
    ...(project.sections || []).flatMap((section) => [
      section.title,
      section.description,
      ...(section.items || []).flatMap((item) => [item.title, item.description, item.type, item.status, item.url])
    ]),
    ...(project.links || []).flatMap((item) => [item.label, item.url]),
    ...electronicsKeywords
  ]
    .map(normalize)
    .join(" ");
}

function projectMatches(project, query) {
  return !query || flattenProject(project).includes(query);
}

function projectVisible(project, query) {
  const categoryMatch = activeFilter === "all" || project.category === activeFilter;
  return categoryMatch && projectMatches(project, query);
}

function linkAttributes(url) {
  return /^https?:\/\//.test(url || "") ? ' target="_blank" rel="noreferrer"' : "";
}

function resourceLink(item, label = item.label || item.title || item.name) {
  if ((!item.url && !item.artifact) || item.status === "planned") {
    return `<span class="resource-link muted">${label}</span>`;
  }

  const target = item.url || item.artifact;
  return `<a class="resource-link" href="${target}"${linkAttributes(target)}>${label}</a>`;
}

function pillList(items, className = "") {
  return (items || [])
    .map((item) => {
      const label = typeof item === "string" ? item : item.name || item.title || item.label || "";
      return label ? `<span class="tag ${className}">${label}</span>` : "";
    })
    .join("");
}

function evidenceList(items, renderItem, emptyMessage) {
  if (!items || !items.length) {
    return `<p class="evidence-empty">${emptyMessage}</p>`;
  }

  return `<ul>${items.map(renderItem).join("")}</ul>`;
}

function detailBlock(title, className, content) {
  return `
    <details class="${className}">
      <summary>${title}</summary>
      ${content}
    </details>
  `;
}

function mediaGrid(items) {
  if (!items || !items.length) {
    return `<p class="evidence-empty">No project images have been added yet.</p>`;
  }

  return `
    <div class="media-grid">
      ${items.map((item) => `
        <figure>
          <a href="${item.url}"${linkAttributes(item.url)}>
            <img src="${item.url}" alt="${item.title}">
          </a>
          <figcaption>
            <strong>${item.title}</strong>
            <span>${item.caption || ""}</span>
          </figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function siteSectionHasContent(section) {
  return Boolean(section?.title || section?.description || section?.backgroundImage || (section?.links || []).length || (section?.assets || []).length);
}

function renderSiteSections() {
  const mount = document.querySelector("#dynamic-sections");
  if (!mount) return;
  const visibleSections = (siteSections || []).filter(siteSectionHasContent);
  mount.innerHTML = visibleSections.map((section) => {
    const style = section.backgroundImage ? ` style="--section-bg: url('${escapeHtml(section.backgroundImage)}')"` : "";
    const links = [...(section.links || []), ...(section.assets || [])].filter((item) => item?.url);
    return `
      <section class="section dynamic-section" id="${escapeHtml(section.id || "")}"${style}>
        <div class="dynamic-section-surface">
          <div class="section-heading">
            <div>
              <p class="eyebrow">${escapeHtml(section.eyebrow || "Portfolio section")}</p>
              <h2>${escapeHtml(section.title || "Untitled section")}</h2>
            </div>
          </div>
          ${section.description ? `<p class="dynamic-section-copy">${renderInlineMath(section.description)}</p>` : ""}
          ${links.length ? `<div class="resource-list">${links.map((item) => resourceLink(item, item.label || item.title || "Open")).join("")}</div>` : ""}
        </div>
      </section>
    `;
  }).join("");
}

function customSectionBlocks(project) {
  return (project.sections || []).map((section) => detailBlock(section.title, "evidence-block evidence-wide", `
    ${section.description ? `<p class="evidence-empty">${section.description}</p>` : ""}
    ${evidenceList(section.items || [], (item) => `
      <li>
        ${item.url ? resourceLink(item, item.title) : `<strong>${item.title}</strong>`}
        <span>${item.type || "Section item"} &middot; ${item.status || "tracked"}</span>
        ${item.description ? `<p>${item.description}</p>` : ""}
      </li>
    `, "No content has been added yet.")}
  `)).join("");
}

function renderParsedBriefBlock(section, fallbackSummary = "") {
  const briefItem = section?.items?.[0] || {};
  const briefText = briefItem.description || fallbackSummary || "";
  if (!briefItem.rich?.blocks?.length && !briefText) return "";
  return `
    <details class="project-brief-default parsed-summary" open>
      <summary>${section?.title || "Project Brief"}</summary>
      ${renderRichContent(briefItem.rich, briefText)}
    </details>
  `;
}

function pathToString(path = []) {
  return path.join(".");
}

function pathFromString(value = "") {
  if (!value) return [];
  return value.split(".").map((item) => Number(item)).filter((item) => Number.isInteger(item));
}

function nodeAtPath(section, path = []) {
  let node = section;
  let children = section?.items || [];
  for (const index of path) {
    node = children[index];
    if (!node) return null;
    children = node.children || [];
  }
  return node;
}

function nodeChildren(node) {
  return node?.items || node?.children || [];
}

function richHasRenderableContent(rich) {
  return Boolean(rich?.blocks?.some((block) =>
    block.type === "image" && block.url ||
    block.type === "formula" && block.formula ||
    block.text ||
    block.title ||
    block.caption
  ));
}

function nodeHasRenderableContent(node) {
  if (!node) return false;
  if (node.kind === "summary") return Boolean(node.description || richHasRenderableContent(node.rich));
  const children = nodeChildren(node);
  if (node.kind === "subsection") {
    return Boolean(node.description || node.url || richHasRenderableContent(node.rich) || children.some(nodeHasRenderableContent));
  }
  return Boolean(node.title || node.description || node.url || richHasRenderableContent(node.rich) || children.some(nodeHasRenderableContent));
}

function sectionHasRenderableContent(section) {
  return Boolean(section?.description || (section?.items || []).some(nodeHasRenderableContent));
}

function nodeSummary(title, rich, text, emptyMessage = "No summary has been added yet.") {
  if (!rich?.blocks?.length && !text) return "";
  return `
    <details class="parsed-summary" open>
      <summary>${title}</summary>
      ${renderRichContent(rich, text || "")}
    </details>
  `;
}

function parsedNodeMeta(node) {
  if (node.kind === "subsection") {
    const count = nodeChildren(node).length;
    return `${count} item${count === 1 ? "" : "s"}`;
  }
  if (node.kind === "image") return "Image";
  if (node.url) return node.meta || "File";
  return node.meta || node.kind || "Text";
}

function parsedNodeCard(node, projectId, sectionIndex, path) {
  return `
    <button
      class="section-open-card evidence-block resource-open-card"
      type="button"
      data-section-project="${projectId}"
      data-section-index="${sectionIndex}"
      data-resource-path="${pathToString(path)}"
    >
      <span>${node.title || "Untitled item"}</span>
      <small>${parsedNodeMeta(node)}</small>
    </button>
  `;
}

function parsedChildCards(children, projectId, sectionIndex, basePath = []) {
  const visibleChildren = children.filter(nodeHasRenderableContent);
  if (!visibleChildren.length) return "";
  return `
    <div class="subsection-grid section-content-grid">
      ${children.map((child, index) => nodeHasRenderableContent(child) ? parsedNodeCard(child, projectId, sectionIndex, [...basePath, index]) : "").join("")}
    </div>
  `;
}

function parsedLeafDetail(item) {
  const hasImage = item.kind === "image" && item.url;
  return `
    ${nodeSummary("Summary", item.rich, item.description || "", "No summary has been added for this item.")}
    <article class="resource-detail">
      <strong>${item.url ? resourceLink({ url: item.url, status: "uploaded" }, item.title) : item.title}</strong>
      ${item.meta ? `<span>${item.meta}</span>` : ""}
      ${hasImage ? `
        <figure class="rich-image justify-center">
          <a href="${item.url}"${linkAttributes(item.url)}><img src="${item.url}" alt="${item.title}"></a>
          ${item.description ? `<figcaption><span>${item.description}</span></figcaption>` : ""}
        </figure>
      ` : ""}
    </article>
  `;
}

function parsedNodeContent(node, projectId, sectionIndex, path = []) {
  const isContainer = !node.kind || node.kind === "subsection";
  if (!isContainer) return parsedLeafDetail(node);
  const children = nodeChildren(node);
  return `
    ${nodeSummary("Summary", node.rich, node.description || "", "No section summary has been added yet.")}
    ${parsedChildCards(children, projectId, sectionIndex, path)}
  `;
}

function parsedSectionContent(section, projectId, sectionIndex, path = []) {
  const node = path.length ? nodeAtPath(section, path) : section;
  if (!node) return `<p class="evidence-empty">This section could not be found.</p>`;
  return parsedNodeContent(node, projectId, sectionIndex, path);
}

function parsedSection(section, index, project) {
  const visibleItems = (section.items || []).filter(nodeHasRenderableContent);
  const itemCount = visibleItems.length;
  const hasImages = visibleItems.some((item) => item.kind === "image");

  return `
    <button
      class="section-open-card evidence-block ${hasImages ? "evidence-wide" : ""}"
      type="button"
      data-section-project="${project.id}"
      data-section-index="${index}"
    >
      <span>${section.title}</span>
      <small>${itemCount} item${itemCount === 1 ? "" : "s"}</small>
    </button>
  `;
}

function projectCard(project) {
  if (project.portfolioView) {
    const category = categories.find((item) => item.id === project.category) || {};
    const accent = category.accent || "#117c7a";
    const showTemplateChrome = hasPublicTemplate(project);
    const sections = project.portfolioView.sections || [];
    const briefSection = sections.find((section) => section.id === "brief");
    const otherSections = sections.filter((section) => section.id !== "brief" && sectionHasRenderableContent(section));

    return `
      <article class="project-card catalog-card ${projectTemplateClass(project)}" id="${project.id}" style="${projectTemplateStyle(project, accent)}">
        <div class="project-body">
          ${showTemplateChrome ? `<div class="project-meta">
            <span class="tag category-tag">${category.label || project.category}</span>
            <span class="tag">${project.status}</span>
            ${pillList(project.focus)}
          </div>` : ""}
          <h3>${project.portfolioView.title || project.title}</h3>
          ${renderParsedBriefBlock(briefSection, project.summary)}
          <div class="evidence-grid" aria-label="${project.title} parsed project sections">
            ${otherSections.map((section, index) => parsedSection(section, index, project)).join("")}
          </div>
        </div>
      </article>
    `;
  }

  const category = categories.find((item) => item.id === project.category) || {};
  const accent = category.accent || "#117c7a";
  const showTemplateChrome = hasPublicTemplate(project);

  return `
    <article class="project-card catalog-card ${projectTemplateClass(project)}" id="${project.id}" style="${projectTemplateStyle(project, accent)}">
      <div class="project-body">
        ${showTemplateChrome ? `<div class="project-meta">
          <span class="tag category-tag">${category.label || project.category}</span>
          <span class="tag">${project.status}</span>
          ${pillList(project.focus)}
        </div>` : ""}
        <h3>${project.title}</h3>
        <p>${project.summary}</p>

        ${project.highlights && project.highlights.length ? detailBlock("Project highlights", "project-drawer", `
          <ul class="highlight-list">
            ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        `) : ""}

        <div class="evidence-grid" aria-label="${project.title} evidence blocks">
          ${detailBlock("Documents", "evidence-block", evidenceList(project.documents, (item) => `
            <li>
              ${resourceLink(item, item.title)}
              <span>${item.type || "Document"} &middot; ${item.status || "tracked"}</span>
            </li>
          `, "No document artifact has been added yet."))}

          ${detailBlock("Tests and results", "evidence-block", evidenceList(project.tests, (item) => `
            <li>
              ${resourceLink({ url: item.artifact, status: item.status }, item.name)}
              <span>${item.method || "Validation"} &middot; ${item.status || "tracked"}</span>
              ${item.result ? `<p>${item.result}</p>` : ""}
            </li>
          `, "No test artifact has been added yet."))}

          ${detailBlock("PCBs built", "evidence-block", evidenceList(project.pcbs, (item) => `
            <li>
              ${resourceLink({ url: item.artifact, status: item.status }, item.name)}
              <span>${item.revision || "Revision"} &middot; ${item.status || "tracked"}</span>
            </li>
          `, "No PCB build has been added yet."))}

          ${detailBlock("Images", "evidence-block evidence-wide", mediaGrid(project.media))}
          ${customSectionBlocks(project)}
        </div>

        ${detailBlock("Tools and implementation files", "project-drawer", `
          <div class="project-tooling">
            <div>
              <h4>Tools Used</h4>
              <div class="project-meta">${pillList(project.tools, "tool-tag")}</div>
            </div>
            <div>
              <h4>Languages</h4>
              <div class="project-meta">${pillList(project.languages, "language-tag")}</div>
            </div>
          </div>
        `)}

        <div class="resource-list">
          ${(project.links || []).map((item) => resourceLink(item)).join("")}
        </div>
      </div>
    </article>
  `;
}

function categorySection(category, visibleProjects) {
  return `
    <section class="category-section ${visibleProjects.length ? "" : "empty-category-section"}" aria-labelledby="${category.id}-title">
      <div class="category-heading">
        <div>
          ${visibleProjects.length ? `<p class="eyebrow">Hardware category</p>` : ""}
          <h3 id="${category.id}-title">${category.label}</h3>
        </div>
        ${visibleProjects.length ? `<span>${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"}</span>` : ""}
      </div>
      ${visibleProjects.length ? `<p class="category-description">${category.description}</p>` : ""}
      <div class="category-projects">
        ${visibleProjects.map(projectCard).join("")}
      </div>
    </section>
  `;
}

function renderProjects() {
  const query = normalize(searchInput.value).trim();
  const visible = projects.filter((project) => projectVisible(project, query));

  projectCount.textContent = projects.length;

  if (!visible.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No projects match that view.</h3>
        <p>Search covers categories, project names, documents, tests, PCB builds, tools, languages, and links.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = categories
    .map((category) => {
      const visibleProjects = visible.filter((project) => project.category === category.id);
      const shouldShowEmptyCategory = !query && (activeFilter === "all" || activeFilter === category.id);
      return visibleProjects.length || shouldShowEmptyCategory ? categorySection(category, visibleProjects) : "";
    })
    .join("");
}

function ensureSectionDialog() {
  let dialog = document.querySelector("#section-view-dialog");
  if (dialog) return dialog;

  dialog = document.createElement("dialog");
  dialog.id = "section-view-dialog";
  dialog.className = "section-view-dialog";
  dialog.innerHTML = `
    <div class="section-view-shell">
      <div class="section-view-heading">
        <div>
          <p class="eyebrow">Project section</p>
          <h2 id="section-view-title">Section</h2>
        </div>
        <div class="section-view-actions">
          <button class="section-view-back" type="button" hidden>Back</button>
          <button class="section-view-minimize" type="button" title="Minimize window" aria-label="Minimize window">-</button>
          <button class="section-view-close" type="button" aria-label="Close section">&times;</button>
        </div>
      </div>
      <div class="section-view-content" id="section-view-content"></div>
    </div>
  `;
  document.body.append(dialog);
  dialog.querySelector(".section-view-minimize").addEventListener("click", () => toggleSectionDialogMinimized(dialog));
  dialog.querySelector(".section-view-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    dialog.classList.remove("is-minimized-dialog");
    updateSectionDialogMinimize(dialog);
  });
  dialog.querySelector(".section-view-back").addEventListener("click", () => {
    const path = pathFromString(dialog.dataset.resourcePath || "");
    path.pop();
    openParsedSection(dialog.dataset.projectId, dialog.dataset.sectionIndex, pathToString(path));
  });
  dialog.querySelector("#section-view-content").addEventListener("click", (event) => {
    const nodeButton = event.target.closest("[data-resource-path]");
    if (!nodeButton) return;
    openParsedSection(nodeButton.dataset.sectionProject, nodeButton.dataset.sectionIndex, nodeButton.dataset.resourcePath);
  });
  return dialog;
}

function openParsedSection(projectId, sectionIndex, resourcePath = "") {
  const project = projects.find((item) => item.id === projectId);
  const sections = (project?.portfolioView?.sections || []).filter((section) => section.id !== "brief");
  const section = sections[Number(sectionIndex)];
  if (!section) return;
  const path = pathFromString(resourcePath);
  const node = path.length ? nodeAtPath(section, path) : section;
  if (!node) return;

  const dialog = ensureSectionDialog();
  const category = categories.find((item) => item.id === project.category) || {};
  applyProjectTemplateToElement(dialog, project, category.accent || "#117c7a");
  dialog.dataset.projectId = projectId;
  dialog.dataset.sectionIndex = String(sectionIndex);
  dialog.dataset.resourcePath = pathToString(path);
  dialog.querySelector("#section-view-title").textContent = node.title || section.title;
  dialog.querySelector(".section-view-back").hidden = !path.length;
  dialog.querySelector("#section-view-content").innerHTML = parsedSectionContent(section, projectId, Number(sectionIndex), path);
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProjects();
  });
});

searchInput.addEventListener("input", renderProjects);

grid.addEventListener("click", (event) => {
  const sectionButton = event.target.closest("[data-section-project]");
  if (!sectionButton) return;
  openParsedSection(sectionButton.dataset.sectionProject, sectionButton.dataset.sectionIndex);
});

function loadProjectCatalog() {
  if (window.__PORTFOLIO_CATALOG__) {
    categories = window.__PORTFOLIO_CATALOG__.categories || [];
    projects = window.__PORTFOLIO_CATALOG__.projects || [];
    siteSections = window.__PORTFOLIO_CATALOG__.siteSections || [];
    renderSiteSections();
    renderProjects();
    return;
  }

  fetch("projects.json")
    .then((response) => {
      if (!response.ok) throw new Error("Could not load projects.json");
      return response.json();
    })
    .then((data) => {
      categories = data.categories || [];
      projects = data.projects || [];
      siteSections = data.siteSections || [];
      renderSiteSections();
      renderProjects();
    })
    .catch(() => {
      grid.innerHTML = `
        <div class="empty-state">
          <h3>Project data did not load.</h3>
          <p>The project catalog is temporarily unavailable.</p>
        </div>
      `;
    });
}

loadProjectCatalog();
