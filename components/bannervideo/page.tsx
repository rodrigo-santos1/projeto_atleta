const BannerVideo = () => {
  return (
    <section className="w-full ">
      <div className="relative w-full">
        <div className="absolute top-0 z-20 flex h-48 w-full items-center justify-center bg-gradient-to-tl from-[#080F1A] via-[#080F1A]/70 to-transparent text-white">
          <h1 className="mt-28 font-serif text-3xl">Atleta Digital</h1>
        </div>
        <div className="relative w-full" style={{ height: "800px" }}>
          <video
            className="absolute left-0 top-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/videos/xlarge.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        <div className="absolute bottom-0 h-1/6 w-full bg-gradient-to-t from-[#080F1A] via-[#080F1A]/80 to-transparent"></div>
      </div>
      </section>
  );
};

export default BannerVideo;
