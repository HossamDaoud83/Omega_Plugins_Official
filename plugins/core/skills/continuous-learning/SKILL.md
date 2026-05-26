---
name: continuous-learning
description: Auto-extract patterns ("instincts") from each consulting session and grow them into refined skills as they recur. Use at session-end to capture surprising insights, and at session-start to surface high-confidence reusables from prior work.
---

# Continuous Learning

Closes the loop between sessions: every engagement leaves behind patterns that the next engagement can lean on. Instincts are the unit of learning — small, atomic, frontmatter-tagged markdown notes that live in the per-project `.brain/01_Instincts/` and (after sanitization) graduate to the central brain.

## When this skill fires

- **Session-end** (`Stop` hook) — extract the surprising / non-obvious learning from this session, write a new instinct
- **Session-start** (`SessionStart` hook) — surface high-confidence reusables from local + central brain
- **`/omega:learn`** (manual) — re-run extraction over the engagement's full progress log
- **`/omega:evolve`** (central) — when 5+ related sanitized instincts cluster, refine into a v2 skill

## Instinct schema

Defined in `docs/instinct-schema.md`. Frontmatter:

```yaml
---
type: instinct
id: INS-YYYY-NNN
date_extracted: ISO-DATE
source_engagement: "[[P0XX_Slug]]"
service_line: <CODE>
industry: <Industry>
confidence_score: 0.00-1.00
status: active|deprecated|evolved
visibility: project-only|sanitizable|central
tags: [...]
entities: { frameworks: [], risks: [], deliverables: [] }
graph_sync: pending|synced
central_sync: pending|synced|excluded
schema_version: "1.0"
---
```

## Confidence ladder

| Observations | Confidence |
|---|---|
| 1 (single session) | 0.25 |
| 2 (recurring local) | 0.50 |
| 3 (well-established) | 0.75 |
| 4+ (proven across projects) | 0.92 |

Cross-project observations weight 1.5x — a pattern observed in 2 different engagements is more reliable than 2 observations in the same one.

## Extraction prompt (used by Stop hook)

When this session ends, pull from the latest `### Session N` entry in `engagement_progress.md`:

1. **Surface** — one-sentence statement of the pattern (e.g., "BOT projects in MENA ports often have tariff renegotiation triggers around month 18")
2. **Trigger** — what circumstance produced this insight
3. **Context** — engagement, service line, industry tags
4. **Entities** — frameworks invoked, risks observed, deliverables affected (wikilinks)
5. **Visibility** — `sanitizable` (default — flow to central after stripping client info), `project-only` (sensitive), or `central` (already generic)

Defaults if uncertain: `confidence_score: 0.25`, `visibility: sanitizable`.

## Surfacing prompt (used by SessionStart hook)

The `confidence-tracker.js` script surfaces patterns where `confidence_score >= 0.75` and the pattern matches the current engagement's service_line + industry. The session-start output shows:

```
=== High-confidence patterns from prior sessions ===
  • [INS-2025-014] BOT projects in MENA ports often have tariff renegotiation triggers around month 18
    confidence 0.92 (cross-project: 4 obs) — MAR/maritime
```

Read these before starting work — they carry forward lessons learned without re-deriving them.

## Quality bar for instincts

- Surface is a complete sentence (not a fragment or a question)
- Specific enough to be useful (not "good documentation matters")
- General enough to apply elsewhere (not "the AlexPort EBEIDO file used FastAPI")
- Has at least one framework / risk / deliverable wikilink
- Visibility chosen consciously (default `sanitizable` is safe but explicit `project-only` for sensitive items)

## Hand-off to central brain

`/omega:brain-sync` runs the sanitizer over all `central_sync: pending` instincts that aren't `visibility: project-only`, and writes sanitized copies to `/mnt/d/Obsidian Notes Taken/Omega_Second_Brain/01_Instincts_Aggregated/`. The source instinct's `central_sync` flag flips to `synced`. The sanitized copy strips client name, project code, named persons, and rounds USD figures to buckets.

## See also

- `plugins/core/scripts/obsidian/instinct-writer.js` — extraction
- `plugins/core/scripts/obsidian/sanitizer.js` — central sync sanitization
- `plugins/core/scripts/obsidian/confidence-tracker.js` — recurrence scoring
- `plugins/core/commands/brain-sync.md` — `/omega:brain-sync`
- `plugins/core/commands/evolve.md` — `/omega:evolve`
- `docs/instinct-schema.md` — schema reference
