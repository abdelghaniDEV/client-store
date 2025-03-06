import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  return (
    <div
      className="w-full relative h-[400px] bg-[url(/banner-01.jpg)] md:h-[400px] bg-cover bg-center my-6  "
      // ✅ Correct way to set background
    >
      <div className="absolute top-[50%] translate-y-[-50%] right-[12%] text-center text-white flex flex-col items-center justify-center">
        <span className="md:text-[30px] text-[20px] font-[500] md:font-normal ">
          TOP BRANDS SUMMER SALE
        </span>
        <h1 className="text-[35px] pt-2 leading-[30px] md:text-[50px] md:leading-[60px]  md:font-medium">
          Latest Men Fashion
        </h1>
        <Link href={'/products'} className=" ">
          <Button className="bg-main-secondary  mt-4 md:text-[16px] rounded-none  md:w-auto flex items-center   gap-2">
            <span>Shop Now</span>
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
