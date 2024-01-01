import { createContext } from 'react';
import { Message } from '../types/Message';
import { Tab } from '../types/Tab';

interface ChatParams {
  isLoading: boolean;
  chats: Message[];
  selectedChat?: Message;
  currentTab: Tab;
  onSelectChat: (msg: Message) => void;
}

export const ChatParamsContext = createContext<ChatParams>({
  isLoading: false,
  chats: [],
  selectedChat: undefined,
  currentTab: Tab.chats,
  onSelectChat: () => null,
});
