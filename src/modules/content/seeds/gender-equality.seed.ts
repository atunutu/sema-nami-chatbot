import { InputType } from '../../../common/enums/input-type.enum';
import { Language } from '../../../common/enums/language.enum';
import { NodeType } from '../../../common/enums/node-type.enum';

export const genderEqualityAndRightsSeed = {
  category: {
    code: 'GENDER_EQUALITY_AND_RIGHTS',
    titleEn: 'Gender Equality',
    titleSw: 'Jinsia, Usawa na Haki',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 5,
    isActive: true,
  },

  topic: {
    code: 'GENDER_EQUALITY_AND_RIGHTS',
    titleEn: 'Gender Equality',
    titleSw: 'Jinsia, Usawa na Haki',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 1,
    isActive: true,
  },

  subtopics: [
    {
      code: 'UNDERSTANDING_GENDER',
      titleEn: 'Understanding Gender',
      titleSw: 'Kuelewa Jinsia',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 1,
      isActive: true,
    },
    {
      code: 'GENDER_ROLES_AND_STEREOTYPES',
      titleEn: 'Gender Roles',
      titleSw: 'Majukumu ya Kijinsia',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 2,
      isActive: true,
    },
    {
      code: 'TYPES_OF_VIOLENCE',
      titleEn: 'Types of Violence',
      titleSw: 'Aina za ukatili',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 3,
      isActive: true,
    },
    {
      code: 'CHILDRENS_RIGHTS',
      titleEn: "Children's rights",
      titleSw: 'Haki za watoto',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 4,
      isActive: true,
    },
    {
      code: 'ADOLESCENTS_RIGHTS',
      titleEn: "Adolescent's rights",
      titleSw: 'Haki za vijana balehe',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 5,
      isActive: true,
    },
    {
      code: 'PROTECTION_FROM_ABUSE',
      titleEn: 'Protection from Abuse',
      titleSw: 'Ulinzi dhidi ya ukatili',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 6,
      isActive: true,
    },
    {
      code: 'CHILDS_MARRIAGE',
      titleEn: 'Child marriages',
      titleSw: 'Ndoa za utotoni',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 7,
      isActive: true,
    },
    {
      code: 'SEXUAL_EXPLOITATION',
      titleEn: 'Sexual exploitation',
      titleSw: 'Unyonyaji wa kingono',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 8,
      isActive: true,
    },
    {
      code: 'TRANSACTIONAL_RELATIONSHIPS',
      titleEn: 'Transactional relationships',
      titleSw: 'Mahusiano ya kubadilishana vitu',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 9,
      isActive: true,
    },
    {
      code: 'REPORTING_ABUSE',
      titleEn: 'Reporting abuse',
      titleSw: 'Kuripoti ukatili',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 10,
      isActive: true,
    },
  ],

  contentNodes: [
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Growing up comes with many new experiences, and you may notice that people sometimes have different expectations for boys and girls. Understanding these expectations can help you make informed choices while respecting yourself and others.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kukua huja na uzoefu mwingi mpya, na unaweza kugundua kuwa wakati mwingine watu huwa na matarajio tofauti kwa wavulana na wasichana. Kuelewa matarajio haya kunaweza kukusaidia kufanya maamuzi sahihi huku ukijiheshimu wewe mwenyewe na wengine.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `As young people grow, they often notice that society has different expectations for boys and girls. These expectations can influence how people dress, behave, express emotions, choose careers, or participate in family and community activities. These expectations are often shaped by culture and society, and they can change over time.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vijana wanapokua, mara nyingi hugundua kuwa jamii ina matarajio tofauti kwa wavulana na wasichana. Matarajio haya yanaweza kushawishi jinsi watu wanavyovaa, wanavyotenda, wanavyoonyesha hisia, wanavyochagua kazi, au kushiriki katika shughuli za kifamilia na kijamii. Matarajio haya mara nyingi huundwa na utamaduni na jamii, na yanaweza kubadilika baada ya muda.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `It's important to remember that every person deserves equal respect, opportunities, safety, and support, regardless of whether they are a boy or a girl. Everyone has unique talents, strengths, and dreams, and no one should feel limited because of their gender.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ni muhimu kukumbuka kwamba kila mtu anastahili heshima sawa, fursa, usalama, na usaidizi, bila kujali kama ni mvulana au msichana. Kila mtu ana vipaji, nguvu, na ndoto za kipekee, na hakuna mtu anayepaswa kuhisi amepunguzwa kwa sababu ya jinsia yake.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Young people should be free to develop their talents, pursue education, express themselves respectfully, and make positive life choices without being held back by harmful stereotypes or unfair expectations. When young people are encouraged to follow their interests and abilities, they are more likely to reach their full potential.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vijana wanapaswa kuwa huru kukuza vipaji vyao, kufuata elimu, kujieleza kwa heshima, na kufanya maamuzi chanya ya maisha bila kuzuiwa na dhana potofu au matarajio yasiyo ya haki. Vijana wanapohimizwa kufuata mambo wanayopenda na uwezo wao, wana uwezekano mkubwa wa kufikia uwezo wao kamili.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Appreciating diversity and treating others fairly helps build healthy relationships, confidence, and stronger communities. Respecting one another's differences creates environments where everyone feels valued, included, and able to contribute in meaningful ways.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kuthamini utofauti na kuwatendea wengine kwa haki husaidia kujenga mahusiano mazuri, kujiamini, na jamii zenye nguvu. Kuheshimu tofauti za kila mmoja hujenga mazingira ambapo kila mtu anahisi anathaminiwa, amejumuishwa, na anaweza kuchangia kwa njia zenye maana.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Remember, equality doesn't mean everyone is the same - it means everyone deserves the same respect, opportunities, and chance to succeed. By treating others with kindness, fairness, and respect, you help create a safer and more supportive community for everyone.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kumbuka, usawa haimaanishi kwamba kila mtu ni sawa - inamaanisha kwamba kila mtu anastahili heshima, fursa, na nafasi sawa ya kufanikiwa. Kwa kuwatendea wengine kwa wema, haki, na heshima, unasaidia kuunda jamii salama na inayounga mkono zaidi kila mtu.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Would you like to learn more about gender equality, challenging harmful stereotypes, respectful relationships, or promoting inclusion in your community? I'm here to help.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Je, ungependa kujifunza zaidi kuhusu usawa wa kijinsia, kupinga dhana potofu zenye madhara, mahusiano ya heshima, au kukuza ujumuishaji katika jamii yako? Niko hapa kusaidia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_08',
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
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_08',
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
      sortOrder: 8,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Let's talk about gender and societal expectations.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Tuongee kuhusu jinsia na matarajio ya jamii.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● Society often has different expectations for boys and girls - but everyone deserves equal respect.
● Young people should be free to pursue their talents without being constrained by gender stereotypes.
● Valuing diversity helps build healthy relationships and communities.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● Jamii mara nyingi ina matarajio tofauti kwa wavulana na wasichana - lakini kila mtu anastahili heshima sawa.
● Vijana wanapaswa kuwa huru kufuata vipaji vyao bila kuzuiwa na dhana potofu za kijinsia.
● Kuthamini utofauti husaidia kujenga mahusiano na jamii zenye afya.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `True or False: Boys and girls deserve equal opportunities.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kweli au Uongo: Wavulana na wasichana wanastahili fursa sawa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Correct: A - True. Everyone deserves equal opportunity and respect.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Sahihi: A - Kweli. Kila mtu anastahili fursa na heshima sawa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Not quite.

Correct: A - True. Everyone deserves equal opportunity and respect.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Si sahihi.

Sahihi: A - Kweli. Kila mtu anastahili fursa na heshima sawa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Have you ever seen gender stereotypes hold someone back?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Umewahi kuona dhana potofu za kijinsia zikimzuia mtu?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },

    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Do you have an experience you want to talk about? We're here.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'UNDERSTANDING_GENDER',
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Una uzoefu unaotaka kuzungumza kuhusu hili? Tuko hapa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `This is a great question! Many people hear the words sex and gender used together, but they do not mean the same thing. Understanding the difference can help us better understand ourselves, respect others, and challenge harmful stereotypes.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hili ni swali zuri! Watu wengi husikia maneno ngono na jinsia yakitumika pamoja, lakini hayamaanishi kitu kimoja. Kuelewa tofauti kunaweza kutusaidia kujielewa vyema, kuwaheshimu wengine, na kupinga dhana potofu zenye madhara.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `What is Sex?

Sex refers to the biological differences between females and males that people are born with. These differences include physical and reproductive characteristics.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ngono ni nini?

Ngono inarejelea tofauti za kibiolojia kati ya wanawake na wanaume ambazo watu huzaliwa nazo. Tofauti hizi zinajumuisha sifa za kimwili na uzazi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `For example:
● Females produce eggs, can become pregnant, give birth, and breastfeed.
● Males produce sperm.

These biological characteristics are determined by the body and do not change because of social expectations or cultural beliefs.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kwa mfano:
● Wanawake hutoa mayai, wanaweza kupata mimba, kuzaa, na kunyonyesha.
● Wanaume hutoa mbegu za kiume.

Sifa hizi za kibiolojia huamuliwa na mwili na hazibadiliki kwa sababu ya matarajio ya kijamii au imani za kitamaduni.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `What is Gender?

Gender refers to the roles, responsibilities, behaviours, and expectations that society assigns to women and men. These expectations are created by communities and cultures, and they can vary from one place to another and change over time.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Jinsia ni nini?

Jinsia inarejelea majukumu, majukumu, tabia, na matarajio ambayo jamii inawapa wanawake na wanaume. Matarajio haya huundwa na jamii na tamaduni, na yanaweza kutofautiana kutoka sehemu moja hadi nyingine na kubadilika baada ya muda.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `In other words, gender is about what society believes women and men should do, how they should behave, and what roles they are expected to play.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kwa maneno mengine, jinsia ni kuhusu kile ambacho jamii inaamini wanawake na wanaume wanapaswa kufanya, jinsi wanavyopaswa kuishi, na majukumu gani wanatarajiwa kucheza.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Common Expectations of Men

In many communities, men are often expected to:
● Be leaders or heads of the family.
● Be brave and strong.
● Have many romantic partners.
● Bring money home as the main breadwinner.
● Make important family decisions.
● Work hard.
● Be assertive.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Matarajio ya Kawaida ya Wanaume

Katika jamii nyingi, wanaume mara nyingi wanatarajiwa:
● Kuwa viongozi au vichwa vya familia.
● Kuwa jasiri na hodari.
● Kuwa na wapenzi wengi wa kimapenzi.
● Leta pesa nyumbani kama mlinzi mkuu.
● Fanya maamuzi muhimu ya kifamilia.
● Fanya kazi kwa bidii.
● Kuwa na ujasiri.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Common Expectations of Women

Similarly, women are often expected to:
● Get married.
● Raise children.
● Do most or all of the household chores.
● Have only one romantic partner.
● Depend on a man for financial support.
● Be humble and obedient.
● Always be clean and beautiful.
● Be gentle and caring.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Matarajio ya Kawaida ya Wanawake

Vivyo hivyo, wanawake mara nyingi wanatarajiwa:
● Kuoa.
● Kulea watoto.
● Kufanya kazi nyingi au zote za nyumbani.
● Kuwa na mwenzi mmoja tu wa kimapenzi.
● Mtegemee mwanaume kwa usaidizi wa kifedha.
● Kuwa mnyenyekevu na mtiifu.
● Kuwa msafi na mrembo kila wakati.
● Kuwa mpole na mwenye kujali.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `It's important to remember that these are examples of gender expectations - not rules that every person must follow. These expectations are shaped by society and culture, which means they can differ across communities and change over time.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ni muhimu kukumbuka kwamba hizi ni mifano ya matarajio ya kijinsia - sio sheria ambazo kila mtu lazima azifuate. Matarajio haya yanaundwa na jamii na utamaduni, ambayo ina maana kwamba yanaweza kutofautiana katika jamii na kubadilika baada ya muda.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Some gender expectations can limit opportunities or create unfair pressure for both girls and boys. For example, boys may feel they should never show emotion, while girls may feel they should always put others' needs before their own. Everyone should have the opportunity to develop their talents, make their own choices, and be treated with equal respect, regardless of gender.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Baadhi ya matarajio ya kijinsia yanaweza kupunguza fursa au kusababisha shinikizo lisilo la haki kwa wasichana na wavulana. Kwa mfano, wavulana wanaweza kuhisi hawapaswi kamwe kuonyesha hisia, huku wasichana wakihisi wanapaswa kuweka mahitaji ya wengine mbele ya yao. Kila mtu anapaswa kuwa na fursa ya kukuza vipaji vyao, kufanya maamuzi yao wenyewe, na kutendewa kwa heshima sawa, bila kujali jinsia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_10',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Understanding the difference between sex and gender helps us appreciate diversity, promote equality, and challenge harmful stereotypes. When girls and boys are given equal opportunities to learn, lead, express themselves, and pursue their goals, everyone benefits.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_10',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kuelewa tofauti kati ya jinsia na jinsia hutusaidia kuthamini utofauti, kukuza usawa, na kupinga dhana potofu zenye madhara. Wasichana na wavulana wanapopewa fursa sawa za kujifunza, kuongoza, kujieleza, na kufuata malengo yao, kila mtu hufaidika.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 10,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_11',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Would you like to learn more about gender equality, gender stereotypes, gender-based violence, healthy relationships, or respectful communication? I'm here to help.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 11,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_11',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Je, ungependa kujifunza zaidi kuhusu usawa wa kijinsia, dhana potofu za kijinsia, unyanyasaji unaotokana na jinsia, mahusiano yenye afya, au mawasiliano ya heshima? Niko hapa kukusaidia.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 11,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_12',
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
      sortOrder: 12,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_12',
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
      sortOrder: 12,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Gender roles - where do they come from?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Majukumu ya kijinsia - yanatoka wapi?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● Sex is a biological difference; gender is the roles that society assigns to men and women.
● Expectations like 'men should be leaders' or 'women should do housework' come from society, not from nature.
● These expectations can change as society changes.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● JINSI ni tofauti ya kibiolojia; JINSIA ni majukumu ambayo jamii huyapanga kwa wanaume na wanawake.
● Matarajio kama 'mwanaume awe kiongozi' au 'mwanamke afanye kazi za nyumbani' hutoka kwa jamii, si kwa asili.
● Matarajio haya yanaweza kubadilika kadri jamii inavyobadilika.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `True or False: Gender roles never change.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kweli au Uongo: Majukumu ya kijinsia hayabadiliki kamwe.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Correct: B - False. They can change as time and society change.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Sahihi: B - Uongo. Yanaweza kubadilika kadri wakati na jamii zinavyobadilika.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Not quite.

Correct: B - False. They can change as time and society change.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Si sahihi.

Sahihi: B - Uongo. Yanaweza kubadilika kadri wakati na jamii zinavyobadilika.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Have you ever felt restricted by gender expectations?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Umewahi kuhisi kizuizi kutokana na matarajio ya kijinsia?
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },

    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Would you like to talk about this further? We're here.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ungependa kuzungumza kuhusu hili zaidi? Tuko hapa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },

    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Everyone deserves to live in a safe environment where they are treated with dignity, respect, and kindness. Understanding what violence is can help you recognize it, protect yourself, and know when to seek help.

Violence is any act or behaviour that causes physical, emotional, social, or economic harm to another person. It can involve oppression, abuse, control, the use of force, coercion, or actions that intentionally cause harm. Violence is never acceptable, regardless of who commits it or where it happens.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kila mtu anastahili kuishi katika mazingira salama ambapo anatendewa kwa heshima, heshima, na wema. Kuelewa ukatili ni nini kunaweza kukusaidia kuutambua, kujilinda, na kujua wakati wa kutafuta msaada.

Ukatili ni kitendo au tabia yoyote inayosababisha madhara ya kimwili, kihisia, kijamii, au kiuchumi kwa mtu mwingine. Inaweza kuhusisha ukandamizaji, unyanyasaji, udhibiti, matumizi ya nguvu, kulazimisha, au vitendo vinavyosababisha madhara kimakusudi. Ukatili haukubaliki kamwe, bila kujali ni nani anayeufanya au mahali unapotokea.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `What is Sexual Violence?

Sexual violence is any act of violence committed against a woman, man, or child that harms them because of their gender or involves sexual acts without their consent. Sexual violence can include sexual abuse, psychological abuse, harmful traditional practices, and economic or social abuse. Although anyone can experience sexual violence, women and children are affected more often than men.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ukatili wa Kijinsia ni nini?

Ukatili wa kingono ni kitendo chochote cha ukatili kinachofanywa dhidi ya mwanamke, mwanamume, au mtoto kinachowadhuru kwa sababu ya jinsia yao au kinachohusisha vitendo vya kingono bila ridhaa yao. Ukatili wa kingono unaweza kujumuisha unyanyasaji wa kingono, unyanyasaji wa kisaikolojia, desturi za kitamaduni zenye madhara, na unyanyasaji wa kiuchumi au kijamii. Ingawa mtu yeyote anaweza kupitia ukatili wa kingono, wanawake na watoto huathiriwa mara nyingi zaidi kuliko wanaume.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Types of Violence

Violence can take different forms, and it's important to recognize that not all violence leaves visible injuries.

Physical Violence
Physical violence is any act that causes physical harm or pain to another person. The injuries may be visible, or the person may simply experience pain.

Examples include:
● Being beaten.
● Being pushed.
● Being injured.
● Any other act that causes physical harm.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Aina za Ukatili

Ukatili unaweza kuchukua aina tofauti, na ni muhimu kutambua kwamba si ukatili wote huacha majeraha yanayoonekana.

Ukatili wa Kimwili
Ukatili wa kimwili ni kitendo chochote kinachosababisha madhara ya kimwili au maumivu kwa mtu mwingine. Majeraha yanaweza kuonekana, au mtu anaweza kupata maumivu tu.

Mifano ni pamoja na:
● Kupigwa.
● Kusukumwa.
● Kujeruhiwa.
● Kitendo kingine chochote kinachosababisha madhara ya kimwili.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Emotional or Psychological Violence

Emotional or psychological violence involves actions or words that cause emotional pain or affect a person's mental wellbeing.

Examples include:
● Being insulted.
● Being humiliated.
● Being discriminated against.
● Being abandoned.
● Being threatened.

Although emotional violence may not leave visible injuries, it can have a serious and lasting impact on a person's confidence, mental health, and overall wellbeing.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vurugu za Kihisia au Kisaikolojia

Vurugu za kihisia au kisaikolojia huhusisha vitendo au maneno yanayosababisha maumivu ya kihisia au kuathiri ustawi wa akili wa mtu.

Mifano ni pamoja na:
● Kutukanwa.
● Kufedheheshwa.
● Kubaguliwa.
● Kuachwa.
● Kutishiwa.

Ingawa vurugu za kihisia zinaweza zisiache majeraha yanayoonekana, zinaweza kuwa na athari kubwa na ya kudumu kwa kujiamini kwa mtu, afya ya akili, na ustawi wa jumla.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Economic Violence

Economic violence occurs when someone is denied opportunities to earn an income, become financially independent, or contribute to their own development.

Examples include:
● Discrimination in economic opportunities.
● Human trafficking.
● Preventing someone from accessing financial resources or opportunities.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vurugu za Kiuchumi

Vurugu za kiuchumi hutokea wakati mtu ananyimwa fursa za kupata kipato, kujitegemea kifedha, au kuchangia maendeleo yake mwenyewe.

Mifano ni pamoja na:
● Ubaguzi katika fursa za kiuchumi.
● Usafirishaji haramu wa binadamu.
● Kumzuia mtu kupata rasilimali za kifedha au fursa.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Sexual Violence

Sexual violence is any sexual act carried out without a person's free and informed consent. It can happen to anyone and is never the victim's fault.

Examples include:
● Sexual harassment.
● Sexual abuse.
● Female genital mutilation (FGM).
● Forced sex work.
● Sexual exploitation.
● Rape within marriage or intimate relationships.
● Rape.
● Sodomy.
● Touching or groping someone without their consent.
● Sharing or leaking nude photos without someone's consent.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vurugu za Kijinsia

Vurugu za kingono ni kitendo chochote cha kingono kinachofanywa bila ridhaa ya mtu huru na yenye taarifa. Inaweza kutokea kwa mtu yeyote na kamwe si kosa la mwathiriwa.

Mifano ni pamoja na:
● Unyanyasaji wa kingono.
● Unyanyasaji wa kingono.
● Ukeketaji wa wanawake (FGM).
● Kazi ya ngono ya kulazimishwa.
● Unyonyaji wa kingono.
● Ubakaji ndani ya ndoa au mahusiano ya karibu.
● Ubakaji.
● Ulawiti.
● Kumgusa au kumpapasa mtu bila ridhaa yake.
● Kushiriki au kuvuja picha za uchi bila ridhaa ya mtu.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Understanding Rape and Sodomy

Rape and sodomy are among the most serious forms of sexual violence because they can have lifelong physical, emotional, psychological, and social consequences for survivors.

Rape involves the forced physical penetration of a person without their consent. Consent must always be given freely, willingly, and without pressure, fear, threats, manipulation, or force.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kuelewa Ubakaji na Ulawiti

Ubakaji na ulawiti ni miongoni mwa aina mbaya zaidi za ukatili wa kingono kwa sababu zinaweza kuwa na matokeo ya kimwili, kihisia, kisaikolojia, na kijamii kwa waathirika.

Ubakaji unahusisha kupenya kwa nguvu kimwili kwa mtu bila ridhaa yake. Ridhaa lazima itolewe kwa uhuru, kwa hiari, na bila shinikizo, hofu, vitisho, kudanganywa, au nguvu.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Rape or sodomy can occur in different situations, including:
● Within marriage or intimate relationships.
● By a group of people.
● Between family members.
● Between strangers.

No matter who commits it, rape or sodomy is never acceptable and is never the survivor's fault.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ubakaji au ulawiti unaweza kutokea katika hali tofauti, ikiwa ni pamoja na:
● Ndani ya ndoa au mahusiano ya karibu.
● Na kundi la watu.
● Kati ya wanafamilia.
● Kati ya wageni.

Haijalishi ni nani anayefanya hivyo, ubakaji au ulawiti haukubaliki kamwe na kamwe si kosa la aliyenusurika.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Rapists and people who commit sodomy

Young people are often raped or sodomized by people they know and trust. These can be:
● Parents or guardians.
● Family friends.
● Family members.
● Neighbors.
● Strangers.
● Friends or lovers.
● Teachers.
● Religious leaders.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Wabakaji na walawiti

Vijana mara nyingi wanabakwa au kulawitiwa na watu wanaowafahamu na kuwaamini. Hao wanaweza kuwa:
● Wazazi au walezi.
● Marafiki wa familia.
● Mwanafamilia.
● Jirani.
● Mgeni.
● Rafiki au mpenzi.
● Walimu.
● Viongozi wa dini.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_10',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Effects of rape and sodomy include:
● Bruises and injuries during physical penetration.
● Genital mutilation for women.
● Sexually transmitted infections, including HIV.
● Unintended pregnancy.
● Abortion.
● Fear.
● Depression.
● Suicide.
● Possibility of becoming a drug user due to stress.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_10',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Madhara ya ubakaji na ulawiti ni pamoja na:
● Michubuko na majeraha wakati wa kuingiliwa kimwili.
● Kuharibika kwa viungo vya uzazi kwa mwanamke.
● Maambukizi ya magonjwa ya ngono ikiwemo VVU.
● Kupata mimba zisizotarajiwa.
● Utoaji mimba.
● Hofu.
● Sonona.
● Kujiua.
● Uwezekano wa kuwa mtumiaji wa dawa za kulevya kutokana na msongo wa mawazo.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_11',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Symptoms of a young person who has been raped or sodomized may include:
● Cannot walk or sit properly.
● Tearing or swelling.
● Itching of the genitals.
● Bleeding from the vagina or anus.
● Discharge from the vagina or anus.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 11,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_11',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Dalili za kijana aliyebakwa au kulawitiwa zinaweza kujumuisha:
● Hawezi kutembea au kukaa vizuri.
● Kuchanika au kuvimba.
● Kuwashwa sehemu za siri.
● Kutoka damu ukeni au njia ya haja kubwa.
● Kutoka uchafu ukeni au njia ya haja kubwa.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 11,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_12',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `How to prevent sexual violence:
● Avoiding dangerous environments that can lead to violence.
● Providing education about sexual violence to the community.
● Improving policies and laws.
● Having the courage to reject acts of violence.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 12,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_12',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Jinsi ya kuzuia unyanyasaji wa kijinsia:
● Kujiepusha na mazingira hatarishi yanayoweza kusababisha kufanyiwa ukatili.
● Kutoa elimu kuhusu ukatili wa kijinsia kwa jamii.
● Kuboresha sera na sheria.
● Kuwa na uthubutu wa kukataa vitendo vya unyanyasaji.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 12,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_13',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Steps to take after being subjected to sexual violence:
● Leave the dangerous area and go to a safe area.
● Preserve evidence. Do not clean your vagina or anus immediately after being raped or sodomized, and do not wash clothes. Preserve them for evidence.
● Take the names of witnesses.
● Report the incident of sexual violence early to the police station or to the authorities.
● Go to a health care facility as soon as possible, importantly within 72 hours.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 13,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_13',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hatua za kuchukua baada ya kufanyiwa ukatili wa kingono:
● Toka katika eneo hatarishi na uende eneo salama.
● Tunza ushahidi, usijisafishe ukeni au sehemu ya haja kubwa mara baada ya kubakwa au kulawitiwa wala kufua nguo. Tunza kwa ajili ya ushahidi.
● Chukua majina ya mashahidi.
● Toa taarifa za tukio la ukatili wa kingono mapema katika kituo cha polisi au kwa viongozi.
● Nenda katika kituo cha kutoa huduma za afya mapema iwezekanavyo, muhimu iwe ndani ya saa 72.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 13,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_14',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Groups of youth who are at highest risk of being affected by risky behavior include:
● Youth living in extreme poverty.
● Young people with physical or mental disabilities.
● Orphans.
● Young people whose parents were also abused in childhood.
● Young people from areas where the population is very strict about customs and traditions.
● Children living in vulnerable environments.
● Young people living in vulnerable areas such as truck parking lots, bus stands, mines, and similar places.
● Young people living away from their parents.
● Young people living in ghettos or brothels.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 14,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_14',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Makundi ya vijana ambao wako katika hatari zaidi ya kuathirika na vitendo hatarishi ni pamoja na:
● Vijana wanaoishi katika mazingira ya umasikini uliokithiri.
● Vijana wenye ulemavu wa mwili au akili.
● Yatima.
● Vijana ambao wazazi wao pia walinyanyaswa utotoni.
● Vijana wanaotoka maeneo ambayo wakazi wake wanazingatia sana mila na desturi potofu.
● Watoto wanaoishi katika mazingira hatarishi.
● Vijana wanaoishi katika maeneo hatarishi mfano vituo vya maegesho ya magari ya mizigo, stendi za mabasi, migodini n.k.
● Vijana wanaoishi mbali na wazazi.
● Vijana wanaoishi kwenye mageto au madanguro.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 14,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_15',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Services for victims of sexual violence include:
● Counseling.
● Health care.
● Legal assistance.
● Toll-free number 116, available through all networks as the National Child Helpline.

Note: Information on sexual violence can be provided to the Social Welfare Officer, Community Development Officer, Police Gender Desk, Ward Executive Officer, paralegals, health care center, and religious leaders.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 15,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_15',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Huduma kwa waathirika wa ukatili wa kingono ni pamoja na:
● Ushauri nasaha.
● Huduma ya afya.
● Usaidizi wa kisheria.
● Nambari ya simu isiyolipishwa 116 inapatikana kupitia mitandao yote kama Mstari wa Kitaifa wa Usaidizi wa Mtoto.

Kumbuka: Taarifa kuhusu ukatili wa kijinsia zinaweza kutolewa kwa Afisa wa Ustawi wa Jamii, Afisa wa Maendeleo ya Jamii, Dawati la Polisi Jinsia, Afisa Mtendaji wa Kata, wasaidizi wa kisheria, kituo cha huduma ya afya, na viongozi wa kidini.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 15,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_16',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you or someone you know has experienced any form of violence, remember that help is available. You deserve to be safe, supported, and treated with respect. Talking to a trusted adult, teacher, parent, guardian, healthcare provider, social welfare officer, or reporting to the appropriate authorities can help you access protection and support.

Would you like to learn more about consent, recognizing sexual exploitation, reporting violence, supporting a survivor, or where to find help? I'm here to support you.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 16,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_16',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ikiwa wewe au mtu unayemjua amepitia aina yoyote ya ukatili, kumbuka kwamba msaada unapatikana. Unastahili kuwa salama, kuungwa mkono, na kutendewa kwa heshima. Kuzungumza na mtu mzima unayemwamini, mwalimu, mzazi, mlezi, mtoa huduma ya afya, afisa wa ustawi wa jamii, au kuripoti kwa mamlaka husika kunaweza kukusaidia kupata ulinzi na usaidizi.

Je, ungependa kujifunza zaidi kuhusu ridhaa, kutambua unyanyasaji wa kijinsia, kuripoti ukatili, kumsaidia manusura, au wapi pa kupata msaada? Niko hapa kukusaidia.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 16,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_17',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you need health information, HIV testing, family planning services, pregnancy-related care, mental health support, protection from violence, or help with abuse, you do not have to face it alone. You can visit the nearest hospital, health centre, dispensary, or youth-friendly health service for confidential support and guidance. You may also speak to a trusted parent, guardian, teacher, counselor, social welfare officer, religious leader, or healthcare provider.

If you are experiencing violence, abuse, exploitation, neglect, forced marriage, sexual harassment, or any situation that makes you feel unsafe, seek help immediately from a trusted adult or the relevant authorities.

For additional support, guidance, or referrals, you can contact OVAH through:
Phone/WhatsApp: 0652 522 358`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 17,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_17',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ikiwa unahitaji taarifa za afya, huduma za upimaji wa VVU, uzazi wa mpango, huduma zinazohusiana na ujauzito, msaada wa afya ya akili, ulinzi dhidi ya ukatili, au msaada kuhusu unyanyasaji, usibaki peke yako. Unaweza kutembelea hospitali, kituo cha afya, zahanati, au huduma rafiki kwa vijana zilizopo karibu nawe kwa ushauri na huduma za siri na salama. Unaweza pia kuzungumza na mzazi, mlezi, mwalimu, mshauri, afisa ustawi wa jamii, kiongozi wa dini, au mtoa huduma za afya unayemwamini.

Ikiwa unapitia ukatili, unyanyasaji, unyonyaji, kutelekezwa, ndoa ya utotoni, ukatili wa kingono, au hali yoyote inayokufanya ujisikie kutokuwa salama, tafuta msaada mara moja kutoka kwa mtu mzima unayemwamini au mamlaka husika.

Kwa msaada zaidi, ushauri au maelekezo ya huduma zinazopatikana, unaweza kuwasiliana na OVAH kupitia:
Simu/WhatsApp: 0652 522 358`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 17,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Heavy topics - types of violence. We are with you.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mada nzito - aina za ukatili. Tuko pamoja nawe.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● Violence can be physical, emotional, economic, or sexual - all are wrong and not normal.
● Sexual violence includes touching without consent, rape, and forced sexual acts.
● No one deserves to be subjected to violence of any kind.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● Ukatili unaweza kuwa wa kimwili, kihisia, kiuchumi, au kingono - vyote ni vibaya na si vya kawaida.
● Ukatili wa kingono ni pamoja na kuguswa bila ridhaa, ubakaji, na kulazimishwa kufanya mambo ya ngono.
● Hakuna anayestahili kufanyiwa ukatili wa aina yoyote.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you are experiencing any kind of violence right now, contact us immediately or call 116, Child Help, free 24 hours a day.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kama unapitia hali yoyote ya ukatili sasa hivi, wasiliana nasi mara moja au piga simu 116, Msaada wa Mtoto, bure saa zote.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 103,
      isActive: true,
    },

    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Children's rights are the freedoms and protections that every child is entitled to simply because they are human beings.
These rights help children survive, grow, learn, participate, and be protected from harm.
In Tanzania, a child is any person below the age of 18 years.
Children's rights are protected by national laws and international agreements, including the Convention on the Rights of the Child and Tanzania's Law of the Child Act.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Haki za watoto ni uhuru na ulinzi ambao kila mtoto anastahili kupata kwa sababu tu ni binadamu.
Haki hizi huwasaidia watoto kuishi, kukua, kujifunza, kushiriki, na kulindwa kutokana na madhara.
Nchini Tanzania, mtoto ni mtu yeyote aliye chini ya umri wa miaka 18.
Haki za watoto zinalindwa na sheria za kitaifa na mikataba ya kimataifa, ikiwa ni pamoja na Mkataba wa Haki za Mtoto na  Sheria ya Mtoto ya Tanzania.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Children depend on adults for care, protection, and guidance.
Children's rights help ensure that every child:
    ● Is safe from violence and abuse.
    ● Has access to education.
    ● Receives healthcare.
    ● Has adequate food and shelter.
    ● Is treated with dignity and respect.
    ● Has opportunities to grow and develop.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Watoto wanategemea watu wazima kwa ajili ya matunzo, ulinzi, na mwongozo.
Haki za watoto husaidia kuhakikisha kwamba kila mtoto:
    ● Yuko salama kutokana na vurugu na unyanyasaji.
    ● Anapata elimu.
    ● Anapata huduma ya afya.
    ● Ana chakula na malazi ya kutosha.
    ● Anatendewa kwa utu na heshima.
    ● Ana fursa za kukua na kustawi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Every child deserves these rights, regardless of their background, gender, disability, religion, or where they live.
These rights exist to help every child reach their full potential and live in a safe and supportive environment.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kila mtoto anastahili haki hizi, bila kujali historia yake, jinsia, ulemavu, dini, au anapoishi.
Haki hizi zipo ili kumsaidia kila mtoto kufikia uwezo wake kamili na kuishi katika mazingira salama na yanayounga mkono.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Key rights of every child

Right to Education
Every child has the right to attend school and receive an education that helps them learn, develop skills, and prepare for the future.

Right to Health
Every child has the right to healthcare, accurate health information, and services that support their physical, mental, and emotional wellbeing.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Haki muhimu za kila mtoto

Haki ya Elimu
Kila mtoto ana haki ya kuhudhuria shule na kupata elimu inayomsaidia kujifunza, kukuza ujuzi, na kujiandaa kwa ajili ya mustakabali.

Haki ya Afya
Kila mtoto ana haki ya kupata huduma za afya, taarifa sahihi za afya, na huduma zinazounga mkono ustawi wao wa kimwili, kiakili, na kihisia.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Right to Protection
Children have the right to be protected from violence, neglect, exploitation, and abuse. No child should ever experience harm, and everyone deserves to feel safe.

Right to Participation
Children have the right to express their views, share their opinions, and be listened to on matters that affect their lives. Your voice matters, and your ideas deserve to be heard with respect.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Haki ya Ulinzi
Watoto wana haki ya kulindwa kutokana na vurugu, kupuuzwa, unyonyaji, na unyanyasaji. Hakuna mtoto anayepaswa kupata madhara, na kila mtu anastahili kujisikia salama.

Haki ya Kushiriki
Watoto wana haki ya kutoa maoni yao, kushiriki maoni yao, na kusikilizwa kuhusu mambo yanayoathiri maisha yao. Sauti yako ni muhimu, na mawazo yako yanastahili kusikilizwa kwa heshima.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Right to Identity
Every child has the right to a name, nationality, and legal identity. These rights help ensure that children are recognized and can access important services and protections.

Right to Survival and Development
Every child has the right to food, shelter, care, protection, and opportunities to develop their full potential in a safe and nurturing environment.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Haki ya Utambulisho
Kila mtoto ana haki ya jina, utaifa, na utambulisho wa kisheria. Haki hizi husaidia kuhakikisha kwamba watoto wanatambuliwa na wanaweza kupata huduma na ulinzi muhimu.

Haki ya Kuishi na Maendeleo
Kila mtoto ana haki ya chakula, malazi, matunzo, ulinzi, na fursa za kukuza uwezo wao kamili katika mazingira salama na ya malezi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Knowing your rights is an important step toward protecting yourself and supporting others.
If you ever feel that your rights-or another child's rights-are being ignored or violated, talk to a trusted parent, guardian, teacher, healthcare provider, social welfare officer, or another trusted adult.
There are people and services that can help protect you and ensure your rights are respected.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kujua haki zako ni hatua muhimu kuelekea kujilinda na kuwasaidia wengine.
Ukiwahi kuhisi kwamba haki zako-au haki za mtoto mwingine-zinapuuzwa au zinakiukwa, zungumza na mzazi, mlezi, mwalimu, mtoa huduma ya afya, afisa wa ustawi wa jamii, au mtu mzima mwingine anayeaminika.
Kuna watu na huduma zinazoweza kusaidia kukulinda na kuhakikisha haki zako zinaheshimiwa.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Would you like to learn more about adolescents' rights, protection from violence, reporting abuse, or where to seek help if a child's rights are not being respected? I'm here to support you.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Je, ungependa kujifunza zaidi kuhusu haki za vijana, ulinzi dhidi ya vurugu, kuripoti unyanyasaji, au wapi pa kutafuta msaada ikiwa haki za mtoto haziheshimiwi? Niko hapa kukusaidia.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Common Questions
Q: Do children's rights mean children can do anything they want?
A: No. Rights come with responsibilities and respect for others.

Q: Can adults ignore children's opinions?
A: Children should be listened to, especially on matters affecting their lives.

Q: Do boys and girls have equal rights?
A: Yes. Every child deserves equal treatment and opportunities.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Maswali ya Kawaida wanayojiuliza vijana
S: Je, haki za watoto zinamaanisha watoto wanaweza kufanya chochote wanachotaka?
J: Hapana. Haki huja na majukumu na heshima kwa wengine.

S: Je, watu wazima wanaweza kupuuza maoni ya watoto?
J: Watoto wanapaswa kusikilizwa, hasa katika masuala yanayoathiri maisha yao.

S: Je, wavulana na wasichana wana haki sawa?
J: Ndiyo. Kila mtoto anastahili kutendewa sawa na fursa.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_10',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you need health information, HIV testing, family planning services, pregnancy-related care, mental health support, protection from violence, or help with abuse, you do not have to face it alone. You can visit the nearest hospital, health centre, dispensary, or youth-friendly health service for confidential support and guidance. You may also speak to a trusted parent, guardian, teacher, counselor, social welfare officer, religious leader, or healthcare provider.

If you are experiencing violence, abuse, exploitation, neglect, forced marriage, sexual harassment, or any situation that makes you feel unsafe, seek help immediately from a trusted adult or the relevant authorities.

For additional support, guidance, or referrals, you can contact OVAH through:
Phone/WhatsApp: 0652 522 358`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_10',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ikiwa unahitaji taarifa za afya, huduma za upimaji wa VVU, uzazi wa mpango, huduma zinazohusiana na ujauzito, msaada wa afya ya akili, ulinzi dhidi ya ukatili, au msaada kuhusu unyanyasaji, usibaki peke yako. Unaweza kutembelea hospitali, kituo cha afya, zahanati, au huduma rafiki kwa vijana zilizopo karibu nawe kwa ushauri na huduma za siri na salama. Unaweza pia kuzungumza na mzazi, mlezi, mwalimu, mshauri, afisa ustawi wa jamii, kiongozi wa dini, au mtoa huduma za afya unayemwamini.

Ikiwa unapitia ukatili, unyanyasaji, unyonyaji, kutelekezwa, ndoa ya utotoni, ukatili wa kingono, au hali yoyote inayokufanya ujisikie kutokuwa salama, tafuta msaada mara moja kutoka kwa mtu mzima unayemwamini au mamlaka husika.

Kwa msaada zaidi, ushauri au maelekezo ya huduma zinazopatikana, unaweza kuwasiliana na OVAH kupitia:
Simu/WhatsApp: 0652 522 358`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Every child has rights - let's look at them.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kila mtoto ana haki - tuziangalie.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● Every person under the age of 18 has the right to education, health, protection, and a hearing.
● These rights are protected by Tanzanian law and international treaties.
● Lack of financial resources or a particular family situation does not deprive a child of his or her rights.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● Kila mtu chini ya miaka 18 ana haki ya elimu, afya, ulinzi, na kusikilizwa.
● Haki hizi zinalindwa na sheria za Tanzania na mikataba ya kimataifa.
● Kutokuwa na fedha au hali fulani ya familia hakumnyimi mtoto haki zake.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `True or False: Only rich children have rights.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kweli au Uongo: Watoto matajiri pekee ndio wenye haki.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Correct: B - False. Every child has rights regardless of their upbringing.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Sahihi: B - Uongo. Kila mtoto ana haki bila kujali malezi yake.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Not quite.
Correct: B - False. Every child has rights regardless of their upbringing.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Si sahihi.
Sahihi: B - Uongo. Kila mtoto ana haki bila kujali malezi yake.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Which right do you know best?`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ni haki gani unayoifahamu vizuri zaidi?`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Are your rights being violated? Tell us, we're here to help.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Haki zako zinakiukwa? Tuambie, tuko hapa kukusaidia.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },

    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `I'm glad you're learning about your rights.
Knowing your rights can help you make informed decisions, seek support when you need it, and understand that every young person deserves to be treated with dignity and respect.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Nimefurahi unajifunza kuhusu haki zako.
Kujua haki zako kunaweza kukusaidia kufanya maamuzi sahihi, kutafuta usaidizi unapouhitaji, na kuelewa kwamba kila kijana anastahili kutendewa kwa heshima na utu.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Adolescents have all the rights of children while also developing greater responsibility and independence as they grow.
These rights are designed to support your health, safety, education, participation, and overall development, helping you reach your full potential.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vijana wana haki zote za watoto huku pia wakikuza uwajibikaji na uhuru zaidi wanapokua.
Haki hizi zimeundwa ili kusaidia afya yako, usalama, elimu, ushiriki, na maendeleo kwa ujumla, kukusaidia kufikia uwezo wako kamili.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Important rights for adolescents

Right to Information
Young people have the right to receive accurate, age-appropriate information about their health, education, and wellbeing. Having reliable information helps you make informed and healthier decisions for your future.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Haki muhimu kwa vijana

Haki ya Kupata Taarifa
Vijana wana haki ya kupokea taarifa sahihi, zinazofaa umri wao kuhusu afya, elimu, na ustawi wao. Kuwa na taarifa za kuaminika hukusaidia kufanya maamuzi sahihi na yenye afya njema kwa ajili ya mustakabali wako.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Right to Safety
Every adolescent has the right to be protected from violence, exploitation, abuse, neglect, and any form of harm. You deserve to feel safe at home, at school, in your community, and online.

Right to Education
Every young person has the right to continue learning, develop new skills, and pursue opportunities that help them achieve their goals and build a brighter future.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Haki ya Usalama
Kila kijana ana haki ya kulindwa kutokana na vurugu, unyonyaji, unyanyasaji, kupuuzwa, na aina yoyote ya madhara. Unastahili kujisikia salama nyumbani, shuleni, katika jamii yako, na mtandaoni.

Haki ya Elimu
Kila kijana ana haki ya kuendelea kujifunza, kukuza ujuzi mpya, na kutafuta fursa zinazowasaidia kufikia malengo yao na kujenga mustakabali mzuri zaidi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Right to Health Services
Adolescents should be able to access appropriate health information and health services that support their physical, mental, and emotional wellbeing. Seeking healthcare when you need it is an important part of taking care of yourself.

Right to Be Heard
Young people have the right to express their views, share their opinions, and participate in decisions that affect their lives. Your voice matters, and your ideas and experiences deserve to be listened to with respect.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Haki ya Huduma za Afya
Vijana wanapaswa kuwa na uwezo wa kupata taarifa sahihi za afya na huduma za afya zinazounga mkono ustawi wao wa kimwili, kiakili, na kihisia. Kutafuta huduma ya afya unapoihitaji ni sehemu muhimu ya kujitunza.

Haki ya Kusikilizwa
Vijana wana haki ya kutoa maoni yao, kushiriki maoni yao, na kushiriki katika maamuzi yanayoathiri maisha yao. Sauti yako ni muhimu, na mawazo na uzoefu wako unastahili kusikilizwa kwa heshima.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `During adolescence, young people experience many changes and begin making important decisions about their education, relationships, health, and future.
Having access to accurate information, supportive adults, and safe environments can help you make healthier and more confident choices along the way.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Wakati wa ujana, vijana hupata mabadiliko mengi na huanza kufanya maamuzi muhimu kuhusu elimu yao, mahusiano, afya, na mustakabali wao.
Kuwa na upatikanaji wa taarifa sahihi, watu wazima wanaounga mkono, na mazingira salama kunaweza kukusaidia kufanya maamuzi yenye afya na ujasiri zaidi njiani.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Remember, knowing your rights also helps you recognize when those rights are not being respected.
If you ever feel unsafe, unheard, or believe your rights are being violated, don't hesitate to speak to a trusted parent, guardian, teacher, healthcare provider, social welfare officer, or another trusted adult.
There are people and services ready to support and protect you.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kumbuka, kujua haki zako pia kunakusaidia kutambua wakati haki hizo haziheshimiwi.
Ukiwahi kuhisi huna usalama, husikilizwi, au kuamini haki zako zinakiukwa, usisite kuzungumza na mzazi, mlezi, mwalimu, mtoa huduma ya afya, afisa wa ustawi wa jamii, au mtu mzima mwingine anayeaminika.
Kuna watu na huduma zilizo tayari kukusaidia na kukulinda.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Would you like to learn more about children's rights, protection from violence, accessing health services, or where to seek help if your rights are not being respected? I'm here to support you.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Je, ungependa kujifunza zaidi kuhusu haki za watoto, ulinzi dhidi ya vurugu, kupata huduma za afya, au wapi pa kutafuta msaada ikiwa haki zako haziheshimiwi? Niko hapa kukusaidia.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Myths and Facts
Myth: Children should always remain silent when adults speak.
Fact: Children have the right to express their views respectfully.

Myth: Only wealthy children have rights.
Fact: Every child has rights regardless of background.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hadithi na Ukweli
Hadithi: Watoto wanapaswa kukaa kimya kila wakati watu wazima wanapozungumza.
Ukweli: Watoto wana haki ya kutoa maoni yao kwa heshima.

Hadithi: Watoto matajiri pekee ndio wana haki.
Ukweli: Kila mtoto ana haki bila kujali malezi yake.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_10',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you need health information, HIV testing, family planning services, pregnancy-related care, mental health support, protection from violence, or help with abuse, you do not have to face it alone. You can visit the nearest hospital, health centre, dispensary, or youth-friendly health service for confidential support and guidance. You may also speak to a trusted parent, guardian, teacher, counselor, social welfare officer, religious leader, or healthcare provider.

If you are experiencing violence, abuse, exploitation, neglect, forced marriage, sexual harassment, or any situation that makes you feel unsafe, seek help immediately from a trusted adult or the relevant authorities.

For additional support, guidance, or referrals, you can contact OVAH through:
Phone/WhatsApp: 0652 522 358`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_10',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ikiwa unahitaji taarifa za afya, huduma za upimaji wa VVU, uzazi wa mpango, huduma zinazohusiana na ujauzito, msaada wa afya ya akili, ulinzi dhidi ya ukatili, au msaada kuhusu unyanyasaji, usibaki peke yako. Unaweza kutembelea hospitali, kituo cha afya, zahanati, au huduma rafiki kwa vijana zilizopo karibu nawe kwa ushauri na huduma za siri na salama. Unaweza pia kuzungumza na mzazi, mlezi, mwalimu, mshauri, afisa ustawi wa jamii, kiongozi wa dini, au mtoa huduma za afya unayemwamini.

Ikiwa unapitia ukatili, unyanyasaji, unyonyaji, kutelekezwa, ndoa ya utotoni, ukatili wa kingono, au hali yoyote inayokufanya ujisikie kutokuwa salama, tafuta msaada mara moja kutoka kwa mtu mzima unayemwamini au mamlaka husika.

Kwa msaada zaidi, ushauri au maelekezo ya huduma zinazopatikana, unaweza kuwasiliana na OVAH kupitia:
Simu/WhatsApp: 0652 522 358`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 10,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Young people also have their own special rights.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vijana pia wana haki zao maalum.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● Young people have the right to access accurate information, health services, education, and to be heard in decisions that affect them.
● Young people should be protected from violence, exploitation, and abuse.
● Access to accurate information helps young people make safe and healthy decisions.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● Vijana wana haki ya kupata taarifa sahihi, huduma za afya, elimu, na kusikilizwa kwenye maamuzi yanayowahusu.
● Vijana wanapaswa kulindwa dhidi ya ukatili, unyonyaji na unyanyasaji.
● Kupata taarifa sahihi husaidia vijana kufanya maamuzi salama na yenye afya.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `True or False: Young people do not have the right to express their opinions on matters that concern them.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kweli au Uongo: Vijana hawana haki ya kutoa maoni kuhusu mambo yanayowahusu.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Correct: B - False. Young people have the right to be heard and to participate in decisions.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Sahihi: B - Uongo. Vijana wana haki ya kusikilizwa na kushiriki maamuzi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 104,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Not quite.
Correct: B - False. Young people have the right to be heard and to participate in decisions.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Si sahihi.
Sahihi: B - Uongo. Vijana wana haki ya kusikilizwa na kushiriki maamuzi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 105,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Do you feel you are listened to in decisions that affect you?`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Unahisi unasikilizwa kwenye maamuzi yanayokuhusu?`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 106,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Do you feel your rights are not being respected? We are here to listen to you.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Unahisi haki zako hazizingatiwi? Tuko hapa kukusikiliza.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 107,
      isActive: true,
    },

    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Everyone deserves to feel safe, respected, and protected wherever they are.
Knowing your rights can help you recognize violence and understand where to seek help if you or someone you know is at risk.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kila mtu anastahili kujisikia salama, kuheshimiwa, na kulindwa popote alipo.
Kujua haki zako kunaweza kukusaidia kutambua vurugu na kuelewa wapi pa kutafuta msaada ikiwa wewe au mtu unayemjua yuko hatarini.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Protection from violence means ensuring that children and young people are safe from any actions that may cause them physical, emotional, sexual, or psychological harm.
Every child has the right to live in a safe environment where they can grow, learn, and achieve their dreams without fear of being hurt or abused.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ulinzi dhidi ya vurugu unamaanisha kuhakikisha kwamba watoto na vijana wako salama kutokana na vitendo vyovyote vinavyoweza kuwasababishia madhara ya kimwili, kihisia, kingono, au kisaikolojia.
Kila mtoto ana haki ya kuishi katika mazingira salama ambapo anaweza kukua, kujifunza, na kufikia ndoto zake bila hofu ya kuumizwa au kutendewa vibaya.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Violence can happen in different places, including at home, at school, online, at work, or within the community.
It is also important to know that violence is often committed by people the child or young person knows, such as siblings, teachers, neighbours, friends, or community leaders.
This can make it difficult to speak up, but no matter who the person is, violence is never acceptable.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vurugu zinaweza kutokea katika sehemu tofauti, ikiwa ni pamoja na nyumbani, shuleni, mtandaoni, kazini, au ndani ya jamii.
Pia ni muhimu kujua kwamba vurugu mara nyingi hufanywa na watu ambao mtoto au kijana anawajua, kama vile ndugu, walimu, majirani, marafiki, au viongozi wa jamii.
Hii inaweza kufanya iwe vigumu kuzungumza, lakini haijalishi mtu huyo ni nani, vurugu hazikubaliki kamwe.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Violence can take many different forms. It may include:
    ● Beatings or other forms of physical harm.
    ● Insults, humiliation, or intimidation.
    ● Isolation from family or friends.
    ● Sexual contact without consent.
    ● Forced labour.
    ● Being denied basic needs such as food, education, or healthcare.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_gender_violence',
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Vurugu zinaweza kuchukua aina nyingi tofauti. Inaweza kujumuisha:
    ● Vipigo au aina nyingine za madhara ya kimwili.
    ● Matusi, aibu, au vitisho.
    ● Kutengwa na familia au marafiki.
    ● Kujamiiana bila ridhaa.
    ● Kazi ya kulazimishwa.
    ● Kunyimwa mahitaji ya msingi kama vile chakula, elimu, au huduma ya afya.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_gender_violence',
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Children and young people who experience violence may show different signs.
These can include prolonged sadness, fear, withdrawing from others, poor school performance, or unexplained injuries.
These signs do not always mean someone has experienced violence, but they may indicate that a young person needs care, support, and someone to listen.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Watoto na vijana wanaopitia vurugu wanaweza kuonyesha dalili tofauti.
Hizi zinaweza kujumuisha huzuni ya muda mrefu, hofu, kujitenga na wengine, utendaji duni shuleni, au majeraha yasiyoelezeka.
Dalili hizi hazimaanishi kila wakati kwamba mtu amepitia vurugu, lakini zinaweza kuonyesha kwamba kijana anahitaji utunzaji, usaidizi, na mtu wa kumsikiliza.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_06',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `For young people in Tanzania, it is important to understand that violence is never normal and should never be accepted as part of good parenting, discipline, or everyday life.
No one deserves to be beaten, intimidated, humiliated, or forced to do something they do not want to do.
Every child has the right to be treated with dignity, respect, and care.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_06',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kwa vijana nchini Tanzania, ni muhimu kuelewa kwamba vurugu si jambo la kawaida na haipaswi kamwe kukubaliwa kama sehemu ya malezi bora, nidhamu, au maisha ya kila siku.
Hakuna mtu anayestahili kupigwa, kutishwa, kudhalilishwa, au kulazimishwa kufanya kitu ambacho hataki kufanya.
Kila mtoto ana haki ya kutendewa kwa utu, heshima, na utunzaji.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 6,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_07',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you ever feel unsafe or have experienced violence, remember that you do not have to face it alone.
Talk to a parent, guardian, teacher, social worker, healthcare provider, or another trusted adult.
Reporting violence can help you receive protection and support, and it may also prevent other children and young people from experiencing similar harm.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_07',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ukiwahi kuhisi huna usalama au umepitia vurugu, kumbuka kwamba huna haja ya kukabiliana nayo peke yako.
Zungumza na mzazi, mlezi, mwalimu, mfanyakazi wa kijamii, mtoa huduma ya afya, au mtu mwingine mzima anayeaminika.
Kuripoti vurugu kunaweza kukusaidia kupata ulinzi na usaidizi, na kunaweza pia kuzuia watoto wengine na vijana kupata madhara kama hayo.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `No, but Would you like to learn more about the different types of violence, children's rights, reporting abuse, staying safe online, or where to get help? I'm here to support you.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_08',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hapana, ila ungependa kujifunza zaidi kuhusu aina tofauti za ukatili, haki za watoto, kuripoti unyanyasaji, kukaa salama mtandaoni, au wapi pa kupata msaada? Niko hapa kukusaidia.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 8,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_09',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `If you need health information, HIV testing, family planning services, pregnancy-related care, mental health support, protection from violence, or help with abuse, you do not have to face it alone. You can visit the nearest hospital, health centre, dispensary, or youth-friendly health service for confidential support and guidance. You may also speak to a trusted parent, guardian, teacher, counselor, social welfare officer, religious leader, or healthcare provider.

If you are experiencing violence, abuse, exploitation, neglect, forced marriage, sexual harassment, or any situation that makes you feel unsafe, seek help immediately from a trusted adult or the relevant authorities.

For additional support, guidance, or referrals, you can contact OVAH through:
Phone/WhatsApp: 0652 522 358`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_09',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ikiwa unahitaji taarifa za afya, huduma za upimaji wa VVU, uzazi wa mpango, huduma zinazohusiana na ujauzito, msaada wa afya ya akili, ulinzi dhidi ya ukatili, au msaada kuhusu unyanyasaji, usibaki peke yako. Unaweza kutembelea hospitali, kituo cha afya, zahanati, au huduma rafiki kwa vijana zilizopo karibu nawe kwa ushauri na huduma za siri na salama. Unaweza pia kuzungumza na mzazi, mlezi, mwalimu, mshauri, afisa ustawi wa jamii, kiongozi wa dini, au mtoa huduma za afya unayemwamini.

Ikiwa unapitia ukatili, unyanyasaji, unyonyaji, kutelekezwa, ndoa ya utotoni, ukatili wa kingono, au hali yoyote inayokufanya ujisikie kutokuwa salama, tafuta msaada mara moja kutoka kwa mtu mzima unayemwamini au mamlaka husika.

Kwa msaada zaidi, ushauri au maelekezo ya huduma zinazopatikana, unaweza kuwasiliana na OVAH kupitia:
Simu/WhatsApp: 0652 522 358`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 9,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Protection against violence - you deserve to be safe.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ulinzi dhidi ya ukatili - unastahili kuwa salama.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 101,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `● Every child deserves to live in a safe place, free from fear of harm - at home, at school, or online.
● Violence is not a part of good parenting - no one deserves to be beaten, intimidated, or humiliated.
● If you feel unsafe, talk to an adult you trust as soon as possible.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `● Kila mtoto anastahili kuishi mahali salama, bila hofu ya kudhuriwa - nyumbani, shuleni, au mtandaoni.
● Ukatili si sehemu ya malezi mazuri - hakuna anayestahili kupigwa, kutishwa, au kudhalilishwa.
● Ukihisi hauko salama, zungumza na mtu mzima unayemwamini haraka iwezekanavyo.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 102,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Do you feel unsafe right now? Contact us immediately, or call 116.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 103,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Unahisi hauko salama sasa hivi? Wasiliana nasi mara moja, au piga 116.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 103,
      isActive: true,
    },

    {
      subtopicCode: 'CHILDS_MARRIAGE',
      nodeKey: 'CHILDS_MARRIAGE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Child marriage is a marriage involving a child or adolescent under the age of 18.
At this age, many children are still developing physically, mentally, emotionally and socially, and are therefore not ready to take on the responsibilities of marriage and parenthood.
Child marriage can occur due to poverty, customs and traditions, lack of education, early pregnancy, or pressure from family and society.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDS_MARRIAGE',
      nodeKey: 'CHILDS_MARRIAGE_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ndoa za utotoni ni ndoa zinazohusisha mtoto au kijana mwenye umri chini ya miaka 18.
Katika umri huu, watoto wengi bado wanaendelea kukua kimwili, kiakili, kihisia na kijamii, hivyo hawajawa tayari kubeba majukumu ya ndoa na uzazi.
Ndoa za utotoni zinaweza kutokea kutokana na umaskini, mila na desturi, ukosefu wa elimu, mimba za utotoni, au shinikizo kutoka kwa familia na jamii.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'CHILDS_MARRIAGE',
      nodeKey: 'CHILDS_MARRIAGE_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Child marriage can have a profound impact on a child’s life.
It often leads to interruption of education, reduced development opportunities, and increased economic dependence.

For girls, child marriage increases the risk of early pregnancy, which can pose health challenges for both mother and child.
It can also increase the likelihood of experiencing sexual violence, emotional abuse, and a lack of decision-making about their own lives.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDS_MARRIAGE',
      nodeKey: 'CHILDS_MARRIAGE_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ndoa za utotoni zinaweza kuwa na madhara makubwa kwa maisha ya mtoto.
Mara nyingi husababisha kukatishwa masomo, kupunguza fursa za maendeleo, na kuongeza utegemezi wa kiuchumi.

Kwa wasichana, ndoa za utotoni huongeza hatari ya kupata ujauzito katika umri mdogo, jambo ambalo linaweza kuleta changamoto za kiafya kwa mama na mtoto.
Pia zinaweza kuongeza uwezekano wa kukumbana na ukatili wa kijinsia, unyanyasaji wa kihisia na ukosefu wa maamuzi kuhusu maisha yao wenyewe.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'CHILDS_MARRIAGE',
      nodeKey: 'CHILDS_MARRIAGE_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Every child has the right to education, health, protection, and the opportunity to determine their own future.
Young people should understand that marriage is not a solution to financial or social challenges.

Instead, education, life skills, and economic empowerment can help build a better life with more opportunities.
If a young person feels they are being forced into marriage or knows a child who is facing such a situation, it is important to seek help from trusted parents, teachers, community leaders or social welfare officers.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDS_MARRIAGE',
      nodeKey: 'CHILDS_MARRIAGE_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kila mtoto ana haki ya kupata elimu, afya, ulinzi na nafasi ya kuamua mustakabali wake.
Vijana wanapaswa kuelewa kwamba ndoa si suluhisho la changamoto za kifedha au kijamii.

Badala yake, elimu, ujuzi wa maisha na uwezeshaji wa kiuchumi vinaweza kusaidia kujenga maisha bora na yenye fursa zaidi.
Ikiwa kijana anahisi analazimishwa kuingia kwenye ndoa au anajua mtoto anayekabiliwa na hali hiyo, ni muhimu kutafuta msaada kutoka kwa wazazi wanaoaminika, walimu, viongozi wa jamii au maafisa ustawi wa jamii.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'SEXUAL_EXPLOITATION',
      nodeKey: 'SEXUAL_EXPLOITATION_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Sexual exploitation occurs when someone uses their power, age, position, money, gifts, promises or influence to obtain sexual benefits from a child or young person.

Sexual exploitation often does not involve direct force alone, but can also involve threats, deception, promises of help, or taking advantage of a young person’s difficult circumstances to induce them to engage in sexual acts.
In the Tanzanian context, sexual exploitation can take many forms.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'SEXUAL_EXPLOITATION',
      nodeKey: 'SEXUAL_EXPLOITATION_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Unyonyaji wa kingono hutokea pale mtu anapotumia madaraka, umri, nafasi, fedha, zawadi, ahadi au ushawishi wake ili kupata manufaa ya kingono kutoka kwa mtoto au kijana.

Mara nyingi unyonyaji wa kingono hauhusishi nguvu za moja kwa moja pekee, bali unaweza kuhusisha vitisho, hila, ahadi za msaada, au kutumia hali ngumu anayopitia kijana ili kumshawishi kufanya vitendo vya kingono.
Katika mazingira ya Tanzania, unyonyaji wa kingono unaweza kujitokeza kwa njia mbalimbali.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'SEXUAL_EXPLOITATION',
      nodeKey: 'SEXUAL_EXPLOITATION_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `An example is an adult offering a student money, vouchers, transportation, gifts or the promise of academic support in exchange for sexual relations.
It can also occur when someone demands sex in exchange for services, employment, school grades or other opportunities.

Young people may often fail to recognize that these situations are a form of exploitation because they appear to be helpful or affectionate.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'SEXUAL_EXPLOITATION',
      nodeKey: 'SEXUAL_EXPLOITATION_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mfano ni mtu mzima anayempa mwanafunzi fedha, vocha, usafiri, zawadi au ahadi ya kumsaidia kielimu kwa matarajio ya kupata mahusiano ya kingono.
Pia unaweza kutokea pale mtu anapodai ngono ili kutoa huduma, ajira, alama za shule au fursa nyingine.

Mara nyingi vijana wanaweza kushindwa kutambua kuwa hali hizi ni aina ya unyonyaji kwa sababu huonekana kama msaada au mapenzi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'SEXUAL_EXPLOITATION',
      nodeKey: 'SEXUAL_EXPLOITATION_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Sexual exploitation can cause serious harm including emotional pain, loss of self-esteem, unintended pregnancy, HIV infection and sexually transmitted diseases, as well as affecting the education and development of the young person.
It is important for young people to understand that no one should give or receive services, money, gifts or opportunities on sexual terms.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'SEXUAL_EXPLOITATION',
      nodeKey: 'SEXUAL_EXPLOITATION_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Unyonyaji wa kingono unaweza kusababisha madhara makubwa ikiwa ni pamoja na maumivu ya kihisia, kupoteza kujiamini, mimba zisizotarajiwa, maambukizi ya VVU na magonjwa ya zinaa, pamoja na kuathiri elimu na maendeleo ya kijana.
Ni muhimu kwa vijana kuelewa kwamba hakuna mtu anayepaswa kutoa au kupokea huduma, fedha, zawadi au fursa kwa masharti ya ngono.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'SEXUAL_EXPLOITATION',
      nodeKey: 'SEXUAL_EXPLOITATION_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Healthy relationships should be built on respect, equality and genuine consent, not dependency or fear of losing support.
If a young person feels pressured or used in this way, they should talk to a trusted adult or report it to the relevant authorities for help and protection.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'SEXUAL_EXPLOITATION',
      nodeKey: 'SEXUAL_EXPLOITATION_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mahusiano yenye afya yanapaswa kujengwa juu ya heshima, usawa na ridhaa ya kweli, si utegemezi au hofu ya kupoteza msaada.
Ikiwa kijana anahisi anashinikizwa au kutumiwa kwa njia hii, anapaswa kuzungumza na mtu mzima anayemwamini au kuripoti kwa mamlaka husika ili kupata msaada na ulinzi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'TRANSACTIONAL_RELATIONSHIPS',
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Transactional relationships occur when one person provides money, gifts, material support, or benefits while expecting a romantic or sexual relationship in return.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'TRANSACTIONAL_RELATIONSHIPS',
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mahusiano ya miamala hutokea wakati mtu mmoja anatoa pesa, zawadi, usaidizi wa kimwili, au manufaa huku akitarajia uhusiano wa kimapenzi au wa kimapenzi kama malipo.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'TRANSACTIONAL_RELATIONSHIPS',
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `These relationships often involve unequal power, some young people may face:
    ● Poverty
    ● School-related expenses
    ● Peer pressure
    ● Desire for status items
    ● Lack of support
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'TRANSACTIONAL_RELATIONSHIPS',
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mahusiano haya mara nyingi huhusisha nguvu zisizo sawa, baadhi ya vijana wanaweza kukabiliwa na:
    ● Umaskini
    ● Gharama zinazohusiana na shule
    ● Shinikizo la rika
    ● Tamaa ya vitu vya hadhi
    ● Ukosefu wa usaidizi
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'TRANSACTIONAL_RELATIONSHIPS',
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Risks of transactional relationships:
    ● Sexual exploitation
    ● Pregnancy
    ● STIs and HIV
    ● Emotional harm
    ● School dropout
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'TRANSACTIONAL_RELATIONSHIPS',
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hatari za mahusiano ya miamala:
    ● Unyonyaji wa kingono
    ● Mimba
    ● Magonjwa ya zinaa na VVU
    ● Madhara ya kihisia
    ● Kuacha shule
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'TRANSACTIONAL_RELATIONSHIPS',
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `An older person regularly buys a student clothes, airtime, transportation, or meals and expects sexual activity in return.
This may be a form of exploitation and power imbalance.

Receiving support should never require someone to provide sexual activity in return.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'TRANSACTIONAL_RELATIONSHIPS',
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mtu mzee humnunulia mwanafunzi nguo, muda wa maongezi, usafiri, au milo mara kwa mara na anatarajia shughuli za ngono kama malipo.
Hii inaweza kuwa aina ya unyanyaji na usawa wa madaraka.

Kupokea usaidizi hakupaswi kamwe kumhitaji mtu kutoa shughuli za ngono kama malipo.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'REPORTING_ABUSE',
      nodeKey: 'REPORTING_ABUSE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Reporting abuse helps protect victims, prevent further harm, and connect people with support services.
Reporting can also help protect other children from experiencing similar harm.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'REPORTING_ABUSE',
      nodeKey: 'REPORTING_ABUSE_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kuripoti unyanyasaji husaidia kuwalinda waathiriwa, kuzuia madhara zaidi, na kuwaunganisha watu na huduma za usaidizi.
Kuripoti kunaweza pia kusaidia kuwalinda watoto wengine kutokana na madhara kama hayo.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'REPORTING_ABUSE',
      nodeKey: 'REPORTING_ABUSE_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `What Should Someone Do If Abuse Happens?

Step 1: Ensure Safety- Move to a safe place if possible.
Step 2: Tell a Trusted Person
This could include:
    ● Parent
    ● Guardian
    ● Teacher
    ● School counselor
    ● Healthcare provider
    ● Social welfare officer
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'REPORTING_ABUSE',
      nodeKey: 'REPORTING_ABUSE_02',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mtu Anapaswa Kufanya Nini Ikiwa Unyanyasaji Utatokea?

Hatua ya 1: Hakikisha Usalama- Hamia mahali salama ikiwezekana.
Hatua ya 2: Mwambie Mtu Unayemwamini
Hii inaweza kujumuisha:
    ● Mzazi
    ● Mlezi
    ● Mwalimu
    ● Mshauri wa shule
    ● Mtoa huduma ya afya
    ● Afisa wa ustawi wa jamii
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'REPORTING_ABUSE',
      nodeKey: 'REPORTING_ABUSE_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Step 3: Seek Medical Care -Medical support may be important, especially after physical or sexual abuse.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'REPORTING_ABUSE',
      nodeKey: 'REPORTING_ABUSE_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hatua ya 3: Tafuta Huduma ya Kimatibabu -Msaada wa kimatibabu unaweza kuwa muhimu, hasa baada ya unyanyasaji wa kimwili au kingono.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'REPORTING_ABUSE',
      nodeKey: 'REPORTING_ABUSE_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Step 4: Report to Relevant Authorities
Depending on the situation:
    ● Police
    ● Social welfare officers
    ● Child protection services
    ● School leadership`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'REPORTING_ABUSE',
      nodeKey: 'REPORTING_ABUSE_05',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hatua ya 4: Ripoti kwa Mamlaka Husika
Kulingana na hali:
    ● Polisi
    ● Maafisa wa ustawi wa jamii
    ● Huduma za ulinzi wa watoto
    ● Uongozi wa shule`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'REPORTING_ABUSE',
      nodeKey: 'REPORTING_ABUSE_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Common Concerns
"What if nobody believes me?"
You still deserve support. Continue speaking with trusted adults or professionals.

"What if I am scared?"
Feeling scared is normal. Seeking help can improve safety and access to support.

"What if the person is someone I know?"
Abuse can be committed by people known to the victim. Reporting remains important.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'REPORTING_ABUSE',
      nodeKey: 'REPORTING_ABUSE_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Hofu za Kawaida
"Vipi kama hakuna anayeniamini?"
Bado unastahili usaidizi. Endelea kuzungumza na watu wazima au wataalamu wanaoaminika.

"Vipi kama ninaogopa?"
Kuhisi hofu ni kawaida. Kutafuta msaada kunaweza kuboresha usalama na upatikanaji wa usaidizi.

"Vipi kama mtu huyo ni mtu ninayemjua?"
Unyanyasaji unaweza kufanywa na watu wanaomjua mwathiriwa. Kuripoti bado ni muhimu.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    // add in chunks
  ],

  contentNodeOptions: [
    {
      nodeKey: 'UNDERSTANDING_GENDER_01',
      optionValue: 'expectations',
      labelEn: 'Expectations',
      labelSw: 'Matarajio',
      nextNodeKey: 'UNDERSTANDING_GENDER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_01',
      optionValue: 'equal_respect',
      labelEn: 'Equal respect',
      labelSw: 'Heshima sawa',
      nextNodeKey: 'UNDERSTANDING_GENDER_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_01',
      optionValue: 'gender_roles',
      labelEn: 'Gender roles',
      labelSw: 'Majukumu ya jinsia',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_02',
      optionValue: 'equal_respect',
      labelEn: 'Equal respect',
      labelSw: 'Heshima sawa',
      nextNodeKey: 'UNDERSTANDING_GENDER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_02',
      optionValue: 'free_to_grow',
      labelEn: 'Free to grow',
      labelSw: 'Uhuru wa kukua',
      nextNodeKey: 'UNDERSTANDING_GENDER_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_02',
      optionValue: 'gender_roles',
      labelEn: 'Gender roles',
      labelSw: 'Majukumu ya jinsia',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_03',
      optionValue: 'free_to_grow',
      labelEn: 'Free to grow',
      labelSw: 'Uhuru wa kukua',
      nextNodeKey: 'UNDERSTANDING_GENDER_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_03',
      optionValue: 'diversity',
      labelEn: 'Diversity',
      labelSw: 'Utofauti',
      nextNodeKey: 'UNDERSTANDING_GENDER_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_03',
      optionValue: 'child_rights',
      labelEn: 'Child rights',
      labelSw: 'Haki za watoto',
      nextNodeKey: 'CHILDRENS_RIGHTS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_04',
      optionValue: 'diversity',
      labelEn: 'Diversity',
      labelSw: 'Utofauti',
      nextNodeKey: 'UNDERSTANDING_GENDER_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_04',
      optionValue: 'equality',
      labelEn: 'Equality',
      labelSw: 'Usawa',
      nextNodeKey: 'UNDERSTANDING_GENDER_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_04',
      optionValue: 'stereotypes',
      labelEn: 'Stereotypes',
      labelSw: 'Dhana potofu',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_05',
      optionValue: 'equality',
      labelEn: 'Equality',
      labelSw: 'Usawa',
      nextNodeKey: 'UNDERSTANDING_GENDER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_05',
      optionValue: 'anything_else',
      labelEn: 'Anything else?',
      labelSw: 'Kitu kingine?',
      nextNodeKey: 'UNDERSTANDING_GENDER_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_05',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime Uelewa',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_06',
      optionValue: 'anything_else',
      labelEn: 'Anything else?',
      labelSw: 'Kitu kingine?',
      nextNodeKey: 'UNDERSTANDING_GENDER_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_06',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime Uelewa',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_06',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'UNDERSTANDING_GENDER_08',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_07',
      optionValue: 'gender_equality',
      labelEn: 'Gender equality',
      labelSw: 'Usawa wa jinsia',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_07',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime Uelewa',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'UNDERSTANDING_GENDER_08',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_08',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza kujikumbusha',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_02',
      optionValue: 'start_quiz',
      labelEn: 'Start quiz',
      labelSw: 'Anza jaribio',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_03',
      optionValue: 'true',
      labelEn: 'A) True',
      labelSw: 'A) Kweli',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_03',
      optionValue: 'false',
      labelEn: 'B) False',
      labelSw: 'B) Uongo',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_04',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali linalofuata',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_05',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali linalofuata',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_06',
      optionValue: 'yes',
      labelEn: 'A) Yes',
      labelSw: 'A) Ndiyo',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_06',
      optionValue: 'no',
      labelEn: 'B) No',
      labelSw: 'B) Hapana',
      nextNodeKey: 'UNDERSTANDING_GENDER_REFRESHER_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'UNDERSTANDING_GENDER_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'UNDERSTANDING_GENDER_REFRESHER_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      optionValue: 'what_is_sex',
      labelEn: 'What is sex?',
      labelSw: 'Ngono ni nini?',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      optionValue: 'what_is_gender',
      labelEn: 'What is gender?',
      labelSw: 'Jinsia ni nini?',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      optionValue: 'stereotypes',
      labelEn: 'Stereotypes',
      labelSw: 'Dhana potofu',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_09',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      optionValue: 'examples',
      labelEn: 'Examples',
      labelSw: 'Mifano',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      optionValue: 'what_is_gender',
      labelEn: 'What is gender?',
      labelSw: 'Jinsia ni nini?',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      optionValue: 'gender_roles',
      labelEn: 'Gender roles',
      labelSw: 'Majukumu jinsia',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      optionValue: 'what_is_gender',
      labelEn: 'What is gender?',
      labelSw: 'Jinsia ni nini?',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      optionValue: 'men_expectations',
      labelEn: 'Men expectations',
      labelSw: 'Matarajio wanaume',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      optionValue: 'women_expectations',
      labelEn: 'Women expect.',
      labelSw: 'Matarajio wanawake',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      optionValue: 'gender_roles',
      labelEn: 'Gender roles',
      labelSw: 'Majukumu jinsia',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      optionValue: 'men_expectations',
      labelEn: 'Men expectations',
      labelSw: 'Matarajio wanaume',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      optionValue: 'women_expectations',
      labelEn: 'Women expectations',
      labelSw: 'Matarajio wanawake',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_05',
      optionValue: 'men_expectations',
      labelEn: 'Men expectations',
      labelSw: 'Matarajio wanaume',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_05',
      optionValue: 'women_expectations',
      labelEn: 'Women expectations.',
      labelSw: 'Matarajio wanawake',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_05',
      optionValue: 'not_rules',
      labelEn: 'Not rules',
      labelSw: 'Si sheria',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_08',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_06',
      optionValue: 'women_expectations',
      labelEn: 'Women expectations.',
      labelSw: 'Matarajio wanawake',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_06',
      optionValue: 'not_rules',
      labelEn: 'Not rules',
      labelSw: 'Si sheria',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_08',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_06',
      optionValue: 'stereotypes',
      labelEn: 'Stereotypes',
      labelSw: 'Dhana potofu',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_09',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_07',
      optionValue: 'not_rules',
      labelEn: 'Not rules',
      labelSw: 'Si sheria',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_07',
      optionValue: 'stereotypes',
      labelEn: 'Stereotypes',
      labelSw: 'Dhana potofu',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_07',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime Uelewa',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_08',
      optionValue: 'stereotypes',
      labelEn: 'Stereotypes',
      labelSw: 'Dhana potofu',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_09',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_08',
      optionValue: 'why_it_matters',
      labelEn: 'Why it matters',
      labelSw: 'Kwa nini muhimu',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_10',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_08',
      optionValue: 'violence',
      labelEn: 'Violence',
      labelSw: 'Ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_09',
      optionValue: 'why_it_matters',
      labelEn: 'Why it matters',
      labelSw: 'Kwa nini muhimu',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_09',
      optionValue: 'anything_else',
      labelEn: 'Anything else?',
      labelSw: 'Kitu kingine?',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_11',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_09',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime Uelewa',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_10',
      optionValue: 'anything_else',
      labelEn: 'Anything else?',
      labelSw: 'Kitu kingine?',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_11',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_10',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime Uelewa',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_10',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_12',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_11',
      optionValue: 'gender_violence',
      labelEn: 'Gender violence',
      labelSw: 'Ukatili kijinsia',
      nextNodeKey: 'TYPES_OF_VIOLENCE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_11',
      optionValue: 'child_rights',
      labelEn: 'Child rights',
      labelSw: 'Haki za watoto',
      nextNodeKey: 'CHILDRENS_RIGHTS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_11',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime Uelewa',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_12',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza kujikumbusha',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_02',
      optionValue: 'start_quiz',
      labelEn: 'Start quiz',
      labelSw: 'Anza jaribio',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_03',
      optionValue: 'true',
      labelEn: 'A) True',
      labelSw: 'A) Kweli',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_03',
      optionValue: 'false',
      labelEn: 'B) False',
      labelSw: 'B) Uongo',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_04',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali linalofuata',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_05',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali linalofuata',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_06',
      optionValue: 'yes',
      labelEn: 'A) Yes',
      labelSw: 'A) Ndiyo',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_06',
      optionValue: 'no',
      labelEn: 'B) No',
      labelSw: 'B) Hapana',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_12',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_REFRESHER_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_01',
      optionValue: 'sexual_violence',
      labelEn: 'Sexual violence',
      labelSw: 'Ukatili wa kingono',
      nextNodeKey: 'TYPES_OF_VIOLENCE_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_01',
      optionValue: 'violence_types',
      labelEn: 'Types of violence',
      labelSw: 'Aina za ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_01',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_02',
      optionValue: 'violence_types',
      labelEn: 'Types of violence',
      labelSw: 'Aina za ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_02',
      optionValue: 'sexual_examples',
      labelEn: 'Sexual examples',
      labelSw: 'Mifano ya kingono',
      nextNodeKey: 'TYPES_OF_VIOLENCE_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_02',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'TYPES_OF_VIOLENCE_17',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_03',
      optionValue: 'emotional',
      labelEn: 'Emotional Violence',
      labelSw: 'Ukatili wa Kihisia',
      nextNodeKey: 'TYPES_OF_VIOLENCE_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_03',
      optionValue: 'economic',
      labelEn: 'Economic Violence',
      labelSw: 'Ukatili wa Kiuchumi',
      nextNodeKey: 'TYPES_OF_VIOLENCE_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_03',
      optionValue: 'sexual',
      labelEn: 'Sexual Violence',
      labelSw: 'Ukatili wa Kingono',
      nextNodeKey: 'TYPES_OF_VIOLENCE_06',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_04',
      optionValue: 'economic',
      labelEn: 'Economic Violence',
      labelSw: 'Ukatili wa Kiuchumi',
      nextNodeKey: 'TYPES_OF_VIOLENCE_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_04',
      optionValue: 'sexual',
      labelEn: 'Sexual Violence',
      labelSw: 'Ukatili wa Kingono',
      nextNodeKey: 'TYPES_OF_VIOLENCE_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_04',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'TYPES_OF_VIOLENCE_17',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_05',
      optionValue: 'sexual',
      labelEn: 'Sexual Violence',
      labelSw: 'Ukatili wa Kingono',
      nextNodeKey: 'TYPES_OF_VIOLENCE_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_05',
      optionValue: 'rape_sodomy',
      labelEn: 'Rape/sodomy',
      labelSw: 'Ubakaji/ulawiti',
      nextNodeKey: 'TYPES_OF_VIOLENCE_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_05',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_06',
      optionValue: 'rape_sodomy',
      labelEn: 'Rape/sodomy',
      labelSw: 'Ubakaji/ulawiti',
      nextNodeKey: 'TYPES_OF_VIOLENCE_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_06',
      optionValue: 'exploitation',
      labelEn: 'Exploitation',
      labelSw: 'Unyonyaji',
      nextNodeKey: 'SEXUAL_EXPLOITATION_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_06',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_07',
      optionValue: 'situations',
      labelEn: 'Different Situations',
      labelSw: 'Hali tofauti',
      nextNodeKey: 'TYPES_OF_VIOLENCE_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_07',
      optionValue: 'who_can_harm',
      labelEn: 'Who can harm?',
      labelSw: 'Mkatili ni nani?',
      nextNodeKey: 'TYPES_OF_VIOLENCE_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'TYPES_OF_VIOLENCE_17',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_08',
      optionValue: 'who_can_harm',
      labelEn: 'Who can harm?',
      labelSw: 'Mkatili ni nani?',
      nextNodeKey: 'TYPES_OF_VIOLENCE_09',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_08',
      optionValue: 'effects',
      labelEn: 'The Effects',
      labelSw: 'Madhara Yake',
      nextNodeKey: 'TYPES_OF_VIOLENCE_10',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_08',
      optionValue: 'steps_to_take',
      labelEn: 'Steps to take',
      labelSw: 'Hatua za kuchukua',
      nextNodeKey: 'TYPES_OF_VIOLENCE_13',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_09',
      optionValue: 'effects',
      labelEn: 'The Effects',
      labelSw: 'Madhara Yake',
      nextNodeKey: 'TYPES_OF_VIOLENCE_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_09',
      optionValue: 'symptoms',
      labelEn: 'Symptoms',
      labelSw: 'Dalili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_11',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_09',
      optionValue: 'steps_to_take',
      labelEn: 'Steps to take',
      labelSw: 'Hatua za kuchukua',
      nextNodeKey: 'TYPES_OF_VIOLENCE_13',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_10',
      optionValue: 'symptoms',
      labelEn: 'Symptoms',
      labelSw: 'Dalili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_11',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_10',
      optionValue: 'prevention',
      labelEn: 'How to prevent',
      labelSw: 'Njia za Kuzuia',
      nextNodeKey: 'TYPES_OF_VIOLENCE_12',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_10',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'TYPES_OF_VIOLENCE_17',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_11',
      optionValue: 'prevention',
      labelEn: 'How to prevent',
      labelSw: 'Njia za Kuzuia',
      nextNodeKey: 'TYPES_OF_VIOLENCE_12',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_11',
      optionValue: 'steps_to_take',
      labelEn: 'Steps to take',
      labelSw: 'Hatua za kuchukua',
      nextNodeKey: 'TYPES_OF_VIOLENCE_13',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_11',
      optionValue: 'services',
      labelEn: 'Services',
      labelSw: 'Huduma',
      nextNodeKey: 'TYPES_OF_VIOLENCE_15',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_12',
      optionValue: 'steps_to_take',
      labelEn: 'Steps to take',
      labelSw: 'Hatua za kuchukua',
      nextNodeKey: 'TYPES_OF_VIOLENCE_13',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_12',
      optionValue: 'risk_groups',
      labelEn: 'Risk groups',
      labelSw: 'Walio hatarini',
      nextNodeKey: 'TYPES_OF_VIOLENCE_14',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_12',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_13',
      optionValue: 'risk_groups',
      labelEn: 'Risk groups',
      labelSw: 'Walio hatarini',
      nextNodeKey: 'TYPES_OF_VIOLENCE_14',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_13',
      optionValue: 'services',
      labelEn: 'Services',
      labelSw: 'Huduma',
      nextNodeKey: 'TYPES_OF_VIOLENCE_15',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_13',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_14',
      optionValue: 'services',
      labelEn: 'Services',
      labelSw: 'Huduma',
      nextNodeKey: 'TYPES_OF_VIOLENCE_15',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_14',
      optionValue: 'anything_else',
      labelEn: 'Anything else?',
      labelSw: 'Kitu kingine?',
      nextNodeKey: 'TYPES_OF_VIOLENCE_16',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_14',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'TYPES_OF_VIOLENCE_17',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_15',
      optionValue: 'anything_else',
      labelEn: 'Anything else?',
      labelSw: 'Kitu kingine?',
      nextNodeKey: 'TYPES_OF_VIOLENCE_16',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_15',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_15',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_16',
      optionValue: 'exploitation',
      labelEn: 'Exploitation',
      labelSw: 'Unyonyaji',
      nextNodeKey: 'SEXUAL_EXPLOITATION_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_16',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_16',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime Uelewa',
      nextNodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_17',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza kujikumbusha',
      nextNodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_02',
      optionValue: 'get_help_now',
      labelEn: 'Get help now',
      labelSw: 'Pata msaada sasa',
      nextNodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_02',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_03',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'TYPES_OF_VIOLENCE_17',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_03',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_REFRESHER_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_01',
      optionValue: 'who_is_child',
      labelEn: 'Who is a child?',
      labelSw: 'Mtoto ni nani?',
      nextNodeKey: 'CHILDRENS_RIGHTS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_01',
      optionValue: 'key_rights',
      labelEn: 'Key rights',
      labelSw: 'Haki muhimu',
      nextNodeKey: 'CHILDRENS_RIGHTS_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_01',
      optionValue: 'adolescent_rights',
      labelEn: 'Adolescent rights',
      labelSw: 'Haki za vijana',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_02',
      optionValue: 'who_gets_rights',
      labelEn: 'Who gets rights?',
      labelSw: 'Nani ana haki?',
      nextNodeKey: 'CHILDRENS_RIGHTS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_02',
      optionValue: 'key_rights',
      labelEn: 'Key rights',
      labelSw: 'Haki muhimu',
      nextNodeKey: 'CHILDRENS_RIGHTS_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_02',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_03',
      optionValue: 'key_rights',
      labelEn: 'Key rights',
      labelSw: 'Haki muhimu',
      nextNodeKey: 'CHILDRENS_RIGHTS_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_03',
      optionValue: 'adolescent_rights',
      labelEn: 'Adolescent rights',
      labelSw: 'Haki za vijana',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_03',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_04',
      optionValue: 'protection_voice',
      labelEn: 'Protection?',
      labelSw: 'Ulinzi?',
      nextNodeKey: 'CHILDRENS_RIGHTS_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_04',
      optionValue: 'identity_growth',
      labelEn: 'Identity?',
      labelSw: 'Utambulisho?',
      nextNodeKey: 'CHILDRENS_RIGHTS_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_04',
      optionValue: 'questions',
      labelEn: 'Questions?',
      labelSw: 'Maswali?',
      nextNodeKey: 'CHILDRENS_RIGHTS_09',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_05',
      optionValue: 'identity_growth',
      labelEn: 'Identity?',
      labelSw: 'Utambulisho?',
      nextNodeKey: 'CHILDRENS_RIGHTS_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_05',
      optionValue: 'if_violated',
      labelEn: 'If violated?',
      labelSw: 'Ikikiukwa?',
      nextNodeKey: 'CHILDRENS_RIGHTS_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_05',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_06',
      optionValue: 'if_violated',
      labelEn: 'If violated?',
      labelSw: 'Ikikiukwa?',
      nextNodeKey: 'CHILDRENS_RIGHTS_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_06',
      optionValue: 'questions',
      labelEn: 'Questions?',
      labelSw: 'Maswali?',
      nextNodeKey: 'CHILDRENS_RIGHTS_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_06',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_07',
      optionValue: 'anything_else',
      labelEn: 'Anything else?',
      labelSw: 'Kingine?',
      nextNodeKey: 'CHILDRENS_RIGHTS_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_07',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'CHILDRENS_RIGHTS_10',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_08',
      optionValue: 'adolescent_rights',
      labelEn: 'Adolescent rights',
      labelSw: 'Haki za vijana',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_08',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_08',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_09',
      optionValue: 'adolescent_rights',
      labelEn: 'Adolescent rights',
      labelSw: 'Haki za vijana',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_09',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_09',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'CHILDRENS_RIGHTS_10',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_10',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza kujikumbusha',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_02',
      optionValue: 'start_quiz',
      labelEn: 'Start quiz',
      labelSw: 'Anza maswali',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_03',
      optionValue: 'true',
      labelEn: 'A) True',
      labelSw: 'A) Kweli',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_03',
      optionValue: 'false',
      labelEn: 'B) False',
      labelSw: 'B) Uongo',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_04',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali linalofuata',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_05',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali linalofuata',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_06',
      optionValue: 'education',
      labelEn: 'A) Education',
      labelSw: 'A) Elimu',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_06',
      optionValue: 'health',
      labelEn: 'B) Health',
      labelSw: 'B) Afya',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_06',
      optionValue: 'protection',
      labelEn: 'C) Protection',
      labelSw: 'C) Ulinzi',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_06',
      optionValue: 'being_heard',
      labelEn: 'D) Being heard',
      labelSw: 'D) Kusikilizwa',
      nextNodeKey: 'CHILDRENS_RIGHTS_REFRESHER_07',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'CHILDRENS_RIGHTS_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_07',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_REFRESHER_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_01',
      optionValue: 'why_rights',
      labelEn: 'Why have rights?',
      labelSw: 'Kwa nini tuna haki?',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_01',
      optionValue: 'information',
      labelEn: 'Right to Information',
      labelSw: 'Haki ya Taarifa',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_01',
      optionValue: 'protection',
      labelEn: 'Right to Protection',
      labelSw: 'Haki ya Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_02',
      optionValue: 'information',
      labelEn: 'Right to Information',
      labelSw: 'Haki ya Taarifa',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_02',
      optionValue: 'safety',
      labelEn: 'Right to Safety',
      labelSw: 'Haki ya Usalama',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_02',
      optionValue: 'education',
      labelEn: 'Right to Education',
      labelSw: 'Haki ya Elimu',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_04',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_03',
      optionValue: 'safety',
      labelEn: 'Right to Safety',
      labelSw: 'Haki ya Usalama',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_03',
      optionValue: 'health_services',
      labelEn: 'Health services',
      labelSw: 'Huduma za afya',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_03',
      optionValue: 'be_heard',
      labelEn: 'Right to be heard',
      labelSw: 'Haki ya Kusikilizwa',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_04',
      optionValue: 'health_services',
      labelEn: 'Health services',
      labelSw: 'Huduma za afya',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_04',
      optionValue: 'choices',
      labelEn: 'Key reminder',
      labelSw: 'Kumbusho muhimu',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_06',
      sortOrder: 2,
      isActive: true,
    },

    {
      nodeKey: 'ADOLESCENTS_RIGHTS_05',
      optionValue: 'choices',
      labelEn: 'Key reminder',
      labelSw: 'Kumbusho muhimu',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_05',
      optionValue: 'if_ignored',
      labelEn: 'If ignored?',
      labelSw: 'Ikipuuzwa?',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_05',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_10',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_06',
      optionValue: 'if_ignored',
      labelEn: 'If ignored?',
      labelSw: 'Ikipuuzwa?',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_06',
      optionValue: 'myths_facts',
      labelEn: 'Myths and facts',
      labelSw: 'Hadithi na ukweli',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_06',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_07',
      optionValue: 'anything_else',
      labelEn: 'Anything else?',
      labelSw: 'Kingine?',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_07',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_10',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_08',
      optionValue: 'childrens_rights',
      labelEn: 'Child rights',
      labelSw: 'Haki za watoto',
      nextNodeKey: 'CHILDRENS_RIGHTS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_08',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_08',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_09',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_09',
      optionValue: 'child_marriage',
      labelEn: 'Child marriage',
      labelSw: 'Ndoa za utotoni',
      nextNodeKey: 'CHILDS_MARRIAGE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_09',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_10',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza kujikumbusha',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_02',
      optionValue: 'start_quiz',
      labelEn: 'Start quiz',
      labelSw: 'Anza maswali',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_03',
      optionValue: 'true',
      labelEn: 'A) True',
      labelSw: 'A) Kweli',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_03',
      optionValue: 'false',
      labelEn: 'B) False',
      labelSw: 'B) Uongo',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_04',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali linalofuata',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_05',
      optionValue: 'next_question',
      labelEn: 'Next question',
      labelSw: 'Swali linalofuata',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_06',
      optionValue: 'yes_often',
      labelEn: 'A) Yes, often',
      labelSw: 'A) Ndiyo mara',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_06',
      optionValue: 'sometimes',
      labelEn: 'B) Sometimes',
      labelSw: 'B) Wakati mwingine',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_06',
      optionValue: 'rarely',
      labelEn: 'C) Rarely',
      labelSw: 'C) Mara chache',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_07',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_REFRESHER_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_01',
      optionValue: 'what_is_protection',
      labelEn: 'What is protection?',
      labelSw: 'Ulinzi ni nini?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_01',
      optionValue: 'where_happens',
      labelEn: 'Where it happens',
      labelSw: 'Hutokea wapi?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_01',
      optionValue: 'childrens_rights',
      labelEn: 'Child rights',
      labelSw: 'Haki za watoto',
      nextNodeKey: 'CHILDRENS_RIGHTS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_02',
      optionValue: 'where_happens',
      labelEn: 'Where it happens',
      labelSw: 'Hutokea wapi?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_02',
      optionValue: 'forms',
      labelEn: 'Forms of violence',
      labelSw: 'Aina za ukatili',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_02',
      optionValue: 'childrens_rights',
      labelEn: 'Child rights',
      labelSw: 'Haki za watoto',
      nextNodeKey: 'CHILDRENS_RIGHTS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_03',
      optionValue: 'forms',
      labelEn: 'Forms of violence',
      labelSw: 'Aina za ukatili',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_03',
      optionValue: 'signs',
      labelEn: 'Signs of abuse',
      labelSw: 'Dalili za ukatili',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_03',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_04',
      optionValue: 'signs',
      labelEn: 'Signs of abuse',
      labelSw: 'Dalili za ukatili',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_04',
      optionValue: 'not_normal',
      labelEn: 'Is it normal?',
      labelSw: 'Ni kawaida?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_04',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_09',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_05',
      optionValue: 'not_normal',
      labelEn: 'Is it normal?',
      labelSw: 'Ni kawaida?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_05',
      optionValue: 'if_unsafe',
      labelEn: 'If unsafe?',
      labelSw: 'Kama si salama?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_05',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_06',
      optionValue: 'if_unsafe',
      labelEn: 'If unsafe?',
      labelSw: 'Kama si salama?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_06',
      optionValue: 'what_next',
      labelEn: 'Anything else?',
      labelSw: 'Kuna lingine?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_08',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_06',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_09',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_07',
      optionValue: 'what_next',
      labelEn: 'Anything else?',
      labelSw: 'Kuna lingine?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_07',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_07',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_09',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_08',
      optionValue: 'types_violence',
      labelEn: 'Types of violence',
      labelSw: 'Aina za ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_08',
      optionValue: 'childrens_rights',
      labelEn: 'Child rights',
      labelSw: 'Haki za watoto',
      nextNodeKey: 'CHILDRENS_RIGHTS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_08',
      optionValue: 'test_yourself',
      labelEn: 'Test yourself',
      labelSw: 'Jipime',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_09',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_01',
      optionValue: 'start_refresher',
      labelEn: 'Start refresher',
      labelSw: 'Anza kujikumbusha',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_02',
      optionValue: 'get_help_now',
      labelEn: 'Get help now',
      labelSw: 'Pata msaada sasa',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_02',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_03',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_09',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_03',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_REFRESHER_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDS_MARRIAGE_01',
      optionValue: 'impacts',
      labelEn: 'The Impacts',
      labelSw: 'Madhara yake',
      nextNodeKey: 'CHILDS_MARRIAGE_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDS_MARRIAGE_01',
      optionValue: 'rights_future',
      labelEn: 'Rights and future',
      labelSw: 'Haki na mustakabali',
      nextNodeKey: 'CHILDS_MARRIAGE_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDS_MARRIAGE_01',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDS_MARRIAGE_02',
      optionValue: 'rights_future',
      labelEn: 'Rights and future',
      labelSw: 'Haki na mustakabali',
      nextNodeKey: 'CHILDS_MARRIAGE_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDS_MARRIAGE_02',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDS_MARRIAGE_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDS_MARRIAGE_03',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDS_MARRIAGE_03',
      optionValue: 'sexual_exploitation',
      labelEn: 'Sexual exploitation',
      labelSw: 'Unyonyaji wa kingono',
      nextNodeKey: 'SEXUAL_EXPLOITATION_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDS_MARRIAGE_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_01',
      optionValue: 'example',
      labelEn: 'Example',
      labelSw: 'Mfano',
      nextNodeKey: 'SEXUAL_EXPLOITATION_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_01',
      optionValue: 'harms',
      labelEn: 'The Harm',
      labelSw: 'Madhara yake',
      nextNodeKey: 'SEXUAL_EXPLOITATION_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_01',
      optionValue: 'healthy_relationships',
      labelEn: 'Healthy relations',
      labelSw: 'Mahusiano mazuri',
      nextNodeKey: 'SEXUAL_EXPLOITATION_04',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_02',
      optionValue: 'harms',
      labelEn: 'The Harm',
      labelSw: 'Madhara yake',
      nextNodeKey: 'SEXUAL_EXPLOITATION_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_02',
      optionValue: 'healthy_relationships',
      labelEn: 'Healthy relations',
      labelSw: 'Mahusiano mazuri',
      nextNodeKey: 'SEXUAL_EXPLOITATION_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_02',
      optionValue: 'transactional',
      labelEn: 'Transactional',
      labelSw: 'Kubadilishana vitu',
      nextNodeKey: 'TRANSACTIONAL_RELATIONSHIPS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_03',
      optionValue: 'healthy_relationships',
      labelEn: 'Healthy relations',
      labelSw: 'Mahusiano mazuri',
      nextNodeKey: 'SEXUAL_EXPLOITATION_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_03',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_04',
      optionValue: 'transactional',
      labelEn: 'Transactional',
      labelSw: 'Kubadilishana vitu',
      nextNodeKey: 'TRANSACTIONAL_RELATIONSHIPS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_04',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEXUAL_EXPLOITATION_04',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_01',
      optionValue: 'unequal_power',
      labelEn: 'Unequal power',
      labelSw: 'Nguvu zisizo sawa',
      nextNodeKey: 'TRANSACTIONAL_RELATIONSHIPS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_01',
      optionValue: 'risks',
      labelEn: 'Risks',
      labelSw: 'Hatari',
      nextNodeKey: 'TRANSACTIONAL_RELATIONSHIPS_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_01',
      optionValue: 'example',
      labelEn: 'Example',
      labelSw: 'Mfano',
      nextNodeKey: 'TRANSACTIONAL_RELATIONSHIPS_02',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_03',
      optionValue: 'risks',
      labelEn: 'Risks',
      labelSw: 'Hatari',
      nextNodeKey: 'TRANSACTIONAL_RELATIONSHIPS_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_03',
      optionValue: 'example',
      labelEn: 'Example',
      labelSw: 'Mfano',
      nextNodeKey: 'TRANSACTIONAL_RELATIONSHIPS_02',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_03',
      optionValue: 'sexual_exploitation',
      labelEn: 'Sexual exploitation',
      labelSw: 'Unyonyaji wa kingono',
      nextNodeKey: 'SEXUAL_EXPLOITATION_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_04',
      optionValue: 'example',
      labelEn: 'Example',
      labelSw: 'Mfano',
      nextNodeKey: 'TRANSACTIONAL_RELATIONSHIPS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_04',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_04',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_02',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_02',
      optionValue: 'sexual_exploitation',
      labelEn: 'Sexual exploitation',
      labelSw: 'Unyonyaji wa kingono',
      nextNodeKey: 'SEXUAL_EXPLOITATION_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TRANSACTIONAL_RELATIONSHIPS_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_01',
      optionValue: 'what_to_do',
      labelEn: 'What to do',
      labelSw: 'Cha kufanya',
      nextNodeKey: 'REPORTING_ABUSE_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_01',
      optionValue: 'medical_care',
      labelEn: 'Medical care',
      labelSw: 'Huduma ya afya',
      nextNodeKey: 'REPORTING_ABUSE_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_01',
      optionValue: 'concerns',
      labelEn: 'Common concerns',
      labelSw: 'Hofu za kawaida',
      nextNodeKey: 'REPORTING_ABUSE_03',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_02',
      optionValue: 'medical_care',
      labelEn: 'Medical care',
      labelSw: 'Huduma ya afya',
      nextNodeKey: 'REPORTING_ABUSE_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_02',
      optionValue: 'authorities',
      labelEn: 'Notify Authorities',
      labelSw: 'Ripoti kwa Mamlaka',
      nextNodeKey: 'REPORTING_ABUSE_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_02',
      optionValue: 'concerns',
      labelEn: 'Common concerns',
      labelSw: 'Hofu za kawaida',
      nextNodeKey: 'REPORTING_ABUSE_03',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_04',
      optionValue: 'authorities',
      labelEn: 'Notify Authorities',
      labelSw: 'Ripoti kwa Mamlaka',
      nextNodeKey: 'REPORTING_ABUSE_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_04',
      optionValue: 'concerns',
      labelEn: 'Common concerns',
      labelSw: 'Hofu za kawaida',
      nextNodeKey: 'REPORTING_ABUSE_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_04',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_05',
      optionValue: 'concerns',
      labelEn: 'Common concerns',
      labelSw: 'Hofu za kawaida',
      nextNodeKey: 'REPORTING_ABUSE_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_05',
      optionValue: 'services',
      labelEn: 'Services',
      labelSw: 'Huduma',
      nextNodeKey: 'TYPES_OF_VIOLENCE_07',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_05',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_03',
      optionValue: 'services',
      labelEn: 'Services',
      labelSw: 'Huduma',
      nextNodeKey: 'TYPES_OF_VIOLENCE_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_03',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REPORTING_ABUSE_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
  ],
};


