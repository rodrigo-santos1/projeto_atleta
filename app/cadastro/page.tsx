// ./app/cadastro/RegistrationPage.jsx
"use client";

import React, { useState } from "react";
import "./style.css"; // Importa o CSS
import Link from "next/link";
import Image from "next/image";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    ddd: "",
    birthDate: "",
    address: "",
    cep: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    <div className="form-background flex text-[#39d5ff]">
      <form
        onSubmit={handleSubmit}
        className="form-container w-96 rounded-3xl bg-gray-900 p-8"
      >
        <div className="flex flex-col items-center">
          <Image src="/logooficial.png" alt="" width={150} height={150} />

          <h2 className="mb-3 mt-4 text-center text-2xl text-[#39d5ff]">
            CADASTRA-SE
          </h2>
        </div>
        <div className="form-row mt-4">
          <div className="flex flex-col">
            <h2>Nome:</h2>
            <input
              className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <h2>Email:</h2>
            <input
              className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row mt-4">
          <div>
            <label>Senha:</label>
            <input
              className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Confirma Senha:</label>
            <input
              className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row mt-4">
          <div>
            <label>Telefone:</label>
            <input
              className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              name="Telefone"
              value={formData.ddd}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Data de Nascimento:</label>
            <input
              className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row mt-4">
          <div>
            <label>Endereço:</label>
            <input
              className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Cep:</label>
            <input
              className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row mt-4">
          <Link
            className="custom-button w-full rounded-3xl bg-blue-500 py-2 text-center text-white"
            type="submit"
            href={"/login"}
          >
            Registrar
          </Link>
        </div>
        <div className="form-row mt-4">
          <Link
            href={"/login"}
            className="custom-button mt-4 block bg-blue-500 text-center text-white"
          >
            Voltar para Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
