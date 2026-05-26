# omega-cyber

Advisory across security strategy, ISO 27001 readiness, threat modeling, secure-by-design reviews, and security operations maturity.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-cyber:maturity-assess` | Score the client's security capabilities against NIST CSF / ISO 27001 controls. |
| `/omega-cyber:iso27001-gap` | Map current controls to ISO 27001 Annex A; produce a gap register and remediation plan. |
| `/omega-cyber:threat-model` | Run STRIDE / PASTA on a target system; produce threat register + mitigations. |
| `/omega-cyber:secure-by-design` | Architectural review for new systems against secure-by-design principles. |
| `/omega-cyber:incident-runbook` | Author / refresh incident response runbooks with severity tiers and playbooks. |
| `/omega-cyber:vendor-risk` | Score third-party vendors on security posture using CAIQ / SIG Lite. |

## Skills

- `cyber` — Cybersecurity methods (see `skills/cyber/SKILL.md`)

## Subagents

- `security-strategist` — Security Strategist
- `iso27001-auditor` — ISO 27001 Auditor

## Quality gate

`rules/cyber-quality-standards.md` is loaded automatically by `quality-gate.js` when this plugin is installed.

## Install

```
/plugin install omega-cyber@omega-plugins
```

Usually paired with `omega-core` and one industry plugin.
