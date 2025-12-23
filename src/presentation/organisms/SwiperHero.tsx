"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React, { ReactElement } from "react";

type SwiperHeroProps = {
  slides: ReactElement<{ isActive?: boolean }>[];
};

export const SwiperHero = ({ slides }: SwiperHeroProps) => {
  return (
    <div className="relative w-full h-[90vh]">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        speed={600}
        loop={true}
        className="swiper-hero w-full h-full cursor-grab active:cursor-grabbing"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={`${slide.key}-${idx}`}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
