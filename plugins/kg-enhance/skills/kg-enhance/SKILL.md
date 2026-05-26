---
name: kg-enhance
description: Knowledge brain enhancement (markdown-first) — when to ingest a client document, fact-check a deliverable, check version history, or merge bilingual entities. Apply when the consultant references document ingestion, claim verification, version chains, or bilingual entity resolution.
---

# Knowledge Brain Enhancement (Markdown-First)

Closes the loop between client documents and the engagement brain. Four slash commands; markdown-vault-first (no SQL, no graph layer); aligns with the v2.0 Obsidian-Primary architecture.

## When to use which command

| Trigger | Command |
|---|---|
| Client sent a new MD-converted document | `/omega:doc-ingest <path>` |
| Need to verify factual claims in a deliverable before delivery | `/omega:fact-check [<deliverable-path>]` |
| Want to know what changed in client requirements between versions | `/omega:version-diff <doc-title>` |
| Bilingual engagement (EN/AR) — duplicate entity files appearing in `.brain/02_Entities/` | `/omega:alias-merge` |

## Quality bar

- Every `doc-ingest` produces a deterministic `DOC-XXX` ID — re-running is idempotent
- Every `fact-check` is read-only on both engagement and central brain; refuses if >50% claims unverifiable
- Every `alias-merge` requires explicit consultant confirmation before applying
- Every `version-diff` reads the `supersedes:` frontmatter chain + `.brain/04_Versions/` narratives

## Brain isolation invariants (enforced by existing platform)

- Per-project `.brain/` never auto-pushes raw — `/omega:brain-sync` is the only sanitized path out
- Central → per-project is read-only at session-start (Claude reads central markdown for high-confidence patterns)
- `visibility: project-only` on instincts is honored by the existing sanitizer (one-way ratchet)

## Integration with existing commands

- After `/omega:doc-ingest`, the next `/omega:session-end` will pick up new entities directly from `.brain/02_Entities/` markdown (no extra step needed)
- `/omega:brain-sync` continues to handle sanitization on instinct markdown before push to the central vault
- `/omega:evolve` operates on instinct clusters in the central vault — unaffected by document-side additions
- `/omega:verify-quality` Check 8 uses the same `.brain/01_Instincts/` + `.brain/02_Entities/` markdown vault that `/omega:fact-check` searches — the claim-traceability firewall

## Reference

- Aliases seed: `plugins/kg-enhance/assets/seed-entity-aliases.json`
- Engagement brain layout: `.brain/01_Instincts/`, `.brain/02_Entities/`, `.brain/04_Versions/`, `.brain/.obsidian/`
- Central vault layout: `D:/Obsidian Notes Taken/` (direct root scan; engagement folders at `01 Clients/_Active/<Name>/`; cross-engagement instincts at `02 Omega/_Instincts/`)
