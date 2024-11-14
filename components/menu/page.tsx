import React, { useState } from "react";
import SubMenuLoja from "../submenuloja/page";
import Link from "next/link";
import { SearchIcon } from "lucide-react";

const Menu = () => {
  const [visibleSubMenu, setVisibleSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setVisibleSubMenu(visibleSubMenu === menu ? null : menu);
  };

  return (
    <nav>
      <div className="flex items-center justify-center space-x-12 p-2 text-xl ">
        <li className="menu-li group relative items-end ">
          <button
            onClick={() => toggleSubMenu("loja")}
            className="block h-full w-full focus:outline-none"
          >
            Loja
          </button>
          {visibleSubMenu === "loja" && (
            <div className="absolute left-0 top-20 z-auto whitespace-nowrap rounded-2xl border-b-4 border-t-4 border-[#39d4ff] bg-[#1b402c] p-4 px-2 py-2 opacity-100 shadow-lg">
              <SubMenuLoja />
            </div>
          )}
        </li>
        <li className="menu-li group relative items-end">
          <Link className="" href={"/futebolpage"}>
            Futebol
          </Link>
        </li>
        <li className="menu-li group relative items-end">
          <button>
            Academia
          </button>
        </li>
        <li className="menu-li group relative items-end">
          <button>
            Natação
          </button>
        </li>
        <li className="menu-li group relative items-end">
          <button>
            Realidade Aumentada
          </button>
       </li>
        <li className="menu-li group relative items-end">
          <button>
            Favoritos
          </button>
        </li>
        <div className="relative">
         <input
            type="text"
            placeholder="Buscar"
            className="w-full rounded-2xl border-2 border-transparent bg-stone-950 py-2 pl-8 pr-2 text-white shadow-lg hover:border-[#39D5FF] hover:shadow-[#39d4ff2f] focus:border-[#39D5FF] focus:outline-none"
          />

          {/* Ícone de lupa */}
          <SearchIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-white " />
        </div>
        <Link href={"/login"} className="menu-li">
          Entrar
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
