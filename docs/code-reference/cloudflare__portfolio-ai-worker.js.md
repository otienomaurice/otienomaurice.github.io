# cloudflare/portfolio-ai-worker.js

Cloudflare Worker backend for the public portfolio AI assistant and fallback intelligence path.

## Quick Facts

- Lines: 276
- Size: 10,355 bytes
- Talks to: Cloudflare/AI layer, GitHub/release layer
- API endpoints mentioned: 1
- Named functions discovered: 13

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## API Endpoints Mentioned

- Line 228: `/api/portfolio-ai` - Handles AI assistant questions.

## Functions

### `json` line 11

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function json(data, status = 200, headers = {}) {`

### `allowedOrigins` line 22

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function allowedOrigins(env) {`

### `corsHeaders` line 30

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function corsHeaders(request, env) {`

### `clamp` line 42

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function clamp(value, maxLength) {`

### `cleanConversation` line 46

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function cleanConversation(conversation = []) {`

### `extractOpenAiText` line 54

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function extractOpenAiText(data = {}) {`

### `extractWorkersAiText` line 66

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function extractWorkersAiText(data = {}) {`

### `buildInstructions` line 81

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function buildInstructions() {`

### `buildMessages` line 95

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function buildMessages(body = {}) {`

### `buildUserPrompt` line 107

Creates an object, UI structure, process, payload, or generated artifact.

Signature or declaration: `function buildUserPrompt(body = {}) {`

### `callOpenAi` line 121

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `async function callOpenAi(body, env) {`

### `callWorkersAi` line 161

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `async function callWorkersAi(body, env) {`

### `fallbackWorkerAnswer` line 182

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function fallbackWorkerAnswer(body = {}) {`

## Important Constants And Variables

- Line 1: `defaultAllowedOrigins` from `const defaultAllowedOrigins = [`
- Line 31: `origin` from `const origin = request.headers.get("Origin") || "";`
- Line 32: `allowOrigin` from `const allowOrigin = allowedOrigins(env).includes(origin) ? origin : defaultAllowedOrigins[0];`
- Line 56: `parts` from `const parts = [];`
- Line 96: `messages` from `const messages = [{ role: "system", content: buildInstructions() }];`
- Line 122: `model` from `const model = env.OPENAI_MODEL || "gpt-4.1-mini";`
- Line 123: `payload` from `const payload = {`
- Line 138: `response` from `const response = await fetch("https://api.openai.com/v1/responses", {`
- Line 146: `data` from `const data = await response.json().catch(() => ({}));`
- Line 170: `model` from `const model = env.WORKERS_AI_MODEL || "@cf/meta/llama-3.2-3b-instruct";`
- Line 171: `data` from `const data = await env.AI.run(model, {`
- Line 183: `question` from `const question = String(body.question || "").trim();`
- Line 184: `clean` from `const clean = question.toLowerCase();`
- Line 185: `context` from `const context = body.context || {};`
- Line 186: `projects` from `const projects = Array.isArray(context.projects) ? context.projects : [];`
- Line 187: `owner` from `const owner = context.owner || context.profile?.displayName || "Maurice Otieno";`
- Line 224: `cors` from `const cors = corsHeaders(request, env);`
- Line 227: `url` from `const url = new URL(request.url);`
- Line 232: `body` from `let body = {};`
- Line 239: `question` from `const question = clamp(body.question, 1200).trim();`
- Line 243: `provider` from `let provider = env.OPENAI_API_KEY ? "openai" : "cloudflare-workers-ai";`
- Line 244: `result` from `let result = env.OPENAI_API_KEY`

## Representative Opening Snippet

```
const defaultAllowedOrigins = [
  "https://mauriceotieno.com",
  "https://www.mauriceotieno.com",
  "https://otienomaurice.github.io",
  "http://localhost:8080",
  "http://localhost:8081",
  "http://127.0.0.1:8080",
  "http://127.0.0.1:8081"
];

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...headers
    }
  });
}

function allowedOrigins(env) {
  return String(env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)
    .concat(defaultAllowedOrigins);
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowOrigin = allowedOrigins(env).includes(origin) ? origin : defaultAllowedOrigins[0];
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?