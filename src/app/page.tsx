import React from "react";
import NewProducts from "@/components/home/NewProducts";
import Features from "@/components/home/Features";
import CategoriesSection from "@/components/home/CategoriesSection";

import SliderHero from "@/components/SliderHero";
import BestSellers from "@/components/BestSellers";
import Banner from "@/components/Banner";
export default function Home() {
  return (
    <div className="realtive z-10">
      <SliderHero />

      <CategoriesSection />
      <BestSellers />
      <Banner />
      <NewProducts />

      <Features />
    </div>
  );
}
