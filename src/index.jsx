import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

// Styled Components for the Sidebar
const SidebarContainer = styled.div`
  width: ${props => (props.collapsed ? '50px' : '250px')};
  background-color: #f0f0f0;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease;
  overflow: hidden;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const SidebarHeader = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  border-bottom: 1px solid #ddd;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarMenuItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const CollapseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const MainContent = styled.div`
  margin-left: ${props => (props.collapsed ? '50px' : '250px')};
  padding: 20px;
  transition: margin-left 0.3s ease;
`;

// App Component
const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <SidebarContainer collapsed={collapsed}>
        <SidebarHeader>React Sidebar</SidebarHeader>
        <CollapseButton onClick={toggleSidebar}>
          {collapsed ? '☰' : '✕'}
        </CollapseButton>
        <SidebarMenu>
          <SidebarMenuItem>Dashboard</SidebarMenuItem>
          <SidebarMenuItem>Users</SidebarMenuItem>
          <SidebarMenuItem>Products</SidebarMenuItem>
          <SidebarMenuItem>Settings</SidebarMenuItem>
        </SidebarMenu>
      </SidebarContainer>
      <MainContent collapsed={collapsed}>
        <h1>Main Content</h1>
        <p>This is the main content area. The sidebar can be collapsed or expanded.</p>
      </MainContent>
    </>
  );
};

// Render the App component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);