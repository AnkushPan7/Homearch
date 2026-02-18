import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('green'); // Initialize background color to green

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
        backgroundColor={backgroundColor} // Pass background color to Sidebar
      />
      <Content isOpen={isSidebarOpen} isCollapsed={isSidebarCollapsed} backgroundColor={backgroundColor} changeBackgroundColor={changeBackgroundColor} />
    </div>
  );
};

export default App;