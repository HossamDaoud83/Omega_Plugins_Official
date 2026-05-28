---
description: Translate a deliverable to/from Arabic with glossary enforcement.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-aitranslate:translate

**Translate Deliverable.** Translate a deliverable to/from Arabic with glossary enforcement.

## When to use

When the engagement scope explicitly calls for translate deliverable work in the ai bilingual translation domain. Look for keywords like: translate, translation, bilingual, Arabic, EN.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega AI Bilingual Translation deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes AI Bilingual Translation.
2. Load the `aitranslate` skill (`plugins/ai-translate/skills/aitranslate/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `aitranslate-translate-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Glossary coverage ≥90% (glossary-coverage hook enforces)
- Every translated deliverable has an EN side and AR side with matching structure
- New terms proposed for human approval before adding to glossary
