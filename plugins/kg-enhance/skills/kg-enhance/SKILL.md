---
name: kg-enhance
description: Knowledge brain enhancement (v2.0 markdown-first) — when to ingest a client document, fact-check a deliverable, trace document version history, or merge bilingual entities. Apply when the consultant references document ingestion, version chains, or wants to verify factual claims.
---

# Knowledge Brain Enhancement (v2.0 — markdown-first)

Closes the loop between client documents and the engagement brain. Four slash commands; outputs are plain markdown navigable in Obsidian.

## When to use which command

| Trigger | Command |
|---|---|
| Client sent a new MD-converted document | `/omega:doc-ingest <path>` |
| Want to verify factual claims in a deliverable | `/omega:fact-check [<path>]` |
| Want to know what changed in client requirements | `/omega:version-diff <doc-title>` |
| Bilingual engagement (EN/AR) — duplicate entity nodes appearing | `/omega:alias-merge` |
| Want to ask a question about prior work, risks, deliverables | _ask Claude directly_ — Claude reads `.brain/` markdown |
| Want a visual view of the brain | _open the engagement folder in Obsidian_ — built-in graph view |

## Quality bar

- Every `/omega:doc-ingest` produces a deterministic `DOC-XXX` ID — re-running is idempotent
- Every `/omega:fact-check` is read-only on both per-project and central brains; refuses if >50% of claims are unverifiable
- Every `/omega:alias-merge` requires explicit consultant confirmation before applying
- All outputs are markdown — open the engagement folder in Obsidian to navigate visually

## Brain isolation invariants

- Per-project `.brain/` never auto-pushes raw — `/omega:brain-sync` is the only sanitized path out
- Central → per-project is read-only
- `visibility: project-only` on instincts is honored by the sanitizer (one-way ratchet)

## Integration with existing commands

- After `/omega:doc-ingest`, the next `/omega:session-end` will pick up new entities (no extra step — instinct-writer reads markdown directly)
- `/omega:brain-sync` continues to handle sanitization
- `/omega:evolve` operates on instinct clusters — unaffected by document-side additions

## Reference

- Aliases seed: `plugins/kg-enhance/assets/seed-entity-aliases.json`
- Frontmatter schema for instincts: `docs/instinct-schema.md`
- Markdown validator: `node tools/validate-obsidian-brain.js --engagement <path>`
