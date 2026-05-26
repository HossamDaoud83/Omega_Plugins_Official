# Financial Services Industry (FINSERV) — Quality Standards

Omega industry-specific quality criteria for the `omega-ind-finserv` plugin. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis
- Omega branding
- Source citations on every regulatory reference (with version / date)
- Recommendation Format used in any advice section

## Industry-specific

- AML findings reference FATF recommendation numbers and local regulator (FinCEN, FCA, MAS, SAMA, etc.)
- KYC program tiered by customer risk; EDD triggers documented
- Basel III ratios computed with explicit RWA methodology
- Payments roadmap includes ISO 20022 migration timeline

See the `finserv` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable`).
