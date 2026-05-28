---
description: Build crop economics model (gross margin per ha) by crop and farming system.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-agritech:crop-econ

**Crop Economics.** Build crop economics model (gross margin per ha) by crop and farming system.

## When to use

When the engagement scope explicitly calls for crop economics work in the agriculture & agritech domain. Look for keywords like: agriculture, agritech, crop, irrigation, food.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega Agriculture & Agritech deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Agriculture & Agritech.
2. Load the `agritech` skill (`plugins/ind-agritech/skills/agritech/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `agritech-crop-econ-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Crop economics shown per ha with yield, price, cost, gross margin
- Irrigation recommendations cite water productivity (crop per drop)
- Traceability designs map to GS1 standards and GFSI scheme requirements
