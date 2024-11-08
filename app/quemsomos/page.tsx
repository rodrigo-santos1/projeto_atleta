import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
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
        {/* Título da página */}
        <h1 className="mb-8 py-6 text-center text-4xl font-bold text-[#39d5ff]">
          Quem Somos
        </h1>

        <div className="border-t border-gray-600 px-2">
          {/* Seção de Introdução */}
          <div className="flex flex-col items-center py-4">
            <div className="my-4 h-6 w-32"></div>
            <p className="text-lg leading-relaxed">
              <strong>
                Bem-vindo à Atleta Digital, onde a inovação e o estilo se
                encontram! Somos uma loja online especializada em roupas,
                acessórios e jogos de realidade aumentada voltados para
                academia, natação e musculação. Nossa missão é proporcionar a
                melhor experiência de compra para nossos clientes, oferecendo
                produtos de alta qualidade que combinam tecnologia e moda.
              </strong>
            </p>
            <p className="py-4 text-lg leading-relaxed">
              <strong>Nossa Missão:</strong> Acreditamos que a prática esportiva
              deve ser acessível, divertida e estilosa. Por isso, selecionamos
              cuidadosamente cada item do nosso catálogo para garantir que você
              tenha o melhor desempenho, seja na academia, na piscina ou no seu
              treino de musculação. Estamos na vanguarda da tecnologia com
              nossos jogos de realidade aumentada, que transformam sua rotina de
              exercícios em uma experiência imersiva e interativa. Com a
              realidade aumentada, você pode visualizar e experimentar nossos
              produtos de uma maneira totalmente nova, diretamente do conforto
              da sua casa.
            </p>
            <p className="py-4 text-lg leading-relaxed">
              <strong>Qualidade e Confiança:</strong> Nosso compromisso é com a
              qualidade e a satisfação dos nossos clientes. Trabalhamos com as
              melhores marcas e fornecedores para garantir que você receba
              produtos duráveis, confortáveis e com ótimo custo-benefício. Somos
              uma equipe apaixonada por esportes e tecnologia, dedicada a
              oferecer um atendimento personalizado e eficiente. Estamos sempre
              prontos para ajudar você a encontrar o produto ideal e tirar
              qualquer dúvida.
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
  );
};

export default AboutUs;
