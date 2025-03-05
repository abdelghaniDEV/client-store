"use client";
import { getAllReviews } from "@/actions/actions";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { reviewsItem } from "@/types";

import TitleHome from "./ui/TitleHome";

export default function BannerReviews() {
  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchedReviews = async () => {
      const response = await getAllReviews("1", "5");
      setReviews(response.data);
    };
    fetchedReviews();
  }, []);
  return (
    <div className="bg-[#F5F2ED] w-full py-5 ">
      <div className="text-center">
        <TitleHome>OUR HAPPY CLIENTS</TitleHome>
      </div>
      <div className="p-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          loop={true}
          className="w-full h-[300px]"
        >
          {Reviews.map((review: reviewsItem) => {
            return (
              <SwiperSlide
                key={review._id}
                className="bg-white p-2 rounded-[10px] shadow-md "
              >
                <div className="border-b-[1px] py-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-main-primary p-2 uppercase font-[600] text-[20px] flex items-center justify-center h-14 w-14 rounded-full">
                      {/* <User className="w-10 h-10 " /> */}
                      {review.fullName.slice(0, 2)}
                    </div>
                    <div>
                      <h5 className="text-[20px] font-[500] leading-[20px]">
                        {review.fullName}
                      </h5>

                      <h6 className="font-[500] leading-[20px]">
                        {review.email}
                      </h6>
                      <p className="text-sm text-gray-500">
                        {new Date(review.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="pl-4 pt-1 md:py-3">
                    <p className="text-[18px] md:leading-[20px] text-main-text line-clamp-6">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
