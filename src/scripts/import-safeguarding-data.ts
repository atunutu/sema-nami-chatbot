import { NestFactory } from '@nestjs/core';
import { DataSource, Repository } from 'typeorm';
import { AppModule } from '../app.module';
import { Language } from '../common/enums/language.enum';
import { TriggerCategory } from '../common/enums/trigger-category.enum';
import { SafeguardingResponse } from '../modules/safeguarding/entities/safeguarding-response.entity';
import { SafeguardingTrigger } from '../modules/safeguarding/entities/safeguarding-trigger.entity';

const crisisMessageEn = `If you need health information, HIV testing, family planning services, pregnancy-related care, mental health support, protection from violence, or help with abuse, you do not have to face it alone. You can visit the nearest hospital, health centre, dispensary, or youth-friendly health service for confidential support and guidance. You may also speak to a trusted parent, guardian, teacher, counselor, social welfare officer, religious leader, or healthcare provider.

If you are experiencing violence, abuse, exploitation, neglect, forced marriage, sexual harassment, or any situation that makes you feel unsafe, seek help immediately from a trusted adult or the relevant authorities.

For additional support, guidance, or referrals, you can contact OVAH through:
Phone/WhatsApp: 0652 522 358`;

const crisisMessageSw = `Ikiwa unahitaji taarifa za afya, huduma za upimaji wa VVU, uzazi wa mpango, huduma zinazohusiana na ujauzito, msaada wa afya ya akili, ulinzi dhidi ya ukatili, au msaada kuhusu unyanyasaji, usibaki peke yako. Unaweza kutembelea hospitali, kituo cha afya, zahanati, au huduma rafiki kwa vijana zilizopo karibu nawe kwa ushauri na huduma za siri na salama. Unaweza pia kuzungumza na mzazi, mlezi, mwalimu, mshauri, afisa ustawi wa jamii, kiongozi wa dini, au mtoa huduma za afya unayemwamini.

Ikiwa unapitia ukatili, unyanyasaji, unyonyaji, kutelekezwa, ndoa ya utotoni, ukatili wa kingono, au hali yoyote inayokufanya ujisikie kutokuwa salama, tafuta msaada mara moja kutoka kwa mtu mzima unayemwamini au mamlaka husika.

Kwa msaada zaidi, ushauri au maelekezo ya huduma zinazopatikana, unaweza kuwasiliana na OVAH kupitia:
Simu/WhatsApp: 0652 522 358`;

/**
 * IMPORTANT:
 * Use existing TriggerCategory enum values here.
 * Right now this script assumes you want to attach the long OVAH crisis message
 * to the existing "abuse" category.
 *
 * If later you add a cleaner dedicated enum value like "general_crisis_support",
 * replace this with that category instead.
 */
const TARGET_CATEGORY = 'abuse' as TriggerCategory;

const triggerPhrasesEn = [
  'abuse',
  'abused',
  'rape',
  'raped',
  'forced',
  'violence',
  'violent',
  'unsafe',
  'harassment',
  'sexual harassment',
  'forced marriage',
  'exploitation',
  'neglect',
];

const triggerPhrasesSw = [
  'unyanyasaji',
  'kubakwa',
  'ubakaji',
  'ukatili',
  'lazimisha',
  'lazimishwa',
  'amenilazimisha',
  'siko salama',
  'sijisikii salama',
  'unyonyaji',
  'kutelekezwa',
  'ndoa ya kulazimishwa',
  'ndoa ya utotoni',
];

async function upsertResponse(
  repo: Repository<SafeguardingResponse>,
  data: {
    triggerCategory: TriggerCategory;
    language: Language;
    responseText: string;
  },
) {
  const existing = await repo.findOne({
    where: {
      triggerCategory: data.triggerCategory,
      language: data.language,
    },
  });

  if (!existing) {
    const created = repo.create({
      triggerCategory: data.triggerCategory,
      language: data.language,
      responseText: data.responseText,
      showReferrals: true,
      allowReturnToMenu: true,
      isActive: true,
    });

    await repo.save(created);
    return;
  }

  existing.responseText = data.responseText;
  existing.showReferrals = true;
  existing.allowReturnToMenu = true;
  existing.isActive = true;

  await repo.save(existing);
}

async function upsertTrigger(
  repo: Repository<SafeguardingTrigger>,
  data: {
    triggerCategory: TriggerCategory;
    language: Language;
    phrase: string;
  },
) {
  const existing = await repo.findOne({
    where: {
      triggerCategory: data.triggerCategory,
      language: data.language,
      phrase: data.phrase,
    },
  });

  if (!existing) {
    const created = repo.create({
      triggerCategory: data.triggerCategory,
      language: data.language,
      phrase: data.phrase,
      isActive: true,
    });

    await repo.save(created);
    return;
  }

  existing.isActive = true;
  await repo.save(existing);
}

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const dataSource = app.get(DataSource);

    const safeguardingResponseRepo =
      dataSource.getRepository(SafeguardingResponse);
    const safeguardingTriggerRepo =
      dataSource.getRepository(SafeguardingTrigger);

    await upsertResponse(safeguardingResponseRepo, {
      triggerCategory: TARGET_CATEGORY,
      language: Language.EN,
      responseText: crisisMessageEn,
    });

    await upsertResponse(safeguardingResponseRepo, {
      triggerCategory: TARGET_CATEGORY,
      language: Language.SW,
      responseText: crisisMessageSw,
    });

    for (const phrase of triggerPhrasesEn) {
      await upsertTrigger(safeguardingTriggerRepo, {
        triggerCategory: TARGET_CATEGORY,
        language: Language.EN,
        phrase,
      });
    }

    for (const phrase of triggerPhrasesSw) {
      await upsertTrigger(safeguardingTriggerRepo, {
        triggerCategory: TARGET_CATEGORY,
        language: Language.SW,
        phrase,
      });
    }

    console.log('✅ Safeguarding data imported successfully.');
  } catch (error) {
    console.error('❌ Safeguarding data import failed.', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

run();
