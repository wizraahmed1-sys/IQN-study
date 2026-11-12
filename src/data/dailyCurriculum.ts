import { DailyModule } from '../types';

export const DAILY_MODULES: DailyModule[] = [
  // ==========================================
  // DAY 1: CREATIVE WRITING & PARTS OF SPEECH
  // ==========================================
  {
    dayNumber: 1,
    title: 'Parts of Speech & Sensory Immersion',
    badge: 'Day 1 • Creative Writing',
    focusGrammar: 'Nouns, Verbs, Transitivity, Irregular Adverbs, Prepositional Cases',
    focusWriting: 'Creative Writing (200 Words Descriptive Sensory Immersion)',
    notes: {
      topicTitle: 'Functional Syntax & Sensory Atmosphere Architecture',
      summary: 'Mastering syntactic flexibility where words shift functions depending on sentence context, banishing irregular -ly adverb traps (fast, hard, early, late), and plunging directly into sensory imagery.',
      keyPoints: [
        'Words are categorized by syntactic function in context: "round" can function as noun, verb, adjective, adverb, or preposition.',
        'Irregular adverbs: "fast", "hard", "early", "late" never accept "-ly". Writing "he drove fastly" is a penalized Cambridge error.',
        'Prepositions demand objective case pronouns: "between you and me", "except him and us" (never nominative "I" or "he").',
        'Creative Writing Golden Rule: Plunge immediately into sensory dimensions (sight, sound, smell, touch, taste) with zero conversational greeting or preamble.'
      ],
      examples: [
        {
          rule: 'Prepositional objective case',
          incorrect: 'The supervisor divided the revised syllabus between he and I.',
          correct: 'The supervisor divided the revised syllabus between him and me.'
        },
        {
          rule: 'Irregular adverb without -ly',
          incorrect: 'She ran fastly towards the departing commuter tram.',
          correct: 'She ran fast towards the departing commuter tram.'
        }
      ],
      cambridgeExamCaution: 'Never open descriptive creative writing with "One fine morning, I woke up and decided to visit the park." Open directly with light, atmospheric pressure, and aromas.'
    },
    homework: {
      genre: 'Creative Writing',
      title: 'Day 1 Homework: 200-Word Creative Descriptive Writing',
      creativeWritingPrompt: 'Describe an ancient, crowded evening spice bazaar at twilight as the copper lanterns are ignited and traders prepare for the night.',
      targetWordCount: '200 words (acceptable range: 190–220 words)',
      pageRequirement: 'Up to 2 Pages (Type in cyber editor or upload Page 1 & Page 2 photos of handwritten work)',
      scenario: 'You are an observant visitor standing in the center of the old spice bazaar as dusk falls.',
      mandatoryElements: [
        'Engage all 5 senses: amber lantern light, haggling murmurs, roasted cumin and petrichor, cold cobblestones underfoot, and sweet spiced tea.',
        'Zero conversational preface—plunge directly into the sensory scene in sentence one.',
        'Include at least 2 complex periodic sentences with subordinating clauses.',
        'Strict length requirement of ~200 words.'
      ],
      formatGuidelines: [
        'Use high-fidelity sensory adjectives (amber, pungent, diaphanous, iridescent).',
        'Employ static spatial progression (sky → lantern level → cobblestones).',
        'Zero dialogue or narrative plotting needed.'
      ],
      evaluationRubric: 'Assessed on Sensory Depth (10M), Lexical Nuance (10M), and Syntax & Grammar Precision (10M). Total: 30 Marks.'
    },
    planning: {
      studyGoal: 'Master word classes and irregular adverbs, complete 55 classwork questions, and submit 200-word creative descriptive homework.',
      estimatedMinutes: 75,
      scheduleSlot: '5:00 PM – 6:15 PM PST',
      milestones: [
        'Study Day 1 Cambridge Notes & Examples (15 mins)',
        'Complete Classwork Terminal: 55 Questions on Parts of Speech (35 mins)',
        'Draft and submit 200-Word Creative Writing Homework via 2-page upload or typing (25 mins)'
      ]
    },
    classworkQuestions: [
      {
        id: 101,
        question: 'Identify the word class of "fast" in: "He held fast to his moral principles throughout the crisis."',
        options: ['A) Adverb', 'B) Adjective', 'C) Verb', 'D) Preposition'],
        correctIndex: 0,
        explanation: '"Fast" functions as an adverb modifying the verb "held" (meaning firmly/tenaciously).'
      },
      {
        id: 102,
        question: 'Which of the following sentences uses the adverb "hard" with standard grammatical precision?',
        options: [
          'A) The monsoon rains fell hardly upon the tin roof.',
          'B) The monsoon rains fell hard upon the tin roof.',
          'C) He worked hardly to pass the Cambridge finals.',
          'D) She hit the tennis ball hardly into the net.'
        ],
        correctIndex: 1,
        explanation: '"Hard" is the correct adverb of manner. "Hardly" means scarcely or barely.'
      },
      {
        id: 103,
        question: 'Select the sentence with the correct pronoun case after the preposition "between":',
        options: [
          'A) There are no secrets between she and I.',
          'B) There are no secrets between her and I.',
          'C) There are no secrets between her and me.',
          'D) There are no secrets between she and me.'
        ],
        correctIndex: 2,
        explanation: 'Prepositions require objective pronouns: "her and me".'
      },
      {
        id: 104,
        question: 'In the sentence "Swimming along the coral reef is exhilarating," what grammatical role does "Swimming" perform?',
        options: ['A) Present participle verb', 'B) Gerund functioning as noun subject', 'C) Demonstrative adjective', 'D) Predicate adjective'],
        correctIndex: 1,
        explanation: '"Swimming" is a non-finite verbal noun (gerund) serving as the grammatical subject of the clause.'
      },
      {
        id: 105,
        question: 'Which word in the sentence is a transitive verb requiring a direct object? "The curator displayed the fragile manuscript before the guests."',
        options: ['A) fragile', 'B) displayed', 'C) before', 'D) manuscript'],
        correctIndex: 1,
        explanation: '"Displayed" is transitive because it transfers action to the direct object ("the fragile manuscript").'
      },
      {
        id: 106,
        question: 'Choose the sentence that avoids the dangling modifier trap:',
        options: [
          'A) Walking into the bazaar, the aroma of cardamom greeted Danish.',
          'B) Walking into the bazaar, Danish was greeted by the aroma of cardamom.',
          'C) Having arrived late, the gate was locked.',
          'D) Running down the stairs, the wallet fell from his pocket.'
        ],
        correctIndex: 1,
        explanation: 'In option B, "Danish" is the person actually walking into the bazaar.'
      },
      {
        id: 107,
        question: 'What is the function of "that" in: "The antique timepiece that hung in the parlour stopped ticking at midnight"?',
        options: ['A) Relative pronoun introducing a restrictive clause', 'B) Demonstrative adjective', 'C) Coordinating conjunction', 'D) Subordinating conjunction of reason'],
        correctIndex: 0,
        explanation: '"That" acts as a relative pronoun referring back to "antique timepiece".'
      },
      {
        id: 108,
        question: 'Which of the following contains an intransitive verb that CANNOT be turned into passive voice?',
        options: ['A) The committee rejected the proposal.', 'B) The ancient bridge collapsed yesterday.', 'C) The librarian ordered thirty textbooks.', 'D) Ammar rewrote the conclusion.'],
        correctIndex: 1,
        explanation: '"Collapsed" is intransitive; it has no direct object and cannot exist in the passive.'
      },
      {
        id: 109,
        question: 'Identify the sentence where "daily" functions as an adverb:',
        options: [
          'A) He reads the daily newspaper every dawn.',
          'B) The scholars revise Cambridge past papers daily.',
          'C) Her daily routine is rigorous.',
          'D) It is a daily occurrence.'
        ],
        correctIndex: 1,
        explanation: '"Daily" modifies the verb "revise", answering how often the action takes place.'
      },
      {
        id: 110,
        question: 'Which option correctly converts the adjective "subtle" into an adverb?',
        options: ['A) subtlely', 'B) subtly', 'C) subtley', 'D) subtility'],
        correctIndex: 1,
        explanation: 'Adjectives ending in consonant + "le" drop the "e" and take "y": "subtly".'
      },
      ...Array.from({ length: 45 }, (_, i) => ({
        id: 111 + i,
        question: `[Day 1 Parts of Speech Practice #${i + 11}] Identify the standard Cambridge grammatical categorization in: "The candidate answered with remarkable ${i % 2 === 0 ? 'dexterity' : 'fortitude'} during the examination." What word class is highlighted?`,
        options: ['A) Abstract Noun', 'B) Demonstrative Pronoun', 'C) Intransitive Verb', 'D) Coordinating Conjunction'],
        correctIndex: 0,
        explanation: 'Words denoting non-physical concepts, qualities, or virtues (dexterity, fortitude) function as abstract nouns.'
      }))
    ]
  },

  // ==========================================
  // DAY 2: REPORT WRITING & SUBJECT-VERB CONCORD
  // ==========================================
  {
    dayNumber: 2,
    title: 'Concord (Agreement) & Official Report Writing',
    badge: 'Day 2 • Report Writing',
    focusGrammar: 'Subject-Verb Concord, Intervening Clauses, Proximity Rule, Indefinite Pronouns',
    focusWriting: 'Report Writing (200 Words Official Investigative Report)',
    notes: {
      topicTitle: 'Syntactic Concord & Objective Administrative Reporting',
      summary: 'Maintaining grammatical concord between subjects and verbs despite intervening parenthetical phrases (along with, as well as) and executing official institutional reports with impersonal passive voice.',
      keyPoints: [
        'Intervening parenthetical phrases ("along with", "together with", "as well as", "in addition to") never alter the singular number of the true subject.',
        'Proximity Rule: With "either...or" and "neither...nor", the verb agrees with the subject closest to it.',
        'Indefinite pronouns ("everyone", "nobody", "each of", "neither of") are grammatically singular.',
        'Report Writing Format: TO, FROM, DATE, SUBJECT, followed by numbered terms of reference, investigative findings, and actionable recommendations in objective passive voice.'
      ],
      examples: [
        {
          rule: 'Intervening parenthetical phrases',
          incorrect: 'The school principal, along with five senior lecturers, were present.',
          correct: 'The school principal, along with five senior lecturers, was present.'
        },
        {
          rule: 'Proximity rule with neither...nor',
          incorrect: 'Neither the monitor nor the pupils was prepared for the audit.',
          correct: 'Neither the monitor nor the pupils were prepared for the audit.'
        }
      ],
      cambridgeExamCaution: 'Never write a report in conversational first-person narrative. Use objective passive phrasing ("It was observed that...", "Ten workstations were surveyed...").'
    },
    homework: {
      genre: 'Report Writing',
      title: 'Day 2 Homework: 200-Word Official Inspection Report',
      creativeWritingPrompt: 'Draft an official 200-word investigative report to the Board of Governors regarding campus Wi-Fi connectivity bottlenecks and digital library terminal shortages.',
      targetWordCount: '200 words (acceptable range: 190–220 words)',
      pageRequirement: 'Up to 2 Pages (Type in cyber editor or upload Page 1 & Page 2 photos of handwritten work)',
      scenario: 'You are the Student IT Liaison Officer reporting on student digital resource access prior to mock exams.',
      mandatoryElements: [
        'Report Header: TO, FROM, DATE, SUBJECT.',
        'Numbered sections: 1. Terms of Reference, 2. Key Findings, 3. Recommendations.',
        'Impersonal passive voice register throughout.',
        'Strict length limit of ~200 words.'
      ],
      formatGuidelines: [
        'Align headers neatly.',
        'Avoid informal words like "terrible" or "horrible"; use "insufficient bandwidth" or "intermittent latency".',
        'End with actionable remediation timelines.'
      ],
      evaluationRubric: 'Assessed on Official Report Layout (10M), Impersonal Passive Tone (10M), and Concord & Precision (10M). Total: 30 Marks.'
    },
    planning: {
      studyGoal: 'Master concord across complex intervening structures, complete 55 classwork questions, and submit 200-word official report.',
      estimatedMinutes: 75,
      scheduleSlot: '5:00 PM – 6:15 PM PST',
      milestones: [
        'Review Concord rules & Proximity traps (15 mins)',
        'Complete Classwork Terminal: 55 Concord Questions (35 mins)',
        'Submit 200-Word Report Homework via 2-page upload or typing (25 mins)'
      ]
    },
    classworkQuestions: [
      {
        id: 201,
        question: 'The captain, as well as the deck navigators, ________ commended for maritime vigilance.',
        options: ['A) was', 'B) were', 'C) are', 'D) have been'],
        correctIndex: 0,
        explanation: 'The head noun "The captain" is singular; "as well as" does not create a compound plural subject.'
      },
      {
        id: 202,
        question: 'Neither the chemistry lecturer nor the laboratory assistants ________ the key to the acid vault.',
        options: ['A) possesses', 'B) possess', 'C) is possessing', 'D) has possessed'],
        correctIndex: 1,
        explanation: 'By the proximity rule, the verb agrees with the plural "assistants": "possess".'
      },
      {
        id: 203,
        question: 'Each of the fifty candidates ________ assigned a personal Cambridge candidate index number.',
        options: ['A) were', 'B) has been', 'C) have been', 'D) are'],
        correctIndex: 1,
        explanation: '"Each" is a singular distributive pronoun requiring "has been".'
      },
      {
        id: 204,
        question: 'Ten thousand rupees ________ a reasonable registration fee for the national debate championship.',
        options: ['A) is', 'B) are', 'C) were', 'D) have been'],
        correctIndex: 0,
        explanation: 'Specific sums of money acting as a collective amount take singular verbs ("is").'
      },
      {
        id: 205,
        question: 'Ammar is one of those scholars who ________ consistently achieved distinctions in CIE 1123.',
        options: ['A) has', 'B) have', 'C) is', 'D) was'],
        correctIndex: 1,
        explanation: 'In "one of those [plural] who", the relative clause modifies "scholars" (plural), requiring "have".'
      },
      ...Array.from({ length: 50 }, (_, i) => ({
        id: 206 + i,
        question: `[Day 2 Concord Practice #${i + 6}] "The delegation of senior scholars, accompanied by ${i + 2} faculty members, ________ arriving at 6:00 PM PST." Select the verb agreeing with the true subject:`,
        options: ['A) is', 'B) are', 'C) were', 'D) have been'],
        correctIndex: 0,
        explanation: 'The true subject is singular: "The delegation". Phrases introduced by "accompanied by" do not affect concord.'
      }))
    ]
  },

  // ==========================================
  // DAY 3: DIALOGUE WRITING & TENSES/ASPECTS
  // ==========================================
  {
    dayNumber: 3,
    title: 'Tenses & Dramatic Dialogue Writing',
    badge: 'Day 3 • Dialogue Writing',
    focusGrammar: 'Past Perfect Temporal Anchors, Stative Verbs, Dialogue Punctuation & Register',
    focusWriting: 'Dialogue Writing (200 Words Dramatic Scripted Conversation)',
    notes: {
      topicTitle: 'Temporal Logic & Scripted Dialogue Dynamics',
      summary: 'Employing past perfect for antecedent past events, maintaining temporal consistency, and punctuating realistic dramatic dialogue with stage directions and authentic register.',
      keyPoints: [
        'Past Perfect ("had + V3") requires an anterior relationship relative to another past anchor point.',
        'Stative verbs (believe, know, resemble, possess) reject continuous forms in standard English.',
        'Dialogue Punctuation: Direct speech is enclosed in quotation marks with commas placed inside closing quotes: "I had already warned you," she whispered.',
        'Scripted Dialogue: Use character names in bold, followed by colons and parenthetical stage directions to show tone, gestures, and subtext.'
      ],
      examples: [
        {
          rule: 'Past perfect for antecedent events',
          incorrect: 'When the siren blared, the miners already evacuated the lower shaft.',
          correct: 'When the siren blared, the miners had already evacuated the lower shaft.'
        },
        {
          rule: 'Dialogue punctuation',
          incorrect: '"We must leave immediately" said Danish "before the storm breaks"',
          correct: '"We must leave immediately," said Danish, "before the storm breaks."'
        }
      ],
      cambridgeExamCaution: 'Never use past perfect indiscriminately for simple past narratives. Reserve "had" strictly for an earlier past action.'
    },
    homework: {
      genre: 'Dialogue Writing',
      title: 'Day 3 Homework: 200-Word Dramatic Scripted Dialogue',
      creativeWritingPrompt: 'Write a 200-word dramatic scripted dialogue between an ethical museum archaeologist and an antiquities dealer attempting to auction an illegally excavated relic.',
      targetWordCount: '200 words (acceptable range: 190–220 words)',
      pageRequirement: 'Up to 2 Pages (Type in cyber editor or upload Page 1 & Page 2 photos of handwritten work)',
      scenario: 'Setting: A dim backroom antique gallery in Old Lahore at midnight.',
      mandatoryElements: [
        'Include character designations and stage directions in brackets (e.g. [leaning across the table, voice trembling]).',
        'Demonstrate distinct contrasting registers: the archaeologist\'s authoritative academic tone vs the dealer\'s evasive persuasion.',
        'Include at least one accurate past perfect construction explaining how the relic had been smuggled.',
        'Strict length limit of ~200 words.'
      ],
      formatGuidelines: [
        'Format clearly as: NAME: "Spoken line." [Stage direction]',
        'Show intellectual tension without cartoonish melodrama.',
        'End on a dramatic turning point or moral ultimatum.'
      ],
      evaluationRubric: 'Assessed on Dialogue Formatting & Punctuation (10M), Character Voice & Register (10M), and Grammatical Rigor (10M). Total: 30 Marks.'
    },
    planning: {
      studyGoal: 'Master temporal concord, complete 55 classwork questions, and submit 200-word scripted dramatic dialogue.',
      estimatedMinutes: 75,
      scheduleSlot: '5:00 PM – 6:15 PM PST',
      milestones: [
        'Review Past Perfect & Dialogue Punctuation rules (15 mins)',
        'Complete Classwork Terminal: 55 Tense & Aspect Questions (35 mins)',
        'Submit 200-Word Scripted Dialogue Homework via 2-page upload or typing (25 mins)'
      ]
    },
    classworkQuestions: [
      {
        id: 301,
        question: 'By the time the rescue team arrived at the crevasse, the snowstorm ________ the distress flares.',
        options: ['A) had extinguished', 'B) has extinguished', 'C) was extinguishing', 'D) extinguished'],
        correctIndex: 0,
        explanation: 'Extinction of the flares occurred prior to the arrival of the team, necessitating Past Perfect.'
      },
      {
        id: 302,
        question: 'Which of the following dialogue lines demonstrates flawless Cambridge punctuation?',
        options: [
          'A) "I cannot sign this waiver", protested Danish, "unless terms change".',
          'B) "I cannot sign this waiver," protested Danish, "unless terms change."',
          'C) "I cannot sign this waiver" protested Danish "unless terms change."',
          'D) "I cannot sign this waiver". Protested Danish "Unless terms change."'
        ],
        correctIndex: 1,
        explanation: 'Commas must be enclosed inside quotation marks with uninterrupted sentence continuity.'
      },
      ...Array.from({ length: 53 }, (_, i) => ({
        id: 303 + i,
        question: `[Day 3 Tense/Dialogue Practice #${i + 3}] Identify the correct temporal form: "Scarcely had the ${i % 2 === 0 ? 'archaeologist' : 'curator'} touched the parchment when the brittle edges ________ to crumble."`,
        options: ['A) began', 'B) had begun', 'C) was beginning', 'D) begins'],
        correctIndex: 0,
        explanation: 'Following inverted past perfect ("Scarcely had..."), the succeeding clause takes simple past ("began").'
      }))
    ]
  },

  // ==========================================
  // DAY 4: ESSAY WRITING & VOICE/SPEECH
  // ==========================================
  {
    dayNumber: 4,
    title: 'Voice, Speech & Discursive Essay Writing',
    badge: 'Day 4 • Essay Writing',
    focusGrammar: 'Passive Voice Agent Omission, Indirect Speech Backshifting, S.E.E.L. Architecture',
    focusWriting: 'Essay Writing (200 Words S.E.E.L. Discursive Essay)',
    notes: {
      topicTitle: 'Objective Register & Discursive Paragraph Architecture',
      summary: 'Executing passive transformations with strategic agent omission and constructing bulletproof 200-word argumentative essays using the Cambridge S.E.E.L. formula (Statement, Explanation, Example, Link).',
      keyPoints: [
        'Passive transformations retain exact aspect: "They have built" → "It has been built".',
        'Indirect questions reverse interrogative inversion: "where he was going" (never "where was he going").',
        'S.E.E.L. Formula: S (Topic sentence asserting thesis), E1 (Deconstruct mechanisms), E2 (Concrete verifiable evidence), L (Clincher synthesis back to prompt).',
        'Discursive essays require balanced academic markers: "Undeniably", "Conversely", "Hence".'
      ],
      examples: [
        {
          rule: 'Indirect question word order',
          incorrect: 'The examiner asked that why was the essay incomplete.',
          correct: 'The examiner asked why the essay was incomplete.'
        },
        {
          rule: 'S.E.E.L. paragraph link',
          incorrect: 'And that is why computers are good.',
          correct: 'Consequently, digital literacy must be integrated as an essential cognitive foundation.'
        }
      ],
      cambridgeExamCaution: 'Never use rhetorical clichés like "In today\'s modern world" or "Since the dawn of time" to begin discursive essays.'
    },
    homework: {
      genre: 'Essay Writing',
      title: 'Day 4 Homework: 200-Word Discursive S.E.E.L. Essay',
      creativeWritingPrompt: 'Write a 200-word discursive essay analyzing whether artificial intelligence in classrooms empowers student intellect or accelerates cognitive atrophy.',
      targetWordCount: '200 words (acceptable range: 190–220 words)',
      pageRequirement: 'Up to 2 Pages (Type in cyber editor or upload Page 1 & Page 2 photos of handwritten work)',
      scenario: 'Examiner topic: Educational Technology & Intellectual Independence.',
      mandatoryElements: [
        'Incorporate the complete S.E.E.L. structure: Statement, Explanation, Example, Link.',
        'Use formal transition markers (Furthermore, Conversely, Incontrovertibly).',
        'Zero contractions (write "do not", "cannot").',
        'Strict length limit of ~200 words.'
      ],
      formatGuidelines: [
        'Present balanced thesis with nuanced synthesis.',
        'Cite realistic educational precedents.',
        'End on a thought-provoking future horizon conclusion.'
      ],
      evaluationRubric: 'Assessed on S.E.E.L. Architecture (10M), Discursive Balance & Tone (10M), and Syntax & Passive Control (10M). Total: 30 Marks.'
    },
    planning: {
      studyGoal: 'Master passive/reported transformations, complete 55 classwork questions, and submit 200-word S.E.E.L. essay.',
      estimatedMinutes: 75,
      scheduleSlot: '5:00 PM – 6:15 PM PST',
      milestones: [
        'Deconstruct S.E.E.L. and Voice/Speech notes (15 mins)',
        'Complete Classwork Terminal: 55 Questions on Voice & Speech (35 mins)',
        'Submit 200-Word Discursive Essay Homework via 2-page upload or typing (25 mins)'
      ]
    },
    classworkQuestions: [
      {
        id: 401,
        question: 'Transform into correct indirect speech: "The mentor asked, \'Why did you neglect to submit the portfolio?\'"',
        options: [
          'A) The mentor asked that why did I neglect to submit the portfolio.',
          'B) The mentor asked why I had neglected to submit the portfolio.',
          'C) The mentor asked why had I neglected to submit the portfolio.',
          'D) The mentor told why I neglected to submit the portfolio.'
        ],
        correctIndex: 1,
        explanation: 'Indirect questions require affirmative statement word order ("I had neglected") without the conjunction "that".'
      },
      ...Array.from({ length: 54 }, (_, i) => ({
        id: 402 + i,
        question: `[Day 4 Voice/Speech Practice #${i + 2}] Which of the following correctly transforms "The committee will publish the revised ${i % 2 === 0 ? 'regulations' : 'criteria'} tomorrow" into formal passive voice?`,
        options: [
          'A) The revised criteria will be published by the committee tomorrow.',
          'B) The revised criteria would be published tomorrow.',
          'C) Tomorrow will publish the criteria.',
          'D) The criteria has been published tomorrow.'
        ],
        correctIndex: 0,
        explanation: 'Passive future simple requires: "will be + past participle (V3)".'
      }))
    ]
  },

  // ==========================================
  // DAY 5: CREATIVE WRITING & CLAUSES/PUNCTUATION
  // ==========================================
  {
    dayNumber: 5,
    title: 'Clauses, Punctuation & Narrative Suspense',
    badge: 'Day 5 • Creative Writing',
    focusGrammar: 'Coordinating FANBOYS, Semicolons, Comma Splices, Clause Subordination',
    focusWriting: 'Creative Writing (200 Words Dramatic Narrative Suspense)',
    notes: {
      topicTitle: 'Syntactic Punctuation & Classical Narrative Arc',
      summary: 'Connecting clauses with coordinating conjunctions (FANBOYS), deploying semicolons with conjunctive adverbs to eliminate comma splices, and driving intense narrative tension in 200 words.',
      keyPoints: [
        'A comma splice occurs when two independent clauses are joined with only a comma. It blocks candidates from Band 1.',
        'Fix comma splices with: 1. Period, 2. Semicolon, or 3. Comma + FANBOYS coordinating conjunction.',
        'Conjunctive adverbs ("however", "therefore", "moreover") require a preceding semicolon: "; consequently, ...".',
        'Narrative Dramatic Arc: Exposition → Inciting Peril → Rising Action → Peak Tension → Resolute Action.'
      ],
      examples: [
        {
          rule: 'Resolving comma splices',
          incorrect: 'The Arctic blizzard intensified, the ship engines failed.',
          correct: 'The Arctic blizzard intensified; consequently, the ship engines failed.'
        },
        {
          rule: 'Subordinating clauses without redundant but',
          incorrect: 'Although the hull fractured, but the crew held the breach.',
          correct: 'Although the hull fractured, the crew held the breach.'
        }
      ],
      cambridgeExamCaution: 'Never write a narrative where the protagonist wakes up and "it was all a dream". Cambridge examiners penalize this cliché heavily.'
    },
    homework: {
      genre: 'Creative Writing',
      title: 'Day 5 Homework: 200-Word Creative Narrative Suspense',
      creativeWritingPrompt: 'Write a 200-word gripping narrative sequence depicting the moment an ice-breaker vessel\'s main rudder shatters amidst colliding ice floes in Arctic waters.',
      targetWordCount: '200 words (acceptable range: 190–220 words)',
      pageRequirement: 'Up to 2 Pages (Type in cyber editor or upload Page 1 & Page 2 photos of handwritten work)',
      scenario: 'You are the chief navigator on the bridge as metallic screeching echoes through the hull.',
      mandatoryElements: [
        'Zero comma splices (mandatory structural requirement).',
        'Incorporate at least one semicolon joining two balanced independent clauses.',
        'High physiological tension (gasping breaths, red warning alarms, shuddering deckplates).',
        'Strict length limit of ~200 words.'
      ],
      formatGuidelines: [
        'Use varied sentence cadence: periodic sentences for setting, short staccato clauses for panic.',
        'Show, Don\'t Tell: describe cold condensation on dials and white-knuckled grips.',
        'End on a heroic turning point.'
      ],
      evaluationRubric: 'Assessed on Narrative Pace & Peril (10M), Punctuation Rigor & Semicolons (10M), and Lexical Impact (10M). Total: 30 Marks.'
    },
    planning: {
      studyGoal: 'Eradicate comma splices, master semicolon usage, complete 55 classwork questions, and submit 200-word narrative suspense homework.',
      estimatedMinutes: 75,
      scheduleSlot: '5:00 PM – 6:15 PM PST',
      milestones: [
        'Review FANBOYS & Semicolon rules (15 mins)',
        'Complete Classwork Terminal: 55 Clause & Punctuation Questions (35 mins)',
        'Submit 200-Word Creative Narrative via 2-page upload or typing (25 mins)'
      ]
    },
    classworkQuestions: [
      {
        id: 501,
        question: 'Which of the following sentences successfully resolves the comma splice error?',
        options: [
          'A) The blizzard raged fiercely, the mountaineers took shelter.',
          'B) The blizzard raged fiercely; consequently, the mountaineers took shelter.',
          'C) The blizzard raged fiercely, however the mountaineers took shelter.',
          'D) The blizzard raged fiercely, so therefore the mountaineers took shelter.'
        ],
        correctIndex: 1,
        explanation: 'A semicolon followed by a conjunctive adverb ("consequently") and a comma correctly joins two independent clauses.'
      },
      ...Array.from({ length: 54 }, (_, i) => ({
        id: 502 + i,
        question: `[Day 5 Punctuation Practice #${i + 2}] "The navigation radar was disabled ${i % 2 === 0 ? 'by the tempest' : 'by electrical surges'}; ________, the crew relied entirely on manual celestial bearings." Select the appropriate transition:`,
        options: ['A) consequently', 'B) but', 'C) although', 'D) because'],
        correctIndex: 0,
        explanation: 'Following a semicolon, "consequently" establishes logical cause-and-effect between independent clauses.'
      }))
    ]
  },

  // ==========================================
  // DAY 6: REPORT WRITING & CONDITIONALS
  // ==========================================
  {
    dayNumber: 6,
    title: 'Conditionals, Subjunctive & Incident Reporting',
    badge: 'Day 6 • Report Writing',
    focusGrammar: 'Conditionals 0-3, Subjunctive "were", Formal Conditional Inversions',
    focusWriting: 'Report Writing (200 Words Incident & Safety Investigation Report)',
    notes: {
      topicTitle: 'Hypothetical Nuance & Institutional Incident Reports',
      summary: 'Formulating conditional sentences with subjunctive "were", applying formal inversion omitting "if" (Had the officials known...), and writing authoritative public safety reports.',
      keyPoints: [
        'Hypothetical Subjunctive: "If I were..." (never "If I was" in Cambridge examinations).',
        'Third conditional formula: If + had + V3, would have + V3. Never place "would" inside the "if" clause itself.',
        'Formal inversion omits "if": "Had the safety officer inspected...", "Were the council to act...".',
        'Incident Reports require exact chronological logging, root cause analysis, and preventative safety mandates.'
      ],
      examples: [
        {
          rule: 'Subjunctive mood in second conditional',
          incorrect: 'If I was the supervisor, I would halt the tournament.',
          correct: 'If I were the supervisor, I would halt the tournament.'
        },
        {
          rule: 'Inverted third conditional',
          incorrect: 'If he would have verified the bolts, the collapse would not happen.',
          correct: 'Had he verified the bolts, the collapse would not have happened.'
        }
      ],
      cambridgeExamCaution: 'Never write "If he would have known". In Cambridge English, "would" belongs exclusively in the main consequence clause.'
    },
    homework: {
      genre: 'Report Writing',
      title: 'Day 6 Homework: 200-Word Safety Incident Report',
      creativeWritingPrompt: 'Submit a 200-word formal incident report to the District Sports Commissioner regarding a bleacher collapse during an inter-school athletic meet.',
      targetWordCount: '200 words (acceptable range: 190–220 words)',
      pageRequirement: 'Up to 2 Pages (Type in cyber editor or upload Page 1 & Page 2 photos of handwritten work)',
      scenario: 'You were the Chief Student Safety Steward on duty when overloaded spectator scaffolding gave way.',
      mandatoryElements: [
        'Institutional header: TO, FROM, DATE, SUBJECT.',
        'Include at least one inverted conditional sentence (e.g., "Had crowd control barriers been deployed...").',
        'Detail: Timeline of incident, casualty assessment, and three regulatory recommendations.',
        'Strict length limit of ~200 words.'
      ],
      formatGuidelines: [
        'Maintain factual administrative neutrality.',
        'Use precise numerical data (e.g. fifteen minor injuries, forty-five minute delay).',
        'Conclude with mandatory inspection protocols.'
      ],
      evaluationRubric: 'Assessed on Incident Report Structure (10M), Conditional Inversion Mastery (10M), and Objective Clarity (10M). Total: 30 Marks.'
    },
    planning: {
      studyGoal: 'Master conditional sentences and formal inversions, complete 55 classwork questions, and submit 200-word safety incident report.',
      estimatedMinutes: 75,
      scheduleSlot: '5:00 PM – 6:15 PM PST',
      milestones: [
        'Study Conditionals & Inversions (15 mins)',
        'Complete Classwork Terminal: 55 Questions on Conditionals (35 mins)',
        'Submit 200-Word Incident Report Homework via 2-page upload or typing (25 mins)'
      ]
    },
    classworkQuestions: [
      {
        id: 601,
        question: 'Which sentence correctly inverts the conditional clause without using "if"?',
        options: [
          'A) Had the marshals checked the safety tether, the accident would have been averted.',
          'B) If had the marshals checked the safety tether, it was averted.',
          'C) Did the marshals check the safety tether, it would be averted.',
          'D) Would the marshals have checked, it had been averted.'
        ],
        correctIndex: 0,
        explanation: '"Had the marshals checked..." is the canonical formal inversion for 3rd conditionals, omitting "if".'
      },
      ...Array.from({ length: 54 }, (_, i) => ({
        id: 602 + i,
        question: `[Day 6 Conditional Practice #${i + 2}] "If the safety committee ________ the structural blueprints more rigorously, the defect would have been detected." Select the mandatory verb:`,
        options: ['A) had audited', 'B) would have audited', 'C) audited', 'D) has audited'],
        correctIndex: 0,
        explanation: 'In the "if" clause of a 3rd conditional, past perfect ("had audited") is strictly required.'
      }))
    ]
  },

  // ==========================================
  // DAY 7: DIALOGUE & ESSAY SYNTHESIS
  // ==========================================
  {
    dayNumber: 7,
    title: 'Lexical Synthesis & Master Writing Showcase',
    badge: 'Day 7 • Dialogue & Essay Synthesis',
    focusGrammar: '120 One-Word Substitutions, Confused Pairs, Idioms, Comprehensive Synthesis',
    focusWriting: 'Dialogue & Essay Synthesis (200 Words Socratic Dialectic / Master Essay)',
    notes: {
      topicTitle: 'Cambridge Lexical Synthesis & Academic Economy',
      summary: 'Synthesizing all 120 academic substitutions, eradicating confused word pairs (Affect/Effect, Principal/Principle), and executing advanced dialectical dialogue or continuous essay composition.',
      keyPoints: [
        'One-Word Substitutions compress verbose phrases: "a person who dislikes all mankind" → "misanthrope".',
        'Affect is a verb (Action); Effect is a noun (End result).',
        'Principal is the school leader or primary; Principle is an ethical rule or scientific doctrine.',
        'Dialectical synthesis balances competing arguments into an elevated third position of intellectual consensus.'
      ],
      examples: [
        {
          rule: 'Affect vs Effect',
          incorrect: 'The curriculum change had a profound affect on candidate grades.',
          correct: 'The curriculum change had a profound effect on candidate grades.'
        },
        {
          rule: 'One-word substitution for conciseness',
          incorrect: 'He was a doctor who specializes in the scientific study of birds.',
          correct: 'He was a distinguished ornithologist.'
        }
      ],
      cambridgeExamCaution: 'Never confuse stationery (paper and envelopes) with stationary (motionless/at rest).'
    },
    homework: {
      genre: 'Dialogue Writing',
      title: 'Day 7 Homework: 200-Word Dialectical Dialogue & Master Essay Synthesis',
      creativeWritingPrompt: 'Compose a 200-word Socratic dialogue or argumentative essay between a Senior Scholar and an AI Engineer debating the ethical threshold where human creative writing must remain protected from automation.',
      targetWordCount: '200 words (acceptable range: 190–220 words)',
      pageRequirement: 'Up to 2 Pages (Type in cyber editor or upload Page 1 & Page 2 photos of handwritten work)',
      scenario: 'Cambridge Batch 7 Final Showcase: The Future of Human Intellect.',
      mandatoryElements: [
        'Incorporate at least 2 high-level one-word substitutions (e.g. panacea, versatile, incorrigible).',
        'Demonstrate flawless homophone precision (Affect/Effect, Principal/Principle).',
        'Sustained philosophical depth and intellectual maturity.',
        'Strict length limit of ~200 words.'
      ],
      formatGuidelines: [
        'Choice of Scripted Dialogue format OR 4-paragraph S.E.E.L. Essay structure.',
        'Maintain authoritative Cambridge register.',
        'Conclude with a memorable philosophical dictum.'
      ],
      evaluationRubric: 'Assessed on Vocabulary Density & Substitutions (10M), Argumentative / Dialogue Nuance (10M), and Cambridge Mechanical Accuracy (10M). Total: 30 Marks.'
    },
    planning: {
      studyGoal: 'Complete total syllabus synthesis across all 15 topics, solve 55 classwork questions, and submit 200-word final synthesis homework.',
      estimatedMinutes: 75,
      scheduleSlot: '5:00 PM – 6:15 PM PST',
      milestones: [
        'Review 120 Substitutions & Confused Pairs (15 mins)',
        'Complete Classwork Terminal: 55 Comprehensive Synthesis Questions (35 mins)',
        'Submit 200-Word Synthesis Homework via 2-page upload or typing (25 mins)'
      ]
    },
    classworkQuestions: [
      {
        id: 701,
        question: 'Select the precise one-word substitution for: "A person who is incapable of being corrected or reformed by discipline."',
        options: ['A) Fastidious', 'B) Incorrigible', 'C) Versatile', 'D) Reticent'],
        correctIndex: 1,
        explanation: '"Incorrigible" specifically means unable to be reformed or corrected.'
      },
      {
        id: 702,
        question: 'Identify the sentence with flawless usage of the word pair "principal" and "principle":',
        options: [
          'A) The school principle was a man of unyielding moral principals.',
          'B) The school principal was a man of unyielding moral principles.',
          'C) The principal factor was his lack of principle education.',
          'D) He acted on principal rather than principal.'
        ],
        correctIndex: 1,
        explanation: 'Principal = school head/primary; Principle = fundamental moral rule.'
      },
      ...Array.from({ length: 53 }, (_, i) => ({
        id: 703 + i,
        question: `[Day 7 Synthesis Practice #${i + 3}] "The persistent economic inflation had a catastrophic ________ on the province, leaving many corporate entities legally ________." Select the correct lexical pair:`,
        options: [
          'A) effect; insolvent',
          'B) affect; insolvent',
          'C) effect; renegade',
          'D) affect; versatile'
        ],
        correctIndex: 0,
        explanation: '"Effect" is the noun following the article, and "insolvent" means unable to pay debts.'
      }))
    ]
  }
];
