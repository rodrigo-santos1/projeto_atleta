const SectionAcademia = () => {
  return (
    <section className="mr-72">
      <div className="flex items-center justify-center">
        <div
          className="mb-20 h-96 w-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/musculacao.jpg')" }}
        ></div>
        <div
          className="novidades-flex relative mb-20 h-96 w-[1000px] bg-cover bg-center p-14 shadow-lg shadow-[#39D5FF]"
          style={{ backgroundImage: "url('/assets/musculacao01.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="text-shadow-lg relative z-10 text-white text-opacity-100">
            <h1 className="text-4xl font-bold">
              Supere Seus Limites: Acessórios de Musculação de Alta Tecnologia!
            </h1>
            <p className="mt-10">
              Supere seus limites com nossos acessórios de musculação de alta
              tecnologia! Nossa linha de produtos é desenvolvida para otimizar
              seus resultados. Desde luvas com aderência excepcional até cintos
              de levantamento de peso que proporcionam suporte máximo, temos
              tudo o que você precisa para atingir seus objetivos. Seja você um
              iniciante ou um atleta avançado, nossos acessórios são projetados
              para ajudá-lo a alcançar novos patamares. Experimente como a
              tecnologia pode transformar seu treino e fazer de cada repetição
              um passo em direção ao sucesso!
            </p>
          </div>
          <p className="absolute bottom-4 right-4 z-10 text-2xl font-bold text-white">
            ACADEMIA
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAcademia;
