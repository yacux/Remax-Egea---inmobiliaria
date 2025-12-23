"use client";

import Image from "next/image";

type Props = {
  imgSrc: string; // mobile
  imgSrcMd: string; // desktop
  alt?: string;
  priority?: boolean;
};

export const SlideHero = ({
  imgSrc,
  imgSrcMd,
  alt = "",
  priority = false,
}: Props) => {
  return (
    <div className="relative w-full h-full">
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
        sizes="(max-width: 768px) 80vw"
        priority={priority}
        quality={70}
      />

      <div className="hero-gradient" />
    </div>
  );
};
