import React from 'react';
import {
  Layers,
  TrendingUp,
  ClockAlert,
  Split,
  Compass,
  FileCode2,
  LayoutGrid,
  Milestone,
  Link as LinkIcon,
  UserCheck,
  Eye,
  Target,
  GraduationCap,
  BookOpen,
  School,
  Sparkles
} from 'lucide-react';
import { ThemeMode } from '../types';

interface AboutSectionProps {
  theme: ThemeMode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
  const isPastel = theme === 'pastel';

  return (
    <section
      id="about"
      className={`py-20 md:py-28 border-t transition-colors relative scroll-mt-24 ${
        isPastel
          ? 'border-slate-200/60 bg-gradient-to-b from-white/40 via-purple-50/20 to-white/40'
          : 'border-slate-800/80 bg-brand-950/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium border ${
              isPastel
                ? 'bg-purple-50 text-purple-700 border-purple-200'
                : 'bg-blue-950/60 text-blue-300 border-blue-800/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            ABOUT MODELYNG
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isPastel ? 'text-slate-900' : 'text-white'
            }`}
          >
            Transforming Academic Papers into <br className="hidden sm:block" />
            <span
              className={
                isPastel
                  ? 'bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent'
              }
            >
              Structured Knowledge Representations
            </span>
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isPastel ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            Modellyng is an AI-powered academic knowledge modeling platform
            designed to help students, lecturers, and researchers analyze and
            synthesize academic literature in a more structured, efficient, and
            transparent way.
          </p>
        </div>

        {/* Editorial Overview Card */}
        <div
          className={`rounded-3xl p-6 sm:p-10 border transition-all ${
            isPastel
              ? 'bg-white/90 backdrop-blur-xl border-purple-100 shadow-xl shadow-purple-100/30 text-slate-700'
              : 'bg-slate-900/70 backdrop-blur-xl border-slate-800 text-slate-300'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
                isPastel
                  ? 'bg-gradient-to-br from-purple-100 to-rose-100 text-purple-700 border border-purple-200'
                  : 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
              }`}
            >
              <Layers className="w-7 h-7" />
            </div>
            <div className="space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                Unlike AI tools that focus primarily on summarization,
                Modellyng aims to transform scientific papers into{' '}
                <strong
                  className={`font-semibold ${
                    isPastel ? 'text-purple-900' : 'text-white'
                  }`}
                >
                  structured knowledge representations
                </strong>
                , enabling users to compare research findings, explore
                relationships between publications, and identify potential
                research gaps.
              </p>
              <p>
                Through{' '}
                <strong
                  className={`font-semibold ${
                    isPastel ? 'text-indigo-600' : 'text-cyan-300'
                  }`}
                >
                  source traceability
                </strong>{' '}
                and a{' '}
                <strong
                  className={`font-semibold ${
                    isPastel ? 'text-rose-600' : 'text-blue-300'
                  }`}
                >
                  human-in-the-loop approach
                </strong>
                , Modellyng emphasizes evidence verification, transparency, and
                responsible AI use in academic research.
              </p>
            </div>
          </div>
        </div>

        {/* B. The Problem */}
        <div className="space-y-8">
          <div
            className={`border-b pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 ${
              isPastel ? 'border-slate-200' : 'border-slate-800'
            }`}
          >
            <div>
              <span
                className={`text-xs font-mono tracking-wider uppercase font-semibold ${
                  isPastel ? 'text-rose-600' : 'text-rose-400'
                }`}
              >
                The Friction in Academia
              </span>
              <h3
                className={`text-2xl font-bold mt-1 ${
                  isPastel ? 'text-slate-900' : 'text-white'
                }`}
              >
                The Problem We Are Solving
              </h3>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md">
              The rapid surge in global publications creates cognitive overload
              and fragmented evidence tracking for researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Problem 1 */}
            <div
              className={`p-6 rounded-3xl border transition-all ${
                isPastel
                  ? 'bg-white/80 border-rose-100 hover:border-rose-300 hover:shadow-lg shadow-sm text-slate-800'
                  : 'bg-slate-900/60 border-slate-800 hover:border-rose-500/30 text-slate-100'
              } space-y-3`}
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-rose-50 text-rose-600 border border-rose-200'
                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold">
                Increasing Academic Publications
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Millions of papers published annually make comprehensive
                literature reviews daunting and exhausting to keep up with.
              </p>
            </div>

            {/* Problem 2 */}
            <div
              className={`p-6 rounded-3xl border transition-all ${
                isPastel
                  ? 'bg-white/80 border-amber-100 hover:border-amber-300 hover:shadow-lg shadow-sm text-slate-800'
                  : 'bg-slate-900/60 border-slate-800 hover:border-amber-500/30 text-slate-100'
              } space-y-3`}
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}
              >
                <ClockAlert className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold">
                Time-Consuming Literature Review
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Researchers spend hundreds of manual hours extracting
                methodologies, sampling criteria, and underlying theoretical
                claims.
              </p>
            </div>

            {/* Problem 3 */}
            <div
              className={`p-6 rounded-3xl border transition-all ${
                isPastel
                  ? 'bg-white/80 border-purple-100 hover:border-purple-300 hover:shadow-lg shadow-sm text-slate-800'
                  : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/30 text-slate-100'
              } space-y-3`}
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-purple-50 text-purple-700 border border-purple-200'
                    : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                }`}
              >
                <Split className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold">
                Difficult Cross-Paper Comparison
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Manually mapping varied terminologies and disparate experiment
                setups across dozens of PDF papers often causes blind spots.
              </p>
            </div>

            {/* Problem 4 */}
            <div
              className={`p-6 rounded-3xl border transition-all ${
                isPastel
                  ? 'bg-white/80 border-sky-100 hover:border-sky-300 hover:shadow-lg shadow-sm text-slate-800'
                  : 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/30 text-slate-100'
              } space-y-3`}
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-sky-50 text-sky-700 border border-sky-200'
                    : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                }`}
              >
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold">
                Limited Research Gap Visibility
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Identifying unexplored research niches remains intuitive rather
                than systematic, leaving high-potential gaps unaddressed.
              </p>
            </div>
          </div>
        </div>

        {/* C. Our Solution */}
        <div className="space-y-8">
          <div
            className={`border-b pb-4 ${
              isPastel ? 'border-slate-200' : 'border-slate-800'
            }`}
          >
            <span
              className={`text-xs font-mono tracking-wider uppercase font-semibold ${
                isPastel ? 'text-indigo-600' : 'text-cyan-400'
              }`}
            >
              The Modellyng Paradigm
            </span>
            <h3
              className={`text-2xl font-bold mt-1 ${
                isPastel ? 'text-slate-900' : 'text-white'
              }`}
            >
              Our Solution Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div
              className={`p-5 rounded-3xl border flex flex-col justify-between space-y-3 transition-all ${
                isPastel
                  ? 'bg-white/90 border-slate-200/80 hover:border-purple-300 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-sky-50 text-sky-600'
                    : 'bg-blue-500/10 text-blue-400'
                }`}
              >
                <FileCode2 className="w-5 h-5" />
              </div>
              <div>
                <h5
                  className={`text-sm font-bold ${
                    isPastel ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  Structured Paper Model
                </h5>
                <p className="text-xs text-slate-500 mt-1">
                  Extracts objectives, datasets, methods, and constraints into
                  consistent schema.
                </p>
              </div>
              <span
                className={`text-[10px] font-mono font-medium ${
                  isPastel ? 'text-purple-600' : 'text-cyan-400'
                }`}
              >
                Core Feature
              </span>
            </div>

            <div
              className={`p-5 rounded-3xl border flex flex-col justify-between space-y-3 transition-all ${
                isPastel
                  ? 'bg-white/90 border-slate-200/80 hover:border-purple-300 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-purple-50 text-purple-600'
                    : 'bg-indigo-500/10 text-indigo-400'
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </div>
              <div>
                <h5
                  className={`text-sm font-bold ${
                    isPastel ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  Comparative Paper Matrix
                </h5>
                <p className="text-xs text-slate-500 mt-1">
                  Side-by-side dimensional matrices for systematic
                  cross-publication inspection.
                </p>
              </div>
              <span
                className={`text-[10px] font-mono font-medium ${
                  isPastel ? 'text-purple-600' : 'text-indigo-400'
                }`}
              >
                Core Feature
              </span>
            </div>

            <div
              className={`p-5 rounded-3xl border flex flex-col justify-between space-y-3 transition-all ${
                isPastel
                  ? 'bg-white/90 border-slate-200/80 hover:border-purple-300 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 hover:border-purple-500/40'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-rose-50 text-rose-600'
                    : 'bg-purple-500/10 text-purple-400'
                }`}
              >
                <Milestone className="w-5 h-5" />
              </div>
              <div>
                <h5
                  className={`text-sm font-bold ${
                    isPastel ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  Research Gap Map
                </h5>
                <p className="text-xs text-slate-500 mt-1">
                  Discovers contradictions and underexplored intersections
                  across the corpus.
                </p>
              </div>
              <span
                className={`text-[10px] font-mono font-medium ${
                  isPastel ? 'text-rose-600' : 'text-purple-400'
                }`}
              >
                Core Feature
              </span>
            </div>

            <div
              className={`p-5 rounded-3xl border flex flex-col justify-between space-y-3 transition-all ${
                isPastel
                  ? 'bg-white/90 border-slate-200/80 hover:border-emerald-300 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'bg-emerald-500/10 text-emerald-400'
                }`}
              >
                <LinkIcon className="w-5 h-5" />
              </div>
              <div>
                <h5
                  className={`text-sm font-bold ${
                    isPastel ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  Source Traceability
                </h5>
                <p className="text-xs text-slate-500 mt-1">
                  Every AI claim links directly back to exact page, paragraph,
                  or equation.
                </p>
              </div>
              <span
                className={`text-[10px] font-mono font-medium ${
                  isPastel ? 'text-emerald-600' : 'text-emerald-400'
                }`}
              >
                Trust Guarantee
              </span>
            </div>

            <div
              className={`p-5 rounded-3xl border flex flex-col justify-between space-y-3 transition-all ${
                isPastel
                  ? 'bg-white/90 border-slate-200/80 hover:border-amber-300 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-amber-50 text-amber-700'
                    : 'bg-amber-500/10 text-amber-400'
                }`}
              >
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h5
                  className={`text-sm font-bold ${
                    isPastel ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  Human-in-the-Loop
                </h5>
                <p className="text-xs text-slate-500 mt-1">
                  Researchers retain sovereignty to verify, annotate, and
                  approve outputs.
                </p>
              </div>
              <span
                className={`text-[10px] font-mono font-medium ${
                  isPastel ? 'text-amber-700' : 'text-amber-400'
                }`}
              >
                Academic Rigor
              </span>
            </div>
          </div>
        </div>

        {/* D. Target Users */}
        <div className="space-y-8">
          <div
            className={`border-b pb-4 ${
              isPastel ? 'border-slate-200' : 'border-slate-800'
            }`}
          >
            <span
              className={`text-xs font-mono tracking-wider uppercase font-semibold ${
                isPastel ? 'text-purple-600' : 'text-indigo-400'
              }`}
            >
              User Centricity
            </span>
            <h3
              className={`text-2xl font-bold mt-1 ${
                isPastel ? 'text-slate-900' : 'text-white'
              }`}
            >
              Tailored for the Academic Community
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className={`p-6 rounded-3xl border space-y-3 transition-all ${
                isPastel
                  ? 'bg-white/80 border-slate-200/80 shadow-sm text-slate-800'
                  : 'bg-slate-900/60 border-slate-800 text-slate-200'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold font-mono text-sm ${
                  isPastel
                    ? 'bg-sky-50 text-sky-700'
                    : 'bg-blue-500/10 text-blue-400'
                }`}
              >
                01
              </div>
              <h4 className="text-base font-bold">Undergraduate Students</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Penyusunan skripsi, telaah pustaka bab dua, perbandingan
                penelitian terdahulu, dan penemuan research gap secara
                sistematis.
              </p>
            </div>

            <div
              className={`p-6 rounded-3xl border space-y-3 transition-all ${
                isPastel
                  ? 'bg-white/80 border-slate-200/80 shadow-sm text-slate-800'
                  : 'bg-slate-900/60 border-slate-800 text-slate-200'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold font-mono text-sm ${
                  isPastel
                    ? 'bg-purple-50 text-purple-700'
                    : 'bg-indigo-500/10 text-indigo-400'
                }`}
              >
                02
              </div>
              <h4 className="text-base font-bold">Postgraduate Students</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sintesis literatur mendalam untuk tesis dan disertasi, pemetaan
                theoretical framework, serta penulisan manuskrip jurnal
                internasional.
              </p>
            </div>

            <div
              className={`p-6 rounded-3xl border space-y-3 transition-all ${
                isPastel
                  ? 'bg-white/80 border-slate-200/80 shadow-sm text-slate-800'
                  : 'bg-slate-900/60 border-slate-800 text-slate-200'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold font-mono text-sm ${
                  isPastel
                    ? 'bg-teal-50 text-teal-700'
                    : 'bg-cyan-500/10 text-cyan-400'
                }`}
              >
                03
              </div>
              <h4 className="text-base font-bold">
                Lecturers & Early-Career Researchers
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bimbingan penelitian mahasiswa, penulisan proposal hibah riset,
                akselerasi kajian state-of-the-art, dan publikasi bereputasi.
              </p>
            </div>

            <div
              className={`p-6 rounded-3xl border space-y-3 transition-all ${
                isPastel
                  ? 'bg-white/80 border-slate-200/80 shadow-sm text-slate-800'
                  : 'bg-slate-900/60 border-slate-800 text-slate-200'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold font-mono text-sm ${
                  isPastel
                    ? 'bg-rose-50 text-rose-700'
                    : 'bg-purple-500/10 text-purple-400'
                }`}
              >
                04
              </div>
              <h4 className="text-base font-bold">
                Educational & Research Institutions
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fakultas, program studi, laboratorium riset, dan perpustakaan
                universitas untuk meningkatkan produktivitas dan integritas sitasi
                riset.
              </p>
            </div>
          </div>
        </div>

        {/* E. Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Vision */}
          <div
            className={`lg:col-span-5 rounded-3xl p-8 border flex flex-col justify-between shadow-lg ${
              isPastel
                ? 'bg-gradient-to-br from-purple-50/90 via-rose-50/70 to-white border-purple-200/80 shadow-purple-100/40'
                : 'bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border-indigo-500/30'
            }`}
          >
            <div className="space-y-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                  isPastel
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-indigo-500/20 text-indigo-300'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                OUR VISION
              </span>
              <h4
                className={`text-xl font-bold ${
                  isPastel ? 'text-slate-900' : 'text-white'
                }`}
              >
                To become a trusted AI-powered edutech platform.
              </h4>
              <p
                className={`text-sm leading-relaxed italic ${
                  isPastel ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                “To become a trusted AI-powered edutech platform that helps
                students, lecturers, and researchers analyze and synthesize
                academic literature more efficiently, systematically, and
                evidence-based, supporting research productivity and learning in
                higher education.”
              </p>
            </div>
            <div
              className={`pt-6 border-t flex items-center gap-2 text-xs font-mono ${
                isPastel
                  ? 'border-purple-200/60 text-purple-700'
                  : 'border-slate-800 text-indigo-400'
              }`}
            >
              <Compass className="w-4 h-4" />
              Guiding Higher Education Forward
            </div>
          </div>

          {/* Mission */}
          <div
            className={`lg:col-span-7 rounded-3xl p-8 border space-y-5 shadow-lg ${
              isPastel
                ? 'bg-white/90 border-slate-200/80 shadow-slate-100'
                : 'bg-slate-900/70 border-slate-800'
            }`}
          >
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                isPastel
                  ? 'bg-sky-100 text-sky-800'
                  : 'bg-blue-500/20 text-blue-300'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              OUR MISSION
            </span>
            <h4
              className={`text-xl font-bold ${
                isPastel ? 'text-slate-900' : 'text-white'
              }`}
            >
              Strategic Commitments to Academic Integrity
            </h4>

            <ul
              className={`space-y-3.5 text-xs sm:text-sm ${
                isPastel ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              <li className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold ${
                    isPastel
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  1
                </div>
                <span>
                  Develop mobile and SaaS platforms that transform academic
                  literature into structured knowledge.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold ${
                    isPastel
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  2
                </div>
                <span>
                  Provide fast, transparent, and traceable literature analysis to
                  support better academic decision-making.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold ${
                    isPastel
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  3
                </div>
                <span>
                  Apply AI responsibly through a human-in-the-loop approach that
                  promotes accuracy, transparency, and user trust.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold ${
                    isPastel
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  4
                </div>
                <span>
                  Continuously improve the product through user validation,
                  campus pilot implementation, and user experience refinement.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold ${
                    isPastel
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  5
                </div>
                <span>
                  Build a commercially sustainable edutech service that can be
                  adopted by universities and research institutions.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
