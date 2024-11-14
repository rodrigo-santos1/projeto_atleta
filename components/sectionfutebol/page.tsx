const SectionFutebol = () => {
  return (
    <section className="mr-72 mt-20">
      <div className="flex items-center justify-center">
        <div
          className="relative flex h-96 w-[500px] items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/bola3d.jpg')" }}></div>
        <div
            className="novidades-flex relative h-96 w-[1000px] bg-cover bg-center p-14 shadow-lg shadow-[#39D5FF]"
            style={{ backgroundImage: "url('/assets/bola.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="text-shadow-lg relative z-10 text-white text-opacity-100">
              <h1 className="text-4xl font-bold">
                Domine o Jogo: Acessórios de Futebol de Alta Tecnologia, para Sua
                Melhor Performance!
              </h1>
              <p className="mt-10">
                Eleve seu jogo com acessórios de última geração! Nossa linha de
                produtos de alta qualidade é projetada para maximizar sua
                performance em campo. Desde chuteiras com tecnologia de
                amortecimento avançada até luvas que oferecem a melhor aderência,
                temos tudo o que você precisa para se destacar. Não importa se
                você é um jogador amador ou profissional, nossos acessórios são
                feitos para você alcançar o seu melhor. Venha descobrir como a
                tecnologia pode transformar seu desempenho e fazer de cada partida
                uma vitória!
              </p>
        </div>
          <p className="absolute bottom-4 right-4 z-10 text-2xl font-bold text-white">
            FUTEBOL
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFutebol;
