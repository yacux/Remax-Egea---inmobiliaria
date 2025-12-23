import Image from "next/image";
import { Button } from "@/presentation/atoms";

type SlideHeroBtnProps = {
  imgSrc: string;
  imgSrcMd: string;
  alt?: string;
  title: string;
  subtitle: string | React.ReactNode;
  buttonText: string;
  href: string;
  priority?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export const SlideHeroBtn = ({
  imgSrc,
  imgSrcMd,
  alt = "",
  title,
  subtitle,
  buttonText,
  href,
  priority = false,
  target,
}: SlideHeroBtnProps) => {
  return (
    <div className="relative w-full h-full flex flex-col md:justify-center pt-6 lg:pt-0 pb-[20vh] md:pb-10 lg:pb-[20vh]">
      {/* Desktop image */}
      <Image
        unoptimized
        src={imgSrcMd}
        alt={alt}
        fill
        className="object-cover hidden md:block"
        sizes="(min-width: 768px) 90vw"
        priority={false}
        quality={90}
      />

      {/* Mobile image */}
      <Image
        unoptimized
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover md:hidden"
        sizes="(max-width: 768px) 100vw"
        priority={priority}
        // quality={70}
      />

      {/* Gradientes mobile */}
      <div className="md:hidden absolute inset-0 h-full bg-black/30"></div>

      {/* Gradiente para tablet y pc */}
      <div className="hidden md:block absolute inset-0 bg-black/30"></div>

      {/* Contenido textual y botón */}
      <div className="container flex flex-col items-center justify-between h-full md:h-auto pb-10 md:pb-10 lg:justify-center md:items-start text-white text-center md:text-left relative z-10 gap-4">
        <h2 className="text-4xl lg:text-6xl font-black max-w-xs md:max-w-lg uppercase leading-[1.2]">
          {title}
        </h2>
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-xl md:max-w-[300px] font-semibold">{subtitle}</p>
          <Button className="bg-blue-800 rounded-lg hover:bg-blue-600 cursor-pointer">
            {buttonText}
          </Button>
        </div>
      </div>

      <div className="hero-gradient"></div>
    </div>
  );
};
