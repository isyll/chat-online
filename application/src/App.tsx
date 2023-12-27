import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Sidenav, { Tab } from './components/Sidenav/Sidenav';
import ChatList from './components/Sidebar/ChatList/ChatList';

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
