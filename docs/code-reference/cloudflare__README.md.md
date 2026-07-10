# cloudflare/README.md

Cloudflare setup notes for deploying the AI Worker endpoint and wiring the public site to the backend.

## Quick Facts

- Lines: 47
- Size: 1,562 bytes
- Talks to: Cloudflare/AI layer, GitHub/release layer
- API endpoints mentioned: 1
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## API Endpoints Mentioned

- Line 32: `/api/portfolio-ai` - Handles AI assistant questions.

## Representative Opening Snippet

```
# Portfolio AI Cloudflare Worker

This Worker powers the public website endpoint:

```text
https://mauriceotieno.com/api/portfolio-ai
```

The static GitHub Pages site cannot safely hold API keys. The browser sends portfolio context to this Worker. The Worker uses OpenAI when `OPENAI_API_KEY` is configured, and otherwise falls back to Cloudflare Workers AI.

## Deploy

From this `cloudflare` folder:

```powershell
npx wrangler login
npx wrangler secret put OPENAI_API_KEY # optional, Workers AI works without it
npx wrangler deploy
```

`wrangler.toml` routes `/api/portfolio-ai` on `mauriceotieno.com` and `www.mauriceotieno.com` to this Worker.

## Cloudflare Requirements

1. The domain must be active in Cloudflare.
2. DNS for `mauriceotieno.com` / `www` must be proxied through Cloudflare, not DNS-only, for Worker routes to run.
3. The Worker must have the `AI` binding enabled. This repo's `wrangler.toml` includes it.
4. Optional: add the `OPENAI_API_KEY` secret if you want the Worker to use OpenAI instead of Workers AI.
5. Keep the website meta tag:

```html
<meta name="portfolio-ai-endpoint" content="/api/portfolio-ai" />
```

## Test

```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?