import React from "react";
import imgHero from "../assets/hero01.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import NewProducts from "@/components/home/NewProducts";
import Features from "@/components/home/Features";
import TitleHome from "@/components/ui/TitleHome";
import CategoriesSection from "@/components/home/CategoriesSection";

import SliderHero from "@/components/SliderHero";
export default function Home() {
  return (
    <div className="realtive z-10">
      <SliderHero />

      <CategoriesSection />
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <div>
            <TitleHome>Best sellers</TitleHome>
            <p className="tmd:ext-[20px]">
              Our Best-Selling Bags, Handpicked for You
            </p>
          </div>
          <div className="hidden md:block">
            <Button className="flex items-center gap-3 ">
              <span className="text-[20px]">More Products</span>
              <ArrowRight className="h-10 w-10 " />
            </Button>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart /> */}
          </div>
          <div className="pt-8 flex justify-center md:hidden">
            <Button className="flex items-center gap-2 ">
              <span className="text-[17px]">More Products</span>
              <ArrowRight className="h-10 w-10 " />
            </Button>
          </div>
        </div>
      </div>
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
