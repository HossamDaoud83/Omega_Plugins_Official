---
description: Run break-even analysis — identify thresholds where NPV = 0 or DSCR breaches covenant
allowed-tools: Bash, Read, Write
---

# /omega-fin:breakeven

Threshold identification for risk tolerance discussions.

## Steps

1. Verify base case parameters in `plugins/finance/scripts/config.py`.
2. Run:
   ```bash
   python plugins/finance/scripts/breakeven_analysis.py
   ```
3. Verify:
   - `charts/sensitivity/breakeven_headroom.png`
4. Report headroom % to:
   - NPV = 0 (project equity break-even)
   - DSCR = 1.20x (lender covenant breach)
   - DSCR = 1.0x (default trigger)

## Output template

| Variable | Base case | Break-even (NPV=0) | Headroom % | Break-even (DSCR=1.20x) | Headroom % |
|---|---|---|---|---|---|
| Tariff (USD/t) | 9.70 | 7.20 | 26 % | 8.10 | 16 % |
| Throughput (mta) | 8.0 | 6.1 | 24 % | 6.8 | 15 % |
| CAPEX (USD M) | 280 | 365 | 30 % | 320 | 14 % |

## Banking interpretation

- **>= 20 % headroom** — comfortable, low default risk
- **10 – 20 % headroom** — acceptable, monitor carefully
- **< 10 % headroom** — fragile, requires mitigation (insurance, contingency, contract terms)
