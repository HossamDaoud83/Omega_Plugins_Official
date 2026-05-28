---
description: Map guest journey, identify friction points, prioritize interventions.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-hospitality:guest-exp

**Guest Experience Lift.** Map guest journey, identify friction points, prioritize interventions.

## When to use

When the engagement scope explicitly calls for guest experience lift work in the hospitality domain. Look for keywords like: hospitality, hotel, resort, RevPAR, ADR.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega Hospitality deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Hospitality.
2. Load the `hospitality` skill (`plugins/ind-hospitality/skills/hospitality/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `hospitality-guest-exp-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- RevPAR analysis decomposes ADR × occupancy × segment mix
- F&B review cites cost-of-sales %, labor %, and guest satisfaction
- Brand audit links each gap to a specific brand standard clause
