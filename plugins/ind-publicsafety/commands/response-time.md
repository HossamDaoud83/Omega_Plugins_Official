---
description: Analyze response times by call type, district, time-of-day; identify bottlenecks.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-publicsafety:response-time

**Response Time Analysis.** Analyze response times by call type, district, time-of-day; identify bottlenecks.

## When to use

When the engagement scope explicitly calls for response time analysis work in the public safety domain. Look for keywords like: public safety, police, fire, EMS, emergency management.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega Public Safety deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Public Safety.
2. Load the `publicsafety` skill (`plugins/ind-publicsafety/skills/publicsafety/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `publicsafety-response-time-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- CAD/RMS review cites NIBRS / FBI/Interpol data standards
- Response time analysis disaggregates by priority and rural/urban
- EM readiness mapped to ICS / NIMS function (or equivalent national framework)
