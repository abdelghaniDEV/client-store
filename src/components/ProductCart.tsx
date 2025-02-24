"use client";
import React, { useState } from "react";
import image from "../assets/hero01 (1).webp";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Dialog } from "@/components/ui/dialog";
import Image from "next/image";
import ProductCartDetails from "./ProductCartDetails";
import ProductDialog from "./ProductDialog";
import loading from "../assets/loading.svg";
import { Button } from "./ui/button";
import ProductCartIcons from "./ProductCartIcons";
import Link from "next/link";

export default function ProductCart({ product }: any) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  return (
    <div  className="">
      <div
        className="relative overflow-hidden "
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className="relative w-full h-[200px] md:h-[306px] ">
          {" "}
          {/* Ensures 280px height */}
          <Image
            src={product.images[0]}
            alt={product?.name || "product"}
            className={`rounded-[5px] object-cover transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            fill // Uses full container size
            onLoadingComplete={() => setLoading(false)}
            priority // Faster loading
          />
        </div>

        <Heart className="absolute top-2 right-2 p-1 bg-main-primary rounded-full h-7 w-7 cursor-pointer md:hidden" />
        <div className="bg-red-500 text-white absolute top-2 left-2 py-1 px-3 rounded-[20px]">
          <span>-20%</span>
        </div>
        <AnimatePresence>
          {/* {isHovered && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div>
                <div className="flex gap-2 items-center justify-center">
                  <ShoppingCart
                    className="bg-main-primary p-1 h-[36px] w-[36px] rounded-[5px] cursor-pointer transform  duration-300 hover:bg-black hover:text-main-primary hover:border-[1px] hover:border-main-primary"
                    onClick={() => setOpenCart(true)}
                  />

                  <Eye
                    className="bg-main-primary p-1 h-[36px] w-[36px] rounded-[5px] cursor-pointer transform  duration-300 hover:bg-black hover:text-main-primary hover:border-[1px] hover:border-main-primary"
                    aria-label="View details"
                  />

                  <Heart
                    className="bg-main-primary p-1 h-[36px] w-[36px] rounded-[5px] cursor-pointer transform  duration-300 hover:bg-black hover:text-main-primary hover:border-[1px] hover:border-main-primary"
                    aria-label="Add to favorites"
                  />
                </div>
                <ul className="flex gap-2 items-center justify-center text-[20px]  font-[700] py-3 text-white">
                  {product.size.map((size: any) => {
                    return (
                      <li className="uppercase" key={size}>
                        {size}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </motion.div>
          )} */}
          {isHovered && (
            <>
              <ProductCartIcons product={product} setOpenCart={setOpenCart} />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-[20px] left-[50%] translate-x-[-50%] "
              >
                <Button className="w-[200px] bg-white hover:bg-black hover:text-white cursor-pointer rounded-[30px]">
                  ADD TO CART
                </Button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <ProductCartDetails product={product} />
      <Dialog open={openCart} onOpenChange={setOpenCart}>
        <ProductDialog product={product} setOpenCart={setOpenCart} />
      </Dialog>
      <div className="md:flex items-center gap-2 hidden md:block">
        {product.color.map((color: string, index: number) => {
          return (
            <div
              key={index}
              className="   border-[1px] p-[3px] rounded-full hover:shadow-md transition-all "
            >
              <div
                className={` w-[20px] h-[20px] rounded-full`}
                style={{
                  backgroundColor: color,
                  opacity: isHovered && index === 0 ? 1 : 0.5,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
