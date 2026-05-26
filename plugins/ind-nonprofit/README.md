# omega-ind-nonprofit

Nonprofit & NGO — grant management, theory of change, donor reporting, monitoring & evaluation (M&E).

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-nonprofit:theory-of-change` | Develop theory of change linking inputs → activities → outputs → outcomes → impact. |
| `/omega-nonprofit:grant-mgmt` | Set up grant management system: pipeline, compliance, reporting. |
| `/omega-nonprofit:me-framework` | Design M&E framework with indicators, data sources, baseline, targets. |
| `/omega-nonprofit:donor-report` | Author donor report with results vs commitment, qualitative case stories. |

## Skills

- `nonprofit` — Nonprofit & NGO methods (see `skills/nonprofit/SKILL.md`)

## Subagents

- `nonprofit-advisor` — Nonprofit Advisor

## Quality gate

`rules/nonprofit-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ind-nonprofit@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
