---
description: Score CX maturity across leadership, insights, design, ops, technology.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-cx:cx-maturity

**CX Maturity Assessment.** Score CX maturity across leadership, insights, design, ops, technology.

## When to use

When the engagement scope explicitly calls for cx maturity assessment work in the customer experience domain. Look for keywords like: CX, customer experience, journey map, VoC, NPS.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega Customer Experience deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Customer Experience.
2. Load the `cx` skill (`plugins/cx/skills/cx/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `cx-cx-maturity-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Journey maps anchor on jobs-to-be-done, not just feelings
- VoC quotes carry attribution (persona, source, date)
- NPS programs include closed-loop follow-up SLA, not just scores
