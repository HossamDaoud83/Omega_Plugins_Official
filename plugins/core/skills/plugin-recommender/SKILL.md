---
name: plugin-recommender
description: Recommend the right Omega plugins/bundles for a given engagement. Use when the consultant asks "what should I install for this project?" or describes a new client engagement and needs guidance on which plugins to install. Combines deterministic rules with judgment for ambiguous cases.
---

# Plugin Recommender

Hybrid recommender for the Omega plugin ecosystem. Use this skill when:
- A consultant describes a new engagement and asks what to install
- You are running `/omega:recommend-plugins` and need to translate a free-text engagement description into structured signals
- A scaffold-engagement run was invoked with `--recommend` and you need to propose an install command before scaffolding

## How it works

1. Parse the engagement description into structured signals: `industry`, `serviceLine`, `scope[]`, `regulatory[]`, `languages[]`.
2. Call the deterministic engine: `node plugins/core/scripts/recommender/recommend.js --industry X --service-line Y …` (or `tools/recommend-plugins.js`). The engine reads `plugins/core/scripts/recommender/rules.json`.
3. If the engine returns no bundle, OR the rationale leaves obvious gaps, apply judgment to fill in:
   - Look for keywords in the engagement description that the rules don't cover
   - Cross-reference against the marketplace catalog (`.claude-plugin/marketplace.json`)
   - Suggest add-on plugins as needed

## Signal extraction guide

| Signal | What to look for | Examples |
|---|---|---|
| `industry` | Sector/vertical the client operates in | "healthcare", "bank", "port operator", "K-12 school" |
| `serviceLine` | Omega service-line code if explicit | AIG, DIG, ESI, COE, STR, HLT, MAR, ISO, EDU, GOV, AAI |
| `scope` | Specific work themes | cyber, ESG, M&A, PMO, change management, data platform |
| `regulatory` | Compliance frameworks named | HIPAA, ISO 42001, ISO 27001, GDPR, CSRD, AML, GxP |
| `languages` | Bilingual delivery? | "AR/EN", "Arabic deliverables" → `ar` |

## Judgment cases (where rules don't cover everything)

- **Premium/high-touch engagement, multi-service-line** → suggest `omega-bundle-all` and warn about ~40k context tokens.
- **Greenfield digital transformation** with no specific industry → `omega-bundle-digital-transformation` plus the matching `omega-ind-<sector>`.
- **Pre-IPO due diligence** → `omega-bundle-banking` + `omega-ai-dd` + `omega-ai-contracts` + (if cross-border) `omega-ai-translate`.
- **Public-sector AI governance** → `omega-bundle-government` + `omega-bundle-ai-governance` (install both bundles).
- **Carbon / Scope-3 / CSRD-driven** → ALWAYS pair `omega-esg` with `omega-ai-regs` (regulation tracking).
- **Bilingual AR/EN** project → ALWAYS add `omega-ai-translate`, regardless of other signals.

## Output format

Render to the user as a markdown block:

```
**Recommended install path for this engagement:**

1. Bundle (one-line install):
   /plugin install <bundle>@omega-plugins

2. Add-on plugins:
   /plugin install <plugin>@omega-plugins
   ...

**Why this set:**
- <bullet rationale per plugin>
- <call out anything the consultant should consider adding manually>
```

## When to refuse

- If the engagement description is too vague ("just consulting work"), ask 2-3 clarifying questions before recommending. Don't ship `omega-bundle-all` as a default.
- If the consultant has explicitly already installed plugins, only recommend incremental additions, not a full re-install.

## Integration

- CLI wrapper: `tools/recommend-plugins.js`
- Engine: `plugins/core/scripts/recommender/recommend.js`
- Rules: `plugins/core/scripts/recommender/rules.json`
- Slash command: `/omega:recommend-plugins`
- Engagement scaffold integration: `tools/scaffold-engagement.sh --recommend`
