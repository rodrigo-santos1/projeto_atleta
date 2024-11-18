
import Link from "next/link";
import { SearchIcon } from "lucide-react";

const Menu = () => {


  return (
    <nav>
      <div className="flex items-center justify-center space-x-12 p-2 text-xl">
        <li className="menu-li group relative items-end">
          <Link className="" href={"/quemsomos"} >
           Quem Somos
          </Link>
        </li>
        <li className="menu-li group relative items-end">
          <Link className="" href={"/futebolpage"}>
            Futebol
          </Link>
        </li>
        <li className="menu-li group relative items-end">
          <Link className="" href={"/academiapage"}>
            Academia
          </Link>
        </li>
        <li className="menu-li group relative items-end">
          <Link className="" href={"/natacaopage"}>
            Natação
          </Link>
        </li>
        <li className="menu-li group relative items-end">
          <Link className="" href={"/rapage"}>
            Realidade Aumentada
          </Link>
        </li>
        <li className="menu-li group relative items-end">
          <button>Favoritos</button>
        </li>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full rounded-2xl border-2 border-transparent bg-stone-950 py-2 pl-8 pr-2 text-white shadow-lg hover:border-[#39D5FF] hover:shadow-[#39d4ff2f] focus:border-[#39D5FF] focus:outline-none"
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
