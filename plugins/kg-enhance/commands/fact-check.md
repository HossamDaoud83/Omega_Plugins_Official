---
description: Fact-check a deliverable against canonical sources using an adversarial-critique loop
allowed-tools: Read, Bash, Grep, Glob
---

# /omega:fact-check

Adversarially fact-check a consulting deliverable against the engagement's ingested sources, the per-project knowledge graph, and the central brain. The command extracts factual claims, locates a canonical source for each, critiques the pairing, and loops until the verdict list is stable.

## When to use

- Before sending a deliverable to a client
- After a long generation pass where Claude may have hallucinated regulatory citations or framework names
- When `/omega:verify-quality` passes but you want claim-level scrutiny (verify-quality catches structural issues, not factual ones)

## Arguments

- **`<path>`** (optional) — path to the deliverable to check. If omitted, defaults to the most recently modified file under `05_Deliverables_Final/` or the engagement's deliverables folder.

## Steps

The detailed loop logic lives in the co-located skill: `skills/fact-check/SKILL.md`. Apply that skill when this command is invoked.

1. **Locate target.** Resolve the deliverable path. If none provided, glob the engagement's deliverables folders and pick the most recently modified `.md`. If the path is missing or empty, abort with a clear error.

2. **Extract claims.** Read the file. Enumerate factual assertions: numbers (percentages, dollar amounts, counts), dates and date ranges, named regulations and frameworks (HIPAA, ISO 42001, CSRD, Basel III...), attributions ("according to X", "per the Y framework"), causal claims tied to specific entities. Output a numbered claims list before proceeding to step 3.

3. **Locate canonical source per claim.** For each claim, search in this order (markdown-first, three-tier fallback):
   - **Tier 1 — engagement instincts:** grep `.brain/01_Instincts/*.md` for content matching the claim (entity, regulation, number, date)
   - **Tier 2 — engagement entities:** grep `.brain/02_Entities/**/*.md` extracted from ingested client documents
   - **Tier 3 — central frameworks:** grep `D:/Obsidian Notes Taken/02 Omega/_Instincts/` and partner-curated framework references in the central vault
   - If no source can be found in any tier, mark the claim **unverifiable** for this iteration

4. **Critique each claim.** For every (claim, source) pair, judge:
   - **supported** — the source explicitly contains the claim
   - **contradicted** — the source contradicts the claim (cite the contradicting passage)
   - **unverifiable** — no source found in any of the three locations

   Write the verdict + the source reference inline. Be conservative: absence of a contradiction is **not** support.

5. **Loop terminator.** Re-run step 3 only on claims marked unverifiable, this time with refined search (synonyms, broader date ranges, alternative entity names from `assets/seed-entity-aliases.json`). Update verdicts.

   Terminate when **either**:
   - The verdict list is identical for two consecutive passes (stable), OR
   - **5 iterations total** have run

6. **Refuse on thin brain.** If after the loop terminates **>50% of claims remain unverifiable**, abort the command and tell the consultant: "The engagement brain doesn't have enough source material to fact-check this deliverable. Run `/omega:doc-ingest` on more sources first." Do not return a partial table — that creates false confidence.

7. **Output.**

   ```
   | # | Claim | Verdict | Source | Confidence |
   |---|-------|---------|--------|------------|
   | 1 | ...   | supported | <source ref> | high |
   | 2 | ...   | contradicted | <source ref + passage> | high |
   ...
   ```

   Followed by a `## Must fix` subsection listing every contradicted claim with a one-line suggested correction.

## Quality criteria

- Every claim in the deliverable appears in the table — no silent skipping.
- Contradicted claims include the contradicting passage from the source, not just the source name.
- Unverifiable is a first-class verdict; it never collapses into "supported."
- The command refuses with a clear error rather than returning a misleading partial table when the brain is too thin.
- Read-only on the engagement and the central brain — no writes ever.

## Hard limits

- Maximum **5 loop iterations**.
- Refusal threshold: **>50% unverifiable** → abort.
