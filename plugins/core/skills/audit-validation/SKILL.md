---
name: audit-validation
description: Validate deliverables against acceptance criteria and quality standards
---

# Audit Validation Skill

## Purpose

Validates all ADABIYA project files against the Agent Correction Reference (source of truth) to ensure consistency and catch errors before submission.

## When to Use

- **MANDATORY** at end of every session (integrated with session-end)
- After generating or modifying ANY deliverable file
- Before marking any correction task as complete
- As part of Phase 8 final validation

## Source of Truth

The authoritative reference is:
`02_Analysis/findings/ADABIYA_Agent_Correction_Reference.md`

## Validation Checks

### 1. Parameter Validation

Verify all files match these LOCKED values:

| Parameter | Correct Value |
|-----------|---------------|
| Total CAPEX | $313M |
| Equity | $93.9M (30%) |
| Debt | $219.1M (70%) |
| Interest Rate | 11.3% (LIBOR+6%) |
| Loan Tenor | 10 years |
| Storage Capacity | 300,000 m³ |
| Loading Arms | 2 units, 10 inch |
| Pump Capacity | 1,000 m³/hr each |
| Design Vessel | 120,000 DWT (LR2) |
| Berth Length | 787m |
| Terminal Area | 168,600 m² |
| Water Depth | 14m/17m |
| Pipeline Diameter | 20 inch |
| Construction Duration | 29 months |
| Contingency | $18M |
| Crude Tariff | $14.00/ton |
| Dry Bulk/Gen Cargo Tariff | $6.00/ton |
| Y5 Revenue (stabilized) | $77.5M |

### 2. Search-and-Destroy Validation

Run automated search for these WRONG values (should find 0 hits):

```
350,000 m³, 500,000 m³, 700,000 m³, 190,800 m³, 1,200,000 bbl
150,000 DWT, 160,000 DWT, VLCC, Suezmax
6 units loading, 4 units loading, 3 units loading
16 inch (arms), 16", DN 400
5,000 m³/hr, 3,500 m³/hr (pumps)
12,000 m³/hr, 22,000 bbl/hr (flow)
600m (berth), -16m CD, -15m CD
42 inch, 36 inch, 30 inch (pipeline)
36 months (construction)
Q4 2027 (COD)
$21.9M contingency, $8.5M contingency
28 MTPA, 42 MTPA
Class 4 (AACE), MOPMR
$199.5M (debt), 7.8% (interest), 15 years (tenor), $85.5M (equity)
```

### 3. KPI Consistency Check

Verify identical KPIs across all documents:
- Project IRR
- Equity IRR
- NPV @ 11.5%
- Min DSCR
- Avg DSCR
- Payback Period

## Execution

Run the audit script:
```bash
python scripts/audit_against_reference.py
```

## Output

Generates:
1. `02_Analysis/findings/AUDIT_RESULTS_[timestamp].json` - detailed results
2. Console summary with PASS/FAIL status
3. List of violations requiring correction

## Integration with Session-End

This skill is called automatically by session-end hook. If critical violations are found:
1. Session cannot be marked complete
2. Violations are logged to engagement_progress.md
3. Next session priority is set to fix violations

## Severity Levels

| Level | Definition | Action |
|-------|------------|--------|
| CRITICAL | Wrong value in client-facing document | BLOCK session completion |
| HIGH | Inconsistent KPIs between documents | WARN, log for next session |
| MEDIUM | Missing required data point | LOG, continue |
| LOW | Terminology/cosmetic issue | LOG only |
