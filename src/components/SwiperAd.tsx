import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperImg from "@/asset/swiper-img.webp";

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
      <SwiperSlide>
        <div className="flex justify-center">
          <Image alt="first house" width={400} height={300} src={SwiperImg} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image alt="first house" width={400} height={300} src={SwiperImg} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image alt="first house" width={400} height={300} src={SwiperImg} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image alt="first house" width={400} height={300} src={SwiperImg} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperAd;
