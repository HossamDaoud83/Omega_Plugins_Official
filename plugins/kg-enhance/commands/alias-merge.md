---
description: Propose EN/AR entity merges and apply confirmed merges to the engagement alias overrides
allowed-tools: Read, Bash, Write, Edit
---

# /omega-kg-enhance:alias-merge

Identify probable cross-language duplicates in the entity table and propose merges to a canonical name. Apply only after consultant confirmation.

## Steps

1. **Load existing aliases.**
   - Central seed: `~/.claude/plugins/omega-kg-enhance/assets/seed-entity-aliases.json`
   - Engagement overrides: `.brain/alias_overrides.json` (create if missing)

2. **Pull entity inventory** from the engagement graph:
   ```bash
   python3 -c "
   import sqlite3
   conn = sqlite3.connect('.brain/graph.db')
   rows = conn.execute(\"SELECT name, type FROM entities WHERE type IN ('Client','Framework','Person','System','Regulation')\").fetchall()
   for r in rows: print(r[0] + '|' + r[1])
   conn.close()
   "
   ```

3. **Group by language.** Detect Arabic by the presence of any Unicode codepoint in U+0600..U+06FF; otherwise treat as English.

4. **Propose merges by judgment.** For each English-Arabic pair you suspect refers to the same entity, propose a merge. Examples of strong signals:
   - Phonetic transliteration ("Omega Consulting" ↔ "كور باث ستراتيجيس")
   - Direct translation of a known framework ("ISO 42001" ↔ "آيزو 42001")
   - Same role + similar context ("Marine Pollution Convention" ↔ "اتفاقية تلوث البحار")

5. **Present proposals** as a numbered list:
   ```
   Proposed merges:
   1. EN: "Omega Consulting"  ↔  AR: "كور باث ستراتيجيس"  (canonical: Omega Consulting)
   2. EN: "ISO 42001"              ↔  AR: "آيزو 42001"          (canonical: ISO 42001)
   ...

   Reply with the numbers to confirm (e.g., "1,2" or "all"), or "none".
   ```

6. **Apply confirmed merges.** For each confirmed pair:
   - Add to `.brain/alias_overrides.json` under the canonical key
   - Update graph: rename non-canonical entity to canonical via:
     ```bash
     python3 << 'PYEOF'
     import sqlite3
     conn = sqlite3.connect('.brain/graph.db')
     canonical, alias = '<canonical>', '<alias>'
     conn.execute("UPDATE OR IGNORE edges SET source = ? WHERE source = ?", (canonical, alias))
     conn.execute("UPDATE OR IGNORE edges SET target = ? WHERE target = ?", (canonical, alias))
     conn.execute("DELETE FROM entities WHERE name = ?", (alias,))
     conn.commit()
     conn.close()
     PYEOF
     ```
     If `UPDATE OR IGNORE` skips a row due to PK collision, that's fine — the canonical edge already exists.

7. **Print summary** of applied merges and updated rows.

## Quality criteria

- NEVER auto-apply without consultant confirmation.
- Updates are idempotent (re-running produces no further changes).
- `alias_overrides.json` is valid UTF-8 JSON, sorted keys.
- No data loss: all source/target references repointed before deleting the aliased entity.
