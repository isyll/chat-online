import { FiPlusCircle } from 'react-icons/fi';
import { MdOutlinePeopleAlt } from 'react-icons/md';

function ChatListHeader() {
  return (
    <header className="flex justify-between items-center px-6 h-80">
      <strong>Discussions</strong>
      <ul>
        <li className="inline-block list-none">
          <a className="inline-block hover:scale-110 active:scale-90 ease-out duration-150 text-lg rounded-md text-white cursor-pointer p-2 border border-secondary m-2">
            <MdOutlinePeopleAlt />
          </a>
        </li>
        <li className="inline-block list-none">
          <a className="inline-block hover:scale-110 active:scale-90 ease-out duration-150 text-lg rounded-md text-white cursor-pointer p-2 border border-secondary m-2">
            <FiPlusCircle />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default ChatListHeader;
