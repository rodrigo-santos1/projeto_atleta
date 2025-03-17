import Image from "next/image"; 
import Menu from "../menu/page";

const Header = () => {
  return (
    <>
      <header>
        <div className="h-35 fixed top-0 z-50 flex w-full list-none items-end justify-center border-b-2 border-[#39D5FF] bg-[#1b402c] p-3 shadow-xl shadow-[#070808]">
          <Image
            src="/Logo.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="md-6 mr-10 rounded-full shadow-md hover:shadow- [#39D5FF]"
          />
          <Menu />
        </div>
      </header>
    </>
  );
};

export default Header;
