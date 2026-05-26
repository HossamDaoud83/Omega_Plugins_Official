# omega-ind-logistics

Logistics & 3PL — fleet, warehousing, last-mile, freight, port operations.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-logistics:fleet-opt` | Optimize fleet size, mix, and routing for cost and service. |
| `/omega-logistics:warehouse-design` | Design warehouse layout, slotting, automation level. |
| `/omega-logistics:last-mile` | Design last-mile delivery network (own / 3PL / hybrid / dark store). |
| `/omega-logistics:freight-mode` | Optimize freight mode mix (road / rail / sea / air) for cost-service trade-off. |
| `/omega-logistics:port-ops` | Review port/terminal operations for throughput, dwell time, asset utilization. |

## Skills

- `logistics` — Logistics & 3PL methods (see `skills/logistics/SKILL.md`)

## Subagents

- `logistics-strategist` — Logistics Strategist
- `warehouse-engineer` — Warehouse Engineer

## Quality gate

`rules/logistics-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ind-logistics@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
