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
      messageText: `SEX is the biological difference between being a woman or a man where a person is capable of carrying out gender roles including women producing eggs, carrying a baby, giving birth and breastfeeding and men producing sperm. These roles do not change.
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
      messageText: `JINSI ni tofauti ya maumbile ya kibaiolojia ya kuwa mwanamke au mwanaume ambapo mtu ana uwezo wa kumudu majukumu ya jinsi ikiwa ni pamoja na mwanamke kutengeneza yai, kubeba mimba, kuzaa na kunyonyesha na mwanaume kutengeneza mbegu za uzazi. Majukumu haya huwa hayabadiliki.
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
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `GENDER is the division of roles between women and men according to the norms and procedures of the respective society.
It also includes the expectations of society about what the right man should be, and the right woman as well.

Gender issues are constructed by the respective society, varying according to one place or another.
These roles or expectations can change over time and the society around him.
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
      messageText: `JINSIA ni mgawanyo wa majukumu kati ya mwanamke na mwanaume kulingana na kanuni na taratibu za jamii husika.
Huhusisha pia matarajio ya jamii kuhusu vile mwanaume sahihi anatakiwa kuwa, na mwanamke sahihi vile vile.

Masuala ya kijinsia hujengwa na jamii husika, hutofautiana kulingana na sehemu moja ama nyingine.
Majukumu ama matarajio hayo huweza kubadilika kadri ya wakati unavyoenda na hali ya jamii inayomzunguka.
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
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Attitude/Expectations and Responsibilities of a Man
    • Be a leader, head of the family
    • Be brave, can have many lovers
    • Bring money home (bread winner)
    • Make decisions
    • Work hard
    • Be assertive
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
      messageText: `Mtazamo/Matarajio na Majukumu ya Mwanaume
    1.Awe kiongozi Kichwa cha familia
    2.Jasiri Anaweza kuwa na wapenzi wengi
    3.Alete pesa nyumbani (bread winner)
    4.Afanye maamuzi
    5.Afanye kazi ngumu
    6.Awe na msimamo
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
      messageText: `Attitude/Expectations and Responsibilities of a Woman
    • Get married
    • Raise children
    • Do all the housework
    • Have one lover
    • Be taken care of by a man (dependent)
    • Be humble and responsive
    • Be clean, beautiful
    • Be gentle
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'GENDER_ROLES_AND_STEREOTYPES',
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mtazamo/ Matarajio na Majukumu ya Mwanamke
    1.Aolewe
    • Alee watoto
    3.Afanye kazi zote za nyumbani
    4.Awe na mpenzi mmoja
    5.Atunzwe na mwanaume (tegemezi)
    6.Awe mnyenyekevu na msikivu
    7.Awe msafi, mrembo
    8.Awe mpole
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `VIOLENCE is any act or word that can include, oppression, abuse and control that causes physical, emotional, social or economic harm, such as the use of force, coercion or bodily harm.

Sexual violence is any act of violence against any woman, man or child with the aim of harming the body or person because of their gender.

Sexual violence includes sexual, psychological, harmful practices and economic and social abuse.

Sexual violence affects women and children more than men.
`,
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
      messageText: `UKATILI ni matendo au maneno yanayoweza kujumuisha, ukandamizajiunyanyasaji na udhibiti unaosababisha madhara kimwili, kihisia, kijamii au kiuchumi, kama vile kutumia nguvu, kulazimisha au kudhuru mwili.

Ukatili wa kijinsia ni kitendo chochote cha kikatili anachofanyiwa mtu yeyote mwanamke, mwanaume au mtoto chenye lengo la kumuumiza mwili au kiutu kutokana na jinsia yake.

Ukatili wa kijinsia unajumuisha ukatili wa kingono, kisaikolojia, mila hatarishi na unyanyasaji wa uchumi na kijamii.

Ukatili wa kijinsia huathiri wanawake na watoto zaidi kuliko wanaume.
`,
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
      messageText: `There are four types of violence:
    • Physical violence It is an act done to a person that involves physical harm and can be directly seen or the victim feels pain. Example: Being beaten, pushed, injured, etc.
`,
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
      messageText: `Kuna aina nne za ukatili:
    • Ukatili wa kimwili Ni kitendo anachofanyiwa mtu kinachohusisha kuumizwa mwili na huweza kuonekana moja kwa moja au muathirika kuhisi maumivu. Mfano: Kupigwa, kusukumwa, kujeruhiwa n.k
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_08',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `• Emotional/psychological violence is violence that a person is subjected to and that causes emotional/psychological pain. Example: Being insulted, humiliated, discriminated against, abandoned, threatened.
`,
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
      messageText: `• Ukatili wa kihisia/kisaikolojia ni ukatili ambao mtu anatendewa na unaomsababishia maumivu kihisia/kisaikolojia Mfano: Kutukanwa, kusimangwa, kubaguliwa, kuachwa, kutishiwa
`,
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
      messageText: `• Economic violence is a type of violence that deprives a woman or man of economic opportunities to increase their income and contribute to development. Example: discrimination in economic opportunities, human trafficking.
`,
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
      messageText: `• Ukatili wa kiuchumi ni aina ya ukatili ambao unamnyima fursa za kiuchumi mwanamke au mwanaume katika kujiongezeakipato na kuchangia katika maendeleo. Mfano: ubaguzi wa fursa za kiuchumi, usafirishaji haramu wa watu.
`,
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
      messageText: `iv) Sexual violence is any sexual act that is done to a person without their consent, such as sexual harassment, sexual abuse, female genital mutilation, forced sex work, sexual exploitation and rape within marriage or relationships. Example: Rape, sodomy, groping without consent, leaking of nude photos without consent.
`,
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
      messageText: `iv) Ukatili wa kingono ni kitendo chochote cha kingono anachofanyiwa mtu bila ridhaa yake, mfano bugudha za kingono, unyanyasaji wa kingono, ukeketaji wa watoto wa kike, kulazimishwa kufanya biashara ya ngono, Kutumikishwa kingono na ubakaji ndani ya ndoa au mahusiano Mfano: Kubakwa, kulawitiwa, kushikwa sehemu za siri bila ridhaa, kuvujishwa kwa picha za utupu bila ridhaa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 10,
      isActive: true,
    },

    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_03',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `    Rape/Sodomy is one of the worst acts of sexual abuse that has serious consequences for young people. Rape involves the forcible physical penetration of a person without their consent.
Types of rape and sodomy
    ● Rape/sodomy within marriage
    ● Rape/sodomy committed by a group
    ● Rape/sodomy between family members
    ● Rape/sodomy between strangers`,
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
      messageText: `Ubakaji/Ulawiti Ni moja kati ya matendo mabaya ya udhalilishaji wa kingono yenye madhara makubwa kwa vijana.
Ubakaji unahusisha kumwingilia mtu kimwili kwa nguvu bila ridhaa yake.

Aina za ubakaji na ulawiti:
    ● Ubakaji/ulawiti ndani ya ndoa
    ● Ubakaji/ulawiti unaofanywa na kikundi
    ● Ubakaji/ulawiti kati ya wanafamilia
    ● Ubakaji/ulawiti kati ya watu wasiofahamiana`,
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
      messageText: `Young people are often raped/sodomyed by people they know and trust.

These can be parents/guardians, family friends, family members, neighbors, strangers, friends/lovers, teachers, religious leaders
`,
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
      messageText: `Vijana mara nyingi wanabakwa/wanalawitiwa na watu wanaowafahamu na kuwaamini.

Hao wanaweza kuwa wazazi/walezi ,marafiki wa familia ,mwanafamilia,jirani ,mgeni ,rafiki/mpenzi,walimu ,viongozi wa dini
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_11',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Effects of rape and sodomy:
      ● Bruises and injuries during physical penetration,
      ● Genital mutilation (for women)
      ● Sexually transmitted infections including HIV
      ● Unintended pregnancy and abortion,
      ● Fear, depression, and suicide
      ● Possibility of becoming a drug user due to stress
`,
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
      messageText: `Madhara ya ubakaji na ulawiti:
      ● michubuko na majeraha wakati wa kuingiliwa kimwili
      ● Kuharibika kwa viungo vya uzazi (kwa mwanamke)
      ● Maambukizi ya magonjwa ya ngono ikiwemo VVU
      ● Kupata mimba zisizotarajiwa na utoaji wa mimba
      ● Hofu, sonona, na kujiua
      ● Uwezekano wa kuwa mtumiaji wa dawa za kulevya kutokana na msongo wa mawazo
`,
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
      messageText: `Symptoms of a young person who has been raped or sodomized:
      ● Cannot walk/sit properly
      ● Tearing, swelling and itching of the genitals
      ● Bleeding from the vagina or anus
      ● Discharge from the vagina or anus
`,
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
      messageText: `Dalili za kijana aliyebakwa au kulawitiwa:
      ● Hawezi kutembea/kukaa vizuri
      ● Kuchanika, kuvimba na kuwashwa sehemu za siri
      ● Kutoka damu ukeni au njia ya haja kubwa
      ● Kutoka uchafu ukeni au njia ya haja kubwa
`,
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
      messageText: `How to prevent sexual violence:
      ● Avoiding dangerous environments that can lead to violence
      ● Providing education about sexual violence to the community
      ● Improving policies and laws
      ● Having the courage to reject acts of violence
`,
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
      messageText: `Jinsi ya kuzuia unyanyasaji wa kijinsia
      ● Kujiepusha na mazingira hatarishi yanayoweza kusababisha kufanyiwa ukatili
      ● Kutoa elimu kuhusu ukatili wa kijinsia kwa jamii
      ● Kuboresha sera na sheria
      ● Kuwa na uthubutu wa kukataa vitendo vya unyanyasaji
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 13,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_05',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Steps to take after being subjected to sexual violence
    ● Leave the dangerous area and go to a safe area
    ● Preserve evidence, do not clean your vagina or anus immediately after being raped or sodomized, nor wash clothes, preserve for evidence.
    ● Take the names of witnesses
    ● Report the incident of sexual violence early to the police station or to the authorities
    ● Go to a health care facility as soon as possible (importantly within 72 hours)
`,
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
      messageText: `Hatua za kuchukua baada ya kufanyiwa ukatili wa kingono
    ● Toka katika eneo hatarishi na uende eneo salama
    ● Tunza ushahidi, usijisafishe ukeni au sehemu ya haja kubwa mara baada ya kubakwa au kulawitiwa wala kufua nguo tunza kwa ajili ya ushahidi.
    ● Chukua majina ya mashahidi
    ● Toa taarifa za tukio la ukatili wa kingono mapema katika kituo cha polisi au kwa viongozi
    ● Nenda katika kituo cha kutoa huduma za afya mapema iwezekanavyo (muhimu iwe ndani ya saa 72)
`,
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
      messageText: `GROUPS OF YOUTH WHO ARE AT HIGHEST RISK OF BEING AFFECTED BY RISK BEHAVIOR
    ● Youth living in extreme poverty.
    ● Young people with physical or mental disabilities
    ● Orphans
    ● Young people whose parents were also abused in childhood
    ● Young people from areas where the population is very strict about customs and traditions
    ● Children living in vulnerable environments
    ● Young people living in vulnerable areas such as truck parking lots, bus stands, mines, etc.
    ● Young people living away from their parents
    ● Young people living in ghettos or brothels
`,
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
      messageText: `MAKUNDI YA VIJANA AMBAO WAKO KATIKA HATARI ZAIDI YA KUATHIRIKA NA VITENDO HATARISHI
    ● Vijana wanaoishi katika mazingira ya umasikini uliokithiri.
    ● Vijana wenye ulemavu wa mwili au akili
    ● Yatima
    ● Vijana ambao wazazi wao pia walinyanyaswa utotoni
    ● Vijana wanaotoka maeneo ambayo wakazi wake wanazingatia sanasana mila na desturi potofu
    ● Watoto wanaoishi katika mazingira hatarishi
    ● Vijana wanaoishi katika maeneo hatarishi mfano vituo vya maegesho ya magari ya mizigo, stendi za mabasi, migodini n.k
    ● Vijana wanaoishi mbali na wazazi
    ● Vijana wanaoishi kwenye mageto au madanguro
`,
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
      messageText: `SERVICES FOR VICTIMS OF SEXUAL VIOLENCE
    ● Counseling
    ● Health care
    ● Legal assistance
    ● Toll-free number (116) available through all networks (National Child helpline)
`,
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
      messageText: `HUDUMA KWA WAATHIRIKA WA UKATILI WA KINGONO
    ● Ushauri Nasaha
    ● Huduma ya afya
    ● Usaidizi wa kisheria
    ● Nambari ya simu isiyolipishwa (116) inapatikana kupitia mitandao yote (Mstari wa Kitaifa wa Usaidizi wa Mtoto)
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 7,
      isActive: true,
    },

    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_14',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `NOTE: Information on sexual violence can be provided to:
      ● Social Welfare Officer
      ● Community Development Officer
      ● Police Gender Desk
      ● Ward Executive Officer
      ● Paralegals
      ● Health Care Center
      ● Religious leaders`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 14,
      isActive: true,
    },
    {
      subtopicCode: 'TYPES_OF_VIOLENCE',
      nodeKey: 'TYPES_OF_VIOLENCE_14',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `KUMBUKA: Taarifa kuhusu ukatili wa kijinsia zinaweza kutolewa kwa:
      ● Afisa wa Ustawi wa Jamii
      ● Afisa wa Maendeleo ya Jamii
      ● Dawati la Polisi Jinsia
      ● Afisa Mtendaji wa Kata
      ● Wasaidizi wa Kisheria
      ● Kituo cha Huduma ya Afya
      ● Viongozi wa kidini`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 14,
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
Haki za watoto zinalindwa na sheria za kitaifa na mikataba ya kimataifa, ikiwa ni pamoja na Mkataba wa Haki za Mtoto na Sheria ya Sheria ya Mtoto ya Tanzania.
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
      messageText: `Key Rights of Every Child
    ● Right to Education  child has the right to attend school and receive an education.
    ● Right to Health  child has the right to healthcare, information, and services that support their wellbeing.
    ● Right to Protection have the right to be protected from violence, neglect, exploitation, and abuse.
    ● Right to Participation have the right to express their views and be listened to on matters affecting them.
    ● Right to Identity  child has the right to a name, nationality, and legal identity.
    ● Right to Survival and Development  have the right to food, shelter, care, and opportunities to develop their full potential.`,
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
      messageText: `Haki Muhimu za Kila Mtoto:
    ● Haki ya Elimu: Kila mtoto ana haki ya kuhudhuria shule na kupata elimu.
    ● Haki ya Afya: Kila mtoto ana haki ya kupata huduma za afya, taarifa, na huduma zinazounga mkono ustawi wake.
    ● Haki ya Ulinzi: Watoto wana haki ya kulindwa kutokana na vurugu, kupuuzwa, unyonyaji, na unyanyasaji.
    ● Haki ya Kushiriki: Watoto wana haki ya kutoa maoni yao na kusikilizwa kuhusu mambo yanayowahusu.
    ● Haki ya Utambulisho: Kila mtoto ana haki ya jina, uraia, na utambulisho wa kisheria.
    ● Haki ya Kuishi na Maendeleo: Watoto wana haki ya kupata chakula, malazi, matunzo, na fursa za kukuza uwezo wao kamili.`,
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
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'CHILDRENS_RIGHTS',
      nodeKey: 'CHILDRENS_RIGHTS_04',
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
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Adolescents have all the rights of children while also developing greater responsibility and independence as they grow.
These rights support young people's health, safety, education, participation, and development.
`,
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
      messageText: `Vijana wana haki zote za watoto huku pia wakiendeleza uwajibikaji na uhuru mkubwa wanapokua.
Haki hizi zinaunga mkono afya, usalama, elimu, ushiriki, na maendeleo ya vijana.
`,
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
      messageText: `Important Rights for Adolescents
    ● Right to Information  people have the right to accurate information about health, education, and wellbeing.
    ● Right to Safety people should be protected from violence, exploitation, and abuse.
    ● Right to Education have the right to continue learning and developing skills.
    ● Right to Health Services people should be able to access appropriate health information and services.
    ● Right to Be Heard  should have opportunities to express their views and participate in decisions affecting them.
During adolescence, young people face many changes and decisions ,access to accurate information and supportive environments helps them make safer and healthier choices.`,
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
      messageText: `Haki Muhimu kwa Vijana
    ● Haki ya Kupata Taarifa: Vijana wana haki ya kupata taarifa sahihi kuhusu afya, elimu, na ustawi.
    ● Haki ya Usalama: Vijana wanapaswa kulindwa dhidi ya vurugu, unyonyaji, na unyanyasaji.
    ● Haki ya Elimu: Vijana wana haki ya kuendelea kujifunza na kukuza ujuzi.
    ● Haki ya Huduma za Afya: Vijana wanapaswa kuweza kupata taarifa na huduma zinazofaa za afya.
    ● Haki ya Kusikilizwa: Vijana wanapaswa kupata fursa za kutoa maoni yao na kushiriki katika maamuzi yanayowahusu.
Wakati wa ujana, vijana wanakabiliwa na mabadiliko na maamuzi mengi, upatikanaji wa taarifa sahihi na mazingira ya usaidizi huwasaidia kufanya maamuzi salama na yenye afya.`,
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
      messageText: `Myths and Facts
Myth: Should always remain silent when adults speak.
Fact: Have the right to express their views respectfully.

Myth: Wealthy children have rights.
Fact: Child has rights regardless of background.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_RIGHTS',
      nodeKey: 'ADOLESCENTS_RIGHTS_03',
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
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Protection from violence means ensuring that children and young people are safe from any actions that may cause them physical, emotional, sexual or psychological harm.
Every child has the right to live in a safe environment that enables them to grow, learn and achieve their dreams without fear of being hurt or abused.
Violence can occur at home, at school, online, at work or in the community, and is often perpetrated by people known to the child such as siblings, teachers, neighbours, friends or community leaders.
`,
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
      messageText: `Ulinzi dhidi ya ukatili unamaanisha kuhakikisha kwamba watoto na vijana wako salama dhidi ya vitendo vyovyote vinavyoweza kuwasababishia madhara ya kimwili, kihisia, kingono au kisaikolojia.
Kila mtoto ana haki ya kuishi katika mazingira salama yanayomwezesha kukua, kujifunza na kufikia ndoto zake bila hofu ya kuumizwa au kunyanyaswa.
Ukatili unaweza kutokea nyumbani, shuleni, mtandaoni, kazini au katika jamii, na mara nyingi hufanywa na watu wanaojulikana na mtoto kama vile ndugu, walimu, majirani, marafiki au viongozi wa jamii.
`,
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
      messageText: `Types of violence can include beatings, insults, humiliation, isolation, intimidation, sexual contact without consent, forced labour, or deprivation of basic needs such as food, education and healthcare.
Children and young people who experience violence often show symptoms such as prolonged sadness, fear, isolation from others, poor school performance or unexplained injuries.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_gender_violence',
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
      messageText: `Aina za ukatili zinaweza kujumuisha kupigwa, kutukanwa, kudhalilishwa, kutengwa, kutishwa, kuguswa kingono bila ridhaa, kulazimishwa kufanya kazi nzito, au kunyimwa mahitaji muhimu kama chakula, elimu na huduma za afya.
Mara nyingi watoto na vijana wanaopitia ukatili huonyesha dalili kama huzuni ya muda mrefu, hofu, kutengwa na wengine, kushuka kwa ufaulu shuleni, au majeraha yasiyoelezeka.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_gender_violence',
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
      messageText: `For young people in Tanzania, it is important to understand that violence is neither normal nor part of good parenting.
No one deserves to be beaten, intimidated, humiliated or forced to do something they refuse to do.
`,
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
      messageText: `Kwa vijana wa Tanzania, ni muhimu kuelewa kwamba ukatili si jambo la kawaida wala si sehemu ya malezi bora.
Hakuna mtu anayestahili kupigwa, kutishwa, kudhalilishwa au kulazimishwa kufanya jambo analokataa.
`,
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
      messageText: `If a young person feels unsafe or has experienced violence, they should talk to a parent, guardian, teacher, social worker, health care provider or a trusted adult.
Reporting violence can help get help and prevent further harm to the child or other young people.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'PROTECTION_FROM_ABUSE',
      nodeKey: 'PROTECTION_FROM_ABUSE_04',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ikiwa kijana anahisi hana usalama au amepitia ukatili, anapaswa kuzungumza na mzazi, mlezi, mwalimu, afisa ustawi wa jamii, mtoa huduma za afya au mtu mzima anayemwamini.
Kuripoti ukatili kunaweza kusaidia kupata msaada na kuzuia madhara zaidi kwa mtoto au vijana wengine.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 4,
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
      optionValue: 'gender_meaning',
      labelEn: 'Gender meaning',
      labelSw: 'Maana ya jinsia',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      optionValue: 'man_expectations',
      labelEn: 'Man expectations',
      labelSw: 'Matarajio mwanaume',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_01',
      optionValue: 'woman_expectations',
      labelEn: 'Woman expectations',
      labelSw: 'Matarajio mwanamke',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      optionValue: 'man_expectations',
      labelEn: 'Man expectations',
      labelSw: 'Matarajio mwanaume',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      optionValue: 'woman_expectations',
      labelEn: 'Woman expectations',
      labelSw: 'Matarajio mwanamke',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_04',
      optionValue: 'violence_types',
      labelEn: 'Violence',
      labelSw: 'Ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      optionValue: 'woman_expectations',
      labelEn: 'Woman expectations',
      labelSw: 'Matarajio mwanamke',
      nextNodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      optionValue: 'violence_types',
      labelEn: 'Violence',
      labelSw: 'Ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      optionValue: 'violence_types',
      labelEn: 'Violence',
      labelSw: 'Ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      optionValue: 'child_rights',
      labelEn: 'Child rights',
      labelSw: 'Haki za watoto',
      nextNodeKey: 'CHILDRENS_RIGHTS_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'GENDER_ROLES_AND_STEREOTYPES_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_01',
      optionValue: 'violence_types',
      labelEn: 'Violence types',
      labelSw: 'Aina za ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_01',
      optionValue: 'rape_sodomy',
      labelEn: 'Rape and sodomy',
      labelSw: 'Ubakaji/ulawiti',
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
      optionValue: 'emotional_violence',
      labelEn: 'Emotional violence',
      labelSw: 'Ukatili wa hisia',
      nextNodeKey: 'TYPES_OF_VIOLENCE_08',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_02',
      optionValue: 'economic_violence',
      labelEn: 'Economic violence',
      labelSw: 'Ukatili kiuchumi',
      nextNodeKey: 'TYPES_OF_VIOLENCE_09',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_02',
      optionValue: 'sexual_violence',
      labelEn: 'Sexual violence',
      labelSw: 'Ukatili wa kingono',
      nextNodeKey: 'TYPES_OF_VIOLENCE_10',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_08',
      optionValue: 'economic_violence',
      labelEn: 'Economic violence',
      labelSw: 'Ukatili kiuchumi',
      nextNodeKey: 'TYPES_OF_VIOLENCE_09',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_08',
      optionValue: 'sexual_violence',
      labelEn: 'Sexual violence',
      labelSw: 'Ukatili wa kingono',
      nextNodeKey: 'TYPES_OF_VIOLENCE_10',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_08',
      optionValue: 'rape_sodomy',
      labelEn: 'Rape and sodomy',
      labelSw: 'Ubakaji/ulawiti',
      nextNodeKey: 'TYPES_OF_VIOLENCE_03',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_09',
      optionValue: 'sexual_violence',
      labelEn: 'Sexual violence',
      labelSw: 'Ukatili wa kingono',
      nextNodeKey: 'TYPES_OF_VIOLENCE_10',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_09',
      optionValue: 'rape_sodomy',
      labelEn: 'Rape and sodomy',
      labelSw: 'Ubakaji/ulawiti',
      nextNodeKey: 'TYPES_OF_VIOLENCE_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_09',
      optionValue: 'services',
      labelEn: 'Services',
      labelSw: 'Huduma',
      nextNodeKey: 'TYPES_OF_VIOLENCE_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_10',
      optionValue: 'rape_sodomy',
      labelEn: 'Rape and sodomy',
      labelSw: 'Ubakaji/ulawiti',
      nextNodeKey: 'TYPES_OF_VIOLENCE_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_10',
      optionValue: 'after_violence',
      labelEn: 'After violence',
      labelSw: 'Baada ya ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_10',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_03',
      optionValue: 'known_people',
      labelEn: 'Who does this',
      labelSw: 'Unafyika na nani',
      nextNodeKey: 'TYPES_OF_VIOLENCE_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_03',
      optionValue: 'effects',
      labelEn: 'The Effects',
      labelSw: 'Madhara yake',
      nextNodeKey: 'TYPES_OF_VIOLENCE_11',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_03',
      optionValue: 'after_violence',
      labelEn: 'After violence',
      labelSw: 'Baada ya ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_04',
      optionValue: 'effects',
      labelEn: 'The Effects',
      labelSw: 'Madhara yake',
      nextNodeKey: 'TYPES_OF_VIOLENCE_11',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_04',
      optionValue: 'symptoms',
      labelEn: 'Symptoms',
      labelSw: 'Dalili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_12',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_04',
      optionValue: 'prevention',
      labelEn: 'Prevention',
      labelSw: 'Kuzuia',
      nextNodeKey: 'TYPES_OF_VIOLENCE_13',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_11',
      optionValue: 'symptoms',
      labelEn: 'Symptoms',
      labelSw: 'Dalili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_12',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_11',
      optionValue: 'prevention',
      labelEn: 'Prevention',
      labelSw: 'Kuzuia',
      nextNodeKey: 'TYPES_OF_VIOLENCE_13',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_11',
      optionValue: 'after_violence',
      labelEn: 'After violence',
      labelSw: 'Baada ya ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_05',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_12',
      optionValue: 'prevention',
      labelEn: 'Prevention',
      labelSw: 'Kuzuia',
      nextNodeKey: 'TYPES_OF_VIOLENCE_13',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_12',
      optionValue: 'after_violence',
      labelEn: 'After violence',
      labelSw: 'Baada ya ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_05',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_12',
      optionValue: 'services',
      labelEn: 'Services',
      labelSw: 'Huduma',
      nextNodeKey: 'TYPES_OF_VIOLENCE_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_13',
      optionValue: 'after_violence',
      labelEn: 'After violence',
      labelSw: 'Baada ya ukatili',
      nextNodeKey: 'TYPES_OF_VIOLENCE_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_13',
      optionValue: 'risk_groups',
      labelEn: 'Risk groups',
      labelSw: 'Makundi hatarini',
      nextNodeKey: 'TYPES_OF_VIOLENCE_06',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_13',
      optionValue: 'services',
      labelEn: 'Services',
      labelSw: 'Huduma',
      nextNodeKey: 'TYPES_OF_VIOLENCE_07',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_05',
      optionValue: 'risk_groups',
      labelEn: 'Risk groups',
      labelSw: 'Makundi hatarini',
      nextNodeKey: 'TYPES_OF_VIOLENCE_06',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_05',
      optionValue: 'services',
      labelEn: 'Services',
      labelSw: 'Huduma',
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
      optionValue: 'services',
      labelEn: 'Services',
      labelSw: 'Huduma',
      nextNodeKey: 'TYPES_OF_VIOLENCE_07',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_06',
      optionValue: 'where_to_report',
      labelEn: 'Where to report',
      labelSw: 'Wapi kuripoti',
      nextNodeKey: 'TYPES_OF_VIOLENCE_14',
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
      optionValue: 'where_to_report',
      labelEn: 'Where to report',
      labelSw: 'Wapi kuripoti',
      nextNodeKey: 'TYPES_OF_VIOLENCE_14',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_07',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_07',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_14',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_14',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'TYPES_OF_VIOLENCE_14',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_01',
      optionValue: 'why_rights',
      labelEn: 'Why rights matter',
      labelSw: 'Umuhimu wa haki',
      nextNodeKey: 'CHILDRENS_RIGHTS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_01',
      optionValue: 'key_rights',
      labelEn: 'Key rights',
      labelSw: 'Haki muhimu',
      nextNodeKey: 'CHILDRENS_RIGHTS_03',
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
      optionValue: 'key_rights',
      labelEn: 'Key rights',
      labelSw: 'Haki muhimu',
      nextNodeKey: 'CHILDRENS_RIGHTS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_02',
      optionValue: 'common_questions',
      labelEn: 'Common questions',
      labelSw: 'Maswali ya kawaida',
      nextNodeKey: 'CHILDRENS_RIGHTS_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_02',
      optionValue: 'adolescent_rights',
      labelEn: 'Adolescent rights',
      labelSw: 'Haki za vijana',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_03',
      optionValue: 'common_questions',
      labelEn: 'Common questions',
      labelSw: 'Maswali ya kawaida',
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
      optionValue: 'adolescent_rights',
      labelEn: 'Adolescent rights',
      labelSw: 'Haki za vijana',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_04',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CHILDRENS_RIGHTS_04',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_01',
      optionValue: 'important_rights',
      labelEn: 'Important rights',
      labelSw: 'Haki muhimu',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_01',
      optionValue: 'myths_facts',
      labelEn: 'Myths and facts',
      labelSw: 'Hadithi na ukweli',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_01',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_02',
      optionValue: 'myths_facts',
      labelEn: 'Myths and facts',
      labelSw: 'Hadithi na ukweli',
      nextNodeKey: 'ADOLESCENTS_RIGHTS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_02',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_02',
      optionValue: 'child_marriage',
      labelEn: 'Child marriage',
      labelSw: 'Ndoa za utotoni',
      nextNodeKey: 'CHILDS_MARRIAGE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_03',
      optionValue: 'protection',
      labelEn: 'Protection',
      labelSw: 'Ulinzi',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_03',
      optionValue: 'child_marriage',
      labelEn: 'Child marriage',
      labelSw: 'Ndoa za utotoni',
      nextNodeKey: 'CHILDS_MARRIAGE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_RIGHTS_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_01',
      optionValue: 'violence_signs',
      labelEn: 'Violence signs',
      labelSw: 'Dalili za ukatili',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_01',
      optionValue: 'not_normal',
      labelEn: 'Is it normal?',
      labelSw: 'Ni kawaida?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_03',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_01',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_04',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_02',
      optionValue: 'not_normal',
      labelEn: 'Is it normal?',
      labelSw: 'Ni kawaida?',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_02',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_04',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_02',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_03',
      optionValue: 'get_help',
      labelEn: 'Get help',
      labelSw: 'Pata msaada',
      nextNodeKey: 'PROTECTION_FROM_ABUSE_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_03',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_04',
      optionValue: 'report_abuse',
      labelEn: 'Report abuse',
      labelSw: 'Ripoti ukatili',
      nextNodeKey: 'REPORTING_ABUSE_01',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_04',
      optionValue: 'child_marriage',
      labelEn: 'Child marriage',
      labelSw: 'Ndoa za utotoni',
      nextNodeKey: 'CHILDS_MARRIAGE_01',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PROTECTION_FROM_ABUSE_04',
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
