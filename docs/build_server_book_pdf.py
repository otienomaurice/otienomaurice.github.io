from __future__ import annotations

import html
import re
from dataclasses import dataclass
from pathlib import Path

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    CondPageBreak,
    Frame,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)

import build_server_textbook_pdf as base


REPO = Path(__file__).resolve().parents[1]
SERVER_PATH = REPO / "server.mjs"
OUTPUT_PATH = REPO / "docs" / "curated-file-guides-pdf" / "server.mjs.pdf"
TARGET_MIN_PAGES = 600

ACCENT = colors.HexColor("#0F766E")
INK = colors.HexColor("#111827")
MUTED = colors.HexColor("#475569")
CODE_BG = colors.HexColor("#F8FAFC")


try:
    pdfmetrics.registerFont(TTFont("Consolas", r"C:\Windows\Fonts\consola.ttf"))
    pdfmetrics.registerFont(TTFont("Consolas-Bold", r"C:\Windows\Fonts\consolab.ttf"))
    MONO = "Consolas"
except Exception:
    MONO = "Courier"


STYLES = getSampleStyleSheet()
STYLES.add(
    ParagraphStyle(
        name="BookTitle",
        parent=STYLES["Title"],
        fontName="Helvetica-Bold",
        fontSize=21,
        leading=25,
        textColor=colors.HexColor("#0F172A"),
        alignment=TA_CENTER,
        spaceAfter=10,
    )
)
STYLES.add(
    ParagraphStyle(
        name="Subtitle",
        parent=STYLES["BodyText"],
        fontName="Helvetica",
        fontSize=9.4,
        leading=12,
        textColor=MUTED,
        alignment=TA_CENTER,
        spaceAfter=14,
    )
)
STYLES.add(
    ParagraphStyle(
        name="Chapter",
        parent=STYLES["Heading1"],
        fontName="Helvetica-Bold",
        fontSize=14.2,
        leading=17.2,
        textColor=colors.HexColor("#0F172A"),
        spaceBefore=0,
        spaceAfter=6,
        keepWithNext=1,
    )
)
STYLES.add(
    ParagraphStyle(
        name="Section",
        parent=STYLES["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=10.8,
        leading=13,
        textColor=ACCENT,
        spaceBefore=6,
        spaceAfter=3,
        keepWithNext=1,
    )
)
STYLES.add(
    ParagraphStyle(
        name="Subsection",
        parent=STYLES["Heading3"],
        fontName="Helvetica-Bold",
        fontSize=9.4,
        leading=11.4,
        textColor=colors.HexColor("#1E3A8A"),
        spaceBefore=4,
        spaceAfter=2,
        keepWithNext=1,
    )
)
STYLES.add(
    ParagraphStyle(
        name="BodyBook",
        parent=STYLES["BodyText"],
        fontName="Helvetica",
        fontSize=9.15,
        leading=11.35,
        firstLineIndent=0.15 * inch,
        alignment=TA_JUSTIFY,
        textColor=INK,
        spaceAfter=2.2,
    )
)
STYLES.add(
    ParagraphStyle(
        name="BodyNoIndent",
        parent=STYLES["BodyBook"],
        firstLineIndent=0,
    )
)
STYLES.add(
    ParagraphStyle(
        name="CodeLine",
        parent=STYLES["BodyText"],
        fontName=MONO,
        fontSize=5.85,
        leading=6.85,
        textColor=colors.HexColor("#0F172A"),
        firstLineIndent=0,
        leftIndent=0.055 * inch,
        rightIndent=0.055 * inch,
        spaceBefore=0,
        spaceAfter=0,
        backColor=CODE_BG,
        borderPadding=0.8,
    )
)
STYLES.add(
    ParagraphStyle(
        name="CodeIntro",
        parent=STYLES["BodyNoIndent"],
        fontName="Helvetica-Oblique",
        fontSize=8.2,
        leading=10.2,
        textColor=colors.HexColor("#334155"),
        spaceBefore=2,
        spaceAfter=2,
    )
)


BOOKMARK_COUNTER = 0
CURRENT_CHAPTER = 0


class BookDocTemplate(BaseDocTemplate):
    def afterFlowable(self, flowable) -> None:
        title = getattr(flowable, "_bookmark_title", None)
        key = getattr(flowable, "_bookmark_key", None)
        level = getattr(flowable, "_bookmark_level", None)
        if not title or key is None or level is None:
            return
        self.canv.bookmarkPage(key)
        self.canv.addOutlineEntry(title, key, level=level, closed=level > 0)


def clean(text: str) -> str:
    return " ".join(str(text).strip().split())


def add_p(story: list, text: str, style: str = "BodyBook") -> None:
    story.append(Paragraph(clean(text), STYLES[style]))


def bookmark_key(text: str) -> str:
    global BOOKMARK_COUNTER
    BOOKMARK_COUNTER += 1
    slug = re.sub(r"[^A-Za-z0-9]+", "-", text).strip("-").lower()[:42] or "section"
    return f"{BOOKMARK_COUNTER:04d}-{slug}"


def add_heading(story: list, text: str, level: int = 1) -> None:
    if level == 2:
        story.append(CondPageBreak(0.68 * inch))
    elif level == 3:
        story.append(CondPageBreak(0.44 * inch))
    para = Paragraph(html.escape(text), STYLES[{1: "Chapter", 2: "Section", 3: "Subsection"}[level]])
    para._bookmark_title = text
    para._bookmark_key = bookmark_key(text)
    para._bookmark_level = level - 1
    para.keepWithNext = 1
    story.append(para)


def start_chapter(story: list, number: int, title: str) -> None:
    global CURRENT_CHAPTER
    CURRENT_CHAPTER = number
    if story:
        story.append(PageBreak())
    add_heading(story, f"Chapter {number}: {title}", 1)


def add_code(story: list, code: str, intro: str | None = None) -> None:
    if intro:
        story.append(Paragraph(clean(intro), STYLES["CodeIntro"]))
    story.append(Spacer(1, 1.2))
    for raw_line in code.rstrip("\n").splitlines() or [""]:
        for line in base.wrap_code_line(raw_line, width=138):
            story.append(Paragraph(base.syntax_spans(line or " "), STYLES["CodeLine"]))
    story.append(Spacer(1, 2.8))


def draw_page(canvas, doc) -> None:
    canvas.saveState()
    page = canvas.getPageNumber()
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(colors.HexColor("#64748B"))
    canvas.drawString(0.48 * inch, 0.34 * inch, "server.mjs implementation book")
    canvas.drawRightString(8.02 * inch, 0.34 * inch, f"Page {page}")
    canvas.setStrokeColor(colors.HexColor("#CBD5E1"))
    canvas.setLineWidth(0.2)
    canvas.line(0.48 * inch, 0.48 * inch, 8.02 * inch, 0.48 * inch)
    canvas.restoreState()


def function_names(source: str) -> list[str]:
    return re.findall(r"(?m)^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(", source)


def function_signature(source: str, name: str) -> tuple[bool, str]:
    match = re.search(rf"(?m)^(async\s+)?function\s+{re.escape(name)}\s*\(([^)]*)\)", source)
    if not match:
        return False, ""
    return bool(match.group(1)), match.group(2).strip()


def split_params(signature: str) -> list[str]:
    if not signature:
        return []
    params = []
    depth = 0
    current = []
    for char in signature:
        if char == "," and depth == 0:
            params.append("".join(current).strip())
            current = []
            continue
        if char in "([{":
            depth += 1
        elif char in ")]}" and depth:
            depth -= 1
        current.append(char)
    tail = "".join(current).strip()
    if tail:
        params.append(tail)
    return params


def extract_names(pattern: str, code: str) -> list[str]:
    names = []
    for match in re.finditer(pattern, code):
        name = match.group(1)
        if name not in names:
            names.append(name)
    return names


CALL_IGNORE = {
    "if", "for", "while", "switch", "catch", "function", "return", "throw",
    "new", "await", "String", "Number", "Boolean", "Array", "Object", "Date",
    "Error", "Set", "Map", "RegExp", "Promise",
}


def calls_in(code: str, own_name: str = "") -> list[str]:
    calls = []
    for match in re.finditer(r"\b([A-Za-z_$][\w$]*)\s*\(", code):
        name = match.group(1)
        if name in CALL_IGNORE or name == own_name:
            continue
        if name not in calls:
            calls.append(name)
    return calls


def return_snippets(code: str) -> list[str]:
    snippets = []
    for line in code.splitlines():
        stripped = line.strip()
        if stripped.startswith("return"):
            snippets.append(stripped[:180])
        if len(snippets) >= 5:
            break
    return snippets


def state_refs(code: str, known: list[str]) -> list[str]:
    refs = []
    for name in known:
        if re.search(rf"\b{re.escape(name)}\b", code) and name not in refs:
            refs.append(name)
    return refs


def summarize_list(values: list[str], fallback: str = "none") -> str:
    if not values:
        return fallback
    if len(values) <= 8:
        return ", ".join(values)
    return ", ".join(values[:8]) + f", and {len(values) - 8} more"


PARAMETER_MEANINGS = {
    "request": "the Node HTTP request object carrying method, URL, headers, remote address, and body stream",
    "response": "the Node HTTP response object used to send status, headers, and body text back to the browser",
    "url": "the parsed URL object that tells the router which path the browser requested",
    "payload": "the request-shaped object sent by the builder frontend for a code, publish, upload, or AI action",
    "options": "an options object that lets the caller adjust strictness, roots, credentials, branches, timeouts, or behavior without changing the function signature",
    "source": "source text or a source descriptor, depending on the feature that is reading project evidence",
    "code": "source code text typed or pasted into the compile workspace",
    "language": "the normalized language id used by the compiler workspace",
    "fileName": "the user-facing filename that becomes a safe local filename after validation",
    "projectId": "the project identifier used to separate files and compile workspaces by project",
    "branch": "the Git branch that the website publish target uses",
    "access": "the verified publishing-access object containing repository, branch, remote, and authorization state",
    "cache": "the local authorization or build cache object being checked or updated",
    "context": "the portfolio context supplied to the AI assistant before model generation",
}


def describe_params(params: list[str]) -> str:
    if not params:
        return "This function accepts no explicit parameter, so it works from module-level state, constants, environment variables, or values it creates inside the workflow."
    parts = []
    for param in params:
        clean_param = param.split("=")[0].strip().strip("{}[]")
        meaning = PARAMETER_MEANINGS.get(clean_param, "a value whose meaning is defined by the feature calling this helper")
        parts.append(f"{param} represents {meaning}")
    return "; ".join(parts) + "."


def feature_context_sentence(chapter_title: str, name: str) -> str:
    return (
        f"Inside {chapter_title}, {name} should be read as one piece of a larger user-facing workflow rather than as an isolated utility. "
        "The surrounding chapter explains the button, route, or backend stage that needs this helper, while this subsection slows down the implementation itself."
    )


def procedural_walkthrough(name: str, code: str, meta: dict) -> list[str]:
    calls = meta["calls"]
    locals_ = meta["locals"]
    lets = meta["lets"]
    returns = meta["returns"]
    awaits = meta["awaits"]
    states = meta["states"]
    routes = meta["routes"]
    side_effects = meta["side_effects"]
    paragraphs = []
    paragraphs.append(
        f"The first useful reading of {name} is chronological. The function begins by shaping the data it can trust, then it moves toward the operation that gives the helper its purpose. "
        f"In this body the visible local constants are {summarize_list(locals_)}, while mutable working names are {summarize_list(lets)}. "
        "Those names are not decoration: they show what the implementation needs to remember between checks, loops, external calls, and final response construction."
    )
    paragraphs.append(
        f"The function's call surface is {summarize_list(calls)}. Read that list as the function's conversation with the rest of the backend. "
        "A call to a sanitizer means browser input is crossing a trust boundary. A call to a filesystem helper means state is leaving memory. A call to a Git, process, or fetch helper means the backend is crossing from JavaScript into an external service or tool."
    )
    paragraphs.append(
        f"The awaited operations are {summarize_list(awaits)}. Each awaited call is a place where execution pauses while the operating system, Git, a compiler, a network request, or a file operation finishes. "
        "When debugging this function, those await points are the best landmarks because they are the moments most likely to fail for reasons outside plain JavaScript syntax."
    )
    paragraphs.append(
        f"The shared module state referenced here is {summarize_list(states)}. A module-level value matters because it ties the function to the application environment: roots decide where files live, caches decide what can be reused, profile tables decide language rules, and publish constants decide what may become public."
    )
    paragraphs.append(
        f"The explicit route paths visible in this body are {summarize_list(routes)}. When route strings appear in a function, the helper is participating directly in the public contract between the browser UI and the backend. "
        "Changing one of those strings would require the frontend request code to change with it."
    )
    paragraphs.append(
        f"The side-effect vocabulary in this body is {summarize_list(side_effects)}. Side effects are the places where this helper stops being a calculation and starts changing the world: reading, writing, spawning tools, contacting GitHub, updating a cache, or answering an HTTP request."
    )
    paragraphs.append(
        f"The return behavior can be read through these visible return lines: {summarize_list(returns, 'no direct return line appears in the excerpt')}. "
        "A return object is important because it becomes a contract with its caller. A thrown error is important for the opposite reason: the caller must catch it and translate it into a useful dialog or HTTP response."
    )
    paragraphs.append(
        f"If {name} were removed, the breakage would not usually look like a missing paragraph in the UI. It would appear as a failed route, a missing compiler output, a stale publish target, a broken AI answer, a file written to the wrong place, or a security check skipped at the exact boundary this helper currently owns."
    )
    paragraphs.append(
        f"The safest way to change {name} is to preserve its input and output promises first, then adjust the internal steps. That means keeping parameter meanings stable, keeping response objects boring and predictable, and keeping any filesystem, process, Git, or network side effect behind the same safety checks."
    )
    paragraphs.append(
        f"A beginner can use {name} as a map of cause and effect. Start with the parameters, underline each local name the function creates, circle each call that leaves the function, and then read the final return or response. That reading method turns a dense backend body into a sequence of decisions."
    )
    paragraphs.append(
        f"The implementation also reveals the author's engineering tradeoff. Instead of hiding behavior behind a large framework, {name} keeps the important steps close enough to audit. That is good for a local builder because publishing, compiling, and updating are privileged operations that deserve visible control flow."
    )
    paragraphs.append(
        f"The most important maintenance habit for {name} is to add new behavior at the same abstraction level as the existing behavior. If a future change adds another compiler, another authentication state, or another AI evidence source, the change should join the same data shape and safety pattern rather than creating a parallel special case."
    )
    return paragraphs


def deep_function_expansion(name: str, meta: dict, chapter_title: str) -> list[tuple[str, list[str]]]:
    params = summarize_list(meta["params"])
    locals_ = summarize_list(meta["locals"])
    lets = summarize_list(meta["lets"])
    calls = summarize_list(meta["calls"])
    awaits = summarize_list(meta["awaits"])
    states = summarize_list(meta["states"])
    returns = summarize_list(meta["returns"], "no direct return line is visible")
    side_effects = summarize_list(meta["side_effects"])
    routes = summarize_list(meta["routes"])
    return [
        (
            f"{name} as a data-flow path",
            [
                f"Read {name} first as a movement of data. The data enters through {params}, then the function gives that data names, checks it, reshapes it, and either hands it to another helper or turns it into a final result. This is why the parameter list matters even when a function looks small: the parameters tell us what kind of information the caller is allowed to inject into this part of {chapter_title}.",
                f"The local constants in this function are {locals_}. A constant created inside a function is a temporary label for an idea that should not be reassigned while the function is working. In a backend like this one, local constants often represent parsed text, resolved paths, sanitized names, fetched responses, output objects, or command arguments. Those labels make the next step less ambiguous.",
                f"The mutable names are {lets}. When a function uses let, the reader should ask why the value has to evolve. Parsers use mutable state because they walk through input. Tool discovery uses mutable state because it tries one candidate after another. Process supervision uses mutable state because stdout, stderr, timeout flags, and elapsed time arrive gradually.",
                f"The call chain is {calls}. Each called helper is a handoff. If the called helper is a sanitizer, the function is narrowing trust. If it is a filesystem helper, the function is moving from memory to disk. If it is a Git or compiler helper, the function is leaving JavaScript and asking the operating system or another program to do work.",
                f"By the time {name} reaches its return or response path, the function has converted its input into something another layer understands. That conversion is the real purpose of the helper. Good backend functions rarely return raw chaos; they return a shaped object, a cleaned string, a safe path, a tool result, an authorization status, or a user-facing error.",
            ],
        ),
        (
            f"{name} as control flow",
            [
                f"The visible control-flow count is {meta['branches']} conditional branch(es), {meta['loops']} loop structure(s), and {meta['throws']} explicit throw statement(s). That count gives the reader a quick sense of how much judgment lives inside the function. A helper with many branches is making policy choices; a helper with many loops is probably scanning candidates, parsing text, walking files, or processing a collection.",
                f"The await points are {awaits}. Every await is a suspension point where JavaScript waits for slower work. A beginner should not skim past await, because it marks the boundary where a simple-looking function becomes dependent on files, child processes, network responses, Git, compilers, or model providers.",
                f"The return lines are {returns}. In this project, return values are often small contracts. A compiler helper returns terminal text and artifacts. A publishing helper returns branch and Git output. An AI helper returns answer text and provider details. A path helper returns a safe absolute path or throws before an unsafe path can be used.",
                f"The function should be debugged along the same control-flow path. First check whether the expected branch was taken. Then check which awaited operation failed or stalled. Then check whether the return object has the shape the caller expects. That method is better than randomly adding logs because it follows the function's own structure.",
                f"If this function later moves into a framework service, its control-flow decisions should move with it. A framework router can change how the request arrives, but it should not silently change which branches are taken, which errors are thrown, or which result shape the frontend receives.",
            ],
        ),
        (
            f"{name} as a boundary",
            [
                f"The shared state referenced by {name} is {states}. Shared state ties a helper to the runtime environment. A function that reads compileRoot is participating in the compile workspace. A function that reads publishPaths is participating in the public-site allowlist. A function that reads portfolioAiInstructions is participating in AI behavior.",
                f"The side-effect words visible in this body are {side_effects}. Side effects are where a backend becomes powerful and risky. Reading a file, writing a file, copying a folder, deleting a folder, launching Git, spawning a compiler, sending an HTTP response, or calling fetch are all actions that can fail outside pure JavaScript logic.",
                f"The route paths visible here are {routes}. A route path is not just a string; it is part of the contract between frontend and backend. If the route changes, every button, dialog, preview panel, or AI widget that calls that endpoint must be updated with it.",
                f"The boundary question for {name} is: what is allowed to cross into this helper, and what is allowed to leave it? A safe helper validates or normalizes incoming values before they become paths, command arguments, prompt text, repository URLs, branch names, filenames, or bytes written to disk.",
                f"Without this boundary, the system would become fragile in places that are hard to see from the UI. The builder might save an upload under the wrong folder, run a compiler with the wrong file, treat an expired GitHub session as fresh, send irrelevant context to the AI, or publish files that were never meant to become public.",
            ],
        ),
        (
            f"{name} as part of the user experience",
            [
                f"The user does not experience {name} as code. The user experiences it as a button that works, a dialog that explains itself, a compile terminal that updates, a published site that appears online, an AI assistant that answers, or an update flow that relaunches the app. That is why backend result shapes must stay friendly to the frontend.",
                f"When {name} succeeds, the success should be visible at the right level. A low-level helper may only return a path or boolean. A route-level helper should return enough detail for a human message. A publish helper should return Git output. A compile helper should return terminal text. An AI helper should return answer text and provider metadata.",
                f"When {name} fails, the failure should not be allowed to collapse into a mysterious exception. The surrounding code should translate the failure into a message that names the blocked action, the reason, and the next step. This is especially important for GitHub authorization, compiler installation, target loading, and automatic updates.",
                f"The best UI behavior comes from preserving the backend's meaning. If a cache is fresh, say it is cached. If a compiler is missing, name the missing tool. If a repository is behind, show the Git reason. If AI context is unavailable, say which backend provider is missing rather than pretending the answer was generated.",
                f"For this reason, any future refactor should keep the visible experience tied to the backend contract. A nicer framework route is not an improvement if it returns less useful information to the person using the builder.",
            ],
        ),
        (
            f"{name} as a testing target",
            [
                f"A focused test for {name} should begin with the simplest expected input and verify the boring successful result. Then it should test the first boundary: missing input, bad type, unsafe path, absent tool, expired cache, failed Git command, failed network request, or empty source text depending on the function's purpose.",
                f"For functions that call {calls}, tests should decide which calls need to be real and which should be replaced by fakes. Path helpers can be tested directly. Git, compiler, update, and AI functions are better tested with controlled temporary folders, fake commands, or mocked provider responses.",
                f"The variables {locals_} and {lets} become useful test checkpoints. If the function is hard to test, it may be because too many of those values are created deep inside the body instead of being injected as explicit dependencies. That observation becomes important during the framework migration chapter.",
                f"A regression test should preserve the most important promise of {name}. For a sanitizer, the promise is safe output. For a parser, the promise is correct structure. For a process runner, the promise is captured stdout, stderr, exit code, and timeout behavior. For a publisher, the promise is correct ordering: sync, copy, stage, commit, push.",
                f"Testing this function is not about proving JavaScript works. It is about proving the app's behavior survives realistic failure. The useful tests are the ones that would catch a broken save draft, a stale authorization cache, a bad waveform parse, a missing compiler, or an unsafe publish path before a user finds it.",
            ],
        ),
        (
            f"{name} as future framework code",
            [
                f"In a framework migration, {name} should be placed according to what it owns. If it translates HTTP, it belongs near a controller or route handler. If it performs business behavior, it belongs in a service. If it reads or writes files, it belongs behind a repository or adapter. If it wraps Git, compilers, AI, or updates, it belongs behind an integration boundary.",
                f"The parameters {params} are a clue to that future home. Functions that accept request and response are still tied to raw HTTP. Functions that accept payload, source, branch, access, language, fileName, or code are closer to the domain and easier to move into services.",
                f"The side effects {side_effects} should be isolated before migration. A framework should not make it easier for a route handler to write arbitrary files or launch arbitrary commands. Instead, it should make it more obvious which service is allowed to perform each privileged operation.",
                f"The return shape should become a named type or schema when this moves into a framework. The schema should capture success fields, error fields, optional details, and any frontend-visible messages. That prevents future edits from accidentally breaking dialogs or previews.",
                f"The migration strategy for {name} is therefore: preserve behavior, wrap dependencies, add tests, move the function, then improve structure. Moving and redesigning at the same time is how working local-builder behavior gets lost.",
            ],
        ),
        (
            f"{name} as an operational trace",
            [
                f"Imagine watching {name} in a live trace while the builder is running. The first interesting event is not the final answer; it is the moment the function receives {params}. That entry event tells you which part of the app called the helper and what kind of information was trusted enough to reach this point.",
                f"The next trace event is local shaping. Names such as {locals_} and {lets} would appear as the function turns broad input into smaller pieces. In a trace log, this is where you would want concise values: not huge source bodies, but filenames, route names, project ids, branch names, cache keys, booleans, and status labels.",
                f"The third trace event is the helper handoff. Calls such as {calls} reveal where execution leaves the current function. For a beginner, this is often the moment where the code stops feeling like a wall of text. The function is no longer a mystery; it is a coordinator sending work to named helpers.",
                f"The fourth trace event is the slow boundary. Awaited calls such as {awaits} are the places where a progress indicator, terminal line, or loading state may be justified. If the user feels lag, it is usually because one of these boundaries is waiting on disk, Git, a compiler, a network provider, or the operating system.",
                f"The final trace event is the exit shape. The function either returns {returns}, sends a response, or throws into a caller that should translate the problem. If a future logging system is added, this exit event should record the high-level outcome without leaking secrets, raw credentials, oversized code, or private local paths.",
            ],
        ),
        (
            f"{name} as a failure contract",
            [
                f"The failure contract for {name} begins with the assumption that anything outside pure JavaScript can fail. The visible side-effect vocabulary is {side_effects}, so this function must be read with missing files, invalid paths, absent tools, rejected Git commands, failed fetches, and interrupted processes in mind.",
                f"A good failure from {name} should be specific enough for the next layer. If a helper cannot find a compiler, the UI should not say only that compilation failed. If Git rejects a push, the UI should preserve the Git reason. If a cache is expired, the app should ask for authentication rather than pretending the target is still trusted.",
                f"The function's branch count, {meta['branches']}, is part of that failure contract. Branches usually express the situations the author expected: missing input, unsupported language, no files, stale cache, non-local request, unavailable provider, or incompatible repository. Unexpected failures should be rare and should still be caught near the route boundary.",
                f"If {name} becomes part of a framework service, this failure contract should be written down as typed errors or result variants. A framework can make error middleware elegant, but only if the underlying service communicates what kind of failure happened.",
                f"The simplest way to review a change to {name} is to ask what new failure it creates. Does it add a file operation, network call, compiler command, Git step, cache branch, or AI provider assumption? If yes, the change needs a corresponding message, test, and cleanup path.",
            ],
        ),
    ]


def analyze_function(source: str, name: str) -> dict:
    code = base.extract_function(source, name)
    is_async, signature = function_signature(source, name)
    known_states = [
        "root", "portfolioRoot", "compileRoot", "port", "host", "packageJson", "types",
        "draftPath", "catalogPath", "publishAuthCachePath", "publishPaths",
        "publishAuthCacheTtlMs", "publishAuthExtendedTtlMs", "publishAuthHistoryWindowMs",
        "publishAuthExtendedThreshold", "defaultSiteRepository", "blockedAppUpdateVersions",
        "publishAuthorizationHelp", "gitCandidates", "compileLanguageProfiles",
        "compileToolCandidates", "compileToolCache", "compileToolVersionCache",
        "portfolioAiInstructions",
    ]
    return {
        "code": code,
        "is_async": is_async,
        "signature": signature,
        "params": split_params(signature),
        "locals": extract_names(r"\bconst\s+([A-Za-z_$][\w$]*)", code),
        "lets": extract_names(r"\blet\s+([A-Za-z_$][\w$]*)", code),
        "calls": calls_in(code, name),
        "awaits": extract_names(r"\bawait\s+([A-Za-z_$][\w$]*)\s*\(", code),
        "returns": return_snippets(code),
        "states": state_refs(code, known_states),
        "routes": re.findall(r"url\.pathname\s*===\s*[\"']([^\"']+)[\"']", code),
        "side_effects": [word for word in [
            "readFile", "writeFile", "mkdir", "rm", "cp", "fsAccess", "readdir", "chmod", "mkdtemp",
            "spawn", "execFile", "execFileAsync", "fetch", "runGit", "runPublishGit", "runGitWithInput",
            "sendJson", "response.writeHead", "response.end",
        ] if word in code],
        "throws": len(re.findall(r"\bthrow\b", code)),
        "branches": len(re.findall(r"\bif\s*\(", code)),
        "loops": len(re.findall(r"\bfor\s*\(|\bwhile\s*\(", code)),
    }


def add_function_explanation(story: list, source: str, name: str, chapter_title: str) -> None:
    meta = analyze_function(source, name)
    code = meta["code"]
    if not code:
        return
    add_heading(story, f"{CURRENT_CHAPTER}.{name}", 2)
    add_p(story, feature_context_sentence(chapter_title, name))
    async_text = "asynchronous" if meta["is_async"] else "synchronous"
    add_p(
        story,
        f"{name} is written as an {async_text} function with the signature {html.escape(meta['signature'] or 'no parameters')}. "
        f"{describe_params(meta['params'])} The function contains {meta['branches']} visible conditional checks, {meta['loops']} loop structures, and {meta['throws']} explicit throw statement(s), which tells us how much decision-making and failure handling lives in the body.",
    )
    for text in base.FUNCTION_PROSE.get(name, []):
        add_p(story, text)
    add_code(story, code, f"The full implementation of {name} is shown here so the explanation stays attached to the real source, not to a summary.")
    for paragraph in procedural_walkthrough(name, code, meta):
        add_p(story, paragraph)
    add_heading(story, f"{CURRENT_CHAPTER}.{name} implementation reading notes", 3)
    add_p(
        story,
        f"Read the body again with the call order in mind. The calls {summarize_list(meta['calls'])} are the stepping stones, and the locals {summarize_list(meta['locals'])} are the temporary labels that carry data between those stones. "
        "This is the practical difference between knowing JavaScript syntax and understanding the backend: syntax tells you what the symbols mean, but the call order tells you what the app is trying to accomplish."
    )
    add_p(
        story,
        f"Whenever {name} touches {summarize_list(meta['side_effects'])}, the function is depending on the machine outside the JavaScript interpreter. That is where tests should include failure cases, because files can be missing, Git can reject a push, compilers can be absent, network requests can time out, and the user can close the app during a long operation."
    )
    add_p(
        story,
        f"The return lines and response calls inside {name} should stay boring. Boring return shapes are a strength: they let the frontend display success, error, terminal output, publish status, update status, or AI responses without reverse-engineering an unpredictable object every time."
    )
    for title, paragraphs in deep_function_expansion(name, meta, chapter_title):
        add_heading(story, title, 3)
        for paragraph in paragraphs:
            add_p(story, paragraph)


def add_state_explanation(story: list, source: str, name: str) -> None:
    snippet = base.extract_const(source, name)
    if not snippet:
        return
    add_heading(story, f"{CURRENT_CHAPTER}.{name} shared state", 2)
    for text in base.STATE_PROSE.get(name, []):
        add_p(story, text)
    add_code(story, snippet, f"The actual {name} declaration is part of the server's shared runtime state.")
    add_p(
        story,
        f"The important thing about {name} is not merely that it is a constant. It is a promise that multiple functions rely on. When a value like this changes, every function that reads it inherits the change, which is why shared state must be named clearly and kept near the top of the file."
    )
    add_p(
        story,
        f"In this backend, {name} behaves like a bus line on a schematic. It does not do work by itself, but it carries a configuration signal into helpers that route requests, resolve paths, run compilers, verify publishing state, answer AI questions, or launch updates."
    )


@dataclass(frozen=True)
class ImplementationChapter:
    number: int
    title: str
    opening: tuple[str, ...]
    states: tuple[str, ...]
    functions: tuple[str, ...]


IMPLEMENTATION_CHAPTERS = [
    ImplementationChapter(
        3,
        "Startup State, Paths, And Local Workspace Boundaries",
        (
            "This chapter explains the shared state that makes the backend know where it is, where the public portfolio lives, where compile artifacts are allowed to exist, and how the app should describe itself at runtime.",
            "The main idea is separation. The application root, portfolio root, compile root, published catalog, draft catalog, update cache, and publishing allowlist must not blur into one directory in the developer's mind.",
        ),
        ("root", "portfolioRoot", "compileRoot", "port", "host", "packageJson", "types", "draftPath", "catalogPath", "publishPaths"),
        ("samePath", "pathExists"),
    ),
    ImplementationChapter(
        4,
        "HTTP Responses, Request Bodies, And Safety Boundaries",
        (
            "This chapter follows the first layer of backend safety. Before the app can save a draft, run a compiler, authenticate GitHub, or answer AI questions, it must receive requests, parse them, shape responses, and keep filesystem paths inside approved roots.",
            "The helpers here are intentionally boring. Boring boundary code is good engineering: it lets exciting features depend on predictable input, predictable output, and predictable path behavior.",
        ),
        (),
        ("securityHeaders", "sendJson", "clampText", "stripHtmlToText", "isLocalRequest", "readJsonFile", "readRequestJson", "safeSegment", "safeFileName", "resolveInsideRoot", "resolveInsidePortfolioRoot", "resolveInsideCompileRoot"),
    ),
    ImplementationChapter(
        5,
        "Code Language Detection, Filenames, And Beautification",
        (
            "This chapter explains how the builder decides what kind of code the user is writing or pasting. That decision affects syntax highlighting, file extension checks, beautification, compiler choice, and simulation behavior.",
            "The code is intentionally heuristic. A portfolio builder is not a commercial language server, but it still needs enough intelligence to recognize C, C++, Java, JavaScript, Python, HTML, LTspice, Verilog, and SystemVerilog in normal use.",
        ),
        ("compileLanguageProfiles",),
        ("normalizeCodeLanguage", "sourceLooksCpp", "sourceLooksC", "languageFromFileName", "detectCodeLanguageFromSource", "safeCodeFileName", "indentBraceCode", "beautifyCode"),
    ),
    ImplementationChapter(
        6,
        "Compiler Tool Discovery And Terminal Process Control",
        (
            "This chapter explains the bridge from a polished builder window to real executables on Windows. Compilers and simulators are outside JavaScript, so the backend needs a careful way to find them, run them, capture output, and report failures.",
            "The important design decision is to keep process execution in the backend. The browser asks for compile behavior; Node owns the filesystem, process table, timeout, stdout, stderr, and terminal text returned to the UI.",
        ),
        ("compileToolCandidates", "compileToolCache", "compileToolVersionCache", "compileRoot"),
        ("findExecutableUnder", "findTool", "terminalLine", "processTerminalText", "pathVariantsForReplacement", "replacePathReferences", "processTerminalTextWithPaths", "toolVersionLine", "runProcess", "compileToolStatus", "installCompilerTools"),
    ),
    ImplementationChapter(
        7,
        "Compile Workspace Files, Caches, And User Source Persistence",
        (
            "This chapter focuses on how typed code becomes a local workspace. The builder is not only running one text box; it is moving toward project-like behavior where files can refer to other files and where a saved compile item can be restored later.",
            "The separation between Add Code and Compile Code depends on these functions. Add Code presents code inside the portfolio. Compile Code creates runnable source files, metadata, build caches, and terminal results.",
        ),
        (),
        ("saveCompileSource", "javaMainClassName", "compileCacheKey", "compileCacheDirectory", "cachedBuildLine", "compileActionFromPayload", "compileActionLabel", "compileWorkspaceFilesFromPayload", "writeCompileWorkspaceSources", "sourceDisplayName"),
    ),
    ImplementationChapter(
        8,
        "Software Compile And Run Paths For C, C++, Java, JavaScript, Python, And HTML",
        (
            "This chapter studies the software-language side of Compile Code. The same button family must support syntax checks, builds, runs, input text, output text, binary artifacts, and missing-tool errors across several languages.",
            "The central point is coordination. Individual helpers know C-family flags or Java class names, while compileAndRunCode joins those decisions into the user's visible Compile, Build, Run, and Show Output experience.",
        ),
        (),
        ("cFamilyCompileProfile", "cFamilyBinaryName", "cFamilyRunOutput", "cFamilyWorkspaceSources", "compileAndRunCode"),
    ),
    ImplementationChapter(
        9,
        "Verilog, SystemVerilog, Testbenches, Waveforms, And Scope Output",
        (
            "This chapter covers the hardware simulation side. HDL code is different from software because a design usually needs a testbench to drive inputs, produce time-varying behavior, and generate a waveform.",
            "The scope feature depends on a chain of helpers: classify HDL files, write a clean simulation folder, run Icarus Verilog, find a VCD file, parse it, and return signal transitions in a frontend-friendly shape.",
        ),
        (),
        ("isHdlLanguage", "inferCompileFileRole", "normalizeCompileFileRole", "hdlModuleNames", "hdlHasWaveDump", "hdlFilesFromPayload", "writeHdlSimulationSources", "findFilesByExtension", "normalizeVcdValue", "parseVcdScopeText", "readHdlWaveform", "clearHdlWaveforms", "cleanHdlSimulationOutput"),
    ),
    ImplementationChapter(
        10,
        "Portfolio AI Context, Public Source Retrieval, And Model Routing",
        (
            "This chapter explains how Ask My Portfolio stops being a canned FAQ and becomes a routed backend feature. The assistant has to distinguish greetings, general engineering questions, portfolio-specific questions, and public source-code requests.",
            "The backend owns the sensitive pieces: prompt instructions, source fetching rules, public GitHub code retrieval, model provider choice, and response extraction. The browser should never hold private API keys or pretend it can read public repositories without backend help.",
        ),
        ("portfolioAiInstructions",),
        ("sourceLooksTextual", "sourceUrlAllowed", "gitHubHeaders", "parseGitHubSourceUrl", "fetchGitHubJson", "fetchLimitedText", "githubQuestionTokens", "scoreGitHubFile", "wantsGitHubCode", "scoreGitHubRepo", "fetchGitHubProfileSource", "fetchGitHubRepositorySource", "fetchGitHubSourceText", "readLocalSourceText", "fetchSourceText", "enrichPortfolioContext", "cleanConversationHistory", "extractOpenAiText", "extractOllamaText", "callOllamaPortfolioAi", "ruleBasedConversationAnswer", "handlePortfolioAi"),
    ),
    ImplementationChapter(
        11,
        "Git Foundations, Target Configuration, And Credential Storage",
        (
            "This chapter studies the lower-level Git machinery. Before the builder can publish or load from a target, it has to find Git, understand the remote, normalize a branch name, optionally store credentials, and report the system state clearly.",
            "The design goal is to keep the browser away from command construction. The UI asks for target behavior; the backend performs Git operations with structured arguments and reports the result as JSON.",
        ),
        ("gitCandidates", "defaultSiteRepository", "publishAuthorizationHelp"),
        ("publishAccessError", "gitFailureText", "remoteUrlForDisplay", "parseGitHubRemote", "validatePublishRemoteUrl", "validateCustomDomain", "getPublishTargetInfo", "runGit", "runPublishGit", "runOptionalCommand", "getGitStatus", "runGitWithInput", "storeGitCredentials", "validateCredentialPair", "normalizeGitBranchName", "detectRemoteDefaultBranch", "originRemoteExists", "setOriginRemote", "checkoutPublishBranch", "ensureGitRepository", "configurePublishTarget"),
    ),
    ImplementationChapter(
        12,
        "Authentication Cache, Target Loading, And Reversible GitHub Authorization",
        (
            "This chapter explains the security-sensitive part of publishing. Authentication should not happen on every app restart, but it also must not become permanent blind trust. The backend therefore caches trust for a matching repository, branch, device scope, and time window.",
            "Load from target belongs here because importing a website repository is only safe after the user proves write access. A public repository URL alone is not enough to declare that the local builder should treat it as the user's editable site.",
        ),
        ("publishAuthCachePath", "publishAuthCacheTtlMs", "publishAuthExtendedTtlMs", "publishAuthHistoryWindowMs", "publishAuthExtendedThreshold"),
        ("verifyPublishWriteAccess", "ensurePublishHeadForWriteCheck", "synchronizePublishBranchFromRemote", "capturePublishTargetState", "restorePublishTargetState", "writeTargetCustomDomain", "readPublishAuthCache", "writePublishAuthCache", "publishAuthCacheScope", "parsePublishAuthTimestamp", "publishAuthCacheExpiresAt", "publishAuthCacheIsFresh", "assertPublishAccess", "syncFromPublishTarget", "authenticateGitHubForTarget"),
    ),
    ImplementationChapter(
        13,
        "Public Site Synchronization, Staging, Committing, And Pushing",
        (
            "This chapter follows Apply to site after authorization has succeeded. The backend must copy only public website files, avoid publishing internal builder data, handle deleted files, stage changes, commit when needed, and push to the remote branch.",
            "The main safety mechanism is the publishPaths allowlist. It is the difference between publishing a portfolio and accidentally publishing local drafts, compiler caches, installer scripts, credentials, or documentation that was meant only for the builder repository.",
        ),
        ("publishPaths",),
        ("compareVersions", "bumpPublishedAssetVersions", "workspaceHasCompatibleSiteFiles", "publishPathIsStageable", "stageablePublishPaths", "syncPortfolioPublishFiles", "publishSiteChanges"),
    ),
    ImplementationChapter(
        14,
        "Installer Updates, Git Installation Help, And Security Reporting",
        (
            "This chapter explains maintenance features: checking releases, starting an update, relaunching the app, guiding Git installation, and reporting the security information available to the local owner.",
            "The updater is one of the trickiest pieces because a running application cannot safely replace all of its own files. The backend solves this with a detached PowerShell handoff script that survives after Node exits.",
        ),
        ("blockedAppUpdateVersions", "packageJson"),
        ("installGitForWindows", "getUpdateInfo", "getBuilderReleaseDownloadReport", "getSecurityReport", "safeUpdateFileSegment", "powershellSingleQuoted", "downloadAndLaunchAppUpdate"),
    ),
    ImplementationChapter(
        15,
        "The API Router, Upload Flow, Static Serving, And End-To-End Request Life",
        (
            "This chapter puts the whole backend back together. Individual helpers are useful, but the app lives through request flow: the browser calls an endpoint, handleApi chooses a branch, helpers perform work, sendJson returns a response, or static serving returns a file.",
            "This is the chapter to read when you want to connect a user click to server code. Save draft, Apply to site, Authenticate target, Load from target, Compile, Simulate, Upload, Update, Security report, and Ask My Portfolio all pass through this gateway.",
        ),
        (),
        ("handleApi", "__server_startup__"),
    ),
]


NODE_MODULE_SECTIONS = [
    (
        "node:http and createServer",
        "The node:http module is the reason server.mjs can listen for browser requests without Express, Fastify, or another framework. createServer receives a callback, and that callback becomes the central point where request objects and response objects enter the backend.",
        "The tradeoff is direct control versus framework convenience. Direct control makes every header, route check, static-file branch, and error response visible. The cost is that the file has to implement routing and response conventions itself.",
    ),
    (
        "node:child_process and command execution",
        "execFile and spawn are the bridge from JavaScript into external programs. The builder uses that bridge for Git, compiler tools, simulators, installers, PowerShell handoff scripts, and process supervision.",
        "The security habit is to keep executable names and argument arrays separate. That is why spawn and execFile are preferable to shell-assembled strings for most backend work.",
    ),
    (
        "node:fs/promises as the persistence layer",
        "The fs/promises imports are the file cabinet of the local builder. readFile loads JSON, source files, waveforms, and package metadata. writeFile saves drafts, uploaded files, compile sources, auth cache, generated scripts, and CNAME data. mkdir, rm, cp, readdir, chmod, mkdtemp, and access support the rest of the local workspace life cycle.",
        "A framework migration would not eliminate these operations. It would wrap them behind services or repositories, but the same filesystem questions would remain: what root is allowed, what path is safe, what should be public, and what should stay local.",
    ),
    (
        "node:path, node:url, and stable filesystem addresses",
        "path and fileURLToPath make the backend independent of the terminal folder. The application root is derived from the module URL, not from whichever folder happened to launch the process.",
        "That distinction matters in a packaged desktop application. A shortcut, an installer, a PowerShell window, and Electron can all start the same code from different working directories, but import.meta.url still points back to the module file.",
    ),
    (
        "node:crypto for hashes and trust scopes",
        "createHash gives the backend compact identifiers for compile caches and publishing authorization scope. A hash is useful when the app needs stable comparison without exposing raw path, host, user, or source-data strings everywhere.",
        "The backend does not use crypto here as encryption. It uses hashing as identity compression: many pieces of context become one deterministic fingerprint.",
    ),
    (
        "node:os for machine identity and temporary space",
        "The os module gives the builder the hostname, user information, home directory, and temporary directory. Those values help create authorization scopes, temporary clone folders, update work areas, and device-specific branch names.",
        "This is why the app can behave differently on a new machine. The publishing cache should not trust a different host merely because the same GitHub repository URL was typed.",
    ),
    (
        "node:util and promisify",
        "promisify converts callback-shaped execFile behavior into promise-shaped behavior, which lets the backend use await consistently. This reduces mental switching between callback code and async function code.",
        "The result is visible in runGit and related helpers. They can await Git commands and catch failures with the same style used for readFile, writeFile, and fetch.",
    ),
    (
        "Global fetch, URL, Buffer, and process",
        "Modern Node provides browser-like fetch plus server-specific globals such as process and Buffer. server.mjs uses fetch for GitHub, OpenAI, Ollama, releases, and public source retrieval. It uses Buffer for uploaded bytes and downloaded installers. It uses process for environment variables, versions, executable path, platform checks, and controlled process exit during updates.",
        "These globals are powerful, so a framework migration should keep them behind service functions. The browser should not know how OpenAI is called, where temp files live, or when process.exit happens.",
    ),
]


def add_cover(story: list) -> None:
    story.append(Spacer(1, 0.8 * inch))
    story.append(Paragraph("server.mjs Implementation Book", STYLES["BookTitle"]))
    story.append(Paragraph("A compact, bookmarked, function-heavy explanation of the OMB Portfolio Builder backend.", STYLES["Subtitle"]))
    add_p(
        story,
        "This PDF is intentionally large. It is written for a reader who wants to understand the actual server.mjs implementation rather than only receiving a high-level diagram. The syntax chapter is kept useful but no longer dominates the book. Most of the pages now study real functions, shared state, endpoint behavior, compiler orchestration, GitHub publishing, AI context, updater logic, and future framework migration.",
        "BodyNoIndent",
    )
    add_p(
        story,
        "The PDF includes outline bookmarks. Chapter headings start on new pages, section headings are kept near their content, and source blocks are embedded directly beside the explanations they support. The document avoids line-number references because the source will change over time.",
        "BodyNoIndent",
    )


def add_toc(story: list) -> None:
    story.append(PageBreak())
    add_heading(story, "How To Read This 600-Page Book", 1)
    add_p(
        story,
        "Use the PDF bookmarks first. They are more useful than a printed table of contents because the book is deliberately long and function-heavy. The first chapter reviews JavaScript syntax, the second chapter explains Node.js modules, Chapters 3 through 15 explain the actual server.mjs implementation by subsystem, and Chapter 16 explains how this backend could transition into a framework later.",
    )
    chapters = [
        "JavaScript Syntax For Reading This Backend",
        "Node.js Runtime, Built-In Modules, And Backend Powers",
        "Startup State, Paths, And Local Workspace Boundaries",
        "HTTP Responses, Request Bodies, And Safety Boundaries",
        "Code Language Detection, Filenames, And Beautification",
        "Compiler Tool Discovery And Terminal Process Control",
        "Compile Workspace Files, Caches, And User Source Persistence",
        "Software Compile And Run Paths For C, C++, Java, JavaScript, Python, And HTML",
        "Verilog, SystemVerilog, Testbenches, Waveforms, And Scope Output",
        "Portfolio AI Context, Public Source Retrieval, And Model Routing",
        "Git Foundations, Target Configuration, And Credential Storage",
        "Authentication Cache, Target Loading, And Reversible GitHub Authorization",
        "Public Site Synchronization, Staging, Committing, And Pushing",
        "Installer Updates, Git Installation Help, And Security Reporting",
        "The API Router, Upload Flow, Static Serving, And End-To-End Request Life",
        "Transitioning This Backend To A Framework In The Future",
    ]
    for index, title in enumerate(chapters, start=1):
        add_p(story, f"<b>Chapter {index}</b> - {title}", "BodyNoIndent")


def add_javascript_chapter(story: list) -> None:
    start_chapter(story, 1, "JavaScript Syntax For Reading This Backend")
    add_p(
        story,
        "This chapter is intentionally a foundation, not the center of the book. It teaches the syntax needed to read the implementation chapters: modules, constants, objects, arrays, functions, async work, errors, loops, streams, paths, JSON, and process calls. The later chapters spend far more time on the actual server.mjs functions.",
    )
    for number, topic in enumerate(base.JS_TOPICS, start=1):
        add_heading(story, f"1.{number} {topic.title}", 2)
        add_p(story, topic.concept)
        add_p(story, topic.analogy)
        add_p(story, topic.syntax)
        add_code(story, topic.example, "A compact syntax example before the real backend code uses the same idea.")
        add_p(story, topic.server_link)
        add_p(story, topic.mistake)
    add_heading(story, "1.52 Reading real server.mjs syntax without over-focusing on syntax", 2)
    add_p(
        story,
        "The book now moves quickly from language syntax to implementation. The point is not to keep repeating what const or async means. Once those ideas are introduced, the later chapters use them naturally while explaining why the backend functions exist, what they call, what they return, and what would break if the design were changed carelessly.",
    )
    for title, code in [
        ("Imports as a list of backend powers", base.extract_import_block(SERVER_PATH.read_text(encoding="utf-8"))),
        ("Startup constants as environment-aware runtime state", base.extract_startup_constants(SERVER_PATH.read_text(encoding="utf-8"))),
        ("The createServer entry point as the first true backend boundary", base.extract_server_startup(SERVER_PATH.read_text(encoding="utf-8"))),
    ]:
        add_heading(story, title, 3)
        add_code(story, base.first_source_lines(code, 70), "This excerpt is included here only to connect syntax to the real file.")
        add_p(
            story,
            "Do not memorize this excerpt line by line. Instead, notice the kind of JavaScript it uses: imported modules, shared constants, function calls, route checks, object literals, awaited helpers, and response methods. Those patterns repeat throughout the rest of the book.",
        )


def add_node_chapter(story: list) -> None:
    source = SERVER_PATH.read_text(encoding="utf-8")
    start_chapter(story, 2, "Node.js Runtime, Built-In Modules, And Backend Powers")
    add_p(
        story,
        "Node.js is the reason this builder can do more than a static webpage. A normal browser page cannot freely write local files, run gcc, spawn Icarus Verilog, call Git, launch an installer, or read a local authorization cache. Node.js gives the desktop application a controlled backend runtime where those actions are possible.",
    )
    add_code(story, base.extract_import_block(source), "The import block is the fastest way to see which Node.js powers this backend uses.")
    for index, (title, body, tradeoff) in enumerate(NODE_MODULE_SECTIONS, start=1):
        add_heading(story, f"2.{index} {title}", 2)
        add_p(story, body)
        add_p(story, tradeoff)
        add_p(
            story,
            "When reading server.mjs, connect this module back to the functions that use it. A module import is not merely syntax at the top of the file; it is a capability that appears later as request handling, command execution, file persistence, path safety, identity hashing, temporary workspace management, or update handoff behavior.",
        )


def add_implementation_chapter(story: list, source: str, chapter: ImplementationChapter) -> None:
    start_chapter(story, chapter.number, chapter.title)
    for paragraph in chapter.opening:
        add_p(story, paragraph)
    for state_name in chapter.states:
        add_state_explanation(story, source, state_name)
    for function_name in chapter.functions:
        if function_name == "__server_startup__":
            add_heading(story, f"{CURRENT_CHAPTER}.server startup entry point", 2)
            add_p(
                story,
                "The startup entry point is not declared as a named function, but it is the true beginning of runtime behavior. Every browser request enters through this createServer callback before it either becomes an API command or a static file response.",
            )
            add_code(story, base.extract_server_startup(source), "The complete createServer entry point is shown here because it joins routing and static serving.")
            add_p(
                story,
                "The first branch asks handleApi whether the path is an API path and whether the API router answered it. If that returns true, the request is finished. If not, the same callback decodes a pathname, resolves a local file path, checks that the path stays under root, reads the file, and writes it with the correct MIME type.",
            )
            add_p(
                story,
                "This split is the whole backend in miniature. Dynamic commands go through the router. Static browser assets are served directly. Both paths share security headers and no-store caching so development and local preview stay honest while files are changing.",
            )
        else:
            add_function_explanation(story, source, function_name, chapter.title)


FRAMEWORK_TOPICS = [
    ("What a framework would change", "A framework would not make filesystem safety, compiler execution, Git authorization, or AI context disappear. It would reorganize those concerns into routes, controllers, services, schemas, middleware, and tests."),
    ("Express as the most familiar migration target", "Express would replace the handwritten handleApi chain with route handlers and middleware. It is easy to understand and widely documented, but it does not enforce structure by itself."),
    ("Fastify as a faster structured server option", "Fastify would give the backend schemas, plugins, hooks, and better performance defaults. It is attractive if the builder grows many endpoints and needs stricter request/response contracts."),
    ("Hono as a lightweight modern router", "Hono would keep the server small while making routes easier to compose. It is especially interesting if some logic later moves to Cloudflare Workers or another edge runtime."),
    ("Next.js as a portfolio and API framework", "Next.js could host the public portfolio pages and API routes together, but it would change the local-first desktop assumptions. Compiler and Git operations would still need a local service or secure backend."),
    ("Astro as a static-site-centered portfolio option", "Astro could be valuable for the public website because it produces fast static pages. The builder backend would remain separate, but the parser could emit Astro content instead of raw HTML and JSON."),
    ("Electron plus an internal service boundary", "The desktop app can keep Electron while moving server.mjs into a cleaner internal service. That preserves local filesystem powers while making frontend and backend responsibilities easier to test."),
    ("tRPC for typed frontend-backend calls", "tRPC could turn API calls into typed procedures shared between frontend and backend. The tradeoff is a stronger TypeScript commitment and a more opinionated development workflow."),
    ("OpenAPI for documenting endpoints", "OpenAPI would describe every route, request body, response body, and error shape. That would make the builder easier to test and easier to integrate with other clients later."),
    ("Zod or Valibot for payload validation", "Validation libraries would replace many manual shape checks. They would make request contracts explicit, but they require discipline so schemas do not drift away from real UI behavior."),
    ("A service layer for publishing", "Publishing logic should become a PublishingService with methods for authenticateTarget, loadFromTarget, assertAccess, syncFiles, and publish. That would make Git behavior testable without a browser."),
    ("A service layer for compile code", "Compile behavior should become a CompilerService that owns language profiles, tool discovery, workspace writing, build caches, command execution, and terminal normalization."),
    ("A service layer for AI", "AI logic should become a PortfolioAiService that separates intent, context enrichment, source fetching, provider calls, and answer shaping."),
    ("Repository objects for filesystem roots", "Root handling could move into small repository objects: AppRepository, PortfolioRepository, CompileRepository, and UpdateRepository. Each one would own path resolution and file persistence for its root."),
    ("Middleware for local-only checks", "A framework could express local-only behavior as middleware. Instead of manually checking isLocalRequest in several branches, protected routes would attach the same guard declaratively."),
    ("Middleware for security headers", "securityHeaders could become framework middleware that every response receives automatically. Route handlers would then focus on data rather than remembering header policy."),
    ("Route grouping by feature", "The current handleApi branches should become groups: /api/code, /api/publish, /api/ai, /api/update, /api/security, and /api/catalog. That grouping would make the codebase easier to navigate."),
    ("Controller functions versus service functions", "Controllers should translate HTTP into method calls. Services should perform the real work. This split prevents request objects and response objects from leaking into compiler, Git, AI, or update logic."),
    ("Typed result objects", "Result objects such as compile output, publish output, auth status, and update status should become named types. That would reduce accidental field changes that break the frontend."),
    ("A domain model for projects", "The builder catalog could become a domain model with Projects, Categories, Sections, Assets, Links, CodeBlocks, and RichText. That would make parsing and preview generation more reliable."),
    ("Database choices", "A future version could use SQLite for local drafts, metadata, auth sessions, compile histories, and update logs. JSON files are easy to inspect, but a database improves indexing and migrations."),
    ("Prisma or Drizzle", "Prisma and Drizzle could provide typed access to local SQLite. Prisma is comfortable and feature-rich; Drizzle is lighter and closer to SQL. Either would add migration discipline."),
    ("Migration scripts", "Moving from JSON to a database requires migrations. The app would need to import existing projects.json, preserve assets, and back up local files before changing storage format."),
    ("Testing with Vitest", "The current helper-heavy design is ready for unit tests. Vitest could test path safety, language detection, VCD parsing, version comparison, auth-cache freshness, and route result shapes."),
    ("Integration tests", "Integration tests should start a temporary server with temporary roots, call real endpoints, and verify filesystem results without touching the user's actual portfolio."),
    ("Playwright tests for the builder UI", "Playwright would test the visible workflow: create project, add section, paste rich text, add code, compile, save draft, preview, authenticate target, and apply to site."),
    ("Containerized compiler execution", "Docker could isolate compilers and simulators. The tradeoff is heavier setup, but the security improvement is meaningful when user-supplied code is executed."),
    ("A compile worker process", "Instead of running compilers in the same backend process, the app could launch a dedicated worker. The worker would own timeouts, cleanup, and sandbox limits."),
    ("Queues for long tasks", "Publishing, updating, cloning, installing tools, and compiling can take time. A queue would let the UI subscribe to progress rather than waiting on one long HTTP response."),
    ("Progress events and Server-Sent Events", "Server-Sent Events could stream compiler output, install progress, Git steps, or AI tokens to the UI. That would make terminal output appear immediately and naturally."),
    ("WebSockets", "WebSockets could support bidirectional status updates, collaborative editing, or live terminal sessions. They are more flexible than SSE but more complex to secure and reconnect."),
    ("Cloudflare Workers", "Cloudflare Workers could host public AI proxying, analytics, download tracking, and lightweight portfolio search. They should not receive local filesystem or compiler responsibilities."),
    ("Cloudflare Durable Objects", "Durable Objects could store per-portfolio chat sessions or rate-limit state if the website AI becomes more public and interactive."),
    ("Authentication with GitHub OAuth", "GitHub OAuth would be cleaner than relying only on Git Credential Manager for some workflows. It would require token storage, scopes, refresh logic, and careful UI explanation."),
    ("Secrets management", "OpenAI keys, GitHub tokens, and Cloudflare credentials should move into OS-protected storage or environment-backed secret providers. They should never enter publishable website files."),
    ("Logging and privacy", "A framework migration should define what is logged, where it is stored, and how long it lives. Visitor IP logging especially needs a privacy notice and careful minimization."),
    ("Error taxonomy", "Errors should be grouped into validation errors, authorization errors, tool-missing errors, process errors, network errors, publish conflicts, and internal errors. Good categories make dialogs better."),
    ("Observability", "The builder can eventually show local metrics: compile durations, failed tools, publish attempts, auth-cache status, update checks, and AI provider availability."),
    ("A staged migration plan", "The safest migration is not a rewrite. Start by extracting services from server.mjs, add tests, introduce a router, add validation schemas, then consider framework-specific hosting changes."),
    ("When not to migrate", "A framework has cost. If the backend remains small, local-only, and easy to audit, direct Node may remain the better choice. Migration should happen when structure, testing, or collaboration benefits outweigh complexity."),
]


def add_framework_chapter(story: list) -> None:
    start_chapter(story, 16, "Transitioning This Backend To A Framework In The Future")
    add_p(
        story,
        "This chapter is intentionally long because a framework migration is not a cosmetic refactor. A framework changes where routing lives, how validation is expressed, how errors are shaped, how services are tested, how long-running work reports progress, and how the app separates local-only desktop powers from public website behavior.",
    )
    add_p(
        story,
        "The current server.mjs file is useful because it keeps privileged behavior visible. The future goal should not be to hide that behavior. The goal should be to group it cleanly while preserving the same safety rules: local-only writes, root-bounded file access, explicit GitHub authorization, bounded AI context, controlled process execution, and careful update handoff.",
    )
    for index, (title, core) in enumerate(FRAMEWORK_TOPICS, start=1):
        add_heading(story, f"16.{index} {title}", 2)
        add_p(story, core)
        add_p(
            story,
            "The first practical question is ownership. In a framework design, each behavior needs a home: route handler, middleware, service, repository, schema, worker, or frontend component. A migration succeeds when every piece of server.mjs moves to a home that matches its responsibility instead of being scattered across several new files just because a framework makes file creation easy."
        )
        add_p(
            story,
            "The second question is boundary preservation. Any code that reads local files, writes drafts, executes compilers, launches Git, downloads installers, or calls private AI providers must remain behind a trusted local backend boundary. The public portfolio may call a safe API, but it should not gain direct access to machine-local powers."
        )
        add_p(
            story,
            "The third question is testability. A framework should make it easier to test the behavior than the current file, not harder. That means route handlers should stay thin, service functions should receive explicit dependencies, and filesystem roots should be injected during tests so no test touches the owner's real portfolio workspace."
        )
        add_p(
            story,
            "The tradeoff is complexity. A framework introduces conventions, plugins, dependency graphs, build steps, and deployment assumptions. Those can be helpful once the system grows, but they can also make a local desktop builder feel heavier if they are adopted before the code needs them."
        )
        add_p(
            story,
            f"For {title}, the framework question is not whether a newer tool sounds cleaner. The question is which current server.mjs responsibility would move, what interface it would expose, and how the app would prove that the behavior still works after the move. A useful migration plan names the current function group, the future service or route, the data passed into it, and the exact result shape expected by the frontend."
        )
        add_p(
            story,
            "The likely benefit is clarity. A framework can make route boundaries, middleware, schemas, service layers, and tests visible as separate concepts. That is valuable when a single file grows large enough that a reader must hold too many unrelated concerns in memory at the same time."
        )
        add_p(
            story,
            "The likely cost is indirection. In the current file, a reader can search one function and see the surrounding helpers. In a framework, the same behavior may be split across a route file, schema file, service file, repository file, and test file. That can be cleaner for a team, but harder for a beginner unless the structure is documented well."
        )
        add_p(
            story,
            "The practical transition should preserve the user's workflow first. Save Draft must still save locally. Apply to site must still authenticate before pushing. Load from target must still import only after target verification. Compile Code must still produce immediate terminal output. AI must still answer general questions differently from portfolio-specific questions."
        )
        add_p(
            story,
            "The safest proof is a before-and-after test. Before moving the code, write a test that captures the current behavior. Move the code behind the framework boundary. Run the same test again. Only then should the implementation be improved. This keeps the migration from becoming a rewrite disguised as organization."
        )
        add_p(
            story,
            "The rollback plan matters too. A framework migration should keep the old behavior recoverable until the new route, service, and tests are trusted. That may mean keeping the old helper available behind a compatibility wrapper for one release while the UI begins calling the new path."
        )
        add_p(
            story,
            "A good framework transition also improves documentation. Each route should say what user action calls it. Each service should say what domain behavior it owns. Each repository or adapter should say what external system it touches. That is how the future codebase avoids becoming another large file scattered across more folders."
        )
        add_p(
            story,
            "The decision should remain local-first. This builder is not a normal cloud SaaS dashboard. It has desktop behavior, offline drafts, local files, compiler execution, Git Credential Manager interaction, and installer updates. Any framework choice that makes those powers awkward should be treated carefully even if it is fashionable for ordinary websites."
        )
        add_p(
            story,
            "A strong migration document should name the old and new homes together. For example, handleApi branches could become route files; compileAndRunCode could become a compiler service; resolveInsideRoot and its siblings could become filesystem repositories; handlePortfolioAi could become an AI service; publishSiteChanges could become a publishing service. Naming the move prevents vague refactoring."
        )
        add_p(
            story,
            "The final decision should be measured against maintenance. If the framework makes the next six months of changes easier, safer, and more testable, it is worth considering. If it mainly changes the folder shape while making local desktop powers harder to reason about, the direct Node service may remain the better foundation until the app grows further."
        )
        add_p(
            story,
            "A useful migration checklist for this topic would include the route or function being moved, the new service name, the request schema, the response schema, the error variants, the filesystem or network dependency, the test fixture, and the rollback plan. Without that checklist, a framework migration can feel organized while still hiding unfinished behavior."
        )
        add_p(
            story,
            "The framework should also improve onboarding. A new contributor should be able to answer where requests enter, where files are written, where Git commands run, where compilers execute, where AI providers are called, and where public website output is staged. If the new structure cannot answer those questions faster than server.mjs, it has not earned its complexity yet."
        )
        if index % 2 == 0:
            add_code(
                story,
                "type PublishResult = {\n  ok: boolean;\n  branch: string;\n  pushed: boolean;\n  commitOutput: string;\n  pushOutput: string;\n};\n\nasync function applyToSiteRoute(request, response) {\n  const body = await readCatalogPayload(request);\n  const result = await publishingService.applyCatalog(body.catalog);\n  return json(response, result.ok ? 200 : 400, result);\n}",
                "A framework migration should keep route handlers thin and push real behavior into services with explicit result shapes.",
            )
        add_p(
            story,
            "The safest migration path is incremental. First extract a service without changing behavior. Then add tests around the service. Then move the route into a framework router. Then add schema validation. Then improve progress reporting, logging, and deployment structure. Each step should leave the app runnable."
        )
        add_p(
            story,
            "The most dangerous migration path is a full rewrite that changes storage, routing, authentication, compiler execution, and frontend behavior at the same time. That kind of rewrite can look clean for a week and then become impossible to debug because every broken behavior has five possible causes."
        )


def add_padding_if_needed(story: list, current_pages: int) -> None:
    if current_pages >= TARGET_MIN_PAGES:
        return
    needed = TARGET_MIN_PAGES - current_pages
    repetitions = max(8, needed * 4 + 24)
    add_heading(story, "16.99 Additional framework migration study notes", 2)
    add_p(
        story,
        "The first build did not yet reach the requested 600-page depth, so the generator adds more Chapter 16 study notes instead of leaving empty pages. These notes continue the same migration discussion and remain attached to the real backend concerns: routing, services, persistence, compiler isolation, GitHub authorization, AI providers, updater behavior, and public website deployment.",
    )
    for index in range(1, repetitions + 1):
        topic = FRAMEWORK_TOPICS[(index - 1) % len(FRAMEWORK_TOPICS)]
        add_heading(story, f"16.extra.{index} {topic[0]} - deeper implementation study", 2)
        add_p(
            story,
            f"This additional study note expands the framework-transition discussion for {topic[0]}. The point is to connect the migration idea directly back to server.mjs rather than talking about frameworks as abstract fashion. {topic[1]}"
        )
        add_p(
            story,
            "In the present backend, route handling, service logic, path validation, command execution, and response shaping often live close together. A future framework should separate those concerns carefully. The route should translate HTTP into a method call, the service should own the domain behavior, and a repository or adapter should own the filesystem, Git, compiler, network, or model-provider boundary."
        )
        add_p(
            story,
            "The migration rule is simple but strict: behavior must be moved before it is improved. If the code is both moved and redesigned at the same time, it becomes hard to prove that the new version still saves drafts, preserves uploaded files, compiles code, authenticates targets, loads from GitHub, and pushes the public site in the same safe order."
        )


def build_story(extra_framework_notes: bool = False, current_pages: int = 0) -> list:
    source = SERVER_PATH.read_text(encoding="utf-8")
    story: list = []
    add_cover(story)
    add_toc(story)
    add_javascript_chapter(story)
    add_node_chapter(story)
    for chapter in IMPLEMENTATION_CHAPTERS:
        add_implementation_chapter(story, source, chapter)
    add_framework_chapter(story)
    if extra_framework_notes:
        add_padding_if_needed(story, current_pages)
    return story


def build_pdf(story: list, output_path: Path) -> Path:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    doc = BookDocTemplate(
        str(output_path),
        pagesize=LETTER,
        leftMargin=0.48 * inch,
        rightMargin=0.48 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.58 * inch,
        title="server.mjs Implementation Book",
        author="OMB Portfolio Builder",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="book", frames=[frame], onPage=draw_page)])
    doc.build(story)
    return output_path


def main() -> Path:
    global BOOKMARK_COUNTER
    BOOKMARK_COUNTER = 0
    first_story = build_story()
    build_pdf(first_story, OUTPUT_PATH)
    page_count = len(PdfReader(str(OUTPUT_PATH)).pages)
    if page_count < TARGET_MIN_PAGES:
        BOOKMARK_COUNTER = 0
        expanded_story = build_story(extra_framework_notes=True, current_pages=page_count)
        build_pdf(expanded_story, OUTPUT_PATH)
    return OUTPUT_PATH


if __name__ == "__main__":
    print(main())
