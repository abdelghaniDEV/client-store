import Link from "next/link";
import React from "react";
import iconSucess from "@/assets/success.gif";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Success() {
  return (
    <div>
      <div className="flex items-center justify-center py-[80px] container">
        <div className="flex flex-col items-center  ">
          <div className="flex items-center flex-col">
            <Image
              src={iconSucess}
              alt="sucess"
              className="w-[100px] h-[100px] items-center"
            />
          </div>
          <div className="flex items-center flex-col gap-2 md:gap-3">
            <h1 className="text-[25px] md:text-[30px] font-[500]">
              Your Order is Confirmed
            </h1>
            <p className="md:w-[80%] text-center md:text-[18px] md:leading-[25px]">
              Thank you for your order! You have selected{" "}
              <b>Cash on Delivery</b>. Please ensure you have the exact amount
              ready upon delivery. A confirmation email with your order details
              has been sent to your registered email.
            </p>
            <Button className="bg-main-secondary text-white">
              <Link href={"/"} className="flex items-center gap-2">
                <ArrowLeft />
                <span>Back To Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
