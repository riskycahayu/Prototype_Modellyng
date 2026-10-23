import { StructuredPaper, ResearchGap } from '../types';

export interface CorpusStats {
  totalPapers: number;
  totalClaims: number;
  verifiedClaims: number;
  verificationRate: number;
  domains: string[];
}

export function filterPapers(
  papers: StructuredPaper[],
  searchQuery: string,
  domainFilter: string = 'all'
): StructuredPaper[] {
  const query = searchQuery.trim().toLowerCase();

  return papers.filter((paper) => {
    const matchesDomain =
      domainFilter === 'all' ||
      paper.domain.toLowerCase().includes(domainFilter.toLowerCase());

    if (!matchesDomain) return false;
    if (!query) return true;

    return (
      paper.title.toLowerCase().includes(query) ||
      paper.authors.toLowerCase().includes(query) ||
      paper.methodology.toLowerCase().includes(query) ||
      paper.dataset.toLowerCase().includes(query) ||
      paper.limitations.toLowerCase().includes(query) ||
      paper.claims.some((c) => c.claim.toLowerCase().includes(query))
    );
  });
}

export function calculateCorpusStats(papers: StructuredPaper[]): CorpusStats {
  const totalPapers = papers.length;
  let totalClaims = 0;
  let verifiedClaims = 0;
  const domainSet = new Set<string>();

  papers.forEach((paper) => {
    if (paper.domain) domainSet.add(paper.domain);
    totalClaims += paper.claims.length;
    verifiedClaims += paper.claims.filter((c) => c.verified).length;
  });

  const verificationRate =
    totalClaims > 0 ? Math.round((verifiedClaims / totalClaims) * 100) : 0;

  return {
    totalPapers,
    totalClaims,
    verifiedClaims,
    verificationRate,
    domains: Array.from(domainSet)
  };
}

export function toggleClaimVerification(
  papers: StructuredPaper[],
  paperId: string,
  claimId: string
): StructuredPaper[] {
  return papers.map((paper) => {
    if (paper.id !== paperId) return paper;
    return {
      ...paper,
      claims: paper.claims.map((claim) => {
        if (claim.id !== claimId) return claim;
        return { ...claim, verified: !claim.verified };
      })
    };
  });
}

export function findGapsForPaper(
  paperId: string,
  gaps: ResearchGap[]
): ResearchGap[] {
  return gaps.filter((gap) => gap.relatedPaperIds.includes(paperId));
}

export function generateSynthesisSummary(papers: StructuredPaper[]): string {
  if (papers.length === 0) return 'No publications in current corpus.';
  return `Synthesizing ${papers.length} publications across ${new Set(papers.map((p) => p.domain)).size} scientific domain(s).`;
}
