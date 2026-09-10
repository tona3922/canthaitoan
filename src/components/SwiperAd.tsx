import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StaticImg from "./StaticImg";
import { staticImages } from "@/asset/staticImages";

const SLIDES = [
  "carousel/ACH3",
  "carousel/CB",
  "carousel/LN",
  "carousel/PX",
  "carousel/HT",
] as const;

const SwiperAd = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      style={{ paddingBottom: "30px" }}
    >
      {SLIDES.map((key, index) => (
        <SwiperSlide key={key} className="flex place-content-center">
          <div className="flex justify-center">
            <StaticImg
              image={staticImages[key]}
              alt={`slide-${index + 1}`}
              priority={index === 0}
              sizes="(max-width: 1024px) 90vw, 400px"
              className="h-auto w-full max-w-[400px] object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperAd;
