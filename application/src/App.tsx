import { useState } from 'react';
import './App.css';
import Sidenav, { Tab } from './layout/Sidenav/Sidenav';
import Sidebar from './layout/Sidebar/Sidebar';
import ChatList from './layout/ChatList/ChatList';

function App() {
  const [currentTab, setCurrentTab] = useState(Tab.chats);
  let content: JSX.Element | undefined;

  if (currentTab === Tab.chats) content = <ChatList />;

  return (
    <div className="layout">
      <Sidenav onSelectTab={setCurrentTab} currentTab={currentTab} />
      <Sidebar>{content}</Sidebar>
    </div>
  );
}

export default App;
