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
let projects = [];
let siteSections = [];
let funFacts = [];
let funFactsRich = null;
let fieldStyles = {};
let siteContent = null;
let siteContentRich = {};
let profile = null;
let profileRich = {};
let activeFilter = "all";
let activeSectionDialogDrag = null;
let activeSectionDialogResize = null;
let sectionDialogDragEnabled = false;
let isApplyingSectionRoute = false;
let searchPanel = null;
let searchStatus = null;
let searchLimitSelect = null;
let currentSearchResults = [];
let assistantSourceCounter = 0;
let assistantSourceMap = new Map();
let assistantChatHistory = [];
let searchableEntries = [];
let searchResultLimit = 10;
let searchHighlightTimer = 0;
const searchHighlightName = "portfolio-search-highlight";

const sectionRouteKey = "portfolio-section";
const sectionRouteParams = {
  path: "portfolioPath",
  project: "portfolioProject",
  section: "portfolioSection"
};

const supportedCodeLanguages = [
  { id: "c", label: "C", aliases: ["c"] },
  { id: "cpp", label: "C++", aliases: ["cpp", "c++", "cplusplus"] },
  { id: "verilog", label: "Verilog", aliases: ["verilog", "v"] },
  { id: "systemverilog", label: "SystemVerilog", aliases: ["systemverilog", "system verilog", "sv"] },
  { id: "ltspice", label: "LTspice", aliases: ["ltspice", "spice", "cir", "net", "asc"] },
  { id: "java", label: "Java", aliases: ["java"] },
  { id: "javascript", label: "JavaScript", aliases: ["javascript", "js", "mjs"] },
  { id: "python", label: "Python", aliases: ["python", "py"] },
  { id: "html", label: "HTML", aliases: ["html", "htm"] }
];

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

const defaultSiteContent = {
  heroCopy: "Add your projects, documents, diagrams, source code, images, profile details, and links.\nSave drafts locally, preview the site, then publish when your target repository is ready.",
  heroEyebrow: "Engineering portfolio",
  heroTitle: "Build a portfolio that presents your work clearly."
};

const defaultProfile = {
  brandImage: "",
  brandText: "Portfolio",
  contactIntro: "",
  displayName: "",
  email: "",
  githubUrl: "",
  heroImage: "",
  linkedinUrl: "",
  phone: "",
  portfolioLabel: "Portfolio",
  profileImage: "",
  resumeUrl: "",
  websiteUrl: ""
};

year.textContent = new Date().getFullYear();

function normalize(value) {
  return String(value || "").toLowerCase();
}

function normalizeFunFacts(value) {
  const items = Array.isArray(value) ? value : String(value || "").split(/\r?\n/);
  return items
    .map((item) => String(item || "").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, 10);
}

function renderFunFacts() {
  if (!funFactsCallout) return;
  const facts = normalizeFunFacts(funFacts);
  const hasRichFacts = Boolean(funFactsRich?.blocks?.length);
  funFactsCallout.hidden = !facts.length && !hasRichFacts;
  funFactsCallout.innerHTML = facts.length || hasRichFacts ? `
    <div class="fun-facts-window">
      <span class="fun-facts-label">Fun fact:</span>
      <div class="fun-facts-lines">
        ${hasRichFacts
          ? renderRichContent({ blocks: funFactsRich.blocks.slice(0, 3) }, facts.join("\n"))
          : facts.map((fact) => `<p class="fun-fact-line">${renderInlineMath(fact)}</p>`).join("")}
      </div>
    </div>
  ` : "";
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

const projectStatusOptions = ["Draft", "In progress", "Completed", "Archived"];

function normalizeProjectStatus(value = "") {
  const clean = String(value || "").trim().toLowerCase().replace(/[-_]+/g, " ");
  if (!clean) return "Draft";
  if (["inprogress", "in progress", "progress", "ongoing", "in work"].includes(clean)) return "In progress";
  const match = projectStatusOptions.find((status) => status.toLowerCase() === clean);
  return match || "Draft";
}

function projectStatusClass(status = "") {
  return normalizeProjectStatus(status)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "") || "draft";
}

function projectStatusVisible(project = {}) {
  if (project?.portfolioView && Object.prototype.hasOwnProperty.call(project.portfolioView, "showStatus")) {
    return project.portfolioView.showStatus !== false;
  }
  return project?.showStatusOnPortfolio !== false;
}

function projectStatusText(project = {}) {
  return normalizeProjectStatus(project?.portfolioView?.status || project?.status || "Draft");
}

function projectStatusBadge(project = {}) {
  if (!projectStatusVisible(project)) return "";
  const status = projectStatusText(project);
  return `<span class="project-status-badge project-status-${escapeHtml(projectStatusClass(status))}">${escapeHtml(status)}</span>`;
}

function projectTitleHeading(title, project = {}) {
  return `
    <div class="project-title-row">
      <h3>${escapeHtml(title || "Untitled project")}</h3>
      ${projectStatusBadge(project)}
    </div>
  `;
}

function normalizeCodeLanguage(value = "") {
  const clean = String(value || "").trim().toLowerCase().replace(/[_-]+/g, " ");
  const match = supportedCodeLanguages.find((language) =>
    language.id === clean || language.aliases.includes(clean)
  );
  return match?.id || "javascript";
}

function codeLanguageLabel(value = "") {
  return supportedCodeLanguages.find((language) => language.id === normalizeCodeLanguage(value))?.label || "Code";
}

function normalizeCodePasteMode(value = "") {
  return value === "source" ? "source" : "basic";
}

function normalizeCodeText(value = "", pasteMode = "source") {
  const normalized = String(value || "").replace(/\r\n?/g, "\n").replace(/\u00a0/g, " ");
  if (normalizeCodePasteMode(pasteMode) === "source") return normalized.replace(/\t/g, "  ").replace(/\s+$/g, "");
  return normalized
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

function sourceLooksCpp(source = "") {
  const text = String(source || "");
  return /#include\s*<(?:iostream|string|vector|array|map|unordered_map|memory|algorithm|optional|variant)>/.test(text) ||
    /\b(std::|cout|cin|cerr|namespace|template\s*<|class\s+\w+|new\s+\w|delete\s+|constexpr|nullptr|using\s+namespace)\b/.test(text);
}

function sourceLooksC(source = "") {
  const text = String(source || "");
  return /#include\s*<(?:stdio|stdlib|string|stdint|stdbool|math)\.h>/.test(text) ||
    /\b(printf|scanf|malloc|calloc|realloc|free|struct\s+\w+|typedef\s+struct)\b/.test(text);
}

function detectCodeLanguage(value = "") {
  const code = String(value || "");
  if (/<\/?[a-z][\s\S]*?>/i.test(code) || /<!doctype\s+html/i.test(code)) return "html";
  if (/\b(always_ff|always_comb|always_latch|logic|interface|covergroup|assert\s+property|typedef\s+enum|class\s+\w+)\b/.test(code)) return "systemverilog";
  if (/\b(module|endmodule|always|assign|reg|wire|initial|posedge|negedge)\b/.test(code)) return "verilog";
  if (/^\s*\.?(tran|ac|dc|op|model|subckt|ends|param)\b/im.test(code) || /\bV\w+\s+\w+\s+\w+\s+(?:DC|SIN|PULSE)?/i.test(code)) return "ltspice";
  if (/\b(def|elif|import\s+\w+|from\s+\w+\s+import|self|None|True|False)\b/.test(code)) return "python";
  if (/\b(public\s+class|private\s+|protected\s+|static\s+void\s+main|System\.out)\b/.test(code)) return "java";
  if (sourceLooksCpp(code) || sourceLooksC(code) || /\b(#include|main\s*\(|puts\s*\(|fprintf|sizeof\s*\()\b/.test(code)) {
    return sourceLooksCpp(code) ? "cpp" : "c";
  }
  if (/\b(const|let|var|function|=>|console\.log|document\.|window\.)\b/.test(code)) return "javascript";
  return "javascript";
}

function tokenizedCodeHtml(code = "", language = "javascript") {
  let html = escapeHtml(code);
  const tokens = [];
  const protect = (pattern, className) => {
    html = html.replace(pattern, (match) => {
      const token = `@@CODE_TOKEN_${tokens.length}@@`;
      tokens.push(`<span class="${className}">${match}</span>`);
      return token;
    });
  };

  if (language === "html") {
    protect(/&lt;!--[\s\S]*?--&gt;/g, "code-token-comment");
    protect(/(&lt;\/?)([a-zA-Z0-9:-]+)([\s\S]*?)(\/?&gt;)/g, "code-token-tag");
  } else {
    const commentPattern = ["python", "ltspice"].includes(normalizeCodeLanguage(language))
      ? /\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[^\n]*/g
      : /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g;
    protect(commentPattern, "code-token-comment");
    protect(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g, "code-token-string");
    if (["c", "cpp"].includes(normalizeCodeLanguage(language))) {
      protect(/^#\s*\w+[^\n]*/gm, "code-token-preprocessor");
    }
  }

  protect(/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/gi, "code-token-number");

  const keywordMap = {
    c: "_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|restrict|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while",
    cpp: "alignas|alignof|and|and_eq|asm|auto|bitand|bitor|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|false|float|for|friend|if|inline|int|long|mutable|namespace|new|noexcept|not|not_eq|nullptr|operator|or|or_eq|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|true|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while|xor|xor_eq",
    verilog: "always|and|assign|begin|buf|case|casex|casez|deassign|default|defparam|disable|edge|else|end|endcase|endfunction|endmodule|endprimitive|endspecify|endtable|endtask|event|for|force|forever|fork|function|generate|genvar|if|initial|inout|input|integer|join|module|nand|negedge|nor|not|or|output|parameter|posedge|primitive|reg|release|repeat|signed|specify|supply0|supply1|table|task|tri|wand|while|wire|wor|xnor|xor",
    systemverilog: "always|always_comb|always_ff|always_latch|assign|automatic|begin|bit|case|class|clocking|covergroup|default|disable|do|else|end|endcase|endclass|endclocking|endfunction|endmodule|endpackage|endtask|enum|for|forever|function|generate|genvar|if|initial|input|int|interface|logic|module|negedge|output|package|parameter|posedge|reg|return|signed|task|typedef|wire",
    ltspice: "ac|dc|end|ends|four|func|global|ic|include|lib|meas|model|nodeset|op|options|param|plot|probe|save|step|subckt|temp|tran",
    java: "abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|if|implements|import|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while",
    javascript: "async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|false|finally|for|from|function|if|import|in|instanceof|let|new|null|of|return|static|super|switch|this|throw|true|try|typeof|undefined|var|void|while|yield",
    python: "and|as|assert|async|await|break|class|continue|def|del|elif|else|except|False|finally|for|from|global|if|import|in|is|lambda|None|nonlocal|not|or|pass|raise|return|True|try|while|with|yield",
    html: "html|head|body|main|section|article|div|span|script|style|link|meta|title|header|footer|nav|button|input|form|label|img|a|p|pre|code"
  };
  const keywords = keywordMap[normalizeCodeLanguage(language)] || keywordMap.javascript;
  html = html.replace(new RegExp(`\\b(${keywords})\\b`, "g"), '<span class="code-token-keyword">$1</span>');
  html = html.replace(/@@CODE_TOKEN_(\d+)@@/g, (_match, index) => tokens[Number(index)] || "");
  return html;
}

function renderRichCodeBlock(block = {}) {
  const language = normalizeCodeLanguage(block.language || detectCodeLanguage(block.code || ""));
  const code = normalizeCodeText(block.code || "", block.pasteMode || "source");
  return `
    <figure class="rich-code-block rich-code-language-${language}">
      <figcaption><span>&lt;/&gt;</span> ${escapeHtml(codeLanguageLabel(language))}</figcaption>
      <pre><code>${tokenizedCodeHtml(code, language)}</code></pre>
    </figure>
  `;
}

function renderPlainMultiline(value = "") {
  return escapeHtml(value).replace(/\r\n?|\n/g, "<br>");
}

function normalizeSiteContent(content = {}) {
  return {
    heroCopy: String(content.heroCopy || "").trim() || defaultSiteContent.heroCopy,
    heroEyebrow: String(content.heroEyebrow || "").trim() || defaultSiteContent.heroEyebrow,
    heroTitle: String(content.heroTitle || "").trim() || defaultSiteContent.heroTitle
  };
}

function normalizeProfile(profileValue = {}) {
  return {
    brandImage: String(profileValue.brandImage || "").trim(),
    brandText: String(profileValue.brandText || "").trim() || String(profileValue.displayName || "").trim() || defaultProfile.brandText,
    contactIntro: String(profileValue.contactIntro || "").trim(),
    displayName: String(profileValue.displayName || "").trim(),
    email: String(profileValue.email || "").trim(),
    githubUrl: String(profileValue.githubUrl || "").trim(),
    heroImage: String(profileValue.heroImage || "").trim(),
    linkedinUrl: String(profileValue.linkedinUrl || "").trim(),
    phone: String(profileValue.phone || "").trim(),
    portfolioLabel: String(profileValue.portfolioLabel || "").trim() || defaultProfile.portfolioLabel,
    profileImage: String(profileValue.profileImage || "").trim(),
    resumeUrl: String(profileValue.resumeUrl || "").trim(),
    websiteUrl: String(profileValue.websiteUrl || "").trim()
  };
}

function mailComposeLink(email = "") {
  const clean = String(email || "").trim();
  return clean ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(clean)}` : "";
}

function phoneLink(phone = "") {
  const clean = String(phone || "").trim();
  return clean ? `tel:${clean.replace(/[^\d+]/g, "")}` : "";
}

function renderSiteContent() {
  const content = normalizeSiteContent(siteContent || {});
  if (heroEyebrow) heroEyebrow.innerHTML = renderRichFieldContent(siteContentRich.heroEyebrow, content.heroEyebrow);
  if (heroTitle) heroTitle.innerHTML = renderRichFieldContent(siteContentRich.heroTitle, content.heroTitle);
  if (heroCopy) heroCopy.innerHTML = renderRichFieldContent(siteContentRich.heroCopy, content.heroCopy);
  applyPlainFieldStyle(heroEyebrow, "site-hero-eyebrow");
  applyPlainFieldStyle(heroTitle, "site-hero-title");
  applyPlainFieldStyle(heroCopy, "site-hero-copy");
}

function renderProfile() {
  const current = normalizeProfile(profile || {});
  const displayName = current.displayName || "Portfolio";
  const label = current.portfolioLabel || "Portfolio";
  const emailLink = mailComposeLink(current.email);
  const callLink = phoneLink(current.phone);
  const links = [
    current.email ? { label: "Email", url: emailLink, external: true } : null,
    current.phone ? { label: "Call", url: callLink } : null,
    current.githubUrl ? { label: "GitHub", url: normalizeLinkTarget(current.githubUrl, { assumeWeb: true }), external: true } : null,
    current.linkedinUrl ? { label: "LinkedIn", url: normalizeLinkTarget(current.linkedinUrl, { assumeWeb: true }), external: true } : null,
    current.websiteUrl ? { label: "Website", url: normalizeLinkTarget(current.websiteUrl, { assumeWeb: true }), external: true } : null,
    current.resumeUrl ? { label: "Resume", url: current.resumeUrl, external: false } : null
  ].filter(Boolean);

  document.title = `${displayName} | ${label}`;
  if (brandName) brandName.innerHTML = renderRichFieldContent(profileRich.displayName, displayName);
  if (brandSubtitle) brandSubtitle.innerHTML = renderRichFieldContent(profileRich.portfolioLabel, label);
  applyPlainFieldStyle(brandName, "profile-display-name");
  applyPlainFieldStyle(brandSubtitle, "profile-portfolio-label");
  if (brandText) brandText.textContent = current.brandText || displayName.slice(0, 3).toUpperCase() || "PORT";
  if (brandIcon) {
    if (current.brandImage) {
      brandIcon.src = current.brandImage;
      brandIcon.hidden = false;
    } else {
      brandIcon.hidden = true;
    }
  }

  if (headerAvatar && headerAvatarImage) {
    headerAvatar.hidden = !current.profileImage;
    if (current.profileImage) {
      headerAvatarImage.src = current.profileImage;
      headerAvatarImage.alt = displayName;
      headerAvatar.setAttribute("aria-label", `Go to ${displayName} contact information`);
    }
  }

  if (heroImage) {
    if (current.heroImage) {
      heroImage.hidden = false;
      heroImage.src = current.heroImage;
      heroImage.alt = `${displayName} portfolio background`;
    } else {
      heroImage.hidden = true;
    }
  }

  document.querySelectorAll('a[href="#resume"]').forEach((link) => {
    link.hidden = !current.resumeUrl;
  });
  const heroGithubLink = [...document.querySelectorAll(".hero-actions a")]
    .find((link) => /github/i.test(link.textContent || ""));
  if (heroGithubLink) {
    heroGithubLink.hidden = !current.githubUrl;
    if (current.githubUrl) heroGithubLink.href = normalizeLinkTarget(current.githubUrl, { assumeWeb: true });
  }

  if (resumeSection) {
    resumeSection.hidden = !current.resumeUrl;
    resumeSection.querySelectorAll("a").forEach((link) => {
      link.href = current.resumeUrl || "#";
    });
    const resumeObject = resumeSection.querySelector("object");
    if (resumeObject) resumeObject.data = current.resumeUrl || "";
    const fallbackLink = resumeSection.querySelector("object a");
    if (fallbackLink) fallbackLink.href = current.resumeUrl || "#";
  }

  if (profilePhoto) {
    profilePhoto.hidden = !current.profileImage;
    if (current.profileImage) {
      profilePhoto.src = current.profileImage;
      profilePhoto.alt = `Portrait of ${displayName}`;
    }
  }
  if (contactTitle) contactTitle.innerHTML = renderRichFieldContent(profileRich.displayName, displayName);
  applyPlainFieldStyle(contactTitle, "profile-display-name");
  if (contactIntro) {
    contactIntro.innerHTML = renderRichFieldContent(
      profileRich.contactIntro,
      current.contactIntro || (current.displayName ? `${displayName}'s contact information and public links.` : "Add contact details in the builder.")
    );
  }
  applyPlainFieldStyle(contactIntro, "profile-contact-intro");
  if (contactDetails) {
    contactDetails.innerHTML = [
      current.email ? `<a href="${emailLink}" target="_blank" rel="noreferrer"${plainFieldStyleAttribute("profile-email")}>${renderRichFieldContent(profileRich.email, current.email)}</a>` : "",
      current.phone ? `<a href="${callLink}"${plainFieldStyleAttribute("profile-phone")}>${renderRichFieldContent(profileRich.phone, current.phone)}</a>` : ""
    ].filter(Boolean).join("");
  }
  if (contactLinks) {
    contactLinks.innerHTML = links.map((link) => {
      const styleId = link.label === "GitHub"
        ? "profile-github"
        : link.label === "LinkedIn"
          ? "profile-linkedin"
          : link.label === "Website"
            ? "profile-website"
            : link.label === "Email"
              ? "profile-email"
              : link.label === "Call"
                ? "profile-phone"
                : "";
      return `<a href="${link.url}"${link.external ? ' target="_blank" rel="noreferrer"' : ""}${styleId ? plainFieldStyleAttribute(styleId) : ""}>${link.label}</a>`;
    }).join("");
  }
  if (footerOwner) footerOwner.innerHTML = `&copy; <span id="year">${new Date().getFullYear()}</span> ${displayName}`;
  if (contactBand) contactBand.hidden = !links.length && !current.profileImage && !current.contactIntro && !current.displayName;
}

function textBlocksFromPlainText(text) {
  return [{
    align: "left",
    fontFamily: "Arial",
    fontSize: "normal",
    text: String(text || ""),
    type: "paragraph"
  }];
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
  return withMath.replace(/\b(https?:\/\/[^\s<]+|www\.[^\s<]+|(?:github|linkedin|gitlab|bitbucket|drive|docs)\.com\/[^\s<]+)/gi, (match) => {
    const trailing = match.match(/[),.;:!?]+$/)?.[0] || "";
    const clean = trailing ? match.slice(0, -trailing.length) : match;
    const href = normalizeLinkTarget(clean, { assumeWeb: true });
    return `<a href="${href}" target="_blank" rel="noreferrer">${clean}</a>${trailing}`;
  });
}

function renderMultilineInlineText(text = "") {
  return renderInlineMath(text).replace(/\r\n?|\n/g, "<br>");
}

function looksLikeBareWebAddress(value = "") {
  const clean = String(value || "").trim();
  if (!clean || /\s/.test(clean) || /^(\.?\.?\/|#|mailto:|tel:)/i.test(clean)) return false;
  if (/^[a-z][a-z0-9+.-]*:/i.test(clean)) return false;
  const host = clean.split(/[/?#]/)[0].toLowerCase();
  if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(host)) return false;
  return !/\.(pdf|docx?|xlsx?|pptx?|zip|7z|rar|png|jpe?g|gif|svg|webp|txt|md|csv|json|xml|log|c|h|cpp|hpp|py|js|mjs|ts|v|sv|vhdl?|spice|cir|net|asc|sch|kicad_sch|kicad_pcb)$/i.test(host);
}

function looksLikeWebOrContactText(value = "") {
  const clean = String(value || "").trim();
  if (!clean) return false;
  if (/\b(?:https?:\/\/|www\.)[^\s<>"']+/i.test(clean)) return true;
  if (/\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/i.test(clean)) return true;
  if (/\b(?:github|linkedin|gitlab|bitbucket|drive|docs)\.com\/[^\s<>"']+/i.test(clean)) return true;
  if (looksLikeBareWebAddress(clean)) return true;
  return clean.split(/\s+/).some((word) => looksLikeBareWebAddress(word.replace(/^[("']+|[)"'.,;:!?]+$/g, "")));
}

function normalizeLinkTarget(target = "", options = {}) {
  const clean = String(target || "").trim();
  if (!clean) return "";
  if (/^\/\//.test(clean)) return `https:${clean}`;
  if (/^www\./i.test(clean)) return `https://${clean}`;
  if (options.assumeWeb && looksLikeBareWebAddress(clean)) return `https://${clean}`;
  return clean;
}

function isWebsiteLinkItem(item = {}, target = "") {
  const clean = String(target || "").trim();
  if (/^(https?:)?\/\//i.test(clean) || /^www\./i.test(clean)) return true;
  const typeText = [item.kind, item.type, item.status, item.meta, item.label, item.title]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return /\b(link|website|web link|url|external|github|linkedin|drive|social|profile)\b/.test(typeText);
}

function linkifyRichTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent || !/(https?:\/\/|www\.|(?:github|linkedin|gitlab|bitbucket|drive|docs)\.com\/)/i.test(node.textContent)) return NodeFilter.FILTER_REJECT;
      return node.parentElement?.closest("a") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  let node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }

  nodes.forEach((textNode) => {
    const text = textNode.textContent || "";
    const fragment = document.createDocumentFragment();
    let cursor = 0;
    text.replace(/\b(https?:\/\/[^\s<]+|www\.[^\s<]+|(?:github|linkedin|gitlab|bitbucket|drive|docs)\.com\/[^\s<]+)/gi, (match, _url, offset) => {
      if (offset > cursor) fragment.append(document.createTextNode(text.slice(cursor, offset)));
      const trailing = match.match(/[),.;:!?]+$/)?.[0] || "";
      const clean = trailing ? match.slice(0, -trailing.length) : match;
      const link = document.createElement("a");
      link.href = normalizeLinkTarget(clean, { assumeWeb: true });
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = clean;
      fragment.append(link);
      if (trailing) fragment.append(document.createTextNode(trailing));
      cursor = offset + match.length;
      return match;
    });
    if (cursor < text.length) fragment.append(document.createTextNode(text.slice(cursor)));
    textNode.replaceWith(fragment);
  });
}

function sanitizeRichInlineHtml(value = "") {
  const template = document.createElement("template");
  template.innerHTML = String(value || "");
  const allowedTags = new Set(["A", "B", "BR", "EM", "I", "SPAN", "STRONG", "U"]);

  [...template.content.querySelectorAll("*")].forEach((node) => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(...node.childNodes);
      return;
    }

    const href = node.tagName === "A" ? String(node.getAttribute("href") || "").trim() : "";
    const normalizedHref = normalizeLinkTarget(href, { assumeWeb: true });
    const safeHref = /^(https?:|mailto:|tel:|#|\/)/i.test(normalizedHref) ? normalizedHref : "";
    const fontFamily = cleanFontFamily(node.style.fontFamily || "");
    const fontPx = normalizeFontPx(parseFloat(node.style.fontSize || ""));
    const color = normalizeTextColor(node.style.color || "");
    const rawFontWeight = node.style.fontWeight || "";
    const fontWeight = /^(bold|[6-9]00)$/i.test(rawFontWeight)
      ? "700"
      : /^(normal|[1-5]00)$/i.test(rawFontWeight)
        ? "400"
        : "";
    const fontStyle = node.style.fontStyle === "italic" ? "italic" : "";
    const textDecoration = node.style.textDecoration.includes("underline") ? "underline" : "";

    [...node.attributes].forEach((attribute) => node.removeAttribute(attribute.name));

    if (node.tagName === "A" && safeHref) {
      node.setAttribute("href", safeHref);
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noreferrer");
    }
    if (fontFamily) node.style.fontFamily = fontFamily;
    if (fontPx) node.style.fontSize = `${fontPx}px`;
    if (color) node.style.color = color;
    if (fontWeight) node.style.fontWeight = fontWeight;
    if (fontStyle) node.style.fontStyle = fontStyle;
    if (textDecoration) node.style.textDecoration = textDecoration;
  });

  linkifyRichTextNodes(template.content);
  return template.innerHTML;
}

function displayTitle(value, fallback = "Untitled item") {
  const title = String(value || fallback).trim();
  const replacements = {
    "Brief": "Overview",
    "Project Brief": "Overview",
    "Design Brief": "Design Overview",
    "Simulation Brief": "Simulation Overview"
  };
  return replacements[title] || title;
}

function cleanFontFamily(value = "") {
  return String(value)
    .split(",")
    .map((item) => item.replace(/[^\w\s-]/g, "").trim())
    .filter(Boolean)
    .slice(0, 3)
    .join(", ");
}

function normalizeFontPx(value) {
  const size = Number(value);
  return Number.isFinite(size) && size >= 8 && size <= 24 ? String(size) : "";
}
function normalizeTextColor(value = "") {
    const color = String(value || "").trim();
    return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color) ||
        /^rgba?\(/i.test(color) ||
        /^hsla?\(/i.test(color)
        ? color
        : "";
}

function rgbColorToHex(value = "") {
  const color = String(value || "").trim();
  if (/^#[0-9a-f]{6}$/i.test(color)) return color.toLowerCase();
  const shortHex = color.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (shortHex) return `#${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}${shortHex[3]}${shortHex[3]}`.toLowerCase();
  const rgb = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!rgb) return color;
  return `#${[rgb[1], rgb[2], rgb[3]].map((part) => Math.max(0, Math.min(255, Number(part))).toString(16).padStart(2, "0")).join("")}`;
}

function normalizePlainFieldStyle(style = {}) {
  const normalized = {};
  const fontFamily = cleanFontFamily(style.fontFamily || "");
  const fontPx = normalizeFontPx(style.fontPx || style.fontSize || "");
  const color = normalizeTextColor(style.color || "");
  if (fontFamily) normalized.fontFamily = fontFamily;
  if (fontPx) normalized.fontPx = fontPx;
  if (color) normalized.color = rgbColorToHex(color);
  if (style.bold === true || style.bold === "true") normalized.bold = true;
  if (style.italic === true || style.italic === "true") normalized.italic = true;
  if (style.underline === true || style.underline === "true") normalized.underline = true;
  return normalized;
}

function normalizeFieldStyles(styles = {}) {
  return Object.fromEntries(
    Object.entries(styles || {})
      .map(([fieldId, style]) => [fieldId, normalizePlainFieldStyle(style)])
      .filter(([, style]) => Object.keys(style).length)
  );
}

function plainFieldStyleToCss(style = {}) {
  const normalized = normalizePlainFieldStyle(style);
  const rules = [];
  if (normalized.fontFamily) rules.push(`font-family: ${normalized.fontFamily}`);
  if (normalized.fontPx) rules.push(`font-size: ${normalized.fontPx}px`);
  if (normalized.color) rules.push(`color: ${normalized.color}`);
  if (normalized.bold) rules.push("font-weight: 700");
  if (normalized.italic) rules.push("font-style: italic");
  if (normalized.underline) rules.push("text-decoration: underline");
  return rules.join("; ");
}

function applyPlainFieldStyle(element, fieldId = "") {
  if (!element) return;
  const style = normalizePlainFieldStyle(fieldStyles[fieldId] || {});
  element.style.fontFamily = style.fontFamily || "";
  element.style.fontSize = style.fontPx ? `${style.fontPx}px` : "";
  element.style.color = style.color || "";
  element.style.fontWeight = style.bold ? "700" : "";
  element.style.fontStyle = style.italic ? "italic" : "";
  element.style.textDecoration = style.underline ? "underline" : "";
}

function plainFieldStyleAttribute(fieldId = "") {
  const css = plainFieldStyleToCss(fieldStyles[fieldId] || {});
  return css ? ` style="${escapeHtml(css)}"` : "";
}

function richTextStyle(block = {}) {
    const styles = [];
    const fontFamily = cleanFontFamily(block.fontFamily || "Arial") || "Arial";
    const fontPx = normalizeFontPx(block.fontPx);
    const color = normalizeTextColor(block.color || "");

    if (fontFamily) styles.push(`font-family: ${fontFamily}`);
    if (fontPx) styles.push(`font-size: ${fontPx}px`);
    if (color) styles.push(`color: ${color}`);
    if (block.bold) styles.push("font-weight: 700");
    if (block.italic) styles.push("font-style: italic");
    if (block.underline) styles.push("text-decoration: underline");

    return styles.length ? ` style="${escapeHtml(styles.join("; "))}"` : "";
}

function normalizeCropAspect(value = "") {
    return ["1 / 1", "4 / 3", "16 / 9", "3 / 4"].includes(value) ? value : "original";
}

function normalizeCropZoom(value = 1) {
    const zoom = Number(value);
    return Number.isFinite(zoom) ? Math.min(3, Math.max(1, zoom)) : 1;
}

function normalizeCropPosition(value = 50) {
    const position = Number(value);
    return Number.isFinite(position) ? Math.min(100, Math.max(0, position)) : 50;
}

function richImageCropStyle(block = {}) {
    const aspect = normalizeCropAspect(block.cropAspect);
    const styles = [
        `--crop-zoom: ${normalizeCropZoom(block.cropZoom)}`,
        `--crop-x: ${normalizeCropPosition(block.cropX)}%`,
        `--crop-y: ${normalizeCropPosition(block.cropY)}%`
    ];
    if (aspect !== "original") styles.push(`--crop-aspect: ${aspect}`);
    return ` style="${escapeHtml(styles.join("; "))}"`;
}

function richImageDownloadLink(block = {}) {
    const label = escapeHtml(cleanRichImageTitle(block) || block.caption || "Image file");
    const url = block.url || "#";
    const target = normalizeLinkTarget(url, { assumeWeb: isWebsiteLinkItem(block, url) });

    return `
    <p class="rich-download-only">
      <a
        class="resource-link"
        href="${escapeHtml(target)}"
        ${linkAttributes(target, block)}
        ${downloadAttribute(target, block)}
      >
        ${label}
      </a>
    </p>
  `;
}

function cleanRichImageTitle(block = {}) {
  const title = String(block.title || "").trim();
  return /^pasted image\b/i.test(title) ? "" : title;
}

function renderRichContent(rich, fallbackText = "") {
  const blocks = rich?.blocks?.length ? rich.blocks : textBlocksFromPlainText(fallbackText);
  return `
    <div class="rich-content">
      ${blocks.map((block) => {
        const align = ["left", "center", "right"].includes(block.align) ? block.align : "left";
        if (block.type === "image") {
          if (block.display === "download") return richImageDownloadLink(block);
          const title = cleanRichImageTitle(block);
          const imageSrc = normalizeLinkTarget(block.url, { assumeWeb: true });
            return `
              <figure class="rich-image justify-${align}">
                <span class="rich-image-viewport crop-${normalizeCropAspect(block.cropAspect) === "original" ? "original" : "active"}"${richImageCropStyle(block)}>
                  <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(title || "Overview image")}">
                </span>
                ${(title || block.caption) ? `<figcaption>${title ? `<strong>${escapeHtml(title)}</strong>` : ""}${block.caption ? `<span>${escapeHtml(block.caption)}</span>` : ""}</figcaption>` : ""}
              </figure>
            `;
        }
        if (block.type === "formula") {
          const formula = unwrapFormula(block.formula);
          if (looksLikeWebOrContactText(formula)) {
            return `<p class="rich-paragraph rich-text-normal text-${align}">${renderInlineMath(formula)}</p>`;
          }
          return `<div class="rich-formula justify-${align}">${escapeHtml(formula)}</div>`;
        }
        if (block.type === "code") return renderRichCodeBlock(block);
        const size = ["small", "normal", "large"].includes(block.fontSize) ? block.fontSize : "normal";
        const content = block.html
          ? sanitizeRichInlineHtml(block.html)
          : renderInlineMath(block.text || "");
        return `<p class="rich-paragraph rich-text-${size} text-${align}"${richTextStyle(block)}>${content}</p>`;
      }).join("")}
    </div>
  `;
}

function renderRichFieldContent(rich, fallbackText = "") {
  const blocks = rich?.blocks?.length ? rich.blocks : textBlocksFromPlainText(fallbackText);
  return blocks.map((block) => {
    if (block.type !== "paragraph") return "";
    const align = ["left", "center", "right"].includes(block.align) ? block.align : "left";
    const content = block.html
      ? sanitizeRichInlineHtml(block.html)
      : renderInlineMath(block.text || "");
    return `<span class="rich-field-line text-${align}"${richTextStyle(block)}>${content}</span>`;
  }).filter(Boolean).join("");
}

function slugLabel(value) {
  const category = categories.find((item) => item.id === value);
  return category ? category.label : value;
}

function canonicalTemplateId(id) {
  return legacyTemplateSkins[id] || id || "";
}

function projectTemplateId(project) {
  return canonicalTemplateId(project?.portfolioView?.template?.id || project?.templateId || "");
}

function projectTemplateClass(project) {
  const templateId = projectTemplateId(project);
  return templateId ? `project-template project-template-${templateId}` : "project-template-white";
}

function responsiveClassName(value, fallback) {
  return String(value || fallback || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || fallback;
}

function projectResponsiveClass(project) {
  const profile = projectResponsiveProfile(project);
  return `responsive-project responsive-density-${responsiveClassName(profile.density, "balanced")} responsive-card-${responsiveClassName(profile.cardLayout, "single")}`;
}

function responsiveStyleValues(project) {
  const profile = projectResponsiveProfile(project);
  return {
    "--responsive-section-card-min": profile.sectionCardMin,
    "--responsive-content-max": profile.contentMax,
    "--responsive-media-max": profile.mediaMax,
    "--responsive-touch-target": profile.touchTarget
  };
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
    "--template-text": visual.text,
    ...responsiveStyleValues(project)
  };
  return Object.entries(values)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}

function applyProjectTemplateToElement(element, project, accent) {
  if (!element) return;
  [...element.classList]
    .filter((className) =>
      className === "project-template" ||
      className === "project-template-white" ||
      className === "responsive-project" ||
      className.startsWith("project-template-") ||
      className.startsWith("responsive-density-") ||
      className.startsWith("responsive-card-")
    )
    .forEach((className) => element.classList.remove(className));
  projectTemplateClass(project).split(" ").forEach((className) => element.classList.add(className));
  projectResponsiveClass(project).split(" ").forEach((className) => element.classList.add(className));
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
    "--template-text": visual.text,
    ...responsiveStyleValues(project)
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

function normalizeCategory(category = {}) {
  const label = String(category.label || category.title || category.id || "Project category").trim() || "Project category";
  return {
    accent: normalizeTextColor(category.accent || "") || "#1677a8",
    description: String(category.description || "").trim(),
    id: String(category.id || label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "category"),
    label
  };
}

function hydrateProjectCategories(rawCategories = [], rawProjects = []) {
  const normalized = rawCategories.map(normalizeCategory);
  const knownIds = new Set(normalized.map((category) => category.id));
  rawProjects.forEach((project) => {
    const id = String(project?.category || "").trim();
    if (!id || knownIds.has(id)) return;
    const label = id
      .split(/[-_\s]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ") || "Project category";
    normalized.push(normalizeCategory({ id, label, description: "Project category" }));
    knownIds.add(id);
  });
  return normalized;
}

function setActiveFilter(filter = "all") {
  activeFilter = filter;
  if (activeFilter !== "all" && !categories.some((category) => category.id === activeFilter)) {
    activeFilter = "all";
  }
  filterButtons.forEach((item) => item.classList.toggle("active", item.dataset.filter === activeFilter));
}

function bindFilterButtons() {
  filterButtons = [...document.querySelectorAll(".filter-button")];
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFilter(button.dataset.filter || "all");
      renderProjects();
      updateSearchDropdown();
    });
  });
}

function renderCategoryFilters() {
  if (projectTrackCount) {
    projectTrackCount.textContent = `${categories.length} Track${categories.length === 1 ? "" : "s"}`;
  }
  if (projectTrackLabels) {
    projectTrackLabels.textContent = categories.length
      ? categories.map((category) => category.label).join(", ")
      : "project categories";
  }
  if (projectFilters) {
    projectFilters.innerHTML = `
      <button class="filter-button active" type="button" data-filter="all">All</button>
      ${categories.map((category) => `
        <button class="filter-button" type="button" data-filter="${escapeHtml(category.id)}">${escapeHtml(category.label)}</button>
      `).join("")}
    `;
  }
  bindFilterButtons();
  setActiveFilter(activeFilter);
}

function flattenSearchText(values = []) {
  return values
    .flat(Infinity)
    .filter((value) => value !== null && value !== undefined)
    .map((value) => typeof value === "object" ? JSON.stringify(value) : String(value))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function richTextTerms(rich) {
  return (rich?.blocks || []).flatMap((block) => [
    block.text,
    block.html,
    block.formula,
    block.code,
    block.language,
    block.title,
    block.caption,
    block.url
  ]);
}

function addSearchEntry(entries, entry) {
  const text = flattenSearchText([entry.title, entry.type, entry.context, entry.text, entry.url]);
  if (!entry.title && !text) return null;
  const storedEntry = {
    ...entry,
    normalizedText: normalize(text),
    text
  };
  entries.push(storedEntry);
  return storedEntry;
}

function searchSnippet(text = "", query = "") {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  const index = normalize(clean).indexOf(normalize(query));
  if (index < 0) return clean.slice(0, 150);
  const start = Math.max(0, index - 54);
  const end = Math.min(clean.length, index + query.length + 80);
  return `${start ? "..." : ""}${clean.slice(start, end)}${end < clean.length ? "..." : ""}`;
}

function entryScore(entry, query) {
  const normalizedQuery = normalize(query).trim();
  if (!normalizedQuery) return 0;
  const title = normalize(entry.title);
  const type = normalize(entry.type);
  const context = normalize(entry.context);
  const text = entry.normalizedText || "";
  const words = normalizedQuery.split(/\s+/).filter(Boolean);
  let score = 0;

  if (title === normalizedQuery) score += 160;
  if (title.startsWith(normalizedQuery)) score += 120;
  if (title.includes(normalizedQuery)) score += 90;
  if (context.includes(normalizedQuery)) score += 55;
  if (type.includes(normalizedQuery)) score += 35;
  if (text.includes(normalizedQuery)) score += 45;
  words.forEach((word) => {
    if (title.includes(word)) score += 16;
    if (context.includes(word)) score += 10;
    if (text.includes(word)) score += 6;
  });

  if (score > 0 && entry.kind === "file") score += 18;
  if (score > 0 && entry.kind === "section") score += 14;
  if (score > 0 && entry.kind === "project") score += 12;
  return score;
}

function entryMatches(entry, query) {
  return entryScore(entry, query) > 0;
}

function fileIsBrowserSearchable(url = "") {
  const clean = String(url || "").split(/[?#]/)[0].toLowerCase();
  return /\.(txt|md|markdown|csv|json|xml|log|c|h|cpp|hpp|py|js|mjs|ts|v|sv|vhdl?|spice|cir|net|asc|sch|kicad_sch|kicad_pcb)$/i.test(clean);
}

async function indexSearchableFileText(entry) {
  if (!entry.url || !fileIsBrowserSearchable(entry.url)) return;
  if (/^(https?:)?\/\//i.test(entry.url) && !entry.url.startsWith(window.location.origin)) return;
  try {
    const response = await fetch(entry.url);
    if (!response.ok) return;
    const text = await response.text();
    entry.text = flattenSearchText([entry.text, text.slice(0, 60000)]);
    entry.normalizedText = normalize(entry.text);
    updateSearchDropdown();
  } catch {
    // Files remain searchable by title, path, caption, and catalog text if direct text fetch is unavailable.
  }
}

function addProjectSearchEntries(entries, project) {
  const categoryLabel = slugLabel(project.category);
  const baseContext = `${categoryLabel} / ${project.title}`;
  const projectTerms = [
    project.id,
    project.summary,
    richTextTerms(project.summaryRich),
    project.focus,
    project.highlights,
    project.tools,
    project.languages,
    project.links,
    window.electronicsSearchKeywords ? window.electronicsSearchKeywords(project, categoryLabel) : []
  ];

  addSearchEntry(entries, {
    context: categoryLabel,
    kind: "project",
    projectId: project.id,
    title: project.title,
    type: "Project",
    text: projectTerms
  });

  const sections = (project.portfolioView?.sections || []).filter((section) => section.id !== "brief" && sectionHasRenderableContent(section));
  sections.forEach((section, sectionIndex) => {
    addSearchEntry(entries, {
      context: baseContext,
      kind: "section",
      projectId: project.id,
      sectionIndex: String(sectionIndex),
      title: displayTitle(section.title, "Section"),
      type: "Project section",
      text: [section.description, richTextTerms(section.rich), parsedItemTerms(section)]
    });

    const walkItems = (items = [], path = [], parentTitles = []) => {
      items.forEach((item, index) => {
        const nextPath = [...path, index];
        const title = displayTitle(item.title || item.name || item.label || fileNameFromUrl(item.url || ""), "Project item");
        const url = itemUrl(item);
        const context = [baseContext, displayTitle(section.title, "Section"), ...parentTitles].filter(Boolean).join(" / ");
        const entry = {
          context,
          kind: url ? "file" : "subsection",
          projectId: project.id,
          resourcePath: pathToString(nextPath),
          sectionIndex: String(sectionIndex),
          title,
          type: url ? "File or uploaded asset" : "Subsection",
          url,
          text: [item.description, item.meta, item.kind, item.type, url, richTextTerms(item.rich), parsedItemTerms(item)]
        };
        const storedEntry = addSearchEntry(entries, entry);
        if (url && storedEntry) indexSearchableFileText(storedEntry);
        walkItems(nodeChildren(item), nextPath, [...parentTitles, title]);
      });
    };
    walkItems(section.items || []);
  });

  uniqueDownloads(collectDownloadsFromValue(project, "Project file", [])).forEach((download) => {
    const entry = {
      context: baseContext,
      kind: "file",
      projectId: project.id,
      title: download.title || fileNameFromUrl(download.url),
      type: download.type || "Uploaded file",
      url: download.url,
      text: [download.description, download.status, download.url]
    };
    const storedEntry = addSearchEntry(entries, entry);
    if (storedEntry) indexSearchableFileText(storedEntry);
  });
}

function addSiteSectionSearchEntries(entries) {
  const current = normalizeProfile(profile || {});
  const pageSections = [
    { id: "top", title: heroTitle?.textContent || "Front page", type: "Page section", text: [heroEyebrow?.textContent, heroCopy?.textContent] },
    { id: "projects", title: "Engineering Projects", type: "Directory", text: "project directory categories files sections" },
    { id: "process", title: "Process", type: "Page section", text: "engineering process design testing documentation" },
    { id: "contact", title: "Contact", type: "Page section", text: [current.displayName, current.email, current.phone, current.githubUrl, current.linkedinUrl, current.websiteUrl, current.contactIntro] }
  ];
  if (current.resumeUrl) {
    pageSections.splice(2, 0, { id: "resume", title: "Resume", type: "Page section", text: "resume professional profile document" });
  }
  pageSections.forEach((section) => addSearchEntry(entries, {
    domTarget: section.id,
    kind: "page",
    title: section.title,
    type: section.type,
    text: section.text
  }));

  if (current.resumeUrl) {
    const resumeTextEntry = addSearchEntry(entries, {
      context: "Professional Profile / Resume",
      kind: "file",
      title: "Resume",
      type: "Resume",
      url: current.resumeUrl,
      text: [current.displayName, current.portfolioLabel, current.contactIntro, current.resumeUrl]
    });
    if (resumeTextEntry) indexSearchableFileText(resumeTextEntry);
  }

  (siteSections || []).filter(siteSectionRenderable).forEach((section) => {
    addSearchEntry(entries, {
      domTarget: section.id,
      kind: "page",
      title: section.title || "Portfolio section",
      type: "Portfolio section",
      text: [section.description, richTextTerms(section.richDescription), section.links, section.assets]
    });
    (section.subsections || []).forEach((item) => addSearchEntry(entries, {
      domTarget: section.id,
      kind: "page",
      title: item.title || "Portfolio subsection",
      type: "Portfolio subsection",
      text: [item.description, richTextTerms(item.richDescription), item.links]
    }));
  });
}

function rebuildSearchIndex() {
  const entries = [];
  addSiteSectionSearchEntries(entries);
  projects.forEach((project) => addProjectSearchEntries(entries, project));
  searchableEntries = entries;
}

function searchResultsFor(query) {
  const normalizedQuery = normalize(query).trim();
  if (!normalizedQuery) return [];
  const seen = new Set();
  return searchableEntries
    .map((entry) => ({ ...entry, score: entryScore(entry, normalizedQuery) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .filter((entry) => {
      const key = [entry.kind, entry.projectId, entry.sectionIndex, entry.resourcePath, entry.domTarget, entry.url, entry.title].join("|");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function assistantEndpoint() {
  if (typeof window.OMB_AI_ENDPOINT === "string") return window.OMB_AI_ENDPOINT.trim();
  const metaEndpoint = document.querySelector('meta[name="portfolio-ai-endpoint"]')?.content || "";
  if (metaEndpoint.trim()) return String(metaEndpoint).trim();
  if (["localhost", "127.0.0.1"].includes(window.location.hostname)) return "/api/portfolio-ai";
  return "/api/portfolio-ai";
}

function assistantSourceLabel(result = {}) {
  const title = result.title || "Portfolio item";
  if (result.kind === "project" || result.kind === "page") return title;
  const contextParts = String(result.context || "")
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean);
  const specificContext = contextParts.slice(-2).join(" / ");
  return [title, specificContext].filter(Boolean).join(" - ");
}

function assistantProjectSummary(project = {}) {
  const categoryLabel = slugLabel(project.category);
  const sections = (project.portfolioView?.sections || [])
    .filter((section) => section.id !== "brief" && sectionHasRenderableContent(section))
    .map((section) => displayTitle(section.title, "Section"));
  return {
    category: categoryLabel,
    focus: project.focus || [],
    id: project.id,
    links: project.links || [],
    sections,
    summary: project.summary || "",
    title: project.portfolioView?.title || project.title,
    tools: project.tools || []
  };
}

function assistantSectionInventory(section = {}, parentPath = "") {
  const title = displayTitle(section.title, "Section");
  const pathLabel = [parentPath, title].filter(Boolean).join(" / ");
  const children = (section.items || section.children || [])
    .filter((item) => !item.url && !item.artifact)
    .flatMap((item) => assistantSectionInventory(item, pathLabel));
  const files = (section.items || section.children || [])
    .filter((item) => item.url || item.artifact)
    .map((item) => ({
      description: item.description || "",
      title: item.title || item.label || fileNameFromUrl(item.url || ""),
      type: item.type || item.kind || "file",
      url: assistantAbsoluteUrl(item.url || "")
    }));
  return [{
    files,
    overview: flattenSearchText([section.description, section.summary, section.richDescription]).slice(0, 1200),
    path: pathLabel,
    title
  }, ...children];
}

function assistantPortfolioInventory() {
  return {
    categories: categories.map((category) => ({
      id: category.id,
      label: category.label,
      projectCount: projects.filter((project) => project.category === category.id).length
    })),
    profile: normalizeProfile(profile || {}),
    projects: projects.map((project) => {
      const sections = (project.portfolioView?.sections || [])
        .filter(sectionHasRenderableContent)
        .flatMap((section) => assistantSectionInventory(section));
      return {
        category: slugLabel(project.category),
        filesAndLinks: assistantProjectEvidence(project).slice(0, 30),
        focus: project.focus || [],
        id: project.id,
        overview: flattenSearchText([project.summary, project.portfolioView?.sections?.find((section) => section.id === "brief")]).slice(0, 1600),
        sections,
        title: project.portfolioView?.title || project.title,
        tools: project.tools || []
      };
    }),
    publicLinks: assistantPublicProfileLinks(),
    siteSections: siteSections.filter(siteSectionRenderable).map((section) => ({
      id: section.id,
      links: section.links || [],
      overview: flattenSearchText([section.description, section.richDescription]).slice(0, 900),
      title: section.title
    }))
  };
}

function assistantProjectTitleAcronyms(title = "") {
  const words = normalize(title)
    .split(/\s+/)
    .filter((word) => word.length > 2);
  const acronyms = new Set();
  for (let start = 0; start < words.length; start += 1) {
    for (let length = 2; length <= Math.min(5, words.length - start); length += 1) {
      acronyms.add(words.slice(start, start + length).map((word) => word[0]).join(""));
    }
  }
  return [...acronyms].filter((item) => item.length >= 2);
}

function assistantProjectIsNamedInQuestion(question = "", project = {}) {
  const clean = normalize(question);
  if (!clean) return false;
  const fillerWords = new Set(["with", "from", "into", "using", "project", "design", "system", "systems"]);
  const rawTitle = project.portfolioView?.title || project.title || project.id;
  const title = normalize(rawTitle);
  if (!title) return false;
  if (clean.includes(title)) return true;
  const cleanWords = new Set(clean.split(/\s+/));
  const acronymMatch = assistantProjectTitleAcronyms(rawTitle)
    .some((acronym) => cleanWords.has(acronym));
  if (acronymMatch) return true;
  const words = title.split(/\s+/).filter((word) => word.length > 3 && !fillerWords.has(word));
  if (!words.length) return false;
  const matches = words.filter((word) => clean.includes(word)).length;
  return words.length <= 2 ? matches === words.length : matches >= Math.min(3, words.length);
}

function assistantNamedProjectIds(question = "") {
  return projects
    .filter((project) => assistantProjectIsNamedInQuestion(question, project))
    .map((project) => project.id);
}

function assistantProjectTitleMatches(question = "") {
  return assistantNamedProjectIds(question).length > 0;
}

function assistantUrlKind(url = "") {
  const clean = String(url || "").split(/[?#]/)[0].toLowerCase();
  if (!clean) return "unknown";
  if (/github\.com|raw\.githubusercontent\.com|gist\.githubusercontent\.com/i.test(clean)) return "github";
  if (/linkedin\.com/i.test(clean)) return "linkedin";
  if (/\.(png|jpe?g|gif|webp|svg)$/i.test(clean)) return "image";
  if (/\.pdf$/i.test(clean)) return "pdf";
  if (/\.(zip|7z|rar)$/i.test(clean)) return "archive";
  if (/\.(xlsx?|csv)$/i.test(clean)) return "spreadsheet";
  if (fileIsBrowserSearchable(clean)) return "text";
  if (/^https?:\/\//i.test(clean)) return "webpage";
  return "file";
}

function assistantAbsoluteUrl(url = "") {
  const target = normalizeLinkTarget(url, { assumeWeb: looksLikeBareWebAddress(url) || /^https?:\/\//i.test(url) });
  if (!target) return "";
  try {
    return new URL(target, window.location.href).href;
  } catch {
    return target;
  }
}

function assistantLinkRecordsFromValue(value, context = "") {
  const records = [];
  const downloads = uniqueDownloads(collectDownloadsFromValue(value, "Portfolio asset", []));
  downloads.forEach((download) => {
    const rawUrl = download.url || download.href || download.path || "";
    if (!rawUrl) return;
    records.push({
      context,
      description: download.description || "",
      kind: download.kind || assistantUrlKind(rawUrl),
      label: download.title || download.label || fileNameFromUrl(rawUrl),
      url: assistantAbsoluteUrl(rawUrl)
    });
  });
  return records;
}

function assistantUrlsFromTextValue(value, context = "") {
  const text = flattenSearchText([value]);
  const matches = text.match(/\b(?:https?:\/\/|www\.)[^\s<>"')]+/gi) || [];
  return [...new Set(matches.map((url) => url.replace(/[),.;:!?]+$/g, "")))]
    .slice(0, 16)
    .map((url) => ({
      context,
      description: "",
      kind: assistantUrlKind(url),
      label: /github\.com/i.test(url) ? "GitHub repository or profile" : fileNameFromUrl(url),
      type: "Public link",
      url: assistantAbsoluteUrl(url)
    }));
}

function assistantPublicProfileLinks() {
  const records = [];
  const add = (item = {}, context = "") => {
    const rawUrl = item.url || item.href || item.path || "";
    if (!rawUrl) return;
    const label = item.label || item.title || fileNameFromUrl(rawUrl);
    records.push({
      context,
      kind: item.kind || assistantUrlKind(rawUrl),
      label,
      text: item.description || "",
      url: assistantAbsoluteUrl(rawUrl)
    });
  };

  const current = normalizeProfile(profile || {});
  if (current.resumeUrl) add({ label: "Resume", kind: "resume", url: current.resumeUrl }, "Professional Profile");
  if (current.githubUrl) add({ label: "GitHub", kind: "github", url: current.githubUrl }, "Professional Profile");
  if (current.linkedinUrl) add({ label: "LinkedIn", kind: "linkedin", url: current.linkedinUrl }, "Professional Profile");
  if (current.websiteUrl) add({ label: "Website", kind: "webpage", url: current.websiteUrl }, "Professional Profile");

  (siteSections || []).forEach((section) => {
    (section.links || []).forEach((link) => add(link, section.title || "Portfolio section"));
  });

  return records.filter((record, index, array) => (
    record.url && array.findIndex((item) => item.url === record.url && item.label === record.label) === index
  ));
}

function assistantProjectEvidence(project = {}) {
  const downloads = uniqueDownloads(collectDownloadsFromValue(project, "Project asset", []));
  const downloadRecords = downloads.slice(0, 26).map((download) => {
    const rawUrl = download.url || "";
    return {
      description: download.description || "",
      kind: assistantUrlKind(rawUrl),
      label: download.title || download.label || fileNameFromUrl(rawUrl),
      type: download.type || "",
      url: assistantAbsoluteUrl(rawUrl)
    };
  });
  const textLinkRecords = assistantUrlsFromTextValue([project.summary, project.links, project.portfolioView], project.portfolioView?.title || project.title);
  return [...downloadRecords, ...textLinkRecords].filter((record, index, array) => (
    record.url && array.findIndex((item) => item.url === record.url) === index
  ));
}

function assistantQuestionIsCasual(question = "") {
  const clean = normalize(question);
  return /^(hi|hello|hey|good\s+(morning|afternoon|evening)|yo|sup|thanks|thank\s+you|ok|okay)\b/.test(clean)
    || /^(how\s+are\s+you|what\s+can\s+you\s+help.*|what\s+do\s+you\s+do|who\s+are\s+you|help|help\s+me|can\s+you\s+help|nice\s+to\s+meet\s+you)\??$/.test(clean)
    || /^(what'?s|what\s+is|do\s+you\s+know)\s+my\s+name\??$/.test(clean)
    || /^who\s+am\s+i\??$/.test(clean);
}

function assistantQuestionHasPortfolioIntent(question = "") {
  const clean = normalize(question);
  return assistantProjectTitleMatches(question)
    || /\b(maurice|otieno|portfolio|resume|github|linkedin|contact|email|phone|project|projects|repo|repository|repositories|file|files|document|documents|artifact|artifacts|link|links|download|open|show|where|built|build|created|designed|implemented)\b/.test(clean)
    || /\b(your|his|maurice's)\s+(project|projects|resume|github|linkedin|portfolio|work|email|phone|contact|repo|repository|files?|documents?|links?)\b/.test(clean);
}

function assistantConversationSuggestsPortfolioContext(history = []) {
  return history
    .slice(-4)
    .some((item) => /\b(maurice|otieno|portfolio|project|resume|github|linkedin|electronics|engineering)\b/.test(normalize(item?.content)));
}

function assistantQuestionAllowsPublicLookup(question = "", intent = assistantQuestionIntent(question)) {
  const clean = normalize(question);
  return intent === "general_engineering"
    || intent === "general_knowledge"
    || /\b(github|linkedin|repo|repository|repositories|public\s+link|website|web\s*page|profile|resume|uploaded\s+file|document|source\s+code)\b/.test(clean);
}

function assistantQuestionLooksConceptual(question = "") {
  const clean = normalize(question);
  if (!assistantQuestionIsEngineeringRelated(question)) return false;
  return /^(what|what\s+is|what\s+are|what's|define|explain|describe|how|why|compare|differentiate)\b/.test(clean)
    || /\b(definition|meaning|basics|overview|introduction|difference\s+between|how\s+does|how\s+do|why\s+does|why\s+do)\b/.test(clean);
}

function assistantQuestionIntent(question = "", history = assistantChatHistory) {
  if (assistantQuestionIsCasual(question)) return "general_conversation";
  if (/^(what'?s|what\s+is|do\s+you\s+know)\s+my\s+name\??$/.test(normalize(question)) || /^who\s+am\s+i\??$/.test(normalize(question))) {
    return "general_conversation";
  }
  const hasPortfolioIntent = assistantQuestionHasPortfolioIntent(question);
  const isEngineeringConcept = assistantQuestionIsEngineeringRelated(question) || assistantQuestionLooksConceptual(question);
  if (!hasPortfolioIntent && assistantConversationSuggestsPortfolioContext(history) && /\b(name|you|your|he|his|him|that|this|it)\b/.test(normalize(question))) {
    return "general_conversation";
  }
  if (hasPortfolioIntent && isEngineeringConcept) return "portfolio_and_general";
  if (!hasPortfolioIntent && assistantQuestionIsEngineeringRelated(question)) return "general_engineering";
  if (!hasPortfolioIntent && assistantQuestionLooksConceptual(question)) return "general_engineering";
  if (hasPortfolioIntent) return "portfolio_specific";
  return "general_knowledge";
}

function assistantQuestionTokens(question = "") {
  const stopWords = new Set([
    "about", "again", "also", "and", "are", "can", "could", "does", "for", "from", "give", "have", "his",
    "into", "link", "links", "maurice", "me", "my", "open", "otieno", "please", "portfolio", "project",
    "projects", "show", "tell", "that", "the", "their", "this", "what", "where", "which", "who", "with",
    "work", "your"
  ]);
  return normalize(question)
    .split(/[^a-z0-9+#.]+/i)
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !stopWords.has(token));
}

function assistantSpecificSourceTokens(question = "") {
  const genericTokens = new Set([
    "built", "build", "created", "designed", "did", "done", "engineering", "file", "files", "hardware",
    "item", "items", "section", "sections", "system", "systems", "thing", "things", "tool", "tools",
    "use", "used", "using", "website"
  ]);
  return assistantQuestionTokens(question).filter((token) => !genericTokens.has(token));
}

function assistantPromptTargetsProjectLanding(question = "") {
  const clean = normalize(question);
  return /\b(open|show|view|go\s+to|take\s+me\s+to)\b/.test(clean)
    && /\b(project|overview|page)\b/.test(clean)
    && !/\b(code|source|repo|repository|github|file|files|document|documents|test|tests|result|results|pcb|schematic|simulation|tool|tools|resume|linkedin)\b/.test(clean);
}

function assistantEntryRelationScore(result = {}, question = "") {
  const tokens = assistantSpecificSourceTokens(question);
  const haystack = normalize([result.title, result.context, result.type, result.text, result.url].filter(Boolean).join(" "));
  const tokenHits = tokens.filter((token) => haystack.includes(token)).length;
  let relation = tokenHits * 30;

  if (tokens.length && tokenHits === tokens.length) relation += 25;
  if (Number(result.score || 0) >= 120) relation += 15;
  if (Number(result.score || 0) >= 80) relation += 8;
  if (result.kind === "project") relation += 12;
  if (result.kind === "file" && /\b(file|files|download|document|documents|code|source|github|repo|repository|test|tests|result|results|pcb|schematic|simulation)\b/.test(normalize(question))) {
    relation += 16;
  }
  return relation;
}

function assistantNamedProjectTopicTokens(question = "", namedIds = assistantNamedProjectIds(question)) {
  const projectVocabulary = new Set();
  namedIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean)
    .forEach((project) => {
      const title = project.portfolioView?.title || project.title || project.id;
      normalize(title).split(/\s+/).filter((word) => word.length > 2).forEach((word) => projectVocabulary.add(word));
      assistantProjectTitleAcronyms(title).forEach((acronym) => projectVocabulary.add(acronym));
      projectVocabulary.add(normalize(project.id));
    });
  return assistantSpecificSourceTokens(question).filter((token) => !projectVocabulary.has(token));
}

function assistantSourcesForDisplay(question = "", results = [], intent = assistantQuestionIntent(question)) {
  if (!["portfolio_specific", "portfolio_and_general"].includes(intent)) return [];
  const tokens = assistantSpecificSourceTokens(question);
  const namedProjectIdList = assistantNamedProjectIds(question);
  const namedProjectIds = new Set(namedProjectIdList);
  const namedProjectTopicTokens = assistantNamedProjectTopicTokens(question, namedProjectIdList);
  const asksForLinks = /\b(open|show|where|link|links|github|linkedin|resume|download|file|files|repo|repository|source\s+code)\b/.test(normalize(question));
  const asksForProjectLanding = assistantPromptTargetsProjectLanding(question);
  const pageLinkIntent = /\b(resume|github|linkedin|contact|email|phone)\b/.test(normalize(question));
  const asksForSpecificArtifact = /\b(code|source|repo|repository|github|file|files|document|documents|test|tests|result|results|pcb|schematic|simulation|tool|tools)\b/.test(normalize(question));

  if (!namedProjectIds.size && !pageLinkIntent && tokens.length === 0) return [];

  const filtered = results
    .map((result) => ({ ...result, relation: assistantEntryRelationScore(result, question) }))
    .filter((result) => {
      if (!result) return false;
      if (namedProjectIds.size && !namedProjectIds.has(result.projectId)) return false;
      if (asksForProjectLanding) return result.kind === "project";
      const haystack = normalize([result.title, result.context, result.type, result.text, result.url].filter(Boolean).join(" "));
      const tokenHits = tokens.filter((token) => haystack.includes(token)).length;
      const topicHits = namedProjectTopicTokens.filter((token) => haystack.includes(token)).length;
      if (namedProjectIds.size && namedProjectTopicTokens.length && result.kind !== "project" && topicHits === 0) return false;
      if (namedProjectIds.size && namedProjectTopicTokens.length && result.kind === "project" && asksForSpecificArtifact) return false;
      if (namedProjectIds.size && result.kind === "project") return true;
      if (pageLinkIntent && tokenHits >= 1) return true;
      if (!tokens.length) return false;
      if (tokenHits >= Math.min(2, tokens.length)) return true;
      if (asksForLinks && tokenHits >= 1 && result.relation >= 35) return true;
      return result.relation >= 55;
    });

  return filtered
    .sort((a, b) => b.relation - a.relation || Number(b.score || 0) - Number(a.score || 0))
    .slice(0, asksForLinks ? 4 : 2);
}

function assistantContextForQuestion(question = "", intent = assistantQuestionIntent(question), knownResults = null) {
  const directResults = ["general_engineering", "general_knowledge", "general_conversation"].includes(intent)
    ? []
    : (knownResults || searchResultsFor(question)).slice(0, 8);
  const projectIds = [...new Set([
    ...directResults.map((item) => item.projectId).filter(Boolean),
    ...assistantNamedProjectIds(question)
  ])];
  const matchedProjects = projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean)
    .slice(0, 5);
  const includePortfolioLinkContext = ["portfolio_specific", "portfolio_and_general"].includes(intent);
  const wantsPublicCode = /\b(github|repo|repository|repositories|source\s+code|code|snippet|firmware|verilog|systemverilog|python|javascript)\b/.test(normalize(question));
  const publicProfileFetches = includePortfolioLinkContext
    ? assistantPublicProfileLinks()
      .map((item) => ({ ...item, question }))
      .sort((a, b) => {
        if (!wantsPublicCode) return 0;
        const aGithub = /github/i.test(`${a.kind || ""} ${a.url || ""}`) ? 1 : 0;
        const bGithub = /github/i.test(`${b.kind || ""} ${b.url || ""}`) ? 1 : 0;
        return bGithub - aGithub;
      })
    : [];
  const resultFetches = directResults.map((result) => ({
    context: result.context,
    kind: assistantUrlKind(result.url),
    title: result.title,
    type: result.type,
    url: assistantAbsoluteUrl(result.url || ""),
    question
  }));
  const projectFetches = matchedProjects.flatMap((project) => assistantProjectEvidence(project)
    .filter((item) => ["text", "webpage", "github", "linkedin", "resume_text"].includes(item.kind))
    .slice(0, 6)
    .map((item) => ({ ...item, question })));
  const sourceFetches = [
    ...(wantsPublicCode ? publicProfileFetches : []),
    ...resultFetches,
    ...(wantsPublicCode ? [] : publicProfileFetches),
    ...projectFetches
  ].filter((item) => item.url);
  const uniqueSourceFetches = sourceFetches.filter((item, index, array) => (
    array.findIndex((candidate) => candidate.url === item.url) === index
  )).slice(0, 14);
  return {
    categories: categories.map((category) => ({ id: category.id, label: category.label })),
    intent,
    fullPortfolioInventory: includePortfolioLinkContext ? assistantPortfolioInventory() : null,
    profile: normalizeProfile(profile || {}),
    knowledgeManifest: {
      publicProfiles: includePortfolioLinkContext ? assistantPublicProfileLinks() : [],
      publicSourcePolicy: "Only public profile and project links shown in the portfolio are used. GitHub repository links can be expanded into repository metadata, README text, and selected public source files when the visitor asks for code.",
      matchedProjectEvidence: matchedProjects.map((project) => ({
        evidence: assistantProjectEvidence(project),
        projectId: project.id,
        title: project.portfolioView?.title || project.title
      })),
      note: "Image records include filenames, captions, descriptions, and neighboring portfolio text. Use a vision-capable backend before claiming visual details not present in captions or text."
    },
    portfolioContextPolicy: intent !== "portfolio_specific"
      ? (intent === "portfolio_and_general"
        ? "Answer the general concept clearly, then connect it to specific saved portfolio evidence that appears in the supplied context."
        : "Answer from general knowledge first. Do not lead with the portfolio owner's project context unless the visitor explicitly asks to connect the concept to the portfolio.")
      : "Answer from the configured portfolio context first. Do not invent project details outside the supplied context.",
    projects: matchedProjects.map(assistantProjectSummary),
    question,
    results: directResults.map((result) => ({
      context: result.context,
      kind: result.kind,
      text: searchSnippet(result.text, question),
      title: result.title,
      type: result.type,
      url: result.url
    })),
    sourceFetches: uniqueSourceFetches,
    siteSections: siteSections.filter(siteSectionRenderable).map((section) => ({ id: section.id, title: section.title }))
  };
}

function assistantRemember(role, content = "") {
  const cleanRole = role === "assistant" ? "assistant" : "user";
  const cleanContent = String(content || "").trim();
  if (!cleanContent) return;
  assistantChatHistory.push({
    role: cleanRole,
    content: cleanContent.slice(0, 1400)
  });
  assistantChatHistory = assistantChatHistory.slice(-10);
}

function assistantConversationForRequest(currentQuestion = "", priorConversation = assistantChatHistory) {
  const history = priorConversation.slice(-8).map((item) => ({
    role: item.role === "assistant" ? "assistant" : "user",
    content: String(item.content || "").slice(0, 1200)
  }));
  if (currentQuestion) {
    history.push({ role: "user", content: String(currentQuestion).slice(0, 1200) });
  }
  return history;
}

function assistantFallbackResults(question = "", intent = assistantQuestionIntent(question)) {
  if (!["portfolio_specific", "portfolio_and_general"].includes(intent)) return [];
  const clean = normalize(question).trim();
  if (!clean) return [];
  const namedProjectIds = assistantNamedProjectIds(question);
  let results = searchResultsFor(clean);
  if (namedProjectIds.length && results.length) {
    const focusedResults = results.filter((result) => namedProjectIds.includes(result.projectId));
    if (focusedResults.length) return focusedResults.slice(0, 6);
  }
  if (results.length) return results.slice(0, 6);

  if (namedProjectIds.length) {
    return namedProjectIds
      .map((id) => projects.find((project) => project.id === id))
      .filter(Boolean)
      .map((project) => ({
        context: slugLabel(project.category),
        kind: "project",
        projectId: project.id,
        text: flattenSearchText([project.summary, project.focus, project.tools, project.languages]),
        title: project.portfolioView?.title || project.title,
        type: "Project"
      }))
      .slice(0, 6);
  }

  const category = categories.find((item) => clean.includes(normalize(item.label)) || clean.includes(normalize(item.id)));
  if (category) {
    return projects
      .filter((project) => project.category === category.id)
      .map((project) => ({
        context: category.label,
        kind: "project",
        projectId: project.id,
        text: flattenSearchText([project.summary, project.focus, project.tools, project.languages]),
        title: project.portfolioView?.title || project.title,
        type: "Project"
      }))
      .slice(0, 6);
  }

  if (/resume|professional|contact|email|phone|github|linkedin|profile/.test(clean)) {
    return searchResultsFor("resume contact github professional profile").slice(0, 6);
  }

  if (/project|work|portfolio|hardware|design/.test(clean)) {
    return projects.slice(0, 6).map((project) => ({
      context: slugLabel(project.category),
      kind: "project",
      projectId: project.id,
      text: project.summary || "",
      title: project.portfolioView?.title || project.title,
      type: "Project"
    }));
  }

  return [];
}

function assistantQuestionIsEngineeringRelated(question = "") {
  const clean = normalize(question);
  return /\b(op\s*amp|amplifier|analog|mixed\s*signal|adc|dac|filter|vco|oscillator|pwm|charger|rectifier|regulator|buck|boost|ldo|mosfet|bjt|transistor|diode|pcb|schematic|layout|ground|noise|frequency|gain|phase|ltspice|kicad|vivado|verilog|vhdl|fpga|asic|stm32|mcu|microcontroller|embedded|firmware|rtos|i2c|spi|uart|sensor|control|signal|circuit|electronics|hardware|power)\b/.test(clean);
}

function assistantGeneralEngineeringAnswer(question = "") {
  const clean = normalize(question);
  if (!assistantQuestionIsEngineeringRelated(question)) return "";

  if (/\bembedded\s+systems?\b/.test(clean)) {
    return [
      "Embedded systems is a field of engineering focused on computers that are built into larger products, machines, instruments, or control systems.",
      "",
      "Unlike a laptop or desktop computer, an embedded system is usually designed for a specific job. It combines hardware, firmware, sensors, actuators, communication interfaces, and timing constraints so the product can make measurements, control outputs, or respond to events reliably.",
      "",
      "Common examples include:",
      "- A microcontroller controlling a motor drive.",
      "- A sensor node collecting temperature, pressure, or motion data.",
      "- A medical device running real-time measurement firmware.",
      "- An automotive controller reading sensors and driving actuators.",
      "",
      "The important engineering ideas are timing, interrupts, power use, peripheral interfaces, reliability, and how the firmware proves the hardware is behaving correctly."
    ].join("\n");
  }

  if (/\b(op\s*amp|amplifier|fully differential|differential)\b/.test(clean)) {
    return [
      "A useful way to think about an op amp is as a high-gain error-correcting block. With negative feedback, the circuit around it sets the useful behavior: gain, filtering, buffering, summing, integration, or differential conversion.",
      "",
      "For a fully differential op amp:",
      "- The signal is carried on two opposite-phase outputs instead of one output referenced to ground.",
      "- The differential output improves noise immunity and dynamic range.",
      "- A common-mode feedback loop is normally needed to hold the average output voltage at the desired common-mode level.",
      "",
      "In portfolio terms, this connects most naturally to analog and mixed-signal design, especially filters, VCO control paths, ADC front ends, and precision measurement circuits."
    ].join("\n");
  }

  if (/\b(pwm|vco|oscillator|frequency)\b/.test(clean)) {
    return [
      "PWM-driven VCO work is about converting a digital timing signal into an analog control quantity and then into a frequency.",
      "",
      "The usual signal chain is:",
      "- PWM duty cycle encodes the control value.",
      "- A low-pass filter turns the PWM waveform into an average voltage.",
      "- The VCO maps that voltage to oscillation frequency.",
      "- Tests compare duty cycle, control voltage, frequency range, ripple, and stability.",
      "",
      "That is a mixed-signal problem because digital timing, analog filtering, oscillator behavior, and measurement all interact."
    ].join("\n");
  }

  if (/\b(fpga|asic|verilog|vhdl|vivado|digital)\b/.test(clean)) {
    return [
      "FPGA and ASIC work both implement digital hardware, but the engineering tradeoffs are different.",
      "",
      "- FPGA design is reconfigurable, fast to test, and useful for prototyping or deployment when flexibility matters.",
      "- ASIC design targets a fixed silicon implementation, so verification, timing closure, power, area, and design-for-test become much more permanent decisions.",
      "- Verilog or VHDL describes hardware structure and behavior; it is not software running line by line.",
      "",
      "For a recruiter, strong evidence includes block diagrams, RTL, simulation waveforms, timing reports, verification plans, and notes explaining design tradeoffs."
    ].join("\n");
  }

  if (/\b(stm32|mcu|microcontroller|embedded|firmware|rtos|i2c|spi|uart)\b/.test(clean)) {
    return [
      "Embedded work is strongest when the firmware is tied clearly to hardware behavior.",
      "",
      "A good explanation usually covers:",
      "- The MCU role in the system.",
      "- The peripherals used, such as ADC, PWM, timers, I2C, SPI, UART, or GPIO.",
      "- How timing, interrupts, sampling, power, and fault handling were managed.",
      "- What was measured to prove the system worked.",
      "",
      "STM32CubeIDE is useful because it helps configure peripherals, generate startup code, debug firmware, and manage the build flow around STM32 devices."
    ].join("\n");
  }

  if (/\b(pcb|layout|kicad|schematic|ground|noise)\b/.test(clean)) {
    return [
      "PCB design is where the schematic becomes a physical electrical system.",
      "",
      "The important ideas are:",
      "- Current returns matter as much as current paths.",
      "- Grounding, decoupling, trace width, component placement, and loop area affect noise and stability.",
      "- Analog, power, and switching sections should be arranged so noisy currents do not corrupt sensitive measurements.",
      "- A good portfolio PCB section should show schematic intent, layout decisions, board files, bring-up notes, and test results.",
      "",
      "KiCad evidence is strongest when the design files are paired with clear measurements or bring-up photos."
    ].join("\n");
  }

  if (/\b(charger|rectifier|ac\s*to\s*dc|regulator|buck|boost|ldo|power)\b/.test(clean)) {
    return [
      "An AC-to-DC charger or power supply usually has a few major stages.",
      "",
      "- Input protection and filtering handle transients and noise.",
      "- Rectification converts AC into pulsating DC.",
      "- Bulk capacitance smooths the rectified waveform.",
      "- Regulation sets the desired output voltage or current.",
      "- Load testing checks ripple, thermal behavior, regulation, and fault response.",
      "",
      "For portfolio presentation, the best proof is a clear schematic, expected waveforms, measured output behavior, and a short explanation of component choices."
    ].join("\n");
  }

  return [
    "I can answer this as a general electronics or hardware-engineering question, even if it is not directly tied to one saved project yet.",
    "",
    "The best way to approach it is:",
    "- Define the signal or energy flow.",
    "- Identify the active devices, passive networks, and control points.",
    "- State what should be measured to prove the design works.",
    "- Connect the explanation back to a project artifact: schematic, code, test data, PCB, or simulation.",
    "",
    "If you ask about a specific circuit, tool, waveform, or failure mode, I can make the explanation more concrete."
  ].join("\n");
}

function assistantLocalAnswer(question = "", results = [], intent = assistantQuestionIntent(question)) {
  const ownerName = normalizeProfile(profile || {}).displayName || "the portfolio owner";
  if (intent === "general_conversation") {
    const clean = normalize(question);
    if (/^(hi|hello|hey|yo|sup)\b/.test(clean)) {
      return "Hi, what can I do for you?";
    }
    if (/^(what'?s|what\s+is|do\s+you\s+know)\s+my\s+name\??$/.test(clean) || /^who\s+am\s+i\??$/.test(clean)) {
      return `I am an AI agent for ${ownerName}'s portfolio. I know the portfolio owner is ${ownerName}, but I do not know a visitor's personal name unless they tell me.`;
    }
    if (/\b(who are you|what are you)\b/.test(clean)) {
      return `I am an AI agent for ${ownerName}'s portfolio. I can help with projects, resume links, public links, files, and related engineering questions.`;
    }
    return [
      `I am here with you. I can help explore ${ownerName}'s portfolio, explain projects, summarize files, open relevant sections, or answer related engineering questions.`,
      "",
      "You can ask things like:",
      "- What is embedded systems?",
      "- Show me a project.",
      "- What tools were used?",
      "- Explain the difference between FPGA and ASIC design."
    ].join("\n");
  }

  if (intent === "general_engineering") {
    const generalAnswer = assistantGeneralEngineeringAnswer(question);
    if (generalAnswer) return generalAnswer;
    return [
      "I can answer that as a general engineering question, but I need a little more detail to make the answer useful.",
      "",
      "Try asking about a specific circuit, device, tool, protocol, waveform, or failure mode."
    ].join("\n");
  }

  if (intent === "portfolio_and_general") {
    const generalAnswer = assistantGeneralEngineeringAnswer(question);
    const portfolioAnswer = assistantLocalAnswer(question, results, "portfolio_specific");
    return [
      generalAnswer || "This question connects a general engineering idea to the saved portfolio.",
      "",
      "Portfolio connection:",
      portfolioAnswer
    ].join("\n");
  }

  if (intent === "general_knowledge") {
    const generalAnswer = assistantGeneralEngineeringAnswer(question);
    if (generalAnswer) return generalAnswer;
    return [
      "I can answer that as a general question from the local fallback, but the live model will usually give a deeper answer when it is reachable.",
      "",
      "Short answer:",
      `- ${question.replace(/\?+$/, "")} is a topic I can discuss by breaking it into definition, purpose, main parts, and practical examples.`,
      "- If the question connects to Maurice's portfolio, I will use the saved project context and links as evidence.",
      "- If it is broader than the portfolio, I will answer it as a general engineering or technology concept first."
    ].join("\n");
  }

  if (!projects.length) return "The project catalog is still loading. Try again in a moment.";
  if (!results.length) {
    return [
      `I could not find a strong portfolio match for "${question}".`,
      "",
      "Try asking about:",
      "- A project name or category.",
      "- A tool such as LTspice, KiCad, Vivado, STM32CubeIDE, or GitHub.",
      "- A hardware topic such as op amps, PCB testing, VCOs, embedded firmware, FPGA, ASIC, or power circuits."
    ].join("\n");
  }

  const projectIds = [...new Set(results.map((item) => item.projectId).filter(Boolean))];
  const matchedProjects = projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);
  const projectNames = matchedProjects.map((project) => project.portfolioView?.title || project.title).slice(0, 3);
  const fileCount = results.filter((item) => item.kind === "file").length;
  const sectionCount = results.filter((item) => item.kind === "section" || item.kind === "subsection").length;
  const pageCount = results.filter((item) => item.kind === "page").length;
  const parts = [];

  if (projectNames.length) {
    parts.push(`The strongest portfolio match is ${projectNames.join(projectNames.length > 2 ? ", " : " and ")}.`);
  } else if (pageCount) {
    parts.push("The strongest matches are in the profile, resume, contact, or portfolio information sections.");
  } else {
    parts.push(`I found ${results.length} relevant portfolio item${results.length === 1 ? "" : "s"}.`);
  }

  parts.push("");
  parts.push("What I found:");
  if (sectionCount || fileCount) {
    parts.push(`- ${sectionCount} section match${sectionCount === 1 ? "" : "es"}.`);
    if (fileCount) parts.push(`- ${fileCount} file or link match${fileCount === 1 ? "" : "es"}.`);
  }
  if (pageCount) parts.push(`- ${pageCount} page or profile match${pageCount === 1 ? "" : "es"}.`);
  if (projectNames.length) {
    parts.push(`- Best project candidate${projectNames.length === 1 ? "" : "s"}: ${projectNames.join(", ")}.`);
  }

  const firstSnippet = searchSnippet(results[0].text, question);
  if (firstSnippet) {
    parts.push("");
    parts.push("Why it matched:");
    parts.push(firstSnippet);
  }
  return parts.join("\n");
}

function assistantSourcesMarkup(results = []) {
  const sources = results.slice(0, 5);
  if (!sources.length) return "";
  const sourceButtons = sources.map((source) => {
    const id = String(assistantSourceCounter++);
    assistantSourceMap.set(id, source);
    return `
        <button type="button" data-ai-source-id="${id}">${escapeHtml(assistantSourceLabel(source))}</button>
      `;
  }).join("");
  return `
    <div class="ai-source-panel">
      <p class="ai-source-heading">Relevant portfolio links</p>
      <div class="ai-source-list" aria-label="Assistant sources">
        ${sourceButtons}
      </div>
    </div>
  `;
}

function setAssistantStatus(message, state = "ready") {
  if (!aiAssistantStatus) return;
  aiAssistantStatus.textContent = message;
  aiAssistantStatus.dataset.state = state;
}

function assistantDesktopDockedHeight() {
  if (!aiAssistantPanel) return 360;
  const value = getComputedStyle(aiAssistantPanel).getPropertyValue("--ai-console-rest-height").trim();
  if (value.endsWith("px")) return Number.parseFloat(value) || 360;
  return Math.min(Math.max(window.innerHeight * 0.38, 340), 390);
}

function updateAssistantPanelGrowth() {
  if (!aiAssistantPanel || !aiAssistantLog || !aiAssistantForm) return;
  const isDesktop = window.matchMedia("(min-width: 901px)").matches;
  if (!isDesktop) {
    aiAssistantPanel.style.removeProperty("--ai-console-live-height");
    aiAssistantPanel.classList.remove("ai-assistant-panel-expanded");
    return;
  }

  const dockedHeight = assistantDesktopDockedHeight();
  const formHeight = aiAssistantForm.getBoundingClientRect().height || 46;
  const clearHeight = aiClearChatButton?.getBoundingClientRect().height || 38;
  const titleHeight = document.querySelector("#ai-assistant-title")?.getBoundingClientRect().height || 34;
  const chromeHeight = titleHeight + formHeight + clearHeight + 92;
  const messages = [...aiAssistantLog.querySelectorAll(".ai-message")];
  const messageGap = messages.length > 1 ? (messages.length - 1) * 10 : 0;
  const messageHeight = messages.reduce((sum, message) => sum + message.getBoundingClientRect().height, 0) + messageGap;
  const contentHeight = messageHeight + chromeHeight;
  const maxHeight = Math.min(window.innerHeight * 0.76, 720);
  const nextHeight = Math.round(Math.max(dockedHeight, Math.min(contentHeight, maxHeight)));

  aiAssistantPanel.style.setProperty("--ai-console-live-height", `${nextHeight}px`);
  aiAssistantPanel.classList.toggle("ai-assistant-panel-expanded", nextHeight > dockedHeight + 12);
}

function renderAssistantInline(value = "") {
  return renderInlineMath(value).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderAssistantAnswerContent(content = "") {
  const lines = String(content || "").replace(/\r\n?/g, "\n").split("\n");
  const html = [];
  let bulletItems = [];
  let codeBlock = null;
  const flushBullets = () => {
    if (!bulletItems.length) return;
    html.push(`<ul>${bulletItems.map((item) => `<li>${renderAssistantInline(item)}</li>`).join("")}</ul>`);
    bulletItems = [];
  };
  const flushCode = () => {
    if (!codeBlock) return;
    const language = codeBlock.language ? ` data-language="${escapeHtml(codeBlock.language)}"` : "";
    html.push(`<pre class="ai-code-block"${language}><code>${escapeHtml(codeBlock.lines.join("\n"))}</code></pre>`);
    codeBlock = null;
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    const fence = trimmed.match(/^```([a-z0-9_+.#-]*)\s*$/i);
    if (fence) {
      if (codeBlock) {
        flushCode();
      } else {
        flushBullets();
        codeBlock = { language: fence[1] || "", lines: [] };
      }
      return;
    }
    if (codeBlock) {
      codeBlock.lines.push(line);
      return;
    }
    if (!trimmed) {
      flushBullets();
      return;
    }
    const bullet = trimmed.match(/^[-*\u2022]\s+(.+)/u);
    if (bullet) {
      bulletItems.push(bullet[1]);
      return;
    }
    flushBullets();
    if (/^[^.!?]{2,64}:$/.test(trimmed)) {
      html.push(`<p><strong>${renderAssistantInline(trimmed.slice(0, -1))}</strong></p>`);
    } else {
      html.push(`<p>${renderAssistantInline(trimmed)}</p>`);
    }
  });
  flushCode();
  flushBullets();
  return `<div class="ai-answer-content">${html.join("") || "<p>I am ready.</p>"}</div>`;
}

function appendAssistantMessage(role, content, sources = []) {
  if (!aiAssistantLog) return;
  const article = document.createElement("article");
  article.className = `ai-message ai-message-${role}`;
  article.innerHTML = role === "assistant"
    ? `${renderAssistantAnswerContent(content)}${assistantSourcesMarkup(sources)}`
    : `<p>${renderMultilineInlineText(content)}</p>`;
  aiAssistantLog.append(article);
  updateAssistantPanelGrowth();
  aiAssistantLog.scrollTop = aiAssistantLog.scrollHeight;
  return article;
}

function scrollAssistantAnswerToStart(article) {
  if (!aiAssistantLog || !article) return;
  const scrollToAnswer = () => {
    aiAssistantLog.scrollTop = Math.max(0, article.offsetTop - aiAssistantLog.offsetTop - 4);
  };
  if (typeof window.requestAnimationFrame === "function") {
    window.requestAnimationFrame(scrollToAnswer);
  } else {
    window.setTimeout(scrollToAnswer, 0);
  }
}

function appendAssistantPendingMessage() {
  const article = appendAssistantMessage("assistant", "Thinking", []);
  article?.classList.add("ai-message-pending");
  return article;
}

function replaceAssistantMessage(article, content, sources = []) {
  if (!article) {
    appendAssistantMessage("assistant", content, sources);
    return;
  }
  article.className = "ai-message ai-message-assistant";
  article.innerHTML = `${renderAssistantAnswerContent(content)}${assistantSourcesMarkup(sources)}`;
  updateAssistantPanelGrowth();
  scrollAssistantAnswerToStart(article);
}

function setAssistantBusy(isBusy) {
  const submitButton = aiAssistantForm?.querySelector('button[type="submit"]');
  if (aiAssistantInput) aiAssistantInput.disabled = isBusy;
  if (submitButton) submitButton.disabled = isBusy;
}

function clearAssistantChat() {
  if (!aiAssistantLog) return;
  assistantSourceCounter = 0;
  assistantSourceMap = new Map();
  assistantChatHistory = [];
  aiAssistantLog.innerHTML = "";
  setAssistantStatus("Chat cleared");
  updateAssistantPanelGrowth();
  aiAssistantInput?.focus();
}

function assistantRemoteTimeoutMs(question = "", context = {}, options = {}) {
  const clean = normalize(question);
  const sourceFetches = Array.isArray(context.sourceFetches) ? context.sourceFetches : [];
  const usesGitHub = sourceFetches.some((source) => String(source.kind || "").toLowerCase() === "github" || /github\.com/i.test(source.url || ""));
  if (usesGitHub || /\b(github|repo|repository|repositories|source\s+code|code|snippet|firmware|verilog|systemverilog|python|javascript|circuit\s+file)\b/.test(clean)) {
    return 45000;
  }
  if (options.allowWebSearch) return 30000;
  return 18000;
}

async function askRemoteAssistant(question, context, options = {}) {
  const endpoint = assistantEndpoint();
  if (!endpoint) return null;
  const controller = new AbortController();
  let didTimeout = false;
  const timer = setTimeout(() => {
    didTimeout = true;
    controller.abort();
  }, assistantRemoteTimeoutMs(question, context, options));
  let response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        context,
        conversation: options.conversation || [],
        intent: options.intent || context.intent || "portfolio_specific",
        allowWebSearch: Boolean(options.allowWebSearch),
        question,
        mode: "portfolio-plus-general-knowledge",
        responseStyle: "chatgpt-like-answer-first-links-second"
      })
    });
  } catch (error) {
    if (didTimeout) throw new Error("AI request timed out while reading public sources.");
    throw error;
  } finally {
    clearTimeout(timer);
  }
  if (!response.ok) throw new Error("AI service unavailable");
  const data = await response.json();
  const answer = String(data.answer || data.message || "").trim();
  return answer ? { answer, model: data.model || "", usedWebSearch: Boolean(data.usedWebSearch) } : null;
}

async function answerAssistantQuestion(question = "") {
  const cleanQuestion = String(question || "").trim();
  if (!cleanQuestion) return;
  const priorConversation = assistantChatHistory.slice();
  appendAssistantMessage("user", cleanQuestion);
  assistantRemember("user", cleanQuestion);
  const pendingMessage = appendAssistantPendingMessage();
  setAssistantBusy(true);
  try {
    setAssistantStatus(assistantEndpoint() ? "Composing AI answer" : "Composing local answer", "working");

    const intent = assistantQuestionIntent(cleanQuestion, priorConversation);
    const rawSources = assistantFallbackResults(cleanQuestion, intent);
    const sources = assistantSourcesForDisplay(cleanQuestion, rawSources, intent);
    if (intent === "general_conversation") {
      const localConversationAnswer = assistantLocalAnswer(cleanQuestion, sources, intent);
      replaceAssistantMessage(pendingMessage, localConversationAnswer, []);
      assistantRemember("assistant", localConversationAnswer);
      setAssistantStatus("Ready");
      return;
    }
    const context = assistantContextForQuestion(cleanQuestion, intent, rawSources);
    const conversation = assistantConversationForRequest(cleanQuestion, priorConversation);
    try {
      const remoteAnswer = await askRemoteAssistant(cleanQuestion, context, {
        allowWebSearch: assistantQuestionAllowsPublicLookup(cleanQuestion, intent),
        conversation,
        intent
      });
      if (remoteAnswer?.answer) {
        replaceAssistantMessage(pendingMessage, remoteAnswer.answer, sources);
        assistantRemember("assistant", remoteAnswer.answer);
        setAssistantStatus(remoteAnswer.model ? `AI answer ready: ${remoteAnswer.model}` : "AI answer ready");
        return;
      }
    } catch (error) {
      setAssistantStatus(error?.message || "Local answer used", "error");
    }

    const fallbackAnswer = assistantLocalAnswer(cleanQuestion, sources, intent);
    replaceAssistantMessage(pendingMessage, fallbackAnswer, sources);
    assistantRemember("assistant", fallbackAnswer);
    if (!assistantEndpoint()) setAssistantStatus("Local portfolio intelligence");
  } catch {
    const errorAnswer = "I had trouble processing that question. Try rephrasing it with a project name, tool name, or electronics topic.";
    replaceAssistantMessage(pendingMessage, errorAnswer, []);
    assistantRemember("assistant", errorAnswer);
    setAssistantStatus("Assistant error", "error");
  } finally {
    setAssistantBusy(false);
    aiAssistantInput?.focus();
  }
}
function linkAttributes(url, item = {}) {
  const target = normalizeLinkTarget(url, { assumeWeb: isWebsiteLinkItem(item, url) });
  return /^https?:\/\//i.test(target) ? ' target="_blank" rel="noreferrer"' : "";
}

function isLocalDownloadTarget(target = "") {
    const value = normalizeLinkTarget(target, { assumeWeb: true });
    return Boolean(value) && !/^(https?:)?\/\//i.test(value) && !/^(mailto:|tel:|#)/i.test(value);
}

function downloadAttribute(target = "", item = {}) {
    const value = normalizeLinkTarget(target, { assumeWeb: isWebsiteLinkItem(item, target) });
    return isLocalDownloadTarget(value) ? " download" : "";
}

function fileNameFromUrl(url = "") {
    const clean = String(url || "").split(/[?#]/)[0].split("/").pop() || "Download file";
    try {
        return decodeURIComponent(clean);
    } catch {
        return clean;
    }
}

function resourceLink(item = {}, label = item.label || item.title || item.name || fileNameFromUrl(item.url || item.artifact)) {
    const rawTarget = item.url || item.artifact || item.href || item.file || item.path || item.src || "";
    const target = normalizeLinkTarget(rawTarget, { assumeWeb: isWebsiteLinkItem(item, rawTarget) });

    if (!target || item.status === "planned") {
        return `<span class="resource-link muted">${escapeHtml(label || "Planned file")}</span>`;
    }

    return `
    <a
      class="resource-link"
      href="${escapeHtml(target)}"
      ${linkAttributes(target, item)}
      ${downloadAttribute(target, item)}
    >
      ${escapeHtml(label || fileNameFromUrl(target))}
    </a>
  `;
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
          <a href="${escapeHtml(normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }))}"${linkAttributes(item.url, item)}>
            <img src="${escapeHtml(normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }))}" alt="${escapeHtml(item.title)}">
          </a>
          <figcaption>
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.caption || "")}</span>
          </figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function siteSectionHasContent(section) {
  return Boolean(
    section?.description ||
    section?.richDescription?.blocks?.length ||
    section?.backgroundImage ||
    (section?.links || []).some((link) => link.label || link.url) ||
    (section?.assets || []).some((asset) => asset.title || asset.url) ||
    (section?.subsections || []).some((item) => item.title || item.description || item.richDescription?.blocks?.length || (item.links || []).length)
  );
}

function siteSectionRenderable(section) {
  return section?.visible !== false && siteSectionHasContent(section);
}

function renderDynamicLinks(items = []) {
  const links = items.filter((item) => item?.url && (item.label || item.title));
  if (!links.length) return "";
  return `<div class="resource-list dynamic-link-list">${links.map((item) => resourceLink(item, item.label || item.title || "Open")).join("")}</div>`;
}

function renderSiteSections() {
  const mount = document.querySelector("#dynamic-sections");
  if (!mount) return;
  const visibleSections = (siteSections || []).filter(siteSectionRenderable);
  mount.innerHTML = visibleSections.map((section) => {
    const style = section.backgroundImage ? ` style="--section-bg: url('${escapeHtml(section.backgroundImage)}')"` : "";
    const links = [...(section.links || []), ...(section.assets || [])];
    const subsections = (section.subsections || []).filter((item) => item.title || item.description || item.richDescription?.blocks?.length || (item.links || []).length);
    return `
      <section class="section dynamic-section" id="${escapeHtml(section.id || "")}"${style}>
        <div class="dynamic-section-surface">
          <div class="section-heading">
            <div>
              <h2>${escapeHtml(section.title || "Untitled section")}</h2>
            </div>
          </div>
          ${section.description || section.richDescription?.blocks?.length
            ? `<div class="dynamic-section-copy">${renderRichContent(section.richDescription, section.description || "")}</div>`
            : ""}
          ${subsections.length ? `
            <div class="dynamic-section-grid">
              ${subsections.map((item) => `
                <article class="dynamic-section-card">
                  <h3>${escapeHtml(item.title || "Untitled")}</h3>
                  ${item.description || item.richDescription?.blocks?.length
                    ? renderRichContent(item.richDescription, item.description || "")
                    : ""}
                  ${renderDynamicLinks(item.links || [])}
                </article>
              `).join("")}
            </div>
          ` : ""}
          ${renderDynamicLinks(links)}
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
function itemUrl(item = {}) {
    return item.url || item.artifact || item.href || item.file || item.path || item.src || "";
}

function itemLabel(item = {}, fallback = "Download file") {
    const url = itemUrl(item);
    return item.title || item.label || item.name || item.caption || fileNameFromUrl(url) || fallback;
}

function normalizeDownloadAsset(item = {}, fallbackType = "File") {
    const url = itemUrl(item);
    if (!url || item.status === "planned") return null;

    return {
        title: itemLabel(item),
        url,
        status: item.status || "uploaded",
        type: item.type || item.kind || item.meta || fallbackType,
        description: item.description || item.caption || item.summary || ""
    };
}

function collectRichDownloads(rich, fallbackType = "File", output = []) {
    (rich?.blocks || []).forEach((block) => {
        if (!block?.url) return;

        output.push({
            title: cleanRichImageTitle(block) || block.title || block.caption || fileNameFromUrl(block.url),
            url: block.url,
            status: "uploaded",
            type: block.type === "image" ? "Image" : fallbackType,
            description: block.caption || ""
        });
    });

    return output;
}

function collectDownloadsFromValue(value, fallbackType = "File", output = []) {
    if (!value) return output;

    if (Array.isArray(value)) {
        value.forEach((item) => collectDownloadsFromValue(item, fallbackType, output));
        return output;
    }

    if (typeof value !== "object") return output;

    const asset = normalizeDownloadAsset(value, fallbackType);
    if (asset) output.push(asset);

    collectRichDownloads(value.rich, fallbackType, output);
    collectRichDownloads(value.summaryRich, fallbackType, output);

    [
        "files",
        "assets",
        "items",
        "children",
        "links",
        "results",
        "references",
        "mathAnalysis"
    ].forEach((key) => collectDownloadsFromValue(value[key], fallbackType, output));

    return output;
}

function uniqueDownloads(items = []) {
    const seen = new Set();

    return items.filter((item) => {
        const key = `${item.url}::${item.title}`;
        if (!item.url || seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

function renderDownloadBlock(title, items = []) {
    const downloads = uniqueDownloads(items);
    if (!downloads.length) return "";

    return detailBlock(escapeHtml(title), "evidence-block evidence-wide download-evidence-block", `
    <ul class="download-list">
      ${downloads.map((item) => `
        <li>
          ${resourceLink(item, item.title)}
          <span>${escapeHtml(item.type || "File")} &middot; ${escapeHtml(item.status || "uploaded")}</span>
          ${item.description ? `<p>${renderMultilineInlineText(item.description)}</p>` : ""}
        </li>
      `).join("")}
    </ul>
  `);
}

function renderCollectedDownloadSections(project) {
    const blocks = [];

    const addBlock = (title, source, fallbackType = "File") => {
        const downloads = uniqueDownloads(collectDownloadsFromValue(source, fallbackType, []));
        if (downloads.length) blocks.push(renderDownloadBlock(title, downloads));
    };

    addBlock("Overview downloads", [
        { summaryRich: project.summaryRich },
        project.design?.brief?.files,
        project.design?.brief?.summaryRich
    ], "Overview file");

    addBlock("Design downloads", [
        project.design?.documentation?.files,
        project.design?.documentation?.references,
        project.design?.documentation?.mathAnalysis
    ], "Design file");

    addBlock("Simulation downloads", [
        project.design?.simulation?.files,
        project.design?.simulation?.results
    ], "Simulation file");

    addBlock("Project documents", project.documents, "Document");
    addBlock("Test artifacts", project.tests, "Test artifact");
    addBlock("PCB artifacts", project.pcbs, "PCB artifact");
    addBlock("Images and media", project.media, "Image");

    (project.sections || []).forEach((section) => {
        addBlock(`${displayTitle(section.title, "Custom section")} downloads`, section.items || section.files || [], section.title || "Section file");
    });

    (project.portfolioView?.sections || [])
        .filter((section) => section.id !== "brief")
        .forEach((section) => {
            addBlock(`${displayTitle(section.title, "Section")} downloads`, section.items || [], section.title || "Section file");
        });

    return blocks.join("");
}
function renderParsedBriefBlock(section, fallbackSummary = "") {
  const briefItem = section?.items?.[0] || {};
  const briefText = briefItem.description || fallbackSummary || "";
  if (!briefItem.rich?.blocks?.length && !briefText) return "";
  return `
    <details class="project-brief-default parsed-summary" open>
      <summary>Overview</summary>
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

function sectionRouteState(projectId, sectionIndex, resourcePath = "") {
  return {
    appWindow: sectionRouteKey,
    projectId: String(projectId || ""),
    resourcePath: String(resourcePath || ""),
    sectionIndex: String(sectionIndex ?? "")
  };
}

function canUseSectionHistory() {
  return Boolean(window.history && typeof window.history.pushState === "function" && typeof window.history.replaceState === "function");
}

function sectionBaseUrl() {
  const url = new URL(window.location.href);
  Object.values(sectionRouteParams).forEach((param) => url.searchParams.delete(param));
  return url;
}

function sectionRouteUrl(projectId, sectionIndex, resourcePath = "") {
  const url = sectionBaseUrl();
  url.searchParams.set(sectionRouteParams.project, String(projectId || ""));
  url.searchParams.set(sectionRouteParams.section, String(sectionIndex ?? ""));
  if (resourcePath) url.searchParams.set(sectionRouteParams.path, String(resourcePath));
  else url.searchParams.delete(sectionRouteParams.path);
  url.hash = "projects";
  return url;
}

function sectionRouteFromState(state) {
  if (!state || state.appWindow !== sectionRouteKey) return null;
  if (!state.projectId || state.sectionIndex === "") return null;
  return {
    projectId: String(state.projectId),
    resourcePath: String(state.resourcePath || ""),
    sectionIndex: String(state.sectionIndex)
  };
}

function sectionRouteFromLocation() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get(sectionRouteParams.project);
  const sectionIndex = params.get(sectionRouteParams.section);
  if (!projectId || sectionIndex === null) return null;
  return {
    projectId,
    resourcePath: params.get(sectionRouteParams.path) || "",
    sectionIndex
  };
}

function sameSectionRoute(left, right) {
  return Boolean(left && right &&
    left.projectId === right.projectId &&
    String(left.sectionIndex) === String(right.sectionIndex) &&
    String(left.resourcePath || "") === String(right.resourcePath || ""));
}

function syncSectionRouteToHistory(projectId, sectionIndex, resourcePath = "", mode = "push") {
  if (isApplyingSectionRoute || mode === "none" || !canUseSectionHistory()) return;
  const route = sectionRouteState(projectId, sectionIndex, resourcePath);
  const url = sectionRouteUrl(projectId, sectionIndex, resourcePath);
  const currentRoute = sectionRouteFromState(history.state) || sectionRouteFromLocation();
  const method = mode === "replace" || sameSectionRoute(currentRoute, route) ? "replaceState" : "pushState";
  try {
    history[method](route, "", url);
  } catch {
    // Preview iframes and restricted browser contexts may reject history writes.
  }
}

function clearSectionRouteInHistory() {
  if (isApplyingSectionRoute || !canUseSectionHistory()) return;
  try {
    history.replaceState({ appWindow: "portfolio-base" }, "", sectionBaseUrl());
  } catch {
    // The visible dialog is already closed; URL cleanup is best effort.
  }
}

function initializeSectionHistoryState() {
  if (!canUseSectionHistory()) return;
  const route = sectionRouteFromLocation() || sectionRouteFromState(history.state);
  try {
    if (route) history.replaceState(sectionRouteState(route.projectId, route.sectionIndex, route.resourcePath), "", sectionRouteUrl(route.projectId, route.sectionIndex, route.resourcePath));
    else if (!history.state?.appWindow) history.replaceState({ appWindow: "portfolio-base" }, "", window.location.href);
  } catch {
    // Browser history state is progressive enhancement for the portfolio windows.
  }
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
    block.type === "code" && block.code ||
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
  if (["tool", "language"].includes(node.kind)) {
    return Boolean(node.title || node.description || node.url || richHasRenderableContent(node.rich) || children.some(nodeHasRenderableContent));
  }
  return Boolean(node.description || node.url || richHasRenderableContent(node.rich) || children.some(nodeHasRenderableContent));
}

function sectionHasRenderableContent(section) {
  return Boolean(section?.description || richHasRenderableContent(section?.rich) || (section?.items || []).some(nodeHasRenderableContent));
}

function responsiveChildren(node) {
  return node?.items || node?.children || [];
}

function richContainsMedia(rich) {
  return Boolean(rich?.blocks?.some((block) => block.type === "image" && block.url));
}

function responsiveNodeHasMedia(node) {
  if (!node) return false;
  if (node.kind === "image" || richContainsMedia(node.rich)) return true;
  const url = String(node.url || "");
  if (/\.(apng|avif|gif|jpe?g|png|svg|webp)(\?|#|$)/i.test(url)) return true;
  return responsiveChildren(node).some(responsiveNodeHasMedia);
}

function responsiveNodeCount(node) {
  if (!node || !nodeHasRenderableContent(node)) return 0;
  return 1 + responsiveChildren(node).reduce((count, child) => count + responsiveNodeCount(child), 0);
}

function responsiveNodeDepth(node) {
  if (!node || !nodeHasRenderableContent(node)) return 0;
  const children = responsiveChildren(node).filter(nodeHasRenderableContent);
  if (!children.length) return 1;
  return 1 + Math.max(...children.map(responsiveNodeDepth));
}

function inferResponsiveProfile(project) {
  const sections = project?.portfolioView?.sections || [];
  const visibleSections = sections.filter((section) => section?.id !== "brief" && sectionHasRenderableContent(section));
  const itemCount = visibleSections.reduce(
    (count, section) => count + (section.items || []).reduce((sum, item) => sum + responsiveNodeCount(item), 0),
    0
  );
  const maxDepth = visibleSections.reduce(
    (depth, section) => Math.max(depth, ...(section.items || []).map(responsiveNodeDepth), 1),
    1
  );
  const hasMedia = visibleSections.some((section) => responsiveNodeHasMedia(section));
  const density = itemCount >= 18 || visibleSections.length >= 6 || maxDepth >= 4
    ? "dense"
    : itemCount <= 6 && visibleSections.length <= 2
      ? "simple"
      : "balanced";
  return {
    version: 1,
    breakpoints: {
      mobile: 640,
      tablet: 900,
      desktop: 1180
    },
    cardLayout: hasPublicTemplate(project) ? "single" : "split",
    contentMax: hasMedia || maxDepth >= 3 ? "1180px" : "980px",
    density,
    mediaMax: hasMedia ? "860px" : "720px",
    sectionCardMin: density === "dense" ? "210px" : density === "simple" ? "280px" : "240px",
    touchTarget: "44px",
    windowMode: "full-screen"
  };
}

function projectResponsiveProfile(project) {
  const savedProfile = project?.portfolioView?.responsive;
  if (savedProfile?.version) return { ...inferResponsiveProfile(project), ...savedProfile };
  return inferResponsiveProfile(project);
}

function nodeSummary(title, rich, text, emptyMessage = "No summary has been added yet.") {
  if (!rich?.blocks?.length && !text) return "";
  return `
    <details class="parsed-summary" open>
      <summary>${escapeHtml(title)}</summary>
      ${renderRichContent(rich, text || "")}
    </details>
  `;
}

function nodeIsOverview(item = {}) {
  const title = normalize(displayTitle(item.title || item.label || ""));
  return item.kind === "summary" || title === "overview" || title.endsWith(" overview");
}

function nodeOverviewDetails(node, children = []) {
  const overviewItems = children.filter(nodeIsOverview);
  const blocks = [];
  if (node?.rich?.blocks?.length || node?.description) {
    blocks.push(renderRichContent(node.rich, node.description || ""));
  }
  overviewItems.forEach((item) => {
    if (item.rich?.blocks?.length || item.description) blocks.push(renderRichContent(item.rich, item.description || ""));
    const itemFiles = renderInlineSectionFiles(nodeChildren(item));
    if (itemFiles) blocks.push(itemFiles);
  });
  if (!blocks.length) return "";
  return `
    <details class="parsed-summary section-overview-default" open>
      <summary>Overview</summary>
      ${blocks.join("")}
    </details>
  `;
}

function parsedChildAccordions(children, projectId, sectionIndex, basePath = []) {
  const visibleChildren = children.filter((child) => nodeHasRenderableContent(child) && !child.url && !nodeIsOverview(child));
  if (!visibleChildren.length) return "";
  return `
    <div class="parsed-subsection-stack" aria-label="Subsections">
      ${children.map((child, index) => nodeHasRenderableContent(child) && !child.url && !nodeIsOverview(child) ? `
        <details class="parsed-subsection-accordion">
          <summary>${escapeHtml(displayTitle(child.title, "Subsection"))}</summary>
          ${parsedNodeContent(child, projectId, sectionIndex, [...basePath, index])}
        </details>
      ` : "").join("")}
    </div>
  `;
}

function parsedNodeContent(node, projectId, sectionIndex, path = []) {
    const isContainer = !node.kind || node.kind === "subsection";
    if (!isContainer && node.url) return renderInlineSectionFiles([node]);

    const children = nodeChildren(node);
    const contentChildren = children.filter((child) => !nodeIsOverview(child));

    return `
    <article class="parsed-window-panel section-directory">
      ${nodeOverviewDetails(node, children)}
      ${parsedChildAccordions(children, projectId, sectionIndex, path)}
      ${renderInlineSectionFiles(contentChildren)}
    </article>
  `;
}

function parsedSectionContent(section, projectId, sectionIndex, path = []) {
  const node = path.length ? nodeAtPath(section, path) : section;
  if (!node) return `<p class="evidence-empty">This section could not be found.</p>`;
  return parsedNodeContent(node, projectId, sectionIndex, path);
}

function parsedSection(section, index, project) {
  const visibleItems = (section.items || []).filter(nodeHasRenderableContent);
  const hasImages = visibleItems.some((item) => item.kind === "image");

  return `
    <button
      class="section-open-card evidence-block ${hasImages ? "evidence-wide" : ""}"
      type="button"
      data-section-project="${project.id}"
      data-section-index="${index}"
    >
      <span>${escapeHtml(displayTitle(section.title, "Section"))}</span>
    </button>
  `;
}

function projectCard(project) {
  if (project.portfolioView) {
    const category = categories.find((item) => item.id === project.category) || {};
    const accent = category.accent || "#117c7a";
    const sections = project.portfolioView.sections || [];
    const briefSection = sections.find((section) => section.id === "brief");
    const otherSections = sections.filter((section) => section.id !== "brief" && sectionHasRenderableContent(section));

    return `
      <article class="project-card catalog-card ${projectTemplateClass(project)} ${projectResponsiveClass(project)}" id="${project.id}" style="${projectTemplateStyle(project, accent)}">
        <div class="project-body">
          ${projectTitleHeading(project.portfolioView.title || project.title, project)}
          ${renderParsedBriefBlock(briefSection, project.summary)}
          <div class="evidence-grid" aria-label="${project.title} parsed project content">
  ${otherSections.map((section, index) => parsedSection(section, index, project)).join("")}
</div>
        </div>
      </article>
    `;
  }

  const category = categories.find((item) => item.id === project.category) || {};
  const accent = category.accent || "#117c7a";

  return `
      <article class="project-card catalog-card ${projectTemplateClass(project)} ${projectResponsiveClass(project)}" id="${project.id}" style="${projectTemplateStyle(project, accent)}">
        <div class="project-body">
          ${projectTitleHeading(project.title, project)}
          <p class="rich-paragraph">${renderMultilineInlineText(project.summary)}</p>

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
    <section class="category-section ${visibleProjects.length ? "" : "empty-category-section"}" aria-labelledby="${escapeHtml(category.id)}-title">
      <div class="category-heading">
        <div>
          <h3 id="${escapeHtml(category.id)}-title">${escapeHtml(category.label)}</h3>
        </div>
        ${visibleProjects.length ? `<span>${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"}</span>` : ""}
      </div>
      ${visibleProjects.length && category.description ? `<p class="category-description">${escapeHtml(category.description)}</p>` : ""}
      <div class="category-projects">
        ${visibleProjects.map(projectCard).join("")}
      </div>
    </section>
  `;
}

function escapeRegExp(value = "") {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightQueryHtml(value = "", query = "") {
  const escaped = escapeHtml(value);
  const cleanQuery = String(query || "").trim();
  if (!cleanQuery) return escaped;
  const pattern = new RegExp(`(${escapeRegExp(escapeHtml(cleanQuery))})`, "ig");
  return escaped.replace(pattern, '<mark class="search-result-mark">$1</mark>');
}

function clearSearchHighlights() {
  window.CSS?.highlights?.delete?.(searchHighlightName);
}

function textNodeSearchTargets() {
  return [
    document.querySelector("main"),
    document.querySelector("#section-view-dialog[open] .section-view-content")
  ].filter(Boolean);
}

function applySearchHighlights(query) {
  clearSearchHighlights();
  const cleanQuery = String(query || "").trim();
  if (!cleanQuery || !window.CSS?.highlights || typeof window.Highlight !== "function") return 0;
  const ranges = [];
  const needle = normalize(cleanQuery);

  textNodeSearchTargets().forEach((root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.textContent || !normalize(node.textContent).includes(needle)) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.closest("script, style, input, textarea, select, button, .search-engine, .site-header")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node = walker.nextNode();
    while (node) {
      const haystack = normalize(node.textContent);
      let index = haystack.indexOf(needle);
      while (index >= 0) {
        const range = document.createRange();
        range.setStart(node, index);
        range.setEnd(node, index + cleanQuery.length);
        ranges.push(range);
        index = haystack.indexOf(needle, index + Math.max(1, cleanQuery.length));
      }
      node = walker.nextNode();
    }
  });

  if (ranges.length) window.CSS.highlights.set(searchHighlightName, new window.Highlight(...ranges));
  return ranges.length;
}

function queueSearchHighlights() {
  clearTimeout(searchHighlightTimer);
  searchHighlightTimer = setTimeout(() => applySearchHighlights(searchInput?.value || ""), 30);
}

function ensureSearchPanel() {
  if (!searchInput || !searchWrap || searchPanel) return;
  const shell = document.createElement("div");
  shell.className = "search-engine";
  searchWrap.replaceWith(shell);
  shell.append(searchWrap);
  searchPanel = document.createElement("div");
  searchPanel.className = "search-results-panel";
  searchPanel.hidden = true;
  searchPanel.innerHTML = `
    <div class="search-results-tools">
      <span id="search-status">Type to search projects, files, sections, and phrases.</span>
      <label>
        <span>Show</span>
        <select id="search-result-limit" aria-label="Number of search results">
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </label>
    </div>
    <div class="search-results-list" role="listbox" aria-label="Search results"></div>
  `;
  shell.append(searchPanel);
  searchStatus = searchPanel.querySelector("#search-status");
  searchLimitSelect = searchPanel.querySelector("#search-result-limit");
  searchLimitSelect.addEventListener("change", () => {
    searchResultLimit = Number(searchLimitSelect.value) || 10;
    updateSearchDropdown();
  });
  searchPanel.addEventListener("mousedown", (event) => event.preventDefault());
  searchPanel.addEventListener("click", (event) => {
    const button = event.target.closest("[data-search-result-index]");
    if (!button) return;
    const result = currentSearchResults[Number(button.dataset.searchResultIndex)];
    if (result) goToSearchResult(result);
  });
}

function setSearchMessage(message, state = "neutral") {
  if (!searchStatus) return;
  searchStatus.textContent = message;
  searchStatus.dataset.state = state;
}

function renderSearchResults(query, visibleCount) {
  ensureSearchPanel();
  if (!searchPanel) return;
  const list = searchPanel.querySelector(".search-results-list");
  const cleanQuery = String(query || "").trim();
  currentSearchResults = searchResultsFor(cleanQuery);
  const limitedResults = currentSearchResults.slice(0, searchResultLimit);
  searchPanel.hidden = !cleanQuery;
  searchInput.setAttribute("aria-expanded", String(Boolean(cleanQuery)));

  if (!cleanQuery) {
    list.innerHTML = "";
    setSearchMessage("Type to search projects, files, sections, and phrases.");
    searchInput.removeAttribute("aria-invalid");
    return;
  }

  if (!currentSearchResults.length) {
    list.innerHTML = "";
    setSearchMessage(`"${cleanQuery}" was not found on this portfolio.`, "not-found");
    searchInput.setAttribute("aria-invalid", "true");
    return;
  }

  searchInput.removeAttribute("aria-invalid");
  const visibleText = visibleCount
    ? `${visibleCount} visible match${visibleCount === 1 ? "" : "es"} highlighted.`
    : "Matches found elsewhere. Choose a result below.";
  setSearchMessage(`${visibleText} Showing ${limitedResults.length} of ${currentSearchResults.length}.`, "found");
  list.innerHTML = limitedResults.map((result, index) => `
    <button class="search-result-item" type="button" role="option" data-search-result-index="${index}">
      <span class="search-result-title">${highlightQueryHtml(result.title || "Untitled result", cleanQuery)}</span>
      <span class="search-result-meta">${escapeHtml([result.type, result.context].filter(Boolean).join(" / "))}</span>
      ${searchSnippet(result.text, cleanQuery) ? `<span class="search-result-snippet">${highlightQueryHtml(searchSnippet(result.text, cleanQuery), cleanQuery)}</span>` : ""}
    </button>
  `).join("");
}

function updateSearchDropdown() {
  const query = searchInput?.value || "";
  const visibleCount = applySearchHighlights(query);
  renderSearchResults(query, visibleCount);
}

function showSearchPanelIfNeeded() {
  if (!searchInput?.value?.trim()) return;
  updateSearchDropdown();
}

function scrollToDomTarget(id) {
  const target = id ? document.getElementById(id) : null;
  if (!target) return false;
  closeSectionDialogForRoute();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  try {
    history.replaceState(history.state || { appWindow: "portfolio-base" }, "", `#${id}`);
  } catch {
    // Scrolling is still the important behavior.
  }
  queueSearchHighlights();
  return true;
}

function goToSearchResult(result) {
  if (!result) return;
  searchPanel.hidden = true;
  if (result.domTarget && scrollToDomTarget(result.domTarget)) return;

  if (result.projectId && result.sectionIndex !== undefined) {
    openParsedSection(result.projectId, result.sectionIndex, result.resourcePath || "");
    queueSearchHighlights();
    return;
  }

  if (result.projectId) {
    if (!document.getElementById(result.projectId)) {
      setActiveFilter("all");
      renderProjects();
    }
    const target = document.getElementById(result.projectId);
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
    queueSearchHighlights();
    return;
  }

  if (result.url) window.open(result.url, "_blank", "noopener");
}

function handleSearchInput() {
  renderProjects();
  updateSearchDropdown();
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
    queueSearchHighlights();
    return;
  }

  grid.innerHTML = categories
    .map((category) => {
      const visibleProjects = visible.filter((project) => project.category === category.id);
      return visibleProjects.length ? categorySection(category, visibleProjects) : "";
    })
    .join("");
  queueSearchHighlights();
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
        <div class="section-view-titlebar">
          <button class="section-view-back" type="button" title="Previous view" aria-label="Previous view" hidden>&larr;</button>
          <button class="section-view-forward" type="button" title="Next view" aria-label="Next view" hidden>&rarr;</button>
          <h2 id="section-view-title">Section</h2>
        </div>
        <div class="section-view-actions">
          <button class="section-view-close" type="button" aria-label="Close section">&times;</button>
        </div>
      </div>
      <div class="section-view-content" id="section-view-content"></div>
    </div>
  `;
  document.body.append(dialog);
  dialog.querySelector(".section-view-close").addEventListener("click", () => closeSectionDialog(dialog));
  dialog.addEventListener("cancel", () => clearSectionRouteInHistory());
  dialog.addEventListener("close", () => {
    document.body.classList.remove("full-window-open");
    dialog.classList.remove("is-minimized-dialog");
    updateSectionDialogMinimize(dialog);
    const returnTarget = document.querySelector(
      `[data-section-project="${dialog.dataset.projectId}"][data-section-index="${dialog.dataset.sectionIndex}"]`
    );
    returnTarget?.focus({ preventScroll: true });
  });
  dialog.querySelector(".section-view-back").addEventListener("click", () => {
    const path = pathFromString(dialog.dataset.resourcePath || "");
    if (!path.length) {
      closeSectionDialog(dialog);
      return;
    }
    const stack = sectionForwardStack(dialog);
    stack.push(pathToString(path));
    dialog.dataset.forwardStack = JSON.stringify(stack);
    path.pop();
    openParsedSection(dialog.dataset.projectId, dialog.dataset.sectionIndex, pathToString(path), { historyMode: "replace", preserveForward: true });
  });
  dialog.querySelector(".section-view-forward").addEventListener("click", () => {
    const stack = sectionForwardStack(dialog);
    const nextPath = stack.pop();
    if (!nextPath) return;
    dialog.dataset.forwardStack = JSON.stringify(stack);
    openParsedSection(dialog.dataset.projectId, dialog.dataset.sectionIndex, nextPath, { historyMode: "replace", preserveForward: true });
  });
  dialog.querySelector("#section-view-content").addEventListener("click", (event) => {
    const nodeButton = event.target.closest("[data-resource-path]");
    if (!nodeButton) return;
    openParsedSection(nodeButton.dataset.sectionProject, nodeButton.dataset.sectionIndex, nodeButton.dataset.resourcePath);
  });
  return dialog;
}

function sectionForwardStack(dialog) {
  try {
    return JSON.parse(dialog.dataset.forwardStack || "[]");
  } catch {
    return [];
  }
}

function updateSectionNavigation(dialog, path) {
  const back = dialog.querySelector(".section-view-back");
  back.hidden = false;
  back.title = path.length ? "Previous view" : "Back to projects";
  back.setAttribute("aria-label", path.length ? "Previous view" : "Back to projects");
  dialog.querySelector(".section-view-forward").hidden = !sectionForwardStack(dialog).length;
}

function closeSectionDialog(dialog) {
  dialog.close();
  clearSectionRouteInHistory();
}

function closeOrStepBackSectionDialog(dialog) {
  const path = pathFromString(dialog.dataset.resourcePath || "");
  if (path.length) {
    const stack = sectionForwardStack(dialog);
    stack.push(pathToString(path));
    dialog.dataset.forwardStack = JSON.stringify(stack);
    path.pop();
    openParsedSection(dialog.dataset.projectId, dialog.dataset.sectionIndex, pathToString(path), { historyMode: "replace", preserveForward: true });
    return;
  }
  closeSectionDialog(dialog);
}

function openParsedSection(projectId, sectionIndex, resourcePath = "", options = {}) {
  const project = projects.find((item) => item.id === projectId);
  const sections = (project?.portfolioView?.sections || []).filter((section) => section.id !== "brief" && sectionHasRenderableContent(section));
  const section = sections[Number(sectionIndex)];
  if (!section) return false;
  const path = pathFromString(resourcePath);
  const node = path.length ? nodeAtPath(section, path) : section;
  if (!node) return false;
  if (path.length ? !nodeHasRenderableContent(node) : !sectionHasRenderableContent(section)) return false;

  const dialog = ensureSectionDialog();
  const category = categories.find((item) => item.id === project.category) || {};
  applyProjectTemplateToElement(dialog, project, category.accent || "#117c7a");
  dialog.dataset.projectId = projectId;
  dialog.dataset.sectionIndex = String(sectionIndex);
  dialog.dataset.resourcePath = pathToString(path);
  if (!options.preserveForward) dialog.dataset.forwardStack = "[]";
  syncSectionRouteToHistory(projectId, sectionIndex, pathToString(path), options.historyMode || "push");
  dialog.querySelector("#section-view-title").textContent = displayTitle(node.title || section.title, "Section");
  updateSectionNavigation(dialog, path);
  dialog.querySelector("#section-view-content").innerHTML = parsedSectionContent(section, projectId, Number(sectionIndex), path);
  document.body.classList.add("full-window-open");
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  queueSearchHighlights();
  return true;
}

function closeSectionDialogForRoute() {
  const dialog = document.querySelector("#section-view-dialog");
  if (dialog?.open) dialog.close();
}

function applySectionRoute(route) {
  isApplyingSectionRoute = true;
  try {
    if (!route) {
      closeSectionDialogForRoute();
      return;
    }

    const opened = openParsedSection(route.projectId, route.sectionIndex, route.resourcePath, {
      historyMode: "none",
      preserveForward: true
    });
    if (!opened) closeSectionDialogForRoute();
  } finally {
    isApplyingSectionRoute = false;
  }
}

function restoreSectionRouteAfterCatalogLoad() {
  initializeSectionHistoryState();
  applySectionRoute(sectionRouteFromLocation() || sectionRouteFromState(history.state));
}

window.addEventListener("popstate", (event) => {
  applySectionRoute(sectionRouteFromState(event.state) || sectionRouteFromLocation());
});

ensureSearchPanel();
searchInput.addEventListener("input", handleSearchInput);
searchInput.addEventListener("focus", showSearchPanelIfNeeded);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && currentSearchResults.length) {
    event.preventDefault();
    goToSearchResult(currentSearchResults[0]);
  }
  if (event.key === "Escape") {
    clearSearchHighlights();
    if (searchPanel) searchPanel.hidden = true;
  }
});

document.addEventListener("click", (event) => {
  if (!searchPanel || searchPanel.hidden) return;
  if (event.target.closest(".search-engine")) return;
  searchPanel.hidden = true;
});

document.addEventListener("click", (event) => {
  const topLink = event.target.closest('a[href="#top"]');
  if (!topLink) return;
  event.preventDefault();
  closeSectionDialogForRoute();
  window.scrollTo({ top: 0, behavior: "smooth" });
  try {
    history.replaceState({ appWindow: "portfolio-base" }, "", "#top");
  } catch {
    window.location.hash = "top";
  }
});

aiAssistantForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = aiAssistantInput?.value || "";
  if (aiAssistantInput) aiAssistantInput.value = "";
  answerAssistantQuestion(question);
});

aiClearChatButton?.addEventListener("click", clearAssistantChat);
window.addEventListener("resize", updateAssistantPanelGrowth);

aiAssistantLog?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-ai-source-id]");
  if (!button) return;
  const source = assistantSourceMap.get(button.dataset.aiSourceId);
  if (source) goToSearchResult(source);
});

grid.addEventListener("click", (event) => {
  const sectionButton = event.target.closest("[data-section-project]");
  if (!sectionButton) return;
  openParsedSection(sectionButton.dataset.sectionProject, sectionButton.dataset.sectionIndex);
});
function renderInlineSectionFiles(items = []) {
    const downloads = uniqueDownloads(items.map((item) => normalizeDownloadAsset(item, "File")).filter(Boolean));
    if (!downloads.length) return "";

    return `
    <div class="section-file-list">
      ${downloads.map((item) => `
        <a
          class="section-file-link"
          href="${escapeHtml(normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }))}"
          ${linkAttributes(item.url, item)}
          ${downloadAttribute(item.url, item)}
        >
          ${escapeHtml(item.title || fileNameFromUrl(item.url))}
        </a>
      `).join("")}
    </div>
  `;
}
function normalizeTextColor(value = "") {
    const color = String(value || "").trim();
    return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color) ||
        /^rgba?\(/i.test(color) ||
        /^hsla?\(/i.test(color)
        ? color
        : "";
}
function loadProjectCatalog() {
  if (window.__PORTFOLIO_CATALOG__) {
    projects = window.__PORTFOLIO_CATALOG__.projects || [];
    categories = hydrateProjectCategories(window.__PORTFOLIO_CATALOG__.categories || [], projects);
    siteSections = window.__PORTFOLIO_CATALOG__.siteSections || [];
    fieldStyles = normalizeFieldStyles(window.__PORTFOLIO_CATALOG__.fieldStyles || {});
    siteContent = normalizeSiteContent(window.__PORTFOLIO_CATALOG__.siteContent || {});
    siteContentRich = window.__PORTFOLIO_CATALOG__.siteContentRich || {};
    profile = normalizeProfile(window.__PORTFOLIO_CATALOG__.profile || {});
    profileRich = window.__PORTFOLIO_CATALOG__.profileRich || {};
    funFacts = normalizeFunFacts(window.__PORTFOLIO_CATALOG__.funFacts || []);
    funFactsRich = window.__PORTFOLIO_CATALOG__.funFactsRich || null;
    renderProfile();
    renderSiteContent();
    renderFunFacts();
    renderSiteSections();
    renderCategoryFilters();
    renderProjects();
    rebuildSearchIndex();
    updateSearchDropdown();
    restoreSectionRouteAfterCatalogLoad();
    return;
  }

  const catalogUrl = new URL("projects.json", window.location.href);
  catalogUrl.searchParams.set("v", String(Date.now()));
  fetch(catalogUrl.href, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("Could not load projects.json");
      return response.json();
    })
    .then((data) => {
      projects = data.projects || [];
      categories = hydrateProjectCategories(data.categories || [], projects);
      siteSections = data.siteSections || [];
      fieldStyles = normalizeFieldStyles(data.fieldStyles || {});
      siteContent = normalizeSiteContent(data.siteContent || {});
      siteContentRich = data.siteContentRich || {};
      profile = normalizeProfile(data.profile || {});
      profileRich = data.profileRich || {};
      funFacts = normalizeFunFacts(data.funFacts || []);
      funFactsRich = data.funFactsRich || null;
      renderProfile();
      renderSiteContent();
      renderFunFacts();
      renderSiteSections();
      renderCategoryFilters();
      renderProjects();
      rebuildSearchIndex();
      updateSearchDropdown();
      restoreSectionRouteAfterCatalogLoad();
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
