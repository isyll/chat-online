import { GoPeople } from 'react-icons/go';
import { FiPlusCircle } from 'react-icons/fi';

function ChatList() {
  return (
    <div>
      <header className="flex justify-between items-center px-6">
        <strong>Discussions</strong>
        <ul>
          <li className="inline-block">
            <a className="inline-block hover:scale-110 active:scale-90 ease-out duration-150">
              <GoPeople />
            </a>
          </li>
          <li className="inline-block">
            <a className="inline-block hover:scale-110 active:scale-90 ease-out duration-150">
              <FiPlusCircle />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default ChatList;
