import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Moon, Sun, Settings, Menu, X, Clock } from 'lucide-react';
import { TIMETABLE_PAPERS } from '../data/assessments';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSettings: () => void;
  onOpenAITutor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenSettings,
  onOpenAITutor,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [nextPaperText, setNextPaperText] = useState('Mock Paper 1: in 11d 7h');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update dynamic countdown pill
  useEffect(() => {
    const updatePill = () => {
      const now = new Date().getTime();
      const nextPaper = TIMETABLE_PAPERS.find(p => new Date(p.targetIso).getTime() > now) || TIMETABLE_PAPERS[0];
      const target = new Date(nextPaper.targetIso).getTime();
      const diff = target - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setNextPaperText(`${nextPaper.paperComponent}: in ${days}d ${hours}h`);
      } else {
        setNextPaperText(`${nextPaper.paperComponent}: Active`);
      }
    };

    updatePill();
    const interval = setInterval(updatePill, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Daily Hub (Days 1–7)', href: '#daily-hub' },
    { label: 'Assessment Plan', href: '#assessment' },
    { label: 'Syllabus Checklist', href: '#syllabus' },
    { label: 'Writing Workbench', href: '#writing' },
    { label: 'Vocabulary Hub', href: '#vocabulary' },
    { label: 'Quizzes', href: '#quizzes' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md shadow-md shadow-slate-900/5 dark:shadow-black/40 border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-white dark:bg-[#0B0F19] border-b border-slate-200/60 dark:border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-navy via-brand-emerald to-brand-cyan p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white dark:bg-[#0B0F19] rounded-[14px] flex items-center justify-center">
                <Compass className="w-6 h-6 text-brand-emerald group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl tracking-tight text-slate-900 dark:text-white">
                  IQ Navigators
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full">
                  Batch 7
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Guiding Young Minds Towards Excellence
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & Live Countdown Pill */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Live Countdown Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-700 dark:text-emerald-300 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span>{nextPaperText}</span>
            </div>

            {/* Ask AI Tutor Button */}
            <button
              onClick={onOpenAITutor}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-emerald to-brand-cyan hover:from-emerald-600 hover:to-cyan-600 rounded-xl shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              title="Open AI Tutor (Powered by n8n Webhook)"
            >
              <Sparkles className="w-4 h-4 text-emerald-100 animate-spin-slow" />
              <span className="hidden sm:inline">Ask AI Tutor</span>
              <span className="sm:hidden">AI</span>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* Settings Gear Icon */}
            <button
              onClick={onOpenSettings}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
              aria-label="Open Settings"
              title="Configure API Keys, Webhook & Profile"
            >
              <Settings className="w-4 h-4 hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Mobile Countdown */}
          <div className="flex items-center gap-2 px-3 py-2 mb-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            <Clock className="w-4 h-4 text-emerald-500" />
            <span>Next Assessment: {nextPaperText}</span>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="block w-full text-left px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
