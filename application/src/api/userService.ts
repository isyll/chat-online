import UserData from '../types/UserData';
import { userData } from './fakeData';

export function getUserData() {
  return new Promise<UserData>((resolve, reject) => {
    if (userData) {
      resolve(userData);
    } else {
      reject('Erreur');
    }
  });
}
