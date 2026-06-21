import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ContentImportService } from 'src/modules/content/services/content-import.service';
import { genderEqualityAndRightsSeed } from 'src/modules/content/seeds/gender-equality.seed';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const contentImportService = app.get(ContentImportService);

    await contentImportService.importSection(genderEqualityAndRightsSeed);

    console.log('✅ Gender equality and rights content imported successfully.');
  } catch (error) {
    console.error('❌ Content import failed.', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

run();
