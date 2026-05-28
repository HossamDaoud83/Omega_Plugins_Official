---
description: Develop change-management plan using ADKAR / Prosci.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-people:change-mgmt

**Change Management Plan.** Develop change-management plan using ADKAR / Prosci.

## When to use

When the engagement scope explicitly calls for change management plan work in the people & organization domain. Look for keywords like: org design, target operating model, TOM, change management, ADKAR.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega People & Organization deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes People & Organization.
2. Load the `people` skill (`plugins/people/skills/people/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `people-change-mgmt-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Org design includes spans of control, decision rights, and a transition plan
- Change plan covers awareness, desire, knowledge, ability, reinforcement (ADKAR)
- Workforce plan is skill-based, not just headcount-based
