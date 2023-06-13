import About from "@/feature/about";
import Faq from "@/feature/faq";
import Actuality from "@/feature/actuality";
import HeroSlide from "@/components/sliders/hero-slide";
import Galery from "@/feature/galery";
import Banner from "@/feature/banner";

export default function Home() {
  return (
    <>
      <HeroSlide />
      <About />
      <Faq />
      <Galery />
      <Banner />
      <Actuality />
    </>
  );
}
