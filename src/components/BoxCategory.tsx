import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Promotion from "../assets/promotion-cls.jpg";
import Link from "next/link";

type boxCategory = {
  image: any;
  name: string;
};

export default function ({ image, name }: boxCategory) {
  return (
    <Link
      href={`/products?category=${name}`}
      className="relative hover:scale-105 w-full transition-transform duration-300"
    >
      <div className="w-full h-[300px]">
        <Image
          src={image || Promotion}
          alt="category"
          className="rounded-[10px] object-cover   "
          fill
        />
      </div>

      <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2">
        <Button className="flex items-center gap-2 rounded-2xl px-6 transition-transform duration-300 hover:bg-main-secondary hover:text-white">
          <span className="text-[20px]">{name ?? "Button"}</span>
          <ArrowRight className="h-10 w-10" />
        </Button>
      </div>
    </Link>
  );
}
