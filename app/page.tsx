"use client";

import BannerPrincipal from "@/components/bannerprincipal/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import SectionAcademia from "@/components/sectionacademia/page";
import SectionFutebol from "@/components/sectionfutebol/page";
import SectionNatacao from "@/components/sectionnatacao/page";
import SectionRa from "@/components/sectionRa/page";

export default function Home() {
  return (
    <>
      <Header />
      <BannerPrincipal />
      <SectionFutebol />
      <SectionNatacao />
      <SectionAcademia />
      <SectionRa />
      <Footer />
    </>
  );
}
