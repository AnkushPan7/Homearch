import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const collapseSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const changeBackgroundColorToRed = () => {
    setBackgroundColor('red');
  };

  return (
    <div className="app-container">
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
        collapseSidebar={collapseSidebar}
      />
      <Content isOpen={isSidebarOpen} isCollapsed={isSidebarCollapsed} backgroundColor={backgroundColor} changeBackgroundColor={changeBackgroundColorToRed} />
    </div>
  );
};

export default App;