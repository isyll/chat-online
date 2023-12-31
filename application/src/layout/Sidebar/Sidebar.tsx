import './Sidebar.css';

function Sidebar({ children }: { children: any }) {
  return <div className="sidebar text-lg">{children}</div>;
}

export default Sidebar;
