# Enterprise Risk Management (RISK) — Quality Standards

Omega capability-specific quality criteria for `omega-risk` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- Every risk has a named owner, inherent score, residual score, and ≥1 mapped control
- Risk appetite has both qualitative statement AND quantitative tolerance bands
- BCP includes RTO/RPO per critical business service; DR scenarios tested annually
- Op-resilience scenarios are severe-but-plausible (peer events, regulator rules of thumb)

See the `risk` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
