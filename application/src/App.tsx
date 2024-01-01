import { useEffect, useState } from 'react';
import Sidenav from './layout/Sidenav/Sidenav';
import Sidebar from './layout/Sidebar/Sidebar';
import ChatList from './layout/ChatList/ChatList';
import Chat from './layout/Chat/Chat';
import { Message } from './types/Message';
import { getChats, getMessagesByUserId } from './api/chatService';
import { ChatParamsContext } from './contexts/ChatParamsContext';
import { Tab } from './types/Tab';

function App() {
  const [currentTab, setCurrentTab] = useState(Tab.chats);
  const [selectedChat, setSelectedChat] = useState<Message | undefined>();
  const [chats, setChats] = useState<Message[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  let sidebarContent: JSX.Element | undefined;
  useEffect(() => {
    getChats().then((res) => {
      setTimeout(() => {
        setChats(res);
        setIsLoading(false);
      }, 2300);
    });
  }, []);
  useEffect(() => {
    if (selectedChat) {
      getMessagesByUserId(selectedChat?.userId!).then((msgs) => {
        setMessages(msgs);
      });
    } else {
    }
  }, [selectedChat]);

  if (currentTab === Tab.chats) sidebarContent = <ChatList />;

  return (
    <div className="h-screen flex">
      <ChatParamsContext.Provider
        value={{
          isLoading: isLoading,
          chats: chats,
          currentTab: currentTab,
          selectedChat: selectedChat,
          onSelectChat: setSelectedChat,
        }}>
        <Sidenav onSelectTab={setCurrentTab} currentTab={currentTab} />
        <Sidebar>{sidebarContent}</Sidebar>
        <Chat messages={messages} />
      </ChatParamsContext.Provider>
    </div>
  );
}

export default App;
