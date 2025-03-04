"use client";
import { AppDispatch, RootState } from "@/redux/store";
import { Heart, LayoutDashboard, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/redux/slices/openCart.slice";

export default function FooterMobile() {
  const wishlist = useSelector(
    (statu: RootState) => statu.wishlist.items.length
  );
  const cart = useSelector((statu: RootState) => statu.cart.items.length);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="fixed bottom-0 z-[1000] bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] md:hidden w-full pt-2">
      <div className="grid grid-cols-4 items-center container">
        <div className="flex flex-col items-center ">
          <LayoutDashboard className="w-5 h-5" />
          <span>Shop</span>
        </div>
        <div className="flex flex-col items-center ">
          <Search className="w-5 h-5" />
          <span>Search</span>
        </div>
        <Link
          href={"/wishlist"}
          className="flex flex-col items-center relative "
        >
          <Heart className="w-5 h-5" />
          <span>Wishlist</span>
          <div className="w-4 h-4 rounded-full bg-main-secondary flex items-center justify-center absolute top-[-4px] right-[16px]">
            <span className="  text-white text-[13px] font-[500]">
              {wishlist}
            </span>
          </div>
        </Link>
        <div
          className="flex flex-col items-center relative "
          onClick={() => dispatch(toggleCart())}
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Cart</span>
          <div className="w-4 h-4 rounded-full bg-main-secondary flex items-center justify-center absolute top-[-4px] right-[16px]">
            <span className="  text-white text-[13px] font-[500]">{cart}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
