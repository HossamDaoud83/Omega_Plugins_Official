---
description: Merge another consultant's instinct bundle into this consultant's central brain
allowed-tools: Bash, Read, Write
---

# /omega:instinct-import

Merges a YAML bundle exported by another consultant via `/omega:instinct-export` into this consultant's central brain at `/mnt/d/Obsidian Notes Taken/01_Instincts_Aggregated/`.

## Steps

1. Read the bundle file (e.g., `omega-instincts-export-2026-04-28.yaml`).
2. For each instinct in the bundle:
   - Check if `id` already exists in the central brain
   - If new → write the instinct file, set `imported_from: <consultant>` in frontmatter
   - If existing → skip (or `--force` to overwrite, with a backup)
3. Report: imported / skipped / overwritten counts.

The central brain is markdown — Obsidian re-indexes on next open; no graph rebuild step needed.

## Conflict handling

- Same `id`, different content → backup existing as `INS-YYYY-NNN.bak.md`, log a warning, proceed with import only with `--force`
- Same surface but different `id` → both kept (the cluster will surface in `/omega:evolve`)

## Trust model

Imports are not vetted automatically. Review the bundle source before importing — instincts will affect your future `confidence-tracker.js` recommendations.
