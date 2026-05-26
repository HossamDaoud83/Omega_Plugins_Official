# Maritime Port Operations: Subagent + Skill Integration

## How They Work Together

### Subagent (Automatic Background Expertise)
**File:** `.claude/subagents/industries/maritime-port-operations.md`

**Activates When:**
- `service_line: "MAR"` in project.json
- `industry: "Maritime"` in project.json
- `engagement_type` contains: "Port Operations" OR "Terminal Optimization" OR "Port Expansion" OR "Cargo Handling"
- Keywords detected: port efficiency, terminal operations, vessel turnaround, berth productivity, cargo throughput

**Provides:**
- Deep domain knowledge (port types, equipment, operations)
- Technical expertise (KPIs, benchmarks, best practices)
- Industry standards and regulations (IMO, ISPS, environmental)
- Technology trends (automation, digitalization)
- Equipment specifications and capabilities

**Role:** Always-on expert consultant that informs all port operations work

---

### Skill (Executable Workflow)
**File:** `.claude/skills/maritime-port-operations/SKILL.md`

**Invoked By:**
- User types: `/maritime-port-operations`
- Explicitly when needed for port operations assessment or optimization

**Provides:**
- 10-step structured assessment workflow
- Data collection templates
- KPI calculation frameworks
- Benchmarking methodology
- Business case templates
- Implementation roadmap structure

**Role:** Structured procedure to execute port operations assessment and optimization

---

## Example Workflow

### Scenario: Container Terminal Efficiency Assessment

**1. Engagement Setup**
```json
{
  "service_line": "MAR",
  "industry": "Maritime",
  "engagement_type": "Port Operations"
}
```
→ **Maritime Port Operations Subagent ACTIVATES automatically**

**2. Discovery Phase**
- Agent has access to subagent expertise for:
  - Understanding container terminal KPIs (GMPH, NMPH, turnaround time)
  - Knowing which operational data to collect
  - Identifying world-class benchmarks for comparison

**3. Assessment Phase**
- User invokes: `/maritime-port-operations`
- Skill provides structured workflow:
  - Step 1: Project Scoping and Data Collection
  - Step 2: Baseline Performance Assessment
  - Step 3: Benchmarking and Gap Analysis
  - Step 4: Capacity Analysis and Forecasting
  - Step 5: Operational Improvement Recommendations
  - ...
- **Subagent knowledge informs each step:**
  - What is a realistic berth productivity target? (120-150 GMPH for world-class)
  - Which equipment is best for yard automation? (RTG vs. RMG vs. reach stackers)
  - What are typical TOS vendors? (Navis N4, TOPS, Tideworks)
  - What environmental regulations apply? (MARPOL, air quality, shore power)

**4. Output**
- Skill defines deliverable structure (Assessment Report format)
- Subagent provides technical content (KPIs, benchmarks, technology options, best practices)
- Result: Comprehensive, technically sound port operations assessment with actionable recommendations

---

## When to Use Each

### Use Subagent Knowledge (Automatically Available)
- Understanding port operational performance metrics
- Knowing industry benchmarks for different port types
- Identifying equipment specifications and capabilities
- Understanding terminal operating systems (TOS)
- Interpreting capacity calculation methodologies
- Knowing automation options and trends
- Understanding environmental and safety regulations

### Invoke Skill (Manual Command)
- Starting a formal port operations assessment
- Need structured workflow for efficiency analysis
- Developing operational improvement recommendations
- Creating capacity expansion feasibility study
- Want quality checklist and deliverable templates
- Need financial analysis and business case framework

---

## Benefits of Dual Approach

✅ **Subagent = Expert Always At Your Side**
- No need to memorize port operations KPIs
- Automatic expertise on container, bulk, liquid bulk, ro-ro terminals
- Informs all deliverables, not just formal assessments
- Up-to-date knowledge on automation trends and technology

✅ **Skill = Structured Execution**
- Clear 10-step workflow reduces risk of missing analysis steps
- Ensures consistent deliverable quality
- Provides templates for data collection, analysis, business case
- Includes quality checklists for each deliverable

✅ **Together = Comprehensive Port Operations Capability**
- Expert knowledge + Structured execution = High-quality port assessments
- Faster execution (don't have to research benchmarks from scratch)
- Better recommendations (informed by industry best practices)
- Complete coverage (operations, capacity, technology, financial, implementation)

---

## Detailed Integration Examples

### Example 1: Berth Productivity Analysis

**Step:** Baseline Performance Assessment (Step 2)

**Skill Provides:**
- Template for calculating berth productivity (GMPH)
- Formula: Total moves / Total vessel hours
- Instruction to collect vessel operations data

**Subagent Provides:**
- Knowledge that world-class berth productivity is 120-150 GMPH
- Understanding that productivity varies by:
  - Vessel size (mega-vessels require more cranes)
  - Crane intensity (cranes per vessel)
  - Cargo mix (reefers slow productivity)
  - Weather conditions (wind above 25 m/s stops operations)
- Context that peer average is 80-100 GMPH for similar terminals

**Result:** Agent calculates baseline of 75 GMPH, identifies 45 GMPH gap to world-class, and explains root causes using subagent expertise.

---

### Example 2: Yard Equipment Selection

**Step:** Technology and Automation Assessment (Step 6)

**Skill Provides:**
- Framework for evaluating yard automation options
- Template for cost-benefit analysis
- Structure for comparing equipment types

**Subagent Provides:**
- **RTG (Rubber-Tired Gantry) characteristics:**
  - Flexible (can move between blocks)
  - Lower capital cost
  - Higher operating cost (diesel fuel, tires)
  - Stack height: 5-6 containers high
- **RMG (Rail-Mounted Gantry) characteristics:**
  - Fixed blocks (requires rail infrastructure)
  - Higher capital cost
  - Lower operating cost (electric)
  - Better for automation (precision positioning)
  - Stack height: 5-7 containers high
- **Automation levels:**
  - Manual operation
  - Semi-automated (AutoRTG)
  - Fully automated (ASC)
- **Cost ranges:**
  - Manual RTG: $1.5-2M
  - AutoRTG: $2.5-3M
  - RMG/ASC: $3-4M

**Result:** Agent develops equipment recommendation based on terminal's volume, labor cost, automation readiness, and budget, with detailed justification using subagent expertise.

---

### Example 3: Capacity Expansion Feasibility

**Step:** Capacity Analysis and Forecasting (Step 4)

**Skill Provides:**
- Capacity calculation formulas for berth, yard, gate
- Template for demand forecasting
- Structure for capacity gap analysis

**Subagent Provides:**
- **Berth capacity formula:**
  ```
  Annual Berth Capacity = (Number of Berths) × (Available Hours/Year) × (Productivity) / (Average Vessel Size)
  ```
- **Typical assumptions:**
  - Berth utilization target: 60-70% (higher = more congestion)
  - Productivity: 120 TEU/hour (for efficient terminal)
  - Average vessel call: 2,000-3,000 TEU exchanged
- **Yard capacity formula:**
  ```
  Annual Yard Capacity = (Ground Slots) × (Stack Height) × (Utilization) × (365 / Dwell Time)
  ```
- **Typical assumptions:**
  - Yard utilization: 60-75%
  - Dwell time: 3-5 days (world-class)
  - Stack height: 4-5 containers (RTG), 5-7 (RMG)

**Result:** Agent calculates current capacities, identifies bottleneck (e.g., gate is limiting factor), and develops phased expansion options with subagent-informed assumptions.

---

### Example 4: Automation Business Case

**Step:** Financial Analysis and Business Case (Step 8)

**Skill Provides:**
- NPV/IRR calculation framework
- Sensitivity analysis template
- Structure for presenting business case

**Subagent Provides:**
- **Typical automation costs:**
  - Automated stacking cranes (ASC): $3-4M each
  - AGVs: $500K-800K each (need 15-20 for medium terminal)
  - TOS upgrade for automation: $5-10M
  - Infrastructure (rails, charging stations): $10-20M
  - **Total for medium terminal:** $100-200M
- **Productivity improvements:**
  - Berth productivity: +20-30% (due to 24/7 yard operations)
  - Equipment utilization: +15-25% (automated equipment runs longer hours)
  - Labor savings: 30-50% reduction in equipment operators
- **Typical financial metrics:**
  - Payback period: 15-25 years
  - IRR: 10-15% (infrastructure projects have long horizons)
  - NPV: Positive if volume growth supports increased capacity

**Result:** Agent develops realistic business case with credible cost estimates, productivity assumptions, and financial metrics, using subagent knowledge to validate all inputs.

---

## Other Maritime Subagents/Skills

**Related Subagents:**
- `.claude/subagents/industries/maritime.md` - General maritime expertise
- `.claude/subagents/industries/maritime-environmental-risk.md` - Environmental impact assessment
- `.claude/subagents/service-lines/project-finance.md` - For infrastructure financing

**Related Skills:**
- `/maritime-environmental-risk` - Environmental and marine risk assessment
- `/project-finance` - Infrastructure finance and bankability
- `/risk-assessment` - General risk register updates
- `/verify-quality` - Quality gate checks
- `/document-generation` - Create branded assessment reports

**Specialized Skills (Could Create):**
- `/port-expansion-feasibility` - Detailed feasibility study for port expansion
- `/terminal-design` - Terminal layout and design optimization
- `/port-digitalization` - Digital transformation for ports
- `/vessel-turnaround-optimization` - Focus specifically on reducing vessel times

---

## Typical Project Flow

```
1. Engagement Setup
   ↓
   /engagement-setup → Initialize Maritime port project

2. Discovery
   ↓
   /session-start → Load context
   /maritime-port-operations → Begin Step 1-2 (Scoping, Data Collection, Baseline)
   [Subagent expertise automatically available throughout]

3. Analysis
   ↓
   Continue /maritime-port-operations → Steps 3-4 (Benchmarking, Capacity Analysis)

4. Recommendations
   ↓
   Continue /maritime-port-operations → Steps 5-7 (Improvements, Technology, Environmental)

5. Business Case
   ↓
   /project-finance (if needed for financing) → Infrastructure financing analysis
   Continue /maritime-port-operations → Step 8 (Financial Analysis)

6. Implementation
   ↓
   Continue /maritime-port-operations → Step 9 (Roadmap, Change Management)

7. Final Delivery
   ↓
   Continue /maritime-port-operations → Step 10 (Executive Presentation, Final Report)
   /verify-quality → Run quality checks
   /document-generation → Generate branded final deliverables

8. Session Close
   ↓
   /session-end → Update tracker, generate handoff
```

---

## Success Factors

**For effective use of this integrated capability:**

1. **Run `/maritime-port-operations` for formal assessments**
   - Don't skip steps
   - Complete data collection thoroughly
   - Validate all benchmarks and assumptions

2. **Trust the subagent expertise**
   - Benchmarks are based on industry data
   - Equipment specifications are accurate
   - Cost ranges are realistic for planning purposes

3. **Customize for specific context**
   - Port types vary (container vs. bulk vs. liquid bulk)
   - Geographic regions have different labor costs and regulations
   - Client's strategic goals drive prioritization

4. **Use quality checklists**
   - Skill provides quality checklist at end of each step
   - Verify data quality, analysis rigor, recommendation feasibility
   - Ensure financial analysis follows best practices

5. **Iterate as needed**
   - Port operations assessments often reveal new areas to explore
   - Be prepared to deep-dive into specific bottlenecks
   - Use subagent expertise to quickly pivot when needed

---

## Example Deliverables

**Typical outputs when using both subagent + skill:**

1. **Port Operations Assessment Report (100-150 pages)**
   - Executive summary
   - Current state assessment with KPIs
   - Benchmarking vs. peer ports
   - Gap analysis and root causes
   - Improvement recommendations (15-20 initiatives)
   - Technology and automation opportunities
   - Business case with NPV/IRR
   - Implementation roadmap

2. **Executive Presentation (15-20 slides)**
   - Current state vs. benchmarks
   - Key findings and bottlenecks
   - Prioritized recommendations
   - Financial analysis summary
   - Implementation roadmap

3. **Financial Model (Excel)**
   - CAPEX and OPEX estimates
   - Revenue projections
   - NPV/IRR calculations
   - Sensitivity analysis

4. **Implementation Roadmap (Gantt Chart)**
   - Phased approach (quick wins → operational improvements → strategic initiatives)
   - Milestones and dependencies
   - Resource requirements

5. **KPI Dashboard Specifications**
   - Real-time operational metrics
   - Target vs. actual comparisons
   - Trend analysis
   - Alert thresholds

---

## Quality Standards

**When using both subagent + skill, deliverables must meet:**

✅ **Technical Accuracy:**
- All KPIs calculated using industry-standard methodologies
- Benchmarks sourced from credible industry reports (World Bank, UNCTAD, port associations)
- Equipment specifications match vendor capabilities
- Technology trends reflect current state of industry

✅ **Operational Feasibility:**
- Recommendations are implementable given client's constraints
- Timelines are realistic for port environment (unions, regulations, 24/7 operations)
- Change management addresses labor relations

✅ **Financial Rigor:**
- Cost estimates are grounded in actual port projects
- Revenue assumptions are conservative and defendable
- Financial metrics (NPV, IRR) use appropriate discount rates (WACC)
- Sensitivity analysis covers key variables

✅ **Regulatory Compliance:**
- Environmental recommendations comply with IMO, local regulations
- Safety improvements align with OSHA, ILO standards
- Security recommendations meet ISPS Code requirements

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-22 | Initial creation with 10-step workflow and comprehensive subagent integration |

**Last Updated:** 2026-01-22
**Maintained By:** Omega Consulting - Maritime Practice
