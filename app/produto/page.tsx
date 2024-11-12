"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState(null); 

  const handlePaymentChange = (method) => {
    if (paymentMethod === method) {
      setPaymentMethod(null); 
    } else {
      setPaymentMethod(method); 
    }
  };

  return (
    <div className="min-h-screen bg-black px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        {/* Título */}
        <h1 className="mb-6 text-center text-3xl font-bold text-[#39d5ff]">
          Finalizando sua Compra
        </h1>

        {/* Resumo do Pedido */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Resumo do Pedido
          </h2>
          <div className="mb-4 rounded-lg bg-gray-900 p-4 shadow-sm">
            <div className="flex justify-between text-white">
              <span>Produto 1</span>
              <span>R$ 50,00</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Produto 2</span>
              <span>R$ 30,00</span>
            </div>
            <div className="mt-4 flex justify-between font-semibold text-white">
              <span>Total</span>
              <span>R$ 80,00</span>
            </div>
          </div>
        </div>

        
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Forma de Pagamento
          </h2>
          <div className="space-y-4">
            {/* Cartão */}
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="credit-card"
                name="payment-method"
                checked={paymentMethod === "credit-card"}
                onChange={() => handlePaymentChange("credit-card")}
                className="h-5 w-5 border-gray-300 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="credit-card" className="text-gray-700">
                <span className="font-semibold">Cartão de Crédito</span>
              </label>
            </div>
            {paymentMethod === "credit-card" && (
              <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
                <label className="block font-semibold text-gray-700">
                  Número do Cartão
                </label>
                <input
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="mt-2 w-full rounded-md border bg-white p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="mt-4 flex space-x-4">
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-1/3 rounded-md border bg-white p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/3 rounded-md border bg-white p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Pix */}
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="pix"
                name="payment-method"
                checked={paymentMethod === "pix"}
                onChange={() => handlePaymentChange("pix")}
                className="h-5 w-5 border-gray-300 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="pix" className="text-gray-700">
                <span className="font-semibold">Pix</span>
              </label>
            </div>
            {paymentMethod === "pix" && (
              <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
                <p className="text-gray-700">
                  Para pagar via Pix, basta gerar o QR Code abaixo ou copiar a
                  chave Pix.
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <Image
                    src="/pix-qrcode.png"
                    alt="QR Code Pix"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="mt-4">
                  <span className="font-semibold text-gray-700">
                    Chave Pix:
                  </span>
                  <p className="text-gray-600">exemplo@dominio.com</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Botão confirma */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/pagamento" className="menu-li px-6 py-2 sm:w-auto">
            Voltar
          </Link>
          <Link href="/confirmacao" className="menu-li px-6 py-2 sm:w-auto">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
