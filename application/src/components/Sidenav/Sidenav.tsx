import './Sidenav.css';
import { AiOutlineMessage } from 'react-icons/ai';
import { LuMessageCircle } from 'react-icons/lu';

function Sidenav() {
  return (
    <nav className="navigation">
      <div className="nav-group">
        <ul className="flex flex-col">
          <li>
            <a href="/" className="logo flex justify-center p-3">
              <AiOutlineMessage />
            </a>
          </li>
          <li>
            <a href="/" className="active flex justify-center p-5 m-3 relative">
              <LuMessageCircle />
              <div className="text-sm rounded p-2 absolute right-0 mt-2">
                tooltip defa
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidenav;
