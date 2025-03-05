import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { Product } from "@/types";

interface ProductImagesProps {
  product: Product | undefined; // إضافة تعريف النوع هنا
}

export default function ProductImages({ product }: ProductImagesProps) { // استخدام الProps مع النوع المحدد
  const [selectImage, setSelectImage] = useState<string>("");

  useEffect(() => {
   if(product) {
    if (product?.images?.length > 0) {
      setSelectImage(product?.images[0]);
    }
   }
  }, [product]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="w-full h-[480px] md:h-[650px] lg:h-[530px]">
          {selectImage ? (
            <Image
              src={selectImage}
              alt={product?.name || "Product Image"}
              className="w-full h-[480px] md:h-[650px] lg:h-[530px] object-cover rounded-lg"
              priority
              width={800}
              height={630}
              quality={100}
            />
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </div>
        <div className="flex items-center gap-4">
          {product?.images?.map((image: string, index: number) => (
            <Image
              key={index}
              src={image}
              alt={product?.name || "Product Thumbnail"}
              className={`w-[60px] h-[60px] object-cover rounded-lg cursor-pointer ${image === selectImage && "border-[1px] border-main-secondary"}`}
              onClick={() => setSelectImage(image)}
              priority
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
