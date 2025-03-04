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
      className="w-full relative h-[350px] md:h-[560px] bg-right bg-cover md:bg-center"
      style={{ backgroundImage: `url(${image})` }} // ✅ Correct way to set background
    >
      <div className="container absolute top-1/2 transform -translate-y-1/2 md:w-[700px] text-black">
        <span className="md:text-[30px] text-[20px]">{subTitle}</span>
        <h1 className="text-[35px] leading-[30px] md:text-[50px] md:leading-[60px]  font-medium">{title}</h1>
        <Button className="text-white bg-main-secondary mt-4 text-[16px] rounded-none flex items-center gap-2">
          <span>{buttonText}</span>
          <ArrowLeft />
        </Button>
      </div>
    </div>
  );
}
