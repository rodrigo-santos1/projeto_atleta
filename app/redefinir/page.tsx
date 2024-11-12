"use client";

import React, { useState } from "react";
import "./style.css"; // Importa o CSS
import Link from "next/link";
import Image from "next/image";

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Nova senha definida:", formData.newPassword);
    // Aqui você pode adicionar a lógica para redefinir a senha
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
            Redefinir Senha
          </h2>
        </div>
        <div className="form-row mt-4">
          <div className="flex flex-col">
            <label>Nova Senha:</label>
            <input
              className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4 mb-5 flex flex-col">
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
        <button
          type="submit"
          className=" w-full menu-li py-2"
        >
          Redefinir Senha
        </button>
        <Link
          href={"/login"}
          className=" w-full menu-li py-2 "
        >
          Voltar para Login
        </Link>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
