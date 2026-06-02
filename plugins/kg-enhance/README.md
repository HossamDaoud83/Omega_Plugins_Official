# @omega/kg-enhance — Knowledge Brain Enhancement

Closes gaps between client documents and the engagement brain, then mines the accumulated brain — seven slash commands. Markdown-first; no SQL, no FastAPI, no ML libraries.

## Commands

### Ingestion & verification

| Command | Purpose |
|---|---|
| `/omega:doc-ingest <path>` | Extract entities from a client document and write them as markdown to `.brain/02_Entities/<DOC-ID>/` |
| `/omega:fact-check [<path>]` | Adversarially verify factual claims in a deliverable against engagement + central brain (read-only; 5-iteration stable-verdict loop) |
| `/omega:version-diff <doc-title>` | Show version chain and diff narrative from frontmatter + `04_Versions/` |
| `/omega:alias-merge` | Propose and apply EN/AR bilingual entity merges on the markdown brain |

### Engagement intelligence (read-only mining)

| Command | Purpose |
|---|---|
| `/omega:trace <theme>` | Reconstruct how a theme/recommendation/client position evolved across the engagement timeline — first appearance, framing shifts, turning points, current standing |
| `/omega:emerge [focus]` | Surface recurring themes, implied conclusions, and circling questions the evidence supports but no deliverable has captured yet |
| `/omega:challenge <premise>` | Adversarially pressure-test a recommendation's premise using only engagement + central evidence — contradicting data, unsupported assumptions, ignored constraints |

## Gaps addressed

| Gap | Command |
|---|---|
| Client documents not in the brain | `/omega:doc-ingest` |
| No temporal versioning | `/omega:version-diff` |
| Risk of fabricated claims in deliverables | `/omega:fact-check` |
| No cross-language entity resolution | `/omega:alias-merge` |
| No view of how a recommendation evolved | `/omega:trace` |
| Evidence gathered but under-used in deliverables | `/omega:emerge` |
| Recommendations untested before the client tests them | `/omega:challenge` |
| Mid-session brain queries | _ask Claude_ — Claude reads `.brain/` markdown directly |
| Visual brain view | _open the folder in Obsidian_ — built-in graph view |

## Design

- Consultants type slash commands. Claude does the thinking. Outputs are plain markdown.
- Entity relationships are expressed via Obsidian wikilinks (`[[Target]]`) and typed frontmatter (`extracted_from:`, `supersedes:`, `mentions:`).
- Depends on `@omega/core`.

## Tests

```bash
node --test tests/run-all.js
```
