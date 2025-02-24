
import imgHero from "../../assets/hero01 (1).webp";
import Image from "next/image";
import { Button } from "../ui/button";
import NewProdcutCart from "./NewProdcutCart";
import TitleHome from "../ui/TitleHome";

export default function NewProducts() {
    
  return (
    <div className="">
      <div className="flex flex-col  container">
        {/* <h2 className="text-[30px] md:text-[40px] leading-[40px]">
          New Products
        </h2> */}
        <TitleHome>New Products</TitleHome>
        <p className="tmd:ext-[20px]">
          Our Best-Selling Bags, Handpicked for You
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 py-5">
        <NewProdcutCart />
        <NewProdcutCart />
        <NewProdcutCart />
        <NewProdcutCart />
      </div>
    </div>
  );
}
