---
description: Analyze payer mix and reimbursement economics; recommend contracting strategy.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-ind-healthcare:payer-mix

**Payer-Mix Analysis.** Analyze payer mix and reimbursement economics; recommend contracting strategy.

## When to use

When the engagement is in Healthcare Industry and scope explicitly calls for payer-mix analysis work. Look for keywords: healthcare, HIS, EMR, HIPAA, HL7.

## Inputs you should gather first

- Engagement `project.json` (industry = healthcare, regulatory frameworks)
- Relevant client documents in the brain (run `/omega:graph-query`)
- Any prior Omega Healthcare Industry deliverables for cross-reference

## Steps

1. Read `project.json` and confirm industry = healthcare.
2. Load the `healthcare` skill (`plugins/ind-healthcare/skills/healthcare/SKILL.md`).
3. Use the relevant industry subagent (see Integration table) for the analysis.
4. Apply the methodology in the skill, citing all sources (regulators, accrediting bodies, peer benchmarks).
5. Place output in `05_Deliverables_Final/` per Omega file-location standard. Filename: `healthcare-payer-mix-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking complete.

## Output shape

Omega-branded Healthcare Industry deliverable with Pyramid-Principle structure, source citations on every regulatory reference, and explicit recommendations.

## Quality bar

- PHI handling findings cite specific HIPAA rule (164.312, 164.502, etc.)
- HL7-FHIR assessments cite USCDI version and specific resources
- Clinical workflow redesigns reduce documentation time without reducing safety
