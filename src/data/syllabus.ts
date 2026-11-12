import { SyllabusTopic } from '../types';

export const SYLLABUS_TOPICS: SyllabusTopic[] = [
  {
    id: 1,
    title: 'Parts of Speech & Word Class Functionality',
    category: 'Core Grammar',
    badge: 'Foundational Syntax',
    summary: 'Mastering the 8 grammatical word classes with emphasis on syntactic flexibility where words shift function depending on sentence context.',
    keyRules: [
      'Words are classified by their syntactic function in a sentence, not by their physical dictionary form alone.',
      'Transitive verbs demand a direct object; intransitive verbs cannot take a direct object.',
      'Adverbs modify verbs, adjectives, or other adverbs; they never modify nouns directly.',
      'Prepositions govern a noun phrase object in the objective case (e.g., "between you and me", never "between you and I").',
      'Coordinating conjunctions connect elements of equal grammatical rank; subordinating conjunctions introduce dependent clauses.'
    ],
    examples: [
      {
        incorrect: 'The fastly driven vehicle stopped sudden before the crossing.',
        correct: 'The fast driven vehicle stopped suddenly before the crossing.',
        explanation: '"Fast" is an irregular adjective/adverb that never takes the suffix "-ly". Conversely, "suddenly" requires the adverbial suffix to modify the verb "stopped".'
      },
      {
        incorrect: 'The scholarship was divided between he and I.',
        correct: 'The scholarship was divided between him and me.',
        explanation: 'The preposition "between" requires objective pronouns ("him" and "me"), not subjective nominative pronouns.'
      }
    ],
    cambridgeTraps: [
      'Cambridge examiners frequently test words like "fast", "hard", and "late" which act as both adjectives and adverbs without "-ly".',
      'Watch out for gerunds acting as nouns disguised as verbs (e.g., "Swimming is exhilarating").'
    ],
    testPrompt: 'Explain how the word "round" can function as a noun, verb, adjective, adverb, and preposition in Cambridge English.'
  },
  {
    id: 2,
    title: 'Definite, Indefinite & Zero Articles',
    category: 'Core Grammar',
    badge: 'Phonetic & Determiner Rules',
    summary: 'Application of "a", "an", "the", and the zero article based on phonetic onset sounds rather than orthographic vowels, plus generic reference rules.',
    keyRules: [
      'Use "a" before consonant sounds and "an" before vowel sounds (e.g., "a university", "a European", but "an honest official").',
      'Use "the" for unique entities (the sun, the equator), superlative degrees (the finest), and specified reference previously introduced.',
      'Omit articles (Zero Article) before uncountable abstract nouns used in a general sense (e.g., "Honesty is vital", not "The honesty is vital").',
      'Do not use "the" before sports, academic subjects, meals, or languages unless followed by the word "language" (e.g., "English" vs "the English language").',
      'Use "the" before geographical features: mountain ranges (the Himalayas), oceans (the Atlantic), archipelagos, but zero article before singular mountain peaks (Mount Everest).'
    ],
    examples: [
      {
        incorrect: 'He was admitted into an prestigious university after passing an unique examination.',
        correct: 'He was admitted into a prestigious university after passing a unique examination.',
        explanation: '"University" and "unique" begin with the consonant sound /j/ ("yu"), demanding the indefinite article "a", not "an".'
      },
      {
        incorrect: 'The Mount Everest is the highest peak in world.',
        correct: 'Mount Everest is the highest peak in the world.',
        explanation: 'Individual mountain peaks take zero article, whereas unique global entities take the definite article "the".'
      }
    ],
    cambridgeTraps: [
      'Cambridge CIE 1123 tests words with silent "h" ("an heir", "an honorarium", "an hour") versus aspirated "h" ("a historical novel", "a hospital").',
      'Examiners penalize using "the" before collective abstract nouns like "society", "nature", and "science" when spoken of generally.'
    ],
    testPrompt: 'Give 3 examples where a word starting with the letter "u" takes "a" and 3 where it takes "an", with phonetic justifications.'
  },
  {
    id: 3,
    title: 'Subject-Verb Agreement (Concord)',
    category: 'Core Grammar',
    badge: 'Syntactic Concord',
    summary: 'Maintaining grammatical concord between subjects and verbs despite intervening parenthetical phrases, compound subjects, and indefinite pronouns.',
    keyRules: [
      'Intervening phrases ("along with", "as well as", "in addition to", "together with", "accompanied by") do not alter the number of the true subject.',
      'Correlative conjunctions ("either...or", "neither...nor", "not only...but also") adhere to the Proximity Rule: the verb agrees with the subject closest to it.',
      'Indefinite pronouns ("everyone", "everybody", "each", "neither of", "either of", "someone") are grammatically singular and demand singular verbs.',
      'Nouns plural in form but singular in meaning (e.g., "mathematics", "news", "measles", "the United States", "economics") take singular verbs.',
      'Collective nouns ("jury", "team", "committee", "faculty") take singular verbs when acting as a unified entity, but plural verbs when acting as individuals.'
    ],
    examples: [
      {
        incorrect: 'The captain, along with all his experienced crew members, were honored yesterday.',
        correct: 'The captain, along with all his experienced crew members, was honored yesterday.',
        explanation: 'The subject is "The captain" (singular). The intervening phrase "along with all his crew members" does not create a plural compound subject.'
      },
      {
        incorrect: 'Neither the headmaster nor the subject teachers was present in the auditorium.',
        correct: 'Neither the headmaster nor the subject teachers were present in the auditorium.',
        explanation: 'Under the rule of proximity with "neither...nor", the verb must agree with the closest subject: "teachers" (plural).'
      }
    ],
    cambridgeTraps: [
      'The construction "One of the [plural nouns] who/that [verb]" requires a plural verb (e.g., "He is one of the scholars who have qualified").',
      'Expressions of distance, monetary sums, or periods of time take singular verbs when considered as a whole unit (e.g., "Ten miles is a arduous distance").'
    ],
    testPrompt: 'Construct two sentences contrasting the proximity rule of "neither...nor" when reversing singular and plural subjects.'
  },
  {
    id: 4,
    title: 'Tenses, Aspects & Temporal Concord',
    category: 'Core Grammar',
    badge: 'Aspectual Precision',
    summary: 'Selecting correct tense-aspect combinations, maintaining temporal consistency, and reserving the past perfect strictly for antecedent actions.',
    keyRules: [
      'Past Perfect ("had + V3") is exclusively required when denoting an earlier completed event in the past relative to another past event.',
      'Stative verbs denoting cognition, emotion, or possession (e.g., "know", "believe", "prefer", "resemble", "belong") reject continuous aspects in standard English.',
      'Present Perfect ("has/have + V3") connects completed past actions with current relevance; it CANNOT be used with definitive past time adverbs (e.g., "yesterday", "in 2021").',
      'The Future cannot be used inside time clauses or conditional clauses introduced by "when", "as soon as", "before", "until", or "if" (use Present Simple instead).',
      'Maintain strict temporal consistency in continuous composition; avoid shifting between past and present without structural justification.'
    ],
    examples: [
      {
        incorrect: 'When the fire brigade arrived, the old warehouse already collapsed.',
        correct: 'When the fire brigade arrived, the old warehouse had already collapsed.',
        explanation: 'The collapse occurred prior to the arrival of the brigade, necessitating the Past Perfect tense.'
      },
      {
        incorrect: 'I am knowing the answer to this complex grammar dilemma for three days.',
        correct: 'I have known the answer to this complex grammar dilemma for three days.',
        explanation: '"Know" is a stative verb that cannot take continuous aspect; the ongoing state initiated in the past demands the Present Perfect.'
      }
    ],
    cambridgeTraps: [
      'Cambridge examiners deduct marks when students use "had + V3" without any second reference point in the past.',
      'Avoid saying "He has departed yesterday" — the specific past adverb "yesterday" forces Simple Past: "He departed yesterday".'
    ],
    testPrompt: 'Explain why "I have lived here for 5 years" conveys a different factual reality than "I lived here for 5 years".'
  },
  {
    id: 5,
    title: 'Active & Passive Voice Transformations',
    category: 'Core Grammar',
    badge: 'Stylistic Register',
    summary: 'Syntactic transformation between active and passive constructions, retaining exact aspectual nuance while utilizing agent omission for formal objectivity.',
    keyRules: [
      'Only transitive verbs can be transformed into the passive voice; intransitive verbs (e.g., "arrived", "died", "occurred") have no passive form.',
      'The passive voice retains the exact tense and aspect of the active sentence using the appropriate form of "to be + past participle (V3)".',
      'Omit the agent ("by...") in Cambridge objective summaries and official reports when the agent is unknown, obvious, or unimportant.',
      'Imperative sentences in the passive follow the formula: "Let + object + be + past participle (V3)".',
      'Verbs of perception or sensation in active voice take bare infinitives, but require the full infinitive "to" in passive voice (e.g., active: "We saw him leave" → passive: "He was seen to leave").'
    ],
    examples: [
      {
        incorrect: 'The catastrophic accident was happened in the late evening.',
        correct: 'The catastrophic accident happened in the late evening.',
        explanation: '"Happen" is an intransitive verb and cannot exist in the passive voice.'
      },
      {
        incorrect: 'Passive of "Shut the main gate immediately": The gate must be shut by you.',
        correct: 'Let the main gate be shut immediately.',
        explanation: 'Imperative directives transform canonically into "Let + object + be + V3" in formal grammar tests.'
      }
    ],
    cambridgeTraps: [
      'In CIE 1123 report writing, overuse of active voice sounds colloquial. Examiners expect passive constructions for objective institutional tone (e.g., "It was observed that...").',
      'Never alter the tense during voice transformation; students frequently confuse voice change with reported speech backshifting.'
    ],
    testPrompt: 'Convert this active sentence into passive voice without changing the meaning: "They elected him chairman of the disciplinary committee."'
  },
  {
    id: 6,
    title: 'Direct & Indirect Speech (Reported Discourse)',
    category: 'Core Grammar',
    badge: 'Discourse Transformations',
    summary: 'Reporting spoken discourse with accurate tense backshifting, pronoun harmonization, adverbial time/place shifts, and question clause word order.',
    keyRules: [
      'Reported questions adopt assertive statement word order (Subject + Verb), never interrogative inversion (e.g., "where I was going", not "where was I going").',
      'Do not backshift tenses if the reporting verb is in the present tense (e.g., "The teacher says that the Earth orbits the sun").',
      'Do not backshift statements expressing timeless universal truths or scientific laws (e.g., "Water boils at 100°C").',
      'Adverbial shifts are obligatory: "now" → "then", "today" → "that day", "yesterday" → "the previous day", "here" → "there", "tomorrow" → "the following day".',
      'Reported imperatives transform using the infinitive: "Tell / command / advise + object + to + base verb".'
    ],
    examples: [
      {
        incorrect: 'The inspector asked the boy that where was he hiding the stolen parchment.',
        correct: 'The inspector asked the boy where he was hiding the stolen parchment.',
        explanation: 'In indirect questions, do not use the conjunction "that", and reverse interrogative inversion to affirmative order ("he was hiding").'
      },
      {
        incorrect: 'She warned him that do not touch the electrical wires.',
        correct: 'She warned him not to touch the electrical wires.',
        explanation: 'Negative imperatives report using "not + to-infinitive", not "that do not".'
      }
    ],
    cambridgeTraps: [
      'Students frequently commit the "double conjunction trap": writing "asked that whether" or "asked that where". Never pair "that" with interrogative words.',
      'Remember "said to me" transforms into "told me" without a preposition. Writing "told to me" is an automatic mark deduction.'
    ],
    testPrompt: 'Transform this sentence into indirect speech: "The mentor inquired, \'Why did you neglect to submit your drafted portfolio yesterday?\'"'
  },
  {
    id: 7,
    title: 'Modal Auxiliary Verbs & Epistemic Deduction',
    category: 'Core Grammar',
    badge: 'Modal Nuance',
    summary: 'Expressing degrees of certainty, obligation, permission, and hypothetical deduction using pure modal auxiliaries and semi-modals.',
    keyRules: [
      'Pure modals (can, could, may, might, shall, should, will, would, must) are followed directly by the bare infinitive (without "to").',
      'Never use double modals in standard English (e.g., "might can" is ungrammatical; use "might be able to").',
      'Past logical deduction requires modal perfect: "must have + V3" (certainty), "can\'t have + V3" (impossibility), "might have + V3" (possibility).',
      '"Should have + V3" expresses unfulfilled moral obligation or regret in the past.',
      '"Must" expresses internal compulsion, whereas "have to" expresses external objective rule or institutional obligation.'
    ],
    examples: [
      {
        incorrect: 'He was absent yesterday; he must be ill at that time.',
        correct: 'He was absent yesterday; he must have been ill at that time.',
        explanation: 'Past logical deduction requires the modal perfect structure "must have + V3".'
      },
      {
        incorrect: 'The students ought attend the seminar without delay.',
        correct: 'The students ought to attend the seminar without delay.',
        explanation: '"Ought" is a semi-modal that strictly requires the full infinitive with "to".'
      }
    ],
    cambridgeTraps: [
      'Do not confuse "may have" with "might have" in conditional counterfactual situations.',
      'Cambridge CIE 1123 reading comprehension tests subtle modal tone: detecting whether an author uses "could" (speculative) vs "will" (deterministic).'
    ],
    testPrompt: 'Distinguish between the meanings of: "You need not have purchased the manual" and "You did not need to purchase the manual".'
  },
  {
    id: 8,
    title: 'Gerunds, Participles & Infinitives',
    category: 'Core Grammar',
    badge: 'Non-Finite Verbs',
    summary: 'Distinguishing verbal nouns (gerunds), verbal adjectives (participles), and infinitives, including verbs that shift meaning depending on complementation.',
    keyRules: [
      'Prepositions are universally followed by gerunds ("-ing"), never bare infinitives (e.g., "fond of reading", "insisted on going").',
      'Beware of the prepositional "to" vs the infinitive "to": phrases like "look forward to", "accustomed to", "object to" must take a gerund ("look forward to meeting you").',
      'Certain verbs shift meaning entirely: "remember to buy" (future action) vs "remember buying" (past recollection); "stop to smoke" (purpose) vs "stop smoking" (cessation).',
      'Participle phrases must modify the immediate grammatical subject of the main clause to avoid the deadly "dangling participle" error.',
      'Verbs of perception (see, hear, notice) take bare infinitive for completed actions and present participle for actions in ongoing progress.'
    ],
    examples: [
      {
        incorrect: 'Walking through the abandoned orchard, the ancient oak tree was observed by the scouts.',
        correct: 'Walking through the abandoned orchard, the scouts observed the ancient oak tree.',
        explanation: 'In the incorrect sentence, the oak tree appears to be walking. The participle clause must logically attach to "the scouts".'
      },
      {
        incorrect: 'We look forward to receive your esteemed batch application.',
        correct: 'We look forward to receiving your esteemed batch application.',
        explanation: 'In "look forward to", the word "to" functions as a preposition, requiring the gerund form "receiving".'
      }
    ],
    cambridgeTraps: [
      'Dangling participles in Paper 2 continuous compositions are penalized under structural coherence.',
      'Watch out for nouns preceded by possessive pronouns before gerunds in formal register (e.g., "I objected to his interrupting", rather than "him interrupting").'
    ],
    testPrompt: 'Identify and correct the dangling participle: "Rushing frantically across the railway platform, the suitcase fell open."'
  },
  {
    id: 9,
    title: 'Sentence Structures, Clause Hierarchy & Punctuation',
    category: 'Sentence Structure',
    badge: 'Syntactic Mastery',
    summary: 'Constructing compound and complex sentences with FANBOYS coordinating conjunctions, subordinating clauses, and eliminating comma splices.',
    keyRules: [
      'A Simple Sentence contains one independent clause with a subject and a finite verb.',
      'A Compound Sentence joins two independent clauses using a comma and a coordinating conjunction (FANBOYS: For, And, Nor, But, Or, Yet, So) or a semicolon.',
      'A Complex Sentence joins an independent clause with one or more dependent clauses introduced by subordinating conjunctions (although, because, whereas, while).',
      'A Comma Splice occurs when two independent clauses are joined with only a comma; correct it with a period, a semicolon, or a coordinating conjunction.',
      'A Run-On (Fused) Sentence occurs when two independent clauses are joined with zero punctuation.'
    ],
    examples: [
      {
        incorrect: 'The weather was inclement, we decided to postpone the scheduled sports fixture.',
        correct: 'The weather was inclement; consequently, we decided to postpone the scheduled sports fixture.',
        explanation: 'Two independent clauses cannot be joined solely with a comma. A semicolon with a transitional adverb or a period is required.'
      },
      {
        incorrect: 'Although the candidate was remarkably articulate, but he failed the written screening.',
        correct: 'Although the candidate was remarkably articulate, he failed the written screening.',
        explanation: 'Never pair subordinating conjunctions ("Although") with coordinating conjunctions ("but") in the same sentence structure.'
      }
    ],
    cambridgeTraps: [
      'Cambridge examiners look specifically for syntactic variety: candidates who write only simple sentences cannot achieve Band 1 or Band 2 in continuous writing.',
      'Conjunctive adverbs ("however", "therefore", "furthermore", "moreover") cannot join sentences with commas alone; they require a preceding semicolon or period.'
    ],
    testPrompt: 'Convert these two simple sentences into: (a) a compound sentence with a semicolon and conjunctive adverb, and (b) a complex periodic sentence.'
  },
  {
    id: 10,
    title: 'Conditional Sentences & Subjunctive Mood',
    category: 'Sentence Structure',
    badge: 'Hypothetical Logic',
    summary: 'Formulating Zero, First, Second (hypothetical subjunctive), and Third (counterfactual past) conditionals with inverted formal structures.',
    keyRules: [
      'Zero Conditional (Universal Truths): If + Present Simple, Present Simple (e.g., "If water reaches 100°C, it boils").',
      'First Conditional (Real Future Possibility): If + Present Simple, will + base verb (e.g., "If he studies consistently, he will excel").',
      'Second Conditional (Unreal/Hypothetical Present): If + Past Simple (Subjunctive "were" for all subjects), would + base verb (e.g., "If I were the principal, I would abolish homework").',
      'Third Conditional (Counterfactual Past): If + had + V3, would have + V3 (e.g., "If she had revised the rubric, she would have secured a distinction").',
      'Formal Inversion omits "if": "Had he known..." (3rd), "Were he to arrive..." (2nd), "Should you require assistance..." (1st).'
    ],
    examples: [
      {
        incorrect: 'If I was in your position, I would not accept such ambiguous terms.',
        correct: 'If I were in your position, I would not accept such ambiguous terms.',
        explanation: 'In standard formal English, the subjunctive "were" is mandatory for hypothetical conditions with singular subjects.'
      },
      {
        incorrect: 'If he would have listened to the counsel, he would not have erred.',
        correct: 'If he had listened to the counsel, he would not have erred.',
        explanation: 'The "if" clause of a 3rd conditional must use the past perfect ("had listened"), never "would have".'
      }
    ],
    cambridgeTraps: [
      'Never place "would" inside the "if" clause itself. Writing "If I would have known" is a fatal grammatical slip in Cambridge CIE 1123.',
      'Using inverted conditionals (e.g., "Had the committee verified the records...") in Paper 2 directed writing immediately signals Band 1 linguistic sophistication.'
    ],
    testPrompt: 'Invert this conditional sentence to omit "if": "If you should encounter any discrepancies in the audit, notify the administrator."'
  },
  {
    id: 11,
    title: 'Synonyms, Antonyms & Lexical Nuance',
    category: 'Applied Vocabulary',
    badge: 'Connotation Mastery',
    summary: 'Navigating denotation versus connotation, avoiding pomposity, and choosing vocabulary with contextually accurate emotional and formal register.',
    keyRules: [
      'Synonyms are rarely 100% interchangeable; every word carries unique emotional weight, formal register, and collocation habits.',
      'Distinguish between positive, neutral, and derogatory connotations (e.g., "frugal" [positive/prudent] vs "miserly" [pejorative/stingy]).',
      'Avoid "thesaurus stuffing": stuffing essays with obscure, archaic terms where simple, evocative verbs produce far superior prose.',
      'Respect fixed collocational partnerships (e.g., we "commit a blunder", "wage war", "harbor resentment", "broach a sensitive subject").',
      'Match lexical density to genre: directed formal letters demand concise legal/administrative precision; descriptive writing demands sensory immersion.'
    ],
    examples: [
      {
        incorrect: 'The adolescent was notorious among his peers for his magnificent humanitarian benevolence.',
        correct: 'The adolescent was renowned among his peers for his magnificent humanitarian benevolence.',
        explanation: '"Notorious" carries exclusively negative connotation (famous for wicked acts). "Renowned" or "celebrated" is the proper positive counterpart.'
      },
      {
        incorrect: 'The council decided to make an inquiry into the financial scandal.',
        correct: 'The council decided to launch / institute an inquiry into the financial scandal.',
        explanation: 'High-band Cambridge writing employs strong collocation verbs like "institute" or "launch" an inquiry rather than weak generic verbs like "make".'
      }
    ],
    cambridgeTraps: [
      'Cambridge Paper 1 questions ask candidates to explain the precise nuance of a word "as used in the passage", not merely recite a memorized dictionary definition.',
      'Avoid words like "childish" (immature) when you mean "childlike" (innocent and pure).'
    ],
    testPrompt: 'Compare the nuances of these three near-synonyms: "obstinate", "resolute", and "dogged".'
  },
  {
    id: 12,
    title: 'Prefixes, Suffixes & Etymological Derivations',
    category: 'Applied Vocabulary',
    badge: 'Morphological Precision',
    summary: 'Deconstructing Greek and Latin roots to decipher unfamiliar vocabulary, applying negative prefixes, and mastering spelling shifts during affixation.',
    keyRules: [
      'Negative prefixes attach selectively based on phonetic patterns: "il-" before "l" (illiterate), "ir-" before "r" (irreversible), "im-" before "m/p" (impeccable, impartial), "in-" before vowels/other consonants (inevitable).',
      'Master the distinction between "-able" (usually attached to complete root words: adapt → adaptable) and "-ible" (usually attached to incomplete roots: aud → audible, vis → visible).',
      'Suffix shifts frequently alter word classes: verb "analyse" → noun "analysis" → adjective "analytical" → adverb "analytically".',
      'Beware of false negative prefixes: "inflammable" does not mean non-flammable; it means readily flammable (the negative is "non-flammable").',
      'Roots illuminate academic lexicon: "bene-" (good: benefactor), "mal-" (bad: malevolent), "chron-" (time: chronological), "anthrop-" (human: anthropology).'
    ],
    examples: [
      {
        incorrect: 'His handwriting was completely unlegible and full of grammatical blunders.',
        correct: 'His handwriting was completely illegible and full of grammatical blunders.',
        explanation: 'The root word "legible" starts with "l", dictating the assimilation prefix "il-", not "un-".'
      },
      {
        incorrect: 'The fabric was treated to be uncombustible and non-inflammable.',
        correct: 'The fabric was treated to be incombustible and non-flammable.',
        explanation: '"Incombustible" uses the prefix "in-", and "non-flammable" correctly indicates immunity to fire.'
      }
    ],
    cambridgeTraps: [
      'Cambridge spelling rules penalize doubling or dropping consonants during suffix addition (e.g., "occur" → "occurred", but "benefit" → "benefited").',
      'Be alert to root words ending in "y": preceded by a consonant, the "y" becomes "i" before suffixes (e.g., "beauty" → "beautiful"), unless the suffix is "-ing" (e.g., "carry" → "carrying").'
    ],
    testPrompt: 'Break down the word "incorrigible" into its prefix, root, and suffix, detailing the semantic contribution of each part.'
  },
  {
    id: 13,
    title: 'Homophones, Homonyms & Confused Pairs',
    category: 'Applied Vocabulary',
    badge: 'Lexical Disambiguation',
    summary: 'Eliminating catastrophic confusions between phonetically identical or visually similar word pairs that distort academic arguments.',
    keyRules: [
      '"Affect" is predominantly a verb (to influence); "Effect" is predominantly a noun (the outcome or result).',
      '"Principal" refers to a person of primary rank (headmaster) or initial capital; "Principle" refers to a fundamental moral truth or scientific doctrine.',
      '"Stationary" with an \'a\' means immobile/motionless; "Stationery" with an \'e\' refers to writing instruments (envelopes, pens).',
      '"Compliment" with an \'i\' is an expression of praise; "Complement" with an \'e\' denotes completing or matching harmoniously.',
      '"Desert" (one \'s\') is an arid wasteland or to abandon; "Dessert" (two \'s\'s) is a sweet post-meal delicacy (remember: two \'s\'s for sweet snacks).'
    ],
    examples: [
      {
        incorrect: 'The persistent economic inflation had a catastrophic affect on the principal of the community.',
        correct: 'The persistent economic inflation had a catastrophic effect on the principle of the community.',
        explanation: 'The noun "effect" is needed following the article, and "principle" refers to the core moral standard.'
      },
      {
        incorrect: 'He purchased administrative stationary before parking his stationery vehicle.',
        correct: 'He purchased administrative stationery before parking his stationary vehicle.',
        explanation: '"Stationery" (with \'e\') means office supplies; "stationary" (with \'a\') means motionless.'
      }
    ],
    cambridgeTraps: [
      'In CIE 1123, confusion between homophones is categorized as an egregious mechanical failure, barring a composition from Band 1.',
      'Keep track of "loose" (unbound, slack) vs "lose" (misplace or fail to win), and "council" (governing body) vs "counsel" (advice/advocate).'
    ],
    testPrompt: 'Draft two sentences correctly deploying both words in the pair "eminent" and "imminent".'
  },
  {
    id: 14,
    title: 'High-Value Idioms & Figurative Discourse',
    category: 'Applied Vocabulary',
    badge: 'Figurative Dexterity',
    summary: 'Strategically employing nuanced idiomatic expressions and figurative phrases without resorting to tired clichés or inappropriate colloquialisms.',
    keyRules: [
      'Idioms possess fixed syntactic and prepositional structures; you cannot substitute synonyms within an idiom (e.g., "hit the nail on the head", never "strike the pin on the skull").',
      'Use idioms sparingly in formal academic writing; reserve them for narrative compositions, rhetorical speeches, and magazine journalism.',
      'Never mix metaphors (e.g., "We will burn that bridge when we drop the ball" is a catastrophic mixed metaphor).',
      'Colloquial slang (e.g., "spill the tea", "cut corners") is strictly penalized in CIE 1123; stick to established literary idioms.',
      'Ensure the figurative phrase matches the atmospheric tone of the paragraph: humorous idioms ruin sombre descriptive writing.'
    ],
    examples: [
      {
        incorrect: 'During the financial crisis, the corporation decided to bite the cannonball.',
        correct: 'During the financial crisis, the corporation decided to bite the bullet.',
        explanation: 'The canonical idiom is "bite the bullet", meaning to endure an inevitable hardship with fortitude.'
      },
      {
        incorrect: 'The investigator left no rock untouched in his pursuit of truth.',
        correct: 'The investigator left no stone unturned in his pursuit of truth.',
        explanation: 'Fixed idioms cannot endure lexical substitution: "stone unturned" is the mandatory formula.'
      }
    ],
    cambridgeTraps: [
      'Do not overuse idioms as mere fillers. Cambridge examiners praise one well-placed, subtle idiom far more than an essay bloated with colloquial catchphrases.',
      'Avoid clichés like "at the end of the day" or "in today\'s modern world"; these are red flags for weak vocabulary.'
    ],
    testPrompt: 'Provide an authentic context where using the idiom "burn the midnight oil" strengthens a formal speech without sounding colloquial.'
  },
  {
    id: 15,
    title: 'One Word Substitution & Academic Density',
    category: 'Applied Vocabulary',
    badge: 'Lexical Economy',
    summary: 'Condensing sprawling wordy clauses into single, precise academic nouns and adjectives to elevate summary writing and lexical sophistication.',
    keyRules: [
      'One Word Substitutions are indispensable for the 100-word summary task in Paper 1, where every word saved yields valuable points.',
      'Replace relative clauses with concise agent nouns (e.g., "a person who hates all mankind" → "misanthrope").',
      'Replace verbose condition descriptions with exact psychological/clinical terms (e.g., "an irrational terror of enclosed spaces" → "claustrophobia").',
      'Replace government descriptions with precise political science terms (e.g., "rule by a privileged noble class" → "aristocracy").',
      'Ensure the substituted term matches the exact grammatical category and number required by the surrounding sentence structure.'
    ],
    examples: [
      {
        incorrect: 'The government granted an official pardon which forgave all offenses committed by those who rebelled against the state.',
        correct: 'The government declared a general amnesty for the insurgents.',
        explanation: 'The 17-word clause is elegantly compressed into 9 words through the precise academic terms "amnesty" and "insurgents".'
      },
      {
        incorrect: 'The professor was a person who was capable of doing many different things with equal skill.',
        correct: 'The professor was exceptionally versatile.',
        explanation: 'Replacing verbose descriptive clauses with "versatile" dramatically sharpens the prose.'
      }
    ],
    cambridgeTraps: [
      'Ensure the substitute word agrees grammatically with the subject. "He is an altruist" (noun) vs "His actions were altruistic" (adjective).',
      'Do not substitute words whose definitions you only partially comprehend; incorrect substitution damages clarity and coherence.'
    ],
    testPrompt: 'Condense this sentence into fewer than 10 words using one-word substitutions: "A person who collects postage stamps delivered a speech without any prior preparation."'
  }
];
