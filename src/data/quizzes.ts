import { QuizQuestion } from '../types';

export const PRACTICE_QUIZZES: QuizQuestion[] = [
  // Category 1: Subject-Verb Concord
  {
    id: 1,
    category: 'Subject-Verb Concord',
    question: 'The captain, together with all his senior navigators and deck engineers, ________ to be decorated for valor at the naval banquet.',
    options: [
      'A) are scheduled',
      'B) is scheduled',
      'C) were scheduled',
      'D) have been scheduled'
    ],
    correctIndex: 1,
    ruleExplanation: 'The true subject is singular: "The captain". Parenthetical phrases introduced by "together with", "along with", or "as well as" do not alter the singular number of the head noun.',
    cieExamTip: 'Cambridge tests this intervening phrase trap regularly in Paper 1 sentence transformation.'
  },
  {
    id: 2,
    category: 'Subject-Verb Concord',
    question: 'Neither the school principal nor the newly recruited English lecturers ________ satisfied with the revised examination timetable.',
    options: [
      'A) was',
      'B) were',
      'C) is being',
      'D) has been'
    ],
    correctIndex: 1,
    ruleExplanation: 'Under the Proximity Rule with correlative conjunctions ("neither...nor"), the finite verb must agree in number with the nearest subject: "the newly recruited English lecturers" (plural).',
    cieExamTip: 'If the order was reversed ("Neither the lecturers nor the principal..."), the verb would be singular ("was").'
  },
  {
    id: 3,
    category: 'Subject-Verb Concord',
    question: 'Every single one of the candidates who registered for Batch 7 CIE 1123 ________ required to submit the verified coursework portfolio by Friday.',
    options: [
      'A) are',
      'B) were',
      'C) is',
      'D) have been'
    ],
    correctIndex: 2,
    ruleExplanation: 'The distributive indefinite pronoun phrase "Every single one of..." is grammatically singular and strictly demands a singular verb ("is").',
    cieExamTip: 'Students mistakenly look at the intervening plural noun "candidates" and select a plural verb.'
  },
  {
    id: 4,
    category: 'Subject-Verb Concord',
    question: 'Fifty thousand rupees ________ allocated by the student council to replenish the damaged debate society microphones.',
    options: [
      'A) was',
      'B) were',
      'C) are',
      'D) have been'
    ],
    correctIndex: 0,
    ruleExplanation: 'Specific monetary sums, measurements of distance, and periods of time take singular verbs when considered as a unified lump sum or collective unit.',
    cieExamTip: 'Treating "Fifty thousand rupees" as plural is an automatic deduction in objective grammar.'
  },
  {
    id: 5,
    category: 'Subject-Verb Concord',
    question: 'Ammar is one of those diligent scholars who ________ tirelessly to achieve a Cambridge distinction.',
    options: [
      'A) strives',
      'B) strive',
      'C) is striving',
      'D) has striven'
    ],
    correctIndex: 1,
    ruleExplanation: 'In the construction "one of those [plural noun] who [verb]", the relative pronoun "who" refers back to the antecedent plural noun "scholars", thus demanding the plural verb "strive".',
    cieExamTip: 'Only if preceded by "the only one of..." does the verb switch back to singular.'
  },

  // Category 2: Vocabulary & Substitutions
  {
    id: 6,
    category: 'Vocabulary & Substitutions',
    question: 'Select the precise one-word substitution for: "A person who dislikes human society and habitually avoids interpersonal company."',
    options: [
      'A) Altruist',
      'B) Philanthropist',
      'C) Misanthrope',
      'D) Recluse'
    ],
    correctIndex: 2,
    ruleExplanation: '"Misanthrope" specifically denotes a person who dislikes humankind (root: \'mis-\' [hate] + \'anthropos\' [mankind]). A "recluse" merely lives apart, but does not necessarily hate humanity.',
    cieExamTip: 'Nuance between misanthrope and recluse is tested frequently in Cambridge vocabulary sections.'
  },
  {
    id: 7,
    category: 'Vocabulary & Substitutions',
    question: 'Identify the sentence that uses the word pair "affect" and "effect" with absolute grammatical accuracy:',
    options: [
      'A) The severe drought did not effect the crop yield, but the economic affect was devastating.',
      'B) The severe drought did not affect the crop yield, but the economic effect was devastating.',
      'C) The severe drought had no affect on the crop, but it effected the farmers deeply.',
      'D) How will this policy effect our grades, and what will be the lasting affect?'
    ],
    correctIndex: 1,
    ruleExplanation: '"Affect" functions as the transitive verb ("did not affect"), and "effect" functions as the result noun ("economic effect").',
    cieExamTip: 'A = Action (verb); E = End result (noun).'
  },
  {
    id: 8,
    category: 'Vocabulary & Substitutions',
    question: 'What is the correct term for an official government pardon granted to individuals convicted of political insubordination?',
    options: [
      'A) Amnesty',
      'B) Plebiscite',
      'C) Soliloquy',
      'D) Bureaucracy'
    ],
    correctIndex: 0,
    ruleExplanation: '"Amnesty" is the precise constitutional term for a general pardon granted to political offenders.',
    cieExamTip: 'Indispensable for compressing history passages in summary writing.'
  },
  {
    id: 9,
    category: 'Vocabulary & Substitutions',
    question: 'The museum ________ took extraordinary precautions to preserve the brittle fifteenth-century illuminated manuscript.',
    options: [
      'A) cartographer',
      'B) numismatist',
      'C) curator',
      'D) taxidermist'
    ],
    correctIndex: 2,
    ruleExplanation: 'A "curator" is the official custodian in charge of a museum collection or historical archive.',
    cieExamTip: 'Cartographer = maps, Numismatist = coins, Taxidermist = animal skins.'
  },
  {
    id: 10,
    category: 'Vocabulary & Substitutions',
    question: 'The persistent, biting frost rendered the cast-iron gate hinges extraordinarily ________, causing them to fracture upon impact.',
    options: [
      'A) versatile',
      'B) brittle',
      'C) inaudible',
      'D) ubiquitous'
    ],
    correctIndex: 1,
    ruleExplanation: '"Brittle" means hard but liable to shatter or snap easily under moderate mechanical stress.',
    cieExamTip: 'A high-impact sensory adjective valued in descriptive writing.'
  },

  // Category 3: Writing Formats & Directed Writing
  {
    id: 11,
    category: 'Writing Formats',
    question: 'When addressing a formal letter to an unnamed administrative official starting with "Dear Sir/Madam", what is the mandatory valediction (sign-off)?',
    options: [
      'A) Yours sincerely',
      'B) Yours faithfully',
      'C) Warm regards',
      'D) Respectfully yours'
    ],
    correctIndex: 1,
    ruleExplanation: 'The Cambridge convention dictates: "Yours faithfully" when the recipient\'s name is unknown ("Dear Sir/Madam"). "Yours sincerely" is reserved strictly for named recipients ("Dear Mr. Smith").',
    cieExamTip: 'Memory tip: Sincere = Specific name; Faithful = Forgotten name.'
  },
  {
    id: 12,
    category: 'Writing Formats',
    question: 'In an Official Inspection Report for CIE 1123, which of the following opening headings and stylistic registers is required?',
    options: [
      'A) Dear Members of the Board, I am excited to tell you about our school cafeteria...',
      'B) Hey guys, here is the rundown of what we inspected this week...',
      'C) TO: The Principal, FROM: Head Prefect, DATE: 20 Nov 2026, SUBJECT: Hygiene Standards in Campus Cafeteria, followed by Terms of Reference and passive voice.',
      'D) A personal narrative detailing Danish\'s morning routine before arriving at the cafeteria.'
    ],
    correctIndex: 2,
    ruleExplanation: 'Official reports require standard administrative headers (TO, FROM, DATE, SUBJECT), numbered subheadings, and objective passive voice register ("It was observed that...").',
    cieExamTip: 'Writing a report in letter format or conversational first-person results in heavy penalty under Task Fulfillment.'
  },
  {
    id: 13,
    category: 'Writing Formats',
    question: 'What is the Golden Rule of Cambridge CIE 1123 Descriptive Writing compositions?',
    options: [
      'A) Always begin with an elaborate 100-word paragraph explaining how the author traveled to the location.',
      'B) Direct plunge into evocative sensory imagery without any formal introductory preamble or conversational small talk.',
      'C) Ensure the story has a violent car crash and police sirens in the first paragraph.',
      'D) Write entirely in simple sentences using only common everyday verbs.'
    ],
    correctIndex: 1,
    ruleExplanation: 'Descriptive writing demands immediate immersion into atmosphere and sensory details (Sight, Sound, Smell, Touch, Taste) without conversational introductions or narrative plotting.',
    cieExamTip: 'Do not tell a story in descriptive writing. Paint a static, atmospheric panorama.'
  },
  {
    id: 14,
    category: 'Writing Formats',
    question: 'In the S.E.E.L. paragraph architecture, what critical purpose does the "L" (Link) sentence fulfill?',
    options: [
      'A) It lists random internet hyperlinks for further reading.',
      'B) It introduces a completely new unrelated topic for the next paragraph.',
      'C) It synthesizes the demonstrated evidence and binds the paragraph directly back to the central thesis or prompt requirement.',
      'D) It summarizes the dictionary origin of the opening word.'
    ],
    correctIndex: 2,
    ruleExplanation: 'The Link sentence acts as the logical clincher, demonstrating to the examiner how the preceding explanation and evidence directly prove the core thesis of the composition.',
    cieExamTip: 'A missing Link sentence leaves the paragraph dangling and forfeits Band 1 structural coherence.'
  },
  {
    id: 15,
    category: 'Writing Formats',
    question: 'Which of the following sentences successfully resolves the catastrophic "Comma Splice" error?',
    options: [
      'A) The candidates revised diligently, they achieved unprecedented distinctions.',
      'B) The candidates revised diligently; consequently, they achieved unprecedented distinctions.',
      'C) The candidates revised diligently, however they achieved unprecedented distinctions.',
      'D) The candidates revised diligently, so therefore they achieved unprecedented distinctions.'
    ],
    correctIndex: 1,
    ruleExplanation: 'A comma splice joins two independent clauses with only a comma. Option B correctly uses a semicolon and conjunctive adverb followed by a comma.',
    cieExamTip: 'Comma splices are flagged immediately by Cambridge examiners and prevent compositions from entering Band 1 or Band 2.'
  }
];
