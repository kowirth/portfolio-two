import React, { useEffect, useRef, useState } from 'react';

const PacmanGame = () => {

  function NavBar() {
    // ...existing code for hamburger with modal if present; otherwise you can revert to previous version
    // For simplicity, using the original static nav for Home
    return (
      <nav style={{
        width: '100%',
        background: '#333',
        padding: '10px 20px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '5px solid #000000',
        borderTop: '5px solid #000000',
        borderLeft: '5px solid #000000',
        borderRight: '5px solid #000000',
      }}>
        <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a>
        <a href="/portfolio" style={{ color: '#fff', textDecoration: 'none' }}>Portfolio</a>
        <a href="/space" style={{ color: '#fff', textDecoration: 'none' }}>Galaxy</a>
        <a href="/money" style={{ color: '#fff', textDecoration: 'none' }}>Tree</a>
      </nav>
    );
  }

  // Reference to the canvas and audio elements
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  // Pacman's grid position (starting at 1,1)
  const [pacmanPos, setPacmanPos] = useState({ x: 1, y: 1 });

  // Define a simple maze grid.
  // 0 = open path, 1 = wall.
  // (Rows and columns can be adjusted for complexity.)
  const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  const cellSize = 40; // each cell is 40px by 40px

  // Handle key presses to move Pacman.
  const handleKeyDown = (e) => {
    let newX = pacmanPos.x;
    let newY = pacmanPos.y;
    if (e.key === 'ArrowUp') {
      newY -= 1;
    } else if (e.key === 'ArrowDown') {
      newY += 1;
    } else if (e.key === 'ArrowLeft') {
      newX -= 1;
    } else if (e.key === 'ArrowRight') {
      newX += 1;
    }
    // Ensure the new position is within bounds and not a wall.
    if (
      newY >= 0 &&
      newY < maze.length &&
      newX >= 0 &&
      newX < maze[0].length &&
      maze[newY][newX] === 0
    ) {
      setPacmanPos({ x: newX, y: newY });
    }
  };

  // Add event listener for keydown events.
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pacmanPos]);

  // Replace the static drawing useEffect with an animation loop:
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    const draw = (timestamp) => {
      // Draw animated gradient background
      const shift = Math.sin(timestamp / 1000) * 0.5 + 0.5;
      const gradient = context.createLinearGradient(0, 0, canvas.width * shift, canvas.height * (1 - shift));
      gradient.addColorStop(0, 'rgba(0, 0, 255, 0.8)');   // blue
      gradient.addColorStop(1, 'rgba(0, 255, 0, 0.8)');   // green
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the maze grid with semi-transparent fills
      for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
          context.fillStyle = maze[y][x] === 1 ? 'rgba(0, 0, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
          context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
      }

      // Draw Pacman on top with an open mouth
      const pacX = pacmanPos.x * cellSize + cellSize / 2;
      const pacY = pacmanPos.y * cellSize + cellSize / 2;
      const radius = cellSize / 2 - 2;
      context.beginPath();
      context.arc(pacX, pacY, radius, 0.25 * Math.PI, 1.75 * Math.PI, false);
      context.lineTo(pacX, pacY);
      context.fillStyle = 'yellow';
      context.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pacmanPos]); // pacmanPos updated on moves remains dependency

  return (
    <div>
    <NavBar />
    <div className='homies' style={{ textAlign: 'center', marginTop: '100px', backgroundColor: 'pink' }}>
      <h1>Pacman Game</h1>
      <canvas
        ref={canvasRef}
        width={maze[0].length * cellSize}
        height={maze.length * cellSize}
        style={{ border: '2px solid white' }}
      />
      {/* Background music: ensure "background.mp3" is available in your public folder or replace with a valid URL */}
      <audio ref={audioRef} src="background.mp3" autoPlay loop />
    </div>
    </div>
  );
};

export default PacmanGame;
