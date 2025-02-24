"use client";
import { Check, FilterIcon, X } from "lucide-react";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PriceRangeFilter from "./PriceRangeFilter";
import { Button } from "./ui/button";

type filterProps = {
  stock: string;
  setStock: (stock: string) => void;
  category: string;
  setCategory: (stock: string) => void;
  priceRange: number[];
  setPriceRange: (priceRange: number[]) => void;
  size: string;
  setSize: (size: string) => void;
};

export default function Filter({
  stock,
  setStock,
  category,
  setCategory,
  priceRange,
  setPriceRange,
  setSize,
  size,
}: filterProps) {
  const [openFilter, setOpenFilter] = useState(false);
  const categories = useSelector((state: RootState) => state.categories);
  const [price, setPrice] = useState(50);

  const sizes = ["S", "M", "L", "Xl", "2XL", 38, 39, 40, 41, 42];

  const handleStockChange = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      setStock(value);
    } else {
      setStock("");
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategory(value);
    } else {
      setCategory("");
    }
  };

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
    <div className="container flex items-center justify-between pb-6">
      <div
        className="flex gap-1 items-center p-[6px] text-[#868686] justify-start bg-[#f8f8f8] cursor-pointer"
        onClick={() => setOpenFilter(true)}
      >
        <FilterIcon />
        <span>Filters</span>
      </div>
      {/* <div className="flex items-center gap-2">
        <span>Sort by:</span>
        <Select>
          <SelectTrigger className="w-[180px] text-[17px] focus:outline-none">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="focus:outline-none">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div> */}
      <AnimatePresence>
        {openFilter && (
          <motion.div
            variants={item}
            initial={{ left: "-100vh" }}
            animate={{ left: 0 }}
            transition={{ duration: 0.5 }}
            exit="exit"
            className="fixed top-0 left-0 bg-white w-full md:w-[400px] styleShadow   h-[100vh] z-[1000] overflow-scroll"
          >
            <div className="flex items-center justify-between bg-[#f7f7f7] py-3 px-5 text-[25px] sticky top-0 z-[1000] ">
              
                <h4>Filters</h4>
                <X
                  className="bg-black text-white p-1 rounded-full cursor-pointer"
                  onClick={() => setOpenFilter(false)}
                />
               
            </div>

            <div className="px-5">
              <div className="py-3 border-b-[1px]">
                <h3 className="font-[500] text-[18px]">Availability</h3>
                <div className="flex flex-col gap-2 pt-[16px] pl-2">
                  <div className="flex items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        value="instock"
                        className="custom-checkbox"
                        onChange={handleStockChange}
                        checked={stock === "instock"}
                      />

                      <Check className="bx bx-check absolute top-[2px] right-[2px] h-4 w-4 text-white pointer-events-none font-[600]" />
                    </div>
                    <label className="ml-3 text-[18px]  text-[#767676]">
                      In stock
                    </label>
                  </div>
                  <div className="flex items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        value="lowstock"
                        className="custom-checkbox"
                        onChange={handleStockChange}
                        checked={stock === "lowstock"}
                      />
                      <Check className="bx bx-check absolute top-[2px] right-[2px] h-4 w-4 text-white pointer-events-none font-[600]" />
                    </div>
                    <label className="ml-3 text-[18px]  text-[#767676]">
                      Low stock
                    </label>
                  </div>
                  <div className="flex items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        value="outstock"
                        className="custom-checkbox"
                        onChange={handleStockChange}
                        checked={stock === "outstock"}
                      />
                      <Check className="bx bx-check absolute top-[2px] right-[2px] h-4 w-4 text-white pointer-events-none font-[600]" />
                    </div>
                    <label className="ml-3 text-[18px]  text-[#767676]">
                      Out stock
                    </label>
                  </div>
                </div>
                {/* Add more sizes as needed */}
              </div>
              <div className="py-3 border-b-[1px]">
                <h3 className="font-[500] text-[18px]">Category</h3>
                <div className="flex flex-col gap-2 pt-[16px] pl-2">
                  {categories.map((cate: any) => {
                    return (
                      <div
                        key={cate._id}
                        className="flex items-center relative"
                      >
                        <input
                          type="checkbox"
                          value={cate.name}
                          className="custom-checkbox"
                          onChange={handleCategoryChange}
                          checked={category === cate.name}
                        />
                        <Check className="bx bx-check absolute top-[6px] left-[2px] h-4 w-4 text-white pointer-events-none font-[600]" />
                        <span className="ml-3 text-[18px]  text-[#767676]">
                          {cate.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* Add more sizes as needed */}
              </div>
              <PriceRangeFilter
                min={10}
                max={500}
                setPriceRange={setPriceRange}
                priceRange={priceRange}
              />
              <div className="py-3 border-b-[1px]">
                <h3 className="font-[500] text-[20px]">Size</h3>
                <div className="flex gap-2 flex-wrap pt-[16px] pl-2">
                  <div
                    className={`border-[1px] flex items-center cursor-pointer ${
                      size === "" && "bg-main-secondary text-white"
                    } hover:border-main-secondary transition-all duration-300 ease-in-out transform justify-center h-10 w-10 rounded-full`}
                    onClick={() => setSize("")}
                  >
                    <span className="font-[600]">All</span>
                  </div>
                  {sizes.map((sizeTarget, index) => {
                    return (
                      <div
                        className={`border-[1px] flex items-center cursor-pointer ${
                          size === sizeTarget.toString().toLocaleLowerCase() &&
                          "bg-main-secondary text-white"
                        } hover:border-main-secondary transition-all duration-300 ease-in-out transform justify-center h-10 w-10 rounded-full`}
                        key={index}
                        onClick={() =>
                          setSize(sizeTarget.toString().toLocaleLowerCase())
                        }
                      >
                        <span className="font-[600]">{sizeTarget}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Button className="w-full bg-black text-main-primary cursor-pointer text-[16px] hover:bg-main-primary hover:text-black hover:border-[2px] hover:border-black">
                Apply Filter
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
