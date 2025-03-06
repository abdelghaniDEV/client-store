"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Product } from "@/types";
import Link from "next/link";

interface NewProdcutCartProps {
  product: Product;
}

export default function NewProdcutCart({ product }: NewProdcutCartProps) {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <div className="relative">
        <div>
          <Image
            src={product.images[0]}
            alt="Hero"
            width={100}
            height={400}
            className="w-full h-[500px] md:h-[350px] lg:h-[400px] "
            unoptimized
          />
        </div>
        {showDialog && (
          <div className="absolute top-[32%] w-[180px] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[5px] bg-[#e0dede] p-3">
            <div>
              <Image src={product.images[0]} alt="hep" className="w-full h-[160px]" width={100} height={200} />
            </div>
            <h2 className="text-[15px] md:text-[18px] leading-[20px]">
              {product.name}
            </h2>
            <div className="flex items-center gap-3">
              <p className="font-[500]">${product.price}</p>
              <p className="font-[500] line-through text-red-500">$180.65</p>
            </div>
            <Link href={`products/${product._id}`}>
              <button
                onClick={() => setShowDialog(false)}
                className="  text-[16px] font-[500] border-b-[2px] border-black "
              >
                QUICK VIEW
              </button>
            </Link>
            <div className="w-4 h-4 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-[#e0dede] border-t-[20px] absolute bottom-[-20px]  left-[50%] translate-x-[-50%]  "></div>
          </div>
        )}
        <div
          onClick={() => setShowDialog(!showDialog)}
          className="absolute left-[50%] cursor-pointer top-[80%] translate-x-[-50%] translate-y-[-50%]  border-[#e0dede] border-[1px] rounded-full p-1  "
        >
          <div className="bg-[#e0dede] w-6 h-6 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
