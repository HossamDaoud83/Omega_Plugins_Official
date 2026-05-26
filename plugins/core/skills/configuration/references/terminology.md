# Terminology Management Command

Manage client-specific terminology and language preferences.

## Trigger
`/project:terminology` or when client uses specific terms

---

## Purpose

Ensure all deliverables use client's preferred:
- Terms and definitions
- Acronyms and abbreviations
- Phrases to use/avoid
- Industry-specific language

---

## Actions

### View Terminology
```
/project:terminology action=view
```

**Output:**
```
═══════════════════════════════════════════════════════════════
CLIENT TERMINOLOGY
═══════════════════════════════════════════════════════════════

Client: [Client Name]
Industry: [Industry]

CUSTOM TERMS
───────────────────────────────────────────────────────────────
│ Standard Term    │ Client Term       │ Notes               │
├──────────────────┼───────────────────┼─────────────────────┤
│ Customer         │ Member            │ All references      │
│ Employee         │ Associate         │ Preferred term      │
│ Department       │ Business Unit     │ Organizational      │
│ Manager          │ Team Lead         │ Title preference    │
└──────────────────┴───────────────────┴─────────────────────┘

ACRONYMS
───────────────────────────────────────────────────────────────
│ Acronym │ Full Form                    │ First use rule    │
├─────────┼──────────────────────────────┼───────────────────┤
│ BU      │ Business Unit                │ Spell out first   │
│ SME     │ Subject Matter Expert        │ Common, use freely│
│ PMO     │ Project Management Office    │ Spell out first   │
└─────────┴──────────────────────────────┴───────────────────┘

PREFERRED PHRASES
───────────────────────────────────────────────────────────────
✓ "Optimize" instead of "Improve"
✓ "Associates" instead of "Employees"
✓ "Members" instead of "Customers"

AVOID PHRASES
───────────────────────────────────────────────────────────────
✗ "Pain points" → Use "Challenges"
✗ "Low-hanging fruit" → Use "Quick wins"
✗ "Synergies" → Use "Integration benefits"

═══════════════════════════════════════════════════════════════
```

---

### Add Term
```
/project:terminology action=add term="Customer" client_term="Member" notes="All client-facing docs"
```

### Add Acronym
```
/project:terminology action=add_acronym acronym="BU" full_form="Business Unit" first_use="spell_out"
```

### Add Preference
```
/project:terminology action=prefer phrase="Optimize" instead_of="Improve"
```

### Add Avoid
```
/project:terminology action=avoid phrase="Pain points" replace_with="Challenges"
```

### Remove
```
/project:terminology action=remove term="Customer"
```

---

## Storage

Updates `client_profile.json`:

```json
{
  "terminology": {
    "custom_terms": {
      "Customer": {
        "client_term": "Member",
        "notes": "All references",
        "added_date": "2024-12-22"
      },
      "Employee": {
        "client_term": "Associate",
        "notes": "Preferred term"
      }
    },
    "acronyms": {
      "BU": {
        "full_form": "Business Unit",
        "first_use": "spell_out"
      }
    },
    "preferred_phrases": [
      {
        "use": "Optimize",
        "instead_of": "Improve"
      }
    ],
    "avoid_phrases": [
      {
        "phrase": "Pain points",
        "replace_with": "Challenges",
        "reason": "Client finds term negative"
      }
    ]
  }
}
```

---

## Terminology Check

### During Document Creation
```
When creating deliverables:
  1. Load terminology from client_profile.json
  2. Scan generated content
  3. Flag terms that should be replaced
  4. Suggest replacements
```

**Check Output:**
```
═══════════════════════════════════════════════════════════════
TERMINOLOGY CHECK
═══════════════════════════════════════════════════════════════

Document: Current State Assessment

TERMS TO REPLACE
───────────────────────────────────────────────────────────────
Line 45: "customer satisfaction" → "member satisfaction"
Line 72: "employee feedback" → "associate feedback"
Line 103: "improve efficiency" → "optimize efficiency"

PHRASES TO AVOID
───────────────────────────────────────────────────────────────
Line 89: "pain points" → Suggest: "challenges"

ACRONYMS TO EXPAND (First Use)
───────────────────────────────────────────────────────────────
Line 23: "BU" → "Business Unit (BU)"

Apply all changes? (yes/no/select)
═══════════════════════════════════════════════════════════════
```

---

## Industry Default Terminology

### Healthcare (HLT)
```json
{
  "Patient": "Standard",
  "Clinician": "Preferred over 'healthcare worker'",
  "Encounter": "Preferred over 'visit'",
  "Care team": "Preferred over 'staff'"
}
```

### Financial Services (FIN)
```json
{
  "Customer": "May be 'Member' for credit unions",
  "Account": "Standard",
  "Portfolio": "Standard",
  "Relationship Manager": "May be 'Banker' or 'Advisor'"
}
```

### Government (GOV)
```json
{
  "Citizen": "Standard for public-facing",
  "Constituent": "Alternative to 'customer'",
  "Agency": "Standard for departments",
  "Mission": "Standard for objectives"
}
```

---

## Integration

### With Quality Gate
```
Before marking deliverable complete:
  - Run terminology check
  - Flag violations
  - Require fix or acknowledgment
```

### With Document Generation
```
When using templates:
  - Pre-populate with client terms
  - Use preferred phrases
  - Avoid flagged phrases
```

### With KB Search
```
When searching knowledge base:
  - Map standard terms to client terms
  - Return relevant results using either terminology
```
