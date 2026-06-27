export type WhatsAppSendStatus =
  | 'sent'
  | 'timeout_uncertain'
  | 'failed'
  | 'skipped';

export type WhatsAppSendPartType = 'image' | 'text' | 'buttons' | 'list';

export type WhatsAppSendPartResult = {
  partType: WhatsAppSendPartType;
  status: WhatsAppSendStatus;
  providerMessageId: string | null;
  errorMessage: string | null;
};

export type WhatsAppSendResult = {
  overallStatus: 'sent' | 'timeout_uncertain' | 'failed' | 'partial_failure';
  parts: WhatsAppSendPartResult[];
};
