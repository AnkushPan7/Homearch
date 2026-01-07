import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Content = ({ isOpen, children }) => {
  const [contentWidth, setContentWidth] = useState('100%');

  useEffect(() => {
    // Adjust content width based on sidebar state
    setContentWidth(isOpen ? 'calc(100% - 250px)' : '100%'); // Assuming sidebar width is 250px when open
  }, [isOpen]);

  const contentStyle = {
    marginLeft: isOpen ? '250px' : '0', // Push content to the right when sidebar is open
    width: contentWidth,
    transition: 'margin-left 0.3s ease, width 0.3s ease', // Smooth transition for responsiveness
    padding: '20px',
    boxSizing: 'border-box', // Include padding in width calculation
    minHeight: 'calc(100vh - 60px)', // Adjust based on header height (example: 60px)
    backgroundColor: '#f0f0f0', // Example background color
  };

  return (
    <div style={contentStyle}>
      {children}
    </div>
  );
};

Content.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Content;