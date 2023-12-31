import { FiPlusCircle } from 'react-icons/fi';
import { MdOutlinePeopleAlt } from 'react-icons/md';

function ChatListHeader() {
  return (
    <header className="flex justify-between items-center px-6">
      <strong>Discussions</strong>
      <ul>
        <li className="inline-block">
          <a className="inline-block hover:scale-110 active:scale-90 ease-out duration-150 text-lg">
            <MdOutlinePeopleAlt />
          </a>
        </li>
        <li className="inline-block">
          <a className="inline-block hover:scale-110 active:scale-90 ease-out duration-150 text-lg">
            <FiPlusCircle />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default ChatListHeader;
