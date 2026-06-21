import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  getHealth() {
    return {
      status: 'ok',
      mode: process.env.APP_MODE ?? 'web',
      timestamp: new Date().toISOString(),
    };
  }
}
