import Image from "next/image";
import { LinkButton } from "@/presentation/atoms/LinkButton";

type SlideHeroTitleProps = {
  imgSrc: string;
  imgSrcMd: string;
  alt?: string;
  title: string;
  subtitle: string;
  onButtonClick?: () => void;
  priority?: boolean;
  buttonText?: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export const SlideHeroTitle = ({
  imgSrc,
  imgSrcMd,
  alt = "",
  title,
  subtitle,
  priority = false,
  buttonText,
  href,
  target,
}: SlideHeroTitleProps) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center pb-[25vh] md:pb-10 lg:pb-[25vh]">
      {/* Desktop image */}
      <Image
        unoptimized
        src={imgSrcMd}
        alt={alt}
        fill
        className="object-cover hidden md:block"
        sizes="(min-width: 768px) 90vw"
        priority
        quality={90}
      />

      {/* Mobile image */}
      <Image
        unoptimized
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover md:hidden"
        sizes="(max-width: 768px) 80vw"
        priority={priority}
        quality={70}
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container flex flex-col items-center justify-center text-white text-center relative z-10 gap-2">
        <h2 className="text-4xl lg:text-6xl font-black max-w-xs md:max-w-4xl uppercase leading-[1.2]">
          {title}
        </h2>
        <p className="text-xl lg:text-2xl text-center uppercase">{subtitle}</p>
        {buttonText && href && (
          <LinkButton
            href={href}
            ariaLabel={buttonText}
            size="lg"
            className="bg-blue-400 opacity-20"
          >
            {buttonText}
          </LinkButton>
        )}
      </div>

      <div className="hero-gradient"></div>
    </div>
  );
};
