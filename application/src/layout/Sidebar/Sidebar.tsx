function Sidebar({ children }: { children: JSX.Element }) {
  return (
    <div className="sidebar text-lg border-r border-secondary w-350">{children}</div>
  );
}

export default Sidebar;
