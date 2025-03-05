import React from "react";
import imgHijab from "@/assets/29-3.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function BannerWomen() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-20 container items-center py-6">
      <div  className="w-full md:h-[600px]">
        <Image
          src={imgHijab}
          alt="hijab"
          width={100}
          height={400}
          unoptimized
         className="bg-cover w-full md:h-[600px]"
        />
      </div>
      <div className=" flex flex-col items-center md:items-start md:justify-start justify-center">
        <span className="md:text-[30px] text-[20px] font-[500] md:font-normal ">
        Up To 40% Off
        </span>
        <h1 className="text-[35px] pt-2 leading-[30px] md:text-[60px] md:leading-[60px]  ">
        Fashion T-Shirt <br/>
        for Women
        </h1>
        <p className="text-[18px] text-center md:text-center">
        What you wear often shows what kind of person you are.Show a different personality you dont have with your clothing.
        </p>
        <div className=" ">
          <Button className="bg-main-secondary text-white  mt-4 md:text-[16px] rounded-none  md:w-auto flex items-center   gap-2">
            <span>Shop Now</span>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
