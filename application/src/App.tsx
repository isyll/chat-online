import { KeyboardEvent, useEffect, useState } from 'react';
import Sidenav from './layout/Sidenav/Sidenav';
import Sidebar from './layout/Sidebar/Sidebar';
import ChatList from './layout/ChatList/ChatList';
import Chat from './layout/Chat/Chat';
import { Message } from './types/Message';
import { getChats, getMessagesByUserId } from './api/chatService';
import { ChatContext } from './contexts/ChatContext';
import { Tab } from './types/Tab';
import ChatPlaceholder from './layout/ChatPlaceholder/ChatPlaceholder';
import { UserContext } from './contexts/UserContext';
import UserData from './types/UserData';
import { getUserData } from './api/userService';

function App() {
  const [currentTab, setCurrentTab] = useState(Tab.chats);
  const [selectedChat, setSelectedChat] = useState<Message | undefined>();
  const [user, setUser] = useState<UserData>({
    email: '',
    name: '',
    avatar: '',
    userId: '',
  });
  const [chats, setChats] = useState<Message[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserData().then((res) => {
      setUser(res);
      getChats().then((res) => {
        setTimeout(() => {
          setChats(res);
          setIsLoading(false);
        }, 2300);
      });
    });
  }, []);

  useEffect(() => {
    if (selectedChat) {
      getMessagesByUserId(selectedChat.userId).then((msgs) => {
        setMessages(msgs);
      });
    } else {
      /* empty */
    }
  }, [selectedChat]);

  useEffect(() => {}, [newMessage]);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setSelectedChat(undefined);
      setMessages([]);
    }
  };

  let sidebarContent: JSX.Element;

  if (currentTab === Tab.chats) {
    sidebarContent = <ChatList />;
  } else if (currentTab === Tab.archived) {
    sidebarContent = <ChatList />;
  } else if (currentTab === Tab.friends) {
    sidebarContent = <ChatList />;
  } else {
    sidebarContent = <ChatList />;
  }

  return (
    <div className="h-screen flex" onKeyDown={handleKeyPress} tabIndex={0}>
      <UserContext.Provider value={user}>
        <ChatContext.Provider
          value={{
            isLoading: isLoading,
            chats: chats,
            currentTab: currentTab,
            selectedChat: selectedChat,
            onSelectChat: setSelectedChat,
            newMessageSent: setNewMessage,
          }}>
          <Sidenav onSelectTab={setCurrentTab} currentTab={currentTab} />
          <Sidebar>{sidebarContent}</Sidebar>
          {messages.length ? <Chat messages={messages} /> : <ChatPlaceholder />}
        </ChatContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
