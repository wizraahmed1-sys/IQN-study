import { AssessmentComponentCard, AssessmentPaper } from '../types';

export const ASSESSMENT_COMPONENTS: AssessmentComponentCard[] = [
  {
    componentCode: 'Paper 1',
    title: 'Reading & Objective Grammar',
    marks: 50,
    duration: '1 hour 20 minutes',
    weightage: '35% of total CIE 1123 qualification',
    description: 'Assesses explicit and implicit reading comprehension, 100-word concise summary writing, and rigorous objective grammar manipulation under strict time discipline.',
    keySections: [
      'Text A: Unseen non-fiction passage with short-answer questions & vocabulary in context (15 Marks)',
      'Text B: Comparative analytical reading & summary task (100 words strict limit) (15 Marks)',
      'Objective Grammar & Syntax: Sentence transformation, concord, voice, speech, idioms & punctuation (20 Marks)',
    ],
    cieGuidance: 'Marks are penalized heavily for lifting whole sentences instead of paraphrasing in the summary task. Grammar questions test applied precision rather than theoretical terminology.'
  },
  {
    componentCode: 'Paper 2',
    title: 'Subjective Writing & Composition',
    marks: 60,
    duration: '2 hours',
    weightage: '40% of total CIE 1123 qualification',
    description: 'Demands advanced command of register, audience adaptation, and structured argument through directed communication and extended continuous prose.',
    keySections: [
      'Section A: Directed Writing (120–150 words based on stimuli — Formal Letter, Speech, Email, Official Report or Article) (25 Marks)',
      'Section B: Continuous Writing Composition (350–450 words — Narrative or Descriptive prose adhering to dramatic arcs and sensory imagery) (35 Marks)',
    ],
    cieGuidance: 'Examiners reward sustained tone, varied sentence structures (complex, compound, periodic), and precise lexical nuances while penalizing comma splices and dangling modifiers.'
  },
  {
    componentCode: 'Paper 3',
    title: 'Listening & Oral Speaking Examination',
    marks: 40,
    duration: '1 hr 30 min (Listening) + 5 min individual viva',
    weightage: '25% of total CIE 1123 qualification',
    description: 'Evaluates auditory comprehension across diverse accents and registers, followed by an individual 5-minute structured oral presentation and viva voce.',
    keySections: [
      'Part 1: Recorded dialogues, lectures, and news bulletins testing gist, inference, and specific detail retrieval (25 Marks)',
      'Part 2: Individual speaking evaluation — Candidate presentation on an intellectual prompt followed by examiner discussion (15 Marks)',
    ],
    cieGuidance: 'Fluency, natural rhythm, pronunciation clarity, and the capacity to develop abstract concepts with sophisticated discourse markers dominate the oral assessment rubric.'
  }
];

export const TIMETABLE_PAPERS: AssessmentPaper[] = [
  {
    id: 'mock-p1',
    name: 'Mock Paper 1: Reading & Grammar',
    type: 'mock',
    paperComponent: 'Paper 1',
    dateStr: '23 Nov 2026',
    dayStr: 'Monday',
    timeRangePST: '6:00 PM – 7:20 PM PST',
    targetIso: '2026-11-23T18:00:00+05:00',
    durationMinutes: 80,
    durationStr: '1 hr 20 min',
    marks: 50,
    weightage: '35%',
    focus: 'Reading Comprehension, 100-word Summary Paraphrasing, Objective Grammar Transformations',
    details: [
      'Passage Comprehension (Factual & Inferential Questions)',
      'Strict 100-word Summary Writing with own-word substitution',
      'Grammar: Subject-Verb Agreement, Voice change, Speech shift, Prepositions'
    ]
  },
  {
    id: 'mock-p2',
    name: 'Mock Paper 2: Subjective Writing',
    type: 'mock',
    paperComponent: 'Paper 2',
    dateStr: '24 Nov 2026',
    dayStr: 'Tuesday',
    timeRangePST: '6:00 PM – 8:00 PM PST',
    targetIso: '2026-11-24T18:00:00+05:00',
    durationMinutes: 120,
    durationStr: '2 hrs',
    marks: 60,
    weightage: '40%',
    focus: 'Section A: Directed Writing (Formal Letter / Report / Email) & Section B: Continuous Writing',
    details: [
      'Directed Writing (120-150 words): Professional register & 3 bullet-point coverage',
      'Continuous Writing (350-450 words): Choice of Descriptive or Narrative with S.E.E.L. paragraphs',
      'Assessed strictly on Content (Band 1-6) and Language Quality (Band 1-6)'
    ]
  },
  {
    id: 'mock-p3',
    name: 'Mock Paper 3: Listening & Speaking',
    type: 'mock',
    paperComponent: 'Paper 3',
    dateStr: '25 Nov 2026',
    dayStr: 'Wednesday',
    timeRangePST: '6:00 PM – 7:30 PM PST',
    targetIso: '2026-11-25T18:00:00+05:00',
    durationMinutes: 90,
    durationStr: '1 hr 30 min',
    marks: 40,
    weightage: '25%',
    focus: 'Auditory Comprehension Tracks & Individual 5-min Oral Speaking Viva',
    details: [
      'Audio stimulus tracks played twice: Note-taking, MCQ, short factual answers',
      'Individual speaking test: 2-3 minute structured speech followed by 2 minutes spontaneous Q&A',
      'Assessment of cadence, phonetic clarity, register, and academic vocabulary'
    ]
  },
  {
    id: 'final-p1',
    name: 'Final Paper 1: Grammar & Comprehension',
    type: 'final',
    paperComponent: 'Paper 1',
    dateStr: '30 Nov 2026',
    dayStr: 'Monday',
    timeRangePST: '6:00 PM – 7:20 PM PST',
    targetIso: '2026-11-30T18:00:00+05:00',
    durationMinutes: 80,
    durationStr: '1 hr 20 min',
    marks: 50,
    weightage: '35%',
    focus: 'Official Cambridge Pre O Levels Batch 7 Final Examination — Component 1',
    details: [
      'High-rigor comprehension passages testing writer\'s craft and tone',
      'Summary synthesis requiring precise academic vocabulary substitution',
      'Advanced grammar analysis: Conditionals, Participles, Homophones, Idiomatic conciseness'
    ]
  },
  {
    id: 'final-p2',
    name: 'Final Paper 2: Subjective Writing',
    type: 'final',
    paperComponent: 'Paper 2',
    dateStr: '2 Dec 2026',
    dayStr: 'Wednesday',
    timeRangePST: '6:00 PM – 8:00 PM PST',
    targetIso: '2026-12-02T18:00:00+05:00',
    durationMinutes: 120,
    durationStr: '2 hrs',
    marks: 60,
    weightage: '40%',
    focus: 'Official Cambridge Pre O Levels Batch 7 Final Examination — Component 2',
    details: [
      'Directed Writing Task: High-stakes formal correspondence or committee report',
      'Continuous Composition: Narrative tension or high-fidelity descriptive prose',
      'Zero-tolerance for mechanical errors: subject-verb concordance, run-ons, tense inconsistency'
    ]
  },
  {
    id: 'final-p3',
    name: 'Final Paper 3: Listening & Speaking',
    type: 'final',
    paperComponent: 'Paper 3',
    dateStr: '4 Dec 2026',
    dayStr: 'Friday',
    timeRangePST: '6:00 PM – 7:30 PM PST',
    targetIso: '2026-12-04T18:00:00+05:00',
    durationMinutes: 90,
    durationStr: '1 hr 30 min',
    marks: 40,
    weightage: '25%',
    focus: 'Official Cambridge Pre O Levels Batch 7 Final Examination — Component 3',
    details: [
      'Comprehensive listening exam covering multiple real-world accents',
      'Final viva voce with Cambridge-accredited senior examiner panel',
      'Final Batch 7 distinction rankings announced post assessment'
    ]
  }
];

export const REGULATIONS_NOTICE = {
  title: 'Official Cambridge Examination Protocol & Viva Conduct Guidelines',
  points: [
    'Students must report to the digital examination lobby strictly 15 minutes before the scheduled PST start time (5:45 PM PST).',
    'Calculators, smartwatches, and third-party spell-check extensions are strictly prohibited during all live assessment sessions.',
    'For Paper 3 Individual Speaking, each candidate receives 2 minutes of silent prep time followed by a mandatory 5-minute uninterrupted oral discourse.',
    'Academic integrity is monitored: plagiarism or AI-generated continuous prose results in immediate disqualification under Cambridge CIE 1123 code of conduct.',
    'Late submission penalties apply automatically at 2 marks deducted per elapsed minute after the PST submission cutoff.'
  ]
};
