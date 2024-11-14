"use client";
import MenuPageFutebol from "@/components/menupagefutebol/page";
import { useState } from "react";
import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

const Futebol = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleAdicionarAoCarrinho = () => {
    const produto = {
      nome: "Nome do Produto",
      preco: 99.9,
      imagem: "../nike1.jpeg", // Imagem do produto
    };

    // Salvar no localStorage (você também pode usar Context ou Redux aqui)
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Redirecionar para a página do carrinho
    window.location.href = "/carrinho"; // Redireciona para a página do carrinho
  };

  return (
    <>
      <div className="min-h-screen bg-[#080F1A]">
        <section className="w-full">
          <div
            className="relative flex h-96 items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/bola3d.jpg')" }}
          ></div>
          <div className="my-4 border-t-2 border-[white]"></div>

          <div className="mb-8 me-96 flex gap-4 justify-center">
              <div className="  me-96 text-3xl font-bold text-white">
                <h1>FUTEBOL</h1>
              </div>
            {/* Para pesquisa */}
            <div className="flex items-center rounded-md me-72 ms-72 border-gray-300">
              <Link href="/" className="text-[#39D5FF] hover:underline me-2 mb-2">
                <FaHome size={30} className="mt-2" />
              </Link>
        

              <input
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-[#39D5FF]"
              />
              <button className="rounded-r-md bg-[#39D5FF] p-3 text-white transition duration-300 hover:bg-[#1b402c]">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Menu lateral não deve alterar o input de pesquisa */}
          <div className="flex">
            <div className="w-2/12">
              <MenuPageFutebol />
            </div>
            <div className="w-3/4 pl-4">
              {/* Seção do Produto */}
              <div className="mt-10 flex w-full justify-center px-4 py-8">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="../nike1.jpeg"
                    alt="Produto"
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </div>
                <div className="rounded-lg bg-[#1b402c] p-4 shadow-lg">
                  <h2 className="text-xl font-semibold text-white">
                    Nome do Produto
                  </h2>
                  <p className="mt-2 text-lg font-bold text-[#39D5FF]">
                    R$ 99,90
                  </p>
                  <p className="mt-4 text-white">
                    Descrição curta sobre o produto, destacando suas
                    características principais.
                  </p>
                  <div className="mt-6">
                    {/* Botão Adicionar ao Carrinho */}
                    <button
                      onClick={handleAdicionarAoCarrinho}
                      className="w-full rounded-lg bg-[#39D5FF] py-3 font-bold text-white transition duration-300 hover:bg-sky-600"
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex w-full justify-center px-4 py-8">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="../nike1.jpeg"
                    alt="Produto"
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </div>
                <div className="rounded-lg bg-[#1b402c] p-4 shadow-lg">
                  <h2 className="text-xl font-semibold text-white">
                    Nome do Produto
                  </h2>
                  <p className="mt-2 text-lg font-bold text-[#39D5FF]">
                    R$ 99,90
                  </p>
                  <p className="mt-4 text-white">
                    Descrição curta sobre o produto, destacando suas
                    características principais.
                  </p>
                  <div className="mt-6">
                    {/* Botão Adicionar ao Carrinho */}
                    <button
                      onClick={handleAdicionarAoCarrinho}
                      className="w-full rounded-lg bg-[#39D5FF] py-3 font-bold text-white transition duration-300 hover:bg-sky-600"
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex w-full justify-center px-4 py-8">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="../nike1.jpeg"
                    alt="Produto"
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </div>
                <div className="rounded-lg bg-[#1b402c] p-4 shadow-lg">
                  <h2 className="text-xl font-semibold text-white">
                    Nome do Produto
                  </h2>
                  <p className="mt-2 text-lg font-bold text-[#39D5FF]">
                    R$ 99,90
                  </p>
                  <p className="mt-4 text-white">
                    Descrição curta sobre o produto, destacando suas
                    características principais.
                  </p>
                  <div className="mt-6">
                    {/* Botão Adicionar ao Carrinho */}
                    <button
                      onClick={handleAdicionarAoCarrinho}
                      className="w-full rounded-lg bg-[#39D5FF] py-3 font-bold text-white transition duration-300 hover:bg-sky-600"
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Futebol;
