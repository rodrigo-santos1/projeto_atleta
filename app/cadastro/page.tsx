"use client";

import React, { useState } from "react";
import "./style.css"; // Importa o CSS
import Link from "next/link";
import Image from "next/image";
import InputMask from "react-input-mask";

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

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    ddd: "",
    birthDate: "",
    address: "",
    cep: "",
  });

  const handleChange = () => {
    const { name, value } = (e.target as HTMLInputElement);
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username) errors.username = "Por favor, preencha seu nome.";
    if (!formData.email) errors.email = "Por favor, preencha seu email.";
    if (!formData.password) errors.password = "Por favor, preencha a senha.";
    if (!formData.confirmPassword)
      errors.confirmPassword = "Por favor, confirme a senha.";
    if (!formData.ddd) errors.ddd = "Por favor, preencha o telefone.";
    if (!formData.birthDate)
      errors.birthDate = "Por favor, preencha a data de nascimento.";
    if (!formData.address) errors.address = "Por favor, preencha seu endereço.";
    if (!formData.cep) errors.cep = "Por favor, preencha o CEP.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Se não houver erros, envia os dados
      console.log("Dados enviados:", formData);
      // Aqui você pode fazer a lógica de envio do formulário, como uma chamada de API ou algo similar.
    } else {
      // Caso haja erros, a validação já está exibindo as mensagens.
      console.log("Por favor, preencha todos os campos.");
    }
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

        {/* Nome */}
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
            {formErrors.username && (
              <span className="text-red-500">{formErrors.username}</span>
            )}
          </div>

          {/* Email */}
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
            {formErrors.email && (
              <span className="text-red-500">{formErrors.email}</span>
            )}
          </div>
        </div>

        {/* Senha e Confirmação de Senha */}
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
            {formErrors.password && (
              <span className="text-red-500">{formErrors.password}</span>
            )}
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
            {formErrors.confirmPassword && (
              <span className="text-red-500">{formErrors.confirmPassword}</span>
            )}
          </div>
        </div>

        {/* Telefone e Data de Nascimento */}
        <div className="form-row mt-4">
          <div>
            <label>Telefone:</label>
            <InputMask
              mask="(99) 99999-9999"
              className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
              name="ddd"
              value={formData.ddd}
              onChange={handleChange}
              required
            />
            {formErrors.ddd && (
              <span className="text-red-500">{formErrors.ddd}</span>
            )}
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
            {formErrors.birthDate && (
              <span className="text-red-500">{formErrors.birthDate}</span>
            )}
          </div>
        </div>

        {/* Endereço e CEP */}
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
            {formErrors.address && (
              <span className="text-red-500">{formErrors.address}</span>
            )}
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
            {formErrors.cep && (
              <span className="text-red-500">{formErrors.cep}</span>
            )}
          </div>
        </div>

        {formData.username != "" &&
        formData.email != "" &&
        formData.password != "" &&
        formData.confirmPassword != "" &&
        formData.ddd != "" &&
        formData.birthDate != "" &&
        formData.address != "" &&
        formData.cep != "" ? (
          <div className="form-row mt-4">
            <Link
              className=" menu-li w-full rounded-3xl py-2 text-center text-white"
              type="submit"
              href={"/"}
            >
              Registrar
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className="form-row mt-4">
          <Link
            href={"/login"}
            className=" menu-li mt-4 w-full py-2 text-center text-white"
          >
            Voltar para Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
