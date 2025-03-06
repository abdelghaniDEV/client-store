"use client";
import React, { useState } from "react";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/slices/wishlist.slice";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types";

type ProductCartIconProps = {
  setOpenCart: (isOpen: boolean) => void;
  product: Product;
};

export default function ProductCartIcons({
  setOpenCart,
  product,
}: ProductCartIconProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const { toast } = useToast();

  const isInWishlist = wishlist.some((item) => item._id === product._id);

  const handleClick = (text: string) => {
    if (text === "Cart") {
      setOpenCart(true);
    } else if (text === "Wishlist") {
      if (isInWishlist) {
        dispatch(removeFromWishlist(product._id)); // Remove if already in wishlist
       
      } else {
        dispatch(addToWishlist(product)); // Add if not in wishlist
        toast({
          title: `${product.name} added to your wishlist!`,
          description: "Great choice! This item is now in your wishlist.",
        });
      }
    }
  };

  const iconConfig = [
    { icon: ShoppingCart, text: "Cart", bg: "bg-black" },
    { icon: Eye, text: "View", bg: "bg-[#181818]" },
    {
      icon: Heart,
      text: "Wishlist",
      bg: isInWishlist ? "bg-[#b30000]" : "bg-black",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9, x: 100 }}
      transition={{ duration: 0.3 }}
      className="absolute top-2 right-4 flex flex-col gap-1"
    >
      {iconConfig.map(({ icon: Icon, text, bg }, index) => (
        <div
          key={index}
          className={`bg-white p-2 relative rounded-full transition-all ${
            text === "Wishlist" && isInWishlist && "text-white"
          } duration-300 ease-in-out transform hover:scale-110 cursor-pointer ${bg}`}
          onMouseEnter={() => setHovered(text)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleClick(text)}
        >
          <Icon className="w-[20px] h-[20px]" />
          {hovered === text && (
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${bg} text-white font-medium w-[80px] text-sm absolute top-1 py-1 px-2 rounded-md right-10`}
            >
              {text}
            </motion.button>
          )}
        </div>
      ))}
    </motion.div>
  );
}
