import { InputType } from '../../../common/enums/input-type.enum';
import { Language } from '../../../common/enums/language.enum';
import { NodeType } from '../../../common/enums/node-type.enum';

export const pubertyAdolescentDevelopmentSeed = {
  category: {
    code: 'PUBERTY_ADOLESCENT_DEVELOPMENT',
    titleEn: 'Puberty',
    titleSw: 'Balehe',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 1,
    isActive: true,
  },

  topic: {
    code: 'PUBERTY_ADOLESCENT_DEVELOPMENT',
    titleEn: 'Puberty',
    titleSw: 'Balehe',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 1,
    isActive: true,
  },

  subtopics: [
    {
      code: 'BODY_CHANGES',
      titleEn: 'Body Changes',
      titleSw: 'Mabadiliko ya Mwili',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 1,
      isActive: true,
    },
    {
      code: 'UNDERSTANDING_PUBERTY',
      titleEn: 'Understanding Puberty',
      titleSw: 'Kuelewa balehe',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 2,
      isActive: true,
    },
    {
      code: 'PHYSICAL_CHANGES_IN_GIRLS',
      titleEn: 'Changes in Girls',
      titleSw: 'Mabadiliko kwa Wasichana',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 3,
      isActive: true,
    },
    {
      code: 'PHYSICAL_CHANGES_IN_BOYS',
      titleEn: 'Changes in Boys',
      titleSw: 'Mabadiliko kwa Wavulana',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 4,
      isActive: true,
    },
    {
      code: 'EMOTIONAL_CHANGES_DURING_PUBERTY',
      titleEn: 'Emotional Changes',
      titleSw: 'Mabadiliko ya Hisia',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 5,
      isActive: true,
    },
  ],

  contentNodes: [
    {
      subtopicCode: 'BODY_CHANGES',
      nodeKey: 'BODY_CHANGES_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `During puberty, the body goes through normal physical and emotional changes. These changes can happen at different times for different young people.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_puberty_changes_01',
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'BODY_CHANGES',
      nodeKey: 'BODY_CHANGES_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Wakati wa balehe, mwili hupitia mabadiliko ya kawaida ya kimwili na kihisia. Mabadiliko haya yanaweza kutokea kwa nyakati tofauti kwa vijana tofauti.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_puberty_changes_01',
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Puberty is the stage of life when a child's body begins to develop into an adult body capable of reproduction. It is a normal and natural part of growing up and happens to everyone, although the timing and pace may differ from one person to another.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Balehe ni kipindi cha ukuaji ambapo mwili wa mtoto huanza kubadilika na kuwa mwili wa mtu mzima mwenye uwezo wa kuzaa. Balehe ni sehemu ya kawaida ya maisha na hutokea kwa kila mtu, ingawa muda na kasi ya mabadiliko hutofautiana.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Puberty usually begins between the ages of 8–13 years for girls and 9–14 years for boys, although some young people may start earlier or later. These differences are usually normal.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kwa kawaida wasichana huanza balehe kati ya miaka 8 hadi 13 na wavulana kati ya miaka 9 hadi 14, ingawa wengine wanaweza kuanza mapema au kuchelewa kidogo.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `During puberty, the body produces hormones that trigger physical, emotional, and social changes. Hormones are natural chemical messengers produced by glands in the body that help regulate growth and development.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Wakati wa balehe mwili huzalisha homoni ambazo husababisha mabadiliko ya kimwili, kihisia, na kijamii`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `The most important message for adolescents would be incase you're asking yourself 

"I started puberty earlier than my friends."
This is usually normal. Bodies develop at different rates.

"My voice is changing."
Voice changes are a normal part of puberty, especially for boys.

"I feel emotional all the time."
Hormonal changes can affect emotions during puberty.

"My body looks different from others."
Everyone develops at their own pace.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ujumbe Muhimu kwa vijana balehe ikiwa unajiuliza

'Nimeingia balehe mapema kabla ya rafiki zangu',
Jua Kila mtu hupitia balehe kwa namna yake.

'Sauti yangu inabadilika', 
Jua kua mabadiliko ya sauti ni sehemu ya kawaida katika balehe hususani kwa wavulana 

'Ninahisi hisia kila wakati.'
Mabadiliko ya homoni yanaweza kuathiri hisia wakati wa kubalehe.Balehe si ugonjwa.

'Mwili wangu umekua tofauti ukilinganisha na wenzangu'
Jua kua Mabadiliko ya mwili na hisia ni sehemu ya ukuaji.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Related Learning Points to adolescents girls and boys

    • Understanding puberty helps young people build self-confidence
    • Understand body changes
    • Practice good hygiene
    • Make informed health decisions
    • Seek help when needed
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vitu ambavyo vijana wanaweza  Kujifunza Vinavyohusiana kuhusu balehe ni kama vile

    • Kuelewa ujana huwasaidia vijana kujenga kujiamini
    • Kuelewa mabadiliko ya mwili
    • Kuzingatia usafi mzuri
    • Kufanya maamuzi sahihi ya kiafya
    • Tafuta msaada unapohitajika
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Frequently Asked Questions from adolescents

Q: What causes puberty?
A: Hormones released by the brain and reproductive organs trigger puberty.

Q: Is it normal to start puberty earlier or later than friends?
A: Yes. Puberty happens at different times for different people.

Q: Can puberty be stopped?
A: Puberty is a natural process and should not be stopped unless advised by a healthcare professional.

Q: Why do I feel different from before?
A: Physical, emotional, and social changes are all part of puberty.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Maswali Yanayoulizwa Mara kwa Mara

Swali: Nini husababisha balehe?
Jibu: Homoni zinazozalishwa mwilini husababisha balehe kuanza.

Swali: Je, ni kawaida kuanza balehe mapema au kuchelewa?
Jibu: Ndiyo. Watu hutofautiana katika ukuaji wao.

Swali: Kwa nini nahisi tofauti siku hizi?
Jibu: Mwili na akili hupitia mabadiliko mengi wakati wa balehe.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 6,
      isActive: true,
    },

    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_GIRLS',
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Physical changes in girls include:

    • Breast development
    • Growth of pubic and underarm hair
    • Beginning of menstruation (monthly periods)
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_GIRLS',
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mabadiliko kwa Wasichana:

    • Matiti kuanza kukua
    • Kuota nywele sehemu za siri na kwapani
    • Kuanza kupata hedhi
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_GIRLS',
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `More physical changes in girls:

    • Increased height and weight
    • Changes in body shape such as wider hips
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_GIRLS',
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mabadiliko kwa Wasichana:

    • Kuongezeka kwa urefu na uzito
    • Nyonga kupanuka
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_GIRLS',
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Some more physical changes include:

    • Increased sweating and body odor
    • Acne or pimples
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_GIRLS',
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mabadiliko kwa Wasichana:

    • Kuongezeka kwa jasho na harufu ya mwili
    • Chunusi
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_BOYS',
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Physical changes in boys include:

    • Enlargement of the penis and testicles
    • Growth of pubic, underarm, and facial hair
    • Deepening of the voice`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_BOYS',
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mabadiliko kwa Wavulana:

    • Uume na korodani kukua
    • Kuota nywele sehemu za siri, kwapani na usoni
    • Sauti kuwa nzito
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_BOYS',
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `More physical changes in boys:

    • Increased muscle development
    • Growth spurts in height`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_BOYS',
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mabadiliko kwa Wavulana:

    • Misuli kuongezeka
    • Kuongezeka kwa urefu
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_BOYS',
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `More physical changes in boys:

    • Increased sweating and body odor
    • Acne or pimples
    • Wet dreams (nocturnal emissions)`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_BOYS',
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mabadiliko kwa Wavulana:

    • Jasho na harufu ya mwili kuongezeka
    • Chunusi
    • Ndoto za usiku
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'EMOTIONAL_CHANGES_DURING_PUBERTY',
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Many young people experience emotional changes during puberty because of hormonal changes and new social experiences. These may include

    • Mood swings
    • Increased sensitivity
    • Desire for independence
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_CHANGES_DURING_PUBERTY',
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mabadiliko ya Kihisia

    • Kubadilika kwa hisia mara kwa mara
    • Kuwa na hisia kali zaidi
    • Kutaka kujitegemea
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_CHANGES_DURING_PUBERTY',
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Some more emotional changes may include:

    • Strong emotions
    • Attraction to other people
    • Concern about appearance
    • Curiosity about relationships
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_CHANGES_DURING_PUBERTY',
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mabadiliko ya Kihisia

    • Kuvutiwa na watu wengine
    • Kujali zaidi mwonekano wa mwili
    • Kutaka kueleweka na kukubalika
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
  ],

  contentNodeOptions: [
    {
      nodeKey: 'BODY_CHANGES_01',
      optionValue: 'what_is_puberty',
      labelEn: 'What is puberty?',
      labelSw: 'Balehe ni nini?',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'BODY_CHANGES_01',
      optionValue: 'girls_changes',
      labelEn: 'Changes in Girls',
      labelSw: 'Balehe kwa Wasichana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'BODY_CHANGES_01',
      optionValue: 'boys_changes',
      labelEn: 'Changes in Boys',
      labelSw: 'Balehe kwa Wavulana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'UNDERSTANDING_PUBERTY_01',
      optionValue: 'when_start',
      labelEn: 'When does it start?',
      labelSw: 'Huanza lini?',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_01',
      optionValue: 'hormones',
      labelEn: 'What are hormones?',
      labelSw: 'Homoni ni nini?',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_01',
      optionValue: 'common_worries',
      labelEn: 'Common worries',
      labelSw: 'Wasiwasi wa kawaida',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_04',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_02',
      optionValue: 'hormones',
      labelEn: 'What are hormones?',
      labelSw: 'Homoni ni nini?',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_02',
      optionValue: 'common_worries',
      labelEn: 'Common worries',
      labelSw: 'Wasiwasi wa kawaida',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_02',
      optionValue: 'girls_changes',
      labelEn: 'Changes in Girls',
      labelSw: 'Balehe kwa Wasichana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_03',
      optionValue: 'girls_changes',
      labelEn: 'Changes in Girls',
      labelSw: 'Balehe kwa Wasichana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_03',
      optionValue: 'boys_changes',
      labelEn: 'Changes in Boys',
      labelSw: 'Balehe kwa Wavulana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_03',
      optionValue: 'common_worries',
      labelEn: 'Common worries',
      labelSw: 'Wasiwasi wa kawaida',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_04',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_04',
      optionValue: 'learning_points',
      labelEn: 'Learning points',
      labelSw: 'Mambo ya kujifunza',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_04',
      optionValue: 'puberty_faqs',
      labelEn: 'Puberty FAQs',
      labelSw: 'Maswali ya balehe',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_04',
      optionValue: 'emotional_changes',
      labelEn: 'Emotional changes',
      labelSw: 'Mabadiliko ya Kihisia',
      nextNodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_05',
      optionValue: 'puberty_faqs',
      labelEn: 'Puberty FAQs',
      labelSw: 'Maswali ya balehe',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_05',
      optionValue: 'body_changes',
      labelEn: 'Body changes',
      labelSw: 'Mabadiliko ya mwili',
      nextNodeKey: 'BODY_CHANGES_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_05',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_06',
      optionValue: 'learning_points',
      labelEn: 'Learning points',
      labelSw: 'Mambo ya kujifunza',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_06',
      optionValue: 'body_changes',
      labelEn: 'Body changes',
      labelSw: 'Mabadiliko ya mwili',
      nextNodeKey: 'BODY_CHANGES_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_06',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      optionValue: 'what_next',
      labelEn: 'What happens next?',
      labelSw: 'Mabadiliko mengine?',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      optionValue: 'emotional_changes',
      labelEn: 'Emotional Changes',
      labelSw: 'Mabadiliko ya kihisia',
      nextNodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      optionValue: 'boys_changes',
      labelEn: 'Changes in Boys',
      labelSw: 'Balehe kwa Wavulana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_02',
      optionValue: 'sweat_acne',
      labelEn: 'Anything else?',
      labelSw: 'Mabadiliko mengine?',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_02',
      optionValue: 'boys_changes',
      labelEn: 'Changes in Boys',
      labelSw: 'Balehe kwa Wavulana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_02',
      optionValue: 'emotional_changes',
      labelEn: 'Emotional changes',
      labelSw: 'Mabadiliko ya kihisia',
      nextNodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_03',
      optionValue: 'boys_changes',
      labelEn: 'Changes in Boys',
      labelSw: 'Balehe kwa Wavulana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_03',
      optionValue: 'emotional_changes',
      labelEn: 'Emotional changes',
      labelSw: 'Mabadiliko ya Kihisia',
      nextNodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      optionValue: 'what_next',
      labelEn: 'What happens next?',
      labelSw: 'Mabadiliko mengine?',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_BOYS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      optionValue: 'emotional_changes',
      labelEn: 'Emotional changes',
      labelSw: 'Mabadiliko ya Kihisia',
      nextNodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      optionValue: 'girls_changes',
      labelEn: 'Changes in Girls',
      labelSw: 'Balehe kwa Wasichana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_02',
      optionValue: 'sweat_acne',
      labelEn: 'Anything else?',
      labelSw: 'Mabadiliko mengine?',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_BOYS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_02',
      optionValue: 'girls_changes',
      labelEn: 'Changes in Girls',
      labelSw: 'Balehe kwa Wasichana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_02',
      optionValue: 'emotional_changes',
      labelEn: 'Emotional changes',
      labelSw: 'Mabadiliko ya Kihisia',
      nextNodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_03',
      optionValue: 'girls_changes',
      labelEn: 'Changes in Girls',
      labelSw: 'Balehe kwa Wasichana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_03',
      optionValue: 'emotional_changes',
      labelEn: 'Emotional changes',
      labelSw: 'Mabadiliko ya Kihisia',
      nextNodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      optionValue: 'more_emotions',
      labelEn: 'More feelings',
      labelSw: 'Mabadiliko mengine?',
      nextNodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      optionValue: 'common_worries',
      labelEn: 'Common worries',
      labelSw: 'Wasiwasi wa kawaida',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      optionValue: 'girls_changes',
      labelEn: 'Changes in Girls',
      labelSw: 'Balehe kwa Wasichana',
      nextNodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_02',
      optionValue: 'common_worries',
      labelEn: 'Common worries',
      labelSw: 'Wasiwasi wa kawaida',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_02',
      optionValue: 'what_is_puberty',
      labelEn: 'What is puberty?',
      labelSw: 'Balehe ni nini?',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
  ],
};
