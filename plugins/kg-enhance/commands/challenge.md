---
description: Adversarially pressure-test a recommendation or premise using only engagement + central brain evidence — build the strongest honest case against it, or confirm it holds
allowed-tools: Read, Bash, Grep, Glob
argument-hint: "<recommendation or premise to challenge>"
---

# /omega:challenge

Take a recommendation, finding, or premise you're about to put in front of a client and try to **dismantle it using your own engagement's evidence** — not generic internet counterarguments. Surface contradicting data, unsupported assumptions, prior positions that pointed the other way, and constraints the recommendation ignores. The goal is to catch a weak recommendation in the war room, not the boardroom.

`/omega:fact-check` verifies whether a deliverable's *claims* are supported by sources. `challenge` is one level up: it attacks the *premise of a recommendation* — its logic, assumptions, and the evidence it conveniently omits. It reuses fact-check's adversarial discipline (conservative, source-cited, refuses to invent) applied to an argument rather than a sentence.

## When to use

- Before a steerco or final readout, to stress-test the headline recommendation
- When a recommendation feels "obviously right" — that's exactly when blind spots hide
- When a senior reviewer will challenge you and you want to have already found the holes
- To decide between two options by challenging the favored one

## Arguments

- **`<premise>`** (required) — the position to challenge, in plain language: `"the client should consolidate to a single ERP"`, `"cloud migration will cut opex 30%"`, `"the bottleneck is staffing, not process"`.

## Steps

This command is **read-only**. Never write to `.brain/` or any engagement folder.

1. **State the premise and its hidden assumptions.** Restate the position in one line, then enumerate the assumptions it *depends on* to be true (e.g. "single ERP" assumes: business units have compatible processes, switching cost < benefit, no regulatory data-residency blocker). These assumptions are the attack surface.

2. **Hunt for counter-evidence — three tiers (mirrors fact-check):**
   - **Tier 1 — engagement evidence**: grep `.brain/01_Instincts/`, `.brain/02_Entities/`, `.brain/05_Risks/`, `01_Discovery/interview_notes/`, `02_Analysis/findings/`, `02_Analysis/gap_analysis/`, `06_Client_Communications/meeting_notes/` for anything that **contradicts the premise or any assumption**. Prefer `gbrain search "<premise> risk OR objection OR however OR but"` if GBrain is installed.
   - **Tier 2 — prior positions**: search for earlier mentions where the engagement leaned the *other* way, or where a stakeholder pushed back. A reversal nobody decided is a red flag.
   - **Tier 3 — central frameworks + instincts**: `${CPS_CENTRAL_BRAIN:-/mnt/d/Obsidian Notes Taken}/06_Frameworks_Library/` and `01_Instincts_Aggregated/` for failure patterns from prior engagements ("MENA ERP consolidations stall on data residency"). Central is read-only.

3. **Build the four attack lines.** For each, cite the specific passage — quote it, don't summarize it away:
   - **Contradicting evidence** — data or testimony in the brain that directly opposes the premise
   - **Unsupported assumptions** — assumptions from step 1 the brain provides *no* support for (absence of support ≠ disproof, but it's a stated weakness)
   - **Ignored constraints** — risks, regulations, contract locks, or stakeholder objections the premise doesn't account for
   - **Counter-position precedent** — prior engagement reasoning (central) where this move failed or backfired

4. **Refuse to fabricate.** If a tier yields nothing, say so. If the **whole** search yields no genuine counter-evidence, report that honestly: *"The engagement brain contains no material contradicting this premise"* — and do **not** manufacture weak objections to look thorough. A clean bill is a valid, valuable result.

5. **Render a verdict** on how well the premise survives:
   - **Holds** — no material counter-evidence; assumptions are supported
   - **Holds with conditions** — survives, but only if specific assumptions (list them) are validated
   - **Weak** — material contradicting evidence or unsupported load-bearing assumptions exist
   State what *additional evidence would settle it* — the test the consultant should run before committing.

## Output

```
## Challenge: "the client should consolidate to a single ERP"

Load-bearing assumptions:
  A1. Business units run compatible-enough processes
  A2. Switching cost < integration benefit over the horizon
  A3. No data-residency / regulatory blocker

Counter-evidence (engagement):
  ✗ A1 contradicted — 02_Analysis/findings/process-maps.md:
      "Manufacturing and Trading run fundamentally different order-to-cash flows."
  ⚠ A2 unsupported — no switching-cost estimate exists in the brain. The 30%
      benefit figure (D004 draft) has no offsetting cost analysis.
  ✗ A3 contradicted — .brain/05_Risks/data-residency.md:
      "KSA entity data cannot leave-region; current ERP is EU-hosted."

Prior position (reversal flag):
  06_Client_Communications/meeting_notes/kickoff.md:
      "Client explicitly scoped OUT a full ERP replacement." — the single-ERP
      recommendation reverses kickoff scope with no recorded decision.

Central precedent:
  central/01_Instincts_Aggregated/erp-consolidation.md:
      "2 of 3 prior GCC ERP consolidations stalled on data residency."

Verdict:  WEAK
  Two load-bearing assumptions are contradicted by engagement evidence, and the
  benefit case has no cost counterweight. Recommend re-scoping to a federated /
  2-instance model, OR validating A1–A3 before this goes to the client.

Would settle it:  a switching-cost estimate (A2) and a legal read on KSA
  data residency under a single-instance design (A3).
```

## Quality criteria

- Every attack line **quotes a specific brain passage** with its path — no free-floating skepticism.
- Distinguishes *contradicted* (evidence opposes it) from *unsupported* (no evidence either way) — they are different verdicts and must not be conflated.
- **Refuses to fabricate**: when the brain holds no counter-evidence, says so rather than inventing objections.
- Flags any **silent reversal** of a prior recorded position or scope.
- Verdict names the specific assumptions that, if validated, would change it.
- Read-only on both engagement and central brains — no writes ever.

## Output destination

Read-only — prints to stdout. To attach as a pre-mortem in the deliverable's review trail, copy into `02_Analysis/findings/challenge_<premise-slug>_<date>.md`.

## Related

- `/omega:fact-check [<path>]` — verify the *claims* in a deliverable (this challenges the *premise*)
- `/omega:trace <theme>` — see how the premise evolved; a silent reversal often shows here
- `/omega:decision-frameworks` — once challenged, structure the options/decision cleanly
- `/omega:gbrain query "objections to <premise>"` — interactive hybrid retrieval for counter-evidence
