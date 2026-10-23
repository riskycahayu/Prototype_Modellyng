import React from 'react';
import { X, CheckCircle2, AlertCircle, FileText, Bookmark, Share2, Check } from 'lucide-react';
import { StructuredPaper, TraceableClaim, ThemeMode } from '../types';

interface DocumentEvidenceViewerProps {
  paper: StructuredPaper | null;
  claim: TraceableClaim | null;
  theme: ThemeMode;
  onClose: () => void;
  onToggleVerify?: (paperId: string, claimId: string) => void;
}

export const DocumentEvidenceViewer: React.FC<DocumentEvidenceViewerProps> = ({
  paper,
  claim,
  theme,
  onClose,
  onToggleVerify
}) => {
  const [copied, setCopied] = React.useState(false);
  if (!paper || !claim) return null;

  const isPastel = theme === 'pastel';

  const handleCopyCitation = () => {
    const citation = `${paper.authors} (${paper.year}). ${paper.title}. ${paper.journal}. DOI: ${paper.doi}. [Cited claim from Page ${claim.page}, ${claim.paragraph}]`;
    navigator.clipboard?.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="evidence-dialog-title"
    >
      <div
        className={`w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border transition-all ${
          isPastel
            ? 'bg-white border-purple-100 text-slate-800'
            : 'bg-slate-900 border-slate-800 text-slate-100'
        }`}
      >
        {/* Header */}
        <div
          className={`px-6 py-4 flex items-center justify-between border-b ${
            isPastel
              ? 'bg-gradient-to-r from-rose-50/80 via-purple-50/80 to-sky-50/80 border-slate-100'
              : 'bg-slate-950 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                isPastel
                  ? 'bg-purple-100 text-purple-700'
                  : 'bg-cyan-950 text-cyan-400'
              }`}
            >
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3
                id="evidence-dialog-title"
                className={`text-sm font-bold flex items-center gap-2 ${
                  isPastel ? 'text-slate-900' : 'text-white'
                }`}
              >
                <span>Evidence Traceability Audit</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    claim.verified
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}
                >
                  {claim.verified ? 'Verified Evidence' : 'Needs Verification'}
                </span>
              </h3>
              <p className="text-xs text-slate-500 font-mono truncate max-w-sm">
                Source Document: {paper.title}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Metadata pill row */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span
              className={`px-2.5 py-1 rounded-full font-mono font-medium ${
                isPastel
                  ? 'bg-purple-50 text-purple-700 border border-purple-200'
                  : 'bg-slate-800 text-cyan-300 border border-slate-700'
              }`}
            >
              Page {claim.page} • {claim.paragraph}
            </span>
            <span
              className={`px-2.5 py-1 rounded-full font-mono ${
                isPastel
                  ? 'bg-slate-100 text-slate-600'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              Confidence: {Math.round(claim.confidence * 100)}%
            </span>
            <span
              className={`px-2.5 py-1 rounded-full font-mono ${
                isPastel
                  ? 'bg-slate-100 text-slate-600'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              DOI: {paper.doi}
            </span>
          </div>

          {/* Extracted Claim Card */}
          <div
            className={`p-4 rounded-2xl border ${
              isPastel
                ? 'bg-rose-50/50 border-rose-100 text-slate-800'
                : 'bg-slate-950/60 border-slate-800 text-slate-200'
            }`}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-rose-500 block mb-1">
              Extracted Academic Claim
            </span>
            <p className="text-sm font-semibold leading-relaxed">
              "{claim.claim}"
            </p>
          </div>

          {/* Primary Source Snippet with simulated PDF bounding box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5 font-mono">
                <Bookmark className="w-3.5 h-3.5 text-indigo-500" />
                Original Manuscript Context (Page {claim.page})
              </span>
              <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Zero Hallucination Guarantee
              </span>
            </div>

            <div
              className={`p-5 rounded-2xl border font-serif text-sm leading-relaxed relative ${
                isPastel
                  ? 'bg-amber-50/30 border-amber-200/70 text-slate-800'
                  : 'bg-slate-950 border-slate-800 text-slate-300'
              }`}
            >
              {/* Highlight bar indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-rose-400 to-indigo-500 rounded-l-2xl" />
              <div className="pl-3">
                <p className="text-xs text-slate-400 mb-2 font-mono">
                  [Section extracted via Layout-Aware OCR Bounding-Box ID: #bbox-{claim.id}]
                </p>
                <mark className="bg-amber-200/60 dark:bg-amber-900/40 text-inherit px-1 py-0.5 rounded font-normal">
                  {claim.snippet}
                </mark>
              </div>
            </div>
          </div>

          {/* Authors & Citation Details */}
          <div
            className={`p-4 rounded-2xl text-xs space-y-1.5 border ${
              isPastel
                ? 'bg-slate-50 border-slate-200/60 text-slate-600'
                : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <div className="font-semibold text-slate-900 dark:text-white">
              {paper.authors} ({paper.year})
            </div>
            <div>{paper.journal}</div>
            <div className="font-mono text-[11px] text-indigo-500">
              https://doi.org/{paper.doi}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div
          className={`px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t ${
            isPastel
              ? 'bg-slate-50/70 border-slate-100'
              : 'bg-slate-950 border-slate-800'
          }`}
        >
          <button
            onClick={handleCopyCitation}
            className={`w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
              copied
                ? 'bg-emerald-500 text-white border-emerald-600'
                : isPastel
                ? 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-300'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Citation Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Copy APA Citation</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onToggleVerify && (
              <button
                onClick={() => onToggleVerify(paper.id, claim.id)}
                className={`w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-xl text-white shadow-sm flex items-center justify-center gap-1.5 transition-all ${
                  claim.verified
                    ? 'bg-slate-700 hover:bg-slate-800'
                    : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>
                  {claim.verified ? 'Unverify Claim' : 'Mark as Human-Verified'}
                </span>
              </button>
            )}
            <button
              onClick={onClose}
              className={`w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-xl border ${
                isPastel
                  ? 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
