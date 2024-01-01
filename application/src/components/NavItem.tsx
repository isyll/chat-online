function NavItem({
  children,
  message,
  fill,
  className,
  onSelect,
}: {
  children: any;
  message: string;
  fill: string;
  className?: string;
  onSelect: () => void;
}) {
  return (
    <div className={'group ' + className} onClick={onSelect}>
      <div className="relative">
        {children}
        <div
          className="transform -translate-y-1/2 top-1/2 hidden group-hover:block text-sm rounded p-2 absolute left-full ml-5"
          style={{ backgroundColor: fill }}>
          {message}
        </div>
        <svg
          width="1.25rem"
          height="1.75rem"
          viewBox="0 0 16 16"
          className="transform -translate-y-1/2 hidden group-hover:block absolute left-full top-1/2 ml-2"
          fill={fill}
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
