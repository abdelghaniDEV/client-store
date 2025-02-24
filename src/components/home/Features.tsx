import { BadgeCheck, Headset, Truck, Undo2 } from "lucide-react";
import React from "react";

export default function Features() {
  return (
    <div className="container py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="p-2 border-main-primary border-[1px] rounded-full">
              <Truck className="w-10 h-10" />
            </div>
            <div className="tet text-center">
              <h3 className="text-[20px] md:text-[30px] leading-[30px] font-[500]">
                Free Shipping
              </h3>
              <p className="text-sm">No extra costs, just the price you see.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="p-2 border-main-primary border-[1px] rounded-full">
              <BadgeCheck className="w-10 h-10" />
            </div>
            <div className="tet text-center">
              <h3 className="text-[20px] md:text-[30px] leading-[30px] font-[500]">
                Member Discounts
              </h3>
              <p className="text-sm">Special prices for our loyal customers.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="p-2 border-main-primary border-[1px] rounded-full">
              <Headset className="w-10 h-10" /> 
            </div>
            <div className="tet text-center">
              <h3 className="text-[20px] md:text-[30px] leading-[30px] font-[500]">
                24/7 Support
              </h3>
              <p className="text-sm">24/7 support, always here just for you.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="p-2 border-main-primary border-[1px] rounded-full">
              <Undo2 className="w-10 h-10" />
            </div>
            <div className="tet text-center">
              <h3 className="text-[20px] md:text-[30px] leading-[30px] font-[500]">
                14 Days Returns
              </h3>
              <p className="text-sm">Risk-free shopping with easy returns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
