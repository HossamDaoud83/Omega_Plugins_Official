# omega-ai-contracts

AI contract review — clause extraction, risk scoring, confidence-gated exports, comparison to market standard.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-aicontracts:clause-extract` | Extract named clauses (indemnity, limitation of liability, IP, termination, etc.) with confidence scores. |
| `/omega-aicontracts:risk-score` | Score extracted clauses against playbook standards; flag deviations. |
| `/omega-aicontracts:redline` | Propose redlines to bring deviations into playbook compliance. |
| `/omega-aicontracts:compare` | Compare two contracts clause-by-clause; produce delta report. |

## Skills

- `aicontracts` — AI Contract Review methods (see `skills/aicontracts/SKILL.md`)

## Subagents

- `contract-reviewer` — Contract Reviewer

## Quality gate

`rules/aicontracts-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ai-contracts@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
