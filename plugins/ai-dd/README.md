# omega-ai-dd

AI-assisted due diligence — data room ingest, red-flag extraction, redaction-on-export, structured findings.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-aidd:dataroom-ingest` | Ingest a data room: classify documents, build inventory, flag missing categories. |
| `/omega-aidd:red-flag` | Scan ingested documents for red flags by workstream (commercial, financial, legal, IT, HR). |
| `/omega-aidd:qoe-baseline` | Build quality-of-earnings baseline from financials with normalization adjustments. |
| `/omega-aidd:dd-report` | Author DD report with findings, severity, recommended price/structure adjustments. |
| `/omega-aidd:redaction-export` | Export client-facing version with PII / sensitive details redacted. |

## Skills

- `aidd` — AI-Assisted Due Diligence methods (see `skills/aidd/SKILL.md`)

## Subagents

- `dd-lead` — DD Lead
- `qoe-analyst` — QoE Analyst

## Quality gate

`rules/aidd-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ai-dd@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
