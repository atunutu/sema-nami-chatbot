import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ContentImportService } from 'src/modules/content/services/content-import.service';
import { menstruationSeed } from 'src/modules/content/seeds/menstruation.seed';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const contentImportService = app.get(ContentImportService);
    await contentImportService.importSection(menstruationSeed);
    console.log('✅ Menstruation content imported successfully.');
  } catch (error) {
    console.error('❌ Menstruation content import failed.', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

void run();
