import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Award, 
  FileText, 
  Headphones, 
  PenTool, 
  CheckCircle2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { ASSESSMENT_COMPONENTS, TIMETABLE_PAPERS, REGULATIONS_NOTICE } from '../data/assessments';
import { AssessmentType } from '../types';

export const AssessmentSection: React.FC = () => {
  const [filter, setFilter] = useState<AssessmentType>('all');
  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(TIMETABLE_PAPERS[0].id);

  const filteredPapers = TIMETABLE_PAPERS.filter((paper) => {
    if (filter === 'all') return true;
    return paper.type === filter;
  });

  const getComponentIcon = (code: string) => {
    switch (code) {
      case 'Paper 1':
        return <FileText className="w-6 h-6 text-emerald-500" />;
      case 'Paper 2':
        return <PenTool className="w-6 h-6 text-cyan-500" />;
      case 'Paper 3':
        return <Headphones className="w-6 h-6 text-blue-500" />;
      default:
        return <FileText className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <section id="assessment" className="py-16 md:py-24 bg-slate-50/50 dark:bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Cambridge Assessment Protocol</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Assessment Plan & PST Examination Timetable
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
            Strictly aligned with Cambridge O Level English (CIE 1123). All examination slots reflect authentic Pakistan Standard Time (PST).
          </p>
        </div>

        {/* 3 Component Breakdown Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ASSESSMENT_COMPONENTS.map((comp) => (
            <div
              key={comp.componentCode}
              className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80">
                    {getComponentIcon(comp.componentCode)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {comp.weightage}
                  </span>
                </div>

                <div className="space-y-1 mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {comp.componentCode}
                  </span>
                  <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                    {comp.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 py-3 border-y border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-500" />
                    <span>{comp.marks} Total Marks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span>{comp.duration}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {comp.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Syllabus Key Sections:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {comp.keySections.map((sec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold block mb-0.5">
                  Cambridge Examiner Insight:
                </strong>
                {comp.cieGuidance}
              </div>
            </div>
          ))}
        </div>

        {/* Timetable Controls & Table */}
        <div className="mt-16 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="font-heading font-black text-2xl text-slate-900 dark:text-white">
                Official Pre O Levels Batch 7 Timetable
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Synchronized with Pakistan Standard Time (UTC+5:00)
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700">
              {(['all', 'mock', 'final'] as AssessmentType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    filter === tab
                      ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab === 'all' ? 'All (6 Papers)' : tab === 'mock' ? 'Mocks' : 'Finals'}
                </button>
              ))}
            </div>
          </div>

          {/* Timetable Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  <th className="pb-3 px-4">Examination Paper</th>
                  <th className="pb-3 px-4">PST Date & Day</th>
                  <th className="pb-3 px-4">Time Slot (PST)</th>
                  <th className="pb-3 px-4">Duration</th>
                  <th className="pb-3 px-4">Marks & Weightage</th>
                  <th className="pb-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
                {filteredPapers.map((paper) => {
                  const isSelected = selectedPaperId === paper.id;
                  return (
                    <tr
                      key={paper.id}
                      onClick={() => setSelectedPaperId(isSelected ? null : paper.id)}
                      className={`group hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors cursor-pointer ${
                        isSelected ? 'bg-emerald-500/5 dark:bg-emerald-500/10' : ''
                      }`}
                    >
                      <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              paper.type === 'mock' ? 'bg-amber-400' : 'bg-emerald-500'
                            }`}
                          />
                          <div>
                            <span className="block font-heading font-bold text-base">{paper.name}</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">{paper.focus}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-700 dark:text-slate-300 font-medium">
                        <span className="block font-bold">{paper.dateStr}</span>
                        <span className="text-xs text-slate-400">{paper.dayStr}</span>
                      </td>
                      <td className="py-4 px-4 font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">
                        {paper.timeRangePST}
                      </td>
                      <td className="py-4 px-4 text-slate-600 dark:text-slate-400 text-xs font-semibold">
                        {paper.durationStr}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-800 dark:text-slate-200">{paper.marks}M</span>
                          <span className="text-xs text-slate-400">({paper.weightage})</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                          <span>{isSelected ? 'Collapse' : 'Details'}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Expanded Selected Paper Details Drawer */}
          {selectedPaperId && (
            <div className="mt-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-emerald-500/30 animate-in fade-in duration-200">
              {(() => {
                const active = TIMETABLE_PAPERS.find(p => p.id === selectedPaperId);
                if (!active) return null;
                return (
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase bg-emerald-500 text-white">
                          {active.type.toUpperCase()}
                        </span>
                        <h4 className="font-heading font-black text-lg text-slate-900 dark:text-white">
                          {active.name} — Syllabus Scope & Instructions
                        </h4>
                      </div>
                      <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 font-mono">
                        {active.dateStr} | {active.timeRangePST}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                      {active.details.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* Official Regulations Notice */}
        <div className="mt-8 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-cyan-500/10 border border-amber-500/30 rounded-3xl p-6 sm:p-7">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-700 dark:text-amber-300 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-heading font-black text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <span>{REGULATIONS_NOTICE.title}</span>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded-md">
                  Mandatory
                </span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {REGULATIONS_NOTICE.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
