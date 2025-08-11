import React from 'react';
import './SobreNos.css';
import solarImage from '../assets/images/Solar.png';

export default function SobreNos() {
  return (
    <section id="sobre-nos" className="sobre-nos">
      <h2>Sobre Nós</h2>
      
      <img 
        src={solarImage} 
        alt="Painéis solares" 
        className="sobre-nos-img"
      />

      <p>
        Somos a Energia Solar 365, referência em projetos sustentáveis. 
        Instalamos e gerenciamos sistemas residenciais, comerciais e rurais 
        com alta eficiência e confiabilidade.
      </p>

      <div className="dados-mercado">
        <h3>Dados do Mercado Brasileiro (até 2025)</h3>
        <ul>
          <li><strong>Economia na conta de luz:</strong> até 90%</li>
          <li><strong>Payback médio:</strong> 4 a 6 anos</li>
          <li><strong>Redução de CO₂:</strong> ~1,5 tCO₂ por sistema/ano</li>
          <li><strong>Sistemas conectados:</strong> mais de 400.000 
              (fonte: ANEEL, abril/2025)
          </li>
        </ul>
      </div>
    </section>
  );
}
