# project-templates.json

Appearance template definitions used by projects to control visual feel rather than content.

## Quick Facts

- Lines: 184
- Size: 6,428 bytes
- Talks to: Mostly local to its own feature area.
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Representative Opening Snippet

```
{
  "templates": [
    {
      "id": "appearance-light-blue-red-click",
      "label": "Light blue, navy hover, red click",
      "description": "Light blue engineering background with calm navy hover states and a sharp red click flash.",
      "visual": {
        "style": "schematic",
        "palette": ["#e9f8ff", "#1f6ed4", "#ef4444", "#ffffff"],
        "background": "#e9f8ff",
        "panel": "#ffffff",
        "accent": "#1f6ed4",
        "hover": "#1f6ed4",
        "click": "#ef4444",
        "clickText": "#ffffff",
        "line": "#b8def3",
        "text": "#172636",
        "interaction": "Navy-blue hover with a red active click flash."
      }
    },
    {
      "id": "appearance-white-blue-click",
      "label": "Clean white, blue hover, white click",
      "description": "Minimal white project panels with professional blue hover behavior and quiet white click feedback.",
      "visual": {
        "style": "device",
        "palette": ["#ffffff", "#2563eb", "#f8fbff"],
        "background": "#ffffff",
        "panel": "#ffffff",
        "accent": "#2563eb",
        "hover": "#2563eb",
        "click": "#ffffff",
        "clickText": "#172636",
        "line": "#d8e2ef",
        "text": "#172636",
        "interaction": "Blue hover with a clean white click state."
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?