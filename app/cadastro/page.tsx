"use client";

import React, { useState } from 'react';
import "./style.css"; // Importando o CSS

const CadastroPage: React.FC = () => {
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    endereco: '',
    telefone: '',
    cep: '',
    email: '',
    senha: '',
    logradouro: '',
    cidade: '',
    estado: '',
    numero: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para a API
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={form.cpf}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dataNascimento"
          placeholder="Data de Nascimento"
          value={form.dataNascimento}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={form.endereco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="numero"
          placeholder="Número"
          value={form.numero || ''}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="logradouro"
          placeholder="Logradouro"
          value={form.logradouro || ''}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={form.cidade || ''}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="estado"
          placeholder="Estado"
          value={form.estado || ''}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          value={form.cep}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
        <button type="button" onClick={() => window.history.back()}>Voltar</button>
      </form>
    </div>
  );
};

export default CadastroPage;

