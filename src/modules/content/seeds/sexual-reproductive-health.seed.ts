import { InputType } from '../../../common/enums/input-type.enum';
import { Language } from '../../../common/enums/language.enum';
import { NodeType } from '../../../common/enums/node-type.enum';

export const sexualReproductiveHealthSeed = {
  category: {
    code: 'SEXUAL_AND_REPRODUCTIVE_HEALTH',
    titleEn: 'Sexual and Reproductive Health',
    titleSw: 'Afya ya Uzazi',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 3,
    isActive: true,
  },

  topic: {
    code: 'SEXUAL_AND_REPRODUCTIVE_HEALTH',
    titleEn: 'Sexual and Reproductive Health',
    titleSw: 'Afya ya Uzazi',
    descriptionEn: null,
    descriptionSw: null,
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 1,
    isActive: true,
  },

  subtopics: [
    {
      code: 'CONDOM_USE',
      titleEn: 'Condom Use',
      titleSw: 'Matumizi ya Kondomu',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 1,
      isActive: true,
    },
    {
      code: 'REPRODUCTIVE_ANATOMY',
      titleEn: 'Reproductive Anatomy',
      titleSw: 'Mfumo wa Uzazi',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 2,
      isActive: true,
    },
    {
      code: 'HUMAN_REPRODUCTION',
      titleEn: 'Human Reproduction',
      titleSw: 'Jinsi Mimba inavyotungwa',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 3,
      isActive: true,
    },
    {
      code: 'PREGNANCY',
      titleEn: 'Pregnancy',
      titleSw: 'Ujauzito',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 4,
      isActive: true,
    },
    {
      code: 'MISCARRIAGE',
      titleEn: 'Miscarriage',
      titleSw: 'Kuharibika Mimba',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 5,
      isActive: true,
    },
    {
      code: 'EARLY_AND_ADOLESCENT_PREGNANCY',
      titleEn: 'Early and Adolescent Pregnancy',
      titleSw: 'Ujauzito wa Utotoni na Ujana',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 6,
      isActive: true,
    },
    {
      code: 'ANTENATAL_CARE',
      titleEn: 'Antenatal Care',
      titleSw: 'Huduma za Kliniki Wakati wa Ujauzito',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 7,
      isActive: true,
    },
    {
      code: 'FAMILY_PLANNING',
      titleEn: 'Family Planning',
      titleSw: 'Uzazi wa Mpango',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 8,
      isActive: true,
    },
    {
      code: 'CONTRACEPTIVE_METHODS',
      titleEn: 'Contraceptive methods',
      titleSw: 'Njia za uzazi wa mpango',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 9,
      isActive: true,
    },
    {
      code: 'ADOLESCENTS_NEEDS_DURING_PREGNANCY',
      titleEn: 'Adolescents Needs during pregnancy',
      titleSw: 'Mahitaji ya vijana balehe kipindi cha ujauzito',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 10,
      isActive: true,
    },
    {
      code: 'HIV_AND_AIDS',
      titleEn: 'HIV and AIDS',
      titleSw: 'VVU na UKIMWI',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 11,
      isActive: true,
    },
    {
      code: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR',
      titleEn: 'Adolescents with Disability in their rights with SRHR',
      titleSw:
        'Haki za vijana balehe wenye ulemavu kwenye swala la afya ya uzazi',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 12,
      isActive: true,
    },
    {
      code: 'SEXUALLY_TRANSMITTED_INFECTIONS',
      titleEn: "Sexually Transmitted Infections (STI's)",
      titleSw: 'Magonjwa ya zinaa',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 13,
      isActive: true,
    },
    {
      code: 'HIV_TESTING_SERVICES',
      titleEn: 'HIV Testing Services',
      titleSw: 'Huduma za upimaji wa VVU',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 14,
      isActive: true,
    },
    {
      code: 'CONDOM_EDUCATION',
      titleEn: 'Condom Education',
      titleSw: 'Elimu ya kondomu',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 15,
      isActive: true,
    },
    {
      code: 'HEALTH_SEEKING_BEHAVIOUR',
      titleEn: 'Health Seeking Behaviour',
      titleSw: 'Kutafuta huduma za afya',
      descriptionEn: null,
      descriptionSw: null,
      audienceGender: null,
      ageBandRule: null,
      sortOrder: 16,
      isActive: true,
    },
  ],

  contentNodes: [
    {
      subtopicCode: 'CONDOM_USE',
      nodeKey: 'CONDOM_USE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Condoms can help prevent pregnancy and reduce the risk of sexually transmitted infections when used correctly.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_condom_info_01',
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'CONDOM_USE',
      nodeKey: 'CONDOM_USE_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kondomu zinaweza kusaidia kuzuia mimba na kupunguza hatari ya maambukizi ya magonjwa ya ngono zikitumika kwa usahihi.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_condom_info_01',
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'REPRODUCTIVE_ANATOMY',
      nodeKey: 'REPRODUCTIVE_ANATOMY_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Reproductive anatomy refers to the body parts involved in human reproduction. 

These organs help the body develop during puberty and play important roles in fertility, menstruation, pregnancy, and sexual health. 

Every person is unique, and reproductive organs may vary slightly in size, shape, and appearance. These differences are usually normal.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'REPRODUCTIVE_ANATOMY',
      nodeKey: 'REPRODUCTIVE_ANATOMY_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mfumo wa uzazi ni mkusanyiko wa viungo vya mwili vinavyohusika katika uzazi wa binadamu. 

Viungo hivi vina jukumu muhimu katika balehe, hedhi, utungaji wa mimba na afya ya uzazi.

Miili ya binadamu wote hutofautiana. Tofauti ndogo katika ukubwa au muonekano wa viungo vya uzazi mara nyingi ni jambo la kawaida.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'REPRODUCTIVE_ANATOMY',
      nodeKey: 'REPRODUCTIVE_ANATOMY_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Female Reproductive Organs include:

    ● Ovaries: The ovaries are two small organs that produce eggs (ova) and hormones such as estrogen and progesterone.

    ● Fallopian Tubes: These tubes connect the ovaries to the uterus. An egg travels through the fallopian tube after being released from an ovary.

    ● Uterus (Womb): The uterus is a muscular organ where a baby develops during pregnancy. During the menstrual cycle, the lining of the uterus thickens and is shed during menstruation if pregnancy does not occur.

    ● Cervix: The cervix is the lower part of the uterus that connects to the vagina.

    ● Vagina: The vagina is a muscular canal connecting the cervix to the outside of the body. Menstrual blood leaves the body through the vagina, and it also serves as the birth canal.

    ● Vulva: The vulva refers to the external female genital organs, including the labia and clitoris.

    ● Clitoris: The clitoris is a sensitive organ located at the top of the vulva. It contains many nerve endings.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_female_reproductive_system',
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'REPRODUCTIVE_ANATOMY',
      nodeKey: 'REPRODUCTIVE_ANATOMY_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Viungo vya Uzazi vya Mwanamke

    ● Ovari: Ovari huzalisha mayai na homoni za estrojeni na projesteroni.

    ● Mirija ya Uzazi: Hubeba yai kutoka ovari kwenda kwenye mfuko wa uzazi.

    ● Mfuko wa Uzazi: Ni sehemu ambayo mtoto hukua wakati wa ujauzito.

    ● Mlango wa Kizazi: Huunganisha mfuko wa uzazi na uke.

    ● Uke: Ni njia ambayo damu ya hedhi hutoka na pia njia ya kupitisha mtoto wakati wa kujifungua.

    ● Uke wa Nje (Vulva): Ni sehemu za nje za mfumo wa uzazi wa mwanamke.

    ● Kinembe: Ni sehemu nyeti iliyo nje ya uke.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_female_reproductive_system',
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'REPRODUCTIVE_ANATOMY',
      nodeKey: 'REPRODUCTIVE_ANATOMY_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Male Reproductive Organs include

    ● Testicles (Testes): The testicles produce sperm and the hormone testosterone.

    ● Scrotum: The scrotum is the pouch of skin that holds and protects the testicles.

    ● Penis: The penis is an external reproductive organ through which urine and semen leave the body.

    ● Urethra: The urethra is the tube that carries urine and semen out of the body at different times.

    ● Prostate Gland: The prostate helps produce fluid that forms part of semen

    ● Sperm Ducts: These tubes transport sperm from the testicles.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'REPRODUCTIVE_ANATOMY',
      nodeKey: 'REPRODUCTIVE_ANATOMY_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Viungo vya Uzazi vya Mwanamume

    ● Korodani: Huzalisha mbegu za kiume na homoni ya testosterone.

    ● Mfuko wa Korodani: Hubeba na kulinda korodani.

    ● Uume: Ni kiungo cha nje kinachotumika kupitisha mkojo na shahawa.

    ● Mrija wa Mkojo: Hubeba mkojo na shahawa kwa nyakati tofauti.

    ● Tezi Dume: Huchangia kutengeneza majimaji ya shahawa.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'REPRODUCTIVE_ANATOMY',
      nodeKey: 'REPRODUCTIVE_ANATOMY_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Frequently Asked Questions

Q: Why do girls have periods?
A: Periods occur when the uterus sheds its lining because pregnancy has not occurred.

Q: What do ovaries do?
A: Ovaries produce eggs and hormones.

Q: Why do boys have testicles?
A: Testicles produce sperm and testosterone.

Q: Is vaginal discharge normal?
A: Clear or white discharge is often normal.

Q: Why is one breast larger than the other?
A: Slight differences are common during development.

Q: Is it normal for one testicle to be lower?
A: Yes. This is common and usually normal.

Q: Can reproductive organs continue changing during adolescence?
A: Yes. Development continue`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'REPRODUCTIVE_ANATOMY',
      nodeKey: 'REPRODUCTIVE_ANATOMY_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Maswali Yanayoulizwa Mara kwa Mara
Swali: Kwa nini matiti yangu hayafanani?
Jibu: Tofauti ndogo katika ukubwa wa matiti ni kawaida.

Swali: Je, uchafu mweupe ni kawaida?
Jibu: Ndiyo. Mara nyingi ni sehemu ya kawaida ya ukuaji wa mfumo wa uzazi.

Swali: Kwa nini korodani moja iko chini zaidi?
Jibu: Hili ni jambo la kawaida kwa wavulana wengi.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 4,
      isActive: true,
    },

    {
      subtopicCode: 'HUMAN_REPRODUCTION',
      nodeKey: 'HUMAN_REPRODUCTION_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Human reproduction is the biological process through which a pregnancy begins and a baby develops. It occurs when a sperm cell from a male joins with an egg cell from a female. Pregnancy cannot occur without fertilization, and ovulation usually happens once during a menstrual cycle. Sperm can survive in the female reproductive tract for several days, which means pregnancy can occur even during the first sexual encounter. Additionally, a girl can become pregnant before her first period if ovulation has already taken place.

How Does Human Reproduction Happen?
    ● Step 1: Ovulation (The ovary releases an egg)
    ● Step 2: Fertilization( If sperm meets the egg, fertilization may occur)
    ● Step 3: Implantation(The fertilized egg travels to the uterus and attaches to the uterine wall)
    ● Step 4: Pregnancy Begins( Once implantation occurs, pregnancy starts)`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'HUMAN_REPRODUCTION',
      nodeKey: 'HUMAN_REPRODUCTION_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mimba hutungwa pale mbegu ya kiume inapokutana na yai la mwanamke na kulirutubisha.Ujauzito hauwezi kutokea bila urutubishaji, na ovulusheni kwa kawaida hutokea mara moja katika mzunguko wa hedhi. Mbegu za kiume zinaweza kuishi kwenye njia ya uzazi ya mwanamke kwa siku kadhaa, jambo linalomaanisha kuwa ujauzito unaweza kutokea hata katika tendo la ndoa la kwanza. Zaidi ya hayo, msichana anaweza kupata ujauzito kabla ya kupata hedhi yake ya kwanza ikiwa ovulusheni tayari imetokea. 

Hatua za Kutungwa kwa Mimba
    ● Hatua ya 1: Utoaji wa Yai (Ovari hutoa yai)
    ● Hatua ya 2: Urutubishaji (Mbegu ya kiume hukutana na yai)
    ● Hatua ya 3: Kujishikiza(Yai lililorutubishwa hujishikiza kwenye mfuko wa uzazi)
    ● Hatua ya 4: Ujauzito Kuanza(Baada ya kujishikiza, ujauzito huanza)
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'HUMAN_REPRODUCTION',
      nodeKey: 'HUMAN_REPRODUCTION_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Common Concerns:
    • Can I get pregnant the first time I have sex?
    • Can pregnancy happen if my period has not started yet?
    • How long does sperm survive?
    • Can pregnancy occur if ejaculation happens near the vagina?`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'HUMAN_REPRODUCTION',
      nodeKey: 'HUMAN_REPRODUCTION_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Wasiwasi wa kawaida:
    • Mimba haiwezi kutungwa bila urutubishaji.
    • Yai hutolewa mara moja katika mzunguko wa hedhi.
    • Mbegu za kiume zinaweza kuishi kwa siku kadhaa ndani ya mwili wa mwanamke.
    • Mimba inaweza kutokea hata mara ya kwanza kufanya ngono.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'PREGNANCY',
      nodeKey: 'PREGNANCY_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Pregnancy is the period during which a baby develops inside a woman's uterus (womb). 
      
Pregnancy begins when a fertilized egg implants in the uterus and normally lasts about 40 weeks (9 months).

Pregnancy is a natural biological process, but it also brings physical, emotional, social, and economic changes.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'PREGNANCY',
      nodeKey: 'PREGNANCY_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mimba ni kipindi ambacho mtoto hukua ndani ya mfuko wa uzazi wa mwanamke (tumbo). 
      
Mimba huanza wakati yai lililorutubishwa linapopandikizwa kwenye mfuko wa uzazi na kwa kawaida hudumu kwa takriban wiki 40 (miezi 9). 

Mimba ni mchakato wa asili wa kibiolojia, lakini pia huleta mabadiliko ya kimwili, kihisia, kijamii, na kiuchumi.
      `,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'PREGNANCY',
      nodeKey: 'PREGNANCY_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `So, How Does Pregnancy Happen?
    1. An ovary releases an egg (ovulation).
    2. Sperm fertilizes the egg.
    3. The fertilized egg travels to the uterus.
    4. The egg attaches to the uterine wall.
    5. Pregnancy begins.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'PREGNANCY',
      nodeKey: 'PREGNANCY_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Ujauzito Hutokeaje?
    1. Ovari hutoa yai (kutoa yai).
    2. Mbegu hutungisha yai.
    3. Yai lililorutubishwa husafiri hadi kwenye mfuko wa uzazi.
    4. Yai hushikamana na ukuta wa mfuko wa uzazi.
    5. Mimba huanza.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'PREGNANCY',
      nodeKey: 'PREGNANCY_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Some Early Signs of Pregnancy
    • Missed period
    • Nausea or vomiting
    • Tiredness
    • Breast tenderness
    • Frequent urination
    • Mood changes

 Important Facts about pregnancy
    • Missing a period does not always mean pregnancy.
    • Pregnancy tests can help determine whether someone is pregnant.
    • Early care improves health outcomes.
    • Every pregnancy is different. 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'PREGNANCY',
      nodeKey: 'PREGNANCY_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Dalili za Awali za Ujauzito
    • Kukosa hedhi
    • Kichefuchefu au kutapika
    • Uchovu
    • Uchungu wa matiti
    • Kukojoa mara kwa mara
    • Mabadiliko ya hisia

Ukweli Muhimu kuhusu ujauzito
    • Kukosa hedhi haimaanishi ujauzito kila wakati.
    • Vipimo vya ujauzito vinaweza kusaidia kubaini kama mtu ana mimba.
    • Huduma ya mapema huboresha matokeo ya kiafya.
    • Kila mimba ni tofauti.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'PREGNANCY',
      nodeKey: 'PREGNANCY_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Changes that happens during the First Trimester (Weeks 1–12)
    • Morning sickness may occur
    • Increased tiredness
    • Hormonal changes
    • Emotional changes

Second Trimester (Weeks 13–27)
    • Belly begins to grow
    • Baby starts moving
    • Increased energy for many women

Third Trimester (Weeks 28–40)
    • Rapid baby growth
    • Increased body discomfort
    • Preparation for birth
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_pregnancy_stages',
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'PREGNANCY',
      nodeKey: 'PREGNANCY_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `
Mabadiliko yanayotokea wakati wa Trimester ya Kwanza (Wiki 1–12)
    • Kichefuchefu cha asubuhi kinaweza kutokea
    • Kuongezeka kwa uchovu
    • Mabadiliko ya homoni
    • Mabadiliko ya kihisia

Kipindi cha Pili cha Miezi 13–27)
    • Tumbo linaanza kukua
    • Mtoto anaanza kusogea
    • Kuongezeka kwa nguvu kwa wanawake wengi

Kipindi cha Tatu cha Miezi 28–40)
    • Ukuaji wa haraka wa mtoto
    • Kuongezeka kwa usumbufu wa mwili
    • Maandalizi ya kuzaliwa
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: 'image_pregnancy_stages',
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'PREGNANCY',
      nodeKey: 'PREGNANCY_05',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Common Concerns
    • My period is late, am I pregnant?
    • I think I may be pregnant.
    • Can stress delay my period?
    • When should I take a pregnancy test?
    • I had sex once. Can I become pregnant?
    • Can I tell immediately if I am pregnant?

NB: A late period can have many causes including stress, illness, hormonal changes, or pregnancy.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'PREGNANCY',
      nodeKey: 'PREGNANCY_05',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Maswali ya Kawaida ambayo vijana hujiuliza
    1. Hedhi yangu imechelewa, je, nina mimba?
    2. Nadhani naweza kuwa na mimba.
    3. Je, msongo wa mawazo unaweza kuchelewesha hedhi yangu?
    4. Ni lini ninapaswa kufanya kipimo cha ujauzito?
    5. nilifanya ngono mara moja. Je, ninaweza kupata mimba?
    6. Je, ninaweza kujua mara moja kama nina mimba?

NB: Hedhi iliyochelewa inaweza kuwa na sababu nyingi ikiwa ni pamoja na msongo wa mawazo, ugonjwa, mabadiliko ya homoni, au ujauzito.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'MISCARRIAGE',
      nodeKey: 'MISCARRIAGE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `The meaning of miscarriage It is the loss/termination of a pregnancy at a gestational age of less than 7 months (28 weeks). A pregnancy can be spontaneous or intentionally terminated.
Types of miscarriage
    1. Spontaneous miscarriage is a pregnancy that is lost and ends without being induced/provoked. This can be caused by fevers such as malaria, sexually transmitted diseases, the use of strong drugs or beatings.
    2. Abortion It is a pregnancy that ends after being induced/provoked such as by intentionally ingesting drugs, inserting sticks or sharp instruments into the cervix. 
    Abortion can also be performed if there is a reason and a doctor's advice (when it threatens life)
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'MISCARRIAGE',
      nodeKey: 'MISCARRIAGE_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Maana ya kuharibika kwa mimba Ni kuharibika/kukatishwa kwa mimba katika umri wa chini ya miezi 7 (wiki 28). Mimba inaweza kutoka yenyewe au kutolewa makusudi. 
Aina za kuharibika kwa mimba
    1. Kutoka yenyewe ni mimba zinazoharibika na kutoka bila kuchokonolewa/kuchokozwa. Hii huweza kusababishwa na homa kama za malaria, magonjwa ya ngono, matumizi ya madawa makali au kupigwa. 
    2. Mimba iliyotolewa Ni kutoka kwa mimba baada ya kuchokonolewa/kuchokozwa kama kwa kumeza dawa kwa kudhamiria, kuingiza vijiti au vyombo vyenye ncha kali kwenye shingo ya mji wa mimba. 
Pia mimba huweza kutolewa kama kuna sababu na ushauri wa daktari (inapotishia uhai) 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'MISCARRIAGE',
      nodeKey: 'MISCARRIAGE_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `SYMPTOMS OF MISCARRYING PREGNANCY
    1. Abdominal pain below the navel
    2. The child stops playing
    3. The body loses strength
    4. Blood from the vagina
    5. Odorous discharge from the vagina Nausea and even vomiting`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'MISCARRIAGE',
      nodeKey: 'MISCARRIAGE_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `DALILI ZA MIMBA INAYOTOKA
    1.Maumivu ya tumbo chini ya kitovu 
    2.Mtoto kuacha kucheza 
    3.Mwili kuishiwa nguvu 
    4.Damu kutoka ukeni 
    5.Majimaji yenye harufu kutoka ukeni Kichefu chefu na hata kutapika 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'MISCARRIAGE',
      nodeKey: 'MISCARRIAGE_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `EFFECTS OF ABORTION
    1. Infections in the reproductive tract
    2. Excessive blood loss
    3. Injury to the reproductive tract
    4. Toxic effects of drugs used for abortion Becoming sterile/infertile Death`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'MISCARRIAGE',
      nodeKey: 'MISCARRIAGE_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `MADHARA YA KUTOA MIMBA
    1.Maambukizi kwenye via vya uzazi 
    2.Kupoteza damu nyingi
    3. Kuumizwa via vya uzazi 
    4.Kuathirika na sumu ya dawa zilizotumika kutoa mimba Kuwa tasa/ugumba Kifo `,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'MISCARRIAGE',
      nodeKey: 'MISCARRIAGE_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `HOW TO PREVENT ABORTION
    1. Stopping sex, observing the legal prohibition of abortion in accordance with the laws of the country
    2. Using contraception correctly as a method of contraception
    3. Using emergency contraception`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'MISCARRIAGE',
      nodeKey: 'MISCARRIAGE_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `JINSI YA KUZUIA UTOAJI MIMBA
    1. Kuacha ngono kuzingatia katazo la kisheria la utoaji mimba kwa mujibu wa sheria za nchi
    2.Kutumia kinga kwa usahihi kama njia za uzazi wa mpango 
    3.Kutumia njia ya uzazi wa mpango za dharura `,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'MISCARRIAGE',
      nodeKey: 'MISCARRIAGE_05',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `INFORMATION TO BE GIVEN TO A YOUNG PERSON WHO HAS A MISCARRIED PREGNANCY
    • This service is available at health facilities.
    • It is provided by a qualified service provider
    • It is the right of the young lady
    • Another pregnancy can be conceived seven days after the miscarriage
    • Contraceptive methods, except for the IUD, can be used immediately after the miscarriage.
    • Avoid having sex until the bleeding after the miscarriage stops, as doing so carries a risk of infection.
NOTE: Abortion is a legal offence under Tanzanian law`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'MISCARRIAGE',
      nodeKey: 'MISCARRIAGE_05',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `TAARIFA ANAYOTAKIWA KUPEWA KIJANA ALIYEHARIBU MIMBA
    • Huduma hii inapatikana katika vituo vya afya. 
    • Inatolewa na mtoa huduma mwenye utaalamu huo 
    • Ni haki ya kijana 
    • Mimba nyingine inaweza kutunga siku saba baada ya kuharibika 
    • Njia za uzazi wa mpango isipokuwa kitanzi, zinaweza kutumiwa mara baada ya mimba kuharibika.
    • Epuka kufanya ngono hadi damu baada ya kuharibika mimba itakapokoma, kwa kufanya hivyo kuna hatari ya kupata maambukizo. 
KUMBUKA:Utoaji mimba ni kosa kisheria kwa mujibu wa sheria za Tanzania 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'EARLY_AND_ADOLESCENT_PREGNANCY',
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Adolescent pregnancy refers to pregnancy occurring between ages 10 and 19 years. During adolescence, young people are still developing physically, emotionally, socially, and economically. Pregnancy during this period can create additional challenges.

Possible Effects that many adolescents face in Tanzania in perspective of health, education ,socially and economic aspects are:- 
    1. Increased risk of anemia
    2. Higher risk of pregnancy complications
    3. Increased likelihood of premature birth
    4. Increased risk of low birth weight babies
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'EARLY_AND_ADOLESCENT_PREGNANCY',
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Mimba za vijana hurejelea ujauzito unaotokea kati ya umri wa miaka 10 na 19. Wakati wa ujana, vijana bado wanaendelea kukua kimwili, kihisia, kijamii, na kiuchumi. Mimba katika kipindi hiki inaweza kusababisha changamoto zaidi.

Athari zinazowezekana ambazo vijana wengi wanakabiliana nazo nchini Tanzania katika nyanja za afya, elimu, kijamii na kiuchumi ni, 
    1. Kuongezeka kwa hatari ya upungufu wa damu
    2. Hatari kubwa ya matatizo ya ujauzito
    3. Kuongezeka kwa uwezekano wa kuzaliwa mapema
    4. Kuongezeka kwa hatari ya watoto kuzaliwa na uzito mdogo.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'EARLY_AND_ADOLESCENT_PREGNANCY',
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `In addition there is an issue of interrupted education which results in school absenteeism and reduced educational opportunities. All these have led to stigma, isolation and relationship challenges. 
At the end of the day many adolescents find themselves in financial hardship and reduced employment opportunities.
This is why, the community, government and other stakeholder are advocating for adolescents girls to staying in school, ensure they can access to SRHR information and youth friendly health services have positive peer networks and supportive families.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'EARLY_AND_ADOLESCENT_PREGNANCY',
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Zaidi ya hayo, kuna suala la kukatizwa kwa elimu ambayo husababisha utoro shuleni na kupungua kwa fursa za kielimu. Yote haya yamesababisha unyanyapaa, kutengwa na changamoto za mahusiano. 
Mwisho wa siku vijana wengi hujikuta katika shida ya kifedha na kupungua kwa fursa za ajira.
Hii ndiyo sababu, jamii, serikali na wadau wengine wanatetea wasichana vijana kuendelea na shule, kuhakikisha wanaweza kupata taarifa za SRHR na huduma za afya rafiki kwa vijana kuwa na mitandao chanya ya wenzao na familia zinazounga mkono.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'EARLY_AND_ADOLESCENT_PREGNANCY',
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Frequently Asked Questions

 Q: What is the first sign of pregnancy?
 A: A missed period is often one of the earliest signs.

 Q: Can stress delay periods?
 A: Yes.
 
 Q: How is pregnancy confirmed?
 A: Through a pregnancy test and healthcare assessment.
 
 Q: Can I become pregnant during my first sexual encounter?
 A: Yes.
 
 Q: What is the first sign of pregnancy?
 A: A missed period is often one of the earliest signs.
 
 Q: Can stress delay periods?
 A: Yes.
 
 Q: Can pregnancy happen if periods are irregular?
 A: Yes.
 
 Q: Can a teenager have a healthy pregnancy?
 A: Many adolescents have healthy pregnancies when they receive appropriate healthcare, although risks can be higher than for adults.
 
 Q: What should I do if I think I am pregnant?
 A: Seek support from a trusted adult and visit a healthcare facility.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'EARLY_AND_ADOLESCENT_PREGNANCY',
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Maswali Yanayoulizwa Mara kwa Mara

Swali: Ishara ya kwanza ya ujauzito ni ipi?
Jibu: Kutopata hedhi mara nyingi ni mojawapo ya ishara za mwanzo kabisa.

Swali: Je, vipindi vya kuchelewa kwa msongo wa mawazo vinaweza kucheleweshwa?
Jibu: Ndiyo.

Swali: Je, ujauzito unathibitishwaje?
Jibu: Kupitia kipimo cha ujauzito na tathmini ya afya.

Swali: Je, ninaweza kupata mimba wakati wa tendo la ndoa la kwanza?
Jibu: Ndiyo.

Swali: Je, ishara ya kwanza ya ujauzito ni ipi?
Jibu: Kutopata hedhi mara nyingi ni mojawapo ya ishara za mwanzo kabisa.

Swali: Je, vipindi vya kuchelewa kwa msongo wa mawazo vinaweza kucheleweshwa?
Jibu: Ndiyo.

Swali: Je, mimba inaweza kutokea ikiwa vipindi si vya kawaida?
Jibu: Ndiyo.

Swali: Je, kijana anaweza kupata mimba yenye afya?
Jibu: Vijana wengi wana mimba zenye afya wanapopata huduma ya afya inayofaa, ingawa hatari zinaweza kuwa kubwa kuliko kwa watu wazima.

Swali: Nifanye nini nikifikiri nina mjamzito?
Jibu: Tafuta msaada kutoka kwa mtu mzima ninayemwamini na utembelee kituo cha afya.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'ANTENATAL_CARE',
      nodeKey: 'ANTENATAL_CARE_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Antenatal care (ANC) refers to healthcare services provided during pregnancy to monitor and support the health of both the mother and baby.
Why Is Antenatal Care Important?

ANC helps:
    • Monitor pregnancy progress
    • Detect complications early
    • Support healthy baby development
    • Provide health education
    • Prepare for childbirth
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'ANTENATAL_CARE',
      nodeKey: 'ANTENATAL_CARE_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Huduma ya kabla ya kujifungua (ANC) inarejelea huduma za afya zinazotolewa wakati wa ujauzito ili kufuatilia na kusaidia afya ya mama na mtoto.
Kwa Nini Huduma ya Kabla ya Kujifungua Ni Muhimu?

Huduma ya kabla ya kujifungua husaidia:
    • Kufuatilia maendeleo ya ujauzito
    • Kugundua matatizo mapema
    • Kusaidia ukuaji wa mtoto mwenye afya njema
    • Kutoa elimu ya afya
    • Kujiandaa kwa ajili ya kujifungua
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'ANTENATAL_CARE',
      nodeKey: 'ANTENATAL_CARE_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `The following are the services offered 
    1. Physical examinations
    2. Blood pressure monitoring
    3. HIV testing and counseling
    4. Nutrition counseling
    5. Malaria prevention
    6. Vaccinations
    7. Screening for complications
During this process pregnant women are encouraged to identify a health facility near them and save emergency contacts ,prepare transportation in advance and attend scheduled clinic visits`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'ANTENATAL_CARE',
      nodeKey: 'ANTENATAL_CARE_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Zifuatazo ni huduma zinazotolewa 
    1. Uchunguzi wa kimwili
    2. Ufuatiliaji wa shinikizo la damu
    3. Upimaji na ushauri nasaha wa VVU
    4. Ushauri nasaha wa lishe
    5. Kinga ya malaria
    6. Chanjo
    7. Uchunguzi wa matatizo
Wakati wa mchakato huu wanawake wajawazito wanahimizwa kutambua kituo cha afya kilicho karibu nao na kuokoa mawasiliano ya dharura, kuandaa usafiri mapema na kuhudhuria ziara za kliniki zilizopangwa.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'ANTENATAL_CARE',
      nodeKey: 'ANTENATAL_CARE_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `After delivery
    • Heavy bleeding that causes anemia.
    • Problems with poor nutrition during pregnancy can continue even after delivery.
    • Inability to breastfeed properly.
    • Postpartum depression and other mental health problems.
    • Risk of the baby being born with a birth weight of less than 2500 grams.
    • Premature birth (premature).
    • High risk of genetic defects.
    • Risk of infant mortality.
    • Risk of various diseases and death after the adolescent
    delivers.
    • Urinary tract infections (VVF and RVF)`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'ANTENATAL_CARE',
      nodeKey: 'ANTENATAL_CARE_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Baada ya kujifungua
    • Kutokwa damu kwa wingi ambako husababisha upungufu wa damu.
    • Matatizo ya lishe duni wakati wa mimba huweza kuendelea hata baada ya kujifungua.
    • Kutoweza kunyonyesha vizuri.
    • Sonona baada ya kujifungua na matatizo mengine ya afya ya akili.
    • Hatari kwa mtoto kuzaliwa na uzito chini ya gram 2500.
    • Kuzaliwa kabla ya muda (njiti).
    • Uwezekano mkubwa wa kasoro za maumbile.
    • Uwezekano wa vifo vya watoto wachanga.
    • Uwezekano wa kushambuliwa na magonjwa mbalimbali na kifo baada ya kijana 
    balehe kujifungua.
    • Usuri (VVF na RVF)`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'FAMILY_PLANNING',
      nodeKey: 'FAMILY_PLANNING_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Family planning is the voluntary decision of an individual or a person and a partner about when to have children, how many children according to their capabilities and needs, and how often to space them (so that it is not less than two years) using the family planning methods of their choice. 
      
In accordance with the national family planning policy and guidelines, any person who is capable of causing or becoming pregnant has the right to access family planning services.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'FAMILY_PLANNING',
      nodeKey: 'FAMILY_PLANNING_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Uzazi wa mpango ni uamuzi wa hiari wa mtu binafsi au mtu na mwenza wa lini wazae, watoto wangapi kufuatana na uwezo na mahitaji yao, na watoto wapishane muda gani (ili mradi isiwe chini ya miaka miwili) kwa kutumia njia za uzazi wa mpango walizochaguliwa. 
      
Kufuata Na na sera na mwongozo wa taifa wa uzazi wa mpango, mtu yeyote mwenye uwezo wa kusababisha au kupata mimba ana haki ya kupata huduma za uzazi wa mpango. 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'FAMILY_PLANNING',
      nodeKey: 'FAMILY_PLANNING_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Adolescents who admit to starting sexual intercourse have the same right as others to access these services. 

REASONS/IMPORTANCE OF PLANNED FAMILY PLANNING:
    • Unplanned births affect the health of mothers and children
    • Family planning helps reduce these problems. The problems arising from childbirth are many, which are
    • Family planning reduces unintended pregnancies, maternal and child mortality and miscarriages.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'FAMILY_PLANNING',
      nodeKey: 'FAMILY_PLANNING_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Kijana balehe ambaye anakiri kuanza kujamiiana ana haki sawa na watu wengine kupata huduma hizi. 

SABABU/UMUHIMU WA UZAZI WA MPANGO: 
    • Uzazi usio na mpango unaathiri afya ya mama na mtoto 
    • Uzazi wa mpango inasaidia kupunguza matatizo haya. Matatizo yanayotokana na uzazi ni mengi ambayo ni
    • Uzazi wa mpango unapunguza mimba zisizotarajiwa, vifo vya akina mama na watoto na kuharibika mimba.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'FAMILY_PLANNING',
      nodeKey: 'FAMILY_PLANNING_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Uncontrolled population growth can affect economic and social development at the national, community and even household levels. 
      
If uncontrolled growth is not controlled, planned plans will not be able to meet people's needs such as housing, health care, shelter, land, environmental protection, food and even employment.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'FAMILY_PLANNING',
      nodeKey: 'FAMILY_PLANNING_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Ongezeko holela na idadi ya watu linaweza kuathiri maendeleo ya kiuchumi na kijamii kitaifa, kijamii na hata katika ngazi ya kaya. 
      
Kama ongezeko holela halitadhibitiwa mipango iliyo pangwa ahiwezi kukidhi mahitaji ya watu kama nyumba, huduma za afya, shele, ardhi, hifadhi ya mazingira, chakula na hata ajira. 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'FAMILY_PLANNING',
      nodeKey: 'FAMILY_PLANNING_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Benefits of Family Planning
    • For the mother: She will recover well after giving birth so she will be healthy without fear of getting pregnant and will also take good care of the children and family, she will have time to do income-generating activities and food, she will enjoy the act of sex in a calm state. She will have time to participate in development activities 
    
    • For the father: He will work in peace, he will be sure of income and things to inherit for his children, he will be able to provide the children with basic needs such as school, food, housing, clothing and medical services, he can participate in social activities, he saves for himself
    
    • For the child: He gets a long time to breastfeed and thus does not get malnutrition and diseases, and the child grows well and is healthy, gets great love from parents and family, he will get all the necessary services such as clothing, school, medical services and good plans for the future.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'FAMILY_PLANNING',
      nodeKey: 'FAMILY_PLANNING_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Ongezeko holela na idadi ya watu linaweza kuathiri maendeleo ya kiuchumi na kijamii kitaifa, kijamii na hata katika ngazi ya kaya. Kama ongezeko holela halitadhibitiwa mipango iliyo pangwa ahiwezi kukidhi mahitaji ya watu kama nyumba, huduma za afya, shele, ardhi, hifadhi ya mazingira, chakula na hata ajira. 
Faida za Uzazi wa mpango
    • Kwa mama:  Atapona vizuri baada ya kujifungua hivyo atakuwa na afya njema pasipo kuwa na hofu ya kupata mimba pia atawahudumia vizuri watoto pamoja na familia ,atapata muda wa kufanya shughuli za kujiingizia kipato na chakula, atafurahia tendo la kujamiiana katika hali ya utulivu .atapata muda wa kushiriki shughuli za maendeleo 
    
    • Kwa baba:  Atafanya kazi kwa amani , anakuwa na uhakika wa kipato na vitu vya kurithisha watoto wake,ana kuwa na uwezo wa kuwapatia watoto mahitaji ya lazima kama shule, chakula, nyumba, mavazi na huduma za matibabu,anaweza kushiriki kwenye shughuli za kijamii ,anajiwekea akiba
    
    • Kwa mtoto:  Anapata muda mrefu wa kunyonya na hivyo kutopata utapiamlo na magonjwa, na mtoto hukua vizuri na afya njema,hupata upendo mkubwa kutoka kwa wazazi na familia,atapata huduma zote muhimu kama mavazi, shule, huduma za matibabu na kuwekewa mipango mizuri ya baadaye.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'FAMILY_PLANNING',
      nodeKey: 'FAMILY_PLANNING_05',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `MYTHS AND MISCONCEPTIONS ABOUT BIRTH CONTROL METHODS
Birth control methods are safe to use because they have been thoroughly researched to ensure that they are effective. 
However, as with any medicine, it can happen to a few that these methods cause minor side effects that disappear after a short time.

THERE ARE MANY MYTHS AND MISCONCEPTIONS THAT ARE NOT COMPLETELY TRUE
WHICH ARE PREVALENT IN THE SOCIETY. THESE MYTHS INCLUDE:
    1. Birth control methods encourage prostitution
    2. Birth control methods cause infertility
    3. Birth control pills accumulate and fill the stomach.
    4. Condoms are loaded with viruses`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'FAMILY_PLANNING',
      nodeKey: 'FAMILY_PLANNING_05',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `VUMI NA SEMI POTOFU KUHUSU NJIA ZA UZAZI WA MPANGO
Njia za uzazi wa mpango ni salama kutumia kwani zimefanyiwa utafiti wa kina ili kuhakikisha 
kwamba zinafaa. Hata hivyo kama zilivyo dawa nyinge zo zote, huweza kutokea kwa 
wachache kwamba njia hizi zikawapa maudhi madogo madogo ambayo hisha baada muda 
mfupi.

KUNA VUMI NYINGI  NA SEMI POTOVU AMBAZO HAZINA UKWELI KABISA 
ZINAZOZAGAA KATIKA JAMII.  VUMI HIZO NI PAMOJA NA:
    1. Njia za uzazi wa mpango huhamasisha umalaya
    2. Njia za uzazi wa mpango zinasababisha ugumba
    3. Vidonge vya kumeza vya uzazi wa mpango vinarundikana na kujaa tumboni.
    4. Kondom zimepandikizwa virusi`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'CONTRACEPTIVE_METHODS',
      nodeKey: 'CONTRACEPTIVE_METHODS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Contraceptive methods that can be used by adolescents
    ● Oral pills: These pills come in two types, dual-acting and single-acting. These pills are used only by women. These methods are available at reproductive health clinics. Oral pills do not prevent a person from getting sexually transmitted infections (STIs)

    ● Emergency contraception: This method is used in case of emergency sexual intercourse without using a contraceptive method and thus there is a concern about getting pregnant. This method is used by women and it is advisable to go to a health care provider for them This emergency method does not prevent the transmission of sexually transmitted infections

    ● Injection method: It is used only by women. It is an injection with only one active ingredient. It is provided at reproductive health clinics. It does not prevent sexually transmitted infections.

    ● Implants: Also used only by women. Like the injection, it contains only one active ingredient and is available at clinics. It does not prevent sexually transmitted infections.

    ● Rubber condom: It is a rubber made to follow the shape of the penis. It is worn on the erect penis before sexual intercourse. It is available in clinics, stores and reproductive health providers in the community as well as peer educators in the community. This method prevents sexually transmitted infections, so it is given priority as an appropriate method for adolescents.

    ● Female condom: Used by women. Available in clinics and stores. Like the male condom, it prevents sexually transmitted infections. NB: For adolescents, even if they use any other method, it is better to use any other method, it is better to use it together with a condom because it is the only way that can help protect them from sexually transmitted diseases.

Note: Birth control methods are safe to use because they have been thoroughly researched to ensure that they are effective. However, like any other medicine, it may happen to a few that these methods cause minor side effects that disappear after a short time.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: true,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'CONTRACEPTIVE_METHODS',
      nodeKey: 'CONTRACEPTIVE_METHODS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Njia za uzazi wa mpango zinazoweza kutumiwa na vijana balehe
    ● Vidonge vya kumeza: Vidonge hivyo vipo vya aina mbili, zenye vichocheo viwili na vyenye kichocheo kimoja. Vidonge hivyo hutumika na wanawake tu. Njia hizi zinapatikana kliniki za afya ya uzazi na mtoto. Vidonge vya kumeza havimzuii mtu kupata maambukizi ya magonjwa yanayotokana na ngono (kujamiiana) 

    ● Njia ya dharura ya kuzuia mimba: Njia hii hutumika endapo kuna dharura ya kujamiiana bila kutumia njia ya uzazi wa mpango na hivyo kuwa na wasiwasi wa kupata mimba. Njia hii hutumiwa na wanawake na ni vyema kwenda kuzipata kwa mtoa huduma sehemu ya kutolea huduma za afya Njia hii ya dharura haizuii maambukizi ya magonjwa yanayotokana na kujamiiana 

    ● Njia ya sindano: Hutumiwa na wanawake tu. Ni sindano yenye dawa yenye kichocheo kimoja tu. Hutolewa kwenye kliniki za afya ya uzazi. Haizuii maambukizo yanayoenezwa kwa kujamiiana. 

    ● Vipandikizi: Pia hutumika na wanawake tu. Kama ilivyo sindano ina dawa yenye kichocheo kimoja tu na hupatikana kliniki. Haizuii maambukizo ya magonjwa ya ngono.

    ● Kondomu ya mpira: Ni mpira uliotengenezwa kwa kufuata umbile la uume. Huvaliwa kwenye uume uliosimama kabla ya kuanza kujamiiana. Hupatikana kliniki, madukani na watoa huduma za afya ya uzazi kwa jamii pamoja na waelimishaji rika katika jamii. Njia hii huzuia maambukizi yatokanayo na kujamiiana, hivyo basi hupata kipaumbele kama njia muafaka kwa vijana balehe. 

    ● Kondomu ya kike: Inatumiwa na wanawake. Hupatikana kliniki na madukani. Kama ilivyo kwa kondom ya kiume, huzuia maambukizi yatokanayo na kujamiiana. NB: Kwa vijana, hata kama anatumia njia nyingine yoyote ni vyema akatumia njia nyingine yoyote ni vyema ikatumiwa pamoja na kondom kwani ni njia pekee inayoweza kusaidi kumkinga na magonjwa ya ngono. 

    ● Kumbuka: Njia za uzazi wa mpango ni salama kutumia kwani zimefanyiwa utafiti wa kina ili kuhakikisha kwamba zinafaa. Hata hivyo kama zilivyo dawa nyinge zo zote, huweza kutokea kwa wachache kwamba njia hizi zikawapa maudhi madogo madogo ambayo hisha baada muda mfupi. 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: true,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'ADOLESCENTS_NEEDS_DURING_PREGNANCY',
      nodeKey: 'ADOLESCENTS_NEEDS_DURING_PREGNANCY_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Early detection of teenage pregnancy is important but not easy to detect because teenage girls try to use any possible method to avoid detection. Some may hide the condition until delivery. It is important that when pregnancy symptoms appear, the girl has a urine test to confirm pregnancy early. 
    1. Advice on the importance of attending the clinic
    2. Getting vaccinated
    3. Monitoring the development of pregnancy
    4. Checking her health (weight, blood pressure, heart rate and even diseases).
    5. Early detection if there is a problem and thus getting early care
    6. Getting education and advice about her health and the baby in the womb. The foods needed include
        • Protein category (protein) - Meat, eggs, beans, fish
        • Vitamin category - fruits, leafy vegetables, grains that are not too refined
        • Minerals - Liver, fish, leafy vegetables, seafood Leafy vegetables should not be boiled for a long time as doing so removes/destroys nutrients. Exercise and rest- A pregnant woman should do light exercise like walking especially in the morning and evening. She should also have plenty of time to rest
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: true,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_NEEDS_DURING_PREGNANCY',
      nodeKey: 'ADOLESCENTS_NEEDS_DURING_PREGNANCY_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kutambua mapema mimba ya kijana balehe ni kitu muhimu lakini sio rahisi kutambua kwani vijana balehe hujitahidi kutumia njia yoyote inayowezekana ili wasibainike. Wengine huweza kuficha hali hiyo mpaka wakati wa kijifungua. Ni muhimu dalili za ujauzito zinapojitokeza kijana apimwe mkojo ili kuthibitisha mimba mapema. 
    1.Ushauri kuhusu  umuhimu  wa kuhudhuria kliniki
    2.Kupata chanjo
    3.Kuangalia maendeleo ya ukuaji wa mimba
    4.Kuangaliwa afya yake (uzito, kiasi cha damu, mapigo ya moyo na hata magonjwa). 
    5.Kugundulika mapema kama kuna tatizo na hivyo kupata huduma mapema
    6.Kupata elimu na ushauri kuhusu afya yake na mtoto alie tumboni Vyakula vinavyohitajika        ni pamoja na
        • Jamii ya utomwili (protini) – Nyama, mayai, jamii ya maharage, samaki
        • Jamii ya vitamini – matunda, mboga za majani, nafaka ambazo hazijakobolewa sana
        • Madini – Maini, samaki, mboga za majani, dagaa Mboga za majani zisichemshwe muda mrefu kwani kufanya hivyo huondoa/huharibu virutubisho. Mazoezi na kupumzika- Mjamzito anapaswa kufanya mazoezi yasiyo mazito kama kutembea hasa wakati wa asubuhi na jioni. Vile vile anapaswa kuwa na muda mwingi wa kupumzika
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: true,
      sortOrder: 1,
      isActive: true,
    },

    // HIV and AIDS
    {
      subtopicCode: 'HIV_AND_AIDS',
      nodeKey: 'HIV_AND_AIDS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `HIV AND AIDS Human immunodeficiency virus (HIV) is a microscopic virus that is invisible to the naked eye, which attacks and weakens the immune system. The HIV virus lives in the blood and body fluids of an infected person. The virus can infect another person through bodily fluids, especially blood, semen and vaginal fluids. 
      
AIDS is a stage in which the body's immune system has been weakened by HIV infection. At this stage, the body becomes vulnerable to opportunistic infections if the patient does not take antiretroviral drugs.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_AND_AIDS',
      nodeKey: 'HIV_AND_AIDS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `VVU NA UKIMWI Virusi vya UKIMWI (VVU) ni vijidudu vidogo sana visivyoweza kuonekana kwa macho, ambavyo vina shambulia na kudhoofisha kinga-mwili. 

Virusi vya UKIMWI vinaishi katika damu na maji maji kwenye mwili wa mtu aliyeambukizwa. Virusi hivyo vinaweza kuambukiza mtu mwingine kwa kupitia maji maji ya mwilini hasa damu, manii na maji maji ya ukeni. UKIMWI ni hatua ambayo kinga ya mwili imeshashuka kutokana na maambukizi yatokanayo na VVU. Katika hatua hii mwili hushambuliwa na magonjwa nyemelezi endapo mgonjwa hatatumia dawa za kufubaza VVU.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_AND_AIDS',
      nodeKey: 'HIV_AND_AIDS_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Transmission Routes
    ● Having sex with an infected person without protection
    ● An HIV-positive mother can transmit the virus to her child during pregnancy, childbirth and breastfeeding and if she is not on proper ARV medication
    ● Receiving a transfusion of HIV-infected blood
    ● Donating sharp objects used by an HIV-positive person
    ● Through bodily fluids of an HIV-positive person (semen, vaginal fluids)`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_AND_AIDS',
      nodeKey: 'HIV_AND_AIDS_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Njia za Maambukizo 
    ● Kujamiiana na mtu mwenye maambukizi bila kinga
    ● Mama mwenye VVU kumuambukiza mtoto wake wakati wa mimba, kujifungua na wakati wa kunyonyesha na kama hayuko kwenye matumizi sahihi ya dawa za ARV
    ● Kuwekewa damu yenye maambukizi ya VVU
    ● Kuchangia vitu vyenye ncha kali vilivyotumiwa na mtu mwenye VVU 
    ● Kupitia majimaji yanayotoka mwilini kwa mtu mwenye VVU (manii, majimaji ya ukeni) `,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_AND_AIDS',
      nodeKey: 'HIV_AND_AIDS_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Stages of HIV transmission to AIDS
    ● Stage 1: Initial infection Most people who become infected with the HIV virus do not realize that they are infected, except for some who begin to get sick as soon as they are infected. This illness can last a few weeks and often comes with a flu-like illness with fever, body weakness, swollen glands, sore throat, rash or joint pain. These symptoms disappear after a short time. These symptoms are accompanied by the spread of the virus to different parts of the body and especially in the lymphatic system. At this stage, a person can transmit the AIDS virus to others.
    
    ● Stage 2: Asymptomatic This stage can take an average of 10 years and a person has no symptoms of any disease except for a swollen thyroid gland. In the early stages of HIV infection, many patients do not have any symptoms even though there is a strong immune response. Patients in this stage can transmit the HIV virus to others.
    
    ● Stage 3: Symptoms of HIV infection As time passes, the immune system is overwhelmed by the fight against the HIV virus, so symptoms appear. Symptoms of HIV infection are caused by opportunistic diseases. Problems that occur are fever, respiratory infections, cough, tuberculosis, skin diseases, weight loss, skin diseases, viral infections, oral mucosa, pain and swelling of the gums.
    
    ● Stage 4: AIDS This stage is reached when the body's immune system is significantly reduced and is accompanied by opportunistic diseases including cancer.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_AND_AIDS',
      nodeKey: 'HIV_AND_AIDS_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Hatua za maambukizi ya VVI hadi UKIMWI
    ● Hatua ya 1:Maambukizi ya awali Watu wengi wanaopata maambukizi ya virusi vya UKIMWI, hawajitambui kwamba wameambukizwa, ila kwa wengine wanaoanza kuugua mara tu wanapoambukizwa. Ugonjwa huu unaweza kuchukua wiki chache na mara nyingi unakuja na mafua yenye homa, udhaifu wa mwili, uvimbe wa tezi maumivu kooni, ukurutu au maumivu ya viungo. Dalili hizi hupotea baada ya muda mfupi. Dalili hizo zinaambatana na ueneaji wa virusi katika sehemu tofauti za mwilini na hasa katika mfumo wa limfu. Katika hatua hii mtu anaweza kuambukiza virusi vya UKIMWI kwa wengine. 
    
    ● Hatua ya 2: Haina dalili Hatua hii inaweza kuchukua wastani wa miaka 10 na mtu anakuwa hana dalili za ugonjwa wowote isipokuwa uvimbe wa tezi. Katika hatua za awali za maambukizo ya virusi vya UKIMWI, wagonjwa wengi wanakuwa hawana dalili zozote ingawa kuna mapambano makali ya kinga. Wagonjwa wa aina hii wanaweza kuambukiza virusi vya UKIMWI kwa wengine. 
    
    ● Hatua ya 3: Dalili za maambukizo ya virusi vya UKIMWI Muda unavyozidi kupita ndivyo mfumo wa kinga unazidiwa na mapambano ya virusi vya UKIMWI kwa hiyo dalili zinajitokeza. Dalili za maambukizo ya VVU zinasababishwa na magonjwa nyemelezi. Matatizo yanayojitokeza ni homa, maambukizo ya njia ya hewa, kikohozi, kifua kikuu, magonjwa ya ngozi, kupungua kwa uzito, magojwa ya ngozi, maambukizo ya virusi, utando wa mdomoni, maumivu na kuvimba mitoki. 
    
    ● Hatua ya 4: UKIMWI Hatua hii inafikiwa pale kinga ya mwili inapopungua kwa kiasi kikubwa na inaambatana na magonjwa nyemelezi ikiwemo saratani. 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_AND_AIDS',
      nodeKey: 'HIV_AND_AIDS_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Ways to Prevent Sexually Transmitted Diseases and HIV
The safest way to protect yourself for a young adult who has entered into sexual relationships is to use condoms correctly, which prevents the transmission of sexually transmitted diseases and HIV, as well as unintended pregnancies. How to prevent infections
    ● Stop having sex completely
    ● Have one faithful, uninfected partner, for those who were married and started having sex
    ● Discuss safe sex, for example; correct use of condoms
    ● Condoms
    ● Not sharing sharp objects
    ● Identify and treat sexually transmitted diseases early
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_AND_AIDS',
      nodeKey: 'HIV_AND_AIDS_04',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Njia za Kuzuia magonjwa ya Ngono na VVU 
Njia salama ya kujikinga kwa kijana balehe aliyekwisha ingia kwenye mahusiano ya kufanya ngono ni kutumia kondomu kwa usahihi ambayo inazuia uambukizo wa magonjwa ya ngono na VVU pamoja na mimba zisizotarajiwa. Jinsi        ya        kuzuia        maambukizo 
    ● Kuacha kabisa kufanya ngono
    ● Kuwa na mpenzi mmoja mwaminifu asiyekuwa na maambukizi, kwa wale waliokuwa kwenye ndoa na walioanza kufanya ngono
    ● Kujadiliana juu ya ngono salama, mfano; matumizi sahihi ya kondomu
    ● kondomu
    ● Kutochangia vitu vyenye ncha kali 
    ● Kutambua na kutibu magonjwa ya ngono mapema 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 4,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_AND_AIDS',
      nodeKey: 'HIV_AND_AIDS_05',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `IMPORTANT THINGS TO EMPHASIZE FOR YOUNG PEOPLE WITH HIV INFECTION
    1. Correct medication adherence Correct medication adherence is using the correct medication, the correct dose, the correct time, and the correct way as directed by a specialist.
    Benefits of proper medication adherence
    ► Strengthens the immune system and reduces the risk of opportunistic infections
    ► Helps prevent drug resistance
    ► Reduces the risk of viral replication
    ► Prevents mother-to-child transmission of HIV (during pregnancy, during delivery and during breastfeeding)`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_AND_AIDS',
      nodeKey: 'HIV_AND_AIDS_05',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `MAMBO MUHIMU YA KUSISITIZA KWA VIJANA WENYE MAAMBUKIZI YA VVU 
1. Ufuasi sahihi wa dawa Ufuasi sahihi wa dawa ni kutumia dawa sahihi, dozi sahihi, muda sahihi na kwa njia sahihi kama ilivyoelekezwa na mtaalam. 
Faida za ufuasi sahihi wa dawa
► Huimarisha kinga-mwili na kupunguza uwezekano wa kupata magonjwa nyemelezi
► Husaidia kuepuka usugu wa dawa 
► Hupunguza uwezekano wa kuongezeka kwa virusi 
► Huzuia maambukizi ya VVU kutoka kwa mama kwenda kwa mtoto (wakati wa mimba, wakati wa kujifungua nawakati wa kunyonyesha) 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 5,
      isActive: true,
    },

    {
      subtopicCode: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR',
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Disability is a state of lack and failure to have the opportunity to participate in normal social life on an equal basis with others due to physical, mental or social reasons. 
      
Definition of “Young person with a disability”. 
A young person with a weakness or impairment of the limbs, consciousness or mind and whose functional capacity is reduced due to attitudinal, environmental and institutional barriers.

The National Youth and Development Policy of 2018 recognizes the importance of meeting the needs of young people, including those with disabilities, which provides a guiding statement to protect, reduce or completely eliminate stigma. 

This policy also promotes the participation of young people with disabilities in social and economic activities in an enabling environment and in existing opportunities.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR',
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Ulemavu Ni hali ya kukosa na kushindwa kuwa na fursa ya kushiriki katika maisha ya kawaida ya kijamii kwa kiwango sawa na wengine kwa sababu za kimaumbile, kiakili au sababu za kijamii. 
Maana ya “Kijana mwenye ulemavu” ni kijana mwenye udhaifu au upungufu wa viungo, fahamu au akili na ambaye uwezo wake wa utendaji kazi umepungua kutokana na vikwazo vya kimtazamo, kimazingira na kitaasisi. 

Sera ya Taifa ya Vijana na Maendeleo ya mwaka 2018 inatambua umuhimu wa kutimiza mahitaji ya vijana wakiwemo wenye ulemavu ambayo inatoa tamko elekezi ili kuwalinda, kupunguza au kumaliza kabisa unyanyapaa. 

Sera hii pia inachagiza ushiriki wa vijana wenye ulemavu katika shughuli za kijamii na kiuchumi katika hali wezeshi ya kimazingira kwenye fursa zilizopo. 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR',
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Key principles of the law on young people with disabilities.
    ● Respect for the dignity of the person, freedom of choice and independence of people with disabilities.
    ● The right to full participation and inclusion of people with disabilities in all social affairs.
    ● There is no discrimination of any kind against people with disabilities in all fields.
    ● People with disabilities should be fully included in all aspects of life.
    ● Equal opportunities for people with disabilities.
    ● Equality between women and men with disabilities and recognition of their rights and needs.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR',
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Kanuni muhimu za sheria ya vijana wenye ulemavu.
    ● Kuheshimu utu wa mtu, uhuru wa kuchagua na kijitegemea kwa watu wenye ulemavu. 
    ● Haki ya kushiriki na kushirikishwa kikamilifu kwa watu wenye ulemavu katika mambo yote ya kijamii. 
    ● Hakuna ubaguzi wa aina yeyote kwa watu wenye ulemavu katika Nyanja zote. 
    ● Watu wenye ulemavu wajumuishwe kikamilifu katika Nyanja zote za maisha. 
    ● Fursa sawa kwa watu wenye ulemavu.
    ● Kuwepo na usawa kati ya wanawake na wanaume wenye ulemavu na kutambuliwa kwa haki na mahitaji yao. 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR',
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Young people with disabilities have the same rights as other people without disabilities. 

They have the right to receive special and specialized medical services, as well as equal opportunities for education and training to help them achieve their goals in life. 

People with disabilities have the right to participate in sports and not to be excluded. 

Other rights include the right to life, to be respected and valued, to be free from discrimination, to have a name and nationality, to live with one's parents, to express opinions, ideas and decisions regarding one's well-being. to be protected from any form of violence and humiliation.

To improve access to accurate information and friendly reproductive health services for young people with disabilities, it is important to consider that changing mindsets and attitudes is the key step that will change the actions and thoughts of citizens towards people with disabilities in all aspects of economic, political and cultural life in order to have an inclusive society free from discrimination.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR',
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Vijana wenye ulemavu wana haki sawa na watu wengine wasio na ulemavu. 
      
Wana haki ya kupata huduma za kipekee na maalum zinazohusu matibabu, pamoja na kupata nafasi sawa ya elimu na mazoezi ili kuwasaidia kufikia malengo yao katika maisha. 

Watu wenye ulemavu wana haki ya kushiriki katika michezo na pia kutokutengwa. 

Haki nyinginezo ni pamoja na haki ya kuishi ,kuheshimiwa na kuthaminiwa ,kutokubaguliwa ,jina na utaifa ,kuishi na wazazi wake ,kutoa maoni, mawazo na maamuzi kuhusiana na ustawi wake. kulindwa dhidi ya ukatili na udhalilishwaji wa aina yoyote ile. 

Ili kuboresha upatikanaji wa taarifa sahihi na huduma rafiki za Afya ya uzazi kwa vijana wenye ulemavu, ni muhimu kuzingatia kwamba kubadili fikra na mitazamo ndiyo hatua muhimu itakayo badilisha matendo na fikra za wananchi juu ya watu wenye ulemavu katika nyanja zote za maisha kiuchumi, kisiasa na kiutamaduni ili kuwa na jamii jumuishi isiyo na ubaguzi 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'SEXUALLY_TRANSMITTED_INFECTIONS',
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Sexually transmitted diseases are those that are spread through unprotected sex with an infected person. The relationship between sexually transmitted diseases and HIV is that the transmission route is largely similar, a person with sexually transmitted diseases has a high chance of getting HIV infection during sexual intercourse, and the methods of protection are also similar

Diseases that cause vaginal discharge / discharge are as follows
    ● Gonorrhea (Gonorrhea)
    ● Chlamydia (Chlamydia) Genital Genital Candidiasis
    ● Trichomoniasis (Trichomoniasis)
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'SEXUALLY_TRANSMITTED_INFECTIONS',
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Magonjwa ya ngono ni yale yaenezwayo kwa njia ya kujamiiana na mtu mwenye maambukizi ya magonjwa hayo bila kutumia kinga. Uhusiano kati ya magonjwa ya ngono na VVU ni kwamba njia ya uambukizo inashabihiana kwa kiasi kikubwa mtu mwenye magonjwa ya ngono anauwezekano mkubwa wa kupata maambukizi ya VVU wakati wa kujamiiana pia njia za kujikinga zinafanana 

Magonjwa yanayosababisha kutokwa na uchafu /usaha sehemu za siri ni kama yafuatayo
    ● Kisonono (Gonorrhea) 
    ● Klamadia (Chlamydia)Jamii Ya Kisonono 
    ● Fangasi (Genital Candidiasis 
    ● Kisamaki (Trichomoniasis) 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'SEXUALLY_TRANSMITTED_INFECTIONS',
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Symptoms of diseases that cause vaginal discharge
    ● Discharge / discharge from the vagina or penis
    ● Severe pain during urination, especially in men
    ● Itching of the vagina or penis
    ● Abdominal pain below the navel (women)
    ● Pain during sexual intercourse
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'SEXUALLY_TRANSMITTED_INFECTIONS',
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: ` Dalili za magonjwa yanayosababisha kutokwa na uchafu sehemu za siri 
    ● Kutokwa uchafu / usaha sehemu za uke au uume 
    ● Maumivu makali wakati wa kukojoa hasa wanaume 
    ● Kuwashwa sehemu za uke au uume 
    ● Maumivu ya tumbo chini ya kitovu (wanawake) 
    ● Maumivu wakati wa kujamiiana
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: false,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'SEXUALLY_TRANSMITTED_INFECTIONS',
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `Effects of diseases that cause vaginal discharge in women and men
    ● Infection in the pelvic cavity
    ● Infertility / infertility.
    ● Pregnancy outside the uterus.
    ● Miscarriage
    ● Urethral obstruction
    ● Swelling of the testicles`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      subtopicCode: 'SEXUALLY_TRANSMITTED_INFECTIONS',
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_03',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Madhara ya magonjwa yanayosababisha kutokwa uchafu sehemu za siri kwa wanawake na wanaume
    ● Uambukizo kwenye pango la nyonga
    ● Ugumba/utasa.
    ● Mimba kutunga nje ya mji wa mimba. 
    ● Kuharibika kwa mimba 
    ● Kuziba mrija wa mkojo 
    ● Kuvimba mapumbu 
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 3,
      isActive: true,
    },

    {
      subtopicCode: 'HIV_TESTING_SERVICES',
      nodeKey: 'HIV_TESTING_SERVICES_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `HIV Testing Services (HTS) help individuals know their HIV status through confidential testing and counseling provided by trained healthcare workers. 

Knowing your HIV status is one of the most important steps in protecting your health and preventing HIV transmission.

Many young people avoid testing because they are afraid of the results or fear being judged. However, HIV testing does not mean someone has HIV. It simply helps a person know their status and receive the appropriate information and support. 

If the test is negative, healthcare providers can offer guidance on how to remain HIV negative. If the test is positive, early treatment allows people living with HIV to live long, healthy, and productive lives. HIV testing services are available in health facilities throughout Tanzania and are confidential.

Young people should consider HIV testing if they have ever had unprotected sex, are planning a relationship, have symptoms of an STI, are pregnant, have experienced sexual violence, or simply want to know their HIV status. Testing is voluntary, confidential, and usually includes pre-test and post-test counseling.
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_TESTING_SERVICES',
      nodeKey: 'HIV_TESTING_SERVICES_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Huduma za Kupima VVU (HTS) huwasaidia watu kujua hali yao ya VVU kupitia upimaji wa siri na ushauri nasaha unaotolewa na wafanyakazi wa afya waliofunzwa. 

Kujua hali yako ya VVU ni mojawapo ya hatua muhimu zaidi katika kulinda afya yako na kuzuia maambukizi ya VVU.

Vijana wengi huepuka kupima kwa sababu wanaogopa matokeo au wanaogopa kuhukumiwa. Hata hivyo, upimaji wa VVU haimaanishi kwamba mtu ana VVU. Humsaidia tu mtu kujua hali yake na kupokea taarifa na usaidizi unaofaa. 

Ikiwa kipimo ni hasi, watoa huduma za afya wanaweza kutoa mwongozo wa jinsi ya kubaki bila VVU. Ikiwa kipimo ni chanya, matibabu ya mapema huwawezesha watu wanaoishi na VVU kuishi maisha marefu, yenye afya njema, na yenye tija. Huduma za upimaji wa VVU zinapatikana katika vituo vya afya kote Tanzania na ni za siri.

Vijana wanapaswa kuzingatia upimaji wa VVU ikiwa wamewahi kufanya ngono bila kinga, wanapanga uhusiano, wana dalili za magonjwa ya zinaa, wana mimba, wamepitia unyanyasaji wa kijinsia, au wanataka tu kujua hali yao ya VVU. Upimaji ni wa hiari, wa siri, na kwa kawaida hujumuisha ushauri nasaha wa kabla na baada ya kipimo.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_TESTING_SERVICES',
      nodeKey: 'HIV_TESTING_SERVICES_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `HIV services in Morogoro also include STI screening, family planning services, GBV screening, and referrals to treatment and care when needed.

The following are the referral points in morogoro:

Morogoro Municipal
Morogoro Regional Referral Hospital
HIV Testing and Counseling
STI Screening and Treatment
Adolescent and Youth Health Services
Family Planning Services
Antenatal Care
Mental Health Support
Gender-Based Violence (GBV) Support and Referrals
Phone: 0737 977 828

Mvomero District
Mvomero District Hospital
HIV Testing Services
Youth-Friendly Health Services
Reproductive Health Services
STI Screening and Treatment
Family Planning Services
Maternal and Child Health Services

Kilosa District
Kilosa District Hospital
HIV Testing and Counseling
STI Services
Family Planning Services
Adolescent Reproductive Health Services
GBV Referrals and Support Services

Berega Mission Hospital
HIV Testing Services
Reproductive Health Services
Maternal Health Services
General Medical Care
Phone: +255 23 262 8500
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'HIV_TESTING_SERVICES',
      nodeKey: 'HIV_TESTING_SERVICES_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Huduma za VVU mjini Morogoro pia zinajumuisha uchunguzi wa magonjwa ya zinaa, huduma za uzazi wa mpango, uchunguzi wa GBV, na rufaa za matibabu na huduma inapohitajika. 
Zifuatazo ni sehemu za rufaa mjini Morogoro
Manispaa ya Morogoro
Hospitali ya Rufaa ya Mkoa wa Morogoro
Upimaji na Ushauri nasaha wa VVU
Uchunguzi na Matibabu ya Magonjwa ya Zinaa
Huduma za Afya ya Vijana na Vijana
Huduma za Upangaji Uzazi
Huduma za Kabla ya Kuzaliwa
Usaidizi wa Afya ya Akili
Usaidizi na Rufaa za Ukatili wa Kijinsia (GBV)
Simu: 0737 977 828

Wilaya ya Mvomero
Hospitali ya Wilaya ya Mvomero
Huduma za Upimaji wa VVU
Huduma za Afya Rafiki kwa Vijana
Huduma za Afya ya Uzazi
Uchunguzi na Matibabu ya Magonjwa ya Zinaa
Huduma za Upangaji Uzazi
Huduma za Afya ya Mama na Mtoto

Wilaya ya Kilosa
Hospitali ya Wilaya ya Kilosa
Upimaji na Ushauri wa VVU
Huduma za Magonjwa ya Zinaa
Huduma za Upangaji Uzazi
Huduma za Afya ya Uzazi kwa Vijana
Huduma za Rufaa na Usaidizi wa GBV

Hospitali ya Misheni ya Berega
Huduma za Upimaji wa VVU
Huduma za Afya ya Uzazi
Huduma za Afya ya Mama
Huduma za Kimatibabu kwa Jumla
Simu: +255 23 262 8500`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'CONDOM_EDUCATION',
      nodeKey: 'CONDOM_EDUCATION_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Condoms are a barrier method that helps reduce pregnancy and the transmission of sexually transmitted diseases during sexual intercourse. There are two types of condoms including male condoms and female condoms
Benefits of using condoms:-
    ● help reduce the risk of pregnancy
    ● help reduce HIV transmission
    ● help reduce the transmission of sexually transmitted diseases
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'CONDOM_EDUCATION',
      nodeKey: 'CONDOM_EDUCATION_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Kondomu ni njia ya kizuizi inayosaidia kupunguza mimba na maambukizi ya magonjwa ya zinaa wakati wa tendo la ndoa. Kuna aina mbili za kondomu ikiwemo kondomu za kiume na kondomu za kike
Faida za kutumia kondomu:-
    ● husaidia kupunguza hatari ya ujauzito
    ● husaidia kupunguza maambukizi ya VVU
    ● husaidia kupunguza maambukizi ya magonjwa ya zinaa
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: false,
      sortOrder: 1,
      isActive: true,
    },

    {
      subtopicCode: 'CONDOM_EDUCATION',
      nodeKey: 'CONDOM_EDUCATION_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.EN,
      messageText: `How to use a male condom correctly
    1. Check the end of your condom, do not use an expired condom.
    2. Wash your hands Open the condom package.
    3. Press one side of the package.
    4. Tear the empty side of the package, from one end to the other.
    5. Gently push the condom out of the package.
    6. Using your fingertips, remove the condom from the package.
    7. Press the top of the condom to remove air and allow space for semen.
    8. Hold the tip of the condom and put it on the erect penis.
    9. Roll it slowly to the shaft of the penis.
    10. After the act, wrap the condom and store it in paper or any other material, throw it in a pit toilet or cover it
REMEMBER: do not apply any type of lubricant`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      subtopicCode: 'CONDOM_EDUCATION',
      nodeKey: 'CONDOM_EDUCATION_02',
      nodeType: NodeType.RELATED_TOPICS,
      language: Language.SW,
      messageText: `Jinsi ya kutumia Kondumu ya kiume kwa usahihi
    1. Angalia mwisho wa matumizi ya kondomu yako usitumie kondomu iliyopitwa na muda wa matumizi.
    2. Nawa mikono Kufungua pakiti ya kondomu.
    3. Bonyeza upande mmoja wa pakiti.
    4. Chana upande mtupu wa pakiti, toka ncha moja mpaka nyingine.
    5. Sukuma kondomu taratibu nje ya pakiti.
    6. Kwa kutumia ncha ya vidole vyako, toa kondomu nje ya pakiti. 
    7. Bonyeza ncha ya juu ya kondomu ili kuondoa hewa na kuruhusu nafasi ya shahawa. 
    8. Shika chuchu ya kondomu na uivalishe kwenye uume uliosimama. 
    9. Iviringishe taratibu hadi kwenye shina la uume. 
    10. Baada ya tendo ,ifunge kondomu na uhifadhi kwenye karatasi au kitu kingine chochote itupe kwenye choo cha shimo au uifukie 
KUMBUKA : usiipake mafuta ya aina yoyote
`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: false,
      isEndNode: true,
      sortOrder: 2,
      isActive: true,
    },

    {
      subtopicCode: 'HEALTH_SEEKING_BEHAVIOUR',
      nodeKey: 'HEALTH_SEEKING_BEHAVIOUR_01',
      nodeType: NodeType.CONTENT,
      language: Language.EN,
      messageText: `Health seeking behaviour refers to the actions people take to protect, maintain, or improve their health. For adolescents, this means recognizing when they need health information, advice, testing, treatment, or support and knowing where and how to access these services.

Many young people only visit a health facility when they are seriously ill. However, good health seeking behaviour includes seeking services before problems become severe. Examples include visiting a health facility for HIV testing, family planning information, STI screening, mental health support, antenatal care, immunization, or medical advice when experiencing unusual symptoms.

In Tanzania, some adolescents avoid seeking healthcare because they fear being judged, feel shy, worry about confidentiality, lack transport money, or do not know where services are available. Others rely on friends or social media for health information, which may sometimes be inaccurate. Seeking health information from trained healthcare providers helps young people make informed decisions and receive accurate guidance.

A young person should seek health services if they experience symptoms of illness, suspect pregnancy, want to know their HIV status, have concerns about sexual or reproductive health, experience violence or abuse, struggle with emotional wellbeing, or need health information. Early help-seeking can prevent complications and improve overall wellbeing. Seeking healthcare is not a sign of weakness; it is a responsible step toward protecting one's health and future.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: true,
      sortOrder: 1,
      isActive: true,
    },
    {
      subtopicCode: 'HEALTH_SEEKING_BEHAVIOUR',
      nodeKey: 'HEALTH_SEEKING_BEHAVIOUR_01',
      nodeType: NodeType.CONTENT,
      language: Language.SW,
      messageText: `Tabia ya kutafuta afya inahusu hatua ambazo watu huchukua ili kulinda, kudumisha, au kuboresha afya zao. Kwa vijana, hii ina maana ya kutambua wanapohitaji taarifa za afya, ushauri, upimaji, matibabu, au usaidizi na kujua wapi na jinsi ya kupata huduma hizi.

Vijana wengi hutembelea kituo cha afya wanapokuwa wagonjwa sana. Hata hivyo, tabia nzuri ya kutafuta afya inajumuisha kutafuta huduma kabla matatizo hayajawa makubwa. Mifano ni pamoja na kutembelea kituo cha afya kwa ajili ya kupima VVU, taarifa za uzazi wa mpango, uchunguzi wa magonjwa ya zinaa, usaidizi wa afya ya akili, huduma ya ujauzito, chanjo, au ushauri wa kimatibabu wanapopata dalili zisizo za kawaida.

Nchini Tanzania, baadhi ya vijana huepuka kutafuta huduma za afya kwa sababu wanaogopa kuhukumiwa, wanahisi aibu, wana wasiwasi kuhusu usiri, wanakosa pesa za usafiri, au hawajui huduma zinapatikana wapi. Wengine hutegemea marafiki au mitandao ya kijamii kwa taarifa za afya, ambazo wakati mwingine zinaweza kuwa si sahihi. Kutafuta taarifa za afya kutoka kwa watoa huduma za afya waliofunzwa huwasaidia vijana kufanya maamuzi sahihi na kupata mwongozo sahihi.

Kijana anapaswa kutafuta huduma za afya ikiwa anapata dalili za ugonjwa, anashuku ujauzito, anataka kujua hali yake ya VVU, ana wasiwasi kuhusu afya ya ngono au uzazi, anapata vurugu au unyanyasaji, anapambana na ustawi wa kihisia, au anahitaji taarifa za afya. Kutafuta msaada mapema kunaweza kuzuia matatizo na kuboresha ustawi wa jumla. Kutafuta huduma ya afya si ishara ya udhaifu; ni hatua inayowajibika katika kulinda afya na mustakabali wa mtu.`,
      inputType: InputType.BUTTON,
      mediaAssetKey: null,
      isStartNode: true,
      isEndNode: true,
      sortOrder: 1,
      isActive: true,
    },
    // same pattern as before:
    // SUBTOPIC_01 EN
    // SUBTOPIC_01 SW
    // optional SUBTOPIC_02 EN
    // optional SUBTOPIC_02 SW
  ],

  contentNodeOptions: [
    {
      nodeKey: 'CONDOM_USE_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CONDOM_USE_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CONDOM_USE_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'REPRODUCTIVE_ANATOMY_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'REPRODUCTIVE_ANATOMY_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_03',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'REPRODUCTIVE_ANATOMY_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },

    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_04',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_04',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'REPRODUCTIVE_ANATOMY_04',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'HUMAN_REPRODUCTION_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'HUMAN_REPRODUCTION_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HUMAN_REPRODUCTION_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HUMAN_REPRODUCTION_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HUMAN_REPRODUCTION_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'HUMAN_REPRODUCTION_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HUMAN_REPRODUCTION_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HUMAN_REPRODUCTION_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'PREGNANCY_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'PREGNANCY_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'PREGNANCY_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_03',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'PREGNANCY_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_04',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'PREGNANCY_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_04',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_04',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_04',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_05',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_05',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'PREGNANCY_05',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },
    //next sect
    {
      nodeKey: 'MISCARRIAGE_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'MISCARRIAGE_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'MISCARRIAGE_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_03',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'MISCARRIAGE_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_04',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'MISCARRIAGE_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_04',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_04',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_04',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_05',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_05',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'MISCARRIAGE_05',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'EARLY_AND_ADOLESCENT_PREGNANCY_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'ANTENATAL_CARE_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'ANTENATAL_CARE_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ANTENATAL_CARE_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ANTENATAL_CARE_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ANTENATAL_CARE_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'ANTENATAL_CARE_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'ANTENATAL_CARE_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ANTENATAL_CARE_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ANTENATAL_CARE_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ANTENATAL_CARE_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'ANTENATAL_CARE_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ANTENATAL_CARE_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ANTENATAL_CARE_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'FAMILY_PLANNING_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'FAMILY_PLANNING_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'FAMILY_PLANNING_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_03',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'FAMILY_PLANNING_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_04',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'FAMILY_PLANNING_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_04',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_04',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_04',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_05',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_05',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'FAMILY_PLANNING_05',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'CONTRACEPTIVE_METHODS_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CONTRACEPTIVE_METHODS_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CONTRACEPTIVE_METHODS_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'ADOLESCENTS_NEEDS_DURING_PREGNANCY_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_NEEDS_DURING_PREGNANCY_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_NEEDS_DURING_PREGNANCY_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'HIV_AND_AIDS_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'HIV_AND_AIDS_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    }, //
    {
      nodeKey: 'HIV_AND_AIDS_03',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'HIV_AND_AIDS_04',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_04',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'HIV_AND_AIDS_05',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_04',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_04',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_04',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_05',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_05',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HIV_AND_AIDS_05',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_03',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'ADOLESCENTS_WITH_DISABILITY_RIGHTS_SRHR_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_02',
      sortOrder: 1,
      isActive: true,
    },

    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },

    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_02',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_03',
      sortOrder: 1,
      isActive: true,
    },

    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },

    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_03',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_03',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'SEXUALLY_TRANSMITTED_INFECTIONS_03',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },

    {
      nodeKey: 'HIV_TESTING_SERVICES_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'HIV_TESTING_SERVICES_02',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HIV_TESTING_SERVICES_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HIV_TESTING_SERVICES_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'HIV_TESTING_SERVICES_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },
    {
      nodeKey: 'HIV_TESTING_SERVICES_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HIV_TESTING_SERVICES_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HIV_TESTING_SERVICES_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'CONDOM_EDUCATION_01',
      optionValue: 'tell_me_more',
      labelEn: 'Tell me more',
      labelSw: 'Nieleze zaidi',
      nextNodeKey: 'CONDOM_EDUCATION_02',
      sortOrder: 1,
      isActive: true,
    },

    {
      nodeKey: 'CONDOM_EDUCATION_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CONDOM_EDUCATION_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 3,
      isActive: true,
    },
    {
      nodeKey: 'CONDOM_EDUCATION_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 4,
      isActive: true,
    },

    {
      nodeKey: 'CONDOM_EDUCATION_02',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'CONDOM_EDUCATION_02',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'CONDOM_EDUCATION_02',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },

    {
      nodeKey: 'HEALTH_SEEKING_BEHAVIOUR_01',
      optionValue: 'main_menu',
      labelEn: 'Main Menu',
      labelSw: 'Menyu Kuu',
      nextNodeKey: 'CATEGORY_MENU',
      sortOrder: 1,
      isActive: true,
    },
    {
      nodeKey: 'HEALTH_SEEKING_BEHAVIOUR_01',
      optionValue: 'back',
      labelEn: 'Back',
      labelSw: 'Rudi',
      nextNodeKey: 'BACK_ACTION',
      sortOrder: 2,
      isActive: true,
    },
    {
      nodeKey: 'HEALTH_SEEKING_BEHAVIOUR_01',
      optionValue: 'start_again',
      labelEn: 'Start Again',
      labelSw: 'Anza Tena',
      nextNodeKey: 'START_AGAIN',
      sortOrder: 3,
      isActive: true,
    },
  ],
};
