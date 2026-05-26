---
description: Run STRIDE / PASTA on a target system; produce threat register + mitigations.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-cyber:threat-model

**Threat Modeling.** Run STRIDE / PASTA on a target system; produce threat register + mitigations.

## When to use

When the engagement scope explicitly calls for threat modeling work in the cybersecurity domain. Look for keywords like: cybersecurity, ISO 27001, NIST CSF, threat modeling, STRIDE.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega Cybersecurity deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Cybersecurity.
2. Load the `cyber` skill (`plugins/cyber/skills/cyber/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `cyber-threat-model-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause
- Threat models name explicit assets, threat actors, and attack vectors
- Vendor risk scores cite the questionnaire (CAIQ row, SIG Lite section) used to derive them
