export interface TraceableClaim {
  id: string;
  claim: string;
  page: number;
  paragraph: string;
  snippet: string;
  verified: boolean;
  confidence: number;
}

export interface StructuredPaper {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  doi: string;
  domain: string;
  objective: string;
  methodology: string;
  dataset: string;
  sampleSize: string;
  keyContributions: string[];
  empiricalResults: string;
  limitations: string;
  claims: TraceableClaim[];
}

export interface ResearchGap {
  id: string;
  title: string;
  domain: string;
  description: string;
  confidence: number;
  citationClustersCount: number;
  relatedPaperIds: string[];
  potentialImpact: 'High' | 'Medium' | 'Groundbreaking';
  status: 'Unexplored' | 'Emerging' | 'Contradictory';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortRole: string;
  initials: string;
  bio: string;
  focusAreas: string[];
  gradient: string;
  email: string;
  photo?: string;
}

export interface RoadmapPhase {
  phase: string;
  number: string;
  title: string;
  status: 'In Progress' | 'Planned' | 'Completed';
  category: string;
  duration?: string;
  description: string;
  deliverables: string[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  type: string;
  message: string;
  timestamp: string;
}

export type ThemeMode = 'pastel' | 'midnight';
