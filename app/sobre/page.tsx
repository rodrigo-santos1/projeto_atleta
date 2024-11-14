import Image from "next/image";
import Link from "next/link";

const Sobre = () => {
  return (
    <>
      <div className="min-h-screen bg-black p-10 text-white">
        <div className="container mx-auto">
          <div className="flex h-40 flex-col items-center">
            <Image
              src="/logooficial.png"
              alt="Logo Oficial"
              width={160}
              height={160}
            />
          </div>
          {/* Título */}
          <h1 className="mb-8 py-6 text-center text-4xl font-bold text-[#39d5ff]">
            Sobre
          </h1>

          <div className="border-t border-gray-600 px-2">
            <div className="flex flex-col items-center py-4">
              <div className="my-4 h-6 w-32"></div>
              <p className="text-lg leading-relaxed">
                <strong>
                  Bem-vindo à Atleta Digital, a sua loja online especializada em
                  produtos de alta qualidade para atletas de todos os níveis.
                  Aqui, nossa missão é proporcionar a melhor experiência de
                  compra, oferecendo um catálogo de produtos cuidadosamente
                  selecionados para atender às suas necessidades esportivas.
                </strong>
              </p>
              <p className="py-2 text-lg leading-relaxed">
                <strong>
                  Desde de 2024, trabalhamos com marcas renomadas e de confiança
                  para garantir que cada item disponível em nossa loja ofereça o
                  melhor em performance, conforto e durabilidade. Nosso
                  compromisso é com a qualidade e com a sua satisfação, por
                  isso, nossa equipe está sempre disponível para ajudá-lo com
                  qualquer dúvida ou necessidade.
                </strong>
              </p>
              <p className="py-2 text-lg leading-relaxed">
                <strong>
                  Além disso, acreditamos em um atendimento personalizado, com
                  preços acessíveis e entrega rápida, para que você possa se
                  concentrar no que realmente importa: o seu desempenho como um
                  atleta profissional ou para somente poder praticar atividades
                  físicas. Nossos Valores: Qualidade e Confiabilidade;
                  Atendimento ao Cliente de Excelência; Preços Acessíveis para
                  Todos; Compromisso com a Sustentabilidade.
                </strong>
              </p>
              <p className="py-2 text-lg leading-relaxed">
                <strong>
                  Junte-se a nós e faça parte da nossa comunidade de atletas
                  apaixonados por esportes. Aqui na Atleta Digital, seu
                  desempenho é nossa prioridade!
                </strong>
              </p>
            </div>
          </div>
          {/* Divisória */}
          <div className="my-8 border-t border-gray-600"></div>
          <div className="mt-10 flex justify-center space-x-4">
            <Link href="/" className="menu-li px-6 py-2">
              Voltar para a loja
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
