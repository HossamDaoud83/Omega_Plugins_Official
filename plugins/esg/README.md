# omega-esg

ESG strategy, sustainability reporting, carbon accounting (Scope 1/2/3), CSRD/GRI/SASB alignment, and net-zero pathway design.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-esg:materiality` | Run double-materiality assessment per CSRD ESRS 1; identify material topics. |
| `/omega-esg:carbon-baseline` | Establish Scope 1/2/3 inventory using GHG Protocol; produce baseline year report. |
| `/omega-esg:net-zero-pathway` | Design SBTi-aligned net-zero pathway with milestones and sector decarbonization levers. |
| `/omega-esg:csrd-gap` | Map current disclosure to ESRS standards; identify gaps and remediation plan. |
| `/omega-esg:esg-rating-prep` | Prepare for MSCI/Sustainalytics/CDP scoring; identify quick wins. |

## Skills

- `esg` — ESG & Sustainability methods (see `skills/esg/SKILL.md`)

## Subagents

- `esg-strategist` — ESG Strategist
- `carbon-accountant` — Carbon Accountant

## Quality gate

`rules/esg-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-esg@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
