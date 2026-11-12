import React from 'react';
import { Compass, ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenAITutor: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAITutor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#070B14] border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-100 dark:border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-navy via-brand-emerald to-brand-cyan p-0.5 shadow-md">
                <div className="w-full h-full bg-white dark:bg-[#0B0F19] rounded-[14px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
              <div>
                <span className="font-heading font-black text-lg text-slate-900 dark:text-white block">
                  IQ Navigators Batch 7
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  Pre O Levels English Hub (CIE 1123)
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              Empowering Batch 7 scholars with high-fidelity Cambridge examination rubrics, interactive grammar concord checklists, 120 vocabulary mastery cards, and instantaneous Gemini AI feedback.
            </p>

            <div className="text-xs font-bold text-brand-cyan">
              IQ Navigators – Raising Intellectuals
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-black text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Curriculum & Sections
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-300">
              <li>
                <a href="#assessment" className="hover:text-emerald-500 transition-colors">
                  Assessment Plan & Timetable (PST)
                </a>
              </li>
              <li>
                <a href="#syllabus" className="hover:text-emerald-500 transition-colors">
                  15 Interactive Syllabus Topics
                </a>
              </li>
              <li>
                <a href="#writing" className="hover:text-emerald-500 transition-colors">
                  Writing Workbench & S.E.E.L. Formula
                </a>
              </li>
              <li>
                <a href="#vocabulary" className="hover:text-emerald-500 transition-colors">
                  120 Vocabulary Substitutions & Idioms
                </a>
              </li>
              <li>
                <a href="#quizzes" className="hover:text-emerald-500 transition-colors">
                  Practice Quizzes & Gemini Scoring
                </a>
              </li>
            </ul>
          </div>

          {/* Cambridge CIE 1123 Standards */}
          <div className="space-y-3">
            <h4 className="font-heading font-black text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Cambridge Resources
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-300">
              <li>
                <span className="text-slate-500">Paper 1: Reading & Grammar (50M)</span>
              </li>
              <li>
                <span className="text-slate-500">Paper 2: Subjective Writing (60M)</span>
              </li>
              <li>
                <span className="text-slate-500">Paper 3: Listening & Speaking (40M)</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenAITutor}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 text-xs font-bold transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI Tutor Anything</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} IQ Navigators – Pre O Levels Batch 7. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-bold text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
