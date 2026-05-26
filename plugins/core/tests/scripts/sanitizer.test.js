const { test } = require('node:test');
const assert = require('node:assert');
const { sanitize, bucketUSD, parseAmount } = require('../../scripts/obsidian/sanitizer');

const PROJECT = { client: 'Acme Holdings Group', engagement_name: 'Acme AI Governance Setup', service_line: 'AIG', industry: 'manufacturing' };
const RULES = {
  strip_client_identifiers: true,
  bucket_dollar_amounts: true,
  replace_persons_with_roles: false,
  strip_project_codes: true,
};

test('bucketUSD ladder', () => {
  assert.strictEqual(bucketUSD(50_000), '$<100k');
  assert.strictEqual(bucketUSD(250_000), '$100k-$500k');
  assert.strictEqual(bucketUSD(750_000), '$500k-$1M');
  assert.strictEqual(bucketUSD(2_500_000), '$1M-$10M');
  assert.strictEqual(bucketUSD(50_000_000), '$10M-$100M');
  assert.strictEqual(bucketUSD(500_000_000), '$100M+');
});

test('parseAmount handles k/M/B suffixes', () => {
  assert.strictEqual(parseAmount('$500k'), 500_000);
  assert.strictEqual(parseAmount('$1.2M'), 1_200_000);
  assert.strictEqual(parseAmount('$3B'), 3_000_000_000);
  assert.strictEqual(parseAmount('$1,234,567'), 1_234_567);
});

test('strip client name (full + parts)', () => {
  const out = sanitize('Acme Holdings Group did X. Then Acme did Y.', RULES, PROJECT, {});
  assert.ok(out.includes('[CLIENT] did X'));
  assert.ok(out.includes('[CLIENT] did Y'));
  assert.ok(!out.includes('Acme'));
});

test('consolidate adjacent [CLIENT] tokens', () => {
  const out = sanitize('Acme Holdings Group struggled', RULES, PROJECT, {});
  assert.ok(out.includes('[CLIENT] struggled'));
  // Should not have "[CLIENT] [CLIENT] [CLIENT]"
  assert.ok(!/\[CLIENT\]\s+\[CLIENT\]/.test(out));
});

test('bucket USD in $ form', () => {
  const out = sanitize('Spent $1,250,000 over six months.', RULES, PROJECT, {});
  assert.ok(out.includes('$1M-$10M'));
});

test('bucket USD in textual form', () => {
  const out = sanitize('Spent USD 1,250,000 and another 500000 USD.', RULES, PROJECT, {});
  assert.ok(out.includes('$1M-$10M'));
  assert.ok(out.includes('$100k-$500k') || out.includes('$500k-$1M'));
});

test('strip project codes', () => {
  const out = sanitize('Project P099_Acme_AIG was complex; see also P101.', RULES, PROJECT, {});
  assert.ok(out.includes('[PROJECT]'));
  assert.ok(!out.includes('P099_Acme_AIG'));
  assert.ok(!out.includes('P101'));
});

test('source_engagement frontmatter sanitized cleanly (no nested brackets)', () => {
  const inp = `---\nsource_engagement: "[[P099_Acme_AIG]]"\nclient: Acme\n---\n\nbody`;
  const out = sanitize(inp, RULES, PROJECT, {});
  assert.ok(out.includes('source_engagement: "[[SANITIZED]]"'));
  assert.ok(!out.includes('[[[PROJECT]]]'));
});

test('central_sync flipped from pending to synced', () => {
  const inp = `---\ncentral_sync: pending\n---\nbody`;
  const out = sanitize(inp, RULES, PROJECT, {});
  assert.ok(out.includes('central_sync: synced'));
});
