import { createContext } from 'react';
import { Message } from '../types/Message';
import { Tab } from '../types/Tab';

interface ChatParams {
  isLoading: boolean;
  messages: Message[];
  selectedChat?: Message;
  currentTab: Tab;
  onSelectChat: (msg: Message) => void;
}

export const chatParamsContext = createContext<ChatParams>({
  isLoading: false,
  messages: [],
  selectedChat: undefined,
  currentTab: Tab.chats,
  onSelectChat: () => null,
});
