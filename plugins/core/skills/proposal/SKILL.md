---
name: proposal
description: Generate client proposals with scope, deliverables, timeline, and fees
---

# Omega Proposal Generator

Generate professional client proposals with scope, deliverables, timeline, fees, and terms.

## Skill Metadata

- **Name:** Omega Proposal Generator
- **Command:** `/proposal`
- **Category:** Business Development
- **Version:** 1.0
- **Author:** Omega Business Consulting

---

## What This Skill Does

1. Generates complete client proposals from engagement parameters
2. Integrates with `/omega-budget` for accurate fee calculations
3. Applies Omega branding and professional formatting
4. Produces multiple output formats (DOCX, PDF, PPTX)
5. Tracks proposal status and win/loss analytics

---

## When to Use

- New client engagement opportunity
- Scope expansion for existing client
- Competitive bid response
- RFP/RFI response

---

## Instructions for Claude

When `/proposal` is invoked:

### Step 1: Gather Proposal Information

Collect or ask for:

| Parameter | Required | Example |
|-----------|----------|---------|
| Client Name | Yes | "International Ceramics Manufacturing Company" |
| Proposal Title | Yes | "AI Governance Implementation Proposal" |
| Service Line | Yes | AIG, DIG, MAR, etc. |
| Project Value (if known) | No | $50,000,000 |
| Duration | Yes | 8 weeks |
| Key Deliverables | Yes | List of 3-7 deliverables |
| Client Contact | Yes | Name, title, email |
| Proposal Due Date | No | 2026-02-15 |
| Competitive Situation | No | Sole source / Competitive bid |

### Step 2: Run Fee Calculation

Invoke `/omega-budget` internally to calculate recommended fees:

```
Fee Range:
  Conservative: $[X]
  Recommended:  $[Y]  ← Use this
  Premium:      $[Z]
```

### Step 3: Generate Proposal Structure

---

## Proposal Template

### Cover Page

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                              [Omega LOGO]                                     │
│                                                                             │
│                                                                             │
│                                                                             │
│                         ═════════════════════                               │
│                                                                             │
│                         [PROPOSAL TITLE]                                    │
│                                                                             │
│                         ═════════════════════                               │
│                                                                             │
│                                                                             │
│                                                                             │
│                         Prepared for:                                       │
│                         [CLIENT NAME]                                       │
│                                                                             │
│                                                                             │
│                         Prepared by:                                        │
│                         Omega Consulting                                │
│                         [Date]                                              │
│                                                                             │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  CONFIDENTIAL - For addressee only                                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Section 1: Executive Summary (1 page)

```markdown
# Executive Summary

## The Opportunity
[2-3 sentences describing the client's challenge/opportunity]

## Our Understanding
[2-3 sentences showing we understand their needs]

## Proposed Solution
[2-3 sentences describing our approach]

## Key Benefits
• [Benefit 1 - quantified if possible]
• [Benefit 2 - quantified if possible]
• [Benefit 3 - quantified if possible]

## Investment Summary
| Item | Amount |
|------|--------|
| Professional Fees | $[X] |
| Expenses (estimated) | $[Y] |
| **Total Investment** | **$[Z]** |

## Timeline
[Duration] weeks, starting [Start Date]

## Why Omega
[2-3 sentences on Omega differentiators]
```

### Section 2: Understanding Your Needs (1-2 pages)

```markdown
# Understanding Your Needs

## Background
[Client context, industry, current situation]

## Challenges
[Specific challenges the client faces]
1. [Challenge 1]
2. [Challenge 2]
3. [Challenge 3]

## Objectives
[What success looks like for the client]
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

## Constraints & Considerations
[Any constraints mentioned by the client]
- [Constraint 1]
- [Constraint 2]
```

### Section 3: Proposed Approach (2-3 pages)

```markdown
# Proposed Approach

## Methodology
[Overview of the approach/framework we'll use]

## Phases

### Phase 1: [Phase Name] (Week 1-2)
**Objective:** [What we'll achieve]

**Activities:**
- [Activity 1]
- [Activity 2]
- [Activity 3]

**Deliverables:**
- [Deliverable 1]
- [Deliverable 2]

**Milestone:** [Phase completion criteria]

---

### Phase 2: [Phase Name] (Week 3-4)
[Same structure as Phase 1]

---

### Phase 3: [Phase Name] (Week 5-6)
[Same structure as Phase 1]

---

## Deliverables Summary

| # | Deliverable | Format | Phase |
|---|-------------|--------|-------|
| 1 | [Name] | [DOCX/XLSX/PPTX] | Phase 1 |
| 2 | [Name] | [DOCX/XLSX/PPTX] | Phase 1 |
| 3 | [Name] | [DOCX/XLSX/PPTX] | Phase 2 |
| 4 | [Name] | [DOCX/XLSX/PPTX] | Phase 2 |
| 5 | [Name] | [DOCX/XLSX/PPTX] | Phase 3 |
```

### Section 4: Project Timeline (1 page)

```markdown
# Project Timeline

## Gantt Chart Overview

| Week | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|------|---|---|---|---|---|---|---|---|
| Phase 1: Discovery | ██ | ██ |   |   |   |   |   |   |
| Phase 2: Analysis |   |   | ██ | ██ | ██ |   |   |   |
| Phase 3: Recommendations |   |   |   |   |   | ██ | ██ |   |
| Phase 4: Implementation |   |   |   |   |   |   |   | ██ |

## Key Milestones

| Milestone | Target Date | Deliverables |
|-----------|-------------|--------------|
| Kickoff | Week 1 | Project Charter |
| Discovery Complete | Week 2 | Assessment Report |
| Analysis Complete | Week 5 | Analysis Report, Financial Model |
| Final Presentation | Week 7 | Recommendations Report |
| Project Close | Week 8 | All deliverables |

## Dependencies & Assumptions
- Client provides access to [data/systems/stakeholders]
- Key stakeholders available for [X] hours/week
- [Other assumptions]
```

### Section 5: Investment (1-2 pages)

```markdown
# Investment

## Fee Structure

### Option A: Fixed Fee (Recommended)

| Phase | Deliverables | Fee | Payment Trigger |
|-------|--------------|-----|-----------------|
| Phase 1 | D001, D002 | $[X] | Completion |
| Phase 2 | D003, D004 | $[Y] | Completion |
| Phase 3 | D005, D006 | $[Z] | Completion |
| **Total** | | **$[TOTAL]** | |

### Option B: Fixed + Success Fee

| Component | Amount |
|-----------|--------|
| Base Fee | $[X] |
| Success Fee (if [condition]) | [Y]% of [basis] |
| **Total Potential** | **$[Z]** |

## Fee Breakdown

| Category | Details | Amount |
|----------|---------|--------|
| Professional Fees | [X] hours × blended rate | $[A] |
| Subject Matter Experts | [Y] hours × rate | $[B] |
| Project Management | Included | $0 |
| **Subtotal** | | **$[C]** |
| Expenses (estimated) | Travel, materials | $[D] |
| **Total Investment** | | **$[E]** |

## Payment Schedule

| Milestone | % | Amount | Due |
|-----------|---|--------|-----|
| Kickoff | 25% | $[X] | Upon contract signing |
| Phase 1 Complete | 25% | $[Y] | [Date/Milestone] |
| Phase 2 Complete | 25% | $[Z] | [Date/Milestone] |
| Final Delivery | 25% | $[W] | [Date/Milestone] |
| **Total** | **100%** | **$[TOTAL]** | |

## What's Included
- All deliverables listed in Section 3
- Weekly status meetings
- Email/phone support during engagement
- One round of revisions per deliverable
- Final presentation to stakeholders

## What's Not Included
- Travel expenses (billed at cost)
- Third-party software/licenses
- Implementation beyond recommendations
- Additional scope (quoted separately)

## Payment Terms
- Net 30 days from invoice date
- All fees in USD
- Expenses billed at cost with receipts
```

### Section 6: Why Omega (1 page)

```markdown
# Why Omega Consulting

## Our Expertise

### [Service Line] Specialists
[2-3 sentences about Omega expertise in this area]

### Relevant Experience
| Client | Industry | Project | Outcome |
|--------|----------|---------|---------|
| [Client 1] | [Industry] | [Project] | [Outcome] |
| [Client 2] | [Industry] | [Project] | [Outcome] |
| [Client 3] | [Industry] | [Project] | [Outcome] |

## Our Differentiators

### 1. [Differentiator 1]
[Brief explanation]

### 2. [Differentiator 2]
[Brief explanation]

### 3. [Differentiator 3]
[Brief explanation]

## Proposed Team

| Role | Name | Qualifications |
|------|------|----------------|
| Engagement Lead | [Name] | [Brief bio] |
| Senior Consultant | [Name] | [Brief bio] |
| Subject Matter Expert | [Name] | [Brief bio] |

## Client References
Available upon request.
```

### Section 7: Terms & Conditions (1 page)

```markdown
# Terms & Conditions

## Engagement Terms

1. **Scope:** Limited to services described in this proposal
2. **Changes:** Scope changes require written approval and may affect fees
3. **Confidentiality:** Both parties agree to maintain confidentiality
4. **Intellectual Property:** Deliverables become client property upon payment

## Proposal Validity
This proposal is valid for **30 days** from the date of issue.

## Acceptance
To proceed, please sign below and return a copy to Omega.

---

## Acceptance

**AGREED AND ACCEPTED:**

**Client: [CLIENT NAME]**

Signature: _________________________

Name: _________________________

Title: _________________________

Date: _________________________

---

**Omega Consulting**

Signature: _________________________

Name: _________________________

Title: _________________________

Date: _________________________
```

### Section 8: Appendices (as needed)

```markdown
# Appendices

## Appendix A: Detailed Methodology
[Extended methodology description if needed]

## Appendix B: Team Biographies
[Full bios of team members]

## Appendix C: Sample Deliverables
[Examples of similar deliverables from past projects]

## Appendix D: Client Testimonials
[Quotes from satisfied clients]

## Appendix E: Company Overview
[Omega company information, certifications, etc.]
```

---

## Step 4: Generate Outputs

### Output Formats

| Format | Use Case | File |
|--------|----------|------|
| DOCX | Editable, for collaboration | `[Client]_Proposal_[Date].docx` |
| PDF | Final submission, professional | `[Client]_Proposal_[Date].pdf` |
| PPTX | Presentation/walkthrough | `[Client]_Proposal_Presentation_[Date].pptx` |

### Output Location
```
06_Client_Communications/proposals/[Client]_Proposal_[Date]/
├── [Client]_Proposal_[Date].docx
├── [Client]_Proposal_[Date].pdf
├── [Client]_Proposal_Presentation_[Date].pptx
└── proposal_metadata.json
```

### Proposal Metadata

```json
{
  "proposal_id": "PROP-2026-001",
  "client": "[Client Name]",
  "title": "[Proposal Title]",
  "service_line": "[CODE]",
  "created_date": "2026-02-02",
  "valid_until": "2026-03-04",
  "status": "draft|submitted|won|lost",
  "fee_proposed": 85000,
  "fee_range": {
    "low": 65000,
    "recommended": 85000,
    "high": 115000
  },
  "duration_weeks": 8,
  "deliverables_count": 7,
  "competitive_situation": "sole_source|competitive",
  "decision_date": null,
  "outcome": null,
  "win_loss_reason": null
}
```

---

## Step 5: Display Proposal Summary

```
═══════════════════════════════════════════════════════════════════════════════
PROPOSAL GENERATED SUCCESSFULLY
═══════════════════════════════════════════════════════════════════════════════

Proposal ID:      PROP-2026-001
Client:           [Client Name]
Title:            [Proposal Title]
Service Line:     [CODE] - [Service Line Name]

─────────────────────────────────────────────────────────────────────────────
INVESTMENT SUMMARY
─────────────────────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────────────────────┐
│ Professional Fees:          $[X]                                            │
│ Expenses (estimated):       $[Y]                                            │
│ ─────────────────────────────────────────────────────────────────────────── │
│ TOTAL INVESTMENT:           $[Z]                                            │
│                                                                             │
│ Fee as % of Project Value:  [X]%                                            │
│ Duration:                   [N] weeks                                       │
│ Deliverables:               [N] items                                       │
└─────────────────────────────────────────────────────────────────────────────┘

─────────────────────────────────────────────────────────────────────────────
OUTPUT FILES
─────────────────────────────────────────────────────────────────────────────

✅ [Client]_Proposal_[Date].docx        → Editable version
✅ [Client]_Proposal_[Date].pdf         → Final submission
✅ [Client]_Proposal_Presentation.pptx  → Client presentation

Location: 06_Client_Communications/proposals/[Client]_[Date]/

─────────────────────────────────────────────────────────────────────────────
NEXT STEPS
─────────────────────────────────────────────────────────────────────────────

1. Review and customize proposal content
2. Add team biographies and relevant experience
3. Get internal approval (Partner sign-off)
4. Submit to client by [Due Date]
5. Schedule follow-up call

Proposal Valid Until: [Date + 30 days]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Proposal Types

| Type | Sections Included | Length |
|------|-------------------|--------|
| **Express** | Cover, Summary, Approach, Investment, Terms | 5-7 pages |
| **Standard** | All sections | 10-15 pages |
| **Comprehensive** | All sections + detailed appendices | 20-30 pages |
| **RFP Response** | Follows RFP structure + Omega content | Variable |

---

## Service Line Proposal Templates

| Service Line | Key Sections to Emphasize |
|--------------|---------------------------|
| DIG | Digital maturity, roadmap, change management |
| AIG | ISO 42001, AI risks, governance framework |
| AAI | Automation opportunities, ROI, agent design |
| COE | KPIs, dashboard, data architecture |
| ESI | Integration approach, APIs, migration plan |
| EDU | Accreditation, student outcomes, LMS |
| HLT | HIPAA, HL7/FHIR, clinical workflows |
| GOV | E-government, citizen services, compliance |
| STR | Market analysis, strategy, financial model |
| MAR | Port operations, IMO compliance, feasibility |
| ISO | Gap analysis, audit prep, management system |

---

## Integration with Other Skills

| Skill | Integration |
|-------|-------------|
| `/omega-budget` | Auto-calculate fees for proposal |
| `/doc-gen` | Generate formatted proposal documents |
| `/engagement-setup` | Initialize engagement if proposal accepted |
| `/client-comm` | Follow-up communications |

---

## Proposal Analytics (Future)

Track win/loss metrics:
- Win rate by service line
- Average deal size
- Days to close
- Common loss reasons
- Competitive win rate

---

*Skill Version: 1.0*
*Last Updated: 2026-02-02*
