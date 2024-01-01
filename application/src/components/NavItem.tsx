function NavItem({
  children,
  message,
  className,
  onSelect,
}: {
  children: JSX.Element;
  message: string;
  className?: string;
  onSelect: () => void;
}) {
  return (
    <div className={'group ' + className} onClick={onSelect}>
      <div className="relative">
        {children}
        <div className="transform -translate-y-1/2 top-1/2 hidden group-hover:block text-sm rounded p-2 absolute left-full ml-5 bg-grey">
          {message}
        </div>
        <svg
          width="1.5rem"
          height="2rem"
          viewBox="0 0 16 16"
          className="transform -translate-y-1/2 hidden group-hover:block absolute left-full top-1/2 ml-2 fill-grey"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0"
            transform="rotate(90 8 8)"
          />
        </svg>
      </div>
    </div>
  );
}

export default NavItem;
