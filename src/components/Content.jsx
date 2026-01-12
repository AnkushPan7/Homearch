import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Content = ({ isOpen, children, backgroundColor, changeBackgroundColor }) => {
  const [contentWidth, setContentWidth] = useState('100%');
  const [buttonText, setButtonText] = useState('Click me');

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
    backgroundColor: backgroundColor,
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleClick = () => {
    setButtonText('Click successfully!');
    changeBackgroundColor('green');
  };

  return (
    <div style={contentStyle}>
      {children}
      <button style={buttonStyle} onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

Content.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  changeBackgroundColor: PropTypes.func.isRequired,
};

export default Content;