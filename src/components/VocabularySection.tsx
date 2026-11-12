import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Volume2, 
  Check, 
  RotateCw, 
  Layers, 
  Grid, 
  CreditCard, 
  Lightbulb
} from 'lucide-react';
import { 
  ONE_WORD_SUBSTITUTIONS, 
  CONFUSED_WORD_PAIRS, 
  HIGH_VALUE_IDIOMS 
} from '../data/vocabulary';

interface VocabularySectionProps {
  onOpenAITutor: (initialQuery?: string) => void;
}

const LEARNED_VOCAB_KEY = 'iq_navigators_learned_vocab';

export const VocabularySection: React.FC<VocabularySectionProps> = ({ onOpenAITutor }) => {
  const [subTab, setSubTab] = useState<'substitutions' | 'pairs' | 'idioms'>('substitutions');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'flashcards'>('grid');
  const [learnedIds, setLearnedIds] = useState<number[]>([]);
  
  // Flashcard states
  const [flippedCardIds, setFlippedCardIds] = useState<number[]>([]);
  const [isSpeakingId, setIsSpeakingId] = useState<number | null>(null);

  // Load learned IDs from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LEARNED_VOCAB_KEY);
      if (stored) {
        setLearnedIds(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Could not read learned vocab from storage:', e);
    }
  }, []);

  const toggleLearned = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLearnedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(LEARNED_VOCAB_KEY, JSON.stringify(next));
      } catch (err) {
        console.error('Storage error:', err);
      }
      return next;
    });
  };

  const toggleFlip = (id: number) => {
    setFlippedCardIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSpeak = (text: string, id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;

      const voices = window.speechSynthesis.getVoices();
      const britishVoice = voices.find(
        (v) => v.lang.includes('en-GB') || v.name.includes('UK') || v.name.includes('British')
      );
      if (britishVoice) utterance.voice = britishVoice;

      setIsSpeakingId(id);
      utterance.onend = () => setIsSpeakingId(null);
      utterance.onerror = () => setIsSpeakingId(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Filter 120 Substitutions
  const filteredSubstitutions = ONE_WORD_SUBSTITUTIONS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      item.word.toLowerCase().includes(query) ||
      item.definitionPhrase.toLowerCase().includes(query) ||
      item.exampleSentence.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  // Filter Confused Pairs
  const filteredPairs = CONFUSED_WORD_PAIRS.filter((pair) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      pair.pairName.toLowerCase().includes(q) ||
      pair.wordA.word.toLowerCase().includes(q) ||
      pair.wordB.word.toLowerCase().includes(q) ||
      pair.memoryTrick.toLowerCase().includes(q)
    );
  });

  // Filter Idioms
  const filteredIdioms = HIGH_VALUE_IDIOMS.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      item.idiom.toLowerCase().includes(q) ||
      item.meaning.toLowerCase().includes(q) ||
      item.modelSentence.toLowerCase().includes(q)
    );
  });

  const categories = [
    'All',
    'Character & Personality',
    'Professions & Experts',
    'Politics & Society',
    'Speeches & Literature',
    'Time, Places & Objects',
    'Conditions & Beliefs'
  ];

  return (
    <section id="vocabulary" className="py-16 md:py-24 bg-white dark:bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Cambridge Lexicon Expansion</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Vocabulary Hub (120 Terms, Pairs & Idioms)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
            Elevate lexical density for Paper 1 summary writing and Paper 2 continuous compositions with British pronunciation and 3D flashcards.
          </p>
        </div>

        {/* Top Controls: Sub-Tabs & Live Learned Count */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
          {/* 3 Sub-tabs */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setSubTab('substitutions')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                subTab === 'substitutions'
                  ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              120 Substitutions
            </button>
            <button
              onClick={() => setSubTab('pairs')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                subTab === 'pairs'
                  ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Confused Pairs (8)
            </button>
            <button
              onClick={() => setSubTab('idioms')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                subTab === 'idioms'
                  ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              High-Value Idioms (8)
            </button>
          </div>

          {/* Mastery Counter & View Mode Toggle */}
          <div className="flex items-center gap-3">
            {subTab === 'substitutions' && (
              <>
                <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  Mastered: {learnedIds.length} / {ONE_WORD_SUBSTITUTIONS.length}
                </div>

                <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                    title="Dense Grid View"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('flashcards')}
                    className={`p-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      viewMode === 'flashcards'
                        ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                    title="Interactive 3D Flip Flashcards"
                  >
                    <CreditCard className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="mt-6 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search terms, definitions, Cambridge examples..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
            />
          </div>

          {subTab === 'substitutions' && (
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 1. ONE-WORD SUBSTITUTIONS (GRID OR 3D FLASHCARDS) */}
        {subTab === 'substitutions' && (
          <div className="mt-10">
            {viewMode === 'grid' ? (
              /* DENSE GRID VIEW */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredSubstitutions.map((item) => {
                  const isLearned = learnedIds.includes(item.id);
                  const isSpeaking = isSpeakingId === item.id;

                  return (
                    <div
                      key={item.id}
                      className={`p-5 rounded-3xl border transition-all flex flex-col justify-between ${
                        isLearned
                          ? 'bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/30'
                          : 'bg-white dark:bg-[#111827] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div>
                        {/* Word, Category & Mark Learned */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                              {item.category}
                            </span>
                            <div className="flex items-baseline gap-2">
                              <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                                {item.word}
                              </h3>
                              <span className="italic text-xs text-slate-500 font-serif">
                                ({item.partOfSpeech})
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={(e) => handleSpeak(item.word, item.id, e)}
                              className={`p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer ${
                                isSpeaking ? 'text-emerald-500 animate-pulse' : ''
                              }`}
                              title="Pronounce word"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>

                            <button
                              onClick={(e) => toggleLearned(item.id, e)}
                              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                                isLearned
                                  ? 'bg-emerald-500 text-white'
                                  : 'border border-slate-300 dark:border-slate-700 hover:border-emerald-500'
                              }`}
                              title={isLearned ? 'Mark as unlearned' : 'Mark as learned'}
                            >
                              {isLearned && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </button>
                          </div>
                        </div>

                        {/* Definition Phrase */}
                        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                          {item.definitionPhrase}
                        </p>

                        {/* Example Sentence */}
                        <p className="text-xs text-slate-600 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 leading-relaxed mb-3">
                          "{item.exampleSentence}"
                        </p>
                      </div>

                      {/* Footer CIE Application Note & Ask AI */}
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 truncate max-w-[200px]">
                          {item.cieApplicationNote || 'Cambridge CIE 1123'}
                        </span>
                        <button
                          onClick={() =>
                            onOpenAITutor(
                              `Provide an in-depth Cambridge analysis of the word "${item.word}" (${item.partOfSpeech}) with two elevated sentences for CIE 1123.`
                            )
                          }
                          className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                        >
                          Ask AI
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* 3D FLIP FLASHCARDS VIEW */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubstitutions.map((item) => {
                  const isFlipped = flippedCardIds.includes(item.id);
                  const isLearned = learnedIds.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleFlip(item.id)}
                      className="perspective-1000 h-64 cursor-pointer select-none group"
                    >
                      <div
                        className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${
                          isFlipped ? 'rotate-y-180' : ''
                        }`}
                      >
                        {/* FRONT FACE (Word, Category, Pronounce, Flip Hint) */}
                        <div className="absolute inset-0 backface-hidden bg-white dark:bg-[#111827] border-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-3xl p-6 flex flex-col justify-between shadow-md">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {item.category}
                            </span>
                            <button
                              onClick={(e) => handleSpeak(item.word, item.id, e)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-500"
                              title="Pronounce"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="text-center space-y-1">
                            <h3 className="font-heading font-black text-3xl text-slate-900 dark:text-white">
                              {item.word}
                            </h3>
                            <span className="italic text-sm text-slate-500 font-serif">
                              ({item.partOfSpeech})
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                              <RotateCw className="w-3.5 h-3.5" />
                              <span>Click to flip</span>
                            </span>
                            <span className="font-mono text-[10px]">#{item.id}</span>
                          </div>
                        </div>

                        {/* BACK FACE (Definition, Example, Learn Button) */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-brand-navy to-slate-900 text-white rounded-3xl p-6 flex flex-col justify-between shadow-xl border-2 border-emerald-500/40">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                              Definition:
                            </span>
                            <p className="text-sm font-semibold text-slate-100 leading-snug mb-3">
                              {item.definitionPhrase}
                            </p>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                              Model Example:
                            </span>
                            <p className="text-xs text-slate-300 italic leading-relaxed">
                              "{item.exampleSentence}"
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-700/60">
                            <button
                              onClick={(e) => toggleLearned(item.id, e)}
                              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                                isLearned
                                  ? 'bg-emerald-500 text-white'
                                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
                              }`}
                            >
                              <Check className="w-3 h-3" />
                              <span>{isLearned ? 'Learned' : 'Mark Learned'}</span>
                            </button>

                            <span className="text-[11px] text-slate-400 flex items-center gap-1">
                              <RotateCw className="w-3 h-3" /> Flip back
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* 2. CONFUSED WORD PAIRS */}
        {subTab === 'pairs' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredPairs.map((pair) => (
              <div
                key={pair.id}
                className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                    {pair.pairName}
                  </h3>
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-wider bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    High Trap Risk
                  </span>
                </div>

                {/* Word A vs Word B Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                    <span className="font-heading font-black text-base text-emerald-600 dark:text-emerald-400 block">
                      {pair.wordA.word}
                    </span>
                    <span className="text-[10px] text-slate-500 italic block">({pair.wordA.pos})</span>
                    <p className="font-medium text-slate-700 dark:text-slate-300">{pair.wordA.definition}</p>
                    <p className="text-slate-500 italic text-[11px] pt-1">"{pair.wordA.example}"</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 space-y-1">
                    <span className="font-heading font-black text-base text-cyan-600 dark:text-cyan-400 block">
                      {pair.wordB.word}
                    </span>
                    <span className="text-[10px] text-slate-500 italic block">({pair.wordB.pos})</span>
                    <p className="font-medium text-slate-700 dark:text-slate-300">{pair.wordB.definition}</p>
                    <p className="text-slate-500 italic text-[11px] pt-1">"{pair.wordB.example}"</p>
                  </div>
                </div>

                {/* Memory Trick Box */}
                <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold uppercase text-[10px] tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>Memory Trick:</span>
                  </div>
                  <p>{pair.memoryTrick}</p>
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                  ⚠️ <strong>CIE Exam Context:</strong> {pair.examContextTip}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* 3. HIGH-VALUE IDIOMS */}
        {subTab === 'idioms' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredIdioms.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <h3 className="font-heading font-black text-lg text-emerald-600 dark:text-emerald-400">
                    "{item.idiom}"
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Band 1 Phrase
                  </span>
                </div>

                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Meaning: {item.meaning}
                </p>

                <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{item.modelSentence}"
                </div>

                <div className="text-[11px] space-y-1 text-slate-500 dark:text-slate-400 pt-1">
                  <p>
                    ✍️ <strong>Placement Tip:</strong> {item.writingPlacementTip}
                  </p>
                  <p className="text-rose-600 dark:text-rose-400">
                    🛑 <strong>Caution:</strong> {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
