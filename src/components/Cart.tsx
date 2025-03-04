"use client";
import { ShoppingBag, X } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import ListCart from "./ListCart";
import { Button } from "./ui/button";
import { clearCart } from "@/redux/slices/cart.slice";
import Link from "next/link";
import { closeCart, openCart } from "@/redux/slices/openCart.slice";

export default function Cart() {
  // const [open, setOpen] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const open = useSelector((state: RootState) => state.openCart.isOpen)

  const item = {
    exit: {
      opacity: 0,
      width: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        // delay: 1.2,
      },
    },
  };
  return (
    <div>
      <div className="relative">
        <ShoppingBag
          className="h-5 w-5 cursor-pointer"
          onClick={() => dispatch(openCart())}
        />
        <div className="w-4 h-4 rounded-full bg-main-secondary flex items-center justify-center absolute top-[-13px] right-[16px]">
          <span className="  text-white text-[13px] font-[500]">
            {cart.items.length}
          </span>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={item}
            initial={{ right: "-100vh" }}
            animate={{ right: 0 }}
            transition={{ duration: 0.5 }}
            exit="exit"
            className="fixed top-0 right-0 bg-white w-full md:w-[400px] styleShadow shadow-2xl  h-[100vh] z-[1000] overflow-scroll px-4 pb-1 pt-4"
          >
            <div className=" sticky top-0 bg-main-primary p-2 z-[1000]">
              <div className="flex items-center justify-between  ">
                <h4 className="text-[20px] font-[600]">
                  Shopping Cart ({cart.items.length})
                </h4>
                <X
                  className="bg-main-primary rounded-full w-8 h-8 p-1 cursor-pointer 
             transition-transform duration-300 hover:rotate-90 hover:text-red-500"
                  onClick={() => dispatch(closeCart())}
                />
              </div>
            </div>
            <ListCart cart={cart.items} />
            <div className="bg-main-primary p-4 rounded-[5px] sticky bottom-0 left-0 w-full ">
              <div className="text-[20px] font-[600] flex items-center justify-between ">
                <h4>Total Quantity</h4>
                <h4>{cart.totalQuantity} Item</h4>
              </div>
              <div className="text-[20px] font-[600] flex items-center justify-between ">
                <h4>Total Price : </h4>
                <h4>${cart.totalPrice.toFixed(2)}</h4>
              </div>
              <div className="grid grid-cols-2 items-center gap-4 mt-3">
                <Button
                  className="bg-main-secondary text-white text-[18px]"
                  onClick={() => dispatch(closeCart())}
                >
                  <Link href={"/checkout"}>Check Out</Link>
                </Button>
                <Button className=" text-black border-[1px] border-main-secondary text-[18px]">
                  View Cart
                </Button>
              </div>
              <div
                className="flex items-center justify-center pt-2"
                onClick={() => dispatch(clearCart())}
              >
                <button className="text-[18px] border-[2px] px-3 border-main-secondary font-[500]">
                  Clear Cart
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
