# omega-ai-translate

AI bilingual deliverables — domain glossary enforcement, AR/EN parity checks, terminology consistency.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-aitranslate:glossary-init` | Initialize domain glossary from existing deliverables; seed AR/EN pairs. |
| `/omega-aitranslate:translate` | Translate a deliverable to/from Arabic with glossary enforcement. |
| `/omega-aitranslate:parity-check` | Verify AR/EN versions of a deliverable match on structure and key terms. |
| `/omega-aitranslate:glossary-extend` | Propose new AR/EN term pairs from a draft document. |

## Skills

- `aitranslate` — AI Bilingual Translation methods (see `skills/aitranslate/SKILL.md`)

## Subagents

- `translator` — Bilingual Translator

## Quality gate

`rules/aitranslate-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ai-translate@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
