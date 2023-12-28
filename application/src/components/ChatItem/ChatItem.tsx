import { formatDate } from '../../utils/formatDate';
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
    <li className="flex">
      <figure className="avatar w-8 h-8">
        <img src={avatar} alt="image" className="rounded-full" />
      </figure>
      <div className="body">
        <div>
          <h5 className="text-primary">{name}</h5>
          <p className="message">{message}</p>
        </div>
        <div className="actions">{formatDate(date, 'd/m/Y')}</div>
      </div>
    </li>
  );
}

export default ChatItem;
