import { formatDateDynamic } from '../utils/formatDateDynamic';
import Avatar from './Avatar';

function ChatItem({
  name,
  message,
  avatar,
  date,
  messageId,
  current,
  onClick,
}: {
  name: string;
  message: string;
  avatar: string;
  date: Date;
  messageId: string;
  current: boolean;
  onClick: (id: string) => void;
}) {
  return (
    <li
      className={
        (current ? 'bg-secondary' : 'hover:bg-secondary') +
        ' flex py-4 px-6 gap-2 cursor-pointer border-b border-secondary '
      }
      onClick={() => onClick(messageId)}>
      <Avatar src={avatar} />
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between">
          <h5 className="text-primary">{name}</h5>
          <p className="text-xs opacity-70 whitespace-nowrap overflow-hidden text-ellipsis">
            {message}
          </p>
        </div>
        <div className="mt-auto mb-1 text-primary text-xs">{formatDateDynamic(date)}</div>
      </div>
    </li>
  );
}

export default ChatItem;
