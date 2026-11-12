import React, { useState, useEffect, useRef } from 'react';
import { 
  FileCheck, 
  Upload, 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  Loader2, 
  Copy, 
  Check, 
  Trash2, 
  ImageIcon, 
  AlertCircle,
  Cpu,
  Terminal,
  Activity
} from 'lucide-react';
import { DAILY_MODULES } from '../data/dailyCurriculum';
import { AppSettings, DailyModule } from '../types';
import { checkStudentWork } from '../services/apiService';
import { MarkdownView } from './MarkdownView';

interface DailyCurriculumSectionProps {
  settings: AppSettings;
  onOpenAITutor: (initialQuery?: string) => void;
}

export const DailyCurriculumSection: React.FC<DailyCurriculumSectionProps> = ({
  settings,
  onOpenAITutor
}) => {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [activeSubTab, setActiveSubTab] = useState<'homework' | 'classwork' | 'notes' | 'planning'>('homework');

  // Classwork state: { [qId]: selectedOptionIndex }
  const [classworkAnswers, setClassworkAnswers] = useState<{ [qId: number]: number }>({});
  const [classworkBatch, setClassworkBatch] = useState<number>(1);

  // Homework state
  const [typedHomeworkText, setTypedHomeworkText] = useState<string>('');
  const [page1Image, setPage1Image] = useState<{ data: string; mimeType: string; name: string } | null>(null);
  const [page2Image, setPage2Image] = useState<{ data: string; mimeType: string; name: string } | null>(null);
  
  const [isCheckingHomework, setIsCheckingHomework] = useState<boolean>(false);
  const [homeworkFeedback, setHomeworkFeedback] = useState<string | null>(null);
  const [homeworkError, setHomeworkError] = useState<string | null>(null);

  // Planning state: completed milestone keys
  const [checkedMilestones, setCheckedMilestones] = useState<string[]>([]);

  // Copy state
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);

  const currentModule: DailyModule =
    DAILY_MODULES.find((m) => m.dayNumber === selectedDayNumber) || DAILY_MODULES[0];

  const wordCount =
    typedHomeworkText.trim() === '' ? 0 : typedHomeworkText.trim().split(/\s+/).length;

  useEffect(() => {
    try {
      const stored = localStorage.getItem('iq_navigators_daily_milestones');
      if (stored) {
        setCheckedMilestones(JSON.parse(stored));
      }
    } catch (e) {
      // silent
    }
  }, []);

  const toggleMilestone = (key: string) => {
    setCheckedMilestones((prev) => {
      const next = prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key];
      try {
        localStorage.setItem('iq_navigators_daily_milestones', JSON.stringify(next));
      } catch (err) {
        // silent
      }
      return next;
    });
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, pageNum: 1 | 2) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, or JPEG) of your written homework page.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      const payload = {
        data: dataUrl,
        mimeType: file.type || 'image/jpeg',
        name: file.name
      };
      if (pageNum === 1) setPage1Image(payload);
      else setPage2Image(payload);
    };
    reader.readAsDataURL(file);
  };

  const handleEvaluateHomework = async () => {
    const hasText = typedHomeworkText.trim().length > 15;
    const hasImages = Boolean(page1Image || page2Image);

    if (!hasText && !hasImages) {
      setHomeworkError(
        'Please either type your 200-word response or upload photos of Page 1 / Page 2 before checking.'
      );
      return;
    }

    setIsCheckingHomework(true);
    setHomeworkError(null);
    setHomeworkFeedback(null);

    const imagesToSubmit: Array<{ data: string; mimeType: string }> = [];
    if (page1Image) imagesToSubmit.push({ data: page1Image.data, mimeType: page1Image.mimeType });
    if (page2Image) imagesToSubmit.push({ data: page2Image.data, mimeType: page2Image.mimeType });

    try {
      const res = await checkStudentWork({
        text: typedHomeworkText,
        images: imagesToSubmit,
        promptTitle: `${currentModule.homework.genre}: ${currentModule.homework.title}`,
        promptType: currentModule.homework.genre,
        wordTarget: currentModule.homework.targetWordCount,
        mode: 'homework',
        dayNumber: currentModule.dayNumber,
        settings
      });

      if (res.success && res.feedback) {
        setHomeworkFeedback(res.feedback);
      } else {
        setHomeworkError(res.error || 'Failed to check homework. Please check your Gemini settings.');
      }
    } catch (err: any) {
      setHomeworkError(err.message || 'Error occurred while contacting Gemini AI.');
    } finally {
      setIsCheckingHomework(false);
    }
  };

  const questionsPerPage = 10;
  const totalQuestions = currentModule.classworkQuestions.length;
  const totalBatches = Math.ceil(totalQuestions / questionsPerPage);

  const displayedQuestions = currentModule.classworkQuestions.slice(
    (classworkBatch - 1) * questionsPerPage,
    classworkBatch * questionsPerPage
  );

  const currentDayAnsweredCount = currentModule.classworkQuestions.filter(
    (q) => classworkAnswers[q.id] !== undefined
  ).length;

  const getGenreBadge = (genre: string) => {
    switch (genre) {
      case 'Creative Writing':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-emerald-500/10';
      case 'Report Writing':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40 shadow-cyan-500/10';
      case 'Dialogue Writing':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/40 shadow-purple-500/10';
      case 'Essay Writing':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/40 shadow-amber-500/10';
      default:
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40';
    }
  };

  return (
    <section id="daily-hub" className="py-16 md:py-24 bg-[#FAFAF8] dark:bg-[#060A12] relative overflow-hidden transition-colors">
      {/* Futuristic Background Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Futuristic Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/30 text-xs font-mono font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 shadow-sm animate-pulse-slow">
            <Cpu className="w-3.5 h-3.5 text-cyan-500 animate-spin-slow" />
            <span>DAILY CURRICULUM COMMAND DECK // DAYS 1–7</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Daily Notes, 50–60 Questions & Rotating Homework
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
            Daily rotating homework (<span className="text-emerald-600 dark:text-emerald-400 font-bold">Creative Writing</span>, <span className="text-cyan-600 dark:text-cyan-400 font-bold">Report Writing</span>, <span className="text-purple-600 dark:text-purple-400 font-bold">Dialogue Writing</span>, and <span className="text-amber-600 dark:text-amber-400 font-bold">Essay Writing</span>), 50–60 classwork questions, and 2-page image homework grading with Gemini AI.
          </p>
        </div>

        {/* 1. Futuristic Holographic Day Selector */}
        <div className="mt-10 flex items-center justify-start sm:justify-center overflow-x-auto gap-2.5 pb-2 scrollbar-none">
          {DAILY_MODULES.map((mod) => {
            const isSelected = selectedDayNumber === mod.dayNumber;
            return (
              <button
                key={mod.dayNumber}
                onClick={() => {
                  setSelectedDayNumber(mod.dayNumber);
                  setClassworkBatch(1);
                  setHomeworkFeedback(null);
                  setHomeworkError(null);
                }}
                className={`relative px-4 sm:px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-heading font-black transition-all cursor-pointer flex items-center gap-2.5 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navyDark text-white border-emerald-500/60 shadow-xl shadow-emerald-500/20 scale-105'
                    : 'bg-white dark:bg-[#0E1524] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-emerald-500/40'
                }`}
              >
                {/* Active Indicator Pip */}
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute -top-1 -right-1" />
                )}
                <span className="font-mono text-emerald-500 text-xs">0{mod.dayNumber}</span>
                <span className="tracking-wide">DAY {mod.dayNumber}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${getGenreBadge(mod.homework.genre)}`}>
                  {mod.homework.genre.replace(' Writing', '')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Futuristic Mission Control Banner */}
        <div className="mt-8 bg-gradient-to-br from-brand-navyDark via-[#0B1528] to-brand-navy text-white p-6 sm:p-7 rounded-3xl shadow-2xl border border-cyan-500/30 glow-hud relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-cyan-400">
                <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                <span>MISSION PARAMETERS // DAY {currentModule.dayNumber}</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400">{currentModule.badge}</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                {currentModule.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Grammar: <strong className="text-cyan-300 font-sans">{currentModule.focusGrammar}</strong></span>
                </span>
                <span className="text-slate-600">|</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Today's Writing Rotation: <strong className="text-emerald-300 font-sans font-bold uppercase">[{currentModule.homework.genre}]</strong></span>
                </span>
              </div>
            </div>

            {/* Quick Action Pills */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() =>
                  onOpenAITutor(
                    `I am studying Day ${currentModule.dayNumber}: "${currentModule.title}". Today's rotating homework is ${currentModule.homework.genre}: "${currentModule.homework.creativeWritingPrompt}". Give me 3 Band 1 Cambridge writing tips.`
                  )
                }
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-emerald via-teal-600 to-brand-cyan hover:from-emerald-600 hover:to-cyan-600 shadow-md shadow-emerald-500/30 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Ask AI Tutor on Day {currentModule.dayNumber}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Futuristic Sub-Tabs Navigation */}
        <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'homework', label: `🖋️ Daily Homework (${currentModule.homework.genre})`, badge: '2-Page Upload + Typing' },
            { id: 'classwork', label: `⚡ Classwork Terminal (55 Qs)`, badge: `${currentDayAnsweredCount}/${totalQuestions} Completed` },
            { id: 'notes', label: '📑 Cyber Theory Deck', badge: 'Core Rules' },
            { id: 'planning', label: '🎯 Mission Roadmap', badge: 'Milestones' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2.5 border ${
                activeSubTab === tab.id
                  ? 'bg-brand-navy dark:bg-white text-white dark:text-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                  : 'bg-white dark:bg-[#0E1524] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>{tab.label}</span>
              <span className="hidden sm:inline font-mono text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-extrabold">
                {tab.badge}
              </span>
            </button>
          ))}
        </div>

        {/* ======================================================== */}
        {/* SUB-TAB 1: DAILY HOMEWORK (ROTATING: REPORT/CREATIVE/DIALOGUE/ESSAY) */}
        {/* ======================================================== */}
        {activeSubTab === 'homework' && (
          <div className="mt-8 space-y-8 max-w-4xl mx-auto">
            {/* Holographic Prompt Card */}
            <div className="bg-white dark:bg-[#0E1524] border border-slate-200 dark:border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 glow-cyber-card">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border shadow-sm ${getGenreBadge(currentModule.homework.genre)}`}>
                      ★ {currentModule.homework.genre.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      // DAY {currentModule.dayNumber} HOMEWORK
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 dark:text-white">
                    {currentModule.homework.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-3 py-1 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-bold">
                    Target: {currentModule.homework.targetWordCount}
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 font-bold">
                    Up to 2 Pages Upload
                  </span>
                </div>
              </div>

              {/* Scenario Context */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 font-semibold leading-relaxed">
                  <strong className="text-emerald-600 dark:text-emerald-400">Prompt:</strong> {currentModule.homework.creativeWritingPrompt}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  <strong>Setting / Context:</strong> {currentModule.homework.scenario}
                </p>

                {/* Mandatory Cambridge Criteria */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Mandatory Cambridge CIE 1123 Directives:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {currentModule.homework.mandatoryElements.map((elem, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{elem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* DUAL SUBMISSION PORT 1: 2-PAGE IMAGE UPLOAD (PHOTOS OF HANDWRITTEN PAGES) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Upload className="w-4 h-4 text-emerald-500" />
                    <span>Upload 2 Pages of Handwritten or Printed Homework (Camera Scans):</span>
                  </label>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                    Gemini Multimodal OCR Vision Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Page 1 Scanner Port */}
                  <div className="p-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 transition-colors flex flex-col items-center justify-center min-h-[170px] text-center bg-slate-50/50 dark:bg-slate-900/40 relative group">
                    {page1Image ? (
                      <div className="w-full space-y-2">
                        <img
                          src={page1Image.data}
                          alt="Page 1 Scan"
                          className="w-full h-36 object-cover rounded-xl border border-slate-200 dark:border-slate-700"
                        />
                        <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 px-1">
                          <span className="truncate max-w-[150px] font-mono text-[11px]">
                            {page1Image.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => setPage1Image(null)}
                            className="text-rose-500 hover:underline flex items-center gap-1 text-[11px]"
                          >
                            <Trash2 className="w-3 h-3" /> Remove Page 1
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <ImageIcon className="w-5 h-5" />
                        </div>
                        <span className="font-heading font-black text-sm text-slate-800 dark:text-slate-200 block">
                          Upload Page 1 (Written Sheet)
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          Tap to select smartphone photo or scanned page
                        </span>
                        <button
                          type="button"
                          onClick={() => fileInputRef1.current?.click()}
                          className="mt-3 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100"
                        >
                          Select Page 1 Photo
                        </button>
                      </>
                    )}
                    <input
                      ref={fileInputRef1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 1)}
                      className="hidden"
                    />
                  </div>

                  {/* Page 2 Scanner Port */}
                  <div className="p-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700/80 hover:border-cyan-500 transition-colors flex flex-col items-center justify-center min-h-[170px] text-center bg-slate-50/50 dark:bg-slate-900/40 relative group">
                    {page2Image ? (
                      <div className="w-full space-y-2">
                        <img
                          src={page2Image.data}
                          alt="Page 2 Scan"
                          className="w-full h-36 object-cover rounded-xl border border-slate-200 dark:border-slate-700"
                        />
                        <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 px-1">
                          <span className="truncate max-w-[150px] font-mono text-[11px]">
                            {page2Image.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => setPage2Image(null)}
                            className="text-rose-500 hover:underline flex items-center gap-1 text-[11px]"
                          >
                            <Trash2 className="w-3 h-3" /> Remove Page 2
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <ImageIcon className="w-5 h-5" />
                        </div>
                        <span className="font-heading font-black text-sm text-slate-800 dark:text-slate-200 block">
                          Upload Page 2 (Written Sheet)
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          Optional second page for extended response
                        </span>
                        <button
                          type="button"
                          onClick={() => fileInputRef2.current?.click()}
                          className="mt-3 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100"
                        >
                          Select Page 2 Photo
                        </button>
                      </>
                    )}
                    <input
                      ref={fileInputRef2}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 2)}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              {/* DUAL SUBMISSION PORT 2: CYBER TEXT CONSOLE (200-WORD DIRECT TYPING) */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <label className="font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Or Type Your 200-Word Response Directly in Cyber Console:
                  </label>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span
                      className={`font-bold ${
                        wordCount >= 180 && wordCount <= 220
                          ? 'text-emerald-500'
                          : wordCount > 220
                          ? 'text-amber-500'
                          : 'text-slate-500'
                      }`}
                    >
                      [ {wordCount} / 200 WORDS ]
                    </span>
                    <span className="text-slate-400">
                      ({wordCount >= 190 && wordCount <= 220 ? 'Optimal' : 'Target: ~200'})
                    </span>
                  </div>
                </div>

                <textarea
                  rows={9}
                  value={typedHomeworkText}
                  onChange={(e) => setTypedHomeworkText(e.target.value)}
                  placeholder={`Type your 200-word ${currentModule.homework.genre} submission here directly, or write by hand on paper and upload the two page photos above. Gemini will transcribe handwritten pages, verify correctness, and assign Band marks...`}
                  className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 rounded-2xl p-4 text-sm leading-relaxed text-slate-800 dark:text-slate-100 focus:outline-none font-sans"
                />
              </div>

              {/* Action Trigger */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  ⚡ Neural Examiner: Verifies correctness, checks 200-word limit, and assigns Band Score.
                </div>

                <button
                  type="button"
                  onClick={handleEvaluateHomework}
                  disabled={isCheckingHomework}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-black text-white bg-gradient-to-r from-brand-emerald via-teal-600 to-brand-cyan hover:from-emerald-600 hover:to-cyan-600 rounded-2xl shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 disabled:opacity-60 transition-all cursor-pointer"
                >
                  {isCheckingHomework ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Gemini is Scanning Pages & Evaluating Homework...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-emerald-100 animate-spin-slow" />
                      <span>Check Homework with Gemini AI</span>
                    </>
                  )}
                </button>
              </div>

              {homeworkError && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-xs text-rose-700 dark:text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{homeworkError}</span>
                </div>
              )}
            </div>

            {/* Futuristic Gemini Homework Evaluation Readout */}
            {homeworkFeedback && (
              <div className="bg-white dark:bg-[#0E1524] border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 glow-cyber-card animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
                      <FileCheck className="w-5 h-5" />
                    </span>
                    <div>
                      <h4 className="font-heading font-black text-lg text-slate-900 dark:text-white flex items-center gap-2">
                        <span>Gemini Examiner Evaluation Report</span>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400">
                          DAY {currentModule.dayNumber} // {currentModule.homework.genre}
                        </span>
                      </h4>
                      <p className="text-xs text-slate-500">
                        Homework Correctness, Band Score, 200-Word Metric & Line Corrections
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(homeworkFeedback, 'hw-feedback')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 cursor-pointer"
                  >
                    {copiedKey === 'hw-feedback' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'hw-feedback' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                  <MarkdownView content={homeworkFeedback} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* SUB-TAB 2: CLASSWORK TERMINAL (55 PRACTICE QUESTIONS) */}
        {/* ======================================================== */}
        {activeSubTab === 'classwork' && (
          <div className="mt-8 space-y-6 max-w-4xl mx-auto">
            {/* Terminal Header */}
            <div className="bg-white dark:bg-[#0E1524] border border-slate-200 dark:border-cyan-500/30 rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-500 font-bold uppercase mb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CLASSWORK TERMINAL // DAY {currentModule.dayNumber}</span>
                </div>
                <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                  55 Practice Questions (Batch {classworkBatch} of {totalBatches})
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Telemetry: {currentDayAnsweredCount} of {totalQuestions} Questions Answered
                </p>
              </div>

              {/* Batch Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                {Array.from({ length: totalBatches }, (_, i) => i + 1).map((b) => (
                  <button
                    key={b}
                    onClick={() => setClassworkBatch(b)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      classworkBatch === b
                        ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Q{(b - 1) * questionsPerPage + 1}–{Math.min(b * questionsPerPage, totalQuestions)}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions Stream */}
            <div className="space-y-6">
              {displayedQuestions.map((q, idx) => {
                const questionIndexOverall = (classworkBatch - 1) * questionsPerPage + idx + 1;
                const studentChoice = classworkAnswers[q.id];
                const hasAnswered = studentChoice !== undefined;
                const isCorrect = studentChoice === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className="bg-white dark:bg-[#0E1524] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 block mb-1">
                          [ QUESTION {questionIndexOverall} / {totalQuestions} ]
                        </span>
                        <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white leading-snug">
                          {q.question}
                        </h4>
                      </div>

                      {hasAnswered && (
                        <div
                          className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold shrink-0 flex items-center gap-1 ${
                            isCorrect
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                              : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                          }`}
                        >
                          {isCorrect ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          <span>{isCorrect ? 'VERIFIED' : 'ERROR'}</span>
                        </div>
                      )}
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = studentChoice === optIdx;
                        let btnStyle =
                          'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-200';

                        if (hasAnswered) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold shadow-sm shadow-emerald-500/10';
                          } else if (isChosen) {
                            btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-300 font-bold';
                          } else {
                            btnStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() =>
                              setClassworkAnswers((prev) => ({ ...prev, [q.id]: optIdx }))
                            }
                            className={`p-3.5 rounded-xl border-2 text-left font-medium transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {hasAnswered && optIdx === q.correctIndex && (
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation HUD */}
                    {hasAnswered && (
                      <div className="p-3.5 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300 animate-in fade-in">
                        💡 <strong>Cambridge Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Batch Navigation */}
            <div className="flex items-center justify-between pt-4">
              <button
                disabled={classworkBatch === 1}
                onClick={() => setClassworkBatch((b) => Math.max(1, b - 1))}
                className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 disabled:opacity-40 cursor-pointer"
              >
                ← PREVIOUS 10 QUESTIONS
              </button>
              <span className="text-xs font-mono text-slate-400 font-medium">
                BATCH {classworkBatch} / {totalBatches}
              </span>
              <button
                disabled={classworkBatch === totalBatches}
                onClick={() => setClassworkBatch((b) => Math.min(totalBatches, b + 1))}
                className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 disabled:opacity-40 cursor-pointer"
              >
                NEXT 10 QUESTIONS →
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SUB-TAB 3: DAILY CYBER THEORY DECK */}
        {/* ======================================================== */}
        {activeSubTab === 'notes' && (
          <div className="mt-8 space-y-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-[#0E1524] border border-slate-200 dark:border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6 glow-cyber-card">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-500">
                    CYBER THEORY DECK // DAY {currentModule.dayNumber}
                  </span>
                  <h3 className="font-heading font-black text-2xl text-slate-900 dark:text-white">
                    {currentModule.notes.topicTitle}
                  </h3>
                </div>
                <button
                  onClick={() =>
                    handleCopy(
                      `${currentModule.notes.topicTitle}\n${currentModule.notes.summary}\n\n${currentModule.notes.keyPoints.join(
                        '\n'
                      )}`,
                      'day-notes'
                    )
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200"
                >
                  {copiedKey === 'day-notes' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'day-notes' ? 'Copied' : 'Copy Theory'}</span>
                </button>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                {currentModule.notes.summary}
              </p>

              {/* Key Bullet Points */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Cambridge Core Principles:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {currentModule.notes.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Examples Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Applied Cambridge Juxtaposition:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentModule.notes.examples.map((eg, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs"
                    >
                      <span className="font-bold text-cyan-600 dark:text-cyan-400 block font-mono">
                        // {eg.rule}
                      </span>
                      <div className="text-rose-600 dark:text-rose-400">
                        <strong className="block text-[10px] uppercase font-mono">Incorrect Syntax:</strong>
                        <span className="line-through">{eg.incorrect}</span>
                      </div>
                      <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        <strong className="block text-[10px] uppercase font-mono">Cambridge Correct:</strong>
                        <span>{eg.correct}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Caution Notice */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300 space-y-1">
                <span className="font-mono font-bold uppercase tracking-wider text-[10px] block">
                  ⚠️ CIE 1123 Examiner Hazard Warning:
                </span>
                <p>{currentModule.notes.cambridgeExamCaution}</p>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SUB-TAB 4: MISSION ROADMAP */}
        {/* ======================================================== */}
        {activeSubTab === 'planning' && (
          <div className="mt-8 space-y-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-[#0E1524] border border-slate-200 dark:border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6 glow-cyber-card">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  MISSION ROADMAP // DAY {currentModule.dayNumber}
                </span>
                <h3 className="font-heading font-black text-2xl text-slate-900 dark:text-white">
                  Study Protocol & Completion Telemetry
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase text-slate-400">Study Directive:</span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-1">
                    {currentModule.planning.studyGoal}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-slate-400">Time Allocation:</span>
                    <span className="block font-heading font-black text-2xl text-emerald-500 mt-0.5">
                      {currentModule.planning.estimatedMinutes} Mins
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold uppercase text-slate-400">PST Slot:</span>
                    <span className="block font-mono text-xs font-bold text-cyan-400 mt-0.5">
                      {currentModule.planning.scheduleSlot}
                    </span>
                  </div>
                </div>
              </div>

              {/* Milestones Matrix */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Mission Milestones Checklist:
                </h4>
                <div className="space-y-2.5">
                  {currentModule.planning.milestones.map((ms, idx) => {
                    const key = `day-${currentModule.dayNumber}-m-${idx}`;
                    const isChecked = checkedMilestones.includes(key);

                    return (
                      <div
                        key={idx}
                        onClick={() => toggleMilestone(key)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          isChecked
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-800 dark:text-emerald-300'
                            : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                              isChecked ? 'bg-emerald-500 text-white' : 'border border-slate-300 dark:border-slate-600'
                            }`}
                          >
                            {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                          </div>
                          <span className={`text-xs sm:text-sm font-semibold ${isChecked ? 'line-through opacity-75' : ''}`}>
                            {ms}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
