# README.md

Main README for the standalone builder application: install, updates, workspaces, text editing, publishing, build commands, branch model, and uninstall.

## Quick Facts

- Lines: 235
- Size: 22,085 bytes
- Talks to: Cloudflare/AI layer, GitHub/release layer
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Representative Opening Snippet

```
# OMB Portfolio Builder

OMB Portfolio Builder is a Windows desktop application for creating, editing, previewing, and publishing a portfolio site from a local workspace. A fresh install starts blank: users add their own profile, sections, projects, files, images, links, resumes, appearance choices, and publishing target.

This README is for the builder application only. Website-specific content, domain notes, public page layout, and generated portfolio assets belong in the portfolio site's own README.

## Complete Beginner Guide

A long beginner-oriented Word guide is included at:

```text
docs/OMB_Portfolio_Builder_Complete_Guide.docx
```

It explains the high-level design, generated block diagrams, software-engineering decisions, shell commands, programming syntax, how the important files communicate, what each build tool owns, GitHub workflows, Electron, the installer, caching, API endpoints, data contracts, frontend/backend/AI/Cloudflare layers, the website, the parser, publishing, compiler tools, generated function inventories, and file-by-file repository notes. The generator also writes source-focused Markdown notes to `docs/code-reference`.

## Install

Download the latest Windows installer or portable executable from:

```text
https://github.com/otienomaurice/omb-portfolio-builder/releases/latest
```

Use:

- `OMB-Portfolio-Builder-Setup-latest-x64.exe` for the Windows installer.
- `OMB-Portfolio-Builder-Portable-latest-x64.exe` when you want to run without installing.

The normal installer default is a per-user AppData location:

```text
C:\Users\<you>\AppData\Local\Programs\OMB Portfolio Builder
```

The installed application executable is:
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?