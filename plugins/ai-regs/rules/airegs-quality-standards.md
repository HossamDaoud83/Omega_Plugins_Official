# AI Regulatory Tracking (AIREGS) — Quality Standards

Omega capability-specific quality criteria for `omega-ai-regs` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- Cache freshness < 7 days for active jurisdictions (gazette-freshness hook enforces)
- Every regulation links to its jurisdiction, effective date, and source URL
- Change-impact analysis names specific affected client controls / deliverables
- Horizon scan distinguishes "definite" from "expected" from "rumored"

See the `airegs` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
