import { Trash, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  decrementItem,
  incrementItem,
  removeItem,
} from "@/redux/slices/cart.slice";
import { ScrollArea } from "./ui/scroll-area";

type listCartProps = {
  cart: any[];
};

export default function ListCart({ cart }: listCartProps) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex flex-col gap-3 py-4 h-auto min-h-[90%]">
      {cart.map((item: any) => (
        <div
          key={item.id}
          className="flex gap-3 items-start border-b-[1px] pb-4 relative"
        >
          <div>
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={10}
              className="w-[85px] h-[110px]"
            />
          </div>
          <div className=" ">
            <h3 className="text-[19px] font-medium leading-4 w-full truncate">
              {item.name}
            </h3>

            <p className="text-[22px] font-[600]">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <div className="flex items-center gap-1">
              {item.color && (
                <div
                  className={`border-[1px] border-main-secondary p-[2px] rounded-full hover:shadow-md transition-all`}
                >
                  <div
                    className={` w-5 h-5 rounded-full`}
                    style={{ backgroundColor: item.color }}
                  ></div>
                </div>
              )}
              /
              {item.size && (
                <div className=" border-[1px] flex items-center border-main-secondary transition-all duration-300 ease-in-out transform justify-center h-6 w-6 uppercase rounded-full">
                  <span className="font-[600] text-[13px]">{item.size}</span>
                </div>
              )}
            </div>
            <div className="flex mt-1 items-center justify-between ">
              <div className="flex  items-center gap-2 border-[1px]">
                <div
                  onClick={() => dispatch(incrementItem(item.id))}
                  className="w-8 h-8 cursor-pointer bg-main-primary flex items-center justify-center text-[16px] font-[600] border-[1px] border-main-secondary"
                >
                  +
                </div>
                <span>{item.quantity}</span>
                <div
                  onClick={() => dispatch(decrementItem(item.id))}
                  className="w-8 h-8 cursor-pointer bg-main-primary flex items-center justify-center text-[16px] font-[600] border-[1px] border-main-secondary"
                >
                  -
                </div>
              </div>

              <HoverCard>
                <HoverCardTrigger
                  className="flex items-center gap-1 absolute right-0  rounded-full cursor-pointer"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <div>
                    <Trash className="bg-main-primary p-2 text-red-500 h-9 w-9 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto h-auto bg-red-500 text-white mx-4 font-[550] border-none outline-none">
                  Remove
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
