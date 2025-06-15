import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ACH3, CB, LN, PX, HT } from "@/asset/carousel";
const SwiperAd = () => {
  const slideImages = [ACH3, CB, LN, PX, HT];
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
      {slideImages.map((imgSrc, index) => (
        <SwiperSlide key={index} className="flex place-content-center">
          <div className="flex justify-center">
            <Image
              alt={`slide-${index + 1}`}
              width={400}
              height={300}
              priority
              src={imgSrc}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperAd;
