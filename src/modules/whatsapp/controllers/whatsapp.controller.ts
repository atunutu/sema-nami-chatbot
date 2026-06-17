import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { WhatsAppService } from '../services/whatsapp.service';

@Controller('webhooks/whatsapp')
export class WhatsAppController {
  constructor(private readonly whatsAppService: WhatsAppService) {}

  @Get()
  verifyWebhook(
    @Query('hub.mode') mode?: string,
    @Query('hub.verify_token') verifyToken?: string,
    @Query('hub.challenge') challenge?: string,
  ) {
    return this.whatsAppService.verifyWebhook({
      mode,
      verifyToken,
      challenge,
    });
  }

  @Post()
  @HttpCode(200)
  async receiveWebhook(@Body() payload: Record<string, any>) {
    return await this.whatsAppService.handleWebhook(payload);
  }
}
