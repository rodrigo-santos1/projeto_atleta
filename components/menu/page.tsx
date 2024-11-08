import React, { useState } from "react";
import SubMenuLoja from "../submenuloja/page";
import Link from "next/link";
import SubMenuFutebol from "../submenufutebol/page";
import SubMenuAcademia from "../submenuacademia/page";
import SubMenuNatacao from "../submenunatacao/page";
import SubMenuRa from "../submenura/page";
import SubMenuFavoritos from "../submenufavoritos/page";
import { SearchIcon } from "lucide-react";

const Menu = () => {
  const [visibleSubMenu, setVisibleSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setVisibleSubMenu(visibleSubMenu === menu ? null : menu);
  };

  return (
    <nav>
      <div className="flex items-center justify-center space-x-12 p-2 text-xl shadow-2xl">
        <li className="menu-li group relative items-end">
          <button
            onClick={() => toggleSubMenu("loja")}
            className="block h-full w-full focus:outline-none"
          >
            Loja
          </button>
          {visibleSubMenu === "loja" && (
            <div className="absolute left-0 top-16 z-auto whitespace-nowrap rounded-2xl border-b-4 border-t-4 border-[#39d4ff] bg-[#1b402c] p-4 px-2 py-2 opacity-100 shadow-lg">
              <SubMenuLoja />
            </div>
          )}
        </li>
        <li className="menu-li group relative items-end">
          <button
            onClick={() => toggleSubMenu("futebol")}
            className="block h-full w-full focus:outline-none"
          >
            Futebol
          </button>
          {visibleSubMenu === "futebol" && (
            <div className="absolute left-0 top-16 z-auto whitespace-nowrap rounded-2xl border-b-4 border-t-4 border-[#39d4ff] bg-[#1b402c] p-4 px-2 py-2 opacity-100 shadow-lg">
              <SubMenuFutebol />
            </div>
          )}
        </li>
        <li className="menu-li group relative items-end">
          <button
            onClick={() => toggleSubMenu("academia")}
            className="block h-full w-full focus:outline-none"
          >
            Academia
          </button>
          {visibleSubMenu === "academia" && (
            <div className="absolute left-0 top-16 z-auto whitespace-nowrap rounded-2xl border-b-4 border-t-4 border-[#39d4ff] bg-[#1b402c] p-4 px-2 py-2 opacity-100 shadow-lg">
              <SubMenuAcademia />
            </div>
          )}
        </li>
        <li className="menu-li group relative items-end">
          <button
            onClick={() => toggleSubMenu("natacao")}
            className="block h-full w-full focus:outline-none"
          >
            Natação
          </button>
          {visibleSubMenu === "natacao" && (
            <div className="absolute left-0 top-16 z-auto whitespace-nowrap rounded-2xl border-b-4 border-t-4 border-[#39d4ff] bg-[#1b402c] p-4 px-2 py-2 opacity-100 shadow-lg">
              <SubMenuNatacao />
            </div>
          )}
        </li>
        <li className="menu-li group relative items-end">
          <button
            onClick={() => toggleSubMenu("Realidade Aumentada")}
            className="block h-full w-full focus:outline-none"
          >
            Realidade Aumentada
          </button>
          {visibleSubMenu === "Realidade Aumentada" && (
            <div className="absolute left-0 top-16 z-auto whitespace-nowrap rounded-2xl border-b-4 border-t-4 border-[#39d4ff] bg-[#1b402c] p-4 px-2 py-2 opacity-100 shadow-lg">
              <SubMenuRa />
            </div>
          )}
        </li>
        <li className="menu-li group relative items-end">
          <button
            onClick={() => toggleSubMenu("favoritos")}
            className="block h-full w-full focus:outline-none"
          >
            Favoritos
          </button>
          {visibleSubMenu === "favoritos" && (
            <div className="absolute left-0 top-16 z-auto whitespace-nowrap rounded-2xl border-b-4 border-t-4 border-[#39d4ff] bg-[#1b402c] p-4 px-2 py-2 opacity-100 shadow-lg">
              <SubMenuFavoritos />
            </div>
          )}
        </li>
        <div className="relative">
          {/* Input com ícone de lupa */}
          <input
            type="text"
            placeholder="Buscar"
            className="w-full rounded-2xl border-2 border-transparent bg-stone-950 py-2 pl-12 pr-4 text-white shadow-lg hover:border-[#39D5FF] hover:shadow-[#39d4ff2f] focus:border-[#39D5FF] focus:outline-none"
          />

          {/* Ícone de lupa */}
          <SearchIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-white" />
        </div>
        <Link href={"/login"} className="menu-li">
          Entrar
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
