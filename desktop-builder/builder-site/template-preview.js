const builderGuideOpen = document.querySelector("#builder-guide-open");
const builderGuideDialog = document.querySelector("#builder-guide-dialog");
const builderGuideClose = document.querySelector("#builder-guide-close");
const templateSelect = document.querySelector("#template-select");
const newCategorySelect = document.querySelector("#new-category-select");
const placementSelect = document.querySelector("#placement-select");
const newProjectTitle = document.querySelector("#new-project-title");
const addProjectButton = document.querySelector("#add-project");
const addSiteSectionButton = document.querySelector("#add-site-section");
const funFactsInput = document.querySelector("#fun-facts-input");
const funFactsCount = document.querySelector("#fun-facts-count");
const saveFunFactsButton = document.querySelector("#save-fun-facts");
const clearFunFactsButton = document.querySelector("#clear-fun-facts");
const siteHeroEyebrowInput = document.querySelector("#site-hero-eyebrow");
const siteHeroTitleInput = document.querySelector("#site-hero-title");
const siteHeroCopyInput = document.querySelector("#site-hero-copy");
const saveSiteContentButton = document.querySelector("#save-site-content");
const categoryDropdown = document.querySelector("#category-dropdown");
const siteSectionList = document.querySelector("#site-section-list");
const projectCreateDialog = document.querySelector("#project-create-dialog");
const projectCreateForm = document.querySelector("#project-create-form");
const projectCreateCategory = document.querySelector("#project-create-category");
const projectCreateCancel = document.querySelector("#project-create-cancel");
const projectTree = document.querySelector("#project-tree");
const projectDialog = document.querySelector("#project-dialog");
const projectWindowTitle = document.querySelector("#project-window-title");
const projectWindowClose = document.querySelector("#project-window-close");
const projectWindowDelete = document.querySelector("#project-window-delete");
const viewProjectPreviewButton = document.querySelector("#view-project-preview");
const saveProjectButton = document.querySelector("#save-project");
const saveProjectCloseButton = document.querySelector("#save-project-close");
const projectTitleMenu = document.querySelector("#project-title-menu");
const titleRenameActions = document.querySelector("#title-rename-actions");
const titleRenameSave = document.querySelector("#title-rename-save");
const titleRenameCancel = document.querySelector("#title-rename-cancel");
const projectMetaDialog = document.querySelector("#project-meta-dialog");
const projectMetaTitle = document.querySelector("#project-meta-title");
const projectMetaGrid = document.querySelector("#project-meta-grid");
const projectMetaClose = document.querySelector("#project-meta-close");
const projectFields = document.querySelector("#project-fields");
const sectionTabs = document.querySelector("#section-tabs");
const sectionContent = document.querySelector("#section-content");
const projectWindowContent = document.querySelector(".project-window-content");
const projectPreviewDialog = document.querySelector("#project-preview-dialog");
const projectPreviewTitle = document.querySelector("#project-preview-title");
const projectPreviewContent = document.querySelector("#project-preview-content");
const projectPreviewClose = document.querySelector("#project-preview-close");
const projectPreviewBack = document.querySelector("#project-preview-back");
const projectPreviewForward = document.querySelector("#project-preview-forward");
const openPortfolioPreviewButton = document.querySelector("#open-portfolio-preview");
const saveAllSectionsButton = document.querySelector("#save-all-sections");
const portfolioPreviewDialog = document.querySelector("#portfolio-preview-dialog");
const portfolioPreviewClose = document.querySelector("#portfolio-preview-close");
const publishTargetOpen = document.querySelector("#publish-target-open");
const publishTargetDialog = document.querySelector("#publish-target-dialog");
const publishTargetForm = document.querySelector("#publish-target-form");
const publishTargetClose = document.querySelector("#publish-target-close");
const publishTargetCancel = document.querySelector("#publish-target-cancel");
const publishTargetCurrent = document.querySelector("#publish-target-current");
const publishTargetRepository = document.querySelector("#publish-target-repository");
const publishTargetDomain = document.querySelector("#publish-target-domain");
const publishTargetUsername = document.querySelector("#publish-target-username");
const publishTargetPassword = document.querySelector("#publish-target-password");
const publishResultDialog = document.querySelector("#publish-result-dialog");
const publishResultEyebrow = document.querySelector("#publish-result-eyebrow");
const publishResultTitle = document.querySelector("#publish-result-title");
const publishResultMessage = document.querySelector("#publish-result-message");
const publishResultOutput = document.querySelector("#publish-result-output");
const publishResultClose = document.querySelector("#publish-result-close");
const deleteConfirmDialog = document.querySelector("#delete-confirm-dialog");
const deleteConfirmTitle = document.querySelector("#delete-confirm-title");
const deleteConfirmMessage = document.querySelector("#delete-confirm-message");
const deleteConfirmYes = document.querySelector("#delete-confirm-yes");
const deleteConfirmNo = document.querySelector("#delete-confirm-no");
const saveDraftButton = document.querySelector("#save-draft");
const applyCatalogButton = document.querySelector("#apply-catalog");
const builderStatus = document.querySelector("#builder-status");
const portfolioPreviewFrame = document.querySelector("#portfolio-preview-frame");
const filePicker = document.querySelector("#file-picker");
const assetDialog = document.querySelector("#asset-dialog");
const assetForm = document.querySelector("#asset-form");
const assetDialogTitle = document.querySelector("#asset-dialog-title");
const assetSource = document.querySelector("#asset-source");
const assetFile = document.querySelector("#asset-file");
const assetUrl = document.querySelector("#asset-url");
const assetTitle = document.querySelector("#asset-title");
const assetCaption = document.querySelector("#asset-caption");
const captionSource = document.querySelector("#caption-source");
const captionFile = document.querySelector("#caption-file");
const assetCancel = document.querySelector("#asset-cancel");
const sectionDialog = document.querySelector("#section-dialog");
const sectionForm = document.querySelector("#section-form");
const sectionDialogTitle = document.querySelector("#section-dialog-title");
const sectionTitle = document.querySelector("#section-title");
const sectionDescription = document.querySelector("#section-description");
const sectionCancel = document.querySelector("#section-cancel");
const siteLinkDialog = document.querySelector("#site-link-dialog");
const siteLinkForm = document.querySelector("#site-link-form");
const siteLinkEyebrow = document.querySelector("#site-link-eyebrow");
const siteLinkTitle = document.querySelector("#site-link-title");
const siteLinkLabel = document.querySelector("#site-link-label");
const siteLinkUrl = document.querySelector("#site-link-url");
const siteLinkCancel = document.querySelector("#site-link-cancel");
const summaryImageDialog = document.querySelector("#summary-image-dialog");
const summaryImageForm = document.querySelector("#summary-image-form");
const summaryImageFile = document.querySelector("#summary-image-file");
const summaryImageTitle = document.querySelector("#summary-image-title");
const summaryImageCaption = document.querySelector("#summary-image-caption");
const summaryImageAlign = document.querySelector("#summary-image-align");
const summaryImageDisplay = document.querySelector("#summary-image-display");
const summaryImageCrop = document.querySelector("#summary-image-crop");
const summaryImageZoom = document.querySelector("#summary-image-zoom");
const summaryImageCancel = document.querySelector("#summary-image-cancel");
const summaryFormulaDialog = document.querySelector("#summary-formula-dialog");
const summaryFormulaForm = document.querySelector("#summary-formula-form");
const summaryFormulaInput = document.querySelector("#summary-formula-input");
const summaryFormulaAlign = document.querySelector("#summary-formula-align");
const summaryFormulaCancel = document.querySelector("#summary-formula-cancel");
const summaryContextMenu = document.querySelector("#summary-context-menu");
const richFontSelect = document.querySelector("#rich-font-select");
const richFontSize = document.querySelector("#rich-font-size");
const richColorInput = document.querySelector("#rich-color-input");
const richBoldButton = document.querySelector("[data-rich-bold]");
const textSelectionInspector = document.querySelector("#text-selection-inspector");
const selectionTextPreview = document.querySelector("#selection-text-preview");
const selectionFontInput = document.querySelector("#selection-font-input");
const selectionColorInput = document.querySelector("#selection-color-input");
const selectionSizeInput = document.querySelector("#selection-size-input");
const selectionColorPicker = document.querySelector("#selection-color-picker");
const selectionColorSwatches = document.querySelector("#selection-color-swatches");
const templateDialog = document.querySelector("#template-dialog");
const templatePreviewGroup = document.querySelector("#template-preview-group");
const templatePreviewTitle = document.querySelector("#template-preview-title");
const templatePreviewDescription = document.querySelector("#template-preview-description");
const templatePreviewCardTitle = document.querySelector("#template-preview-card-title");
const templatePreviewInteraction = document.querySelector("#template-preview-interaction");
const templatePreviewCard = document.querySelector("#template-preview-card");
const templateVisual = document.querySelector("#template-visual");
const templatePalette = document.querySelector("#template-palette");
const templatePreviewClose = document.querySelector("#template-preview-close");

const standardSections = [
  { id: "brief", label: "Overview", folder: "" },
  { id: "design", label: "Design", folder: "documents" },
  { id: "simulation", label: "Simulation", folder: "simulations", analogOnly: true }
];

const defaultFunFacts = [
  "I built a builder to build this portfolio.",
  "I love a good argument about soccer: the tactics, the culture, the refereeing, all of it."
];

const defaultSiteContent = {
  heroEyebrow: "Engineering portfolio",
  heroTitle: "Analog, embedded, and digital systems built with purpose.",
  heroCopy: "I design and document systems across analog circuits, embedded firmware, digital hardware, and software.\nThis portfolio presents selected work, technical artifacts, and the engineering decisions behind each build."
};

const commonRichFonts = [
  "Arial", "Calibri", "Cambria", "Georgia", "Times New Roman",
  "Verdana", "Tahoma", "Trebuchet MS", "Helvetica", "Garamond",
  "Palatino Linotype", "Courier New", "Consolas", "Lucida Console",
  "Segoe UI", "Inter", "Roboto", "Open Sans", "Lato", "Montserrat"
];
const commonRichColors = [
  "#17202a", "#000000", "#ffffff", "#1f6ed4", "#087f9b",
  "#117c7a", "#dc2626", "#b45309", "#6d28d9", "#475569"
];
const commonRichSizes = Array.from({ length: 17 }, (_, index) => String(index + 8));

const defaultSiteSections = [
  {
    id: "professional-profile",
    title: "Professional Profile",
    eyebrow: "Professional profile",
    description: "A focused profile section for resume links, technical identity, career direction, websites, and proof of work.",
    visible: false,
    backgroundImage: "",
    links: [
      { label: "Resume", url: "assets/resume.pdf", kind: "resume" },
      { label: "GitHub", url: "https://github.com/otienomaurice", kind: "github" }
    ],
    assets: [],
    subsections: [
      {
        id: "engineering-identity",
        title: "Engineering Identity",
        description: "Summarize the kind of engineer you are, the problems you like solving, and the technical areas you want recruiters to associate with your name."
      },
      {
        id: "resume-and-websites",
        title: "Resume and Websites",
        description: "Keep resumes, GitHub profiles, personal websites, publications, or other professional links in one recruiter-friendly location."
      },
      {
        id: "career-direction",
        title: "Career Direction",
        description: "Describe the roles, teams, technologies, and industries you are targeting next."
      }
    ]
  },
  {
    id: "personal-background",
    title: "Personal Background",
    eyebrow: "Personal story",
    description: "A short human section for where you come from, what shaped you, and the values that show up in your work.",
    visible: false,
    backgroundImage: "",
    links: [],
    assets: [],
    subsections: [
      {
        id: "origin-and-home",
        title: "Origin and Home",
        description: "Add the country, community, or places that shaped your point of view."
      },
      {
        id: "education-path",
        title: "Education Path",
        description: "Connect your academic path, hands-on learning, and technical growth."
      },
      {
        id: "values",
        title: "Values",
        description: "Write about the habits and values that guide how you build, collaborate, and learn."
      }
    ]
  },
  {
    id: "life-outside-engineering",
    title: "Life Outside Engineering",
    eyebrow: "Beyond the bench",
    description: "A lighter section for sports, hobbies, creative interests, community, and what you enjoy outside technical work.",
    visible: false,
    backgroundImage: "",
    links: [],
    assets: [],
    subsections: [
      {
        id: "sports",
        title: "Sports",
        description: "Add the sports you play or follow, and what they say about your discipline, teamwork, or personality."
      },
      {
        id: "hobbies",
        title: "Hobbies",
        description: "Add hobbies, creative work, travel, reading, music, or other interests."
      },
      {
        id: "what-i-love",
        title: "What I Love To Do",
        description: "Write the things that make you feel energized and alive outside the formal resume."
      }
    ]
  },
  {
    id: "social-and-contact",
    title: "Social and Contact",
    eyebrow: "Connect",
    description: "A compact connection section for social media, email, phone, GitHub, LinkedIn, and other public profiles.",
    visible: false,
    backgroundImage: "",
    links: [
      { label: "Email", url: "https://mail.google.com/mail/?view=cm&fs=1&to=otienomaurice12340@gmail.com", kind: "email" },
      { label: "Call", url: "tel:+14845451567", kind: "phone" },
      { label: "GitHub", url: "https://github.com/otienomaurice", kind: "github" }
    ],
    assets: [],
    subsections: [
      {
        id: "primary-contact",
        title: "Primary Contact",
        description: "Keep the fastest ways to reach you here."
      },
      {
        id: "social-media",
        title: "Social Media",
        description: "Add LinkedIn, GitHub, YouTube, personal websites, or other professional social links."
      }
    ]
  }
];

const starterProjectIds = new Set([
  "analog-control-bench-test",
  "fpga-digital-design-lab",
  "embedded-sensor-platform"
]);

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

let catalog = { categories: [], projects: [] };
let savedPortfolioCatalog = { categories: [], projects: [] };
let templates = [];
let selectedProjectId = "";
let activeSectionId = "brief";
let expandedCategories = new Set();
let pendingCreateCategoryId = "";
let previewRenderTimer = 0;
let chromeRenderTimer = 0;
let pendingEditor = null;
let pendingDeleteAction = null;
let activeProjectPreviewProject = null;
let activeProjectPreviewSectionIndex = -1;
let activeProjectPreviewPath = [];
let activeProjectPreviewForwardStack = [];
let currentPublishTarget = null;
let summaryEditorProjectId = "";
let activeSummaryEditor = null;
let activeSummaryBlock = null;
let activeRichSelectionRange = null;
let activeTextSelectionRange = null;
const persistentSelectionHighlightName = "builder-text-selection";
let persistentSelectionOverlay = null;
let activeSelectionInspectorDrag = null;
let selectionInspectorWasMoved = false;
let selectionInspectorPointerInside = false;
let selectionGestureActive = false;
let selectionGestureProducedRange = false;
let selectionInspectorRefreshTimer = 0;
let selectionGestureFinishTimer = 0;
let selectionInspectorInputTimer = 0;
let activeRichDragBlock = null;
let activeImageCropDrag = null;
let originalTitleDraft = "";
let titleClickTimer = 0;
let autosaveTimer = 0;
let autosaveInFlight = false;
let autosaveQueued = false;
let draftSavedSinceChanges = false;
let activeDialogDrag = null;
let activeDialogResize = null;
let projectWindowBackStack = [];
let projectWindowForwardStack = [];
let suppressProjectWindowHistory = false;

function setStatus(message) {
  builderStatus.textContent = message;
}

function dialogDragHandles(dialog) {
  return [
    ...dialog.querySelectorAll(".project-dialog-heading, .project-preview-heading, .template-dialog-heading"),
    ...dialog.querySelectorAll(".asset-dialog form > div:first-child")
  ];
}

function dialogWindowActionTarget(handle) {
  return handle.querySelector(".project-window-actions, .section-view-actions") || handle;
}

function updateDialogWindowButtons(dialog) {
  const isMinimized = dialog.classList.contains("is-minimized-dialog");
  const isHidden = dialog.classList.contains("is-hidden-dialog");
  const isMaximized = dialog.classList.contains("is-maximized-dialog");
  dialog.querySelectorAll("[data-dialog-minimize='true']").forEach((button) => {
    button.textContent = isMinimized ? "+" : "\u2212";
    button.title = isMinimized ? "Restore window" : "Minimize window";
    button.setAttribute("aria-label", isMinimized ? "Restore window" : "Minimize window");
  });
  dialog.querySelectorAll("[data-dialog-hide='true']").forEach((button) => {
    button.textContent = isHidden ? "\u25b4" : "\u25be";
    button.title = isHidden ? "Show window" : "Hide window";
    button.setAttribute("aria-label", isHidden ? "Show window" : "Hide window");
  });
  dialog.querySelectorAll("[data-dialog-maximize='true']").forEach((button) => {
    button.textContent = isMaximized ? "\u2750" : "\u25a1";
    button.title = isMaximized ? "Restore size" : "Maximize window";
    button.setAttribute("aria-label", isMaximized ? "Restore size" : "Maximize window");
  });
  dialog.querySelectorAll("[data-dialog-back='true']").forEach((button) => {
    button.disabled = !dialogCanStepBack(dialog);
  });
  dialog.querySelectorAll("[data-dialog-forward='true']").forEach((button) => {
    button.disabled = !dialogCanStepForward(dialog);
  });
}

function dialogTitleForDock(dialog) {
  return dialog.querySelector("h2")?.textContent?.trim() || "Window";
}

function makeDialogControl(action, label, title) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `dialog-window-control dialog-window-${action}-control`;
  button.dataset.dialogAction = action;
  button.textContent = label;
  button.title = title;
  button.setAttribute("aria-label", title);
  return button;
}

function ensureDialogLeftControls(dialog, handle) {
  if (handle.querySelector(".dialog-window-left-controls")) return;
  const titlebar = handle.querySelector(".section-view-titlebar");
  const controls = document.createElement("div");
  controls.className = "dialog-window-left-controls";

  if (titlebar?.querySelector(".section-view-back, .section-view-forward")) {
    const refresh = makeDialogControl("refresh", "\u21bb", "Refresh window");
    refresh.dataset.dialogRefresh = "true";
    controls.append(refresh);
    titlebar.prepend(controls);
  } else {
    [
      makeDialogControl("back", "\u2190", "Back"),
      makeDialogControl("forward", "\u2192", "Forward"),
      makeDialogControl("refresh", "\u21bb", "Refresh window")
    ].forEach((button) => {
      button.dataset[`dialog${button.dataset.dialogAction[0].toUpperCase()}${button.dataset.dialogAction.slice(1)}`] = "true";
      controls.append(button);
    });
    handle.prepend(controls);
  }
}

function ensureDialogWindowControls(dialog, handle) {
  dialog.querySelectorAll(".dialog-minimize-button").forEach((button) => button.remove());
  ensureDialogLeftControls(dialog, handle);
  const target = dialogWindowActionTarget(handle);
  let cluster = target.querySelector(".dialog-window-control-cluster");
  if (!cluster) {
    cluster = document.createElement("div");
    cluster.className = "dialog-window-control-cluster";
    target.append(cluster);
  }

  if (!cluster.querySelector("[data-dialog-hide='true']")) {
    const hide = makeDialogControl("hide", "\u25be", "Hide window");
    hide.dataset.dialogHide = "true";
    cluster.append(hide);
  }
  if (!cluster.querySelector("[data-dialog-minimize='true']")) {
    const minimize = makeDialogControl("minimize", "\u2212", "Minimize window");
    minimize.dataset.dialogMinimize = "true";
    cluster.append(minimize);
  }
  if (!cluster.querySelector("[data-dialog-maximize='true']")) {
    const maximize = makeDialogControl("maximize", "\u25a1", "Maximize window");
    maximize.dataset.dialogMaximize = "true";
    cluster.append(maximize);
  }

  let closeButton = cluster.querySelector(".project-window-close, .close-control, [data-dialog-close='true']");
  if (!closeButton) {
    closeButton = [...dialog.querySelectorAll(".project-window-close, .close-control")]
      .find((button) => button.closest(".project-dialog-heading, .project-preview-heading, .template-dialog-heading, .asset-dialog form > div:first-child") === handle);
  }
  if (closeButton) {
    closeButton.classList.add("dialog-window-control", "dialog-close-button");
    cluster.append(closeButton);
  } else {
    const cloneClose = makeDialogControl("close", "\u00d7", "Close window");
    cloneClose.classList.add("project-window-close", "dialog-close-button");
    cloneClose.dataset.dialogClose = "true";
    cluster.append(cloneClose);
  }
  updateDialogWindowButtons(dialog);
}

function ensureDialogResizeHandles(dialog) {
  if (dialog.querySelector("[data-dialog-resize-handle]")) return;
  ["n", "e", "s", "w", "ne", "nw", "se", "sw"].forEach((direction) => {
    const handle = document.createElement("div");
    handle.className = `dialog-resize-handle resize-${direction}`;
    handle.dataset.dialogResizeHandle = direction;
    handle.setAttribute("aria-hidden", "true");
    dialog.append(handle);
  });
}

function markDialogDragHandles(dialog) {
  dialogDragHandles(dialog).forEach((handle) => {
    handle.dataset.dialogDragHandle = "true";
    handle.title = handle.title || "Drag to move this window";
    ensureDialogWindowControls(dialog, handle);
  });
  ensureDialogResizeHandles(dialog);
}

function draggableDialogFromEvent(event) {
  if (event.target.closest("[data-dialog-resize-handle]")) return null;
  const handle = event.target.closest("[data-dialog-drag-handle='true']");
  if (!handle) return null;
  const dialog = handle.closest("dialog");
  if (!dialog?.open) return null;
  if (dialog.classList.contains("is-hidden-dialog")) return null;
  if (event.target.closest("button, a, input, textarea, select, label, summary, [contenteditable='true']")) return null;
  return dialog;
}

function clampDialogPosition(left, top, dialog) {
  const rect = dialog.getBoundingClientRect();
  const margin = 12;
  const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin);
  const maxTop = Math.max(margin, window.innerHeight - rect.height - margin);
  return {
    left: Math.min(Math.max(left, margin), maxLeft),
    top: Math.min(Math.max(top, margin), maxTop)
  };
}

function anchorDialogForDrag(dialog) {
  const rect = dialog.getBoundingClientRect();
  const position = clampDialogPosition(rect.left, rect.top, dialog);
  dialog.classList.add("is-draggable-dialog");
  dialog.style.left = `${position.left}px`;
  dialog.style.top = `${position.top}px`;
  dialog.style.right = "auto";
  dialog.style.bottom = "auto";
  dialog.style.margin = "0";
}

function saveDialogRestoreState(dialog) {
  if (dialog.dataset.restoreWindowState) return;
  const rect = dialog.getBoundingClientRect();
  dialog.dataset.restoreWindowState = JSON.stringify({
    bottom: dialog.style.bottom || "",
    height: dialog.style.height || `${rect.height}px`,
    left: dialog.style.left || `${rect.left}px`,
    margin: dialog.style.margin || "",
    maxHeight: dialog.style.maxHeight || "",
    right: dialog.style.right || "",
    top: dialog.style.top || `${rect.top}px`,
    width: dialog.style.width || `${rect.width}px`
  });
}

function restoreDialogWindowState(dialog) {
  let state = null;
  try {
    state = JSON.parse(dialog.dataset.restoreWindowState || "null");
  } catch {
    state = null;
  }
  delete dialog.dataset.restoreWindowState;
  if (!state) {
    dialog.removeAttribute("style");
    return;
  }
  Object.entries(state).forEach(([key, value]) => {
    dialog.style[key] = value;
  });
}

function anchorDialogForResize(dialog) {
  anchorDialogForDrag(dialog);
  const rect = dialog.getBoundingClientRect();
  dialog.classList.add("is-resized-dialog");
  dialog.style.width = `${rect.width}px`;
  dialog.style.height = `${rect.height}px`;
  dialog.style.maxHeight = "none";
}

function resizeDialogBounds(state, event) {
  const margin = 12;
  const direction = state.direction;
  const minWidth = Math.min(320, Math.max(180, window.innerWidth - margin * 2));
  const minHeight = Math.min(170, Math.max(120, window.innerHeight - margin * 2));
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

function beginDialogResize(event) {
  if (event.button !== 0) return;
  const handle = event.target.closest("[data-dialog-resize-handle]");
  const dialog = handle?.closest("dialog");
  if (!handle || !dialog?.open || dialog.classList.contains("is-minimized-dialog") || dialog.classList.contains("is-hidden-dialog")) return;
  anchorDialogForResize(dialog);
  activeDialogResize = {
    dialog,
    direction: handle.dataset.dialogResizeHandle,
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

function moveDialogResize(event) {
  if (!activeDialogResize) return;
  const next = resizeDialogBounds(activeDialogResize, event);
  activeDialogResize.dialog.style.left = `${next.left}px`;
  activeDialogResize.dialog.style.top = `${next.top}px`;
  activeDialogResize.dialog.style.width = `${next.width}px`;
  activeDialogResize.dialog.style.height = `${next.height}px`;
}

function endDialogResize() {
  if (!activeDialogResize) return;
  activeDialogResize.pointerTarget?.releasePointerCapture?.(activeDialogResize.pointerId);
  activeDialogResize.dialog.classList.remove("is-resizing-dialog");
  activeDialogResize = null;
}

function beginDialogDrag(event) {
  if (event.button !== 0) return;
  const dialog = draggableDialogFromEvent(event);
  if (!dialog) return;
  anchorDialogForDrag(dialog);
  const rect = dialog.getBoundingClientRect();
  activeDialogDrag = {
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

function moveDialogDrag(event) {
  if (!activeDialogDrag) return;
  const next = clampDialogPosition(
    event.clientX - activeDialogDrag.offsetX,
    event.clientY - activeDialogDrag.offsetY,
    activeDialogDrag.dialog
  );
  activeDialogDrag.dialog.style.left = `${next.left}px`;
  activeDialogDrag.dialog.style.top = `${next.top}px`;
}

function endDialogDrag() {
  if (!activeDialogDrag) return;
  activeDialogDrag.pointerTarget?.releasePointerCapture?.(activeDialogDrag.pointerId);
  activeDialogDrag.dialog.classList.remove("is-dragging-dialog");
  activeDialogDrag = null;
}

function toggleDialogMinimized(dialog) {
  if (!dialog) return;
  if (dialog.classList.contains("is-hidden-dialog")) {
    toggleDialogHidden(dialog);
    return;
  }
  anchorDialogForDrag(dialog);
  dialog.classList.remove("is-maximized-dialog");
  dialog.classList.toggle("is-minimized-dialog");
  updateDialogWindowButtons(dialog);
}

function toggleDialogMaximized(dialog) {
  if (!dialog) return;
  if (dialog.classList.contains("is-hidden-dialog")) dialog.classList.remove("is-hidden-dialog");
  if (dialog.classList.contains("is-maximized-dialog")) {
    dialog.classList.remove("is-maximized-dialog");
    restoreDialogWindowState(dialog);
  } else {
    saveDialogRestoreState(dialog);
    dialog.classList.remove("is-minimized-dialog");
    dialog.classList.add("is-draggable-dialog", "is-maximized-dialog");
    dialog.style.left = "0";
    dialog.style.top = "0";
    dialog.style.right = "auto";
    dialog.style.bottom = "auto";
    dialog.style.margin = "0";
    dialog.style.width = "100vw";
    dialog.style.height = "100dvh";
    dialog.style.maxHeight = "none";
  }
  updateDialogWindowButtons(dialog);
}

function toggleDialogHidden(dialog) {
  if (!dialog) return;
  if (dialog.classList.contains("is-hidden-dialog")) {
    dialog.classList.remove("is-hidden-dialog");
    restoreDialogWindowState(dialog);
  } else {
    saveDialogRestoreState(dialog);
    dialog.classList.remove("is-minimized-dialog", "is-maximized-dialog");
    dialog.classList.add("is-draggable-dialog", "is-hidden-dialog");
    dialog.style.left = "auto";
    dialog.style.top = "auto";
    dialog.style.right = "12px";
    dialog.style.bottom = "10px";
    dialog.style.margin = "0";
    dialog.style.width = "min(300px, calc(100vw - 24px))";
    dialog.style.height = "32px";
    dialog.style.maxHeight = "32px";
  }
  updateDialogWindowButtons(dialog);
}

function dialogCanStepBack(dialog) {
  if (dialog === projectDialog) return projectWindowBackStack.length > 0;
  if (dialog === projectPreviewDialog) return activeProjectPreviewSectionIndex >= 0;
  return false;
}

function dialogCanStepForward(dialog) {
  if (dialog === projectDialog) return projectWindowForwardStack.length > 0;
  if (dialog === projectPreviewDialog) return activeProjectPreviewForwardStack.length > 0;
  return false;
}

function renderProjectWindowSectionFromHistory(sectionId) {
  suppressProjectWindowHistory = true;
  activeSectionId = sectionId || "brief";
  renderAll();
  suppressProjectWindowHistory = false;
  updateDialogWindowButtons(projectDialog);
}

function stepProjectWindowBack() {
  if (!projectWindowBackStack.length) return;
  projectWindowForwardStack.push(activeSectionId);
  renderProjectWindowSectionFromHistory(projectWindowBackStack.pop());
}

function stepProjectWindowForward() {
  if (!projectWindowForwardStack.length) return;
  projectWindowBackStack.push(activeSectionId);
  renderProjectWindowSectionFromHistory(projectWindowForwardStack.pop());
}

function refreshDialogWindow(dialog) {
  saveVisibleRichEditors();
  if (dialog === projectPreviewDialog) {
    refreshOpenPreviews();
  } else if (dialog === portfolioPreviewDialog) {
    renderPreview();
  } else if (dialog === projectDialog) {
    renderAll();
  }
  setStatus("Window refreshed.");
  updateDialogWindowButtons(dialog);
}

function closeDialogFromControl(dialog, button) {
  const originalClose = [...dialog.querySelectorAll(".project-window-close, .close-control")]
    .find((item) => item !== button && !item.dataset.dialogClose);
  if (originalClose && !button.classList.contains("close-control") && !button.id) {
    originalClose.click();
    return;
  }
  dialog.close("close");
}

function handleDialogWindowAction(button) {
  const dialog = button.closest("dialog");
  if (!dialog) return;
  const action = button.dataset.dialogAction;
  if (action === "hide") toggleDialogHidden(dialog);
  if (action === "minimize") toggleDialogMinimized(dialog);
  if (action === "maximize") toggleDialogMaximized(dialog);
  if (action === "refresh") refreshDialogWindow(dialog);
  if (action === "back") {
    if (dialog === projectDialog) stepProjectWindowBack();
    else if (dialog === projectPreviewDialog) projectPreviewBackStep();
  }
  if (action === "forward") {
    if (dialog === projectDialog) stepProjectWindowForward();
    else if (dialog === projectPreviewDialog) projectPreviewForwardStep();
  }
  if (action === "close") closeDialogFromControl(dialog, button);
}

function enableDraggableDialogs() {
  document.querySelectorAll("dialog").forEach(markDialogDragHandles);
  document.addEventListener("pointerdown", beginDialogResize);
  document.addEventListener("pointerdown", beginDialogDrag);
  document.addEventListener("pointermove", moveDialogResize);
  document.addEventListener("pointermove", moveDialogDrag);
  document.addEventListener("pointerup", endDialogResize);
  document.addEventListener("pointerup", endDialogDrag);
  document.addEventListener("pointercancel", endDialogResize);
  document.addEventListener("pointercancel", endDialogDrag);
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dialog-action]");
    if (!button) return;
    handleDialogWindowAction(button);
  });
  document.addEventListener("click", (event) => {
    const hiddenDialog = event.target.closest("dialog.is-hidden-dialog");
    if (!hiddenDialog || event.target.closest("button")) return;
    toggleDialogHidden(hiddenDialog);
  });
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("close", () => {
      dialog.classList.remove("is-minimized-dialog");
      dialog.classList.remove("is-hidden-dialog");
      dialog.classList.remove("is-maximized-dialog");
      dialog.classList.remove("is-resizing-dialog");
      delete dialog.dataset.restoreWindowState;
      updateDialogWindowButtons(dialog);
    });
  });
  window.addEventListener("resize", () => {
    document.querySelectorAll("dialog.is-draggable-dialog[open]").forEach((dialog) => {
      const rect = dialog.getBoundingClientRect();
      const next = clampDialogPosition(rect.left, rect.top, dialog);
      dialog.style.left = `${next.left}px`;
      dialog.style.top = `${next.top}px`;
    });
  });
}

function markDraftNeedsSave() {
  draftSavedSinceChanges = false;
}

function showBuilderError(title, message, details = "") {
  publishResultEyebrow.textContent = "Builder check";
  publishResultTitle.textContent = title;
  publishResultMessage.textContent = message;
  publishResultOutput.textContent = details;
  publishResultDialog.showModal();
}

function renderPublishTargetInfo(target = {}) {
  if (!publishTargetCurrent) return;
  currentPublishTarget = target;
  const rows = [
    ["Workspace", target.workspace || "Not available"],
    ["Repository", target.repository || target.remote || "No repository connected"],
    ["Branch", target.branch || "No branch selected"],
    ["Custom domain", target.customDomain || "None"],
    ["Compatible site", target.compatible ? "Yes" : "No"],
    ["Git-backed", target.gitBacked ? "Yes" : "No"]
  ];
  publishTargetCurrent.innerHTML = rows
    .map(([label, value]) => `<div><strong>${escapeHtml(label)}</strong><span>${escapeHtml(value)}</span></div>`)
    .join("");
  if (publishTargetRepository) {
    publishTargetRepository.value = target.remote || "";
    publishTargetRepository.dataset.loadedValue = target.remote || "";
  }
  if (publishTargetDomain) {
    publishTargetDomain.value = target.customDomain || "";
    publishTargetDomain.dataset.autofilled = "true";
  }
}

async function loadPublishTargetInfo() {
  if (!publishTargetDialog) return;
  publishTargetCurrent.textContent = "Current target is loading.";
  try {
    const response = await fetch(`/api/publish-target?t=${Date.now()}`, { cache: "no-store" });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Publishing target could not be loaded.");
    renderPublishTargetInfo(result.target || {});
  } catch (error) {
    publishTargetCurrent.textContent = error.message || "Publishing target could not be loaded.";
  }
}

async function openPublishTargetDialog() {
  await loadPublishTargetInfo();
  publishTargetDialog.showModal();
}

async function savePublishTarget(event) {
  event.preventDefault();
  try {
    const response = await fetch(`/api/publish-target?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        repositoryUrl: publishTargetRepository?.value || "",
        customDomain: publishTargetDomain?.value || "",
        authUsername: publishTargetUsername?.value || "",
        authPassword: publishTargetPassword?.value || ""
      })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Publishing target could not be saved.");
    renderPublishTargetInfo(result.target || {});
    if (publishTargetPassword) publishTargetPassword.value = "";
    publishTargetDialog.close();
    showBuilderError(
      "Publishing target saved",
      result.target?.credentialsStored
        ? `The builder saved this target and handed credentials for ${result.target.credentialUsername || "the selected GitHub user"} to Git on this computer.`
        : "The builder will use this associated website repository the next time Apply to site is clicked.",
      "GitHub will still verify write permission before any live website files are applied."
    );
  } catch (error) {
    publishTargetCurrent.textContent = error.message || "Publishing target could not be saved.";
  }
}

function showPublishResult(result) {
  const publish = result.publish || {};
  const pushed = Boolean(publish.pushed);
  const authorizationRequired = Boolean(publish.authorizationRequired);
  publishResultEyebrow.textContent = "GitHub publish";
  publishResultTitle.textContent = pushed
    ? "Successfully pushed to GitHub"
    : authorizationRequired
      ? "Publishing access required"
      : "Site applied, push failed";
  publishResultMessage.textContent = pushed
    ? `Your portfolio changes were committed and pushed to ${publish.branch || "GitHub"}.`
    : authorizationRequired
      ? "No live website files were applied. Sign in with a GitHub account that has write access to this website repository, or associate the builder with your own compatible website repository."
      : "The site was applied locally, but Git push did not complete.";

  const output = [
    pushed ? "PUSH STATUS: SUCCESS" : "PUSH STATUS: FAILED",
    `FILE: ${result.file || "projects.json"}`,
    authorizationRequired ? "AUTHORIZATION: REQUIRED BEFORE WEBSITE CHANGES" : "",
    publish.repository ? `REPOSITORY: ${publish.repository}` : "",
    publish.remote ? `REMOTE: ${publish.remote}` : "",
    publish.branch ? `BRANCH: ${publish.branch}` : "",
    publish.committed === false ? "COMMIT: No file changes to commit." : "",
    publish.commitOutput ? `COMMIT OUTPUT:\n${publish.commitOutput}` : "",
    publish.pushOutput ? `PUSH OUTPUT:\n${publish.pushOutput}` : "",
    publish.error ? `ERROR:\n${publish.error}` : "",
    publish.details ? `DETAILS:\n${publish.details}` : "",
    publish.help ? `NEXT STEP:\n${publish.help}` : ""
  ].filter(Boolean).join("\n\n");

  publishResultOutput.textContent = output || "No Git output was returned.";
  publishResultDialog.showModal();
}

function scheduleAutosave(delay = 900) {
  markDraftNeedsSave();
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => {
    autosaveDraft();
  }, delay);
}

async function autosaveDraft() {
  if (autosaveInFlight) {
    autosaveQueued = true;
    return;
  }
  autosaveInFlight = true;
  try {
    const response = await fetch("/api/save-draft", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ catalog })
    });
    const result = await response.json();
    if (!response.ok) {
      setStatus(result.error || "Autosave failed.");
    }
  } catch {
    setStatus("Autosave failed. Make sure the local server is running.");
  } finally {
    autosaveInFlight = false;
    if (autosaveQueued) {
      autosaveQueued = false;
      scheduleAutosave(300);
    }
  }
}

function schedulePreviewRender() {
  if (!portfolioPreviewDialog?.open) return;
  clearTimeout(previewRenderTimer);
  previewRenderTimer = setTimeout(() => {
    renderPreview();
  }, 220);
}

function scheduleChromeRender() {
  clearTimeout(chromeRenderTimer);
  chromeRenderTimer = setTimeout(() => {
    renderTree();
    renderSectionTabs(selectedProject());
    if (portfolioPreviewDialog?.open) renderPreview();
  }, 260);
}

function updateAssetDialogVisibility() {
  const isLocal = assetSource.value === "local";
  const isCaptionFile = captionSource.value === "file";
  document.querySelector(".asset-local-field").hidden = !isLocal;
  document.querySelector(".asset-url-field").hidden = isLocal;
  document.querySelector(".caption-text-field").hidden = isCaptionFile;
  document.querySelector(".caption-file-field").hidden = !isCaptionFile;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function wordCount(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function limitWords(value, maxWords = 1000) {
  const words = String(value || "").trim().split(/\s+/).filter(Boolean);
  return words.length > maxWords ? words.slice(0, maxWords).join(" ") : value;
}

function normalizeFunFacts(value) {
  const items = Array.isArray(value) ? value : String(value || "").split(/\r?\n/);
  return items
    .map((item) => String(item || "").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, 3);
}

function syncFunFactsFromInput() {
  if (!funFactsInput) return [];
  const rich = extractRichSummary(funFactsInput);
  const facts = normalizeFunFacts(plainTextFromRich(rich));
  catalog.funFacts = facts;
  catalog.funFactsRich = rich;
  if (funFactsCount) funFactsCount.textContent = `${facts.length}/3`;
  return facts;
}

function renderFunFactsEditor() {
  if (!funFactsInput) return;
  const facts = normalizeFunFacts(catalog.funFacts || []);
  if (funFactsCount) funFactsCount.textContent = `${facts.length}/3`;
  if (document.activeElement === funFactsInput) return;
  populateStandaloneRichEditor(funFactsInput, catalog.funFactsRich, facts.join("\n"));
}

function renderSiteContentEditor() {
  const content = normalizeSiteContent(catalog.siteContent || {});
  if (siteHeroEyebrowInput && document.activeElement !== siteHeroEyebrowInput) {
    siteHeroEyebrowInput.value = content.heroEyebrow;
  }
  if (siteHeroTitleInput && document.activeElement !== siteHeroTitleInput) {
    siteHeroTitleInput.value = content.heroTitle;
  }
  if (siteHeroCopyInput && document.activeElement !== siteHeroCopyInput) {
    siteHeroCopyInput.value = content.heroCopy;
  }
}

function syncSiteContentFromInputs() {
  catalog.siteContent = normalizeSiteContent({
    heroCopy: siteHeroCopyInput?.value,
    heroEyebrow: siteHeroEyebrowInput?.value,
    heroTitle: siteHeroTitleInput?.value
  });
  return catalog.siteContent;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getByPath(target, pathValue) {
  return String(pathValue || "").split(".").filter(Boolean).reduce((current, key) => current?.[key], target);
}

function setByPath(target, pathValue, value) {
  const keys = String(pathValue || "").split(".").filter(Boolean);
  const last = keys.pop();
  let current = target;
  keys.forEach((key) => {
    current[key] = current[key] || {};
    current = current[key];
  });
  if (last) current[last] = value;
}

function defaultDesignModel() {
    return {
        brief: { summary: "", summaryRich: null, files: [] },
        documentation: { summary: "", summaryRich: null, files: [], references: [], mathAnalysis: [] },
        simulation: { summary: "", summaryRich: null, files: [], results: [] }
    };
}

function isAnalogProject(project) {
  return project?.category === "analog-mixed-signal";
}

function ensureDesignModel(project) {
  if (!project) return null;
  const defaults = defaultDesignModel();
  project.design = project.design || {};
  project.design.brief = { ...defaults.brief, ...(project.design.brief || {}) };
  project.design.documentation = { ...defaults.documentation, ...(project.design.documentation || {}) };
  project.design.documentation.summaryRich = project.design.documentation.summaryRich || null;
  project.design.simulation = { ...defaults.simulation, ...(project.design.simulation || {}) };
  project.design.brief.files = project.design.brief.files || [];
  project.design.documentation.files = project.design.documentation.files || [];
  project.design.documentation.references = project.design.documentation.references || [];
  project.design.documentation.mathAnalysis = project.design.documentation.mathAnalysis || [];
  project.design.simulation.files = project.design.simulation.files || [];
  project.design.simulation.results = project.design.simulation.results || [];
  return project.design;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

function textBlocksFromPlainText(text) {
  return [{
    align: "left",
    fontFamily: "Arial",
    fontSize: "normal",
    text: String(text || ""),
    type: "paragraph"
  }];
}

function richBlocksForProject(project) {
  return project?.summaryRich?.blocks?.length ? clone(project.summaryRich.blocks) : textBlocksFromPlainText(project?.summary || "");
}

function plainTextFromRich(rich, separator = "\n\n") {
  return (rich?.blocks || [])
    .map((block) => {
      if (block.type === "paragraph") return block.text || "";
      if (block.type === "formula") return block.formula || "";
      if (block.type === "image") return [block.title, block.caption].filter(Boolean).join(" ");
      return "";
    })
    .filter(Boolean)
    .join(separator);
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

function isFormulaOnly(value) {
  const text = String(value || "").trim();
  if (!text) return false;
  if (/^\$\$[\s\S]+\$\$$/.test(text) || /^\\\[[\s\S]+\\\]$/.test(text) || /^\\\([\s\S]+\\\)$/.test(text)) return true;
  const mathSignals = /\\frac|\\sqrt|\\sum|\\int|\\Delta|\\omega|\\pi|[=^_√∫ΣπΩμ]/;
  return text.length <= 180 && mathSignals.test(text) && !/[.!?]\s*$/.test(text);
}

function renderInlineMath(text) {
  const escaped = escapeHtml(text);
  const withMath = escaped.replace(/\$([^$]+)\$/g, '<span class="rich-inline-formula">$1</span>');
  return withMath.replace(/\b(https?:\/\/[^\s<]+|www\.[^\s<]+)/g, (match) => {
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

function summaryRichPathFromTextPath(pathValue = "") {
    return String(pathValue || "").replace(/\.summary$/, ".summaryRich");
}

function overviewFolderFromPath(pathValue = "") {
    if (pathValue.includes("design.brief")) return "design-overview";
    if (pathValue.includes("design.documentation")) return "documentation-overview";
    if (pathValue.includes("design.simulation")) return "simulation-overview";
    return "overview";
}

function richBlocksFromValue(rich, fallbackText = "") {
    return rich?.blocks?.length ? clone(rich.blocks) : textBlocksFromPlainText(fallbackText);
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
  const zoom = normalizeCropZoom(block.cropZoom);
  const x = normalizeCropPosition(block.cropX);
  const y = normalizeCropPosition(block.cropY);
  const styles = [`--crop-zoom: ${zoom}`, `--crop-x: ${x}%`, `--crop-y: ${y}%`];
  if (aspect !== "original") styles.push(`--crop-aspect: ${aspect}`);
  return ` style="${escapeHtml(styles.join("; "))}"`;
}

function richImageDownloadLink(block = {}) {
  const label = escapeHtml(cleanRichImageTitle(block) || block.caption || "Image file");
  const url = block.url || "#";
  const target = normalizeLinkTarget(url, { assumeWeb: isWebsiteLinkItem(block, url) });
  return `<p class="rich-download-only"><a class="resource-link" href="${escapeHtml(target)}"${linkAttributes(target, block)}${downloadAttribute(target, block)}>${label}</a></p>`;
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
          return `
            <figure class="rich-image justify-${align}">
              <span class="rich-image-viewport crop-${normalizeCropAspect(block.cropAspect) === "original" ? "original" : "active"}"${richImageCropStyle(block)}>
                <img src="${escapeHtml(block.url)}" alt="${escapeHtml(title || "Overview image")}">
              </span>
              ${(title || block.caption) ? `<figcaption>${title ? `<strong>${escapeHtml(title)}</strong>` : ""}${block.caption ? `<span>${escapeHtml(block.caption)}</span>` : ""}</figcaption>` : ""}
            </figure>
          `;
        }
        if (block.type === "formula") {
          return `<div class="rich-formula justify-${align}">${escapeHtml(unwrapFormula(block.formula))}</div>`;
        }
        const size = ["small", "normal", "large"].includes(block.fontSize) ? block.fontSize : "normal";
        const content = block.html
          ? sanitizeRichInlineHtml(block.html)
          : renderInlineMath(block.text || "");
        return `<p class="rich-paragraph rich-text-${size} text-${align}"${richTextStyle(block)}>${content}</p>`;
      }).join("")}
    </div>
  `;
}

function saveSelectedProjectToPortfolio() {
  const project = selectedProject();
  if (!project) return false;
  const parsedProject = parseProjectForPortfolio(project);
  savedPortfolioCatalog.categories = clone(catalog.categories);
  const nextProjects = (savedPortfolioCatalog.projects || []).filter((item) => item.id !== project.id);
  const workingIds = new Set((catalog.projects || []).map((item) => item.id));
  savedPortfolioCatalog.projects = nextProjects.filter((item) => workingIds.has(item.id));
  const workingIndex = catalog.projects.findIndex((item) => item.id === project.id);
  const insertAt = Math.max(0, workingIndex);
  savedPortfolioCatalog.projects.splice(insertAt, 0, parsedProject);
  markDraftNeedsSave();
  refreshOpenPreviews();
  setStatus(`${project.title} saved into the portfolio preview.`);
  return true;
}

function removeProjectFromPortfolio(projectId) {
  savedPortfolioCatalog.projects = (savedPortfolioCatalog.projects || []).filter((item) => item.id !== projectId);
}

function deleteProjectById(projectId) {
  const project = catalog.projects.find((item) => item.id === projectId);
  if (!project) return;
  catalog.projects = catalog.projects.filter((item) => item.id !== project.id);
  removeProjectFromPortfolio(project.id);
  selectedProjectId = catalog.projects[0]?.id || "";
  activeSectionId = "brief";
  if (projectDialog?.open && project.id === projectWindowTitle.dataset.projectId) {
    projectDialog.close();
  }
  setStatus("Project deleted locally.");
  scheduleAutosave();
  renderAll();
}

function openDeleteConfirm({ title = "Delete project", message, onConfirm }) {
  pendingDeleteAction = onConfirm;
  deleteConfirmTitle.textContent = title;
  deleteConfirmMessage.textContent = message;
  deleteConfirmDialog.showModal();
}

function requestProjectDelete(projectId) {
  const project = catalog.projects.find((item) => item.id === projectId);
  if (!project) return;
  openDeleteConfirm({
    title: "Delete project",
    message: "Are you sure you want to delete this project?",
    onConfirm: () => deleteProjectById(project.id)
  });
}

function parserItem(title, description = "", url = "", meta = "", kind = "text", rich = null, children = []) {
  const item = {
    children: children.filter((child) => child && (child.title || child.description || child.url || child.children?.length)),
    description: description || "",
    kind,
    meta: meta || "",
    title: title || "Untitled item",
    url: url || ""
  };
  if (rich?.blocks?.length) item.rich = clone(rich);
  return item;
}

function canonicalTemplateId(id) {
  return legacyTemplateSkins[id] || id || "";
}

function projectTemplateId(project) {
  return canonicalTemplateId(project?.portfolioView?.template?.id || project?.templateId || "");
}

function projectTemplateFor(project) {
  const templateId = projectTemplateId(project);
  return templates.find((template) => template.id === templateId) || {};
}

function projectTemplateClass(project) {
  const templateId = projectTemplateId(project);
  return templateId ? `project-template project-template-${templateId}` : "project-template-white";
}

function hasPublicTemplate(project) {
  return Boolean(projectTemplateId(project));
}

function projectTemplateVisual(project) {
  return project?.portfolioView?.template?.visual || project?.templateVisual || projectTemplateFor(project).visual || null;
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

function resourcesFrom(project, key) {
  return (project[key] || []).map((item) => {
    if (key === "tests") {
      return parserItem(item.name, item.result || item.method, item.artifact, item.method || item.status || "Test", "test", item.richDescription);
    }
    if (key === "pcbs") {
      return parserItem(item.name, item.revision || item.status, item.artifact, item.status || "PCB", "pcb", item.richDescription);
    }
    if (key === "media") {
      return parserItem(item.title, item.caption, item.url, item.status || "Image", "image", item.richDescription);
    }
    if (key === "links") {
      return parserItem(item.label, item.description || "", item.url, "Link", "link", item.richDescription);
    }
    return parserItem(item.title || item.name || item.label, item.description || item.caption, item.url || item.artifact, item.type || item.status || "Document", "document", item.richDescription);
  });
}

function resourcesFromItems(items = [], fallbackKind = "document") {
  return (items || []).map((item) => {
    const url = item.url || item.artifact || "";
    const kind = item.kind || fallbackKind;
    return parserItem(
      item.title || item.name || item.label || "Untitled item",
      item.description || item.caption || item.result || item.method || "",
      url,
      item.type || item.status || item.method || "",
      kind,
      item.richDescription
    );
  });
}

function parsedSubsection(title, description = "", items = [], rich = null) {
  return parserItem(title, description, "", "Subsection", "subsection", rich, items);
}

function richHasContent(rich) {
  return Boolean(rich?.blocks?.some((block) =>
    block.type === "image" && block.url ||
    block.type === "formula" && block.formula ||
    block.text ||
    block.title ||
    block.caption
  ));
}

function parsedItemHasContent(item) {
  if (!item) return false;
  if (item.kind === "summary") return Boolean(item.description || richHasContent(item.rich));
  const children = item.children || item.items || [];
  if (item.kind === "subsection") {
    return Boolean(item.description || item.url || richHasContent(item.rich) || children.some(parsedItemHasContent));
  }
  if (["tool", "language"].includes(item.kind)) {
    return Boolean(item.title || item.description || item.url || richHasContent(item.rich) || children.some(parsedItemHasContent));
  }
  return Boolean(item.description || item.url || richHasContent(item.rich) || children.some(parsedItemHasContent));
}

function parsedSectionHasContent(section) {
  return Boolean(section?.description || richHasContent(section?.rich) || (section?.items || []).some(parsedItemHasContent));
}

function parsedSection(id, title, items = [], description = "", rich = null) {
  const section = {
    description,
    id,
    items: items.filter(parsedItemHasContent),
    title
  };
  if (richHasContent(rich)) section.rich = clone(rich);
  return section;
}

function parsedDesignSection(project) {
  if (isAnalogProject(project)) {
    const design = ensureDesignModel(project);
    const documentationItems = [
      ...resourcesFrom(project, "documents"),
      ...resourcesFromItems(design.documentation.files, "document"),
      parsedSubsection("References", "", resourcesFromItems(design.documentation.references, "reference")),
      parsedSubsection("Math / Analysis", "", resourcesFromItems(design.documentation.mathAnalysis, "analysis"))
    ];
    const boardMediaItems = [
      ...resourcesFrom(project, "pcbs"),
      ...resourcesFrom(project, "media")
    ];
    return parsedSection("design", "Design", [
      parsedSubsection("Design Overview", design.brief.summary || "", [
        ...resourcesFromItems(design.brief.files, "document")
      ], design.brief.summaryRich),
      parsedSubsection("Documentation", design.documentation.summary || "", documentationItems, design.documentation.summaryRich),
      parsedSubsection("PCB and Visual Evidence", "", boardMediaItems)
    ]);
  }
  return parsedSection("design", "Design", [
    ...resourcesFrom(project, "documents"),
    ...resourcesFrom(project, "pcbs"),
    ...resourcesFrom(project, "media")
  ]);
}

function parsedSimulationSection(project) {
  if (!isAnalogProject(project)) return null;
  const design = ensureDesignModel(project);
  return parsedSection("simulation", "Simulation", [
    parsedSubsection("Simulation Overview", design.simulation.summary || "", [], design.simulation.summaryRich),
    parsedSubsection("Simulation Files", "", resourcesFromItems(design.simulation.files, "simulation-file")),
    parsedSubsection("Simulation Results", "", resourcesFromItems(design.simulation.results, "simulation-result"))
  ]);
}

function parsedToolsSection(project) {
  const toolItems = (project.tools || []).map((tool) => parserItem(toolName(tool), toolDescription(tool), "", "Tool", "tool", tool?.richDescription));
  const languageItems = (project.languages || []).map((language) => {
    const label = typeof language === "string" ? language : itemTitle(language);
    return parserItem(label, "", "", "Language", "language");
  });
  return parsedSection("tools", "Tools", [
    ...toolItems,
    ...languageItems,
    ...resourcesFrom(project, "links")
  ]);
}

function parseProjectForPortfolio(project) {
  const template = projectTemplateFor(project);
  const parsedSections = sectionOptions(project).flatMap((section) => {
    if (section.id === "brief") {
      return parsedSection("brief", "Overview", [
        parserItem("Overview", project.summary || "", "", "Overview", "summary", project.summaryRich)
      ]);
    }
    if (section.id === "design") return parsedDesignSection(project);
    if (section.id === "simulation") return parsedSimulationSection(project);
    if (section.id === "tests") return parsedSection("tests", "Tests", resourcesFrom(project, "tests"));
    if (section.id === "tools") return parsedToolsSection(project);
    if (section.id.startsWith("custom:")) {
      const sectionId = section.id.replace("custom:", "");
      const custom = (project.sections || []).find((item) => item.id === sectionId);
      return parsedSection(
        `custom:${sectionId}`,
        custom?.title || section.label,
        (custom?.items || []).map((item) => item.url
          ? parserItem(item.title, item.description, item.url, item.type || item.status || "File", "file", item.richDescription)
          : parsedSubsection(
              item.title,
              item.description,
              resourcesFromItems(item.children || item.items || item.files || [], "file"),
              item.richDescription
            )),
        custom?.description || "",
        custom?.richDescription
      );
    }
    return null;
  }).filter(parsedSectionHasContent);

  return {
    ...clone(project),
    portfolioView: {
      builtAt: new Date().toISOString(),
      template: {
        group: "Appearance",
        id: projectTemplateId(project),
        label: template.label || project.templateLabel || "",
        visual: template.visual ? clone(template.visual) : projectTemplateVisual(project)
      },
      title: project.title,
      sections: parsedSections
    }
  };
}

function refreshOpenPreviews() {
  if (projectPreviewDialog?.open) {
    const project = selectedProject();
    const category = categoryById(project?.category);
    applyProjectTemplateToElement(projectPreviewDialog, project, category.accent || "#117c7a");
    projectPreviewTitle.textContent = project?.title || "Project preview";
    projectPreviewContent.innerHTML = renderProjectPortfolioPreview(project);
  }
  if (portfolioPreviewDialog?.open) {
    renderPreview();
  }
}

function saveSelectedProjectAndClose() {
  if (saveSelectedProjectToPortfolio()) {
    projectDialog.close();
  }
}

async function commitActiveProjectEdits() {
  saveVisibleRichEditors();

  if (summaryEditorProjectId) {
    return saveRichSummary();
  }

  return true;
}

async function saveAllSections(options = {}) {
  const settings = options && options.currentTarget ? {} : options;
  if (!(await commitActiveProjectEdits())) return false;
  if (funFactsInput) syncFunFactsFromInput();
  if (siteHeroTitleInput || siteHeroCopyInput || siteHeroEyebrowInput) syncSiteContentFromInputs();
  savedPortfolioCatalog.categories = clone(catalog.categories || []);
  savedPortfolioCatalog.funFacts = normalizeFunFacts(catalog.funFacts || []);
  savedPortfolioCatalog.funFactsRich = clone(catalog.funFactsRich || null);
  savedPortfolioCatalog.siteContent = clone(normalizeSiteContent(catalog.siteContent || {}));
  savedPortfolioCatalog.siteSections = (catalog.siteSections || []).filter(siteSectionRenderable).map(clone);
  savedPortfolioCatalog.projects = (catalog.projects || []).map((project) => parseProjectForPortfolio(project));
  markDraftNeedsSave();
  if (projectDialog?.open) projectDialog.close();
  if (settings.refreshOpenPreviews !== false) refreshOpenPreviews();
  setStatus(`Saved ${savedPortfolioCatalog.projects.length} project${savedPortfolioCatalog.projects.length === 1 ? "" : "s"} into the portfolio preview.`);
  return true;
}

function selectedProject() {
  return catalog.projects.find((project) => project.id === selectedProjectId) || catalog.projects[0];
}

function sectionWindowId(sectionId) {
  if (["documents", "pcbs", "media"].includes(sectionId)) return "design";
  if (["links", "highlights", "tools", "languages"].includes(sectionId)) return "tools";
  return sectionId || "brief";
}

function resetProjectWindowScroll() {
  projectWindowContent.scrollTop = 0;
  requestAnimationFrame(() => {
    projectWindowContent.scrollTop = 0;
    requestAnimationFrame(() => {
      projectWindowContent.scrollTop = 0;
    });
  });
}

function openProjectWindow(projectId, sectionId = "brief") {
  selectedProjectId = projectId;
  projectWindowTitle.dataset.projectId = projectId;
  activeSectionId = sectionWindowId(sectionId);
  projectWindowBackStack = [];
  projectWindowForwardStack = [];
  projectTitleMenu.hidden = true;
  projectDialog.removeAttribute("style");
  projectDialog.classList.remove(
    "is-draggable-dialog",
    "is-hidden-dialog",
    "is-maximized-dialog",
    "is-minimized-dialog",
    "is-resized-dialog"
  );
  delete projectDialog.dataset.restoreWindowState;
  renderAll();
  document.body.classList.add("project-window-open");
  if (!projectDialog.open) projectDialog.showModal();
  resetProjectWindowScroll();
  updateDialogWindowButtons(projectDialog);
}

function categoryById(id) {
  return catalog.categories.find((category) => category.id === id) || {};
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

function resourceLink(item, label = item.label || item.title || item.name) {
  const rawTarget = item.url || item.artifact || item.href || item.file || item.path || item.src || "";
  const target = normalizeLinkTarget(rawTarget, { assumeWeb: isWebsiteLinkItem(item, rawTarget) });

  if (!target || item.status === "planned") {
    return `<span class="resource-link muted">${label}</span>`;
  }

  return `<a class="resource-link" href="${escapeHtml(target)}"${linkAttributes(target, item)}${downloadAttribute(target, item)}>${escapeHtml(label)}</a>`;
}

function pillList(items, className = "") {
  return (items || []).map((item) => {
    const label = typeof item === "string" ? item : item.name || item.title || item.label || "";
    return `<span class="tag ${className}">${label}</span>`;
  }).join("");
}

function evidenceList(items, renderItem, emptyMessage) {
  if (!items || !items.length) return `<p class="evidence-empty">${emptyMessage}</p>`;
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
  if (!items || !items.length) return `<p class="evidence-empty">No project images have been added yet.</p>`;

  return `
    <div class="media-grid">
      ${items.map((item) => `
        <figure>
          ${item.status === "planned" ? `
            <div class="media-placeholder">${item.title}</div>
          ` : `
            <a href="${escapeHtml(normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }))}"${linkAttributes(item.url, item)}>
              <img src="${escapeHtml(normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }))}" alt="${escapeHtml(item.title)}">
            </a>
          `}
          <figcaption>
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.caption || "")}</span>
          </figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function itemTitle(item) {
  if (typeof item === "string") return item;
  return item?.title || item?.name || item?.label || "Untitled item";
}

function itemUrl(item) {
  return item?.url || item?.artifact || "";
}

function itemDescription(item) {
  return item?.description || item?.caption || item?.result || item?.method || "";
}

function isImageUrl(url) {
  return /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(url || "");
}

function portfolioLink(url, label) {
  if (!url) return `<span>${label}</span>`;
  const target = normalizeLinkTarget(url, { assumeWeb: true });
  return `<a href="${escapeHtml(target)}"${linkAttributes(target)}${downloadAttribute(target)}>${escapeHtml(label)}</a>`;
}

function renderPortfolioResourceList(title, items, emptyMessage) {
  return `
    <section class="portfolio-preview-section">
      <h3>${title}</h3>
      ${(items || []).length ? `
        <div class="portfolio-resource-list">
          ${items.map((item) => {
            const titleText = itemTitle(item);
            const url = itemUrl(item);
            const description = itemDescription(item);
            return `
              <article class="portfolio-resource">
                <strong>${portfolioLink(url, titleText)}</strong>
                ${description ? `<p>${description}</p>` : ""}
              </article>
            `;
          }).join("")}
        </div>
      ` : `<p class="evidence-empty">${emptyMessage}</p>`}
    </section>
  `;
}

function renderPortfolioMedia(items) {
  return `
    <section class="portfolio-preview-section">
      <h3>Images</h3>
      ${(items || []).length ? `
        <div class="portfolio-media-grid">
          ${items.map((item) => {
            const url = itemUrl(item);
            return `
              <figure>
                ${isImageUrl(url) ? `<img src="${url}" alt="${itemTitle(item)}">` : `<div class="media-placeholder">${itemTitle(item)}</div>`}
                <figcaption>
                  <strong>${itemTitle(item)}</strong>
                  ${itemDescription(item) ? `<span>${itemDescription(item)}</span>` : ""}
                </figcaption>
              </figure>
            `;
          }).join("")}
        </div>
      ` : `<p class="evidence-empty">No images have been added yet.</p>`}
    </section>
  `;
}

function renderPortfolioTools(project) {
  return `
    <section class="portfolio-preview-section">
      <h3>Tools</h3>
      ${(project.tools || []).length ? `
        <div class="portfolio-tool-list">
          ${project.tools.map((tool) => `
            <article>
              <strong>${toolName(tool)}</strong>
              ${toolDescription(tool) ? `<p>${toolDescription(tool)}</p>` : ""}
            </article>
          `).join("")}
        </div>
      ` : `<p class="evidence-empty">No tools have been added yet.</p>`}
    </section>
  `;
}

function renderPortfolioCustomSections(project) {
  return (project.sections || []).map((section) => `
    <section class="portfolio-preview-section">
      <h3>${section.title}</h3>
      ${section.description ? `<p>${section.description}</p>` : ""}
      ${(section.items || []).length ? `
        <div class="portfolio-resource-list">
          ${section.items.map((item) => `
            <article class="portfolio-resource">
              <strong>${portfolioLink(item.url, item.title || "Untitled subsection")}</strong>
              ${item.description ? `<p>${item.description}</p>` : ""}
            </article>
          `).join("")}
        </div>
      ` : `<p class="evidence-empty">No content has been added yet.</p>`}
    </section>
  `).join("");
}

function publicCustomSectionBlocks(project) {
  return (project.sections || []).map((section) => detailBlock(section.title, "evidence-block evidence-wide", `
    ${section.description ? `<p class="evidence-empty">${renderMultilineInlineText(section.description)}</p>` : ""}
    ${evidenceList(section.items || [], (item) => `
      <li>
        ${item.url ? resourceLink(item, item.title) : `<strong>${item.title}</strong>`}
        <span>${item.type || "Section item"} &middot; ${item.status || "tracked"}</span>
        ${item.description ? `<p>${renderMultilineInlineText(item.description)}</p>` : ""}
      </li>
    `, "No content has been added yet.")}
  `)).join("");
}

function renderProjectPortfolioPreview(project) {
  if (!project) return `<p class="evidence-empty">Select a project first.</p>`;
  if (project.portfolioView) {
    const briefSection = (project.portfolioView.sections || []).find((section) => section.id === "brief");
    const otherSections = (project.portfolioView.sections || []).filter((section) => section.id !== "brief" && previewSectionHasRenderableContent(section));
    return `
      <article class="portfolio-preview-article">
        <header>
          ${renderParsedBriefBlock(briefSection, project.summary)}
        </header>
        <div class="evidence-grid">
          ${otherSections.map((section, index) => parsedPublicSection(section, index)).join("")}
        </div>
      </article>
    `;
  }
  return `
    <article class="portfolio-preview-article">
      <header>
        <div class="project-brief-default">
          <h4>Overview</h4>
          ${project.summary ? `<p class="rich-paragraph">${renderMultilineInlineText(project.summary)}</p>` : `<p class="evidence-empty">No project overview has been added yet.</p>`}
        </div>
      </header>
      ${renderPortfolioResourceList("Documents", project.documents, "No documents have been added yet.")}
      ${renderPortfolioResourceList("Tests", project.tests, "No tests have been added yet.")}
      ${renderPortfolioResourceList("PCBs Built", project.pcbs, "No PCB files have been added yet.")}
      ${renderPortfolioMedia(project.media)}
      ${renderPortfolioTools(project)}
      ${renderPortfolioResourceList("Languages", (project.languages || []).map((item) => ({ title: typeof item === "string" ? item : itemTitle(item) })), "No languages have been added yet.")}
      ${renderPortfolioResourceList("Links", project.links, "No links have been added yet.")}
      ${renderPortfolioCustomSections(project)}
    </article>
  `;
}

function openProjectPortfolioPreview() {
  const project = selectedProject();
  const savedProject = (savedPortfolioCatalog.projects || []).find((item) => item.id === project?.id);
  const previewProject = savedProject || project;
  activeProjectPreviewProject = previewProject;
  activeProjectPreviewSectionIndex = -1;
  activeProjectPreviewPath = [];
  activeProjectPreviewForwardStack = [];
  updateProjectPreviewNavigation();
  const category = categoryById(previewProject?.category);
  applyProjectTemplateToElement(projectPreviewDialog, previewProject, category.accent || "#117c7a");
  projectPreviewTitle.textContent = previewProject?.title || "Project preview";
  projectPreviewContent.innerHTML = renderProjectPortfolioPreview(previewProject);
  document.body.classList.add("full-window-open");
  projectPreviewDialog.showModal();
  projectPreviewDialog.scrollTop = 0;
}

function updateProjectPreviewNavigation() {
  projectPreviewBack.hidden = activeProjectPreviewSectionIndex < 0;
  projectPreviewForward.hidden = !activeProjectPreviewForwardStack.length;
  updateDialogWindowButtons(projectPreviewDialog);
}

function openProjectPreviewNode(sectionIndex, path = [], options = {}) {
  if (!activeProjectPreviewProject?.portfolioView) return;
  const sections = (activeProjectPreviewProject.portfolioView.sections || []).filter((section) => section.id !== "brief" && previewSectionHasRenderableContent(section));
  const section = sections[Number(sectionIndex)];
  if (!section) return;
  const node = path.length ? previewNodeAtPath(section, path) : section;
  if (!node) return;
  if (path.length ? !parsedItemHasContent(node) : !previewSectionHasRenderableContent(section)) return;

  activeProjectPreviewSectionIndex = Number(sectionIndex);
  activeProjectPreviewPath = path;
  if (!options.preserveForward) activeProjectPreviewForwardStack = [];
  updateProjectPreviewNavigation();
  projectPreviewTitle.textContent = displayTitle(node.title || section.title, "Section");
  projectPreviewContent.innerHTML = `
    <article class="portfolio-preview-article">
      <section class="portfolio-preview-section">
        ${parsedPublicSectionContent(section, Number(sectionIndex), path)}
      </section>
    </article>
  `;
  projectPreviewDialog.scrollTop = 0;
}

function projectPreviewBackStep() {
  if (!activeProjectPreviewProject) return;
  if (!activeProjectPreviewPath.length) {
    if (activeProjectPreviewSectionIndex >= 0) {
      activeProjectPreviewForwardStack.push({
        path: activeProjectPreviewPath.slice(),
        sectionIndex: activeProjectPreviewSectionIndex
      });
    }
    projectPreviewTitle.textContent = activeProjectPreviewProject.title || "Project preview";
    projectPreviewContent.innerHTML = renderProjectPortfolioPreview(activeProjectPreviewProject);
    activeProjectPreviewSectionIndex = -1;
    activeProjectPreviewPath = [];
    updateProjectPreviewNavigation();
    return;
  }
  activeProjectPreviewForwardStack.push({
    path: activeProjectPreviewPath.slice(),
    sectionIndex: activeProjectPreviewSectionIndex
  });
  const nextPath = activeProjectPreviewPath.slice(0, -1);
  openProjectPreviewNode(activeProjectPreviewSectionIndex, nextPath, { preserveForward: true });
}

function projectPreviewForwardStep() {
  if (!activeProjectPreviewProject || !activeProjectPreviewForwardStack.length) return;
  const next = activeProjectPreviewForwardStack.pop();
  openProjectPreviewNode(next.sectionIndex, next.path, { preserveForward: true });
}

function closeOrStepBackProjectPreview() {
  if (activeProjectPreviewProject && (activeProjectPreviewSectionIndex >= 0 || activeProjectPreviewPath.length)) {
    projectPreviewBackStep();
    return;
  }
  closeProjectPreviewWindow();
}

function closeProjectPreviewWindow() {
  activeProjectPreviewProject = null;
  activeProjectPreviewSectionIndex = -1;
  activeProjectPreviewPath = [];
  activeProjectPreviewForwardStack = [];
  projectPreviewDialog.close();
}

function publicProjectCard(project) {
  if (project.portfolioView) return parsedPublicProjectCard(project);
  const category = categoryById(project.category);
  const accent = category.accent || "#117c7a";

  return `
    <article class="project-card catalog-card ${projectTemplateClass(project)}" id="${project.id}" style="${projectTemplateStyle(project, accent)}">
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.summary || ""}</p>

        ${project.highlights && project.highlights.length ? detailBlock("Project highlights", "project-drawer", `
          <ul class="highlight-list">
            ${project.highlights.map((item) => `<li>${typeof item === "string" ? item : itemTitle(item)}</li>`).join("")}
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
          ${publicCustomSectionBlocks(project)}
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

function previewPathToString(path = []) {
  return path.join(".");
}

function previewPathFromString(value = "") {
  if (!value) return [];
  return value.split(".").map((item) => Number(item)).filter((item) => Number.isInteger(item));
}

function previewNodeAtPath(section, path = []) {
  let node = section;
  let children = section?.items || [];
  for (const index of path) {
    node = children[index];
    if (!node) return null;
    children = node.children || [];
  }
  return node;
}

function previewNodeChildren(node) {
  return node?.items || node?.children || [];
}

function previewSectionHasRenderableContent(section) {
  return Boolean(section?.description || richHasContent(section?.rich) || (section?.items || []).some(parsedItemHasContent));
}

function previewNodeSummary(title, rich, text, emptyMessage = "No summary has been added yet.") {
  if (!rich?.blocks?.length && !text) return "";
  return `
    <details class="parsed-summary" open>
      <summary>${escapeHtml(title)}</summary>
      ${renderRichContent(rich, text || "")}
    </details>
  `;
}

function previewNodeIsOverview(item = {}) {
  const title = normalize(displayTitle(item.title || item.label || ""));
  return item.kind === "summary" || title === "overview" || title.endsWith(" overview");
}

function previewNodeOverviewDetails(node, children = []) {
  const overviewItems = children.filter(previewNodeIsOverview);
  const blocks = [];
  if (node?.rich?.blocks?.length || node?.description) {
    blocks.push(renderRichContent(node.rich, node.description || ""));
  }
  overviewItems.forEach((item) => {
    if (item.rich?.blocks?.length || item.description) blocks.push(renderRichContent(item.rich, item.description || ""));
    const itemFiles = previewFileList(previewNodeChildren(item));
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

function previewNodeCard(node, sectionIndex, path) {
  const title = displayTitle(node.title);
  return `
    <button class="section-open-card subsection-open-card" type="button" data-preview-section-index="${sectionIndex}" data-preview-resource-path="${previewPathToString(path)}">
      <span>${escapeHtml(title)}</span>
    </button>
  `;
}

function previewChildCards(children, sectionIndex, basePath = []) {
  const visibleChildren = children.filter((child) => parsedItemHasContent(child) && !child.url && !previewNodeIsOverview(child));
  if (!visibleChildren.length) return "";
  return `
    <div class="subsection-grid section-content-grid">
      ${children.map((child, index) => parsedItemHasContent(child) && !child.url && !previewNodeIsOverview(child) ? previewNodeCard(child, sectionIndex, [...basePath, index]) : "").join("")}
    </div>
  `;
}

function previewFileList(children = []) {
  const files = children.filter((child) => child?.url);
  if (!files.length) return "";
  return `
    <div class="section-file-list">
      ${files.map((file) => `
        <a
          class="section-file-link"
          href="${escapeHtml(normalizeLinkTarget(file.url, { assumeWeb: isWebsiteLinkItem(file, file.url) }))}"
          ${linkAttributes(file.url, file)}
          ${downloadAttribute(file.url, file)}
        >
          ${escapeHtml(file.title || "Open link")}
        </a>
      `).join("")}
    </div>
  `;
}

function previewNodeContent(node, sectionIndex, path = []) {
  const isContainer = !node.kind || node.kind === "subsection";
  if (!isContainer && node.url) return previewFileList([node]);
  const children = previewNodeChildren(node);
  const contentChildren = children.filter((child) => !previewNodeIsOverview(child));
  return `
    <article class="parsed-window-panel section-directory">
    ${previewNodeOverviewDetails(node, children)}
    ${previewChildCards(children, sectionIndex, path)}
    ${previewFileList(contentChildren)}
    </article>
  `;
}

function parsedPublicSectionContent(section, sectionIndex = 0, path = []) {
  const node = path.length ? previewNodeAtPath(section, path) : section;
  if (!node) return `<p class="evidence-empty">This section could not be found.</p>`;
  return previewNodeContent(node, sectionIndex, path);
}

function parsedPublicSection(section, index = 0) {
  const visibleItems = (section.items || []).filter(parsedItemHasContent);
  const hasImages = visibleItems.some((item) => item.kind === "image");
  return `
    <button class="section-open-card evidence-block ${hasImages ? "evidence-wide" : ""}" type="button" data-preview-section-index="${index}">
      <span>${escapeHtml(displayTitle(section.title, "Section"))}</span>
    </button>
  `;
}

function parsedPublicProjectCard(project) {
  const category = categoryById(project.category);
  const accent = category.accent || "#117c7a";
  const view = project.portfolioView;
  const briefSection = (view.sections || []).find((section) => section.id === "brief");
  const otherSections = (view.sections || []).filter((section) => section.id !== "brief" && previewSectionHasRenderableContent(section));

  return `
    <article class="project-card catalog-card ${projectTemplateClass(project)}" id="${project.id}" style="${projectTemplateStyle(project, accent)}">
      <div class="project-body">
        <h3>${view.title || project.title}</h3>
        ${renderParsedBriefBlock(briefSection, project.summary)}
        <div class="evidence-grid" aria-label="${project.title} parsed project content">
          ${otherSections.map((section, index) => parsedPublicSection(section, index)).join("")}
        </div>
      </div>
    </article>
  `;
}

function publicCategorySection(category, visibleProjects) {
  return `
    <section class="category-section ${visibleProjects.length ? "" : "empty-category-section"}" aria-labelledby="${category.id}-preview-title">
      <div class="category-heading">
        <div>
          <h3 id="${category.id}-preview-title">${category.label}</h3>
        </div>
        ${visibleProjects.length ? `<span>${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"}</span>` : ""}
      </div>
      ${visibleProjects.length ? `<p class="category-description">${category.description}</p>` : ""}
      <div class="category-projects">
        ${visibleProjects.map(publicProjectCard).join("")}
      </div>
    </section>
  `;
}

function renderedPublicProjects() {
  if (!savedPortfolioCatalog.projects.length) {
    return `
      <div class="empty-state">
        <h3>No parsed projects saved yet.</h3>
        <p>Open a project, edit it, then click Save to build it into this portfolio preview.</p>
      </div>
    `;
  }
  return savedPortfolioCatalog.categories.map((category) => {
    const categoryProjects = savedPortfolioCatalog.projects.filter((project) => project.category === category.id);
    return publicCategorySection(category, categoryProjects);
  }).join("");
}

function sectionControls(sectionId, uploadKey = "", folder = "") {
  return `
    <div class="local-section-controls">
      <button type="button" title="Edit this section" data-preview-section="${sectionId}">Edit</button>
      ${uploadKey ? `<button type="button" title="Add file or image" data-preview-upload="${uploadKey}" data-folder="${folder}">+</button>` : ""}
    </div>
  `;
}

function customSectionBlocks(project) {
  return (project.sections || []).map((section) => detailBlock(section.title, "evidence-block evidence-wide", `
    ${sectionControls(`custom:${section.id}`, "sections", section.id)}
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

function projectCard(project, isSelected = false) {
  const category = categoryById(project.category);
  const accent = category.accent || "#117c7a";

  return `
    <article class="project-card catalog-card ${projectTemplateClass(project)} ${isSelected ? "preview-project-card" : ""}" id="${project.id}" style="${projectTemplateStyle(project, accent)}">
      <div class="project-body">
        <div class="local-card-controls">
          <button type="button" title="Open project" data-preview-project="${project.id}">Open</button>
          <button type="button" title="Delete project" data-preview-delete="${project.id}">Delete</button>
        </div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>

        ${project.highlights && project.highlights.length ? detailBlock("Project highlights", "project-drawer", `
          <ul class="highlight-list">
            ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        `) : ""}

        <div class="evidence-grid" aria-label="${project.title} evidence blocks">
          ${detailBlock("Documents", "evidence-block", `
            ${sectionControls("documents", "documents", "documents")}
            ${evidenceList(project.documents, (item) => `
            <li>
              ${resourceLink(item, item.title)}
              <span>${item.type || "Document"} &middot; ${item.status || "tracked"}</span>
            </li>
          `, "No document artifact has been added yet.")}
          `)}

          ${detailBlock("Tests and results", "evidence-block", `
            ${sectionControls("tests", "tests", "tests")}
            ${evidenceList(project.tests, (item) => `
            <li>
              ${resourceLink({ url: item.artifact, status: item.status }, item.name)}
              <span>${item.method || "Validation"} &middot; ${item.status || "tracked"}</span>
              ${item.result ? `<p>${item.result}</p>` : ""}
            </li>
          `, "No test artifact has been added yet.")}
          `)}

          ${detailBlock("PCBs built", "evidence-block", `
            ${sectionControls("pcbs", "pcbs", "pcbs")}
            ${evidenceList(project.pcbs, (item) => `
            <li>
              ${resourceLink({ url: item.artifact, status: item.status }, item.name)}
              <span>${item.revision || "Revision"} &middot; ${item.status || "tracked"}</span>
            </li>
          `, "No PCB build has been added yet.")}
          `)}

          ${detailBlock("Images", "evidence-block evidence-wide", `
            ${sectionControls("media", "media", "images")}
            ${mediaGrid(project.media)}
          `)}
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

function buildTemplateProject() {
  const template = templates.find((item) => item.id === templateSelect.value) || null;
  const title = newProjectTitle.value.trim() || "New Hardware Project";
  const id = slugify(title);
  const category = newCategorySelect.value || pendingCreateCategoryId || "analog-mixed-signal";

  return {
    id,
    title,
    templateId: template?.id || "",
    templateLabel: template?.label || "",
    templateGroup: "Appearance",
    templateVisual: template?.visual ? clone(template.visual) : null,
    category,
    status: "Draft",
    summary: "",
    summaryRich: null,
    focus: [],
    highlights: [],
    documents: [],
    tests: [],
    pcbs: [],
    media: [],
    tools: [],
    languages: [],
    links: [],
    sections: [],
    design: category === "analog-mixed-signal" ? defaultDesignModel() : undefined
  };
}

function insertProject(project) {
  const nextProjects = catalog.projects.filter((item) => item.id !== project.id);
  const placement = placementSelect.value;

  if (placement === "site-start") return [project, ...nextProjects];
  if (placement === "site-end") return [...nextProjects, project];

  const indexes = nextProjects
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item.category === project.category)
    .map(({ index }) => index);

  if (!indexes.length) return [...nextProjects, project];
  const targetIndex = placement === "category-start" ? indexes[0] : indexes[indexes.length - 1] + 1;
  nextProjects.splice(targetIndex, 0, project);
  return nextProjects;
}

function renderCategoryDropdown() {
  categoryDropdown.innerHTML = catalog.categories.map((category) => `
    <button type="button" data-create-category="${category.id}" style="--category-accent: ${category.accent || "#117c7a"}">
      <span>${category.label}</span>
      <small>${category.description}</small>
    </button>
  `).join("");
}

function toggleCategoryDropdown(forceOpen = null) {
  const open = forceOpen === null ? categoryDropdown.hidden : forceOpen;
  categoryDropdown.hidden = !open;
  addProjectButton.setAttribute("aria-expanded", String(open));
}

function createProjectInCategory(categoryId) {
  newCategorySelect.value = categoryId;
  const project = buildTemplateProject();
  catalog.projects = insertProject(project);
  selectedProjectId = project.id;
  activeSectionId = "brief";
  expandedCategories.add(categoryId);
  toggleCategoryDropdown(false);
  setStatus(`Project added locally in ${categoryById(categoryId).label || categoryId}. Click Save project to include it in the portfolio preview.`);
  scheduleAutosave();
  renderAll();
  openProjectWindow(project.id, "brief");
}

function openProjectCreateDialog(categoryId) {
  pendingCreateCategoryId = categoryId;
  newCategorySelect.value = categoryId;
  const category = categoryById(categoryId);
  projectCreateCategory.textContent = category.label || "Project category";
  templateSelect.innerHTML = groupedTemplateOptions();
  templateSelect.value = "";
  newProjectTitle.value = "";
  toggleCategoryDropdown(false);
  projectCreateDialog.showModal();
}

function groupedTemplateOptions() {
  const emptyOption = `<option value="">No appearance - white project layout</option>`;
  const options = templates
    .map((template) => `<option value="${template.id}">${template.label}</option>`)
    .join("");
  return `${emptyOption}${options}`;
}

function showTemplatePreview(template) {
  if (!template) return;
  const visual = template.visual || {};
  const palette = visual.palette || ["#0f4c5c", "#7dd3c7", "#ffffff"];

  templatePreviewGroup.textContent = visual.style ? `Appearance / ${visual.style}` : "Appearance";
  templatePreviewTitle.textContent = template.label;
  templatePreviewDescription.textContent = template.description || "";
  templatePreviewCardTitle.textContent = template.label;
  templatePreviewInteraction.textContent = visual.interaction || "Hover and click styles are shown in the local builder.";
  templatePreviewCard.style.setProperty("--template-primary", palette[0]);
  templatePreviewCard.style.setProperty("--template-hover", palette[1]);
  templatePreviewCard.style.setProperty("--template-paper", palette[2] || "#ffffff");
  templatePreviewCard.style.setProperty("--template-bg", visual.background || palette[0]);
  templatePreviewCard.style.setProperty("--template-panel", visual.panel || palette[2] || "#ffffff");
  templatePreviewCard.style.setProperty("--template-accent", visual.accent || palette[1]);
  templatePreviewCard.style.setProperty("--template-click", visual.click || palette[2] || "#ffffff");
  templatePreviewCard.style.setProperty("--template-click-text", visual.clickText || visual.text || "#172636");
  templateVisual.className = `template-visual template-visual-${visual.style || "schematic"}`;
  templatePalette.innerHTML = palette.map((color) => `<span style="background: ${color}">${color}</span>`).join("");
  templateDialog.showModal();
}

function renderTree() {
  projectTree.innerHTML = catalog.categories.map((category) => {
    const categoryProjects = catalog.projects.filter((project) => project.category === category.id);
    const isExpanded = expandedCategories.has(category.id);
    return `
      <section class="tree-category">
        <div class="tree-category-heading">
          <button class="tree-category-toggle" type="button" data-toggle-category="${category.id}" aria-expanded="${isExpanded}">
            <span>${category.label}</span>
            <small>${categoryProjects.length} project${categoryProjects.length === 1 ? "" : "s"}</small>
          </button>
        </div>
        <div class="tree-projects" ${isExpanded ? "" : "hidden"}>
          ${categoryProjects.length ? categoryProjects.map((project) => `
            <div class="tree-project-row ${project.id === selectedProjectId ? "active" : ""}">
              <button type="button" data-project-id="${project.id}">
                <span>${project.title}</span>
              </button>
              <button class="tree-project-delete" type="button" data-delete-project="${project.id}" aria-label="Delete ${project.title}" title="Delete project">
                &times;
              </button>
            </div>
          `).join("") : `<p class="tree-empty">No projects added yet.</p>`}
        </div>
      </section>
    `;
  }).join("");
}

function summaryWordCount(project) {
  return wordCount(project?.summaryRich?.blocks?.length ? plainTextFromRich(project.summaryRich) : project?.summary || "");
}

function renderSummaryPreview(project) {
  if (project.summaryRich?.blocks?.length) return renderRichContent(project.summaryRich, project.summary || "");
  if (project.summary) return `<p class="rich-paragraph">${renderMultilineInlineText(project.summary)}</p>`;
  return `<p class="evidence-empty">No project overview has been added yet.</p>`;
}

function renderSummaryBuilder(project) {
  const isEditing = summaryEditorProjectId === project.id;
  const summaryWords = summaryWordCount(project);
  const hasSummary = summaryWords > 0 || Boolean(project.summaryRich?.blocks?.length);
  return `
    <div class="summary-builder wide-field">
      <div class="summary-builder-heading">
        <div>
          <span>Project overview <small>${summaryWords}/1000 words</small></span>
        </div>
        <div class="summary-builder-actions">
          ${isEditing
            ? `<button class="button secondary" type="button" data-summary-cancel="true">Cancel overview</button>`
            : `<button class="button primary" type="button" data-summary-create="true">${hasSummary ? "Edit overview" : "Create overview"}</button>`}
          ${hasSummary && !isEditing ? `<button class="button danger-control" type="button" data-summary-delete="true">Delete overview</button>` : ""}
        </div>
      </div>
      ${isEditing ? `
        <div class="rich-summary-panel">
          <p class="rich-editor-hint">Right-click text or an inserted block for formatting, images, formulas, alignment, and delete controls.</p>
          <div class="rich-summary-editor" data-rich-editor="summary" data-placeholder="Click anywhere and start writing the project overview." contenteditable="true" spellcheck="true" aria-label="Rich overview editor"></div>
          <div class="summary-save-actions">
            <button class="button primary" type="button" data-summary-save="true">Save overview</button>
          </div>
        </div>
      ` : `<div class="summary-rendered-preview">${renderSummaryPreview(project)}</div>`}
    </div>
  `;
}

function applyRichTextBlockStyle(block) {
    const fontFamily = cleanFontFamily(block.dataset.fontFamily || "Arial") || "Arial";
    const fontPx = normalizeFontPx(block.dataset.fontPx || "");
    const color = normalizeTextColor(block.dataset.color || "");

    block.style.fontFamily = fontFamily || "";
    block.style.fontSize = fontPx ? `${fontPx}px` : "";
    block.style.color = color || "";
    block.style.fontWeight = block.dataset.bold === "true" ? "700" : "";
}

function createRichTextBlock(text = "", fontSize = "normal", align = "left", fontFamily = "Arial", fontPx = "", color = "", bold = false, html = "") {
    const block = document.createElement("p");
    block.className = `rich-block rich-text-block rich-text-${fontSize} text-${align}`;
    block.dataset.type = "paragraph";
    block.dataset.fontSize = fontSize;
    block.dataset.align = align;
    block.dataset.fontFamily = cleanFontFamily(fontFamily || "Arial") || "Arial";
    block.dataset.fontPx = normalizeFontPx(fontPx);
    block.dataset.color = normalizeTextColor(color);
    block.dataset.bold = bold ? "true" : "false";
    block.spellcheck = true;
    if (html) block.innerHTML = sanitizeRichInlineHtml(html);
    else block.textContent = text;
    applyRichTextBlockStyle(block);
    return block;
}

function richBlockActions(label = "block", options = {}) {
  return `
    <div class="rich-block-actions">
      ${options.movable ? `<button class="rich-drag-handle" type="button" draggable="true" data-rich-drag-handle aria-label="Move ${escapeHtml(label)}">Move</button>` : ""}
      <button type="button" data-rich-block-action="edit" aria-label="Edit ${escapeHtml(label)}">Edit</button>
      <button class="danger-icon" type="button" data-rich-block-action="delete" aria-label="Delete ${escapeHtml(label)}">Delete</button>
    </div>
  `;
}

function createRichImageBlock(blockData) {
  const figure = document.createElement("figure");
  const align = blockData.align || "center";
  const title = cleanRichImageTitle(blockData);
  figure.className = `rich-block rich-image-block justify-${align}`;
  figure.dataset.type = "image";
  figure.dataset.url = blockData.url || "";
  figure.dataset.title = blockData.title || "";
  figure.dataset.caption = blockData.caption || "";
  figure.dataset.align = align;
  figure.dataset.display = blockData.display === "download" ? "download" : "show";
  figure.dataset.cropAspect = normalizeCropAspect(blockData.cropAspect);
  figure.dataset.cropZoom = String(normalizeCropZoom(blockData.cropZoom));
  figure.dataset.cropX = String(normalizeCropPosition(blockData.cropX));
  figure.dataset.cropY = String(normalizeCropPosition(blockData.cropY));
  figure.contentEditable = "false";
  figure.innerHTML = `
    <button class="rich-image-caret rich-image-caret-before" type="button" data-rich-caret="before">Type before</button>
    ${richBlockActions("overview image", { movable: true })}
    ${figure.dataset.display === "download" ? `<span class="rich-download-badge">Download only</span>` : ""}
    <span class="rich-image-viewport crop-${figure.dataset.cropAspect === "original" ? "original" : "active"}"${richImageCropStyle(blockData)}>
      <img src="${escapeHtml(blockData.url)}" alt="${escapeHtml(title || "Overview image")}">
    </span>
    ${(title || blockData.caption) ? `<figcaption>${title ? `<strong>${escapeHtml(title)}</strong>` : ""}${blockData.caption ? `<span>${escapeHtml(blockData.caption)}</span>` : ""}</figcaption>` : ""}
    <button class="rich-image-caret rich-image-caret-after" type="button" data-rich-caret="after">Type after</button>
  `;
  return figure;
}

function createRichFormulaBlock(blockData) {
  const block = document.createElement("div");
  const align = blockData.align || "center";
  block.className = `rich-block rich-formula-block justify-${align}`;
  block.dataset.type = "formula";
  block.dataset.formula = unwrapFormula(blockData.formula || "");
  block.dataset.align = align;
  block.contentEditable = "false";
  block.innerHTML = `
    ${richBlockActions("formula")}
    <span class="formula-text">${escapeHtml(unwrapFormula(blockData.formula || ""))}</span>
  `;
  return block;
}

function refreshRichImageBlock(block, blockData) {
  const align = blockData.align || block.dataset.align || "center";
  block.dataset.url = blockData.url || block.dataset.url || "";
  block.dataset.title = blockData.title || "";
  block.dataset.caption = blockData.caption || "";
  block.dataset.align = align;
  block.dataset.display = blockData.display === "download" ? "download" : "show";
  block.dataset.cropAspect = normalizeCropAspect(blockData.cropAspect || block.dataset.cropAspect);
  block.dataset.cropZoom = String(normalizeCropZoom(blockData.cropZoom || block.dataset.cropZoom));
  block.dataset.cropX = String(normalizeCropPosition(blockData.cropX ?? block.dataset.cropX));
  block.dataset.cropY = String(normalizeCropPosition(blockData.cropY ?? block.dataset.cropY));
  block.classList.remove("justify-left", "justify-center", "justify-right");
  block.classList.add(`justify-${align}`);
  const title = cleanRichImageTitle({ title: block.dataset.title });
  block.innerHTML = `
    <button class="rich-image-caret rich-image-caret-before" type="button" data-rich-caret="before">Type before</button>
    ${richBlockActions("overview image", { movable: true })}
    ${block.dataset.display === "download" ? `<span class="rich-download-badge">Download only</span>` : ""}
    <span class="rich-image-viewport crop-${block.dataset.cropAspect === "original" ? "original" : "active"}"${richImageCropStyle({
      cropAspect: block.dataset.cropAspect,
      cropZoom: block.dataset.cropZoom,
      cropX: block.dataset.cropX,
      cropY: block.dataset.cropY
    })}>
      <img src="${escapeHtml(block.dataset.url)}" alt="${escapeHtml(title || "Overview image")}">
    </span>
    ${(title || block.dataset.caption) ? `<figcaption>${title ? `<strong>${escapeHtml(title)}</strong>` : ""}${block.dataset.caption ? `<span>${escapeHtml(block.dataset.caption)}</span>` : ""}</figcaption>` : ""}
    <button class="rich-image-caret rich-image-caret-after" type="button" data-rich-caret="after">Type after</button>
  `;
}

function refreshRichFormulaBlock(block, blockData) {
  const align = blockData.align || block.dataset.align || "center";
  const formula = unwrapFormula(blockData.formula || block.dataset.formula || "");
  block.dataset.formula = formula;
  block.dataset.align = align;
  block.classList.remove("justify-left", "justify-center", "justify-right");
  block.classList.add(`justify-${align}`);
  block.innerHTML = `
    ${richBlockActions("formula")}
    <span class="formula-text">${escapeHtml(formula)}</span>
  `;
}

function createRichBlockElement(block) {
    if (block.type === "image") return createRichImageBlock(block);
    if (block.type === "formula") return createRichFormulaBlock(block);

    return createRichTextBlock(
        block.text || "",
        block.fontSize || "normal",
        block.align || "left",
        block.fontFamily || "Arial",
        block.fontPx || "",
        block.color || "",
        Boolean(block.bold),
        block.html || ""
    );
}

function populateSummaryEditor(project) {
    const editor = projectFields.querySelector("[data-rich-editor='summary']");
    if (!editor) return;
    populateRichEditor(editor, project);
}

function populateStandaloneRichEditor(editor, rich, fallbackText = "") {
    if (!editor) return;
    editor.contentEditable = "true";
    editor.tabIndex = 0;
    editor.spellcheck = true;
    editor.innerHTML = "";
    richBlocksFromValue(rich, fallbackText).forEach((block) => editor.append(createRichBlockElement(block)));
    if (!editor.children.length) editor.append(createRichTextBlock(""));
}

function populateRichEditor(editor, project = selectedProject()) {
    if (!editor) return;
    editor.contentEditable = "true";
    editor.tabIndex = 0;
    editor.spellcheck = true;

    if (editor.dataset.richEditor === "pending-description") {
        editor.innerHTML = "";
        richBlocksFromValue(pendingEditor?.richDescription, pendingEditor?.description || "")
          .forEach((block) => editor.append(createRichBlockElement(block)));
        if (!editor.children.length) editor.append(createRichTextBlock(""));
        return;
    }

    if (!project) return;

    editor.innerHTML = "";

    let blocks = [];

    if (editor.dataset.richEditor === "summary" && !editor.dataset.richPath) {
        blocks = richBlocksForProject(project);
    } else {
        const textPath = editor.dataset.richTextPath || "";
        const richPath = editor.dataset.richPath || "";
        blocks = richBlocksFromValue(getByPath(project, richPath), getByPath(project, textPath) || "");
    }

    blocks.forEach((block) => editor.append(createRichBlockElement(block)));
    if (!editor.children.length) editor.append(createRichTextBlock(""));
}

function populateRichEditors(root = document) {
    root.querySelectorAll("[data-rich-editor]").forEach((editor) => populateRichEditor(editor));
}

function saveRichEditorToProject(editor) {
    if (!editor) return true;

    if (editor.dataset.richEditor === "fun-facts") {
        syncFunFactsFromInput();
        setStatus("Unsaved local changes.");
        return true;
    }

    if (editor.dataset.richEditor === "standalone") {
        setStatus("Unsaved dialog changes. Use the dialog save button to keep them.");
        return true;
    }

    const project = selectedProject();

    if (editor.dataset.richEditor === "pending-description" && pendingEditor) {
        const rich = extractRichSummary(editor);
        pendingEditor.richDescription = rich;
        pendingEditor.description = plainTextFromRich(rich);
        setStatus("Unsaved local changes.");
        return true;
    }

    if (!project) return true;

    const rich = extractRichSummary(editor);
    const plain = plainTextFromRich(rich);

    if (wordCount(plain) > 1000) {
        setStatus("Overview is limited to 1000 words. Shorten the text before saving.");
        return false;
    }

    if (editor.dataset.richEditor === "summary" && !editor.dataset.richPath) {
        project.summaryRich = rich;
        project.summary = plain;
    } else {
        const textPath = editor.dataset.richTextPath;
        const richPath = editor.dataset.richPath;
        if (textPath) setByPath(project, textPath, plain);
        if (richPath) setByPath(project, richPath, rich);
    }

    setStatus("Unsaved local changes.");
    scheduleAutosave();
    schedulePreviewRender();
    return true;
}

function saveVisibleRichEditors() {
    document.querySelectorAll("[data-rich-editor]").forEach((editor) => {
        saveRichEditorToProject(editor);
    });
}

function currentRichBlock(editor) {
  const selection = window.getSelection();
  let node = selection?.anchorNode;
  if (!node || !editor.contains(node)) return editor.querySelector(".rich-block:last-child");
  if (node.nodeType === Node.TEXT_NODE) node = node.parentElement;
  return node.closest(".rich-block") || editor.querySelector(".rich-block:last-child");
}

function selectionRangeInsideEditor(editor) {
  const selection = window.getSelection();
  if (!selection?.rangeCount) return null;
  const range = selection.getRangeAt(0);
  const container = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentElement
    : range.commonAncestorContainer;
  return container && editor.contains(container) ? range.cloneRange() : null;
}

function captureRichSelection(editor) {
  const range = selectionRangeInsideEditor(editor);
  if (range) activeRichSelectionRange = range;
  return range;
}

function restoreRichSelection(editor) {
  if (!activeRichSelectionRange) return false;
  const container = activeRichSelectionRange.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? activeRichSelectionRange.commonAncestorContainer.parentElement
    : activeRichSelectionRange.commonAncestorContainer;
  if (!container || !editor.contains(container)) return false;
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(activeRichSelectionRange.cloneRange());
  showPersistentTextSelection(activeRichSelectionRange);
  return true;
}

function showPersistentTextSelection(range) {
  if (!range || range.collapsed) return;
  if (window.CSS?.highlights && typeof window.Highlight === "function") {
    window.CSS.highlights.set(persistentSelectionHighlightName, new window.Highlight(range.cloneRange()));
    if (persistentSelectionOverlay) persistentSelectionOverlay.hidden = true;
    return;
  }

  const container = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentElement
    : range.commonAncestorContainer;
  const editor = container?.closest?.("[data-rich-editor]") || activeSummaryEditor;
  const host = editor?.closest("dialog") || document.body;
  if (!persistentSelectionOverlay) {
    persistentSelectionOverlay = document.createElement("div");
    persistentSelectionOverlay.className = "persistent-selection-overlay";
    persistentSelectionOverlay.setAttribute("aria-hidden", "true");
  }
  if (persistentSelectionOverlay.parentElement !== host) host.append(persistentSelectionOverlay);
  persistentSelectionOverlay.replaceChildren();
  [...range.getClientRects()].forEach((rect) => {
    if (rect.width < 1 || rect.height < 1) return;
    const marker = document.createElement("span");
    marker.style.left = `${rect.left}px`;
    marker.style.top = `${rect.top}px`;
    marker.style.width = `${rect.width}px`;
    marker.style.height = `${rect.height}px`;
    persistentSelectionOverlay.append(marker);
  });
  persistentSelectionOverlay.hidden = !persistentSelectionOverlay.childElementCount;
}

function clearPersistentTextSelection(clearRanges = false) {
  window.CSS?.highlights?.delete?.(persistentSelectionHighlightName);
  if (persistentSelectionOverlay) {
    persistentSelectionOverlay.replaceChildren();
    persistentSelectionOverlay.hidden = true;
  }
  if (!clearRanges) return;
  activeRichSelectionRange = null;
  activeTextSelectionRange = null;
}

function refreshPersistentSelectionHighlight() {
  const range = rangeBelongsToEditor(activeTextSelectionRange, activeSummaryEditor)
    ? activeTextSelectionRange
    : rangeBelongsToEditor(activeRichSelectionRange, activeSummaryEditor)
      ? activeRichSelectionRange
      : null;
  if (range) showPersistentTextSelection(range);
}

function rangeBelongsToEditor(range, editor) {
  if (!range || range.collapsed || !editor) return false;
  const container = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentElement
    : range.commonAncestorContainer;
  return Boolean(container && editor.contains(container));
}

function displayRichFontName(value = "") {
  return String(value || "")
    .split(",")[0]
    .replace(/^['\"]|['\"]$/g, "")
    .trim() || "Arial";
}

function rgbColorToHex(value = "") {
  const color = String(value || "").trim();
  if (/^#[0-9a-f]{6}$/i.test(color)) return color.toLowerCase();
  if (/^#[0-9a-f]{3}$/i.test(color)) {
    return `#${color.slice(1).split("").map((part) => part + part).join("")}`.toLowerCase();
  }
  const match = color.match(/^rgba?\(\s*(\d+)\D+(\d+)\D+(\d+)/i);
  if (!match) return color;
  return `#${match.slice(1, 4).map((part) => Math.min(255, Number(part)).toString(16).padStart(2, "0")).join("")}`;
}

function textNodesInRichSelection(range, editor, includeWhitespace = false) {
  const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent || (!includeWhitespace && !node.textContent.trim())) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("[contenteditable='false']")) return NodeFilter.FILTER_REJECT;
      try {
        return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      } catch {
        return NodeFilter.FILTER_REJECT;
      }
    }
  });
  const nodes = [];
  let node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }
  return nodes;
}

function uniformSelectionValue(values) {
  const cleanValues = values.map((value) => String(value || "").trim()).filter(Boolean);
  if (!cleanValues.length) return "";
  return cleanValues.every((value) => value.toLowerCase() === cleanValues[0].toLowerCase())
    ? cleanValues[0]
    : "";
}

function richSelectionStyleState(range, editor) {
  const textNodes = textNodesInRichSelection(range, editor);
  const styles = textNodes.map((node) => getComputedStyle(node.parentElement || editor));
  return {
    color: uniformSelectionValue(styles.map((style) => rgbColorToHex(style.color))),
    font: uniformSelectionValue(styles.map((style) => displayRichFontName(style.fontFamily))),
    size: uniformSelectionValue(styles.map((style) => String(Math.round(parseFloat(style.fontSize) || 16))))
  };
}

function closeSelectionInspectorOptions(except = "") {
  textSelectionInspector?.querySelectorAll("[data-selection-options]").forEach((options) => {
    if (options.dataset.selectionOptions !== except) options.hidden = true;
  });
}

function positionSelectionInspector(range) {
  if (!textSelectionInspector || selectionInspectorWasMoved) return;
  const rect = range.getBoundingClientRect();
  const hostDialog = textSelectionInspector.closest("dialog");
  const hostRect = hostDialog?.getBoundingClientRect();
  const bounds = {
    bottom: Math.min(window.innerHeight - 8, (hostRect?.bottom ?? window.innerHeight) - 8),
    left: Math.max(8, (hostRect?.left ?? 0) + 8),
    right: Math.min(window.innerWidth - 8, (hostRect?.right ?? window.innerWidth) - 8),
    top: Math.max(8, (hostRect?.top ?? 0) + 8)
  };
  const inspectorRect = textSelectionInspector.getBoundingClientRect();
  const inspectorWidth = Math.min(inspectorRect.width || 310, bounds.right - bounds.left);
  const inspectorHeight = Math.min(inspectorRect.height || 260, bounds.bottom - bounds.top);
  const left = Math.max(bounds.left, Math.min(rect.left, bounds.right - inspectorWidth));
  const preferredTop = rect.bottom + 10;
  const top = preferredTop + inspectorHeight <= bounds.bottom
    ? preferredTop
    : Math.max(bounds.top, rect.top - inspectorHeight - 10);
  textSelectionInspector.style.left = `${left}px`;
  textSelectionInspector.style.top = `${top}px`;
}

function showTextSelectionInspector(editor, range) {
  if (!textSelectionInspector || !editor || !range || range.collapsed) return;
  const selectedText = range.toString().trim();
  if (!selectedText) return;
  const inspectorHost = editor.closest("dialog") || document.body;
  if (textSelectionInspector.parentElement !== inspectorHost) inspectorHost.append(textSelectionInspector);
  activeSummaryEditor = editor;
  activeRichSelectionRange = range.cloneRange();
  activeTextSelectionRange = range.cloneRange();
  showPersistentTextSelection(range);
  const state = richSelectionStyleState(range, editor);
  selectionTextPreview.textContent = selectedText.length > 120 ? `${selectedText.slice(0, 117)}...` : selectedText;
  selectionTextPreview.title = selectedText;
  selectionFontInput.value = state.font;
  selectionColorInput.value = state.color;
  selectionSizeInput.value = state.size;
  selectionFontInput.placeholder = state.font ? "" : "Mixed";
  selectionColorInput.placeholder = state.color ? "" : "Mixed";
  selectionSizeInput.placeholder = state.size ? "" : "Mixed";
  if (state.color && /^#[0-9a-f]{6}$/i.test(state.color)) selectionColorPicker.value = state.color;
  textSelectionInspector.hidden = false;
  positionSelectionInspector(range);
}

function hideTextSelectionInspector() {
  if (!textSelectionInspector) return;
  textSelectionInspector.hidden = true;
  closeSelectionInspectorOptions();
  selectionInspectorWasMoved = false;
}

function refreshTextSelectionInspector() {
  if (!textSelectionInspector || selectionInspectorPointerInside || textSelectionInspector.matches(":focus-within")) return;
  const selection = window.getSelection();
  if (!selection?.rangeCount || selection.isCollapsed) {
    if (activeTextSelectionRange && !activeTextSelectionRange.collapsed && activeSummaryEditor) {
      showTextSelectionInspector(activeSummaryEditor, activeTextSelectionRange);
      return;
    }
    hideTextSelectionInspector();
    return;
  }
  const range = selection.getRangeAt(0);
  let node = range.commonAncestorContainer;
  if (node.nodeType === Node.TEXT_NODE) node = node.parentElement;
  const editor = node?.closest?.("[data-rich-editor]");
  if (!editor) {
    hideTextSelectionInspector();
    return;
  }
  showTextSelectionInspector(editor, range);
}

function scheduleTextSelectionInspectorRefresh(delay = 0) {
  clearTimeout(selectionInspectorRefreshTimer);
  selectionInspectorRefreshTimer = setTimeout(refreshTextSelectionInspector, delay);
}

function applySelectionInspectorFormat(kind, rawValue) {
  if (!activeSummaryEditor || !activeTextSelectionRange) return;
  activeRichSelectionRange = activeTextSelectionRange.cloneRange();
  if (kind === "font") {
    const font = cleanFontFamily(rawValue);
    if (!font) return;
    selectionFontInput.value = font;
    applyRichInlineCommand(activeSummaryEditor, "fontName", font);
  }
  if (kind === "color") {
    const color = normalizeTextColor(rawValue);
    if (!color) return;
    const normalized = rgbColorToHex(color);
    selectionColorInput.value = normalized;
    if (/^#[0-9a-f]{6}$/i.test(normalized)) selectionColorPicker.value = normalized;
    applyRichInlineCommand(activeSummaryEditor, "foreColor", normalized);
  }
  if (kind === "size") {
    const size = normalizeFontPx(rawValue);
    if (!size) return;
    selectionSizeInput.value = size;
    applyRichInlineCommand(activeSummaryEditor, "fontSize", size);
  }
  closeSelectionInspectorOptions();
  requestAnimationFrame(() => {
    if (activeRichSelectionRange && activeSummaryEditor) {
      activeTextSelectionRange = activeRichSelectionRange.cloneRange();
      showTextSelectionInspector(activeSummaryEditor, activeRichSelectionRange);
    }
  });
}

function renderSelectionInspectorOptions() {
  const fontOptions = textSelectionInspector?.querySelector("[data-selection-options='font']");
  const sizeOptions = textSelectionInspector?.querySelector("[data-selection-options='size']");
  if (fontOptions) {
    fontOptions.innerHTML = commonRichFonts.map((font) => `<button type="button" data-selection-value="font" data-value="${escapeHtml(font)}" style="font-family: ${escapeHtml(font)}">${escapeHtml(font)}</button>`).join("");
  }
  if (sizeOptions) {
    sizeOptions.innerHTML = commonRichSizes.map((size) => `<button type="button" data-selection-value="size" data-value="${size}">${size} px</button>`).join("");
  }
  if (selectionColorSwatches) {
    selectionColorSwatches.innerHTML = commonRichColors.map((color) => `<button type="button" data-selection-value="color" data-value="${color}" style="--selection-swatch: ${color}" aria-label="Use ${color}"></button>`).join("");
  }
}

function applyStyleToRichSelection(editor, range, command, value = "") {
  const nodes = textNodesInRichSelection(range, editor, true);
  if (!nodes.length) return null;
  const makeBold = command === "bold"
    ? !nodes.every((node) => Number.parseInt(getComputedStyle(node.parentElement || editor).fontWeight, 10) >= 600)
    : false;
  const formattedNodes = [];

  nodes.forEach((node) => {
    const length = node.textContent?.length || 0;
    let start = node === range.startContainer ? range.startOffset : 0;
    let end = node === range.endContainer ? range.endOffset : length;
    start = Math.max(0, Math.min(start, length));
    end = Math.max(start, Math.min(end, length));
    if (start === end) return;

    if (end < length) node.splitText(end);
    const selectedNode = start > 0 ? node.splitText(start) : node;
    const wrapper = document.createElement("span");
    wrapper.className = "rich-inline-style";
    wrapper.style.display = "inline";
    if (command === "fontName") wrapper.style.fontFamily = cleanFontFamily(value);
    if (command === "foreColor") wrapper.style.color = normalizeTextColor(value);
    if (command === "fontSize") wrapper.style.fontSize = `${normalizeFontPx(value)}px`;
    if (command === "bold") wrapper.style.fontWeight = makeBold ? "700" : "400";
    selectedNode.replaceWith(wrapper);
    wrapper.append(selectedNode);
    formattedNodes.push(selectedNode);
  });

  if (!formattedNodes.length) return null;
  const nextRange = document.createRange();
  const firstNode = formattedNodes[0];
  const lastNode = formattedNodes[formattedNodes.length - 1];
  nextRange.setStart(firstNode, 0);
  nextRange.setEnd(lastNode, lastNode.textContent?.length || 0);
  return nextRange;
}

function applyRichInlineCommand(editor, command, value = "") {
  if (!editor) return;
  const savedRange = rangeBelongsToEditor(activeTextSelectionRange, editor)
    ? activeTextSelectionRange.cloneRange()
    : rangeBelongsToEditor(activeRichSelectionRange, editor)
      ? activeRichSelectionRange.cloneRange()
      : null;

  if (savedRange) {
    const nextRange = applyStyleToRichSelection(editor, savedRange, command, value);
    if (!nextRange) return;
    activeRichSelectionRange = nextRange.cloneRange();
    activeTextSelectionRange = nextRange.cloneRange();
    showPersistentTextSelection(nextRange);
  } else {
    const updates = {};
    if (command === "fontName") updates.fontFamily = value;
    if (command === "foreColor") updates.color = value;
    if (command === "fontSize") updates.fontPx = value;
    if (command === "bold") {
      const block = selectedRichBlock(editor);
      updates.bold = block?.dataset.bold !== "true";
    }
    updateCurrentTextBlock(editor, updates);
  }

  setStatus("Unsaved local changes. Click the section save button to keep this formatting.");
}

function selectRichBlock(block) {
  document.querySelectorAll(".rich-block.selected").forEach((item) => item.classList.remove("selected"));
  activeSummaryBlock = block || null;
  if (block) {
    block.classList.add("selected");
    const editor = block.closest("[data-rich-editor]");
    if (editor) editor.dataset.activeRichBlockIndex = String([...editor.children].indexOf(block));
  }
}

function selectedRichBlock(editor) {
  if (!editor) return null;
  const index = Number(editor.dataset.activeRichBlockIndex);
  if (Number.isInteger(index) && index >= 0 && editor.children[index]?.matches(".rich-block")) {
    return editor.children[index];
  }
  if (activeSummaryBlock && editor.contains(activeSummaryBlock)) return activeSummaryBlock;
  return currentRichBlock(editor);
}

function syncRichContextMenuControls(block) {
    if (!block || block.dataset.type !== "paragraph") return;

    const computed = getComputedStyle(block);
    const family = displayRichFontName(computed.fontFamily) || "Arial";
    const size = String(Math.round(parseFloat(computed.fontSize) || 16));
    const color = normalizeTextColor(block.dataset.color || "") || "#17202a";
    restoreRichSelection(block.closest("[data-rich-editor]"));
    const bold = document.queryCommandState("bold") || block.dataset.bold === "true";

    if (richFontSelect) {
        richFontSelect.value = [...richFontSelect.options].some((option) => option.value === family || option.textContent === family)
            ? family
            : "Arial";
    }

    if (richFontSize) richFontSize.value = size;
    if (richColorInput) richColorInput.value = color;
    if (richBoldButton) richBoldButton.setAttribute("aria-pressed", bold ? "true" : "false");
}

function focusTextBlock(block) {
  if (!block) return;
  selectRichBlock(block);
  const editor = block.closest("[data-rich-editor]");
  editor?.focus();
  const range = document.createRange();
  range.selectNodeContents(block);
  range.collapse(false);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  captureRichSelection(editor);
}

function setTextBlockCaretOffset(block, offset) {
  if (!block) return;
  selectRichBlock(block);
  const editor = block.closest("[data-rich-editor]");
  editor?.focus();
  const textNode = block.firstChild || block;
  const safeOffset = Math.max(0, Math.min(offset, textNode.textContent?.length || 0));
  const range = document.createRange();
  range.setStart(textNode, safeOffset);
  range.collapse(true);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  captureRichSelection(editor);
}

function textBlockCaretOffset(block) {
  const selection = window.getSelection();
  if (!selection?.rangeCount || !block.contains(selection.anchorNode)) return block.textContent.length;
  const range = selection.getRangeAt(0).cloneRange();
  range.selectNodeContents(block);
  range.setEnd(selection.anchorNode, selection.anchorOffset);
  return range.toString().length;
}

function matchingTextBlock(block, text = "") {
    return createRichTextBlock(
        text,
        block?.dataset.fontSize || "normal",
        block?.dataset.align || "left",
        block?.dataset.fontFamily || "Arial",
        block?.dataset.fontPx || "",
        block?.dataset.color || "",
        block?.dataset.bold === "true"
    );
}

function richInsertionRange(editor) {
  const currentRange = selectionRangeInsideEditor(editor);
  if (currentRange) {
    currentRange.collapse(true);
    return currentRange;
  }
  if (restoreRichSelection(editor)) {
    const restored = selectionRangeInsideEditor(editor);
    if (restored) {
      restored.collapse(true);
      return restored;
    }
  }
  const lastText = [...editor.querySelectorAll(".rich-text-block")].at(-1);
  if (lastText) {
    const range = document.createRange();
    range.selectNodeContents(lastText);
    range.collapse(false);
    return range;
  }
  return null;
}

function insertRichBlockAtCursor(editor, blockElement, insertionRange = null) {
  const range = insertionRange?.cloneRange() || richInsertionRange(editor);
  const rangeNode = range?.startContainer?.nodeType === Node.TEXT_NODE
    ? range.startContainer.parentElement
    : range?.startContainer;
  const current = rangeNode?.closest?.(".rich-block") || selectedRichBlock(editor);
  let nextText = null;

  if (range && current?.dataset.type === "paragraph" && current.contains(range.startContainer)) {
    range.collapse(true);
    const tail = document.createRange();
    tail.setStart(range.startContainer, range.startOffset);
    tail.setEnd(current, current.childNodes.length);
    const trailingContent = tail.extractContents();
    current.after(blockElement);
    nextText = matchingTextBlock(current, "");
    nextText.append(trailingContent);
    blockElement.after(nextText);
  } else if (range?.startContainer === editor) {
    const reference = editor.children[range.startOffset] || null;
    editor.insertBefore(blockElement, reference);
    nextText = createRichTextBlock("");
    blockElement.after(nextText);
  } else if (current) {
    current.after(blockElement);
    nextText = matchingTextBlock(current, "");
    blockElement.after(nextText);
  } else {
    editor.append(blockElement);
    nextText = createRichTextBlock("");
    editor.append(nextText);
  }

  focusTextBlock(nextText);
}

function insertRichBlockAfterCursor(editor, blockElement) {
  insertRichBlockAtCursor(editor, blockElement);
}

function normalizeRichEditorStructure(editor) {
  if (!editor) return;
  [...editor.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.textContent.trim()) {
        node.remove();
        return;
      }
      const paragraph = createRichTextBlock(node.textContent);
      node.replaceWith(paragraph);
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE || node.matches(".rich-block")) return;
    const paragraph = createRichTextBlock("");
    paragraph.innerHTML = sanitizeRichInlineHtml(node.innerHTML || node.textContent || "");
    node.replaceWith(paragraph);
  });

  editor.querySelectorAll(".rich-text-block").forEach((block) => {
    block.dataset.type = "paragraph";
    block.dataset.fontSize ||= "normal";
    block.dataset.align ||= "left";
    block.dataset.fontFamily ||= "Arial";
    block.classList.add("rich-block");
    block.removeAttribute("contenteditable");
    applyRichTextBlockStyle(block);
  });

  if (!editor.querySelector(":scope > .rich-block")) editor.append(createRichTextBlock(""));
}

function richElementPlainText(element) {
  const cloneElement = element.cloneNode(true);
  cloneElement.querySelectorAll("br").forEach((lineBreak) => lineBreak.replaceWith("\n"));
  return String(cloneElement.textContent || "").trim();
}

function updateCurrentTextBlock(editor, updates) {
    const block = selectedRichBlock(editor);
    if (!block || block.dataset.type !== "paragraph") return;

    if (updates.fontSize) {
        block.dataset.fontSize = updates.fontSize;
        block.classList.remove("rich-text-small", "rich-text-normal", "rich-text-large");
        block.classList.add(`rich-text-${updates.fontSize}`);
    }

    if (updates.align) {
        block.dataset.align = updates.align;
        block.classList.remove("text-left", "text-center", "text-right");
        block.classList.add(`text-${updates.align}`);
    }

    if (Object.prototype.hasOwnProperty.call(updates, "fontFamily")) {
        block.dataset.fontFamily = cleanFontFamily(updates.fontFamily);
    }

    if (Object.prototype.hasOwnProperty.call(updates, "fontPx")) {
        block.dataset.fontPx = normalizeFontPx(updates.fontPx);
    }

    if (Object.prototype.hasOwnProperty.call(updates, "color")) {
        block.dataset.color = normalizeTextColor(updates.color);
    }

    if (Object.prototype.hasOwnProperty.call(updates, "bold")) {
        block.dataset.bold = updates.bold ? "true" : "false";
    }

    applyRichTextBlockStyle(block);
    saveRichEditorToProject(editor);
}

function extractRichSummary(editor) {
  normalizeRichEditorStructure(editor);
  const blocks = [...editor.querySelectorAll(".rich-block")].map((element) => {
    const align = element.dataset.align || "left";
    if (element.dataset.type === "image") {
      return {
        align,
        caption: element.dataset.caption || "",
        cropAspect: normalizeCropAspect(element.dataset.cropAspect),
        cropX: normalizeCropPosition(element.dataset.cropX),
        cropY: normalizeCropPosition(element.dataset.cropY),
        cropZoom: normalizeCropZoom(element.dataset.cropZoom),
        display: element.dataset.display === "download" ? "download" : "show",
        title: element.dataset.title || "",
        type: "image",
        url: element.dataset.url || ""
      };
    }
    if (element.dataset.type === "formula") {
      return {
        align,
        formula: unwrapFormula(element.dataset.formula || element.textContent || ""),
        type: "formula"
      };
    }
    const text = richElementPlainText(element);
    if (!text) return null;
    if (isFormulaOnly(text)) {
      return { align: element.dataset.align || "center", formula: unwrapFormula(text), type: "formula" };
    }
    return {
      align,
      bold: element.dataset.bold === "true",
      color: element.dataset.color || "",
      fontFamily: element.dataset.fontFamily || "",
      fontPx: element.dataset.fontPx || "",
      fontSize: element.dataset.fontSize || "normal",
      html: sanitizeRichInlineHtml(element.innerHTML),
      text,
      type: "paragraph"
    };
  }).filter(Boolean);
  return { blocks };
}

async function uploadSummaryImageFile(file, options = {}) {
  const project = selectedProject();
  const projectId = options.projectId || project?.id;
  if (!projectId || !file) return null;
  const validation = isAllowedUpload("media", file.name, file.type);
  if (!validation.ok) {
    setStatus(validation.message);
    return null;
  }
  const displayTitle = Object.prototype.hasOwnProperty.call(options, "title") ? options.title : file.name;
  const fileName = withExtension(displayTitle || file.name, file.name);
  const data = await readFileAsDataUrl(file);
  const response = await fetch("/api/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      projectId,
        section: options.folder || "summary",
      fileName,
      data
    })
  });
  const result = await response.json();
  if (!response.ok) {
    setStatus(result.error || "Image upload failed.");
    return null;
  }
  return {
    align: options.align || "center",
    caption: options.caption || "",
    cropAspect: normalizeCropAspect(options.cropAspect),
    cropX: normalizeCropPosition(options.cropX),
    cropY: normalizeCropPosition(options.cropY),
    cropZoom: normalizeCropZoom(options.cropZoom),
    display: options.display === "download" ? "download" : "show",
    title: displayTitle || "",
    type: "image",
    url: result.url
  };
}

async function openSummaryImageDialog(existingBlock = null, options = {}) {
  const heading = summaryImageDialog.querySelector("h2");
  const submitButton = summaryImageDialog.querySelector("button[type='submit']");
  if (heading) heading.textContent = existingBlock ? "Edit image" : "Add image to overview";
  if (submitButton) submitButton.textContent = existingBlock ? "Save image" : "Add image";
  summaryImageFile.value = "";
  summaryImageTitle.value = existingBlock?.dataset.title || "";
  summaryImageCaption.value = existingBlock?.dataset.caption || "";
  summaryImageAlign.value = existingBlock?.dataset.align || "center";
  summaryImageDisplay.value = existingBlock?.dataset.display || "show";
  summaryImageCrop.value = normalizeCropAspect(existingBlock?.dataset.cropAspect);
  summaryImageZoom.value = String(normalizeCropZoom(existingBlock?.dataset.cropZoom));
  const saved = await dialogValue(summaryImageDialog);
  if (!saved) return null;
  const file = summaryImageFile.files[0];
  if (!file && !existingBlock) {
    setStatus("Choose an image first.");
    return null;
  }
  if (!file && existingBlock) {
    return {
      align: summaryImageAlign.value,
      caption: summaryImageCaption.value.trim(),
      cropAspect: summaryImageCrop.value,
      cropX: normalizeCropPosition(existingBlock.dataset.cropX),
      cropY: normalizeCropPosition(existingBlock.dataset.cropY),
      cropZoom: normalizeCropZoom(summaryImageZoom.value),
      display: summaryImageDisplay.value === "download" ? "download" : "show",
      title: summaryImageTitle.value.trim() || existingBlock.dataset.title || "",
      type: "image",
      url: existingBlock.dataset.url || ""
    };
  }
  return uploadSummaryImageFile(file, {
    align: summaryImageAlign.value,
    caption: summaryImageCaption.value.trim(),
      cropAspect: summaryImageCrop.value,
      cropX: 50,
      cropY: 50,
      cropZoom: normalizeCropZoom(summaryImageZoom.value),
      display: summaryImageDisplay.value === "download" ? "download" : "show",
      folder: options.folder || "summary",
      projectId: options.projectId || "",
    title: summaryImageTitle.value.trim() || file.name
  });
}

async function openSummaryFormulaDialog(existingBlock = null) {
  const heading = summaryFormulaDialog.querySelector("h2");
  const submitButton = summaryFormulaDialog.querySelector("button[type='submit']");
  if (heading) heading.textContent = existingBlock ? "Edit formula" : "Add formula";
  if (submitButton) submitButton.textContent = existingBlock ? "Save formula" : "Add formula";
  summaryFormulaInput.value = existingBlock?.dataset.formula || "";
  summaryFormulaAlign.value = existingBlock?.dataset.align || "center";
  const saved = await dialogValue(summaryFormulaDialog);
  if (!saved) return null;
  const formula = unwrapFormula(summaryFormulaInput.value.trim());
  if (!formula) {
    setStatus("Paste or type a formula first.");
    return null;
  }
  return { align: summaryFormulaAlign.value, formula, type: "formula" };
}

async function handleRichAction(action, editor) {
  if (!editor) return;
  activeSummaryEditor = editor;
  if (action === "toggle-bold") {
    applyRichInlineCommand(editor, "bold");
  }
  if (action === "align-left") updateCurrentTextBlock(editor, { align: "left" });
  if (action === "align-center") updateCurrentTextBlock(editor, { align: "center" });
    if (action === "align-right") updateCurrentTextBlock(editor, { align: "right" });
    if (action === "copy-text") {
        restoreRichSelection(editor);
        const selectedText = window.getSelection()?.toString() || "";
        const block = selectedRichBlock(editor);
        const text = selectedText || block?.textContent || "";
        if (text) await navigator.clipboard.writeText(text);
        return;
    }

    if (action === "paste-text") {
        const text = await navigator.clipboard.readText();
        if (text) {
            insertPlainTextIntoRichEditor(editor, text);
            saveRichEditorToProject(editor);
        }
        return;
    }
  if (action === "add-image") {
      const imageBlock = await openSummaryImageDialog(null, {
          folder: editor.dataset.richFolder || "summary",
          projectId: editor.dataset.richProjectId || ""
      });
    if (imageBlock) {
      insertRichBlockAfterCursor(editor, createRichImageBlock(imageBlock));
      saveRichEditorToProject(editor);
    }
  }
  if (action === "add-formula") {
    const formulaBlock = await openSummaryFormulaDialog();
    if (formulaBlock) {
      insertRichBlockAfterCursor(editor, createRichFormulaBlock(formulaBlock));
      saveRichEditorToProject(editor);
    }
  }
  if (action === "edit-block") {
    await editSelectedRichBlock(editor);
    saveRichEditorToProject(editor);
  }
  if (action === "delete-block") deleteSelectedRichBlock(editor);
}

function hideSummaryContextMenu() {
  summaryContextMenu.hidden = true;
}

async function editSelectedRichBlock(editor) {
  const block = selectedRichBlock(editor);
  if (!block) return;
  selectRichBlock(block);
  if (block.dataset.type === "image") {
    const updated = await openSummaryImageDialog(block);
    if (updated) refreshRichImageBlock(block, updated);
    return;
  }
  if (block.dataset.type === "formula") {
    const updated = await openSummaryFormulaDialog(block);
    if (updated) refreshRichFormulaBlock(block, updated);
    return;
  }
  if (block.dataset.type === "paragraph") {
    focusTextBlock(block);
    setStatus("Text block selected. Type directly in the block to edit it.");
  }
}

function removeRichBlock(block, editor) {
  if (!block) return;
  const nextFocus = block.previousElementSibling?.matches(".rich-text-block")
    ? block.previousElementSibling
    : block.nextElementSibling?.matches(".rich-text-block")
      ? block.nextElementSibling
      : null;
  block.remove();
  activeSummaryBlock = null;
  if (!editor.querySelector(".rich-block")) editor.append(createRichTextBlock(""));
  focusTextBlock(nextFocus || editor.querySelector(".rich-text-block"));
}

function deleteSelectedRichBlock(editor) {
  const block = selectedRichBlock(editor);
  if (!block) return;
  const label = block.dataset.type === "image"
    ? "this overview image"
    : block.dataset.type === "formula"
      ? "this formula"
      : "this text block";
  openDeleteConfirm({
    title: "Delete overview block",
    message: `Are you sure you want to delete ${label}?`,
    onConfirm: () => removeRichBlock(block, editor)
  });
}

function deleteProjectSummary(project) {
  if (!project) return;
  openDeleteConfirm({
    title: "Delete project overview",
    message: "Are you sure you want to delete the current project overview?",
    onConfirm: () => {
      project.summary = "";
      project.summaryRich = null;
      summaryEditorProjectId = "";
      activeSummaryEditor = null;
      activeSummaryBlock = null;
      setStatus("Project overview deleted in the editor. Click Save project to update the portfolio preview.");
      scheduleAutosave();
      renderAll();
    }
  });
}

async function saveRichSummary() {
  const project = selectedProject();
  const editor = projectFields.querySelector("[data-rich-editor='summary']");
  if (!project || !editor) return true;
  const rich = extractRichSummary(editor);
  const plain = plainTextFromRich(rich);
  if (wordCount(plain) > 1000) {
    setStatus("Project overview is limited to 1000 words. Shorten the text before saving.");
    return false;
  }
  project.summaryRich = rich;
  project.summary = plain;
  summaryEditorProjectId = "";
  activeSummaryEditor = null;
  activeSummaryBlock = null;
  setStatus("Overview saved in the editor. Click Save project to include this version in the portfolio preview.");
  scheduleAutosave();
  renderAll();
  return true;
}

function renderFields(project) {
  if (!project) {
    projectFields.hidden = false;
    projectFields.innerHTML = `<p class="evidence-empty">Add or select a project to begin editing.</p>`;
    return;
  }

  projectFields.hidden = activeSectionId !== "brief";
  projectWindowTitle.textContent = project.title;
  projectFields.innerHTML = `
    ${renderSummaryBuilder(project)}
  `;
  if (summaryEditorProjectId === project.id) {
    requestAnimationFrame(() => populateSummaryEditor(project));
  }
}

function sectionOptions(project) {
  const custom = (project.sections || []).map((section) => ({
    id: `custom:${section.id}`,
    label: section.title,
    folder: section.id
  }));
  return [
    ...standardSections.filter((section) => !section.analogOnly || isAnalogProject(project)),
    ...custom
  ];
}

function ensureSiteSections() {
  catalog.siteSections = catalog.siteSections || [];
  if (!catalog.siteSectionsSeeded && !catalog.siteSections.length) {
    catalog.siteSections = clone(defaultSiteSections);
    catalog.siteSectionsSeeded = true;
  }
  savedPortfolioCatalog.siteSections = savedPortfolioCatalog.siteSections || clone(catalog.siteSections || []);
}

function siteSectionHasContent(section) {
  return Boolean(
    section?.description ||
    richHasContent(section?.richDescription) ||
    section?.backgroundImage ||
    (section?.links || []).some((link) => link.label || link.url) ||
    (section?.assets || []).some((asset) => asset.title || asset.url) ||
    (section?.subsections || []).some((item) => item.title || item.description || richHasContent(item.richDescription) || (item.links || []).length)
  );
}

function siteSectionRenderable(section) {
  return section?.visible !== false && siteSectionHasContent(section);
}

function siteSectionLinkCount(section) {
  return [
    ...(section.links || []),
    ...(section.assets || []),
    ...(section.subsections || []).flatMap((item) => item.links || [])
  ].filter((item) => item.label || item.url).length;
}

function renderSiteSectionList() {
  ensureSiteSections();
  const sections = catalog.siteSections || [];
  siteSectionList.innerHTML = sections.length ? sections.map((section) => `
    <article class="site-section-item ${section.visible === false ? "is-hidden-section" : ""}" style="${section.backgroundImage ? `--site-section-bg: url('${section.backgroundImage}')` : ""}">
      <div>
        <strong>${section.title || "Untitled section"}</strong>
        <span>${section.visible === false ? "Hidden from website" : "Visible on website"} · ${(section.subsections || []).length} subsection${(section.subsections || []).length === 1 ? "" : "s"} · ${siteSectionLinkCount(section)} link${siteSectionLinkCount(section) === 1 ? "" : "s"}</span>
        ${section.description || richHasContent(section.richDescription) ? renderRichContent(section.richDescription, section.description || "") : ""}
      </div>
      ${(section.subsections || []).length ? `
        <div class="site-subsection-list">
          ${(section.subsections || []).map((item, index) => `
            <article class="site-subsection-item">
              <div>
                <strong>${item.title || "Untitled subsection"}</strong>
                ${item.description || richHasContent(item.richDescription) ? renderRichContent(item.richDescription, item.description || "") : ""}
              </div>
              <div class="site-section-actions">
                <button type="button" data-site-subsection-edit="${section.id}" data-index="${index}">Edit</button>
                <button class="danger-icon" type="button" data-site-subsection-delete="${section.id}" data-index="${index}">Delete</button>
              </div>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${(section.links || []).length ? `
        <div class="site-link-list">
          ${(section.links || []).map((link, index) => `
            <span>
              ${link.label || "Untitled link"}
              <button type="button" data-site-link-edit="${section.id}" data-index="${index}">Edit</button>
              <button type="button" data-site-link-delete="${section.id}" data-index="${index}">Delete</button>
            </span>
          `).join("")}
        </div>
      ` : ""}
      <div class="site-section-actions">
        <button type="button" data-site-section-toggle="${section.id}">${section.visible === false ? "Show" : "Hide"}</button>
        <button type="button" data-site-section-edit="${section.id}">Edit</button>
        <button type="button" data-site-subsection-add="${section.id}">Add subsection</button>
        <button type="button" data-site-link-add="${section.id}">Add link</button>
        <button type="button" data-site-section-bg="${section.id}">Background</button>
        ${section.backgroundImage ? `<button type="button" data-site-section-bg-clear="${section.id}">Clear bg</button>` : ""}
        <button class="danger-icon" type="button" data-site-section-delete="${section.id}">Delete</button>
      </div>
    </article>
  `).join("") : `<p class="evidence-empty">No extra portfolio areas added yet.</p>`;
}

async function siteSectionDialogValue(section = {}) {
  sectionDialogTitle.textContent = section.id ? "Edit section" : "Create section";
  sectionTitle.placeholder = "Professional profile, Personal background, Sports...";
  sectionDescription.dataset.placeholder = "Short section overview shown on the website";
  sectionDescription.dataset.richFolder = section.id || "new-portfolio-section";
  sectionDescription.dataset.richProjectId = "_site-sections";
  sectionTitle.value = section.title || "";
  populateStandaloneRichEditor(sectionDescription, section.richDescription, section.description || "");
  const saved = await dialogValue(sectionDialog);
  if (!saved) return null;
  const title = sectionTitle.value.trim();
  if (!title) {
    setStatus("Type a section title before saving.");
    return null;
  }
  const richDescription = extractRichSummary(sectionDescription);
  return {
    description: plainTextFromRich(richDescription, "\n").trim(),
    id: section.id || slugify(title),
    richDescription,
    title
  };
}

async function siteSubsectionDialogValue(subsection = {}) {
  sectionDialogTitle.textContent = subsection.id ? "Edit subsection" : "Create subsection";
  sectionTitle.placeholder = "Sports, Hobbies, Resume links, Origin...";
  sectionDescription.dataset.placeholder = "Short subsection text shown inside the portfolio area";
  sectionDescription.dataset.richFolder = subsection.id || "new-portfolio-subsection";
  sectionDescription.dataset.richProjectId = "_site-sections";
  sectionTitle.value = subsection.title || "";
  populateStandaloneRichEditor(sectionDescription, subsection.richDescription, subsection.description || "");
  const saved = await dialogValue(sectionDialog);
  if (!saved) return null;
  const title = sectionTitle.value.trim();
  if (!title) {
    setStatus("Type a subsection title before saving.");
    return null;
  }
  const richDescription = extractRichSummary(sectionDescription);
  return {
    description: plainTextFromRich(richDescription, "\n").trim(),
    id: subsection.id || slugify(title),
    links: subsection.links || [],
    richDescription,
    title
  };
}

function dialogLinkValue(link = {}) {
  return new Promise((resolve) => {
    siteLinkEyebrow.textContent = link.url ? "Edit portfolio link" : "Add portfolio link";
    siteLinkTitle.textContent = link.url ? "Edit link" : "Add link";
    siteLinkLabel.value = link.label || "";
    siteLinkUrl.value = link.url || "";
    const onClose = () => {
      siteLinkDialog.removeEventListener("close", onClose);
      if (siteLinkDialog.returnValue !== "save") {
        resolve(null);
        return;
      }
      const label = siteLinkLabel.value.trim();
      const url = siteLinkUrl.value.trim();
      if (!label || !url) {
        setStatus("Type both a link label and URL before saving.");
        resolve(null);
        return;
      }
      resolve({ ...link, label, url: normalizeLinkTarget(url, { assumeWeb: true }) });
    };
    siteLinkDialog.addEventListener("close", onClose);
    siteLinkDialog.showModal();
  });
}

async function addSiteSection() {
  ensureSiteSections();
  const input = await siteSectionDialogValue();
  if (!input) return;
  const id = input.id || slugify(input.title);
  catalog.siteSections.push({
    id,
    title: input.title,
    description: input.description,
    richDescription: input.richDescription,
    visible: false,
    backgroundImage: "",
    links: [],
    assets: [],
    subsections: []
  });
  markDraftNeedsSave();
  setStatus("Portfolio area added locally.");
  scheduleAutosave();
  renderAll();
}

async function editSiteSection(sectionId) {
  ensureSiteSections();
  const section = catalog.siteSections.find((item) => item.id === sectionId);
  if (!section) return;
  const input = await siteSectionDialogValue(section);
  if (!input) return;
  section.title = input.title;
  section.description = input.description;
  section.richDescription = input.richDescription;
  markDraftNeedsSave();
  setStatus("Portfolio area edited locally.");
  scheduleAutosave();
  renderAll();
}

async function addSiteSubsection(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  const input = await siteSubsectionDialogValue();
  if (!input) return;
  section.subsections = section.subsections || [];
  section.subsections.push(input);
  markDraftNeedsSave();
  setStatus("Portfolio subsection added locally.");
  scheduleAutosave();
  renderAll();
}

async function editSiteSubsection(sectionId, index) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  const subsection = section?.subsections?.[Number(index)];
  if (!section || !subsection) return;
  const input = await siteSubsectionDialogValue(subsection);
  if (!input) return;
  section.subsections[Number(index)] = input;
  markDraftNeedsSave();
  setStatus("Portfolio subsection edited locally.");
  scheduleAutosave();
  renderAll();
}

function deleteSiteSubsection(sectionId, index) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  const subsection = section?.subsections?.[Number(index)];
  if (!section || !subsection) return;
  openDeleteConfirm({
    title: "Delete subsection",
    message: `Are you sure you want to delete "${subsection.title}"?`,
    onConfirm: () => {
      section.subsections.splice(Number(index), 1);
      markDraftNeedsSave();
      scheduleAutosave();
      renderAll();
    }
  });
}

async function addSiteSectionLink(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  const input = await dialogLinkValue();
  if (!input) return;
  section.links = section.links || [];
  section.links.push(input);
  markDraftNeedsSave();
  setStatus("Portfolio link added locally.");
  scheduleAutosave();
  renderAll();
}

async function editSiteSectionLink(sectionId, index) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  const link = section?.links?.[Number(index)];
  if (!section || !link) return;
  const input = await dialogLinkValue(link);
  if (!input) return;
  section.links[Number(index)] = input;
  markDraftNeedsSave();
  setStatus("Portfolio link edited locally.");
  scheduleAutosave();
  renderAll();
}

function deleteSiteSectionLink(sectionId, index) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section?.links?.[Number(index)]) return;
  section.links.splice(Number(index), 1);
  markDraftNeedsSave();
  setStatus("Portfolio link deleted locally.");
  scheduleAutosave();
  renderAll();
}

function toggleSiteSectionVisibility(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  section.visible = section.visible === false;
  markDraftNeedsSave();
  setStatus(section.visible ? "Portfolio area will show on the website preview." : "Portfolio area hidden from the website preview.");
  scheduleAutosave();
  renderAll();
}

function deleteSiteSection(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  openDeleteConfirm({
    title: "Delete portfolio area",
    message: `Are you sure you want to delete "${section.title}"?`,
    onConfirm: () => {
      catalog.siteSections = (catalog.siteSections || []).filter((item) => item.id !== sectionId);
      savedPortfolioCatalog.siteSections = (savedPortfolioCatalog.siteSections || []).filter((item) => item.id !== sectionId);
      markDraftNeedsSave();
      scheduleAutosave();
      renderAll();
    }
  });
}

async function setSiteSectionBackground(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  const file = await chooseFile();
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    setStatus("Choose an image file for a section background.");
    return;
  }
  const data = await readFileAsDataUrl(file);
  const response = await fetch(`/api/upload?t=${Date.now()}`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      projectId: "_site-sections",
      section: section.id,
      fileName: file.name,
      data
    })
  });
  const result = await response.json();
  if (!response.ok) {
    setStatus(result.error || "Background upload failed.");
    return;
  }
  section.backgroundImage = result.url;
  markDraftNeedsSave();
  setStatus("Portfolio area background saved locally.");
  scheduleAutosave();
  renderAll();
}

function clearSiteSectionBackground(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  section.backgroundImage = "";
  markDraftNeedsSave();
  setStatus("Portfolio area background cleared locally.");
  scheduleAutosave();
  renderAll();
}

function renderSectionTabs(project) {
  if (!project) {
    sectionTabs.innerHTML = "";
    return;
  }

  sectionTabs.innerHTML = `
    ${sectionOptions(project).map((section) => `
      <button class="${section.id === activeSectionId ? "active" : ""}" type="button" data-section-id="${section.id}">
        ${section.label}
      </button>
    `).join("")}
    <button type="button" data-add-section="true">Add section</button>
  `;
}

function renderTextArray(project, key, label) {
  const items = project[key] || [];
  return `
    <div class="section-actions">
      <button class="button primary" type="button" data-open-editor="text-array" data-key="${key}" data-mode="add">Add ${label}</button>
    </div>
    <div class="builder-items">
      ${items.map((item, index) => `
        <article class="builder-item">
          <div>
            <strong>${typeof item === "string" ? item : item.title || item.name || item.label || ""}</strong>
          </div>
          <button type="button" data-open-editor="text-array" data-key="${key}" data-mode="edit" data-index="${index}">Edit</button>
          <button class="danger-icon" type="button" data-delete-array="${key}" data-index="${index}">Delete</button>
        </article>
      `).join("") || `<p class="evidence-empty">No ${label.toLowerCase()} added yet.</p>`}
    </div>
  `;
}

function toolName(item) {
  return typeof item === "string" ? item : item.name || item.title || item.label || "";
}

function toolDescription(item) {
  return typeof item === "string" ? "" : item.description || item.usedFor || "";
}

function renderToolsSection(project) {
  const items = project.tools || [];
  return `
    <div class="section-actions">
      <button class="button primary" type="button" data-open-editor="tool" data-mode="add">Add tool</button>
    </div>
    <div class="builder-items tool-items">
      ${items.map((item, index) => `
        <article class="builder-item tool-item">
          <div>
            <strong>${toolName(item) || "Untitled tool"}</strong>
          </div>
          ${richHasContent(item?.richDescription)
            ? renderRichContent(item.richDescription, toolDescription(item))
            : `<p>${toolDescription(item) || "No usage description added yet."}</p>`}
          <button type="button" data-open-editor="tool" data-mode="edit" data-index="${index}">Edit</button>
          <button class="danger-icon" type="button" data-delete-array="tools" data-index="${index}">Delete</button>
        </article>
      `).join("") || `<p class="evidence-empty">No tools added yet.</p>`}
    </div>
  `;
}

function renderObjectSection(project, key, folder, label) {
  const items = project[key] || [];
  return `
    <div class="section-actions">
      <button class="button primary" type="button" data-open-editor="object" data-key="${key}" data-mode="add">Add text item</button>
      ${folder ? `<button class="button secondary" type="button" data-upload="${key}" data-folder="${folder}">Add file or image</button>` : ""}
    </div>
    <div class="builder-items">
      ${items.map((item, index) => {
        const title = item.title || item.name || item.label || "Untitled item";
        const url = item.url || item.artifact || "";
        const description = item.description || item.caption || item.result || item.method || "";
        return `
          <article class="builder-item">
            <div>
              <strong>${title}</strong>
              <span>${url || "No file attached"}</span>
              ${richHasContent(item.richDescription)
                ? renderRichContent(item.richDescription, description)
                : description ? `<p>${renderMultilineInlineText(description)}</p>` : ""}
            </div>
            <button type="button" data-open-editor="object" data-key="${key}" data-mode="edit" data-index="${index}">Edit</button>
            <button class="danger-icon" type="button" data-delete-item="${key}" data-index="${index}">Delete</button>
          </article>
        `;
      }).join("") || `<p class="evidence-empty">No ${label.toLowerCase()} added yet.</p>`}
    </div>
  `;
}

function designArray(project, pathValue) {
  ensureDesignModel(project);
  const items = getByPath(project, pathValue);
  if (Array.isArray(items)) return items;
  setByPath(project, pathValue, []);
  return getByPath(project, pathValue);
}

function makeDesignItem(kind, title, description = "", url = "") {
  if (kind === "reference") return { title, description, url, type: "Reference", status: url ? "linked" : "draft" };
  if (kind === "analysis") return { title, description, type: "Math / Analysis", status: "draft" };
  if (kind === "simulation-file") return { title, description, url, type: "Simulation file", status: url ? "uploaded" : "draft" };
  if (kind === "simulation-result") return { title, description, url, type: "Simulation result", status: url ? "uploaded" : "draft" };
  return { title, description, url, type: "Document", status: url ? "uploaded" : "draft" };
}

function renderDesignObjectSection(project, pathValue, folder, label, kind = "document") {
  const items = designArray(project, pathValue);
  return `
    <div class="section-actions">
      <button class="button primary" type="button" data-open-editor="design-object" data-design-path="${pathValue}" data-design-kind="${kind}" data-mode="add">Add ${label}</button>
      ${folder ? `<button class="button secondary" type="button" data-upload-design="${pathValue}" data-folder="${folder}" data-design-kind="${kind}">Add file</button>` : ""}
    </div>
    <div class="builder-items">
      ${items.map((item, index) => {
        const title = item.title || item.name || item.label || "Untitled item";
        const url = item.url || item.artifact || "";
        const description = item.description || item.caption || item.result || item.method || "";
        return `
          <article class="builder-item">
            <div>
              <strong>${title}</strong>
              <span>${url || "No file attached"}</span>
              ${richHasContent(item.richDescription)
                ? renderRichContent(item.richDescription, description)
                : description ? `<p>${renderMultilineInlineText(description)}</p>` : ""}
            </div>
            <button type="button" data-open-editor="design-object" data-design-path="${pathValue}" data-design-kind="${kind}" data-mode="edit" data-index="${index}">Edit</button>
            <button class="danger-icon" type="button" data-delete-design-item="${pathValue}" data-index="${index}">Delete</button>
          </article>
        `;
      }).join("") || `<p class="evidence-empty">No ${label.toLowerCase()} added yet.</p>`}
    </div>
  `;
}

function renderDesignSummaryField(project, pathValue, label, placeholder) {
    const textValue = getByPath(project, pathValue) || "";
    const richPath = summaryRichPathFromTextPath(pathValue);
    const richValue = getByPath(project, richPath);
    const hasValue = Boolean(textValue || richValue?.blocks?.length);

    return `
    <div class="wide-field design-summary-field rich-design-summary-field">
      <div class="summary-builder-heading">
        <span>
          ${label}
          ${hasValue ? `<button class="inline-danger-button" type="button" data-clear-design-summary="${pathValue}">Clear overview</button>` : ""}
        </span>
      </div>

      <div class="rich-summary-panel">
        <p class="rich-editor-hint">Right-click to add images, apply bold, color, font, numeric size, alignment, or formulas.</p>

        <div
          class="rich-summary-editor"
          data-rich-editor="section-overview"
          data-rich-text-path="${escapeHtml(pathValue)}"
          data-rich-path="${escapeHtml(richPath)}"
          data-rich-folder="${escapeHtml(overviewFolderFromPath(pathValue))}"
          data-placeholder="${escapeHtml(placeholder || "")}"
          aria-label="${escapeHtml(label)} rich editor"
        ></div>
      </div>
    </div>
  `;
}

function renderAnalogDesignWorkspace(project) {
  ensureDesignModel(project);
  return `
    <div class="section-stack analog-design-workspace">
      <section class="design-workspace-card">
        <h3>Design Overview</h3>
        ${renderDesignSummaryField(project, "design.brief.summary", "Design overview", "State the analog design objective, topology, constraints, and design decisions.")}
        ${renderDesignObjectSection(project, "design.brief.files", "design-brief", "brief file", "document")}
      </section>
      <section class="design-workspace-card">
        <h3>Documentation</h3>
        ${renderDesignSummaryField(project, "design.documentation.summary", "Documentation overview", "Summarize schematics, notes, datasheets, calculations, and supporting documents.")}
        ${renderDesignObjectSection(project, "design.documentation.files", "documentation", "document", "document")}
        <h4>References</h4>
        ${renderDesignObjectSection(project, "design.documentation.references", "", "reference", "reference")}
        <h4>Math / Analysis</h4>
        ${renderDesignObjectSection(project, "design.documentation.mathAnalysis", "", "analysis item", "analysis")}
      </section>
      <section class="design-workspace-card">
        <h3>PCB and Visual Evidence</h3>
        ${renderObjectSection(project, "pcbs", "pcbs", "PCBs")}
        ${renderObjectSection(project, "media", "images", "Images")}
      </section>
      ${renderPendingEditor()}
    </div>
  `;
}

function renderAnalogSimulationWorkspace(project) {
  ensureDesignModel(project);
  return `
    <div class="section-stack analog-design-workspace">
      <section class="design-workspace-card">
        <h3>Simulation Overview</h3>
        ${renderDesignSummaryField(project, "design.simulation.summary", "Simulation overview", "Explain what was simulated, why it mattered, and what the results proved.")}
      </section>
      <section class="design-workspace-card">
        <h3>Simulation Files</h3>
        ${renderDesignObjectSection(project, "design.simulation.files", "simulations", "simulation file", "simulation-file")}
      </section>
      <section class="design-workspace-card">
        <h3>Simulation Results</h3>
        ${renderDesignObjectSection(project, "design.simulation.results", "simulation-results", "simulation result", "simulation-result")}
      </section>
      ${renderPendingEditor()}
    </div>
  `;
}

function pendingEditorUsesRichDescription(editor = pendingEditor) {
  return Boolean(editor && editor.type !== "text-array");
}

function pendingEditorFolder(editor = pendingEditor) {
  if (!editor) return "content";
  if (editor.type === "custom-section") return `custom-${slugify(editor.sectionId || "section")}-overview`;
  if (editor.type === "custom") return `custom-${slugify(editor.sectionId || "section")}-subsection`;
  if (editor.type === "design-object") return `design-${slugify(editor.kind || "content")}`;
  if (editor.type === "object") return slugify(editor.key || "content");
  return slugify(editor.type || "content");
}

function renderPendingRichDescriptionEditor(editor = pendingEditor) {
  const label = editor?.type === "tool"
    ? "What it was used for"
    : editor?.type === "custom-section"
      ? "Section content"
      : "Content";
  return `
    <div class="pending-rich-description rich-design-summary-field">
      <div class="summary-builder-heading"><span>${escapeHtml(label)}</span></div>
      <div class="rich-summary-panel">
        <p class="rich-editor-hint">Right-click to add images, apply bold, color, font, numeric size, alignment, or formulas.</p>
        <div
          class="rich-summary-editor"
          data-rich-editor="pending-description"
          data-rich-folder="${escapeHtml(pendingEditorFolder(editor))}"
          data-placeholder="Type or paste the complete content here."
          aria-label="${escapeHtml(label)} rich editor"
        ></div>
      </div>
    </div>
  `;
}

function renderPendingEditor() {
  if (!pendingEditor) return "";
  const title = pendingEditor.title || "";
  const isTool = pendingEditor.type === "tool";
  const isSimpleText = pendingEditor.type === "text-array";
  const isSectionDetails = pendingEditor.type === "custom-section";
  return `
    <form class="pending-editor" id="pending-editor">
      <div>
        <h3>${pendingEditor.mode === "edit" ? "Edit" : "Add"} ${isTool ? "tool" : isSimpleText ? "item" : isSectionDetails ? "section" : "subsection"}</h3>
      </div>
      <div class="${isTool ? "tool-editor-grid" : "pending-editor-grid"}">
        <label>
          <span>${isTool ? "Tool name" : "Title"}</span>
          <input name="title" type="text" value="${title}" required>
        </label>
        ${isSimpleText ? "" : renderPendingRichDescriptionEditor(pendingEditor)}
      </div>
      <div class="pending-editor-actions">
        <button class="button primary" type="submit">Save</button>
        <button class="button secondary" type="button" data-cancel-pending="true">Cancel</button>
      </div>
    </form>
  `;
}

function openPendingEditor(config) {
  pendingEditor = config;
  renderSectionContent(selectedProject());
  requestAnimationFrame(() => {
    populateRichEditors(sectionContent);
    document.querySelector("#pending-editor")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function savePendingEditor(form) {
  const project = selectedProject();
  if (!project || !pendingEditor) return;
  const title = form.elements.title.value.trim();
  const richEditor = form.querySelector("[data-rich-editor='pending-description']");
  const richDescription = richEditor ? extractRichSummary(richEditor) : null;
  const description = richEditor ? plainTextFromRich(richDescription) : "";
  if (!title) {
    setStatus("Type a title before saving.");
    return;
  }

  if (pendingEditor.type === "tool") {
    project.tools = project.tools || [];
    const nextTool = { name: title, description, richDescription };
    if (pendingEditor.mode === "edit") {
      project.tools[Number(pendingEditor.index)] = nextTool;
    } else {
      project.tools.push(nextTool);
    }
  }

  if (pendingEditor.type === "object") {
    const key = pendingEditor.key;
    project[key] = project[key] || [];
    if (pendingEditor.mode === "edit") {
      const existing = project[key][Number(pendingEditor.index)] || {};
      const existingUrl = existing.url || existing.artifact || "";
      const nextItem = makeItemForSection(key, title, description, existingUrl);
      project[key][Number(pendingEditor.index)] = { ...existing, ...nextItem, richDescription };
    } else {
      const nextItem = makeItemForSection(key, title, description);
      project[key].push({ ...nextItem, richDescription });
    }
  }

  if (pendingEditor.type === "design-object") {
    const items = designArray(project, pendingEditor.path);
    const kind = pendingEditor.kind || "document";
    if (pendingEditor.mode === "edit") {
      const existing = items[Number(pendingEditor.index)] || {};
      const existingUrl = existing.url || existing.artifact || "";
      items[Number(pendingEditor.index)] = { ...existing, ...makeDesignItem(kind, title, description, existingUrl), richDescription };
    } else {
      items.push({ ...makeDesignItem(kind, title, description), richDescription });
    }
  }

  if (pendingEditor.type === "text-array") {
    const key = pendingEditor.key;
    project[key] = project[key] || [];
    if (pendingEditor.mode === "edit") {
      project[key][Number(pendingEditor.index)] = title;
    } else {
      project[key].push(title);
    }
  }

  if (pendingEditor.type === "custom") {
    const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);
    if (!section) return;
    section.items = section.items || [];
    const nextItem = { title, description, richDescription, type: "Text", status: "draft" };
    if (pendingEditor.mode === "edit") {
      section.items[Number(pendingEditor.index)] = { ...section.items[Number(pendingEditor.index)], ...nextItem };
    } else {
      section.items.push(nextItem);
    }
  }

  if (pendingEditor.type === "custom-section") {
    const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);
    if (!section) return;
    section.title = title;
    section.description = description;
    section.richDescription = richDescription;
  }

  pendingEditor = null;
  setStatus("Saved in the project editor. Click Save project to include this version in the portfolio preview.");
  scheduleAutosave();
  renderAll();
}

function openEditorFromButton(button) {
  const project = selectedProject();
  if (!project) return;
  const type = button.dataset.openEditor;
  const mode = button.dataset.mode || "add";
  const index = button.dataset.index;

  if (type === "tool") {
    const item = mode === "edit" ? project.tools?.[Number(index)] : {};
    openPendingEditor({
      type,
      mode,
      index,
      title: toolName(item),
      description: toolDescription(item),
      richDescription: item?.richDescription || null
    });
    return;
  }

  if (type === "object") {
    const key = button.dataset.key;
    const item = mode === "edit" ? project[key]?.[Number(index)] : {};
    openPendingEditor({
      type,
      mode,
      key,
      index,
      title: item?.title || item?.name || item?.label || "",
      description: item?.description || item?.caption || item?.result || item?.method || "",
      richDescription: item?.richDescription || null
    });
    return;
  }

  if (type === "design-object") {
    const pathValue = button.dataset.designPath;
    const items = designArray(project, pathValue);
    const item = mode === "edit" ? items?.[Number(index)] : {};
    openPendingEditor({
      type,
      mode,
      path: pathValue,
      kind: button.dataset.designKind || "document",
      index,
      title: item?.title || item?.name || item?.label || "",
      description: item?.description || item?.caption || item?.result || item?.method || "",
      richDescription: item?.richDescription || null
    });
    return;
  }


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

  if (type === "text-array") {
    const key = button.dataset.key;
    const item = mode === "edit" ? project[key]?.[Number(index)] : "";
    openPendingEditor({
      type,
      mode,
      key,
      index,
      title: typeof item === "string" ? item : item?.title || item?.name || item?.label || ""
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
  }
}

function renderCustomSection(project, sectionId) {
  const section = (project.sections || []).find((item) => item.id === sectionId);
  if (!section) return `<p class="evidence-empty">Section not found.</p>`;

  return `
    <div class="section-window-heading">
      <h3>${section.title || "Custom section"}</h3>
      <div>
        <button type="button" data-open-editor="custom-section" data-section-id="${section.id}">Edit section</button>
        <button class="danger-icon" type="button" data-delete-section="${section.id}">Delete section</button>
      </div>
    </div>
    ${richHasContent(section.richDescription)
      ? renderRichContent(section.richDescription, section.description || "")
      : section.description
        ? `<p class="rich-paragraph">${renderMultilineInlineText(section.description)}</p>`
        : `<p class="evidence-empty">No section content has been added yet.</p>`}
    <div class="section-actions">
      <button class="button primary" type="button" data-add-custom-item="${section.id}">Add subsection</button>
      <button class="button secondary" type="button" data-upload-custom="${section.id}">Add file or image</button>
    </div>
    <div class="builder-items">
      ${(section.items || []).map((item, index) => `
        <article class="builder-item">
          <div>
            <strong>${escapeHtml(item.title || (item.url ? "Untitled file" : "Untitled subsection"))}</strong>
            ${item.url ? `<span>${escapeHtml(item.url)}</span>` : ""}
            ${richHasContent(item.richDescription)
              ? renderRichContent(item.richDescription, item.description || "")
              : item.description ? `<p>${renderMultilineInlineText(item.description)}</p>` : ""}
            ${(item.children || []).length ? `
              <div class="builder-child-files">
                ${(item.children || []).map((child, childIndex) => `
                  <div>
                    <span>${escapeHtml(child.title || "Untitled file")}</span>
                    <button class="danger-icon" type="button" data-delete-custom-child="${escapeHtml(section.id)}" data-index="${index}" data-child-index="${childIndex}">Delete</button>
                  </div>
                `).join("")}
              </div>
            ` : ""}
          </div>
          ${item.url ? "" : `<button type="button" data-upload-custom-subsection="${escapeHtml(section.id)}" data-index="${index}">Add file</button>`}
          ${item.url ? "" : `<button type="button" data-open-editor="custom" data-mode="edit" data-section-id="${escapeHtml(section.id)}" data-index="${index}">Edit</button>`}
          <button class="danger-icon" type="button" data-delete-custom-item="${section.id}" data-index="${index}">Delete</button>
        </article>
      `).join("") || `<p class="evidence-empty">No subsections added yet.</p>`}
    </div>
    ${renderPendingEditor()}
  `;
}

function renderSectionContent(project) {
  if (!project) {
    sectionContent.hidden = true;
    sectionContent.innerHTML = "";
    return;
  }

  const section = sectionOptions(project).find((item) => item.id === activeSectionId) || standardSections[0];
  const isOverview = section.id === "brief";
  projectFields.hidden = !isOverview;
  sectionContent.hidden = isOverview;
  if (isOverview) {
    sectionContent.innerHTML = "";
    return;
  }

  if (section.id.startsWith("custom:")) {
    sectionContent.innerHTML = renderCustomSection(project, section.id.replace("custom:", ""));
    requestAnimationFrame(() => populateRichEditors(sectionContent));
    return;
  }

  const renderers = {
    brief: () => "",
    design: () => isAnalogProject(project) ? renderAnalogDesignWorkspace(project) : `
      <div class="section-stack">
        <section>
          <h3>Documents</h3>
          ${renderObjectSection(project, "documents", "documents", "Documents")}
        </section>
        <section>
          <h3>PCBs Built</h3>
          ${renderObjectSection(project, "pcbs", "pcbs", "PCBs")}
        </section>
        <section>
          <h3>Images</h3>
          ${renderObjectSection(project, "media", "images", "Images")}
        </section>
        ${renderPendingEditor()}
      </div>
    `,
    simulation: () => isAnalogProject(project) ? renderAnalogSimulationWorkspace(project) : "",
    tests: () => `${renderObjectSection(project, "tests", "tests", "Tests")}${renderPendingEditor()}`,
    tools: () => `
      <div class="section-stack">
        <section>
          <h3>Tools Used</h3>
          ${renderToolsSection(project)}
        </section>
        <section>
          <h3>Languages</h3>
          ${renderTextArray(project, "languages", "Language")}
        </section>
        <section>
          <h3>Links</h3>
          ${renderObjectSection(project, "links", "", "Links")}
        </section>
        ${renderPendingEditor()}
      </div>
    `
  };

    sectionContent.innerHTML = renderers[section.id]();
    requestAnimationFrame(() => populateRichEditors(sectionContent));
}

function fullPortfolioPreviewHtml() {
  const yearValue = new Date().getFullYear();
  const baseHref = `${window.location.origin}/`;
  const siteContent = normalizeSiteContent(catalog.siteContent || savedPortfolioCatalog.siteContent || {});
  const previewData = JSON.stringify({
    categories: savedPortfolioCatalog.categories,
    funFacts: normalizeFunFacts(catalog.funFacts || savedPortfolioCatalog.funFacts || []),
    funFactsRich: catalog.funFactsRich || savedPortfolioCatalog.funFactsRich || null,
    projects: savedPortfolioCatalog.projects,
    siteContent,
    siteSections: savedPortfolioCatalog.siteSections || []
  }).replaceAll("</", "<\\/");
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="${baseHref}" />
    <title>Maurice Otieno | Hardware Engineering Portfolio</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="electronics-search.js"></script>
  </head>
  <body>
    <header class="site-header" id="top">
      <a class="brand" href="#top" aria-label="Go to top">
        <span class="brand-lockup" aria-hidden="true">
          <img class="brand-icon" src="assets/omb-mark.png" alt="" />
          <span class="omb-engraving">OMB</span>
        </span>
        <span>
          <strong>Maurice Otieno</strong>
          <small>Hardware Engineering Portfolio</small>
        </span>
      </a>

      <div class="header-right">
        <nav class="site-nav" aria-label="Primary navigation">
          <a href="#ask-ai">Ask AI</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a class="header-avatar" href="#contact" aria-label="Go to Maurice Otieno contact information">
          <img src="assets/maurice-otieno-profile.png" alt="Maurice Otieno" />
        </a>
      </div>
    </header>

    <main>
      <section class="hero" aria-labelledby="hero-title">
        <img
          class="hero-image"
          src="assets/hero-analog-lab.png"
          alt="Light blue analog engineering bench with transistor-level op amp topology, AC-to-DC charger circuit, bench instruments, MCU, FPGA, ASIC, and EDA tool labels"
        />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow">${escapeHtml(siteContent.heroEyebrow)}</p>
          <h1 id="hero-title">${renderPlainMultiline(siteContent.heroTitle)}</h1>
          <p class="hero-copy">${renderPlainMultiline(siteContent.heroCopy)}</p>
          <div class="hero-actions">
            <a class="button primary" href="#projects">View projects</a>
            <a class="button secondary" href="#resume">View resume</a>
            <a class="button secondary" href="https://github.com/otienomaurice" target="_blank" rel="noreferrer">
              GitHub profile
            </a>
            <a class="ai-jump-link" href="#ask-ai" aria-label="Jump to the portfolio AI assistant">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v3m-5 7H4m16 0h-3M7.5 7.5 5.4 5.4m11.1 2.1 2.1-2.1M8 10h8v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" />
                <path d="M10 13h.01M14 13h.01M10 16h4" />
              </svg>
              <span>Ask AI</span>
            </a>
          </div>
        </div>
      </section>

      <section class="fun-facts-section" id="fun-facts-callout" aria-label="Fun facts" hidden></section>

      <section class="summary-band" aria-label="Portfolio highlights">
        <div class="metric">
          <strong id="project-count">${savedPortfolioCatalog.projects.length}</strong>
          <span>presented projects</span>
        </div>
        <div class="metric">
          <strong>3 Tracks</strong>
          <span>analog, digital, embedded</span>
        </div>
        <div class="metric">
          <strong>Artifacts</strong>
          <span>source, diagrams, and reports</span>
        </div>
      </section>

      <section class="section" id="projects" aria-labelledby="projects-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Selected work</p>
            <h2 id="projects-title">Engineering Projects</h2>
          </div>
          <label class="search-wrap" for="project-search">
            <span>Search</span>
            <input id="project-search" type="search" placeholder="LTspice, PCB, frequency response, Verilog..." />
          </label>
        </div>

        <div class="filters" aria-label="Project filters">
          <button class="filter-button active" type="button" data-filter="all">All</button>
          <button class="filter-button" type="button" data-filter="analog-mixed-signal">Analog and Mixed Signal</button>
          <button class="filter-button" type="button" data-filter="digital">Digital</button>
          <button class="filter-button" type="button" data-filter="embedded">Embedded</button>
        </div>

        <div class="project-grid" id="project-grid" aria-live="polite">${renderedPublicProjects()}</div>
      </section>

      <section class="section resume-section" id="resume" aria-labelledby="resume-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Professional profile</p>
            <h2 id="resume-title">Resume</h2>
          </div>
          <div class="resume-actions">
            <a class="button primary" href="assets/resume.pdf" target="_blank" rel="noreferrer">Open PDF</a>
            <a class="button secondary" href="assets/resume.pdf" download>Download</a>
          </div>
        </div>

        <div class="resume-viewer">
          <object data="assets/resume.pdf" type="application/pdf">
            <p>
              View Maurice Otieno's resume as a PDF:
              <a href="assets/resume.pdf" target="_blank" rel="noreferrer">open resume</a>.
            </p>
          </object>
        </div>
      </section>

      <div id="dynamic-sections"></div>

      <section class="section process" id="process" aria-labelledby="process-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Engineering approach</p>
            <h2 id="process-title">Built To Be Reviewed</h2>
          </div>
        </div>
        <div class="process-grid">
          <article>
            <span class="step">01</span>
            <h3>Problem and constraints</h3>
            <p>Each project begins with the design objective, constraints, technical tradeoffs, and success criteria.</p>
          </article>
          <article>
            <span class="step">02</span>
            <h3>Build artifacts</h3>
            <p>Repositories, schematics, diagrams, documents, test notes, and demonstrations are organized for review.</p>
          </article>
          <article>
            <span class="step">03</span>
            <h3>Results and reflection</h3>
            <p>Results, lessons learned, and next design iterations show how each project developed technically.</p>
          </article>
        </div>
      </section>

      <section class="contact-band" id="contact" aria-labelledby="contact-title">
        <img
          class="profile-photo"
          src="assets/maurice-otieno-profile.png"
          alt="Portrait of Maurice Otieno"
        />
        <div class="contact-content">
          <div>
            <p class="eyebrow">Contact</p>
            <h2 id="contact-title">Maurice Otieno</h2>
            <p class="contact-intro">
              Hardware and software engineer focused on analog design, mixed-signal systems, embedded platforms, and digital hardware.
            </p>
            <div class="contact-details">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=otienomaurice12340@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                otienomaurice12340@gmail.com
              </a>
              <a href="tel:+14845451567">+1 (484) 545-1567</a>
            </div>
          </div>
          <div class="contact-links">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=otienomaurice12340@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
            <a href="tel:+14845451567">Call</a>
            <a href="https://github.com/otienomaurice" target="_blank" rel="noreferrer">GitHub</a>
            <a href="assets/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
        <div class="ai-assistant-panel" id="ask-ai" aria-labelledby="ai-assistant-title">
          <div class="ai-assistant-console" aria-label="AI portfolio assistant">
            <h2 id="ai-assistant-title">Ask My Portfolio</h2>
            <div class="ai-assistant-status sr-only" id="ai-assistant-status" aria-live="polite"></div>
            <div class="ai-assistant-log" id="ai-assistant-log" aria-live="polite" aria-label="AI chat messages"></div>
            <form class="ai-assistant-form" id="ai-assistant-form">
              <label class="sr-only" for="ai-assistant-input">Ask the portfolio assistant</label>
              <input id="ai-assistant-input" type="text" autocomplete="off" placeholder="Ask about projects, tests, resume links, op amps, STM32..." />
              <button type="submit">Ask</button>
            </form>
            <button class="ai-clear-chat" id="ai-clear-chat" type="button">Clear chat</button>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>&copy; <span id="year">${yearValue}</span> Maurice Otieno</span>
      <a href="#top">Back to top</a>
    </footer>
    <script type="application/json" id="draft-project-data">${previewData}</script>
    <script>
      (() => {
        const data = JSON.parse(document.querySelector("#draft-project-data").textContent);
        const categories = data.categories || [];
        const projects = data.projects || [];
        const grid = document.querySelector("#project-grid");
        const searchInput = document.querySelector("#project-search");
        const filterButtons = [...document.querySelectorAll(".filter-button")];
        const projectCount = document.querySelector("#project-count");
        const year = document.querySelector("#year");
        let activeFilter = "all";

        year.textContent = new Date().getFullYear();
        projectCount.textContent = projects.length;

        function normalize(value) {
          return String(value || "").toLowerCase();
        }

        function slugLabel(value) {
          const category = categories.find((item) => item.id === value);
          return category ? category.label : value;
        }

        function flattenProject(project) {
          const categoryLabel = slugLabel(project.category);
          const electronicsKeywords = window.electronicsSearchKeywords
            ? window.electronicsSearchKeywords(project, categoryLabel)
            : [];
          return [
            project.id,
            project.title,
            categoryLabel,
            project.status,
            project.summary,
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
          ].map(normalize).join(" ");
        }

        function looksLikeBareWebAddress(value) {
          const clean = String(value || "").trim();
          if (!clean || /\\s/.test(clean) || /^(\\.?\\.?\\/|#|mailto:|tel:)/i.test(clean)) return false;
          if (/^[a-z][a-z0-9+.-]*:/i.test(clean)) return false;
          const host = clean.split(/[/?#]/)[0].toLowerCase();
          if (!/^[a-z0-9-]+(\\.[a-z0-9-]+)+$/.test(host)) return false;
          return !/\\.(pdf|docx?|xlsx?|pptx?|zip|7z|rar|png|jpe?g|gif|svg|webp|txt|md|csv|json|xml|log|c|h|cpp|hpp|py|js|mjs|ts|v|sv|vhdl?|spice|cir|net|asc|sch|kicad_sch|kicad_pcb)$/i.test(host);
        }

        function normalizeLinkTarget(target, options = {}) {
          const clean = String(target || "").trim();
          if (!clean) return "";
          if (/^\\/\\//.test(clean)) return "https:" + clean;
          if (/^www\\./i.test(clean)) return "https://" + clean;
          if (options.assumeWeb && looksLikeBareWebAddress(clean)) return "https://" + clean;
          return clean;
        }

        function isWebsiteLinkItem(item = {}, target = "") {
          const clean = String(target || "").trim();
          if (/^(https?:)?\\/\\//i.test(clean) || /^www\\./i.test(clean)) return true;
          const typeText = [item.kind, item.type, item.status, item.meta, item.label, item.title].filter(Boolean).join(" ").toLowerCase();
          return /\\b(link|website|web link|url|external|github|linkedin|drive|social|profile)\\b/.test(typeText);
        }

        function linkAttributes(url, item = {}) {
          const target = normalizeLinkTarget(url, { assumeWeb: isWebsiteLinkItem(item, url) });
          return /^https?:\\/\\//i.test(target) ? ' target="_blank" rel="noreferrer"' : "";
        }

        function isLocalDownloadTarget(target = "") {
          const value = normalizeLinkTarget(target, { assumeWeb: true });
          return Boolean(value) && !/^(https?:)?\\/\\//i.test(value) && !/^(mailto:|tel:|#)/i.test(value);
        }

        function downloadAttribute(target = "", item = {}) {
          const value = normalizeLinkTarget(target, { assumeWeb: isWebsiteLinkItem(item, target) });
          return isLocalDownloadTarget(value) ? " download" : "";
        }

        function resourceLink(item, label = item.label || item.title || item.name) {
          const rawTarget = item.url || item.artifact || item.href || item.file || item.path || item.src || "";
          const target = normalizeLinkTarget(rawTarget, { assumeWeb: isWebsiteLinkItem(item, rawTarget) });
          if (!target || item.status === "planned") {
            return '<span class="resource-link muted">' + label + '</span>';
          }
          return '<a class="resource-link" href="' + target + '"' + linkAttributes(target, item) + downloadAttribute(target, item) + '>' + label + '</a>';
        }

        function pillList(items, className = "") {
          return (items || []).map((item) => {
            const label = typeof item === "string" ? item : item.name || item.title || item.label || "";
            return '<span class="tag ' + className + '">' + label + '</span>';
          }).join("");
        }

        function evidenceList(items, renderItem, emptyMessage) {
          if (!items || !items.length) return '<p class="evidence-empty">' + emptyMessage + '</p>';
          return '<ul>' + items.map(renderItem).join("") + '</ul>';
        }

        function detailBlock(title, className, content) {
          return '<details class="' + className + '"><summary>' + title + '</summary>' + content + '</details>';
        }

        function mediaGrid(items) {
          if (!items || !items.length) return '<p class="evidence-empty">No project images have been added yet.</p>';
          return '<div class="media-grid">' + items.map((item) => (
            '<figure><a href="' + normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }) + '"' + linkAttributes(item.url, item) + '><img src="' + normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }) + '" alt="' + item.title + '"></a><figcaption><strong>' + item.title + '</strong><span>' + (item.caption || "") + '</span></figcaption></figure>'
          )).join("") + '</div>';
        }

        function customSectionBlocks(project) {
          return (project.sections || []).map((section) => detailBlock(section.title, "evidence-block evidence-wide",
            (section.description ? '<p class="evidence-empty">' + section.description + '</p>' : "") +
            evidenceList(section.items || [], (item) => '<li>' +
              (item.url ? resourceLink(item, item.title) : '<strong>' + item.title + '</strong>') +
              '<span>' + (item.type || "Section item") + ' &middot; ' + (item.status || "tracked") + '</span>' +
              (item.description ? '<p>' + item.description + '</p>' : "") +
            '</li>', "No content has been added yet.")
          )).join("");
        }

        function projectCard(project) {
          if (project.portfolioView) return parsedProjectCard(project);
          const category = categories.find((item) => item.id === project.category) || {};
          const accent = category.accent || "#117c7a";
          return '<article class="project-card catalog-card" id="' + project.id + '" style="--accent: ' + accent + '">' +
            '<div class="project-body">' +
            '<h3>' + project.title + '</h3><p>' + (project.summary || "") + '</p>' +
            ((project.highlights && project.highlights.length) ? detailBlock("Project highlights", "project-drawer", '<ul class="highlight-list">' + project.highlights.map((item) => '<li>' + (typeof item === "string" ? item : item.title || item.name || item.label || "") + '</li>').join("") + '</ul>') : "") +
            '<div class="evidence-grid" aria-label="' + project.title + ' evidence blocks">' +
            detailBlock("Documents", "evidence-block", evidenceList(project.documents, (item) => '<li>' + resourceLink(item, item.title) + '<span>' + (item.type || "Document") + ' &middot; ' + (item.status || "tracked") + '</span></li>', "No document artifact has been added yet.")) +
            detailBlock("Tests and results", "evidence-block", evidenceList(project.tests, (item) => '<li>' + resourceLink({ url: item.artifact, status: item.status }, item.name) + '<span>' + (item.method || "Validation") + ' &middot; ' + (item.status || "tracked") + '</span>' + (item.result ? '<p>' + item.result + '</p>' : "") + '</li>', "No test artifact has been added yet.")) +
            detailBlock("PCBs built", "evidence-block", evidenceList(project.pcbs, (item) => '<li>' + resourceLink({ url: item.artifact, status: item.status }, item.name) + '<span>' + (item.revision || "Revision") + ' &middot; ' + (item.status || "tracked") + '</span></li>', "No PCB build has been added yet.")) +
            detailBlock("Images", "evidence-block evidence-wide", mediaGrid(project.media)) + customSectionBlocks(project) + '</div>' +
            detailBlock("Tools and implementation files", "project-drawer", '<div class="project-tooling"><div><h4>Tools Used</h4><div class="project-meta">' + pillList(project.tools, "tool-tag") + '</div></div><div><h4>Languages</h4><div class="project-meta">' + pillList(project.languages, "language-tag") + '</div></div></div>') +
            '<div class="resource-list">' + (project.links || []).map((item) => resourceLink(item)).join("") + '</div></div></article>';
        }

        function parsedProjectResource(item) {
          if (item.kind === "image" && item.url) {
            return '<figure><a href="' + normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }) + '"' + linkAttributes(item.url, item) + '><img src="' + normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }) + '" alt="' + item.title + '"></a><figcaption><strong>' + item.title + '</strong>' + (item.description ? '<span>' + item.description + '</span>' : "") + '</figcaption></figure>';
          }
          return '<li>' +
            (item.url ? resourceLink({ url: item.url, status: "uploaded" }, item.title) : '<strong>' + item.title + '</strong>') +
            (item.meta ? '<span>' + item.meta + '</span>' : "") +
            (item.description ? '<p>' + item.description + '</p>' : "") +
          '</li>';
        }

        function parsedBriefBlock(section, fallbackSummary) {
          const briefItem = section && section.items ? section.items[0] || {} : {};
          const briefText = briefItem.description || fallbackSummary || "";
          return '<div class="project-brief-default"><h4>Overview</h4>' +
            (briefText ? '<p>' + briefText + '</p>' : '<p class="evidence-empty">No project overview has been added yet.</p>') +
            '</div>';
        }

        function parsedProjectSection(section) {
          const hasImages = (section.items || []).some((item) => item.kind === "image");
          const content = (section.description ? '<p class="evidence-empty">' + section.description + '</p>' : "") +
            ((section.items || []).length
              ? (hasImages
                ? '<div class="media-grid">' + section.items.map(parsedProjectResource).join("") + '</div>'
                : '<ul>' + section.items.map(parsedProjectResource).join("") + '</ul>')
              : '<p class="evidence-empty">No content has been added yet.</p>');
          return detailBlock(section.title, 'evidence-block ' + (hasImages ? 'evidence-wide' : ''), content);
        }

        function parsedProjectCard(project) {
          const category = categories.find((item) => item.id === project.category) || {};
          const accent = category.accent || "#117c7a";
          const view = project.portfolioView || {};
          const sections = view.sections || [];
          const briefSection = sections.find((section) => section.id === "brief");
          const otherSections = sections.filter((section) => section.id !== "brief");
          return '<article class="project-card catalog-card" id="' + project.id + '" style="--accent: ' + accent + '">' +
            '<div class="project-body">' +
            '<h3>' + (view.title || project.title) + '</h3>' + parsedBriefBlock(briefSection, project.summary || "") +
            '<div class="evidence-grid" aria-label="' + project.title + ' parsed project content">' +
            otherSections.map(parsedProjectSection).join("") +
            '</div></div></article>';
        }

        function categorySection(category, visibleProjects) {
          return '<section class="category-section ' + (visibleProjects.length ? "" : "empty-category-section") + '" aria-labelledby="' + category.id + '-title">' +
            '<div class="category-heading"><div><h3 id="' + category.id + '-title">' + category.label + '</h3></div>' +
            (visibleProjects.length ? '<span>' + visibleProjects.length + ' project' + (visibleProjects.length === 1 ? "" : "s") + '</span>' : "") + '</div>' +
            (visibleProjects.length ? '<p class="category-description">' + category.description + '</p>' : "") +
            '<div class="category-projects">' + visibleProjects.map(projectCard).join("") + '</div></section>';
        }

        function renderProjects() {
          const query = normalize(searchInput.value).trim();
          if (!projects.length) {
            grid.innerHTML = '<div class="empty-state"><h3>No parsed projects saved yet.</h3><p>Open a project, edit it, then click Save to build it into this portfolio preview.</p></div>';
            return;
          }
          const visible = projects.filter((project) => {
            const categoryMatch = activeFilter === "all" || project.category === activeFilter;
            return categoryMatch && (!query || flattenProject(project).includes(query));
          });
          if (!visible.length) {
            grid.innerHTML = '<div class="empty-state"><h3>No projects match that view.</h3><p>Search covers categories, project names, documents, tests, PCB builds, tools, languages, and links.</p></div>';
            return;
          }
          grid.innerHTML = categories.map((category) => {
            const visibleProjects = visible.filter((project) => project.category === category.id);
            const shouldShowEmptyCategory = !query && (activeFilter === "all" || activeFilter === category.id);
            return visibleProjects.length || shouldShowEmptyCategory ? categorySection(category, visibleProjects) : "";
          }).join("");
        }

        filterButtons.forEach((button) => {
          button.addEventListener("click", () => {
            activeFilter = button.dataset.filter;
            filterButtons.forEach((item) => item.classList.toggle("active", item === button));
            renderProjects();
          });
        });

        searchInput.addEventListener("input", renderProjects);

        document.addEventListener("click", (event) => {
          const link = event.target.closest('a[href^="#"]');
          if (!link) return;
          const target = document.querySelector(link.getAttribute("href"));
          if (!target) return;
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          try {
            history.replaceState(null, "", link.getAttribute("href"));
          } catch {
            // The iframe may be sandboxed by some browsers; scrolling is the important behavior.
          }
        });
      })();
    </script>
  </body>
</html>`;
}

function fullPortfolioPreviewHtmlExact() {
  const yearValue = new Date().getFullYear();
  const baseHref = `${window.location.origin}/`;
  const siteContent = normalizeSiteContent(catalog.siteContent || savedPortfolioCatalog.siteContent || {});
  const previewData = JSON.stringify({
    categories: savedPortfolioCatalog.categories || [],
    funFacts: normalizeFunFacts(catalog.funFacts || savedPortfolioCatalog.funFacts || []),
    funFactsRich: catalog.funFactsRich || savedPortfolioCatalog.funFactsRich || null,
    projects: savedPortfolioCatalog.projects || [],
    siteContent,
    siteSections: savedPortfolioCatalog.siteSections || []
  }).replaceAll("</", "<\\/");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="${baseHref}" />
    <meta name="description" content="Maurice Otieno's hardware engineering portfolio featuring analog and mixed-signal design, digital hardware, embedded systems, ASIC work, schematics, tests, PCBs, tools, and source code." />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Maurice Otieno" />
    <title>Maurice Otieno | Hardware Engineering Portfolio</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header" id="top">
      <a class="brand" href="#top" aria-label="Go to top">
        <span class="brand-lockup" aria-hidden="true">
          <img class="brand-icon" src="assets/omb-mark.png" alt="" />
          <span class="omb-engraving">OMB</span>
        </span>
        <span>
          <strong>Maurice Otieno</strong>
          <small>Hardware Engineering Portfolio</small>
        </span>
      </a>

      <div class="header-right">
        <nav class="site-nav" aria-label="Primary navigation">
          <a href="#ask-ai">Ask AI</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a class="header-avatar" href="#contact" aria-label="Go to Maurice Otieno contact information">
          <img src="assets/maurice-otieno-profile.png" alt="Maurice Otieno" />
        </a>
      </div>
    </header>

    <main>
      <section class="hero" aria-labelledby="hero-title">
        <img class="hero-image" src="assets/hero-analog-lab.png" alt="Light blue analog engineering bench with transistor-level op amp topology, AC-to-DC charger circuit, bench instruments, MCU, FPGA, ASIC, and EDA tool labels" />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow">${escapeHtml(siteContent.heroEyebrow)}</p>
          <h1 id="hero-title">${renderPlainMultiline(siteContent.heroTitle)}</h1>
          <p class="hero-copy">${renderPlainMultiline(siteContent.heroCopy)}</p>
          <div class="hero-actions">
            <a class="button primary" href="#projects">View projects</a>
            <a class="button secondary" href="#resume">View resume</a>
            <a class="button secondary" href="https://github.com/otienomaurice" target="_blank" rel="noreferrer">GitHub profile</a>
            <a class="ai-jump-link" href="#ask-ai" aria-label="Jump to the portfolio AI assistant">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v3m-5 7H4m16 0h-3M7.5 7.5 5.4 5.4m11.1 2.1 2.1-2.1M8 10h8v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" />
                <path d="M10 13h.01M14 13h.01M10 16h4" />
              </svg>
              <span>Ask AI</span>
            </a>
          </div>
        </div>
      </section>

      <section class="fun-facts-section" id="fun-facts-callout" aria-label="Fun facts" hidden></section>

      <section class="summary-band" aria-label="Portfolio highlights">
        <div class="metric">
          <strong id="project-count">0</strong>
          <span>presented projects</span>
        </div>
        <div class="metric">
          <strong>3 Tracks</strong>
          <span>analog, digital, embedded</span>
        </div>
        <div class="metric">
          <strong>Artifacts</strong>
          <span>source, diagrams, and reports</span>
        </div>
      </section>

      <section class="section" id="projects" aria-labelledby="projects-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Selected work</p>
            <h2 id="projects-title">Engineering Projects</h2>
          </div>
          <label class="search-wrap" for="project-search">
            <span>Search</span>
            <input id="project-search" type="search" placeholder="LTspice, PCB, frequency response, Verilog..." />
          </label>
        </div>

        <div class="filters" aria-label="Project filters">
          <button class="filter-button active" type="button" data-filter="all">All</button>
          <button class="filter-button" type="button" data-filter="analog-mixed-signal">Analog and Mixed Signal</button>
          <button class="filter-button" type="button" data-filter="digital">Digital</button>
          <button class="filter-button" type="button" data-filter="embedded">Embedded</button>
        </div>

        <div class="project-grid" id="project-grid" aria-live="polite"></div>
      </section>

      <section class="section resume-section" id="resume" aria-labelledby="resume-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Professional profile</p>
            <h2 id="resume-title">Resume</h2>
          </div>
          <div class="resume-actions">
            <a class="button primary" href="assets/resume.pdf" target="_blank" rel="noreferrer">Open PDF</a>
            <a class="button secondary" href="assets/resume.pdf" download>Download</a>
          </div>
        </div>

        <div class="resume-viewer">
          <object data="assets/resume.pdf" type="application/pdf">
            <p>
              View Maurice Otieno's resume as a PDF:
              <a href="assets/resume.pdf" target="_blank" rel="noreferrer">open resume</a>.
            </p>
          </object>
        </div>
      </section>

      <div id="dynamic-sections"></div>

      <section class="section process" id="process" aria-labelledby="process-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Engineering approach</p>
            <h2 id="process-title">Built To Be Reviewed</h2>
          </div>
        </div>
        <div class="process-grid">
          <article>
            <span class="step">01</span>
            <h3>Problem and constraints</h3>
            <p>Each project begins with the design objective, constraints, technical tradeoffs, and success criteria.</p>
          </article>
          <article>
            <span class="step">02</span>
            <h3>Build artifacts</h3>
            <p>Repositories, schematics, diagrams, documents, test notes, and demonstrations are organized for review.</p>
          </article>
          <article>
            <span class="step">03</span>
            <h3>Results and reflection</h3>
            <p>Results, lessons learned, and next design iterations show how each project developed technically.</p>
          </article>
        </div>
      </section>

      <section class="contact-band" id="contact" aria-labelledby="contact-title">
        <img class="profile-photo" src="assets/maurice-otieno-profile.png" alt="Portrait of Maurice Otieno" />
        <div class="contact-content">
          <div>
            <p class="eyebrow">Contact</p>
            <h2 id="contact-title">Maurice Otieno</h2>
            <p class="contact-intro">
              Hardware and software engineer focused on analog design, mixed-signal systems, embedded platforms, and digital hardware.
            </p>
            <div class="contact-details">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=otienomaurice12340@gmail.com" target="_blank" rel="noreferrer">otienomaurice12340@gmail.com</a>
              <a href="tel:+14845451567">+1 (484) 545-1567</a>
            </div>
          </div>
          <div class="contact-links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=otienomaurice12340@gmail.com" target="_blank" rel="noreferrer">Email</a>
            <a href="tel:+14845451567">Call</a>
            <a href="https://github.com/otienomaurice" target="_blank" rel="noreferrer">GitHub</a>
            <a href="assets/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
        <div class="ai-assistant-panel" id="ask-ai" aria-labelledby="ai-assistant-title">
          <div class="ai-assistant-console" aria-label="AI portfolio assistant">
            <h2 id="ai-assistant-title">Ask My Portfolio</h2>
            <div class="ai-assistant-status sr-only" id="ai-assistant-status" aria-live="polite"></div>
            <div class="ai-assistant-log" id="ai-assistant-log" aria-live="polite" aria-label="AI chat messages"></div>
            <form class="ai-assistant-form" id="ai-assistant-form">
              <label class="sr-only" for="ai-assistant-input">Ask the portfolio assistant</label>
              <input id="ai-assistant-input" type="text" autocomplete="off" placeholder="Ask about projects, tests, resume links, op amps, STM32..." />
              <button type="submit">Ask</button>
            </form>
            <button class="ai-clear-chat" id="ai-clear-chat" type="button">Clear chat</button>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>&copy; <span id="year">${yearValue}</span> Maurice Otieno</span>
      <a href="#top">Back to top</a>
    </footer>

    <script>window.__PORTFOLIO_CATALOG__ = ${previewData};<\/script>
    <script src="electronics-search.js"><\/script>
    <script src="script.js"><\/script>
  </body>
</html>`;
}

function renderPreview() {
  portfolioPreviewFrame.srcdoc = fullPortfolioPreviewHtmlExact();
}

async function openPortfolioPreview() {
  if (!(await saveAllSections({ refreshOpenPreviews: false }))) return;
  renderPreview();
  document.body.classList.add("full-window-open");
  portfolioPreviewDialog.showModal();
}

function renderAll() {
  ensureSiteSections();
  if (!selectedProjectId && catalog.projects.length) selectedProjectId = catalog.projects[0].id;
  const project = selectedProject();
  if (project && !sectionOptions(project).some((section) => section.id === activeSectionId)) {
    activeSectionId = "brief";
  }
  renderFunFactsEditor();
  renderSiteContentEditor();
  renderSiteSectionList();
  renderTree();
  renderFields(project);
  renderSectionTabs(project);
  renderSectionContent(project);
  if (portfolioPreviewDialog?.open) renderPreview();
}

function updateProjectField(field, value) {
  const project = selectedProject();
  if (!project) return;

  let needsChromeRender = false;
  let statusMessage = "Unsaved local changes.";
  if (field === "focus") {
    project.focus = value.split(",").map((item) => item.trim()).filter(Boolean);
  } else if (field === "summary") {
    const limited = limitWords(value, 1000);
    project.summary = limited;
    if (limited !== value && document.activeElement?.dataset?.field === "summary") {
      document.activeElement.value = limited;
      statusMessage = "Project overview is limited to 1000 words.";
    }
  } else if (field === "id") {
    const nextId = slugify(value);
    if (!nextId) return;
    project.id = nextId;
    selectedProjectId = nextId;
    needsChromeRender = true;
  } else {
    project[field] = value;
    needsChromeRender = ["title", "category", "status"].includes(field);
  }

  if (field === "title") projectWindowTitle.textContent = value || "Untitled project";
  setStatus(statusMessage);
  scheduleAutosave();
  if (needsChromeRender) {
    scheduleChromeRender();
  } else {
    schedulePreviewRender();
  }
}

function renameSelectedProject() {
  const project = selectedProject();
  if (!project) return;
  projectTitleMenu.hidden = true;
  beginTitleRename();
}

function projectMetaRows(project) {
  if (!project) return [];
  const category = categoryById(project.category);
  const template = projectTemplateFor(project);
  const savedProject = (savedPortfolioCatalog.projects || []).find((item) => item.id === project.id);
  const design = project.design || {};
  const designFileCount = [
    ...(design.brief?.files || []),
    ...(design.documentation?.files || []),
    ...(design.documentation?.references || []),
    ...(design.documentation?.mathAnalysis || []),
    ...(design.simulation?.files || []),
    ...(design.simulation?.results || [])
  ].length;
  const uploadedFileCount = [
    ...(project.documents || []),
    ...(project.tests || []),
    ...(project.pcbs || []),
    ...(project.media || []),
    ...(project.links || []),
    ...(project.sections || []).flatMap((section) => section.items || [])
  ].filter((item) => item.url || item.artifact).length + designFileCount;
  return [
    ["Title", project.title || "Untitled project"],
    ["Project ID / folder", project.id || "Not assigned"],
    ["Category", category.label || project.category || "Not assigned"],
    ["Status", project.status || "Draft"],
    ["Appearance", template.label || project.templateLabel || "No appearance - white project layout"],
    ["Appearance ID", project.templateId || "None"],
    ["Portfolio preview", savedProject ? "Saved into parsed portfolio preview" : "Not yet saved into portfolio preview"],
    ["Custom sections", String((project.sections || []).length)],
    ["Project files / links", String(uploadedFileCount)],
    ["Tools", String((project.tools || []).length)],
    ["Languages", String((project.languages || []).length)],
    ["Last parsed", savedProject?.portfolioView?.builtAt ? new Date(savedProject.portfolioView.builtAt).toLocaleString() : "Not parsed yet"]
  ];
}

function openProjectMetaDetails() {
  const project = selectedProject();
  if (!project) return;
  projectTitleMenu.hidden = true;
  projectMetaTitle.textContent = project.title || "Project details";
  projectMetaGrid.innerHTML = projectMetaRows(project).map(([label, value]) => `
    <article>
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");
  if (!projectMetaDialog.open) projectMetaDialog.showModal();
}

function selectTitleText() {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(projectWindowTitle);
  selection.removeAllRanges();
  selection.addRange(range);
}

function beginTitleRename() {
  const project = selectedProject();
  if (!project) return;
  originalTitleDraft = project.title || "";
  projectWindowTitle.contentEditable = "true";
  projectWindowTitle.focus();
  selectTitleText();
  titleRenameActions.hidden = false;
  setStatus("Edit the title, then click Save title.");
}

function endTitleRename(saveChanges) {
  const project = selectedProject();
  if (!project) return;
  const nextTitle = projectWindowTitle.textContent.trim();
  projectWindowTitle.contentEditable = "false";
  titleRenameActions.hidden = true;
  window.getSelection()?.removeAllRanges();
  if (saveChanges && nextTitle) {
    project.title = nextTitle;
    projectWindowTitle.textContent = nextTitle;
    setStatus("Project title saved in the editor. Click Save project to include this version in the portfolio preview.");
    scheduleAutosave();
    scheduleChromeRender();
  } else {
    projectWindowTitle.textContent = originalTitleDraft || project.title || "Untitled project";
    setStatus("Title edit canceled.");
  }
}

function makeItemForSection(key, title, description = "", url = "") {
  if (key === "documents") return { title, type: "Document", url, status: url ? "uploaded" : "draft" };
  if (key === "tests") return { name: title, method: description || "Validation notes", status: url ? "uploaded" : "draft", artifact: url, result: description };
  if (key === "pcbs") return { name: title, revision: "Rev A", status: url ? "uploaded" : "draft", artifact: url };
  if (key === "media") return { title, url, status: url ? "uploaded" : "draft", caption: description };
  if (key === "links") return { label: title, url };
  return { title, description, url, status: url ? "uploaded" : "draft" };
}

function addTextItem(key) {
  const project = selectedProject();
  const title = prompt("Type a title for this item.");
  if (!project || !title) return;

  project[key] = project[key] || [];
  if (["highlights", "tools", "languages"].includes(key)) {
    project[key].push(title);
  } else {
    const description = prompt("Add a short description if you want.") || "";
    project[key].push(makeItemForSection(key, title, description));
  }
  setStatus("Item added in the editor. Click Save project to include this version in the portfolio preview.");
  scheduleAutosave();
  renderAll();
}

function editObjectItem(key, index) {
  const project = selectedProject();
  const item = project?.[key]?.[index];
  if (!item) return;

  const currentTitle = item.title || item.name || item.label || "";
  const nextTitle = prompt("Edit title.", currentTitle);
  if (!nextTitle) return;
  const nextDescription = prompt("Edit description.", item.description || item.caption || item.result || item.method || "") || "";

  if ("title" in item) item.title = nextTitle;
  if ("name" in item) item.name = nextTitle;
  if ("label" in item) item.label = nextTitle;
  if ("caption" in item) item.caption = nextDescription;
  if ("result" in item) item.result = nextDescription;
  if ("description" in item) item.description = nextDescription;
  if (!("caption" in item) && !("result" in item) && !("description" in item)) item.description = nextDescription;

  setStatus("Item edited in the editor. Click Save project to include this version in the portfolio preview.");
  scheduleAutosave();
  renderAll();
}

function chooseFile() {
  return new Promise((resolve) => {
    filePicker.value = "";
    filePicker.onchange = () => resolve(filePicker.files[0] || null);
    filePicker.click();
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function extensionFor(fileName) {
  const match = String(fileName || "").match(/(\.[a-z0-9]+)$/i);
  return match ? match[1] : "";
}

function withExtension(name, fallbackFileName) {
  const trimmed = String(name || "").trim();
  if (!trimmed) return fallbackFileName;
  return /\.[a-z0-9]+$/i.test(trimmed) ? trimmed : `${trimmed}${extensionFor(fallbackFileName)}`;
}

function uploadProfile(key) {
  const profiles = {
    media: {
      label: "image",
      accept: "image/png,image/jpeg,image/webp,image/gif,image/svg+xml",
      extensions: [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"],
      mimeStarts: ["image/"]
    },
    pcbs: {
      label: "PCB artifact",
      accept: ".kicad_pcb,.kicad_sch,.sch,.brd,.zip,.pdf,.png,.jpg,.jpeg,.webp,.cir,.net,.lib,.asc",
        extensions: [".kicad_pcb", ".kicad_sch", ".sch", ".brd", ".zip", ".pdf", ".png", ".jpg", ".jpeg", ".webp", ".cir", ".net", ".lib", ".asc"],
      mimeStarts: ["image/"]
    },
    tests: {
      label: "test artifact",
      accept: ".pdf,.xlsx,.xls,.csv,.txt,.md,.log,.png,.jpg,.jpeg,.webp",
        extensions: [".pdf", ".xlsx", ".xls", ".csv", ".txt", ".md", ".log", ".png", ".jpg", ".jpeg", ".webp",".cir",".net",".lib",".asc"],
      mimeStarts: ["image/", "text/"]
    },
    documents: {
      label: "document",
      accept: ".pdf,.doc,.docx,.ppt,.pptx,.txt,.md,.kicad_sch,.asc,.cir,.spice,.zip",
      extensions: [".pdf", ".doc", ".docx", ".ppt", ".pptx", ".txt", ".md", ".kicad_sch", ".asc", ".cir", ".spice", ".zip"],
      mimeStarts: ["text/"]
    },
    sections: {
      label: "section file",
        accept: ".pdf,.doc,.docx,.ppt,.pptx,.txt,.md,.xlsx,.xls,.csv,.log,.png,.jpg,.jpeg,.webp,.zip,.cir,.net,.lib,.asc",
        extensions: [".pdf", ".doc", ".docx", ".ppt", ".pptx", ".txt", ".md", ".xlsx", ".xls", ".csv", ".log", ".png", ".jpg", ".jpeg", ".webp", ".zip", , ".cir", ".net", ".lib", ".asc"],
      mimeStarts: ["image/", "text/"]
    }
  };
  return profiles[key] || profiles.sections;
}

function allowedFileMessage(profile) {
  return `Add a ${profile.label}: ${profile.extensions.join(", ")}`;
}

function isAllowedUpload(key, fileName, mimeType = "") {
  const profile = uploadProfile(key);
  const extension = extensionFor(fileName).toLowerCase();
  if (key === "media" && !profile.extensions.includes(extension) && !mimeType.startsWith("image/")) {
    return { ok: false, message: "Images can only accept image files. Add PDFs under Documents, Tests, or a custom section instead." };
  }
  const allowedByExtension = profile.extensions.includes(extension);
  const allowedByMime = profile.mimeStarts.some((prefix) => mimeType.startsWith(prefix));
  return {
    ok: allowedByExtension || allowedByMime,
    message: `${fileName || "This file"} is not a supported ${profile.label}. ${allowedFileMessage(profile)}.`
  };
}

function validateAssetForSection(key, asset) {
  if (asset.source === "local") {
    return isAllowedUpload(key, asset.fileName || asset.file?.name || "", asset.file?.type || "");
  }
  if (!extensionFor(asset.url || asset.title || "")) {
    return { ok: true, message: "" };
  }
  return isAllowedUpload(key, asset.url || asset.title || "", "");
}

function dialogValue(dialog) {
  return new Promise((resolve) => {
    const onClose = () => {
      dialog.removeEventListener("close", onClose);
      resolve(dialog.returnValue === "save");
    };
    dialog.addEventListener("close", onClose);
    dialog.showModal();
  });
}

async function openAssetDialog(key) {
  const profile = uploadProfile(key);
  assetDialogTitle.textContent = key === "media" ? "Add image" : `Add ${profile.label}`;
  assetSource.value = "local";
  assetFile.value = "";
  assetFile.accept = profile.accept;
  assetUrl.value = "";
  assetTitle.value = "";
  assetCaption.value = "";
  captionSource.value = "text";
  captionFile.value = "";
  updateAssetDialogVisibility();

  const saved = await dialogValue(assetDialog);
  if (!saved) return null;

  let file = null;
  let url = assetUrl.value.trim();
  let fileName = "";
  let title = assetTitle.value.trim();

  if (assetSource.value === "local") {
    file = assetFile.files[0];
    if (!file) {
      setStatus("Choose a local file first.");
      return null;
    }
    fileName = withExtension(title, file.name);
    title = title || file.name;
    const validation = isAllowedUpload(key, fileName, file.type);
    if (!validation.ok) {
      setStatus(validation.message);
      return null;
    }
  } else {
    if (!url) {
      setStatus("Paste a web or Google Drive link first.");
      return null;
    }
    title = title || url.split("/").filter(Boolean).pop() || "Linked asset";
    const validation = validateAssetForSection(key, { source: assetSource.value, url, title });
    if (!validation.ok) {
      setStatus(validation.message);
      return null;
    }
  }

  let caption = assetCaption.value.trim();
  if (captionSource.value === "file" && captionFile.files[0]) {
    caption = await captionFile.files[0].text();
  }

  return {
    caption,
    file,
    fileName,
    source: assetSource.value,
    title,
    url
  };
}

async function uploadToSection(key, folder, customSectionId = "", customItemIndex = null) {
  const project = selectedProject();
  if (!project) return;

  const asset = await openAssetDialog(key);
  if (!asset) return;

  const validation = validateAssetForSection(key, asset);
  if (!validation.ok) {
    setStatus(validation.message);
    return;
  }

  const sectionFolder = customSectionId || folder || key;
  let url = asset.url;
  let type = asset.source === "drive" ? "Google Drive" : "Web link";

  if (asset.file) {
    const data = await readFileAsDataUrl(asset.file);
    const response = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectId: project.id,
        section: sectionFolder,
        fileName: asset.fileName,
        data
      })
    });
    const result = await response.json();
    if (!response.ok) {
      setStatus(result.error || "Upload failed.");
      return;
    }
    url = result.url;
    type = asset.file.type || "File";
  }

  if (customSectionId) {
    const section = (project.sections || []).find((item) => item.id === customSectionId);
    const uploadedItem = { title: asset.title, description: asset.caption, type, url, status: asset.source === "local" ? "uploaded" : "linked" };
    if (customItemIndex !== null && customItemIndex !== "") {
      const parent = section?.items?.[Number(customItemIndex)];
      if (!parent || parent.url) return;
      parent.children = parent.children || [];
      parent.children.push(uploadedItem);
    } else {
      section.items = section.items || [];
      section.items.push(uploadedItem);
    }
  } else {
    project[key] = project[key] || [];
    project[key].push(makeItemForSection(key, asset.title, asset.caption, url));
  }

  setStatus(asset.source === "local"
    ? `Saved ${asset.fileName} in the editor. Click Save project to include it in the portfolio preview.`
    : `Linked ${asset.title}. Click Save project to include it in the portfolio preview.`);
  scheduleAutosave();
  renderAll();
}

async function uploadToDesignSection(pathValue, folder, kind = "document") {
  const project = selectedProject();
  if (!project) return;

  const asset = await openAssetDialog(kind === "simulation-result" ? "tests" : "sections");
  if (!asset) return;

  const validation = validateAssetForSection(kind === "simulation-result" ? "tests" : "sections", asset);
  if (!validation.ok) {
    setStatus(validation.message);
    return;
  }

  let url = asset.url;
  let type = asset.source === "drive" ? "Google Drive" : "Web link";
  if (asset.file) {
    const data = await readFileAsDataUrl(asset.file);
    const response = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectId: project.id,
        section: folder || "design",
        fileName: asset.fileName,
        data
      })
    });
    const result = await response.json();
    if (!response.ok) {
      setStatus(result.error || "Upload failed.");
      return;
    }
    url = result.url;
    type = asset.file.type || "File";
  }

  const items = designArray(project, pathValue);
  items.push({
    ...makeDesignItem(kind, asset.title, asset.caption, url),
    type
  });
  setStatus(asset.source === "local"
    ? `Saved ${asset.fileName} in the design workspace. Click Save project to include it in the portfolio preview.`
    : `Linked ${asset.title}. Click Save project to include it in the portfolio preview.`);
  scheduleAutosave();
  renderAll();
}

async function openSectionDialog() {
  sectionDialogTitle.textContent = "Create a section";
  sectionTitle.placeholder = "Design, Measurements, Firmware...";
  sectionDescription.placeholder = "Optional description shown to recruiters";
  sectionTitle.value = "";
  sectionDescription.value = "";
  const saved = await dialogValue(sectionDialog);
  if (!saved) return null;

  const title = sectionTitle.value.trim();
  if (!title) {
    setStatus("Type a section title before saving.");
    return null;
  }

  return {
    description: sectionDescription.value.trim(),
    title
  };
}

async function addCustomSection() {
  const project = selectedProject();
  if (!project) return;

  const sectionInput = await openSectionDialog();
  if (!sectionInput) return;

  let id = slugify(sectionInput.title);
  const existingIds = new Set((project.sections || []).map((section) => section.id));
  let suffix = 2;
  while (existingIds.has(id)) {
    id = `${slugify(sectionInput.title)}-${suffix}`;
    suffix += 1;
  }

  project.sections = project.sections || [];
  project.sections.push({ id, title: sectionInput.title, description: sectionInput.description, items: [] });
  activeSectionId = `custom:${id}`;
  setStatus("New section added in the editor. Click Save project to include this version in the portfolio preview.");
  scheduleAutosave();
  renderAll();
}

function addCustomItem(sectionId) {
  const project = selectedProject();
  const section = (project.sections || []).find((item) => item.id === sectionId);
  const title = prompt("Type a subsection title.");
  if (!section || !title) return;
  const description = prompt("Paste or type a text description if you want.") || "";

  section.items = section.items || [];
  section.items.push({ title, description, type: "Text", status: "draft" });
  setStatus("Subsection added locally.");
  scheduleAutosave();
  renderAll();
}

function editCustomItem(sectionId, index) {
  const project = selectedProject();
  const item = (project.sections || []).find((section) => section.id === sectionId)?.items?.[index];
  if (!item) return;
  const title = prompt("Edit subsection title.", item.title || "");
  if (!title) return;
  item.title = title;
  item.description = prompt("Edit description.", item.description || "") || "";
  setStatus("Subsection edited locally.");
  scheduleAutosave();
  renderAll();
}

function catalogForSave(endpoint) {
  if (funFactsInput) syncFunFactsFromInput();
  if (siteHeroTitleInput || siteHeroCopyInput || siteHeroEyebrowInput) syncSiteContentFromInputs();
  if (endpoint === "/api/apply-catalog") {
    return {
      ...savedPortfolioCatalog,
      funFacts: normalizeFunFacts(catalog.funFacts || savedPortfolioCatalog.funFacts || []),
      funFactsRich: clone(catalog.funFactsRich || savedPortfolioCatalog.funFactsRich || null),
      siteContent: clone(normalizeSiteContent(catalog.siteContent || savedPortfolioCatalog.siteContent || {})),
      siteSections: (catalog.siteSections || []).filter(siteSectionRenderable).map(clone)
    };
  }
  return catalog;
}

async function saveCatalog(endpoint, message) {
  const targetCatalog = catalogForSave(endpoint);
  if (endpoint === "/api/apply-catalog" && !draftSavedSinceChanges) {
    showBuilderError(
      "Save draft required",
      "Please click Save draft before applying this portfolio to the live site.",
      "Apply to site was stopped before commit and push. Save the draft, then click Apply to site again."
    );
    setStatus("Apply to site stopped. Save draft first.");
    return;
  }
  if (endpoint === "/api/apply-catalog" && !(targetCatalog.projects || []).length) {
    showBuilderError(
      "No saved project preview",
      "Save a project or use Save all sections before applying to the live site.",
      "Apply to site was stopped before commit and push."
    );
    setStatus("Apply to site stopped. Save a project or use Save all sections first.");
    return;
  }

  try {
    clearTimeout(autosaveTimer);
    saveDraftButton.disabled = true;
    applyCatalogButton.disabled = true;
    setStatus(endpoint === "/api/apply-catalog" ? "Applying site changes..." : "Saving draft...");
    const response = await fetch(`${endpoint}?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ catalog: targetCatalog })
    });
    const result = await response.json();
    if (!response.ok) {
      setStatus(result.error || "Save failed.");
      return;
    }
    if (result.publish) {
      setStatus(result.publish.pushed
        ? `${message}: ${result.file}. Pushed to ${result.publish.branch}.`
        : `${message}: ${result.file}. Git push failed: ${result.publish.error}`);
      showPublishResult(result);
      return;
    }
    if (endpoint === "/api/save-draft") {
      draftSavedSinceChanges = true;
    }
    setStatus(`${message}: ${result.file}`);
  } catch {
    setStatus("Save failed. Make sure the local server window is still running.");
  } finally {
    saveDraftButton.disabled = false;
    applyCatalogButton.disabled = false;
  }
}

async function loadData() {
  const [catalogResponse, templateResponse] = await Promise.all([
    fetch(`/api/catalog?t=${Date.now()}`, { cache: "no-store" }),
    fetch(`/api/templates?t=${Date.now()}`, { cache: "no-store" })
  ]);
  const catalogData = await catalogResponse.json();
  const templateData = await templateResponse.json();

  catalog = catalogData.catalog;
  catalog.funFacts = Object.prototype.hasOwnProperty.call(catalog, "funFacts")
    ? normalizeFunFacts(catalog.funFacts)
    : clone(defaultFunFacts);
  catalog.funFactsRich = catalog.funFactsRich || null;
  catalog.siteContent = normalizeSiteContent(catalog.siteContent || {});
  catalog.siteSections = catalog.siteSections || [];
  catalog.projects = (catalog.projects || []).filter((project) => !starterProjectIds.has(project.id));
  catalog.projects.forEach((project) => {
    if (isAnalogProject(project)) ensureDesignModel(project);
  });
  savedPortfolioCatalog = {
    categories: clone(catalog.categories || []),
    funFacts: clone(catalog.funFacts || []),
    funFactsRich: clone(catalog.funFactsRich || null),
    siteContent: clone(catalog.siteContent || defaultSiteContent),
    projects: [],
    siteSections: clone(catalog.siteSections || [])
  };
  templates = templateData.templates || [];
  setStatus(`Loaded ${catalogData.source} catalog. Builder controls are local-only.`);

  templateSelect.innerHTML = groupedTemplateOptions();
  newCategorySelect.innerHTML = catalog.categories.map((category) => `<option value="${category.id}">${category.label}</option>`).join("");
  renderCategoryDropdown();
  selectedProjectId = catalog.projects[0]?.id || "";
  expandedCategories = new Set(catalog.categories.map((category) => category.id));
  renderAll();
}

templateSelect.addEventListener("change", () => {
  const template = templates.find((item) => item.id === templateSelect.value);
  showTemplatePreview(template);
});

templatePreviewClose.addEventListener("click", () => {
  templateDialog.close();
});

builderGuideOpen.addEventListener("click", () => {
  builderGuideDialog.showModal();
});

builderGuideClose.addEventListener("click", () => {
  builderGuideDialog.close();
});

projectWindowTitle.addEventListener("dblclick", (event) => {
  event.preventDefault();
  clearTimeout(titleClickTimer);
  beginTitleRename();
});

projectWindowTitle.addEventListener("keydown", (event) => {
  if (projectWindowTitle.isContentEditable) {
    if (event.key === "Enter") {
      event.preventDefault();
      endTitleRename(true);
    }
    if (event.key === "Escape") {
      event.preventDefault();
      endTitleRename(false);
    }
    return;
  }
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  beginTitleRename();
});

projectWindowTitle.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const dialogBounds = projectDialog.getBoundingClientRect();
  projectTitleMenu.style.left = `${event.clientX - dialogBounds.left}px`;
  projectTitleMenu.style.top = `${event.clientY - dialogBounds.top}px`;
  projectTitleMenu.hidden = false;
});

projectTitleMenu.addEventListener("click", (event) => {
  const button = event.target.closest("[data-title-action]");
  if (!button) return;
  if (button.dataset.titleAction === "close") {
    projectTitleMenu.hidden = true;
    return;
  }
  if (button.dataset.titleAction === "rename") renameSelectedProject();
  if (button.dataset.titleAction === "details") openProjectMetaDetails();
});

titleRenameSave.addEventListener("click", () => endTitleRename(true));
titleRenameCancel.addEventListener("click", () => endTitleRename(false));
projectMetaClose.addEventListener("click", () => projectMetaDialog.close());

viewProjectPreviewButton.addEventListener("click", openProjectPortfolioPreview);
projectPreviewClose.addEventListener("click", closeProjectPreviewWindow);
projectPreviewDialog.addEventListener("close", () => {
  document.body.classList.remove("full-window-open");
});

projectPreviewBack.addEventListener("click", projectPreviewBackStep);
projectPreviewForward.addEventListener("click", projectPreviewForwardStep);

projectPreviewContent.addEventListener("click", (event) => {
  const sectionButton = event.target.closest("[data-preview-section-index]");
  if (!sectionButton || !activeProjectPreviewProject?.portfolioView) return;
  openProjectPreviewNode(
    Number(sectionButton.dataset.previewSectionIndex),
    previewPathFromString(sectionButton.dataset.previewResourcePath || "")
  );
});
saveProjectButton.addEventListener("click", saveSelectedProjectToPortfolio);
saveProjectCloseButton.addEventListener("click", saveSelectedProjectAndClose);
openPortfolioPreviewButton.addEventListener("click", openPortfolioPreview);
saveAllSectionsButton.addEventListener("click", saveAllSections);
portfolioPreviewClose.addEventListener("click", () => {
  portfolioPreviewDialog.close();
});
portfolioPreviewDialog.addEventListener("close", () => {
  document.body.classList.remove("full-window-open");
});
publishTargetOpen?.addEventListener("click", openPublishTargetDialog);
publishTargetClose?.addEventListener("click", () => {
  publishTargetDialog.close();
});
publishTargetCancel?.addEventListener("click", () => {
  publishTargetDialog.close();
});
publishTargetForm?.addEventListener("submit", savePublishTarget);
publishTargetRepository?.addEventListener("input", () => {
  const loadedRepository = publishTargetRepository.dataset.loadedValue || currentPublishTarget?.remote || "";
  if (publishTargetRepository.value.trim() !== loadedRepository.trim() && publishTargetDomain?.dataset.autofilled === "true") {
    publishTargetDomain.value = "";
  }
});
publishTargetDomain?.addEventListener("input", () => {
  publishTargetDomain.dataset.autofilled = "false";
});
publishResultClose.addEventListener("click", () => {
  publishResultDialog.close();
});

addProjectButton.addEventListener("click", () => {
  toggleCategoryDropdown();
});

addSiteSectionButton.addEventListener("click", addSiteSection);

funFactsInput?.addEventListener("input", () => {
  syncFunFactsFromInput();
  scheduleAutosave();
  schedulePreviewRender();
});

saveFunFactsButton?.addEventListener("click", () => {
  const facts = syncFunFactsFromInput();
  setStatus(`Saved ${facts.length} fun fact${facts.length === 1 ? "" : "s"} locally. Click Save draft before applying to site.`);
  scheduleAutosave(100);
  schedulePreviewRender();
});

clearFunFactsButton?.addEventListener("click", () => {
  catalog.funFacts = [];
  catalog.funFactsRich = { blocks: [] };
  populateStandaloneRichEditor(funFactsInput, null, "");
  syncFunFactsFromInput();
  setStatus("Fun facts cleared locally. Click Save draft before applying to site.");
  scheduleAutosave(100);
  schedulePreviewRender();
});

[siteHeroEyebrowInput, siteHeroTitleInput, siteHeroCopyInput].filter(Boolean).forEach((input) => {
  input.addEventListener("input", () => {
    syncSiteContentFromInputs();
    setStatus("Front page text updated locally. Click Save draft before applying to site.");
    scheduleAutosave();
    schedulePreviewRender();
  });
});

saveSiteContentButton?.addEventListener("click", () => {
  syncSiteContentFromInputs();
  setStatus("Front page text saved locally. Click Save draft before applying to site.");
  scheduleAutosave(100);
  schedulePreviewRender();
});

siteSectionList.addEventListener("click", (event) => {
  const toggleButton = event.target.closest("[data-site-section-toggle]");
  const editButton = event.target.closest("[data-site-section-edit]");
  const backgroundButton = event.target.closest("[data-site-section-bg]");
  const clearBackgroundButton = event.target.closest("[data-site-section-bg-clear]");
  const deleteButton = event.target.closest("[data-site-section-delete]");
  const addSubsectionButton = event.target.closest("[data-site-subsection-add]");
  const editSubsectionButton = event.target.closest("[data-site-subsection-edit]");
  const deleteSubsectionButton = event.target.closest("[data-site-subsection-delete]");
  const addLinkButton = event.target.closest("[data-site-link-add]");
  const editLinkButton = event.target.closest("[data-site-link-edit]");
  const deleteLinkButton = event.target.closest("[data-site-link-delete]");
  if (toggleButton) toggleSiteSectionVisibility(toggleButton.dataset.siteSectionToggle);
  if (editButton) editSiteSection(editButton.dataset.siteSectionEdit);
  if (addSubsectionButton) addSiteSubsection(addSubsectionButton.dataset.siteSubsectionAdd);
  if (editSubsectionButton) editSiteSubsection(editSubsectionButton.dataset.siteSubsectionEdit, editSubsectionButton.dataset.index);
  if (deleteSubsectionButton) deleteSiteSubsection(deleteSubsectionButton.dataset.siteSubsectionDelete, deleteSubsectionButton.dataset.index);
  if (addLinkButton) addSiteSectionLink(addLinkButton.dataset.siteLinkAdd);
  if (editLinkButton) editSiteSectionLink(editLinkButton.dataset.siteLinkEdit, editLinkButton.dataset.index);
  if (deleteLinkButton) deleteSiteSectionLink(deleteLinkButton.dataset.siteLinkDelete, deleteLinkButton.dataset.index);
  if (backgroundButton) setSiteSectionBackground(backgroundButton.dataset.siteSectionBg);
  if (clearBackgroundButton) clearSiteSectionBackground(clearBackgroundButton.dataset.siteSectionBgClear);
  if (deleteButton) deleteSiteSection(deleteButton.dataset.siteSectionDelete);
});

categoryDropdown.addEventListener("click", (event) => {
  const button = event.target.closest("[data-create-category]");
  if (!button) return;
  openProjectCreateDialog(button.dataset.createCategory);
});

projectCreateCancel.addEventListener("click", () => {
  projectCreateDialog.close("cancel");
});

projectCreateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!pendingCreateCategoryId) return;
  createProjectInCategory(pendingCreateCategoryId);
  projectCreateDialog.close("save");
});

projectTree.addEventListener("click", (event) => {
  const categoryToggle = event.target.closest("[data-toggle-category]");
  const deleteProjectButton = event.target.closest("[data-delete-project]");
  const projectButton = event.target.closest("[data-project-id]");
  if (deleteProjectButton) {
    event.stopPropagation();
    requestProjectDelete(deleteProjectButton.dataset.deleteProject);
    return;
  }
  if (categoryToggle) {
    const categoryId = categoryToggle.dataset.toggleCategory;
    if (expandedCategories.has(categoryId)) {
      expandedCategories.delete(categoryId);
    } else {
      expandedCategories.add(categoryId);
    }
    renderAll();
    return;
  }
  if (projectButton) {
    openProjectWindow(projectButton.dataset.projectId, "brief");
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".add-project-wrap")) toggleCategoryDropdown(false);
  if (!event.target.closest("#summary-context-menu")) hideSummaryContextMenu();
  if (!event.target.closest("#project-title-menu") && !event.target.closest("#project-window-title")) {
    projectTitleMenu.hidden = true;
  }
});

projectFields.addEventListener("click", async (event) => {
  if (handleRichCaretClick(event)) return;
  const createSummary = event.target.closest("[data-summary-create]");
  const saveSummary = event.target.closest("[data-summary-save]");
  const cancelSummary = event.target.closest("[data-summary-cancel]");
  const deleteSummary = event.target.closest("[data-summary-delete]");
  const blockAction = event.target.closest("[data-rich-block-action]");
  const richAction = event.target.closest("[data-rich-action]");
  const richBlock = event.target.closest(".rich-block");
  if (richBlock) selectRichBlock(richBlock);
  if (blockAction) {
    const editor = blockAction.closest("[data-rich-editor='summary']");
    const block = blockAction.closest(".rich-block");
    selectRichBlock(block);
    if (blockAction.dataset.richBlockAction === "edit") await editSelectedRichBlock(editor);
    if (blockAction.dataset.richBlockAction === "delete") deleteSelectedRichBlock(editor);
    return;
  }
  if (createSummary) {
    const project = selectedProject();
    summaryEditorProjectId = project?.id || "";
    renderFields(project);
    return;
  }
  if (saveSummary) {
    await saveRichSummary();
    return;
  }
  if (cancelSummary) {
    summaryEditorProjectId = "";
    activeSummaryEditor = null;
    renderFields(selectedProject());
    return;
  }
  if (deleteSummary) {
    deleteProjectSummary(selectedProject());
    return;
  }
  if (richAction) {
    await handleRichAction(richAction.dataset.richAction, projectFields.querySelector("[data-rich-editor='summary']"));
  }
});

function handleRichEditorContextMenu(event) {
    const editor = event.target.closest("[data-rich-editor]");
    const textBlock = event.target.closest(".rich-text-block");

    if (!editor && !textBlock) return;

    event.preventDefault();
    hideTextSelectionInspector();

    activeSummaryEditor = editor || textBlock.closest("[data-rich-editor]");
    const textOnly = activeSummaryEditor.dataset.richTextOnly === "true";
    summaryContextMenu.querySelectorAll("[data-rich-action='add-image'], [data-rich-action='add-formula']").forEach((button) => {
      button.hidden = textOnly;
    });
    const liveRange = selectionRangeInsideEditor(activeSummaryEditor);
    const savedRange = activeTextSelectionRange && !activeTextSelectionRange.collapsed
      ? activeTextSelectionRange.cloneRange()
      : null;
    const savedContainer = savedRange?.commonAncestorContainer?.nodeType === Node.TEXT_NODE
      ? savedRange.commonAncestorContainer.parentElement
      : savedRange?.commonAncestorContainer;
    if (liveRange && !liveRange.collapsed) {
      activeRichSelectionRange = liveRange.cloneRange();
      activeTextSelectionRange = liveRange.cloneRange();
    } else if (savedRange && savedContainer && activeSummaryEditor.contains(savedContainer)) {
      activeRichSelectionRange = savedRange.cloneRange();
      restoreRichSelection(activeSummaryEditor);
    } else {
      captureRichSelection(activeSummaryEditor);
    }
    selectRichBlock(event.target.closest(".rich-block") || currentRichBlock(activeSummaryEditor));
    syncRichContextMenuControls(activeSummaryBlock);

    const menuHost = activeSummaryEditor.closest("dialog") || document.body;
    if (summaryContextMenu.parentElement !== menuHost) menuHost.append(summaryContextMenu);

    summaryContextMenu.style.left = `${event.clientX}px`;
    summaryContextMenu.style.top = `${event.clientY}px`;
    summaryContextMenu.style.maxHeight = "";
    summaryContextMenu.hidden = false;
    const hostRect = menuHost.getBoundingClientRect();
    const bounds = {
      bottom: Math.min(window.innerHeight - 8, hostRect.bottom - 8),
      left: Math.max(8, hostRect.left + 8),
      right: Math.min(window.innerWidth - 8, hostRect.right - 8),
      top: Math.max(8, hostRect.top + 8)
    };
    summaryContextMenu.style.maxHeight = `${Math.max(180, bounds.bottom - bounds.top)}px`;
    const menuRect = summaryContextMenu.getBoundingClientRect();
    const left = Math.max(bounds.left, Math.min(event.clientX, bounds.right - menuRect.width));
    const top = Math.max(bounds.top, Math.min(event.clientY, bounds.bottom - menuRect.height));
    summaryContextMenu.style.left = `${left}px`;
    summaryContextMenu.style.top = `${top}px`;
}

projectFields.addEventListener("contextmenu", handleRichEditorContextMenu);
sectionContent.addEventListener("contextmenu", handleRichEditorContextMenu);
funFactsInput?.addEventListener("contextmenu", handleRichEditorContextMenu);
sectionDescription?.addEventListener("contextmenu", handleRichEditorContextMenu);

async function handleRichEditorPaste(event) {
    const editor = event.target.closest("[data-rich-editor]");
    if (!editor) return;

    const imageItem = [...(event.clipboardData?.items || [])].find((item) => item.type.startsWith("image/"));

    if (imageItem) {
        event.preventDefault();

        const imageBlock = await uploadSummaryImageFile(imageItem.getAsFile(), {
            align: "center",
            display: "show",
            folder: editor.dataset.richFolder || "summary",
            projectId: editor.dataset.richProjectId || "",
            title: ""
        });

        if (imageBlock) {
            insertRichBlockAtCursor(editor, createRichImageBlock(imageBlock));
            saveRichEditorToProject(editor);
        }

        return;
    }

    const pastedText = event.clipboardData?.getData("text/plain") || "";
    if (!pastedText) return;

    event.preventDefault();
    insertPlainTextIntoRichEditor(editor, pastedText);
    saveRichEditorToProject(editor);
}
document.addEventListener("paste", (event) => {
    const hasImage = [...(event.clipboardData?.items || [])].some((item) => item.type.startsWith("image/"));
    if (!hasImage) return;

    const isRichEditor = event.target.closest("[data-rich-editor]");
    if (isRichEditor) return;

    const isTextField = event.target.matches("input, textarea, [contenteditable='true']");
    if (!isTextField) return;

    event.preventDefault();
    setStatus("Images can only be pasted into overview editors, not title or name fields.");
}, true);
function insertPlainTextIntoRichEditor(editor, pastedText) {
    const textToInsert = String(pastedText || "").replace(/\r\n?/g, "\n");
    if (!textToInsert) return;

    if (!restoreRichSelection(editor)) focusTextBlock(selectedRichBlock(editor) || editor.querySelector(".rich-text-block"));
    editor.focus({ preventScroll: true });

    const range = selectionRangeInsideEditor(editor);
    if (!range) return;

    range.deleteContents();

    const fragment = document.createDocumentFragment();
    textToInsert.split("\n").forEach((line, index) => {
        if (index > 0) fragment.append(document.createElement("br"));
        if (line) fragment.append(document.createTextNode(line));
    });

    const lastInsertedNode = fragment.lastChild;
    range.insertNode(fragment);

    const nextRange = document.createRange();
    if (lastInsertedNode) nextRange.setStartAfter(lastInsertedNode);
    else nextRange.setStart(range.startContainer, range.startOffset);
    nextRange.collapse(true);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(nextRange);
    captureRichSelection(editor);
}

projectFields.addEventListener("paste", handleRichEditorPaste);
sectionContent.addEventListener("paste", handleRichEditorPaste);
funFactsInput?.addEventListener("paste", handleRichEditorPaste);
sectionDescription?.addEventListener("paste", handleRichEditorPaste);

function handleRichEditorKeydown(event) {
    const editor = event.target.closest("[data-rich-editor]");
    if (!editor || event.key !== "Enter") return;

    const block = event.target.closest(".rich-text-block");
    if (!block) return;

    event.preventDefault();
    if (event.shiftKey) {
      document.execCommand("insertLineBreak", false);
      captureRichSelection(editor);
      return;
    }

    const range = selectionRangeInsideEditor(editor);
    if (!range || !block.contains(range.startContainer)) return;
    range.deleteContents();
    const tail = document.createRange();
    tail.setStart(range.startContainer, range.startOffset);
    tail.setEnd(block, block.childNodes.length);
    const trailingContent = tail.extractContents();
    const nextBlock = matchingTextBlock(block, "");
    nextBlock.append(trailingContent);
    block.after(nextBlock);
    const nextRange = document.createRange();
    nextRange.selectNodeContents(nextBlock);
    nextRange.collapse(true);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(nextRange);
    captureRichSelection(editor);
    setStatus("Unsaved local changes.");
}

projectFields.addEventListener("keydown", handleRichEditorKeydown);
sectionContent.addEventListener("keydown", handleRichEditorKeydown);
funFactsInput?.addEventListener("keydown", handleRichEditorKeydown);
sectionDescription?.addEventListener("keydown", handleRichEditorKeydown);

function handleRichEditorFocus(event) {
  const editor = event.target.closest("[data-rich-editor]");
  if (!editor) return;
  document.execCommand("defaultParagraphSeparator", false, "p");
  captureRichSelection(editor);
}

function handleRichEditorInput(event) {
  const editor = event.target.closest("[data-rich-editor]");
  if (!editor) return;
  captureRichSelection(editor);
  setStatus("Unsaved local changes.");
}

[projectFields, sectionContent, funFactsInput, sectionDescription].filter(Boolean).forEach((root) => {
  root.addEventListener("focusin", handleRichEditorFocus);
  root.addEventListener("input", handleRichEditorInput);
});

document.addEventListener("selectionchange", () => {
  const selection = window.getSelection();
  let node = selection?.anchorNode;
  if (node?.nodeType === Node.TEXT_NODE) node = node.parentElement;
  const editor = node?.closest?.("[data-rich-editor]");
  if (editor) {
    activeSummaryEditor = editor;
    const range = captureRichSelection(editor);
    if (range && !range.collapsed) {
      activeTextSelectionRange = range.cloneRange();
      selectionGestureProducedRange = true;
      showPersistentTextSelection(range);
    }
  }
  if (!selectionGestureActive) scheduleTextSelectionInspectorRefresh(20);
});

document.addEventListener("pointerdown", (event) => {
  if (event.target.closest("#text-selection-inspector, #summary-context-menu")) return;

  const editor = event.target.closest("[data-rich-editor]");
  if (event.button === 2 && editor) {
    const range = selectionRangeInsideEditor(editor);
    activeSummaryEditor = editor;
    if (range && !range.collapsed) {
      activeRichSelectionRange = range.cloneRange();
      activeTextSelectionRange = range.cloneRange();
      selectionGestureProducedRange = true;
      showPersistentTextSelection(range);
    }
    if (!textSelectionInspector?.hidden) hideTextSelectionInspector();
    selectionGestureActive = false;
    return;
  }

  clearPersistentTextSelection(true);
  if (!textSelectionInspector?.hidden) hideTextSelectionInspector();
  if (!editor) {
    selectionGestureActive = false;
    selectionGestureProducedRange = false;
    return;
  }
  if (!event.target.closest("button, input, select, textarea, [contenteditable='false']")) {
    editor.focus({ preventScroll: true });
  }
  activeSummaryEditor = editor;
  selectionGestureActive = true;
  selectionGestureProducedRange = false;
}, true);

function finishTextSelectionGesture(event) {
  if (event?.button === 2 || event?.target?.closest?.("#text-selection-inspector, #summary-context-menu")) return;
  selectionGestureActive = false;
  clearTimeout(selectionGestureFinishTimer);
  selectionGestureFinishTimer = setTimeout(() => {
    const selection = window.getSelection();
    let node = selection?.anchorNode;
    if (node?.nodeType === Node.TEXT_NODE) node = node.parentElement;
    const editor = node?.closest?.("[data-rich-editor]");
    const range = editor ? selectionRangeInsideEditor(editor) : null;
    if (editor && range && !range.collapsed) {
      activeSummaryEditor = editor;
      activeRichSelectionRange = range.cloneRange();
      activeTextSelectionRange = range.cloneRange();
      selectionGestureProducedRange = true;
      showPersistentTextSelection(range);
    } else if (!selectionGestureProducedRange) {
      clearPersistentTextSelection(true);
    }
    refreshTextSelectionInspector();
  }, 40);
}

document.addEventListener("pointerup", finishTextSelectionGesture, true);
document.addEventListener("pointercancel", () => {
  selectionGestureActive = false;
}, true);
document.addEventListener("scroll", refreshPersistentSelectionHighlight, true);
window.addEventListener("resize", refreshPersistentSelectionHighlight);
document.addEventListener("mouseup", finishTextSelectionGesture);
document.addEventListener("keyup", (event) => {
  if (event.target.closest?.("#text-selection-inspector")) {
    if (activeTextSelectionRange && activeSummaryEditor) showPersistentTextSelection(activeTextSelectionRange);
    return;
  }
  if (event.key === "Escape") {
    clearPersistentTextSelection(true);
    hideTextSelectionInspector();
    return;
  }
  if (!event.shiftKey && window.getSelection()?.isCollapsed) {
    clearPersistentTextSelection(true);
    hideTextSelectionInspector();
    return;
  }
  if (event.key.startsWith("Arrow") || event.shiftKey) scheduleTextSelectionInspectorRefresh(20);
});

textSelectionInspector?.addEventListener("pointerenter", () => {
  selectionInspectorPointerInside = true;
});
textSelectionInspector?.addEventListener("pointerleave", () => {
  selectionInspectorPointerInside = false;
});

textSelectionInspector?.addEventListener("pointerdown", (event) => {
  selectionInspectorPointerInside = true;
  const handle = event.target.closest("[data-selection-inspector-drag]");
  if (!handle || event.target.closest("button, input, select, label")) return;
  const rect = textSelectionInspector.getBoundingClientRect();
  activeSelectionInspectorDrag = {
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
    pointerId: event.pointerId,
    target: event.target
  };
  event.target.setPointerCapture?.(event.pointerId);
  textSelectionInspector.classList.add("is-dragging");
  event.preventDefault();
});

document.addEventListener("pointermove", (event) => {
  if (!activeSelectionInspectorDrag || !textSelectionInspector) return;
  const rect = textSelectionInspector.getBoundingClientRect();
  const margin = 8;
  const left = Math.max(margin, Math.min(event.clientX - activeSelectionInspectorDrag.offsetX, window.innerWidth - rect.width - margin));
  const top = Math.max(margin, Math.min(event.clientY - activeSelectionInspectorDrag.offsetY, window.innerHeight - rect.height - margin));
  textSelectionInspector.style.left = `${left}px`;
  textSelectionInspector.style.top = `${top}px`;
  selectionInspectorWasMoved = true;
});

function endSelectionInspectorDrag() {
  if (!activeSelectionInspectorDrag) return;
  activeSelectionInspectorDrag.target?.releasePointerCapture?.(activeSelectionInspectorDrag.pointerId);
  textSelectionInspector?.classList.remove("is-dragging");
  activeSelectionInspectorDrag = null;
}

document.addEventListener("pointerup", endSelectionInspectorDrag);
document.addEventListener("pointercancel", endSelectionInspectorDrag);

textSelectionInspector?.addEventListener("click", (event) => {
  if (event.target.closest("[data-selection-inspector-close]")) {
    clearPersistentTextSelection(true);
    hideTextSelectionInspector();
    return;
  }
  const toggle = event.target.closest("[data-selection-options-toggle]");
  if (toggle) {
    const kind = toggle.dataset.selectionOptionsToggle;
    const options = textSelectionInspector.querySelector(`[data-selection-options='${kind}']`);
    const willOpen = options?.hidden;
    closeSelectionInspectorOptions(kind);
    if (options) options.hidden = !willOpen;
    return;
  }
  const option = event.target.closest("[data-selection-value]");
  if (option) applySelectionInspectorFormat(option.dataset.selectionValue, option.dataset.value);
});

function handleSelectionInspectorTextField(event) {
  if (event.type === "keydown" && event.key !== "Enter") return;
  if (event.type === "keydown") event.preventDefault();
  if (event.target === selectionFontInput) applySelectionInspectorFormat("font", event.target.value);
  if (event.target === selectionColorInput) applySelectionInspectorFormat("color", event.target.value);
  if (event.target === selectionSizeInput) applySelectionInspectorFormat("size", event.target.value);
}

function scheduleSelectionInspectorTextField(event) {
  clearTimeout(selectionInspectorInputTimer);
  const target = event.target;
  selectionInspectorInputTimer = setTimeout(() => {
    if (target === selectionFontInput && cleanFontFamily(target.value)) applySelectionInspectorFormat("font", target.value);
    if (target === selectionColorInput && normalizeTextColor(target.value)) applySelectionInspectorFormat("color", target.value);
    if (target === selectionSizeInput && normalizeFontPx(target.value)) applySelectionInspectorFormat("size", target.value);
  }, 350);
}

[selectionFontInput, selectionColorInput, selectionSizeInput].forEach((input) => {
  input?.addEventListener("input", scheduleSelectionInspectorTextField);
  input?.addEventListener("change", handleSelectionInspectorTextField);
  input?.addEventListener("keydown", handleSelectionInspectorTextField);
});

selectionColorPicker?.addEventListener("input", (event) => {
  applySelectionInspectorFormat("color", event.target.value);
});

function focusAdjacentImageText(block, direction) {
  const editor = block?.closest("[data-rich-editor]");
  if (!editor) return;
  const sibling = direction === "before" ? block.previousElementSibling : block.nextElementSibling;
  const textBlock = sibling?.matches(".rich-text-block") ? sibling : matchingTextBlock(block, "");
  if (textBlock !== sibling) {
    if (direction === "before") block.before(textBlock);
    else block.after(textBlock);
  }
  focusTextBlock(textBlock);
  saveRichEditorToProject(editor);
}

function handleRichCaretClick(event) {
  const caretButton = event.target.closest("[data-rich-caret]");
  if (!caretButton) return false;
  focusAdjacentImageText(caretButton.closest(".rich-image-block"), caretButton.dataset.richCaret);
  return true;
}

function handleRichDragStart(event) {
  const handle = event.target.closest("[data-rich-drag-handle]");
  if (!handle) return;
  activeRichDragBlock = handle.closest(".rich-block");
  activeRichDragBlock.classList.add("is-dragging");
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/x-rich-block", "move");
  }
}

function handleRichDragOver(event) {
  if (!activeRichDragBlock) return;
  const editor = event.target.closest("[data-rich-editor]");
  if (!editor || editor !== activeRichDragBlock.closest("[data-rich-editor]")) return;
  event.preventDefault();
}

function handleRichDrop(event) {
  if (!activeRichDragBlock) return;
  const editor = event.target.closest("[data-rich-editor]");
  if (!editor || editor !== activeRichDragBlock.closest("[data-rich-editor]")) return;
  event.preventDefault();
  const target = event.target.closest(".rich-block");
  if (target === activeRichDragBlock) {
    activeRichDragBlock.classList.remove("is-dragging");
    activeRichDragBlock = null;
    return;
  }

  let dropRange = null;
  if (document.caretRangeFromPoint) {
    dropRange = document.caretRangeFromPoint(event.clientX, event.clientY);
  } else if (document.caretPositionFromPoint) {
    const position = document.caretPositionFromPoint(event.clientX, event.clientY);
    if (position) {
      dropRange = document.createRange();
      dropRange.setStart(position.offsetNode, position.offset);
      dropRange.collapse(true);
    }
  }

  const rangeNode = dropRange?.startContainer?.nodeType === Node.TEXT_NODE
    ? dropRange.startContainer.parentElement
    : dropRange?.startContainer;
  if (!dropRange || !rangeNode || !editor.contains(rangeNode) || rangeNode.closest("[contenteditable='false']")) {
    dropRange = null;
  }

  const movingBlock = activeRichDragBlock;
  movingBlock.classList.remove("is-dragging");
  if (dropRange) {
    insertRichBlockAtCursor(editor, movingBlock, dropRange);
  } else if (!target) {
    editor.append(movingBlock);
  } else if (event.clientY < target.getBoundingClientRect().top + target.getBoundingClientRect().height / 2) {
    target.before(movingBlock);
  } else {
    target.after(movingBlock);
  }
  saveRichEditorToProject(editor);
  selectRichBlock(movingBlock);
  activeRichDragBlock = null;
}

function beginImageCropDrag(event) {
  const viewport = event.target.closest(".rich-image-viewport.crop-active");
  if (!viewport || event.button !== 0) return;
  const block = viewport.closest(".rich-image-block");
  activeImageCropDrag = {
    block,
    editor: block.closest("[data-rich-editor]"),
    startX: event.clientX,
    startY: event.clientY,
    cropX: normalizeCropPosition(block.dataset.cropX),
    cropY: normalizeCropPosition(block.dataset.cropY),
    width: Math.max(1, viewport.getBoundingClientRect().width),
    height: Math.max(1, viewport.getBoundingClientRect().height)
  };
  event.preventDefault();
}

function moveImageCropDrag(event) {
  if (!activeImageCropDrag) return;
  const { block, startX, startY, cropX, cropY, width, height } = activeImageCropDrag;
  const nextX = normalizeCropPosition(cropX - ((event.clientX - startX) / width) * 100);
  const nextY = normalizeCropPosition(cropY - ((event.clientY - startY) / height) * 100);
  block.dataset.cropX = String(nextX);
  block.dataset.cropY = String(nextY);
  const viewport = block.querySelector(".rich-image-viewport");
  viewport?.style.setProperty("--crop-x", `${nextX}%`);
  viewport?.style.setProperty("--crop-y", `${nextY}%`);
}

function endImageCropDrag() {
  if (!activeImageCropDrag) return;
  saveRichEditorToProject(activeImageCropDrag.editor);
  activeImageCropDrag = null;
}

[projectFields, sectionContent, sectionDescription].filter(Boolean).forEach((root) => {
  root.addEventListener("dragstart", handleRichDragStart);
  root.addEventListener("dragover", handleRichDragOver);
  root.addEventListener("drop", handleRichDrop);
  root.addEventListener("dragend", () => {
    activeRichDragBlock?.classList.remove("is-dragging");
    activeRichDragBlock = null;
  });
  root.addEventListener("pointerdown", beginImageCropDrag);
});
document.addEventListener("pointermove", moveImageCropDrag);
document.addEventListener("pointerup", endImageCropDrag);
document.addEventListener("pointercancel", endImageCropDrag);

summaryContextMenu.addEventListener("click", async (event) => {
  const actionButton = event.target.closest("[data-rich-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.richAction;
  await handleRichAction(action, activeSummaryEditor);
  if (["add-image", "add-formula", "copy-text", "paste-text", "edit-block", "delete-block"].includes(action)) {
    hideSummaryContextMenu();
  }
});
sectionContent.addEventListener("click", async (event) => {
    if (handleRichCaretClick(event)) return;
    const blockAction = event.target.closest("[data-rich-block-action]");
    const richAction = event.target.closest("[data-rich-action]");
    const richBlock = event.target.closest(".rich-block");

    if (richBlock) selectRichBlock(richBlock);

    if (blockAction) {
        const editor = blockAction.closest("[data-rich-editor]");
        const block = blockAction.closest(".rich-block");
        selectRichBlock(block);

        if (blockAction.dataset.richBlockAction === "edit") await editSelectedRichBlock(editor);
        if (blockAction.dataset.richBlockAction === "delete") deleteSelectedRichBlock(editor);

        saveRichEditorToProject(editor);
        return;
    }

    if (richAction) {
        await handleRichAction(richAction.dataset.richAction, richAction.closest(".rich-summary-panel")?.querySelector("[data-rich-editor]"));
    }
});

async function handleStandaloneRichClick(event) {
  if (handleRichCaretClick(event)) return;
  const blockAction = event.target.closest("[data-rich-block-action]");
  const richBlock = event.target.closest(".rich-block");
  if (richBlock) selectRichBlock(richBlock);
  if (!blockAction) return;
  const editor = blockAction.closest("[data-rich-editor]");
  selectRichBlock(blockAction.closest(".rich-block"));
  if (blockAction.dataset.richBlockAction === "edit") await editSelectedRichBlock(editor);
  if (blockAction.dataset.richBlockAction === "delete") deleteSelectedRichBlock(editor);
  saveRichEditorToProject(editor);
}

funFactsInput?.addEventListener("click", handleStandaloneRichClick);
sectionDescription?.addEventListener("click", handleStandaloneRichClick);
summaryContextMenu.addEventListener("change", (event) => {
    if (!activeSummaryEditor) return;

    if (event.target.matches("[data-rich-font-select]")) {
        const value = event.target.value;
        if (value) applyRichInlineCommand(activeSummaryEditor, "fontName", value);
    }

    if (event.target.matches("[data-rich-font-size]")) {
        applyRichInlineCommand(activeSummaryEditor, "fontSize", event.target.value);
    }

    if (event.target.matches("[data-rich-color-input]")) {
        applyRichInlineCommand(activeSummaryEditor, "foreColor", event.target.value);
    }
});

summaryContextMenu.addEventListener("input", (event) => {
    if (!activeSummaryEditor) return;

    if (event.target.matches("[data-rich-color-input]")) {
        applyRichInlineCommand(activeSummaryEditor, "foreColor", event.target.value);
    }
});

projectFields.addEventListener("input", (event) => {
  const field = event.target.dataset.field;
  if (field === "summary") {
    const countLabel = event.target.closest("label")?.querySelector("small");
    if (countLabel) countLabel.textContent = `${Math.min(wordCount(event.target.value), 1000)}/1000 words`;
  }
  if (field) updateProjectField(field, event.target.value);
});

sectionTabs.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.addSection) {
    await addCustomSection();
    return;
  }
  const nextSectionId = button.dataset.sectionId;
  if (nextSectionId && nextSectionId !== activeSectionId && !suppressProjectWindowHistory) {
    projectWindowBackStack.push(activeSectionId);
    projectWindowForwardStack = [];
  }
  activeSectionId = nextSectionId;
  pendingEditor = null;
  renderAll();
  resetProjectWindowScroll();
  updateDialogWindowButtons(projectDialog);
});

sectionContent.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  const project = selectedProject();
  if (!button || !project) return;

  if (button.dataset.openEditor) openEditorFromButton(button);
  if (button.dataset.upload) await uploadToSection(button.dataset.upload, button.dataset.folder);
  if (button.dataset.uploadDesign) await uploadToDesignSection(button.dataset.uploadDesign, button.dataset.folder, button.dataset.designKind);
  if (button.dataset.clearDesignSummary) {
    const pathValue = button.dataset.clearDesignSummary;
    openDeleteConfirm({
      title: "Clear overview",
      message: "Are you sure you want to delete this overview text?",
      onConfirm: () => {
        setByPath(project, pathValue, "");
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.deleteItem) {
    const key = button.dataset.deleteItem;
    const item = project[key]?.[Number(button.dataset.index)];
    openDeleteConfirm({
      title: "Delete item",
      message: `Are you sure you want to delete "${itemTitle(item)}"?`,
      onConfirm: () => {
        project[key].splice(Number(button.dataset.index), 1);
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.deleteDesignItem) {
    const pathValue = button.dataset.deleteDesignItem;
    const items = designArray(project, pathValue);
    const item = items[Number(button.dataset.index)];
    openDeleteConfirm({
      title: "Delete design item",
      message: `Are you sure you want to delete "${itemTitle(item)}"?`,
      onConfirm: () => {
        items.splice(Number(button.dataset.index), 1);
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.deleteArray) {
    const key = button.dataset.deleteArray;
    const item = project[key]?.[Number(button.dataset.index)];
    openDeleteConfirm({
      title: "Delete item",
      message: `Are you sure you want to delete "${itemTitle(item)}"?`,
      onConfirm: () => {
        project[key].splice(Number(button.dataset.index), 1);
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.addCustomItem) {
    openPendingEditor({ type: "custom", mode: "add", sectionId: button.dataset.addCustomItem, title: "", description: "" });
  }
  if (button.dataset.uploadCustom) await uploadToSection("sections", button.dataset.uploadCustom, button.dataset.uploadCustom);
  if (button.dataset.uploadCustomSubsection) {
    await uploadToSection("sections", button.dataset.uploadCustomSubsection, button.dataset.uploadCustomSubsection, button.dataset.index);
  }
  if (button.dataset.deleteCustomChild) {
    const section = project.sections.find((item) => item.id === button.dataset.deleteCustomChild);
    const parent = section?.items?.[Number(button.dataset.index)];
    const child = parent?.children?.[Number(button.dataset.childIndex)];
    openDeleteConfirm({
      title: "Delete file",
      message: `Are you sure you want to delete "${itemTitle(child)}"?`,
      onConfirm: () => {
        parent.children.splice(Number(button.dataset.childIndex), 1);
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.deleteCustomItem) {
    const section = project.sections.find((item) => item.id === button.dataset.deleteCustomItem);
    const item = section?.items?.[Number(button.dataset.index)];
    openDeleteConfirm({
      title: "Delete subsection",
      message: `Are you sure you want to delete "${itemTitle(item)}"?`,
      onConfirm: () => {
        section.items.splice(Number(button.dataset.index), 1);
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.deleteSection) {
    const section = project.sections.find((item) => item.id === button.dataset.deleteSection);
    openDeleteConfirm({
      title: "Delete section",
      message: `Are you sure you want to delete "${section?.title || button.dataset.deleteSection}"?`,
      onConfirm: () => {
        project.sections = project.sections.filter((section) => section.id !== button.dataset.deleteSection);
        activeSectionId = "brief";
        pendingEditor = null;
        scheduleAutosave();
        renderAll();
      }
    });
  }
  if (button.dataset.cancelPending) {
    pendingEditor = null;
    renderSectionContent(project);
  }
});

sectionContent.addEventListener("submit", (event) => {
  if (event.target.id !== "pending-editor") return;
  event.preventDefault();
  savePendingEditor(event.target);
});

sectionContent.addEventListener("input", (event) => {
  const project = selectedProject();
  if (!project) return;

  if (event.target.dataset.array) {
    project[event.target.dataset.array][Number(event.target.dataset.index)] = event.target.value;
    setStatus("Unsaved local changes.");
    scheduleAutosave();
    schedulePreviewRender();
  }

  if (event.target.dataset.customSectionField) {
    const section = project.sections.find((item) => item.id === event.target.dataset.sectionId);
    section[event.target.dataset.customSectionField] = event.target.value;
    setStatus("Unsaved local changes.");
    scheduleAutosave();
    if (event.target.dataset.customSectionField === "title") {
      scheduleChromeRender();
    } else {
      schedulePreviewRender();
    }
  }

  if (event.target.dataset.designSummaryPath) {
    setByPath(project, event.target.dataset.designSummaryPath, event.target.value);
    setStatus("Unsaved local changes.");
    scheduleAutosave();
    schedulePreviewRender();
  }
});

projectWindowClose.addEventListener("click", () => {
  projectDialog.close();
});

projectDialog.addEventListener("close", () => {
  document.body.classList.remove("project-window-open");
});

projectWindowDelete.addEventListener("click", () => {
  const project = selectedProject();
  if (!project) return;
  requestProjectDelete(project.id);
});

deleteConfirmYes.addEventListener("click", () => {
  const action = pendingDeleteAction;
  pendingDeleteAction = null;
  deleteConfirmDialog.close("yes");
  if (action) action();
});

deleteConfirmNo.addEventListener("click", () => {
  pendingDeleteAction = null;
  deleteConfirmDialog.close("no");
});

deleteConfirmDialog.addEventListener("click", (event) => {
  if (!event.target.closest("[data-delete-cancel]")) return;
  pendingDeleteAction = null;
  deleteConfirmDialog.close("no");
});

assetSource.addEventListener("change", updateAssetDialogVisibility);
captionSource.addEventListener("change", updateAssetDialogVisibility);
assetFile.addEventListener("change", () => {
  if (!assetTitle.value && assetFile.files[0]) assetTitle.value = assetFile.files[0].name;
});
assetCancel.addEventListener("click", () => {
  assetDialog.close("cancel");
});
assetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  assetDialog.close("save");
});
sectionCancel.addEventListener("click", () => {
  sectionDialog.close("cancel");
});
sectionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sectionDialog.close("save");
});
siteLinkCancel.addEventListener("click", () => {
  siteLinkDialog.close("cancel");
});
siteLinkForm.addEventListener("submit", (event) => {
  event.preventDefault();
  siteLinkDialog.close("save");
});
summaryImageCancel.addEventListener("click", () => {
  summaryImageDialog.close("cancel");
});
summaryImageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  summaryImageDialog.close("save");
});
summaryFormulaCancel.addEventListener("click", () => {
  summaryFormulaDialog.close("cancel");
});
summaryFormulaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  summaryFormulaDialog.close("save");
});

saveDraftButton.addEventListener("click", () => saveCatalog("/api/save-draft", "Draft saved"));
applyCatalogButton.addEventListener("click", () => {
  saveCatalog("/api/apply-catalog", "Catalog applied and pushed");
});

renderSelectionInspectorOptions();
enableDraggableDialogs();

window.addEventListener("beforeunload", () => {
  clearTimeout(autosaveTimer);
  const payload = JSON.stringify({ catalog });
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/save-draft", new Blob([payload], { type: "application/json" }));
  }
});
// Legacy global hook kept inert; scoped editor listeners above own the context menu.
document.addEventListener("builder-disabled-contextmenu", (event) => {
    const editor = event.target.closest("[data-rich-editor]");
    const block = event.target.closest(".rich-block");
    if (!editor && !block) return;

    event.preventDefault();

    // Determine which editor and block are active.
    activeSummaryEditor = editor || block.closest("[data-rich-editor]");
    selectRichBlock(block || currentRichBlock(activeSummaryEditor));

    // Synchronize the context‑menu controls (font, size, color).
    syncRichContextMenuControls(activeSummaryBlock);

    // Position and show the context menu.
    summaryContextMenu.style.left = `${event.clientX}px`;
    summaryContextMenu.style.top = `${event.clientY}px`;
    summaryContextMenu.hidden = false;
}, true);
document.addEventListener("builder-disabled-click", () => {
    summaryContextMenu.hidden = true;
});

loadData().catch((error) => {
  setStatus(error.message || "Builder failed to load.");
});
