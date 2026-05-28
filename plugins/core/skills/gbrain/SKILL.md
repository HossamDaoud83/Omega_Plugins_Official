---
name: gbrain
description: GBrain is the per-engagement memory layer for v4.1 Omega engagements — a self-wiring typed knowledge graph + hybrid retrieval over the markdown brain. Loads when the consultant asks about GBrain, runs a /omega:gbrain command, captures a quick note, queries the brain, or operates MCP tools (get_page, put_page, search, query, add_link, get_backlinks). Also loads when wikilink, graph, hybrid search, or PGLite questions come up in context.
---

# GBrain — Per-Engagement Memory Layer

GBrain (https://github.com/garrytan/gbrain — MIT, by Garry Tan at Y Combinator) is the agent-native memory layer Omega v4.1 runs inside every engagement's `.brain/`. It indexes the markdown vault into an embedded Postgres database, extracts a typed knowledge graph from wikilinks with zero LLM calls, and exposes 74 MCP tools so Claude can read and write the brain directly.

Source tutorial: `https://www.marktechpost.com/2026/05/22/a-step-by-step-coding-tutorial-to-implement-gbrain-the-self-wiring-memory-layer-built-by-y-combinators-garry-tan-for-ai-agents/`

## Architectural one-liner

```
Markdown files on disk (canonical) ──►  PGLite (embedded Postgres 17 via WASM)
                                          ├─ BM25 full-text index
                                          ├─ Optional vector embeddings
                                          └─ Typed graph (regex cascade)
                                                 │
                                                 ▼
                                          MCP server (74 tools)
                                                 │
                                                 ▼
                                          Claude Code agent
```

Markdown stays the source of truth. The DB is a derived index — rebuildable from disk at any time via `gbrain import`.

## How Omega uses GBrain (project-scoped, dual-source)

Each engagement has **one** GBrain instance. It indexes two sources into one project-scoped PGLite database at `<engagement>/.brain/gbrain.db/`:

| Source | Path | Mode | Purpose |
|---|---|---|---|
| Project | `<engagement>/.brain/` | Read/write | Active engagement knowledge |
| Central | `D:\Obsidian Notes Taken\Omega_Second_Brain\` | Read-only | Sanitized cross-engagement patterns |

GBrain is never installed at the central brain. Central stays a plain Obsidian vault; `/omega:brain-sync` remains the only writer to it (sanitizer-gated).

**Invariant.** GBrain never breaks: per-project never leaks raw → central, `visibility: project-only` ratchet, Quality Gate Check 8 (markdown-traceable claims), confidence ladder, sanitizer. Markdown is canonical; GBrain is a derived index that reads it.

## Write-lane discipline (v4.1)

GBrain is the sole writer to `.brain/`. Humans use Obsidian view-only (configured in `.brain/.obsidian/`: Reading view default, write plugins disabled, Obsidian Sync off).

| Action | Path |
|---|---|
| Quick thought | `gbrain capture "..."` → lands in `.brain/inbox/` |
| Substantive update | Consultant directs the agent in chat → agent writes via `put_page` MCP → GBrain syncs to disk |
| Review / browse | Obsidian read mode (auto-refreshes on disk change) |

Obsidian has no hard read-only lock; "view-only" is enforced by config + discipline. If someone hand-edits, `gbrain sync` absorbs the change (last-write-wins) — not lost, just outside the write lane.

## Typed knowledge graph (no LLM)

GBrain extracts a graph from wikilinks using a regex inference cascade. Relationship inference order:

```
FOUNDED → INVESTED → ADVISES → WORKS_AT → MENTIONS
```

Omega-specific typed relationships added via frontmatter in instincts and entity files:

| Relationship | Expressed as | Resolves to graph edge |
|---|---|---|
| `applies` | `[[03_Frameworks/iso-42001\|ISO 42001]]` | `applies → Framework` |
| `mitigates` | `[[05_Risks/data-residency]]` | `mitigates → Risk` |
| `observed_in` | `[[07_Engagements/alnoor-health]]` | `observed_in → Engagement` |
| `extracted_from` | `[[02_Entities/DOC-XXXX/iso-42001]]` | `extracted_from → Document` |

**Critical: wikilink format.** GBrain's extractor requires the full slug path. `[[iso-42001]]` (short form) silently produces zero edges; `[[03_Frameworks/iso-42001]]` works. Omega uses **absolute path wikilinks with display aliases**: `[[03_Frameworks/iso-42001|ISO 42001]]`. Obsidian is configured for "Absolute path in vault" link format in `.brain/.obsidian/app.json`.

## Hybrid search

| Command | Method | Use when |
|---|---|---|
| `gbrain search <kw>` | BM25 (Postgres full-text) | Exact terms, identifiers, framework names |
| `gbrain query <q>` | BM25 + vector + Reciprocal Rank Fusion + rerank | Conceptual / paraphrased questions |

Three search presets (passed as `--preset`):

- `conservative` — narrow, high-precision
- `balanced` (default) — middle ground
- `tokenmax` — wide recall, more context tokens

Performance on the BrainBench 240-page corpus: **Precision@5 49.1%, Recall@5 97.9%**, with **+31.4 percentage points** of improvement coming from the typed graph layer (vs graph-disabled variant). Production deployment (Garry Tan's): 146,646 pages / 24,585 people / 5,339 companies indexed in one PGLite instance.

## CLI reference (Bun ≥1.3.10 required)

| Command | What it does |
|---|---|
| `gbrain init --pglite --no-embedding` | Initialize the embedded DB. Idempotent. |
| `gbrain import <path>` | Index a markdown folder. Use `--read-only` for central. Use `--no-embed` to skip vector embedding. |
| `gbrain sync` | Re-scan disk for changes; incremental. |
| `gbrain capture "..."` | Append a quick note to `inbox/`. Supports `--file`, `--stdin`. |
| `gbrain extract links --source db` | Re-run the typed-graph regex cascade. |
| `gbrain search <kw>` | BM25 keyword search. |
| `gbrain query <q>` | Hybrid (BM25 + vector + rerank). `--preset conservative\|balanced\|tokenmax`. |
| `gbrain serve` | Start the MCP server (registered via `claude mcp add gbrain -- gbrain serve`). |
| `gbrain status` | Pages, entities, edges, last sync, embedding mode. |

## 74 MCP tools (the most-used ones)

When `gbrain serve` runs (registered in engagement `.mcp.json`), Claude can call these directly:

| Tool | Purpose |
|---|---|
| `get_page <slug>` | Read a markdown page by slug path |
| `put_page <slug> <content>` | Write/update a page (auto-syncs to disk) |
| `search <query>` | BM25 keyword |
| `query <question>` | Hybrid retrieval |
| `add_link <from> <to> [type]` | Add a typed graph edge |
| `get_backlinks <slug>` | All pages linking *to* this one |
| `get_outgoing_links <slug>` | All pages this one links *to* |
| `list_pages [filter]` | Browse the index |
| `get_neighbors <slug> [depth]` | Graph traversal |

There are 74 tools total — the rest cover capture, inbox processing, batch import, embedding management, and admin. Use `tools/list` on the MCP server to enumerate.

## Embedding posture (Omega default: OFF)

GBrain's hybrid `query` optionally calls an external embedding provider (OpenAI / Voyage / ZeroEntropy). Omega v4.1 scaffolds with **`embedding: off`** in `.brain/gbrain.config.json` for client-data sovereignty:

```json
{
  "sources": [
    { "path": ".brain", "mode": "rw" },
    { "path": "D:/Obsidian Notes Taken/Omega_Second_Brain", "mode": "ro" }
  ],
  "embedding": "off",
  "scope": "project-only"
}
```

Consultant flips embedding on **per engagement, after data-sovereignty review** (ISO 27001 / 42001 clearance). Keyword + graph + rerank still work fully without embeddings — semantic search on novel paraphrases is the only thing lost.

## "Compiled truth + timeline" page pattern

Optional convention GBrain proposes — a single page splits into:

```markdown
# Topic

Current best understanding goes here (compiled truth).

---

## Timeline
- 2026-05-15: First observation in P038
- 2026-05-22: Confirmed in P041, raised confidence
- ...
```

The `---` is the visual separator. Use this pattern when an instinct accretes evidence over time — Claude reads the top section first for the current answer, falls back to the timeline for provenance.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `gbrain query` returns nothing | DB empty | `gbrain import .brain/` then `gbrain extract links --source db` |
| Graph is empty | Short-form wikilinks | Convert to full slug paths: `[[01_Instincts/INS-...]]` not `[[INS-...]]` |
| MCP tools unavailable in Claude | `gbrain serve` not registered | `claude mcp add gbrain -- gbrain serve` |
| Central not searchable | Not imported | `gbrain import "<central path>" --read-only` |
| Bun not found | Not installed | `curl -fsSL https://bun.sh/install \| bash` (≥1.3.10) |
| Slow imports | Embeddings on, large corpus | Use `--no-embed` for initial import; enable embeddings only when needed |
| `gbrain init` fails | PGLite WASM needs writable dir | Confirm `.brain/` is writable; check `.brain/.gitignore` doesn't block `gbrain.db/` |

## When to invoke this skill (Claude's perspective)

Load this skill when the consultant:

- Types `/omega:gbrain` or any of its subcommand variants
- Asks "what does GBrain do?" / "how do I use the brain?" / "search the brain for…"
- Captures a thought (`gbrain capture` semantics)
- Hits a wikilink-format question
- Asks about hybrid retrieval, typed graphs, or memory layer concepts
- Operates one of the 74 MCP tools
- Troubleshoots PGLite, Bun, or embedding issues
- Refers to GBrain by analogy: "Garry Tan's memory layer", "self-wiring brain", "the agent memory"

Don't load it for general Obsidian questions unrelated to GBrain or for central-brain operations (those go through `/omega:brain-sync` + the markdown-first skills).
