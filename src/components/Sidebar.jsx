import React, { useState } from 'react';
import './Sidebar.css'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={`sidebar ${isOpen ? 'open' : 'closed'} ${isCollapsed ? 'collapsed' : ''}`}
      style={{ backgroundColor: 'white', padding: '20px', width: '250px' }}
    >
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="toggle-button">
          {isOpen ? (isCollapsed ? 'Expand' : 'Hide') : 'Show'}
        </button>
        {isOpen && (
          <button onClick={toggleCollapse} className="collapse-button">
            {isCollapsed ? '>' : '<'}
          </button>
        )}
      </div>

      {isOpen && (
        <div className="sidebar-content">
          <ul>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
            <li>
              <a href="#">Item 4</a>
            </li>
            <li>
              <a href="#">Item 5</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;