

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Carrinho = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  useEffect(() => {
    // Carregar os itens do carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    setItensCarrinho(carrinho);
  }, []);

  // Função para remover um item do carrinho
  const removerItemCarrinho = (index: number) => {
    const novoCarrinho = [...itensCarrinho];
    novoCarrinho.splice(index, 1);
    setItensCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  // Calcular o total do carrinho
  const calcularTotal = () => {
    return itensCarrinho
      .reduce((total, item) => total + item.preco, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#080F1A] p-8 text-white">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Carrinho de Compras
      </h1>

      {itensCarrinho.length === 0 ? (
        <div className="text-center text-lg text-gray-300">
          Seu carrinho está vazio.{" "}
          <Link href="/" className="text-[#39D5FF] hover:underline">
            Voltar à loja
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Listar os itens do carrinho */}
          {itensCarrinho.map((item, index) => (
            <div
              key={index}
              className="bg-[#1b402c] flex items-center rounded-lg p-4 shadow-md"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="h-32 w-32 rounded-md object-cover"
              />
              <div className="ml-4 flex-grow">
                <h2 className="text-xl font-semibold">{item.nome}</h2>
                <p className="text-lg text-[#39D5FF]">
                  R$ {item.preco.toFixed(2)}
                </p>
                <button
                  onClick={() => removerItemCarrinho(index)}
                  className="mt-4 rounded-md bg-[#FF3B3B] px-4 py-2 text-white transition duration-300 hover:bg-red-700"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Resumo do Carrinho */}
      {itensCarrinho.length > 0 && (
        <div className="mt-12 rounded-lg bg-[#1b402c] p-6 text-center shadow-md">
          <h2 className="text-2xl font-semibold">Resumo do Pedido</h2>
          <div className="mt-4 text-lg">
            <p>Total: R$ {calcularTotal()}</p>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/futebolpage"
              className="rounded-lg bg-[#39D5FF] px-6 py-3 text-white transition duration-300 hover:bg-[#1b402c]"
            >
              Voltar
            </Link>
            <Link
              href="/"
              className="rounded-lg bg-[#39D5FF] px-6 py-3 text-white transition duration-300 hover:bg-[#1b402c]"
            >
              Continuar Comprando
            </Link>
            <Link
              href="/pagamento"
              className="rounded-lg bg-[#39D5FF] px-6 py-3 text-white transition duration-300 hover:bg-[#1b402c]"
            >
              Finalizar Compra
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
