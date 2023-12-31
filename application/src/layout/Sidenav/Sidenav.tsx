import './Sidenav.css';
import { AiOutlineMessage } from 'react-icons/ai';
import { LuMessageCircle } from 'react-icons/lu';
import { FaRegUser } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import NavItem from '../../components/NavItem/NavItem';

export enum Tab {
  chats,
  friends,
  favorites,
  archived,
}

function Sidenav({
  onSelectTab,
  currentTab,
}: {
  onSelectTab: (tab: Tab) => void;
  currentTab: Tab;
}) {
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
            <NavItem
              className={
                'flex justify-center p-3 m-3 ' +
                (currentTab === Tab.chats ? ' active' : '')
              }
              message="Discussions"
              fill="var(--tooltip-bg-color)"
              onSelect={() => onSelectTab(Tab.chats)}>
              <LuMessageCircle />
            </NavItem>
          </li>
          <li>
            <NavItem
              className={
                'flex justify-center p-3 m-3' +
                (currentTab === Tab.friends ? ' active' : '')
              }
              message="Amis"
              fill="var(--tooltip-bg-color)"
              onSelect={() => onSelectTab(Tab.friends)}>
              <FaRegUser />
            </NavItem>
          </li>
          <li>
            <NavItem
              className={
                'flex justify-center p-3 m-3' +
                (currentTab === Tab.favorites ? ' active' : '')
              }
              message="Favoris"
              fill="var(--tooltip-bg-color)"
              onSelect={() => onSelectTab(Tab.favorites)}>
              <FaRegStar />
            </NavItem>
          </li>
          <li>
            <NavItem
              className={
                'flex justify-center p-3 m-3' +
                (currentTab === Tab.archived ? ' active' : '')
              }
              message="Archivés"
              fill="var(--tooltip-bg-color)"
              onSelect={() => onSelectTab(Tab.archived)}>
              <FiArchive />
            </NavItem>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidenav;
