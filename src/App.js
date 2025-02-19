import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TheBoxPlayer from './zebraStripes';
import PacmanGame from './pacman';
import GiantAnimatedTree from './moneyOnTree';
import BigBang from './Galaxy';
import Home from './Home';
import CoconutIsland from './island';
import ThreeScene from './animation';
import NebulaPortalComponent  from './dancer';
import NameDisplay  from './landingPage';
import ThreeSquares from './secondPage';
import NavBar from './recruiter'
import NetflixReplica from './developer';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developer" element={<NetflixReplica />} />
        <Route path="/recruiter" element={<NavBar />} />
        <Route path="/landing" element={<NameDisplay />} />
        <Route path="/second" element={<ThreeSquares />} />
        <Route path="/home" element={<Home />} />
        <Route path="/money" element={<GiantAnimatedTree />} />
        <Route path="/space" element={<BigBang />} />
        <Route path="/blog" element={<TheBoxPlayer />} />
        <Route path="/portfolio" element={<PacmanGame />} />
        <Route path="/island" element={<CoconutIsland />} />
        <Route path="/animation" element={<ThreeScene />} />
        <Route path="/dancer" element={<NebulaPortalComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
