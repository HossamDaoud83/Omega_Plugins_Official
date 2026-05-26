---
description: Run discrete scenario analysis (Base / Upside / Downside / Stress)
allowed-tools: Bash, Read, Write
---

# /omega-fin:scenarios

Discrete case comparison for board / investment-committee presentations.

## Steps

1. Confirm `scenarios` dict in `plugins/finance/scripts/config.py` reflects the agreed cases. Each scenario is a multiplier set on the base case parameters.
2. Run:
   ```bash
   python plugins/finance/scripts/scenario_analysis.py
   ```
3. Verify:
   - `charts/sensitivity/scenario_comparison.png`
   - `charts/sensitivity/npv_waterfall.png`
4. Report Base/Upside/Downside/Stress NPV and minimum DSCR side-by-side.

## Standard scenario definitions

| Scenario | CAPEX | Tariff | Throughput | Comments |
|---|---|---|---|---|
| Base | 1.00 | 1.00 | 1.00 | DCF model output |
| Upside | 0.95 | 1.10 | 1.05 | Favorable construction + market |
| Downside | 1.10 | 0.90 | 0.90 | Cost overrun + soft demand |
| Stress | 1.20 | 0.80 | 0.85 | Bankability stress test |

## Quality criteria

- [ ] Scenarios are MECE (no double-counting)
- [ ] Stress case aligns with lender requirements
- [ ] Waterfall chart explains NPV bridge per scenario
