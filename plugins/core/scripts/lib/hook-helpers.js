// Omega — shared hook helpers (PII patterns, license matchers, scaffolds).
// Used by hooks across omega-cyber, omega-people, omega-data, omega-ai-dd, etc.
// Lives in omega-core so every consultant who installs omega-core gets the latest patterns.

'use strict';

// ─── PII pattern banks ─────────────────────────────────────────────────────

const PII_PATTERNS_GENERAL = [
  { name: 'US SSN',                 regex: /\b\d{3}-\d{2}-\d{4}\b/ },
  { name: 'US passport',            regex: /\b[A-Z]\d{8}\b/ },
  { name: 'IBAN',                   regex: /\b[A-Z]{2}\d{2}[A-Z0-9]{11,30}\b/ },
  { name: 'Credit card',            regex: /\b(?:4\d{3}|5[1-5]\d{2}|3[47]\d{2}|6(?:011|5\d{2}))[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/ },
  { name: 'Email address',          regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/ },
  { name: 'Phone (intl)',           regex: /\+\d{1,3}[ -]?\(?\d{1,4}\)?[ -]?\d{3,4}[ -]?\d{3,4}/ },
  { name: 'Saudi national ID',      regex: /\b[12]\d{9}\b/ },
  { name: 'Egyptian national ID',   regex: /\b[23]\d{13}\b/ },
];

// Stricter set used by HR/people hooks
const PII_PATTERNS_HR = [
  ...PII_PATTERNS_GENERAL,
  { name: 'Salary in USD',          regex: /\bUSD?\s*\$?\s*\d{2,3}[,.]?\d{3}\b/i },
  { name: 'Salary in SAR/AED/EGP',  regex: /\b(SAR|AED|EGP|EUR|GBP)\s*\d{2,3}[,.]?\d{3}\b/i },
  { name: 'Employee ID',            regex: /\bEMP-?\d{4,8}\b/i },
  { name: 'Performance rating',     regex: /\b(performance|rating)\s*[:=]\s*[1-5](\.\d)?/i },
];

function scanForPII(content, patterns = PII_PATTERNS_GENERAL) {
  const findings = [];
  for (const p of patterns) {
    if (p.regex.test(content)) findings.push(p.name);
  }
  return findings;
}

// ─── License risk matcher ──────────────────────────────────────────────────

const RISKY_LICENSES = {
  GPL:        /\b(GPL|GNU General Public License)(?:[\s,;]|-)?(2|3)?\b/i,
  AGPL:       /\bAGPL(?:[\s,;]|-)?(3)?\b/i,
  LGPL:       /\bLGPL(?:[\s,;]|-)?(2|3)?\b/i,
  Commons:    /\bCC[ -]?BY[ -]?(NC|SA|ND)\b/i,
  Proprietary:/\b(proprietary|commercial license required|all rights reserved)\b/i,
};

function scanLicenses(content) {
  const found = [];
  for (const [name, regex] of Object.entries(RISKY_LICENSES)) {
    if (regex.test(content)) found.push(name);
  }
  return found;
}

// ─── Status pack template (used by omega-pmo) ────────────────────────────────

function statusPackTemplate({ projectName, weekOf, owner = 'TBD' }) {
  return `# Weekly Status Pack — ${projectName}

**Week of:** ${weekOf}
**Owner:** ${owner}

## 1. Headline (3 bullets)
- TBD
- TBD
- TBD

## 2. Progress against plan
| Workstream | Plan | Actual | Status |
|---|---|---|---|
|  |  |  | 🟢/🟡/🔴 |

## 3. Decisions needed this week
| # | Decision | Owner | Due |
|---|---|---|---|
| 1 |  |  |  |

## 4. RAID summary
- Risks: [count] new, [count] open, [count] closed
- Actions: [count] open
- Issues: [count] open
- Dependencies: [count] open

## 5. Looking ahead (next 2 weeks)
- TBD

## 6. Asks of the steering committee
- TBD
`;
}

// ─── Hook input/output base (mirrors plugins/core/scripts/lib/utils.js) ────

const fs = require('fs');

function readHookInput() {
  if (process.env.CLAUDE_HOOK_INPUT) {
    try { return JSON.parse(process.env.CLAUDE_HOOK_INPUT); } catch { return {}; }
  }
  if (process.stdin.isTTY) return {};
  try {
    const raw = fs.readFileSync(0, 'utf8');
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function isHookDisabled(name) {
  const disabled = (process.env.OMEGA_DISABLED_HOOKS || '').split(',').map(s => s.trim());
  return disabled.includes('all') || disabled.includes(name);
}

function getProfile() {
  return process.env.OMEGA_HOOK_PROFILE || 'standard';
}

function logToStderr(...parts) {
  console.error('[Omega Hook]', ...parts);
}

function extractEditedContent(input) {
  const ti = input.tool_input || {};
  return [ti.content, ti.file_text, ti.new_string, ti.new_str].filter(Boolean).join('\n');
}

function targetPath(input) {
  const ti = input.tool_input || {};
  return ti.file_path || ti.path || '<unknown>';
}

module.exports = {
  PII_PATTERNS_GENERAL,
  PII_PATTERNS_HR,
  RISKY_LICENSES,
  scanForPII,
  scanLicenses,
  statusPackTemplate,
  readHookInput,
  isHookDisabled,
  getProfile,
  logToStderr,
  extractEditedContent,
  targetPath,
};
