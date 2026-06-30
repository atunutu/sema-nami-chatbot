import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ContentService } from '../modules/content/services/content.service';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const contentService = app.get(ContentService);
    console.log('✅ Content cache version bump started.');
    await contentService.clearAllContentCache();
    console.log('✅ Content cache version bumped successfully.');
  } catch (error) {
    console.error('❌ Failed to bump content cache version.', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

void run();
