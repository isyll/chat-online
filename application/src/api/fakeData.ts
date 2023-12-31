import { AttachmentType } from "../types/Attachment";
import { Message } from "../types/Message";

export const avatarUrl =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const fakeChats: Message[] = [
  {
    messageId: '12345',
    userId: 'user123',
    content: 'Salut, comment ça va ?',
    timestamp: '2023-01-01T12:34:56',
    attachments: [
      {
        type: AttachmentType.Image,
        url: 'https://example.com/image.jpg',
      },
    ],
  },
];
