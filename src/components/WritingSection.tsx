import React, { useState } from 'react';
import { 
  PenTool, 
  Sparkles, 
  Copy, 
  Check, 
  Loader2,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { 
  WRITING_PROMPTS, 
  SEEL_FORMULA_DETAILS, 
  ESSAY_STRUCTURES, 
  DESCRIPTIVE_WRITING_GUIDE, 
  NARRATIVE_WRITING_GUIDE, 
  FORMAL_VS_INFORMAL_MATRIX, 
  DIRECTED_WRITING_FORMATS 
} from '../data/writingData';
import { AppSettings } from '../types';
import { checkStudentWork } from '../services/apiService';
import { MarkdownView } from './MarkdownView';

interface WritingSectionProps {
  settings: AppSettings;
  onOpenAITutor: (initialQuery?: string) => void;
}

export const WritingSection: React.FC<WritingSectionProps> = ({ settings, onOpenAITutor }) => {
  const [activeTab, setActiveTab] = useState<string>('workbench');
  
  // Workbench state
  const [selectedPromptId, setSelectedPromptId] = useState<string>(WRITING_PROMPTS[0].id);
  const [studentText, setStudentText] = useState<string>('');
  const [customPromptDetails, setCustomPromptDetails] = useState<string>('');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationFeedback, setEvaluationFeedback] = useState<string | null>(null);
  const [evalError, setEvalError] = useState<string | null>(null);

  // Copy helper
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const selectedPrompt = WRITING_PROMPTS.find(p => p.id === selectedPromptId) || WRITING_PROMPTS[0];

  const wordCount = studentText.trim() === '' ? 0 : studentText.trim().split(/\s+/).length;
  const charCount = studentText.length;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleEvaluate = async () => {
    if (studentText.trim().length < 20) {
      setEvalError('Please type at least 20 words before submitting for Cambridge evaluation.');
      return;
    }

    setIsEvaluating(true);
    setEvalError(null);
    setEvaluationFeedback(null);

    const promptTitle = selectedPrompt.id === 'custom-prompt' && customPromptDetails.trim() 
      ? `Custom Prompt: ${customPromptDetails}`
      : selectedPrompt.title;

    try {
      const res = await checkStudentWork({
        text: studentText,
        promptTitle,
        promptType: selectedPrompt.type,
        wordTarget: selectedPrompt.wordTarget,
        mode: 'composition',
        settings
      });

      if (res.success && res.feedback) {
        setEvaluationFeedback(res.feedback);
      } else {
        setEvalError(res.error || 'Unable to evaluate text. Please check your Gemini settings.');
      }
    } catch (err: any) {
      setEvalError(err.message || 'An unexpected error occurred during evaluation.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const tabs = [
    { id: 'workbench', label: '✍️ Type & Check with Gemini' },
    { id: 'seel', label: 'S.E.E.L. Formula' },
    { id: 'structures', label: '4 & 5-Para Structures' },
    { id: 'descriptive', label: 'Descriptive Writing' },
    { id: 'narrative', label: 'Narrative Writing' },
    { id: 'matrix', label: 'Formal vs Informal Matrix' },
    { id: 'directed', label: 'Directed Writing Formats' },
  ];

  return (
    <section id="writing" className="py-16 md:py-24 bg-slate-50/60 dark:bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider">
            <PenTool className="w-3.5 h-3.5" />
            <span>Cambridge Subjective Mastery</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Writing Workbench, Notes & Formulas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
            Type essays directly into the Cambridge Workbench for instant Gemini AI Band evaluation, or study master formulas including S.E.E.L. and authentic CIE models.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-10 flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: WORKBENCH */}
        {activeTab === 'workbench' && (
          <div className="mt-8 space-y-6">
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              {/* Prompt Selector Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Select Cambridge Writing Task / Prompt:
                </label>
                <select
                  value={selectedPromptId}
                  onChange={(e) => setSelectedPromptId(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  {WRITING_PROMPTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      [{p.type}] {p.title} ({p.allocatedMarks})
                    </option>
                  ))}
                </select>
              </div>

              {/* Prompt Details Card */}
              <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {selectedPrompt.type}
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenAITutor(`How should I structure my response for this Cambridge prompt: "${selectedPrompt.title}"?`)}
                      className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Ask Tutor for ideas</span>
                    </button>
                  </div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Target: <strong className="text-slate-700 dark:text-slate-200">{selectedPrompt.wordTarget}</strong> | Marks: <strong className="text-slate-700 dark:text-slate-200">{selectedPrompt.allocatedMarks}</strong>
                  </span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  {selectedPrompt.scenario}
                </p>

                {/* Bullet Points */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    Mandatory Cambridge Bullet Points:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {selectedPrompt.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* If Custom Prompt, show custom textarea */}
                {selectedPrompt.id === 'custom-prompt' && (
                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Paste your past paper prompt or specific task requirements here..."
                      value={customPromptDetails}
                      onChange={(e) => setCustomPromptDetails(e.target.value)}
                      className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                )}
              </div>

              {/* Direct Student Typing Textarea */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <label className="font-bold uppercase tracking-wider">
                    Student Composition Workspace (Pure Text Typing):
                  </label>
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      {wordCount} Words
                    </span>
                    <span className="text-slate-400">|</span>
                    <span>{charCount} Characters</span>
                  </div>
                </div>

                <textarea
                  rows={14}
                  value={studentText}
                  onChange={(e) => setStudentText(e.target.value)}
                  placeholder="Begin typing your response directly here. Zero image upload required—focus purely on sentence structure, S.E.E.L. paragraphs, and vocabulary..."
                  className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 focus:border-emerald-500 dark:focus:border-emerald-500 rounded-2xl p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none transition-all font-sans"
                />
              </div>

              {/* Action Button & Error */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  ⚡ Strictly evaluated with Cambridge O Level English (CIE 1123) rubrics via Google Gemini.
                </div>

                <button
                  type="button"
                  onClick={handleEvaluate}
                  disabled={isEvaluating}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-black text-white bg-gradient-to-r from-brand-emerald via-teal-600 to-brand-cyan hover:from-emerald-600 hover:to-cyan-600 rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 disabled:opacity-60 transition-all cursor-pointer"
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Examining Response with Gemini AI...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-emerald-100" />
                      <span>Evaluate & Check with Gemini AI</span>
                    </>
                  )}
                </button>
              </div>

              {evalError && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-xs text-rose-700 dark:text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{evalError}</span>
                </div>
              )}
            </div>

            {/* Live Examiner Evaluation Card */}
            {evaluationFeedback && (
              <div className="bg-white dark:bg-[#111827] border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 animate-in fade-in duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                        Official Cambridge Examiner Critique
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        CIE 1123 Band Marks, Content, S.E.E.L. Architecture & Line Corrections
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(evaluationFeedback, 'eval-feedback')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copiedKey === 'eval-feedback' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Report</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                  <MarkdownView content={evaluationFeedback} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SEEL FORMULA */}
        {activeTab === 'seel' && (
          <div className="mt-8 space-y-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {SEEL_FORMULA_DETAILS.acronym}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mt-2">
                  {SEEL_FORMULA_DETAILS.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {SEEL_FORMULA_DETAILS.subtitle}
                </p>
              </div>

              {/* 4 Color-Coded Elements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SEEL_FORMULA_DETAILS.elements.map((elem) => (
                  <div
                    key={elem.letter}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-heading font-black text-base border ${elem.badgeColor}`}>
                        {elem.letter}
                      </span>
                      <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                        {elem.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {elem.description}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                      💡 <strong>Cambridge Tip:</strong> {elem.guidelines}
                    </p>
                  </div>
                ))}
              </div>

              {/* Color-Coded Model Paragraph */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-black text-lg text-slate-900 dark:text-white">
                    Integrated Color-Coded Model S.E.E.L. Paragraph
                  </h4>
                  <button
                    onClick={() =>
                      handleCopy(
                        SEEL_FORMULA_DETAILS.modelParagraph.colorCodedParts.map(p => p.text).join(' '),
                        'seel-model'
                      )
                    }
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copiedKey === 'seel-model' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'seel-model' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  {SEEL_FORMULA_DETAILS.modelParagraph.prompt}
                </p>

                <div className="space-y-3 pt-2">
                  {SEEL_FORMULA_DETAILS.modelParagraph.colorCodedParts.map((part, idx) => (
                    <div key={idx} className={`p-4 rounded-xl ${part.bgColor} transition-all`}>
                      <span className={`block text-xs uppercase tracking-wider mb-1 ${part.color}`}>
                        {part.part}:
                      </span>
                      <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                        {part.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ESSAY STRUCTURES */}
        {activeTab === 'structures' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 4-Paragraph Plan */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Directed Writing Plan
                </span>
                <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white mt-1">
                  {ESSAY_STRUCTURES.fourParagraph.title}
                </h3>
                <span className="text-xs font-semibold text-slate-400">
                  Target: {ESSAY_STRUCTURES.fourParagraph.targetWordCount}
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {ESSAY_STRUCTURES.fourParagraph.diagram.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                    <h4 className="font-heading font-bold text-sm text-emerald-600 dark:text-emerald-400">
                      {step.step}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-Paragraph Plan with Counter-Argument */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Discursive / Continuous Writing
                </span>
                <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white mt-1">
                  {ESSAY_STRUCTURES.fiveParagraph.title}
                </h3>
                <span className="text-xs font-semibold text-slate-400">
                  Target: {ESSAY_STRUCTURES.fiveParagraph.targetWordCount}
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {ESSAY_STRUCTURES.fiveParagraph.diagram.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                    <h4 className="font-heading font-bold text-sm text-cyan-600 dark:text-cyan-400">
                      {step.step}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DESCRIPTIVE WRITING */}
        {activeTab === 'descriptive' && (
          <div className="mt-8 space-y-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Paper 2 Section B (35 Marks)
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mt-2">
                  {DESCRIPTIVE_WRITING_GUIDE.title}
                </h3>
                <div className="mt-3 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  ⭐ {DESCRIPTIVE_WRITING_GUIDE.goldenRule}
                </div>
              </div>

              {/* 5 Senses Breakdown Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  5 Senses Sensory Breakdown Table
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                    <thead className="bg-slate-100 dark:bg-slate-800/80 font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      <tr>
                        <th className="p-3 w-1/4">Sensory Dimension</th>
                        <th className="p-3">High-Impact Cambridge Imagery & Adjectives</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {DESCRIPTIVE_WRITING_GUIDE.sensesTable.map((row) => (
                        <tr key={row.sense} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                          <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">{row.sense}</td>
                          <td className="p-3 text-slate-700 dark:text-slate-300 leading-relaxed">{row.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Full Authentic Model Text */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-black text-lg text-slate-900 dark:text-white">
                    Full Authentic Model: "{DESCRIPTIVE_WRITING_GUIDE.modelTitle}"
                  </h4>
                  <button
                    onClick={() => handleCopy(DESCRIPTIVE_WRITING_GUIDE.modelText, 'desc-model')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copiedKey === 'desc-model' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'desc-model' ? 'Copied' : 'Copy Text'}</span>
                  </button>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-serif leading-relaxed whitespace-pre-line">
                  {DESCRIPTIVE_WRITING_GUIDE.modelText}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: NARRATIVE WRITING */}
        {activeTab === 'narrative' && (
          <div className="mt-8 space-y-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  Paper 2 Section B (35 Marks)
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mt-2">
                  {NARRATIVE_WRITING_GUIDE.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Master the 5 stages of narrative tension: Exposition, Inciting Incident, Rising Action, Climax, and Resolution.
                </p>
              </div>

              {/* 5 Stages Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {NARRATIVE_WRITING_GUIDE.stages.map((st) => (
                  <div key={st.name} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                    <h4 className="font-heading font-bold text-xs text-cyan-600 dark:text-cyan-400">
                      {st.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-normal">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Full Authentic Model Narrative */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-black text-lg text-slate-900 dark:text-white">
                    Full Authentic Model: "{NARRATIVE_WRITING_GUIDE.modelTitle}"
                  </h4>
                  <button
                    onClick={() => handleCopy(NARRATIVE_WRITING_GUIDE.modelText, 'narr-model')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copiedKey === 'narr-model' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'narr-model' ? 'Copied' : 'Copy Text'}</span>
                  </button>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-serif leading-relaxed whitespace-pre-line">
                  {NARRATIVE_WRITING_GUIDE.modelText}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: FORMAL VS INFORMAL MATRIX */}
        {activeTab === 'matrix' && (
          <div className="mt-8 max-w-4xl mx-auto bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
            <div>
              <h3 className="font-heading font-black text-2xl text-slate-900 dark:text-white">
                Formal vs. Informal Cambridge Vocabulary Matrix
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Direct side-by-side linguistic comparison for Directed Writing register adaptation.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800/80 font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                  <tr>
                    <th className="p-3 w-1/4">Category</th>
                    <th className="p-3 text-rose-600 dark:text-rose-400">Informal / Colloquial (Penalized)</th>
                    <th className="p-3 text-emerald-600 dark:text-emerald-400">Formal Cambridge Standard</th>
                    <th className="p-3 text-slate-500">Examiner Rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {FORMAL_VS_INFORMAL_MATRIX.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{item.category}</td>
                      <td className="p-3 text-rose-600 dark:text-rose-400">{item.informal}</td>
                      <td className="p-3 font-semibold text-emerald-600 dark:text-emerald-400">{item.formal}</td>
                      <td className="p-3 text-slate-500 dark:text-slate-400 italic">{item.cieRule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 7: DIRECTED WRITING FORMATS */}
        {activeTab === 'directed' && (
          <div className="mt-8 space-y-8 max-w-4xl mx-auto">
            {DIRECTED_WRITING_FORMATS.map((fmt, idx) => (
              <div
                key={fmt.formatName}
                className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                    Format {idx + 1}: {fmt.formatName}
                  </h3>
                  <button
                    onClick={() => handleCopy(fmt.modelSample, `fmt-${idx}`)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copiedKey === `fmt-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === `fmt-${idx}` ? 'Copied' : 'Copy Sample'}</span>
                  </button>
                </div>

                <div className="text-xs space-y-1">
                  <p className="font-bold text-cyan-600 dark:text-cyan-400">
                    Structural Plan: <span className="font-normal text-slate-700 dark:text-slate-300">{fmt.structure}</span>
                  </p>
                  <p className="font-bold text-emerald-600 dark:text-emerald-400">
                    Layout Rules: <span className="font-normal text-slate-700 dark:text-slate-300">{fmt.layoutRules}</span>
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm font-serif leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
                  {fmt.modelSample}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
