import React from 'react';
import './App.css';
import confetti from 'canvas-confetti'; // New import for confetti

// ...existing code for ConfettiOverlay, VideoChat, NavBar...
function ConfettiOverlay() {
  // ...existing code...
  const canvasRef = React.useRef(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });
    const interval = setInterval(() => {
      myConfetti({
        particleCount: 30,
        angle: 90,
        spread: 80,
        origin: { x: Math.random(), y: 0 },
        scalar: 3,
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffa500', '#800080']
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
}

function VideoChat() {
  // ...existing code...
  const [stream, setStream] = React.useState(null);
  const [iceBreaker, setIceBreaker] = React.useState('');
  const iceBreakers = [
    'Hi! How are you?',
    'What is your favorite movie?',
    'Any travel stories?',
    'What do you do for fun?',
    'Share something random!'
  ];

  React.useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(mediaStream => {
        setStream(mediaStream);
      })
      .catch(err => {
        console.error("Error accessing camera:", err);
      });
  }, []);

  React.useEffect(() => {
    let idx = 0;
    setIceBreaker(iceBreakers[idx]);
    const interval = setInterval(() => {
      idx = (idx + 1) % iceBreakers.length;
      setIceBreaker(iceBreakers[idx]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative' }}>
      {stream && (
        <video
          autoPlay
          style={{ width: '400px', height: '400px', objectFit: 'cover', border: '4px solid white' }}
          ref={video => { if (video) video.srcObject = stream; }}
        />
      )}
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: '10px',
        width: 'fit-content'
      }}>
        {iceBreaker}
      </div>
    </div>
  );
}

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

function Home() {
  // New background sequence with color and duration in milliseconds
  const backgroundSequence = [
    { color: 'red', duration: 3000 },
    { color: 'lightblue', duration: 2000 },
    { color: 'orange', duration: 2000 },
    { color: 'limegreen', duration: 4000 },
    { color: 'hotpink', duration: 8000 }
  ];
  
  const [bgIndex, setBgIndex] = React.useState(0);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBgIndex((bgIndex + 1) % backgroundSequence.length);
    }, backgroundSequence[bgIndex].duration);
    return () => clearTimeout(timeoutId);
  }, [bgIndex]);

  return (
    <>
      <NavBar />
      <div className="App" style={{ backgroundColor: backgroundSequence[bgIndex].color, minHeight: '100vh', paddingTop: '60px' }}>
        <VideoChat />
        <ConfettiOverlay />
      </div>
    </>
  );
}

export default Home;
