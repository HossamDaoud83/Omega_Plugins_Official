# omega-ind-hospitality

Hospitality — RevPAR optimization, F&B operations, brand standards, guest experience.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-hospitality:revpar-opt` | Diagnose RevPAR drivers (rate, occupancy, segment mix) and identify uplift levers. |
| `/omega-hospitality:fnb-ops` | Review F&B operations: cost, quality, throughput, guest satisfaction. |
| `/omega-hospitality:brand-audit` | Audit property against brand standards; identify gaps and remediation cost. |
| `/omega-hospitality:guest-exp` | Map guest journey, identify friction points, prioritize interventions. |

## Skills

- `hospitality` — Hospitality methods (see `skills/hospitality/SKILL.md`)

## Subagents

- `hospitality-advisor` — Hospitality Advisor

## Quality gate

`rules/hospitality-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ind-hospitality@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
