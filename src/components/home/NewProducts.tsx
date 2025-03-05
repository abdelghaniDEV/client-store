"use client";
import NewProdcutCart from "./NewProdcutCart";
import TitleHome from "../ui/TitleHome";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/actions/actions";
import { Product } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NewProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await getAllProducts("1", "8", "", "", "", "", "", "");
        console.log("Product fetched", response);
        setProducts(response.products);
      } catch (err) {
        console.error(err);
      }
    };
    fetchedProducts();
  }, []);

  return (
    <div className="">
      <div className="flex flex-col  container">
        <TitleHome>New Products</TitleHome>
        <p className="tmd:ext-[20px]">
          Our Best-Selling Bags, Handpicked for You
        </p>
      </div>

      <div className="py-5">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          className="w-full h-[500px] md:h-[350px] lg:h-[400px] "
        >
          {products.map((product: Product) => {
            return (
              <SwiperSlide key={product._id}>
                <NewProdcutCart product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
