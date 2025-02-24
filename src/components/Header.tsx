"use client";
import { AlignJustify, Heart, ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchCategories } from "@/redux/slices/categories.slice";
import Cart from "./Cart";
import Link from "next/link";

export default function Header() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const wishlist = useSelector((state: RootState) => state.wishlist);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="relative">
      <div className="container py-3  ">
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <AlignJustify
              className="md:border-[1px] md:rounded-full md:w-[40px] md:h-[40px] md:p-2 border-main-primary cursor-pointer "
              onClick={() => setOpenNavbar(!openNavbar)}
            />
          </div>
          <div>
            <h1 className="font-nunito textpx] md:text-[30px] font-[700]">
              BagStore
            </h1>
          </div>

          <Navbar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />

          <div className="flex items-center gap-2 md:gap-4">
            <Link href={'/wishlist'} className="relative">
              <Heart className="h-5 w-5 cursor-pointer" />
              <div className="w-4 h-4 rounded-full bg-main-secondary flex items-center justify-center absolute top-[-13px] right-[16px]">
                <span className="  text-white text-[13px] font-[500]">{wishlist.items.length}</span>
              </div>
            </Link>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
