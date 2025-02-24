"use client";
import Image from "next/image";
import React, { useState } from "react";
import imgHero from "../../assets/hero01 (2).webp";

export default function NewProdcutCart() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <div className="relative">
        <Image src={imgHero} alt="Hero" />
        {showDialog && (
          <div className="absolute top-[32%] w-[200px] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[5px] bg-[#e0dede] p-3">
            <div>
              <Image src={imgHero} alt="hep" className="w-full" />
            </div>
            <h2 className="text-[15px] md:text-[18px] leading-[20px]">
              Sac reporter convertible
            </h2>
            <div className="flex items-center gap-3">
              <p className="font-[500]">$100.99</p>
              <p className="font-[500] line-through text-red-500">$180.65</p>
            </div>
            <div>
              <button
                onClick={() => setShowDialog(false)}
                className="  text-[16px] font-[500] border-b-[2px] border-black "
              >
                QUICK VIEW
              </button>
            </div>
            <div className="w-4 h-4 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-[#e0dede] border-t-[20px] absolute bottom-[-20px]  left-[50%] translate-x-[-50%]  "></div>
          </div>
        )}
        <div
          onClick={() => setShowDialog(!showDialog)}
          className="absolute left-[50%] cursor-pointer top-[80%] translate-x-[-50%] translate-y-[-50%]  border-main-primary border-[1px] rounded-full p-1  "
        >
          <div className="bg-main-primary w-6 h-6 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
