# omega-ai-research

AI-assisted secondary research with source triangulation, citation chains, and confidence flags.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-airesearch:topic-scope` | Frame a research question into PICO / SPIDER style sub-questions and search terms. |
| `/omega-airesearch:source-pull` | Run multi-source search and pull primary references with citation metadata. |
| `/omega-airesearch:triangulate` | Cross-check claims across ≥3 independent sources; flag single-source claims. |
| `/omega-airesearch:synthesis` | Synthesize findings into a structured brief with explicit confidence per claim. |
| `/omega-airesearch:gap-list` | Identify unresolved questions and recommended primary research. |

## Skills

- `airesearch` — AI-Assisted Research methods (see `skills/airesearch/SKILL.md`)

## Subagents

- `research-lead` — Research Lead
- `source-evaluator` — Source Evaluator

## Quality gate

`rules/airesearch-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ai-research@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
