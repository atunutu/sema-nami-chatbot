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

    console.log('usersService injected?', !!this.usersService);
    console.log('profileService injected?', !!this.profileService);
    console.log('sessionService injected?', !!this.sessionService);
    console.log('contentService injected?', !!this.contentService);
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

    return this.handleCategoryMenu(session.id);
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
        return this.handleCategoryMenu(data.sessionId);

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

    return this.handleCategoryMenu(data.sessionId);
  }

  private async handleCategoryMenu(
    sessionId: string,
  ): Promise<OrchestratorResponse> {
    await this.sessionService.updateStateAndLocation(sessionId, {
      currentState: ChatState.ASK_TOPIC_CATEGORY,
      currentCategoryCode: null,
      currentTopicCode: null,
      currentSubtopicCode: null,
      currentNodeKey: null,
      previousNodeKey: null,
    });

    const categories = await this.contentService.getActiveCategories();

    return {
      message: 'What would you like to learn about today?',
      options: categories.map((category) => ({
        label: category.titleEn,
        value: category.code,
      })),
      currentState: ChatState.ASK_TOPIC_CATEGORY,
    };
  }
}
