import { LuSend } from 'react-icons/lu';
import { IoMdAttach } from 'react-icons/io';
import ShadowButton from '../../components/ShadowButton';
import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import { ChatContext } from '../../contexts/ChatContext';

function ChatFooter() {
  const chatContext = useContext(ChatContext);
  const [content, setContent] = useState<string>('');
  const handleContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const handleSend = () => {
    const value = content.trim();
    if (value.length > 0) {
      setContent('');
      chatContext.newMessageSent(value);
    }
  };

  return (
    <div className="flex gap-3 items-start justify-center border-t border-secondary p-2 h-20 mb-5">
      <input
        value={content}
        onChange={handleContent}
        onKeyDown={handleKeyPress}
        type="text"
        className="bg-primary border border-grey rounded-md px-3 inline-block w-480 h-10 outline-none focus:border-blue focus:border"
      />
      <ShadowButton className="text-xl px-4 rounded-md inline-block h-10 border border-grey">
        <IoMdAttach />
      </ShadowButton>
      <ShadowButton
        className="text-lg bg-blue px-4 inline-block h-10"
        onClick={handleSend}>
        <LuSend />
      </ShadowButton>
    </div>
  );
}

export default ChatFooter;
