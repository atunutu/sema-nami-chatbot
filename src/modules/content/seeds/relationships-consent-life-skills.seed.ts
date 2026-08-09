import { InputType } from '../../../common/enums/input-type.enum';
import { Language } from '../../../common/enums/language.enum';
import { NodeType } from '../../../common/enums/node-type.enum';

export const relationshipsConsentLifeSkillsSeed = {
  category: {
    code: 'RELATIONSHIPS_CONSENT_LIFE_SKILLS',
    titleEn: 'Relationships, and Consent',
    titleSw: 'Mahusiano na Ridhaa',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 4,
    isActive: true,
  },

  topic: {
    code: 'RELATIONSHIPS_CONSENT_LIFE_SKILLS',
    titleEn: 'Relationships, and Consent',
    titleSw: 'Mahusiano na Ridhaa',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 1,
    isActive: true,
  },

  subtopics: [
    {
      code: 'UNHEALTHY_RELATIONSHIPS',
      titleEn: 'Unhealthy Relationships',
      titleSw: 'Mahusiano yasiyo salama',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 1,
      isActive: true,
    },
    {
      code: 'HEALTHY_RELATIONSHIPS',
      titleEn: 'Healthy Relationships',
      titleSw: 'Mahusiano salama',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 2,
      isActive: true,
    },
    {
      code: 'UNDERSTANDING_CONSENT',
      titleEn: 'Understanding consent',
      titleSw: 'Kuelewa ridhaa',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 3,
      isActive: true,
    },
    {
      code: 'RESPECT_AND_BOUNDARIES',
      titleEn: 'Respect and Boundaries',
      titleSw: 'Heshima na mipaka',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 4,
      isActive: true,
    },
    {
      code: 'COMMUNICATION_SKILLS',
      titleEn: 'Communication skills',
      titleSw: 'Ujuzi wa Mawasiliano',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 5,
      isActive: true,
    },
    {
      code: 'DECISION_MAKING_SKILLS',
      titleEn: 'Decision Making Skills',
      titleSw: 'Ujuzi wa kufanya maamuzi',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 6,
      isActive: true,
    },
    {
      code: 'NEGOTIATION_SKILLS',
      titleEn: 'Negotiation Skills',
      titleSw: 'Ujuzi wa majadiliano',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 7,
      isActive: true,
    },
    {
      code: 'PEER_PRESSURE',
      titleEn: 'Peer Pressure',
      titleSw: 'Shinikizo la Rika',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 8,
      isActive: true,
    },
    {
      code: 'REFUSING_UNWANTED_SEXUAL_PRESSURE',
      titleEn: 'Refusing Sexual Pressure',
      titleSw: 'Kukataa shinikizo la ngono',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 9,
      isActive: true,
    },
    {
      code: 'GOAL_SETTING_AND_FUTURE_PLANNING',
      titleEn: 'Goal Setting and Planning',
      titleSw: 'Kuweka Malengo ya maisha',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 10,
      isActive: true,
    },
    {
      code: 'SELF_IDENTIFICATION',
      titleEn: 'Self-Identification',
      titleSw: 'Kujitambua',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 11,
      isActive: true,
    },
  ],

  contentNodes: [
    // add in chunks
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Knowing what an unhealthy relationship looks like is just as important as knowing what a healthy one looks like. Recognizing the warning signs can help you protect yourself and seek support when needed.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kujua uhusiano usio na afya ni muhimu kama vile kujua uhusiano wenye afya unaonekanaje. Kutambua ishara za onyo kunaweza kukusaidia kujilinda na kutafuta msaada inapohitajika.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `An unhealthy relationship is one where a person feels unsafe, disrespected, controlled, or afraid. It may involve dishonesty, pressure, manipulation, or abuse instead of trust, kindness, and mutual respect.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Uhusiano usio na afya ni ule ambapo mtu huhisi hana usalama, haheshimiwi, hadhibitiwi, au anaogopa. Huenda ukahusisha kutokuwa mwaminifu, shinikizo, udanganyifu, au unyanyasaji badala ya uaminifu, wema, na heshima ya pande zote.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Signs of an Unhealthy Relationship

  ● Disrespect
One person ignores or dismisses the other's feelings, opinions, choices, or boundaries.

Examples:
  ● Insulting or humiliating someone.
  ● Refusing to accept "no" as an answer.
  ● Forcing someone to do things they don't want to do.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ishara za Uhusiano Usio na Afya

  ● Kutoheshimu
Mtu mmoja hupuuza au kupuuza hisia, maoni, chaguo, au mipaka ya mwingine.

Mifano:
  ● Kumtukana au kumdhalilisha mtu.
  ● Kukataa kukubali "hapana" kama jibu.
  ● Kumlazimisha mtu kufanya mambo ambayo hawataki kufanya.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Dishonesty and Broken Trust
Trust is damaged when people are dishonest or fail to respect each other's privacy.

Examples:
  ● Lying frequently.
  ● Breaking promises.
  ● Sharing someone's private information without permission.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ukosefu wa Uaminifu na Kuvunjika kwa Uaminifu
Uaminifu huharibika wakati watu si waaminifu au wanaposhindwa kuheshimu faragha ya kila mmoja.

Mifano:
  ● Kusema uongo mara kwa mara.
  ● Kuvunja ahadi.
  ● Kushiriki taarifa za faragha za mtu bila ruhusa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Poor Communication
Problems are handled through shouting, insults, threats, or silence instead of respectful discussion.

Examples:
  ● Yelling during disagreements.
  ● Ignoring someone's feelings.
  ● Using hurtful words instead of talking calmly.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mawasiliano Duni
Matatizo hushughulikiwa kupitia kupiga kelele, matusi, vitisho, au ukimya badala ya majadiliano ya heshima.

Mifano:
  ● Kupiga kelele wakati wa kutokubaliana.
  ● Kupuuza hisia za mtu.
  ● Kutumia maneno ya kuumiza badala ya kuzungumza kwa utulivu.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Control and Unequal Power
One person tries to control the other's decisions, friendships, appearance, or daily activities.

Examples:
  ● Telling someone who they can talk to or spend time with.
  ● Checking someone's phone or social media without permission.
  ● Using threats, fear, or guilt to get what they want.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Udhibiti na Nguvu Isiyo sawa
Mtu mmoja anajaribu kudhibiti maamuzi ya mwingine, urafiki, mwonekano, au shughuli za kila siku.

Mifano:
  ● Kumwambia mtu ambaye anaweza kuzungumza naye au kutumia muda naye.
  ● Kuangalia simu ya mtu au mitandao ya kijamii bila ruhusa.
  ● Kutumia vitisho, hofu, au hatia ili kupata anachotaka.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Lack of Support
Instead of encouraging each other, one person puts the other down or prevents them from reaching their goals.

Examples:
  ● Discouraging someone from going to school.
  ● Mocking or criticizing their dreams.
  ● Making them feel guilty for succeeding.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ukosefu wa Usaidizi
Badala ya kutiana moyo, mtu mmoja humdharau mwingine au kumzuia kufikia malengo yake.

Mifano:
  ● Kumkatisha tamaa mtu kwenda shule.
  ● Kudhihaki au kukosoa ndoto zake.
  ● Kumfanya ahisi hatia kwa kufanikiwa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Remember, a healthy relationship should never make you feel afraid, pressured, controlled, or worthless. You deserve relationships where you are respected, listened to, and supported.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kumbuka, uhusiano mzuri haupaswi kamwe kukufanya uhisi hofu, shinikizo, udhibiti, au kutokuwa na thamani. Unastahili mahusiano ambapo unaheshimiwa, unasikilizwa, na kuungwa mkono.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you notice these warning signs in your own relationship or someone else's, talk to a trusted adult, parent, guardian, teacher, school counselor, healthcare provider, or another trusted person. Seeking help is a positive step toward protecting your wellbeing and safety.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ukiona ishara hizi za onyo katika uhusiano wako au wa mtu mwingine, zungumza na mtu mzima unayemwamini, mzazi, mlezi, mwalimu, mshauri wa shule, mtoa huduma ya afya, au mtu mwingine unayemwamini. Kutafuta msaada ni hatua nzuri kuelekea kulinda ustawi na usalama wako.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_10',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Would you like to learn more about recognizing emotional abuse, setting healthy boundaries, leaving unhealthy relationships, or where to seek help? I'm here to support you.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_10',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ungependa kujifunza zaidi kuhusu kutambua unyanyasaji wa kihisia, kuweka mipaka inayofaa, kuacha mahusiano yasiyofaa, au wapi pa kutafuta msaada? Niko hapa kukusaidia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Healthy relationships help us feel safe, respected, and supported. They can be with friends, family members, classmates, romantic partners, or people in our community.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mahusiano yenye afya hutusaidia kujisikia salama, kuheshimiwa, na kuungwa mkono. Yanaweza kuwa na marafiki, wanafamilia, wanafunzi wenza, wapenzi, au watu katika jamii yetu.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `A healthy relationship is built on respect, honesty, trust, kindness, and care. In a healthy relationship, both people feel valued, listened to, and free to be themselves.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mahusiano yenye afya hujengwa juu ya heshima, uaminifu, uaminifu, wema, na utunzaji. Katika uhusiano wenye afya, watu wote wawili huhisi wanathaminiwa, wanasikilizwa, na wako huru kuwa wao wenyewe.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Characteristics of a Healthy Relationship
Respect
  ● Each person respects the other's feelings, opinions, choices, beliefs, and boundaries.

Examples:
  ● Listening when someone is speaking.
  ● Accepting "no" as an answer.
  ● Not forcing someone to do something they don't want to do.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Sifa za Uhusiano Wenye Afya
Heshima
  ● Kila mtu huheshimu hisia, maoni, chaguo, imani, na mipaka ya mwenzake.

Mifano:
  ● Kusikiliza mtu anapozungumza.
  ● Kukubali "hapana" kama jibu.
  ● Kutokumlazimisha mtu kufanya kitu ambacho hataki kufanya.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Trust
  ● Healthy relationships are built on honesty and trust.

Examples:
  ● Keeping promises.
  ● Being truthful.
  ● Respecting each other's privacy and not sharing personal information without permission.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kuaminiana
  ● Mahusiano yenye afya hujengwa juu ya uaminifu na uaminifu.

Mifano:
  ● Kutimiza ahadi.
  ● Kuwa mkweli.
  ● Kuheshimu faragha ya kila mmoja na kutoshiriki taarifa binafsi bila ruhusa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Good Communication
  ● People talk openly, honestly, and respectfully.

Examples:
  ● Expressing feelings calmly.
  ● Asking questions when something is unclear.
  ● Solving disagreements through respectful discussion.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mawasiliano Mazuri
  ● Watu huzungumza waziwazi, kwa uaminifu, na kwa heshima.

Mifano:
  ● Kuonyesha hisia kwa utulivu.
  ● Kuuliza maswali wakati jambo halieleweki.
  ● Kutatua kutokubaliana kupitia majadiliano ya heshima.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Equality
  ● Both people are equally important, and no one controls or threatens the other.

Examples:
  ● Making decisions together.
  ● Respecting each other's opinions.
  ● Treating each other fairly.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Usawa
  ● Watu wote wawili ni muhimu sawa, na hakuna anayemdhibiti au kumtishia mwenzake.

Mifano:
  ● Kufanya maamuzi pamoja.
  ● Kuheshimu maoni ya kila mmoja.
  ● Kutendeana kwa haki.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Support
  ● People encourage each other to grow, learn, and make healthy choices.

Examples:
  ● Supporting education and personal goals.
  ● Encouraging positive decisions.
  ● Celebrating each other's achievements.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kusaidiana
  ● Watu huhimizana kukua, kujifunza, na kufanya maamuzi yenye afya.

Mifano:
  ● Kuunga mkono elimu na malengo binafsi.
  ● Kuhimiza maamuzi chanya.
  ● Kusherehekea mafanikio ya kila mmoja.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Remember, a healthy relationship should make you feel respected, safe, supported, and able to be yourself. If someone controls you, threatens you, or makes you feel afraid, that is not a healthy relationship.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kumbuka, uhusiano mzuri unapaswa kukufanya uhisi unaheshimiwa, salama, unaungwa mkono, na unaweza kuwa wewe mwenyewe. Ikiwa mtu anakudhibiti, anakutishia, au anakufanya uhisi hofu, huo si uhusiano mzuri.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Would you like to learn more about unhealthy relationships, setting boundaries, communication skills, or recognizing warning signs of abuse? I'm here to help.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ungependa kujifunza zaidi kuhusu mahusiano yasiyo na afya, kuweka mipaka, ujuzi wa mawasiliano, au kutambua dalili za onyo za unyanyasaji? Niko hapa kukusaidia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Unsafe relationships - how to recognize them
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mahusiano yasiyo salama - jinsi ya kuyatambua
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● In an unsafe relationship, one person may control, threaten, or harm the other.
● Warning signs include excessive jealousy, pressure, verbal abuse, and even physical violence.
● No one deserves to be controlled or harmed in any relationship.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● Katika mahusiano yasiyo salama, mtu mmoja anaweza kudhibiti, kutishia, au kudhuru mwenzake.
● Ishara za onyo ni pamoja na wivu wa kupindukia, shinikizo, matusi, na hata ukatili wa kimwili.
● Hakuna anayestahili kudhibitiwa au kudhuriwa katika uhusiano wowote.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `True or False: Frequent jealousy is a sign of true love.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kweli au Uongo: Wivu wa mara kwa mara ni ishara ya upendo wa kweli.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Correct: B - False. Excessive jealousy is a sign of control, not love.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Sahihi: B - Uongo. Wivu wa kupindukia ni ishara ya udhibiti, si upendo.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Not quite.

Correct: B - False. Excessive jealousy is a sign of control, not love.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Si sahihi.

Sahihi: B - Uongo. Wivu wa kupindukia ni ishara ya udhibiti, si upendo.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Have you ever seen these signs in a relationship with someone you know?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Umeshawahi kuona ishara hizi katika uhusiano wa mtu unayemjua?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Do you feel like you're in an unsafe relationship? We're here to listen and help.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Unahisi uko katika uhusiano usio salama? Tuko hapa kukusikiliza na kukusaidia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `What do good relationships look like?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mahusiano mazuri yanaonekanaje?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● Respect, trust, good communication, and equality are the pillars of a good relationship.
● People in a good relationship listen to each other, take "no" for an answer, and don't force anything on each other.
● A good relationship makes you feel safe and valued, not controlled.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● Heshima, uaminifu, mawasiliano mazuri, na usawa ndizo nguzo za uhusiano mzuri.
● Watu katika uhusiano mzuri husikilizana, hukubali "hapana" kama jibu, na hawalazimishani chochote.
● Uhusiano mzuri hukufanya ujisikie salama na kuthaminiwa, si kudhibitiwa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `True or False: Gifts are proof of true love.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kweli au Uongo: Zawadi ni uthibitisho wa upendo wa kweli.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Correct: B - False. Respect and trust are the most important.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Sahihi: B - Uongo. Heshima na uaminifu ndiyo muhimu zaidi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Not quite.

Correct: B - False. Respect and trust are the most important.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Si sahihi.

Sahihi: B - Uongo. Heshima na uaminifu ndiyo muhimu zaidi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `What is most important to you in a relationship?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ni nini muhimu zaidi kwako katika uhusiano?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Do you have a question about your relationship? We're here to help.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Una swali kuhusu uhusiano wako? Tuko hapa kusaidia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'RELATIONSHIPS_OVAH_CONTACT_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Please contact OVAH through:
Phone/WhatsApp: 0652 522 358
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 108,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'RELATIONSHIPS_OVAH_CONTACT_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Tafadhali wasiliana na OVAH kupitia:
Simu/WhatsApp: 0652 522 358
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 108,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Consent means freely saying "yes" without pressure, force, fear, threats, manipulation, deception, or guilt. It is about respecting another person's choices and personal boundaries.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ridhaa ina maana ya kusema "ndiyo" kwa uhuru bila shinikizo, nguvu, hofu, vitisho, udanganyifu, udanganyifu, au hatia. Ni kuhusu kuheshimu chaguo za mtu mwingine na mipaka ya kibinafsi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `When is consent NOT freely given?

Consent is not valid if someone is pressured or manipulated. Examples include:
  ● "If you love me, prove it."
  ● "Everyone else is doing it."
  ● "If you refuse, I will leave you."
  ● "If you refuse, I will tell everyone your secrets."
  ● "I bought you gifts, so you owe me."

These are all forms of pressure, not consent.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ridhaa HAIPATWI kwa uhuru lini?

Ridhaa si halali ikiwa mtu anashinikizwa au kudanganywa. Mifano ni pamoja na:
  ● "Ukinipenda, thibitisha."
  ● "Kila mtu mwingine anafanya hivyo."
  ● "Ukikataa, nitakuacha."
  ● "Ukikataa, nitawaambia kila mtu siri zako."
  ● "Nilikununulia zawadi, kwa hivyo unadaiwa mimi."

Hizi zote ni aina za shinikizo, sio ridhaa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `1. Consent must be clear

A person who feels forced is not giving true consent. Consent should never be assumed.

Examples of clear consent include:
  ● "Yes, I'm comfortable with that."
  ● "I agree."
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `1. Ridhaa lazima iwe wazi

Mtu anayehisi kulazimishwa hatoi ridhaa ya kweli. Ridhaa haipaswi kudhaniwa kamwe.

Mifano ya ridhaa iliyo wazi ni pamoja na:
  ● "Ndiyo, nimeridhika na hilo."
  ● "Nakubali."
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Signs that consent may not be present include:
  ● Silence.
  ● Looking uncomfortable.
  ● Avoiding eye contact.
  ● Saying "Maybe."
  ● Not responding.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ishara kwamba ridhaa inaweza isiwepo ni pamoja na:
  ● Kimya.
  ● Kuonekana kutojiamini.
  ● Kuepuka kutazamana machoni.
  ● Kusema "Labda."
  ● Kutojibu.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `2. People can change their mind

Someone may agree at first and later decide they no longer want to continue. Changing your mind is always okay, and that decision should be respected.

Example: A girl agrees to go on a date but later decides she does not want physical contact. Her decision must be respected.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `2. Watu wanaweza kubadilisha mawazo yao

Mtu anaweza kukubali mwanzoni na baadaye akaamua kuwa hataki tena kuendelea. Kubadilisha mawazo yako ni sawa kila wakati, na uamuzi huo unapaswa kuheshimiwa.

Mfano: Msichana anakubali kwenda kwenye miadi lakini baadaye anaamua hataki kugusana kimwili. Uamuzi wake lazima uheshimiwe.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `3. Consent must be informed

People should understand what they are agreeing to. If someone hides important information or lies to convince another person, true consent cannot be given.

Example: Pretending something is safe when it is not or giving false information to pressure someone.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `3. Ridhaa lazima ielezwe

Watu wanapaswa kuelewa wanachokubali. Ikiwa mtu anaficha taarifa muhimu au uongo ili kumshawishi mtu mwingine, ridhaa ya kweli haiwezi kutolewa.

Mfano: Kujifanya kitu ni salama wakati si salama au kutoa taarifa za uongo ili kumshinikiza mtu.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `4. A person must be able to make their own decision

Someone cannot give meaningful consent if they:
  ● Are below 18 years (under Tanzanian law).
  ● Are asleep or unconscious.
  ● Are heavily intoxicated.
  ● Are being threatened or forced.
  ● Do not understand what is happening.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `4. Mtu lazima aweze kufanya uamuzi wake mwenyewe

Mtu hawezi kutoa ridhaa yenye maana ikiwa:
  ● Wako chini ya miaka 18 (chini ya sheria ya Tanzania).
  ● Wamelala au hawajui.
  ● Wamelewa sana.
  ● Wanatishiwa au wanalazimishwa.
  ● Hawaelewi kinachoendelea.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Remember, consent is about respect, communication, and choice. If the answer is not a clear and willing "yes," then it is not consent. Healthy relationships always respect each person's decisions and boundaries.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kumbuka, ridhaa inahusu heshima, mawasiliano, na chaguo. Ikiwa jibu si "ndiyo" iliyo wazi na yenye nia, basi si ridhaa. Mahusiano yenye afya huheshimu maamuzi na mipaka ya kila mtu.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Would you like to learn more about healthy relationships, setting boundaries, refusing pressure, or recognizing unhealthy behaviours? I'm here to help.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ungependa kujifunza zaidi kuhusu mahusiano yenye afya, kuweka mipaka, kukataa shinikizo, au kutambua tabia zisizofaa? Niko hapa kukusaidia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_10',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you need health information, HIV testing, family planning services, pregnancy-related care, mental health support, protection from violence, or help with abuse, you do not have to face it alone. You can visit the nearest hospital, health centre, dispensary, or youth-friendly health service for confidential support and guidance. You may also speak to a trusted parent, guardian, teacher, counselor, social welfare officer, religious leader, or healthcare provider.

If you are experiencing violence, abuse, exploitation, neglect, forced marriage, sexual harassment, or any situation that makes you feel unsafe, seek help immediately from a trusted adult or the relevant authorities.

For additional support, guidance, or referrals, you can contact OVAH through:
Phone/WhatsApp: 0652 522 358
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_10',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ikiwa unahitaji taarifa za afya, huduma za upimaji wa VVU, uzazi wa mpango, huduma zinazohusiana na ujauzito, msaada wa afya ya akili, ulinzi dhidi ya ukatili, au msaada kuhusu unyanyasaji, usibaki peke yako. Unaweza kutembelea hospitali, kituo cha afya, zahanati, au huduma rafiki kwa vijana zilizopo karibu nawe kwa ushauri na huduma za siri na salama. Unaweza pia kuzungumza na mzazi, mlezi, mwalimu, mshauri, afisa ustawi wa jamii, kiongozi wa dini, au mtoa huduma za afya unayemwamini.

Ikiwa unapitia ukatili, unyanyasaji, unyonyaji, kutelekezwa, ndoa ya utotoni, ukatili wa kingono, au hali yoyote inayokufanya ujisikie kutokuwa salama, tafuta msaada mara moja kutoka kwa mtu mzima unayemwamini au mamlaka husika.

Kwa msaada zaidi, ushauri au maelekezo ya huduma zinazopatikana, unaweza kuwasiliana na OVAH kupitia:
Simu/WhatsApp: 0652 522 358
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `The word CONSENT is a small word with a big meaning: Would you like us to talk more?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Neno RIDHAA ni neno dogo lenye maana kubwa: Unatamani tuongee zaidi?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● Consent is accepting something freely — without pressure, fear, or intimidation.
● Silence is not consent. "Maybe" is not consent. A person can change their mind at any time, and that's okay.
● No one should pressure you with gifts, threats, or words like "if you love me..."
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● Ridhaa ni kukubali kitu kwa uhuru wako — bila shinikizo, hofu, au vitisho.
● Ukimya si ridhaa. "Labda" si ridhaa. Mtu anaweza kubadili mawazo yake wakati wowote, na hilo ni sawa.
● Hakuna anayepaswa kukushinikiza kwa zawadi, vitisho, au maneno kama "kama unanipenda..."
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Which is an example of PRESSURE, not true consent?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ni ipi ni mfano wa SHINIKIZO, si ridhaa ya kweli?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Correct: B. That is pressure, not true consent.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Sahihi: B. Hilo ni shinikizo, si ridhaa ya kweli.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Not quite.

Correct: B. That is pressure, not true consent.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Si sahihi.

Sahihi: B. Hilo ni shinikizo, si ridhaa ya kweli.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Have you ever felt pressured to do something you didn't want to do?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Je, umewahi kuhisi kushinikizwa kufanya kitu hukutaka?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you feel pressured by someone, we can help you — click here.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kama unahisi unashinikizwa na mtu, tunaweza kukusaidia — bonyeza hapa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },

    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Respect and boundaries are important parts of healthy relationships, friendships, families, and communities.

Respect means treating yourself and others with kindness, dignity, honesty, and consideration.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Heshima na mipaka ni sehemu muhimu za mahusiano bora, urafiki, familia, na jamii.

Heshima ina maana ya kujitendea wewe mwenyewe na wengine kwa wema, utu, uaminifu, na kuzingatia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `It involves listening to others, valuing their opinions, accepting differences, and recognizing that everyone deserves to be treated fairly regardless of their age, gender, background, or beliefs.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Inahusisha kuwasikiliza wengine, kuthamini maoni yao, kukubali tofauti, na kutambua kwamba kila mtu anastahili kutendewa kwa haki bila kujali umri wao, jinsia, historia, au imani.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Boundaries are the personal limits people set to protect their physical, emotional, and mental wellbeing.

Boundaries help individuals decide what makes them feel comfortable, safe, and respected.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mipaka ni mipaka ya kibinafsi ambayo watu huweka ili kulinda ustawi wao wa kimwili, kihisia, na kiakili.

Mipaka huwasaidia watu kuamua kinachowafanya wajisikie vizuri, salama, na kuheshimiwa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Everyone has the right to set boundaries about their body, personal space, emotions, belongings, time, and relationships.

For example:
  ● A young person may choose not to share personal information.
  ● A young person may not want to be hugged.
  ● A young person may not feel comfortable participating in certain activities.

These decisions should be respected.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kila mtu ana haki ya kuweka mipaka kuhusu mwili wake, nafasi yake binafsi, hisia, mali, wakati, na mahusiano.

Kwa mfano:
  ● Kijana anaweza kuchagua kutoshiriki taarifa zake binafsi.
  ● Huenda hataki kukumbatiwa.
  ● Huenda asijisikie vizuri kushiriki katika shughuli fulani.

Maamuzi haya yanapaswa kuheshimiwa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Understanding boundaries helps adolescents build healthy relationships and protect themselves from pressure, manipulation, exploitation, and abuse.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kuelewa mipaka huwasaidia vijana kujenga mahusiano mazuri na kujilinda kutokana na shinikizo, udanganyifu, unyonyaji, na unyanyasaji.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Respecting someone's boundaries means accepting their decisions without anger, threats, guilt, or pressure.

Similarly, young people should learn to communicate their own boundaries clearly and confidently.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kuheshimu mipaka ya mtu kunamaanisha kukubali maamuzi yao bila hasira, vitisho, hatia, au shinikizo.

Vile vile, vijana wanapaswa kujifunza kuwasiliana mipaka yao wenyewe kwa uwazi na kwa kujiamini.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Healthy relationships are built on mutual respect, trust, communication, and understanding.

When people respect each other's boundaries, they create safer environments where everyone feels valued and heard.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mahusiano mazuri yanajengwa juu ya heshima ya pande zote, uaminifu, mawasiliano, na uelewa.

Watu wanapoheshimu mipaka ya kila mmoja, huunda mazingira salama zaidi ambapo kila mtu anahisi anathaminiwa na kusikilizwa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Learning about respect and boundaries can help adolescents develop self-confidence, make informed decisions, maintain healthy friendships and relationships, and reduce the risk of conflict, violence, and unhealthy behaviors.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kujifunza kuhusu heshima na mipaka kunaweza kuwasaidia vijana kukuza kujiamini, kufanya maamuzi sahihi, kudumisha urafiki na mahusiano mazuri, na kupunguza hatari ya migogoro, vurugu, na tabia zisizofaa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you need health information, HIV testing, family planning services, pregnancy-related care, mental health support, protection from violence, or help with abuse, you do not have to face it alone. You can visit the nearest hospital, health centre, dispensary, or youth-friendly health service for confidential support and guidance. You may also speak to a trusted parent, guardian, teacher, counselor, social welfare officer, religious leader, or healthcare provider.

If you are experiencing violence, abuse, exploitation, neglect, forced marriage, sexual harassment, or any situation that makes you feel unsafe, seek help immediately from a trusted adult or the relevant authorities.

For additional support, guidance, or referrals, you can contact OVAH through:
Phone/WhatsApp: 0652 522 358
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ikiwa unahitaji taarifa za afya, huduma za upimaji wa VVU, uzazi wa mpango, huduma zinazohusiana na ujauzito, msaada wa afya ya akili, ulinzi dhidi ya ukatili, au msaada kuhusu unyanyasaji, usibaki peke yako. Unaweza kutembelea hospitali, kituo cha afya, zahanati, au huduma rafiki kwa vijana zilizopo karibu nawe kwa ushauri na huduma za siri na salama. Unaweza pia kuzungumza na mzazi, mlezi, mwalimu, mshauri, afisa ustawi wa jamii, kiongozi wa dini, au mtoa huduma za afya unayemwamini.

Ikiwa unapitia ukatili, unyanyasaji, unyonyaji, kutelekezwa, ndoa ya utotoni, ukatili wa kingono, au hali yoyote inayokufanya ujisikie kutokuwa salama, tafuta msaada mara moja kutoka kwa mtu mzima unayemwamini au mamlaka husika.

Kwa msaada zaidi, ushauri au maelekezo ya huduma zinazopatikana, unaweza kuwasiliana na OVAH kupitia:
Simu/WhatsApp: 0652 522 358
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Respect and boundaries - why are they important?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Heshima na mipaka - kwa nini ni muhimu?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● Boundaries are personal boundaries you set to protect your body, your feelings, and your time.
● You have the right to say no to anything that doesn't make you happy - even if it's a hug.
● Respecting others' boundaries is part of building healthy relationships.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● Mipaka ni mipaka ya kibinafsi unayoweka kulinda mwili wako, hisia zako, na muda wako.
● Una haki ya kusema hapana kuhusu kitu chochote kisichokufurahisha - hata kama ni kukumbatiwa.
● Kuheshimu mipaka ya wengine ni sehemu ya kujenga mahusiano mazuri.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `True or False: Refusing a hug when you do not want one is a bad thing.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kweli au Uongo: Kukataa kukumbatiwa usipotaka ni jambo baya.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Correct: B - False. Setting your own boundaries is your right.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Sahihi: B - Uongo. Kuweka mipaka yako ni haki yako.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Not quite.

Correct: B - False. Setting your own boundaries is your right.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Si sahihi.

Sahihi: B - Uongo. Kuweka mipaka yako ni haki yako.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Do you feel confident in setting your own boundaries?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Je, unajiamini kuweka mipaka yako?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Is someone violating your boundaries? Tell us, we're here to help.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mtu anakiuka mipaka yako? Tuambie, tuko hapa kukusaidia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Good communication is an important life skill. It helps you express your thoughts, understand others, build healthy relationships, and make informed decisions.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_image_soft_skills',
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mawasiliano mazuri ni ujuzi muhimu wa maisha. Hukusaidia kuelezea mawazo yako, kuwaelewa wengine, kujenga mahusiano mazuri, na kufanya maamuzi sahihi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_soft_skills',
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Communication is the process of sharing information, ideas, opinions, feelings, and experiences in a way that others can understand. There are three main types of communication:
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mawasiliano ni mchakato wa kushiriki taarifa, mawazo, maoni, hisia, na uzoefu kwa njia ambayo wengine wanaweza kuelewa. Kuna aina tatu kuu za mawasiliano:
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `1. Face-to-Face Communication

This happens when people communicate directly with each other, either one-on-one or in groups. It can be verbal or through body language.

Benefits:
  ● Messages are delivered clearly.
  ● Questions can be answered immediately.
  ● Feedback is received right away.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `1. Mawasiliano ya Ana kwa Ana

Hii hutokea wakati watu wanawasiliana moja kwa moja, ama mmoja kwa mmoja au katika vikundi. Inaweza kuwa ya maneno au kupitia lugha ya mwili.

Faida:
  ● Ujumbe hutolewa waziwazi.
  ● Maswali yanaweza kujibiwa mara moja.
  ● Maoni hupokelewa mara moja.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `2. Mass Communication

This uses media such as television, radio, social media, and publications to reach many people at once.

Benefits:
  ● Reaches large audiences quickly.
  ● Shares information in engaging ways using sound, images, or videos.
  ● Helps people learn about important issues.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `2. Mawasiliano ya Umma

Hii hutumia vyombo vya habari kama vile televisheni, redio, mitandao ya kijamii, na machapisho ili kuwafikia watu wengi kwa wakati mmoja.

Faida:
  ● Hufikia hadhira kubwa haraka.
  ● Hushiriki taarifa kwa njia za kuvutia kwa kutumia sauti, picha, au video.
  ● Huwasaidia watu kujifunza kuhusu masuala muhimu.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `3. Personal Communication

This is the conversation you have with yourself through thinking and self-reflection. It helps you understand your feelings, weigh your options, and make thoughtful decisions.

Benefits:
  ● Encourages careful thinking before acting.
  ● Builds confidence in decision-making.
  ● Helps young people avoid rushing into risky choices.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `3. Mawasiliano ya Kibinafsi

Hii ni mazungumzo unayofanya na wewe mwenyewe kupitia kufikiri na kujitafakari. Inakusaidia kuelewa hisia zako, kupima chaguzi zako, na kufanya mawazo maamuzi.

Faida:
  ● Huhimiza kufikiri kwa makini kabla ya kutenda.
  ● Hujenga kujiamini katika kufanya maamuzi.
  ● Huwasaidia vijana kuepuka kukimbilia katika chaguzi hatari.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Good Communication Skills

Strong communication involves:
  ● Listening carefully.
  ● Asking open questions.
  ● Showing interest through body language, such as smiling or nodding.
  ● Giving feedback and summarizing what you've understood.
  ● Paying attention to verbal and non-verbal cues, such as facial expressions and tone of voice.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ujuzi Bora wa Mawasiliano

Mawasiliano imara yanahusisha:
  ● Kusikiliza kwa makini.
  ● Kuuliza maswali wazi.
  ● Kuonyesha nia kupitia lugha ya mwili, kama vile kutabasamu au kutikisa kichwa.
  ● Kutoa maoni na kufupisha kile ulichoelewa.
  ● Kuzingatia ishara za maneno na zisizo za maneno, kama vile sura za uso na sauti.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Good communication helps you build trust, solve problems peacefully, strengthen relationships, and make confident decisions. It's a skill that becomes stronger the more you practice it.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mawasiliano mazuri hukusaidia kujenga uaminifu, kutatua matatizo kwa amani, kuimarisha mahusiano, na kufanya maamuzi ya kujiamini. Ni ujuzi unaozidi kuwa na nguvu kadri unavyoufanyia mazoezi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `No, Would you like to learn more about active listening, assertive communication, resolving conflicts, or building healthy relationships? I'm here to help.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hapana, Ungependa kujifunza zaidi kuhusu kusikiliza kwa vitendo, mawasiliano ya uthubutu, kutatua migogoro, au kujenga mahusiano yenye afya? Niko hapa kukusaidia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Common Myths

Myth:
If someone does not say no, they have agreed.

Fact:
Consent should be clear and voluntary.

Myth:
People in relationships do not need consent.

Fact:
Consent is important in every relationship.

Myth:
Giving gifts means someone owes affection or sex.

Fact:
No one owes sexual activity because they received gifts.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hadithi za Kawaida

Hadithi:
Ikiwa mtu hatakataa, amekubali.

Ukweli:
Ridhaa inapaswa kuwa wazi na ya hiari.

Hadithi:
Watu walio katika mahusiano hawahitaji ridhaa.

Ukweli:
Ridhaa ni muhimu katika kila uhusiano.

Hadithi:
Kutoa zawadi kunamaanisha mtu ana deni la mapenzi au ngono.

Ukweli:
Hakuna mtu anayedaiwa shughuli za ngono kwa sababu alipokea zawadi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_10',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you need health information, HIV testing, family planning services, pregnancy-related care, mental health support, protection from violence, or help with abuse, you do not have to face it alone. You can visit the nearest hospital, health centre, dispensary, or youth-friendly health service for confidential support and guidance. You may also speak to a trusted parent, guardian, teacher, counselor, social welfare officer, religious leader, or healthcare provider.

If you are experiencing violence, abuse, exploitation, neglect, forced marriage, sexual harassment, or any situation that makes you feel unsafe, seek help immediately from a trusted adult or the relevant authorities.

For additional support, guidance, or referrals, you can contact OVAH through:
Phone/WhatsApp: 0652 522 358
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_10',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ikiwa unahitaji taarifa za afya, huduma za upimaji wa VVU, uzazi wa mpango, huduma zinazohusiana na ujauzito, msaada wa afya ya akili, ulinzi dhidi ya ukatili, au msaada kuhusu unyanyasaji, usibaki peke yako. Unaweza kutembelea hospitali, kituo cha afya, zahanati, au huduma rafiki kwa vijana zilizopo karibu nawe kwa ushauri na huduma za siri na salama. Unaweza pia kuzungumza na mzazi, mlezi, mwalimu, mshauri, afisa ustawi wa jamii, kiongozi wa dini, au mtoa huduma za afya unayemwamini.

Ikiwa unapitia ukatili, unyanyasaji, unyonyaji, kutelekezwa, ndoa ya utotoni, ukatili wa kingono, au hali yoyote inayokufanya ujisikie kutokuwa salama, tafuta msaada mara moja kutoka kwa mtu mzima unayemwamini au mamlaka husika.

Kwa msaada zaidi, ushauri au maelekezo ya huduma zinazopatikana, unaweza kuwasiliana na OVAH kupitia:
Simu/WhatsApp: 0652 522 358
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Communication skills - essential for your life
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ujuzi wa mawasiliano - muhimu kwa maisha yako
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● There are three types of communication: face-to-face, through media, and communication with yourself.
● Listening carefully, asking open questions, and showing understanding are important skills.
● Good communication helps you be understood and avoid unnecessary conflict.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● Kuna aina tatu za mawasiliano: ana kwa ana, kupitia vyombo vya habari, na mawasiliano na nafsi yako mwenyewe.
● Kusikiliza kwa makini, kuuliza maswali ya wazi, na kuonyesha kuelewa ni ujuzi muhimu.
● Mawasiliano mazuri hukusaidia kueleweka na kuepuka migogoro isiyo ya lazima.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `True or False: Listening is only a small part of good communication.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kweli au Uongo: Kusikiliza ni sehemu ndogo tu ya mawasiliano mazuri.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Correct: B - False. Listening carefully is an important part of good communication.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Sahihi: B - Uongo. Kusikiliza kwa makini ni sehemu muhimu ya mawasiliano mazuri.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Not quite.

Correct: B - False. Listening carefully is an important part of good communication.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Si sahihi.

Sahihi: B - Uongo. Kusikiliza kwa makini ni sehemu muhimu ya mawasiliano mazuri.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `What type of communication do you work on the most?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ni aina gani ya mawasiliano unayoyafanyia kazi zaidi?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Are you having trouble communicating with someone? We're here to help you figure out how to talk.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'COMMUNICATION_SKILLS',
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Una changamoto ya kuwasiliana na mtu fulani? Tuko hapa kukusaidia kufikiria jinsi ya kuzungumza.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'DECISION_MAKING_SKILLS',
      nodeKey: 'DECISION_MAKING_SKILLS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Decision-making is the ability to make the right choice and accept the consequences of the choices you have made, thus eliminating regret and setting you free.
The decision-making process involves important steps that would help you avoid certain risks. One approach that can help predict the outcome of decision-making is the T3 approach.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'DECISION_MAKING_SKILLS',
      nodeKey: 'DECISION_MAKING_SKILLS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kufanya maamuzi ni uwezo wa kufanya chaguo sahihi na kukubali matokeo ya uchaguzi ulioufanya, hivyo kukuondolea majuto na kukuacha huru.
Mchakato wa kufanya maamuzi unajumuisha hatua muhimu ambazo zingesaidia kuepuka hatari fulani.
Mkabala mmojawapo unaoweza kusaidia kutabiri matokeo ya kufanya maamuzi ni wa mbinu ya T3.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'DECISION_MAKING_SKILLS',
      nodeKey: 'DECISION_MAKING_SKILLS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `The T3s stand for Problem, Solution, and Consequence.
This approach is used to analyze all the available options - good and bad - in solving a problem and the possible consequences of each choice. The solution with the best results and the fewest losses is chosen.
In this way, a person anticipates any outcome and is prepared to face it.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'DECISION_MAKING_SKILLS',
      nodeKey: 'DECISION_MAKING_SKILLS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `T3 zinasimama badala ya Tatizo, Tatuzi na Tokeo.
Mkabala huu hutumika kuchambua chaguzi zote zilizopo - nzuri na mbaya - katika kutatua tatizo na matokeo yanayoweza kutokea kwa kila uchaguzi.
Ufumbuzi wenye matokeo mazuri zaidi na hasara chache zaidi huchaguliwa. Kwa jinsi hii, mtu anatarajia matokeo yoyote na yuko tayari kuyakabili.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'DECISION_MAKING_SKILLS',
      nodeKey: 'DECISION_MAKING_SKILLS_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Decision-making steps:-
    ● Reflect on the situation.
    ● Seek advice from others.
    ● Listen to the advice given.
    ● Consider family and personal values.
    ● Consider cultural and religious issues.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'DECISION_MAKING_SKILLS',
      nodeKey: 'DECISION_MAKING_SKILLS_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hatua za kufanya maamuzi:-
    ● Tafakari kuhusu hali.
    ● Tafuta ushauri kutoka kwa wengine.
    ● Sikiliza ushauri unaotolewa.
    ● Zingatia amali za familia na zako binafsi.
    ● Zingatia masuala ya kitamaduni na kiimani.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'DECISION_MAKING_SKILLS',
      nodeKey: 'DECISION_MAKING_SKILLS_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Decision-making steps:-
    ● Consider all the opportunities or choices available.
    ● Consider the possible consequences and consequences of each opportunity.
    ● Consider the effects of your actions on other people.
    ● Choose the best alternative.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'DECISION_MAKING_SKILLS',
      nodeKey: 'DECISION_MAKING_SKILLS_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hatua za kufanya maamuzi:-
    ● Zingatia fursa au chaguzi zote zilizopo.
    ● Tafakari madhara na matokeo yanayoweza kutokea kwa kila fursa.
    ● Zingatia athari za matendo yako kwa watu wengine.
    ● Chagua mbadala bora.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'DECISION_MAKING_SKILLS',
      nodeKey: 'DECISION_MAKING_SKILLS_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Decision-making steps:-
    ● Make a decision.
    ● Implement the decision.
    ● Be responsible for the consequences of your actions`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'DECISION_MAKING_SKILLS',
      nodeKey: 'DECISION_MAKING_SKILLS_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hatua za kufanya maamuzi:-
    ● Fanya uamuzi.
    ● Tekeleza maamuzi.
    ● Wajibika kwa matokeo ya matendo yako`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'NEGOTIATION_SKILLS',
      nodeKey: 'NEGOTIATION_SKILLS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `As young people grow, they often face situations where they need to communicate their needs, opinions, and boundaries while respecting others. Good negotiation skills help adolescents resolve disagreements, make informed decisions, and find solutions that are fair and respectful.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'NEGOTIATION_SKILLS',
      nodeKey: 'NEGOTIATION_SKILLS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vijana wanapokua, mara nyingi hukabili hali ambapo wanahitaji kuwasiliana mahitaji yao, maoni, na mipaka huku wakiwaheshimu wengine. Ujuzi mzuri wa mazungumzo huwasaidia vijana kusuluhisha kutokubaliana, kufanya maamuzi sahihi, na kupata masuluhisho ambayo ni ya haki na yenye heshima.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'NEGOTIATION_SKILLS',
      nodeKey: 'NEGOTIATION_SKILLS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `These skills are useful when discussing responsibilities at home, handling friendships, managing relationships, or responding to pressure from others.
Negotiation involves listening carefully, expressing oneself clearly, remaining calm, and seeking positive outcomes rather than conflict.
Learning how to negotiate can help young people
    1.Build confidence
    2.Strengthen relationships
    3.Make choices that protect their wellbeing and future goals.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'NEGOTIATION_SKILLS',
      nodeKey: 'NEGOTIATION_SKILLS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ujuzi huu ni muhimu wakati wa kujadili majukumu nyumbani, kushughulikia urafiki, kusimamia uhusiano, au kujibu shinikizo kutoka kwa wengine.
Majadiliano yanahusisha kusikiliza kwa makini, kujieleza waziwazi, kubaki mtulivu, na kutafuta matokeo chanya badala ya migogoro.
Kujifunza jinsi ya kujadili kunaweza kuwasaidia vijana
    1.Jenga kujiamini
    2.Imarisha mahusiano
    3.Fanya chaguzi zinazolinda ustawi wao na malengo ya siku zijazo.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'PEER_PRESSURE',
      nodeKey: 'PEER_PRESSURE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Friends and peers can have a strong influence on how young people think, behave, and make decisions.
Peer influence can be positive, encouraging healthy habits, good academic performance, and responsible behavior.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'PEER_PRESSURE',
      nodeKey: 'PEER_PRESSURE_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Marafiki na wenzao wanaweza kuwa na ushawishi mkubwa juu ya jinsi vijana wanavyofikiri, kutenda, na kufanya maamuzi.
Ushawishi wa rika unaweza kuwa chanya, kuhimiza tabia nzuri, utendaji mzuri wa kitaaluma, na tabia ya uwajibikaji.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'PEER_PRESSURE',
      nodeKey: 'PEER_PRESSURE_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `
However, sometimes young people may feel pressured to do things they are uncomfortable with in order to fit in, gain acceptance, or avoid rejection.
This may include skipping school, engaging in risky behaviors, or making decisions that conflict with their values.
Understanding peer pressure helps adolescents recognize when others are influencing their choices and gives them the confidence to make decisions based on their own beliefs, goals, and wellbeing rather than fear of being excluded.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'PEER_PRESSURE',
      nodeKey: 'PEER_PRESSURE_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hata hivyo, wakati mwingine vijana wanaweza kuhisi kushinikizwa kufanya mambo ambayo hawafurahii nayo ili waweze kufaa, kupata kukubalika, au kuepuka kukataliwa.
Hii inaweza kujumuisha kutoroka shule, kujihusisha na tabia hatarishi, au kufanya maamuzi yanayokinzana na maadili yao.
Kuelewa shinikizo la rika huwasaidia vijana kutambua wakati wengine wanaposhawishi chaguzi zao na kuwapa ujasiri wa kufanya maamuzi kulingana na imani zao, malengo, na ustawi wao badala ya kuogopa kutengwa.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'REFUSING_UNWANTED_SEXUAL_PRESSURE',
      nodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Every young person has the right to make decisions about their body and relationships without being pressured, threatened, manipulated, or forced.
Sometimes adolescents may face pressure from partners, friends, or other individuals to engage in sexual activities before they feel ready.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'REFUSING_UNWANTED_SEXUAL_PRESSURE',
      nodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kila kijana ana haki ya kufanya maamuzi kuhusu mwili wake na mahusiano bila kushinikizwa, kutishiwa, kudanganywa, au kulazimishwa.
Wakati mwingine vijana wanaweza kukabiliwa na shinikizo kutoka kwa wenzi, marafiki, au watu wengine kushiriki katika shughuli za ngono kabla ya kujisikia tayari.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'REFUSING_UNWANTED_SEXUAL_PRESSURE',
      nodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Learning how to refuse unwanted sexual pressure helps young people protect their health, safety, and personal values.
Refusing pressure may involve saying "no" clearly, setting boundaries, leaving uncomfortable situations, or seeking support from trusted adults.
Healthy relationships are based on respect, and anyone who genuinely cares about another person should respect their decisions and boundaries without using guilt, threats, gifts, or emotional pressure.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'REFUSING_UNWANTED_SEXUAL_PRESSURE',
      nodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kujifunza jinsi ya kukataa shinikizo la ngono lisilohitajika huwasaidia vijana kulinda afya zao, usalama, na maadili yao binafsi.
Kukataa shinikizo kunaweza kuhusisha kusema "hapana" waziwazi, kuweka mipaka, kuacha hali zisizofurahi, au kutafuta msaada kutoka kwa watu wazima wanaoaminika.
Mahusiano mazuri yanategemea heshima, na mtu yeyote anayemjali mtu mwingine kwa dhati anapaswa kuheshimu maamuzi na mipaka yake bila kutumia hatia, vitisho, zawadi, au shinikizo la kihisia.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'GOAL_SETTING_AND_FUTURE_PLANNING',
      nodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Every young person has dreams, talents, and ambitions for the future.
Goal setting helps adolescents identify what they want to achieve and develop practical steps to reach those aspirations.
Goals may relate to education, careers, skills development, health, relationships, or personal growth.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'GOAL_SETTING_AND_FUTURE_PLANNING',
      nodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kila kijana ana ndoto, vipaji, na matamanio ya siku zijazo.
Kuweka malengo huwasaidia vijana kutambua wanachotaka kufikia na kukuza hatua za vitendo ili kufikia matarajio hayo.
Malengo yanaweza kuhusisha elimu, kazi, ukuzaji wa ujuzi, afya, mahusiano, au ukuaji wa kibinafsi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'GOAL_SETTING_AND_FUTURE_PLANNING',
      nodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: ` Future planning encourages young people to think about the consequences of their choices and how today's decisions can affect tomorrow's opportunities.
By setting realistic goals, staying focused, and taking small consistent steps, adolescents can overcome challenges and work toward a future that reflects their interests and potential.
Having a clear sense of direction can also help young people resist negative influences and remain motivated during difficult times.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'GOAL_SETTING_AND_FUTURE_PLANNING',
      nodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kupanga siku zijazo huwahimiza vijana kufikiria kuhusu matokeo ya chaguo zao na jinsi maamuzi ya leo yanavyoweza kuathiri fursa za kesho.
Kwa kuweka malengo halisi, kubaki makini, na kuchukua hatua ndogo thabiti, vijana wanaweza kushinda changamoto na kufanya kazi kuelekea mustakabali unaoakisi maslahi na uwezo wao.
Kuwa na mwelekeo wazi kunaweza pia kuwasaidia vijana kupinga ushawishi mbaya na kubaki na motisha wakati wa nyakati ngumu.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Life skills for self-awareness
i. Self-awareness is the first step towards living a healthy life.
Self-awareness includes:
    ● Understanding who you are, gender, environment, religion, skin color, culture, and your place in family and society.
    ● A clear recognition of your responsibilities to yourself, your family, society, country, and the world at large.
    ● Understanding your needs and what your actions represent in decisions.
    ● A clear knowledge of your health needs in order to take care of your body.
    ● A clear understanding of the relationships you want in order to set relationship boundaries
    ● The ability to make decisions that protect you and be assertive to protect your decisions.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Stadi za maisha za kujitambua
i. Kujitambua ni hatua ya kwanza kuelekea katika kuishi maisha ya afya njema. Kujitambua hujumuisha:
    ● Kujielewa wewe ni nani, jinsi, mazingira, dini, rangi ya ngozi, utamaduni, na nafasi yako ndani ya familia na jamii.
    ● Utambuzi bayana wa wajibu wako kwako binafsi, kwa familia, jamii, nchi, na ulimwengu wako kwa ujumla.
    ● Kuelewa mahitaji yako na amali yako inasimamia nini katika maamuzi.
    ● Maarifa bayana ya mahitaji yako kwa afya ili uutunze mwili wako.
    ● Uelewa bayana wa mahusiano unayoyataka ili uweke mipaka ya kimahusiano
    ● Uwezo wa kufanya maamuzi yanayokulinda na kuwa na msimamo ili kulinda maamuzi yako.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `ii. Managing emotions: Emotion is a very intense feeling.
    ● It can be great joy or happiness, strong anger, unusual anxiety, etc.
    ● It is a drive within a person's soul.
    ● Emotions always cool down. It can last for a long time or a short time, but eventually it cools down.
    ● Never make a decision when you are emotional.
    ● Wait until you calm down, analyze the situation that caused those emotions and then make a decision.
    ● Many problems that young people encounter are due to the inability to cope with emotions.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `ii.Kuhimili mihemko: Mihemko ni msisimko mkubwa sana.
    ● Inaweza kuwa shangwe au furaha kubwa, hasira kali, bughudha isiyo ya kawaida, n.k.
    ● Ni msukumo wa ndani ya nafsi ya mtu.
    ● Siku zote mihemko hupoa. Inaweza kudumu kwa muda mrefu au mfupi, lakini hatimaye hupoa.
    ● Kamwe usifanye uamuzi ukiwa na mihemko. Subiri hadi utulie, chambua hali iliyosababisha mihemko hiyo kisha fanya uamuzi.
    ● Matatizo mengi yanayowakuta vijana yanatokana na kukosa uwezo wa kuhimili mhemko.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Although great patience is needed, it is not good to make decisions when you are emotional.
Emotions always have a tendency to “decline” after a certain time.
And that is the best time to make decisions.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Pamoja na kwamba uvumilivu mkubwa unahitajika, siyo vema kufanya maamuzi wakati wa mhemko.
Wakati wote mhemko una tabia ya “kushuka” baada ya muda fulani.
Na huo ndio wakati mzuri wa kufanya maamuzi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Emotions are emotional reactions in everyday life for an ordinary person, these emotions correspond to the event they are facing at that time.
In general, emotions are actions of the mind, body and behavior that manifest themselves against the thing that caused the emotion.
Different types of emotions
    ● Happiness or disgust
    ● Acceptance or disapproval
    ● Anger and fear
    ● Surprise and anticipation`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mhemko ni mwitikio wa hisia katika maisha ya kila siku kwa mtu wa kawaida hisia hizi hulingana na tukio analokabiliana nalo katika wakati husika.
Kwa ujumla hisia ni kitendo cha ufahamu, mwili na tabia zinazojidhihirisha dhidi ya jambo lililopelekea mhemko.
Aina tofauti za hisia
    ● Kufurahi au kuchukia
    ● Kukubalika au kutokubalika
    ● Hasira na hofu
    ● Mshangao na matarajio`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `iii. Coping with stress: “Stress” is a state of emotional or psychological distress resulting from a situation, event or thing that is very difficult or challenging.
    ● Stress leads to different feelings such as fear, anger, hatred, racing heartbeat.
    ● Factors that contribute to stress include lifestyle, social problems such as relationships, many jobs, abuse, being pregnant, lack of basic needs, lack of money, academic issues`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `iii. Kuhimili msongo wa mawazo: “Msongo wa mawazo” ni hali ya maumivu au mfadhaiko wa kihisia au kisaikologia unaotokana na hali,tukio au jambo ambalo ni gumu sana au lenye changamoto kubwa.
    ● Mambo yanayochangia msongo wa mawazo hupelekea hisia tofauti kujitokeza kama vile woga, hasira, chuki, mapigo ya moyo kwenda mbio.
    ● Mambo yanayochangja msongo ni pamoja na mtindo wa maisha, matatizo ya kijamii kama mahusiano, kazi nyingi, unyanyasaji, kuwa mjamzito, kukosekana kwa mahitaji ya msingi, uhaba wa fedha, masuala ya kitaaluma
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `iv. Self-esteem: A young person has a much greater value than he or she thinks he or she has.
    ● When you value yourself, other people will value you and you have to value yourself after realizing how much you are worth.
    ● Self-esteem is part of a young person’s recognition that he or she has a much greater value than he or she thinks he or she has.
    ● When you value yourself, other people will value you and you have to value yourself after realizing how much you are worth.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `iv.Kujithamini: Kijana ana thamani kubwa sana pengine kuliko hata anavyo jifikiria yeye.
    ● Utakapojithamini wewe binafsi na watu wengine watakuthamini na inabidi ujiweke katika thamani uliyonayo baada ya kujitambua kuwa una thamani gani.
    ● Kujithamini ni sehemu ya kijana kujitambua kuwa ana thamani kubwa sana pengine kuliko hata anavyo jifikiria yeye.
    ● Utakapojithamini wewe binafsi na watu wengine watakuthamini na inabidi ujiweke katika thamani uliyonayo baada ya kujitambua kuwa una thamani gani.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `A self-aware young person has assertiveness.
    ● Assertiveness is the state of defending your rights clearly by expressing your feelings without hurting the feelings of another person.
    ● When you have assertiveness, you are courageous, confident, self-esteem, and as a result, you will have SELF-AWARENESS.
    ● This is a skill that enables a person to manage their decisions firmly without wavering.
    ● It is seen in the words and actions a person makes.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kijana aliyejitambua anakuwa na udhubutu.
    ● Uthubutu ni hali ya kutetea haki yako waziwazi kwa kutoa hisia zako bila ya kuumiza hisia za mtu mwingine.
    ● Unapokuwa na uthubutu unakuwa na ujasiri, unajiamini, unajithamini, na matokeo yake utakuwa UMEJITAMBUA.
    ● Hii ni stadi inayomwezesha mtu kusimamia maamuzi yake kwa uthabiti pasipo kutetereka.
    ● Huonekana kwa maneno na vitendo anavyovifanya mtu.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `High assertiveness enables you to win but low assertiveness depresses and makes you a person who cannot manage themselves.
For example, parents can prevent children from developing well by discouraging them that they are incapable.
Self-awareness in health is a very important part of a young person's life.
Often we enjoy going with the times more than protecting our health.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Uthubutu wa hali ya juu hukuwezesha kushinda bali uthubutu wa chini hudidimiza na kukufanya mtu usiyeweza kujisimamia.
Mfano, Wazazi wanavyoweza kuwafanya watoto wasiwe na maendeleo mazuri kwa kuwakatisha tamaa kuwa hawawezi.
Kujitambua katika afya ni sehemu muhimu sana katika maisha ya kijana.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `We often forget that our health is very important so that we can go with the times.
In the matter of sex, a person who is self-aware will make sure that he remembers to practice safe sex in any environment.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mara nyingi tunafurahia zaidi kwenda na wakati kuliko kulinda afya zetu.
Kumbe tunakuwa tunasahau kuwa afya zetu ni muhimu sana ili tuweze kwenda na huo wakati.
Katika swala la ngono, mtu anayejitambua atahakikisha anakumbuka kufanya ngono salama katika mazingira yoyote yale.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_12',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `In addition to all these things, a young person should also consider the following:
    ● A self-aware girl will be able to say no to sex if she is not ready to have sex.
    ● A self-aware girl will not allow anyone to persuade or deceive her into loving her with gifts.
    ● A self-aware girl will not allow herself to have unwanted pregnancies that can interrupt her studies and life dreams.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 12,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_12',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Pamoja na mambo yote hayo, kijana pia anatakiwa azingatie mambo yafuatayo:
    ● Msichana anayejitambua ataweza kusema hapana kuhusu ngono kama hayuko tayari kushiriki ngono.
    ● Msichana anayejitambua hataruhusu mtu yeyote amshawishi au kumdanganya kuwa anampenda kwa zawadi.
    ● Msichana anayejitambua hatarusu kupata mimba zisizotarajiwa ambazo zinaweza kukatisha masomo na ndoto zake za maisha.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 12,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_10',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Additionally:
    ● A self-aware girl will protect herself by using condoms if she decides to have sex.
    ● A self-aware girl will protect herself by using family planning methods so that she does not get unwanted pregnancies.
    ● A self-aware girl will go to a health center if she is pregnant so that she can get professional help.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_10',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kwa Kuongeza:
    ● Msichana anayejitambua atajilinda kwa kutumia kondomu endapo ataamua kushiriki ngono.
    ● Msichana anayejitambua atajilinda kwa kutumia njia za uzazi wa mpango ili asipate mimba zisizotarajiwa.
    ● Msichana anayejitambua ataenda kituo cha afya endapo ni mjamzito ili aweze kupata msaada wa kitaalamu.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_11',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Moreover:
    ● A self-aware boy will protect himself, respect and protect girls.
    ● A self-aware boy will not rape a girl.
    ● A self-aware boy will use condoms and other family planning methods.
    ● A self-aware boy will protect his partner, will not participate in sexual violence and condemn all risky behaviors.
Young people (girls and boys) who are aware of this will seek reproductive health education, will protect themselves from sexually transmitted diseases including HIV/AIDS.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 11,
      isActive: true,
    },
    {
      subtopicCode: 'SELF_IDENTIFICATION',
      nodeKey: 'SELF_IDENTIFICATION_11',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Pia zingatia:
    ● Mvulana anayejitambua atajilinda, ataheshimu na kulinda wasichana.
    ● Mvulana anayejitambua hatambaka msichana.
    ● Mvulana anayejitambua atatumia kondomu na njia nyingine za uzazi wa mpango.
    ● Mvulana anayejitambua atamlinda mwenzi wake, hatashiriki katika unyanyasaji wa kijinsia na kukemea tabia zote hatarishi.
Vijana (wasichana na wavulana) wanaojitambua watatafuta elimu ya afya ya uzazi, watajilinda na maambukizi ya maradhi ya ngono ikiwemo VVU/UKIMWI.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 11,
      isActive: true,
    },
  ],

  contentNodeOptions: [
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      optionValue: 'what_unhealthy',
      labelEn: 'What is it?',
      labelSw: 'Maana yake nini?',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      optionValue: 'warning_signs',
      labelEn: 'Warning signs',
      labelSw: 'Dalili za onyo',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      optionValue: 'healthy_signs',
      labelEn: 'Healthy signs',
      labelSw: 'Dalili nzuri',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      optionValue: 'disrespect',
      labelEn: 'Disrespect signs',
      labelSw: 'Kutoheshimu',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      optionValue: 'broken_trust',
      labelEn: 'Broken trust',
      labelSw: 'Uaminifu kuvunjika',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      optionValue: 'consent_basics',
      labelEn: 'Consent basics',
      labelSw: 'Msingi wa ridhaa',
      nextNodeKey: 'UNDERSTANDING_CONSENT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_03',
      optionValue: 'broken_trust',
      labelEn: 'Broken trust',
      labelSw: 'Uaminifu kuvunjika',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_03',
      optionValue: 'poor_communication',
      labelEn: 'Poor communication',
      labelSw: 'Mawasiliano duni',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_03',
      optionValue: 'set_boundaries',
      labelEn: 'Set boundaries',
      labelSw: 'Weka mipaka',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_04',
      optionValue: 'poor_communication',
      labelEn: 'Poor communication',
      labelSw: 'Mawasiliano duni',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_04',
      optionValue: 'control_signs',
      labelEn: 'Control signs',
      labelSw: 'Dalili udhibiti',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_04',
      optionValue: 'healthy_signs',
      labelEn: 'Healthy signs',
      labelSw: 'Dalili nzuri',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_05',
      optionValue: 'control_signs',
      labelEn: 'Control signs',
      labelSw: 'Dalili udhibiti',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_05',
      optionValue: 'lack_support',
      labelEn: 'Lack of support',
      labelSw: 'Kukosa usaidizi',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_05',
      optionValue: 'talk_skills',
      labelEn: 'Communication skills',
      labelSw: 'Ujuzi wa maongezi',
      nextNodeKey: 'COMMUNICATION_SKILLS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_06',
      optionValue: 'lack_support',
      labelEn: 'Lack of support',
      labelSw: 'Kukosa usaidizi',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_06',
      optionValue: 'seek_support',
      labelEn: 'Seek support',
      labelSw: 'Tafuta msaada',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_06',
      optionValue: 'key_reminder',
      labelEn: 'Key reminder',
      labelSw: 'Kumbuka',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_08',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_07',
      optionValue: 'key_reminder',
      labelEn: 'Key reminder',
      labelSw: 'Kumbuka',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_07',
      optionValue: 'seek_support',
      labelEn: 'Seek support',
      labelSw: 'Tafuta msaada',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_07',
      optionValue: 'healthy_signs',
      labelEn: 'Healthy signs',
      labelSw: 'Dalili nzuri',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_08',
      optionValue: 'seek_support',
      labelEn: 'Seek support',
      labelSw: 'Tafuta msaada',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_09',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_08',
      optionValue: 'more_topics',
      labelEn: 'More topics',
      labelSw: 'Mada zaidi',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_10',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_08',
      optionValue: 'set_boundaries',
      labelEn: 'Set boundaries',
      labelSw: 'Kuweka mipaka',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_09',
      optionValue: 'more_topics',
      labelEn: 'More topics',
      labelSw: 'Mada zaidi',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_09',
      optionValue: 'set_boundaries',
      labelEn: 'Set boundaries',
      labelSw: 'Kuweka mipaka',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_09',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_10',
      optionValue: 'how_refuse',
      labelEn: 'Yes, please',
      labelSw: 'Ndio, nielezee',
      nextNodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_10',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_10',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_01',
      optionValue: 'what_healthy',
      labelEn: 'What is it?',
      labelSw: 'Maana yake nini?',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_01',
      optionValue: 'respect',
      labelEn: 'Show respect',
      labelSw: 'Heshima',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_01',
      optionValue: 'what_consent',
      labelEn: 'Consent basics',
      labelSw: 'Msingi wa ridhaa',
      nextNodeKey: 'UNDERSTANDING_CONSENT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_02',
      optionValue: 'respect',
      labelEn: 'Show respect',
      labelSw: 'Heshima',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_02',
      optionValue: 'trust',
      labelEn: 'Building trust',
      labelSw: 'Kuaminiana',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_02',
      optionValue: 'unhealthy',
      labelEn: 'Unhealthy signs',
      labelSw: 'Dalili mbaya',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_03',
      optionValue: 'trust',
      labelEn: 'Building trust',
      labelSw: 'Kuaminiana',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_03',
      optionValue: 'communication',
      labelEn: 'Good communication',
      labelSw: 'Mawasiliano mazuri',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_03',
      optionValue: 'boundaries',
      labelEn: 'Set boundaries',
      labelSw: 'Weka mipaka',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_04',
      optionValue: 'communication',
      labelEn: 'Good communication',
      labelSw: 'Mawasiliano mazuri',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_04',
      optionValue: 'equality',
      labelEn: 'Equal treatment',
      labelSw: 'Usawa',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_04',
      optionValue: 'what_consent',
      labelEn: 'Consent basics',
      labelSw: 'Msingi wa ridhaa',
      nextNodeKey: 'UNDERSTANDING_CONSENT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_05',
      optionValue: 'equality',
      labelEn: 'Equal treatment',
      labelSw: 'Usawa',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_05',
      optionValue: 'support',
      labelEn: 'Support each other',
      labelSw: 'Kusaidiana',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_05',
      optionValue: 'talk_skills',
      labelEn: 'Communication skills',
      labelSw: 'Ujuzi wa maongezi',
      nextNodeKey: 'COMMUNICATION_SKILLS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_06',
      optionValue: 'support',
      labelEn: 'Support each other',
      labelSw: 'Kusaidiana',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_06',
      optionValue: 'remember',
      labelEn: 'Key reminder',
      labelSw: 'Kumbuka',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_08',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_06',
      optionValue: 'boundaries',
      labelEn: 'Set boundaries',
      labelSw: 'Weka mipaka',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_07',
      optionValue: 'remember',
      labelEn: 'Key reminder',
      labelSw: 'Kumbuka',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_07',
      optionValue: 'next_topics',
      labelEn: 'More topics',
      labelSw: 'Mada zaidi',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_07',
      optionValue: 'talk_skills',
      labelEn: 'Communication skills',
      labelSw: 'Ujuzi wa maongezi',
      nextNodeKey: 'COMMUNICATION_SKILLS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_08',
      optionValue: 'next_topics',
      labelEn: 'More topics',
      labelSw: 'Mada zaidi',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_09',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_08',
      optionValue: 'unhealthy',
      labelEn: 'Unhealthy signs',
      labelSw: 'Dalili mbaya',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_08',
      optionValue: 'warning_signs',
      labelEn: 'Warning signs',
      labelSw: 'Dalili za onyo',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_09',
      optionValue: 'unhealthy',
      labelEn: 'Yes',
      labelSw: 'Ndio',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_09',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_09',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza marejeo',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_02',
      optionValue: 'start_quiz',
      labelEn: 'Start quiz',
      labelSw: 'Anza jaribio',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_03',
      optionValue: 'true',
      labelEn: 'A) True',
      labelSw: 'A) Kweli',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_03',
      optionValue: 'false',
      labelEn: 'B) False',
      labelSw: 'B) Uongo',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_04',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali lingine',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_05',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali lingine',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_06',
      optionValue: 'yes',
      labelEn: 'A) Yes',
      labelSw: 'A) Ndiyo',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_06',
      optionValue: 'no',
      labelEn: 'B) No',
      labelSw: 'B) Hapana',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_06',
      optionValue: 'not_sure',
      labelEn: 'C) Not sure',
      labelSw: 'C) Sina uhakika',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_07',
      optionValue: 'yes',
      labelEn: 'Yes',
      labelSw: 'Ndiyo',
      nextNodeKey: 'RELATIONSHIPS_OVAH_CONTACT_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_REFRESHER_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'RELATIONSHIPS_OVAH_CONTACT_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza marejeo',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_02',
      optionValue: 'start_quiz',
      labelEn: 'Start quiz',
      labelSw: 'Anza jaribio',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_03',
      optionValue: 'true',
      labelEn: 'A) True',
      labelSw: 'A) Kweli',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_03',
      optionValue: 'false',
      labelEn: 'B) False',
      labelSw: 'B) Uongo',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_04',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali lingine',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_05',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali lingine',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_06',
      optionValue: 'honesty',
      labelEn: 'A) Honesty',
      labelSw: 'A) Uaminifu',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_06',
      optionValue: 'communication',
      labelEn: 'B) Communication',
      labelSw: 'B) Mawasiliano',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_06',
      optionValue: 'respect',
      labelEn: 'C) Respect',
      labelSw: 'C) Heshima',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_06',
      optionValue: 'all',
      labelEn: 'D) All',
      labelSw: 'D) Zote',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_07',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_07',
      optionValue: 'yes',
      labelEn: 'Yes',
      labelSw: 'Ndiyo',
      nextNodeKey: 'RELATIONSHIPS_OVAH_CONTACT_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_REFRESHER_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RELATIONSHIPS_OVAH_CONTACT_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_01',
      optionValue: 'when_not_free',
      labelEn: 'Pressure examples',
      labelSw: 'Mifano ya shinikizo',
      nextNodeKey: 'UNDERSTANDING_CONSENT_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_01',
      optionValue: 'clear_consent',
      labelEn: 'Clear consent',
      labelSw: 'Ridhaa wazi',
      nextNodeKey: 'UNDERSTANDING_CONSENT_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_01',
      optionValue: 'boundaries',
      labelEn: 'Boundaries',
      labelSw: 'Mipaka',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_02',
      optionValue: 'clear_consent',
      labelEn: 'Clear consent',
      labelSw: 'Ridhaa wazi',
      nextNodeKey: 'UNDERSTANDING_CONSENT_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_02',
      optionValue: 'no_consent_signs',
      labelEn: 'No consent signs',
      labelSw: 'Ukosefu wa ridhaa',
      nextNodeKey: 'UNDERSTANDING_CONSENT_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_02',
      optionValue: 'refuse_pressure',
      labelEn: 'Refuse pressure',
      labelSw: 'Kataa shinikizo',
      nextNodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_03',
      optionValue: 'no_consent_signs',
      labelEn: 'No consent signs',
      labelSw: 'Ukosefu wa ridhaa',
      nextNodeKey: 'UNDERSTANDING_CONSENT_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_03',
      optionValue: 'change_mind',
      labelEn: 'Changing your mind',
      labelSw: 'Kubadili mawazo',
      nextNodeKey: 'UNDERSTANDING_CONSENT_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_03',
      optionValue: 'healthy_rel',
      labelEn: 'Healthy relations',
      labelSw: 'Mahusiano mema',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_04',
      optionValue: 'change_mind',
      labelEn: 'Changing your mind',
      labelSw: 'Kubadili mawazo',
      nextNodeKey: 'UNDERSTANDING_CONSENT_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_04',
      optionValue: 'informed_consent',
      labelEn: 'Informed consent',
      labelSw: 'Ridhaa na taarifa',
      nextNodeKey: 'UNDERSTANDING_CONSENT_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_04',
      optionValue: 'unsafe_signs',
      labelEn: 'Unsafe signs',
      labelSw: 'Dalili hatari',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_05',
      optionValue: 'informed_consent',
      labelEn: 'Informed consent',
      labelSw: 'Ridhaa na taarifa',
      nextNodeKey: 'UNDERSTANDING_CONSENT_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_05',
      optionValue: 'who_can',
      labelEn: 'Who can consent?',
      labelSw: 'Nani huridhia?',
      nextNodeKey: 'UNDERSTANDING_CONSENT_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_05',
      optionValue: 'boundaries',
      labelEn: 'Boundaries',
      labelSw: 'Mipaka',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_06',
      optionValue: 'who_can',
      labelEn: 'Who can consent?',
      labelSw: 'Nani huridhia?',
      nextNodeKey: 'UNDERSTANDING_CONSENT_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_06',
      optionValue: 'remember',
      labelEn: 'Key reminder',
      labelSw: 'Kumbuka',
      nextNodeKey: 'UNDERSTANDING_CONSENT_08',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_06',
      optionValue: 'pressure_help',
      labelEn: 'Pressure help',
      labelSw: 'Msaada shinikizo',
      nextNodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_07',
      optionValue: 'remember',
      labelEn: 'Key reminder',
      labelSw: 'Kumbuka',
      nextNodeKey: 'UNDERSTANDING_CONSENT_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_07',
      optionValue: 'more_topics',
      labelEn: 'More topics',
      labelSw: 'Mada zaidi',
      nextNodeKey: 'UNDERSTANDING_CONSENT_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_07',
      optionValue: 'get_support',
      labelEn: 'Get support',
      labelSw: 'Pata msaada',
      nextNodeKey: 'UNDERSTANDING_CONSENT_10',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_08',
      optionValue: 'more_topics',
      labelEn: 'More topics',
      labelSw: 'Mada zaidi',
      nextNodeKey: 'UNDERSTANDING_CONSENT_09',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_08',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_08',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_09',
      optionValue: 'get_support',
      labelEn: 'Get support',
      labelSw: 'Pata msaada',
      nextNodeKey: 'UNDERSTANDING_CONSENT_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_09',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_09',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_10',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza marejeo',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_02',
      optionValue: 'start_quiz',
      labelEn: 'Start quiz',
      labelSw: 'Anza jaribio',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_03',
      optionValue: 'i_agree',
      labelEn: 'A) I agree',
      labelSw: 'A) Nakubali',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_03',
      optionValue: 'if_refuse',
      labelEn: 'B) If I refuse',
      labelSw: 'B) Ukikataa',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_03',
      optionValue: 'feel_good',
      labelEn: 'C) I feel good',
      labelSw: 'C) Niko sawa',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_04',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali lingine',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_05',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali lingine',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_06',
      optionValue: 'yes',
      labelEn: 'A) Yes',
      labelSw: 'A) Ndiyo',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_06',
      optionValue: 'no',
      labelEn: 'B) No',
      labelSw: 'B) Hapana',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_06',
      optionValue: 'no_answer',
      labelEn: 'C) No answer',
      labelSw: 'C) Sitaki kujibu',
      nextNodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'UNDERSTANDING_CONSENT_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_REFRESHER_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_01',
      optionValue: 'what_respect',
      labelEn: 'What is respect?',
      labelSw: 'Heshima ni nini?',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_01',
      optionValue: 'boundaries',
      labelEn: 'Boundaries',
      labelSw: 'Mipaka',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_01',
      optionValue: 'healthy_rel',
      labelEn: 'Healthy relations',
      labelSw: 'Mahusiano mema',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_02',
      optionValue: 'boundaries',
      labelEn: 'Boundaries',
      labelSw: 'Mipaka',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_02',
      optionValue: 'your_rights',
      labelEn: 'Your rights',
      labelSw: 'Haki zako',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_02',
      optionValue: 'consent',
      labelEn: 'Consent',
      labelSw: 'Ridhaa',
      nextNodeKey: 'UNDERSTANDING_CONSENT_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_03',
      optionValue: 'your_rights',
      labelEn: 'Your rights',
      labelSw: 'Haki zako',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_03',
      optionValue: 'why_important',
      labelEn: 'Why its important?',
      labelSw: 'Umuhimu wake?',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_03',
      optionValue: 'talk_skills',
      labelEn: 'Talking skills',
      labelSw: 'Ujuzi wa maongezi',
      nextNodeKey: 'COMMUNICATION_SKILLS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_04',
      optionValue: 'why_important',
      labelEn: 'Why its important?',
      labelSw: 'Umuhimu wake?',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_04',
      optionValue: 'respect_choices',
      labelEn: 'Respect choices',
      labelSw: 'Heshimu chaguo',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_04',
      optionValue: 'pressure_help',
      labelEn: 'Pressure help',
      labelSw: 'Msaada shinikizo',
      nextNodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_05',
      optionValue: 'respect_choices',
      labelEn: 'Respect choices',
      labelSw: 'Heshimu chaguo',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_05',
      optionValue: 'healthy_rel',
      labelEn: 'Healthy relations',
      labelSw: 'Mahusiano mema',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_05',
      optionValue: 'get_support',
      labelEn: 'Get support',
      labelSw: 'Pata msaada',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_09',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_06',
      optionValue: 'healthy_rel',
      labelEn: 'Healthy relations',
      labelSw: 'Mahusiano mema',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_06',
      optionValue: 'why_learn',
      labelEn: 'Why learn this?',
      labelSw: 'Kwa nini ujifunze?',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_08',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_06',
      optionValue: 'get_support',
      labelEn: 'Get support',
      labelSw: 'Pata msaada',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_09',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_07',
      optionValue: 'why_learn',
      labelEn: 'Why learn this?',
      labelSw: 'Kwa nini ujifunze?',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_07',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_08',
      optionValue: 'get_support',
      labelEn: 'Get support',
      labelSw: 'Pata msaada',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_09',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_08',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_08',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_09',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza marejeo',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_02',
      optionValue: 'start_quiz',
      labelEn: 'Start quiz',
      labelSw: 'Anza jaribio',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_03',
      optionValue: 'true',
      labelEn: 'A) True',
      labelSw: 'A) Kweli',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_03',
      optionValue: 'false',
      labelEn: 'B) False',
      labelSw: 'B) Uongo',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_04',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali lingine',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_05',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali lingine',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_06',
      optionValue: 'absolutely',
      labelEn: 'A) Absolutely',
      labelSw: 'A) Ndiyo kabisa',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_06',
      optionValue: 'sometimes',
      labelEn: 'B) Sometimes',
      labelSw: 'B) Wakati mwingine',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_06',
      optionValue: 'hesitant',
      labelEn: 'C) Still hesitant',
      labelSw: 'C) Bado nasitasita',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_09',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_REFRESHER_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },

    {
      nodeKey: 'COMMUNICATION_SKILLS_01',
      optionValue: 'what_comm',
      labelEn: 'What is it?',
      labelSw: 'Ni nini?',
      nextNodeKey: 'COMMUNICATION_SKILLS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_01',
      optionValue: 'face_to_face',
      labelEn: 'Communication Types',
      labelSw: 'Aina ya mawasiliano',
      nextNodeKey: 'COMMUNICATION_SKILLS_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_02',
      optionValue: 'face_to_face',
      labelEn: 'Face to face',
      labelSw: 'Ana kwa ana',
      nextNodeKey: 'COMMUNICATION_SKILLS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_02',
      optionValue: 'mass_comm',
      labelEn: 'Mass comm',
      labelSw: 'Mawasiliano umma',
      nextNodeKey: 'COMMUNICATION_SKILLS_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_02',
      optionValue: 'personal_comm',
      labelEn: 'Personal comm',
      labelSw: 'Ya kibinafsi',
      nextNodeKey: 'COMMUNICATION_SKILLS_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_03',
      optionValue: 'mass_comm',
      labelEn: 'Mass comm',
      labelSw: 'Mawasiliano umma',
      nextNodeKey: 'COMMUNICATION_SKILLS_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_03',
      optionValue: 'personal_comm',
      labelEn: 'Personal comm',
      labelSw: 'Ya kibinafsi',
      nextNodeKey: 'COMMUNICATION_SKILLS_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_03',
      optionValue: 'good_skills',
      labelEn: 'Good skills',
      labelSw: 'Ujuzi mzuri',
      nextNodeKey: 'COMMUNICATION_SKILLS_06',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_04',
      optionValue: 'personal_comm',
      labelEn: 'Personal comm',
      labelSw: 'Ya kibinafsi',
      nextNodeKey: 'COMMUNICATION_SKILLS_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_04',
      optionValue: 'good_skills',
      labelEn: 'Nice to have',
      labelSw: 'Ujuzi mzuri ukoje?',
      nextNodeKey: 'COMMUNICATION_SKILLS_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_05',
      optionValue: 'good_skills',
      labelEn: 'Nice to have',
      labelSw: 'Ujuzi mzuri ukoje?',
      nextNodeKey: 'COMMUNICATION_SKILLS_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_05',
      optionValue: 'why_it_matters',
      labelEn: 'Why it matters?',
      labelSw: 'Umuhimu wake?',
      nextNodeKey: 'COMMUNICATION_SKILLS_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_06',
      optionValue: 'why_it_matters',
      labelEn: 'Why it matters?',
      labelSw: 'Umuhimu wake?',
      nextNodeKey: 'COMMUNICATION_SKILLS_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_06',
      optionValue: 'more_topics',
      labelEn: 'Anything else?',
      labelSw: 'Kuna Lingine?',
      nextNodeKey: 'COMMUNICATION_SKILLS_08',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_07',
      optionValue: 'more_topics',
      labelEn: 'Anything else?',
      labelSw: 'Kuna Lingine?',
      nextNodeKey: 'COMMUNICATION_SKILLS_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_07',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_07',
      optionValue: 'myths',
      labelEn: 'Common myths',
      labelSw: 'Dhana potofu',
      nextNodeKey: 'COMMUNICATION_SKILLS_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_08',
      optionValue: 'healthy_rel',
      labelEn: 'Yes',
      labelSw: 'Ndiyo',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_08',
      optionValue: 'myths',
      labelEn: 'Common myths',
      labelSw: 'Dhana potofu',
      nextNodeKey: 'COMMUNICATION_SKILLS_09',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_08',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_09',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'COMMUNICATION_SKILLS_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_09',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_09',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_10',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza marejeo',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_02',
      optionValue: 'start_quiz',
      labelEn: 'Start quiz',
      labelSw: 'Anza jaribio',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_03',
      optionValue: 'true',
      labelEn: 'A) True',
      labelSw: 'A) Kweli',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_03',
      optionValue: 'false',
      labelEn: 'B) False',
      labelSw: 'B) Uongo',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_04',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali lingine',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_05',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali lingine',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_06',
      optionValue: 'listening',
      labelEn: 'A) Listening',
      labelSw: 'A) Kusikiliza',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_06',
      optionValue: 'expressing',
      labelEn: 'B) Expressing',
      labelSw: 'B) Kujieleza',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_06',
      optionValue: 'both',
      labelEn: 'C) Both',
      labelSw: 'C) Zote',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_06',
      optionValue: 'still_learning',
      labelEn: 'D) Still learning',
      labelSw: 'D) Bado najifunza',
      nextNodeKey: 'COMMUNICATION_SKILLS_REFRESHER_07',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'COMMUNICATION_SKILLS_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'COMMUNICATION_SKILLS_REFRESHER_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_01',
      optionValue: 'what_t3',
      labelEn: 'What is T3?',
      labelSw: 'T3 ni nini?',
      nextNodeKey: 'DECISION_MAKING_SKILLS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_01',
      optionValue: 'first_steps',
      labelEn: 'First steps?',
      labelSw: 'Hatua za kwanza?',
      nextNodeKey: 'DECISION_MAKING_SKILLS_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_01',
      optionValue: 'choose_well',
      labelEn: 'How to choose well?',
      labelSw: 'Maamuzi mema',
      nextNodeKey: 'DECISION_MAKING_SKILLS_04',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_02',
      optionValue: 'first_steps',
      labelEn: 'First steps?',
      labelSw: 'Hatua za kwanza?',
      nextNodeKey: 'DECISION_MAKING_SKILLS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_02',
      optionValue: 'choose_well',
      labelEn: 'How to choose well?',
      labelSw: 'NiMaamuzi mema',
      nextNodeKey: 'DECISION_MAKING_SKILLS_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_02',
      optionValue: 'then_act',
      labelEn: 'How to act on it?',
      labelSw: 'Hatua za maamuzi',
      nextNodeKey: 'DECISION_MAKING_SKILLS_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_03',
      optionValue: 'choose_well',
      labelEn: 'How to choose well?',
      labelSw: 'NiMaamuzi mema',
      nextNodeKey: 'DECISION_MAKING_SKILLS_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_03',
      optionValue: 'then_act',
      labelEn: 'How to act on it?',
      labelSw: 'Hatua za maamuzi',
      nextNodeKey: 'DECISION_MAKING_SKILLS_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_03',
      optionValue: 'negotiate',
      labelEn: 'Why we negotiate?',
      labelSw: 'Kwanini majadiliano?',
      nextNodeKey: 'NEGOTIATION_SKILLS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_04',
      optionValue: 'then_act',
      labelEn: 'How to act on it?',
      labelSw: 'Hatua za maamuzi',
      nextNodeKey: 'DECISION_MAKING_SKILLS_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_04',
      optionValue: 'negotiate',
      labelEn: 'Why we negotiate?',
      labelSw: 'Kwanini majadiliano?',
      nextNodeKey: 'NEGOTIATION_SKILLS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_04',
      optionValue: 'peer_pressure',
      labelEn: 'Whats peer pressure?',
      labelSw: 'Shinikizo la rika',
      nextNodeKey: 'PEER_PRESSURE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_05',
      optionValue: 'negotiate',
      labelEn: 'Why we negotiate?',
      labelSw: 'Kwanini majadiliano?',
      nextNodeKey: 'NEGOTIATION_SKILLS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_05',
      optionValue: 'peer_pressure',
      labelEn: 'Whats peer pressure?',
      labelSw: 'Shinikizo la rika',
      nextNodeKey: 'PEER_PRESSURE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'DECISION_MAKING_SKILLS_05',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'NEGOTIATION_SKILLS_01',
      optionValue: 'why_useful',
      labelEn: 'Why is it useful?',
      labelSw: 'Umuhimu wake',
      nextNodeKey: 'NEGOTIATION_SKILLS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'NEGOTIATION_SKILLS_01',
      optionValue: 'peer_pressure',
      labelEn: 'Whats peer pressure?',
      labelSw: 'Shinikizo la rika',
      nextNodeKey: 'PEER_PRESSURE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'NEGOTIATION_SKILLS_01',
      optionValue: 'how_say_no',
      labelEn: 'How to say no?',
      labelSw: 'Jinsi ya kukataa',
      nextNodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'NEGOTIATION_SKILLS_02',
      optionValue: 'peer_pressure',
      labelEn: 'Whats peer pressure?',
      labelSw: 'Shinikizo la rika',
      nextNodeKey: 'PEER_PRESSURE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'NEGOTIATION_SKILLS_02',
      optionValue: 'how_say_no',
      labelEn: 'How to say no?',
      labelSw: 'Jinsi ya kukataa',
      nextNodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'NEGOTIATION_SKILLS_02',
      optionValue: 'set_goals',
      labelEn: 'Planning the future',
      labelSw: 'Kupanga Malengo',
      nextNodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PEER_PRESSURE_01',
      optionValue: 'what_pressure',
      labelEn: 'Peer pressure?',
      labelSw: 'Vishawishi vya rika',
      nextNodeKey: 'PEER_PRESSURE_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PEER_PRESSURE_01',
      optionValue: 'how_say_no',
      labelEn: 'How to say no?',
      labelSw: 'Jinsi ya kukataa',
      nextNodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PEER_PRESSURE_01',
      optionValue: 'set_goals',
      labelEn: 'Planning the future',
      labelSw: 'Kupanga Malengo',
      nextNodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PEER_PRESSURE_02',
      optionValue: 'how_say_no',
      labelEn: 'How to say no?',
      labelSw: 'Jinsi ya kukataa',
      nextNodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PEER_PRESSURE_02',
      optionValue: 'set_goals',
      labelEn: 'Planning the future',
      labelSw: 'Kupanga Malengo',
      nextNodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PEER_PRESSURE_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      optionValue: 'how_refuse',
      labelEn: 'How to refuse?',
      labelSw: 'Nina kataaje?',
      nextNodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      optionValue: 'what_consent',
      labelEn: 'What is consent?',
      labelSw: 'Ridhaa ni nini?',
      nextNodeKey: 'UNDERSTANDING_CONSENT_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_01',
      optionValue: 'peer_pressure',
      labelEn: 'Whats peer pressure?',
      labelSw: 'Shinikizo la rika',
      nextNodeKey: 'PEER_PRESSURE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_02',
      optionValue: 'set_goals',
      labelEn: 'Planning the future',
      labelSw: 'Kupanga Malengo',
      nextNodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_02',
      optionValue: 'know_yourself',
      labelEn: 'How to be self aware',
      labelSw: 'Nataka kujitambua',
      nextNodeKey: 'SELF_IDENTIFICATION_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REFUSING_UNWANTED_SEXUAL_PRESSURE_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      optionValue: 'why_plan',
      labelEn: 'Why plan?',
      labelSw: 'Kwanini nijipange',
      nextNodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      optionValue: 'know_yourself',
      labelEn: 'How to be self aware',
      labelSw: 'Nataka kujitambua',
      nextNodeKey: 'SELF_IDENTIFICATION_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      optionValue: 'how_decide',
      labelEn: 'How to decide?',
      labelSw: 'Kufanya maamuzi',
      nextNodeKey: 'DECISION_MAKING_SKILLS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_02',
      optionValue: 'know_yourself',
      labelEn: 'How to be self aware',
      labelSw: 'Nataka kujitambua',
      nextNodeKey: 'SELF_IDENTIFICATION_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_02',
      optionValue: 'peer_pressure',
      labelEn: 'Whats peer pressure?',
      labelSw: 'Shinikizo la rika',
      nextNodeKey: 'PEER_PRESSURE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_01',
      optionValue: 'manage_emotions',
      labelEn: 'Managing emotions',
      labelSw: 'Kudhibiti mihemko',
      nextNodeKey: 'SELF_IDENTIFICATION_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_01',
      optionValue: 'wait_first',
      labelEn: 'Why wait',
      labelSw: 'Umuhimu wa subra?',
      nextNodeKey: 'SELF_IDENTIFICATION_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_01',
      optionValue: 'types_feelings',
      labelEn: 'Types of emotions',
      labelSw: 'Aina za hisia',
      nextNodeKey: 'SELF_IDENTIFICATION_04',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_02',
      optionValue: 'wait_first',
      labelEn: 'Why wait',
      labelSw: 'Umuhimu wa subra?',
      nextNodeKey: 'SELF_IDENTIFICATION_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_02',
      optionValue: 'types_feelings',
      labelEn: 'Types of emotions',
      labelSw: 'Aina za hisia',
      nextNodeKey: 'SELF_IDENTIFICATION_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_02',
      optionValue: 'handle_stress',
      labelEn: 'Handle stress?',
      labelSw: 'Kudhibiti msongo',
      nextNodeKey: 'SELF_IDENTIFICATION_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_03',
      optionValue: 'types_feelings',
      labelEn: 'Types of emotions',
      labelSw: 'Aina za hisia',
      nextNodeKey: 'SELF_IDENTIFICATION_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_03',
      optionValue: 'handle_stress',
      labelEn: 'Handle stress?',
      labelSw: 'Kudhibiti msongo',
      nextNodeKey: 'SELF_IDENTIFICATION_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_03',
      optionValue: 'value_yourself',
      labelEn: 'Self-esteem',
      labelSw: 'Kujithamini',
      nextNodeKey: 'SELF_IDENTIFICATION_06',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_04',
      optionValue: 'handle_stress',
      labelEn: 'Handle stress?',
      labelSw: 'Kudhibiti msongo',
      nextNodeKey: 'SELF_IDENTIFICATION_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_04',
      optionValue: 'value_yourself',
      labelEn: 'Self-esteem',
      labelSw: 'Kujithamini',
      nextNodeKey: 'SELF_IDENTIFICATION_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_04',
      optionValue: 'assertive',
      labelEn: 'Assertiveness',
      labelSw: 'Uthubutu',
      nextNodeKey: 'SELF_IDENTIFICATION_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_05',
      optionValue: 'value_yourself',
      labelEn: 'Self-esteem',
      labelSw: 'Kujithamini',
      nextNodeKey: 'SELF_IDENTIFICATION_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_05',
      optionValue: 'assertive',
      labelEn: 'Assertiveness',
      labelSw: 'Uthubutu',
      nextNodeKey: 'SELF_IDENTIFICATION_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_05',
      optionValue: 'why_health',
      labelEn: 'Why safe sex?',
      labelSw: 'Ngono salama',
      nextNodeKey: 'SELF_IDENTIFICATION_09',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_06',
      optionValue: 'assertive',
      labelEn: 'Assertiveness',
      labelSw: 'Uthubutu',
      nextNodeKey: 'SELF_IDENTIFICATION_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_06',
      optionValue: 'why_health',
      labelEn: 'Why safe sex?',
      labelSw: 'Ngono salama',
      nextNodeKey: 'SELF_IDENTIFICATION_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_06',
      optionValue: 'girl_choices',
      labelEn: 'Girls choices?',
      labelSw: 'Chaguo za binti',
      nextNodeKey: 'SELF_IDENTIFICATION_12',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_07',
      optionValue: 'high_assertive',
      labelEn: 'High assertiveness?',
      labelSw: 'Uthubutu wa juu',
      nextNodeKey: 'SELF_IDENTIFICATION_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_07',
      optionValue: 'why_health',
      labelEn: 'Why safe sex?',
      labelSw: 'Ngono salama',
      nextNodeKey: 'SELF_IDENTIFICATION_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_07',
      optionValue: 'girl_choices',
      labelEn: 'Girls choices?',
      labelSw: 'Chaguo za binti',
      nextNodeKey: 'SELF_IDENTIFICATION_12',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_08',
      optionValue: 'why_health',
      labelEn: 'Why safe sex?',
      labelSw: 'Ngono salama',
      nextNodeKey: 'SELF_IDENTIFICATION_09',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_08',
      optionValue: 'girl_choices',
      labelEn: 'Girls choices?',
      labelSw: 'Chaguo za binti',
      nextNodeKey: 'SELF_IDENTIFICATION_12',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_08',
      optionValue: 'more_choices',
      labelEn: 'More choices?',
      labelSw: 'Chaguo zaidi?',
      nextNodeKey: 'SELF_IDENTIFICATION_10',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_09',
      optionValue: 'girl_choices',
      labelEn: 'Girls choices?',
      labelSw: 'Chaguo za binti',
      nextNodeKey: 'SELF_IDENTIFICATION_12',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_09',
      optionValue: 'more_choices',
      labelEn: 'More choices?',
      labelSw: 'Chaguo zaidi?',
      nextNodeKey: 'SELF_IDENTIFICATION_10',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_09',
      optionValue: 'boys_choices',
      labelEn: 'Boys choices?',
      labelSw: 'Chaguo za wavulana?',
      nextNodeKey: 'SELF_IDENTIFICATION_11',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_12',
      optionValue: 'more_choices',
      labelEn: 'More choices?',
      labelSw: 'Chaguo zaidi?',
      nextNodeKey: 'SELF_IDENTIFICATION_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_12',
      optionValue: 'boys_choices',
      labelEn: 'Boys choices?',
      labelSw: 'Chaguo za wavulana?',
      nextNodeKey: 'SELF_IDENTIFICATION_11',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_12',
      optionValue: 'set_goals',
      labelEn: 'Planning the future',
      labelSw: 'Kupanga Malengo',
      nextNodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_10',
      optionValue: 'boys_choices',
      labelEn: 'Boys choices?',
      labelSw: 'Chaguo za wavulana?',
      nextNodeKey: 'SELF_IDENTIFICATION_11',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_10',
      optionValue: 'set_goals',
      labelEn: 'Planning the future',
      labelSw: 'Kupanga Malengo',
      nextNodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_10',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_11',
      optionValue: 'set_goals',
      labelEn: 'Planning the future',
      labelSw: 'Kupanga Malengo',
      nextNodeKey: 'GOAL_SETTING_AND_FUTURE_PLANNING_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_11',
      optionValue: 'relationships',
      labelEn: 'Healthy relations',
      labelSw: 'Mahusiano mema',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SELF_IDENTIFICATION_11',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
  ],
};
