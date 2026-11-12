export type AssessmentType = 'all' | 'mock' | 'final';

export interface AssessmentPaper {
  id: string;
  name: string;
  type: 'mock' | 'final';
  paperComponent: 'Paper 1' | 'Paper 2' | 'Paper 3';
  dateStr: string;
  dayStr: string;
  timeRangePST: string;
  targetIso: string;
  durationMinutes: number;
  durationStr: string;
  marks: number;
  weightage: string;
  focus: string;
  details: string[];
}

export interface AssessmentComponentCard {
  componentCode: string;
  title: string;
  marks: number;
  duration: string;
  weightage: string;
  description: string;
  keySections: string[];
  cieGuidance: string;
}

export type SyllabusCategory = 'All' | 'Core Grammar' | 'Sentence Structure' | 'Applied Vocabulary';

export interface SyllabusExample {
  correct: string;
  incorrect: string;
  explanation: string;
}

export interface SyllabusTopic {
  id: number;
  title: string;
  category: 'Core Grammar' | 'Sentence Structure' | 'Applied Vocabulary';
  badge: string;
  summary: string;
  keyRules: string[];
  examples: SyllabusExample[];
  cambridgeTraps: string[];
  testPrompt: string;
}

export type VocabCategory = 
  | 'Character & Personality'
  | 'Professions & Experts'
  | 'Politics & Society'
  | 'Speeches & Literature'
  | 'Time, Places & Objects'
  | 'Conditions & Beliefs';

export interface VocabWord {
  id: number;
  word: string;
  partOfSpeech: string;
  category: VocabCategory;
  definitionPhrase: string;
  exampleSentence: string;
  cieApplicationNote?: string;
}

export interface ConfusedWordPair {
  id: number;
  pairName: string;
  wordA: {
    word: string;
    pos: string;
    definition: string;
    example: string;
  };
  wordB: {
    word: string;
    pos: string;
    definition: string;
    example: string;
  };
  memoryTrick: string;
  examContextTip: string;
}

export interface HighValueIdiom {
  id: number;
  idiom: string;
  meaning: string;
  modelSentence: string;
  writingPlacementTip: string;
  caution: string;
}

export interface WritingPrompt {
  id: string;
  type: string;
  title: string;
  wordTarget: string;
  allocatedMarks: string;
  scenario: string;
  bulletPoints: string[];
  formatRequirements: string[];
}

export interface ExaminerCorrection {
  original: string;
  corrected: string;
  explanation: string;
}

export interface ExaminerEvaluation {
  bandScore: string;
  numericalScore: string;
  contentAndRegister: string;
  structureAndSeel: string;
  lineByLineCorrections: ExaminerCorrection[];
  nextDraftTips: string[];
  overallVerdict: string;
  rawResponse?: string;
}

export interface QuizQuestion {
  id: number;
  category: 'Subject-Verb Concord' | 'Vocabulary & Substitutions' | 'Writing Formats';
  question: string;
  options: string[];
  correctIndex: number;
  ruleExplanation: string;
  cieExamTip: string;
}

export interface AppSettings {
  geminiApiKey: string;
  geminiModel: string;
  webhookUrl: string;
  studentName: string;
  darkMode: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor' | 'system';
  text: string;
  timestamp: string;
  isError?: boolean;
}

export interface DailyClassworkQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topicRef?: string;
}

export interface DailyHomework {
  title: string;
  genre: 'Creative Writing' | 'Report Writing' | 'Dialogue Writing' | 'Essay Writing';
  creativeWritingPrompt: string;
  targetWordCount: string;
  pageRequirement: string;
  scenario: string;
  mandatoryElements: string[];
  evaluationRubric: string;
  formatGuidelines?: string[];
}

export interface DailyNotes {
  topicTitle: string;
  summary: string;
  keyPoints: string[];
  examples: Array<{ rule: string; correct: string; incorrect: string }>;
  cambridgeExamCaution: string;
}

export interface DailyPlanning {
  studyGoal: string;
  estimatedMinutes: number;
  scheduleSlot: string;
  milestones: string[];
}

export interface DailyModule {
  dayNumber: number;
  title: string;
  badge: string;
  focusGrammar: string;
  focusWriting: string;
  notes: DailyNotes;
  classworkQuestions: DailyClassworkQuestion[];
  homework: DailyHomework;
  planning: DailyPlanning;
}

export interface HomeworkUploadedPage {
  pageNumber: 1 | 2;
  dataUrl: string;
  fileName: string;
  fileSize: string;
}
