 import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import './ThreeScene.css';

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const sphereRef = useRef(null);
  const torusRef = useRef(null);
  const rendererRef = useRef(null);
  const requestRef = useRef(null);
  const cameraRef = useRef(null);
  
  const [shape, setShape] = useState('crystal'); // "crystal" = sphere, "torus" = torus

  useEffect(() => {
    const canvas = canvasRef.current;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Sphere shader
    const sphereShader = {
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float uTime;
  
        void main() {
          vUv = uv;
          vNormal = normal;
          
          vec3 pos = position;
          pos += normal * sin(position.y * 10.0 + uTime) * 0.1;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float uTime;
  
        void main() {
          vec3 color1 = vec3(0.8, 0.2, 0.5);
          vec3 color2 = vec3(0.2, 0.4, 0.8);
          
          float pattern = sin(vUv.y * 20.0 + uTime) * 0.5 + 0.5;
          vec3 color = mix(color1, color2, pattern);
          
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
          color += fresnel * 0.08;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `
    };

    // Torus shader
    const torusShader = {
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float uTime;
  
        void main() {
          vUv = uv;
          vNormal = normal;
          
          vec3 pos = position;
          pos += normal * cos(position.x * 5.0 + uTime) * 0.1;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float uTime;
  
        void main() {
          vec3 color1 = vec3(0.1, 0.8, 0.5);
          vec3 color2 = vec3(0.7, 0.2, 0.3);
          
          float pattern = sin(vUv.x * 15.0 + uTime) * cos(vUv.y * 15.0 + uTime) * 0.5 + 0.5;
          vec3 color = mix(color1, color2, pattern);
          
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          color += fresnel * 0.08;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `
    };

    // Create materials using the shaders above
    const sphereMaterial = new THREE.ShaderMaterial({
      vertexShader: sphereShader.vertexShader,
      fragmentShader: sphereShader.fragmentShader,
      uniforms: {
        uTime: { value: 0 }
      }
    });
    const torusMaterial = new THREE.ShaderMaterial({
      vertexShader: torusShader.vertexShader,
      fragmentShader: torusShader.fragmentShader,
      uniforms: {
        uTime: { value: 0 }
      }
    });

    // Create geometries and meshes
    const sphereGeometry = new THREE.IcosahedronGeometry(1.2, 32);
    const torusGeometry = new THREE.TorusGeometry(0.9, 0.4, 64, 64);
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    
    scene.add(sphere);
    scene.add(torus);
    torus.visible = false; // start with sphere visible

    // Store meshes in refs for later update
    sphereRef.current = sphere;
    torusRef.current = torus;

    // Animation loop
    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
      const time = performance.now() * 0.001;
      
      // Update uniforms
      sphereMaterial.uniforms.uTime.value = time;
      torusMaterial.uniforms.uTime.value = time;
      
      // Rotate objects
      sphere.rotation.x = time * 0.3;
      sphere.rotation.y = time * 0.5;
      torus.rotation.x = time * 0.5;
      torus.rotation.y = time * 0.3;
      
      renderer.render(scene, camera);
    };
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestRef.current);
      renderer.dispose();
    };
  }, []);

  // Update shape visibility when "shape" state changes
  useEffect(() => {
    if (sphereRef.current && torusRef.current) {
      sphereRef.current.visible = shape === 'crystal';
      torusRef.current.visible = shape === 'torus';
    }
  }, [shape]);

  return (
    <div className="scene-container">
      <canvas ref={canvasRef} id="webgl" />
      <div className="toggle">
        <input
          type="radio"
          id="shape1"
          name="shape"
          value="crystal"
          checked={shape === 'crystal'}
          onChange={() => setShape('crystal')}
        />
        <label htmlFor="shape1">Crystal</label>
        <input
          type="radio"
          id="shape2"
          name="shape"
          value="torus"
          checked={shape === 'torus'}
          onChange={() => setShape('torus')}
        />
        <label htmlFor="shape2">Torus</label>
        <span className="slider" />
      </div>
    </div>
  );
};

export default ThreeScene;
