---
description: Recommend the right Omega plugins/bundles for the current or a hypothetical engagement
allowed-tools: Read, Bash, Glob, Grep
---

# /omega:recommend-plugins

Suggest the optimal install path (bundle + add-on plugins) for the current engagement, or for a new client described in free text.

## When to use

- Starting a new client engagement and unsure which `omega-*` plugins to install
- Mid-project scope expanded into a new domain (e.g., ESG was added) and you want to know what to install on top
- Onboarding a peer consultant onto a project — generate a one-liner for them

## Steps

1. **Gather signals.** If the user provides a free-text description, parse it into structured fields per the `plugin-recommender` skill (`plugins/core/skills/plugin-recommender/SKILL.md`):
   - industry (healthcare, banking, maritime, government, education, manufacturing, etc.)
   - serviceLine (AIG, DIG, ISO, MAR, STR, etc.)
   - scope (cyber, ESG, PMO, M&A, supply chain, etc.)
   - regulatory frameworks (HIPAA, ISO 42001, CSRD, etc.)
   - languages (ar, en)

   If the user gave no description, read the engagement's `project.json` (if present in CWD) and infer from `industry`, `service_line`, `regulatory_frameworks`, `languages` fields.

2. **Run the deterministic engine.** Invoke the CLI wrapper:
   ```bash
   node tools/recommend-plugins.js \
     --industry <industry> \
     --service-line <service-line-csv> \
     --scope <scope-csv> \
     --regulatory <regulatory-csv> \
     --languages <languages-csv> \
     --json
   ```

3. **Apply judgment.** Read the engine's JSON output. If `bundle` is null OR `rationale` doesn't account for important signals, apply the `plugin-recommender` skill's judgment cases (greenfield transformation, multi-bundle scenarios, AR/EN bilingual, etc.) to add or remove plugins.

4. **Render the recommendation.** Use the output format from the `plugin-recommender` skill — bundle first, then add-on plugins, then a "Why this set" rationale block.

5. **Optionally execute.** If the consultant says "install these", emit the `/plugin install` lines for them to run (you cannot install plugins yourself; they must run the slash commands).

## Quality bar

- ALWAYS include `omega-core` and `omega-kg-enhance` in the recommendation (these are the foundation/brain layer).
- NEVER recommend `omega-bundle-all` by default — only if the engagement explicitly spans 5+ service lines.
- Show the `Why` for each plugin so the consultant can edit the install list confidently.
- If important signals are ambiguous, ask 2-3 clarifying questions instead of guessing.

## Example

```
Consultant: "We're starting a healthcare AI governance project for a regional hospital
in Saudi Arabia. They need ISO 42001 readiness and HIPAA gap analysis, deliverables in
both Arabic and English."

You: [run engine with --industry healthcare --service-line aig --regulatory hipaa,iso42001 --languages ar,en]

You render:
  Recommended install path:

  1. Bundle (one-line install):
     /plugin install omega-bundle-healthcare@omega-plugins

  2. Add-on plugins:
     /plugin install omega-aig@omega-plugins         # ISO 42001 governance
     /plugin install omega-cyber@omega-plugins       # ISO 27001 / HIPAA security
     /plugin install omega-ai-translate@omega-plugins # AR/EN bilingual deliverables

  Why this set:
  - omega-bundle-healthcare covers the HIS/HIPAA/HL7-FHIR vocabulary you'll need
  - omega-aig adds the ISO 42001 readiness skills explicitly
  - omega-cyber covers the security/privacy gap-analysis side of HIPAA
  - omega-ai-translate enforces glossary parity for AR↔EN deliverables
```
