import { useContext } from 'react';
import Avatar from '../../components/Avatar';
import { ChatParamsContext } from '../../contexts/ChatParamsContext';

function ChatHeader() {
  const chatContext = useContext(ChatParamsContext);

  return (
    <div className="border-b border-secondary px-6 py-4 flex justify-between">
      <Avatar src={chatContext.selectedChat?.userAvatarUrl!} />
    </div>
  );
}

export default ChatHeader;
