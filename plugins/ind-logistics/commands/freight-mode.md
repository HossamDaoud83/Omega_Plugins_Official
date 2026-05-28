---
description: Optimize freight mode mix (road / rail / sea / air) for cost-service trade-off.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-logistics:freight-mode

**Freight Mode Mix.** Optimize freight mode mix (road / rail / sea / air) for cost-service trade-off.

## When to use

When the engagement scope explicitly calls for freight mode mix work in the logistics & 3pl domain. Look for keywords like: logistics, 3PL, fleet, warehouse, last-mile.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega Logistics & 3PL deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Logistics & 3PL.
2. Load the `logistics` skill (`plugins/ind-logistics/skills/logistics/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `logistics-freight-mode-<client>-<YYYYMMDD>.md`.
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
