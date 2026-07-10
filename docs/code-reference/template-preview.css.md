# template-preview.css

Builder application CSS for dialogs, windows, rich editors, compile code, dark mode, guide windows, and local previews.

## Quick Facts

- Lines: 5,749
- Size: 131,257 bytes
- Talks to: builder frontend
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## CSS Selectors

- Line 1: `.template-preview-page`
- Line 5: `.template-header`
- Line 20: `.section-actions`
- Line 27: `.builder-save-state`
- Line 42: `.builder-save-state[data-state="dirty"]`
- Line 49: `.builder-save-state[data-state="publishing"]`
- Line 56: `.builder-save-state[data-state="published"]`
- Line 62: `.builder-save-state[data-state="error"]`
- Line 69: `.template-preview-page button`
- Line 82: `.template-preview-page button:hover`
- Line 90: `.template-preview-page button:active`
- Line 98: `.builder-workspace`
- Line 107: `.builder-inspector`
- Line 116: `.template-preview`
- Line 123: `.builder-panel`
- Line 129: `.project-library-heading`
- Line 137: `.project-library-heading > div`
- Line 143: `.project-library-heading h2`
- Line 147: `.project-library-heading h2`
- Line 153: `.project-library-tools`
- Line 165: `.project-search-field`
- Line 172: `.workflow-card span`
- Line 179: `.project-search-field input`
- Line 190: `.project-search-field input:focus`
- Line 196: `#project-search-status`
- Line 203: `.tree-category-toggle mark`
- Line 210: `.workflow-card`
- Line 219: `.workflow-card strong`
- Line 228: `.workflow-actions`
- Line 234: `.workflow-metrics span`
- Line 247: `.workflow-actions .button`
- Line 253: `.template-preview > .section-heading`
- Line 257: `.builder-guide-panel`
- Line 273: `.builder-guide-panel small`
- Line 277: `.builder-guide-panel strong`
- Line 282: `.builder-guide-panel small`
- Line 287: `.builder-guide-icon`
- Line 297: `.builder-guide-icon::after`
- Line 307: `.builder-guide-icon::before`
- Line 312: `.builder-guide-icon::after`
- Line 318: `.builder-guide-dialog-content`
- Line 328: `.builder-guide-actions`
- Line 334: `.builder-guide-live span`
- Line 344: `.builder-guide-tools`
- Line 353: `.builder-guide-tools label`
- Line 361: `.builder-guide-tools input`
- Line 373: `.builder-guide-actions button`
- Line 387: `.builder-guide-actions button:hover`
- Line 393: `.builder-guide-results`
- Line 399: `.builder-guide-sections`
- Line 416: `.builder-guide-section`
- Line 424: `.builder-guide-section[hidden]`
- Line 428: `.builder-guide-section summary`
- Line 444: `.builder-guide-section summary::-webkit-details-marker`
- Line 448: `.builder-guide-section summary::before`
- Line 462: `.builder-guide-section summary::after`
- Line 480: `.builder-guide-section[open] summary`
- Line 485: `.builder-guide-section[open] summary::before`
- Line 489: `.builder-guide-section summary:hover`
- Line 495: `.builder-guide-section summary:hover::after`
- Line 499: `.builder-guide-section summary:hover::after`
- Line 504: `.builder-guide-section > div`
- Line 513: `.builder-guide-topic-dialog`
- Line 517: `.builder-guide-topic-content`
- Line 522: `.builder-guide-topic-body`
- Line 534: `.builder-guide-topic-copy`
- Line 540: `.builder-guide-topic-body p`
- Line 550: `.builder-guide-topic-body ul`
- Line 561: `.builder-guide-topic-body li`
- Line 565: `.publish-result-box`
- Line 570: `.publish-result-box p`
- Line 574: `.publish-result-box pre`
- Line 588: `.publish-target-form`
- Line 595: `.publish-target-form label`
- Line 600: `.publish-target-field-note`
- Line 606: `.publish-target-form input`
- Line 616: `.publish-target-current`
- Line 627: `.publish-target-current div`
- Line 633: `.publish-target-current strong`
- Line 637: `.publish-target-current span`

## Representative Opening Snippet

```
.template-preview-page {
  background: #eef8fc;
}

.template-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 12px clamp(18px, 4vw, 56px);
  border-bottom: 1px solid rgba(201, 222, 234, 0.84);
  background: rgba(214, 239, 250, 0.96);
  backdrop-filter: blur(16px);
}

.builder-header-actions,
.section-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.builder-save-state {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border: 1px solid #9bd4ea;
  border-radius: 999px;
  color: #16384a;
  background: #f5fbfe;
  font-size: 0.78rem;
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?