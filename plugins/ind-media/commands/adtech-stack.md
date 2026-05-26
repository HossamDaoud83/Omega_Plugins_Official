---
description: Review ad tech stack (DSP, SSP, DMP, CDP) and identify rationalization opportunities.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-media:adtech-stack

**Ad Tech Stack.** Review ad tech stack (DSP, SSP, DMP, CDP) and identify rationalization opportunities.

## When to use

When the engagement scope explicitly calls for ad tech stack work in the media & entertainment domain. Look for keywords like: media, streaming, content, rights, AVOD.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega Media & Entertainment deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Media & Entertainment.
2. Load the `media` skill (`plugins/ind-media/skills/media/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `media-adtech-stack-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Content economics shown per title with cost-per-hour and viewing-share metrics
- Streaming strategy includes monetization model (SVOD/AVOD/FAST/hybrid)
- Rights strategy covers windows + territories explicitly
