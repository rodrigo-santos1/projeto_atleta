const SubMenuLoja = () => {
  return (
    <>
      <ul className="flex-col">
        <li className="menu-li p-auto">
          <a href="/quemsomos" className="block h-full w-full">
            Quem Somos
          </a>
        </li>
        <li className="menu-li">
          <a href="#" className="block h-full w-full">
            Todos os produtos
          </a>
        </li>
        <li className="menu-li whitespace-nowrap">
          <a href="#" className="block h-full w-full">
            Lançamentos
          </a>
        </li>
        <li className="menu-li whitespace-nowrap">
          <a href="#" className="block h-full w-full">
            Mais vendidos
          </a>
        </li>
        <li className="menu-li whitespace-nowrap">
          <a href="#" className="block h-full w-full">
            Ofertas Especiais
          </a>
        </li>
      </ul>
    </>
  );
};

export default SubMenuLoja;
