# Pharma & Life Sciences (PHARMA) — Quality Standards

Omega capability-specific quality criteria for `omega-pharma` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.)
- Trial design comments reference ICH E9 / E10 / GCP
- PV findings cite EMA GVP modules / FDA 21 CFR 314.80
- Launch readiness includes supply, market access, medical, commercial views

See the `pharma` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
