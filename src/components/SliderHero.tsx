"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BoxHero from "./home/BoxHero";

const SliderHero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-[450px] md:h-[560px]"
    >
      <SwiperSlide>
        <BoxHero
          title="Upgrade your style today! Discover the latest fashion trends now!"
          subTitle="Best Collection"
          image="/hero01.png"
          buttonText="Shop Now"
        />
      </SwiperSlide>
      <SwiperSlide>
        <BoxHero
          title="Step into style! Explore our latest footwear collection now."
          buttonText="Shop Now & Save 20%!"
          image="/slider02.jpg"
          subTitle="Best Collection"
        />
      </SwiperSlide>
      <SwiperSlide>
        <BoxHero
          title="Complete your look with stunning accessories!"
          buttonText="Save 20%!"
          image="/hero01.png"
          subTitle="Best Collection"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderHero;
