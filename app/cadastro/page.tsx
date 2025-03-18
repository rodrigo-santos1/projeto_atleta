"use client";

import React, { useState } from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  ddd: string;
  birthDate: string;
  address: string;
  cep: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    ddd: "",
    birthDate: "",
    address: "",
    cep: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Se não houver erros, envia os dados
      console.log("Dados enviados:", formData);
      // Aqui você pode fazer a lógica de envio do formulário, como uma chamada de API ou algo similar.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ...seus campos de formulário aqui... */}
    </form>
  );
};

export default Page;