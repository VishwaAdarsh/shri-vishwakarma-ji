/**
 * ====================================================================
 * 🕉️ VISHWAKARMA — THE DIVINE ARCHITECT
 * Phase 2 & 3 Story, Puja & Craftsmanship Interactive Controller
 * ====================================================================
 */

import { AudioController } from './audio.js';

export const STORY_CHAPTERS = [
  {
    id: "chapter-01",
    chapterNumber: "01",
    romanNumber: "I",
    title: "The Cosmic Beginning",
    hindiTitle: "सृष्टि का आरंभ",
    category: "vedic",
    sourceType: "Vedic",
    sourceBadgeClass: "source-badge-vedic",
    primarySource: "Rigveda Mandala 10, Suktas 81 & 82",
    verse: "य इ॒मा विश्वा॒ भुव॑नानि॒ जुह्व॒दृषि॒र्होता॒ न्यसी॑दत्पि॒ता नः॑ ।\nस आ॒शिषा॒ द्रवि॑णमि॒च्छमा॑नः प्रथम॒च्छदव॑रा॒ँ आ वि॑वेश ॥",
    verseRef: "ऋग्वेद १०.८१.१",
    openingStatement: "Before temples, cities, tools and machines, there was creation itself.",
    hindiText: "सृष्टि के निर्माण से पूर्व, जब न द्युलोक था न पृथ्वी, केवल असीम शून्य था — तब सर्वद्रष्टा परम ऋषि विश्वकर्मा ने समस्त भुवनों को यज्ञ में आहुत कर सृष्टि को मूर्त रूप दिया।",
    englishText: "The earliest Vedic layer in Rigveda 10.81–10.82 presents Viśvakarman not merely as an artisan with material implements, but as the supreme cosmic mind, the archetypal seer (*Hotar*) who establishes the dimensions of reality.",
    sourceNote: "Vedic Foundation: Verified from Rigveda Samhita (Mandala 10, Sukta 81 & 82) with Sayana's commentary; cross-checked via the Vedic Heritage Portal, IGNCA.",
    image: "assets/images/cosmic/ch01-cosmic-beginning.jpg",
    imageAlt: "Cosmic mandala and glowing sacred geometric patterns emerging from deep dark nebular space"
  },
  {
    id: "chapter-02",
    chapterNumber: "02",
    romanNumber: "II",
    title: "The One Who Sees Everywhere",
    hindiTitle: "विश्वचक्षु — सर्वद्रष्टा",
    category: "vedic",
    sourceType: "Vedic",
    sourceBadgeClass: "source-badge-vedic",
    primarySource: "Rigveda Mandala 10, Sukta 81, Verse 3",
    verse: "विश्वतश्चक्षुरुत विश्वतोमुखो विश्वतोबाहुरुत विश्वतस्पात् ।\nसं बाहुभ्यां धमति सं पतत्रैर्द्यावाभूमी जनयन्देव एकः ॥",
    verseRef: "ऋग्वेद १०.८१.३",
    openingStatement: "Everywhere are His eyes, everywhere His faces, everywhere His arms and feet.",
    hindiText: "हर दिशा में दृष्टि, हर दिशा में सृजन। वह एकमात्र परमात्मा अपने हाथों और पंखों की धौंकनी से द्युलोक और पृथ्वी को एक सूत्र में जोड़ता है।",
    englishText: "In this celebrated Vedic verse, the cosmic architect is depicted with vision and presence expanding across all space. Like a master divine smith operating the cosmic bellows, He welds heaven and earth together into unified order.",
    sourceNote: "Textual Rigvedic Citation: Rigveda 10.81.3. Repeated with minor variants in Shukla Yajurveda 17.19 and Taittiriya Samhita 4.6.2.",
    image: "assets/images/cosmic/ch02-cosmic-vision.jpg",
    imageAlt: "Cosmic vision of the all-seeing Vishvakarman with radiant divine arms connecting celestial constellations"
  },
  {
    id: "chapter-03",
    chapterNumber: "03",
    romanNumber: "III",
    title: "The Divine Craftsman",
    hindiTitle: "दिव्य शिल्पकार",
    category: "puranic",
    sourceType: "Puranic / Textual Tradition",
    sourceBadgeClass: "source-badge-puranic",
    primarySource: "Vishnu Purana & Mahabharata (Adi Parva 66)",
    verse: "विश्वकर्मा नमस्तेऽस्तु विश्वात्मा विश्वसंभवः ।\nसर्वलोकमहाकर्ता त्वं हि सर्वप्रवर्तकः ॥",
    verseRef: "पारंपरिक देव स्तुति",
    openingStatement: "From cosmic creator to the supreme master of arts, architecture, and technology.",
    hindiText: "कालान्तर में वैदिक विश्वकर्मा का स्वरूप देवशिल्पी के रूप में विकसित हुआ — जिन्होंने समस्त शिल्पों, वास्तु, यन्त्रों और विमानों का विधान रचा।",
    englishText: "As Indian thought developed into the Puranas and Epics, the theological concept of Viśvakarman flowered into the divine architect of the gods. Endowed with the mastery of thirty-two crafts and sixty-four arts, He designed the celestial realms, palaces of the Devas, and the sacred foundations of Vastu Shastra.",
    sourceNote: "Textual Development: Mahabharata Adi Parva (Section 66) describes Vishwakarma as 'the father of all arts, master of a thousand crafts'. Also documented in Vishnu Purana Book 1.",
    image: "assets/images/story/ch03-divine-craftsman.svg",
    imageAlt: "Sacred temple blueprint, Vastu Purusha mandala guidelines, and golden architect compass"
  },
  {
    id: "chapter-04",
    chapterNumber: "04",
    romanNumber: "IV",
    title: "The Works of Divine Craft",
    hindiTitle: "दिव्य रचनाएँ एवं स्थापत्य",
    category: "puranic",
    sourceType: "Puranic & Itihasa",
    sourceBadgeClass: "source-badge-puranic",
    primarySource: "Vishnu Purana, Ramayana, Mahabharata & Skanda Purana",
    verse: "सूर्यस्य तेजः संकृत्य विश्वकर्मा महामतिः ।\nचकार वैष्णवं चक्रं त्रिशूलं शूलिनस्तथा ॥",
    verseRef: "विष्णु पुराण ३.२",
    openingStatement: "Celestial weapons, architectural citadels, and timeless sacred forms.",
    hindiText: "पौराणिक परंपरा में भगवान विश्वकर्मा द्वारा रचित दिव्य अस्त्र, अभेद्य नगर और पवित्र विग्रह श्रद्धा और विस्मय के प्रतीक हैं।",
    englishText: "Explore the legendary creations traditionally attributed to Vishwakarma across classical literature. Each creation embodies a profound principle: the harmonization of cosmic energy into structured beauty and protection.",
    sourceNote: "Carefully sourced across the Vishnu Purana, Valmiki Ramayana, Mahabharata, and Skanda Purana.",
    image: "assets/images/creations/creation-weapons.svg",
    imageAlt: "The celestial lathe of Vishwakarma turning the rays of Surya to forge divine weapons"
  },
  {
    id: "chapter-05",
    chapterNumber: "05",
    romanNumber: "V",
    title: "The Traditional Katha",
    hindiTitle: "पारंपरिक कथा — १९०० पूजन विधान",
    category: "traditional",
    sourceType: "Traditional Katha",
    sourceBadgeClass: "source-badge-tradition",
    primarySource: "श्री विश्वकर्मदेव की कथा : पूजन-विधि सहित (१९००)",
    verse: "जय श्री विश्वकर्मा प्रभु, जय श्री विश्वकर्मा ।\nसकल सृष्टि के कर्ता, रक्षक सर्वकर्मा ॥",
    verseRef: "पारंपरिक विश्वकर्मा आरती",
    openingStatement: "Living oral and printed heritage of community workshop worship.",
    hindiText: "सन १९०० में प्रकाशित ऐतिहासिक कथा एवं पूजन-विधि के आधार पर — जहाँ श्रम, शिल्प और समर्पण का साक्षात्कार होता है।",
    englishText: "A key verified historical milestone in the popular devotion to Vishwakarma is the 1900 publication 'श्री विश्वकर्मदेव की कथा : पूजन-विधि सहित'. It codifies the communal vows, narratives, and devotional prayers recited by artisan guilds across North and Central India.",
    sourceNote: "Historical Traditional Text: Published in Vikram Samvat 1957 (1900 CE), documenting popular vrat katha practices, moral lessons of honest craft, and ritual tool worship.",
    image: "assets/images/story/ch05-traditional-katha.svg",
    imageAlt: "Ancient printed katha manuscript illuminated by a warm brass diya lamp on a sacred altar"
  },
  {
    id: "chapter-06",
    chapterNumber: "06",
    romanNumber: "VI",
    title: "The Meaning of Vishwakarma",
    hindiTitle: "विश्वकर्मा दर्शन का अर्थ",
    category: "interpretation",
    sourceType: "Devotional Interpretation",
    sourceBadgeClass: "source-badge-regional",
    primarySource: "Cultural Philosophy & Work Ethics",
    verse: "कौशल जब समर्पण से जुड़ता है, तो कर्म साधना बन जाता है।",
    verseRef: "मूल वैबसाइट चिंतन",
    openingStatement: "What does Vishwakarma represent for human life and creators today?",
    hindiText: "विश्वकर्मा केवल एक पौराणिक चरित्र नहीं हैं; वे सृजन, शिल्प, ज्ञान, संयम और कर्म के पावन समन्वय के अधिष्ठाता हैं।",
    englishText: "Beyond myth and ritual, the tradition of Vishwakarma articulates a timeless civilizational philosophy: that human hands transforming raw nature with precision, ethics, and reverence participate directly in cosmic order.",
    sourceNote: "Original Devotional Copy: An interpretive philosophical synthesis connecting ancient craft ethics to contemporary creativity.",
    image: "assets/images/craftsmanship/ch06-craftsmanship.svg",
    imageAlt: "The five sacred pillars of craftsmanship: anvil, chisel, compass, hammer, and forge flame"
  },
  {
    id: "chapter-07",
    chapterNumber: "07",
    romanNumber: "VII",
    title: "The Story Continues",
    hindiTitle: "सृजन की अमर परंपरा",
    category: "puja-gateway",
    sourceType: "Living Tradition",
    sourceBadgeClass: "source-badge-tradition",
    primarySource: "Kanya Sankranti & Tool Consecration Customs",
    verse: "ॐ आधार शक्तये नमः । ॐ कूर्माय नमः । ॐ विश्वकर्मणे नमः ॥",
    verseRef: "मंगलाचरण श्लोक",
    openingStatement: "The story did not end with the ancient world. It lives in every workshop today.",
    hindiText: "परंपरा आज भी जीवित है। कल-कारखानों, शिल्पकक्षों और कर्मस्थलों में यंत्रों को विश्राम देकर कृतज्ञता अर्पित की जाती है।",
    englishText: "The ancient lineage connects directly to the annual celebration of Vishwakarma Puja. Work pauses, instruments are cleansed, and creators offer thanks to the tools that sustain life and civilization.",
    sourceNote: "Living Pan-Indian Tradition: Celebrated annually on solar Kanya Sankranti (and post-Diwali in western regions).",
    image: "assets/images/puja/ch07-puja-transition.svg",
    imageAlt: "Consecrated artisan tools resting beside a brass Mangal Kalash draped in marigold flowers"
  }
];

export const CREATION_DETAILS = [
  {
    id: "weapons",
    title: "Sudarshana Chakra & Trishula",
    hindiTitle: "सुदर्शन चक्र एवं त्रिशूल",
    subtitle: "Forged upon the Lathe of the Sun",
    image: "assets/images/creations/creation-weapons.svg",
    tradition: "Puranic Tradition (Source Type C)",
    sourceRef: "Vishnu Purana (Book 3, Chapter 2) & Markandeya Purana",
    shortDesc: "Crafted from one-eighth of Surya's unbearable radiance pared down upon the celestial lathe.",
    fullStory: "According to the Vishnu Purana, Surya's consort Sanjna found the blazing solar intensity too overwhelming to endure. Her father, the divine artisan Vishwakarma, came to her aid. He mounted Surya upon his cosmic lathe (*bhrami*) and meticulously pared down an eighth part of the solar effulgence. From these gathered celestial filings, Vishwakarma forged the supreme implements of cosmic balance: the razor-edged Sudarshana Chakra of Bhagwan Vishnu, the three-pronged Trishula of Bhagwan Shiva, the radiant Shakti lance of Karttikeya, and the aerial palanquin of Kubera.",
    historicalContext: "This legend allegorically explains how raw, destructive cosmic fire is tempered through artisanal skill into structured instruments that preserve cosmic righteousness (*Dharma*)."
  },
  {
    id: "cities",
    title: "Dwarka, Lanka & Indraprastha",
    hindiTitle: "द्वारका, लंका एवं इन्द्रप्रस्थ",
    subtitle: "Celestial Citadels of Architectural Grandeur",
    image: "assets/images/creations/creation-cities.svg",
    tradition: "Puranic & Itihasa (Source Type C)",
    sourceRef: "Mahabharata (Sabha Parva), Bhagavata Purana & Ramayana",
    shortDesc: "Wondrous cities built with optical marvels, golden fortifications, and divine Vastu harmony.",
    fullStory: "The epics revere Vishwakarma as the architect behind the most celebrated cities of Hindu tradition. When Bhagwan Krishna required an impregnable sanctuary for the Yadavas, Vishwakarma raised the golden island-city of Dwarka from the Arabian Sea, featuring wide boulevards, crystal gateways, and celestial gardens. For the Pandavas at Indraprastha, Vishwakarma designed the master plan of the palace, realized in synergy with the asura craftsman Maya Danava, renowned for its optical floors resembling liquid water. In the Ramayana, the golden island fortress of Lanka was originally built by Vishwakarma for Kubera before being claimed by Ravana.",
    historicalContext: "These accounts reflect ancient Indian urban planning concepts: moat defenses, grid layouts, ventilation, water harvest reservoirs, and sacred architectural geometry."
  },
  {
    id: "setu",
    title: "Ram Setu (The Ocean Bridge)",
    hindiTitle: "राम सेतु एवं नल का शिल्प",
    subtitle: "Engineered Across the Sea by Nala",
    image: "assets/images/creations/creation-setu.svg",
    tradition: "Itihasa (Source Type C)",
    sourceRef: "Valmiki Ramayana, Yuddha Kanda (Sarga 22, Verses 45–50)",
    shortDesc: "Constructed over the vast southern ocean through the inherited architectural genius of Nala.",
    fullStory: "When Bhagwan Rama and the Vanara army stood before the vast ocean separating India from Lanka, the ocean deity Samudra advised Rama to seek the help of Nala. Nala stepped forward and revealed his lineage: 'I was born from the seed of Vishwakarma, gifted with an engineering intellect equal to my father's.' Under Nala's direction, hundreds of thousands of Vanaras felled trees, quarried massive boulders, and aligned floating stone blocks across one hundred yojanas. The bridge was completed with mathematical precision in just five days.",
    historicalContext: "Valmiki Ramayana explicitly celebrates civil engineering: the use of measuring strings (*sutra*), stone weights, structural leveling, and the sacred transmission of technical knowledge from father to son."
  },
  {
    id: "jagannath",
    title: "Puri Jagannath Daru-Brahma",
    hindiTitle: "श्री जगन्नाथ दारु-ब्रह्म विग्रह",
    subtitle: "Carved by the Mysterious Old Artisan",
    image: "assets/images/creations/creation-jagannath.svg",
    tradition: "Temple Tradition & Puranic (Source Type C & D)",
    sourceRef: "Skanda Purana (Utkala Khanda) & Madala Panji",
    shortDesc: "The divine carpenter who sculpted the sacred wooden deities behind locked temple doors.",
    fullStory: "When King Indradyumna retrieved the sacred floating Daru (neem tree log) from the shores of Puri to fashion the deities, no mortal carpenter's iron chisel could pierce the sacred wood; the tools repeatedly shattered. An old, frail carpenter named Ananta Maharana (Bhagwan Vishwakarma in disguise) arrived and offered to carve the murtis under one strict condition: the temple doors must remain locked for twenty-one days, and no one must disturb him. After fifteen days, hearing no sound from within, Queen Gundicha feared for the elderly artisan's life and persuaded the king to open the doors. The artisan had vanished, leaving behind the three unfinished forms of Jagannath, Balabhadra, and Subhadra with their distinctive large round eyes.",
    historicalContext: "The unfinished murtis convey a profound philosophical truth: the Supreme Reality (*Brahman*) cannot be circumscribed by human concepts of anatomical symmetry or mortal completion."
  }
];

export const KATHA_SECTIONS = [
  {
    number: "01",
    title: "भूमिका (Introduction)",
    englishTitle: "The Sacred Context",
    hindiText: "प्राचीन काल से ही भारत में ज्ञान और कर्म को एक दूसरे का पूरक माना गया है। श्री विश्वकर्मदेव की कथा का मुख्य ध्येय मनुष्य को यह स्मरण कराना है कि जो कर्म ईमानदारी, कुशलता और पवित्रता से किया जाता है, वही सच्चा धर्म है।",
    englishText: "In the 1900 traditional text, the narrative begins by establishing that human industry, honesty, and artistic craft are direct spiritual duties, through which an artisan honors the divine creator."
  },
  {
    number: "02",
    title: "सृष्टि और शिल्प (Creation & Craft)",
    englishTitle: "Cosmic Craftsmanship",
    hindiText: "कथा में वर्णन आता है कि जब संसार में अंधकार और अव्यवस्था थी, तब भगवान विश्वकर्मा ने अपने दिव्य ज्ञान से दिशाओं, ग्रहों, पर्वतों और धातुओं का विभाजन कर सृष्टि को एक व्यवस्थित रूप प्रदान किया।",
    englishText: "The text narrates how Vishwakarma brought order out of primordial chaos, establishing the properties of metals, stone, and wood for the benefit of all living beings."
  },
  {
    number: "03",
    title: "दिव्य निर्माण (Celestial Works)",
    englishTitle: "Architecture for the Gods",
    hindiText: "देवताओं के निवेदन पर प्रभु विश्वकर्मा ने स्वर्ग में अमरावती, कुबेर के लिए अलकापुरी और भगवान शिव के लिए दिव्य धामों का निर्माण किया। उन्होंने प्रत्येक निर्माण में प्राकृतिक संतुलन और सौंदर्य का अद्भुत सामंजस्य रखा।",
    englishText: "Responding to the prayers of the Devas, Vishwakarma designed celestial assemblies, golden thrones, and aerial vehicles, maintaining perfect environmental harmony."
  },
  {
    number: "04",
    title: "कर्म और कौशल (Work & Skill)",
    englishTitle: "The Sanctity of Human Labor",
    hindiText: "कथा का सबसे प्रेरणादायक भाग मानव कारीगरों से संबंधित है। जो शिल्पकार अपने औजारों का सम्मान करता है, छल-कपट से दूर रहकर अपने कार्य में श्रेष्ठता लाता है, भगवान विश्वकर्मा उसके घर में सुख और समृद्धि का वास करते हैं।",
    englishText: "The core moral of the traditional katha centers on human artisans: those who respect their tools, avoid deceit, and strive for excellence are blessed with enduring prosperity and peace."
  },
  {
    number: "05",
    title: "विश्वकर्मा की आराधना (Veneration & Worship)",
    englishTitle: "The Workshop Ritual",
    hindiText: "पूजन विधान के अंतर्गत बताया गया है कि विश्वकर्मा पूजा के दिन यंत्रों को तेल-जल से स्वच्छ कर उन पर कुमकुम और पुष्प अर्पित करने चाहिए। उस दिन औजारों को विश्राम देकर सामूहिक रूप से प्रभु की आरती करनी चाहिए।",
    englishText: "The liturgical section prescribes the cleansing of tools, application of vermilion and marigolds, and congregational singing of the Aarti, giving tools a sacred day of rest."
  },
  {
    number: "06",
    title: "आशीर्वाद (Benediction)",
    englishTitle: "The Final Blessing",
    hindiText: "कथा के अंत में यह प्रार्थना की जाती है कि हे विश्वकर्मा प्रभु, हमारे हाथों में कुशलता, बुद्धि में शुचिता और कर्म में निष्ठा प्रदान करें। सकल सृष्टि के कल्याण के लिए हमारे कौशल का सदुपयोग हो।",
    englishText: "The katha closes with a solemn prayer asking for dexterity of hand, purity of intellect, and unwavering dedication to the welfare of all beings."
  }
];

export const TOOL_EXHIBIT_DATA = [
  {
    id: "tool-hammer",
    category: "traditional",
    name: "The Artisan Hammer",
    hindiName: "मुद्गर / हथौड़ा",
    categoryLabel: "Traditional Tools",
    spec: "Forged Iron & Rosewood · High Impact",
    desc: "A universal symbol of physical craftsmanship, shaping raw metal and timber into functional form through measured impact and patience.",
    image: "assets/images/tools/tool-hammer.svg",
    details: "Used across stone carvers, carpenters, and blacksmiths. The hammer head receives the consecrated vermilion tilak during Vishwakarma Puja."
  },
  {
    id: "tool-chisel",
    category: "craft",
    name: "The Sculptor's Chisel",
    hindiName: "टंक / छेनी",
    categoryLabel: "Craft Tools",
    spec: "Beveled High-Carbon Steel · Sacred Form",
    desc: "The definitive instrument of form, transforming inert granite and marble into consecrated deities and intricate architectural relief.",
    image: "assets/images/tools/tool-chisel.svg",
    details: "In traditional Shilpa Shastra, the chisel is held with an unwavering mind (Dhyana) so the form hidden in stone can reveal itself."
  },
  {
    id: "tool-caliper",
    category: "craft",
    name: "The Master Caliper & Compass",
    hindiName: "मान-यन्त्र / परकार",
    categoryLabel: "Craft Tools",
    spec: "Polished Brass · Precision Arc",
    desc: "The instrument of sacred proportion, establishing the Golden Ratio and architectural orientation prescribed in Vastu Shastra.",
    image: "assets/images/tools/tool-caliper.svg",
    details: "Embodying the cosmic principle of order (Rita), the compass guarantees that structural integrity mirrors celestial harmony."
  },
  {
    id: "tool-lathe",
    category: "engineering",
    name: "The Precision Lathe",
    hindiName: "भ्रमि / खराद यन्त्र",
    categoryLabel: "Engineering Tools",
    spec: "3-Jaw Chuck & Carbide Bit · Rotational Precision",
    desc: "Connecting the legendary Puranic lathe that shaped the sun's rays to the rotational machinery of modern precision mechanical engineering.",
    image: "assets/images/tools/tool-lathe.svg",
    details: "In the Vishnu Purana (3.2), Vishwakarma placed the Sun on his lathe to trim its fierce brilliance; in modern workshops, it turns aerospace alloys."
  },
  {
    id: "tool-digital",
    category: "modern",
    name: "The Digital Workstation & Stylus",
    hindiName: "डिजिटल सृजन / आधुनिक साधन",
    categoryLabel: "Modern Creation Tools",
    spec: "Silicon Matrix, Stylus & Code · Digital Era",
    desc: "The contemporary instrument of architecture and engineering, where code, silicon, and vector calculations bring complex creations to life.",
    image: "assets/images/tools/tool-digital.svg",
    details: "Modern software architects, industrial designers, and hardware engineers honor the same divine creative spark through digital precision."
  }
];

export const PUJA_STEPS_DATA = [
  {
    num: "01",
    title: "SHUDDHI",
    hindi: "शुद्धि",
    icon: "✦",
    desc: "Clean the workplace, polish instruments, and prepare the environment for consecrated creative work."
  },
  {
    num: "02",
    title: "PREPARATION",
    hindi: "तैयारी",
    icon: "🪔",
    desc: "Arrange the Puja space, draped chauki, Mangal Kalash, sacred water, flowers, and dhoop-deepa."
  },
  {
    num: "03",
    title: "INVOCATION",
    hindi: "आवाहन",
    icon: "🙏",
    desc: "Begin the devotional observance and invoke Bhagwan Vishwakarma with reverent contemplation."
  },
  {
    num: "04",
    title: "WORSHIP",
    hindi: "पूजन",
    icon: "🌺",
    desc: "Offer customary devotional offerings (fruits, sweets, chandan, akshat) according to community tradition."
  },
  {
    num: "05",
    title: "TOOLS CONSECRATION",
    hindi: "औज़ार पूजन",
    icon: "⚒",
    desc: "Place tools, instruments, machines or computers respectfully upon the altar as consecrated extensions of skill."
  },
  {
    num: "06",
    title: "AARTI",
    hindi: "आरती",
    icon: "🔥",
    desc: "Perform the customary congregational aarti with clapping, bells, and five-wick camphor flame."
  },
  {
    num: "07",
    title: "BLESSINGS",
    hindi: "आशीर्वाद",
    icon: "✨",
    desc: "Conclude by seeking blessings for precision, workplace safety, prosperity, and meaningful creative labor."
  }
];

/**
 * Story Controller Helper Object
 */
export const StoryController = {
  chapters: STORY_CHAPTERS,
  creations: CREATION_DETAILS,
  katha: KATHA_SECTIONS,
  tools: TOOL_EXHIBIT_DATA,
  pujaSteps: PUJA_STEPS_DATA,
  activeChapterId: "chapter-01",
  chantCount: 0,
  modalElement: null,
  progressChain: null,
  progressBadge: null,

  init() {
    this.modalElement = document.getElementById('creation-modal');
    this.progressChain = document.getElementById('story-progress-chain');
    this.progressBadge = document.getElementById('story-progress-mobile-badge');

    this.bindCreationTriggers();
    this.bindSourcePanelToggles();
    this.bindModalCloseEvents();
    this.setupChapterObserver();
    
    // Phase 3 Initializers
    this.initToolExhibit();
    this.initMantraChant();
    this.initPujaTimelineObserver();
  },

  bindCreationTriggers() {
    document.querySelectorAll('[data-creation-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const creationId = btn.getAttribute('data-creation-id');
        this.openCreationModal(creationId);
      });
    });
  },

  bindSourcePanelToggles() {
    document.querySelectorAll('.source-panel-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !isExpanded);
        const panelBody = btn.nextElementSibling;
        if (panelBody && panelBody.classList.contains('source-panel-body')) {
          panelBody.classList.toggle('is-open', !isExpanded);
        }
      });
    });
  },

  openCreationModal(creationId) {
    const creation = this.creations.find(c => c.id === creationId);
    if (!creation || !this.modalElement) return;

    // Populate modal contents
    document.getElementById('modal-creation-title').textContent = creation.title;
    document.getElementById('modal-creation-hindi').textContent = creation.hindiTitle;
    document.getElementById('modal-creation-subtitle').textContent = creation.subtitle;
    document.getElementById('modal-creation-tradition').textContent = creation.tradition;
    document.getElementById('modal-creation-source').textContent = creation.sourceRef;
    document.getElementById('modal-creation-story').textContent = creation.fullStory;
    document.getElementById('modal-creation-context').textContent = creation.historicalContext;
    
    const imgEl = document.getElementById('modal-creation-img');
    if (imgEl) {
      imgEl.src = creation.image;
      imgEl.alt = creation.title;
    }

    this.modalElement.classList.add('is-open');
    this.modalElement.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button
    const closeBtn = document.getElementById('modal-creation-close');
    if (closeBtn) closeBtn.focus();
  },

  closeCreationModal() {
    if (!this.modalElement) return;
    this.modalElement.classList.remove('is-open');
    this.modalElement.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  },

  bindModalCloseEvents() {
    const closeBtn = document.getElementById('modal-creation-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeCreationModal());
    }

    if (this.modalElement) {
      this.modalElement.addEventListener('click', (e) => {
        if (e.target === this.modalElement) {
          this.closeCreationModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalElement && this.modalElement.classList.contains('is-open')) {
        this.closeCreationModal();
      }
    });
  },

  setupChapterObserver() {
    const chapterSections = document.querySelectorAll('.story-chapter-section');
    if (chapterSections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chapterId = entry.target.id;
          this.updateActiveChapter(chapterId);
        }
      });
    }, {
      root: null,
      threshold: 0.25,
      rootMargin: '-20% 0px -40% 0px'
    });

    chapterSections.forEach(sec => observer.observe(sec));
  },

  updateActiveChapter(chapterId) {
    this.activeChapterId = chapterId;
    const chapterObj = this.chapters.find(c => c.id === chapterId);
    if (!chapterObj) return;

    // Update Desktop progress chain
    document.querySelectorAll('.progress-step').forEach(step => {
      if (step.getAttribute('data-chapter-target') === chapterId) {
        step.classList.add('is-active');
      } else {
        step.classList.remove('is-active');
      }
    });

    // Update Mobile compact badge
    if (this.progressBadge) {
      this.progressBadge.textContent = `${chapterObj.chapterNumber} / 07 · ${chapterObj.title}`;
    }
  },

  /* ------------------------------------------------------------------
   * Phase 3 Interactive Handlers
   * ------------------------------------------------------------------ */
  initToolExhibit() {
    // Tool Category Filtering
    const filterBtns = document.querySelectorAll('.tool-filter-btn');
    const toolCards = document.querySelectorAll('.tool-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const category = btn.getAttribute('data-tool-filter');
        toolCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Tool Card Click & Expand Blueprint
    toolCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Toggle active state
        const isActive = card.classList.contains('is-active');
        toolCards.forEach(c => c.classList.remove('is-active'));
        if (!isActive) {
          card.classList.add('is-active');
        }
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  },

  initMantraChant() {
    const chantBtn = document.getElementById('btn-chant-toggle');
    const counterBadge = document.getElementById('chant-counter-badge');
    const counterNum = document.getElementById('chant-count-num');
    const breathingHalo = document.getElementById('mantra-breathing-halo');

    if (!chantBtn) return;

    chantBtn.addEventListener('click', () => {
      this.chantCount++;
      const formatted = String(this.chantCount).padStart(2, '0');

      if (counterNum) counterNum.textContent = formatted;
      if (counterBadge) counterBadge.classList.add('is-active');

      // Synthesize gentle temple bell chime
      AudioController.playBellChime();

      // Trigger breathing aura expansion
      if (breathingHalo) {
        breathingHalo.style.transform = 'translate(-50%, -50%) scale(1.35)';
        setTimeout(() => {
          breathingHalo.style.transform = '';
        }, 1200);
      }
    });
  },

  initPujaTimelineObserver() {
    const stepNodes = document.querySelectorAll('.puja-step-node');
    if (stepNodes.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
        }
      });
    }, {
      threshold: 0.2
    });

    stepNodes.forEach(node => observer.observe(node));
  }
};
