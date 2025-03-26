"use client";

import React, { useState } from 'react';
import "./style.css"; // Importando o CSS

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
      console.log("Dados enviados:", formData);
    }
  };

  return (
    <div className="form-background">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>Nome:</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} />
              {formErrors.username && <p style={{ color: "red" }}>{formErrors.username}</p>}
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Senha:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
              {formErrors.password && <p style={{ color: "red" }}>{formErrors.password}</p>}
            </div>
            <div>
              <label>Confirmar Senha:</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              {formErrors.confirmPassword && <p style={{ color: "red" }}>{formErrors.confirmPassword}</p>}
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>DDD:</label>
              <input type="text" name="ddd" value={formData.ddd} onChange={handleChange} />
              {formErrors.ddd && <p style={{ color: "red" }}>{formErrors.ddd}</p>}
            </div>
            <div>
              <label>Data de Nascimento:</label>
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
              {formErrors.birthDate && <p style={{ color: "red" }}>{formErrors.birthDate}</p>}
            </div>
          </div>

          <div>
            <label>Endereço:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
            {formErrors.address && <p style={{ color: "red" }}>{formErrors.address}</p>}
          </div>

          <div>
            <label>CEP:</label>
            <input type="text" name="cep" value={formData.cep} onChange={handleChange} />
            {formErrors.cep && <p style={{ color: "red" }}>{formErrors.cep}</p>}
          </div>

          <button type="submit" className="custom-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
