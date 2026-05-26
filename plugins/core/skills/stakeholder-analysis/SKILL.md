---
name: stakeholder-analysis
description: Map stakeholders by power, interest, and stance. Build engagement plans, RACI, and influence networks.
---

# Stakeholder Analysis

## When to use
At the start of any engagement; refresh whenever the stakeholder set changes (new sponsor, M&A, reorg).

## Power / Interest grid

The standard 2x2:

| | Low interest | High interest |
|---|---|---|
| **High power** | Keep satisfied (executive briefings) | Manage closely (intensive engagement) |
| **Low power** | Monitor (low-effort updates) | Keep informed (regular updates) |

For each stakeholder, plot once, then revisit monthly — power and interest both shift.

## Stance dimension (third axis)

Beyond power/interest, classify each stakeholder's stance:
- **Champion** (drives + advocates)
- **Supporter** (positive, low effort to maintain)
- **Neutral** (no strong view)
- **Skeptic** (concerns, addressable)
- **Blocker** (active opposition)

The blocker matters most. A high-power blocker derails programs faster than missing budget.

## RACI for engagement decisions

| Decision type | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Scope change | Eng. lead | Sponsor | Steerco | All hands |
| Vendor selection | Procurement lead | CFO | Eng. lead, IT | Steerco |
| Go-live cutover | Program manager | Sponsor | Ops, IT, business owners | All staff |

Build a RACI for the top 5-10 decision types of the engagement; not for every micro-decision.

## Influence network mapping

Beyond the org chart, map informal influence:
- Who do people CC when they want a decision moved?
- Who blocks decisions even when the org chart says they shouldn't?
- Who has the sponsor's ear after hours?

Capture as a directed graph — node = person, edge = "X listens to Y on topic Z".

## Engagement plan template

Per stakeholder (or stakeholder cluster):
- **Current stance:** Champion / Supporter / Neutral / Skeptic / Blocker
- **Target stance:** Where we need them by month X
- **Key concerns:** Top 2-3 issues they care about
- **Engagement cadence:** 1:1 monthly / steerco only / ad-hoc as needed
- **Owner:** Who on the consulting team owns the relationship
- **Watchpoints:** What signals would change the stance

## Quality bar

- Every stakeholder has stance + engagement plan, not just a name in a list
- Blockers have an explicit conversion strategy or escalation path
- The map is refreshed at least monthly
- The map is treated as confidential — never shared client-side

## Common failure modes

- Treating the org chart as the stakeholder map (misses informal influence)
- Ignoring the EA / chief of staff (they often gate access)
- Listing stakeholders without stance — produces a useless inventory
- "Manage closely" applied to everyone (you can't; pick the 3-5 that matter most)

## Integration

- Output stored in engagement `.brain/stakeholder_map.md` (and JSON sidecar if useful)
- Engagement plan referenced by `/omega:session-start` to surface upcoming touchpoints
- Updated post-workshop using `workshop-facilitation` outputs
