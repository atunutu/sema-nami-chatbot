import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { AgeBand } from '../common/enums/age-band.enum';
import { Gender } from '../common/enums/gender.enum';
import { Language } from '../common/enums/language.enum';
import { ProfileService } from '../modules/profile/services/profile.service';
import { UsersService } from '../modules/users/services/user.service';
import { SessionService } from '../modules/session/services/session.service';
import { ChatState } from '../common/enums/chat-state.enum';
import { MessagesService } from '../modules/messages/services/messages.service';
import { MessageType } from '../common/enums/message-type.enum';
import { ContentService } from 'src/modules/content/services/content.service';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const usersService = app.get(UsersService);
  const profileService = app.get(ProfileService);

  const user =
    await usersService.findOrCreateByWhatsAppPhoneNumber('255700000001');

  console.log('User:', user);

  const profile = await profileService.findOrCreateByUserId(user.id);
  console.log('Profile created/found:', profile);

  console.log(
    'Language updated:',
    await profileService.updateLanguage(user.id, Language.EN),
  );

  console.log(
    'Age band updated:',
    await profileService.updateAgeBand(user.id, AgeBand.AGE_15_17),
  );

  console.log(
    'Gender updated:',
    await profileService.updateGender(user.id, Gender.FEMALE),
  );

  console.log(
    'Onboarding completed:',
    await profileService.completeOnboarding(user.id),
  );
  const sessionService = app.get(SessionService);

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

  const completedSession = await sessionService.completeSession(session.id);
  console.log('Completed session:', completedSession);

  const messagesService = app.get(MessagesService);

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

  const contentService = app.get(ContentService);

  await contentService.createCategory({
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

  await contentService.createCategory({
    code: 'RELATIONSHIPS_CONSENT',
    titleEn: 'Relationships and Consent',
    titleSw: 'Mahusiano na Ridhaa',
    descriptionEn:
      'Learn about healthy relationships, boundaries, and consent.',
    descriptionSw: 'Jifunze kuhusu mahusiano yenye afya, mipaka, na ridhaa.',
    audienceGender: null,
    ageBandRule: null,
    sortOrder: 2,
  });

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

  await app.close();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
