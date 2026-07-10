# portfolio-README.md

README for the generated public portfolio website rather than the builder application.

## Quick Facts

- Lines: 67
- Size: 2,893 bytes
- Talks to: public website runtime, portfolio catalog, Cloudflare/AI layer, GitHub/release layer
- API endpoints mentioned: 1
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## API Endpoints Mentioned

- Line 47: `/api/portfolio-ai` - Handles AI assistant questions.

## Representative Opening Snippet

```
# Portfolio Website

This repository/folder contains the generated portfolio website files. It is the public site output, not the Windows builder application source.

For the full beginner explanation of how the builder creates this website, how the files communicate, how GitHub/Cloudflare publishing works, and what each build tool does, open:

```text
docs/OMB_Portfolio_Builder_Complete_Guide.docx
```

## What Belongs Here

- `index.html` for the public page shell.
- `styles.css` for website styling.
- `script.js` and `electronics-search.js` for website interaction.
- `projects.json` for the saved public portfolio catalog.
- `assets/` for public images, icons, resumes, and profile media.
- `docs/` for public project documents and downloadable evidence.
- `Backgrounds/` for public background images.
- `CNAME` when a custom domain is configured.
- `robots.txt` and `sitemap.xml` for search engines.

## What Does Not Belong Here

- Builder desktop app source files.
- Installer scripts or app release artifacts.
- Local draft files such as `projects.local.json`.
- Private credentials, tokens, or authentication cache files.

## Hosting

The site is designed for static hosting such as GitHub Pages. A custom domain can be connected by placing the domain name in `CNAME` and pointing DNS at the hosting provider.

## Updating Content

The website files are generated from saved public catalog data and public assets. Edit content in the local editing workspace, save the draft, preview the generated site, then publish the generated output into this folder/repository.
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?