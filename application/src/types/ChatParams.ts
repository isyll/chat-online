import { Message } from './Message';
import { Tab } from './Tab';

export default interface ChatParams {
  isLoading: boolean;
  chats: Message[];
  selectedChat?: Message;
  currentTab: Tab;
  onSelectChat: (msg: Message) => void;
  newMessageSent: (content: string) => void;
}
