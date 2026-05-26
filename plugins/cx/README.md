# omega-cx

Customer experience, journey mapping, voice-of-customer analytics, NPS programs, service blueprinting.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-cx:journey-map` | Map current-state and future-state customer journeys with pain points and moments-of-truth. |
| `/omega-cx:voc-program` | Design voice-of-customer program: channels, cadence, governance, action loops. |
| `/omega-cx:nps-program` | Stand up NPS / CSAT measurement program with closed-loop follow-up. |
| `/omega-cx:service-blueprint` | Author service blueprint showing front-stage, back-stage, and supporting processes. |
| `/omega-cx:cx-maturity` | Score CX maturity across leadership, insights, design, ops, technology. |

## Skills

- `cx` — Customer Experience methods (see `skills/cx/SKILL.md`)

## Subagents

- `cx-strategist` — CX Strategist
- `service-designer` — Service Designer

## Quality gate

`rules/cx-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-cx@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
