import { InputType } from '../../../common/enums/input-type.enum';
import { Language } from '../../../common/enums/language.enum';
import { NodeType } from '../../../common/enums/node-type.enum';

export const pubertyAdolescentDevelopmentSeed = {
  category: {
    code: 'PUBERTY_ADOLESCENT_DEVELOPMENT',
    titleEn: 'Puberty and Adolescent Development',
    titleSw: 'Balehe na Ukuaji wa Vijana',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 1,
    isActive: true,
  },

  topic: {
    code: 'PUBERTY_ADOLESCENT_DEVELOPMENT',
    titleEn: 'Puberty and Adolescent development',
    titleSw: 'Balehe na ukuaji wa vijana',
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
      titleEn: 'Physical Changes in Girls',
      titleSw: 'Mabadiliko ya Mwili kwa Wasichana',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 3,
      isActive: true,
    },
    {
      code: 'PHYSICAL_CHANGES_IN_BOYS',
      titleEn: 'Physical Changes in Boys',
      titleSw: 'Mabadiliko ya Mwili kwa Wavulana',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 4,
      isActive: true,
    },
    {
      code: 'EMOTIONAL_CHANGES_DURING_PUBERTY',
      titleEn: 'Emotional Changes During Puberty',
      titleSw: 'Mabadiliko ya Hisia Wakati wa Balehe',
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

Puberty usually begins between the ages of 8–13 years for girls and 9–14 years for boys, although some young people may start earlier or later. These differences are usually normal.

During puberty, the body produces hormones that trigger physical, emotional, and social changes. Hormones are natural chemical messengers produced by glands in the body that help regulate growth and development.`,
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

Kwa kawaida wasichana huanza balehe kati ya miaka 8 hadi 13 na wavulana kati ya miaka 9 hadi 14, ingawa wengine wanaweza kuanza mapema au kuchelewa kidogo.

Wakati wa balehe mwili huzalisha homoni ambazo husababisha mabadiliko ya kimwili, kihisia, na kijamii`,
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
      nodeType: NodeType.RELATED_TOPICS,
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
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_PUBERTY',
      nodeKey: 'UNDERSTANDING_PUBERTY_02',
      nodeType: NodeType.RELATED_TOPICS,
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
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_GIRLS',
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `For Girls:

    1. Breast development
    2. Growth of pubic and underarm hair
    3. Beginning of menstruation (monthly periods)
    4. Increased height and weight
    5. Changes in body shape such as wider hips
    6. Increased sweating and body odor
    7. Acne or pimples
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

    1. Matiti kuanza kukua
    2. Kuota nywele sehemu za siri na kwapani
    3. Kuanza kupata hedhi
    4. Kuongezeka kwa urefu na uzito
    5. Nyonga kupanuka
    6. Kuongezeka kwa jasho na harufu ya mwili
    7. Chunusi
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
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `For boys:

    1. Enlargement of the penis and testicles
    2. Growth of pubic, underarm, and facial hair
    3. Deepening of the voice
    4. Increased muscle development
    5. Growth spurts in height
    6. Increased sweating and body odor
    7. Acne or pimples
    8. Wet dreams (nocturnal emissions)`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: true,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'PHYSICAL_CHANGES_IN_BOYS',
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mabadiliko kwa Wavulana:

    1. Uume na korodani kukua
    2. Kuota nywele sehemu za siri, kwapani na usoni
    3. Sauti kuwa nzito
    4. Misuli kuongezeka
    5. Kuongezeka kwa urefu
    6. Jasho na harufu ya mwili kuongezeka
    7. Chunusi
    8. Ndoto za usiku
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: true,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'EMOTIONAL_CHANGES_DURING_PUBERTY',
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Many young people experience emotional changes during puberty because of hormonal changes and new social experiences. These may include

    1. Mood swings
    2. Increased sensitivity
    3. Desire for independence
    4. Strong emotions
    5. Attraction to other people
    6. Concern about appearance
    7. Curiosity about relationships
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

    1. Kubadilika kwa hisia mara kwa mara
    2. Kuwa na hisia kali zaidi
    3. Kutaka kujitegemea
    4. Kuvutiwa na watu wengine
    5. Kujali zaidi mwonekano wa mwili
    6. Kutaka kueleweka na kukubalika
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
  ],

  contentNodeOptions: [
    {
      nodeKey: 'BODY_CHANGES_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'BODY_CHANGES_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'BODY_CHANGES_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'UNDERSTANDING_PUBERTY_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'UNDERSTANDING_PUBERTY_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },

    {
      nodeKey: 'UNDERSTANDING_PUBERTY_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_PUBERTY_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_GIRLS_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PHYSICAL_CHANGES_IN_BOYS_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_CHANGES_DURING_PUBERTY_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },
  ],
};
