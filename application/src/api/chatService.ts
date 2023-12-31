import { Message } from '../types/Message';
import { fakeChats } from './fakeData';

export function getMesssages() {
  return new Promise<Message[]>((resolve, reject) => {
    if (fakeChats.length === 0) reject('Erreur');
    return resolve(fakeChats);
  });
}
