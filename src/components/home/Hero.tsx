import React from "react";
import HeroWomen from "@/assets/HeroMen02.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="h-[500px] w-full overflow-hidden relative">
      <Image src={HeroWomen} alt="Hero" className="object-cover object-center" />
      <div className="px-3 absolute top-[50%] left-[50px] translate-y-[-50%]">
        <h1 className="text-[100px] font-[600]  leading-[80px] w-[650px]">
          Best Leather Bag for Professionals
        </h1>
        <Button className="text-black mt-8 border-[1px] border-main-secondary rounded-none text-[18px]">
          <span>Shop New</span>
          <ArrowUpCircle className="h-10 w-10  text-black" />
        </Button>
      </div>
    </div>
  );
}
