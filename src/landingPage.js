import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import netflixIntroSound from './netflixIntro.mp3';

const NameDisplay = () => {
  const [clicked, setClicked] = useState(false); // new state for animation
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handleClick = () => {
    setClicked(true); // trigger animation

    // Create the audio element on first click
    if (!audioRef.current) {
      audioRef.current = new Audio(netflixIntroSound);
      // Once the audio finishes, route to '/secondPage'
      audioRef.current.addEventListener('ended', () => {
        navigate('/second');
      });
    }
    // Play the sound and handle any errors
    audioRef.current.play().catch((error) => {
      console.error("Audio playback failed:", error);
      navigate('/second'); // fallback: route even if the sound fails
    });
  };

  const containerStyle = {
    backgroundColor: '#000',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const textStyle = {
    color: '#E50914', // updated to Netflix red (#E50914)
    fontWeight: 'bold',
    fontSize: '4rem',
    fontFamily: '"Netflix Sans", Arial, sans-serif',
    textShadow: `
      -2px -2px 0 red,
      2px -2px 0 red,
      -2px 2px 0 red,
      2px 2px 0 red
    `,
    cursor: 'pointer'
  };

  const clickedStyle = clicked
    ? {
        animation: "growFadeOut 0.5s ease-in forwards"
      }
    : {};

  return (
    <>
      {/* Inline CSS for keyframe animation */}
      <style>{`
        @keyframes growFadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.5);
          }
        }
      `}</style>
      <div style={containerStyle}>
        <h1 className="anton-regular" style={{ ...textStyle, ...clickedStyle }} onClick={handleClick}>
          Cody Wirth
        </h1>
      </div>
    </>
  );
};

export default NameDisplay;
