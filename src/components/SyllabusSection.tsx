import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  BookOpen, 
  ChevronDown, 
  ChevronUp,
  Check
} from 'lucide-react';
import { SYLLABUS_TOPICS } from '../data/syllabus';
import { SyllabusCategory } from '../types';

interface SyllabusSectionProps {
  onOpenAITutor: (initialQuery?: string) => void;
}

const CHECKLIST_STORAGE_KEY = 'iq_navigators_syllabus_mastery';

export const SyllabusSection: React.FC<SyllabusSectionProps> = ({ onOpenAITutor }) => {
  const [selectedCategory, setSelectedCategory] = useState<SyllabusCategory>('All');
  const [masteredIds, setMasteredIds] = useState<number[]>([]);
  const [expandedTopicId, setExpandedTopicId] = useState<number | null>(1); // Topic 1 open by default

  // Load mastered state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      if (stored) {
        setMasteredIds(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Could not read syllabus mastery from storage:', e);
    }
  }, []);

  // Save mastered state to localStorage
  const toggleMastered = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setMasteredIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(next));
      } catch (err) {
        console.error('Storage error:', err);
      }
      return next;
    });
  };

  const filteredTopics = SYLLABUS_TOPICS.filter((topic) => {
    if (selectedCategory === 'All') return true;
    return topic.category === selectedCategory;
  });

  const percentageMastered = Math.round((masteredIds.length / SYLLABUS_TOPICS.length) * 100);

  return (
    <section id="syllabus" className="py-16 md:py-24 bg-white dark:bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interactive Cambridge Checklist</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Objective English Syllabus (15 Core Topics)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
            Systematically check off topics as you master them. Features authentic Cambridge exam traps, correct vs incorrect examples, and instantaneous AI testing.
          </p>
        </div>

        {/* Live Mastery Progress Bar */}
        <div className="mt-10 max-w-3xl mx-auto bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                Syllabus Mastery Progress:
              </span>
              <span className="text-xs font-black px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {masteredIds.length} of {SYLLABUS_TOPICS.length} Completed
              </span>
            </div>
            <span className="font-heading font-black text-lg text-emerald-600 dark:text-emerald-400">
              {percentageMastered}%
            </span>
          </div>

          <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${percentageMastered}%` }}
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {(['All', 'Core Grammar', 'Sentence Structure', 'Applied Vocabulary'] as SyllabusCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Topics Accordion List */}
        <div className="mt-10 space-y-4 max-w-5xl mx-auto">
          {filteredTopics.map((topic) => {
            const isMastered = masteredIds.includes(topic.id);
            const isExpanded = expandedTopicId === topic.id;

            return (
              <div
                key={topic.id}
                className={`border rounded-3xl transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-white dark:bg-[#111827] border-emerald-500/50 shadow-lg shadow-emerald-500/5'
                    : 'bg-white dark:bg-[#111827] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Topic Header Bar */}
                <div
                  onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                  className="p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Tickable Checkbox */}
                    <button
                      type="button"
                      onClick={(e) => toggleMastered(topic.id, e)}
                      className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                        isMastered
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                          : 'border-2 border-slate-300 dark:border-slate-700 hover:border-emerald-500'
                      }`}
                      title={isMastered ? "Mark as in-progress" : "Mark as mastered"}
                    >
                      {isMastered && <Check className="w-4 h-4 stroke-[3]" />}
                    </button>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">
                          Topic {topic.id}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {topic.category}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                          {topic.badge}
                        </span>
                      </div>
                      <h3
                        className={`font-heading font-black text-base sm:text-lg text-slate-900 dark:text-white ${
                          isMastered ? 'line-through decoration-emerald-500/60 text-slate-400 dark:text-slate-500' : ''
                        }`}
                      >
                        {topic.title}
                      </h3>
                    </div>
                  </div>

                  {/* Actions & Chevron */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenAITutor(
                          `Please test my understanding of Topic ${topic.id}: "${topic.title}". ${topic.testPrompt}`
                        );
                      }}
                      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all shadow-sm cursor-pointer"
                      title="Test this topic with the AI Tutor"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Test Me with AI</span>
                    </button>

                    <div className="text-slate-400 dark:text-slate-500">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Topic Details */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-6 animate-in slide-in-from-top-1 duration-200">
                    {/* Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {topic.summary}
                    </p>

                    {/* Key Rules */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
                        Key Grammatical & Cambridge Rules
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {topic.keyRules.map((rule, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                            <span className="leading-relaxed">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Correct vs Incorrect Examples */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
                        Correct vs Incorrect Applied Examples
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {topic.examples.map((eg, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2.5"
                          >
                            <div className="flex items-start gap-2 text-rose-600 dark:text-rose-400 text-xs">
                              <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                              <div>
                                <strong className="font-bold block uppercase text-[10px]">Incorrect:</strong>
                                <span className="line-through">{eg.incorrect}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 text-xs">
                              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                              <div>
                                <strong className="font-bold block uppercase text-[10px]">Correct (CIE 1123):</strong>
                                <span className="font-semibold">{eg.correct}</span>
                              </div>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 leading-normal">
                              💡 <strong>Rule Justification:</strong> {eg.explanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cambridge Exam Traps */}
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                      <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-xs uppercase tracking-wider mb-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Cambridge CIE 1123 Examiner Traps</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {topic.cambridgeTraps.map((trap, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>{trap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mobile Test Me With AI Button */}
                    <div className="sm:hidden pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          onOpenAITutor(
                            `Please test my understanding of Topic ${topic.id}: "${topic.title}". ${topic.testPrompt}`
                          )
                        }
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Test Me on Topic {topic.id} with AI</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
