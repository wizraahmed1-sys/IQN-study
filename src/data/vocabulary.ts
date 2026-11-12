import { ConfusedWordPair, HighValueIdiom, VocabWord } from '../types';

export const ONE_WORD_SUBSTITUTIONS: VocabWord[] = [
  // Category 1: Character & Personality (1-20)
  {
    id: 1,
    word: 'Optimist',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'A person who always looks at the positive or hopeful side of things',
    exampleSentence: 'Despite the dismal weather forecast, the cheerful optimist packed sunglasses and a sunhat.',
    cieApplicationNote: 'Ideal for character sketches in Paper 2 Section B continuous narrative writing.'
  },
  {
    id: 2,
    word: 'Pessimist',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'A person who habitually expects the worst or takes the gloomiest view of life',
    exampleSentence: 'The incorrigible pessimist predicted the voyage would meet with disaster before they even set sail.',
    cieApplicationNote: 'Contrasts sharply with optimist in analytical compositions.'
  },
  {
    id: 3,
    word: 'Philanthropist',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'A person who seeks to promote the welfare of others, especially by donating money to good causes',
    exampleSentence: 'The industrialist became a celebrated philanthropist, endowing three universities and a pediatric hospital.',
    cieApplicationNote: 'Elevates formal letters recommending civic awards or public commendation.'
  },
  {
    id: 4,
    word: 'Misanthrope',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'A person who dislikes humankind and avoids human society',
    exampleSentence: 'Bitter from years of betrayal, the recluse lived as a solitary misanthrope on the windswept headland.',
    cieApplicationNote: 'Superb for characterisation in narrative or gothic descriptive prose.'
  },
  {
    id: 5,
    word: 'Altruist',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'A person who shows selfless concern for the well-being of others',
    exampleSentence: 'A genuine altruist, she sacrificed her personal savings to feed displaced flood victims in the interior region.',
    cieApplicationNote: 'Essential for essays addressing humanitarian virtue or social responsibility.'
  },
  {
    id: 6,
    word: 'Egoist',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'A self-centered person focused strictly on their own interests and survival',
    exampleSentence: 'Driven purely by self-advancement, the egoist cared nothing for the collective welfare of the team.',
    cieApplicationNote: 'Distinct from egotist; an egoist behaves selfishly, whereas an egotist talks boastfully.'
  },
  {
    id: 7,
    word: 'Egotist',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'A person who talks excessively about oneself and boasts about personal achievements',
    exampleSentence: 'The dinner turned insufferable as the pompous egotist droned on about his scholastic accolades.',
    cieApplicationNote: 'Use in dialogue-driven narratives to delineate arrogant personae.'
  },
  {
    id: 8,
    word: 'Gullible',
    partOfSpeech: 'adjective',
    category: 'Character & Personality',
    definitionPhrase: 'Easily persuaded to believe something; credulous and naive',
    exampleSentence: 'The gullible tourist purchased what the vendor insisted was a genuine sixteenth-century Roman coin.',
    cieApplicationNote: 'Replaces the wordy phrase "a person who is easily fooled".'
  },
  {
    id: 9,
    word: 'Gregarious',
    partOfSpeech: 'adjective',
    category: 'Character & Personality',
    definitionPhrase: 'Fond of company; sociable and thriving in social groups',
    exampleSentence: 'Known for her gregarious nature, the head girl greeted every newcomer with effortless warmth.',
    cieApplicationNote: 'Demonstrates sophisticated lexical choices in descriptive character essays.'
  },
  {
    id: 10,
    word: 'Recluse',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'A person who lives a solitary life and tends to avoid other people',
    exampleSentence: 'Following the death of his family, he retreated to a ramshackle cabin as an impenetrable recluse.',
    cieApplicationNote: 'High frequency in CIE 1123 unseen literary comprehension passages.'
  },
  {
    id: 11,
    word: 'Versatile',
    partOfSpeech: 'adjective',
    category: 'Character & Personality',
    definitionPhrase: 'Able to adapt or be adapted to many different functions or activities',
    exampleSentence: 'Equally adept at classical violin and computer programming, he was an exceptionally versatile scholar.',
    cieApplicationNote: 'Useful in recommendation letters and CV summaries in directed writing.'
  },
  {
    id: 12,
    word: 'Incorrigible',
    partOfSpeech: 'adjective',
    category: 'Character & Personality',
    definitionPhrase: 'Not able to be corrected, improved, or reformed by reprimand',
    exampleSentence: 'Despite numerous detentions, the incorrigible prankster continued to place whoopee cushions on the podium.',
    cieApplicationNote: 'Shows morphological understanding of the prefix in- and suffix -ible.'
  },
  {
    id: 13,
    word: 'Stoic',
    partOfSpeech: 'noun / adjective',
    category: 'Character & Personality',
    definitionPhrase: 'A person who can endure pain or hardship without showing feelings or complaining',
    exampleSentence: 'Throughout the grueling physical interrogation, the soldier remained stoic and remarkably composed.',
    cieApplicationNote: 'Captures emotional restraint in dramatic continuous writing scenes.'
  },
  {
    id: 14,
    word: 'Skeptic',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'A person inclined to question or doubt accepted opinions or supernatural claims',
    exampleSentence: 'As a hardened skeptic, she refused to accept the psychic\'s predictions without rigorous empirical testing.',
    cieApplicationNote: 'Indispensable in argumentative and discursive essays debating beliefs or superstition.'
  },
  {
    id: 15,
    word: 'Fastidious',
    partOfSpeech: 'adjective',
    category: 'Character & Personality',
    definitionPhrase: 'Very attentive to and concerned about accuracy and detail; hard to please',
    exampleSentence: 'The fastidious editor spent three hours verifying the placement of every comma and semicolon.',
    cieApplicationNote: 'Replaces colloquial phrases like "very picky" or "fussy".'
  },
  {
    id: 16,
    word: 'Fatalist',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'Someone who believes that all events are predetermined and inevitable',
    exampleSentence: 'The fatalist shrugged at the stormy forecast, whispering that what is destined cannot be averted.',
    cieApplicationNote: 'Adds philosophical depth to character motivation in narratives.'
  },
  {
    id: 17,
    word: 'Opportunist',
    partOfSpeech: 'noun',
    category: 'Character & Personality',
    definitionPhrase: 'A person who exploits circumstances to gain immediate advantage without moral regard',
    exampleSentence: 'The political opportunist defected to the rival faction the moment election polls shifted.',
    cieApplicationNote: 'Accurately characterizes antagonists in Paper 2 compositions.'
  },
  {
    id: 18,
    word: 'Intrepid',
    partOfSpeech: 'adjective',
    category: 'Character & Personality',
    definitionPhrase: 'Fearless; adventurous; undaunted by extreme peril',
    exampleSentence: 'The intrepid mountaineers traversed the crumbling icy ridge amidst howling sub-zero blizzard gusts.',
    cieApplicationNote: 'A high-yield Band 1 replacement for the mundane adjective "brave".'
  },
  {
    id: 19,
    word: 'Reticent',
    partOfSpeech: 'adjective',
    category: 'Character & Personality',
    definitionPhrase: 'Not revealing one\'s thoughts or feelings readily; reserved and taciturn',
    exampleSentence: 'Normally loquacious, the witness became surprisingly reticent when pressed about the midnight burglary.',
    cieApplicationNote: 'Precision synonym for quiet that emphasizes deliberate discretion.'
  },
  {
    id: 20,
    word: 'Garrulous',
    partOfSpeech: 'adjective',
    category: 'Character & Personality',
    definitionPhrase: 'Excessively talkative, especially on trivial matters',
    exampleSentence: 'The garrulous passenger sitting beside him discussed the intricacies of her garden for the entire flight.',
    cieApplicationNote: 'Far more evocative than "talkative"; implies pointless verbosity.'
  },

  // Category 2: Professions & Experts (21-40)
  {
    id: 21,
    word: 'Lexicographer',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who compiles and edits dictionaries',
    exampleSentence: 'Dr. Samuel Johnson worked with tireless dedication as an eighteenth-century lexicographer.',
    cieApplicationNote: 'Frequently appears in Paper 1 vocabulary testing exercises.'
  },
  {
    id: 22,
    word: 'Philatelist',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who collects or studies postage stamps',
    exampleSentence: 'The avid philatelist bid aggressively at the auction for a mint-condition Penny Black stamp.',
    cieApplicationNote: 'Classic Cambridge one-word substitution item.'
  },
  {
    id: 23,
    word: 'Numismatist',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who collects or studies coins, paper currency, or medals',
    exampleSentence: 'The museum numismatist carefully inspected the minted silver drachma under a magnifying glass.',
    cieApplicationNote: 'Tests precision in replacing descriptive phrases in summary writing.'
  },
  {
    id: 24,
    word: 'Cartographer',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who draws or produces geographical maps',
    exampleSentence: 'Before satellite imagery, the cartographer relied on sextants and painstaking celestial sightings.',
    cieApplicationNote: 'Historical non-fiction vocabulary tested in CIE 1123 Text A.'
  },
  {
    id: 25,
    word: 'Geologist',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'An expert who studies the Earth\'s physical structure, rocks, and history',
    exampleSentence: 'The field geologist warned the urban council of imminent seismic instability along the faultline.',
    cieApplicationNote: 'Crucial for articles discussing natural phenomena or environmental hazards.'
  },
  {
    id: 26,
    word: 'Astronomer',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A scientist who studies celestial bodies, space, and the physical universe',
    exampleSentence: 'Peering through the observatory telescope, the astronomer tracked the trajectory of a rogue asteroid.',
    cieApplicationNote: 'Avoid confusing with astrologer (who predicts horoscopes).'
  },
  {
    id: 27,
    word: 'Entomologist',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A zoologist who specializes in the scientific study of insects',
    exampleSentence: 'The entomologist discovered a rare species of bioluminescent beetle in the Amazon rainforest.',
    cieApplicationNote: 'Scientific precision term evaluated in factual passages.'
  },
  {
    id: 28,
    word: 'Ornithologist',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who specializes in the scientific study and observation of birds',
    exampleSentence: 'Stationed on the remote cliffs, the ornithologist recorded the migratory patterns of Arctic terns.',
    cieApplicationNote: 'Enriches nature-oriented descriptive compositions.'
  },
  {
    id: 29,
    word: 'Anthropologist',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A scientist who studies human societies, cultures, and their evolutionary development',
    exampleSentence: 'The cultural anthropologist spent five years living among indigenous tribes in the archipelago.',
    cieApplicationNote: 'Elevates argumentative writing on societal progress and human heritage.'
  },
  {
    id: 30,
    word: 'Archaeologist',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who studies human history by excavating sites and analyzing artifacts',
    exampleSentence: 'The archaeologist unearthed a 3,000-year-old terracotta urn intact within the tomb.',
    cieApplicationNote: 'Note the standard British spelling (-aeologist) expected in CIE 1123.'
  },
  {
    id: 31,
    word: 'Choreographer',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who designs and arranges sequences of dance and movement',
    exampleSentence: 'The celebrated choreographer spent months rehearsing the synchronized ballet troupe.',
    cieApplicationNote: 'Pertains to cultural review articles and festival reports.'
  },
  {
    id: 32,
    word: 'Florist',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who arranges and sells cut flowers and ornamental plants',
    exampleSentence: 'The florist assembled an opulent bouquet of white lilies and scarlet roses for the banquet.',
    cieApplicationNote: 'Common noun tested in contextual grammar questions.'
  },
  {
    id: 33,
    word: 'Optician',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A qualified professional who dispenses and fits eyeglasses and contact lenses',
    exampleSentence: 'Following an eye examination, the optician adjusted the bridge of the prescription spectacles.',
    cieApplicationNote: 'Replaces "the person who makes eyeglasses".'
  },
  {
    id: 34,
    word: 'Taxidermist',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who prepares, stuffs, and mounts the skins of deceased animals',
    exampleSentence: 'In the antique parlour, the taxidermist\'s mounted barn owl peered down with glassy eyes.',
    cieApplicationNote: 'Gothic and mystery narrative vocabulary.'
  },
  {
    id: 35,
    word: 'Curator',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A keeper or custodian of a museum, gallery, or historical collection',
    exampleSentence: 'The chief curator supervised the delicate restoration of the Renaissance portrait.',
    cieApplicationNote: 'Valuable in institutional reports and cultural school trip reviews.'
  },
  {
    id: 36,
    word: 'Arbitrator',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'An independent person or body officially chosen to settle an intractable dispute',
    exampleSentence: 'Both trade unions agreed to abide by the binding ruling of the impartial arbitrator.',
    cieApplicationNote: 'Essential for formal letters seeking compromise or mediation.'
  },
  {
    id: 37,
    word: 'Virtuoso',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person highly skilled in music or another artistic pursuit',
    exampleSentence: 'The twelve-year-old piano virtuoso performed Chopin\'s nocturne with breathtaking emotional maturity.',
    cieApplicationNote: 'Band 1 descriptive praise for aesthetic mastery.'
  },
  {
    id: 38,
    word: 'Amateur',
    partOfSpeech: 'noun / adjective',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who engages in a pursuit on an unpaid basis rather than professionally',
    exampleSentence: 'Though only an amateur botanist, he catalogued thirty indigenous orchid varieties.',
    cieApplicationNote: 'Often paired against "professional" in contrastive essays.'
  },
  {
    id: 39,
    word: 'Veteran',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person who has had long experience in a particular field or served in the armed forces',
    exampleSentence: 'The veteran journalist mentored new reporters on handling sensitive wartime correspondence.',
    cieApplicationNote: 'Carries respectful connotation of tested competence.'
  },
  {
    id: 40,
    word: 'Novice',
    partOfSpeech: 'noun',
    category: 'Professions & Experts',
    definitionPhrase: 'A person new to or inexperienced in a specific job or situation',
    exampleSentence: 'Even as a novice coder, she demonstrated remarkable logic when debugging algorithms.',
    cieApplicationNote: 'Polished substitute for the informal "beginner" or "newbie".'
  },

  // Category 3: Politics & Society (41-60)
  {
    id: 41,
    word: 'Democracy',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A system of government by the whole population, typically through elected representatives',
    exampleSentence: 'A free press and transparent electoral commission are the non-negotiable pillars of democracy.',
    cieApplicationNote: 'Standard civic term in Cambridge discursive writing.'
  },
  {
    id: 42,
    word: 'Anarchy',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A state of disorder due to absence or non-recognition of authority or other controlling systems',
    exampleSentence: 'When the municipal police force disbanded, civil anarchy engulfed the metropolitan center.',
    cieApplicationNote: 'Evokes chaotic breakdown in narrative or dystopian scenarios.'
  },
  {
    id: 43,
    word: 'Oligarchy',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A small group of people having control of a country or organization',
    exampleSentence: 'Behind the veneer of elections, economic policy was dictated by an entrenched corporate oligarchy.',
    cieApplicationNote: 'Sophisticated political vocabulary for debate speeches.'
  },
  {
    id: 44,
    word: 'Aristocracy',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'The highest class in certain societies, especially those holding hereditary titles or privileges',
    exampleSentence: 'The landed aristocracy resisted agrarian reforms that would redistribute ancestral estates.',
    cieApplicationNote: 'Historical non-fiction reading comprehension term.'
  },
  {
    id: 45,
    word: 'Bureaucracy',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A system of government in which most decisions are taken by state officials rather than elected reps',
    exampleSentence: 'The humanitarian shipment was delayed for weeks due to convoluted administrative bureaucracy.',
    cieApplicationNote: 'Note the spelling (-reaucracy); tested in Paper 1 spelling questions.'
  },
  {
    id: 46,
    word: 'Plutocracy',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'Society governed or dominated by the wealthy elite',
    exampleSentence: 'Critics warned the nation was degenerating into a plutocracy where money bought legislative favors.',
    cieApplicationNote: 'Sharp political science terminology for argumentative essays.'
  },
  {
    id: 47,
    word: 'Theocracy',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A system of government in which priests rule in the name of God or a god',
    exampleSentence: 'Under the medieval theocracy, canonical religious statutes superseded all civil jurisprudence.',
    cieApplicationNote: 'Root study: \'theo-\' (god) + \'-cracy\' (rule).'
  },
  {
    id: 48,
    word: 'Autocracy',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A system of government by one person with absolute, unchecked power',
    exampleSentence: 'The monarch dismantled the parliament, ushering in an oppressive autocracy without appeal.',
    cieApplicationNote: 'Contrasted with democracy in political compositions.'
  },
  {
    id: 49,
    word: 'Monarchy',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A form of government with a monarch (king or queen) at the head',
    exampleSentence: 'The United Kingdom operates under a constitutional monarchy where royal power is regulated by law.',
    cieApplicationNote: 'Standard governmental vocabulary in social studies passages.'
  },
  {
    id: 50,
    word: 'Republic',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A state in which supreme power is held by the people and their elected representatives',
    exampleSentence: 'Following the overthrow of the despot, citizens rejoiced as the newly founded republic was inaugurated.',
    cieApplicationNote: 'Clear distinction from monarchy: head of state is elected.'
  },
  {
    id: 51,
    word: 'Amnesty',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'An official pardon for people who have been convicted of political offenses',
    exampleSentence: 'The president declared a general amnesty to encourage rebel combatants to lay down their arms.',
    cieApplicationNote: 'Replaces wordy phrases like "official declaration of forgiveness".'
  },
  {
    id: 52,
    word: 'Renegade',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A person who deserts and betrays an organization, country, or set of principles',
    exampleSentence: 'Branded a renegade by his former political allies, he launched a campaign exposing party corruption.',
    cieApplicationNote: 'Synonymous with apostate in ideological contexts.'
  },
  {
    id: 53,
    word: 'Insolvent',
    partOfSpeech: 'adjective',
    category: 'Politics & Society',
    definitionPhrase: 'Unable to pay debts owed; legally bankrupt',
    exampleSentence: 'Deprived of international credit, the airline became insolvent and grounded all scheduled aircraft.',
    cieApplicationNote: 'Formal economic register for commercial reports.'
  },
  {
    id: 54,
    word: 'Hijacker',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A person who unlawfully seizes an aircraft, ship, or vehicle in transit by force',
    exampleSentence: 'The armed hijacker demanded that the airliner divert its trajectory to a foreign airport.',
    cieApplicationNote: 'Narrative suspense vocabulary.'
  },
  {
    id: 55,
    word: 'Plebiscite',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A direct vote by all the electors of a state on an important public question (referendum)',
    exampleSentence: 'The contested border territory determined its national sovereignty through a supervised plebiscite.',
    cieApplicationNote: 'Formal legal and international relations term.'
  },
  {
    id: 56,
    word: 'Fanaticism',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'The quality of being fanatical; excessive, uncritical zeal or devotion',
    exampleSentence: 'Blind fanaticism blinded the partisans to reasoned compromise and basic human decency.',
    cieApplicationNote: 'Abstract noun testing critical analytical skills.'
  },
  {
    id: 57,
    word: 'Insurrectionist',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A person who takes part in a violent uprising or rebellion against an established authority',
    exampleSentence: 'The federal troops surrounded the barricaded capital to arrest the ringleaders of the insurrectionist mob.',
    cieApplicationNote: 'Precise political term replacing "rebel fighter".'
  },
  {
    id: 58,
    word: 'Suffrage',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'The legal right to vote in political elections',
    exampleSentence: 'Universal adult suffrage was secured only after decades of fearless campaigning by suffragettes.',
    cieApplicationNote: 'Historical rights vocabulary tested in CIE 1123 Reading texts.'
  },
  {
    id: 59,
    word: 'Demagogue',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'A political leader who seeks support by appealing to popular desires and prejudices rather than rational argument',
    exampleSentence: 'The populist demagogue stoked economic scapegoating to consolidate his electoral grip.',
    cieApplicationNote: 'High-caliber analytical vocabulary in rhetorical evaluation.'
  },
  {
    id: 60,
    word: 'Genocide',
    partOfSpeech: 'noun',
    category: 'Politics & Society',
    definitionPhrase: 'The deliberate killing of a large number of people from a particular nation or ethnic group',
    exampleSentence: 'The International Court convened to prosecute the commanders responsible for the wartime genocide.',
    cieApplicationNote: 'Root study: \'genos\' (race/kind) + \'-cide\' (killing).'
  },

  // Category 4: Speeches & Literature (61-80)
  {
    id: 61,
    word: 'Extempore',
    partOfSpeech: 'adjective / adverb',
    category: 'Speeches & Literature',
    definitionPhrase: 'Spoken or done without preparation or thought in advance; impromptu',
    exampleSentence: 'Called to the podium without warning, she delivered an inspiring extempore address to the assembly.',
    cieApplicationNote: 'Replaces "unprepared speech" in speech evaluation.'
  },
  {
    id: 62,
    word: 'Maiden',
    partOfSpeech: 'adjective',
    category: 'Speeches & Literature',
    definitionPhrase: 'Being or involving the first attempt or act of its kind (e.g. maiden speech, maiden voyage)',
    exampleSentence: 'The newly elected parliamentarian addressed education reform in her eloquent maiden speech.',
    cieApplicationNote: 'Collocates specifically with speech, voyage, and flight.'
  },
  {
    id: 63,
    word: 'Soliloquy',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'An act of speaking one\'s thoughts aloud when by oneself or regardless of any hearers, especially in drama',
    exampleSentence: 'Hamlet\'s contemplative soliloquy reveals his profound existential agony and moral indecision.',
    cieApplicationNote: 'Essential drama and literary criticism term.'
  },
  {
    id: 64,
    word: 'Harangue',
    partOfSpeech: 'noun / verb',
    category: 'Speeches & Literature',
    definitionPhrase: 'A lengthy, aggressive, and vehement speech or lecture delivered to an audience',
    exampleSentence: 'The coach subjected the dispirited players to a furious 20-minute harangue in the locker room.',
    cieApplicationNote: 'Dramatically superior to "an angry speech".'
  },
  {
    id: 65,
    word: 'Eulogy',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'A speech or piece of writing that praises someone or something highly, typically at a memorial',
    exampleSentence: 'His eldest daughter delivered a moving eulogy, celebrating her father\'s selfless humanitarian deeds.',
    cieApplicationNote: 'Avoid confusing with elegy (which is a mourning poem).'
  },
  {
    id: 66,
    word: 'Epitaph',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'A phrase or form of words written in memory of a person who has died, especially on a tombstone',
    exampleSentence: 'The headstone bore the poignant epitaph: "A gentle soul who walked with humble integrity."',
    cieApplicationNote: 'Distinguish from epigram (a witty remark) and epigraph (a quotation at the start of a book).'
  },
  {
    id: 67,
    word: 'Posthumous',
    partOfSpeech: 'adjective',
    category: 'Speeches & Literature',
    definitionPhrase: 'Occurring, awarded, or appearing after the death of the originator',
    exampleSentence: 'The fallen soldier was awarded the Victoria Cross in a poignant posthumous ceremony.',
    cieApplicationNote: 'Replaces "after his death".'
  },
  {
    id: 68,
    word: 'Pseudonym',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'A fictitious name, especially one used by an author (pen name)',
    exampleSentence: 'Mary Ann Evans published her masterpiece Middlemarch under the masculine pseudonym George Eliot.',
    cieApplicationNote: 'Root study: \'pseudo-\' (false) + \'-nym\' (name).'
  },
  {
    id: 69,
    word: 'Plagiarism',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'The practice of taking someone else\'s work or ideas and passing them off as one\'s own',
    exampleSentence: 'The university expelled the researcher after detecting egregious plagiarism in his doctoral thesis.',
    cieApplicationNote: 'Major academic misconduct violation term.'
  },
  {
    id: 70,
    word: 'Allegory',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'A story, poem, or picture that can be interpreted to reveal a hidden moral or political meaning',
    exampleSentence: 'George Orwell\'s Animal Farm functions as a brilliant political allegory mocking totalitarianism.',
    cieApplicationNote: 'Fundamental literary device examined in Paper 1 comprehension.'
  },
  {
    id: 71,
    word: 'Parody',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'An imitation of the style of a particular writer, artist, or genre with deliberate exaggeration for comic effect',
    exampleSentence: 'The satirical revue opened with a hilarious parody of modern detective melodramas.',
    cieApplicationNote: 'Tone identification in comprehension analysis.'
  },
  {
    id: 72,
    word: 'Prologue',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'A separate introductory section of a literary, dramatic, or musical work',
    exampleSentence: 'The poetic prologue establishes the tragic ancient feud between the two Verona households.',
    cieApplicationNote: 'Antonym: epilogue.'
  },
  {
    id: 73,
    word: 'Epilogue',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'A section or speech at the end of a book or play that serves as a comment on or conclusion to what has happened',
    exampleSentence: 'In the novel\'s brief epilogue, the narrator reveals the destinies of the surviving characters twenty years later.',
    cieApplicationNote: 'Antonym: prologue.'
  },
  {
    id: 74,
    word: 'Bilingual',
    partOfSpeech: 'adjective',
    category: 'Speeches & Literature',
    definitionPhrase: 'Able to speak two languages fluently',
    exampleSentence: 'Raised in Lahore and Edinburgh, he was thoroughly bilingual in Urdu and English.',
    cieApplicationNote: 'Root study: \'bi-\' (two) + \'lingua\' (tongue/language).'
  },
  {
    id: 75,
    word: 'Polyglot',
    partOfSpeech: 'noun / adjective',
    category: 'Speeches & Literature',
    definitionPhrase: 'A person who knows and is able to use several languages fluently',
    exampleSentence: 'As a gifted polyglot fluent in six tongues, he served as the chief interpreter at the summit.',
    cieApplicationNote: 'Elevated academic vocabulary exceeding "multilingual".'
  },
  {
    id: 76,
    word: 'Acronym',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'An abbreviation formed from the initial letters of other words and pronounced as a word (e.g. NASA, RADAR)',
    exampleSentence: 'UNESCO is an internationally recognized acronym for the United Nations Educational, Scientific and Cultural Organization.',
    cieApplicationNote: 'Distinct from initialism (like FBI, BBC) where letters are read individually.'
  },
  {
    id: 77,
    word: 'Illegible',
    partOfSpeech: 'adjective',
    category: 'Speeches & Literature',
    definitionPhrase: 'Not clear enough to be read; undecipherable handwriting',
    exampleSentence: 'The examiner could not award marks for the paragraph because the handwriting was entirely illegible.',
    cieApplicationNote: 'Do not confuse with ineligible (disqualified/unsuitable).'
  },
  {
    id: 78,
    word: 'Sonnet',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'A fourteen-line poem using any of a number of formal rhyme schemes, typically in iambic pentameter',
    exampleSentence: 'Shakespeare composed 154 sonnets exploring timeless themes of love, beauty, and mortality.',
    cieApplicationNote: 'Strict poetic form with 14 lines.'
  },
  {
    id: 79,
    word: 'Elegy',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'A poem of serious reflection, typically a lament for the dead',
    exampleSentence: 'Thomas Gray\'s famous elegy reflects upon the unheralded lives of humble rural villagers.',
    cieApplicationNote: 'Different from eulogy (which is a speech).'
  },
  {
    id: 80,
    word: 'Biography',
    partOfSpeech: 'noun',
    category: 'Speeches & Literature',
    definitionPhrase: 'An account of someone\'s life written by someone else',
    exampleSentence: 'He published an authoritative 800-page biography chronicling Winston Churchill\'s wartime premiership.',
    cieApplicationNote: 'Distinct from autobiography (written by the person themselves).'
  },

  // Category 5: Time, Places & Objects (81-100)
  {
    id: 81,
    word: 'Archive',
    partOfSpeech: 'noun / verb',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A collection of historical documents or records providing information about a place, institution, or group',
    exampleSentence: 'Researchers spent weeks examining fragile parchment scrolls preserved in the national archive.',
    cieApplicationNote: 'Spelling note: \'ch\' produces the /k/ phonetic sound.'
  },
  {
    id: 82,
    word: 'Arsenal',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A collection or storage facility of weapons and military equipment',
    exampleSentence: 'The fort\'s subterranean arsenal contained sufficient gunpowder and cannonballs to endure a siege.',
    cieApplicationNote: 'Can be used figuratively: "an impressive arsenal of rhetorical devices".'
  },
  {
    id: 83,
    word: 'Aviary',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A large cage, building, or enclosure for keeping birds in',
    exampleSentence: 'Rare tropical macaws flew freely within the botanical garden\'s soaring glass aviary.',
    cieApplicationNote: 'Root study: \'avis\' (bird). Contrast with apiary (bees).'
  },
  {
    id: 84,
    word: 'Observatory',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A building equipped for the study of natural phenomena, especially an astronomical telescope station',
    exampleSentence: 'Perched high atop the mountain ridge, the observatory offered unpolluted views of distant nebulae.',
    cieApplicationNote: 'Setting description for descriptive essays.'
  },
  {
    id: 85,
    word: 'Mint',
    partOfSpeech: 'noun / verb',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A place where the official coins and paper currency of a country are manufactured by authority',
    exampleSentence: 'The royal mint struck commemorative gold sovereigns to mark the sovereign\'s jubilee.',
    cieApplicationNote: 'Also used idiomatically: "in mint condition".'
  },
  {
    id: 86,
    word: 'Mortuary',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A room or building in which dead bodies are kept, for hygienic storage or examination',
    exampleSentence: 'The coroner arrived at the municipal mortuary to perform the forensic autopsy.',
    cieApplicationNote: 'Atmospheric setting in mystery narratives.'
  },
  {
    id: 87,
    word: 'Laboratory',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A room or building equipped for scientific experiments, research, or teaching',
    exampleSentence: 'Strict biosafety regulations were enforced throughout the pharmaceutical research laboratory.',
    cieApplicationNote: 'Pronounced with stress on second syllable in standard British English.'
  },
  {
    id: 88,
    word: 'Auditorium',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'The part of a theater, concert hall, or other public building in which the audience sits',
    exampleSentence: 'A hush descended over the packed auditorium as the guest speaker approached the microphone.',
    cieApplicationNote: 'Common institutional setting in school reports.'
  },
  {
    id: 89,
    word: 'Kennel',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A small shelter or boarding establishment for dogs',
    exampleSentence: 'The golden retriever bounded joyfully from the wooden kennel when its master returned.',
    cieApplicationNote: 'One-word substitution for animal domiciles.'
  },
  {
    id: 90,
    word: 'Conservatory',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A room with glass roof and walls, used as a sun lounge or for rearing delicate ornamental plants',
    exampleSentence: 'We sipped Earl Grey tea in the sunlit Victorian conservatory surrounded by lush ferns.',
    cieApplicationNote: 'Also refers to a college of music and arts.'
  },
  {
    id: 91,
    word: 'Biennial',
    partOfSpeech: 'adjective',
    category: 'Time, Places & Objects',
    definitionPhrase: 'Taking place every two years, or lasting for two years',
    exampleSentence: 'The Asian contemporary art biennial opens in Venice next autumn.',
    cieApplicationNote: 'Crucial contrast: biennial (every two years) vs biannual (twice a year).'
  },
  {
    id: 92,
    word: 'Biannual',
    partOfSpeech: 'adjective',
    category: 'Time, Places & Objects',
    definitionPhrase: 'Occurring twice a year (semiannual)',
    exampleSentence: 'The corporation releases its financial performance statement on a biannual schedule in June and December.',
    cieApplicationNote: 'Tested in CIE 1123 time-reference questions.'
  },
  {
    id: 93,
    word: 'Centennial',
    partOfSpeech: 'noun / adjective',
    category: 'Time, Places & Objects',
    definitionPhrase: 'The hundredth anniversary of a significant historical event, or relating to a period of 100 years',
    exampleSentence: 'The academy hosted a grand gala to inaugurate its centennial year of educational excellence.',
    cieApplicationNote: 'Also spelled centenary in British usage.'
  },
  {
    id: 94,
    word: 'Decade',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A period of ten continuous years',
    exampleSentence: 'Over the past decade, renewable solar technologies have plunged dramatically in installation cost.',
    cieApplicationNote: 'Standard chronological quantification.'
  },
  {
    id: 95,
    word: 'Millennium',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A period of a thousand years (plural: millennia)',
    exampleSentence: 'The ancient pyramid has weathered desert sandstorms for more than four millennia.',
    cieApplicationNote: 'Double \'l\' and double \'n\'; classic spelling challenge.'
  },
  {
    id: 96,
    word: 'Microscope',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'An optical instrument used for viewing very small objects typically magnified several hundred times',
    exampleSentence: 'Under the electron microscope, the cellular structure of the leaf showed intricate stomata.',
    cieApplicationNote: 'Scientific instrument vocabulary.'
  },
  {
    id: 97,
    word: 'Barometer',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'An instrument measuring atmospheric pressure, used especially in forecasting weather',
    exampleSentence: 'A steep drop in the mercury barometer warned the mariners of a ferocious oncoming gale.',
    cieApplicationNote: 'Used metaphorically: "a barometer of public sentiment".'
  },
  {
    id: 98,
    word: 'Spacecraft',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'A vehicle or machine designed to fly in outer space',
    exampleSentence: 'The robotic spacecraft successfully touched down upon the cratered surface of Mars.',
    cieApplicationNote: 'Unchanged plural form (one spacecraft, two spacecraft).'
  },
  {
    id: 99,
    word: 'Laundromat',
    partOfSpeech: 'noun',
    category: 'Time, Places & Objects',
    definitionPhrase: 'An establishment with coin-operated washing machines and dryers for public use',
    exampleSentence: 'While waiting for his laundry cycle to complete, he sat in the corner reading his novel.',
    cieApplicationNote: 'Urban environment description.'
  },
  {
    id: 100,
    word: 'Brittle',
    partOfSpeech: 'adjective',
    category: 'Time, Places & Objects',
    definitionPhrase: 'Hard but liable to break, shatter, or snap easily under moderate pressure',
    exampleSentence: 'In the freezing alpine temperatures, the plastic tether snapped like brittle glass.',
    cieApplicationNote: 'High-value sensory adjective for descriptive compositions.'
  },

  // Category 6: Conditions & Beliefs (101-120)
  {
    id: 101,
    word: 'Panacea',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'A solution or remedy for all difficulties, problems, or diseases; a universal cure-all',
    exampleSentence: 'Financial subsidies alone are not a panacea for the chronic systemic failures in the healthcare grid.',
    cieApplicationNote: 'Extremely high-value academic noun for argumentative conclusions.'
  },
  {
    id: 102,
    word: 'Ubiquitous',
    partOfSpeech: 'adjective',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'Present, appearing, or found everywhere simultaneously; omnipresent',
    exampleSentence: 'Smartphones and digital touchscreens have become ubiquitous in twenty-first-century classrooms.',
    cieApplicationNote: 'Elevated replacement for the simplistic "found everywhere".'
  },
  {
    id: 103,
    word: 'Omnipotent',
    partOfSpeech: 'adjective',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'Having unlimited, absolute, or universal power and authority',
    exampleSentence: 'The ancient dictator mistakenly believed his military empire was entirely omnipotent.',
    cieApplicationNote: 'Root study: \'omni-\' (all) + \'potens\' (powerful).'
  },
  {
    id: 104,
    word: 'Omniscient',
    partOfSpeech: 'adjective',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'Knowing everything; possessing complete, infinite knowledge and awareness',
    exampleSentence: 'The novel is told from the perspective of an omniscient third-person narrator who knows every secret.',
    cieApplicationNote: 'Standard literary terminology for narrative voice analysis.'
  },
  {
    id: 105,
    word: 'Atheist',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'A person who disbelieves in or lacks belief in the existence of God or gods',
    exampleSentence: 'As a committed atheist, he defended philosophical naturalism during the theological symposium.',
    cieApplicationNote: 'Distinguish from agnostic.'
  },
  {
    id: 106,
    word: 'Agnostic',
    partOfSpeech: 'noun / adjective',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'A person who believes that nothing is known or can be known of the existence or nature of God',
    exampleSentence: 'Maintaining that human reason cannot ascertain divine truth, he identified as a philosophical agnostic.',
    cieApplicationNote: 'Root study: \'a-\' (without) + \'gnosis\' (knowledge).'
  },
  {
    id: 107,
    word: 'Pantheist',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'A person who believes that God and the physical universe are one and the same (God is everything)',
    exampleSentence: 'The Romantic poet lived as a pantheist, finding divinity in every babbling brook and ancient woodland.',
    cieApplicationNote: 'Essential for analyzing Romantic nature poetry in CIE.'
  },
  {
    id: 108,
    word: 'Insomnia',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'Habitual or chronic inability to obtain sufficient sleep',
    exampleSentence: 'Tormented by exam anxiety, he endured chronic insomnia that left him haggard and listless.',
    cieApplicationNote: 'Medical condition vocabulary.'
  },
  {
    id: 109,
    word: 'Amnesia',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'A partial or total loss of memory, usually caused by brain trauma, shock, or illness',
    exampleSentence: 'Following the severe head concussion, the survivor suffered retrograde amnesia regarding the crash.',
    cieApplicationNote: 'Frequent plot device in narrative writing.'
  },
  {
    id: 110,
    word: 'Claustrophobia',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'Extreme or irrational fear of confined, enclosed, or cramped spaces',
    exampleSentence: 'Trapped inside the malfunctioning lift between floors, her latent claustrophobia triggered hyperventilation.',
    cieApplicationNote: 'Root study: \'claustrum\' (shut in) + \'phobia\' (fear).'
  },
  {
    id: 111,
    word: 'Acrophobia',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'Extreme or irrational fear of heights',
    exampleSentence: 'His acrophobia proved debilitating whenever he stood on the balcony of the skyscraper.',
    cieApplicationNote: 'Root study: \'akros\' (summit/peak).'
  },
  {
    id: 112,
    word: 'Hydrophobia',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'Extreme or irrational fear of water, especially as a symptom of rabies in humans',
    exampleSentence: 'The rabid animal exhibited pronounced hydrophobia, recoiling violently from drinking pans.',
    cieApplicationNote: 'Replaces "fear of water".'
  },
  {
    id: 113,
    word: 'Amphibian',
    partOfSpeech: 'noun / adjective',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'A cold-blooded vertebrate animal capable of living both on land and in water (e.g. frogs, newts)',
    exampleSentence: 'Because it breathes through its skin, the fragile amphibian is acutely sensitive to water contaminants.',
    cieApplicationNote: 'Biological classification tested in science passages.'
  },
  {
    id: 114,
    word: 'Herbivore',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'An animal that feeds exclusively or primarily on plants',
    exampleSentence: 'The towering sauropod was a peaceful herbivore grazing on the crowns of prehistoric ferns.',
    cieApplicationNote: 'Contrast with carnivore and omnivore.'
  },
  {
    id: 115,
    word: 'Carnivore',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'An animal that feeds exclusively on the flesh of other animals',
    exampleSentence: 'Armed with razor-sharp claws and keen stereoscopic vision, the Bengal tiger is a ferocious carnivore.',
    cieApplicationNote: 'Root study: \'caro/carnis\' (flesh) + \'vorare\' (devour).'
  },
  {
    id: 116,
    word: 'Omnivore',
    partOfSpeech: 'noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'An animal or person that eats food of both plant and animal origin',
    exampleSentence: 'Bears and chimpanzees are textbook omnivores that consume both wild berries and small prey.',
    cieApplicationNote: 'Root study: \'omni\' (all) + \'vorare\' (devour).'
  },
  {
    id: 117,
    word: 'Pandemic',
    partOfSpeech: 'noun / adjective',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'An outbreak of a disease prevalent over a whole country, continent, or the world',
    exampleSentence: 'The 1918 influenza pandemic infected a third of the global population across all continents.',
    cieApplicationNote: 'Wider geographic scale than epidemic (which is localized).'
  },
  {
    id: 118,
    word: 'Inevitable',
    partOfSpeech: 'adjective',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'Certain to happen; unavoidable and bound to occur',
    exampleSentence: 'Given the chronic structural decay, the collapse of the abandoned viaduct was sorrowfully inevitable.',
    cieApplicationNote: 'High-utility essay adjective: replaces "cannot be avoided".'
  },
  {
    id: 119,
    word: 'Inaudible',
    partOfSpeech: 'adjective',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'Unable to be heard; not loud enough to register on human ears',
    exampleSentence: 'The frail patient whispered words that were completely inaudible amidst the hum of the respirators.',
    cieApplicationNote: 'Replaces "could not be heard" in summary writing.'
  },
  {
    id: 120,
    word: 'Cosmopolitan',
    partOfSpeech: 'adjective / noun',
    category: 'Conditions & Beliefs',
    definitionPhrase: 'Familiar with and at ease in many different countries and cultures; worldly and inclusive',
    exampleSentence: 'London and Karachi are vibrant cosmopolitan metropolises enriched by hundreds of diverse communities.',
    cieApplicationNote: 'Replaces "a city with people from all over the world".'
  }
];

export const CONFUSED_WORD_PAIRS: ConfusedWordPair[] = [
  {
    id: 1,
    pairName: 'Affect vs Effect',
    wordA: {
      word: 'Affect',
      pos: 'verb (predominantly)',
      definition: 'To have an influence on; to make a difference to',
      example: 'The torrential monsoon will affect the agricultural yield of the province.'
    },
    wordB: {
      word: 'Effect',
      pos: 'noun (predominantly)',
      definition: 'A change that is a result or consequence of an action or other cause',
      example: 'The beneficial effect of consistent revision was visible in his mock examination marks.'
    },
    memoryTrick: 'A is for Action (Affect is an action verb). E is for End result (Effect is the End result/noun).',
    examContextTip: 'Cambridge examiners mark down students severely if they write "The affect of climate change". It must be "The effect of..."'
  },
  {
    id: 2,
    pairName: 'Principal vs Principle',
    wordA: {
      word: 'Principal',
      pos: 'noun / adjective',
      definition: 'The head of a school or college; or main/most important',
      example: 'The school principal addressed the Batch 7 assembly regarding examination decorum.'
    },
    wordB: {
      word: 'Principle',
      pos: 'noun',
      definition: 'A fundamental truth, moral rule, or scientific law',
      example: 'He refused to compromise on his ethical principles for financial gain.'
    },
    memoryTrick: 'The school Principal is your PAL (friend). A principle is a ruLE (ends in -le).',
    examContextTip: 'Never address a formal letter to "The Principle". Cambridge marks this as a critical error.'
  },
  {
    id: 3,
    pairName: 'Stationary vs Stationery',
    wordA: {
      word: 'Stationary',
      pos: 'adjective',
      definition: 'Not moving, or not intended to be moved; staying in one place',
      example: 'The vehicle remained stationary at the red signal until the ambulance passed.'
    },
    wordB: {
      word: 'Stationery',
      pos: 'noun',
      definition: 'Writing materials and office supplies such as paper, envelopes, and pens',
      example: 'Candidates must bring their own blue and black stationery to the examination hall.'
    },
    memoryTrick: 'StationEr with an \'E\' is for Envelopes and Erasers. StationAr with an \'A\' is for At rest.',
    examContextTip: 'When writing letters ordering supplies for an inter-school event, always specify "stationery".'
  },
  {
    id: 4,
    pairName: 'Compliment vs Complement',
    wordA: {
      word: 'Compliment',
      pos: 'noun / verb',
      definition: 'A polite expression of praise or admiration',
      example: 'The teacher paid the scholar a generous compliment on his sophisticated syntax.'
    },
    wordB: {
      word: 'Complement',
      pos: 'noun / verb',
      definition: 'A thing that completes or brings to perfection; goes well together with',
      example: 'Her analytical rigor and his creative imagination complement each other perfectly.'
    },
    memoryTrick: 'I like to receive a complIment (with \'I\'). ComplEment with \'E\' complEtes the set.',
    examContextTip: 'In descriptive and narrative prose, complimenting someone is verbal; complementary colors or traits complete each other.'
  },
  {
    id: 5,
    pairName: 'Desert vs Dessert',
    wordA: {
      word: 'Desert',
      pos: 'noun / verb',
      definition: 'A dry barren sandy area of land; or to abandon a post or person',
      example: 'The explorers traversed the scorching Sahara Desert with their camel caravan.'
    },
    wordB: {
      word: 'Dessert',
      pos: 'noun',
      definition: 'The sweet course eaten at the end of a meal',
      example: 'For dessert, the banquet concluded with warm molten chocolate souffle and vanilla gelato.'
    },
    memoryTrick: 'Dessert has two \'S\'s because you always want a Second Serving of Sweet snacks.',
    examContextTip: 'Watch the pronunciation: DES-ert (arid land) vs de-SSERT (sweet food).'
  },
  {
    id: 6,
    pairName: 'Council vs Counsel',
    wordA: {
      word: 'Council',
      pos: 'noun',
      definition: 'An advisory, deliberative, or administrative body of people formally constituted',
      example: 'The municipal city council voted unanimously to construct a public library.'
    },
    wordB: {
      word: 'Counsel',
      pos: 'noun / verb',
      definition: 'Advice given formally; or a barrister conducting a legal case in court; or to give advice',
      example: 'The senior mentor offered wise counsel to the troubled candidate prior to finals.'
    },
    memoryTrick: 'A CounCil is a Committee. CounSel provides Sensible advice.',
    examContextTip: 'In directed writing reports, recommendations are made to the "council", but students seek "counsel" from experts.'
  },
  {
    id: 7,
    pairName: 'Eminent vs Imminent',
    wordA: {
      word: 'Eminent',
      pos: 'adjective',
      definition: 'Famous, respected, and distinguished within a particular sphere',
      example: 'An eminent British linguist will deliver the keynote address at the Cambridge symposium.'
    },
    wordB: {
      word: 'Imminent',
      pos: 'adjective',
      definition: 'About to happen; occurring at any moment; impending',
      example: 'The dark cumulonimbus clouds and sudden cold gusts warned that a tempest was imminent.'
    },
    memoryTrick: 'Eminent = Esteemed person. Imminent = In a Minute (about to strike).',
    examContextTip: 'Imminent danger creates narrative suspense in continuous writing.'
  },
  {
    id: 8,
    pairName: 'Loose vs Lose',
    wordA: {
      word: 'Loose',
      pos: 'adjective / verb',
      definition: 'Not firmly or tightly fixed in place; free from constraint',
      example: 'A loose brick in the crumbling wall caused the climber to slip.'
    },
    wordB: {
      word: 'Lose',
      pos: 'verb',
      definition: 'To be deprived of, misplace, or fail to retain or win',
      example: 'If you fail to follow the word limit in the summary, you will lose vital marks.'
    },
    memoryTrick: 'Loose has an extra \'O\' because it is too roomy and baggy. Lose lost its extra \'O\'!',
    examContextTip: 'One of the most heavily penalized spelling errors across all Cambridge English exams.'
  }
];

export const HIGH_VALUE_IDIOMS: HighValueIdiom[] = [
  {
    id: 1,
    idiom: 'Burn the midnight oil',
    meaning: 'To work or study late into the night with sustained intellectual effort',
    modelSentence: 'In the weeks preceding the CIE 1123 finals, the dedicated candidates burned the midnight oil revising Cambridge past papers.',
    writingPlacementTip: 'Superb for reflective speeches, student motivation articles, and narrative study sequences.',
    caution: 'Do not use carelessly; avoid saying "he was burning oil on his bed". Use in authentic revision contexts.'
  },
  {
    id: 2,
    idiom: 'A blessing in disguise',
    meaning: 'An apparent misfortune or setback that eventually produces unexpectedly favorable outcomes',
    modelSentence: 'Failing to qualify for the first team proved a blessing in disguise, as it afforded him the time to master Cambridge English.',
    writingPlacementTip: 'Ideal for the turning point or resolution in Paper 2 Section B narrative compositions.',
    caution: 'Ensure the subsequent benefit is clearly deconstructed in the following sentences.'
  },
  {
    id: 3,
    idiom: 'Bite the bullet',
    meaning: 'To confront a painful, grim, or difficult situation with resolute courage and fortitude',
    modelSentence: 'Realizing his continuous prose was falling short of Band 1, Ammar decided to bite the bullet and rewrite his entire third draft.',
    writingPlacementTip: 'Adds dramatic grit to character development when characters face tough moral choices.',
    caution: 'Do not alter the noun: never write "bite the gun" or "bite the pellet".'
  },
  {
    id: 4,
    idiom: 'At the drop of a hat',
    meaning: 'Instantly, without hesitation or requiring any prior prompting',
    modelSentence: 'The intrepid volunteer was ready to pack her medical supplies and assist flood-stricken villages at the drop of a hat.',
    writingPlacementTip: 'Highlights spontaneity, loyalty, or readiness in character descriptions.',
    caution: 'Appropriate for informal or journalistic register; avoid in rigid legal/official reports.'
  },
  {
    id: 5,
    idiom: 'Leave no stone unturned',
    meaning: 'To try every possible course of action or exhaust all investigative avenues to achieve a goal',
    modelSentence: 'The forensic audit team left no stone unturned in deciphering the illicit offshore account transactions.',
    writingPlacementTip: 'Powerful in investigative reports, investigative journalism articles, and mystery narratives.',
    caution: 'Fixed phrase: do not substitute "leave no rock unmoved".'
  },
  {
    id: 6,
    idiom: 'Hit the nail on the head',
    meaning: 'To describe exactly what is causing a situation or to express the precise truth of a matter',
    modelSentence: 'The inspector hit the nail on the head when he diagnosed that lack of teacher training was the true bottleneck.',
    writingPlacementTip: 'Effective in persuasive speech transcripts and opinion columns assessing public dilemmas.',
    caution: 'Ensure the point being validated is profound, not trivial.'
  },
  {
    id: 7,
    idiom: 'Through thick and thin',
    meaning: 'Under all circumstances, no matter how difficult, trying, or adverse they may be',
    modelSentence: 'Having endured three decades of political turbulence, the two comrades stood by each other through thick and thin.',
    writingPlacementTip: 'Enhances narrative essays exploring loyalty, enduring family ties, and heroic companionship.',
    caution: 'Pairs best with sustained emotional depth in continuous writing.'
  },
  {
    id: 8,
    idiom: 'See eye to eye',
    meaning: 'To agree fully with someone on an issue; to share identical viewpoints',
    modelSentence: 'While the two committee delegates rarely saw eye to eye on budgetary allocations, they united on student welfare.',
    writingPlacementTip: 'Excellent for delineating interpersonal conflict or eventual consensus in directed writing letters and dialogues.',
    caution: 'Frequently deployed in the negative ("did not see eye to eye") to establish intellectual tension.'
  }
];
