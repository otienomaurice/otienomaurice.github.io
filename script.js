const grid = document.querySelector("#project-grid");
const searchInput = document.querySelector("#project-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const projectCount = document.querySelector("#project-count");
const year = document.querySelector("#year");

let projects = [];
let activeFilter = "all";

year.textContent = new Date().getFullYear();

const accents = ["#117c7a", "#d18b21", "#bc5648", "#52606d", "#4f7f5f", "#8b6f3d"];

function normalize(value) {
  return String(value || "").toLowerCase();
}

function projectMatches(project, query) {
  if (!query) return true;

  const haystack = [
    project.title,
    project.type,
    project.status,
    project.summary,
    ...(project.stack || []),
    ...(project.highlights || []),
    ...(project.resources || []).map((resource) => resource.label),
  ]
    .map(normalize)
    .join(" ");

  return haystack.includes(query);
}

function resourceLink(resource) {
  const target = resource.url || "#";
  const external = /^https?:\/\//.test(target);
  const attrs = external ? ' target="_blank" rel="noreferrer"' : "";
  return `<a class="resource-link" href="${target}"${attrs}>${resource.label}</a>`;
}

function renderProjects() {
  const query = normalize(searchInput.value).trim();
  const visible = projects.filter((project) => {
    const filterMatch = activeFilter === "all" || normalize(project.type) === activeFilter;
    return filterMatch && projectMatches(project, query);
  });

  projectCount.textContent = projects.length;

  if (!visible.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No projects match that view.</h3>
        <p>Try a different filter or search term.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = visible
    .map((project, index) => {
      const tags = [project.type, project.status, ...(project.stack || []).slice(0, 4)];
      const highlights = (project.highlights || []).map((item) => `<li>${item}</li>`).join("");
      const resources = (project.resources || []).map(resourceLink).join("");
      const accent = project.accent || accents[index % accents.length];

      return `
        <article class="project-card" style="--accent: ${accent}">
          <div class="project-visual" aria-hidden="true"></div>
          <div class="project-body">
            <div class="project-meta">
              ${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <ul>${highlights}</ul>
            <div class="resource-list">${resources}</div>
          </div>
        </article>
      `;
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

fetch("projects.json")
  .then((response) => {
    if (!response.ok) throw new Error("Could not load projects.json");
    return response.json();
  })
  .then((data) => {
    projects = data.projects || [];
    renderProjects();
  })
  .catch(() => {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>Project data did not load.</h3>
        <p>Open this site through a local server or check projects.json for formatting errors.</p>
      </div>
    `;
  });
