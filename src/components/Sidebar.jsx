import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component for navigation.
 * 
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  // Define navigation items
  const navItems = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About', href: '/about' },
    { id: 3, label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="sidebar" role="navigation">
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;