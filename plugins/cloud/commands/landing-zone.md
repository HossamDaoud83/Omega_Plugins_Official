---
description: Design account/subscription structure, identity, network, guardrails.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-cloud:landing-zone

**Landing Zone Design.** Design account/subscription structure, identity, network, guardrails.

## When to use

When the engagement scope explicitly calls for landing zone design work in the cloud strategy & finops domain. Look for keywords like: cloud, AWS, Azure, GCP, FinOps.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega Cloud Strategy & FinOps deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Cloud Strategy & FinOps.
2. Load the `cloud` skill (`plugins/cloud/skills/cloud/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `cloud-landing-zone-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Cloud strategy specifies operating model (CCoE / cloud platform team) and decision rights
- FinOps recommendations have $-quantified savings and effort estimates
- Migration plans use 6Rs (rehost/replatform/refactor/repurchase/retire/retain) explicitly
