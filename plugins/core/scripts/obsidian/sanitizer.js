#!/usr/bin/env node
// Sanitizer — strips client-identifying content from per-project instincts before central sync.
//
// Rules (configurable via .brain/config.json sanitizer_rules):
//   - strip_client_identifiers   → replace client name + project code with placeholders
//   - bucket_dollar_amounts      → round USD figures to bucket: <100k, 100k-500k, 500k-1M, 1M+
//   - replace_persons_with_roles → replace named persons with [CLIENT_SPONSOR], [CLIENT_PM]
//   - strip_project_codes        → remove P0XX_ slugs, keep service_line + industry tags
//
// Inputs:
//   --in   path to source instinct (.md)
//   --out  path to write sanitized version (default: stdout)
//   --engagement <path>   defaults to CWD
//
// Returns exit 0 on success, 2 if instinct is marked visibility: project-only.

const fs = require('fs');
const path = require('path');

const ARGS = parseArgs(process.argv.slice(2));
const ENGAGEMENT = ARGS.engagement || process.env.CLAUDE_PROJECT_DIR || process.cwd();

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const k = a.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) { out[k] = next; i++; } else { out[k] = true; }
    }
  }
  return out;
}

function readJSON(p, fallback = null) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fallback; }
}

function exists(p) { try { fs.accessSync(p); return true; } catch { return false; } }

function brainConfig() {
  return readJSON(path.join(ENGAGEMENT, '.brain', 'config.json'), {
    project_id: 'UNKNOWN',
    engagement_short_name: 'Unknown',
    central_sync_enabled: true,
    sanitizer_rules: {
      strip_client_identifiers: true,
      bucket_dollar_amounts: true,
      replace_persons_with_roles: true,
      strip_project_codes: true,
    },
  });
}

function projectMeta() {
  return readJSON(path.join(ENGAGEMENT, 'project.json'), {});
}

function bucketUSD(amount) {
  // amount is a number in USD
  if (amount < 100_000) return '$<100k';
  if (amount < 500_000) return '$100k-$500k';
  if (amount < 1_000_000) return '$500k-$1M';
  if (amount < 10_000_000) return '$1M-$10M';
  if (amount < 100_000_000) return '$10M-$100M';
  return '$100M+';
}

function parseAmount(text) {
  // accepts "$1,234,567" or "$1.2M" or "$500k"
  const cleaned = text.replace(/[$,\s]/g, '');
  const m = cleaned.match(/^(\d+(?:\.\d+)?)([KkMmBb])?$/);
  if (!m) return null;
  let n = parseFloat(m[1]);
  const suffix = (m[2] || '').toLowerCase();
  if (suffix === 'k') n *= 1_000;
  else if (suffix === 'm') n *= 1_000_000;
  else if (suffix === 'b') n *= 1_000_000_000;
  return n;
}

function sanitize(content, rules, project, config) {
  let text = content;

  // Strip project code from source_engagement BEFORE the general project-code regex,
  // so we avoid producing "[[[PROJECT]]]" (nested brackets).
  if (rules.strip_project_codes) {
    text = text.replace(/source_engagement:\s*".*?"/, 'source_engagement: "[[SANITIZED]]"');
  }

  if (rules.strip_client_identifiers) {
    // Accept both v2.0 string schema (project.client = "Acme") and v4.x nested
    // schema (project.client = { name: "Acme", ... } and engagement = { name: ... })
    const client = typeof project.client === 'string' ? project.client
                 : (project.client && project.client.name) || null;
    const engagement = typeof project.engagement_name === 'string' ? project.engagement_name
                     : typeof project.engagement === 'string' ? project.engagement
                     : (project.engagement && project.engagement.name) || null;
    if (client) {
      text = text.replace(new RegExp(escapeRegExp(client), 'gi'), '[CLIENT]');
      // Strip word-boundary forms of any single-word part of the client name
      const parts = client.split(/\s+/).filter(p => p.length > 3);
      for (const p of parts) {
        text = text.replace(new RegExp(`\\b${escapeRegExp(p)}\\b`, 'gi'), '[CLIENT]');
      }
    }
    if (engagement && engagement !== client) {
      text = text.replace(new RegExp(escapeRegExp(engagement), 'gi'), '[ENGAGEMENT]');
    }
    // Consolidate runs of "[CLIENT] [CLIENT] [CLIENT]" → "[CLIENT]"
    text = text.replace(/(\[CLIENT\](\s+\[CLIENT\])+)/g, '[CLIENT]');
  }

  if (rules.bucket_dollar_amounts) {
    // Match $1,234,567 / $1.2M / $500k
    text = text.replace(/\$\s?(\d[\d,]*(?:\.\d+)?[KkMmBb]?)/g, (match, p1) => {
      const n = parseAmount('$' + p1);
      if (n === null) return match;
      return bucketUSD(n);
    });
    // Match "USD 1,234,567" / "USD 1.2M" / "1,234,567 USD"
    text = text.replace(/USD\s+(\d[\d,]*(?:\.\d+)?[KkMmBb]?)/g, (match, p1) => {
      const n = parseAmount('$' + p1);
      if (n === null) return match;
      return bucketUSD(n);
    });
    text = text.replace(/(\d[\d,]*(?:\.\d+)?[KkMmBb]?)\s+USD\b/g, (match, p1) => {
      const n = parseAmount('$' + p1);
      if (n === null) return match;
      return bucketUSD(n);
    });
  }

  if (rules.replace_persons_with_roles) {
    // Replace stakeholder names if listed in stakeholder_map.md (simple match)
    const stakePath = path.join(ENGAGEMENT, '00_Engagement_Management', 'stakeholder_map.md');
    if (exists(stakePath)) {
      const stake = fs.readFileSync(stakePath, 'utf8');
      // Naive: collect proper-noun pairs from "**Name** (Role)" or "Name (Role)"
      const matches = [...stake.matchAll(/(?:^|\n)\s*[-*]?\s*\*{0,2}([A-Z][a-z]+\s+[A-Z][a-z]+)\*{0,2}\s*\(([^)]+)\)/g)];
      for (const m of matches) {
        const name = m[1];
        const role = m[2].toLowerCase();
        const placeholder = role.includes('sponsor') ? '[CLIENT_SPONSOR]'
          : role.includes('pm') || role.includes('manager') ? '[CLIENT_PM]'
          : role.includes('cio') || role.includes('cto') || role.includes('cfo') ? `[CLIENT_${role.replace(/[^a-z0-9]/gi, '').toUpperCase()}]`
          : '[CLIENT_STAKEHOLDER]';
        text = text.replace(new RegExp(`\\b${escapeRegExp(name)}\\b`, 'g'), placeholder);
      }
    }
  }

  if (rules.strip_project_codes) {
    // Already replaced source_engagement at top; now strip stray P0XX codes in body
    text = text.replace(/\bP\d{3}_[A-Za-z0-9_]+/g, '[PROJECT]');
    text = text.replace(/\bP\d{3}\b/g, '[PROJECT]');
  }

  // Mark central_sync flag
  text = text.replace(/central_sync: pending/, 'central_sync: synced');

  return text;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function frontmatterField(content, field) {
  const m = content.match(new RegExp(`^${field}:\\s*(.+)$`, 'm'));
  return m ? m[1].trim() : null;
}

function main() {
  const inFile = ARGS.in;
  if (!inFile || !exists(inFile)) {
    console.error('[sanitizer] missing or unreadable --in <path>');
    process.exit(1);
  }
  const content = fs.readFileSync(inFile, 'utf8');
  const visibility = frontmatterField(content, 'visibility');
  if (visibility === 'project-only') {
    console.error(`[sanitizer] ${inFile} marked visibility:project-only — refusing to sync`);
    process.exit(2);
  }

  const config = brainConfig();
  const project = projectMeta();
  const rules = Object.assign({
    strip_client_identifiers: true,
    bucket_dollar_amounts: true,
    replace_persons_with_roles: true,
    strip_project_codes: true,
  }, config.sanitizer_rules || {});

  const out = sanitize(content, rules, project, config);

  if (ARGS.out) {
    fs.mkdirSync(path.dirname(ARGS.out), { recursive: true });
    fs.writeFileSync(ARGS.out, out);
    console.log(`[sanitizer] wrote ${ARGS.out}`);
  } else {
    process.stdout.write(out);
  }
}

if (require.main === module) main();

module.exports = { sanitize, bucketUSD, parseAmount };
