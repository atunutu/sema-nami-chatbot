import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ContentImportService } from 'src/modules/content/services/content-import.service';
import { relationshipsConsentLifeSkillsSeed } from 'src/modules/content/seeds/relationships-consent-life-skills.seed';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const contentImportService = app.get(ContentImportService);
    await contentImportService.importSection(
      relationshipsConsentLifeSkillsSeed,
    );
    console.log(
      '✅ Relationship Consent and Lifeskill content imported successfully.',
    );
  } catch (error) {
    console.error('❌ Menstruation content import failed.', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

run();
