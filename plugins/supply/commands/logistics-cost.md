---
description: Build logistics cost model and identify mode/route optimization opportunities.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-supply:logistics-cost

**Logistics Cost Model.** Build logistics cost model and identify mode/route optimization opportunities.

## When to use

When the engagement scope explicitly calls for logistics cost model work in the supply chain & procurement domain. Look for keywords like: supply chain, sourcing, procurement, S&OP, IBP.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega Supply Chain & Procurement deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Supply Chain & Procurement.
2. Load the `supply` skill (`plugins/supply/skills/supply/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `supply-logistics-cost-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Network design solutions consider 3+ scenarios (cost, service, resilience)
- Sourcing strategy uses Kraljic and TCO, not just unit price
- S&OP design has explicit monthly cadence, decision rights, KPIs (forecast accuracy, fill rate)
