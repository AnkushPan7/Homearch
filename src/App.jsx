import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [isDark, setIsDark] = useState(false); // State for dark theme

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const collapseSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  const toggleDarkTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`app-container ${isDark ? 'dark-theme' : ''}`}>
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
        collapseSidebar={collapseSidebar}
        isDark={isDark}
      />
      <Content 
        isOpen={isSidebarOpen} 
        isCollapsed={isSidebarCollapsed} 
        backgroundColor={backgroundColor} 
        changeBackgroundColor={changeBackgroundColor}
        isDark={isDark}
      />
      <button onClick={toggleDarkTheme}>Toggle Dark Theme</button>
    </div>
  );
};

export default App;