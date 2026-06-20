# Portfolio AI Cloudflare Worker

This folder contains the private backend for the portfolio AI assistant.

## Endpoint

Production URL:

```text
https://ai.mauriceotieno.com/ask
```

Health check:

```text
https://ai.mauriceotieno.com/health
```

## Intelligence backend

The Worker runs a pretrained Cloudflare Workers AI model by default:

```text
@cf/meta/llama-3.3-70b-instruct-fp8-fast
```

This is not trained from scratch. The assistant uses a pretrained model, short chat memory, and the portfolio context sent from the website. That gives the portfolio broad general knowledge for greetings and out-of-portfolio engineering questions while keeping project-specific answers grounded in Maurice's saved portfolio data.

Wrangler creates the Workers AI binding from `wrangler.toml`:

```toml
[ai]
binding = "AI"
```

## Optional OpenAI secret

OpenAI is optional. If you want the backend to use OpenAI instead of Workers AI, set `AI_PROVIDER = "openai"` in `wrangler.toml`, then set the OpenAI API key as a Cloudflare Worker secret. Do not put the key in Git.

```powershell
wrangler secret put OPENAI_API_KEY
```

## Deploy

From this folder:

```powershell
wrangler deploy
```

The Worker defaults to Cloudflare Workers AI and can optionally use OpenAI Responses plus OpenAI web search through `OPENAI_ENABLE_WEB_SEARCH`.
