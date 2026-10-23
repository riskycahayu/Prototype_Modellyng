import React, { useState } from 'react';
import {
  X,
  FileText,
  Table2,
  GitMerge,
  Search,
  Plus,
  CheckCircle2,
  AlertTriangle,
  FolderGit2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Filter,
  Download,
  Share2,
  RefreshCw
} from 'lucide-react';
import { StructuredPaper, ResearchGap, TraceableClaim, ThemeMode } from '../types';
import { filterPapers, calculateCorpusStats } from '../utils/academicModel';

interface InteractiveStudioModalProps {
  theme: ThemeMode;
  papers: StructuredPaper[];
  gaps: ResearchGap[];
  onClose: () => void;
  onInspectEvidence: (paper: StructuredPaper, claim: TraceableClaim) => void;
  onAddPaper: (paper: StructuredPaper) => void;
  onToggleVerifyClaim: (paperId: string, claimId: string) => void;
}

export const InteractiveStudioModal: React.FC<InteractiveStudioModalProps> = ({
  theme,
  papers,
  gaps,
  onClose,
  onInspectEvidence,
  onAddPaper,
  onToggleVerifyClaim
}) => {
  const isPastel = theme === 'pastel';
  const [activeTab, setActiveTab] = useState<'model' | 'matrix' | 'gap' | 'add'>('model');
  const [selectedPaperId, setSelectedPaperId] = useState<string>(papers[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [domainFilter, setDomainFilter] = useState('all');

  // Ingestion simulator state
  const [newTitle, setNewTitle] = useState('');
  const [newAuthors, setNewAuthors] = useState('');
  const [newDomain, setNewDomain] = useState('Computer Science & NLP');
  const [newObjective, setNewObjective] = useState('');
  const [newMethod, setNewMethod] = useState('');
  const [newDataset, setNewDataset] = useState('');
  const [newLimitation, setNewLimitation] = useState('');
  const [isSimulatingExtract, setIsSimulatingExtract] = useState(false);
  const [ingestSuccess, setIngestSuccess] = useState(false);

  const stats = calculateCorpusStats(papers);
  const filteredPapers = filterPapers(papers, searchQuery, domainFilter);
  const currentPaper = papers.find((p) => p.id === selectedPaperId) || papers[0];

  const handleQuickPreset = (preset: 'bert' | 'clip') => {
    if (preset === 'bert') {
      setNewTitle('BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding');
      setNewAuthors('Devlin, J., Chang, M. W., Lee, K., & Toutanova, K.');
      setNewDomain('NLP & Language Modeling');
      setNewObjective('Pre-train deep bidirectional representations from unlabeled text conditioning on both left and right context');
      setNewMethod('Masked Language Model (MLM) and Next Sentence Prediction (NSP) with Transformer Encoder');
      setNewDataset('BooksCorpus (800M words) and English Wikipedia (2,500M words)');
      setNewLimitation('Heavy pre-training compute overhead and high inference memory requirements');
    } else {
      setNewTitle('Learning Transferable Visual Models From Natural Language Supervision (CLIP)');
      setNewAuthors('Radford, A., Kim, J. W., Hallacy, C., et al.');
      setNewDomain('Multimodal Vision-Language');
      setNewObjective('Train a visual model to predict which caption goes with which image from internet-scale raw text');
      setNewMethod('Contrastive Language-Image Pre-training (CLIP) with dual encoders');
      setNewDataset('WIT: WebImageText 400M image-text pairs');
      setNewLimitation('Weak performance on fine-grained counting and complex spatial reasoning');
    }
  };

  const handleSimulateExtraction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setIsSimulatingExtract(true);

    setTimeout(() => {
      const createdPaper: StructuredPaper = {
        id: `paper-custom-${Date.now()}`,
        title: newTitle.trim(),
        authors: newAuthors.trim() || 'Research Collective et al.',
        year: 2024,
        journal: 'Scientific Preprints Archive',
        doi: `10.1145/sim.${Math.floor(Math.random() * 900000 + 100000)}`,
        domain: newDomain,
        objective: newObjective.trim() || 'Investigation of empirical performance bounds.',
        methodology: newMethod.trim() || 'Transformer-based neural architecture.',
        dataset: newDataset.trim() || 'Public Benchmark Corpus',
        sampleSize: 'Corpus Dataset Sample',
        keyContributions: [
          'Proposed standardized schema for scientific knowledge integration',
          'Demonstrated robustness across test partitions'
        ],
        empiricalResults: 'Consistent improvements across targeted baseline indicators.',
        limitations: newLimitation.trim() || 'Sensitivity to distribution shift and out-of-domain vocabulary.',
        claims: [
          {
            id: `claim-${Date.now()}`,
            claim: `Primary study hypothesis validated with significance p < 0.01 across test splits.`,
            page: 4,
            paragraph: 'Section 3.1, Findings',
            snippet: `Empirical evaluations across partitioned splits demonstrated consistent statistical advantage over previous benchmarks without supplementary parameter expansion.`,
            verified: false,
            confidence: 0.91
          }
        ]
      };

      onAddPaper(createdPaper);
      setSelectedPaperId(createdPaper.id);
      setIsSimulatingExtract(false);
      setIngestSuccess(true);
      setTimeout(() => {
        setIngestSuccess(false);
        setActiveTab('model');
      }, 1200);
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`w-full max-w-6xl h-[92vh] rounded-3xl overflow-hidden shadow-2xl border flex flex-col transition-all ${
          isPastel
            ? 'bg-slate-50/95 border-purple-200 text-slate-800'
            : 'bg-slate-900 border-slate-800 text-slate-100'
        }`}
      >
        {/* Studio Window Bar */}
        <div
          className={`px-6 py-4 flex items-center justify-between border-b ${
            isPastel
              ? 'bg-white/80 border-slate-200'
              : 'bg-slate-950 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-md ${
                isPastel
                  ? 'bg-gradient-to-tr from-rose-400 via-purple-500 to-indigo-600 text-white'
                  : 'bg-indigo-600 text-white'
              }`}
            >
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold">Modellyng Academic Studio</h2>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isPastel
                      ? 'bg-purple-100 text-purple-700 font-semibold'
                      : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                  }`}
                >
                  Workspace v0.1-preview
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Corpus: {stats.totalPapers} publications • {stats.verifiedClaims}/{stats.totalClaims} claims verified ({stats.verificationRate}%)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className={`p-2 rounded-full border transition-colors ${
                isPastel
                  ? 'bg-white hover:bg-slate-100 border-slate-200 text-slate-600'
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
              }`}
              aria-label="Close studio"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Toolbar */}
        <div
          className={`px-6 py-2.5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
            isPastel
              ? 'bg-white border-slate-200/80'
              : 'bg-slate-950/60 border-slate-800'
          }`}
        >
          {/* Main Screens */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveTab('model')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                activeTab === 'model'
                  ? isPastel
                    ? 'bg-purple-100 text-purple-800 shadow-sm'
                    : 'bg-slate-800 text-cyan-300 font-bold'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Structured Paper Model</span>
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                activeTab === 'matrix'
                  ? isPastel
                    ? 'bg-purple-100 text-purple-800 shadow-sm'
                    : 'bg-slate-800 text-cyan-300 font-bold'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              <Table2 className="w-3.5 h-3.5" />
              <span>Comparative Paper Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab('gap')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                activeTab === 'gap'
                  ? isPastel
                    ? 'bg-purple-100 text-purple-800 shadow-sm'
                    : 'bg-slate-800 text-cyan-300 font-bold'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              <GitMerge className="w-3.5 h-3.5" />
              <span>Research Gap Map ({gaps.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('add')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                activeTab === 'add'
                  ? isPastel
                    ? 'bg-rose-100 text-rose-800 shadow-sm'
                    : 'bg-slate-800 text-rose-300 font-bold'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Ingest New Paper</span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter papers & claims..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-8 pr-3 py-1.5 rounded-xl text-xs border focus:outline-none transition-all ${
                isPastel
                  ? 'bg-slate-50 border-slate-200 text-slate-800 focus:bg-white focus:border-purple-300'
                  : 'bg-slate-900 border-slate-800 text-white focus:border-cyan-400'
              }`}
            />
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* TAB 1: STRUCTURED PAPER MODEL */}
          {activeTab === 'model' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
              {/* Left Column: Publication Corpus List */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400">
                    Selected Corpus ({filteredPapers.length})
                  </span>
                  <button
                    onClick={() => setActiveTab('add')}
                    className="text-xs font-semibold text-purple-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" /> Add Paper
                  </button>
                </div>

                <div className="space-y-2.5 max-h-[65vh] overflow-y-auto pr-1">
                  {filteredPapers.map((paper) => {
                    const isSelected = paper.id === currentPaper?.id;
                    return (
                      <button
                        key={paper.id}
                        onClick={() => setSelectedPaperId(paper.id)}
                        className={`w-full p-3.5 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? isPastel
                              ? 'bg-white border-purple-300 shadow-md ring-2 ring-purple-100 text-slate-900'
                              : 'bg-slate-800 border-cyan-400 shadow-md text-white ring-1 ring-cyan-400'
                            : isPastel
                            ? 'bg-white/80 border-slate-200 hover:bg-white text-slate-700'
                            : 'bg-slate-950/80 border-slate-800 hover:bg-slate-800/60 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                          <span
                            className={
                              isSelected
                                ? isPastel
                                  ? 'text-purple-700 font-bold'
                                  : 'text-cyan-300 font-bold'
                                : 'text-slate-400'
                            }
                          >
                            {paper.year} • {paper.domain}
                          </span>
                          <span className="text-emerald-500 font-semibold">
                            {paper.claims.filter((c) => c.verified).length}/
                            {paper.claims.length} Verified
                          </span>
                        </div>
                        <h4 className="text-xs font-bold line-clamp-2 leading-snug">
                          {paper.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 truncate mt-1">
                          {paper.authors}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Schema Detail of Selected Paper */}
              {currentPaper ? (
                <div className="lg:col-span-8 space-y-4">
                  {/* Paper Header */}
                  <div
                    className={`p-5 rounded-3xl border space-y-2 ${
                      isPastel
                        ? 'bg-white border-slate-200/90 shadow-sm'
                        : 'bg-slate-950/80 border-slate-800'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                          isPastel
                            ? 'bg-purple-50 text-purple-700 border-purple-200 font-semibold'
                            : 'bg-indigo-950 text-indigo-300 border-indigo-800'
                        }`}
                      >
                        {currentPaper.domain}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        DOI: {currentPaper.doi}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {currentPaper.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {currentPaper.authors} ({currentPaper.year}) —{' '}
                      <span className="italic">{currentPaper.journal}</span>
                    </p>
                  </div>

                  {/* Schema Extraction Breakdown Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Objective */}
                    <div
                      className={`p-4 rounded-2xl border space-y-1.5 ${
                        isPastel
                          ? 'bg-white border-slate-200'
                          : 'bg-slate-950/70 border-slate-800'
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase font-bold text-sky-600 block">
                        Research Objective
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {currentPaper.objective}
                      </p>
                    </div>

                    {/* Methodology */}
                    <div
                      className={`p-4 rounded-2xl border space-y-1.5 ${
                        isPastel
                          ? 'bg-white border-slate-200'
                          : 'bg-slate-950/70 border-slate-800'
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase font-bold text-purple-600 block">
                        Methodology & Model Architecture
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {currentPaper.methodology}
                      </p>
                    </div>

                    {/* Dataset */}
                    <div
                      className={`p-4 rounded-2xl border space-y-1.5 ${
                        isPastel
                          ? 'bg-white border-slate-200'
                          : 'bg-slate-950/70 border-slate-800'
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase font-bold text-teal-600 block">
                        Dataset & Sample Size
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {currentPaper.dataset}
                      </p>
                    </div>

                    {/* Methodological Limitation */}
                    <div
                      className={`p-4 rounded-2xl border space-y-1.5 ${
                        isPastel
                          ? 'bg-amber-50/50 border-amber-200'
                          : 'bg-amber-950/30 border-amber-800/40'
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase font-bold text-amber-600 block">
                        Empirical Limitation Identified
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {currentPaper.limitations}
                      </p>
                    </div>
                  </div>

                  {/* Traceable Claims with Human-in-the-Loop buttons */}
                  <div
                    className={`p-5 rounded-3xl border space-y-3 ${
                      isPastel
                        ? 'bg-white border-slate-200'
                        : 'bg-slate-950/70 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span>Traceable Claims with Primary Source Citations</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {currentPaper.claims.length} claims extracted
                      </span>
                    </div>

                    <div className="space-y-2">
                      {currentPaper.claims.map((c) => (
                        <div
                          key={c.id}
                          className={`p-3.5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            isPastel
                              ? 'bg-slate-50 border-slate-200'
                              : 'bg-slate-900 border-slate-800'
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-semibold">
                                Page {c.page} • {c.paragraph}
                              </span>
                              {c.verified ? (
                                <span className="text-[10px] text-emerald-600 font-mono flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" /> Verified
                                </span>
                              ) : (
                                <span className="text-[10px] text-amber-600 font-mono">
                                  Pending verification
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                              "{c.claim}"
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => onInspectEvidence(currentPaper, c)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1 transition-all ${
                                isPastel
                                  ? 'bg-white hover:bg-slate-100 border-slate-200 text-purple-700 shadow-sm'
                                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-cyan-300'
                              }`}
                            >
                              <span>Inspect Proof</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>

                            <button
                              onClick={() => onToggleVerifyClaim(currentPaper.id, c.id)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold text-white transition-all ${
                                c.verified
                                  ? 'bg-slate-600 hover:bg-slate-700'
                                  : 'bg-emerald-600 hover:bg-emerald-700'
                              }`}
                              title="Human-in-the-Loop review"
                            >
                              {c.verified ? 'Unverify' : 'Verify'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* TAB 2: COMPARATIVE PAPER MATRIX */}
          {activeTab === 'matrix' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Multi-Dimensional Literature Matrix
                  </h3>
                  <p className="text-xs text-slate-500">
                    Side-by-side synthesis across experimental methodologies, datasets, and reported constraints.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full border bg-emerald-50 text-emerald-800 border-emerald-200">
                    Auto-aligned taxonomy
                  </span>
                </div>
              </div>

              <div
                className={`rounded-3xl border overflow-hidden shadow-sm ${
                  isPastel
                    ? 'bg-white border-slate-200'
                    : 'bg-slate-950 border-slate-800'
                }`}
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr
                        className={`border-b text-[11px] font-mono ${
                          isPastel
                            ? 'bg-slate-50 text-slate-600 border-slate-200'
                            : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        <th className="py-3 px-4 font-semibold">Study / Authors</th>
                        <th className="py-3 px-4 font-semibold">Domain</th>
                        <th className="py-3 px-4 font-semibold">Corpus / Sample</th>
                        <th className="py-3 px-4 font-semibold">Methodology</th>
                        <th className="py-3 px-4 font-semibold">Identified Limitation</th>
                        <th className="py-3 px-4 font-semibold">Verification</th>
                      </tr>
                    </thead>
                    <tbody
                      className={`divide-y ${
                        isPastel
                          ? 'divide-slate-200 text-slate-700'
                          : 'divide-slate-800 text-slate-300'
                      }`}
                    >
                      {filteredPapers.map((p) => (
                        <tr
                          key={p.id}
                          className={`hover:bg-purple-50/30 dark:hover:bg-slate-900/60 transition-colors ${
                            p.id === currentPaper?.id
                              ? isPastel
                                ? 'bg-purple-50/50'
                                : 'bg-slate-900/80'
                              : ''
                          }`}
                        >
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-slate-900 dark:text-white">
                              {p.authors.split(',')[0]} ({p.year})
                            </div>
                            <div className="text-[11px] text-slate-400 truncate max-w-[200px]">
                              {p.title}
                            </div>
                          </td>
                          <td className="py-3.5 px-4 font-mono text-[11px]">
                            {p.domain}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-medium">{p.sampleSize}</span>
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-purple-700 dark:text-cyan-300">
                            {p.methodology}
                          </td>
                          <td className="py-3.5 px-4 text-amber-700 dark:text-amber-300">
                            {p.limitations}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                              {p.claims.filter((c) => c.verified).length}/{p.claims.length} claims
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RESEARCH GAP MAP */}
          {activeTab === 'gap' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Research Gap Map & Opportunity Discovery
                  </h3>
                  <p className="text-xs text-slate-500">
                    AI-detected contradictions, unexplored empirical intersections, and suggested research agendas.
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full border bg-purple-50 text-purple-800 border-purple-200">
                  {gaps.length} Actionable Gaps
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gaps.map((gap) => (
                  <div
                    key={gap.id}
                    className={`rounded-3xl p-5 border flex flex-col justify-between space-y-4 shadow-sm transition-all hover:shadow-md ${
                      isPastel
                        ? 'bg-white border-purple-100 text-slate-800'
                        : 'bg-slate-950 border-slate-800 text-slate-100'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                            gap.status === 'Unexplored'
                              ? 'bg-rose-50 text-rose-700 border-rose-200'
                              : gap.status === 'Contradictory'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : 'bg-purple-50 text-purple-700 border-purple-200'
                          }`}
                        >
                          {gap.status}
                        </span>
                        <span className="text-xs font-mono font-semibold text-emerald-600">
                          {Math.round(gap.confidence * 100)}% Confidence
                        </span>
                      </div>

                      <h4 className="text-sm font-bold leading-snug">
                        {gap.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {gap.description}
                      </p>
                    </div>

                    <div
                      className={`pt-3 border-t text-[11px] space-y-2 ${
                        isPastel ? 'border-slate-100' : 'border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between text-slate-400 font-mono">
                        <span>Citation Clusters:</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {gap.citationClustersCount} publications
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400 font-mono">
                        <span>Potential Impact:</span>
                        <span className="font-semibold text-purple-600 dark:text-cyan-400">
                          {gap.potentialImpact}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ADD / INGEST NEW PAPER (AI EXTRACTION SIMULATOR) */}
          {activeTab === 'add' && (
            <div className="max-w-2xl mx-auto space-y-6 py-4">
              <div className="text-center space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Ingest & Structurally Model a New Publication
                </h3>
                <p className="text-xs text-slate-500">
                  Masukkan judul atau pilih preset ilmiah untuk mensimulasikan ekstraksi otomatis ke dalam corpus Modellyng.
                </p>
              </div>

              {/* Quick Presets */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-mono text-slate-400">Presets:</span>
                <button
                  type="button"
                  onClick={() => handleQuickPreset('bert')}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200"
                >
                  Devlin et al. (BERT 2019)
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickPreset('clip')}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200"
                >
                  Radford et al. (CLIP 2021)
                </button>
              </div>

              <form onSubmit={handleSimulateExtraction} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-500 mb-1 font-semibold">
                    Judul Paper / Manuskrip Ilmiah *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Contoh: Scalable Language Modeling for Academic Synthesis"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${
                      isPastel
                        ? 'bg-white border-slate-200 text-slate-900 focus:border-purple-400'
                        : 'bg-slate-950 border-slate-800 text-white focus:border-cyan-400'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1 font-semibold">
                      Penulis (Authors)
                    </label>
                    <input
                      type="text"
                      value={newAuthors}
                      onChange={(e) => setNewAuthors(e.target.value)}
                      placeholder="Contoh: Panjaitan, L., Cahayu, R., et al."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${
                        isPastel
                          ? 'bg-white border-slate-200 text-slate-900 focus:border-purple-400'
                          : 'bg-slate-950 border-slate-800 text-white focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1 font-semibold">
                      Scientific Domain
                    </label>
                    <input
                      type="text"
                      value={newDomain}
                      onChange={(e) => setNewDomain(e.target.value)}
                      placeholder="Contoh: Computer Science / AI"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${
                        isPastel
                          ? 'bg-white border-slate-200 text-slate-900 focus:border-purple-400'
                          : 'bg-slate-950 border-slate-800 text-white focus:border-cyan-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-500 mb-1 font-semibold">
                    Tujuan Penelitian (Research Objective)
                  </label>
                  <textarea
                    rows={2}
                    value={newObjective}
                    onChange={(e) => setNewObjective(e.target.value)}
                    placeholder="Uraikan tujuan eksperimental paper ini..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${
                      isPastel
                        ? 'bg-white border-slate-200 text-slate-900 focus:border-purple-400'
                        : 'bg-slate-950 border-slate-800 text-white focus:border-cyan-400'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1 font-semibold">
                      Metodologi / Model
                    </label>
                    <input
                      type="text"
                      value={newMethod}
                      onChange={(e) => setNewMethod(e.target.value)}
                      placeholder="Contoh: Hierarchical Graph Attention"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${
                        isPastel
                          ? 'bg-white border-slate-200 text-slate-900 focus:border-purple-400'
                          : 'bg-slate-950 border-slate-800 text-white focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1 font-semibold">
                      Batasan (Limitation)
                    </label>
                    <input
                      type="text"
                      value={newLimitation}
                      onChange={(e) => setNewLimitation(e.target.value)}
                      placeholder="Contoh: Sensitive to small sample noise"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${
                        isPastel
                          ? 'bg-white border-slate-200 text-slate-900 focus:border-purple-400'
                          : 'bg-slate-950 border-slate-800 text-white focus:border-cyan-400'
                      }`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSimulatingExtract}
                  className={`w-full py-3.5 rounded-2xl font-semibold text-xs text-white shadow-md flex items-center justify-center gap-2 transition-all ${
                    isSimulatingExtract
                      ? 'bg-slate-400 cursor-not-allowed'
                      : isPastel
                      ? 'bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 shadow-purple-200'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'
                  }`}
                >
                  {isSimulatingExtract ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Ekstraksi Model Pengetahuan Berjalan...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Ekstrak & Susun Structured Model</span>
                    </>
                  )}
                </button>

                {ingestSuccess && (
                  <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono text-center flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Paper berhasil diekstrak dan ditambahkan ke Corpus!</span>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
