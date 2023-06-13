import About from "@/feature/about";
import Galery from "@/feature/galery";
import Actuality from "@/feature/actuality";
import HeroSlide from "@/components/sliders/hero-slide";

export default function Home() {
  return (
    <>
      <HeroSlide />
      <About />
      <Galery />
      <Actuality />
    </>
  );
}
