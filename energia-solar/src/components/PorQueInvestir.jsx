import React from 'react';
import './PorQueInvestir.css';

export default function PorQueInvestir() {
  const itens = [
    {
      titulo: 'Redução da Conta',
      texto: 'Economize até 90% na conta de energia elétrica.',
    },
    {
      titulo: 'Sustentabilidade',
      texto: 'Energia limpa e renovável, ajudando o planeta.',
    },
    {
      titulo: 'Valorização do Imóvel',
      texto: 'Imóveis com placas solares podem valorizar até 10%.',
    },
    {
      titulo: 'Retorno Garantido',
      texto: 'Payback médio entre 4 e 6 anos e economia mensal.',
    },
  ];

  return (
    <section id="porque-investir" className="pq-section">
      <h2>Por que investir em Energia Solar?</h2>

      <div className="pq-grid">
        {itens.map((item) => (
          <div className="pq-card" key={item.titulo}>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
