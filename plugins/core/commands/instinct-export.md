---
description: Export this consultant's central-brain instincts as a YAML bundle for sharing with colleagues
allowed-tools: Bash, Read, Write
---

# /omega:instinct-export

Bundles the consultant's sanitized central-brain instincts into a single YAML file that can be shared with another Omega consultant or merged into a different machine.

## Steps

1. Default scope: all instincts in `/mnt/d/Obsidian Notes Taken/01_Instincts_Aggregated/` with `central_sync: synced`.
2. Optional filter: `--service-line AIG`, `--industry healthcare`, `--since 2025-01-01`.
3. Output: `omega-instincts-export-YYYY-MM-DD.yaml` in the current directory.
4. Bundle includes frontmatter + body for each instinct, with a manifest header (count, date, exporter).

## Bundle format

```yaml
exported_by: <consultant>
exported_on: 2026-04-28
schema_version: "1.0"
count: 42
instincts:
  - id: INS-2025-014
    frontmatter: {...}
    body: |
      <markdown body>
  - ...
```

## Sharing

Share the YAML via Slack, email, or a private gist. Recipient runs `/omega:instinct-import` to merge.

## Privacy

Only sanitized central-brain instincts are exported. Per-project `.brain/01_Instincts/` are NEVER touched by this command.
