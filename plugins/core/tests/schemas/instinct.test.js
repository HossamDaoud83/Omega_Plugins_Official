// Validates the instinct YAML schema (v1.0). See docs/instinct-schema.md.

const { test } = require('node:test');
const assert = require('node:assert');

const REQUIRED_FIELDS = [
  'type', 'id', 'date_extracted', 'source_engagement', 'service_line',
  'industry', 'confidence_score', 'status', 'visibility', 'schema_version',
];

const VALID_SERVICE_LINES = ['AAI', 'AIG', 'COE', 'DIG', 'EDU', 'ESI', 'GOV', 'HLT', 'ISO', 'MAR', 'STR'];
const VALID_STATUSES = ['active', 'deprecated', 'evolved'];
const VALID_VISIBILITY = ['project-only', 'sanitizable', 'central'];
const VALID_CENTRAL_SYNC = ['pending', 'synced', 'excluded'];
const VALID_GRAPH_SYNC = ['pending', 'synced'];

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]+?)\n---/);
  if (!m) throw new Error('missing frontmatter');
  const out = {};
  let currentKey = null;
  for (const line of m[1].split('\n')) {
    if (line.match(/^\s*$/)) continue;
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) {
      currentKey = kv[1];
      const val = kv[2].trim();
      if (val === '') out[currentKey] = {}; // nested block follows
      else out[currentKey] = parseValue(val);
    }
  }
  return out;
}

function parseValue(v) {
  if (v.startsWith('[') && v.endsWith(']')) {
    return v.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  }
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(v)) return parseFloat(v);
  return v.replace(/^["']|["']$/g, '');
}

function validate(content) {
  const fm = parseFrontmatter(content);
  for (const f of REQUIRED_FIELDS) {
    assert.ok(f in fm, `missing required field: ${f}`);
  }
  assert.strictEqual(fm.type, 'instinct', 'type must be "instinct"');
  assert.match(fm.id, /^INS-\d{4}-\d{3}$/, `id must match INS-YYYY-NNN, got ${fm.id}`);
  assert.match(fm.date_extracted, /^\d{4}-\d{2}-\d{2}$/, 'date_extracted must be ISO-8601 date');
  assert.ok(VALID_SERVICE_LINES.includes(fm.service_line), `service_line invalid: ${fm.service_line}`);
  assert.ok(typeof fm.confidence_score === 'number' && fm.confidence_score >= 0 && fm.confidence_score <= 1,
    `confidence_score must be 0–1, got ${fm.confidence_score}`);
  assert.ok(VALID_STATUSES.includes(fm.status), `status invalid: ${fm.status}`);
  assert.ok(VALID_VISIBILITY.includes(fm.visibility), `visibility invalid: ${fm.visibility}`);
  assert.strictEqual(fm.schema_version, '1.0', 'schema_version must be "1.0" for v1');
  if ('central_sync' in fm) {
    assert.ok(VALID_CENTRAL_SYNC.includes(fm.central_sync), `central_sync invalid: ${fm.central_sync}`);
  }
  if ('graph_sync' in fm) {
    assert.ok(VALID_GRAPH_SYNC.includes(fm.graph_sync), `graph_sync invalid: ${fm.graph_sync}`);
  }
  return fm;
}

// --- Fixtures ---

const VALID_INSTINCT = `---
aliases: []
type: instinct
id: INS-2026-001
date_extracted: 2026-04-28
source_engagement: "[[P025_NBE_AIG]]"
service_line: AIG
industry: financial-services
confidence_score: 0.25
status: active
visibility: sanitizable
tags: [instinct, aig, financial-services]
entities:
  frameworks: ["[[ISO 42001]]"]
  risks: []
  deliverables: []
processed_by:
  agent: instinct-writer.js
  reviewer_node: pending
graph_sync: pending
central_sync: pending
schema_version: "1.0"
---

# Test instinct

Insight body.
`;

const MISSING_ID = VALID_INSTINCT.replace(/id: INS-2026-001\n/, '');
const BAD_SERVICE_LINE = VALID_INSTINCT.replace(/service_line: AIG/, 'service_line: XYZ');
const BAD_CONFIDENCE = VALID_INSTINCT.replace(/confidence_score: 0.25/, 'confidence_score: 1.5');
const BAD_VISIBILITY = VALID_INSTINCT.replace(/visibility: sanitizable/, 'visibility: hidden');
const BAD_ID_FORMAT = VALID_INSTINCT.replace(/id: INS-2026-001/, 'id: 001');
const BAD_DATE = VALID_INSTINCT.replace(/date_extracted: 2026-04-28/, 'date_extracted: April 28, 2026');

test('valid instinct passes schema', () => {
  const fm = validate(VALID_INSTINCT);
  assert.strictEqual(fm.id, 'INS-2026-001');
  assert.strictEqual(fm.confidence_score, 0.25);
});

test('missing required field rejected', () => {
  assert.throws(() => validate(MISSING_ID), /missing required field: id/);
});

test('invalid service_line rejected', () => {
  assert.throws(() => validate(BAD_SERVICE_LINE), /service_line invalid/);
});

test('confidence_score out of range rejected', () => {
  assert.throws(() => validate(BAD_CONFIDENCE), /confidence_score must be 0–1/);
});

test('invalid visibility rejected', () => {
  assert.throws(() => validate(BAD_VISIBILITY), /visibility invalid/);
});

test('id format enforced', () => {
  assert.throws(() => validate(BAD_ID_FORMAT), /id must match INS-YYYY-NNN/);
});

test('date_extracted must be ISO-8601', () => {
  assert.throws(() => validate(BAD_DATE), /ISO-8601 date/);
});

module.exports = { validate, parseFrontmatter };
