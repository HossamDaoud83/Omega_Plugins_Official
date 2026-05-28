---
description: Adversarially fact-check a deliverable against the engagement brain + central with a 5-iteration stable-verdict loop; refuses on thin brain
allowed-tools: Read, Bash, Grep, Glob
argument-hint: "[<path-to-deliverable>]"
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

3. **Locate canonical source per claim.** For each claim, search in this order (three-tier fallback):
   - **Tier 1 — engagement instincts**: grep `.brain/01_Instincts/*.md` for the entity or assertion (use canonical entity names from `assets/seed-entity-aliases.json`). If GBrain is installed, prefer `gbrain search "<claim keywords>"` — BM25-ranked, faster than grep.
   - **Tier 2 — engagement entities**: grep `.brain/02_Entities/**/*.md` for the matching entity frontmatter and surrounding context, OR `gbrain query "<paraphrased claim>" --preset conservative` for hybrid match.
   - **Tier 3 — central frameworks + instincts**: search `${CPS_CENTRAL_BRAIN:-/mnt/d/Obsidian Notes Taken}/06_Frameworks_Library/` and `01_Instincts_Aggregated/`. GBrain reads central as a read-only source, so `gbrain search` here covers both project + central in one call.
   - If no source can be found anywhere, mark the claim **unverifiable** for this iteration

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
- Read-only on both engagement and central brains; no writes ever.

## Worked example

```
$ /omega:fact-check 05_Deliverables_Final/D002_ISO42001_Gap_Report.md

Iteration 1: 24 claims extracted; 19 supported, 3 contradicted, 2 unverifiable
Iteration 2: searched broader synonyms; 19 supported, 3 contradicted, 2 unverifiable → STABLE
PASS — 91.7% verifiability above 50% threshold

| # | Claim | Verdict | Source | Confidence |
|---|---|---|---|---|
| 1 | "ISO 42001 Clause 5.2 requires board approval of AI policy" | supported | central/06_Frameworks_Library/iso-42001.md L142 | high |
| 2 | "JAWDA standard mandates clinical AI documentation" | contradicted | .brain/02_Entities/DOC-X/jawda.md — JAWDA recommends, does not mandate | high |
| 3 | "MENA banking clients see 40% faster approval with pre-circulation" | unverifiable | central instincts mention pattern but no quantified number | — |
| ... |

## Must fix
- Claim 2: revise "mandates" → "recommends" (JAWDA framework reference)
- Claim 3: drop the "40%" or add "(estimated based on N=3 engagements)"
```

## Output destination

This command is **read-only** — it writes nothing to `.brain/` or central. The verdict table is printed to stdout. To persist the audit, copy the output into `05_Deliverables_Final/<deliverable>_FactCheck_<date>.md` manually before delivering.

## Banking profile

In banking profile (`OMEGA_HOOK_PROFILE=banking`), the threshold tightens: any deliverable advancing to `completed` status with even one **contradicted** claim is blocked by `quality-gate.js`. Re-run fact-check after the consultant fixes the contradictions.

## Related

- `/omega:doc-ingest <path>` — ingest more sources if the brain is too thin
- `/omega:verify-quality <deliverable>` — structural quality (gate Check 8 is the markdown-traceability companion to this command's claim-level check)
- `/omega:gbrain query <q>` — interactive hybrid retrieval to investigate unverifiable claims
- Skill: `plugins/kg-enhance/skills/fact-check/SKILL.md` (loop logic)
