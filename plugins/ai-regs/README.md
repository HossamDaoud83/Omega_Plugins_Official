# omega-ai-regs

AI regulatory tracking — gazette/circular monitoring, freshness gating, jurisdiction tags, change-impact analysis.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-airegs:jurisdiction-setup` | Configure jurisdictions and source feeds (gazettes, regulator circulars, EU OJ). |
| `/omega-airegs:refresh` | Refresh regulatory cache for configured jurisdictions; flag stale entries. |
| `/omega-airegs:change-impact` | Analyze a regulatory change for client-impact (which controls, deliverables, processes affected). |
| `/omega-airegs:horizon-scan` | Produce 12-month horizon scan of upcoming regulatory changes by jurisdiction. |

## Skills

- `airegs` — AI Regulatory Tracking methods (see `skills/airegs/SKILL.md`)

## Subagents

- `regulatory-analyst` — Regulatory Analyst

## Quality gate

`rules/airegs-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ai-regs@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
