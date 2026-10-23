import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterPapers,
  calculateCorpusStats,
  toggleClaimVerification,
  findGapsForPaper
} from './academicModel';
import { INITIAL_PAPERS, INITIAL_GAPS } from '../data/mockData';

test('filterPapers filters by search query and domain correctly', () => {
  const allResult = filterPapers(INITIAL_PAPERS, 'Graph', 'all');
  assert.equal(allResult.length, 1);
  assert.equal(allResult[0].id, 'paper-chen-2024');

  const domainResult = filterPapers(INITIAL_PAPERS, '', 'Biomedical');
  assert.equal(domainResult.length, 1);
  assert.equal(domainResult[0].id, 'paper-miller-2023');

  const emptyResult = filterPapers(INITIAL_PAPERS, 'nonexistent query 12345', 'all');
  assert.equal(emptyResult.length, 0);
});

test('calculateCorpusStats computes totals, claims, and verification rates', () => {
  const stats = calculateCorpusStats(INITIAL_PAPERS);
  assert.equal(stats.totalPapers, 4);
  assert.ok(stats.totalClaims >= 4);
  assert.ok(stats.verificationRate > 0 && stats.verificationRate <= 100);
});

test('toggleClaimVerification flips verification flag on targeted claim', () => {
  const paperId = 'paper-chen-2024';
  const claimId = 'claim-c1';
  const original = INITIAL_PAPERS.find((p) => p.id === paperId)!;
  const originalStatus = original.claims.find((c) => c.id === claimId)!.verified;

  const updated = toggleClaimVerification(INITIAL_PAPERS, paperId, claimId);
  const updatedPaper = updated.find((p) => p.id === paperId)!;
  const newStatus = updatedPaper.claims.find((c) => c.id === claimId)!.verified;

  assert.equal(newStatus, !originalStatus);
});

test('findGapsForPaper returns gaps linked to the specific paper', () => {
  const chenGaps = findGapsForPaper('paper-chen-2024', INITIAL_GAPS);
  assert.ok(chenGaps.length >= 2);
  assert.ok(chenGaps.some((g) => g.id === 'gap-01'));
});
