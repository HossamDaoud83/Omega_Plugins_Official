# omega-cloud

Cloud strategy, FinOps, migration, well-architected reviews, multi-cloud governance, landing zones.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-cloud:cloud-strategy` | Define cloud operating model, target architecture, and 18-month roadmap. |
| `/omega-cloud:finops` | Stand up FinOps practice: showback, rightsizing, commitments, anomaly detection. |
| `/omega-cloud:migration-plan` | Develop application migration plan using 6Rs; produce wave plan. |
| `/omega-cloud:wa-review` | Conduct AWS/Azure/GCP well-architected review across pillars. |
| `/omega-cloud:landing-zone` | Design account/subscription structure, identity, network, guardrails. |

## Skills

- `cloud` — Cloud Strategy & FinOps methods (see `skills/cloud/SKILL.md`)

## Subagents

- `cloud-strategist` — Cloud Strategist
- `finops-lead` — FinOps Practitioner

## Quality gate

`rules/cloud-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-cloud@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
