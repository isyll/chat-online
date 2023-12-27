import { AttachmentType } from '../types/Attachment';
import { Message } from '../types/Message';

const fakeChats: Message[] = [
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

export function getMesssages() {
  return new Promise<Message[]>((resolve, reject) => {
    if (fakeChats.length === 0) reject('Erreur');
    return resolve(fakeChats);
  });
}
