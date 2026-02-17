import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

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

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="app-container" style={{ backgroundColor: backgroundColor }}>
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
        collapseSidebar={collapseSidebar}
        style={{ backgroundColor: 'green' }}
      />
      <Content 
        isOpen={isSidebarOpen} 
        isCollapsed={isSidebarCollapsed} 
        backgroundColor={backgroundColor} 
        changeBackgroundColor={changeBackgroundColor} 
      />
    </div>
  );
};

export default App;