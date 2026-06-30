import { InputType } from '../../../common/enums/input-type.enum';
import { Language } from '../../../common/enums/language.enum';
import { NodeType } from '../../../common/enums/node-type.enum';

export const digitalSafetyAndMentalWellbeingSeed = {
  category: {
    code: 'DIGITAL_SAFETY_AND_MENTAL_WELLBEING',
    titleEn: 'Mental Wellbeing',
    titleSw: 'Afya ya Akili',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 6,
    isActive: true,
  },

  topic: {
    code: 'DIGITAL_SAFETY_AND_MENTAL_WELLBEING',
    titleEn: 'Mental Wellbeing',
    titleSw: 'Afya ya Akili',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 1,
    isActive: true,
  },

  subtopics: [
    {
      code: 'MENTAL_HEALTH_BASICS',
      titleEn: 'Mental Health Basics',
      titleSw: 'Misingi ya afya ya akili',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 1,
      isActive: true,
    },
    {
      code: 'STRESS_MANAGEMENT',
      titleEn: 'Stress Management',
      titleSw: 'Kuthibiti msongo wa mawazo',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 2,
      isActive: true,
    },
    {
      code: 'ANXIETY_AND_WORRY',
      titleEn: 'Anxiety and Worry',
      titleSw: 'Wasiwasi na Hofu',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 3,
      isActive: true,
    },
    {
      code: 'SELF_ESTEEM',
      titleEn: 'Self-Esteem',
      titleSw: 'Kujithamini',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 4,
      isActive: true,
    },
    {
      code: 'EMOTIONAL_WELLBEING',
      titleEn: 'Emotional Wellbeing',
      titleSw: 'Ustawi wa hisia',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 5,
      isActive: true,
    },
    {
      code: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      titleEn: 'Mental Health Support',
      titleSw: 'Msaada wa Afya ya Akili',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 6,
      isActive: true,
    },
  ],

  contentNodes: [
    // add in chunks
    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Mental health refers to how we think, feel, behave, cope with challenges, build relationships, and make decisions.
Just as physical health affects the body, mental health affects emotions, thoughts, confidence, relationships, school performance, and daily life.
Mental health is something everyone has, sometimes a person may feel happy, motivated, and hopeful.
At other times they may feel stressed, sad, overwhelmed, angry, confused, or worried.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Afya ya akili inahusu jinsi tunavyofikiri, kuhisi, kutenda, kukabiliana na changamoto, kujenga mahusiano, na kufanya maamuzi.
Kama vile afya ya kimwili inavyoathiri mwili, afya ya akili huathiri hisia, mawazo, kujiamini, mahusiano, utendaji wa shule, na maisha ya kila siku.
Afya ya akili ni kitu ambacho kila mtu anacho, wakati mwingine mtu anaweza kuhisi furaha, motisha, na matumaini.
Wakati mwingine anaweza kuhisi msongo wa mawazo, huzuni, kuzidiwa, hasira, kuchanganyikiwa, au wasiwasi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Experiencing emotions is a normal part of life.
Good mental health does not mean feeling happy all the time.
It means having healthy ways of coping with life's challenges.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kupata hisia ni sehemu ya kawaida ya maisha.
Afya nzuri ya akili haimaanishi kujisikia furaha wakati wote.
Inamaanisha kuwa na njia nzuri za kukabiliana na changamoto za maisha.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Why Should Adolescents Care About Mental Health?
Adolescence is a period of major change, young people experience:
    ● Physical changes during puberty.
    ● Emotional changes.
    ● New responsibilities.
    ● Academic pressure.
    ● Friendship challenges.
    ● Romantic relationships.
    ● Family expectations.
    ● Questions about identity and the future.

These experiences can affect mental wellbeing.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kwa Nini Vijana Wanapaswa Kujali Afya ya Akili?
Ujana ni kipindi cha mabadiliko makubwa, vijana hupata:
    ● Mabadiliko ya kimwili wakati wa kubalehe.
    ● Mabadiliko ya kihisia.
    ● Majukumu mapya.
    ● Shinikizo la kitaaluma.
    ● Changamoto za urafiki.
    ● Mahusiano ya kimapenzi.
    ● Matarajio ya familia.
    ● Maswali kuhusu utambulisho na mustakabali.

Uzoefu huu unaweza kuathiri ustawi wa akili.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Understanding mental health helps adolescents:
    ● Manage emotions.
    ● Build resilience.
    ● Seek support when needed.
    ● Develop healthy relationships.
    ● Make safer decisions.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kuelewa afya ya akili huwasaidia vijana:
    ● Kudhibiti hisia.
    ● Kujenga ustahimilivu.
    ● Tafuta msaada inapohitajika.
    ● Kujenga mahusiano yenye afya.
    ● Fanya maamuzi salama zaidi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Signs of Positive Mental Health
A young person may:
    ✓ Feel hopeful about the future.
    ✓ Enjoy spending time with friends and family.
    ✓ Manage stress effectively.
    ✓ Solve problems appropriately.
    ✓ Feel confident in their abilities.
    ✓ Recover from setbacks.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Dalili za Afya Bora ya Akili
Kijana anaweza:
    ✓ Kuhisi matumaini kuhusu mustakabali.
    ✓ Furahia kutumia muda na marafiki na familia.
    ✓ Dhibiti msongo wa mawazo kwa ufanisi.
    ✓ Suluhisha matatizo ipasavyo.
    ✓ Kujisikia mwenye ujasiri katika uwezo wake.
    ✓ Kupona kutokana na vikwazo.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `
Signs Someone May Be Struggling
Sometimes young people experience:
    ● Persistent sadness.
    ● Loss of interest in activities.
    ● Excessive worry.
    ● Difficulty sleeping.
    ● Changes in appetite.
    ● Frequent anger.
    ● Withdrawal from friends.
    ● Difficulty concentrating.
    ● Feeling hopeless.
    ● These feelings may need attention if they continue for a long time or interfere with daily life.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'MENTAL_HEALTH_BASICS',
      nodeKey: 'MENTAL_HEALTH_BASICS_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ishara za Mtu Anaweza Kuwa Anapambana
Wakati mwingine vijana hupata:
    ● Huzuni inayoendelea.
    ● Kupoteza hamu ya shughuli.
    ● Wasiwasi mwingi.
    ● Ugumu wa kulala.
    ● Mabadiliko ya hamu ya kula.
    ● Hasira ya mara kwa mara.
    ● Kujitenga na marafiki.
    ● Ugumu wa kuzingatia.
    ● Kuhisi kukata tamaa.
Hisia hizi zinaweza kuhitaji uangalifu ikiwa zitaendelea kwa muda mrefu au kuingilia maisha ya kila siku.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 6,
      isActive: true,
    },

    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Stress is the body's natural reaction to challenges, pressure, change, or situations that feel difficult to manage.
It can affect how a person thinks, feels, behaves, and even how their body functions.
Stress is not always bad. In some situations, it can motivate a person to prepare, focus, or take action.
However, when stress becomes too intense or lasts for a long time, it can affect a person's mental, emotional, and physical wellbeing.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_depression',
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Msongo wa mawazo ni mwitikio wa asili wa mwili kwa changamoto, shinikizo, mabadiliko, au hali ambazo huhisi ni vigumu kuzidhibiti.
Inaweza kuathiri jinsi mtu anavyofikiri, anavyohisi, anavyotenda, na hata jinsi mwili wake unavyofanya kazi.
Msongo wa mawazo si mbaya kila wakati.
Katika baadhi ya hali, unaweza kumtia moyo mtu kujiandaa, kuzingatia, au kuchukua hatua.
Hata hivyo, msongo wa mawazo unapozidi au kudumu kwa muda mrefu, unaweza kuathiri ustawi wa kiakili, kihisia, na kimwili wa mtu.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_depression',
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Many young people in Tanzania experience stress related to:
    ● National examinations.
    ● Academic performance.
    ● School fees.
    ● Family financial difficulties.
    ● Pressure to succeed.
    ● Gender expectations.
    ● Relationships.
    ● Social media comparison.
    ● Community stigma around discussing emotions.
These can affect a person's mental, emotional, and physical wellbeing.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vijana wengi nchini Tanzania hupata msongo wa mawazo unaohusiana na:
    ● Mitihani ya kitaifa.
    ● Utendaji wa kitaaluma.
    ● Ada za shule.
    ● Matatizo ya kifedha ya familia.
    ● Shinikizo la kufanikiwa.
    ● Matarajio ya kijinsia.
    ● Mahusiano.
    ● Ulinganisho wa mitandao ya kijamii.
    ● Unyanyapaa wa kijamii kuhusu kujadili hisia.
Haya yote huathiri ustawi wa kiakili, kihisia, na kimwili wa mtu.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `How Does Stress Feel?
Stress can affect people in different ways.
Physical signs may include:
    ● Headaches
    ● Fast heartbeat
    ● Sweating
    ● Stomach aches
    ● Tiredness
    ● Difficulty sleeping`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Msongo wa mawazo unahisije?
Msongo wa mawazo unaweza kuathiri watu kwa njia tofauti.
Dalili za kimwili zinaweza kujumuisha:
    ● Maumivu ya kichwa
    ● Mapigo ya moyo ya haraka
    ● Kutokwa na jasho
    ● Maumivu ya tumbo
    ● Uchovu
    ● Ugumu wa kulala`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Emotional signs may include:
    ● Feeling overwhelmed
    ● Irritability
    ● Frustration
    ● Anxiety
    ● Mood swings`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Dalili za kihisia zinaweza kujumuisha:
    ● Kuhisi kuzidiwa
    ● Kukasirika
    ● Kukata tamaa
    ● Wasiwasi
    ● Kubadilika kwa hisia`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `
Behavioral signs may include:
    ● Avoiding responsibilities
    ● Difficulty concentrating
    ● Crying more often
    ● Withdrawing from friends and family`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Dalili za kitabia zinaweza kujumuisha:
    ● Kuepuka majukumu
    ● Ugumu wa kuzingatia
    ● Kulia mara nyingi
    ● Kujitenga na marafiki na familia`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Some adolescents are told,
"Be strong." "Stop overthinking." "Other people have bigger problems."
While resilience is important, emotional struggles deserve understanding and support.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Baadhi ya vijana huambiwa, "Kuwa imara." "Acha kufikiria kupita kiasi." "Watu wengine wana matatizo makubwa."
Ingawa ustahimilivu ni muhimu, mapambano ya kihisia yanastahili uelewa na usaidizi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Healthy Ways to Manage Stress
    ● Talk to Someone: Sharing concerns with a trusted person can help.
    ● Break Problems into Smaller Steps: Large challenges often feel more manageable when divided into smaller tasks.
    ● Exercise: Physical activity can improve mood and reduce stress.
    ● Rest: Adequate sleep supports emotional wellbeing.
    ● Take Breaks: Short breaks during studying can improve focus.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Njia Bora za Kudhibiti Msongo wa Mawazo
    ● Zungumza na Mtu: Kushiriki wasiwasi na mtu unayemwamini kunaweza kusaidia.
    ● Gawanya Matatizo katika Hatua Ndogo: Changamoto kubwa mara nyingi huhisi kuwa rahisi kudhibitiwa zinapogawanywa katika kazi ndogo.
    ● Mazoezi: Shughuli za kimwili zinaweza kuboresha hisia na kupunguza msongo wa mawazo.
    ● Pumzika: Usingizi wa kutosha husaidia ustawi wa kihisia.
    ● Pumzika: Mapumziko mafupi wakati wa kusoma yanaweza kuboresha umakini.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Common Questions
Is it normal to feel sad sometimes?
Yes. Everyone experiences sadness occasionally.

Does having mental health challenges mean someone is weak?
No. Mental health challenges can affect anyone.

Can talking to someone help?
Yes. Sharing concerns with a trusted person can reduce emotional burden and help identify solutions.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'STRESS_MANAGEMENT',
      nodeKey: 'STRESS_MANAGEMENT_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Maswali ya Kawaida
Je, ni kawaida kuhisi huzuni wakati mwingine?
Ndiyo. Kila mtu hupata huzuni mara kwa mara.

Je, kuwa na changamoto za afya ya akili kunamaanisha mtu ni dhaifu?
Hapana. Changamoto za afya ya akili zinaweza kumuathiri mtu yeyote.

Je, kuzungumza na mtu kunaweza kusaidia?
Ndiyo. Kushiriki wasiwasi na mtu unayemwamini kunaweza kupunguza mzigo wa kihisia na kusaidia kutambua suluhisho.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'ANXIETY_AND_WORRY',
      nodeKey: 'ANXIETY_AND_WORRY_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Anxiety is a feeling of worry, fear, nervousness, or uneasiness about something that might happen now or in the future.
It is the body's natural response to situations that feel uncertain, challenging, or threatening.
Everyone experiences anxiety from time to time.
For example, feeling nervous before an examination, a job interview, a public speech, or receiving important results is normal.
However, when anxiety becomes very intense, happens frequently, or makes it difficult to study, sleep, socialize, or carry out daily activities, it may become a mental health concern that requires support.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'ANXIETY_AND_WORRY',
      nodeKey: 'ANXIETY_AND_WORRY_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Wasiwasi ni hisia ya wasiwasi, hofu, woga, au wasiwasi kuhusu jambo ambalo linaweza kutokea sasa au katika siku zijazo.
Ni mwitikio wa asili wa mwili kwa hali ambazo huhisi kutokuwa na uhakika, changamoto, au vitisho.
Kila mtu hupata wasiwasi mara kwa mara.
Kwa mfano, kuhisi woga kabla ya mtihani, mahojiano ya kazi, hotuba ya umma, au kupata matokeo muhimu ni kawaida.
Hata hivyo, wakati wasiwasi unakuwa mkubwa sana, hutokea mara kwa mara, au hufanya iwe vigumu kusoma, kulala, kujumuika, au kufanya shughuli za kila siku, inaweza kuwa tatizo la afya ya akili linalohitaji usaidizi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'ANXIETY_AND_WORRY',
      nodeKey: 'ANXIETY_AND_WORRY_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `How is Anxiety Different from Stress?
Although stress and anxiety are related, they are not the same. Stress usually happens because of a specific challenge or pressure.
Example: "I have exams next week and I am stressed."
Once the exams are over, the stress may reduce.

Anxiety can continue even when there is no immediate danger or problem.
Example: "I keep worrying that I will fail, even though I have studied and my exams are months away."

In simple terms:
Stress is often a response to a current challenge.
Anxiety is often excessive worry about what might happen`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'ANXIETY_AND_WORRY',
      nodeKey: 'ANXIETY_AND_WORRY_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Wasiwasi ni Tofauti Gani na Msongo wa Mawazo?
Ingawa msongo wa mawazo na wasiwasi vinahusiana, si sawa. Msongo wa mawazo kwa kawaida hutokea kwa sababu ya changamoto au shinikizo maalum.

Mfano: "Nina mitihani wiki ijayo na nina msongo wa mawazo."
Mara tu mitihani inapoisha, msongo wa mawazo unaweza kupungua.

Wasiwasi unaweza kuendelea hata wakati hakuna hatari au tatizo la haraka.
Mfano: "Ninaendelea kuwa na wasiwasi kwamba nitashindwa, ingawa nimesoma na mitihani yangu iko miezi kadhaa mbele."
Kwa maneno rahisi:

Msongo wa mawazo mara nyingi ni jibu la changamoto ya sasa.
Wasiwasi mara nyingi ni wasiwasi kupita kiasi kuhusu kinachoweza kutokea.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'ANXIETY_AND_WORRY',
      nodeKey: 'ANXIETY_AND_WORRY_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Anxiety can affect the body. Examples include:
    ● Fast heartbeat
    ● Sweating
    ● Shaking or trembling
    ● Shortness of breath
    ● Dizziness
    ● Headaches
    ● Stomach discomfort
    ● Difficulty sleeping`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'ANXIETY_AND_WORRY',
      nodeKey: 'ANXIETY_AND_WORRY_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Wasiwasi unaweza kuathiri mwili. Mifano ni pamoja na:
    ● Mapigo ya moyo ya haraka
    ● Kutokwa na jasho
    ● Kutetemeka au kutetemeka
    ● Kushindwa kupumua
    ● Kizunguzungu
    ● Maumivu ya kichwa
    ● Usumbufu wa tumbo
    ● Ugumu wa kulala`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'ANXIETY_AND_WORRY',
      nodeKey: 'ANXIETY_AND_WORRY_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `
Emotional Signs A person may feel:
    ● Feel constantly worried
    ● Feel nervous most of the time
    ● Fear something bad will happen
    ● Feel restless
    ● Feel overwhelmed`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'ANXIETY_AND_WORRY',
      nodeKey: 'ANXIETY_AND_WORRY_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ishara za Kihisia:
    ● Kuhisi wasiwasi kila wakati
    ● Kuhisi wasiwasi mara nyingi
    ● Kuogopa kitu kibaya kitatokea
    ● Kuhisi kutotulia
    ● Kuhisi kuzidiwa`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'ANXIETY_AND_WORRY',
      nodeKey: 'ANXIETY_AND_WORRY_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `
Behavioral Signs A person may:
    ● Avoid certain situations
    ● Have difficulty concentrating
    ● Seek constant reassurance
    ● Withdraw from friends and activities
    ● Struggle to make decisions`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'ANXIETY_AND_WORRY',
      nodeKey: 'ANXIETY_AND_WORRY_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ishara za Kitabia Mtu anaweza:
    ● Kuepuka hali fulani
    ● Kuwa na ugumu wa kuzingatia
    ● Kutafuta uhakikisho wa kila mara
    ● Kujitenga na marafiki na shughuli
    ● Kujitahidi kufanya maamuzi`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'SELF_ESTEEM',
      nodeKey: 'SELF_ESTEEM_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Self-esteem is the way a person thinks, feels, and values themselves.
It is the inner belief about one's worth, abilities, strengths, and importance as a human being.
In simple terms, self-esteem answers the question: "How do I feel about myself?"

Self-esteem influences how people make decisions, respond to challenges, build relationships, handle criticism, and pursue their goals.
It is not about believing you are better than others.
Rather, it is about recognizing that you have value, deserve respect, and are capable of learning and growing.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_ESTEEM',
      nodeKey: 'SELF_ESTEEM_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kujithamini ni jinsi mtu anavyofikiria, kuhisi, na kujithamini.
Ni imani ya ndani kuhusu thamani ya mtu, uwezo, nguvu, na umuhimu wake kama mwanadamu.
Kwa maneno rahisi, kujithamini hujibu swali: "Ninajihisi vipi?"

Kujithamini huathiri jinsi watu wanavyofanya maamuzi, kujibu changamoto, kujenga mahusiano, kushughulikia ukosoaji, na kufuata malengo yao.
Sio kuhusu kuamini wewe ni bora kuliko wengine.
Badala yake, ni kuhusu kutambua kwamba una thamani, unastahili heshima, na una uwezo wa kujifunza na kukua.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'SELF_ESTEEM',
      nodeKey: 'SELF_ESTEEM_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Why is Self-Esteem Important During Adolescence?
Adolescence is a period of rapid change.
Young people experience:
    ● Physical changes during puberty.
    ● New emotions and feelings.
    ● Increased independence.
    ● Academic pressure.
    ● Social comparisons.
    ● Questions about identity and belonging.
    ● New friendships and romantic relationships.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_ESTEEM',
      nodeKey: 'SELF_ESTEEM_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kwa Nini Kujithamini Ni Muhimu Wakati wa Ujana?
Ujana ni kipindi cha mabadiliko ya haraka. Vijana hupata uzoefu:
    ● Mabadiliko ya kimwili wakati wa kubalehe.
    ● Hisia na hisia mpya.
    ● Kuongezeka kwa uhuru.
    ● Shinikizo la kitaaluma.
    ● Ulinganisho wa kijamii.
    ● Maswali kuhusu utambulisho na kumilikiwa.
    ● Urafiki mpya na mahusiano ya kimapenzi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_ESTEEM',
      nodeKey: 'SELF_ESTEEM_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `
During this period, self-esteem can strongly influence how adolescents see themselves and the choices they make.
A young person with healthy self-esteem is more likely to:
    ● Believe in their abilities.
    ● Make safer decisions.
    ● Resist peer pressure.
    ● Build healthy relationships.
    ● Recover from setbacks.
    ● Seek help when needed.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_ESTEEM',
      nodeKey: 'SELF_ESTEEM_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Katika kipindi hiki, kujithamini kunaweza kuathiri sana jinsi vijana wanavyojiona na chaguzi wanazofanya.
Kijana mwenye kujithamini kiafya ana uwezekano mkubwa wa:
    ● Kuamini uwezo wao.
    ● Kufanya maamuzi salama zaidi.
    ● Pinga shinikizo la rika.
    ● Jenga mahusiano mazuri.
    ● Pona kutokana na vikwazo.
    ● Tafuta msaada inapohitajika.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'SELF_ESTEEM',
      nodeKey: 'SELF_ESTEEM_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `A young person with low self-esteem may:
    ● Constantly doubt themselves.
    ● Feel they are not good enough.
    ● Compare themselves negatively to others.
    ● Accept unhealthy treatment from others.
    ● Be more vulnerable to peer pressure and exploitation.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_ESTEEM',
      nodeKey: 'SELF_ESTEEM_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kijana mwenye kujithamini kidogo anaweza:
    ● Kujitilia shaka kila mara.
    ● Kuhisi kwamba hawatoshi.
    ● Kujilinganisha vibaya na wengine.
    ● Kubali matibabu yasiyofaa kutoka kwa wengine.
    ● Kuwa katika hatari zaidi ya shinikizo la rika na unyonyaji.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_ESTEEM',
      nodeKey: 'SELF_ESTEEM_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Self-esteem develops over time through experiences and interactions.
    ● Encouragement from teachers.
    ● Academic success.
    ● Participation in sports or clubs.
    ● Negative experiences:
    ● Bullying.
    ● Humiliation.
    ● Constant criticism.
    ● Repeated failure without support.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_ESTEEM',
      nodeKey: 'SELF_ESTEEM_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kujithamini hukua baada ya muda kupitia uzoefu na mwingiliano.
    ● Kutiwa moyo na walimu.
    ● Mafanikio ya kitaaluma.
    ● Kushiriki katika michezo au vilabu.
    ● Uzoefu hasi:
    ● Unyanyasaji.
    ● Kudhalilishwa.
    ● Ukosoaji wa mara kwa mara.
    ● Kushindwa mara kwa mara bila msaada.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Emotional wellbeing refers to a person's ability to understand, express, and manage their emotions in healthy ways while coping with everyday challenges.
It does not mean being happy all the time.
Everyone experiences different emotions such as happiness, sadness, anger, fear, excitement, disappointment, and loneliness.
Emotional wellbeing helps adolescents recognize these feelings and respond to them appropriately rather than reacting in harmful ways.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ustawi wa kihisia unamaanisha uwezo wa mtu kuelewa, kuelezea, na kudhibiti hisia zake kwa njia zenye afya huku akikabiliana na changamoto za kila siku.
Haimaanishi kuwa na furaha wakati wote.
Kila mtu hupata hisia tofauti kama vile furaha, huzuni, hasira, hofu, msisimko, kukata tamaa, na upweke.
Ustawi wa kihisia huwasaidia vijana kutambua hisia hizi na kuzijibu ipasavyo badala ya kuitikia kwa njia zenye madhara.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `During adolescence, young people experience major physical, emotional, and social changes that can affect how they feel about themselves and the world around them.
In Tanzania, many adolescents face challenges that can affect their emotional wellbeing, including examination pressure, family conflicts, financial difficulties, peer pressure, social media influences, romantic relationships, bullying, and uncertainty about the future.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Wakati wa ujana, vijana hupata mabadiliko makubwa ya kimwili, kihisia, na kijamii ambayo yanaweza kuathiri jinsi wanavyohisi kuhusu wao wenyewe na ulimwengu unaowazunguka.
Nchini Tanzania, vijana wengi wanakabiliwa na changamoto ambazo zinaweza kuathiri ustawi wao wa kihisia, ikiwa ni pamoja na shinikizo la uchunguzi, migogoro ya kifamilia, matatizo ya kifedha, shinikizo la rika, ushawishi wa mitandao ya kijamii, mahusiano ya kimapenzi, uonevu, na kutokuwa na uhakika kuhusu mustakabali.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `
When emotional wellbeing is strong, young people are better able to handle stress, build healthy relationships, make responsible decisions, and recover from disappointments.
Signs of good emotional wellbeing include feeling hopeful about the future, maintaining positive relationships, being able to express emotions, solving problems effectively, and seeking support when needed.

`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Wakati ustawi wa kihisia unapokuwa imara, vijana wanaweza kushughulikia msongo wa mawazo, kujenga mahusiano yenye afya, kufanya maamuzi yenye uwajibikaji, na kupona kutokana na kukata tamaa.
Ishara za ustawi mzuri wa kihisia ni pamoja na kuhisi matumaini kuhusu mustakabali, kudumisha mahusiano chanya, kuweza kuelezea hisia, kutatua matatizo kwa ufanisi, na kutafuta msaada inapohitajika.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Young people can strengthen their emotional wellbeing by talking to trusted adults, maintaining supportive friendships, engaging in sports or creative activities, getting enough sleep, and learning healthy ways to manage difficult emotions.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vijana wanaweza kuimarisha ustawi wao wa kihisia kwa kuzungumza na watu wazima wanaowaamini, kudumisha urafiki wa usaidizi, kushiriki katika michezo au shughuli za ubunifu, kupata usingizi wa kutosha, na kujifunza njia zenye afya za kudhibiti hisia ngumu.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `It is important to remember that experiencing sadness, frustration, or worry sometimes is normal.

However, when these feelings become overwhelming or persist for a long period, additional support may be needed.
Emotional wellbeing is an important part of overall health and deserves the same attention as physical wellbeing.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ni muhimu kukumbuka kwamba wakati mwingine kupata huzuni, kuchanganyikiwa, au wasiwasi ni kawaida.

Hata hivyo, hisia hizi zinapozidi au kuendelea kwa muda mrefu, usaidizi wa ziada unaweza kuhitajika.
Ustawi wa kihisia ni sehemu muhimu ya afya kwa ujumla na unastahili uangalifu sawa na ustawi wa kimwili.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Emotional wellbeing is the ability to understand, express, and manage emotions in healthy ways.
Everyone experiences emotions, Examples:
    ● Happiness.
    ● Sadness.
    ● Anger.
    ● Fear.
    ● Excitement.
    ● Disappointment.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ustawi wa kihisia ni uwezo wa kuelewa, kuelezea, na kudhibiti hisia kwa njia zenye afya.
Kila mtu hupata hisia, Mifano:
    ● Huzuni.
    ● Hasira.
    ● Hofu.
    ● Msisimko.
    ● Furaha.
    ● Kukata tamaa.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Healthy Emotional Skills
    ● Recognizing Feelings: Understanding what you are feeling.
    ● Expressing Feelings: Communicating emotions respectfully.
    ● Managing Reactions: Choosing healthy responses rather than harmful actions.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'EMOTIONAL_WELLBEING',
      nodeKey: 'EMOTIONAL_WELLBEING_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ustadi Bora wa Kihisia
    ● Kutambua Hisia: Kuelewa unachohisi.
    ● Kuonyesha Hisia: Kuwasiliana hisia kwa heshima.
    ● Kudhibiti Miitikio: Kuchagua majibu yenye afya badala ya vitendo vyenye madhara.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 7,
      isActive: true,
    },

    {
      subtopicCode: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Seeking mental health support means reaching out for help when emotional, psychological, or behavioral challenges become difficult to manage alone.
Just as people seek medical care when they are physically unwell, it is also important to seek support when experiencing emotional distress, persistent stress, anxiety, sadness, or other mental health concerns.
Asking for help is not a sign of weakness; it is a positive step toward improving wellbeing and finding solutions to challenges.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kutafuta msaada wa afya ya akili kunamaanisha kuomba au kufikia msaada pale ambapo changamoto za kihisia, kisaikolojia au kitabia zinakuwa ngumu kushughulikiwa peke yako.
Kama vile watu hutafuta huduma za afya wanapokuwa na matatizo ya kimwili, ni muhimu pia kutafuta msaada unapopitia msongo wa mawazo, huzuni ya muda mrefu, wasiwasi, au changamoto nyingine zinazohusiana na afya ya akili.
Kuomba msaada si ishara ya udhaifu; ni hatua muhimu na ya kujenga kuelekea kuboresha ustawi wako na kupata suluhisho la changamoto unazokabiliana nazo.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Many adolescents in Tanzania do not seek help because they fear being judged, misunderstood, or labeled by others.
Some worry that people will not take their concerns seriously, while others fear that personal information will not remain private.

These fears can prevent young people from accessing the support they need.
However, mental health challenges are common, and many people benefit from talking to someone they trust.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vijana wengi nchini Tanzania hawatafuti msaada kwa sababu wanaogopa kuhukumiwa, kutokueleweka, au kupewa majina na wengine.
Baadhi huogopa kwamba watu hawatachukulia matatizo yao kwa uzito, huku wengine wakihofia kwamba taarifa zao binafsi hazitabaki siri.

Hofu hizi zinaweza kuwazuia vijana kupata msaada wanaouhitaji.
Hata hivyo, changamoto za afya ya akili ni jambo la kawaida, na watu wengi hunufaika kwa kuzungumza na mtu wanayemwamini.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Adolescents should consider seeking support if they experience persistent sadness, overwhelming stress, excessive worry, difficulty sleeping, loss of interest in activities they once enjoyed, withdrawal from friends and family, or challenges that interfere with school performance and daily life.
Support can be sought from parents, guardians, teachers, school counselors, healthcare providers, religious leaders, or other trusted adults.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vijana wanapaswa kufikiria kutafuta msaada iwapo wanapata huzuni ya muda mrefu, msongo mkubwa wa mawazo, wasiwasi uliopitiliza, matatizo ya usingizi, kupoteza hamu ya kushiriki katika shughuli walizokuwa wakizifurahia, kujitenga na marafiki pamoja na familia, au changamoto zinazovuruga masomo yao na maisha ya kila siku.
Msaada unaweza kupatikana kutoka kwa wazazi, walezi, walimu, washauri wa shule, wahudumu wa afya, viongozi wa dini, au watu wengine wazima wanaoaminika.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `
During difficult times such as family conflict, bereavement, violence, abuse, pregnancy, or major life changes, seeking support can be especially important.
Early support can help prevent challenges from becoming more serious and can improve emotional wellbeing, confidence, coping skills, and overall quality of life.
No young person should feel that they must face their struggles alone..`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Katika nyakati ngumu kama migogoro ya kifamilia, kufiwa na mpendwa, vurugu, unyanyasaji, ujauzito, au mabadiliko makubwa ya maisha, kutafuta msaada huwa muhimu zaidi.
Kupata msaada mapema kunaweza kusaidia kuzuia changamoto zisizidi kuwa kubwa na kunaweza kuboresha ustawi wa kihisia, kujiamini, uwezo wa kukabiliana na changamoto, pamoja na ubora wa maisha kwa ujumla.
Hakuna kijana anayepaswa kuhisi kwamba lazima akabiliane na matatizo yake peke yake.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `When Should Someone Seek Help?
Seek support if:
    * Sadness lasts for weeks.
    * Anxiety interferes with daily activities.
    * Stress feels overwhelming.
    * There are thoughts of self-harm.
    * School performance suddenly declines.
    * There is withdrawal from family and friends.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'SEEKING_MENTAL_HEALTH_SUPPORT',
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ni Lini Mtu Anapaswa Kutafuta Msaada?
Tafuta msaada ikiwa:
    * Huzuni unaendelea kwa wiki kadhaa bila kupungua.
    * Wasiwasi unaathiri shughuli za kila siku.
    * Msongo wa mawazo unahisi kuwa mkubwa kupita kiasi na mgumu kuhimili.
    * Kuna mawazo ya kujidhuru au kujiumiza.
    * Ufaulu wa shule unapungua ghafla.
    * Mtu anaanza kujitenga na familia pamoja na marafiki.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },
  ],

  contentNodeOptions: [
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_01',
      optionValue: 'normal_emotions',
      labelEn: 'Normal emotions',
      labelSw: 'Hisia za kawaida',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_01',
      optionValue: 'why_it_matters',
      labelEn: 'Why it matters',
      labelSw: 'Umuhimu wake',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_01',
      optionValue: 'positive_signs',
      labelEn: 'Positive signs',
      labelSw: 'Dalili nzuri',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_02',
      optionValue: 'why_it_matters',
      labelEn: 'Why it matters',
      labelSw: 'Umuhimu wake',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_02',
      optionValue: 'positive_signs',
      labelEn: 'Positive signs',
      labelSw: 'Dalili nzuri',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_02',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_03',
      optionValue: 'how_it_helps',
      labelEn: 'How it helps',
      labelSw: 'Inavyosaidia',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_03',
      optionValue: 'positive_signs',
      labelEn: 'Positive signs',
      labelSw: 'Dalili nzuri',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_03',
      optionValue: 'stress',
      labelEn: 'Stress',
      labelSw: 'Msongo',
      nextNodeKey: 'STRESS_MANAGEMENT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_04',
      optionValue: 'positive_signs',
      labelEn: 'Positive signs',
      labelSw: 'Dalili nzuri',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_04',
      optionValue: 'struggling_signs',
      labelEn: 'Struggling signs',
      labelSw: 'Dalili za changamoto',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_04',
      optionValue: 'stress',
      labelEn: 'Stress',
      labelSw: 'Msongo',
      nextNodeKey: 'STRESS_MANAGEMENT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_05',
      optionValue: 'struggling_signs',
      labelEn: 'Struggling signs',
      labelSw: 'Dalili za changamoto',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_05',
      optionValue: 'stress',
      labelEn: 'Stress',
      labelSw: 'Msongo',
      nextNodeKey: 'STRESS_MANAGEMENT_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_05',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_06',
      optionValue: 'stress',
      labelEn: 'Stress',
      labelSw: 'Msongo',
      nextNodeKey: 'STRESS_MANAGEMENT_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_06',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MENTAL_HEALTH_BASICS_06',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'STRESS_MANAGEMENT_01',
      optionValue: 'stress_sources',
      labelEn: 'What causes stress?',
      labelSw: 'Chanzo cha msongo?',
      nextNodeKey: 'STRESS_MANAGEMENT_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_01',
      optionValue: 'physical_signs',
      labelEn: 'Physical signs',
      labelSw: 'Dalili za mwili',
      nextNodeKey: 'STRESS_MANAGEMENT_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_01',
      optionValue: 'what_can_help',
      labelEn: 'What can help?',
      labelSw: 'Nini husaidia?',
      nextNodeKey: 'STRESS_MANAGEMENT_08',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_02',
      optionValue: 'physical_signs',
      labelEn: 'Physical signs',
      labelSw: 'Dalili za mwili',
      nextNodeKey: 'STRESS_MANAGEMENT_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_02',
      optionValue: 'what_can_help',
      labelEn: 'What can help?',
      labelSw: 'Nini husaidia?',
      nextNodeKey: 'STRESS_MANAGEMENT_08',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_02',
      optionValue: 'stress_questions',
      labelEn: 'Common questions',
      labelSw: 'Maswali ya kawaida',
      nextNodeKey: 'STRESS_MANAGEMENT_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_03',
      optionValue: 'emotional_signs',
      labelEn: 'Emotional signs',
      labelSw: 'Dalili za hisia',
      nextNodeKey: 'STRESS_MANAGEMENT_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_03',
      optionValue: 'behavior_signs',
      labelEn: 'Behavior signs',
      labelSw: 'Dalili za tabia',
      nextNodeKey: 'STRESS_MANAGEMENT_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_03',
      optionValue: 'what_can_help',
      labelEn: 'What can help?',
      labelSw: 'Nini husaidia?',
      nextNodeKey: 'STRESS_MANAGEMENT_08',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_06',
      optionValue: 'behavior_signs',
      labelEn: 'Behavior signs',
      labelSw: 'Dalili za tabia',
      nextNodeKey: 'STRESS_MANAGEMENT_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_06',
      optionValue: 'what_can_help',
      labelEn: 'What can help?',
      labelSw: 'Nini husaidia?',
      nextNodeKey: 'STRESS_MANAGEMENT_08',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_06',
      optionValue: 'stress_questions',
      labelEn: 'Common questions',
      labelSw: 'Maswali ya kawaida',
      nextNodeKey: 'STRESS_MANAGEMENT_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_07',
      optionValue: 'unhelpful_advice',
      labelEn: 'Unhelpful advice',
      labelSw: 'Ushauri usiofaa',
      nextNodeKey: 'STRESS_MANAGEMENT_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_07',
      optionValue: 'what_can_help',
      labelEn: 'What can help?',
      labelSw: 'Nini husaidia?',
      nextNodeKey: 'STRESS_MANAGEMENT_08',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_07',
      optionValue: 'anxiety',
      labelEn: 'Anxiety',
      labelSw: 'Wasiwasi',
      nextNodeKey: 'ANXIETY_AND_WORRY_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_04',
      optionValue: 'what_can_help',
      labelEn: 'What can help?',
      labelSw: 'Nini husaidia?',
      nextNodeKey: 'STRESS_MANAGEMENT_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_04',
      optionValue: 'stress_questions',
      labelEn: 'Common questions',
      labelSw: 'Maswali ya kawaida',
      nextNodeKey: 'STRESS_MANAGEMENT_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_04',
      optionValue: 'anxiety',
      labelEn: 'Anxiety',
      labelSw: 'Wasiwasi',
      nextNodeKey: 'ANXIETY_AND_WORRY_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_08',
      optionValue: 'stress_questions',
      labelEn: 'Common questions',
      labelSw: 'Maswali ya kawaida',
      nextNodeKey: 'STRESS_MANAGEMENT_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_08',
      optionValue: 'anxiety',
      labelEn: 'Anxiety',
      labelSw: 'Wasiwasi',
      nextNodeKey: 'ANXIETY_AND_WORRY_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_08',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_05',
      optionValue: 'anxiety',
      labelEn: 'Anxiety',
      labelSw: 'Wasiwasi',
      nextNodeKey: 'ANXIETY_AND_WORRY_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_05',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'STRESS_MANAGEMENT_05',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'ANXIETY_AND_WORRY_01',
      optionValue: 'stress_vs_anxiety',
      labelEn: 'Stress or anxiety?',
      labelSw: 'Msongo au wasiwasi?',
      nextNodeKey: 'ANXIETY_AND_WORRY_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_01',
      optionValue: 'body_signs',
      labelEn: 'Body signs',
      labelSw: 'Dalili za mwili',
      nextNodeKey: 'ANXIETY_AND_WORRY_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_01',
      optionValue: 'emotional_signs',
      labelEn: 'Emotional signs',
      labelSw: 'Dalili za hisia',
      nextNodeKey: 'ANXIETY_AND_WORRY_04',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_02',
      optionValue: 'body_signs',
      labelEn: 'Body signs',
      labelSw: 'Dalili za mwili',
      nextNodeKey: 'ANXIETY_AND_WORRY_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_02',
      optionValue: 'emotional_signs',
      labelEn: 'Emotional signs',
      labelSw: 'Dalili za hisia',
      nextNodeKey: 'ANXIETY_AND_WORRY_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_02',
      optionValue: 'stress',
      labelEn: 'Stress',
      labelSw: 'Msongo',
      nextNodeKey: 'STRESS_MANAGEMENT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_03',
      optionValue: 'emotional_signs',
      labelEn: 'Emotional signs',
      labelSw: 'Dalili za hisia',
      nextNodeKey: 'ANXIETY_AND_WORRY_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_03',
      optionValue: 'behavior_signs',
      labelEn: 'Behavior signs',
      labelSw: 'Dalili za tabia',
      nextNodeKey: 'ANXIETY_AND_WORRY_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_03',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_04',
      optionValue: 'behavior_signs',
      labelEn: 'Behavior signs',
      labelSw: 'Dalili za tabia',
      nextNodeKey: 'ANXIETY_AND_WORRY_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_04',
      optionValue: 'self_esteem',
      labelEn: 'Self-esteem',
      labelSw: 'Kujithamini',
      nextNodeKey: 'SELF_ESTEEM_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_04',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_05',
      optionValue: 'self_esteem',
      labelEn: 'Self-esteem',
      labelSw: 'Kujithamini',
      nextNodeKey: 'SELF_ESTEEM_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_05',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ANXIETY_AND_WORRY_05',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'SELF_ESTEEM_01',
      optionValue: 'teen_changes',
      labelEn: 'The importance',
      labelSw: 'Umuhimu wake',
      nextNodeKey: 'SELF_ESTEEM_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_01',
      optionValue: 'healthy_esteem',
      labelEn: 'Healthy esteem',
      labelSw: 'Kujithamini vizuri',
      nextNodeKey: 'SELF_ESTEEM_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_01',
      optionValue: 'low_self_esteem',
      labelEn: 'Low self-esteem',
      labelSw: 'Kujithamini kidogo',
      nextNodeKey: 'SELF_ESTEEM_03',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_02',
      optionValue: 'healthy_esteem',
      labelEn: 'Healthy esteem',
      labelSw: 'Kujithamini vizuri',
      nextNodeKey: 'SELF_ESTEEM_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_02',
      optionValue: 'low_self_esteem',
      labelEn: 'Low self-esteem',
      labelSw: 'Kujithamini kidogo',
      nextNodeKey: 'SELF_ESTEEM_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_02',
      optionValue: 'emotional_wellbeing',
      labelEn: 'Emotional wellbeing',
      labelSw: 'Ustawi wa hisia',
      nextNodeKey: 'EMOTIONAL_WELLBEING_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_04',
      optionValue: 'low_self_esteem',
      labelEn: 'Low self-esteem',
      labelSw: 'Kujithamini kidogo',
      nextNodeKey: 'SELF_ESTEEM_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_04',
      optionValue: 'what_shapes_it',
      labelEn: 'What shapes it?',
      labelSw: 'Naanzaje kujithamini?',
      nextNodeKey: 'SELF_ESTEEM_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_04',
      optionValue: 'emotional_wellbeing',
      labelEn: 'Emotional wellbeing',
      labelSw: 'Ustawi wa hisia',
      nextNodeKey: 'EMOTIONAL_WELLBEING_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_03',
      optionValue: 'what_shapes_it',
      labelEn: 'What shapes it?',
      labelSw: 'Naanzaje kujithamini?',
      nextNodeKey: 'SELF_ESTEEM_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_03',
      optionValue: 'emotional_wellbeing',
      labelEn: 'Emotional wellbeing',
      labelSw: 'Ustawi wa hisia',
      nextNodeKey: 'EMOTIONAL_WELLBEING_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_03',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_05',
      optionValue: 'emotional_wellbeing',
      labelEn: 'Emotional wellbeing',
      labelSw: 'Ustawi wa hisia',
      nextNodeKey: 'EMOTIONAL_WELLBEING_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_05',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_ESTEEM_05',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'EMOTIONAL_WELLBEING_01',
      optionValue: 'what_affects_feelings',
      labelEn: 'What affects it?',
      labelSw: 'Nini huathiri?',
      nextNodeKey: 'EMOTIONAL_WELLBEING_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_01',
      optionValue: 'strong_wellbeing',
      labelEn: 'Strong wellbeing',
      labelSw: 'Ustawi imara',
      nextNodeKey: 'EMOTIONAL_WELLBEING_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_01',
      optionValue: 'what_can_help',
      labelEn: 'What can help?',
      labelSw: 'Nini husaidia?',
      nextNodeKey: 'EMOTIONAL_WELLBEING_03',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_02',
      optionValue: 'strong_wellbeing',
      labelEn: 'Strong wellbeing',
      labelSw: 'Ustawi imara',
      nextNodeKey: 'EMOTIONAL_WELLBEING_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_02',
      optionValue: 'what_can_help',
      labelEn: 'What can help?',
      labelSw: 'Nini husaidia?',
      nextNodeKey: 'EMOTIONAL_WELLBEING_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_02',
      optionValue: 'emotion_examples',
      labelEn: 'Emotion examples',
      labelSw: 'Mifano ya hisia',
      nextNodeKey: 'EMOTIONAL_WELLBEING_04',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_05',
      optionValue: 'what_can_help',
      labelEn: 'What can help?',
      labelSw: 'Nini husaidia?',
      nextNodeKey: 'EMOTIONAL_WELLBEING_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_05',
      optionValue: 'emotion_examples',
      labelEn: 'Emotion examples',
      labelSw: 'Mifano ya hisia',
      nextNodeKey: 'EMOTIONAL_WELLBEING_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_05',
      optionValue: 'self_esteem',
      labelEn: 'Self-esteem',
      labelSw: 'Kujithamini',
      nextNodeKey: 'SELF_ESTEEM_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_03',
      optionValue: 'need_support',
      labelEn: 'Needing support',
      labelSw: 'Kuhitaji msaada',
      nextNodeKey: 'EMOTIONAL_WELLBEING_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_03',
      optionValue: 'emotional_skills',
      labelEn: 'Emotional skills',
      labelSw: 'Ujuzi wa hisia',
      nextNodeKey: 'EMOTIONAL_WELLBEING_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_03',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_06',
      optionValue: 'emotional_skills',
      labelEn: 'Emotional skills',
      labelSw: 'Ujuzi wa hisia',
      nextNodeKey: 'EMOTIONAL_WELLBEING_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_06',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_06',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_04',
      optionValue: 'emotional_skills',
      labelEn: 'Emotional skills',
      labelSw: 'Ujuzi wa hisia',
      nextNodeKey: 'EMOTIONAL_WELLBEING_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_04',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_04',
      optionValue: 'mental_health_basics',
      labelEn: 'Mental health',
      labelSw: 'Afya ya akili',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_07',
      optionValue: 'get_support',
      labelEn: 'Getting support',
      labelSw: 'Kupata msaada',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_07',
      optionValue: 'mental_health_basics',
      labelEn: 'Mental health',
      labelSw: 'Afya ya akili',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EMOTIONAL_WELLBEING_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      optionValue: 'why_people_wait',
      labelEn: 'Why people wait',
      labelSw: 'Kwa nini husubiri?',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      optionValue: 'where_to_get_help',
      labelEn: 'Where to get help',
      labelSw: 'Msaada upo wapi?',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_01',
      optionValue: 'when_get_help',
      labelEn: 'When to get help',
      labelSw: 'Nipate msaada lini?',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_04',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_02',
      optionValue: 'where_to_get_help',
      labelEn: 'Where to get help',
      labelSw: 'Msaada upo wapi?',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_02',
      optionValue: 'when_get_help',
      labelEn: 'When to get help',
      labelSw: 'Nipate msaada lini?',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_02',
      optionValue: 'early_support',
      labelEn: 'Early support',
      labelSw: 'Msaada wa mapema',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_03',
      optionValue: 'early_support',
      labelEn: 'Early support',
      labelSw: 'Msaada wa mapema',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_03',
      optionValue: 'when_get_help',
      labelEn: 'When to get help',
      labelSw: 'Nipate msaada lini?',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_05',
      optionValue: 'when_get_help',
      labelEn: 'When to get help',
      labelSw: 'Nipate msaada lini?',
      nextNodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_05',
      optionValue: 'mental_health_basics',
      labelEn: 'Mental health',
      labelSw: 'Afya ya akili',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_05',
      optionValue: 'stress',
      labelEn: 'Stress',
      labelSw: 'Msongo',
      nextNodeKey: 'STRESS_MANAGEMENT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_04',
      optionValue: 'mental_health_basics',
      labelEn: 'Mental health',
      labelSw: 'Afya ya akili',
      nextNodeKey: 'MENTAL_HEALTH_BASICS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_04',
      optionValue: 'stress',
      labelEn: 'Stress',
      labelSw: 'Msongo',
      nextNodeKey: 'STRESS_MANAGEMENT_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEEKING_MENTAL_HEALTH_SUPPORT_04',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
  ],
};
