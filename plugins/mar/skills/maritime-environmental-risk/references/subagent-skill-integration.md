# Maritime Environmental Risk: Subagent + Skill Integration

## How They Work Together

### Subagent (Automatic Background Expertise)
**File:** `.claude/subagents/industries/maritime-environmental-risk.md`

**Activates When:**
- `service_line: "MAR"` in project.json
- `industry: "Maritime"` in project.json
- Keywords detected: environmental impact, MARPOL, marine pollution, etc.

**Provides:**
- Deep domain knowledge (regulations, standards, methodologies)
- Technical expertise (IMO conventions, EPA regulations, EU directives)
- Industry best practices and frameworks
- Quality standards and compliance requirements

**Role:** Always-on expert consultant that informs all work

---

### Skill (Executable Workflow)
**File:** `.claude/skills/maritime-environmental-risk/SKILL.md`

**Invoked By:**
- User types: `/maritime-environmental-risk`
- Explicitly when needed for environmental assessment

**Provides:**
- Step-by-step EIA execution workflow
- Deliverable templates and structures
- Quality checklists
- Output specifications

**Role:** Structured procedure to execute environmental risk assessment

---

## Example Workflow

### Scenario: Port Expansion Project - Environmental Impact Assessment

**1. Engagement Setup**
```json
{
  "service_line": "MAR",
  "industry": "Maritime",
  "engagement_type": "Environmental Impact Assessment"
}
```
→ **Maritime Environmental Risk Subagent ACTIVATES automatically**

**2. Discovery Phase**
- Agent has access to subagent expertise for:
  - Understanding MARPOL requirements
  - Identifying applicable regulations
  - Knowing baseline data requirements

**3. Analysis Phase**
- User invokes: `/maritime-environmental-risk`
- Skill provides structured workflow:
  - Step 1: Project Scoping
  - Step 2: Regulatory Framework Analysis
  - Step 3: Baseline Assessment
  - ...
- **Subagent knowledge informs each step:**
  - Which MARPOL annexes apply?
  - What are the discharge standards?
  - What monitoring is required?

**4. Output**
- Skill defines deliverable structure (EIA Report format)
- Subagent provides technical content (regulations, standards, best practices)
- Result: Comprehensive, technically sound EIA

---

## When to Use Each

### Use Subagent Knowledge (Automatically Available)
- Understanding maritime environmental regulations
- Knowing IMO convention requirements
- Interpreting MARPOL discharge standards
- Identifying monitoring requirements
- Understanding compliance frameworks

### Invoke Skill (Manual Command)
- Starting a formal Environmental Impact Assessment
- Need structured workflow for EIA execution
- Creating Environmental Management Plan
- Developing SPCC or SOPEP plans
- Want quality checklist and deliverable templates

---

## Benefits of Dual Approach

✅ **Subagent = Expert Always At Your Side**
- No need to memorize regulations
- Automatic expertise on all maritime environmental topics
- Informs all deliverables, not just formal assessments

✅ **Skill = Structured Execution**
- Clear workflow reduces risk of missing steps
- Ensures consistent deliverable quality
- Provides templates and checklists

✅ **Together = Comprehensive Capability**
- Expert knowledge + Structured execution = High-quality deliverables
- Faster execution (don't have to research from scratch)
- Better compliance (regulations built into workflow)

---

## Other Maritime Subagents/Skills

**Related Subagents:**
- `.claude/subagents/industries/maritime.md` - General maritime expertise
- `.claude/subagents/service-lines/iso-certification.md` - For ISO 14001 EMS

**Related Skills:**
- `/risk-assessment` - General risk register updates
- `/verify-quality` - Quality gate checks
- `/document-generation` - Create branded EIA reports

**Specialized Skills (Could Create):**
- `/spcc-plan` - Generate SPCC plan
- `/ballast-water-assessment` - BWM compliance check
- `/carbon-footprint` - Maritime GHG inventory
