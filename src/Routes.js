import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TheBoxPlayer from './zebraStripes';
import MoneyTree from './moneyOnTree';
import BigBang from './Galaxy';
import Home from './Homeome';

// Placeholder Portfolio component
function Portfolio() {
  return (
    <div style={{ paddingTop: '60px', textAlign: 'center' }}>
      {/* Portfolio content goes here */}
      Portfolio Page - Under Construction
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}
