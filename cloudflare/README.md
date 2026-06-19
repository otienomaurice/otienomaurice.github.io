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

## Required Secret

Set the OpenAI API key as a Cloudflare Worker secret. Do not put the key in Git.

```powershell
wrangler secret put OPENAI_API_KEY
```

## Deploy

From this folder:

```powershell
wrangler deploy
```

The Worker uses the Responses API and can optionally use OpenAI web search through `OPENAI_ENABLE_WEB_SEARCH`.
