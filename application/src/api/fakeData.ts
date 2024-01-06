import { AttachmentType } from '../types/Attachment';
import { Message } from '../types/Message';
import UserData from '../types/UserData';

export const avatarUrl =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const fakeChats: Message[] = [
  {
    messageId: '12349',
    userId: 'user123',
    userAvatarUrl: avatarUrl,
    userName: 'Habib sow',
    content: 'merci',
    timestamp: '2023-01-01T12:36:56',
    incoming: false,
    attachments: [],
  },
  {
    messageId: '12350',
    userId: 'user124',
    userAvatarUrl: avatarUrl,
    userName: 'Bernard gaye',
    incoming: false,
    content: 'je tai pas vu samedi',
    timestamp: '2023-01-01T12:39:56',
    attachments: [],
  },
  {
    messageId: '12351',
    userId: 'user125',
    userAvatarUrl: avatarUrl,
    userName: 'Safi faye',
    content: 'cava bien',
    incoming: false,
    timestamp: '2023-01-01T12:34:56',
    attachments: [],
  },
  {
    messageId: '12352',
    userId: 'user126',
    userAvatarUrl: avatarUrl,
    userName: 'Lamine samb',
    content: 'quelle nouvelle?',
    incoming: false,
    timestamp: '2023-01-01T12:37:56',
    attachments: [],
  },
  {
    messageId: '12353',
    userId: 'user127',
    userAvatarUrl: avatarUrl,
    userName: 'Assane diouf',
    content: 'rien',
    timestamp: '2023-01-01T12:38:56',
    incoming: true,
    attachments: [],
  },
];

export const fakeMessages: { [key: string]: Message[] } = {
  user123: [
    {
      messageId: '12349',
      userId: 'user123',
      userAvatarUrl: avatarUrl,
      userName: 'Habib sow',
      content: 'merci',
      timestamp: '2023-01-01T12:36:56',
      incoming: false,
      attachments: [],
    },
    {
      messageId: '12349',
      userId: 'user123',
      userAvatarUrl: avatarUrl,
      userName: 'Habib sow',
      content: 'je tenvoie ma photo',
      timestamp: '2023-01-01T12:34:56',
      incoming: true,
      attachments: [
        {
          type: AttachmentType.Image,
          url: avatarUrl,
        },
      ],
    },
  ],
  user124: [
    {
      messageId: '12350',
      userId: 'user124',
      userAvatarUrl: avatarUrl,
      userName: 'Bernard gaye',
      incoming: false,
      content: 'je tai pas vu samedi',
      timestamp: '2023-01-01T12:39:56',
      attachments: [],
    },
    {
      messageId: '12350',
      userId: 'user124',
      userAvatarUrl: avatarUrl,
      userName: 'Bernard gaye',
      incoming: false,
      content: 'Salut, comment ça va ?',
      timestamp: '2023-01-01T12:34:56',
      attachments: [],
    },
  ],
  user125: [
    {
      messageId: '12351',
      userId: 'user125',
      userAvatarUrl: avatarUrl,
      userName: 'Safi faye',
      content: 'Salut, comment ça va ?',
      incoming: true,
      timestamp: '2023-01-01T12:24:56',
      attachments: [],
    },
    {
      messageId: '12351',
      userId: 'user125',
      userAvatarUrl: avatarUrl,
      userName: 'Safi faye',
      content: 'cava bien',
      incoming: false,
      timestamp: '2023-01-01T12:34:56',
      attachments: [],
    },
  ],
  user126: [
    {
      messageId: '12352',
      userId: 'user126',
      userAvatarUrl: avatarUrl,
      userName: 'Lamine samb',
      content: 'jai une nouvelle',
      incoming: true,
      timestamp: '2023-01-01T12:34:56',
      attachments: [],
    },
    {
      messageId: '12352',
      userId: 'user126',
      userAvatarUrl: avatarUrl,
      userName: 'Lamine samb',
      content: 'quelle nouvelle?',
      incoming: false,
      timestamp: '2023-01-01T12:37:56',
      attachments: [],
    },
  ],
  user127: [
    {
      messageId: '12353',
      userId: 'user127',
      userAvatarUrl: avatarUrl,
      userName: 'Assane diouf',
      content: 'tu fais quoi?',
      timestamp: '2023-01-01T12:34:56',
      incoming: false,
      attachments: [],
    },
    {
      messageId: '12353',
      userId: 'user127',
      userAvatarUrl: avatarUrl,
      userName: 'Assane diouf',
      content: 'rien',
      timestamp: '2023-01-01T12:38:56',
      incoming: true,
      attachments: [],
    },
  ],
};

export const userData: UserData = {
  name: 'Assane diop',
  email: 'a.diop@gmail.com',
  userId: 'user345',
  avatar:
    'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
};
