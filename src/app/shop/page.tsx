"use client"
import BoxCategory from "@/components/BoxCategory";
import { RootState } from "@/redux/store";
import { Category } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function page() {
  const categories = useSelector((statu : RootState) => statu.categories)
  return (
    <div className="">
      <div className="w-full h-[20vh] xl:h-[35vh]   mb-[30px] relative bg-[url(/BannerShop.png)] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[35px] font-[600] lg:text-[55px] ">Shop</h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">Shop</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 pt-5">
          {categories.map((category: Category) => (
            <BoxCategory
              key={category._id}
              image={category.image}
              name={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
