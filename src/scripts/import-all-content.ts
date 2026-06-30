import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ContentImportService } from '../modules/content/services/content-import.service';

import { pubertyAdolescentDevelopmentSeed } from '../modules/content/seeds/pubert-adolescent-development.seed';
import { menstruationSeed } from '../modules/content/seeds/menstruation.seed';
import { sexualReproductiveHealthSeed } from '../modules/content/seeds/sexual-reproductive-health.seed';
import { relationshipsConsentLifeSkillsSeed } from '../modules/content/seeds/relationships-consent-life-skills.seed';
import { genderEqualityAndRightsSeed } from '../modules/content/seeds/gender-equality.seed';
import { digitalSafetyAndMentalWellbeingSeed } from '../modules/content/seeds/digital-safety.seed';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  console.time('import-all-content');

  try {
    const contentImportService = app.get(ContentImportService);

    const sections = [
      {
        name: 'Puberty',
        seed: pubertyAdolescentDevelopmentSeed,
      },
      {
        name: 'Menstruation',
        seed: menstruationSeed,
      },
      {
        name: 'Sexual and Reproductive Health',
        seed: sexualReproductiveHealthSeed,
      },
      {
        name: 'Relationships and Consent',
        seed: relationshipsConsentLifeSkillsSeed,
      },
      {
        name: 'Gender Equality',
        seed: genderEqualityAndRightsSeed,
      },
      {
        name: 'Digital Safety',
        seed: digitalSafetyAndMentalWellbeingSeed,
      },
    ];

    for (const section of sections) {
      console.log(`\n🚀 Importing ${section.name}...`);
      console.time(`import-${section.name}`);

      await contentImportService.importSection(section.seed);

      console.timeEnd(`import-${section.name}`);
      console.log(`✅ ${section.name} imported successfully.`);
    }

    console.log('\n✅ All content imported successfully.');
  } catch (error) {
    console.error('\n❌ Content import failed.', error);
    process.exitCode = 1;
  } finally {
    console.timeEnd('import-all-content');
    await app.close();
  }
}

void run();
