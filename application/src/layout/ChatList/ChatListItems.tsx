import { useEffect, useState } from 'react';
import { getMesssages } from '../../api/chatService';
import { Message } from '../../types/Message';
import ChatItem from '../../components/ChatItem/ChatItem';
import { avatarUrl } from '../../api/fakeData';
import ChatItemLoader from '../../components/ChatItemLoader/ChatItemLoader';

function ChatListItems() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMesssages().then((res) => {
      setTimeout(() => {
        setMessages(res);
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <div className="overflow-y-scroll outline-none flex flex-col flex-1">
      <ul>
        {isLoading
          ? Array.from<number>({ length: 6 }).map(() => (
              <ChatItemLoader key={Math.random()} />
            ))
          : messages.map((msg, i) => (
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
