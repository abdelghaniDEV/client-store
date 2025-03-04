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
      className="w-full h-[350px] md:h-[560px]"
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
        {/* <div className="w-full relative bg-[url(/heroWomen.png)] h-[350px] md:h-[560px]  bg-cover">
          <div className="container absolute top-[50%] translate-y-[-50%] md:w-[700px]">
            <span className="text-[30px]">Best Collection</span>
            <h1 className="text-[50px]  leading-[60px] font-[500]">
              Step into style! Explore our latest footwear collection now.
            </h1>
            <Button className="text-white bg-main-secondary mt-4 text-[16px] rounded-none  flex items-center gap-2">
              <span>Shop Now & Save 20%!</span>
              <ArrowRight />
            </Button>
          </div>
        </div> */}
        <BoxHero title="Step into style! Explore our latest footwear collection now." buttonText="Shop Now & Save 20%!" image="/hero01.png" subTitle="Best Collection" />
      </SwiperSlide>
      <SwiperSlide>
        {/* <div className="w-full relative bg-[url(/hero01.png)] h-[350px] md:h-[560px]  bg-cover">
          <div className="container absolute top-[50%] translate-y-[-50%] md:w-[700px]">
            <span className="text-[30px]">Best Collection</span>
            <h1 className="text-[50px]  leading-[60px] font-[500]">
              Complete your look with stunning accessories!
            </h1>
            <Button className="text-white bg-main-secondary mt-4 text-[16px] rounded-none  flex items-center gap-2">
              <span>Save 20%!</span>
              <ArrowRight />
            </Button>
          </div>
        </div> */}
        <BoxHero title="Complete your look with stunning accessories!" buttonText="Save 20%!" image="/hero01.png" subTitle="Best Collection" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderHero;
