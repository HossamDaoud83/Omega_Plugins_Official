---
description: Design last-mile delivery network (own / 3PL / hybrid / dark store).
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-logistics:last-mile

**Last-Mile Strategy.** Design last-mile delivery network (own / 3PL / hybrid / dark store).

## When to use

When the engagement scope explicitly calls for last-mile strategy work in the logistics & 3pl domain. Look for keywords like: logistics, 3PL, fleet, warehouse, last-mile.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega Logistics & 3PL deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Logistics & 3PL.
2. Load the `logistics` skill (`plugins/ind-logistics/skills/logistics/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `logistics-last-mile-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Fleet recommendations consider TCO (acquisition, fuel, maintenance, driver, insurance)
- Warehouse designs include slotting strategy and labor model
- Last-mile strategy quantifies cost per delivery by network choice
