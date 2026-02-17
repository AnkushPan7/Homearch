import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = ({ isOpen, isCollapsed, toggleSidebar, collapseSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="toggle-button">
          {isOpen ? (isCollapsed ? 'Expand' : 'Hide') : 'Show'}
        </button>
        {isOpen && (
          <button onClick={collapseSidebar} className="collapse-button">
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