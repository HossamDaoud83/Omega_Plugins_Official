# omega-risk

Enterprise risk management — ERM frameworks (COSO, ISO 31000), risk appetite, control mapping, BCP/DR, operational resilience.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-risk:erm-framework` | Design or refresh enterprise risk framework aligned to COSO ERM 2017 / ISO 31000. |
| `/omega-risk:risk-appetite` | Define risk appetite statement and quantitative tolerance thresholds per category. |
| `/omega-risk:control-map` | Map risks to controls; identify orphan risks and over-controlled areas. |
| `/omega-risk:bcp-dr` | Develop business continuity and disaster recovery plans with RTO/RPO targets. |
| `/omega-risk:op-resilience` | Stress-test critical business services against severe-but-plausible scenarios (per BoE / DORA). |
| `/omega-risk:risk-register` | Build / refresh enterprise risk register with risk owners, residual scoring. |

## Skills

- `risk` — Enterprise Risk Management methods (see `skills/risk/SKILL.md`)

## Subagents

- `erm-advisor` — ERM Advisor
- `resilience-lead` — Operational Resilience Lead

## Quality gate

`rules/risk-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-risk@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
