import { useEffect, useState } from 'react';
import Sidenav from './layout/Sidenav/Sidenav';
import Sidebar from './layout/Sidebar/Sidebar';
import ChatList from './layout/ChatList/ChatList';
import Chat from './layout/Chat/Chat';
import { Message } from './types/Message';
import { getMesssages } from './api/chatService';
import { chatParamsContext } from './contexts/chatParamsContext';
import { Tab } from './types/Tab';

function App() {
  const [currentTab, setCurrentTab] = useState(Tab.chats);
  const [selectedChat, setSelectedChat] = useState<Message | undefined>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getMesssages().then((res) => {
      setTimeout(() => {
        setMessages(res);
        setIsLoading(false);
      }, 2300);
    });
  }, []);
  let sidebarContent: JSX.Element | undefined;

  if (currentTab === Tab.chats) sidebarContent = <ChatList />;

  return (
    <div className="h-screen flex">
      <chatParamsContext.Provider
        value={{
          isLoading: isLoading,
          messages: messages,
          currentTab: currentTab,
          selectedChat: selectedChat,
          onSelectChat: setSelectedChat,
        }}>
        <Sidenav onSelectTab={setCurrentTab} currentTab={currentTab} />
        <Sidebar>{sidebarContent}</Sidebar>
        <Chat />
      </chatParamsContext.Provider>
    </div>
  );
}

export default App;
