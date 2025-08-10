import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#sobre">Sobre Nós</a></li>
        <li><a href="#investir">Por que investir?</a></li>
        <li><a href="#produtos">Produtos</a></li>
        <li><a href="#orcamento">Orçamento</a></li>
      </ul>
    </nav>
  );
}
