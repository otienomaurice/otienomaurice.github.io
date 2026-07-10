# styles.css

Public website CSS for layout, contact area, projects, responsive behavior, AI panel, and mobile/desktop rendering.

## Quick Facts

- Lines: 2,735
- Size: 53,685 bytes
- Talks to: Mostly local to its own feature area.
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## CSS Selectors

- Line 1: `:root`
- Line 21: `html`
- Line 25: `body`
- Line 33: `body.full-window-open`
- Line 37: `a`
- Line 44: `input:focus-visible`
- Line 49: `.site-header`
- Line 64: `.brand`
- Line 71: `.brand-lockup`
- Line 79: `.brand-icon`
- Line 89: `.omb-engraving`
- Line 111: `.brand small`
- Line 115: `.brand small`
- Line 120: `.header-right`
- Line 128: `.site-nav`
- Line 137: `.site-nav a:hover`
- Line 141: `.header-avatar`
- Line 152: `.header-avatar img`
- Line 160: `.hero`
- Line 170: `.hero-content`
- Line 174: `.hero-image`
- Line 180: `.hero-shade`
- Line 186: `.hero-content`
- Line 194: `.eyebrow`
- Line 206: `p`
- Line 210: `h1`
- Line 218: `h2`
- Line 225: `h3`
- Line 230: `.hero-copy`
- Line 237: `.hero-actions`
- Line 246: `.resource-link`
- Line 255: `.button`
- Line 259: `.button.primary`
- Line 264: `.button.secondary`
- Line 269: `.ai-jump-link`
- Line 285: `.ai-jump-link svg`
- Line 296: `.ai-jump-link:focus-visible`
- Line 303: `.resume-section`
- Line 308: `.resume-actions`
- Line 314: `.resume-viewer`
- Line 324: `.resume-viewer object`
- Line 331: `.resume-viewer p`
- Line 337: `.dynamic-section`
- Line 347: `.dynamic-section-surface`
- Line 354: `.dynamic-section-copy`
- Line 362: `.dynamic-section-grid`
- Line 368: `.dynamic-section-card`
- Line 380: `.dynamic-section-card p`
- Line 384: `.dynamic-section-card h3`
- Line 389: `.dynamic-section-card p`
- Line 396: `.dynamic-link-list`
- Line 400: `.fun-facts-section`
- Line 409: `.fun-facts-section[hidden]`
- Line 413: `.fun-facts-window`
- Line 427: `.fun-facts-label`
- Line 441: `.fun-facts-lines`
- Line 446: `.fun-fact-line`
- Line 454: `.builder-download-section`
- Line 462: `.builder-download-link`
- Line 482: `.builder-download-link:focus-visible`
- Line 489: `.builder-download-link:active`
- Line 494: `.builder-download-link svg`
- Line 505: `.sr-only`
- Line 517: `.ai-assistant-panel`
- Line 528: `.ai-assistant-console`
- Line 545: `.ai-assistant-console h2`
- Line 552: `.ai-assistant-status`
- Line 559: `.ai-clear-chat`
- Line 578: `.ai-clear-chat:focus-visible`
- Line 585: `.ai-clear-chat:active`
- Line 591: `.ai-assistant-status[data-state="working"]`
- Line 595: `.ai-assistant-status[data-state="error"]`
- Line 599: `.ai-assistant-log`
- Line 613: `.ai-message`
- Line 623: `.ai-message p`
- Line 629: `.ai-answer-content`
- Line 634: `.ai-answer-content ul`
- Line 643: `.ai-answer-content strong`
- Line 647: `.ai-code-block`
- Line 660: `.ai-code-block code`

## Representative Opening Snippet

```
:root {
  color-scheme: light;
  --ink: #17202a;
  --muted: #526d82;
  --line: #c9deea;
  --paper: #eef8fc;
  --panel: #ffffff;
  --teal: #0d7f91;
  --amber: #d18b21;
  --coral: #bc5648;
  --graphite: #223244;
  --omb-copper: #c7772d;
  --focus: #0b6fce;
  --shadow: 0 18px 48px rgba(23, 32, 42, 0.14);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.5;
}

body.full-window-open {
  overflow: hidden;
}

```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?