# template-preview.html

Builder HTML shell loaded inside the Electron app and local preview runtime.

## Quick Facts

- Lines: 1,349
- Size: 92,686 bytes
- Talks to: builder frontend, Cloudflare/AI layer, GitHub/release layer
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Representative Opening Snippet

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Local Portfolio Builder</title>
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="assets/favicon-192.png" />
    <link rel="shortcut icon" href="assets/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="template-preview.css" />
  </head>
  <body class="template-preview-page">
      <header class="template-header">
          <a class="brand" href="index.html#top" aria-label="Back to portfolio">
              <span class="brand-lockup" aria-hidden="true">
                  <img class="brand-icon" src="assets/omb-mark.png" alt="" />
                  <span class="omb-engraving">OMB</span>
              </span>
              <span>
                  <strong>Local Portfolio Builder</strong>
                  <small>Build, preview, save locally, then publish when ready</small>
              </span>
          </a>
          <div class="builder-header-actions">
              <span class="builder-save-state" id="builder-save-state" data-state="loaded">Loaded</span>
              <a class="button secondary" href="index.html#projects" target="_blank" rel="noreferrer">Portfolio</a>
              <button class="button secondary" id="publish-target-open" type="button">Publishing target</button>
              <button class="button secondary" id="security-report-open" type="button">Security report</button>
              <button class="button secondary" id="app-update-check" type="button">Check updates</button>
              <button class="button primary" id="save-draft" type="button">Save draft</button>
              <button class="button secondary" id="apply-catalog" type="button">Apply to site</button>
          </div>
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?