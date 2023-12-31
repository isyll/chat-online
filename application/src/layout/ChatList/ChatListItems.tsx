import { useContext } from 'react';
import ChatItem from '../../components/ChatItem';
import { avatarUrl } from '../../api/fakeData';
import ChatItemLoader from '../../components/ChatItemLoader';
import { chatParamsContext } from '../../contexts/chatParamsContext';

function ChatListItems() {
  const chatContext = useContext(chatParamsContext);

  return (
    <div className="overflow-y-scroll outline-none flex flex-col flex-1">
      <ul>
        {chatContext.isLoading
          ? Array.from<number>({ length: 6 }).map(() => (
              <ChatItemLoader key={Math.random()} />
            ))
          : chatContext.messages.map((msg, i) => (
              <ChatItem
                current={chatContext.selectedChat?.messageId === msg.messageId}
                messageId={msg.messageId}
                onClick={(id) =>
                  chatContext.onSelectChat(
                    chatContext.messages.find((m) => m.messageId === id)!
                  )
                }
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
