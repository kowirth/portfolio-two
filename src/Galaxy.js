import React, { useEffect, useRef } from 'react';

const BigBang = () => {


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
  
  const containerRef = useRef(null);

  useEffect(() => {
    // Number of galaxies to create.
    const TOTAL = 300;
    let galaxies = [];
    let updateID;

    // --- Galaxy Constructor and Prototype Methods ---
    function Galaxy() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.vx = 0;
      this.vy = 0;
      this.vz = 0;
      this.speed = 1;
      this.angle = 0;
      this.div = document.createElement('div');
      this.div.classList.add('galaxy');
    }

    Galaxy.prototype.move = function () {
      this.x += this.vx * this.speed;
      this.y += this.vy * this.speed;
      this.z += this.vz * this.speed;
      const transform = this.getTransform();
      this.div.style.transform = transform;
      this.div.style.webkitTransform = transform;
    };

    Galaxy.prototype.setSize = function (width, height) {
      this.div.style.width = width + 'px';
      this.div.style.height = height + 'px';
    };

    Galaxy.prototype.getTransform = function () {
      return (
        'translate3d(' +
        this.x +
        'px, ' +
        this.y +
        'px, ' +
        this.z +
        'px) rotateZ(' +
        this.angle +
        'deg)'
      );
    };

    // --- Helper Functions ---
    function addGalaxy(g) {
      if (containerRef.current) {
        containerRef.current.appendChild(g.div);
        galaxies.push(g);
      }
    }

    function removeGalaxies() {
      galaxies.forEach(g => {
        if (containerRef.current && g.div.parentNode === containerRef.current) {
          containerRef.current.removeChild(g.div);
        }
      });
      galaxies = [];
    }

    function createGalaxies(total, x, y) {
      for (let i = 0; i < total; i++) {
        const b = new Galaxy();
        // If x and y are provided, use them; otherwise, center on screen.
        b.x = typeof x === 'number' ? x : window.innerWidth / 2;
        b.y = typeof y === 'number' ? y : window.innerHeight / 2;
        const v = Math.random() * Math.PI * 2;
        b.vx = Math.cos(v);
        b.vy = Math.sin(v);
        b.vz = Math.random() * 4 - 2;
        const speed = Math.random() * 2 + 0.1;
        b.speed = speed * speed;
        b.angle = Math.random() * 360;
        b.setSize(Math.random() * 23 + 2, Math.random() * 13 + 2);
        addGalaxy(b);
      }
    }

    function init(x, y) {
      removeGalaxies();
      createGalaxies(TOTAL, x, y);
    }

    function update() {
      updateID = requestAnimationFrame(update);
      galaxies.forEach(g => {
        g.move();
      });
    }

    // --- RequestAnimationFrame Shim (for older browsers) ---
    (function () {
      let lastTime = 0;
      const vendors = ['ms', 'moz', 'webkit', 'o'];
      for (let i = 0; i < vendors.length && !window.requestAnimationFrame; i++) {
        window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[i] + 'CancelAnimationFrame'] ||
          window[vendors[i] + 'CancelRequestAnimationFrame'];
      }
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
          const currTime = new Date().getTime();
          const timeToCall = Math.max(0, 16 - (currTime - lastTime));
          const id = window.setTimeout(function () {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
          clearTimeout(id);
        };
      }
    })();

    // --- Event Handlers ---
    function handleMouseDown(event) {
      init(event.clientX, event.clientY);
    }

    function handleTouchStart(event) {
      if (event.targetTouches && event.targetTouches.length > 0) {
        init(event.targetTouches[0].pageX, event.targetTouches[0].pageY);
      }
    }

    // Start the animation after a short delay.
    const timeoutId = setTimeout(() => {
      init();
      update();
    }, 200);

    // Attach event listeners to the container.
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('touchstart', handleTouchStart);
    }

    // Cleanup on component unmount.
    return () => {
      clearTimeout(timeoutId);
      if (updateID) {
        cancelAnimationFrame(updateID);
      }
      if (container) {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('touchstart', handleTouchStart);
      }
      removeGalaxies();
    };
  }, []);

  return (
    <>
      <NavBar />
      {/* Inline styles for the container and galaxy elements */}
      <style>{`
        .bigbang-container {
          margin: 0;
          background-color: #000;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
          position: relative;
          perspective: 1000px;
          -webkit-perspective: 1000px;
        }
        .galaxy {
          position: absolute;
          -webkit-transform: translateZ(0);
          -moz-transform: translateZ(0);
          -ms-transform: translateZ(0);
          -o-transform: translateZ(0);
          transform: translateZ(0);
          background-color: #fff;
          border-radius: 50%;
        }
      `}</style>
      <div ref={containerRef} className="bigbang-container"></div>
    </>
  );
};

export default BigBang;
