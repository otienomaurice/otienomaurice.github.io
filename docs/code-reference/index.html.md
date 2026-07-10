# index.html

Public website HTML shell that recruiters and visitors load in the browser.

## Quick Facts

- Lines: 268
- Size: 10,799 bytes
- Talks to: public website runtime, Cloudflare/AI layer, GitHub/release layer
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
    <meta
      name="description"
      content="A portfolio website built with OMB Portfolio Builder for projects, documents, diagrams, source code, tests, links, and profile information."
    />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Portfolio Owner" />
    <meta name="portfolio-ai-endpoint" content="https://omb-portfolio-ai.maurice-baraza-otieno.workers.dev/api/portfolio-ai" />
    <link rel="canonical" href="" />
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="assets/favicon-192.png" />
    <link rel="shortcut icon" href="assets/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="Portfolio" />
    <meta
      property="og:description"
      content="Explore projects, documents, tests, PCBs, tools, links, and source code."
    />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Portfolio" />
    <meta
      name="twitter:description"
      content="A project portfolio built with OMB Portfolio Builder."
    />
    <meta name="twitter:image" content="" />
    <title>Portfolio</title>
    <link rel="stylesheet" href="styles.css?v=2026062203" />
    <script type="application/ld+json">
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?