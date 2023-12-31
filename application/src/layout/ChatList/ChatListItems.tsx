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
  );
}

export default ChatListItems;
