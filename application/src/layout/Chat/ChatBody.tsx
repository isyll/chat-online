import { Message } from '../../types/Message';

function ChatBody({ messages }: { messages: Message[] }) {
  return (
    <div className="flex flex-col">
      {messages.map((msg, i) => (
        <div key={i}>{msg.content}</div>
      ))}
    </div>
  );
}

export default ChatBody;
