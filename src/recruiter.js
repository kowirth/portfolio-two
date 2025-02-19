import React from 'react';

const NavBar = () => {
  // Inline style for the navigation bar.
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    // The background starts as black at the left edge and fades to transparent at 50% width.
    background: 'linear-gradient(to right, black 0%, transparent 50%, transparent 100%)',
  };

  // Inline style for the title text.
  const titleStyle = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '24px',
    margin: 0,
  };

  return (
    <nav style={navStyle}>
      <h1 style={titleStyle}>Cody Wirth</h1>
    </nav>
  );
};

export default NavBar;
