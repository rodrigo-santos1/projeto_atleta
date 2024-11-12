import Image from "next/image";

const Futebol = () => {
    return (
      <>
        <div className="bg-black"></div>
        <div className="h-35 fixed top-0 z-50 flex w-full list-none border-b-2 border-[#39D5FF] bg-[#1b402c] p-8 shadow-xl shadow-[#070808]"></div>

        <section className="w-full">
          <div className="relative">
            <div className="absolute bottom-0 h-1/6 w-full bg-gradient-to-t from-[#080F1A] via-[#080F1A]/80 to-transparent"></div>        
              <Image src="/bannerfutt.jpg" width={700} height={50} className="w-full" alt="" />           
          </div>
        </section>

        
      </>
    );
}
 
export default Futebol;