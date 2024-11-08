const SectionNatacao = () => {
  return (
    <section className="ml-72 mt-14">
      <div className="flex items-center justify-center">
        <div
          className="novidades-flex relative mb-20 h-96 w-[1000px] bg-cover bg-center p-14"
          style={{ backgroundImage: "url('/assets/nadador.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="text-shadow-lg relative z-10 text-white text-opacity-100">
            <h1 className="text-4xl font-bold">
              Nade com Excelência: Acessórios de Alta Tecnologia para Campeões!
            </h1>
            <p className="mt-10">
              Mergulhe na excelência com nossos acessórios de natação de última
              geração! Nossa linha de produtos de alta qualidade é projetada
              para maximizar sua performance na água. Desde óculos com
              tecnologia antiembaçante até toucas que reduzem a resistência,
              temos tudo o que você precisa para nadar como um campeão. Seja
              você um nadador iniciante ou profissional, nossos acessórios são
              feitos para você alcançar o seu melhor. Descubra como a tecnologia
              pode transformar seu desempenho e fazer de cada braçada uma
              vitória!
            </p>
          </div>
          <p className="absolute bottom-4 left-4 z-10 text-2xl font-bold">
            Natação
          </p>
        </div>
        <div
          className="mb-20 h-96 w-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/natacao.jpg')" }}
        ></div>
      </div>
    </section>
  );
};

export default SectionNatacao;
