---
description: Sync sanitized instincts from this engagement's .brain/ to the central Omega Second Brain
allowed-tools: Bash, Read, Write
---

# /omega:brain-sync

Push generalized learnings from this engagement to the central Omega Second Brain so other consultants and future engagements benefit.

## What it does

For each instinct in `.brain/01_Instincts/` where `central_sync: pending` and `visibility != project-only`:

1. Run the sanitizer (`plugins/core/scripts/obsidian/sanitizer.js`) to strip:
   - Client name → `[CLIENT]`
   - Project code (e.g., `P025_NBE_AIG`) → `[PROJECT]`
   - Named persons → `[CLIENT_SPONSOR]` / `[CLIENT_PM]` / role-based placeholder
   - Specific USD amounts → buckets (`$<100k`, `$100k-$500k`, `$500k-$1M`, `$1M-$10M`, `$10M-$100M`, `$100M+`)
2. Write sanitized copy to `/mnt/d/Obsidian Notes Taken/Omega_Second_Brain/01_Instincts_Aggregated/`
3. Flip the source instinct's `central_sync` flag to `synced`
4. Show a diff before each sync (consultant can downgrade to `visibility: project-only` if anything sensitive remains)

## Steps

1. Verify central brain exists at `/mnt/d/Obsidian Notes Taken/Omega_Second_Brain/`. If not, run `node tools/seed-central-brain.js` once.
2. For each pending instinct:
   ```bash
   node plugins/core/scripts/obsidian/sanitizer.js \
     --in .brain/01_Instincts/INS-YYYY-NNN-slug.md \
     --out "/mnt/d/Obsidian Notes Taken/Omega_Second_Brain/01_Instincts_Aggregated/INS-YYYY-NNN-slug.md"
   ```
3. Show consultant the sanitized output for review.
4. After confirmation, the script flips `central_sync: synced` in the source.

## Safety check

After sync, run a sanity grep:

```bash
grep -ri "<your client name>" "/mnt/d/Obsidian Notes Taken/Omega_Second_Brain/01_Instincts_Aggregated/"
```

Should return ZERO matches. If anything leaked, mark the source instinct `visibility: project-only` and delete the central copy.

## Configuration

Edit `.brain/config.json` `sanitizer_rules` to tighten or relax stripping. Defaults:

```json
{
  "strip_client_identifiers": true,
  "bucket_dollar_amounts": true,
  "replace_persons_with_roles": true,
  "strip_project_codes": true
}
```
