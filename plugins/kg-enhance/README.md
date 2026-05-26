# @omega/kg-enhance — Knowledge Brain Enhancement (Markdown-First)

Closes the loop between client documents, the engagement brain, and deliverable verification through 4 slash commands. v2.0 markdown-first: no SQL, no graph layer, no external graph engine.

## Commands

| Command | Purpose |
|---|---|
| `/omega:doc-ingest <path>` | Extract entities from a client document and write them to `.brain/02_Entities/<DOC-ID>/` as markdown files |
| `/omega:fact-check [<deliverable-path>]` | Adversarial-critique loop: verify factual claims against engagement + central markdown brain (supported / contradicted / unverifiable) |
| `/omega:version-diff <doc-title>` | Show the version chain via `supersedes:` frontmatter and `.brain/04_Versions/` narratives |
| `/omega:alias-merge` | Propose and apply EN/AR bilingual entity merges (consultant confirms each) |

## Gaps addressed

| Gap | Command |
|---|---|
| Client documents ungraphed | `/omega:doc-ingest` (writes entity markdown) |
| Claim-level fabrication risk in deliverables | `/omega:fact-check` (5-iteration stable-verdict loop) |
| No temporal versioning between document drops | `/omega:version-diff` |
| No cross-language entity resolution | `/omega:alias-merge` |

## Design

- Consultants type slash commands. Claude does the thinking. Markdown vault handles persistence.
- Entities, instincts, and versions are plain `.md` files under `.brain/`.
- Typed relationships expressed via Obsidian wikilinks (`applies: [[Framework: ISO 42001]]`) and frontmatter properties (`supersedes:`, `mitigates:`, `observed_in:`).
- Depends on `@omega/core`.

## Tests

```bash
node --test tests/run-all.js
```
