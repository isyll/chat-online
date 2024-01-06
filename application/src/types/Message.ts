import { Attachment } from './Attachment';

export interface Message {
  messageId: string;
  userId: string;
  userName: string;
  userAvatarUrl: string;
  content: string | null;
  attachments: Attachment[];
  timestamp: string;
  incoming: boolean;
}
