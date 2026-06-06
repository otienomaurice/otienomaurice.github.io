const grid = document.querySelector("#project-grid");
const searchInput = document.querySelector("#project-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const projectCount = document.querySelector("#project-count");
const year = document.querySelector("#year");

let categories = [];
let projects = [];
let activeFilter = "all";

year.textContent = new Date().getFullYear();

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
  return `
    <div class="project-brief-default">
      <h4>${section?.title || "Project Brief"}</h4>
      ${briefText ? `<p>${briefText}</p>` : `<p class="evidence-empty">No project brief has been added yet.</p>`}
    </div>
  `;
}

function parsedResource(item) {
  if (item.kind === "image" && item.url) {
    return `
      <figure>
        <a href="${item.url}"${linkAttributes(item.url)}><img src="${item.url}" alt="${item.title}"></a>
        <figcaption>
          <strong>${item.title}</strong>
          ${item.description ? `<span>${item.description}</span>` : ""}
        </figcaption>
      </figure>
    `;
  }

  return `
    <li>
      ${item.url ? resourceLink({ url: item.url, status: "uploaded" }, item.title) : `<strong>${item.title}</strong>`}
      ${item.meta ? `<span>${item.meta}</span>` : ""}
      ${item.description ? `<p>${item.description}</p>` : ""}
    </li>
  `;
}

function parsedSection(section) {
  const hasImages = (section.items || []).some((item) => item.kind === "image");
  const content = `
    ${section.description ? `<p class="evidence-empty">${section.description}</p>` : ""}
    ${(section.items || []).length ? (
      hasImages
        ? `<div class="media-grid">${section.items.map(parsedResource).join("")}</div>`
        : `<ul>${section.items.map(parsedResource).join("")}</ul>`
    ) : `<p class="evidence-empty">No content has been added yet.</p>`}
  `;

  return detailBlock(section.title, `evidence-block ${hasImages ? "evidence-wide" : ""}`, content);
}

function projectCard(project) {
  if (project.portfolioView) {
    const category = categories.find((item) => item.id === project.category) || {};
    const accent = category.accent || "#117c7a";
    const sections = project.portfolioView.sections || [];
    const briefSection = sections.find((section) => section.id === "brief");
    const otherSections = sections.filter((section) => section.id !== "brief");

    return `
      <article class="project-card catalog-card" id="${project.id}" style="--accent: ${accent}">
        <div class="project-visual" aria-hidden="true"></div>
        <div class="project-body">
          <div class="project-meta">
            <span class="tag category-tag">${category.label || project.category}</span>
            <span class="tag">${project.status}</span>
            ${pillList(project.focus)}
          </div>
          <h3>${project.portfolioView.title || project.title}</h3>
          ${renderParsedBriefBlock(briefSection, project.summary)}
          <div class="evidence-grid" aria-label="${project.title} parsed project sections">
            ${otherSections.map(parsedSection).join("")}
          </div>
        </div>
      </article>
    `;
  }

  const category = categories.find((item) => item.id === project.category) || {};
  const accent = category.accent || "#117c7a";

  return `
    <article class="project-card catalog-card" id="${project.id}" style="--accent: ${accent}">
      <div class="project-visual" aria-hidden="true"></div>
      <div class="project-body">
        <div class="project-meta">
          <span class="tag category-tag">${category.label || project.category}</span>
          <span class="tag">${project.status}</span>
          ${pillList(project.focus)}
        </div>
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

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProjects();
  });
});

searchInput.addEventListener("input", renderProjects);

function loadProjectCatalog() {
  if (window.__PORTFOLIO_CATALOG__) {
    categories = window.__PORTFOLIO_CATALOG__.categories || [];
    projects = window.__PORTFOLIO_CATALOG__.projects || [];
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
