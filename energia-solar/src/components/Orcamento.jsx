import React, { useState } from 'react';
import './Orcamento.css';

export default function Orcamento() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoSistema: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    alert('Formulário enviado com sucesso!');
    setFormData({ nome: '', email: '', telefone: '', tipoSistema: '' });
  };

  return (
    <section id="orcamento" className="orcamento-section">
      <h2>Solicite seu Orçamento</h2>

      <form onSubmit={handleSubmit} className="orcamento-form">
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Seu telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <select
          name="tipoSistema"
          value={formData.tipoSistema}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o tipo de sistema</option>
          <option value="residencial">Residencial</option>
          <option value="comercial">Comercial</option>
          <option value="rural">Rural</option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
