export type WhatsAppInboundJob = {
  whatsappPhoneNumber: string;
  providerMessageId: string;
  text: string | null;
  interactiveValue: string | null;
  rawPayload: Record<string, unknown> | null;
};
