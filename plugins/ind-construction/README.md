# omega-ind-construction

Construction & EPC — project controls, BIM, schedule risk analysis, claims, contracts (FIDIC / NEC).

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-construction:project-controls` | Set up cost + schedule controls (EVM, S-curves, drift analysis). |
| `/omega-construction:bim-readiness` | Assess BIM maturity (UK PAS 1192 / ISO 19650); produce BEP roadmap. |
| `/omega-construction:schedule-risk` | Run quantitative schedule risk analysis (Monte Carlo on activity durations). |
| `/omega-construction:claims-defense` | Analyze EOT/disruption claims using delay analysis methodologies (TIA, AACE 29R-03). |
| `/omega-construction:contract-review` | Review FIDIC / NEC contract clauses for risk allocation gaps. |

## Skills

- `construction` — Construction & EPC methods (see `skills/construction/SKILL.md`)

## Subagents

- `construction-pm` — Construction PM
- `claims-analyst` — Claims Analyst

## Quality gate

`rules/construction-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ind-construction@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
