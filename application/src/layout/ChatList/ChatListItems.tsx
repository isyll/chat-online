import { useState } from 'react';
import { getMesssages } from '../../api/chatService';
import { Message } from '../../types/Message';
import ChatItem from '../../components/ChatItem/ChatItem';
import { avatarUrl } from '../../api/fakeData';

function ChatListItems() {
  const [messages, setMessages] = useState<Message[]>([]);

  getMesssages().then((res) => {
    setMessages(res);
  });
  return (
    <div className="overflow-y-scroll outline-none flex flex-col flex-1">
      <ul>
        {messages.map((msg, i) => (
          <ChatItem
            key={i}
            name="Jonh Doe"
            message={msg.content || ''}
            avatar={avatarUrl}
            date={new Date(msg.timestamp)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ChatListItems;
