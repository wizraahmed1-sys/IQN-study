import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Volume2, 
  BookOpen, 
  Layers, 
  PenTool, 
  CheckCircle,
  HelpCircle,
  Calendar
} from 'lucide-react';
import { ONE_WORD_SUBSTITUTIONS } from '../data/vocabulary';
import { TIMETABLE_PAPERS } from '../data/assessments';

interface HeroSectionProps {
  onOpenAITutor: (initialQuery?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAITutor }) => {
  // Synchronized countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    paperName: 'Mock Paper 1: Reading & Grammar',
    dateStr: '23 Nov 2026, 6:00 PM PST'
  });

  // Calculate day of year for deterministic Word of the Day
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = (today.getTime() - startOfYear.getTime()) + ((startOfYear.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const wordIndex = dayOfYear % ONE_WORD_SUBSTITUTIONS.length;
  const wordOfTheDay = ONE_WORD_SUBSTITUTIONS[wordIndex] || ONE_WORD_SUBSTITUTIONS[0];

  const [isSpeaking, setIsSpeaking] = useState(false);

  // Synchronized 4-box countdown timer to next assessment
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const nextPaper = TIMETABLE_PAPERS.find(p => new Date(p.targetIso).getTime() > now) || TIMETABLE_PAPERS[0];
      const targetTime = new Date(nextPaper.targetIso).getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          paperName: nextPaper.name,
          dateStr: `${nextPaper.dateStr}, ${nextPaper.timeRangePST}`
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          paperName: nextPaper.name,
          dateStr: 'Assessment Commenced'
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Pronounce word using speech synthesis
  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;
      
      const voices = window.speechSynthesis.getVoices();
      const britishVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('UK') || v.name.includes('British'));
      if (britishVoice) {
        utterance.voice = britishVoice;
      }

      setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Official Cohort Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/30 text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-300 shadow-sm animate-pulse-slow">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Cambridge O Level (CIE 1123) Official Portal</span>
            <span className="text-slate-400">|</span>
            <span className="text-brand-cyan font-extrabold">Batch 7 Hub</span>
          </div>

          {/* Core Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Plan • Prepare • Perform
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Pre O Levels Batch 7 English Hub — Master the rigorous syllabus, deconstruct S.E.E.L. paragraphs, expand 120 academic substitutions, and test responses with real-time AI examination rubrics.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleScrollTo('daily-hub')}
              className="flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-gradient-to-r from-brand-emerald via-teal-600 to-brand-cyan hover:from-emerald-600 hover:to-cyan-600 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Start Daily Study (Day 1–7)</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onOpenAITutor("What is the Cambridge Band 1 criteria for CIE 1123 Directed Writing?")}
              className="flex items-center gap-2 px-7 py-3.5 text-base font-bold text-slate-800 dark:text-white bg-white dark:bg-slate-900 border-2 border-emerald-500/40 hover:border-emerald-500 hover:bg-emerald-500/5 dark:hover:bg-slate-800 rounded-xl shadow-md transition-all cursor-pointer group"
            >
              <Sparkles className="w-5 h-5 text-emerald-500 group-hover:rotate-12 transition-transform" />
              <span>Ask AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Live Synchronized Countdown Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navyDark text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-emerald-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* Countdown Details */}
            <div className="text-center md:text-left space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Next Upcoming Examination (PST)</span>
              </div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                {timeLeft.paperName}
              </h3>
              <p className="text-sm text-slate-300 font-medium">
                Official Scheduled Slot: <span className="text-brand-cyan font-semibold">{timeLeft.dateStr}</span>
              </p>
            </div>

            {/* 4 Synchronized Countdown Boxes */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full md:w-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((box) => (
                <div
                  key={box.label}
                  className="bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/15 dark:border-emerald-500/20 rounded-2xl p-2.5 sm:p-3 text-center min-w-[64px] sm:min-w-[80px]"
                >
                  <span className="font-heading font-black text-2xl sm:text-3xl text-emerald-400 block tabular-nums">
                    {String(box.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-300">
                    {box.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Word of the Day Widget */}
        <div className="mt-8 max-w-4xl mx-auto bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-lg shadow-slate-900/5 transition-all">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                Word of the Day #{wordOfTheDay.id}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Category: <strong className="text-slate-700 dark:text-slate-300">{wordOfTheDay.category}</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSpeak(wordOfTheDay.word)}
                className={`p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer ${
                  isSpeaking ? 'text-emerald-500 animate-pulse' : ''
                }`}
                title="Pronounce Word (British Accent)"
              >
                <Volume2 className="w-4 h-4" />
              </button>

              <button
                onClick={() =>
                  onOpenAITutor(
                    `How should a Cambridge CIE 1123 student use the word "${wordOfTheDay.word}" (${wordOfTheDay.partOfSpeech}) in Paper 2 writing? Provide two authentic model sentences.`
                  )
                }
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl transition-all cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Ask AI Tutor</span>
              </button>
            </div>
          </div>

          <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-2">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  {wordOfTheDay.word}
                </h3>
                <span className="italic text-sm text-slate-500 dark:text-slate-400 font-serif">
                  ({wordOfTheDay.partOfSpeech})
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {wordOfTheDay.definitionPhrase}
              </p>
            </div>

            <div className="md:col-span-7 bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1">
                Cambridge Model Sentence
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed">
                "{wordOfTheDay.exampleSentence}"
              </p>
              {wordOfTheDay.cieApplicationNote && (
                <p className="mt-2 text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                  💡 CIE Note: {wordOfTheDay.cieApplicationNote}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 4 Course Overview Quick Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: '15 Syllabus Topics',
              desc: 'Interactive checklist covering parts of speech, concord, voice, speech, and clauses.',
              icon: BookOpen,
              color: 'emerald',
              target: 'syllabus',
            },
            {
              title: '120 Vocabulary Terms',
              desc: '6 categories of one-word substitutions, homophones, and high-yield idioms.',
              icon: Layers,
              color: 'cyan',
              target: 'vocabulary',
            },
            {
              title: 'Writing Workbench',
              desc: 'Direct typing editor with real-time Gemini AI Band Scoring & S.E.E.L. analysis.',
              icon: PenTool,
              color: 'blue',
              target: 'writing',
            },
            {
              title: 'Practice Quizzes',
              desc: 'Cambridge MCQs with dedicated typed reasoning check & webhook score dispatch.',
              icon: CheckCircle,
              color: 'teal',
              target: 'quizzes',
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.title}
                onClick={() => handleScrollTo(card.target)}
                className="text-left bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="font-heading font-black text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {card.title}
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore section</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
