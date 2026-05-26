---
name: configuration
description: Manage engagement configuration, settings, and environment
---

# Configuration Management Skill

## Description

Apply presets, branding, and terminology configurations.

## Available Commands

```
/apply-presets      - Load industry/service line presets
/apply-branding     - Apply client branding to deliverables
/terminology        - Manage client-specific terminology
```

## Instructions for Claude

### When user invokes `/apply-presets`

See [references/apply-presets.md](references/apply-presets.md) for detailed instructions.

1. Load presets based on:
   - Service line (MAR, DIG, AIG, etc.)
   - Industry (Maritime, Healthcare, etc.)
2. Apply:
   - Templates
   - Standards
   - Quality criteria
   - Frameworks

### When user invokes `/apply-branding`

See [references/apply-branding.md](references/apply-branding.md) for detailed instructions.

1. Apply Omega + client branding:
   - Logo placement
   - Color scheme
   - Fonts
   - Header/footer
   - Cover pages

### When user invokes `/terminology`

See [references/terminology.md](references/terminology.md) for detailed instructions.

1. Manage client-specific terms:
   - Load terminology list
   - Add new terms
   - Update definitions
   - Ensure consistency across deliverables
