# omega-ind-publicsafety

Public safety — police, fire/EMS, emergency management, command-and-control modernization.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-publicsafety:cad-review` | Review computer-aided dispatch and records management system maturity. |
| `/omega-publicsafety:response-time` | Analyze response times by call type, district, time-of-day; identify bottlenecks. |
| `/omega-publicsafety:em-readiness` | Assess emergency-management readiness against ICS / NIMS / equivalent. |
| `/omega-publicsafety:mcc-strategy` | Strategize mission-critical communications (LMR, P25, MCPTT). |

## Skills

- `publicsafety` — Public Safety methods (see `skills/publicsafety/SKILL.md`)

## Subagents

- `publicsafety-advisor` — Public Safety Advisor

## Quality gate

`rules/publicsafety-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ind-publicsafety@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
