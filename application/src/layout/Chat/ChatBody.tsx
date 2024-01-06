import { useContext } from 'react';
import Avatar from '../../components/Avatar';
import { Message } from '../../types/Message';
import { UserContext } from '../../contexts/UserContext';
import { formatDate } from '../../utils/formatDate';

function ChatBody({ messages }: { messages: Message[] }) {
  const userContext = useContext(UserContext);

  return (
    <div className="flex flex-col px-6">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={'inline-block mt-4 ' + (!msg.incoming ? 'ml-auto' : 'mr-auto')}>
          <div className="flex gap-3 mb-2">
            <div className={'flex flex-col ' + (msg.incoming ? 'order-2' : 'order-1')}>
              <strong>{msg.incoming ? msg.userName : 'Vous'}</strong>
              <small className="italic text-grey">
                {formatDate(new Date(msg.timestamp), 'd/m/Y')}
              </small>
            </div>
            <Avatar
              className={msg.incoming ? 'order-1' : 'order-2'}
              src={msg.incoming ? msg.userAvatarUrl : userContext.avatar}
            />
          </div>
          <div className="flex">
            <p
              className={
                'p-2 rounded-md inline-block ' +
                (!msg.incoming ? 'bg-blue ml-auto' : 'bg-secondary')
              }>
              {msg.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatBody;
