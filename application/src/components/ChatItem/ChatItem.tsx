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
        <div className="actions">{date.toString()}</div>
      </div>
    </li>
  );
}

export default ChatItem;
