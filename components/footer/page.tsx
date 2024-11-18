import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,

} from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="relative mt-20 flex w-full items-center justify-between overflow-hidden border-t-2 border-[#39D5FF] bg-[#1b402c] p-6">
      <div className="absolute left-0 top-0 h-full w-full from-[#39D5FF] to-[#1b402c] opacity-50 blur-sm"></div>

      {/* bg-gradient-to-r */}

      {/* Links de navegação */}
      <div className="relative z-10 ms-20 hidden gap-8 text-white md:flex">
        <a href="/sobre" className="transition-colors hover:text-[#39D5FF]">
          Sobre
        </a>
        <a href="/politica" className="transition-colors hover:text-[#39D5FF]">
          Política de Privacidade
        </a>
        <a href="/termos" className="transition-colors hover:text-[#39D5FF]">
          Termos de Uso
        </a>
      </div>

      <div className="relative z-10 mb-4 justify-center text-center text-white sm:mb-0">
        <p>
          &copy; {new Date().getFullYear()} Atleta Digital. Todos os direitos
          reservados.
        </p>
        <p>Desenvolvido por Marcelo Felipe e Rodrigo Graça.</p>
      </div>

      <div className="relative z-10 me-40 flex gap-6 sm:gap-4">
        <a
          href="https://www.instagram.com/seu_perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="transform text-3xl text-white transition-colors hover:scale-110 hover:text-[#39D5FF]"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/5512991459626"
          target="_blank"
          rel="noopener noreferrer"
          className="transform text-3xl text-white transition-colors hover:scale-110 hover:text-[#39D5FF]"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+5531999999999"
          className="transform text-3xl text-white transition-colors hover:scale-110 hover:text-[#39D5FF]"
        >
          <FaPhoneAlt />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
