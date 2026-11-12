import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DailyCurriculumSection } from './components/DailyCurriculumSection';
import { AssessmentSection } from './components/AssessmentSection';
import { SyllabusSection } from './components/SyllabusSection';
import { WritingSection } from './components/WritingSection';
import { VocabularySection } from './components/VocabularySection';
import { QuizSection } from './components/QuizSection';
import { FloatingAITutor } from './components/FloatingAITutor';
import { SettingsModal } from './components/SettingsModal';
import { Footer } from './components/Footer';
import { AppSettings } from './types';
import { getStoredSettings, saveStoredSettings } from './services/apiService';

export const App: React.FC = () => {
  const [settings, setSettings] = useState<AppSettings>(() => getStoredSettings());
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState<boolean>(false);
  const [aiTutorPreloadedQuery, setAiTutorPreloadedQuery] = useState<string | undefined>(undefined);

  // Sync dark mode class on HTML document
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  const handleToggleDarkMode = () => {
    const updated = { ...settings, darkMode: !settings.darkMode };
    setSettings(updated);
    saveStoredSettings(updated);
  };

  const handleSaveSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    saveStoredSettings(newSettings);
  };

  const handleOpenAITutorWithQuery = (query?: string) => {
    setAiTutorPreloadedQuery(query);
    setIsAITutorOpen(true);
  };

  const handleResetProgress = () => {
    try {
      localStorage.removeItem('iq_navigators_syllabus_mastery');
      localStorage.removeItem('iq_navigators_learned_vocab');
      window.location.reload();
    } catch (e) {
      console.error('Error clearing progress:', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 flex flex-col relative selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300">
      {/* Background Ambient Mesh */}
      <div className="fixed inset-0 bg-grid-mesh pointer-events-none opacity-60 -z-10" />

      {/* 1. Sticky Navigation Bar */}
      <Navbar
        darkMode={settings.darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenAITutor={() => handleOpenAITutorWithQuery()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section B: Hero Section */}
        <HeroSection onOpenAITutor={handleOpenAITutorWithQuery} />

        {/* Section: Daily Learning Hub (Day 1 – Day 7) */}
        <DailyCurriculumSection
          settings={settings}
          onOpenAITutor={handleOpenAITutorWithQuery}
        />

        {/* Section C: Assessment Plan & Timetable */}
        <AssessmentSection />

        {/* Section D: Objective English Syllabus Checklist */}
        <SyllabusSection onOpenAITutor={handleOpenAITutorWithQuery} />

        {/* Section E: Writing Workbench, Notes & Formulas */}
        <WritingSection
          settings={settings}
          onOpenAITutor={handleOpenAITutorWithQuery}
        />

        {/* Section F: Vocabulary Hub (120 Substitutions, Pairs & Idioms) */}
        <VocabularySection onOpenAITutor={handleOpenAITutorWithQuery} />

        {/* Section G: Practice Quizzes & Gemini Typed Checking */}
        <QuizSection
          settings={settings}
          onOpenAITutor={handleOpenAITutorWithQuery}
        />
      </main>

      {/* Section J: Footer */}
      <Footer onOpenAITutor={() => handleOpenAITutorWithQuery()} />

      {/* Section H: Floating AI Tutor (STRICTLY FIXED in Bottom-Left Corner) */}
      <FloatingAITutor
        settings={settings}
        isOpen={isAITutorOpen}
        onOpen={() => setIsAITutorOpen(true)}
        onClose={() => setIsAITutorOpen(false)}
        preloadedQuery={aiTutorPreloadedQuery}
      />

      {/* Section I: Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSaveSettings={handleSaveSettings}
        onResetProgress={handleResetProgress}
      />
    </div>
  );
};
