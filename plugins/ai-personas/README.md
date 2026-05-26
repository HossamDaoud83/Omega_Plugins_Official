# omega-ai-personas

AI persona synthesis — interview clusters, journey personas, evidence-anchored quotes, persona refresh.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-aipersonas:cluster` | Cluster interview transcripts into candidate personas using thematic analysis. |
| `/omega-aipersonas:persona-build` | Build canonical persona cards with name, role, JTBD, pain points, evidence-anchored quotes. |
| `/omega-aipersonas:journey-map` | Map a persona's journey across touchpoints with quotes per moment. |
| `/omega-aipersonas:persona-refresh` | Refresh personas with new interview data; flag drift. |

## Skills

- `aipersonas` — AI Persona Synthesis methods (see `skills/aipersonas/SKILL.md`)

## Subagents

- `persona-researcher` — Persona Researcher

## Quality gate

`rules/aipersonas-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ai-personas@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
