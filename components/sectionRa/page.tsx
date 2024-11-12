const SectionRa = () => {
  return (
    <section className="ml-72 ">
      <div className="flex items-center justify-center">
        <div
          className="novidades-flex relative mb-20 h-96 w-[1000px] bg-cover bg-center p-14"
          style={{ backgroundImage: "url('/assets/metaverso.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="text-shadow-lg relative z-10 text-white text-opacity-100">
            <h1 className="text-4xl font-bold">
              Descubra a Realidade Aumentada
            </h1>
            <p className="mt-10">
              A Realidade Aumentada (RA) é uma tecnologia inovadora que integra
              elementos virtuais ao mundo real, proporcionando uma experiência
              interativa e imersiva. Utilizando câmeras e sensores, a RA
              sobrepõe informações digitais, como imagens, vídeos e objetos 3D,
              ao ambiente físico. Isso permite visualizar o mundo com novos
              olhos, seja para entretenimento, educação ou aplicações
              industriais.
            </p>
          </div>
          <p className="absolute bottom-4 left-4 z-10 text-2xl font-bold">RA</p>
        </div>
        <div
          className="mb-20 h-96 w-[500px] bg-cover bg-center shadow-lg shadow-[#39D5FF]"
          style={{ backgroundImage: "url('/assets/metaverso.jpg')" }}
        ></div>
      </div>
    </section>
  );
};

export default SectionRa;
