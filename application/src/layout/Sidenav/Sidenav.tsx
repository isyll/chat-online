import { AiOutlineMessage } from 'react-icons/ai';
import { LuMessageCircle } from 'react-icons/lu';
import { FaRegUser } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import NavItem from '../../components/NavItem';
import { Tab } from '../../types/Tab';

function Sidenav({
  onSelectTab,
  currentTab,
}: {
  onSelectTab: (tab: Tab) => void;
  currentTab: Tab;
}) {
  return (
    <nav className="bg-primary border-r border-secondary">
      <div className="nav-group">
        <ul className="flex flex-col">
          <li className="list-none hover:bg-secondary">
            <a
              href="/"
              className="flex justify-center p-3 cursor-pointer text-blue rounded-lg text-3em">
              <AiOutlineMessage />
            </a>
          </li>
          <li
            className={
              'group list-none cursor-pointer ' +
              (currentTab === Tab.chats ? 'active' : 'hover:bg-secondary')
            }>
            <NavItem
              className="flex justify-center p-4 m-4 text-2em rounded-lg group-[.active]:bg-blue"
              message="Discussions"
              onSelect={() => onSelectTab(Tab.chats)}>
              <LuMessageCircle />
            </NavItem>
          </li>
          <li
            className={
              'group list-none cursor-pointer ' +
              (currentTab === Tab.friends ? 'active' : 'hover:bg-secondary')
            }>
            <NavItem
              className="flex justify-center p-4 m-4 text-2em rounded-lg group-[.active]:bg-blue"
              message="Amis"
              onSelect={() => onSelectTab(Tab.friends)}>
              <FaRegUser />
            </NavItem>
          </li>
          <li
            className={
              'group list-none cursor-pointer ' +
              (currentTab === Tab.favorites ? 'active' : 'hover:bg-secondary')
            }>
            <NavItem
              className="flex justify-center p-4 m-4 text-2em rounded-lg group-[.active]:bg-blue"
              message="Favoris"
              onSelect={() => onSelectTab(Tab.favorites)}>
              <FaRegStar />
            </NavItem>
          </li>
          <li
            className={
              'group list-none cursor-pointer ' +
              (currentTab === Tab.archived ? 'active' : 'hover:bg-secondary')
            }>
            <NavItem
              className="flex justify-center p-4 m-4 text-2em rounded-lg group-[.active]:bg-blue"
              message="Archivés"
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
