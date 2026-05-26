# omega-bundle-telecom

Telecommunications engagements — core + kg-enhance + ESI service-line (systems integration) + telecom industry vocab (5G, OSS/BSS, ARPU, churn).

## What gets installed

This bundle installs the following plugins:

- `omega-core`
- `omega-kg-enhance`
- `omega-esi`
- `omega-ind-telecom`

## Install

```
/plugin install omega-bundle-telecom@omega-plugins
```

## Notes

This is a meta-plugin — it has no commands, agents, or skills of its own. It only declares its component plugins as dependencies, which Claude Code resolves and installs automatically.

If you only need a subset, install plugins individually instead.
