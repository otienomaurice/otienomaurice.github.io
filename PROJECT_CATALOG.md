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
