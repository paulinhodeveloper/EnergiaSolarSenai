import React from 'react';
import Navbar from './components/Navbar';
import SobreNos from './components/SobreNos';
import PorQueInvestir from './components/PorQueInvestir';
import './App.css';

export default function App() {
  return (
    <>
      <header className="header">
        <h1>Energia Solar 365</h1>
        <p>Economize com o sol. Invista no seu futuro!</p>
      </header>

      <Navbar />
      <SobreNos />
      <PorQueInvestir />
    </>
  );
}

