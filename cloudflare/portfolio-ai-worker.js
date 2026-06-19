const DEFAULT_ALLOWED_ORIGINS = [
  "https://mauriceotieno.com",
  "https://www.mauriceotieno.com",
  "http://localhost:8080",
  "http://localhost:8081",
  "http://127.0.0.1:8080",
  "http://127.0.0.1:8081"
];

const PORTFOLIO_AI_INSTRUCTIONS = [
  "You are the AI assistant for Maurice Otieno's electrical and computer engineering portfolio.",
  "Answer the visitor's question first in a concise ChatGPT-like format, then mention where the portfolio context points them.",
  "Use the supplied portfolio context as the trusted source for Maurice's projects, links, files, resume, and contact information.",
  "You may answer related electronics, hardware, analog, mixed-signal, digital, embedded, FPGA, ASIC, PCB, and firmware questions even when the answer is broader than the saved portfolio.",
  "Do not invent portfolio projects, credentials, employers, files, or test results that are not in the context.",
  "If context is missing, say what is missing and answer generally only for the engineering concept.",
  "Keep the answer recruiter-friendly, specific, and easy to skim. Use short paragraphs and bullets when helpful."
].join("\n");

function jsonResponse(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...headers
    }
  });
}

function allowedOrigins(env) {
  const extra = String(env.OPENAI_ALLOWED_ORIGINS || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return [...new Set([...DEFAULT_ALLOWED_ORIGINS, ...extra])];
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = allowedOrigins(env);
  const allowOrigin = allowed.includes(origin) ? origin : allowed[0];
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}

function originIsAllowed(request, env) {
  const origin = request.headers.get("Origin") || "";
  return !origin || allowedOrigins(env).includes(origin);
}

function clampText(value, maxLength = 12000) {
  return String(value || "").slice(0, maxLength);
}

function extractOpenAiText(data) {
  if (typeof data?.output_text === "string" && data.output_text.trim()) return data.output_text.trim();
  const output = Array.isArray(data?.output) ? data.output : [];
  const chunks = [];

  output.forEach((item) => {
    (item.content || []).forEach((content) => {
      if (typeof content.text === "string" && content.text.trim()) chunks.push(content.text.trim());
    });
  });

  return chunks.join("\n\n").trim();
}

async function callOpenAi(body, env) {
  const question = clampText(body.question, 1200).trim();
  if (!question) return { status: 400, data: { error: "Question is required." } };
  if (!env.OPENAI_API_KEY) return { status: 503, data: { error: "OPENAI_API_KEY is not configured." } };

  const model = env.OPENAI_MODEL || "gpt-5.4-mini";
  const enableWebSearch = String(env.OPENAI_ENABLE_WEB_SEARCH || "").toLowerCase() === "true";
  const payload = {
    model,
    input: [
      {
        role: "developer",
        content: [{ type: "input_text", text: PORTFOLIO_AI_INSTRUCTIONS }]
      },
      {
        role: "user",
        content: [{
          type: "input_text",
          text: [
            `Visitor question: ${question}`,
            "",
            "Portfolio context JSON:",
            clampText(JSON.stringify(body.context || {}, null, 2), 18000)
          ].join("\n")
        }]
      }
    ],
    max_output_tokens: Number(env.OPENAI_MAX_OUTPUT_TOKENS || 700),
    reasoning: { effort: env.OPENAI_REASONING_EFFORT || "low" },
    store: false,
    text: { verbosity: env.OPENAI_VERBOSITY || "low" }
  };

  if (enableWebSearch) {
    payload.tools = [{ type: "web_search", search_context_size: "low" }];
  }

  const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await openAiResponse.json().catch(() => ({}));
  if (!openAiResponse.ok) {
    return {
      status: openAiResponse.status,
      data: { error: data?.error?.message || "OpenAI request failed." }
    };
  }

  return {
    status: 200,
    data: {
      answer: extractOpenAiText(data),
      model,
      usedWebSearch: enableWebSearch
    }
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const headers = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method === "GET" && url.pathname === "/health") {
      return jsonResponse({ ok: true, service: "portfolio-ai" }, 200, headers);
    }

    if (request.method !== "POST" || url.pathname !== "/ask") {
      return jsonResponse({ error: "Use POST /ask." }, 404, headers);
    }

    if (!originIsAllowed(request, env)) {
      return jsonResponse({ error: "Origin is not allowed." }, 403, headers);
    }

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > 70000) {
      return jsonResponse({ error: "Request body is too large." }, 413, headers);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "Request body must be JSON." }, 400, headers);
    }

    const result = await callOpenAi(body, env);
    return jsonResponse(result.data, result.status, headers);
  }
};
