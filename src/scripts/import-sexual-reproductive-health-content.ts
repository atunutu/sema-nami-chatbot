import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ContentImportService } from 'src/modules/content/services/content-import.service';
import { sexualReproductiveHealthSeed } from 'src/modules/content/seeds/sexual-reproductive-health.seed';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  console.log('🚀 Starting Sexual and Reproductive Health import...');
  console.time('sexual-reproductive-health-import');

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
    console.timeEnd('sexual-reproductive-health-import');
    await app.close();
  }
}

void run();
