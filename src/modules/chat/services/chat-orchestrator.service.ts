import { Injectable } from '@nestjs/common';
import { AgeBand } from '../../../common/enums/age-band.enum';
import { ChatState } from '../../../common/enums/chat-state.enum';
import { Gender } from '../../../common/enums/gender.enum';
import { Language } from '../../../common/enums/language.enum';
import { ContentService } from '../../../modules/content/services/content.service';
import { ProfileService } from '../../../modules/profile/services/profile.service';
import { SessionService } from '../../../modules/session/services/session.service';
import { UsersService } from '../../../modules/users/services/user.service';
import { ReferralsService } from '../../../modules/referrals/services/referrals.service';
import { SafeguardingService } from '../../../modules/safeguarding/services/safeguarding.service';
import { MessagesService } from '../../../modules/messages/services/messages.service';
import { MessageType } from 'src/common/enums/message-type.enum';

type OrchestratorInput = {
  whatsappPhoneNumber: string;
  text?: string | null;
  interactiveValue?: string | null;
};

type OrchestratorOption = {
  label: string;
  value: string;
};

type OrchestratorResponse = {
  message: string;
  options: OrchestratorOption[];
  currentState: ChatState;
};

@Injectable()
export class ChatOrchestratorService {
  private readonly usersService: UsersService;
  private readonly profileService: ProfileService;
  private readonly sessionService: SessionService;
  private readonly contentService: ContentService;
  private readonly safeguardingService: SafeguardingService;
  private readonly referralsService: ReferralsService;
  private readonly messagesService: MessagesService;
  constructor(
    usersService: UsersService,
    profileService: ProfileService,
    sessionService: SessionService,
    contentService: ContentService,
    safeguardingService: SafeguardingService,
    referralsService: ReferralsService,
    messagesService: MessagesService,
  ) {
    this.usersService = usersService;
    this.profileService = profileService;
    this.sessionService = sessionService;
    this.contentService = contentService;
    this.safeguardingService = safeguardingService;
    this.referralsService = referralsService;
    this.messagesService = messagesService;
  }

  processIncomingMessage = async (
    input: OrchestratorInput,
  ): Promise<OrchestratorResponse> => {
    const normalizedInput = this.normalizeInput(input);

    const user = await this.usersService.findOrCreateByWhatsAppPhoneNumber(
      normalizedInput.whatsappPhoneNumber,
    );

    const profile = await this.profileService.findOrCreateByUserId(user.id);
    const session = await this.sessionService.getOrCreateActiveSession(user.id);

    const inboundMessage = await this.messagesService.logInboundMessage({
      sessionId: session.id,
      userId: user.id,
      messageType: this.getInboundMessageType(normalizedInput),
      messageText: normalizedInput.text ?? null,
      interactiveValue: normalizedInput.interactiveValue ?? null,
      triggeredSafeguarding: false,
      rawPayload: {
        source: 'chat-orchestrator',
      },
    });

    const language = profile.preferredLanguage ?? Language.EN;

    if (normalizedInput.text) {
      const safeguardingReply =
        await this.safeguardingService.buildSafeguardingReply(
          normalizedInput.text,
          language,
        );

      if (safeguardingReply?.trigger && safeguardingReply.response) {
        let message = safeguardingReply.response.responseText;

        if (safeguardingReply.response.showReferrals) {
          const referralResources =
            await this.referralsService.getActiveReferralResources();

          message += this.formatReferralResources({
            language,
            resources: referralResources,
          });
        }

        await this.sessionService.updateStateAndLocation(session.id, {
          currentState: ChatState.SAFEGUARDING_INTERRUPT,
          currentCategoryCode: session.currentCategoryCode ?? null,
          currentTopicCode: session.currentTopicCode ?? null,
          currentSubtopicCode: session.currentSubtopicCode ?? null,
          currentNodeKey: session.currentNodeKey ?? null,
          previousNodeKey: session.previousNodeKey ?? null,
        });

        await this.messagesService.markMessageAsSafeguardingTriggered(
          inboundMessage.id,
        );

        const response: OrchestratorResponse = {
          message,
          options: [
            {
              label: language === Language.SW ? 'Menyu Kuu' : 'Main Menu',
              value: 'main_menu',
            },
            {
              label: language === Language.SW ? 'Anza Tena' : 'Start Again',
              value: 'start_again',
            },
          ],
          currentState: ChatState.SAFEGUARDING_INTERRUPT,
        };

        await this.logOutboundOrchestratorResponse({
          sessionId: session.id,
          userId: user.id,
          response,
          triggeredSafeguarding: true,
        });

        return response;
      }
    }

    const action = normalizedInput.interactiveValue;

    if (action === 'main_menu') {
      const response = await this.handleCategoryMenu(session.id, user.id);

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (action === 'start_again') {
      await this.sessionService.updateStateAndLocation(session.id, {
        currentState: ChatState.WELCOME,
        currentCategoryCode: null,
        currentTopicCode: null,
        currentSubtopicCode: null,
        currentNodeKey: null,
        previousNodeKey: null,
      });

      const response = await this.handleOnboardingFlow({
        userId: user.id,
        sessionId: session.id,
        currentState: ChatState.WELCOME,
        text: null,
        interactiveValue: null,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (action === 'back') {
      const response = await this.handleBackAction({
        userId: user.id,
        sessionId: session.id,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (
      session.currentState === ChatState.ASK_TOPIC_CATEGORY &&
      action === 'more_categories'
    ) {
      const currentPage = this.parseCategoryPageMarker(session.previousNodeKey);

      const response = await this.handleCategoryMenu(
        session.id,
        user.id,
        currentPage + 1,
      );

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (
      session.currentState === ChatState.ASK_TOPIC_CATEGORY &&
      action === 'category_page_start'
    ) {
      const response = await this.handleCategoryMenu(session.id, user.id, 0);

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (
      this.isOnboardingState(session.currentState) ||
      !profile.completedOnboarding
    ) {
      const response = await this.handleOnboardingFlow({
        userId: user.id,
        sessionId: session.id,
        currentState: session.currentState,
        text: normalizedInput.text,
        interactiveValue: normalizedInput.interactiveValue,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (session.currentState === ChatState.ASK_TOPIC_CATEGORY) {
      const response = await this.handleCategorySelection({
        userId: user.id,
        sessionId: session.id,
        interactiveValue: normalizedInput.interactiveValue,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (
      session.currentState === ChatState.TOPIC_MENU &&
      action === 'more_topics'
    ) {
      const currentPage = this.parseTopicPageMarker(session.previousNodeKey);

      const response = await this.handleTopicMenu({
        userId: user.id,
        sessionId: session.id,
        categoryCode: session.currentCategoryCode!,
        page: currentPage + 1,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (
      session.currentState === ChatState.TOPIC_MENU &&
      action === 'topic_page_start'
    ) {
      const response = await this.handleTopicMenu({
        userId: user.id,
        sessionId: session.id,
        categoryCode: session.currentCategoryCode!,
        page: 0,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (session.currentState === ChatState.TOPIC_MENU) {
      const response = await this.handleTopicSelection({
        userId: user.id,
        sessionId: session.id,
        interactiveValue: normalizedInput.interactiveValue,
        currentCategoryCode: session.currentCategoryCode,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (
      session.currentState === ChatState.SUBTOPIC_MENU &&
      action === 'more_subtopics'
    ) {
      const currentPage = this.parseSubtopicPageMarker(session.previousNodeKey);

      const response = await this.handleSubtopicMenu({
        userId: user.id,
        sessionId: session.id,
        categoryCode: session.currentCategoryCode!,
        topicCode: session.currentTopicCode!,
        page: currentPage + 1,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (
      session.currentState === ChatState.SUBTOPIC_MENU &&
      action === 'subtopic_page_start'
    ) {
      const response = await this.handleSubtopicMenu({
        userId: user.id,
        sessionId: session.id,
        categoryCode: session.currentCategoryCode!,
        topicCode: session.currentTopicCode!,
        page: 0,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (session.currentState === ChatState.SUBTOPIC_MENU) {
      const response = await this.handleSubtopicSelection({
        userId: user.id,
        sessionId: session.id,
        interactiveValue: normalizedInput.interactiveValue,
        currentCategoryCode: session.currentCategoryCode,
        currentTopicCode: session.currentTopicCode,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    if (session.currentState === ChatState.CONTENT_NODE) {
      const response = await this.handleContentNodeSelection({
        userId: user.id,
        sessionId: session.id,
        interactiveValue: normalizedInput.interactiveValue,
        currentCategoryCode: session.currentCategoryCode,
        currentTopicCode: session.currentTopicCode,
        currentSubtopicCode: session.currentSubtopicCode,
        currentNodeKey: session.currentNodeKey,
      });

      await this.logOutboundOrchestratorResponse({
        sessionId: session.id,
        userId: user.id,
        response,
      });

      return response;
    }

    const response = await this.handleCategoryMenu(session.id, user.id);

    await this.logOutboundOrchestratorResponse({
      sessionId: session.id,
      userId: user.id,
      response,
    });

    return response;
  };

  private normalizeInput(input: OrchestratorInput): OrchestratorInput {
    return {
      whatsappPhoneNumber: input.whatsappPhoneNumber,
      text: input.text?.trim() ?? null,
      interactiveValue: input.interactiveValue?.trim() ?? null,
    };
  }

  private async handleBackAction(data: {
    userId: string;
    sessionId: string;
  }): Promise<OrchestratorResponse> {
    const session = await this.sessionService.getActiveSessionByUserId(
      data.userId,
    );

    if (!session) {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    if (
      session.currentState === ChatState.CONTENT_NODE &&
      session.currentTopicCode
    ) {
      return this.handleSubtopicMenu({
        userId: data.userId,
        sessionId: data.sessionId,
        categoryCode: session.currentCategoryCode ?? '',
        topicCode: session.currentTopicCode,
        page: 0,
      });
    }

    if (
      session.currentState === ChatState.SUBTOPIC_MENU &&
      session.currentCategoryCode
    ) {
      return this.handleTopicMenu({
        userId: data.userId,
        sessionId: data.sessionId,
        categoryCode: session.currentCategoryCode,
        page: 0,
      });
    }

    if (session.currentState === ChatState.TOPIC_MENU) {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    return this.handleCategoryMenu(data.sessionId, data.userId);
  }
  private async handleOnboardingFlow(data: {
    userId: string;
    sessionId: string;
    currentState: ChatState;
    text?: string | null;
    interactiveValue?: string | null;
  }): Promise<OrchestratorResponse> {
    switch (data.currentState) {
      case ChatState.WELCOME:
        await this.sessionService.updateStateAndLocation(data.sessionId, {
          currentState: ChatState.ASK_LANGUAGE,
        });

        return {
          message:
            'Welcome to SEMA NAMI. Please choose your language.\nKaribu SEMA NAMI. Tafadhali chagua lugha yako.',
          options: [
            { label: 'English', value: Language.EN },
            { label: 'Kiswahili', value: Language.SW },
          ],
          currentState: ChatState.ASK_LANGUAGE,
        };

      case ChatState.ASK_LANGUAGE:
        return this.handleLanguageStep(data);

      case ChatState.ASK_AGE_BAND:
        return this.handleAgeBandStep(data);

      case ChatState.ASK_GENDER:
        return this.handleGenderStep(data);

      case ChatState.ASK_TOPIC_CATEGORY:
        return this.handleCategoryMenu(data.sessionId, data.userId);

      default:
        await this.sessionService.updateStateAndLocation(data.sessionId, {
          currentState: ChatState.ASK_LANGUAGE,
        });

        return {
          message:
            'Please choose your language to continue.\nTafadhali chagua lugha yako ili kuendelea.',
          options: [
            { label: 'English', value: Language.EN },
            { label: 'Kiswahili', value: Language.SW },
          ],
          currentState: ChatState.ASK_LANGUAGE,
        };
    }
  }

  private async handleLanguageStep(data: {
    userId: string;
    sessionId: string;
    interactiveValue?: string | null;
  }): Promise<OrchestratorResponse> {
    const selectedLanguage = data.interactiveValue as Language | null;

    if (selectedLanguage !== Language.EN && selectedLanguage !== Language.SW) {
      return {
        message:
          'Please choose one of the language options below.\nTafadhali chagua moja ya lugha zilizopo hapa chini.',
        options: [
          { label: 'English', value: Language.EN },
          { label: 'Kiswahili', value: Language.SW },
        ],
        currentState: ChatState.ASK_LANGUAGE,
      };
    }

    await this.profileService.updateLanguage(data.userId, selectedLanguage);

    await this.sessionService.updateStateAndLocation(data.sessionId, {
      currentState: ChatState.ASK_AGE_BAND,
    });

    return {
      message:
        selectedLanguage === Language.SW
          ? 'Tafadhali chagua umri wako.'
          : 'Please choose your age group.',
      options: [
        { label: '15–17', value: AgeBand.AGE_15_17 },
        { label: '18–20', value: AgeBand.AGE_18_20 },
        { label: '21–24', value: AgeBand.AGE_21_24 },
      ],
      currentState: ChatState.ASK_AGE_BAND,
    };
  }

  private async handleAgeBandStep(data: {
    userId: string;
    sessionId: string;
    interactiveValue?: string | null;
  }): Promise<OrchestratorResponse> {
    const selectedAgeBand = data.interactiveValue as AgeBand | null;

    if (
      selectedAgeBand !== AgeBand.AGE_15_17 &&
      selectedAgeBand !== AgeBand.AGE_18_20 &&
      selectedAgeBand !== AgeBand.AGE_21_24
    ) {
      return {
        message: 'Please choose one of the age group options below.',
        options: [
          { label: '15–17', value: AgeBand.AGE_15_17 },
          { label: '18–20', value: AgeBand.AGE_18_20 },
          { label: '21–24', value: AgeBand.AGE_21_24 },
        ],
        currentState: ChatState.ASK_AGE_BAND,
      };
    }

    await this.profileService.updateAgeBand(data.userId, selectedAgeBand);

    await this.sessionService.updateStateAndLocation(data.sessionId, {
      currentState: ChatState.ASK_GENDER,
    });

    return {
      message: 'Please choose your gender.',
      options: [
        { label: 'Female', value: Gender.FEMALE },
        { label: 'Male', value: Gender.MALE },
        { label: 'Prefer not to say', value: Gender.PREFER_NOT_TO_SAY },
      ],
      currentState: ChatState.ASK_GENDER,
    };
  }

  private async handleGenderStep(data: {
    userId: string;
    sessionId: string;
    interactiveValue?: string | null;
  }): Promise<OrchestratorResponse> {
    const selectedGender = data.interactiveValue as Gender | null;

    if (
      selectedGender !== Gender.FEMALE &&
      selectedGender !== Gender.MALE &&
      selectedGender !== Gender.PREFER_NOT_TO_SAY
    ) {
      return {
        message: 'Please choose one of the gender options below.',
        options: [
          { label: 'Female', value: Gender.FEMALE },
          { label: 'Male', value: Gender.MALE },
          { label: 'Prefer not to say', value: Gender.PREFER_NOT_TO_SAY },
        ],
        currentState: ChatState.ASK_GENDER,
      };
    }

    await this.profileService.updateGender(data.userId, selectedGender);
    await this.profileService.completeOnboarding(data.userId);

    return this.handleCategoryMenu(data.sessionId, data.userId);
  }

  private async handleCategoryMenu(
    sessionId: string,
    userId?: string,
    page = 0,
  ): Promise<OrchestratorResponse> {
    let categories = await this.contentService.getActiveCategories();
    let language = Language.EN;

    if (userId) {
      const profile = await this.profileService.findByUserId(userId);

      language = profile?.preferredLanguage ?? Language.EN;

      categories = await this.contentService.getVisibleCategories({
        ageBand: profile?.ageBand ?? null,
        gender: profile?.gender ?? null,
      });
    }

    const startIndex = page * this.CATEGORY_PAGE_SIZE;
    const endIndex = startIndex + this.CATEGORY_PAGE_SIZE;
    const pagedCategories = categories.slice(startIndex, endIndex);
    const hasMore = endIndex < categories.length;

    const options = pagedCategories.map((category) => ({
      label: language === Language.SW ? category.titleSw : category.titleEn,
      value: category.code,
    }));

    if (hasMore) {
      options.push({
        label: language === Language.SW ? 'Zaidi' : 'More',
        value: 'more_categories',
      });
    }

    if (page > 0) {
      options.push({
        label: language === Language.SW ? 'Mwanzo wa orodha' : 'Back to start',
        value: 'category_page_start',
      });
    }

    await this.sessionService.updateStateAndLocation(sessionId, {
      currentState: ChatState.ASK_TOPIC_CATEGORY,
      currentCategoryCode: null,
      currentTopicCode: null,
      currentSubtopicCode: null,
      currentNodeKey: null,
      previousNodeKey: this.buildCategoryPageMarker(page),
    });

    return {
      message:
        language === Language.SW
          ? 'Ungependa kujifunza nini leo?'
          : 'What would you like to learn about today?',
      options,
      currentState: ChatState.ASK_TOPIC_CATEGORY,
    };
  }

  private async handleCategorySelection(data: {
    userId: string;
    sessionId: string;
    interactiveValue?: string | null;
  }): Promise<OrchestratorResponse> {
    const selectedCategoryCode = data.interactiveValue;
    const profile = await this.profileService.findByUserId(data.userId);

    if (
      selectedCategoryCode === 'more_categories' ||
      selectedCategoryCode === 'category_page_start'
    ) {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    if (!selectedCategoryCode) {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    const selectedCategory =
      await this.contentService.findCategoryByCode(selectedCategoryCode);

    if (!selectedCategory || !selectedCategory.isActive) {
      return {
        message:
          profile?.preferredLanguage === Language.SW
            ? 'Tafadhali chagua moja ya maeneo ya mada yaliyopo hapa chini.'
            : 'Please choose one of the available topic areas below.',
        options: [],
        currentState: ChatState.ASK_TOPIC_CATEGORY,
      };
    }

    const visibleTopics =
      await this.contentService.getVisibleTopicsByCategoryId(
        selectedCategory.id,
        {
          ageBand: profile?.ageBand ?? null,
          gender: profile?.gender ?? null,
        },
      );

    if (visibleTopics.length === 0) {
      return {
        message:
          profile?.preferredLanguage === Language.SW
            ? 'Samahani, hakuna mada zinazopatikana kwa sasa katika sehemu hii.'
            : 'Sorry, there are no topics available in this section right now.',
        options: [
          {
            label:
              profile?.preferredLanguage === Language.SW
                ? 'Menyu Kuu'
                : 'Main Menu',
            value: 'main_menu',
          },
        ],
        currentState: ChatState.FALLBACK,
      };
    }

    if (visibleTopics.length === 1) {
      const selectedTopic = visibleTopics[0];

      return this.handleSubtopicMenu({
        userId: data.userId,
        sessionId: data.sessionId,
        categoryCode: selectedCategory.code,
        topicCode: selectedTopic.code,
        page: 0,
      });
    }

    return this.handleTopicMenu({
      userId: data.userId,
      sessionId: data.sessionId,
      categoryCode: selectedCategory.code,
      page: 0,
    });
  }

  private readonly CATEGORY_PAGE_SIZE = 8;

  private buildCategoryPageMarker(page: number): string {
    return `CATEGORY_PAGE_${page}`;
  }

  private parseCategoryPageMarker(marker?: string | null): number {
    if (!marker?.startsWith('CATEGORY_PAGE_')) {
      return 0;
    }

    const value = Number(marker.replace('CATEGORY_PAGE_', ''));
    return Number.isNaN(value) ? 0 : value;
  }

  private async handleTopicMenu(data: {
    userId: string;
    sessionId: string;
    categoryCode: string;
    page?: number;
  }): Promise<OrchestratorResponse> {
    const profile = await this.profileService.findByUserId(data.userId);
    const language = profile?.preferredLanguage ?? Language.EN;

    const selectedCategory = await this.contentService.findCategoryByCode(
      data.categoryCode,
    );

    if (!selectedCategory || !selectedCategory.isActive) {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    const visibleTopics =
      await this.contentService.getVisibleTopicsByCategoryId(
        selectedCategory.id,
        {
          ageBand: profile?.ageBand ?? null,
          gender: profile?.gender ?? null,
        },
      );

    const page = data.page ?? 0;
    const startIndex = page * this.TOPIC_PAGE_SIZE;
    const endIndex = startIndex + this.TOPIC_PAGE_SIZE;
    const pagedTopics = visibleTopics.slice(startIndex, endIndex);
    const hasMore = endIndex < visibleTopics.length;

    const options = pagedTopics.map((topic) => ({
      label: language === Language.SW ? topic.titleSw : topic.titleEn,
      value: topic.code,
    }));

    if (hasMore) {
      options.push({
        label: language === Language.SW ? 'Zaidi' : 'More',
        value: 'more_topics',
      });
    }

    if (page > 0) {
      options.push({
        label: language === Language.SW ? 'Mwanzo wa orodha' : 'Back to start',
        value: 'topic_page_start',
      });
    }

    await this.sessionService.updateStateAndLocation(data.sessionId, {
      currentState: ChatState.TOPIC_MENU,
      currentCategoryCode: selectedCategory.code,
      currentTopicCode: null,
      currentSubtopicCode: null,
      currentNodeKey: null,
      previousNodeKey: this.buildTopicPageMarker(page),
    });

    return {
      message:
        language === Language.SW
          ? `Umechagua ${selectedCategory.titleSw}. Ungependa kuchunguza nini zaidi?`
          : `You chose ${selectedCategory.titleEn}. What would you like to explore next?`,
      options,
      currentState: ChatState.TOPIC_MENU,
    };
  }

  private async handleTopicSelection(data: {
    userId: string;
    sessionId: string;
    interactiveValue?: string | null;
    currentCategoryCode?: string | null;
  }): Promise<OrchestratorResponse> {
    const selectedTopicCode = data.interactiveValue;
    const profile = await this.profileService.findByUserId(data.userId);

    if (
      data.interactiveValue === 'more_topics' ||
      data.interactiveValue === 'topic_page_start'
    ) {
      if (!data.currentCategoryCode) {
        return this.handleCategoryMenu(data.sessionId, data.userId);
      }

      return this.handleTopicMenu({
        userId: data.userId,
        sessionId: data.sessionId,
        categoryCode: data.currentCategoryCode,
        page: 0,
      });
    }
    if (!selectedTopicCode) {
      if (!data.currentCategoryCode) {
        return this.handleCategoryMenu(data.sessionId, data.userId);
      }

      const currentCategory = await this.contentService.findCategoryByCode(
        data.currentCategoryCode,
      );

      if (!currentCategory) {
        return this.handleCategoryMenu(data.sessionId, data.userId);
      }

      const visibleTopics =
        await this.contentService.getVisibleTopicsByCategoryId(
          currentCategory.id,
          {
            ageBand: profile?.ageBand ?? null,
            gender: profile?.gender ?? null,
          },
        );

      return {
        message: `You chose ${currentCategory.titleEn}. What would you like to explore next?`,
        options: visibleTopics.map((topic) => ({
          label: topic.titleEn,
          value: topic.code,
        })),
        currentState: ChatState.TOPIC_MENU,
      };
    }

    const selectedTopic =
      await this.contentService.findTopicByCode(selectedTopicCode);

    if (!selectedTopic || !selectedTopic.isActive) {
      if (!data.currentCategoryCode) {
        return this.handleCategoryMenu(data.sessionId, data.userId);
      }

      const currentCategory = await this.contentService.findCategoryByCode(
        data.currentCategoryCode,
      );

      if (!currentCategory) {
        return this.handleCategoryMenu(data.sessionId, data.userId);
      }

      const visibleTopics =
        await this.contentService.getVisibleTopicsByCategoryId(
          currentCategory.id,
          {
            ageBand: profile?.ageBand ?? null,
            gender: profile?.gender ?? null,
          },
        );

      return {
        message: 'Please choose one of the available topics below.',
        options: visibleTopics.map((topic) => ({
          label: topic.titleEn,
          value: topic.code,
        })),
        currentState: ChatState.TOPIC_MENU,
      };
    }

    return this.handleSubtopicMenu({
      userId: data.userId,
      sessionId: data.sessionId,
      categoryCode: data.currentCategoryCode ?? '',
      topicCode: selectedTopic.code,
      page: 0,
    });
  }

  private async handleSubtopicSelection(data: {
    userId: string;
    sessionId: string;
    interactiveValue?: string | null;
    currentCategoryCode?: string | null;
    currentTopicCode?: string | null;
  }): Promise<OrchestratorResponse> {
    const selectedSubtopicCode = data.interactiveValue;
    const profile = await this.profileService.findByUserId(data.userId);

    if (
      data.interactiveValue === 'more_subtopics' ||
      data.interactiveValue === 'subtopic_page_start'
    ) {
      if (!data.currentCategoryCode || !data.currentTopicCode) {
        return this.handleCategoryMenu(data.sessionId, data.userId);
      }

      return this.handleSubtopicMenu({
        userId: data.userId,
        sessionId: data.sessionId,
        categoryCode: data.currentCategoryCode,
        topicCode: data.currentTopicCode,
        page: 0,
      });
    }
    if (!data.currentTopicCode) {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    const currentTopic = await this.contentService.findTopicByCode(
      data.currentTopicCode,
    );

    if (!currentTopic) {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    const visibleSubtopics =
      await this.contentService.getVisibleSubtopicsByTopicId(currentTopic.id, {
        ageBand: profile?.ageBand ?? null,
        gender: profile?.gender ?? null,
      });

    if (!selectedSubtopicCode) {
      return {
        message: `You chose ${currentTopic.titleEn}. What would you like to learn about next?`,
        options: visibleSubtopics.map((subtopic) => ({
          label:
            profile?.preferredLanguage === Language.SW
              ? subtopic.titleSw
              : subtopic.titleEn,
          value: subtopic.code,
        })),
        currentState: ChatState.SUBTOPIC_MENU,
      };
    }

    const selectedSubtopic =
      await this.contentService.findSubtopicByCode(selectedSubtopicCode);

    if (!selectedSubtopic || !selectedSubtopic.isActive) {
      return {
        message: 'Please choose one of the available subtopics below.',
        options: visibleSubtopics.map((subtopic) => ({
          label:
            profile?.preferredLanguage === Language.SW
              ? subtopic.titleSw
              : subtopic.titleEn,
          value: subtopic.code,
        })),
        currentState: ChatState.SUBTOPIC_MENU,
      };
    }

    const language = profile?.preferredLanguage ?? Language.EN;

    const startNode = await this.contentService.getStartContentNodeBySubtopicId(
      selectedSubtopic.id,
      language,
    );

    if (!startNode) {
      return {
        message: 'Sorry, I could not load this content right now.',
        options: [
          {
            label: language === Language.SW ? 'Menyu Kuu' : 'Main Menu',
            value: 'main_menu',
          },
        ],
        currentState: ChatState.FALLBACK,
      };
    }

    return this.buildContentNodeResponse({
      sessionId: data.sessionId,
      currentCategoryCode: data.currentCategoryCode ?? null,
      currentTopicCode: currentTopic.code,
      currentSubtopicCode: selectedSubtopic.code,
      nodeKey: startNode.nodeKey,
      language,
      previousNodeKey: null,
    });
  }

  private async buildContentNodeResponse(data: {
    sessionId: string;
    currentCategoryCode?: string | null;
    currentTopicCode?: string | null;
    currentSubtopicCode?: string | null;
    nodeKey: string;
    language: Language;
    previousNodeKey?: string | null;
  }): Promise<OrchestratorResponse> {
    const node = await this.contentService.findContentNodeByKeyAndLanguage(
      data.nodeKey,
      data.language,
    );

    if (!node || !node.isActive) {
      return {
        message: 'Sorry, I could not load this content right now.',
        options: [
          { label: 'Main Menu', value: 'main_menu' },
          { label: 'Start Again', value: 'start_again' },
        ],
        currentState: ChatState.FALLBACK,
      };
    }

    const options = await this.contentService.getActiveOptionsByContentNodeId(
      node.id,
    );

    await this.sessionService.updateStateAndLocation(data.sessionId, {
      currentState: ChatState.CONTENT_NODE,
      currentCategoryCode: data.currentCategoryCode ?? null,
      currentTopicCode: data.currentTopicCode ?? null,
      currentSubtopicCode: data.currentSubtopicCode ?? null,
      currentNodeKey: node.nodeKey,
      previousNodeKey: data.previousNodeKey ?? null,
    });

    return {
      message: node.messageText,
      options: options.map((option) => ({
        label: data.language === Language.SW ? option.labelSw : option.labelEn,
        value: option.optionValue,
      })),
      currentState: ChatState.CONTENT_NODE,
    };
  }

  private async handleContentNodeSelection(data: {
    userId: string;
    sessionId: string;
    interactiveValue?: string | null;
    currentCategoryCode?: string | null;
    currentTopicCode?: string | null;
    currentSubtopicCode?: string | null;
    currentNodeKey?: string | null;
  }): Promise<OrchestratorResponse> {
    const selectedOptionValue = data.interactiveValue;
    const profile = await this.profileService.findByUserId(data.userId);
    const language = profile?.preferredLanguage ?? Language.EN;

    if (!data.currentNodeKey) {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    if (!selectedOptionValue) {
      const currentNode =
        await this.contentService.findContentNodeByKeyAndLanguage(
          data.currentNodeKey,
          language,
        );

      if (!currentNode) {
        return {
          message:
            language === Language.SW
              ? 'Samahani, siwezi kuendelea na maudhui haya kwa sasa.'
              : 'Sorry, I could not continue this content right now.',
          options: [
            {
              label: language === Language.SW ? 'Menyu Kuu' : 'Main Menu',
              value: 'main_menu',
            },
          ],
          currentState: ChatState.FALLBACK,
        };
      }

      const options = await this.contentService.getActiveOptionsByContentNodeId(
        currentNode.id,
      );

      return {
        message: currentNode.messageText,
        options: options.map((option) => ({
          label: language === Language.SW ? option.labelSw : option.labelEn,
          value: option.optionValue,
        })),
        currentState: ChatState.CONTENT_NODE,
      };
    }

    if (selectedOptionValue === 'main_menu') {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    if (selectedOptionValue === 'start_again') {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    if (selectedOptionValue === 'back') {
      const profile = await this.profileService.findByUserId(data.userId);
      const language = profile?.preferredLanguage ?? Language.EN;

      if (!data.currentSubtopicCode || !data.currentTopicCode) {
        return this.handleCategoryMenu(data.sessionId, data.userId);
      }

      const currentTopic = await this.contentService.findTopicByCode(
        data.currentTopicCode,
      );

      if (!currentTopic) {
        return this.handleCategoryMenu(data.sessionId, data.userId);
      }

      const visibleSubtopics =
        await this.contentService.getVisibleSubtopicsByTopicId(
          currentTopic.id,
          {
            ageBand: profile?.ageBand ?? null,
            gender: profile?.gender ?? null,
          },
        );

      await this.sessionService.updateStateAndLocation(data.sessionId, {
        currentState: ChatState.SUBTOPIC_MENU,
        currentCategoryCode: data.currentCategoryCode ?? null,
        currentTopicCode: data.currentTopicCode ?? null,
        currentSubtopicCode: null,
        currentNodeKey: null,
        previousNodeKey: null,
      });

      return {
        message:
          language === Language.SW
            ? `Umechagua ${currentTopic.titleSw}. Ungependa kujifunza nini zaidi?`
            : `You chose ${currentTopic.titleEn}. What would you like to learn about next?`,
        options: visibleSubtopics.map((subtopic) => ({
          label: language === Language.SW ? subtopic.titleSw : subtopic.titleEn,
          value: subtopic.code,
        })),
        currentState: ChatState.SUBTOPIC_MENU,
      };
    }

    const currentNode =
      await this.contentService.findContentNodeByKeyAndLanguage(
        data.currentNodeKey,
        language,
      );

    if (!currentNode) {
      return {
        message:
          language === Language.SW
            ? 'Samahani, siwezi kuendelea na maudhui haya kwa sasa.'
            : 'Sorry, I could not continue this content right now.',
        options: [
          {
            label: language === Language.SW ? 'Menyu Kuu' : 'Main Menu',
            value: 'main_menu',
          },
        ],
        currentState: ChatState.FALLBACK,
      };
    }

    const nextNode = await this.contentService.resolveNextNodeByOption({
      contentNodeId: currentNode.id,
      optionValue: selectedOptionValue,
      language,
    });

    if (!nextNode) {
      const currentOptions =
        await this.contentService.getActiveOptionsByContentNodeId(
          currentNode.id,
        );

      return {
        message:
          language === Language.SW
            ? 'Tafadhali chagua moja ya chaguo zilizopo hapa chini.'
            : 'Please choose one of the available options below.',
        options: currentOptions.map((option) => ({
          label: language === Language.SW ? option.labelSw : option.labelEn,
          value: option.optionValue,
        })),
        currentState: ChatState.CONTENT_NODE,
      };
    }

    return this.buildContentNodeResponse({
      sessionId: data.sessionId,
      currentCategoryCode: data.currentCategoryCode ?? null,
      currentTopicCode: data.currentTopicCode ?? null,
      currentSubtopicCode: data.currentSubtopicCode ?? null,
      nodeKey: nextNode.nodeKey,
      language,
      previousNodeKey: currentNode.nodeKey,
    });
  }

  private formatReferralResources(data: {
    language: Language;
    resources: {
      name: string;
      descriptionEn?: string | null;
      descriptionSw?: string | null;
      contactDetails?: string | null;
    }[];
  }): string {
    if (!data.resources.length) {
      return '';
    }

    const header =
      data.language === Language.SW
        ? '\n\nHuduma za msaada:'
        : '\n\nSupport options:';

    const lines = data.resources.map((resource) => {
      const description =
        data.language === Language.SW
          ? resource.descriptionSw
          : resource.descriptionEn;

      const details = [resource.name, description, resource.contactDetails]
        .filter(Boolean)
        .join(' - ');

      return `• ${details}`;
    });

    return `${header}\n${lines.join('\n')}`;
  }

  private getInboundMessageType(input: OrchestratorInput): MessageType {
    if (input.interactiveValue) {
      return MessageType.INTERACTIVE_REPLY;
    }

    return MessageType.TEXT;
  }

  private async logOutboundOrchestratorResponse(data: {
    sessionId: string;
    userId: string;
    response: OrchestratorResponse;
    triggeredSafeguarding?: boolean;
  }): Promise<void> {
    await this.messagesService.logOutboundMessage({
      sessionId: data.sessionId,
      userId: data.userId,
      messageType: MessageType.TEXT,
      messageText: data.response.message,
      interactiveValue: null,
      triggeredSafeguarding: data.triggeredSafeguarding ?? false,
      rawPayload: {
        options: data.response.options,
        currentState: data.response.currentState,
        source: 'chat-orchestrator',
      },
    });
  }

  private isOnboardingState(state: ChatState): boolean {
    return [
      ChatState.WELCOME,
      ChatState.ASK_LANGUAGE,
      ChatState.ASK_AGE_BAND,
      ChatState.ASK_GENDER,
    ].includes(state);
  }
  private readonly TOPIC_PAGE_SIZE = 8;

  private buildTopicPageMarker(page: number): string {
    return `TOPIC_PAGE_${page}`;
  }

  private parseTopicPageMarker(marker?: string | null): number {
    if (!marker?.startsWith('TOPIC_PAGE_')) {
      return 0;
    }

    const value = Number(marker.replace('TOPIC_PAGE_', ''));
    return Number.isNaN(value) ? 0 : value;
  }

  private readonly SUBTOPIC_PAGE_SIZE = 8;

  private buildSubtopicPageMarker(page: number): string {
    return `SUBTOPIC_PAGE_${page}`;
  }

  private parseSubtopicPageMarker(marker?: string | null): number {
    if (!marker?.startsWith('SUBTOPIC_PAGE_')) {
      return 0;
    }

    const value = Number(marker.replace('SUBTOPIC_PAGE_', ''));
    return Number.isNaN(value) ? 0 : value;
  }

  private async handleSubtopicMenu(data: {
    userId: string;
    sessionId: string;
    categoryCode: string;
    topicCode: string;
    page?: number;
  }): Promise<OrchestratorResponse> {
    const profile = await this.profileService.findByUserId(data.userId);
    const language = profile?.preferredLanguage ?? Language.EN;

    const selectedTopic = await this.contentService.findTopicByCode(
      data.topicCode,
    );

    if (!selectedTopic || !selectedTopic.isActive) {
      if (!data.categoryCode) {
        return this.handleCategoryMenu(data.sessionId, data.userId);
      }

      return this.handleTopicMenu({
        userId: data.userId,
        sessionId: data.sessionId,
        categoryCode: data.categoryCode,
        page: 0,
      });
    }

    const visibleSubtopics =
      await this.contentService.getVisibleSubtopicsByTopicId(selectedTopic.id, {
        ageBand: profile?.ageBand ?? null,
        gender: profile?.gender ?? null,
      });

    const page = data.page ?? 0;
    const startIndex = page * this.SUBTOPIC_PAGE_SIZE;
    const endIndex = startIndex + this.SUBTOPIC_PAGE_SIZE;
    const pagedSubtopics = visibleSubtopics.slice(startIndex, endIndex);
    const hasMore = endIndex < visibleSubtopics.length;

    const options = pagedSubtopics.map((subtopic) => ({
      label: language === Language.SW ? subtopic.titleSw : subtopic.titleEn,
      value: subtopic.code,
    }));

    if (hasMore) {
      options.push({
        label: language === Language.SW ? 'Zaidi' : 'More',
        value: 'more_subtopics',
      });
    }

    if (page > 0) {
      options.push({
        label: language === Language.SW ? 'Mwanzo wa orodha' : 'Back to start',
        value: 'subtopic_page_start',
      });
    }

    await this.sessionService.updateStateAndLocation(data.sessionId, {
      currentState: ChatState.SUBTOPIC_MENU,
      currentCategoryCode: data.categoryCode,
      currentTopicCode: selectedTopic.code,
      currentSubtopicCode: null,
      currentNodeKey: null,
      previousNodeKey: this.buildSubtopicPageMarker(page),
    });

    return {
      message:
        language === Language.SW
          ? `Umechagua ${selectedTopic.titleSw}. Ungependa kujifunza nini zaidi?`
          : `You chose ${selectedTopic.titleEn}. What would you like to learn about next?`,
      options,
      currentState: ChatState.SUBTOPIC_MENU,
    };
  }
}
