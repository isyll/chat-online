import ChatListHeader from './ChatListHeader';
import ChatListSearch from './ChatListSearch';

function ChatList() {
  return (
    <div className=" flex flex-col content-center">
      <ChatListHeader />
      <ChatListSearch />
    </div>
  );
}

export default ChatList;
