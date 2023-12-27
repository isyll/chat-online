import { useState } from 'react';
import { getMesssages } from '../../api/chatService';
import { Message } from '../../types/Message';

function ChatListItems() {
  const [messages, setMessages] = useState<Message[]>([]);

  getMesssages().then((res) => {
    setMessages(res);
  });
  return <ul></ul>;
}

export default ChatListItems;
