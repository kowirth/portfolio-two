import React from 'react';

const CoconutIsland = () => {
  return (
    <>
      {/* All styles and keyframes are defined in this style block */}
      <style>{`
        /* The overall container covers the full viewport with a light blue (sky) background */
        .container {
          position: relative;
          width: 100vw;
          height: 100vh;
          background-color: lightblue;
          overflow: hidden;
        }
        /* The sun is a yellow circle in the top right with a glowing effect */
        .sun {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 100px;
          height: 100px;
          background-color: yellow;
          border-radius: 50%;
          z-index: 3;
          box-shadow: 0 0 30px rgba(255,255,0,0.5);
        }
        /* The water covers the entire container and is animated to shift its background position,
           giving a gentle “wave” effect */
        .water {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(270deg, #1e90ff, #00bfff, #1e90ff);
          background-size: 600% 600%;
          animation: wave 5s ease-in-out infinite;
          z-index: 1;
        }
        @keyframes wave {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        /* The island is drawn as an ellipse (using border-radius) with a sandy color and centered */
        .island {
          position: absolute;
          width: 300px;
          height: 200px;
          background-color: #EDC9Af;
          border-radius: 50% 50% 40% 40%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          box-shadow: 0 5px 10px rgba(0,0,0,0.3);
          /* Use flexbox so that the coconut tree sits nicely on the island */
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 20px;
        }
        /* The coconut tree is drawn using an inline SVG. Adjust its width/height as needed. */
        .tree-svg {
          width: 1000px; /* updated from 100px */
          height: 1500px; /* updated from 150px */
        }
      `}</style>

      <div className="container">
        {/* The animated water is the bottom (or full-background) layer */}
        <div className="water"></div>
        {/* The sun in the top right */}
        <div className="sun"></div>
        {/* The island sits centered on the page */}
        <div className="island">
          {/* This inline SVG draws a simple coconut tree:
              - A curved trunk (brown)
              - Two branches (with extra curves)
              - A couple of leaves on each branch (green) */}
          <svg className="tree-svg" viewBox="0 0 300 300">
            {/* Trunk */}
            <path
              d="M150,250 C145,220, 140,180, 150,150"
              stroke="#8B4513"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            {/* Left Branch */}
            <path
              d="M150,150 C130,140, 110,130, 90,120"
              stroke="#8B4513"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            {/* Right Branch */}
            <path
              d="M150,150 C170,140, 190,130, 210,120"
              stroke="#8B4513"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            {/* Left Branch Leaves */}
            <path
              d="M90,120 C80,110, 70,100, 60,90"
              stroke="green"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M90,120 C100,110, 110,100, 120,90"
              stroke="green"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Right Branch Leaves */}
            <path
              d="M210,120 C220,110, 230,100, 240,90"
              stroke="green"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M210,120 C200,110, 190,100, 180,90"
              stroke="green"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CoconutIsland;
