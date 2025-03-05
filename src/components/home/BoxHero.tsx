"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type BoxHeroProps = {
  image: string; // Ensure it's a URL string
  title: string;
  buttonText: string;
  subTitle: string;
};

export default function BoxHero({
  image,
  title,
  buttonText,
  subTitle,
}: BoxHeroProps) {
  return (
    <div
      className="w-full relative h-[450px] md:h-[560px]  bg-cover md:bg-center bg-right"
      style={{ backgroundImage: `url(${image})` }} // ✅ Correct way to set background
    >
      <div className="container absolute md:top-1/2 bottom-[30px]  text-center md:text-start   transform md:-translate-y-1/2 md:w-[700px] text-black">
        <span className="md:text-[30px] text-[20px] font-[500] md:font-normal border-main-secondary border-b-[2px]">
          {subTitle}
        </span>
        <h1 className="text-[35px] leading-[30px] md:text-[50px] md:leading-[60px]  md:font-medium">
          {title}
        </h1>
        <div className="flex items-center justify-center md:justify-start">
          <Button className="border-main-secondary border-[1px] mt-4 md:text-[16px] rounded-none  md:w-auto flex items-center  gap-2">
            <span>{buttonText}</span>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
