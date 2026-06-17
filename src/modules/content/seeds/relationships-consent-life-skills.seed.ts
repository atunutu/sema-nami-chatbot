import { InputType } from '../../../common/enums/input-type.enum';
import { Language } from '../../../common/enums/language.enum';
import { NodeType } from '../../../common/enums/node-type.enum';

export const relationshipsConsentLifeSkillsSeed = {
  category: {
    code: 'RELATIONSHIPS_CONSENT_LIFE_SKILLS',
    titleEn: 'Relationships, Consent and Life Skills',
    titleSw: 'Mahusiano, Ridhaa na Stadi za Maisha',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 4,
    isActive: true,
  },

  topic: {
    code: 'RELATIONSHIPS_CONSENT_LIFE_SKILLS',
    titleEn: 'Relationships, Consent and Life Skills',
    titleSw: 'Mahusiano, Ridhaa na Stadi za Maisha',
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
      titleEn: 'Refusing Unwanted Sexual Pressure',
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
      titleEn: 'Goal Setting and Future Planning',
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
      messageText: `An unhealthy relationship is one where respect, trust, safety, and equality are missing. In unhealthy relationships, one person may try to control, manipulate, pressure, threaten, or harm another person.
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
      messageText: `Uhusiano usio na afya ni ule ambapo heshima, uaminifu, usalama, na usawa vinakosekana. Katika mahusiano yasiyo na afya, mtu mmoja anaweza kujaribu kudhibiti, kuendesha, kumshinikiza, kutishia, au kumdhuru mtu mwingine.
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Warning Signs
● Controlling Behaviour Examples: Telling someone who they can talk to, demanding passwords, monitoring phone calls or messages or preventing someone from attending school.
● Jealousy Examples: Constant accusations, demanding proof of loyalty and becoming angry over normal friendships.
● Pressure Examples: Pressuring someone into a relationship, pressuring someone to have sex, pressuring someone to send private photos.
● Emotional Abuse Examples: Insults, humiliation, threats and constant criticism.
● Physical Violence Examples: Slapping, hitting, pushing and physical intimidation`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'UNHEALTHY_RELATIONSHIPS',
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Ishara za Onyo
● Mifano ya Kudhibiti Tabia: Kumwambia mtu ambaye anaweza kuzungumza naye, kudai nywila, kufuatilia simu au ujumbe au kumzuia mtu kuhudhuria shule.
● Mifano ya Wivu: Shutuma za mara kwa mara, kudai uthibitisho wa uaminifu na kukasirika kwa urafiki wa kawaida.
● Mifano ya Shinikizo: Kumshinikiza mtu kwenye uhusiano, kumshinikiza mtu kufanya ngono, kumshinikiza mtu kutuma picha za faragha.
● Mifano ya Unyanyasaji wa Kihisia: Matusi, aibu, vitisho na ukosoaji wa mara kwa mara.
● Mifano ya Ukatili wa Kimwili: Kupigwa kofi, kupigwa, kusukuma na vitisho vya kimwili`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `A healthy relationship is a relationship where people treat each other with respect, honesty, trust, kindness, and care. Healthy relationships can exist between friends, family members, classmates, romantic partners, and community members.
A healthy relationship helps people feel safe, valued, supported, and respected.
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
      messageText: `Uhusiano mzuri ni uhusiano ambapo watu hutendeana kwa heshima, uaminifu, uaminifu, wema, na kujaliana. Mahusiano mazuri yanaweza kuwepo kati ya marafiki, wanafamilia, wanafunzi wenza, wenzi wa kimapenzi, na wanajamii. Uhusiano mzuri huwasaidia watu kujisikia salama, wanathaminiwa, wanaungwa mkono, na wanaheshimika.
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Characteristics of Healthy Relationships
● Respect: Each person respects the other person's feelings, opinions, choices, beliefs, and boundaries. Examples, Listening when someone speaks, accepting "no" as an answer, not forcing someone to do something they do not want.
● Trust: People trust each other and are honest. Examples, Keeping promises, being truthful, and not spreading private information.
● Good Communication: People talk openly and respectfully. Examples, Expressing feelings calmly, asking questions when confused and solving disagreements through discussion.
● Equality: One person should not control the other. Examples, Decisions are discussed together, both people have equal value and no one uses fear or threats.
● Support: People encourage each other's goals, education, health, and wellbeing. Examples, supporting school attendance, encouraging positive choices and celebrating achievements.`,
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Sifa za Mahusiano Bora
● Heshima: Kila mtu anaheshimu hisia, maoni, chaguo, imani, na mipaka ya mtu mwingine. Mifano, Kusikiliza mtu anapozungumza, kukubali "hapana" kama jibu, kutolazimisha mtu kufanya kitu ambacho hawataki.
● Kuaminiana: Watu wanaaminiana na ni waaminifu. Mifano, Kutimiza ahadi, kuwa wakweli, na kutosambaza taarifa za faragha.
● Mawasiliano Mazuri: Watu huzungumza waziwazi na kwa heshima. Mifano, Kuelezea hisia kwa utulivu, kuuliza maswali wanapochanganyikiwa na kutatua kutokubaliana kupitia majadiliano.
● Usawa: Mtu mmoja hapaswi kumdhibiti mwingine. Mifano, Maamuzi hujadiliwa pamoja, watu wote wana thamani sawa na hakuna anayetumia hofu au vitisho.
● Usaidizi: Watu huhimizana malengo, elimu, afya, na ustawi. Mifano: Kuunga mkono mahudhurio shuleni, kuhimiza chaguzi chanya na kusherehekea mafanikio.`,
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Common Questions Adolescents Ask

Q: Is it healthy if my friend gets angry when I spend time with other friends?
A: Healthy friendships allow people to have multiple friendships and relationships.

Q: Can couples disagree and still have a healthy relationship?
A: Yes. Disagreements are normal. What matters is how they are handled.

Q: Should someone prove love by giving gifts?
A: Gifts are not proof of love. Respect, trust, and kindness are more important.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTHY_RELATIONSHIPS',
      nodeKey: 'HEALTHY_RELATIONSHIPS_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Maswali Yanayoulizwa Mara kwa Mara na Vijana

Swali: Je, ni jambo zuri rafiki yangu akikasirika ninapotumia muda na marafiki wengine?
Jibu: Urafiki mzuri huruhusu watu kuwa na urafiki na mahusiano mengi.

Swali: Je, wanandoa wanaweza kutokubaliana na bado wakawa na uhusiano mzuri?
Jibu: Ndiyo. Kutokubaliana ni jambo la kawaida. Kinachojalisha ni jinsi yanavyoshughulikiwa.

Swali: Je, mtu anapaswa kuthibitisha upendo kwa kutoa zawadi?
Jibu: Zawadi si uthibitisho wa upendo. Heshima, uaminifu, na wema ni muhimu zaidi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Consent means freely agreeing to something without pressure, force, fear, threats, manipulation, or deception.It is about respecting another person's choice and boundaries.A person must make a choice without pressure, fear, threats, force, manipulation, or guilt.
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
      messageText: `Ridhaa ina maana ya kukubali kwa uhuru kitu bila shinikizo, nguvu, hofu, vitisho, udanganyifu, au udanganyifu. Ni kuhusu kuheshimu chaguo na mipaka ya mtu mwingine. Mtu lazima afanye uchaguzi bila shinikizo, hofu, vitisho, nguvu, udanganyifu, au hatia.
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Examples of situations where consent is NOT freely given
"If you love me, prove it."
"Everyone else is doing it."
"If you refuse, I will leave you."
"If you refuse, I will tell everyone your secrets."
"I bought you gifts, so you owe me."
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Mifano ya hali ambapo ridhaa HAIPATWI kwa uhuru
"Ukinipenda, thibitisha."
"Kila mtu mwingine anafanya hivyo."
"Ukikataa, nitakuacha."
"Ukikataa, nitawaambia kila mtu siri zako."
"Nilikununulia zawadi, kwa hivyo una deni langu."
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `These are forms of pressure.
1. A person who feels forced is not giving true consent. Consent must be clear hence consent should never be assumed. Examples: "Yes, I am comfortable with that.", "I agree." When consent is unclear you can observe the following: silence, looking uncomfortable, avoiding eye contact, saying "maybe."and not responding.

2. A person can change their mind,someone may agree at first and later decide they no longer want to continue, changing one's mind is a right. Example girl agrees to go on a date but later decides she does not want physical contact her decision should be respected.

3. People should understand what they are agreeing to. A person cannot make a fully informed decision if important information is hidden or if they are deliberately misled. Example something is safe when it is not or giving false information to convince someone.

4. A person must be able to understand and make decisions. Someone may not be able to give meaningful consent if: They are very young( below 18 based on Tanzania laws), they are unconscious, they are asleep, they are heavily intoxicated, they are being threatened and when they do not understand what is happening.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_CONSENT',
      nodeKey: 'UNDERSTANDING_CONSENT_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Hizi ni aina za shinikizo.
1. Mtu anayehisi kulazimishwa hatoi ridhaa ya kweli. Ridhaa lazima iwe wazi kwa hivyo ridhaa haipaswi kudhaniwa kamwe. Mifano: "Ndiyo, nimeridhika na hilo.", "Nakubali." Wakati ridhaa haijulikani wazi unaweza kuona yafuatayo; ukimya, kuonekana kutoridhika, kuepuka kutazamana machoni, kusema "labda." na kutojibu.

2. Mtu anaweza kubadilisha mawazo yake, mtu anaweza kukubali mwanzoni na baadaye akaamua kuwa hataki tena kuendelea, kubadilisha mawazo yake ni haki. Mfano: Msichana anakubali kwenda kwenye miadi lakini baadaye anaamua hataki mawasiliano ya kimwili. Uamuzi wake unapaswa kuheshimiwa.

3. Watu wanapaswa kuelewa wanachokubaliana nacho. Mtu hawezi kufanya uamuzi kamili ikiwa taarifa muhimu zimefichwa au ikiwa zimepotoshwa kimakusudi. Mfano: Kujifanya kitu ni salama wakati si salama au kutoa taarifa za uongo ili kumshawishi mtu.

4. Mtu lazima aweze kuelewa na kufanya maamuzi. Mtu anaweza asiweze kutoa idhini yenye maana ikiwa: Ni mdogo sana (chini ya miaka 18 kulingana na sheria za Tanzania), hana fahamu, amelala, amelewa sana, anatishiwa na asipoelewa kinachoendelea.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Respect and boundaries are important parts of healthy relationships, friendships, families, and communities. 
Respect means treating yourself and others with kindness, dignity, honesty, and consideration. 
It involves listening to others, valuing their opinions, accepting differences, and recognizing that everyone deserves to be treated fairly regardless of their age, gender, background, or beliefs.
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
Inahusisha kuwasikiliza wengine, kuthamini maoni yao, kukubali tofauti, na kutambua kwamba kila mtu anastahili kutendewa kwa haki bila kujali umri wao, jinsia, historia, au imani.
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Boundaries are the personal limits people set to protect their physical, emotional, and mental wellbeing. 
Boundaries help individuals decide what makes them feel comfortable, safe, and respected. 
Everyone has the right to set boundaries about their body, personal space, emotions, belongings, time, and relationships. 
For example, a young person may choose not to share personal information, may not want to be hugged, or may not feel comfortable participating in certain activities. 
These decisions should be respected.`,
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Mipaka ni mipaka ya kibinafsi ambayo watu huweka ili kulinda ustawi wao wa kimwili, kihisia, na kiakili. 
Mipaka huwasaidia watu kuamua kinachowafanya wajisikie vizuri, salama, na kuheshimiwa. 
Kila mtu ana haki ya kuweka mipaka kuhusu mwili wake, nafasi yake binafsi, hisia, mali, wakati, na mahusiano. 
Kwa mfano, kijana anaweza kuchagua kutoshiriki taarifa zake binafsi, huenda hataki kukumbatiwa, au huenda asijisikie vizuri kushiriki katika shughuli fulani. 
Maamuzi haya yanapaswa kuheshimiwa.`,
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Understanding boundaries helps adolescents build healthy relationships and protect themselves from pressure, manipulation, exploitation, and abuse. 
Respecting someone's boundaries means accepting their decisions without anger, threats, guilt, or pressure. 
Similarly, young people should learn to communicate their own boundaries clearly and confidently.`,
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Kuelewa mipaka huwasaidia vijana kujenga mahusiano mazuri na kujilinda kutokana na shinikizo, udanganyifu, unyonyaji, na unyanyasaji. 
Kuheshimu mipaka ya mtu kunamaanisha kukubali maamuzi yao bila hasira, vitisho, hatia, au shinikizo. 
Vile vile, vijana wanapaswa kujifunza kuwasiliana mipaka yao wenyewe kwa uwazi na kwa kujiamini.
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
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Healthy relationships are built on mutual respect, trust, communication, and understanding. 
When people respect each other's boundaries, they create safer environments where everyone feels valued and heard. 
Learning about respect and boundaries can help adolescents develop self-confidence, make informed decisions, maintain healthy friendships and relationships, and reduce the risk of conflict, violence, and unhealthy behaviors.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'RESPECT_AND_BOUNDARIES',
      nodeKey: 'RESPECT_AND_BOUNDARIES_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Mahusiano mazuri yanajengwa juu ya heshima ya pande zote, uaminifu, mawasiliano, na uelewa. 
Watu wanapoheshimu mipaka ya kila mmoja, huunda mazingira salama zaidi ambapo kila mtu anahisi anathaminiwa na kusikilizwa. 
Kujifunza kuhusu heshima na mipaka kunaweza kuwasaidia vijana kukuza kujiamini, kufanya maamuzi sahihi, kudumisha urafiki na mahusiano mazuri, na kupunguza hatari ya migogoro, vurugu, na tabia zisizofaa.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },
  ],

  contentNodeOptions: [
    // add in chunks
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },

    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNHEALTHY_RELATIONSHIPS_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'HEALTHY_RELATIONSHIPS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTHY_RELATIONSHIPS_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'UNDERSTANDING_CONSENT_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'UNDERSTANDING_CONSENT_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },

    {
      nodeKey: 'UNDERSTANDING_CONSENT_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'UNDERSTANDING_CONSENT_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },

    {
      nodeKey: 'UNDERSTANDING_CONSENT_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_CONSENT_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_03',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'RESPECT_AND_BOUNDARIES_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_04',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_04',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'RESPECT_AND_BOUNDARIES_04',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },
  ],
};
