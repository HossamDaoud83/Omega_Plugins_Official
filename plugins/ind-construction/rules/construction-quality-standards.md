# Construction & EPC (CONSTRUCTION) — Quality Standards

Omega capability-specific quality criteria for `omega-construction` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- Project controls have baseline + actual + EAC + variance per work package
- BIM assessment cites ISO 19650 levels explicitly
- Schedule risk analysis uses Monte Carlo with named distributions
- Claims analysis uses recognized delay-analysis method (TIA, time-slice, etc.)

See the `construction` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
