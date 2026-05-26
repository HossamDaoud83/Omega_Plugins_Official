# omega-ind-agritech

Agriculture & agritech — crop economics, irrigation, food traceability, climate-smart agriculture.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-agritech:crop-econ` | Build crop economics model (gross margin per ha) by crop and farming system. |
| `/omega-agritech:irrigation-design` | Design irrigation strategy balancing water cost, crop yield, sustainability. |
| `/omega-agritech:traceability` | Design farm-to-fork traceability system aligned to GFSI / GS1. |
| `/omega-agritech:csa-pathway` | Develop climate-smart agriculture pathway (mitigation + adaptation + productivity). |

## Skills

- `agritech` — Agriculture & Agritech methods (see `skills/agritech/SKILL.md`)

## Subagents

- `agritech-strategist` — Agritech Strategist

## Quality gate

`rules/agritech-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ind-agritech@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
