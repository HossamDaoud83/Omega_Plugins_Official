# omega-pmo

PMO setup, portfolio governance, program management, RAID logs, status pack automation, gate reviews.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-pmo:pmo-setup` | Stand up a PMO: charter, operating model, governance, tools. |
| `/omega-pmo:portfolio-prioritize` | Score and rank initiatives using strategic-fit, value, and feasibility lenses. |
| `/omega-pmo:program-charter` | Author program charter: scope, objectives, governance, RAID, success criteria. |
| `/omega-pmo:status-pack` | Author weekly/monthly status pack from tracker state. |
| `/omega-pmo:gate-review` | Facilitate stage-gate review with scorecard and go/no-go decision. |
| `/omega-pmo:raid-cleanup` | Audit RAID log for stale items; drive resolution and aging-out. |

## Skills

- `pmo` — PMO & Program Delivery methods (see `skills/pmo/SKILL.md`)

## Subagents

- `pmo-director` — PMO Director
- `program-manager` — Program Manager

## Quality gate

`rules/pmo-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-pmo@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
