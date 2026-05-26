---
description: Manually re-extract instincts from this engagement's session log (re-runs continuous-learning over full progress)
allowed-tools: Bash, Read, Write
---

# /omega:learn

Manual instinct extraction. Normally `instinct-writer.js` runs automatically at session-end; this command lets you re-extract over the full engagement progress log (e.g., when you've added historical sessions, or when patterns become clearer in retrospect).

## Steps

1. Read `00_Engagement_Management/engagement_progress.md` end-to-end.
2. For each session entry, identify the **surprising / non-obvious** learning (skip routine work).
3. Use the schema in `plugins/core/skills/continuous-learning/SKILL.md` to draft new instincts in `.brain/01_Instincts/`.
4. Run the confidence tracker:
   ```bash
   node plugins/core/scripts/obsidian/confidence-tracker.js
   ```
5. Optionally run `/omega:brain-sync` to push sanitizable instincts to the central brain.

## Quality bar

Skip extraction if a session yielded only routine work (no decisions, no surprises, no blockers cleared). Not every session generates an instinct — saving noise dilutes the signal.

## See also

- `plugins/core/skills/continuous-learning/SKILL.md` — schema and confidence ladder
- `plugins/core/scripts/obsidian/instinct-writer.js` — the auto-extractor
