"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

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
      className="w-full relative h-[400px] md:h-[560px] bg-cover md:bg-center bg-right"
      style={{ backgroundImage: `url(${image})` }} // ✅ Correct way to set background
    >
      <div className="container absolute md:top-1/2 bottom-[30px]  text-center md:text-start   transform md:-translate-y-1/2 md:w-[700px] text-black">
        <span className="md:text-[30px] text-[20px] font-[500] md:font-normal border-main-secondary border-b-[2px]">{subTitle}</span>
        <h1 className="text-[35px] leading-[30px] md:text-[50px] md:leading-[60px]  md:font-medium">{title}</h1>
        <Button className="text-white bg-main-secondary mt-4 md:text-[16px] rounded-none w-full md:w-auto flex items-center  gap-2">
          <span>{buttonText}</span>
          <ArrowLeft />
        </Button>
      </div>
    </div>
  );
}
