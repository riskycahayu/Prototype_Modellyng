import React, { useState } from 'react';
import {
  Compass,
  Users,
  CheckCircle,
  FolderGit2,
  Check,
  FileText,
  Table2,
  GitMerge,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Play
} from 'lucide-react';
import { StructuredPaper, TraceableClaim, ThemeMode } from '../types';

interface HeroSectionProps {
  theme: ThemeMode;
  onOpenStudio: () => void;
  onInspectEvidence: (paper: StructuredPaper, claim: TraceableClaim) => void;
  samplePaper: StructuredPaper;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  onOpenStudio,
  onInspectEvidence,
  samplePaper
}) => {
  const isPastel = theme === 'pastel';
  const [activeTab, setActiveTab] = useState<'model' | 'matrix' | 'gap'>('model');

  const claim = samplePaper.claims[0];

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 md:py-24 relative overflow-hidden"
    >
      {/* Background Soft Pastel Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {isPastel ? (
          <>
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-br from-rose-200/50 via-purple-200/40 to-sky-200/50 blur-[130px] rounded-full animate-float-slow" />
            <div className="absolute top-[40%] -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-sky-200/40 via-teal-100/40 to-indigo-200/30 blur-[140px] rounded-full animate-float-reverse" />
            <div className="absolute top-[60%] -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-pink-200/40 via-purple-200/40 to-rose-100/50 blur-[140px] rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
          </>
        ) : (
          <>
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-indigo-600/20 via-blue-600/10 to-transparent blur-[120px] rounded-full" />
            <div className="absolute top-[35%] -left-32 w-[450px] h-[450px] bg-cyan-600/10 blur-[130px] rounded-full" />
            <div className="absolute top-[65%] -right-32 w-[500px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.12)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Category Tag */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-sm transition-all ${
                isPastel
                  ? 'bg-white/80 border-purple-200/80 text-purple-900 shadow-purple-100/50'
                  : 'bg-slate-800/80 border-slate-700/60 text-cyan-300 shadow-inner'
              }`}
            >
              <span className="flex h-2 w-2 relative">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isPastel ? 'bg-rose-400' : 'bg-cyan-400'
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isPastel ? 'bg-rose-500' : 'bg-cyan-500'
                  }`}
                />
              </span>
              <span className="text-xs font-mono font-semibold">
                AI × Academic Research
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span
                className={`text-xs font-medium ${
                  isPastel ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                Knowledge Modeling Platform
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] ${
                isPastel ? 'text-slate-900' : 'text-white'
              }`}
            >
              From Research Papers to{' '}
              <span
                className={
                  isPastel
                    ? 'bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent'
                }
              >
                Structured Knowledge.
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal ${
                isPastel ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Understand, compare, and synthesize academic literature with
              AI-powered knowledge modeling that keeps evidence traceable and
              research transparent.
            </p>

            {/* Quick Key Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium pt-1">
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${
                  isPastel
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                    : 'text-slate-300'
                }`}
              >
                <CheckCircle
                  className={`w-4 h-4 ${
                    isPastel ? 'text-emerald-500' : 'text-emerald-400'
                  }`}
                />
                <span>Traceable Evidence</span>
              </div>
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${
                  isPastel
                    ? 'bg-sky-50 text-sky-800 border border-sky-100'
                    : 'text-slate-300'
                }`}
              >
                <CheckCircle
                  className={`w-4 h-4 ${
                    isPastel ? 'text-sky-500' : 'text-cyan-400'
                  }`}
                />
                <span>Human-in-the-Loop</span>
              </div>
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${
                  isPastel
                    ? 'bg-purple-50 text-purple-800 border border-purple-100'
                    : 'text-slate-300'
                }`}
              >
                <CheckCircle
                  className={`w-4 h-4 ${
                    isPastel ? 'text-purple-500' : 'text-indigo-400'
                  }`}
                />
                <span>Multi-Paper Synthesis</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#about"
                className={`w-full sm:w-auto px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 group ${
                  isPastel
                    ? 'bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white shadow-purple-200'
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-indigo-600/25'
                }`}
              >
                <span>Explore Our Startup</span>
                <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>

              <button
                onClick={onOpenStudio}
                className={`w-full sm:w-auto px-7 py-3.5 rounded-2xl font-semibold text-sm border transition-all flex items-center justify-center gap-2 ${
                  isPastel
                    ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-sm'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border-slate-700/80'
                }`}
              >
                <Sparkles
                  className={`w-4 h-4 ${
                    isPastel ? 'text-purple-600' : 'text-cyan-400'
                  }`}
                />
                <span>Interactive Studio Demo</span>
              </button>
            </div>

            {/* Micro Disclaimer */}
            <p
              className={`text-[11px] italic ${
                isPastel ? 'text-slate-500' : 'text-slate-500'
              }`}
            >
              *Designed for undergraduate, postgraduate, lecturers, and
              educational research labs.
            </p>
          </div>

          {/* Right Column: Interactive App Mockup (Visualizing Structured Paper Model, Matrix, Gap Map) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Backdrop Decoration */}
              <div
                className={`absolute -inset-2 rounded-3xl blur-2xl opacity-60 ${
                  isPastel
                    ? 'bg-gradient-to-r from-rose-200 via-purple-200 to-sky-200'
                    : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                }`}
              />

              {/* Main Application Mockup Container */}
              <div
                className={`relative rounded-3xl overflow-hidden shadow-2xl border transition-all ${
                  isPastel
                    ? 'bg-white/90 backdrop-blur-2xl border-white/90 text-slate-800 shadow-indigo-100/50'
                    : 'bg-slate-900/90 backdrop-blur-xl border-slate-700/70 text-slate-100'
                }`}
              >
                {/* Mockup Window Header */}
                <div
                  className={`px-5 py-3.5 border-b flex items-center justify-between ${
                    isPastel
                      ? 'bg-slate-50/90 border-slate-200/80'
                      : 'bg-slate-950/90 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span
                      className={`ml-2 text-xs font-mono flex items-center gap-1.5 truncate max-w-[130px] sm:max-w-none ${
                        isPastel ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      <FolderGit2
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isPastel ? 'text-purple-600' : 'text-cyan-400'
                        }`}
                      />
                      <span className="truncate">modellyng-workspace / thesis-corpus-2025</span>
                    </span>
                  </div>
                  <span
                    className={`text-[9px] sm:text-[10px] uppercase font-mono px-2 sm:px-2.5 py-0.5 rounded-full border shrink-0 ${
                      isPastel
                        ? 'bg-purple-50 text-purple-700 border-purple-200'
                        : 'bg-blue-950/80 text-blue-300 border-blue-800/40'
                    }`}
                  >
                    Interactive Preview
                  </span>
                </div>

                {/* Mockup Content Area */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Synthesis Header */}
                  <div
                    className={`flex items-center justify-between pb-3 border-b ${
                      isPastel ? 'border-slate-100' : 'border-slate-800'
                    }`}
                  >
                    <div>
                      <h4
                        className={`text-xs font-bold ${
                          isPastel ? 'text-slate-900' : 'text-slate-200'
                        }`}
                      >
                        Synthesizing 6 Selected Publications
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Domain: Generative AI in Academic Literature Analysis
                      </p>
                    </div>
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-full border flex items-center gap-1 ${
                        isPastel
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-cyan-950/60 text-cyan-400 border-cyan-800/40'
                      }`}
                    >
                      <Check className="w-3 h-3" /> 100% Traceable
                    </span>
                  </div>

                  {/* Interactive Sub-tabs */}
                  <div
                    className={`flex p-1 rounded-xl gap-1 text-xs font-medium border ${
                      isPastel
                        ? 'bg-slate-100/70 border-slate-200/60'
                        : 'bg-slate-950 border-slate-800'
                    }`}
                    role="tablist"
                  >
                    <button
                      onClick={() => setActiveTab('model')}
                      className={`flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all text-[11px] ${
                        activeTab === 'model'
                          ? isPastel
                            ? 'bg-white text-purple-700 shadow-sm font-semibold'
                            : 'bg-slate-800 text-cyan-300 font-semibold'
                          : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                      }`}
                      role="tab"
                      aria-selected={activeTab === 'model'}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Paper Model</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('matrix')}
                      className={`flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all text-[11px] ${
                        activeTab === 'matrix'
                          ? isPastel
                            ? 'bg-white text-purple-700 shadow-sm font-semibold'
                            : 'bg-slate-800 text-cyan-300 font-semibold'
                          : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                      }`}
                      role="tab"
                      aria-selected={activeTab === 'matrix'}
                    >
                      <Table2 className="w-3.5 h-3.5" />
                      <span>Paper Matrix</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('gap')}
                      className={`flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all text-[11px] ${
                        activeTab === 'gap'
                          ? isPastel
                            ? 'bg-white text-purple-700 shadow-sm font-semibold'
                            : 'bg-slate-800 text-cyan-300 font-semibold'
                          : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                      }`}
                      role="tab"
                      aria-selected={activeTab === 'gap'}
                    >
                      <GitMerge className="w-3.5 h-3.5" />
                      <span>Gap Map</span>
                    </button>
                  </div>

                  {/* Tab 1: Structured Paper Model View */}
                  {activeTab === 'model' && (
                    <div
                      className={`p-3.5 rounded-2xl border space-y-2.5 ${
                        isPastel
                          ? 'bg-slate-50/70 border-slate-200/70'
                          : 'bg-slate-950/80 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold flex items-center gap-1.5 ${
                            isPastel ? 'text-indigo-600' : 'text-blue-400'
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5" />
                          Structured Paper Model
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          ID: Paper_2024_Chen et al.
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[11px]">
                        <div
                          className={`p-2 rounded-xl border ${
                            isPastel
                              ? 'bg-white border-slate-200/80'
                              : 'bg-slate-900 border-slate-800'
                          }`}
                        >
                          <span className="text-slate-400 block text-[9px] uppercase font-mono">
                            Objective
                          </span>
                          <span
                            className={`font-medium truncate block ${
                              isPastel ? 'text-slate-800' : 'text-slate-200'
                            }`}
                          >
                            Zero-shot extraction
                          </span>
                        </div>
                        <div
                          className={`p-2 rounded-xl border ${
                            isPastel
                              ? 'bg-white border-slate-200/80'
                              : 'bg-slate-900 border-slate-800'
                          }`}
                        >
                          <span className="text-slate-400 block text-[9px] uppercase font-mono">
                            Methodology
                          </span>
                          <span
                            className={`font-medium truncate block ${
                              isPastel ? 'text-slate-800' : 'text-slate-200'
                            }`}
                          >
                            Graph Transformer
                          </span>
                        </div>
                        <button
                          onClick={() => onInspectEvidence(samplePaper, claim)}
                          className={`p-2 rounded-xl border text-left transition-all group ${
                            isPastel
                              ? 'bg-rose-50/80 border-rose-200 hover:border-rose-300'
                              : 'bg-slate-900 border-slate-800 hover:border-cyan-500'
                          }`}
                          title="Click to view traceable proof"
                        >
                          <span
                            className={`block text-[9px] uppercase font-mono ${
                              isPastel ? 'text-rose-600' : 'text-cyan-400'
                            }`}
                          >
                            Traceable Claim ↗
                          </span>
                          <span
                            className={`font-medium truncate block ${
                              isPastel ? 'text-rose-700' : 'text-cyan-300'
                            }`}
                          >
                            Page 7, ¶ 3.2
                          </span>
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-500 italic pt-1 line-clamp-2">
                        "{claim.claim}"
                      </p>
                    </div>
                  )}

                  {/* Tab 2: Comparative Paper Matrix View */}
                  {activeTab === 'matrix' && (
                    <div
                      className={`p-3.5 rounded-2xl border space-y-2 ${
                        isPastel
                          ? 'bg-slate-50/70 border-slate-200/70'
                          : 'bg-slate-950/80 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold flex items-center gap-1.5 ${
                            isPastel ? 'text-purple-600' : 'text-indigo-400'
                          }`}
                        >
                          <Table2 className="w-3.5 h-3.5" />
                          Comparative Matrix
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Cross-Analysis
                        </span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-[11px]">
                          <thead>
                            <tr className="text-slate-400 border-b border-slate-200 dark:border-slate-800 text-[10px]">
                              <th className="pb-1">Study</th>
                              <th className="pb-1">Corpus</th>
                              <th className="pb-1">AI Approach</th>
                              <th className="pb-1">Limitation</th>
                            </tr>
                          </thead>
                          <tbody
                            className={`divide-y ${
                              isPastel
                                ? 'divide-slate-200 text-slate-700'
                                : 'divide-slate-800 text-slate-300'
                            }`}
                          >
                            <tr>
                              <td
                                className={`py-1.5 font-medium ${
                                  isPastel ? 'text-slate-900' : 'text-white'
                                }`}
                              >
                                Chen (2024)
                              </td>
                              <td className="py-1.5">1,200 CS Papers</td>
                              <td className="py-1.5 text-indigo-600 dark:text-cyan-300">
                                Graph Transformer
                              </td>
                              <td className="py-1.5 text-amber-600 dark:text-amber-300">
                                High latency
                              </td>
                            </tr>
                            <tr>
                              <td
                                className={`py-1.5 font-medium ${
                                  isPastel ? 'text-slate-900' : 'text-white'
                                }`}
                              >
                                Miller (2023)
                              </td>
                              <td className="py-1.5">450 Med Preprints</td>
                              <td className="py-1.5 text-indigo-600 dark:text-cyan-300">
                                Semantic Vector
                              </td>
                              <td className="py-1.5 text-amber-600 dark:text-amber-300">
                                Hallucination risk
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Research Gap Map View */}
                  {activeTab === 'gap' && (
                    <div
                      className={`p-3.5 rounded-2xl border space-y-2 ${
                        isPastel
                          ? 'bg-slate-50/70 border-slate-200/70'
                          : 'bg-slate-950/80 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold flex items-center gap-1.5 ${
                            isPastel ? 'text-teal-600' : 'text-cyan-400'
                          }`}
                        >
                          <GitMerge className="w-3.5 h-3.5" />
                          Research Gap Map
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full border ${
                            isPastel
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-emerald-950/50 text-emerald-400 border-emerald-800/30'
                          }`}
                        >
                          2 Opportunities Detected
                        </span>
                      </div>
                      <div
                        className={`p-2.5 rounded-xl border flex items-center gap-3 ${
                          isPastel
                            ? 'bg-white border-slate-200'
                            : 'bg-slate-900 border-slate-800'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isPastel
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-indigo-500/20 text-indigo-400'
                          }`}
                        >
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="text-[11px] leading-tight">
                          <p
                            className={`font-medium ${
                              isPastel ? 'text-slate-800' : 'text-slate-200'
                            }`}
                          >
                            Gap 01: Multi-modal claim verification in
                            non-English datasets
                          </p>
                          <p className="text-slate-400 text-[10px] mt-0.5">
                            Confidence: 89% • Backed by 4 citation clusters
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mockup Action Banner */}
                  <div className="pt-2 flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 font-medium text-slate-500">
                      <span
                        className={`w-2 h-2 rounded-full animate-pulse ${
                          isPastel ? 'bg-emerald-500' : 'bg-cyan-400'
                        }`}
                      />
                      Human-in-the-Loop verification active
                    </span>
                    <button
                      onClick={onOpenStudio}
                      className={`font-semibold flex items-center gap-1 transition-colors ${
                        isPastel
                          ? 'text-purple-600 hover:text-purple-800'
                          : 'text-cyan-400 hover:text-cyan-300'
                      }`}
                    >
                      <span>Open Full Studio</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
