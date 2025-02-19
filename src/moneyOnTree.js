import React from 'react';
import { div } from 'three/tsl';

const GiantAnimatedTree = () => {

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

  return (
    <div>
      <NavBar />
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#00008B', // dark blue background
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 800 600"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {/* Define gradients and other reusable defs */}
        <defs>
          <linearGradient id="trunkGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="100%" stopColor="#A0522D" />
          </linearGradient>
        </defs>

        {/* Added sun illustration */}
        <circle cx="60" cy="60" r="50" fill="yellow" />
        {/* Added crescent moon illustration in the top right */}
        <g transform="translate(740,60)">
          {/* Full moon circle */}
          <circle cx="0" cy="0" r="50" fill="lightgrey" />
          {/* Overlay circle to create the crescent effect */}
          <circle cx="-20" cy="0" r="50" fill="#00008B" />
        </g>

        {/* New styles for clouds, raindrops, tree sway, and birds */}
        <style>{`
          @keyframes sway {
            0%   { transform: rotate(0deg); }
            25%  { transform: rotate(2deg); }
            50%  { transform: rotate(0deg); }
            75%  { transform: rotate(-2deg); }
            100% { transform: rotate(0deg); }
          }
          .tree {
            transform-origin: 400px 600px;
            animation: sway 5s ease-in-out infinite;
          }
          @keyframes raindrop {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(600px); }
          }
          .raindrop {
            fill: lightblue;
            animation: raindrop 2s linear infinite;
          }
          @keyframes float {
            0% { transform: translateX(0); }
            50% { transform: translateX(10px); }
            100% { transform: translateX(0); }
          }
          .cloud {
            fill: white;
            opacity: 0.8;
            animation: float 4s ease-in-out infinite;
          }
          /* Birds fly continuously edge-to-edge and then reverse */
          @keyframes flyBlack1 {
            0% { transform: translateX(-50px) translateY(80px); }
            100% { transform: translateX(850px) translateY(80px); }
          }
          @keyframes flyBlack2 {
            0% { transform: translateX(-50px) translateY(120px); }
            100% { transform: translateX(850px) translateY(120px); }
          }
          .black-bird-1 {
            animation: flyBlack1 5s ease-in-out infinite alternate;
          }
          .black-bird-2 {
            animation: flyBlack2 5s ease-in-out infinite alternate;
            animation-delay: 0.5s;
          }
        `}</style>

        {/* Added clouds group positioned between sun and moon */}
        <g className="clouds">
          {/* Cloud 1 */}
          <circle cx="300" cy="80" r="20" className="cloud" />
          <circle cx="320" cy="70" r="25" className="cloud" />
          <circle cx="340" cy="80" r="20" className="cloud" />
          {/* Cloud 2 */}
          <circle cx="500" cy="90" r="20" className="cloud" />
          <circle cx="520" cy="80" r="25" className="cloud" />
          <circle cx="540" cy="90" r="20" className="cloud" />
        </g>

        {/* Added rain group */}
        <g className="rain">
          <circle cx="100" cy="0" r="5" className="raindrop" style={{ animationDelay: '0s' }} />
          <circle cx="200" cy="0" r="5" className="raindrop" style={{ animationDelay: '0.5s' }} />
          <circle cx="300" cy="0" r="5" className="raindrop" style={{ animationDelay: '1s' }} />
          <circle cx="400" cy="0" r="5" className="raindrop" style={{ animationDelay: '0.2s' }} />
          <circle cx="500" cy="0" r="5" className="raindrop" style={{ animationDelay: '0.7s' }} />
          <circle cx="600" cy="0" r="5" className="raindrop" style={{ animationDelay: '1.2s' }} />
          <circle cx="700" cy="0" r="5" className="raindrop" style={{ animationDelay: '0.9s' }} />
        </g>

        <g className="tree">
          {/* Trunk with a gradient fill and rounded corners */}
          <rect x="385" y="300" width="30" height="300" fill="url(#trunkGradient)" rx="10" ry="10" />

          {/* Main branches for a more natural look */}
          <path
            d="M400,350 C350,340 300,320 250,300"
            stroke="#8B4513"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M400,360 C450,350 500,330 550,310"
            stroke="#8B4513"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />

          {/* Smaller, detailed branches */}
          <path
            d="M300,320 C290,310 280,300 270,290"
            stroke="#8B4513"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M500,330 C510,320 520,310 530,300"
            stroke="#8B4513"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M400,240 C380,230 360,220 350,210"
            stroke="#8B4513"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M400,240 C420,230 440,220 450,210"
            stroke="#8B4513"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />

          {/* Tree crown made of overlapping circles to simulate a bushy canopy */}
          <g>
            <circle cx="370" cy="220" r="40" fill="#228B22" />
            <circle cx="430" cy="220" r="40" fill="#228B22" />
            <circle cx="400" cy="180" r="45" fill="#2E8B57" />
            <circle cx="360" cy="160" r="35" fill="#228B22" />
            <circle cx="440" cy="160" r="35" fill="#228B22" />
            <circle cx="400" cy="140" r="30" fill="#2E8B57" />
            {/* Extra leaf circles for extra fullness */}
            <circle cx="380" cy="130" r="25" fill="#228B22" />
            <circle cx="420" cy="130" r="25" fill="#228B22" />
          </g>
        </g>

        {/* Blades of grass added across the bottom */}
        <g className="grass">
          {Array.from({ length: 41 }).map((_, i) => (
            <line
              key={i}
              x1={i * 20}
              y1="600"
              x2={i * 20}
              y2="580"
              stroke="green"
              strokeWidth="2"
            />
          ))}
        </g>
        {/* Added flowers in between the grass blades */}
        <g className="flowers">
          {Array.from({ length: 40 }).map((_, i) => (
            <circle
              key={i}
              cx={i * 20 + 10}
              cy="575"
              r="4"
              fill="pink"
            />
          ))}
        </g>

        {/* --- New birds that fly continuously edge-to-edge in black --- */}
        <g className="birds">
          <g className="bird black-bird-1">
            {/* A simple V-shaped bird drawn in black */}
            <polyline
              points="0,10 10,0 20,10"
              fill="none"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <g className="bird black-bird-2">
            {/* A simple V-shaped bird drawn in black */}
            <polyline
              points="0,10 10,0 20,10"
              fill="none"
              stroke="black"
              strokeWidth="3"
            />
          </g>
        </g>
      </svg>
    </div>
    </div>
  );
};

export default GiantAnimatedTree;
