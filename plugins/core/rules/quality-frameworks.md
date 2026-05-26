---
type: rule
scope: omega-core
priority: high
---

# Omega Quality Frameworks

Every Omega deliverable applies these frameworks. The quality gate (`quality-gate.js` hook) verifies adherence before marking a deliverable complete.

## Pyramid Principle (document structure)

1. **Lead with the answer/recommendation** — the SCQA opening (Situation, Complication, Question, Answer)
2. **Support with 3–5 key arguments** (mutually exclusive, collectively exhaustive)
3. **Provide evidence for each argument** (data, framework analysis, expert citation)
4. **Address counterarguments** — show you considered alternatives
5. **Conclude with clear next steps** (with owners and dates)

## MECE Analysis

- Categories are **Mutually Exclusive** (no overlap)
- Categories are **Collectively Exhaustive** (nothing missing)
- Test: would a peer reviewer be able to put any input into exactly one category?

## Recommendation Format

```
RECOMMENDATION: [Clear action statement, present tense, active voice]
RATIONALE: [Why this is the right approach — link to analysis]
IMPACT: [Expected benefits/outcomes — quantified if possible]
EFFORT: [Resources/time required — be specific]
RISKS: [Key risks and mitigations — at least 2]
NEXT STEPS: [Immediate actions with owners and dates]
```

## Service-line quality standards

Each service-line plugin (`@omega/aig`, `@omega/dig`, `@omega/iso`, etc.) ships its own `rules/<code>-quality-standards.md`. These layer on top of the universal frameworks.

| Service Line | Key Quality Checks |
|--------------|-------------------|
| Digital Transformation | Maturity assessment complete, architecture reviewed, roadmap phased |
| AI Governance | ISO 42001 alignment checked, bias testing documented, risks identified |
| Agentic AI | Automation feasibility scored, agent guardrails defined, ROI calculated |
| Competency Center | KPIs MECE, data sources validated, dashboard designs tested |
| Enterprise Integration | Data mapping complete, APIs documented, security reviewed |
| ISO Certification | All clauses assessed, gaps scored, remediation roadmap complete |
| Strategy | Market sizing validated, competitive data sourced, strategic options MECE |
| Operations | Baseline metrics established, process maps validated, ROI calculated |
| Finance | Numbers reconciled, assumptions documented, sensitivity analysis done |
| Change | Stakeholder impact assessed, resistance addressed, training plan complete |
| Healthcare | HIPAA compliance verified, clinical workflows validated, HL7/FHIR mapped |
| Education | Accreditation aligned, FERPA addressed, academic calendar considered |
| Government | Procurement requirements met, accessibility (508) compliant, transparency addressed |
| Maritime | IMO/MARPOL compliance checked, port operations mapped, safety verified |
