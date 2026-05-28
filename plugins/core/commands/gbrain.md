---
description: Operate the GBrain memory layer for this engagement (status, capture, search, query, refresh-central, init, import, extract-links). Dispatcher — pass a subcommand or run bare for status.
allowed-tools: Bash, Read, Write
argument-hint: "[status|capture|search|query|refresh-central|init|import|extract-links] [args]"
---

# /omega:gbrain

Single entry point for GBrain operations on this engagement. The full GBrain reference (architecture, MCP tools, write-lane discipline, troubleshooting) lives in the `gbrain` skill — Claude loads it contextually when this command runs.

## Usage

```
/omega:gbrain                          # = status (default)
/omega:gbrain status
/omega:gbrain capture "<thought>"
/omega:gbrain search <keyword>
/omega:gbrain query <natural-language-question> [--preset conservative|balanced|tokenmax]
/omega:gbrain refresh-central
/omega:gbrain init
/omega:gbrain import [<path>]
/omega:gbrain extract-links
```

## Pre-flight

Confirm Bun is available and GBrain is installed before running. If not, print the install command and stop — never silently continue with broken state:

```bash
command -v bun >/dev/null || { echo "Bun not installed. Install: curl -fsSL https://bun.sh/install | bash"; exit 1; }
command -v gbrain >/dev/null || { echo "GBrain not installed. Install per https://github.com/garrytan/gbrain"; exit 1; }
```

Confirm the engagement has been GBrain-initialized:

```bash
[ -d .brain/gbrain.db ] || { echo "GBrain DB not initialized. Run: /omega:gbrain init"; exit 1; }
```

Exception: `init` skips the DB existence check (it creates it).

## Subcommand dispatch

### `status` (default)

```bash
gbrain status
```

Shows: page count, edge count, last sync timestamp, embedding mode (off / openai / voyage / zeroentropy), DB size, central-source freshness.

Append a Omega-specific summary line: project + central page counts, and the date of the last `/omega:gbrain refresh-central`.

### `capture <thought>`

Quick note to `.brain/inbox/`. Argument is the full thought (quote it for safety):

```bash
gbrain capture "$ARG"
```

Idempotent — each call appends a new timestamped file in `inbox/`. Consultants triage inbox/ during `/omega:session-end` or weekly.

### `search <keyword>`

BM25 keyword search across project + central:

```bash
gbrain search "$ARG"
```

Use this for exact identifiers, framework names, regulation citations (`HIPAA`, `ISO 42001`, `JAWDA`).

### `query <question> [--preset ...]`

Hybrid retrieval — BM25 + vector + Reciprocal Rank Fusion + rerank:

```bash
gbrain query "$ARG" --preset balanced
```

Presets: `conservative` (narrow / high-precision), `balanced` (default), `tokenmax` (wide recall). Use this for conceptual or paraphrased questions where exact keywords aren't known.

**Note.** If `.brain/gbrain.config.json` has `embedding: off` (the Omega default), `query` degrades to BM25 + rerank only — still useful, but semantic matches on novel phrasing are weaker. Enable embeddings only after data-sovereignty clearance.

### `refresh-central`

Re-import the central Omega Second Brain as a read-only second source. Incremental — cheap when nothing has changed:

```bash
CENTRAL_PATH=$(jq -r '.sources[] | select(.mode=="ro") | .path' .brain/gbrain.config.json)
gbrain import "$CENTRAL_PATH" --read-only
gbrain extract-links --source db
```

Run this when new sanitized instincts may have arrived in central (e.g., after a teammate's `/omega:brain-sync`). Also invoked automatically by `session-start.js` hook.

### `init`

Initialize the engagement's PGLite database. Run once at scaffold time; idempotent:

```bash
gbrain init --pglite --no-embedding
```

Reads `.brain/gbrain.config.json` for source paths. If absent, falls back to indexing `.brain/` only.

### `import [<path>]`

Force re-import a markdown folder. Default: project `.brain/`. Path argument overrides:

```bash
gbrain import "${ARG:-.brain/}"
```

For a full reset:

```bash
rm -rf .brain/gbrain.db
gbrain init --pglite --no-embedding
gbrain import .brain/
gbrain import "<central>" --read-only
gbrain extract-links --source db
```

### `extract-links`

Refresh the typed knowledge graph by re-running the regex inference cascade (`FOUNDED → INVESTED → ADVISES → WORKS_AT → MENTIONS`) against indexed pages:

```bash
gbrain extract-links --source db
```

Run after large `import` operations, or when wikilink format has changed in source files.

## Safety + write-lane reminder

- **GBrain is the sole writer to `.brain/`.** Obsidian is configured view-only. Don't hand-edit `.brain/` files through Obsidian — direct the agent in chat, or use `gbrain capture`. The agent writes via the `put_page` MCP tool, GBrain syncs to disk.
- **Central is read-only from GBrain.** Sanitized cross-engagement promotion stays gated through `/omega:brain-sync`.
- **Wikilinks must use full slug paths.** `[[03_Frameworks/iso-42001|ISO 42001]]` works; `[[ISO 42001]]` silently produces zero graph edges. The Omega-wide convention is **absolute path + display alias**.

## Troubleshooting

See the `gbrain` skill (`plugins/core/skills/gbrain/SKILL.md`) for the full troubleshooting matrix. Quick hits:

| Symptom | First action |
|---|---|
| `gbrain: command not found` | Install per https://github.com/garrytan/gbrain |
| Query returns nothing | `/omega:gbrain import` then `/omega:gbrain extract-links` |
| MCP tools missing in Claude | Check `.mcp.json` registers `gbrain serve`; restart Claude Code |
| Graph empty despite imports | Wikilinks are short-form; convert to full slug paths |

## Reference

- GBrain GitHub: https://github.com/garrytan/gbrain (MIT)
- Tutorial: https://www.marktechpost.com/2026/05/22/a-step-by-step-coding-tutorial-to-implement-gbrain-the-self-wiring-memory-layer-built-by-y-combinators-garry-tan-for-ai-agents/
- Full skill: `plugins/core/skills/gbrain/SKILL.md`
