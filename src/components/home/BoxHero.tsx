"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import { ArrowUpCircle } from "lucide-react";
import { motion } from "motion/react";

type BoxHeroProps = {
  image: string | StaticImageData; 
  title: string;
  buttonText: string;
};

export default function BoxHero({ image, title, buttonText }: BoxHeroProps) {

  return (
    <div className="relative overflow-hidden">
      <Image src={image} className="md:h-[540px] w-full" alt="hero01" />
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="flex flex-col gap-8 absolute  bottom-[50px] font-[600] text-white"
      >
        <div className="px-3 text-center">
          <h1 className="text-[50px]  leading-[60px]">{title}</h1>
          <Button style={{ 
            backgroundColor : "#F2B78D"
           }} className="text-black mt-8 banner">
            <span>{buttonText}</span>
            <ArrowUpCircle className="h-10 w-10  text-black" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
