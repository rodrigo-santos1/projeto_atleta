import { useState } from "react";

const MenuPageFutebol = () => {
  // Estado para gerenciar a categoria selecionada e o submenu
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  // Função para alternar a visibilidade dos submenus
  const toggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const toggleSection = (section) => {
    setSelectedSection(selectedSection === section ? null : section);
  };

  return (
    // Container do menu lateral com o fundo #080F1A (sem mudar a cor dos botões)
    //  @apply rounded-2xl pr-3 border-y-2 shadow-lg hover:shadow-[#39d4ff2f] border-transparent hover:text-[#FFFFFF] bg-[#1b402c] hover:border-[#39D5FF] pl-3 m-0 items-center mb-2 justify-center text-[#39D5FF] flex transition duration-300;
    <div className="ml-2.5 mt-24 w-52 rounded-2xl border-y-2 border-transparent bg-[#080F1A] p-4 text-white  hover:text-[#FFFFFF]">
      {/* <h2 className="mb-4 text-xl font-bold">Menu Lateral</h2> */}

      {/* Menu de Categorias */}
      <div className="space-y-2">
        <div>
          <button
            className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-2 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            onClick={() => toggleCategory("masculino")}
          >
            Masculino
          </button>
          {selectedCategory === "masculino" && (
            <div className="space-y-2 pl-4">
              <button
                className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-2 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
                onClick={() => toggleSection("roupasMasculino")}
              >
                Roupas
              </button>
              {selectedSection === "roupasMasculino" && (
                <div className="space-y-1 rounded-2xl border-y-2 py-1 pl-3 pl-4 pr-3">
                  <button className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-1 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]">
                    Casual
                  </button>
                  <button className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-1 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]">
                    Corrida
                  </button>
                  <button className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-1 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]">
                    Chuteiras
                  </button>
                  {/* Continue com os outros itens... */}
                </div>
              )}

              <button
                className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-2 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
                onClick={() => toggleSection("acessoriosMasculino")}
              >
                Acessórios
              </button>
              {selectedSection === "acessoriosMasculino" && (
                <div className="space-y-1 pl-4">
                  <button className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-1 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]">
                    Bonés & Viseiras
                  </button>
                  <button className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-1 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]">
                    Bolsas & Mochilas
                  </button>
                  {/* Continue com os outros itens... */}
                </div>
              )}

              <button
                className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-2 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
                onClick={() => toggleSection("calcadosMasculino")}
              >
                Calçados
              </button>
              {selectedSection === "calcadosMasculino" && (
                <div className="space-y-1 pl-4">
                  <button className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-1 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]">
                    Tênis Casual
                  </button>
                  <button className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-1 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]">
                    Corrida
                  </button>
                  {/* Continue com os outros itens... */}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Repetir estrutura para 'feminino' e 'infantil' */}
        <div>
          <button
            className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-2 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            onClick={() => toggleCategory("feminino")}
          >
            Feminino
          </button>
          {selectedCategory === "feminino" && (
            <div className="space-y-2 pl-4">
              {/* Submenus para Feminino aqui */}
            </div>
          )}
        </div>

        <div>
          <button
            className="m-0 mb-2 flex w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#1b402c] px-4 py-2 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-gray-700 hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            onClick={() => toggleCategory("infantil")}
          >
            Infantil
          </button>
          {selectedCategory === "infantil" && (
            <div className="space-y-2 pl-4">
              {/* Submenus para Infantil aqui */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPageFutebol;
