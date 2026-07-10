# package.json

Node/Electron package manifest with scripts, dependencies, version, installer settings, and extra resources.

## Quick Facts

- Lines: 85
- Size: 2,411 bytes
- Talks to: builder frontend, local backend, public website runtime, portfolio catalog, Cloudflare/AI layer
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Representative Opening Snippet

```
{
  "name": "omb-portfolio-builder",
  "version": "0.2.34",
  "private": false,
  "author": "Maurice Otieno",
  "description": "Standalone Windows desktop application for building and publishing portfolio websites.",
  "main": "main.cjs",
  "scripts": {
    "dev": "electron .",
    "pack": "electron-builder --win portable --publish never",
    "installer": "electron-builder --win nsis --publish never",
    "dist": "electron-builder --win --publish never"
  },
  "devDependencies": {
    "electron": "^39.2.7",
    "electron-builder": "^26.0.12"
  },
  "build": {
    "appId": "com.mauriceotieno.portfoliobuilder",
    "productName": "OMB Portfolio Builder",
    "copyright": "Copyright (c) Maurice Otieno",
    "asar": true,
    "directories": {
      "output": "dist"
    },
    "files": [
      "main.cjs",
      "package.json"
    ],
    "extraResources": [
      {
        "from": ".",
        "to": "site",
        "filter": [
          "assets/**",
          "Backgrounds/**",
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?