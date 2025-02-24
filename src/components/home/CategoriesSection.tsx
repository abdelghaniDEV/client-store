"use client"
import React from "react";
import TitleHome from "../ui/TitleHome";
import BoxCategory from "../BoxCategory";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Category } from "@/types";

export default function CategoriesSection() {
  const categories = useSelector((state : RootState) => state.categories)
  return (
    <div className="container pt-10">
      <div>
        <TitleHome>Shop by categories</TitleHome>
        <p className="tmd:ext-[20px]">
          Our Best-Selling Bags, Handpicked for You
        </p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-5">
          <div className="bg  w-full h-[220px] md:h-auto overflow-hidden relative hover:scale-105 transition-transform duration-300 ">
            <Image
              src={imgHero}
              alt="category"
              className="rounded-[10px]  h-[470px]"
            />
            <div className="absolute bottom-[50px] left-[50%] translate-x-[-50%]">
              <Button className="flex items-center gap-2 rounded-[20px] px-6">
                <span className="text-[20px]">Women</span>
                <ArrowRight className="h-10 w-10 " />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg  w-full relative hover:scale-105 transition-transform duration-300">
              <Image
                src={Promotion}
                alt="category"
                className="rounded-[10px]"
              />
              <div className="absolute bottom-[50px] left-[50%] translate-x-[-50%]">
                <Button className="flex items-center gap-2 rounded-[20px] px-6">
                  <span className="text-[20px]">Accsesoire</span>
                  <ArrowRight className="h-10 w-10 " />
                </Button>
              </div>
            </div>
            <div className="w-full relative hover:scale-105 transition-transform duration-300">
              <Image
                src={Promotion}
                alt="category"
                className="rounded-[10px]"
              />
              <div className="absolute bottom-[50px] left-[50%] translate-x-[-50%]">
                <Button className="flex items-center gap-2 rounded-[20px] px-6">
                  <span className="text-[20px]">Women</span>
                  <ArrowRight className="h-10 w-10 " />
                </Button>
              </div>
            </div>
          </div>
          <div className=" w-full relative h-[220px] md:h-auto overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image src={imgHero2} alt="category" className="rounded-[10px]" />
            <div className="absolute bottom-[50px] left-[50%] translate-x-[-50%]">
              <Button className="flex items-center gap-2 rounded-[20px] px-6">
                <span className="text-[20px]">Men</span>
                <ArrowRight className="h-10 w-10 " />
              </Button>
            </div>
          </div>
        </div> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-5">
        {categories.map((category : Category) => (
          <BoxCategory key={category._id} image={category.image} name={category.name} />
        ))}
        {/* <BoxCategory image={Promotion} name="Women" />
        <BoxCategory image={Promotion} name="Men" />
        <BoxCategory image={Promotion} name="Accesoire" /> */}
      </div>
    </div>
  );
}
