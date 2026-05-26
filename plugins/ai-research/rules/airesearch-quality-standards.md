# AI-Assisted Research (AIRESEARCH) — Quality Standards

Omega capability-specific quality criteria for `omega-ai-research` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- Every claim has ≥1 cited source with date and author
- Single-source claims are flagged "single-source — verify"
- Confidence labels (high/medium/low) are explicit on every conclusion
- Gap list is shipped — research is never "complete", just bounded

See the `airesearch` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
