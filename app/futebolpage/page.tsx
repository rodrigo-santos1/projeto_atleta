"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

const Futebol = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <section className="w-full">
        {/* Banner */}
        <div
          className="relative flex h-96 items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/bola3d.jpg')" }}
        >
          {/* Título FUTEBOL */}
          <div className="absolute left-0 right-0 top-0 text-center text-4xl font-bold text-white">
            <h1>FUTEBOL</h1>
          </div>
        </div>

        {/* Linha divisória entre o banner e a pesquisa */}
        <div className="my-4 border-t-2 border-white"></div>

        <div className="mb-8 flex items-center justify-center gap-4 px-4">
          {/* Ícone de Home */}
          <Link href="/" className="text-[#39D5FF] hover:underline">
            <FaHome size={30} />
          </Link>

          {/* Barra de Pesquisa */}
          <div className="flex w-96 items-center rounded-md border border-gray-300">
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-[#39D5FF]"
            />
            <button className="rounded-r-md bg-[#39D5FF] p-3 text-white">
              <FaSearch />
            </button>
          </div>

          {/* Botões de Categoria */}
          <Link href="/futebol/masculino">
            <button className="rounded-lg bg-[#39D5FF] px-4 py-2 text-white transition duration-300 hover:bg-[#1b402c]">
              Masculino
            </button>
          </Link>
          <Link href="/futebol/feminino">
            <button className="rounded-lg bg-[#39D5FF] px-4 py-2 text-white transition duration-300 hover:bg-[#1b402c]">
              Feminino
            </button>
          </Link>
          <Link href="/futebol/infantil">
            <button className="rounded-lg bg-[#39D5FF] px-4 py-2 text-white transition duration-300 hover:bg-[#1b402c]">
              Infantil
            </button>
          </Link>
        </div>

        {/* Exibindo resultados de pesquisa */}
        <div className="w-full px-4">
          <div>
            {searchTerm ? (
              <p className="text-center text-gray-500">
                Resultados para: "{searchTerm}"
              </p>
            ) : (
              <p className="text-center text-gray-500">
                Mostrando todos os produtos
              </p>
            )}
          </div>
        </div>

        {/* Seção do Produto */}
        <div className="mt-8 w-full px-4 py-8">
          <div className="mx-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
            <img
              src="/assets/produto-exemplo.jpg" // Substitua com a imagem do produto
              alt="Produto"
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Nome do Produto
              </h2>
              <p className="mt-2 text-lg font-bold text-[#39D5FF]">R$ 99,90</p>
              <p className="mt-4 text-gray-500">
                Descrição curta sobre o produto, destacando suas características
                principais.
              </p>
              <div className="mt-6">
                <button className="w-full rounded-md bg-[#39D5FF] py-2 text-white hover:bg-[#1b402c]">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Futebol;
