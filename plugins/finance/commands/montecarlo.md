---
description: Run Monte Carlo simulation for NPV/IRR/DSCR with P10/P50/P80/P90 bands
allowed-tools: Bash, Read, Write
---

# /omega-fin:montecarlo

Probabilistic distribution analysis. Default 10,000 iterations.

## Steps

1. Confirm `mc_distributions` block in `plugins/finance/scripts/config.py` reflects the agreed uncertainty ranges (CAPEX triangular, tariff normal, throughput triangular, etc.).
2. Run:
   ```bash
   python plugins/finance/scripts/montecarlo_simulation.py
   ```
3. Verify:
   - `charts/sensitivity/montecarlo_npv.png` (histogram)
   - `charts/sensitivity/montecarlo_npv_scurve.png` (cumulative S-curve with P80 marker)
   - `charts/sensitivity/montecarlo_dscr.png`
4. Report P10 / P50 / P80 / P90 NPV and minimum DSCR.

## Banking interpretation

- **P80 NPV** — banks size debt against this; if positive, project is bankable
- **P10 NPV** — downside investors should be prepared for
- **P80 minimum DSCR** — must be ≥ 1.20x for typical lender covenants
- **% of iterations with DSCR < 1.0** — default risk indicator

## Output template

| Metric | P10 | P50 | P80 | P90 |
|---|---|---|---|---|
| NPV (USD M) | … | … | … | … |
| IRR (%) | … | … | … | … |
| Min DSCR (x) | … | … | … | … |
