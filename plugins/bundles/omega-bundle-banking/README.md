# omega-bundle-banking

Banking / financial-services engagements — core + kg-enhance + finance + AIG service-line (governance is critical) + finserv industry vocab (banking, insurance, fintech, AML, fraud).

## What gets installed

This bundle installs the following plugins:

- `omega-core`
- `omega-kg-enhance`
- `omega-finance`
- `omega-aig`
- `omega-ind-finserv`

## Install

```
/plugin install omega-bundle-banking@omega-plugins
```

## Notes

This is a meta-plugin — it has no commands, agents, or skills of its own. It only declares its component plugins as dependencies, which Claude Code resolves and installs automatically.

If you only need a subset, install plugins individually instead.
