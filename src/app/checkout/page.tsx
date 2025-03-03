"use client";

import CheckoutForm from "@/components/CheckoutForm";
import ListCart from "@/components/ListCart";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";



export default function Checkout() {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="bg-main-muted py-3">
      <div className="container">
        <h2 className="text-[35px] font-[500]">Checkout</h2>
        <div className="grid md:grid-cols-2  grid-cols-1 ">
          <div className=" lg:pr-10">
            <h4 className="text-[25px] font-[500]">List Products</h4>
            <ScrollArea className=" h-[600px]  lg:pr-10">
              <ListCart cart={cart.items} />
            </ScrollArea>
          </div>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
