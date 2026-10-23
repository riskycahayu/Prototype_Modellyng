import React from 'react';
import { MapPin, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { RoadmapPhase, ThemeMode } from '../types';

interface RoadmapSectionProps {
  theme: ThemeMode;
  phases: RoadmapPhase[];
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  theme,
  phases
}) => {
  const isPastel = theme === 'pastel';

  return (
    <section
      id="roadmap"
      className={`py-20 md:py-28 border-t transition-colors relative scroll-mt-24 ${
        isPastel
          ? 'border-slate-200/60 bg-gradient-to-b from-slate-50/50 via-purple-50/20 to-slate-50/50'
          : 'border-slate-800/80 bg-slate-950/40'
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
            <MapPin className="w-3.5 h-3.5" />
            TRANSPARENT DEVELOPMENT
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isPastel ? 'text-slate-900' : 'text-white'
            }`}
          >
            Our Journey & Roadmap
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isPastel ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            Tahapan pengembangan Modellyng yang transparan, terukur, dan
            berorientasi pada validasi pengguna nyata di ekosistem perguruan
            tinggi.
          </p>

          {/* Status Legend */}
          <div className="flex items-center justify-center gap-6 pt-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isPastel ? 'bg-purple-600' : 'bg-cyan-400'
                }`}
              />
              <span
                className={isPastel ? 'text-slate-700' : 'text-slate-300'}
              >
                In Progress
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-600" />
              <span className="text-slate-500">Planned</span>
            </div>
          </div>
        </div>

        {/* Roadmap Timeline Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {phases.map((phase) => {
            const isInProgress = phase.status === 'In Progress';

            return (
              <div
                key={phase.number}
                className={`rounded-3xl p-6 sm:p-7 border-l-4 border shadow-sm transition-all hover:scale-[1.005] ${
                  isInProgress
                    ? isPastel
                      ? 'border-l-purple-500 bg-white/95 border-purple-200/80 shadow-md shadow-purple-100/50'
                      : 'border-l-cyan-400 bg-slate-900/80 border-slate-800'
                    : isPastel
                    ? 'border-l-slate-300 bg-white/80 border-slate-200/80'
                    : 'border-l-slate-700 bg-slate-900/60 border-slate-800'
                } space-y-4`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-lg font-black font-mono ${
                        isInProgress
                          ? isPastel
                            ? 'text-purple-600'
                            : 'text-cyan-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {phase.phase}
                    </span>
                    <h4
                      className={`text-lg font-bold ${
                        isPastel ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {phase.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {isInProgress ? (
                      <span
                        className={`text-[11px] font-mono px-3 py-1 rounded-full border flex items-center gap-1.5 font-semibold ${
                          isPastel
                            ? 'bg-purple-50 text-purple-700 border-purple-200'
                            : 'bg-cyan-950 text-cyan-300 border-cyan-800/60'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                            isPastel ? 'bg-purple-600' : 'bg-cyan-400'
                          }`}
                        />
                        In Progress
                      </span>
                    ) : (
                      <span
                        className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                          isPastel
                            ? 'bg-slate-100 text-slate-600 border-slate-200'
                            : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        Planned
                      </span>
                    )}

                    {phase.duration && (
                      <span
                        className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                          isPastel
                            ? 'bg-slate-50 text-slate-600 border-slate-200'
                            : 'bg-slate-900 text-slate-300 border-slate-800'
                        }`}
                      >
                        {phase.duration}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {phase.description}
                </p>

                {/* Deliverables Checklist */}
                <div
                  className={`pt-3 border-t text-xs space-y-1.5 ${
                    isPastel ? 'border-slate-100' : 'border-slate-800/80'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Key Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {phase.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded-xl border flex items-start gap-2 ${
                          isPastel
                            ? 'bg-slate-50/80 border-slate-200/60 text-slate-700'
                            : 'bg-slate-950/70 border-slate-800 text-slate-300'
                        }`}
                      >
                        <CheckCircle
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isInProgress
                              ? isPastel
                                ? 'text-purple-600'
                                : 'text-cyan-400'
                              : 'text-slate-400'
                          }`}
                        />
                        <span className="text-[11px] leading-tight">
                          {deliv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
