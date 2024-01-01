import { useContext } from 'react';
import ChatItem from '../../components/ChatItem';
import ChatItemLoader from '../../components/ChatItemLoader';
import { ChatParamsContext } from '../../contexts/ChatParamsContext';

function ChatListItems() {
  const chatContext = useContext(ChatParamsContext);

  return (
    <div className="overflow-y-scroll outline-none flex flex-col flex-1">
      <ul>
        {chatContext.isLoading
          ? Array.from<number>({ length: 6 }).map(() => (
              <ChatItemLoader key={Math.random()} />
            ))
          : chatContext.chats.map((msg, i) => (
              <ChatItem
                current={chatContext.selectedChat?.messageId === msg.messageId}
                messageId={msg.messageId}
                onClick={(id) =>
                  chatContext.onSelectChat(
                    chatContext.chats.find((m) => m.messageId === id)!
                  )
                }
                key={i}
                name={msg.userName}
                message={msg.content || ''}
                avatar={msg.userAvatarUrl}
                date={new Date(msg.timestamp)}
              />
            ))}
      </ul>
    </div>
  );
}

export default ChatListItems;
