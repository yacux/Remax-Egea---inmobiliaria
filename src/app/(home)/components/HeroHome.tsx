import { SwiperHero } from "@/presentation/organisms/SwiperHero";
import { SlideHeroBtn, SlideHeroTitle } from "@/presentation/molecules";

type imageProps = {
  id: number;
  src: string;
};

export default function HeroHome() {
  const images = [
    <SlideHeroBtn
      key={1}
      imgSrc="/caro-mobile.png"
      imgSrcMd="/home-slide-1.avif"
      alt="primer propiedad"
      title="Proyectá con Remax"
      subtitle="Proyectá tu espacio"
      buttonText="contactanos"
      href="/#"
      priority
      // target="_top"
    />,

    <SlideHeroTitle
      key={2}
      imgSrc="/caro-mobile.png"
      imgSrcMd="/home-slide-2.avif"
      alt="segunda propiedad"
      title="Garantizá tu futuro"
      subtitle=""
      href="/#"
      // target="_top"
    />,
  ];
  return <SwiperHero slides={images}></SwiperHero>;
}
