import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    >
      <SwiperSlide>
        <div className="flex justify-center">
          <Image
            alt="first house"
            width={600}
            height={400}
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image
            alt="first house"
            width={600}
            height={400}
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image
            alt="first house"
            width={600}
            height={400}
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image
            alt="first house"
            width={600}
            height={400}
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperAd;
