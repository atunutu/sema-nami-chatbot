/* eslint-disable @typescript-eslint/no-floating-promises */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const appMode = process.env.APP_MODE ?? 'web';

  if (appMode === 'worker') {
    logger.log('Starting application in WORKER mode');
    await NestFactory.createApplicationContext(AppModule);
    logger.log('Worker application context initialized');
    return;
  }

  logger.log('Starting application in WEB mode');
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 8080);
  logger.log(`Web application listening on port ${process.env.PORT ?? 8080}`);
}

bootstrap();
