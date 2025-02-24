"use client";
import React, { useState } from "react";
import { Eye, Heart, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { addItem } from "@/redux/slices/cart.slice";
import { useToast } from "@/hooks/use-toast";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/slices/wishlist.slice";
import Link from "next/link";
import { Product } from "@/types";

type ProductDialogProps = {
  product: Product;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProductDialog({ product, setOpenCart }: ProductDialogProps) {
  const [counter, setCounter] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [selectSize, setSelectSize] = useState<string>();
  const [selectColor, setSelectColor] = useState<string>();
  const [errors, setErrors] = useState({
    size: "",
    color: "",
  });

  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const isInWishlist = wishlist.some((item) => item._id === product?._id);

  const dispatch = useDispatch<AppDispatch>();

  const { toast } = useToast();
  // handle state counter changes
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const addToCart = () => {
    if (product.color.length > 0 && !selectColor) {
      setErrors((prev) => ({ ...prev, color: "Color is required" }));
      return;
    }

    if (product.size.length > 0 && !selectSize) {
      setErrors((prev) => ({ ...prev, size: "Size is required" }));
      return;
    }

    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: counter, // Ensure quantity is passed correctly
      image: product.images[0],
      ...(product.color.length > 0 && { color: selectColor }),
      ...(product.size.length > 0 && { size: selectSize }),
    };

    dispatch(addItem(cartItem)); // Correctly dispatch the action
    setOpenCart(false);
    toast({
      // variant: "destructive",
      // title: "Product added to cart!",
      title: `${counter} x ${product.name} added to your cart.`,
      description: "Great choice! Your item has been added to the cart.",
    });
  };

  const handelWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product?._id));
    } else {
      dispatch(addToWishlist(product));

      toast({
        title: `${product.name} added to your wishlist!`,
        description: "Great choice! This item is now in your wishlist.",
      });
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <div className="flex flex-col gap-1">
          <div className="flex gap-6 items-center pb-3">
            <Image
              src={product.images[0]}
              // className="w-[60px] "
              className={`rounded-[5px] object-cover transition-opacity duration-500 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              width={60}
              height={100}
              alt={product.name}
              onLoadingComplete={() => setLoading(false)}
              priority // Faster loading
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-[26px] font-[500] leading-[20px]">
                {product.name}
              </h2>
              <div className="flex items-center gap-3">
                <p className="font-[500] text-[30px]">${product.price}</p>
                <p className="font-[500] line-through text-red-400">$180.65</p>
              </div>
            </div>
          </div>
          <hr />
          {/* colors and size */}
          {product.color.length > 0 && (
            <div className="relative">
              <h4 className="text-[20px] font-[500]">
                Colors : <span></span>
              </h4>
              <div className="flex items-center gap-2">
                {product.color.map((color: string, index: number) => {
                  return (
                    <div
                      className={`border-[1px] ${
                        color === selectColor && "border-main-secondary"
                      } p-[3px] rounded-full hover:shadow-md transition-all`}
                      key={index}
                      onClick={() => setSelectColor(color)}
                    >
                      <div
                        className={`bg-${color} w-[28px] h-[28px] rounded-full`}
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              <div className="absolute top-[6px] left-[80px]">
                <p className="text-[15px] font-[600] text-red-500">
                  {errors.color}
                </p>
              </div>
            </div>
          )}
          {product.size.length > 0 && (
            <div className="relative">
              <h4 className="text-[20px] font-[500]">
                Sizes : <span>{errors.size}</span>
              </h4>
              <div className="flex gap-2 items-center pt-2 uppercase ">
                {product.size.map((size: string) => {
                  return (
                    <span
                      key={size}
                      className={`py-[3px] px-3 ${
                        selectSize === size && "bg-main-secondary text-white"
                      } cursor-pointer  border-[1.5px] text-[17px] font-[500]`}
                      onClick={() => setSelectSize(size)}
                    >
                      {size}
                    </span>
                  );
                })}
              </div>
              <div className="absolute top-[6px] left-[80px]">
                <p className="text-[15px] font-[600] text-red-500">
                  {errors.size}
                </p>
              </div>
            </div>
          )}
          {/* Counter */}
          <div className="">
            <h4 className="text-[20px] font-[500] flex gap-1 items-center">
              <span> Quantity:</span>
              <span>{counter}</span>
            </h4>
            <div className="flex items-center gap-[15px] pt-2  ">
              <div className="border-[1px] border-black flex items-center justify-between gap-3 p-1 rounded-[8px] w-[150px]">
                <div
                  className="bg-slate-100 p-2"
                  onClick={() => handleDecrement()}
                >
                  <Minus className="h-5 w-5 cursor-pointer" />
                </div>
                <span className=" text-[20px] QuAnount">{counter}</span>
                <div
                  className="bg-slate-100 p-2"
                  onClick={() => handleIncrement()}
                >
                  <Plus className="h-5 w-5 cursor-pointer " />
                </div>
              </div>
            </div>
          </div>
          {/* add TO Cart */}
          <div className="py-2 flex items-center gap-3">
            <Button
              className="bg-[#181818] text-white font-[500] flex items-center gap-3 text-[15px] px-[100px] rounded-[20px] hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out "
              onClick={() => addToCart()}
            >
              <span>ADD TO CART</span>
              <span> ${product.price}</span>
            </Button>

            <Link href={`http://localhost:3001/products/${product._id}`}>
              <Eye className="bg-main-primary p-2 h-10 w-10 rounded-full hover:bg-[#181818] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110" />
            </Link>

            <Heart
              onClick={() => handelWishlist()}
              className={`${
                isInWishlist ? "bg-red-500 text-white" : "bg-main-primary "
              } cursor-pointer p-2 h-10 w-10 rounded-full hover:bg-[#181818] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110`}
            />
          </div>
          {/* By Now */}
          <Button className="bg-red-500 text-white font-[500] hover:bg-[#181818] transition-all duration-300 ease-in-out">
            BUY IT NOW
          </Button>
        </div>
      </DialogHeader>
    </DialogContent>
  );
}
