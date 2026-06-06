# Project Catalog Architecture

The website uses `projects.json` as the source of truth for hardware engineering projects.

## Categories

Projects are grouped into three hardware-focused categories:

- `analog-mixed-signal`
- `digital`
- `embedded`

Each project belongs to exactly one category through its `category` field.

## Project Schema

Each project should include:

```json
{
  "id": "stable-project-slug",
  "title": "Project Title",
  "category": "analog-mixed-signal",
  "status": "Prototype",
  "summary": "One or two sentences describing the engineering work.",
  "focus": ["Analog design", "Bench validation"],
  "documents": [],
  "tests": [],
  "pcbs": [],
  "media": [],
  "sections": [],
  "tools": [],
  "languages": [],
  "links": []
}
```

## Recommended File Layout

Use one folder per project under `docs/`:

```text
docs/
  analog-control/
    documents/
    tests/
    pcbs/
    images/
  fpga-digital/
    documents/
    tests/
    rtl/
    reports/
  embedded-sensor/
    documents/
    tests/
    firmware/
    pcbs/
```

Keep public artifacts concise and reviewer-friendly: design briefs, schematics, PCB previews, test reports, waveforms, timing reports, and GitHub source links.

## Search Behavior

The website search indexes:

- category names
- project names
- summaries
- focus tags
- documents
- tests
- PCB builds
- tools
- languages
- external links

This means a search for `LTspice`, `Rev A`, `frequency response`, `Verilog`, `KiCad`, or `PCB` can surface the relevant project.

## Local Template Preview Workflow

Use `template-preview.html` to visually build projects before publishing them.

The local builder loads:

- `projects.json` for the current live catalog data
- `project-templates.json` for reusable visual skins
- `projects.local.json` when a saved local draft exists

The builder can:

- add a project into any category and choose a visual skin from one shared library
- select, edit, or delete projects locally
- edit project title, folder slug, category, status, summary, and focus tags
- add files into standard sections such as `documents`, `tests`, `pcbs`, and `images`
- create custom display sections such as `Design`, `Measurements`, `Firmware`, or `Lessons Learned`
- add subsection text and optional uploaded files to custom sections
- save a local draft to `projects.local.json`
- apply the local catalog to `projects.json` when ready

Uploaded files are saved under:

```text
docs/<project-id>/<section>/
```

The public portfolio does not expose builder controls. Recruiters only see the display-only project cards, files, and sections rendered from `projects.json` and `docs/`.
