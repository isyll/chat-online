import { Message } from '../types/Message';
import { fakeChats } from './fakeData';

export function getChats() {
  return new Promise<Message[]>((resolve, reject) => {
    if (fakeChats.length === 0) reject('Erreur');
    return resolve(fakeChats);
  });
}

export function getMessagesByUserId(userId: string) {
  const messages = fakeChats.filter((msg) => msg.userId === userId);
  return new Promise<Message[]>((resolve, reject) => {
    if (messages.length === 0) reject('Erreur');
    return resolve(messages);
  });
}
