"use client"
import ProductCart from "@/components/ProductCart";
import { RootState } from "@/redux/store";
import { Product } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Wishlist() {
    const wishlist = useSelector((state : RootState) => state.wishlist)

  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh]   mb-[30px] relative bg-[url(/BannerShop.png)] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[35px] font-[600] lg:text-[55px] ">
              Your Wishlist
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">Wishlist</h2>
            </div>
          </div>
        </div>
      </div>
       <div className="container grid grid-cols-2 pb-8 md:grid-cols-4 gap-2 md:gap-[20px]">
         {wishlist.items.map((wishlistItem : Product) => (
             <ProductCart key={wishlistItem._id} product={wishlistItem} />
         ))}
       </div>
    </div>
  );
}
