"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Dialog } from "@/components/ui/dialog";
import Image from "next/image";
import ProductCartDetails from "./ProductCartDetails";
import ProductDialog from "./ProductDialog";
import { Button } from "./ui/button";
import ProductCartIcons from "./ProductCartIcons";
import { Product } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/slices/wishlist.slice";

type productCartProps = {
  product: Product;
};

export default function ProductCart({ product }: productCartProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const wishlist = useSelector((statu: RootState) => statu.wishlist.items);
  const isInWishlist = wishlist.some((item) => item._id === product._id);

  const dispatch = useDispatch<AppDispatch>();

  const handleTouchStart = () => {
    setIsHovered(false);
  };

  const handleMouseOver = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      setIsHovered(true);
    }
  };

  const handelAddedWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product._id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="">
      <div
        className="relative overflow-hidden "
        onMouseOver={handleMouseOver}
        onMouseOut={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
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

        <Heart onClick={handelAddedWishlist} className={`absolute top-2 right-2 p-1 ${isInWishlist ? "bg-red-500 text-white" : "bg-main-primary"} rounded-full h-7 w-7 cursor-pointer md:hidden`} />
        {/* <div className="bg-red-500 text-white absolute top-2 left-2 py-1 px-3 rounded-[20px]">
          <span>-20%</span>
        </div> */}
        <AnimatePresence>
          {isHovered && (
            <div className="hidden md:block">
              <ProductCartIcons product={product} setOpenCart={setOpenCart} />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-[20px] left-[50%] translate-x-[-50%] "
              >
                <Button
                  onClick={() => setOpenCart(true)}
                  className="w-[200px] bg-white hover:bg-black hover:text-white cursor-pointer rounded-[30px]"
                >
                  ADD TO CART
                </Button>
              </motion.div>
            </div>
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
