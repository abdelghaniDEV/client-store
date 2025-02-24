"use client";
import {

  CornerLeftDown,

  Heart,
  Minus,
  Plus,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { addItem } from "@/redux/slices/cart.slice";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/slices/wishlist.slice";
import { Product } from "@/types";


export default function ProductVariant({ product }: Product) {
  const [selectColor, setSelectColor] = useState<string>();
  const [counter, setCounter] = useState<number>(1);
  const [selectSize, setSelectSize] = useState<string>();
  const [errors, setErrors] = useState({
    size: "",
    color: "",
  });

  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const isInWishlist = wishlist.some((item) => item._id === product?._id);

  const dispatch = useDispatch<AppDispatch>();

  const { toast } = useToast();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
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

  const addToCart = () => {
    if (product.color.length > 0 && !selectColor) {
      setErrors((prev) => ({ ...prev, color: "Color is required" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, color: "" }));
    }

    if (product.size.length > 0 && !selectSize) {
      setErrors((prev) => ({ ...prev, size: "Size is required" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, size: "" }));
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
    // setOpenCart(false)
    toast({
      // variant: "destructive",
      // title: "Product added to cart!",
      title: `${counter} x ${product.name} added to your cart.`,
      description: "Great choice! Your item has been added to the cart.",
    });
  };

  return (
    <div className="py-4 md:py-1">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 ">
        {product?.color.length > 0 && (
          <div className="relative w-full">
            <h4 className="text-[20px]  flex items-center gap-2">
              Colors :{" "}
              <div
                className={`w-[28px] h-[28px] rounded-full `}
                style={{ backgroundColor: selectColor }}
              ></div>
            </h4>
            <div className="flex items-center gap-3 pt-[6px] md:p-1 ">
              {product?.color.map((color: string, index: number) => {
                return (
                  <div
                    className={`border-[1px] ${
                      color === selectColor && "border-main-secondary"
                    } p-[3px] rounded-full hover:shadow-md transition-all ${
                      errors.color && "border-red-500 border-[2px]"
                    }`}
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
            {errors.color && (
              <div className="absolute top-0 left-[100px]">
                <div className="flex items-start gap-">
                  <CornerLeftDown className="w-8 h-8 pt-2 text-red-500" />
                  <p className="text-[15px] font-[600] text-red-500">
                    {errors.color}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
        {product?.size.length > 0 && (
          <div className="relative">
            <h4 className="text-[20px]  flex items-center gap-2">
              Sizes : <span className="text-[17px]">{selectSize}</span>
            </h4>
            <div className="flex gap-4 items-center pt-[7px] md:pt-1 uppercase ">
              {product.size.map((size: string) => {
                return (
                  <span
                    key={size}
                    className={`py-[3px] px-3 ${
                      selectSize === size && "bg-main-secondary text-white"
                    } cursor-pointer  border-[1.5px] text-[17px] font-[500] ${
                      errors.size && "border-red-500 border-[32x]"
                    }`}
                    onClick={() => setSelectSize(size)}
                  >
                    {size}
                  </span>
                );
              })}
            </div>
            {errors.size && (
              <div className="absolute top-0 left-[80px]">
                <div className="flex items-start gap-">
                  <CornerLeftDown className="w-8 h-8 pt-2 text-red-500" />
                  <p className="text-[15px] font-[600] text-red-500">
                    {errors.size}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="md:flex items-end gap-3">
        {/* Counter */}
        <div className=" pt-4 md:pt-2">
          <h4 className="text-[20px]  flex gap-1 items-center">
            <span> Quantity:</span>
            <span>{counter}</span>
          </h4>
          <div className="flex items-center gap-[15px] pt-1  ">
            <div className="border-[1px] border-black flex items-center justify-between gap-3 p-1 rounded-[20px] w-[150px]">
              <div
                className="bg-slate-100 p-2 rounded-[20px]"
                onClick={() => handleDecrement()}
              >
                <Minus className="h-5 w-5 cursor-pointer" />
              </div>
              <span className=" text-[20px] QuAnount">{counter}</span>
              <div
                className="bg-slate-100 p-2 rounded-[20px]"
                onClick={() => handleIncrement()}
              >
                <Plus className="h-5 w-5 cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
        {/* add TO Cart */}
        <div className=" py-2 md:py-0 pt-4 md:pt-0 flex items-center gap-3 w-full">
          <Button
            className="bg-[#181818] text-white font-[500] flex items-center gap-3 text-[15px] w-full rounded-[20px] hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out "
            onClick={() => addToCart()}
          >
            <span>ADD TO CART</span>
            <span> ${product?.price}</span>
          </Button>

          <div
            className={`${
              isInWishlist && "bg-red-500 text-white"
            } bg-main-primary hover:bg-[#181818] rounded-full`}
          >
            <Heart
              onClick={() => handelWishlist()}
              className={`p-2 h-10 w-10   hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
