import { Message } from '../types/Message';
import { filterMessagesByDate } from '../utils/filterMessagesByDate';
import { fakeChats, fakeMessages } from './fakeData';

export function getChats() {
  return new Promise<Message[]>((resolve, reject) => {
    if (fakeChats.length === 0) reject('Aucune discussion trouvée');
    else resolve(fakeChats);
  });
}

export function getMessagesByUserId(userId: string) {
  const messages = userId in fakeMessages ? fakeMessages[userId] : undefined;
  return new Promise<Message[]>((resolve, reject) => {
    if (!messages) reject('Aucun message pour cet utilisateur');
    else resolve(filterMessagesByDate(messages, 'asc'));
  });
}
