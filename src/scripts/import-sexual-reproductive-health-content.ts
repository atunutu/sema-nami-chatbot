import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ContentImportService } from 'src/modules/content/services/content-import.service';
import { sexualReproductiveHealthSeed } from 'src/modules/content/seeds/sexual-reproductive-health.seed';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const contentImportService = app.get(ContentImportService);

    await contentImportService.importSection(sexualReproductiveHealthSeed);

    console.log(
      '✅ Sexual and Reproductive Health content imported successfully.',
    );
  } catch (error) {
    console.error('❌ Content import failed.', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

run();
