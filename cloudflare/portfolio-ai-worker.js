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
  "Behave like a careful senior electrical and computer engineering mentor who can also navigate Maurice's portfolio.",
  "Answer the visitor's question first in a concise ChatGPT-like format, then add portfolio links or context only when they help.",
  "Use the supplied question intent to decide whether this is a general engineering question or a portfolio-specific question.",
  "For general_conversation intent, respond naturally and briefly. Greet the visitor and explain what you can help with. Do not force project context.",
  "For general_knowledge intent, answer the question directly using broad general knowledge. Do not force portfolio context unless the visitor asks to connect the answer to Maurice's work.",
  "For general_engineering intent, begin with the general electronics or engineering explanation. Do not lead with Maurice's project context unless the visitor asks to connect it.",
  "For portfolio_specific intent, answer from Maurice's portfolio context first, then explain related engineering concepts only when useful.",
  "Use recent conversation history for follow-up questions, pronouns, comparisons, and corrections.",
  "Use the supplied portfolio context as the trusted source for Maurice's projects, links, files, resume, and contact information.",
  "Use sourceExcerpts when present as higher-detail evidence from uploaded text files, extracted resume text, same-site files, GitHub pages, or other safe public sources.",
  "Use knowledgeManifest to understand project files, image evidence, public profiles, resumes, and project areas. Treat filenames, captions, surrounding text, and descriptions as evidence.",
  "Do not claim to visually inspect an image unless actual image analysis is provided. If only image metadata is supplied, say what the caption/path/context suggests.",
  "For GitHub, LinkedIn, resume, or uploaded-file questions, cite what is present in the supplied context or fetched excerpts and then point to the link when useful. Access public pages and fetched excerpts when the website allows it.",
  "When a visitor asks for source code, use public GitHub source excerpts when provided. Show concise relevant snippets with file paths, and explain what the code is doing. Do not imply private repository access.",
  "You may answer related electronics, hardware, analog, mixed-signal, digital, embedded, FPGA, ASIC, PCB, and firmware questions even when the answer is broader than the saved portfolio.",
  "Do not invent portfolio projects, credentials, employers, files, or test results that are not in the context.",
  "If context is missing, say what is missing and answer generally only for the engineering concept.",
  "When useful, state assumptions, define terms, explain signal or data flow, identify tradeoffs, and name what evidence would prove the claim.",
  "Keep the answer recruiter-friendly, specific, and easy to skim. Use short paragraphs and bullets when helpful.",
  "Do not expose chain-of-thought. Give the polished answer only."
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

function stripHtmlToText(value = "") {
  return String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function sourceLooksTextual(source = {}) {
  const url = String(source.url || "");
  const kind = String(source.kind || "").toLowerCase();
  if (["text", "webpage", "github", "linkedin", "public_profile", "resume_text", "code"].includes(kind)) return true;
  return /\.(txt|md|markdown|csv|json|xml|log|c|h|cpp|hpp|py|js|mjs|ts|tsx|v|sv|vhdl?|spice|cir|net|asc|sch|kicad_sch|kicad_pcb|ino|xdc|sdc|tcl)$/i.test(url)
    || /github\.com|raw\.githubusercontent\.com/i.test(url);
}

function sourceUrlAllowed(url) {
  try {
    const parsed = new URL(url);
    return [
      "mauriceotieno.com",
      "www.mauriceotieno.com",
      "github.com",
      "api.github.com",
      "raw.githubusercontent.com",
      "gist.githubusercontent.com",
      "linkedin.com",
      "www.linkedin.com"
    ].includes(parsed.hostname.toLowerCase());
  } catch {
    return false;
  }
}

const GITHUB_TEXT_FILE_PATTERN = /\.(txt|md|markdown|csv|json|xml|log|c|h|cpp|hpp|cc|hh|py|js|mjs|ts|tsx|v|sv|vhdl?|spice|cir|net|asc|sch|kicad_sch|kicad_pcb|ino|xdc|sdc|tcl|yaml|yml)$/i;
const GITHUB_SKIP_FILE_PATTERN = /\.(png|jpe?g|gif|webp|svg|pdf|zip|7z|rar|exe|dll|bin|obj|o|a|so|dylib|mp4|mov|avi|mp3|wav|xlsx?|pptx?|docx?)$/i;

function gitHubHeaders(accept = "application/vnd.github+json") {
  return {
    "Accept": accept,
    "User-Agent": "Maurice-Otieno-Portfolio-AI"
  };
}

function parseGitHubSourceUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const parts = parsed.pathname.split("/").filter(Boolean);
    if (host === "raw.githubusercontent.com" && parts.length >= 4) {
      return {
        type: "file",
        owner: parts[0],
        repo: parts[1],
        branch: parts[2],
        filePath: parts.slice(3).join("/")
      };
    }
    if (host !== "github.com" || !parts.length) return null;
    if (parts.length === 1) return { type: "profile", owner: parts[0] };
    const base = { owner: parts[0], repo: parts[1] };
    if (parts[2] === "blob" && parts.length >= 5) {
      return { ...base, type: "file", branch: parts[3], filePath: parts.slice(4).join("/") };
    }
    if (parts[2] === "tree" && parts.length >= 4) {
      return { ...base, type: "repo", branch: parts[3] };
    }
    return { ...base, type: "repo" };
  } catch {
    return null;
  }
}

async function fetchGitHubJson(url) {
  const response = await fetch(url, { headers: gitHubHeaders() });
  if (!response.ok) return null;
  return response.json().catch(() => null);
}

async function fetchLimitedText(url, maxLength = 12000) {
  const response = await fetch(url, {
    headers: gitHubHeaders("text/plain,text/markdown,text/html,application/json;q=0.8,*/*;q=0.1")
  });
  if (!response.ok) return "";
  const rawText = clampText(await response.text(), maxLength);
  const contentType = response.headers.get("Content-Type") || "";
  return /html/i.test(contentType) ? stripHtmlToText(rawText) : rawText;
}

function githubQuestionTokens(question = "") {
  return [...new Set(String(question || "")
    .toLowerCase()
    .replace(/[^a-z0-9_#+.\s-]+/g, " ")
    .split(/\s+/)
    .filter((token) => token.length >= 3 && !["the", "and", "with", "from", "show", "code", "file", "github"].includes(token)))];
}

function scoreGitHubFile(filePath = "", question = "") {
  const cleanPath = filePath.toLowerCase();
  const tokens = githubQuestionTokens(question);
  let score = GITHUB_TEXT_FILE_PATTERN.test(cleanPath) ? 10 : 0;
  if (/readme\.md$/.test(cleanPath)) score += 55;
  if (/\.(c|h|cpp|hpp|py|js|mjs|ts|v|sv|vhdl?|ino|tcl|xdc|sdc)$/i.test(cleanPath)) score += 28;
  if (/\b(test|tb|bench|sim|simulation|src|firmware|hardware|rtl|driver|main)\b/i.test(cleanPath)) score += 12;
  tokens.forEach((token) => {
    if (cleanPath.includes(token)) score += 18;
  });
  return score;
}

function wantsGitHubCode(question = "") {
  return /\b(code|source|snippet|implementation|firmware|driver|module|verilog|vhdl|python|javascript|typescript|c\+\+|cpp|c\s+code|pull|show|display)\b/i.test(question);
}

function scoreGitHubRepo(repo = {}, question = "") {
  const tokens = githubQuestionTokens(question);
  const haystack = [
    repo.full_name,
    repo.name,
    repo.description,
    repo.language,
    ...(Array.isArray(repo.topics) ? repo.topics : [])
  ].join(" ").toLowerCase();
  let score = repo.fork ? -10 : 12;
  if (!repo.archived) score += 6;
  if (repo.language) score += 4;
  if (repo.name && !/\.github\.io$/i.test(repo.name)) score += 3;
  tokens.forEach((token) => {
    if (haystack.includes(token)) score += 22;
  });
  if (/\b(vco|oscillator|pwm|analog|mixed|pcb|firmware|stm32|fpga|asic|verilog|embedded|signal|design)\b/i.test(haystack)) {
    score += 12;
  }
  return score;
}

async function fetchGitHubProfileSource(source = {}, parsed = {}) {
  const owner = parsed.owner;
  const [profile, repos] = await Promise.all([
    fetchGitHubJson(`https://api.github.com/users/${encodeURIComponent(owner)}`),
    fetchGitHubJson(`https://api.github.com/users/${encodeURIComponent(owner)}/repos?per_page=30&sort=updated`)
  ]);
  const repoList = Array.isArray(repos) ? repos : [];
  const includeCode = wantsGitHubCode(source.question || "");
  const selectedRepos = includeCode
    ? [...repoList]
      .sort((a, b) => scoreGitHubRepo(b, source.question || "") - scoreGitHubRepo(a, source.question || ""))
      .slice(0, 3)
    : [];
  const repoBlocks = [];

  for (const repo of selectedRepos) {
    if (!repo?.name || !repo?.html_url) continue;
    const repoSource = await fetchGitHubRepositorySource({
      ...source,
      context: `Public GitHub repository selected from ${owner}'s profile`,
      label: repo.full_name,
      maxCodeFiles: 3,
      maxFileTextLength: 3600,
      maxRepositoryTextLength: 9000,
      url: repo.html_url
    }, {
      owner,
      repo: repo.name,
      type: "repo",
      branch: repo.default_branch
    });
    if (repoSource?.text?.trim()) repoBlocks.push(repoSource.text.trim());
  }

  const lines = [
    `GitHub public profile: ${owner}`,
    profile?.name ? `Name: ${profile.name}` : "",
    profile?.bio ? `Bio: ${profile.bio}` : "",
    profile?.html_url ? `Profile URL: ${profile.html_url}` : source.url,
    "",
    "Public repositories visible from the profile:",
    ...repoList.slice(0, 20).map((repo) => [
      `- ${repo.full_name}`,
      repo.description ? `: ${repo.description}` : "",
      repo.language ? ` | Language: ${repo.language}` : "",
      repo.html_url ? ` | URL: ${repo.html_url}` : "",
      repo.updated_at ? ` | Updated: ${repo.updated_at}` : ""
    ].join("")),
    includeCode && selectedRepos.length ? "" : "",
    includeCode && selectedRepos.length ? "Selected public repositories inspected for source code:" : "",
    ...selectedRepos.map((repo) => `- ${repo.full_name}${repo.language ? ` | Language: ${repo.language}` : ""}${repo.description ? ` | ${repo.description}` : ""}`),
    ...repoBlocks.flatMap((block) => ["", "---", block])
  ].filter(Boolean);
  return {
    context: source.context || "Public GitHub profile",
    title: source.title || source.label || `GitHub profile: ${owner}`,
    type: includeCode ? "public GitHub profile and selected repository code" : "public GitHub profile",
    url: source.url,
    text: clampText(lines.join("\n"), includeCode ? 30000 : 9000)
  };
}

async function fetchGitHubRepositorySource(source = {}, parsed = {}) {
  const { owner, repo } = parsed;
  const metadata = await fetchGitHubJson(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`);
  const branch = parsed.branch || metadata?.default_branch || "main";
  const question = source.question || "";
  const requestedMaxCodeFiles = Number(source.maxCodeFiles || (wantsGitHubCode(question) ? 6 : 3));
  const maxCodeFiles = Math.max(1, Math.min(8, Number.isFinite(requestedMaxCodeFiles) ? requestedMaxCodeFiles : 3));
  const requestedFileTextLength = Number(source.maxFileTextLength || (wantsGitHubCode(question) ? 7000 : 3000));
  const maxFileTextLength = Math.max(1000, Math.min(10000, Number.isFinite(requestedFileTextLength) ? requestedFileTextLength : 3000));
  const requestedRepoTextLength = Number(source.maxRepositoryTextLength || (wantsGitHubCode(question) ? 22000 : 14000));
  const maxRepositoryTextLength = Math.max(5000, Math.min(26000, Number.isFinite(requestedRepoTextLength) ? requestedRepoTextLength : 14000));
  const lines = [
    `GitHub repository: ${owner}/${repo}`,
    metadata?.description ? `Description: ${metadata.description}` : "",
    metadata?.language ? `Primary language: ${metadata.language}` : "",
    metadata?.html_url ? `Repository URL: ${metadata.html_url}` : source.url,
    metadata?.default_branch ? `Default branch: ${metadata.default_branch}` : "",
    ""
  ].filter(Boolean);

  if (parsed.type === "file" && parsed.filePath) {
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${parsed.filePath}`;
    const text = await fetchLimitedText(rawUrl, 14000);
    if (text.trim()) lines.push(`Source file: ${parsed.filePath}`, text.trim());
    return {
      context: source.context || "Public GitHub source file",
      title: source.title || source.label || `${owner}/${repo}/${parsed.filePath}`,
      type: "public GitHub source file",
      url: source.url,
      text: clampText(lines.join("\n"), 14000)
    };
  }

  const tree = await fetchGitHubJson(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/git/trees/${encodeURIComponent(branch)}?recursive=1`);
  const files = Array.isArray(tree?.tree)
    ? tree.tree
      .filter((item) => item.type === "blob" && item.path && GITHUB_TEXT_FILE_PATTERN.test(item.path) && !GITHUB_SKIP_FILE_PATTERN.test(item.path))
      .sort((a, b) => scoreGitHubFile(b.path, question) - scoreGitHubFile(a.path, question))
    : [];

  const readmePath = files.find((file) => /(^|\/)readme\.md$/i.test(file.path))?.path || "README.md";
  const readmeText = await fetchLimitedText(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${readmePath}`, 9000).catch(() => "");
  if (readmeText.trim()) lines.push(`README excerpt from ${readmePath}:`, readmeText.trim(), "");

  if (files.length) {
    lines.push("Repository text/code file list:", ...files.slice(0, 30).map((file) => `- ${file.path}`), "");
  }

  const includeCode = wantsGitHubCode(question);
  const selectedFiles = files
    .filter((file) => !/readme\.md$/i.test(file.path))
    .slice(0, maxCodeFiles);

  for (const file of selectedFiles) {
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${file.path}`;
    const fileText = await fetchLimitedText(rawUrl, maxFileTextLength).catch(() => "");
    if (!fileText.trim()) continue;
    lines.push(`Source file: ${file.path}`, fileText.trim(), "");
  }

  return {
    context: source.context || "Public GitHub repository",
    title: source.title || source.label || `${owner}/${repo}`,
    type: includeCode ? "public GitHub repository and code" : "public GitHub repository",
    url: source.url,
    text: clampText(lines.join("\n"), maxRepositoryTextLength)
  };
}

async function fetchGitHubSourceText(source = {}) {
  const parsed = parseGitHubSourceUrl(source.url || "");
  if (!parsed) return null;
  if (parsed.type === "profile") return fetchGitHubProfileSource(source, parsed);
  return fetchGitHubRepositorySource(source, parsed);
}

async function fetchSourceText(source = {}) {
  const url = String(source.url || "");
  if (!url || !sourceLooksTextual(source) || !sourceUrlAllowed(url)) return null;
  if (/github\.com|raw\.githubusercontent\.com/i.test(url)) {
    const githubText = await fetchGitHubSourceText(source);
    if (githubText?.text?.trim()) return githubText;
  }
  try {
    const response = await fetch(url, {
      headers: { "Accept": "text/plain,text/markdown,text/html,application/json;q=0.8,*/*;q=0.1" }
    });
    if (!response.ok) return null;
    const contentType = response.headers.get("Content-Type") || "";
    if (!/text|json|xml|html|markdown/i.test(contentType)) return null;
    const rawText = clampText(await response.text(), 12000);
    const text = /html/i.test(contentType) ? stripHtmlToText(rawText) : rawText;
    if (!text.trim()) return null;
    return {
      context: source.context || "",
      title: source.title || source.label || url,
      type: source.type || source.kind || "public source",
      url,
      text: clampText(text.trim(), 9000)
    };
  } catch {
    return null;
  }
}

async function enrichPortfolioContext(context = {}) {
  const question = String(context.question || "");
  const sources = Array.isArray(context.sourceFetches)
    ? context.sourceFetches.slice(0, 10).map((source) => ({ ...source, question: source.question || question }))
    : [];
  const sourceExcerpts = (await Promise.all(sources.map(fetchSourceText))).filter(Boolean);
  return {
    ...context,
    sourceExcerpts,
    sourceFetchPolicy: "Fetched excerpts are limited to safe text-like same-site, GitHub/raw GitHub, LinkedIn, and public portfolio URLs. GitHub repository links can be expanded into repository metadata, README text, and selected public source files when a question asks for code. PDFs/images are represented by captions, metadata, filenames, and companion text files when available."
  };
}

function cleanConversationHistory(value) {
  if (!Array.isArray(value)) return [];
  return value
    .slice(-8)
    .map((item) => ({
      role: item?.role === "assistant" ? "assistant" : "user",
      content: clampText(item?.content, 1400).trim()
    }))
    .filter((item) => item.content);
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

function extractWorkersAiText(data) {
  if (typeof data === "string" && data.trim()) return data.trim();
  if (typeof data?.response === "string" && data.response.trim()) return data.response.trim();
  if (typeof data?.result?.response === "string" && data.result.response.trim()) return data.result.response.trim();
  if (typeof data?.answer === "string" && data.answer.trim()) return data.answer.trim();
  if (typeof data?.text === "string" && data.text.trim()) return data.text.trim();
  return "";
}

function requestMetadata(body, env) {
  const question = clampText(body.question, 1200).trim();
  const validIntents = new Set(["general_conversation", "general_engineering", "general_knowledge", "portfolio_specific"]);
  const intent = validIntents.has(body.intent) ? body.intent : "portfolio_specific";
  const allowWebSearch = body.allowWebSearch === true;
  const conversation = cleanConversationHistory(body.conversation);
  const context = body.context || {};
  const webSearchMode = String(env.OPENAI_ENABLE_WEB_SEARCH || "auto").toLowerCase();
  const enableWebSearch = webSearchMode === "true" || (webSearchMode !== "false" && allowWebSearch);

  return { allowWebSearch, context, conversation, enableWebSearch, intent, question };
}

function assistantUserPrompt({ context, conversation, enableWebSearch, intent, question }) {
  return [
    `Visitor question: ${question}`,
    `Question intent: ${intent}`,
    `Web search allowed for this question: ${enableWebSearch ? "yes" : "no"}`,
    "",
    "Recent conversation JSON:",
    clampText(JSON.stringify(conversation, null, 2), 8000),
    "",
    "Portfolio context JSON:",
    clampText(JSON.stringify(context || {}, null, 2), 18000)
  ].join("\n");
}

function ruleBasedConversationAnswer(question = "") {
  const clean = String(question || "").toLowerCase();
  if (/\b(thanks|thank you|appreciate it)\b/.test(clean)) {
    return "You're welcome. I can keep helping with Maurice's portfolio, project evidence, resume links, or related electronics and embedded-systems questions.";
  }

  if (/\b(who are you|what are you)\b/.test(clean)) {
    return "I am Maurice Otieno's portfolio assistant. I can help visitors explore his engineering work, explain project details, summarize portfolio evidence, and answer related electronics, embedded, analog, digital, FPGA, ASIC, PCB, and firmware questions.";
  }

  return "Hi. I can help you explore Maurice Otieno's portfolio, explain his projects, summarize project evidence, open relevant sections, or answer related electronics and embedded-systems questions. You can ask about a specific project, a tool like KiCad or STM32CubeIDE, or a general topic such as embedded systems, op amps, FPGA design, ASICs, or PCB testing.";
}

async function callOpenAi(body, env) {
  const metadata = requestMetadata(body, env);
  let { context, conversation, enableWebSearch, intent, question } = metadata;
  if (!question) return { status: 400, data: { error: "Question is required." } };
  if (!env.OPENAI_API_KEY) return { status: 503, data: { error: "OPENAI_API_KEY is not configured." } };
  context = await enrichPortfolioContext({ ...context, question });

  const model = env.OPENAI_MODEL || "gpt-5.4";
  const fallbackModel = env.OPENAI_FALLBACK_MODEL || "gpt-4.1";
  const buildPayload = (selectedModel) => ({
    model: selectedModel,
    input: [
      {
        role: "developer",
        content: [{ type: "input_text", text: PORTFOLIO_AI_INSTRUCTIONS }]
      },
      {
        role: "user",
        content: [{
          type: "input_text",
          text: assistantUserPrompt({ context, conversation, enableWebSearch, intent, question })
        }]
      }
    ],
    max_output_tokens: Number(env.OPENAI_MAX_OUTPUT_TOKENS || 1100),
    reasoning: { effort: env.OPENAI_REASONING_EFFORT || "medium" },
    store: false,
    text: { verbosity: env.OPENAI_VERBOSITY || "medium" }
  });

  const callModel = async (selectedModel) => {
    const payload = buildPayload(selectedModel);
    if (enableWebSearch) {
      payload.tools = [{ type: "web_search", search_context_size: env.OPENAI_WEB_SEARCH_CONTEXT_SIZE || "low" }];
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
    return { data, openAiResponse, selectedModel };
  };

  let { data, openAiResponse, selectedModel } = await callModel(model);
  if (!openAiResponse.ok && !env.OPENAI_MODEL && fallbackModel && fallbackModel !== model && [400, 404].includes(openAiResponse.status)) {
    ({ data, openAiResponse, selectedModel } = await callModel(fallbackModel));
  }
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
      model: selectedModel,
      usedWebSearch: enableWebSearch
    }
  };
}

async function callWorkersAi(body, env) {
  const metadata = requestMetadata(body, env);
  let { context, conversation, enableWebSearch, intent, question } = metadata;
  if (!question) return { status: 400, data: { error: "Question is required." } };
  if (!env.AI || typeof env.AI.run !== "function") {
    return { status: 503, data: { error: "Cloudflare Workers AI binding is not configured." } };
  }
  context = await enrichPortfolioContext({ ...context, question });

  const model = env.WORKERS_AI_MODEL || "@cf/meta/llama-3.3-70b-instruct-fp8-fast";
  const fallbackModel = env.WORKERS_AI_FALLBACK_MODEL || "@cf/meta/llama-3.1-8b-instruct-fast";
  const messages = [
    { role: "system", content: PORTFOLIO_AI_INSTRUCTIONS },
    { role: "user", content: assistantUserPrompt({ context, conversation, enableWebSearch, intent, question }) }
  ];
  const runModel = async (selectedModel) => {
    const result = await env.AI.run(selectedModel, {
      max_tokens: Number(env.WORKERS_AI_MAX_TOKENS || 900),
      messages,
      temperature: Number(env.WORKERS_AI_TEMPERATURE || 0.35)
    });
    return { answer: extractWorkersAiText(result), raw: result, selectedModel };
  };

  try {
    let result = await runModel(model);
    if (!result.answer && fallbackModel && fallbackModel !== model) {
      result = await runModel(fallbackModel);
    }
    if (!result.answer) {
      return { status: 502, data: { error: "Workers AI returned an empty answer." } };
    }
    return {
      status: 200,
      data: {
        answer: result.answer,
        model: result.selectedModel,
        provider: "cloudflare-workers-ai",
        usedWebSearch: false
      }
    };
  } catch (error) {
    if (fallbackModel && fallbackModel !== model) {
      try {
        const result = await runModel(fallbackModel);
        if (result.answer) {
          return {
            status: 200,
            data: {
              answer: result.answer,
              model: result.selectedModel,
              provider: "cloudflare-workers-ai",
              usedWebSearch: false
            }
          };
        }
      } catch {
        // Use the original error below.
      }
    }
    return {
      status: 502,
      data: { error: error?.message || "Cloudflare Workers AI request failed." }
    };
  }
}

async function callAssistantModel(body, env) {
  const metadata = requestMetadata(body, env);
  if (metadata.intent === "general_conversation") {
    return {
      status: 200,
      data: {
        answer: ruleBasedConversationAnswer(metadata.question),
        model: "portfolio-conversation-router",
        provider: "portfolio-rules",
        usedWebSearch: false
      }
    };
  }

  const provider = String(env.AI_PROVIDER || "workers-ai").toLowerCase();
  if ((metadata.intent === "general_knowledge" || metadata.enableWebSearch) && env.OPENAI_API_KEY) {
    return callOpenAi(body, env);
  }
  if (provider === "openai") return callOpenAi(body, env);
  if (provider === "workers-ai") {
    const workersAi = await callWorkersAi(body, env);
    if (workersAi.status === 200 || !env.OPENAI_API_KEY) return workersAi;
    return callOpenAi(body, env);
  }

  const workersAi = await callWorkersAi(body, env);
  if (workersAi.status === 200) return workersAi;
  if (env.OPENAI_API_KEY) return callOpenAi(body, env);
  return workersAi;
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

    const result = await callAssistantModel(body, env);
    return jsonResponse(result.data, result.status, headers);
  }
};
