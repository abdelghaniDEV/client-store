"use clinet";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { Product } from "@/types";

export default function ProductImages({ product }: Product) {
  const [selectImage, setSelectImage] = useState<string>("");

  useEffect(() => {
    setSelectImage(product?.images[0]);
  }, [product]);

  return (
    <div>
      <div className="flex flex-col gap-2">
      <div className="w-full h-[480px] md:h-[530px]">
  {selectImage ? (
    <Image
      src={selectImage}
      alt={product?.name}
      className="w-full h-[480px] md:h-[530px] object-cover rounded-lg"
      priority
      width={800} // Increase width for better quality
      height={530}
      quality={100} // Ensure maximum quality
      // srcSet={`${selectImage} 1x, ${selectImageHighRes} 2x`} // Add high-res version for Retina displays
    />
  ) : (
    <Skeleton className="w-full h-full" />
  )}
</div>
        <div className="flex items-center gap-4">
          {product?.images.map((image: string , index : number) => {
            return (
              <Image
                key={index}
                src={image}
                alt={product?.name}
                className={`w-[60px] h-[60px] object-cover rounded-lg cursor-pointer ${image === selectImage && "border-[1px]  border-main-secondary"}`}
                onClick={() => setSelectImage(image)}
                priority
                width={50}
                height={50}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
