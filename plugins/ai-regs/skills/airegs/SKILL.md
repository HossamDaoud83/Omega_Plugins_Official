---
name: airegs
description: AI Regulatory Tracking skills — jurisdiction setup, cache refresh, change impact, horizon scan, and more. Apply when the engagement scope includes ai regulatory tracking work or the consultant references regulatory, gazette, circular.
---

# AIREGS — AI Regulatory Tracking

## Capability overview

**Code:** AIREGS
**Full name:** AI Regulatory Tracking
**Description:** AI regulatory tracking — gazette/circular monitoring, freshness gating, jurisdiction tags, change-impact analysis.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Jurisdiction Setup | `/omega-airegs:jurisdiction-setup` | Configure jurisdictions and source feeds (gazettes, regulator circulars, EU OJ). |
| 2 | Cache Refresh | `/omega-airegs:refresh` | Refresh regulatory cache for configured jurisdictions; flag stale entries. |
| 3 | Change Impact | `/omega-airegs:change-impact` | Analyze a regulatory change for client-impact (which controls, deliverables, processes affected). |
| 4 | Horizon Scan | `/omega-airegs:horizon-scan` | Produce 12-month horizon scan of upcoming regulatory changes by jurisdiction. |

---

## Skill 1: Jurisdiction Setup

### Command: `/omega-airegs:jurisdiction-setup`

### Purpose
Configure jurisdictions and source feeds (gazettes, regulator circulars, EU OJ).

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "Industry"
context:
  scope: "in-scope description"
  constraints: ["constraint 1", "constraint 2"]
references:
  - "Prior deliverable / document name"
  - "External benchmark / source"
```

### Methodology

1. **Frame.** Translate client request into a structured problem statement and hypotheses.
2. **Gather.** Pull data from engagement brain, client documents, and external sources.
3. **Analyze.** Apply the Jurisdiction Setup method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Cache freshness < 7 days for active jurisdictions (gazette-freshness hook enforces).

### Output shape
A Omega-branded `Jurisdiction Setup` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Cache freshness < 7 days for active jurisdictions (gazette-freshness hook enforces)
- Every regulation links to its jurisdiction, effective date, and source URL
- Change-impact analysis names specific affected client controls / deliverables

---

## Skill 2: Cache Refresh

### Command: `/omega-airegs:refresh`

### Purpose
Refresh regulatory cache for configured jurisdictions; flag stale entries.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "Industry"
context:
  scope: "in-scope description"
  constraints: ["constraint 1", "constraint 2"]
references:
  - "Prior deliverable / document name"
  - "External benchmark / source"
```

### Methodology

1. **Frame.** Translate client request into a structured problem statement and hypotheses.
2. **Gather.** Pull data from engagement brain, client documents, and external sources.
3. **Analyze.** Apply the Cache Refresh method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Cache freshness < 7 days for active jurisdictions (gazette-freshness hook enforces).

### Output shape
A Omega-branded `Cache Refresh` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Cache freshness < 7 days for active jurisdictions (gazette-freshness hook enforces)
- Every regulation links to its jurisdiction, effective date, and source URL
- Change-impact analysis names specific affected client controls / deliverables

---

## Skill 3: Change Impact

### Command: `/omega-airegs:change-impact`

### Purpose
Analyze a regulatory change for client-impact (which controls, deliverables, processes affected).

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "Industry"
context:
  scope: "in-scope description"
  constraints: ["constraint 1", "constraint 2"]
references:
  - "Prior deliverable / document name"
  - "External benchmark / source"
```

### Methodology

1. **Frame.** Translate client request into a structured problem statement and hypotheses.
2. **Gather.** Pull data from engagement brain, client documents, and external sources.
3. **Analyze.** Apply the Change Impact method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Cache freshness < 7 days for active jurisdictions (gazette-freshness hook enforces).

### Output shape
A Omega-branded `Change Impact` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Cache freshness < 7 days for active jurisdictions (gazette-freshness hook enforces)
- Every regulation links to its jurisdiction, effective date, and source URL
- Change-impact analysis names specific affected client controls / deliverables

---

## Skill 4: Horizon Scan

### Command: `/omega-airegs:horizon-scan`

### Purpose
Produce 12-month horizon scan of upcoming regulatory changes by jurisdiction.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "Industry"
context:
  scope: "in-scope description"
  constraints: ["constraint 1", "constraint 2"]
references:
  - "Prior deliverable / document name"
  - "External benchmark / source"
```

### Methodology

1. **Frame.** Translate client request into a structured problem statement and hypotheses.
2. **Gather.** Pull data from engagement brain, client documents, and external sources.
3. **Analyze.** Apply the Horizon Scan method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Cache freshness < 7 days for active jurisdictions (gazette-freshness hook enforces).

### Output shape
A Omega-branded `Horizon Scan` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Cache freshness < 7 days for active jurisdictions (gazette-freshness hook enforces)
- Every regulation links to its jurisdiction, effective date, and source URL
- Change-impact analysis names specific affected client controls / deliverables

---


## Cross-skill workflows

```
Discovery → /omega-airegs:jurisdiction-setup → /omega-airegs:refresh → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-aig` | AI Act / ISO 42001 regulatory tracking |
| `omega-cyber` | NIS2 / DORA regulatory tracking |
| `omega-esg` | CSRD / SEC climate rule tracking |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-airegs:jurisdiction-setup` | Jurisdiction Setup Report | DOCX/PDF |
| `/omega-airegs:refresh` | Cache Refresh Report | DOCX/PDF |
| `/omega-airegs:change-impact` | Change Impact Report | DOCX/PDF |
| `/omega-airegs:horizon-scan` | Horizon Scan Report | DOCX/PDF |
