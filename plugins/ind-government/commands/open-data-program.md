---
description: Assess open data program against G8 Open Data Charter / 5-star deployment scheme.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-ind-government:open-data-program

**Open Data Program.** Assess open data program against G8 Open Data Charter / 5-star deployment scheme.

## When to use

When the engagement is in Government & Public Sector and scope explicitly calls for open data program work. Look for keywords: government, public sector, e-government, citizen experience, open data.

## Inputs you should gather first

- Engagement `project.json` (industry = government, regulatory frameworks)
- Relevant client documents in the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega Government & Public Sector deliverables for cross-reference

## Steps

1. Read `project.json` and confirm industry = government.
2. Load the `government` skill (`plugins/ind-government/skills/government/SKILL.md`).
3. Use the relevant industry subagent (see Integration table) for the analysis.
4. Apply the methodology in the skill, citing all sources (regulators, accrediting bodies, peer benchmarks).
5. Place output in `05_Deliverables_Final/` per Omega file-location standard. Filename: `government-open-data-program-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking complete.

## Output shape

Omega-branded Government & Public Sector deliverable with Pyramid-Principle structure, source citations on every regulatory reference, and explicit recommendations.

## Quality bar

- E-gov assessments map to UN EGDI / OECD index methodology
- Citizen experience analysis includes journey across 3+ life events
- Open data assessments use the 5-star scheme explicitly
