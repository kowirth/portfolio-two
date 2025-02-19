import React from 'react';
import { FaSearch, FaBell, FaPlay } from 'react-icons/fa';
import hacker from './hackers.jpg';
import matrix from './matrix.jpg';
import blackhat from './blackhat.jpg';
import gattaca from './gattaca.jpg';
import robot from './robot.jpg';
import sv from './sv.jpg';
import snowden from './snowden.jpg';
import sn from './sn.jpg';

const NetflixReplica = () => {
  // Inline styles
  const containerStyle = {
    backgroundColor: '#141414', // Netflix-like dark background
    color: '#fff',
    fontFamily: 'Helvetica, Arial, sans-serif',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  };

  const navBarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 2rem',
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 999,
  };

  const leftNavStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const rightNavStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  // Netflix-like red logo style
  const netflixLogoStyle = {
    color: '#E50914', // Netflix red
    fontFamily: '"Arial Black", Impact, sans-serif',
    fontWeight: 900,
    fontSize: '1.5rem',
    letterSpacing: '-0.02em',
    margin: 0,
    cursor: 'pointer',
    textTransform: 'uppercase',
  };

  const navLinkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const navLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    cursor: 'pointer',
  };

  const iconStyle = {
    fontSize: '1.1rem',
    cursor: 'pointer',
  };

  const avatarStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  // HERO SECTION STYLES
  const heroStyle = {
    position: 'relative',
    marginTop: '3.5rem', // Make space for fixed nav
    height: '60vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: '2rem',
  };

  // Video style for the background video
  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -2,
    display: 'block',
  };

  const heroOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(to top, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0) 80%)',
    zIndex: -1,
  };

  const heroContentStyle = {
    position: 'relative',
    maxWidth: '600px',
  };

  const heroTitleStyle = {
    fontSize: '2rem',
    margin: '0 0 0.5rem',
    fontWeight: 'bold',
  };

  const ratingStyle = {
    display: 'inline-block',
    border: '1px solid #fff',
    padding: '0.25rem 0.5rem',
    fontSize: '0.8rem',
    marginRight: '1rem',
  };

  const heroButtonsStyle = {
    display: 'flex',
    gap: '1rem',
    margin: '1rem 0',
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const moreInfoButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'rgba(109,109,110,0.7)',
    color: '#fff',
  };

  const rowContainerStyle = {
    marginTop: '2rem',
    padding: '0 2rem',
  };

  const rowTitleStyle = {
    fontSize: '1.2rem',
    margin: '0 0 0.5rem 0',
    fontWeight: 'bold',
  };

  const rowStyle = {
    display: 'flex',
    overflowX: 'auto',
    gap: '0.5rem',
    paddingBottom: '1rem',
  };

  const thumbnailStyle = {
    flex: '0 0 auto',
    width: '150px',
    height: '85px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  };

  // Sample data for the row
  const myList = [
    {
      id: 1,
      title: 'Hackers',
      thumbnail: hacker,
    },
    {
      id: 2,
      title: 'Matrix',
      thumbnail: matrix,
    },
    {
      id: 3,
      title: 'Blackhat',
      thumbnail: blackhat,
    },
    {
      id: 4,
      title: 'Gattaca',
      thumbnail: gattaca,
    },
    {
      id: 6,
      title: 'Robot',
      thumbnail: robot,
    },
    {
      id: 7,
      title: 'Silicon Valley',
      thumbnail: sv,
    },
    {
      id: 8,
      title: 'Snowden',
      thumbnail: snowden,
    },
    {
      id: 9,
      title: 'SN',
      thumbnail: sn,
    }
  ];

  return (
    <div className='main-container' style={containerStyle}>
      {/* NAVIGATION BAR */}
      <div style={navBarStyle}>
        <div style={leftNavStyle}>
          {/* Netflix-Style Text Logo */}
          <h2 className="netflix-logo" style={netflixLogoStyle}>
            Cody WIrth
          </h2>
          {/* Nav links */}
          <div style={navLinkContainerStyle}>
            <a
              href="https://crimson-jordanna-49.tiiny.site/"
              target="_blank"
              rel="noopener noreferrer"
              style={navLinkStyle}
            >
              Resume
            </a>
            <span style={navLinkStyle}>Projects</span>
            <span style={navLinkStyle}>Blog</span>
            <a
              href="https://www.linkedin.com/in/cody-wirth-725a442bb/"
              target="_blank"
              rel="noopener noreferrer"
              style={navLinkStyle}
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/wirthrocody"
              target="_blank"
              rel="noopener noreferrer"
              style={navLinkStyle}
            >
              X
            </a>
            <a
              href="https://github.com/kowirth"
              target="_blank"
              rel="noopener noreferrer"
              style={navLinkStyle}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* HERO SECTION with Video Background */}
      <div className="background" style={heroStyle}>
        <video
          autoPlay
          loop
          muted
          style={videoStyle}
          src="https://videos.ctfassets.net/e7a17mtqlnxx/58rfTXAhwBkDdS4PIZdtM3/0850ce281fa80234d620fe7eadd93249/Apollo_Brand_Video_2023.mp4"
        />
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Original Series
          </div>
          <h1 style={heroTitleStyle}>Introduction</h1>
          <span style={ratingStyle}>TV-MA</span>
          <span>Full Stack Developer</span>
          <p>
            Having worked on and built multiple production web applications that
            receive over 1,000,000 page hits a day, and coding in general, has made
            me realize that I am a passionate problem solver who enjoys tackling dense
            technical issues until I can find a resolution to move forward.
          </p>
          <div style={heroButtonsStyle}>
            <button style={buttonStyle}>
              <FaPlay />
              Play
            </button>
            <button style={moreInfoButtonStyle}>More Info</button>
          </div>
        </div>
      </div>

      {/* ROW: My List */}
      <div style={rowContainerStyle}>
        <h2 style={rowTitleStyle}>My List</h2>
        <div style={rowStyle}>
          {myList.map((item) => (
            <div
              key={item.id}
              style={{
                ...thumbnailStyle,
                backgroundImage: `url(${item.thumbnail})`,
              }}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetflixReplica;
