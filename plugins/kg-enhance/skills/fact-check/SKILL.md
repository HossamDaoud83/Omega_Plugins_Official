---
name: fact-check
description: Adversarially verify factual claims in a deliverable against the engagement brain and central brain, using a stable-verdict loop with hard caps.
---

# Fact-Check

## When to use

After `/omega:verify-quality` passes but before client delivery. Verify-quality catches structural problems (missing sections, unfilled placeholders, branding violations); fact-check catches the wrong-but-internally-consistent factual errors that plain RAG misses.

## The adversarial-critique ladder

```
Verdict stability      ← have we converged?
       ↑
Critique               ← supported / contradicted / unverifiable
       ↑
Source location        ← where does the claim come from?
       ↑
Claim extraction       ← what factual assertions does the deliverable make?
       ↑
Deliverable            ← the markdown to check
```

Always work bottom-up. Never invent a verdict before locating a source; never skip extracted claims because they look "obvious."

## Process

1. **Extract claims.** Read the target deliverable. Enumerate every factual assertion. A factual assertion is anything that could be checked against an external source — numbers, dates, named entities, regulatory citations, attributions, causal claims tied to specific actors. Output as a numbered list before doing anything else.

2. **Locate canonical source — three-tier markdown fallback (v2.0).**
   - Tier 1: grep `.brain/01_Instincts/*.md` for the entity or assertion (use canonical entity names from `assets/seed-entity-aliases.json`)
   - Tier 2: grep `.brain/02_Entities/**/*.md` for the matching entity frontmatter and surrounding context
   - Tier 3: grep `${Omega_CENTRAL_BRAIN:-/mnt/d/Obsidian Notes Taken}/05_Frameworks_Library/` and `01_Instincts_Aggregated/`
   - If all three turn up nothing, mark **unverifiable** for this iteration

3. **Critique.** For each (claim, source) pair:
   - **supported** — the source explicitly contains the claim. Cite the supporting passage or the graph edge.
   - **contradicted** — the source contradicts the claim. Cite the contradicting passage. This is the most valuable verdict — flag prominently.
   - **unverifiable** — no source located in any tier. Absence of contradiction is **not** support.

4. **Loop until stable.**
   - Compute the verdict list for the current iteration.
   - Compare to the previous iteration's verdict list.
   - If identical → terminate (stable).
   - If different → re-run step 2 only on the still-unverifiable claims with refined search: synonyms from `assets/seed-entity-aliases.json`, broader date ranges, alternative entity names.
   - Hard cap: **5 iterations**.

5. **Refuse on thin brain.** If >50% of claims remain unverifiable after termination, abort. Tell the consultant the engagement brain is too thin and recommend `/omega:doc-ingest` on additional sources. Returning a partial table creates false confidence — don't do it.

6. **Output.** Markdown table with columns `# | Claim | Verdict | Source | Confidence`. Confidence is `high` when the source is a primary engagement document or entity passage, `medium` when only an instinct mentions it, `low` when sourced from central (because central is sanitized — entity-level, not passage-level). Append a `## Must fix` section for every contradicted claim with a one-line suggested correction.

## Confidence calibration

| Verdict source | Confidence | Why |
|---|---|---|
| Primary engagement document or entity passage match | high | Direct evidence in `.brain/02_Entities/` |
| Engagement instinct that cites a primary doc | high | Instinct frontmatter links back to the source |
| Engagement instinct without a primary doc citation | medium | Observation without primary evidence |
| Central brain entry (cross-engagement) | low | Central is sanitized; lacks passage-level grounding |
| No source found | n/a (unverifiable) | Don't fabricate confidence |

## Coding hygiene

- One claim per row in the output table — atomic, not "X and Y and Z"
- Quotes from sources verbatim, in quotation marks
- Date ranges spelled out ("Q3 2025") not relative ("last quarter")
- If a regulation is cited (HIPAA §164.312, ISO 42001 cl. 8.3), the source must contain the same clause/section reference
- Track iteration count in the output trail so the consultant can see how much loop work happened

## Hard limits

- **5 iterations** max
- **>50% unverifiable** → abort
- **Read-only** on engagement brain and central brain — no writes ever

## Common failure modes

- Treating "no contradiction found" as "supported" — always demand a positive citation
- Collapsing `unverifiable` into `supported` to make the table look complete — refuse the >50% threshold instead
- Letting the loop drift away from the original deliverable — the claims list from step 1 is the contract; don't add or drop claims mid-loop
- Citing the source name without the supporting passage — verdicts must be auditable
- Claiming `high` confidence on central-brain matches — central is sanitized, so it lacks passage-level grounding

## Integration

- **Input:** any `.md` deliverable in the engagement
- **Calls:** Grep across `.brain/01_Instincts/`, `.brain/02_Entities/`, and `Omega_Second_Brain/{05_Frameworks_Library, 01_Instincts_Aggregated}/`
- **Output:** structured fact-check table in the chat; optionally the consultant pastes it into the deliverable's review section
- **Follows:** `/omega:verify-quality` (structural checks)
- **Precedes:** `/omega:client-communication` (delivery)
