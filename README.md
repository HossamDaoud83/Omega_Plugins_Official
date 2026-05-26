# Omega Plugins — Official Distribution (v1.0.0)

The official Claude Code plugin marketplace for **Omega Consulting** consulting work.

This repository is the public distribution of the `omega-*` plugin ecosystem: a composable platform for AI-native business consulting engagements covering finance, governance, digital transformation, healthcare, maritime, life sciences, construction, and more.

**Marketplace contents (v1.0.0):** 49 individual plugins + 21 industry/scope bundles = **70 entries** with `tier: featured | standard | specialized` classification.

> **Versioning note:** v1.0.0 is the first public marketplace release. The platform was developed internally through a 4.x evolution; see the source repo's `CHANGELOG.md` for the full history.

---

## Quick start

In Claude Code:

```
/plugin marketplace add HossamDaoud83/Omega_Plugins_Official
```

Then pick **one** of the three install paths below.

**Don't know what to install?** Once `omega-core` is in, run `/omega:recommend-plugins` and describe the engagement — the recommender suggests the right bundle and add-ons.

---

## Install path A — Bundles (recommended)

A bundle is a one-line install for a typical engagement type. It pulls in `omega-core` plus the right capability + service-line + industry plugins automatically.

### Featured bundles

| Bundle | What it installs | Best for |
|---|---|---|
| `omega-bundle-healthcare` | core + kg + finance + hlt + ind-healthcare | HIS/EMR/HIPAA/HL7-FHIR engagements |
| `omega-bundle-banking` | core + kg + finance + aig + ind-finserv | Banking, insurance, fintech, AML, fraud |
| `omega-bundle-government` | core + kg + gov + ind-government | E-government, policy, transparency, citizen services |
| `omega-bundle-ai-governance` | core + kg + aig + iso + aai | ISO 42001 in any industry |
| `omega-bundle-digital-transformation` | core + kg + finance + dig + esi + str | Strategy-led transformation |

### Standard bundles

| Bundle | What it installs | Best for |
|---|---|---|
| `omega-bundle-cybersecurity` | core + kg + cyber + iso + risk | Cybersecurity advisory + ISO 27001 |
| `omega-bundle-esg` | core + kg + finance + esg + str | ESG / sustainability work |
| `omega-bundle-pmo-delivery` | core + kg + pmo + risk + dig | PMO and program delivery |
| `omega-bundle-data-platform` | core + kg + data + cloud + coe | Data platform engagements |
| `omega-bundle-ai-native` | core + kg + ai-research + ai-dd + ai-contracts + ai-regs | AI-native consulting toolkit |
| `omega-bundle-education` | core + kg + edu + ind-education | K-12, higher ed, accreditation |
| `omega-bundle-manufacturing` | core + kg + coe + ind-manufacturing | Production, supply chain, MES |

### Specialized bundles

| Bundle | What it installs | Best for |
|---|---|---|
| `omega-bundle-maritime` | core + kg + finance + mar + ind-maritime | Ports, vessels, IMO/MARPOL/SOLAS |
| `omega-bundle-life-sciences` | core + kg + finance + iso + cyber + ind-pharma | GxP, clinical trials, pharmacovigilance |
| `omega-bundle-construction` | core + kg + finance + ind-construction + pmo | Construction & EPC |
| `omega-bundle-supply-chain` | core + kg + finance + supply + ops + ind-manufacturing | Supply chain transformation |
| `omega-bundle-energy` | core + kg + finance + ind-energy | Renewables, grid, oil & gas |
| `omega-bundle-retail` | core + kg + coe + ind-retail | Omnichannel, POS, inventory |
| `omega-bundle-realestate` | core + kg + finance + ind-realestate | Property, REIT, cap rate |
| `omega-bundle-telecom` | core + kg + esi + ind-telecom | 5G, OSS/BSS, ARPU |
| `omega-bundle-all` | All 49 plugins | Multi-service-line; ~40k context tokens |

### Example — install for a healthcare AI governance engagement

```
/plugin install omega-bundle-healthcare@omega-plugins
/plugin install omega-aig@omega-plugins
/plugin install omega-cyber@omega-plugins
/plugin install omega-ai-translate@omega-plugins   # if AR/EN bilingual
```

(Or run `/omega:recommend-plugins` and let it generate this list for you.)

---

## Install path B — Individual plugins

Pick exactly what you need. Lighter context, more typing.

```
/plugin install omega-core@omega-plugins              # foundation, always required
/plugin install omega-kg-enhance@omega-plugins        # document graph + brain commands
/plugin install omega-finance@omega-plugins           # capability: sensitivity, Monte Carlo
/plugin install omega-aig@omega-plugins               # service-line: AI governance
/plugin install omega-cyber@omega-plugins             # capability: ISO 27001 / threat modeling
/plugin install omega-ind-healthcare@omega-plugins    # industry: healthcare vocab
```

### Available individual plugins

| Layer | Plugins |
|---|---|
| **Foundation** | `omega-core` (featured) |
| **Capability (12)** | `omega-finance` · `omega-kg-enhance` · `omega-cyber` · `omega-data` · `omega-esg` · `omega-risk` · `omega-ops` · `omega-supply` · `omega-cloud` · `omega-pmo` · `omega-people` · `omega-cx` |
| **AI-native (6)** | `omega-ai-research` · `omega-ai-dd` · `omega-ai-contracts` · `omega-ai-regs` · `omega-ai-translate` · `omega-ai-personas` |
| **Service-line (11)** | `omega-aai` · `omega-aig` · `omega-coe` · `omega-dig` · `omega-edu` · `omega-esi` · `omega-gov` · `omega-hlt` · `omega-iso` · `omega-mar` · `omega-str` |
| **Industry (19)** | `omega-ind-education` · `omega-ind-energy` · `omega-ind-finserv` · `omega-ind-government` · `omega-ind-healthcare` · `omega-ind-manufacturing` · `omega-ind-maritime` · `omega-ind-realestate` · `omega-ind-retail` · `omega-ind-telecom` · `omega-ind-pharma` · `omega-ind-construction` · `omega-ind-hospitality` · `omega-ind-logistics` · `omega-ind-mining` · `omega-ind-agritech` · `omega-ind-media` · `omega-ind-nonprofit` · `omega-ind-publicsafety` |

---

## Install path C — Browse interactively

```
/plugin marketplace browse omega-plugins
```

---

## Update

```
/plugin marketplace update omega-plugins
```

After update, re-run `/plugin install <name>@omega-plugins` for each plugin you want to upgrade.

---

## Verify

```
/plugin list
```

You should see your installed plugins. `omega-core` reports `Hooks: 6 active`. Capability plugins (cyber/pmo/risk/esg/data/cloud/ops/supply/people/cx) and AI-native plugins (ai-dd/ai-contracts/ai-regs/ai-translate) ship additional hooks — see plugin READMEs.

## What's in v1.0.0

- **9 omega-core cross-cutting skills** — workshop-facilitation, stakeholder-analysis, decision-frameworks, survey-design, interview-synthesis, visualization-library, negotiation-prep, executive-storytelling, market-intelligence (universal across any engagement)
- **5 industry plugins lifted shallow → medium** — `omega-ind-healthcare`, `omega-ind-finserv`, `omega-ind-government`, `omega-ind-education`, `omega-ind-manufacturing`: each gains 4-6 commands + 1 agent + a deeper SKILL.md + a quality-standards rule
- **6 medium plugin enhancements** — `omega-aig`, `omega-dig`, `omega-finance`, `omega-hlt`, `omega-iso`, `omega-mar`: each gains 2 skills + 1 agent
- **49 plugins** organized as foundation (1) + capability (12) + AI-native (6) + service-line (11) + industry (19)
- **21 bundles** for one-line install per industry / scope
- **Plugin recommender** at `/omega:recommend-plugins` — translates engagement signals to install path
- **18 enforcement hooks** across 11 plugins (PII, license, RAID, BCP, ESG, classification, FinOps, VSM, supplier risk, redaction, contract confidence, regulatory freshness, glossary, and more)
- **Tier classification** on every entry (`featured` / `standard` / `specialized`)
- **9 omega-core cross-cutting skills** — workshop-facilitation, stakeholder-analysis, decision-frameworks, survey-design, interview-synthesis, visualization-library, negotiation-prep, executive-storytelling, market-intelligence
- **249 tests passing** across all 49 plugins

---

## License

MIT — see individual plugin manifests for details.

## Source

This is a distribution mirror. Plugins are developed in the source repo: <https://github.com/HossamDaoud83/Omega_Consulting_Template_v1>.

Issues and contributions: please open them on the source repo.
