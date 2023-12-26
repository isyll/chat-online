import './Tooltip.css';

function Tooltip({
  children,
  placement,
  message,
  fill,
  className,
}: {
  children: any;
  placement: 'top' | 'right' | 'left' | 'bottom';
  message: string;
  fill: string;
  className?: string;
}) {
  const style: { [key: string]: string } = {};

  switch (placement) {
    case 'top':
      break;
    case 'bottom':
      break;
    case 'left':
      break;
    case 'right':
      style.rotation = 'rotate(90 8 8)';
      style.arrow = 'tt-start-100 tt-top-50 tt-translate-middle-y ml-2';
      style.innerWrapper = 'tt-start-100 tt-top-50 tt-translate-middle-y ml-5';
      break;
  }
  return (
    <div className={'group ' + className}>
      <div className="relative">
        {children}
        <div
          className={
            'hidden group-hover:block text-sm rounded p-2 absolute ' + style.innerWrapper
          }
          style={{ backgroundColor: fill }}>
          {message}
        </div>
        <svg
          width="1.25rem"
          height="1.75rem"
          viewBox="0 0 16 16"
          className={`hidden group-hover:block absolute ` + style.arrow}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0"
            transform={style.rotation}
          />
        </svg>
      </div>
    </div>
  );
}

export default Tooltip;
