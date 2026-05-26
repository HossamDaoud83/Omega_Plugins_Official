# omega-supply

Supply chain strategy, sourcing, logistics, supplier risk, S&OP, network optimization.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-supply:network-design` | Optimize supply network footprint (DCs, plants, suppliers) for cost-to-serve. |
| `/omega-supply:sourcing-strategy` | Develop category sourcing strategy using Kraljic matrix; supplier consolidation analysis. |
| `/omega-supply:sop` | Stand up integrated S&OP / IBP process with monthly cadence. |
| `/omega-supply:supplier-risk` | Map supplier concentration, geopolitical exposure, financial health. |
| `/omega-supply:logistics-cost` | Build logistics cost model and identify mode/route optimization opportunities. |

## Skills

- `supply` — Supply Chain & Procurement methods (see `skills/supply/SKILL.md`)

## Subagents

- `supply-chain-strategist` — Supply Chain Strategist
- `procurement-lead` — Procurement Lead

## Quality gate

`rules/supply-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-supply@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
