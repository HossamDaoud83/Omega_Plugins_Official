# Session Management Commands Reference

This skill provides shorthand commands for session management.

## Available Commands

| Old Command | New Skill | Description |
|-------------|-----------|-------------|
| `/project:session-end` | `/session-end` | End session with documentation |
| `/project:session-start` | `/session-start` | Begin new session |

## Benefits

- **Shorter syntax**: `/session-end` vs `/project:session-end`
- **Easier to remember**: No namespace prefix needed
- **Same functionality**: Exactly the same as project commands

## Implementation

Skills are located in `.claude/skills/session-management/SKILL.md` and provide the same workflow as the original commands in `.claude/commands/`.
