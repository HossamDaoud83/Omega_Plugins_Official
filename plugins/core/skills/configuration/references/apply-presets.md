# Apply Presets Command

Load industry and service line specific presets to accelerate engagement setup.

## Trigger
`/project:apply-presets` or during `/project:engagement-setup`

---

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `industry` | Yes | Industry code (HLT, MAR, EDU, GOV, FIN, MFG, RTL, NRG) |
| `service_line` | Yes | Service line code (STR, OPS, DIG, FIN, CHG, AIG, DAT, RSK) |
| `engagement_type` | No | Specific engagement type within service line |

---

## Preset Contents

Each preset includes:
1. Pre-populated deliverables list
2. Standard milestones
3. Typical risks and issues
4. Industry-specific stakeholders
5. Recommended timeline
6. Terminology additions
7. Regulatory checklist items

---

## Industry Presets

### Healthcare (HLT)

**Common Deliverable Sets:**
```
Digital Transformation:
  - D001: Stakeholder Interview Summary
  - D002: Current State Assessment (Clinical + IT)
  - D003: HIPAA Compliance Review
  - D004: EHR Integration Assessment
  - D005: Digital Maturity Assessment
  - D006: Gap Analysis
  - D007: Transformation Roadmap
  - D008: Business Case
  - D009: Change Management Plan

Operations:
  - D001: Process Mapping (Patient Flow)
  - D002: Capacity Analysis
  - D003: Staffing Model Review
  - D004: Lean Assessment
  - D005: Improvement Roadmap
```

**Standard Stakeholders:**
- Chief Medical Officer (CMO)
- Chief Nursing Officer (CNO)
- Chief Information Officer (CIO)
- VP of Operations
- Director of Health Information Management
- Compliance Officer

**Typical Risks:**
- Clinical staff resistance to change
- EHR integration complexity
- HIPAA compliance during transition
- Patient care continuity
- Vendor coordination

**Terminology:**
```json
{
  "patient": "patient",
  "customer": "patient",
  "user": "clinician",
  "transaction": "encounter"
}
```

---

### Maritime (MAR)

**Common Deliverable Sets:**
```
Digital Transformation:
  - D001: Stakeholder Interview Summary
  - D002: Port/Fleet Operations Assessment
  - D003: IMO Compliance Review
  - D004: Technology Landscape Analysis
  - D005: Digital Maturity Assessment
  - D006: Decarbonization Roadmap Analysis
  - D007: Transformation Roadmap
  - D008: Business Case

Operations:
  - D001: Terminal Operations Assessment
  - D002: Berth Utilization Analysis
  - D003: Equipment Productivity Study
  - D004: Safety Management Review (ISM)
  - D005: Improvement Roadmap
```

**Standard Stakeholders:**
- Port Director / CEO
- Terminal Operations Manager
- Harbor Master
- Fleet Director
- Designated Person Ashore (DPA)
- IT Director
- Safety Manager

**Typical Risks:**
- Weather/seasonal operational impacts
- IMO 2020/EEXI compliance timeline
- Legacy system integration
- Multi-stakeholder coordination
- Union/labor considerations

---

### Financial Services (FIN)

**Common Deliverable Sets:**
```
Digital Transformation:
  - D001: Stakeholder Interview Summary
  - D002: Current State Assessment
  - D003: Regulatory Compliance Review
  - D004: Core Banking/Systems Assessment
  - D005: Digital Maturity Assessment
  - D006: Customer Experience Analysis
  - D007: Transformation Roadmap
  - D008: Business Case
  - D009: Regulatory Change Management Plan

Risk & Compliance:
  - D001: Risk Assessment
  - D002: Control Environment Review
  - D003: Regulatory Gap Analysis
  - D004: BSA/AML Program Assessment
  - D005: Remediation Roadmap
```

**Standard Stakeholders:**
- Chief Risk Officer (CRO)
- Chief Compliance Officer (CCO)
- Chief Information Security Officer (CISO)
- Head of Operations
- Head of Technology
- Business Line Leaders

**Typical Risks:**
- Regulatory examination timing
- Data security/privacy
- Third-party vendor risk
- Business continuity during transition
- MRA/MRIA remediation deadlines

---

### Government (GOV)

**Common Deliverable Sets:**
```
Digital Transformation:
  - D001: Stakeholder Interview Summary
  - D002: Current State Assessment
  - D003: FedRAMP/StateRAMP Compliance Review
  - D004: Legacy System Assessment
  - D005: Digital Service Maturity Assessment
  - D006: Citizen Experience Analysis
  - D007: Modernization Roadmap
  - D008: Business Case (OMB format)
  - D009: Change Management Plan

Operations:
  - D001: Process Assessment
  - D002: Service Delivery Analysis
  - D003: Performance Metrics Review
  - D004: Improvement Roadmap
```

**Standard Stakeholders:**
- Agency Head / Secretary
- Deputy Secretary
- Chief Information Officer (CIO)
- Chief Financial Officer (CFO)
- Chief Data Officer (CDO)
- Program Directors
- Procurement Officer

**Typical Risks:**
- Budget cycle constraints
- Procurement timeline
- Political/leadership changes
- Union considerations
- Section 508 compliance

---

## Service Line Presets

### Strategy (STR)
```
Standard Deliverables:
  - Market Analysis
  - Competitive Assessment
  - Strategic Options
  - Business Case
  - Implementation Roadmap

Typical Duration: 8-12 weeks
Standard Milestones:
  - M01: Discovery Complete (Week 2)
  - M02: Analysis Complete (Week 5)
  - M03: Options Presented (Week 8)
  - M04: Strategy Approved (Week 10)
```

### Operations (OPS)
```
Standard Deliverables:
  - Current State Process Maps
  - Baseline Metrics
  - Gap Analysis
  - Future State Design
  - Improvement Roadmap

Typical Duration: 10-14 weeks
Standard Milestones:
  - M01: Current State Complete (Week 3)
  - M02: Analysis Complete (Week 6)
  - M03: Future State Approved (Week 10)
  - M04: Roadmap Delivered (Week 12)
```

### Digital Transformation (DIG)
```
Standard Deliverables:
  - Digital Maturity Assessment
  - Technology Landscape
  - Gap Analysis
  - Architecture Vision
  - Transformation Roadmap
  - Business Case

Typical Duration: 12-16 weeks
Standard Milestones:
  - M01: Discovery Complete (Week 4)
  - M02: Assessment Complete (Week 8)
  - M03: Recommendations Approved (Week 12)
  - M04: Roadmap Delivered (Week 14)
```

---

## Execution

### Step 1: Select Presets
```
/project:apply-presets industry=HLT service_line=DIG
```

### Step 2: Load Configuration
```
Read preset file for industry + service_line combination
Merge with base deliverables_tracker.json
```

### Step 3: Customize
```
Prompt for engagement-specific adjustments:
- Add/remove deliverables
- Adjust timelines
- Modify stakeholder list
- Update terminology
```

### Step 4: Apply
```
Update:
- deliverables_tracker.json
- project.json
- stakeholder_map.md
- risk_register.md
- client_profile.json
```

---

## Output

```
═══════════════════════════════════════════════════════════════
INDUSTRY PRESETS APPLIED
═══════════════════════════════════════════════════════════════

Industry: Healthcare (HLT)
Service Line: Digital Transformation (DIG)

DELIVERABLES LOADED: 9
├── D001: Stakeholder Interview Summary
├── D002: Current State Assessment
├── D003: HIPAA Compliance Review
├── D004: EHR Integration Assessment
├── D005: Digital Maturity Assessment
├── D006: Gap Analysis
├── D007: Transformation Roadmap
├── D008: Business Case
└── D009: Change Management Plan

MILESTONES SET: 4
├── M01: Discovery Complete (Week 4)
├── M02: Assessment Complete (Week 8)
├── M03: Recommendations Approved (Week 12)
└── M04: Final Delivery (Week 14)

STAKEHOLDERS ADDED: 6
RISKS LOADED: 5
TERMINOLOGY UPDATED: 4 terms

Customize? (yes/no)
═══════════════════════════════════════════════════════════════
```
