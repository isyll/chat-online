import './Sidenav.css';
import { AiOutlineMessage } from 'react-icons/ai';
import { LuMessageCircle } from 'react-icons/lu';
import { FaRegUser } from 'react-icons/fa6';
import { FaRegStar } from "react-icons/fa";
import { FiArchive } from "react-icons/fi";
import Tooltip from '../Tooltip/Tooltip';

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
            <Tooltip
              className="active flex justify-center p-3 m-3"
              message="Discussions"
              placement="right"
              fill="var(--tooltip-bg-color)">
              <LuMessageCircle />
            </Tooltip>
          </li>
          <li>
            <Tooltip
              className="flex justify-center p-3 m-3"
              message="Amis"
              placement="right"
              fill="var(--tooltip-bg-color)">
              <FaRegUser />
            </Tooltip>
          </li>
          <li>
            <Tooltip
              className="flex justify-center p-3 m-3"
              message="Favoris"
              placement="right"
              fill="var(--tooltip-bg-color)">
              <FaRegStar />
            </Tooltip>
          </li>
          <li>
            <Tooltip
              className="flex justify-center p-3 m-3"
              message="Archivés"
              placement="right"
              fill="var(--tooltip-bg-color)">
              <FiArchive />
            </Tooltip>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidenav;
