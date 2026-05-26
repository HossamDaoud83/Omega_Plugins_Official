---
description: Develop theory of change linking inputs → activities → outputs → outcomes → impact.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-nonprofit:theory-of-change

**Theory of Change.** Develop theory of change linking inputs → activities → outputs → outcomes → impact.

## When to use

When the engagement scope explicitly calls for theory of change work in the nonprofit & ngo domain. Look for keywords like: nonprofit, NGO, theory of change, grant, donor.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega Nonprofit & NGO deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Nonprofit & NGO.
2. Load the `nonprofit` skill (`plugins/ind-nonprofit/skills/nonprofit/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `nonprofit-theory-of-change-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Theory of change has explicit assumptions and risks per logic-model rung
- Grant pipeline shows stage, value, P(win), donor
- M&E indicators are SMART; have baseline + target + data source
