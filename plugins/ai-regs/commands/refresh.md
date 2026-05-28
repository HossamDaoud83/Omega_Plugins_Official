---
description: Refresh regulatory cache for configured jurisdictions; flag stale entries.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-airegs:refresh

**Cache Refresh.** Refresh regulatory cache for configured jurisdictions; flag stale entries.

## When to use

When the engagement scope explicitly calls for cache refresh work in the ai regulatory tracking domain. Look for keywords like: regulatory, gazette, circular, regulation, compliance.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega AI Regulatory Tracking deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes AI Regulatory Tracking.
2. Load the `airegs` skill (`plugins/ai-regs/skills/airegs/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `airegs-refresh-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Cache freshness < 7 days for active jurisdictions (gazette-freshness hook enforces)
- Every regulation links to its jurisdiction, effective date, and source URL
- Change-impact analysis names specific affected client controls / deliverables
