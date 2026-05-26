#!/usr/bin/env node
// Omega @omega/core — PostToolUse hook (Edit/Write)
// Scans newly written content for 14 common secret patterns.
// Non-blocking — prints warnings to stderr; consultant decides whether to act.

const path = require('path');
const { readHookInput, isHookDisabled, logToStderr } = require(path.join(__dirname, '..', 'lib', 'utils.js'));

if (isHookDisabled('secret-scan')) process.exit(0);

const PATTERNS = [
  { name: 'AWS Access Key',       regex: /AKIA[0-9A-Z]{16}/ },
  { name: 'AWS Secret Key',       regex: /aws_secret_access_key\s*=\s*['"]?[A-Za-z0-9/+=]{40}['"]?/i },
  { name: 'OpenAI/Anthropic key', regex: /(sk|claude)-[a-zA-Z0-9_-]{20,}/ },
  { name: 'GitHub Token',         regex: /gh[pousr]_[A-Za-z0-9]{36,}/ },
  { name: 'GitLab Token',         regex: /glpat-[A-Za-z0-9_-]{20,}/ },
  { name: 'Google API Key',       regex: /AIza[0-9A-Za-z_-]{35}/ },
  { name: 'Slack Webhook',        regex: /https:\/\/hooks\.slack\.com\/services\/[A-Z0-9/]+/ },
  { name: 'Slack Token',          regex: /xox[baprs]-[A-Za-z0-9-]{10,}/ },
  { name: 'JWT',                  regex: /eyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/ },
  { name: 'Private Key Block',    regex: /-----BEGIN (RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/ },
  { name: 'Password in JSON',     regex: /"(password|passwd|pwd)"\s*:\s*"[^"]{8,}"/i },
  { name: 'Bearer Token',         regex: /Bearer\s+[A-Za-z0-9._~+/=-]{20,}/ },
  { name: 'DB Connection String', regex: /(mysql|postgres(?:ql)?|mongodb(?:\+srv)?):\/\/[^\s/$.?#].[^\s"']*/ },
  { name: 'Credit Card Number',   regex: /\b(?:\d[ -]*?){13,16}\b/ },
];

const input = readHookInput();
const tool = input.tool || input.tool_name || '';
if (!['Edit', 'Write', 'NotebookEdit'].includes(tool)) process.exit(0);

const ti = input.tool_input || {};
const content = [
  ti.content,
  ti.file_text,
  ti.new_string,
  ti.new_str,
].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || ti.path || '<unknown>';
const findings = [];

for (const pattern of PATTERNS) {
  if (pattern.regex.test(content)) {
    findings.push(pattern.name);
  }
}

if (findings.length > 0) {
  logToStderr(`🚨 SECRETS DETECTED in ${target}:`);
  findings.forEach(name => logToStderr(`   - ${name}`));
  logToStderr(`   Remove before saving to a deliverable or committing.`);
}

process.exit(0);
