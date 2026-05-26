# `@omega/core` — Omega Foundation Plugin

Universal consulting engagement management for Claude Code. Foundation for the v4 plugin platform.

## What this plugin provides

| Component | Count | Examples |
|---|---|---|
| Slash commands | 12 (+ 5 from Phase 4) | `/omega:engagement-setup`, `/omega:session-start`, `/omega:doc-gen`, `/omega:verify-quality`, `/omega:brain-sync` |
| Skills | 12+ universal | `consulting-frameworks`, `document-generation`, `omega-consultation-budget`, `continuous-learning` |
| Agents | 2 | `quality-reviewer`, `document-generator` |
| Executable hooks | 6 | `session-start`, `session-end`, `secret-scan`, `branding-check`, `stale-blocker-alert`, `quality-gate` |
| Rules | 5 | `absolute-rules`, `quality-frameworks`, `session-protocol`, `document-standards`, `protected-fields` |
| Assets | All Omega branding + Big 3 frameworks library + 8 document templates + logos | |

## Install

```
/plugin marketplace add HossamDaoud83/Omega_Consulting_Template_v1
/plugin install @omega/core
```

Then scaffold a new engagement:

```bash
~/.claude/plugins/@omega/core/tools/scaffold-engagement.sh P0XX_ClientShortName
cd ~/Omega_Projects/P0XX_ClientShortName
claude
/omega:engagement-setup
```

## Hook profiles

Set `OMEGA_HOOK_PROFILE`:

| Profile | Quality threshold | Active hooks |
|---|---|---|
| `advisory` | 60 | session-start, session-end |
| `standard` (default) | 75 | All 6 |
| `banking` | 85 | All 6 + peer review required + Opus escalation |

Disable specific hooks: `OMEGA_DISABLED_HOOKS=hook1,hook2` (or `=all`).

## Test

```bash
node tests/run-all.js
```

22 hook tests pass at v4.0.0-alpha.0. Adding more in Phase 1+ iterations.

## See also

- Project tracking: `/mnt/d/Obsidian Notes Taken/05 Projects/Omega v4/`
- Consultant handbook: `/mnt/d/Obsidian Notes Taken/02 Omega/Omega v4 Consultant Handbook.md`
- Plan: `~/.claude/plans/omega-v4-the-zesty-lantern.md`
