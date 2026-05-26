# omega-ops

Operational excellence, lean six sigma, value stream mapping, process redesign, continuous improvement programs.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-ops:vsm` | Build current-state and future-state VSM for a target process. |
| `/omega-ops:process-redesign` | Re-engineer a target process for cycle time, quality, and cost gains. |
| `/omega-ops:kaizen-event` | Plan and facilitate a 3-5 day kaizen / improvement event. |
| `/omega-ops:lean-assess` | Score the operation against Shingo Model dimensions. |
| `/omega-ops:six-sigma-project` | Frame a DMAIC project: SIPOC, problem statement, charter. |

## Skills

- `ops` — Operational Excellence methods (see `skills/ops/SKILL.md`)

## Subagents

- `ops-excellence-lead` — Operational Excellence Lead
- `process-engineer` — Process Engineer

## Quality gate

`rules/ops-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ops@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
