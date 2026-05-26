# omega-ind-pharma

Pharma & life sciences — GxP, clinical trials, pharmacovigilance, regulatory filings (FDA / EMA / GCC).

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-pharma:gxp-readiness` | Assess GxP (GMP/GLP/GCP/GDP) readiness; identify control gaps. |
| `/omega-pharma:trial-design` | Review clinical trial protocol design and statistical approach. |
| `/omega-pharma:pv-process` | Assess PV process including ICSR handling, signal detection, PSUR/PBRER. |
| `/omega-pharma:regulatory-strategy` | Define filing strategy across FDA / EMA / GCC including pathway selection. |
| `/omega-pharma:launch-readiness` | Assess launch readiness across supply, market access, medical, commercial. |

## Skills

- `pharma` — Pharma & Life Sciences methods (see `skills/pharma/SKILL.md`)

## Subagents

- `pharma-strategist` — Pharma Strategist
- `gxp-auditor` — GxP Auditor

## Quality gate

`rules/pharma-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-ind-pharma@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
