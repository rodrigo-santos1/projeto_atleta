"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CheckoutPage = () => {
  const [quantity, setQuantity] = useState(1); // Controle de quantidade do produto

  // Função para aumentar a quantidade
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Função para diminuir a quantidade, sem permitir valores abaixo de 1
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Cálculo do preço total (preço do produto + frete)
  const price = 30.0;
  const shipping = 10.0;
  const total = price * quantity + shipping;

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <Image src="/logooficial.png" alt="Logo" width={150} height={150} />
        </div>
        <h1 className="mb-8 mt-4 text-center text-4xl text-[#39d5ff]">
          Detalhes do produto
        </h1>

        <div className="mb-8 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-2xl">Produto</h2>
          <div className="items-center">
            <Image
              src="/assets/nike.jpg"
              alt="Produto Nike"
              width={120}
              height={100}
            />
          </div>
          <div className="border-t border-gray-600 py-4">
            <p>
              Produto: <strong>Chuteira Nike</strong>
            </p>
            <p>
              Tamanho: <strong>43</strong>
            </p>
            <p>
              Cor: <strong>Laranja</strong>
            </p>

            <div className="flex items-center space-x-4">
              <p>
                Quantidade:{" "}
                <button
                  onClick={handleDecrease}
                  className="items-center rounded-2xl bg-gray-600 px-4 py-2 text-white hover:bg-blue-500"
                >
                  -
                </button>
                <strong className="ms-2">{quantity}</strong>
              </p>

              <button
                onClick={handleIncrease}
                className="items-center rounded-2xl bg-gray-600 px-4 py-2 text-white hover:bg-blue-500"
              >
                +
              </button>
            </div>

            <p>
              Preço: <strong>${price.toFixed(2)}</strong>
            </p>
            <p>
              Frete: <strong>${shipping.toFixed(2)}</strong>
            </p>
          </div>

          <div className="border-t border-gray-600 py-4">
            <p className="text-lg">
              Total: <strong>${total.toFixed(2)}</strong>
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-4">
          <Link href="/" className="menu-li px-6 py-2">
            Voltar para a loja
          </Link>
          <Link href="/produto" className="menu-li px-6 py-2">
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
