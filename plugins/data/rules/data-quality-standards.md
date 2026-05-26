# Data Strategy & Architecture (DATA) — Quality Standards

Omega capability-specific quality criteria for `omega-data` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- Every recommended platform choice includes 3-yr TCO and a buy/build justification
- Lineage diagrams cover ≥90% of in-scope critical data elements
- Governance roles map to RACI; no orphan domains
- Classification scheme aligns with regulatory floor (e.g., GDPR Article 9, HIPAA PHI)

See the `data` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
