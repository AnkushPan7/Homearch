import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
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
    <BrowserRouter>
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
        collapseSidebar={collapseSidebar}
      />
      <Routes>
        <Route 
          path='/' 
          element={
            <Content 
              isOpen={isSidebarOpen} 
              isCollapsed={isSidebarCollapsed} 
              backgroundColor={backgroundColor} 
              changeBackgroundColor={changeBackgroundColor} 
            />
          } 
        />
        <Route 
          path='/home' 
          element={
            <Content 
              isOpen={isSidebarOpen} 
              isCollapsed={isSidebarCollapsed} 
              backgroundColor={backgroundColor} 
              changeBackgroundColor={changeBackgroundColor} 
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;