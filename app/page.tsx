"use client";


import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import SectionAcademia from "@/components/sectionacademia/page";
import SectionFutebol from "@/components/sectionfutebol/page";
import SectionNatacao from "@/components/sectionnatacao/page";
import SectionRa from "@/components/sectionRa/page";
import BannerVideo from "@/components/bannervideo/page";
import BannerPrincipal from "@/components/bannerprincipal/page";
import Carousell from "@/components/carrossel/page";


export default function Home() {
  return (
    <>
      <Header />
      <BannerVideo />
      <BannerPrincipal />
      <SectionFutebol />
      <SectionNatacao />
      <SectionAcademia />
      <SectionRa />
      <Carousell />
      <Footer />
    </>
  );
}
