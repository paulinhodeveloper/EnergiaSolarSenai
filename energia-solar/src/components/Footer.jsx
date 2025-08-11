import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Energia Solar 365</h3>
          <p>CNPJ: 12.345.678/0001-99</p>
          <p>Email: contato@energiasolar365.com</p>
          <p>Endereço: Rua das Energias, 123 - Joinville, SC</p>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Energia Solar 365 - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
