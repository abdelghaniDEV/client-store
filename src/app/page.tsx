import React from "react";
import imgHero from "../assets/hero01.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NewProducts from "@/components/home/NewProducts";
import Features from "@/components/home/Features";
import CategoriesSection from "@/components/home/CategoriesSection";

import SliderHero from "@/components/SliderHero";
import BestSellers from "@/components/BestSellers";
export default function Home() {
  return (
    <div className="realtive z-10">
      <SliderHero />

      <CategoriesSection />
      <BestSellers />
      <NewProducts />
      <Features />
      <div className=" w-full md:h-[350px] overflow-hidden mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <Image
              src={imgHero}
              alt="hero"
              className="h-[400px] md:h-auto hidden md:block"
            />
          </div>
          <div className="border-[1px] flex flex-col items-center gap-4 py-10 md:pt-[50px] bg-main-primary">
            <h1 className="font-nunito text-] leading-[30px]  md:text-[30px] font-[700]">
              BagStore
            </h1>

            <h2 className="text-[30px] md:text-[45px] font-[500] text-center leading-[30px]">
              Best Leather Bag for Professionals
            </h2>
            <p className="text-[20px] md:text-[30px] text-center md:leading-[35px]">
              Stylish, durable, and functional—your perfect professional
              companion in premium leather.
            </p>
            <Button className="text-[20px] border-[2px] rounded-none border-black">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
