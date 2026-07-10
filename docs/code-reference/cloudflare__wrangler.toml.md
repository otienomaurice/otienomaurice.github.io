# cloudflare/wrangler.toml

Wrangler configuration used to deploy the Cloudflare Worker.

## Quick Facts

- Lines: 18
- Size: 573 bytes
- Talks to: Cloudflare/AI layer, GitHub/release layer
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Representative Opening Snippet

```
name = "omb-portfolio-ai"
main = "portfolio-ai-worker.js"
compatibility_date = "2026-07-01"
workers_dev = true

routes = [
  { pattern = "mauriceotieno.com/api/portfolio-ai", zone_name = "mauriceotieno.com" },
  { pattern = "www.mauriceotieno.com/api/portfolio-ai", zone_name = "mauriceotieno.com" }
]

[vars]
OPENAI_MODEL = "gpt-4.1-mini"
OPENAI_MAX_OUTPUT_TOKENS = "1000"
WORKERS_AI_MODEL = "@cf/meta/llama-3.2-3b-instruct"
ALLOWED_ORIGINS = "https://mauriceotieno.com,https://www.mauriceotieno.com,https://otienomaurice.github.io"

[ai]
binding = "AI"
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?