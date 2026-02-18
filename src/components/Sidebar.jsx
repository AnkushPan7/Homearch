import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component
 * 
 * @description A React functional component representing the sidebar.
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  // Define the sidebar items
  const sidebarItems = [
    { id: 1, label: 'Item 1', href: '#' },
    { id: 2, label: 'Item 2', href: '#' },
    { id: 3, label: 'Item 3', href: '#' },
  ];

  // Render the sidebar
  return (
    <div className="sidebar" aria-label="Sidebar navigation">
      <h2 className="sidebar-title">Sidebar</h2>
      <ul className="sidebar-list">
        {sidebarItems.map((item) => (
          <li key={item.id} className="sidebar-item">
            <a href={item.href} className="sidebar-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;