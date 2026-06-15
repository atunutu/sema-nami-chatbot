import { Injectable } from '@nestjs/common';
import { AgeBand } from '../../../common/enums/age-band.enum';
import { ChatState } from '../../../common/enums/chat-state.enum';
import { Gender } from '../../../common/enums/gender.enum';
import { Language } from '../../../common/enums/language.enum';
import { ContentService } from '../../../modules/content/services/content.service';
import { ProfileService } from '../../../modules/profile/services/profile.service';
import { SessionService } from '../../../modules/session/services/session.service';
import { UsersService } from '../../../modules/users/services/user.service';

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

  constructor(
    usersService: UsersService,
    profileService: ProfileService,
    sessionService: SessionService,
    contentService: ContentService,
  ) {
    this.usersService = usersService;
    this.profileService = profileService;
    this.sessionService = sessionService;
    this.contentService = contentService;
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

    if (!profile.completedOnboarding) {
      return this.handleOnboardingFlow({
        userId: user.id,
        sessionId: session.id,
        currentState: session.currentState,
        text: normalizedInput.text,
        interactiveValue: normalizedInput.interactiveValue,
      });
    }

    if (session.currentState === ChatState.ASK_TOPIC_CATEGORY) {
      return this.handleCategorySelection({
        userId: user.id,
        sessionId: session.id,
        interactiveValue: normalizedInput.interactiveValue,
      });
    }

    if (session.currentState === ChatState.TOPIC_MENU) {
      return this.handleTopicSelection({
        userId: user.id,
        sessionId: session.id,
        interactiveValue: normalizedInput.interactiveValue,
        currentCategoryCode: session.currentCategoryCode,
      });
    }

    if (session.currentState === ChatState.SUBTOPIC_MENU) {
      return this.handleSubtopicSelection({
        userId: user.id,
        sessionId: session.id,
        interactiveValue: normalizedInput.interactiveValue,
        currentCategoryCode: session.currentCategoryCode,
        currentTopicCode: session.currentTopicCode,
      });
    }

    if (session.currentState === ChatState.CONTENT_NODE) {
      return this.handleContentNodeSelection({
        userId: user.id,
        sessionId: session.id,
        interactiveValue: normalizedInput.interactiveValue,
        currentCategoryCode: session.currentCategoryCode,
        currentTopicCode: session.currentTopicCode,
        currentSubtopicCode: session.currentSubtopicCode,
        currentNodeKey: session.currentNodeKey,
      });
    }

    return this.handleCategoryMenu(session.id, user.id);
  };

  private normalizeInput(input: OrchestratorInput): OrchestratorInput {
    return {
      whatsappPhoneNumber: input.whatsappPhoneNumber,
      text: input.text?.trim() ?? null,
      interactiveValue: input.interactiveValue?.trim() ?? null,
    };
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
            'Welcome to SEMA NAMI. I am here to support you with sexual and reproductive health information. Please choose your language.',
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
          message: 'Please choose your language to continue.',
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
        message: 'Please choose one of the language options below.',
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
  ): Promise<OrchestratorResponse> {
    let categories = await this.contentService.getActiveCategories();

    if (userId) {
      const profile = await this.profileService.findByUserId(userId);

      categories = await this.contentService.getVisibleCategories({
        ageBand: profile?.ageBand ?? null,
        gender: profile?.gender ?? null,
      });
    }

    await this.sessionService.updateStateAndLocation(sessionId, {
      currentState: ChatState.ASK_TOPIC_CATEGORY,
      currentCategoryCode: null,
      currentTopicCode: null,
      currentSubtopicCode: null,
      currentNodeKey: null,
      previousNodeKey: null,
    });

    return {
      message: 'What would you like to learn about today?',
      options: categories.map((category) => ({
        label: category.titleEn,
        value: category.code,
      })),
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

    if (!selectedCategoryCode) {
      return this.handleCategoryMenu(data.sessionId, data.userId);
    }

    const selectedCategory =
      await this.contentService.findCategoryByCode(selectedCategoryCode);

    if (!selectedCategory || !selectedCategory.isActive) {
      const visibleCategories = await this.contentService.getVisibleCategories({
        ageBand: profile?.ageBand ?? null,
        gender: profile?.gender ?? null,
      });

      return {
        message: 'Please choose one of the available topic areas below.',
        options: visibleCategories.map((category) => ({
          label: category.titleEn,
          value: category.code,
        })),
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

    await this.sessionService.updateStateAndLocation(data.sessionId, {
      currentState: ChatState.TOPIC_MENU,
      currentCategoryCode: selectedCategory.code,
      currentTopicCode: null,
      currentSubtopicCode: null,
      currentNodeKey: null,
      previousNodeKey: null,
    });

    return {
      message: `You chose ${selectedCategory.titleEn}. What would you like to explore next?`,
      options: visibleTopics.map((topic) => ({
        label: topic.titleEn,
        value: topic.code,
      })),
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

    const visibleSubtopics =
      await this.contentService.getVisibleSubtopicsByTopicId(selectedTopic.id, {
        ageBand: profile?.ageBand ?? null,
        gender: profile?.gender ?? null,
      });

    await this.sessionService.updateStateAndLocation(data.sessionId, {
      currentState: ChatState.SUBTOPIC_MENU,
      currentCategoryCode: data.currentCategoryCode ?? null,
      currentTopicCode: selectedTopic.code,
      currentSubtopicCode: null,
      currentNodeKey: null,
      previousNodeKey: null,
    });

    return {
      message: `You chose ${selectedTopic.titleEn}. What would you like to learn about next?`,
      options: visibleSubtopics.map((subtopic) => ({
        label: subtopic.titleEn,
        value: subtopic.code,
      })),
      currentState: ChatState.SUBTOPIC_MENU,
    };
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
}
