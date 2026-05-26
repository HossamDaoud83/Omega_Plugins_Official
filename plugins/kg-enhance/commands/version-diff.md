---
description: Show the version chain for a client document and narrate what changed at each version
allowed-tools: Read, Bash, Grep
---

# /omega:version-diff

For a given document title, return the full version chain (oldest to newest), the SUPERSEDES edges between them, the significance, the diff narrative, and any deliverables that depend on the changed content.

## Steps

1. **Find document IDs by title.** List all `.brain/02_Entities/DOC-*.md` files. Read each frontmatter; collect those whose `doc_title` matches the argument (case-insensitive substring OK).

2. **Order by `received_at`.**

3. **Fetch SUPERSEDES edges for each pair.** Via Python's built-in sqlite3:
   ```bash
   python3 -c "
   import sqlite3
   conn = sqlite3.connect('.brain/graph.db')
   rows = conn.execute(
       'SELECT source, target FROM edges WHERE edge=? AND target=? AND source=?',
       ('SUPERSEDES', '<old_doc_id>', '<new_doc_id>')
   ).fetchall()
   for r in rows: print(r[0], r[1])
   conn.close()
   "
   ```

4. **Read diff narratives.** For each pair, read `.brain/04_Versions/<new>_supersedes_<old>.md` if present.

5. **Find affected deliverables.** For each version, check which deliverables INFORM-link to the document or any of its entities:
   ```bash
   python3 -c "
   import sqlite3
   conn = sqlite3.connect('.brain/graph.db')
   sql = '''SELECT DISTINCT i.id FROM instincts i
            JOIN edges e1 ON e1.source=i.id
            JOIN edges e2 ON e2.source=i.id
            WHERE e1.edge='INFORMS' AND e2.edge='APPLIES' AND e2.target=?'''
   for r in conn.execute(sql, ('<doc_id>',)): print(r[0])
   conn.close()
   "
   ```

6. **Render the chain** as markdown:
   ```
   ## Version Chain: <Title>

     v1  <DOC-AAA>  received <date>  status: superseded
     v2  <DOC-BBB>  received <date>  status: active
          ↑ SUPERSEDES (significance: <high|medium|low>)
          Summary: <narrative>
          Affected deliverables: D003 (DRAFT), D007 (COMPLETE)
   ```

7. **Highlight risks.** If any deliverable is `DRAFT` or `IN_REVIEW` and references content that changed, print a warning at the top:
   ```
   ⚠ <N> deliverables in progress reference content that changed. Re-verify quality.
   ```

## Quality criteria

- Handles 1–N versions (single version returns the document with no supersedes).
- Output renders cleanly in chat.
- Risk warning fires only when there are draft/in-review deliverables on changed content.
