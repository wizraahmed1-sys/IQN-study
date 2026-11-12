import { WritingPrompt } from '../types';

export const WRITING_PROMPTS: WritingPrompt[] = [
  {
    id: 'formal-letter-library',
    type: 'Directed Writing (Formal Letter)',
    title: 'Formal Letter to Principal regarding Library Modernization',
    wordTarget: '150–200 words',
    allocatedMarks: '25 Marks (10 Content + 15 Language)',
    scenario: 'You are the Head Boy/Girl of IQ Navigators Secondary Academy. The student body has expressed severe frustration with outdated reference textbooks, noisy study conditions, and a lack of digital research terminals in the current senior library.',
    bulletPoints: [
      'Detail the current deficiencies in the library and how they adversely impact Batch 7 students preparing for CIE 1123.',
      'Propose three concrete modernization initiatives (e.g., quiet study carrels, JSTOR/digital journal access, modernized cataloging).',
      'Explain how these enhancements will cultivate independent scholarship and elevate the school\'s academic reputation.'
    ],
    formatRequirements: [
      'Sender address & Recipient designation (The Principal)',
      'Formal Salutation (Dear Principal / Sir/Madam)',
      'Concise Subject line ("Re: Proposal for Modernization of the Senior Academic Library")',
      'S.E.E.L. argumentative paragraphs',
      'Formal sign-off ("Yours sincerely" with student name and office)'
    ]
  },
  {
    id: 'email-debate-gala',
    type: 'Directed Writing (Professional Email)',
    title: 'Professional Email proposing Inter-School Debate Gala',
    wordTarget: '150–200 words',
    allocatedMarks: '25 Marks (10 Content + 15 Language)',
    scenario: 'As the President of the English Debating Society, write an official email to the Regional Cambridge Schools Coordinator proposing the IQ Navigators Inter-School Parliamentary Debate Championship.',
    bulletPoints: [
      'Outline the primary objectives and format of the proposed championship (Parliamentary motions, adjudicators).',
      'Highlight logistical preparations already secured (venue, timetable, audio-visual recording team).',
      'Solicit official Cambridge endorsement and invite three keynote adjudicators from the regional council.'
    ],
    formatRequirements: [
      'Header fields: To, From, Date, Subject line with clear objective',
      'Professional opening acknowledging the coordinator\'s leadership',
      'Bulleted logistical highlights or balanced discourse markers',
      'Polite call to action and formal digital sign-off'
    ]
  },
  {
    id: 'report-cafeteria-hygiene',
    type: 'Official Report',
    title: 'Campus Cafeteria Hygiene Standards & Nutritional Quality',
    wordTarget: '150–200 words',
    allocatedMarks: '25 Marks (10 Content + 15 Language)',
    scenario: 'Following a spike in gastrointestinal complaints, the Board of Governors commissioned you to inspect the campus cafeteria facilities, food preparation zones, and menu nutritional balance.',
    bulletPoints: [
      'Investigate sanitation practices in food storage, preparation tables, and dish sterilization.',
      'Assess the nutritional adequacy of daily offerings, noting reliance on fried, high-sodium items.',
      'Recommend three actionable regulatory interventions for the cafeteria management with target timelines.'
    ],
    formatRequirements: [
      'Report Header: To, From, Date, Title ("Report on Hygiene Standards and Food Quality in the Main Cafeteria")',
      'Subheadings: Introduction/Terms of Reference, Findings/Observations, Nutritional Assessment, Recommendations',
      'Objective, impersonal passive voice ("It was observed that...", "Samples were tested...")',
      'Conclusion with specific accountability directives'
    ]
  },
  {
    id: 'article-ai-classrooms',
    type: 'Newspaper / Magazine Article',
    title: 'Artificial Intelligence in Classrooms: Boon or Bane?',
    wordTarget: '180–220 words',
    allocatedMarks: '25 Marks (10 Content + 15 Language)',
    scenario: 'Write an analytical feature article for the Cambridge Youth Education Quarterly examining whether AI tools like Gemini and ChatGPT are democratizing education or eroding fundamental cognitive writing abilities.',
    bulletPoints: [
      'Explore how generative AI provides 24/7 personalized tutoring and instant feedback on grammar and vocabulary.',
      'Examine the counter-risks of cognitive atrophy, superficial paraphrasing, and academic dishonesty.',
      'Synthesize a balanced future model where AI acts as a scaffold rather than a replacement for intellectual discipline.'
    ],
    formatRequirements: [
      'Catchy journalistic headline and provocative byline',
      'Engaging journalistic hook introducing the modern technological dilemma',
      'Nuanced evaluation using discourse markers ("On the one hand", "Conversely", "Undeniably")',
      'Incisive concluding thought resonating with students and educators'
    ]
  },
  {
    id: 'descriptive-park-dawn',
    type: 'Descriptive Composition',
    title: 'A Visit to the Park at Dawn (5 Senses Immersion)',
    wordTarget: '350–450 words',
    allocatedMarks: '35 Marks (15 Content + 20 Language)',
    scenario: 'Describe a visit to a sprawling urban park in the early hours of the morning as nature awakens before the city stirs.',
    bulletPoints: [
      'Plunge directly into sensory imagery without any formal conversational preface.',
      'Incorporate all 5 senses: the visual amber dawn glow, auditory chorus of robins, olfactory aroma of petrichor, crisp tactile mist, and fresh cool taste of morning air.',
      'Use varied sentence lengths to match the tranquil rhythm of the morning.'
    ],
    formatRequirements: [
      'Golden Rule: Direct plunge into atmospheric setting; zero narrative plot needed',
      'High-level sensory adjectives (iridescent, ethereal, trilling, verdant, petrichor)',
      'Subtle transitions tracking the shifting sunlight across the landscape'
    ]
  },
  {
    id: 'narrative-park-emergency',
    type: 'Narrative Composition',
    title: 'A Dramatic Emergency at the Park',
    wordTarget: '350–450 words',
    allocatedMarks: '35 Marks (15 Content + 20 Language)',
    scenario: 'Write a gripping story set in the city park where a tranquil afternoon turns suddenly into a life-or-death crisis requiring courage, quick thinking, and collective resilience.',
    bulletPoints: [
      'Establish setting and emotional hook: flying a customized camera drone over the steep rocky ravine.',
      'Complication: The drone malfunctions and crashes on a crumbling ledge; a younger sibling slips down while attempting recovery.',
      'Climax/Rescue: Rushing for groundskeeper ropes, holding on against crumbling shale, and executing a daring rescue before rain descends.',
      'Resolution: Reflective aftermath on brotherhood, gratitude, and the fragility of peace.'
    ],
    formatRequirements: [
      'Classical dramatic arc: Exposition → Rising Tension → Climax → Falling Action → Resolution',
      'Show, Don\'t Tell: convey panic through racing pulses, clenched fists, and sharp gasps rather than stating "I was scared"',
      'Dialogue with punctuation mastery and strict past tense consistency'
    ]
  },
  {
    id: 'custom-prompt',
    type: 'Custom CIE 1123 Past Paper Prompt',
    title: 'Custom Prompt / Past Paper Simulation',
    wordTarget: 'Student Defined (120–450 words)',
    allocatedMarks: 'Cambridge CIE 1123 Criteria',
    scenario: 'Type or paste any prompt from past Cambridge O Level English examinations (2020–2026), class mocks, or personal practice essays.',
    bulletPoints: [
      'Paste your task requirements or prompt text in the editor below.',
      'Write your complete response maintaining appropriate register and structural cohesion.',
      'Click "Evaluate & Check with Gemini AI" for detailed Band Scoring and sentence-by-sentence examiner feedback.'
    ],
    formatRequirements: [
      'Adhere to the specific text type chosen (Letter, Speech, Essay, Article, Narrative, Descriptive)',
      'Strict proofreading before evaluation'
    ]
  }
];

export const SEEL_FORMULA_DETAILS = {
  acronym: 'S.E.E.L.',
  title: 'The Cambridge S.E.E.L. Argumentative Paragraph Architecture',
  subtitle: 'The gold standard framework used by CIE 1123 Band 1 scholars to build bulletproof body paragraphs.',
  elements: [
    {
      letter: 'S',
      name: 'Statement (Point)',
      color: 'blue',
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
      description: 'The topic sentence asserting a single clear, authoritative argument linked directly to the prompt.',
      guidelines: 'Keep it assertive and focused. Never pack multiple disjointed ideas into one opening sentence.'
    },
    {
      letter: 'E1',
      name: 'Explanation (Elaboration)',
      color: 'green',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      description: 'Deconstruct why and how your statement operates. Analyze root causes and psychological or systemic mechanisms.',
      guidelines: 'Use analytical transitions: "This is primarily attributable to...", "In essence, this phenomenon stems from..."'
    },
    {
      letter: 'E2',
      name: 'Example (Evidence & Data)',
      color: 'emerald',
      badgeColor: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30',
      description: 'Concrete, verifiable evidence, illustrative case studies, statistical references, or plausible real-world scenarios.',
      guidelines: 'Avoid vague generalizations like "everyone knows". Cite tangible instances: "For instance, a 2024 municipal survey revealed..."'
    },
    {
      letter: 'L',
      name: 'Link (Synthesis & Prompt Tie-Back)',
      color: 'cyan',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
      description: 'The clincher sentence synthesizing the evidence and locking the paragraph directly back to the overarching essay thesis.',
      guidelines: 'Use conclusive discourse markers: "Consequently, it is indisputable that...", "Hence, this compellingly demonstrates..."'
    }
  ],
  modelParagraph: {
    prompt: 'Prompt: Should secondary schools enforce mandatory daily physical exercise for examination batches?',
    colorCodedParts: [
      {
        part: 'S (Statement)',
        color: 'text-blue-600 dark:text-blue-400 font-semibold',
        bgColor: 'bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500',
        text: 'Foremost among the arguments is that structured aerobic physical exercise serves as a potent physiological catalyst for cognitive stamina and stress mitigation among graduating scholars.'
      },
      {
        part: 'E1 (Explanation)',
        color: 'text-emerald-600 dark:text-emerald-400 font-semibold',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/40 border-l-4 border-emerald-500',
        text: 'When adolescents are subjected to relentless hours of sedentary rote revision, cerebral blood flow diminishes and cortisol levels escalate rapidly, culminating in acute mental fatigue and diminished retention capacity. Engaging in thirty minutes of vigorous cardiovascular conditioning stimulates the release of neurotrophic factors and endorphins, which not only heighten synaptic plasticity but also rejuvenate focus for subsequent intellectual tasks.'
      },
      {
        part: 'E2 (Example)',
        color: 'text-teal-600 dark:text-teal-400 font-semibold',
        bgColor: 'bg-teal-50 dark:bg-teal-950/40 border-l-4 border-teal-500',
        text: 'A salient illustration can be observed at Beaconhouse Senior Campus, where the introduction of a compulsory 25-minute morning conditioning circuit for Pre-O Level cohorts resulted in an impressive 18% improvement in average terminal comprehension scores and a 30% reduction in absentee rates due to fatigue-induced migraines.'
      },
      {
        part: 'L (Link)',
        color: 'text-cyan-600 dark:text-cyan-400 font-semibold',
        bgColor: 'bg-cyan-50 dark:bg-cyan-950/40 border-l-4 border-cyan-500',
        text: 'Consequently, physical education must no longer be dismissed as a dispensable extracurricular pastime, but embraced as an indispensable cognitive scaffold essential for academic distinction.'
      }
    ]
  }
};

export const ESSAY_STRUCTURES = {
  fourParagraph: {
    title: 'The 4-Paragraph Structure (Ideal for Directed Writing & Targeted Essays)',
    targetWordCount: '250–320 words',
    diagram: [
      { step: 'Paragraph 1: Introduction & Thesis Statement', desc: 'Hook the reader, delineate context, and state your decisive stance clearly without ambiguity.' },
      { step: 'Paragraph 2: Primary Argument (S.E.E.L. Architecture)', desc: 'Deliver your strongest, most persuasive argument backed by extensive elaboration and evidence.' },
      { step: 'Paragraph 3: Secondary Argument (S.E.E.L. Architecture)', desc: 'Develop a complementary societal, economic, or psychological angle with equal rigor.' },
      { step: 'Paragraph 4: Definitive Conclusion & Call to Action', desc: 'Synthesize both core arguments, evaluate broader future implications, and conclude with a memorable closing dictum.' }
    ]
  },
  fiveParagraph: {
    title: 'The 5-Paragraph Structure (The Gold Standard for Discursive & Cambridge Continuous Writing)',
    targetWordCount: '380–450 words',
    diagram: [
      { step: 'Paragraph 1: Comprehensive Introduction', desc: 'Define key terms, establish contemporary urgency, and present a balanced roadmap thesis.' },
      { step: 'Paragraph 2: First Core Argument (S.E.E.L.)', desc: 'Champion the primary pillar of your argument with rigorous real-world precedent.' },
      { step: 'Paragraph 3: Second Core Argument (S.E.E.L.)', desc: 'Expand onto systemic, ethical, or intellectual ramifications with sophisticated discourse markers.' },
      { step: 'Paragraph 4: Counter-Argument & Vigorous Rebuttal', desc: 'Acknowledge the most formidable opposing viewpoint honestly, then dismantle its logic with superior empirical evidence.' },
      { step: 'Paragraph 5: Masterful Synthesis & Horizon Verdict', desc: 'Reiterate thesis with upgraded vocabulary, reconcile tensions, and project long-term societal vision.' }
    ]
  }
};

export const DESCRIPTIVE_WRITING_GUIDE = {
  title: 'Descriptive Writing: Crafting High-Fidelity Sensory Panoramas',
  goldenRule: 'Golden Rule: Absolutely no formal introduction or narrative plot needed! Plunge directly into atmospheric sensory imagery.',
  sensesTable: [
    { sense: 'Sight (Visual)', details: 'Iridescent amber sunrise, dewdrops glistening like faceted diamonds, dappled willow shadows on churning water, crumbling weathered brickwork.' },
    { sense: 'Sound (Auditory)', details: 'Rhythmic trilling of awakened robins, rustling dry foliage under scurrying squirrels, distant muffled drone of morning traffic, melancholy creak of the rusted swing.' },
    { sense: 'Smell (Olfactory)', details: 'Pungent earthy petrichor rising from rain-drenched loam, sweet delicate fragrance of crushed clover, resinous pine needles, faint damp river moss.' },
    { sense: 'Touch (Tactile)', details: 'Crisp needle-sharp mountain draft grazing flushed cheeks, clammy slickness of dew-slick park bench rails, gritty crumbling cobblestones beneath boots.' },
    { sense: 'Taste (Gustatory)', details: 'Metallic tang of biting morning frost on the tongue, crisp cleanliness of oxygen-dense air after a nocturnal downpour.' }
  ],
  modelTitle: 'A Visit to the Park at Dawn',
  modelText: `Pale amethyst light seeped through the eastern horizon, dissolving the ink-black canopy of night into a luminous gradient of saffron and cerulean. Over the sprawling botanical gardens of Lawrence Park, a stillness reigned—an ethereal, breathless pause before the awakening world. Across the undulating meadows, ribbons of silver mist coiled and drifted like diaphanous silk, clinging to the emerald blades of manicured turf. Each blade held an immaculate pearl of dew that trembled with fragile brilliance, refracting the nascent dawn into microscopic prism shards.

Along the meandering gravel walkways, ancient weeping willows stood like vigilant sentinels, their cascading foliage whispering in the gentle morning draft. A symphony of delicate sounds gradually pierced the serenity: the brisk, rhythmic trill of an early robin perched upon an iron lamp-post, followed by the soft rustle of fallen amber maple leaves as a solitary ground squirrel scampered toward its burrow. The air was saturated with petrichor—that heady, intoxicating fragrance of damp earth mingling with the sweet nectar of night-blooming jasmine and damp pine bark.

Beneath one\'s fingers, the wrought-iron handrail of the ornate footbridge felt icy and slick with condensation, its biting chill sending a brisk shiver tingling down the spine. Down in the mirror-smooth lake below, the water remained undisturbed save for the concentric ripples cast by an emerald mallard gliding effortlessly across the reflected clouds. As the golden disk of the morning sun crested the distant tree line, a sudden surge of warmth ignited the damp atmosphere, transforming the rising vapors into a molten halo that bathed the awakens sanctuary in pure, unadulterated splendour.`
};

export const NARRATIVE_WRITING_GUIDE = {
  title: 'Narrative Writing: The Classical Dramatic Arc',
  stages: [
    { name: '1. Exposition (Setting & Emotional Hook)', desc: 'Ground the protagonist in time, space, and a relatable baseline emotion before disruption strikes.' },
    { name: '2. Inciting Incident & Complication', desc: 'An unexpected catastrophe or conflict fractures normality, raising stakes and creating immediate peril.' },
    { name: '3. Rising Action & Obstacles', desc: 'Attempts to solve the dilemma compound the danger; physical and emotional tension climbs steadily.' },
    { name: '4. Climax & Turning Point', desc: 'The moment of peak peril requiring decisive courage, sacrifice, and immediate action.' },
    { name: '5. Resolution & Reflective Resonance', desc: 'Aftermath of the crisis, physical restoration, and the character\'s permanent psychological transformation.' }
  ],
  modelTitle: 'A Dramatic Emergency at the Park',
  modelText: `The afternoon sun had begun its slow descent, casting elongated shadows across the rugged western perimeter of the municipal park, where the manicured lawns yielded abruptly to the treacherous shale slopes of Blackwood Ravine. Twelve-year-old Danish stood at the safety barrier, clutching the controller of his custom carbon-fiber drone, his eyes shining with uncontainable exhilaration as the aircraft hovered seventy feet overhead. Beside him, his younger brother Mikail watched in awe, his small hands gripped tightly around his knitted scarf.

Then, without warning, a freak downdraft caught the lightweight rotors. The drone spiraled violently out of control, its spinning blades whirring in protest before plummeting like a stone into the jagged brambles thirty feet down the sheer ravine face. Before Danish could shout, Mikail impulsively squeezed through a rusted gap in the perimeter rail, scrambling down the loose gravel slope to retrieve his brother\'s prized machine.

"Mikail, stop! Don\'t move!" Danish\'s throat seized in blind terror. The crumbly shale instantly gave way beneath the boy\'s sneakers. With a sickening gasp, Mikail slid ten feet, his fingers clawing frantically at the loose scree until his descent was violently arrested by a gnarled juniper root protruding from the cliff. Below his dangling legs lay a drop onto sharp river boulders. 

Danish\'s heart hammered against his ribs like a trapped bird. Panic screamed in his mind, but training from Batch 7 emergency drills kicked in. Sprinting along the path, he spotted Mr. Farooq, the veteran park groundskeeper, hauling heavy coils of hemp tow-rope on his utility cart. Within seconds, Danish had conveyed the horror. Together, they raced back to the lip of the gorge. Securing the thick rope around a mature oak trunk, Mr. Farooq rappelled cautiously downward, while Danish held the anchor loop with white-knuckled determination. Just as the brittle juniper root snapped with a dry crack, Mr. Farooq\'s calloused arm locked around Mikail\'s jacket, hauling the weeping boy back to firm, solid earth. As police sirens wailed in the distance and darkness swallowed the ravine, Danish wrapped his arms around his trembling brother, whispering words of fierce gratitude for the fragile gift of life.`
};

export const FORMAL_VS_INFORMAL_MATRIX = [
  {
    category: 'Salutations & Greetings',
    informal: 'Hey guys / Dear buddy / Hi Ammar',
    formal: 'Dear Sir/Madam / Dear Principal / Dear Mr. Harrison',
    cieRule: 'If the person\'s surname is unknown, use "Dear Sir/Madam". If known, use title + surname (e.g. "Dear Dr. Khan").'
  },
  {
    category: 'Opening Statements',
    informal: 'Just dropping you a quick line to tell you about...',
    formal: 'I am writing to formally apprise you of / I am writing on behalf of Batch 7 to propose...',
    cieRule: 'State the precise institutional purpose of the correspondence within the first two sentences.'
  },
  {
    category: 'Discourse Markers & Transitions',
    informal: 'Anyway / By the way / Plus / Also',
    formal: 'Furthermore / In addition / Consequently / Conversely / Nevertheless',
    cieRule: 'Informal conversational transition words are heavily penalized in Cambridge directed writing.'
  },
  {
    category: 'Expressing Disagreement / Complaints',
    informal: 'This is totally unacceptable and I\'m really mad about it...',
    formal: 'I feel compelled to register our profound dissatisfaction regarding / This current arrangement poses significant concern...',
    cieRule: 'Maintain diplomatic poise; formal criticism must be measured and constructive, never emotional.'
  },
  {
    category: 'Sign-offs & Valediction',
    informal: 'Cheers / See ya soon / Best',
    formal: 'Yours sincerely (when recipient is named) / Yours faithfully (when addressed to Dear Sir/Madam)',
    cieRule: 'Golden Cambridge Rule: Sincere begins with S, paired with a Specific name. Faith begins with F, paired with Forgotten name.'
  }
];

export const DIRECTED_WRITING_FORMATS = [
  {
    formatName: 'Formal Letter',
    structure: 'Sender Address (Top Right/Left) → Date → Recipient Designation & Address → Salutation → Subject Line → 5-Paragraph Plan → Valediction & Full Name',
    layoutRules: 'Do not use contractions (write "do not", never "don\'t"). Align all left margins neatly.',
    modelSample: `The Head of Senior Academics
IQ Navigators Pre O Levels Academy
Clifton Campus, Karachi

20 November 2026

Dear Sir,

SUBJECT: FORMAL PETITION FOR THE ENHANCEMENT OF BATCH 7 SCIENCE LABORATORY FACILITIES

I am writing on behalf of the Pre O Levels Batch 7 academic cohort to respectfully draw your attention to the urgent necessity of upgrading our senior physics and chemistry laboratory equipment prior to the commencement of practical examinations.

First and foremost, the current apparatus inventory suffers from pronounced obsolescence. Several precision chemical balances exhibit calibration deviations of up to fifteen percent, while optical spectrometer prisms are severely scratched from years of continuous usage. Such mechanical deficiencies compromise our capacity to record empirical data with the scientific rigor mandated by the Cambridge syllabus.

Furthermore, student enrollment in Batch 7 has expanded by thirty percent this academic year, resulting in severe workstation congestion. Scholars are frequently compelled to conduct experiments in groups of four rather than pairs, thereby drastically limiting hands-on manipulation of sensitive apparatus.

To resolve these pressing constraints, we propose that the school administration procure twenty digital micrometers, replace the degraded glassware sets, and establish an after-school laboratory rotation system. These strategic investments will undoubtedly safeguard our institution\'s exemplary academic standards.

Thank you for your customary consideration and unwavering support for student excellence.

Yours sincerely,

Ammar Wajahat
Head Prefect, Batch 7`
  },
  {
    formatName: 'Official Institutional Report',
    structure: 'Header (To, From, Date, Subject) → 1. Terms of Reference → 2. Investigative Findings → 3. Evaluation & Analysis → 4. Actionable Recommendations → Sign-off',
    layoutRules: 'Use numbered or bold thematic subheadings. Maintain objective passive voice throughout.',
    modelSample: `TO: The Board of Governors, IQ Navigators Academy
FROM: Ammar Wajahat, Senior Student Inspector
DATE: 20 November 2026
SUBJECT: COMPREHENSIVE INVESTIGATION INTO SENIOR COMMODITY & SANITATION STANDARDS

1. TERMS OF REFERENCE
This report was commissioned by the Academic Council to assess the physical condition, sanitation protocols, and hygiene compliance of senior student restrooms and cafeteria preparation zones following recent pupil feedback.

2. INVESTIGATIVE FINDINGS
Field inspections conducted between 14 November and 18 November revealed that seventy percent of antibacterial soap dispensers were depleted during peak lunch periods. Furthermore, high-touch metal fixtures in the north wing exhibited inadequate sanitization schedules, failing to comply with standard municipal public health benchmarks.

3. EVALUATION OF IMPACT
The absence of sustained hygiene amenities has engendered a twenty percent uptick in absentee rates attributed to seasonal gastroenteritis. This not only destabilizes cohort attendance during vital syllabus revision but also tarnishes the academy\'s health reputation.

4. ACTIONABLE RECOMMENDATIONS
It is strongly recommended that the administration implement automated touchless sanitization stations immediately, institute a logged hourly inspection checklist for custodial staff, and penalize food-vending subcontractors failing microbiological swab inspections.

Report respectfully submitted by:
Ammar Wajahat (Senior Inspector)`
  },
  {
    formatName: 'Magazine / Newspaper Feature Article',
    structure: 'Catchy Headline → Byline → Journalistic Lead Hook → Thematic Body Evaluation → Expert Quotes / Evidence → Thought-Provoking Horizon Conclusion',
    layoutRules: 'Slightly more vibrant rhetoric than a formal letter, incorporating rhetorical questions, varied syntax, and authoritative tone.',
    modelSample: `DIGITAL CLASSROOMS: REVOLUTION OR RECKONING?
By Ammar Wajahat, Batch 7 Editorial Scholar

Can artificial intelligence truly replace the irreplaceable spark of human mentorship? As generative language models and automated marking engines permeate secondary education, Batch 7 scholars find themselves standing at an unprecedented intellectual crossroads.

On one hand, the democratizing potential of educational technology is undeniable. Algorithms can dissect complex syntax, explain elusive grammatical formulas like the subjunctive mood at midnight, and deliver instantaneous lexical corrections that previously required hours of personal tutoring.

Yet, this convenience harbors insidious hazards. When students outsource the arduous struggle of sentence construction to automated software, the vital cognitive muscles of critical synthesis risk atrophy. True scholarship is not the passive curation of machine-generated prose; it is the fiery wrestling with ideas until clarity emerges.

If we are to navigate this technological frontier with integrity, educational portals must serve as rigorous scaffolds rather than effortless crutches. Only by uniting digital precision with authentic human intellect can the scholars of tomorrow master the language of excellence.`
  }
];
