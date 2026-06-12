import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { AgeBand } from 'src/common/enums/age-band.enum';
import { ChatState } from 'src/common/enums/chat-state.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { InputType } from 'src/common/enums/input-type.enum';
import { Language } from 'src/common/enums/language.enum';
import { MessageType } from 'src/common/enums/message-type.enum';
import { NodeType } from 'src/common/enums/node-type.enum';
import { ContentService } from 'src/modules/content/services/content.service';
import { MessagesService } from 'src/modules/messages/services/messages.service';
import { ProfileService } from 'src/modules/profile/services/profile.service';
import { SessionService } from 'src/modules/session/services/session.service';
import { UsersService } from 'src/modules/users/services/user.service';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const usersService = app.get(UsersService);
    const profileService = app.get(ProfileService);
    const sessionService = app.get(SessionService);
    const messagesService = app.get(MessagesService);
    const contentService = app.get(ContentService);

    console.log('\n==============================');
    console.log('1. USER + PROFILE TESTS');
    console.log('==============================\n');

    const user =
      await usersService.findOrCreateByWhatsAppPhoneNumber('255700000001');
    console.log('User:', user);

    const profile = await profileService.findOrCreateByUserId(user.id);
    console.log('Profile created/found:', profile);

    const updatedLanguage = await profileService.updateLanguage(
      user.id,
      Language.EN,
    );
    console.log('Language updated:', updatedLanguage);

    const updatedAgeBand = await profileService.updateAgeBand(
      user.id,
      AgeBand.AGE_15_17,
    );
    console.log('Age band updated:', updatedAgeBand);

    const updatedGender = await profileService.updateGender(
      user.id,
      Gender.FEMALE,
    );
    console.log('Gender updated:', updatedGender);

    const completedOnboarding = await profileService.completeOnboarding(
      user.id,
    );
    console.log('Onboarding completed:', completedOnboarding);

    console.log('\n==============================');
    console.log('2. SESSION TESTS');
    console.log('==============================\n');

    const session = await sessionService.getOrCreateActiveSession(user.id);
    console.log('Session created/found:', session);

    const updatedState = await sessionService.updateCurrentState(
      session.id,
      ChatState.ASK_LANGUAGE,
    );
    console.log('Updated state:', updatedState);

    const updatedLocation = await sessionService.updateCurrentLocation(
      session.id,
      {
        currentCategoryCode: 'PERIODS_MENSTRUAL_HEALTH',
        currentTopicCode: 'MENSTRUATION',
        currentSubtopicCode: 'MENSTRUAL_HYGIENE',
        currentNodeKey: 'MENS_HYGIENE_01',
        previousNodeKey: null,
      },
    );
    console.log('Updated location:', updatedLocation);

    const touchedSession = await sessionService.touchLastMessageAt(session.id);
    console.log('Touched session:', touchedSession);

    console.log('\n==============================');
    console.log('3. MESSAGE TESTS');
    console.log('==============================\n');

    const inboundMessage = await messagesService.logInboundMessage({
      sessionId: session.id,
      userId: user.id,
      messageType: MessageType.TEXT,
      messageText: 'Hi',
      rawPayload: { source: 'test-script' },
    });
    console.log('Inbound message logged:', inboundMessage);

    const outboundMessage = await messagesService.logOutboundMessage({
      sessionId: session.id,
      userId: user.id,
      messageType: MessageType.TEXT,
      messageText: 'Hello! Welcome to SEMA NAMI.',
      rawPayload: { source: 'test-script' },
    });
    console.log('Outbound message logged:', outboundMessage);

    const recentMessages = await messagesService.getRecentMessagesBySessionId(
      session.id,
    );
    console.log('Recent messages:', recentMessages);

    console.log('\n==============================');
    console.log('4. CONTENT CATEGORY TESTS');
    console.log('==============================\n');

    let periodsCategory = await contentService.findCategoryByCode(
      'PERIODS_MENSTRUAL_HEALTH',
    );

    if (!periodsCategory) {
      periodsCategory = await contentService.createCategory({
        code: 'PERIODS_MENSTRUAL_HEALTH',
        titleEn: 'Periods and Menstrual Health',
        titleSw: 'Hedhi na Afya ya Hedhi',
        descriptionEn:
          'Learn about periods, menstrual hygiene, and related topics.',
        descriptionSw:
          'Jifunze kuhusu hedhi, usafi wa hedhi, na mada zinazohusiana.',
        audienceGender: Gender.FEMALE,
        ageBandRule: null,
        sortOrder: 1,
      });
      console.log('Created periods category:', periodsCategory);
    } else {
      console.log('Periods category already exists:', periodsCategory);
    }

    let relationshipsCategory = await contentService.findCategoryByCode(
      'RELATIONSHIPS_CONSENT',
    );

    if (!relationshipsCategory) {
      relationshipsCategory = await contentService.createCategory({
        code: 'RELATIONSHIPS_CONSENT',
        titleEn: 'Relationships and Consent',
        titleSw: 'Mahusiano na Ridhaa',
        descriptionEn:
          'Learn about healthy relationships, boundaries, and consent.',
        descriptionSw:
          'Jifunze kuhusu mahusiano yenye afya, mipaka, na ridhaa.',
        audienceGender: null,
        ageBandRule: null,
        sortOrder: 2,
      });
      console.log('Created relationships category:', relationshipsCategory);
    } else {
      console.log(
        'Relationships category already exists:',
        relationshipsCategory,
      );
    }

    const categories = await contentService.getActiveCategories();
    console.log('All active categories:', categories);

    const visibleForFemale = await contentService.getVisibleCategories({
      ageBand: null,
      gender: Gender.FEMALE,
    });
    console.log('Visible categories for female user:', visibleForFemale);

    const visibleForMale = await contentService.getVisibleCategories({
      ageBand: null,
      gender: Gender.MALE,
    });
    console.log('Visible categories for male user:', visibleForMale);

    const foundCategory = await contentService.findCategoryByCode(
      'PERIODS_MENSTRUAL_HEALTH',
    );
    console.log('Found category by code:', foundCategory);

    console.log('\n==============================');
    console.log('5. TOPIC TESTS');
    console.log('==============================\n');

    if (!periodsCategory) {
      throw new Error('Periods category was not found.');
    }

    let menstruationTopic =
      await contentService.findTopicByCode('MENSTRUATION');

    if (!menstruationTopic) {
      menstruationTopic = await contentService.createTopic({
        categoryId: periodsCategory.id,
        code: 'MENSTRUATION',
        titleEn: 'Menstruation',
        titleSw: 'Hedhi',
        descriptionEn: 'Learn the basics about menstruation.',
        descriptionSw: 'Jifunze misingi ya hedhi.',
        audienceGender: Gender.FEMALE,
        ageBandRule: null,
        sortOrder: 1,
      });
      console.log('Created menstruation topic:', menstruationTopic);
    } else {
      console.log('Menstruation topic already exists:', menstruationTopic);
    }

    let periodPainTopic = await contentService.findTopicByCode('PERIOD_PAIN');

    if (!periodPainTopic) {
      periodPainTopic = await contentService.createTopic({
        categoryId: periodsCategory.id,
        code: 'PERIOD_PAIN',
        titleEn: 'Period Pain',
        titleSw: 'Maumivu ya Hedhi',
        descriptionEn: 'Understand common period pain and what may help.',
        descriptionSw:
          'Elewa maumivu ya kawaida ya hedhi na nini kinaweza kusaidia.',
        audienceGender: Gender.FEMALE,
        ageBandRule: null,
        sortOrder: 2,
      });
      console.log('Created period pain topic:', periodPainTopic);
    } else {
      console.log('Period pain topic already exists:', periodPainTopic);
    }

    const topicsForPeriods = await contentService.getActiveTopicsByCategoryId(
      periodsCategory.id,
    );
    console.log('Topics under periods category:', topicsForPeriods);

    const visibleTopicsForFemale =
      await contentService.getVisibleTopicsByCategoryId(periodsCategory.id, {
        gender: Gender.FEMALE,
        ageBand: null,
      });
    console.log('Visible topics for female user:', visibleTopicsForFemale);

    const visibleTopicsForMale =
      await contentService.getVisibleTopicsByCategoryId(periodsCategory.id, {
        gender: Gender.MALE,
        ageBand: null,
      });
    console.log('Visible topics for male user:', visibleTopicsForMale);

    const foundTopic = await contentService.findTopicByCode('MENSTRUATION');
    console.log('Found topic by code:', foundTopic);

    console.log('\n==============================');
    console.log('6. SUBTOPIC TESTS');
    console.log('==============================\n');

    if (!menstruationTopic) {
      throw new Error('Menstruation topic was not found.');
    }

    let menstrualHygieneSubtopic =
      await contentService.findSubtopicByCode('MENSTRUAL_HYGIENE');

    if (!menstrualHygieneSubtopic) {
      menstrualHygieneSubtopic = await contentService.createSubtopic({
        topicId: menstruationTopic.id,
        code: 'MENSTRUAL_HYGIENE',
        titleEn: 'Menstrual Hygiene',
        titleSw: 'Usafi wa Hedhi',
        descriptionEn:
          'Learn how to stay clean and comfortable during your period.',
        descriptionSw:
          'Jifunze jinsi ya kuwa safi na mwenye utulivu wakati wa hedhi.',
        audienceGender: Gender.FEMALE,
        ageBandRule: null,
        sortOrder: 1,
      });
      console.log(
        'Created menstrual hygiene subtopic:',
        menstrualHygieneSubtopic,
      );
    } else {
      console.log(
        'Menstrual hygiene subtopic already exists:',
        menstrualHygieneSubtopic,
      );
    }

    let irregularPeriodsSubtopic =
      await contentService.findSubtopicByCode('IRREGULAR_PERIODS');

    if (!irregularPeriodsSubtopic) {
      irregularPeriodsSubtopic = await contentService.createSubtopic({
        topicId: menstruationTopic.id,
        code: 'IRREGULAR_PERIODS',
        titleEn: 'Irregular Periods',
        titleSw: 'Hedhi Zisizo za Kawaida',
        descriptionEn: 'Learn about periods that do not come regularly.',
        descriptionSw:
          'Jifunze kuhusu hedhi zisizokuja kwa mpangilio wa kawaida.',
        audienceGender: Gender.FEMALE,
        ageBandRule: null,
        sortOrder: 2,
      });
      console.log(
        'Created irregular periods subtopic:',
        irregularPeriodsSubtopic,
      );
    } else {
      console.log(
        'Irregular periods subtopic already exists:',
        irregularPeriodsSubtopic,
      );
    }

    const subtopicsForMenstruation =
      await contentService.getActiveSubtopicsByTopicId(menstruationTopic.id);
    console.log('Subtopics under menstruation:', subtopicsForMenstruation);

    const visibleSubtopicsForFemale =
      await contentService.getVisibleSubtopicsByTopicId(menstruationTopic.id, {
        gender: Gender.FEMALE,
        ageBand: null,
      });
    console.log(
      'Visible subtopics for female user:',
      visibleSubtopicsForFemale,
    );

    const visibleSubtopicsForMale =
      await contentService.getVisibleSubtopicsByTopicId(menstruationTopic.id, {
        gender: Gender.MALE,
        ageBand: null,
      });
    console.log('Visible subtopics for male user:', visibleSubtopicsForMale);
    console.log('\n==============================');
    console.log('7. CONTENT NODE TESTS');
    console.log('==============================\n');

    let introNodeEn = await contentService.findContentNodeByKeyAndLanguage(
      'MENS_HYGIENE_INTRO',
      Language.EN,
    );

    if (!introNodeEn) {
      introNodeEn = await contentService.createContentNode({
        categoryId: periodsCategory.id,
        topicId: menstruationTopic.id,
        subtopicId: menstrualHygieneSubtopic.id,
        nodeKey: 'MENS_HYGIENE_INTRO',
        nodeType: NodeType.INTRO,
        language: Language.EN,
        messageText:
          'Menstrual hygiene means keeping your body clean and using safe materials during your period.',
        inputType: InputType.BUTTON,
        isStartNode: true,
        sortOrder: 1,
      });
      console.log('Created English intro node:', introNodeEn);
    } else {
      console.log('English intro node already exists:', introNodeEn);
    }

    let introNodeSw = await contentService.findContentNodeByKeyAndLanguage(
      'MENS_HYGIENE_INTRO',
      Language.SW,
    );

    if (!introNodeSw) {
      introNodeSw = await contentService.createContentNode({
        categoryId: periodsCategory.id,
        topicId: menstruationTopic.id,
        subtopicId: menstrualHygieneSubtopic.id,
        nodeKey: 'MENS_HYGIENE_INTRO',
        nodeType: NodeType.INTRO,
        language: Language.SW,
        messageText:
          'Usafi wa hedhi ni kuhakikisha mwili wako unakuwa safi na kutumia vifaa salama wakati wa hedhi.',
        inputType: InputType.BUTTON,
        isStartNode: true,
        sortOrder: 1,
      });
      console.log('Created Swahili intro node:', introNodeSw);
    } else {
      console.log('Swahili intro node already exists:', introNodeSw);
    }

    let tipsNodeEn = await contentService.findContentNodeByKeyAndLanguage(
      'MENS_HYGIENE_TIPS',
      Language.EN,
    );

    if (!tipsNodeEn) {
      tipsNodeEn = await contentService.createContentNode({
        categoryId: periodsCategory.id,
        topicId: menstruationTopic.id,
        subtopicId: menstrualHygieneSubtopic.id,
        nodeKey: 'MENS_HYGIENE_TIPS',
        nodeType: NodeType.CONTENT,
        language: Language.EN,
        messageText:
          'It helps to change pads or clean cloth regularly, wash with clean water, and keep your body comfortable during your period.',
        inputType: InputType.BUTTON,
        isStartNode: false,
        sortOrder: 2,
      });
      console.log('Created English tips node:', tipsNodeEn);
    } else {
      console.log('English tips node already exists:', tipsNodeEn);
    }

    const englishNodes = await contentService.getActiveContentNodesBySubtopicId(
      menstrualHygieneSubtopic.id,
      Language.EN,
    );
    console.log('English content nodes for menstrual hygiene:', englishNodes);

    const swahiliNodes = await contentService.getActiveContentNodesBySubtopicId(
      menstrualHygieneSubtopic.id,
      Language.SW,
    );
    console.log('Swahili content nodes for menstrual hygiene:', swahiliNodes);

    const startNode = await contentService.getStartContentNodeBySubtopicId(
      menstrualHygieneSubtopic.id,
      Language.EN,
    );
    console.log('Start content node for menstrual hygiene (EN):', startNode);

    const foundSubtopic =
      await contentService.findSubtopicByCode('MENSTRUAL_HYGIENE');
    console.log('Found subtopic by code:', foundSubtopic);

    console.log('\n==============================');
    console.log('8. CONTENT NODE OPTION TESTS');
    console.log('==============================\n');

    const introNodeForOptions =
      await contentService.findContentNodeByKeyAndLanguage(
        'MENS_HYGIENE_INTRO',
        Language.EN,
      );

    if (!introNodeForOptions) {
      throw new Error('English intro node was not found.');
    }

    const existingIntroOptions =
      await contentService.getActiveOptionsByContentNodeId(
        introNodeForOptions.id,
      );

    if (existingIntroOptions.length === 0) {
      await contentService.createContentNodeOption({
        contentNodeId: introNodeForOptions.id,
        labelEn: 'Tell me more',
        labelSw: 'Nieleze zaidi',
        optionValue: 'tell_me_more',
        nextNodeKey: 'MENS_HYGIENE_TIPS',
        sortOrder: 1,
      });

      await contentService.createContentNodeOption({
        contentNodeId: introNodeForOptions.id,
        labelEn: 'Main Menu',
        labelSw: 'Menyu Kuu',
        optionValue: 'main_menu',
        nextNodeKey: 'CATEGORY_MENU',
        sortOrder: 2,
      });

      console.log('Created options for intro node.');
    } else {
      console.log('Intro node options already exist:', existingIntroOptions);
    }

    const introNodeOptions =
      await contentService.getActiveOptionsByContentNodeId(
        introNodeForOptions.id,
      );
    console.log('Options for English intro node:', introNodeOptions);

    const resolvedNextNode =
      await contentService.findContentNodeByKeyAndLanguage(
        'MENS_HYGIENE_TIPS',
        Language.EN,
      );
    console.log('Resolved next node by key/language:', resolvedNextNode);
    console.log('\n==============================');
    console.log('9. SUBTOPIC RELATED LINK TESTS');
    console.log('==============================\n');

    const menstrualHygieneSubtopicForLinks =
      await contentService.findSubtopicByCode('MENSTRUAL_HYGIENE');
    if (!menstrualHygieneSubtopicForLinks) {
      throw new Error('MENSTRUAL_HYGIENE subtopic was not found.');
    }

    if (!irregularPeriodsSubtopic) {
      throw new Error('IRREGULAR_PERIODS subtopic was not found.');
    }

    const existingRelatedLinks =
      await contentService.getRelatedLinksBySubtopicId(
        menstrualHygieneSubtopicForLinks.id,
      );

    const alreadyLinked = existingRelatedLinks.some(
      (link) => link.toSubtopicId === irregularPeriodsSubtopic.id,
    );

    if (!alreadyLinked) {
      const relatedLink = await contentService.createSubtopicRelatedLink({
        fromSubtopicId: menstrualHygieneSubtopicForLinks.id,
        toSubtopicId: irregularPeriodsSubtopic.id,
        sortOrder: 1,
      });
      console.log('Created related link:', relatedLink);
    } else {
      console.log('Related link already exists:', existingRelatedLinks);
    }

    const relatedLinks = await contentService.getRelatedLinksBySubtopicId(
      menstrualHygieneSubtopicForLinks.id,
    );
    console.log('Related links from menstrual hygiene:', relatedLinks);

    const relatedSubtopics =
      await contentService.getRelatedSubtopicsBySubtopicId(
        menstrualHygieneSubtopicForLinks.id,
      );
    console.log('Related subtopics from menstrual hygiene:', relatedSubtopics);
    console.log('\n==============================');
    console.log('10. SESSION COMPLETION TEST');
    console.log('==============================\n');

    const completedSession = await sessionService.completeSession(session.id);
    console.log('Completed session:', completedSession);

    console.log('\n✅ ALL TESTS COMPLETED SUCCESSFULLY\n');
  } catch (error) {
    console.error('\n❌ TEST SCRIPT FAILED\n', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
