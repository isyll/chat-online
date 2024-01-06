import { createContext } from 'react';
import UserData from '../types/UserData';

export const UserContext = createContext<UserData>({
  userId: '',
  avatar: '',
  email: '',
  name: '',
});
