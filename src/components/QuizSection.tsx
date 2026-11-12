import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Sparkles, 
  Award, 
  RotateCcw, 
  Loader2, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRACTICE_QUIZZES } from '../data/quizzes';
import { AppSettings, QuizQuestion } from '../types';
import { checkStudentWork, logQuizCompletion } from '../services/apiService';
import { MarkdownView } from './MarkdownView';

interface QuizSectionProps {
  settings: AppSettings;
  onOpenAITutor: (initialQuery?: string) => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ settings, onOpenAITutor }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    'Subject-Verb Concord' | 'Vocabulary & Substitutions' | 'Writing Formats'
  >('Subject-Verb Concord');

  // Track student selected option per question ID: { [questionId]: optionIndex }
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  
  // Track student typed explanation per question ID: { [qId: number]: string }
  const [typedExplanations, setTypedExplanations] = useState<{ [qId: number]: string }>({});
  
  // Track Gemini AI check results per question ID: { [qId: number]: { loading: boolean; feedback?: string; error?: string } }
  const [aiChecks, setAiChecks] = useState<{
    [qId: number]: { loading: boolean; feedback?: string; error?: string };
  }>({});

  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);

  const currentQuestions = PRACTICE_QUIZZES.filter((q) => q.category === selectedCategory);

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleTypedExplanationChange = (questionId: number, value: string) => {
    setTypedExplanations((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleCheckWithGemini = async (q: QuizQuestion) => {
    const studentExp = typedExplanations[q.id];
    if (!studentExp || studentExp.trim().length < 5) {
      setAiChecks((prev) => ({
        ...prev,
        [q.id]: { loading: false, error: 'Please type your reasoning before checking with Gemini AI.' }
      }));
      return;
    }

    setAiChecks((prev) => ({
      ...prev,
      [q.id]: { loading: true, error: undefined, feedback: undefined }
    }));

    try {
      const questionContext = `Cambridge MCQ Question: "${q.question}"\nOptions: ${q.options.join(
        ' | '
      )}\nCorrect Cambridge Answer: ${q.options[q.correctIndex]}\nOfficial CIE Explanation: ${q.ruleExplanation}`;

      const res = await checkStudentWork({
        text: studentExp,
        mode: 'quiz_explanation',
        questionContext,
        settings
      });

      if (res.success && res.feedback) {
        setAiChecks((prev) => ({
          ...prev,
          [q.id]: { loading: false, feedback: res.feedback }
        }));
      } else {
        setAiChecks((prev) => ({
          ...prev,
          [q.id]: { loading: false, error: res.error || 'Failed to check answer with Gemini.' }
        }));
      }
    } catch (err: any) {
      setAiChecks((prev) => ({
        ...prev,
        [q.id]: { loading: false, error: err.message || 'Error communicating with Gemini AI.' }
      }));
    }
  };

  const handleFinalSubmit = () => {
    setIsQuizSubmitted(true);

    // Calculate score
    let correctCount = 0;
    currentQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const percentage = Math.round((correctCount / currentQuestions.length) * 100);

    // Trigger celebration confetti
    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // silent
      }
    }

    // Automatically dispatch event to n8n webhook
    logQuizCompletion(
      {
        score: correctCount,
        total: currentQuestions.length,
        percentage,
        category: selectedCategory
      },
      settings
    );
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setTypedExplanations({});
    setAiChecks({});
    setIsQuizSubmitted(false);
  };

  // Score summary values
  let currentScore = 0;
  currentQuestions.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctIndex) {
      currentScore += 1;
    }
  });
  const currentPercentage = Math.round((currentScore / currentQuestions.length) * 100);

  return (
    <section id="quizzes" className="py-16 md:py-24 bg-slate-50/60 dark:bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Interactive Assessment Engine</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Practice Quizzes & Gemini Typed Checking
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
            Test your grammatical concord, vocabulary substitutions, and directed writing rules. Type your custom reasoning under every question for AI examiner marking.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {(
            ['Subject-Verb Concord', 'Vocabulary & Substitutions', 'Writing Formats'] as Array<
              'Subject-Verb Concord' | 'Vocabulary & Substitutions' | 'Writing Formats'
            >
          ).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                handleRetake();
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat} (5 Questions)
            </button>
          ))}
        </div>

        {/* Questions List */}
        <div className="mt-10 space-y-8 max-w-4xl mx-auto">
          {currentQuestions.map((q, idx) => {
            const studentChoice = selectedAnswers[q.id];
            const hasChosen = studentChoice !== undefined;
            const isCorrect = studentChoice === q.correctIndex;
            const aiCheckState = aiChecks[q.id];

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-md space-y-6"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      Question {idx + 1} of {currentQuestions.length}
                    </span>
                    <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 dark:text-white leading-snug">
                      {q.question}
                    </h3>
                  </div>

                  {hasChosen && (
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shrink-0 flex items-center gap-1 ${
                        isCorrect
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Correct</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Incorrect</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* MCQ Options A, B, C, D */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = studentChoice === optIdx;
                    let optionStyle =
                      'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700';

                    if (hasChosen) {
                      if (optIdx === q.correctIndex) {
                        optionStyle =
                          'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold';
                      } else if (isSelected) {
                        optionStyle =
                          'bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-300 font-bold';
                      } else {
                        optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`text-left p-3.5 rounded-2xl border-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${optionStyle}`}
                      >
                        <span>{opt}</span>
                        {hasChosen && optIdx === q.correctIndex && (
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        )}
                        {hasChosen && isSelected && optIdx !== q.correctIndex && (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Official Explanation Card */}
                {hasChosen && (
                  <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1.5 animate-in fade-in duration-200">
                    <p className="font-bold text-emerald-700 dark:text-emerald-300">
                      📖 <strong>Cambridge Rule:</strong> {q.ruleExplanation}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 italic">
                      💡 <strong>CIE Exam Tip:</strong> {q.cieExamTip}
                    </p>
                  </div>
                )}

                {/* DEDICATED TYPED EXPLANATION WORKSPACE */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                      <span>Type Your Answer & Explanation (CIE Linguistic Reasoning):</span>
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Explain in your own words why this option is grammatically required by Cambridge..."
                      value={typedExplanations[q.id] || ''}
                      onChange={(e) => handleTypedExplanationChange(q.id, e.target.value)}
                      className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />

                    <button
                      type="button"
                      onClick={() => handleCheckWithGemini(q)}
                      disabled={aiCheckState?.loading}
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-emerald to-brand-cyan hover:from-emerald-600 hover:to-cyan-600 disabled:opacity-60 transition-all cursor-pointer whitespace-nowrap shadow-sm"
                    >
                      {aiCheckState?.loading ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Checking...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Check Answer with Gemini AI</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenAITutor(`Please explain the grammatical concept behind Question: "${q.question}"`)}
                      className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      title="Ask Tutor about this question"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Ask Tutor</span>
                    </button>
                  </div>

                  {/* Gemini Evaluation Result */}
                  {aiCheckState?.feedback && (
                    <div className="mt-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-cyan-500/30 text-xs space-y-2 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400 font-bold uppercase text-[10px] tracking-wider">
                        <span>Gemini AI Linguistic Critique:</span>
                      </div>
                      <MarkdownView content={aiCheckState.feedback} />
                    </div>
                  )}

                  {aiCheckState?.error && (
                    <div className="mt-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{aiCheckState.error}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit Quiz Button */}
        {!isQuizSubmitted && (
          <div className="mt-10 text-center">
            <button
              onClick={handleFinalSubmit}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="px-10 py-4 rounded-2xl text-base font-black text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
            >
              Complete Quiz & View Score Summary
            </button>
          </div>
        )}

        {/* SCORE SUMMARY CARD */}
        {isQuizSubmitted && (
          <div className="mt-12 max-w-3xl mx-auto bg-white dark:bg-[#111827] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-300">
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                Quiz Score Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Batch 7 Assessment for category: <strong>{selectedCategory}</strong>
              </p>
            </div>

            {/* Score & Distinction Badge */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs uppercase font-bold text-slate-400">Total Score</span>
                <span className="block font-heading font-black text-3xl text-slate-900 dark:text-white mt-1">
                  {currentScore} / {currentQuestions.length}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs uppercase font-bold text-slate-400">Percentage</span>
                <span className="block font-heading font-black text-3xl text-emerald-600 dark:text-emerald-400 mt-1">
                  {currentPercentage}%
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs uppercase font-bold text-slate-400">Batch 7 Standing</span>
                <span className="block font-heading font-black text-lg text-brand-cyan mt-1">
                  {currentPercentage >= 80
                    ? '🏆 Distinction'
                    : currentPercentage >= 60
                    ? '🥈 Merit'
                    : '📘 Needs Revision'}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-800 dark:text-cyan-300 text-center font-medium">
              ✅ Result event dispatched to Webhook: <span className="font-mono">{settings.webhookUrl.slice(0, 45)}...</span>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={handleRetake}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
