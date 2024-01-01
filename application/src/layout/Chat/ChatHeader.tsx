import { useContext } from 'react';
import Avatar from '../../components/Avatar';
import { ChatParamsContext } from '../../contexts/ChatParamsContext';
import defaultAvatar from '../../assets/defaultAvatar.ico';
import { FaEllipsisH } from 'react-icons/fa';

function ChatHeader() {
  const chatContext = useContext(ChatParamsContext);

  return (
    <header className="border-b border-secondary px-6 py-4 flex justify-between">
      <div className="flex gap-3">
        <Avatar
          src={
            chatContext.selectedChat
              ? chatContext.selectedChat.userAvatarUrl
              : defaultAvatar
          }
        />
        <div className="flex flex-col">
          <strong>{chatContext.selectedChat?.userName}</strong>
          <small className="text-success italic">en train d'écrire&hellip;</small>
        </div>
      </div>
      <div className="relative pr-16">
        <button className="peer border border-secondary rounded-lg p-3 ease-out duration-150 focus:shadow-btn">
          <FaEllipsisH />
        </button>
        <ul className="hidden absolute list-none bg-secondary w-24 shadow-md rounded-sm peer-focus:block transition-all ease-out duration-300">
          <li className="cursor-pointer px-3 py-2 hover:bg-light">Archiver</li>
          <li className="cursor-pointer px-3 py-2 hover:bg-light">Supprimer</li>
          <li className="my-2"></li>
          <li className="cursor-pointer px-3 py-2 hover:bg-light text-danger">Bloquer</li>
        </ul>
      </div>
    </header>
  );
}

export default ChatHeader;
