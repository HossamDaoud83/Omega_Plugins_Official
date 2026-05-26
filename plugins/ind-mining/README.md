# omega-ind-mining

Mining & metals — ore reserves, mine planning, ESG license to operate, tailings management.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-mining:reserve-review` | Review ore reserves and resources reporting per JORC / NI 43-101. |
| `/omega-mining:mine-plan` | Review LoM plan: pit design, grade control, sequencing. |
| `/omega-mining:tailings-mgmt` | Assess tailings management vs Global Industry Standard on Tailings Management. |
| `/omega-mining:esg-licence` | Diagnose social license risks; recommend community engagement program. |

## Skills

- `mining` — Mining & Metals methods (see `skills/mining/SKILL.md`)

## Subagents

- `mining-strategist` — Mining Strategist

## Quality gate

`rules/mining-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ind-mining@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
