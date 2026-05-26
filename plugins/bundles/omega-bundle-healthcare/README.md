# omega-bundle-healthcare

Healthcare engagements — core + kg-enhance + finance + hlt service-line + healthcare industry vocab (HIS/EMR/HIPAA/HL7-FHIR).

## What gets installed

This bundle installs the following plugins:

- `omega-core`
- `omega-kg-enhance`
- `omega-finance`
- `omega-hlt`
- `omega-ind-healthcare`

## Install

```
/plugin install omega-bundle-healthcare@omega-plugins
```

## Notes

This is a meta-plugin — it has no commands, agents, or skills of its own. It only declares its component plugins as dependencies, which Claude Code resolves and installs automatically.

If you only need a subset, install plugins individually instead.
