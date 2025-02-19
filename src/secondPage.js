import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThreeSquares = () => {
  const navigate = useNavigate();

  // Define the boxes with their labels, gradient colors, and routes.
  const boxes = [
    { label: 'Developer', colors: ['#ffbc00', '#ff0058'], route: '/developer' },
    { label: 'Recruiter', colors: ['#03a9f4', '#ff0058'], route: '/recruiter' },
    { label: 'Blog',      colors: ['#4dff03', '#00d0ff'], route: '/blog' },
  ];

  // Outer container that centers everything on the page.
  const outerContainerStyle = {
    background: '#1d031f',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Header style with the desired margin.
  const headerStyle = {
    marginBottom: '1in',
    color: '#fff',
    font: '200 5.75em poppins',
    textShadow: '1px 1px 2px rgba(0,0,0,1)',
  };

  // Grid container style for the boxes.
  const gridContainerStyle = {
    display: 'grid',
    gap: '1.75em',
    gridTemplateColumns: 'repeat(3, 200px)', // Three columns of 200px squares
  };

  return (
    <div style={outerContainerStyle}>
      <h1 style={headerStyle}>Who's Watching?</h1>
      <div style={gridContainerStyle}>
        {boxes.map((box, index) => {
          // Create the linear gradient based on the box's colors.
          const grad = `linear-gradient(45deg, ${box.colors[0]}, ${box.colors[1]})`;

          // Style for each box (a 200px x 200px square).
          const boxStyle = {
            position: 'relative',
            border: 'solid 4px transparent',
            width: '200px',
            height: '200px',
            borderRadius: '1em',
            // Two-layer background: a conic-gradient on the padding-box and the linear gradient on the border-box.
            background: `conic-gradient(rgba(0, 0, 0, 0.75) 0 0) padding-box, ${grad} border-box`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            color: '#fff', // Ensuring the box label is white
          };

          // “Before” effect (simulating the CSS ::before pseudo-element).
          const beforeStyle = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            background: grad,
            filter: 'blur(0.75em)',
          };

          return (
            <div key={index} style={boxStyle} onClick={() => navigate(box.route)}>
              <div style={beforeStyle} />
              {box.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeSquares;
