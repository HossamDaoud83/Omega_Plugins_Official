# omega-data

Data strategy, architecture, governance, lineage, classification, master data management, and data platform sequencing.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-data:data-strategy` | Articulate vision, value drivers, and 12-24 month data roadmap. |
| `/omega-data:arch-review` | Assess current data architecture (warehouses, lakehouses, pipelines) against target state. |
| `/omega-data:governance` | Stand up a data governance operating model: roles, councils, decision rights. |
| `/omega-data:mdm-assess` | Evaluate master-data domains, golden record approach, and stewardship. |
| `/omega-data:lineage-map` | Produce end-to-end lineage from source systems through reporting. |

## Skills

- `data` — Data Strategy & Architecture methods (see `skills/data/SKILL.md`)

## Subagents

- `data-architect` — Data Architect
- `data-governance-lead` — Data Governance Lead

## Quality gate

`rules/data-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-data@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
