import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Sidenav, { Tab } from './components/Sidenav/Sidenav';
import ChatList from './components/Sidebar/tabs/ChatList';

function App() {
  const [currentTab, setCurrentTab] = useState(Tab.chats);

  return (
    <div className="layout">
      <Sidenav onSelectTab={setCurrentTab} currentTab={currentTab} />
      <Sidebar>{currentTab === Tab.chats ? <ChatList /> : ''}</Sidebar>
    </div>
  );
}

export default App;
