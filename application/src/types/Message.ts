import { Attachment } from './Attachment';

export interface Message {
  messageId: string;
  userId: string;
  content: string | null;
  attachments: Attachment[];
  timestamp: string;
}
