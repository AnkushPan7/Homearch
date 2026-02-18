import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file for styling

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
    <div className={`sidebar-dark ${isOpen ? 'open' : 'closed'} ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header-dark">
        <button onClick={toggleSidebar} className="toggle-button-dark">
          {isOpen ? (isCollapsed ? 'Expand' : 'Hide') : 'Show'}
        </button>
        {isOpen && (
          <button onClick={toggleCollapse} className="collapse-button-dark">
            {isCollapsed ? '>' : '<'}
          </button>
        )}
      </div>

      {isOpen && (
        <div className="sidebar-content-dark">
          <ul>
            <li>
              <a href="#" className="sidebar-link-dark">Item 1</a>
            </li>
            <li>
              <a href="#" className="sidebar-link-dark">Item 2</a>
            </li>
            <li>
              <a href="#" className="sidebar-link-dark">Item 3</a>
            </li>
            <li>
              <a href="#" className="sidebar-link-dark">Item 4</a>
            </li>
            <li>
              <a href="#" className="sidebar-link-dark">Item 5</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;