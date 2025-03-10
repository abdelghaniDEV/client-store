import React from "react";
import ProductCart from "./ProductCart";
import { Skeleton } from "./ui/skeleton";
import { Product } from "@/types";

type listProductsProps = {
  products: Product[];
  loading: boolean;
  limit: number;
};

export default function ListProducts({
  products,
  loading,
  limit,
}: listProductsProps) {
  const listSketelon = () => {
    return Array.from({ length: Number(limit) }, (_, index) => {
      return (
        <div key={index} className=" b">
          <Skeleton className=" w-full h-[200px] md:h-[306px]" />
          <Skeleton className="w-full mt-2 h-[20px]" />
          <div className="flex items-center gap-2 mt-2">
            <Skeleton className="w-[100px] h-[20px]" />
            <Skeleton className="w-[100px] h-[20px]" />
          </div>
        </div>
      );
    });
  };
  return (
    <div className=" px-3 md:px-[4rem] xl:px-[5rem] sm:px-[2rem] grid grid-cols-2  md:grid-cols-3 pb-8 lg:grid-cols-4 gap-2 lg:gap-[20px] ">
      {loading ? (
        <>
          {products.map((product: Product) => (
            <ProductCart key={product._id} product={product} />
          ))}{" "}
        </>
      ) : (
        listSketelon()
      )}
    </div>
  );
}
