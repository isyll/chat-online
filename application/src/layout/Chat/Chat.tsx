import { Message } from '../../types/Message';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import ChatHeader from './ChatHeader';

function Chat({ messages }: { messages: Message[] }) {
  return (
    <div className="flex flex-col shrink grow">
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatFooter />
    </div>
  );
}

export default Chat;
