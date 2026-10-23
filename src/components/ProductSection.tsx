import React, { useState } from 'react';
import {
  Cpu,
  FileText,
  Columns3,
  GitBranch,
  Network,
  ShieldCheck,
  Binary,
  VectorSquare,
  GitCommit,
  Table,
  ExternalLink,
  UserCheck,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ThemeMode } from '../types';

interface ProductSectionProps {
  theme: ThemeMode;
  onOpenStudio: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  theme,
  onOpenStudio
}) => {
  const isPastel = theme === 'pastel';
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const workflowSteps = [
    {
      num: '01',
      title: 'Input Academic References',
      short: 'Upload PDFs / Input DOIs',
      description:
        'Pengguna mengunggah manuskrip ilmiah format PDF, memasukkan daftar DOI, atau menyinkronkan perpustakaan referensi Zotero/Mendeley.',
      details:
        'Sistem menerima multi-dokumen sekaligus, memverifikasi metadata metadata publikasi resmi, dan menyiapkan dokumen untuk layout-aware tokenization.'
    },
    {
      num: '02',
      title: 'AI Information Extraction',
      short: 'Zero-shot Schema Parsing',
      description:
        'Mesin AI mengekstrak secara otomatis tujuan, hipotesis, metodologi, sampling data, kontribusi teoretis, dan temuan empiris utama.',
      details:
        'Menggunakan Graph Transformers untuk membedakan antara klaim penulis sendiri versus literatur yang disitir dari penelitian terdahulu.'
    },
    {
      num: '03',
      title: 'Knowledge Modeling',
      short: 'Standardized Structured Schema',
      description:
        'Data mentah diorganisasi ke dalam skema pengetahuan terstandarisasi yang siap dibandingkan antardokumen.',
      details:
        'Setiap fakta, klaim, atau batasan metodologis diberi label boks koordinat halaman (bounding box) untuk menjamin auditabilitas penuh.'
    },
    {
      num: '04',
      title: 'Compare & Discover',
      short: 'Matrix Cross-Matching & Gap Discovery',
      description:
        'Menyajikan matriks perbandingan komparatif lintas publikasi dan memvisualisasikan research gap maps secara otomatis.',
      details:
        'Mendeteksi diskrepansi temuan (misal: studi A melaporkan efektivitas 89% sementara studi B mencatat latensi tinggi) dan merekomendasikan niche riset.'
    },
    {
      num: '05',
      title: 'Review & Verify',
      short: 'Human-in-the-Loop Audit',
      description:
        'Pengguna meninjau, mengedit, memvalidasi bukti, dan mengekspor sintesis literatur ke bab dua skripsi/tesis atau manuskrip jurnal.',
      details:
        'Kendali penuh di tangan peneliti: klaim yang diverifikasi ditandai dengan lencana integritas akademik dengan stempel sitasi otomatis.'
    }
  ];

  return (
    <section
      id="product"
      className={`py-20 md:py-28 border-t transition-colors relative scroll-mt-24 ${
        isPastel
          ? 'border-slate-200/60 bg-gradient-to-b from-slate-50/50 via-sky-50/20 to-slate-50/50'
          : 'border-slate-800/80 bg-slate-950/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium border ${
              isPastel
                ? 'bg-sky-50 text-sky-700 border-sky-200'
                : 'bg-cyan-950/60 text-cyan-300 border-cyan-800/50'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            CORE INNOVATION
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isPastel ? 'text-slate-900' : 'text-white'
            }`}
          >
            Modellyng — AI-Powered Academic Knowledge Modeling
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isPastel ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            “A mobile-first platform for structured, evidence-grounded academic
            literature analysis.”
          </p>
        </div>

        {/* 5 Core Features Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div
            className={`rounded-3xl p-6 border flex flex-col justify-between space-y-4 shadow-sm transition-all hover:scale-[1.01] ${
              isPastel
                ? 'bg-white/90 border-slate-200/80 hover:border-sky-300 hover:shadow-md'
                : 'bg-slate-900/60 border-slate-800 hover:border-blue-500/30'
            }`}
          >
            <div className="space-y-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-sky-50 text-sky-600 border border-sky-100'
                    : 'bg-blue-500/10 text-blue-400'
                }`}
              >
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h4
                  className={`text-lg font-bold ${
                    isPastel ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  1. Structured Paper Model
                </h4>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    isPastel
                      ? 'bg-sky-50 text-sky-700 border-sky-200'
                      : 'bg-blue-900/60 text-blue-300 border-blue-700/50'
                  }`}
                >
                  Active Core
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Mengorganisasi informasi penting dari satu artikel ilmiah,
                termasuk tujuan, metode, hasil, kontribusi, dan keterbatasan
                penelitian secara terstruktur dan terstandarisasi.
              </p>
            </div>
            <div
              className={`pt-3 border-t text-[11px] font-medium flex items-center gap-1.5 ${
                isPastel
                  ? 'border-slate-100 text-sky-700'
                  : 'border-slate-800 text-slate-400'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" /> Standardized
              Research Schema
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className={`rounded-3xl p-6 border flex flex-col justify-between space-y-4 shadow-sm transition-all hover:scale-[1.01] ${
              isPastel
                ? 'bg-white/90 border-slate-200/80 hover:border-purple-300 hover:shadow-md'
                : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/30'
            }`}
          >
            <div className="space-y-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-purple-50 text-purple-600 border border-purple-100'
                    : 'bg-indigo-500/10 text-indigo-400'
                }`}
              >
                <Columns3 className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h4
                  className={`text-lg font-bold ${
                    isPastel ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  2. Comparative Paper Matrix
                </h4>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    isPastel
                      ? 'bg-purple-50 text-purple-700 border-purple-200'
                      : 'bg-indigo-900/60 text-indigo-300 border-indigo-700/50'
                  }`}
                >
                  Active Core
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Membantu pengguna membandingkan beberapa publikasi secara
                sistematis, terutama variasi metode, perbedaan temuan empiris, dan
                keterbatasan metodologis.
              </p>
            </div>
            <div
              className={`pt-3 border-t text-[11px] font-medium flex items-center gap-1.5 ${
                isPastel
                  ? 'border-slate-100 text-purple-700'
                  : 'border-slate-800 text-slate-400'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" /> Multi-Paper
              Matrix Cross-Matching
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className={`rounded-3xl p-6 border flex flex-col justify-between space-y-4 shadow-sm transition-all hover:scale-[1.01] ${
              isPastel
                ? 'bg-white/90 border-slate-200/80 hover:border-teal-300 hover:shadow-md'
                : 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/30'
            }`}
          >
            <div className="space-y-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-teal-50 text-teal-600 border border-teal-100'
                    : 'bg-cyan-500/10 text-cyan-400'
                }`}
              >
                <GitBranch className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h4
                  className={`text-lg font-bold ${
                    isPastel ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  3. Research Gap Map
                </h4>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    isPastel
                      ? 'bg-teal-50 text-teal-700 border-teal-200'
                      : 'bg-cyan-900/60 text-cyan-300 border-cyan-700/50'
                  }`}
                >
                  Active Core
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Membantu pengguna mengeksplorasi potensi kesenjangan dan peluang
                penelitian berdasarkan hasil analisis literatur komparatif secara
                visual.
              </p>
            </div>
            <div
              className={`pt-3 border-t text-[11px] font-medium flex items-center gap-1.5 ${
                isPastel
                  ? 'border-slate-100 text-teal-700'
                  : 'border-slate-800 text-slate-400'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" /> Gap
              Discovery Heuristics
            </div>
          </div>

          {/* Feature 4 */}
          <div
            className={`rounded-3xl p-6 border flex flex-col justify-between space-y-4 shadow-sm transition-all ${
              isPastel
                ? 'bg-amber-50/40 border-amber-200/80 text-slate-800'
                : 'bg-gradient-to-b from-amber-950/20 to-slate-900 border-amber-900/40 text-slate-100'
            }`}
          >
            <div className="space-y-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-amber-100/70 text-amber-800 border border-amber-200'
                    : 'bg-amber-500/10 text-amber-400'
                }`}
              >
                <Network className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">
                  4. Concept Map & Evidence Mapping
                </h4>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    isPastel
                      ? 'bg-amber-100 text-amber-800 border-amber-200'
                      : 'bg-amber-950 text-amber-300 border-amber-800/60'
                  }`}
                >
                  In Development
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Menyajikan hubungan antarkonsep dan keterkaitan klaim ilmiah
                dengan bukti pendukung. Direncanakan pada roadmap pengembangan
                berikutnya.
              </p>
            </div>
            <div
              className={`pt-3 border-t text-[11px] font-mono flex items-center gap-1.5 ${
                isPastel
                  ? 'border-amber-200/60 text-amber-800'
                  : 'border-slate-800 text-amber-300/80'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-amber-500" /> Planned in Phase
              02/03
            </div>
          </div>

          {/* Feature 5 */}
          <div
            className={`rounded-3xl p-6 border flex flex-col justify-between space-y-4 shadow-sm transition-all md:col-span-2 lg:col-span-2 ${
              isPastel
                ? 'bg-white/90 border-emerald-200/80 shadow-md shadow-emerald-50 text-slate-800'
                : 'bg-slate-900/60 border-slate-800 text-slate-100'
            }`}
          >
            <div className="space-y-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  isPastel
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-emerald-500/10 text-emerald-400'
                }`}
              >
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">
                  5. Source Traceability & Human-in-the-Loop
                </h4>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    isPastel
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-emerald-950 text-emerald-300 border-emerald-800/50'
                  }`}
                >
                  Core Philosophy
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Menekankan keterlacakan sumber serta keterlibatan pengguna dalam
                memeriksa dan memvalidasi hasil analisis AI. Pengguna dapat
                langsung melompat ke paragraf sumber asli dokumen referensi tanpa
                ada klaim tak berdasar (anti-hallucination).
              </p>
            </div>
            <div
              className={`pt-3 border-t text-[11px] flex items-center gap-2 font-medium ${
                isPastel
                  ? 'border-slate-100 text-emerald-700'
                  : 'border-slate-800 text-slate-400'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                Zero Black-Box AI: Setiap kutipan terverifikasi dengan bounding
                box dokumen.
              </span>
            </div>
          </div>
        </div>

        {/* 5-Stage Interactive Workflow Stepper */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span
              className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                isPastel ? 'text-purple-600' : 'text-cyan-400'
              }`}
            >
              Interactive User Experience Flow
            </span>
            <h3
              className={`text-2xl font-bold ${
                isPastel ? 'text-slate-900' : 'text-white'
              }`}
            >
              5 Tahapan Alur Kerja Modellyng
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Klik tahapan di bawah untuk melihat bagaimana literatur mentah
              diubah menjadi sintesis terstruktur:
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {workflowSteps.map((step, idx) => {
              const isActive = activeWorkflowStep === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isActive
                      ? isPastel
                        ? 'bg-white border-purple-400 shadow-md shadow-purple-100 ring-2 ring-purple-200'
                        : 'bg-slate-800 border-cyan-400 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400'
                      : isPastel
                      ? 'bg-white/70 border-slate-200/80 hover:bg-white text-slate-700'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/80 text-slate-300'
                  }`}
                  aria-pressed={isActive}
                >
                  <div
                    className={`text-xl font-black font-mono mb-1 ${
                      isActive
                        ? isPastel
                          ? 'text-purple-600'
                          : 'text-cyan-400'
                        : 'text-slate-400'
                    }`}
                  >
                    {step.num}
                  </div>
                  <h5
                    className={`text-xs font-bold truncate ${
                      isActive
                        ? isPastel
                          ? 'text-slate-900'
                          : 'text-white'
                        : ''
                    }`}
                  >
                    {step.title}
                  </h5>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">
                    {step.short}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all ${
              isPastel
                ? 'bg-white/90 border-purple-100 shadow-lg shadow-purple-100/30 text-slate-800'
                : 'bg-slate-900/80 border-slate-800 text-slate-100'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                    isPastel
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-cyan-950 text-cyan-400'
                  }`}
                >
                  {workflowSteps[activeWorkflowStep].num}
                </span>
                <h4 className="text-lg font-bold">
                  {workflowSteps[activeWorkflowStep].title}
                </h4>
              </div>
              <button
                onClick={onOpenStudio}
                className={`self-start md:self-auto px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isPastel
                    ? 'bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200'
                    : 'bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700'
                }`}
              >
                <span>Test this stage in Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Alur Operasional
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {workflowSteps[activeWorkflowStep].description}
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Mekanisme AI & Integritas
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {workflowSteps[activeWorkflowStep].details}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology & Trust (Planned Framework) */}
        <div
          className={`rounded-3xl p-6 sm:p-8 border space-y-6 ${
            isPastel
              ? 'bg-white/80 border-slate-200/80 shadow-sm text-slate-800'
              : 'bg-slate-900/50 border-slate-800 text-slate-100'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span
                className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                  isPastel ? 'text-indigo-600' : 'text-blue-400'
                }`}
              >
                Underlying Architecture
              </span>
              <h4 className="text-lg font-bold mt-0.5">
                Technology & Trust (Planned Architectural Approaches)
              </h4>
            </div>
            <span
              className={`text-[11px] font-mono px-3 py-1 rounded-full border self-start sm:self-center ${
                isPastel
                  ? 'bg-slate-100 text-slate-600 border-slate-200'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
            >
              Planned Framework
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div
              className={`p-3.5 rounded-2xl border text-center space-y-2 ${
                isPastel
                  ? 'bg-sky-50/60 border-sky-100'
                  : 'bg-slate-900/70 border-slate-800'
              }`}
            >
              <Binary
                className={`w-5 h-5 mx-auto ${
                  isPastel ? 'text-sky-600' : 'text-blue-400'
                }`}
              />
              <span className="text-xs font-medium block">
                Scientific Information Extraction
              </span>
            </div>
            <div
              className={`p-3.5 rounded-2xl border text-center space-y-2 ${
                isPastel
                  ? 'bg-teal-50/60 border-teal-100'
                  : 'bg-slate-900/70 border-slate-800'
              }`}
            >
              <VectorSquare
                className={`w-5 h-5 mx-auto ${
                  isPastel ? 'text-teal-600' : 'text-cyan-400'
                }`}
              />
              <span className="text-xs font-medium block">
                Semantic Embeddings
              </span>
            </div>
            <div
              className={`p-3.5 rounded-2xl border text-center space-y-2 ${
                isPastel
                  ? 'bg-purple-50/60 border-purple-100'
                  : 'bg-slate-900/70 border-slate-800'
              }`}
            >
              <GitCommit
                className={`w-5 h-5 mx-auto ${
                  isPastel ? 'text-purple-600' : 'text-indigo-400'
                }`}
              />
              <span className="text-xs font-medium block">
                Claim–Evidence Mapping
              </span>
            </div>
            <div
              className={`p-3.5 rounded-2xl border text-center space-y-2 ${
                isPastel
                  ? 'bg-indigo-50/60 border-indigo-100'
                  : 'bg-slate-900/70 border-slate-800'
              }`}
            >
              <Table
                className={`w-5 h-5 mx-auto ${
                  isPastel ? 'text-indigo-600' : 'text-purple-400'
                }`}
              />
              <span className="text-xs font-medium block">
                Multi-Paper Comparison
              </span>
            </div>
            <div
              className={`p-3.5 rounded-2xl border text-center space-y-2 ${
                isPastel
                  ? 'bg-emerald-50/60 border-emerald-100'
                  : 'bg-slate-900/70 border-slate-800'
              }`}
            >
              <ExternalLink
                className={`w-5 h-5 mx-auto ${
                  isPastel ? 'text-emerald-600' : 'text-emerald-400'
                }`}
              />
              <span className="text-xs font-medium block">
                Source Traceability
              </span>
            </div>
            <div
              className={`p-3.5 rounded-2xl border text-center space-y-2 ${
                isPastel
                  ? 'bg-amber-50/60 border-amber-100'
                  : 'bg-slate-900/70 border-slate-800'
              }`}
            >
              <UserCheck
                className={`w-5 h-5 mx-auto ${
                  isPastel ? 'text-amber-600' : 'text-amber-400'
                }`}
              />
              <span className="text-xs font-medium block">
                Human-in-the-Loop
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 italic">
            *Catatan: Pendekatan teknologi di atas merupakan arsitektur yang
            direncanakan dan divalidasi selama masa pengembangan MVP dan campus
            pilot.
          </p>
        </div>
      </div>
    </section>
  );
};
