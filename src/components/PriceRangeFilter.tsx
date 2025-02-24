import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "./ui/button";

type priceRangeSlider = {
  priceRange: number[];
  setPriceRange: (priceRange: number[]) => void;
  min: number;
  max: number;
};

export default function PriceRangeFilter({
  min = 0,
  max = 1000,
  priceRange,
  setPriceRange,
}: priceRangeSlider) {
  const [priceRangefilter, setPriceRangefilter] = useState([min, max]);

  const handleChange = (value: any) => {
    setPriceRangefilter(value);
    console.log(priceRangefilter);
  };

  const handelClick = () => {
    setPriceRange(priceRangefilter);
    console.log(priceRangefilter);
  };

  return (
    <div className="py-2 border-b-[1px]">
      <h2 className="text-lg font-semibold mb-2">Price Range</h2>

      <Slider
        defaultValue={[min, max]}
        min={min}
        max={max}
        step={1}
        value={priceRangefilter}
        onValueChange={handleChange}
      />
      <div className="flex justify-between text-sm text-gray-600 px-4">
        {/* <span>${priceRange[0]}</span> */}
        <div className=" flex flex-col gap-2 py-3 items-center">
          <h6 className="text-[18px] font-[600]">Min price</h6>
          <span className="border-[2px] rounded-[10px] py-2 px-5 font-[500] text-black text-[18px]">
            {priceRangefilter[0]} $
          </span>
        </div>
        <div className=" flex flex-col gap-2 py-3 items-center">
          <h6 className="text-[18px] font-[600]">Max price</h6>
          <span className="border-[2px] rounded-[10px] py-2 px-5 font-[500] text-black text-[18px]">
            {priceRangefilter[1]} $
          </span>
        </div>
      </div>
      <Button
        onClick={() => handelClick()}
        className="w-full bg-main-secondary text-white text-[17px]"
      >
        Aplay Filter
      </Button>
    </div>
  );
}
