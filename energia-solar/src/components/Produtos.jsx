import React from 'react';
import './Produtos.css';
import placa from '../assets/images/placa.png';
import kit from '../assets/images/kit.png';
import inversor from '../assets/images/inversor.png';

export default function Produtos() {
  const itens = [
    {
      nome: 'Placa Solar 400 W',
      img: placa,
      desc: 'Alta eficiência para uso residencial e comercial.',
    },
    {
      nome: 'Kit Solar Completo',
      img: kit,
      desc: 'Inclui placas, inversor, estrutura, cabos e instalação profissional.',
    },
    {
      nome: 'Inversor Solar',
      img: inversor,
      desc: 'Transforma energia solar em energia elétrica para sua casa.',
    },
  ];

  return (
    <section id="produtos" className="produtos-section">
      <h2>Nossos Produtos</h2>

      <div className="produtos-grid">
        {itens.map((p) => (
          <article className="produto-card" key={p.nome}>
            <div className="produto-img-wrap">
              <img src={p.img} alt={p.nome} />
            </div>

            <h3>{p.nome}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
