#!/usr/bin/env node
// Unit tests for the plugin recommender. Pure-rules; no LLM calls.

const { test } = require('node:test');
const assert = require('node:assert');
const { recommend, loadRules } = require('./recommend');

test('always recommends omega-core and omega-kg-enhance', () => {
  const r = recommend({});
  assert.ok(r.plugins.includes('omega-core'));
  assert.ok(r.plugins.includes('omega-kg-enhance'));
});

test('healthcare industry → omega-bundle-healthcare', () => {
  const r = recommend({ industry: 'healthcare' });
  assert.strictEqual(r.bundle, 'omega-bundle-healthcare');
});

test('finserv industry + AIG service-line → banking bundle plus AIG', () => {
  const r = recommend({ industry: 'finserv', serviceLine: 'aig' });
  assert.strictEqual(r.bundle, 'omega-bundle-banking');
  assert.ok(r.plugins.includes('omega-aig'));
});

test('cyber scope keyword → omega-cyber', () => {
  const r = recommend({ scope: ['cyber'] });
  assert.ok(r.plugins.includes('omega-cyber'));
});

test('CSRD regulatory → omega-esg', () => {
  const r = recommend({ regulatory: ['CSRD'] });
  assert.ok(r.plugins.includes('omega-esg'));
});

test('Arabic language → omega-ai-translate', () => {
  const r = recommend({ languages: ['ar'] });
  assert.ok(r.plugins.includes('omega-ai-translate'));
});

test('M&A scope → omega-ai-dd plus omega-ai-contracts via separate scope keywords', () => {
  const r = recommend({ scope: ['due-diligence', 'contracts'] });
  assert.ok(r.plugins.includes('omega-ai-dd'));
  assert.ok(r.plugins.includes('omega-ai-contracts'));
});

test('hospitality industry → omega-ind-hospitality (no bundle exists for it)', () => {
  const r = recommend({ industry: 'hospitality' });
  assert.strictEqual(r.bundle, null);
  assert.ok(r.plugins.includes('omega-ind-hospitality'));
});

test('full healthcare AI governance scenario', () => {
  const r = recommend({
    industry: 'healthcare',
    serviceLine: 'aig',
    regulatory: ['hipaa', 'iso42001'],
    scope: ['cyber'],
  });
  assert.strictEqual(r.bundle, 'omega-bundle-healthcare');
  assert.ok(r.plugins.includes('omega-aig'));
  assert.ok(r.plugins.includes('omega-cyber'));
  assert.ok(r.plugins.includes('omega-ind-healthcare'));
});

test('rules.json is well-formed and references known plugins', () => {
  const rules = loadRules();
  assert.ok(rules.always_recommend.length > 0);
  assert.ok(Object.keys(rules.industry_to_bundle).length > 0);
  // Spot-check a couple of pointers
  assert.strictEqual(rules.scope_keyword_to_plugin['esg'], 'omega-esg');
  assert.strictEqual(rules.regulatory_to_plugin['hipaa'], 'omega-ind-healthcare');
});
