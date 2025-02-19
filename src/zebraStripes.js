import React from 'react';

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
      borderRight: '5px solid #000000'
    }}>
      <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
      <a href="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a>
      <a href="/portfolio" style={{ color: '#fff', textDecoration: 'none' }}>Portfolio</a>
      <a href="/space" style={{ color: '#fff', textDecoration: 'none' }}>Galaxy</a>
      <a href="/money" style={{ color: '#fff', textDecoration: 'none' }}>Tree</a>
    </nav>
  );
}

const styles = {
  page: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  zebraBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'repeating-linear-gradient(90deg, #000, #000 50px, #fff 50px, #fff 100px)',
    zIndex: -1,
  },
  container: {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '20px 30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    zIndex: 1,
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  },
  audio: {
    width: '100%',
    maxWidth: '400px',
  },
};

const TheBoxPlayer = () => {
  // Replace with a valid URL for "Roddy Ricch – The Box"
  const audioSrc = 'https://www.youtube.com/watch?v=UNZqm3dxd2w';

  // Generate an array for falling bills
  const billCount = 20;
  const bills = Array.from({ length: billCount });

  return (
    <div>
    <NavBar />
    <div style={styles.page}>
      <div style={styles.zebraBackground} />
      {/* Falling money overlay */}
      <style dangerouslySetInnerHTML={{ __html: `
        .falling-money {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .bill {
          position: absolute;
          top: -50px;
          font-size: 96px; /* 4 times bigger than 24px */
          color: green;
          opacity: 0.8;
          font-weight: bold;
          animation: fall 5s linear infinite;
        }
        @keyframes fall {
          to { transform: translateY(110vh); }
        }
      ` }} />
      <div className="falling-money">
        {bills.map((_, i) => (
          <div
            key={i}
            className="bill"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            $
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TheBoxPlayer;
