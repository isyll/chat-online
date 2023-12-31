import { formatDateDynamic } from '../../utils/formatDateDynamic';
import './ChatItem.css';

function ChatItem({
  name,
  message,
  avatar,
  date,
}: {
  name: string;
  message: string;
  avatar: string;
  date: Date;
}) {
  return (
    <li className="flex py-4 px-6 gap-2 cursor-pointer wrapper">
      <figure className="avatar w-10">
        <img src={avatar} alt="image" className="rounded-full" />
      </figure>
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between">
          <h5 className="text-primary">{name}</h5>
          <p className="message text-xs opacity-70">{message}</p>
        </div>
        <div className="mt-auto mb-1 text-primary text-xs">{formatDateDynamic(date)}</div>
      </div>
    </li>
  );
}

export default ChatItem;
