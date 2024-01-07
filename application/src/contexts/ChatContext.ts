import { createContext } from 'react';
import { Tab } from '../types/Tab';
import ChatParams from '../types/ChatParams';

export const ChatContext = createContext<ChatParams>({
  isLoading: false,
  chats: [],
  selectedChat: undefined,
  currentTab: Tab.chats,
  onSelectChat: () => null,
  newMessageSent: () => null,
});
