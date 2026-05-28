---
description: Assess payment rails (ACH, RTP, ISO 20022) and design modernization roadmap.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-ind-finserv:payments-modernization

**Payments Modernization.** Assess payment rails (ACH, RTP, ISO 20022) and design modernization roadmap.

## When to use

When the engagement is in Financial Services Industry and scope explicitly calls for payments modernization work. Look for keywords: banking, insurance, fintech, AML, KYC.

## Inputs you should gather first

- Engagement `project.json` (industry = finserv, regulatory frameworks)
- Relevant client documents in the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega Financial Services Industry deliverables for cross-reference

## Steps

1. Read `project.json` and confirm industry = finserv.
2. Load the `finserv` skill (`plugins/ind-finserv/skills/finserv/SKILL.md`).
3. Use the relevant industry subagent (see Integration table) for the analysis.
4. Apply the methodology in the skill, citing all sources (regulators, accrediting bodies, peer benchmarks).
5. Place output in `05_Deliverables_Final/` per Omega file-location standard. Filename: `finserv-payments-modernization-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking complete.

## Output shape

Omega-branded Financial Services Industry deliverable with Pyramid-Principle structure, source citations on every regulatory reference, and explicit recommendations.

## Quality bar

- AML findings reference FATF recommendation numbers and local regulator (FinCEN, FCA, MAS, SAMA, etc.)
- KYC program tiered by customer risk; EDD triggers documented
- Basel III ratios computed with explicit RWA methodology
