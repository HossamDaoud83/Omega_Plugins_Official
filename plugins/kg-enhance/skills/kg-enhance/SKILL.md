---
name: kg-enhance
description: Knowledge brain enhancement (v2.2 — any-format ingestion + engagement intelligence) — ingest client documents in any format (PDF, DOCX, PPTX, images, Arabic scans) with auto-conversion, fact-check deliverables, trace how themes/recommendations evolved, surface evidenced-but-unaddressed gaps, adversarially challenge a premise, version history, or merge bilingual entities. Apply when the consultant references document ingestion, version chains, theme history, emergent findings, premise stress-testing, or wants to verify factual claims.
---

# Knowledge Brain Enhancement (v2.2 — any-format ingestion + engagement intelligence)

Closes the loop between client documents and the engagement brain, then **mines** the accumulated brain. Accepts **any document format** — PDF, DOCX, PPTX, images, Arabic-language scans — and converts automatically using Marker (GPU OCR) before ingestion. Seven slash commands; outputs are plain markdown navigable in Obsidian.

Two families: **ingestion/verification** (`doc-ingest`, `fact-check`, `version-diff`, `alias-merge`) and **engagement intelligence** — read-only mining over the accumulated brain (`trace`, `emerge`, `challenge`). The intelligence commands need an accumulated brain to be useful, but a consulting engagement front-loads its brain (kickoff docs, interviews), so they pay off within week 1–2.

## When to use which command

| Trigger | Command |
|---|---|
| Client sent a document in any format (PDF, DOCX, PPTX, Arabic PDF, scan) | `/omega:doc-ingest <path>` |
| Want to verify factual claims in a deliverable | `/omega:fact-check [<path>]` |
| Want to know what changed in client requirements | `/omega:version-diff <doc-title>` |
| Bilingual engagement (EN/AR) — duplicate entity nodes appearing | `/omega:alias-merge` |
| Want to see how a theme/recommendation evolved over the engagement | `/omega:trace <theme>` |
| Want to find evidenced themes no deliverable has captured yet | `/omega:emerge` |
| Want to adversarially pressure-test a recommendation's premise | `/omega:challenge <premise>` |
| Want to ask a question about prior work, risks, deliverables | _ask Claude directly_ — Claude reads `.brain/` markdown |
| Want a visual view of the brain | _open the engagement folder in Obsidian_ — built-in graph view |

## Document conversion (auto — no manual step needed)

`/omega:doc-ingest` routes by file type — each branch independent, a missing converter only disables its own type:
1. **`.pdf`** → **Marker** (`py -3.13 -m pip install marker-pdf`) — GPU OCR, Arabic-capable, `force_ocr=True`
2. **`.docx`** → Marker `DocxConverter` if present, else **python-docx** (paragraphs + tables; DocxConverter is usually absent)
3. **`.pptx`** → **python-pptx** (one `## Slide N` per slide)
4. **`.png/.jpg`** → **PIL** renders to a 1-page PDF → Marker `force_ocr` (reuses the PDF OCR path; `marker.converters.image` is typically absent)
5. **pandoc** — last-resort DOCX/PPTX fallback, no OCR
6. **Direct** — if already `.md`

> Most `marker-pdf` installs ship **only** the PDF converter, and pandoc is often missing — so the skill leans on python-docx/python-pptx/PIL for non-PDF types rather than assuming Marker handles everything.

Install once on the machine — all projects share the install (`pip install marker-pdf python-docx python-pptx Pillow`). For whole-directory ingests, load Marker models once with a resumable batch driver (bundled: `plugins/kg-enhance/scripts/brain_batch_ingest.py`); Arabic OCR is slow (~20–90 s/page), so large corpora run in the background. See `plugins/kg-enhance/docs/marker-setup.md`.

## Quality bar

- Every `/omega:doc-ingest` produces a deterministic `DOC-XXX` ID — re-running is idempotent
- Every `/omega:fact-check` is read-only on both per-project and central brains; refuses if >50% of claims are unverifiable
- Every `/omega:alias-merge` requires explicit consultant confirmation before applying
- Every intelligence command (`/omega:trace`, `/omega:emerge`, `/omega:challenge`) is **read-only**, quotes its sources verbatim with paths, and separates what the brain *says* from what Claude *infers* — refusing to fabricate an arc, a gap, or an objection when the brain is too thin
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
