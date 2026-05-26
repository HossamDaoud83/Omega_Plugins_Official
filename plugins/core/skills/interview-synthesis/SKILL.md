---
name: interview-synthesis
description: Code qualitative interview transcripts into themes with evidence, then ladder up to insights and decisions.
---

# Interview Synthesis

## When to use
After conducting 5+ stakeholder interviews. Synthesizes raw transcripts into structured insights tied to specific evidence.

## The synthesis ladder

```
Decisions       ← what should we DO
    ↑
Insights        ← what does this MEAN
    ↑
Themes          ← what KEEPS COMING UP
    ↑
Codes           ← which CONCEPTS appear in this passage
    ↑
Quotes          ← what was actually SAID
```

Always work bottom-up; never invent insights then back-fill quotes.

## Process (one-pass)

1. **Anonymize transcripts.** Replace names with role identifiers (CFO-1, Ops-Mgr-3). Keep a private name↔code key.
2. **Open coding.** Read each transcript; tag passages with concept codes. Don't pre-define a code list — let it emerge.
3. **Axial coding.** After all transcripts coded, group related codes into themes. Aim for 8-15 themes total.
4. **Frequency table.** For each theme: who said it (count + roles), what's the variance, is it consistent?
5. **Insight statements.** For each theme, write a 1-sentence insight: "[Population] believes [statement] because [reason]."
6. **Evidence ladder.** For each insight, show 2-3 verbatim quotes (with attribution code) that support it.
7. **Decision implications.** What should the program team DO based on this insight?

## Output format

| Theme | Frequency | Insight | Evidence | Implication |
|---|---|---|---|---|
| Slow approvals | 9 of 12 | Approval cycles routinely take >3 weeks because finance and legal review serially | "We waited 4 weeks just to get a vendor approved" — Ops-Mgr-3, "Legal sees it after finance, never in parallel" — CFO-1 | Recommend parallel review workflow |

## Coding hygiene

- One concept per code (atomic)
- Define each code in a codebook so a second coder could replicate
- Track code changes — don't rename mid-project without documentation
- Capture dissenting voices, not just majority view

## Inter-coder reliability (when stakes are high)

If the synthesis will drive a major decision, have a second consultant independently code 20% of transcripts. Compute agreement (Cohen's kappa target ≥0.6). Discuss disagreements; refine codebook; re-code if needed.

## Quality bar

- Every insight has ≥2 quotes from ≥2 different roles
- Frequency disclosed for every insight (e.g., "9 of 12 interviewees")
- Dissenting views captured separately, not buried
- Quotes are verbatim or clearly marked as paraphrased
- Names anonymized in any client-facing output

## Common failure modes

- "Everyone said X" without count (probably 2 of 12)
- Insights without quotes — back-filled, not grounded
- One charismatic interviewee dominating the synthesis
- Skipping the codebook step — undermines reproducibility
- Mixing interview synthesis with consultant opinion (separate sections)

## Integration

- Input: `workshop-facilitation` outputs and recorded interviews stored in engagement brain
- Output: structured synthesis lands in engagement deliverable; quotes feed personas via `omega-ai-personas` if installed
- Pair with `survey-design` for triangulated mixed-methods (interviews + survey)
