import ChatListHeader from './ChatListHeader';
import ChatListItems from './ChatListItems';
import ChatListSearch from './ChatListSearch';

function ChatList() {
  return (
    <div className=" flex flex-col content-center">
      <ChatListHeader />
      <ChatListSearch />
      <ChatListItems />
    </div>
  );
}

export default ChatList;
