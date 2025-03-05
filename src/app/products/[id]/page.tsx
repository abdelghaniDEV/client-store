'use client';
import { getProductById } from "@/actions/actions";
import ProductConditions from "@/components/ProductConditions";
import ProductDescription from "@/components/ProductDescription";
import ProductImages from "@/components/ProductImages";
import ProductReview from "@/components/ProductReview";
import ProductVariant from "@/components/ProductVariant ";
import RalatedProducts from "@/components/RalatedProducts";
import { Category, Product } from "@/types";
import { Box, ChevronRight, Home } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductDetails() {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product>();
  const [showSection, setShowSection] = useState<string>("description");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productTarget = await getProductById(id);
        setProduct(productTarget.product);
        console.log(productTarget);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  const checkAvariableStock = () => {
    
    if (product?.stock === undefined) {
      return <span className="text-[16px] text-[#9e9e9e] font-[400]">Stock data not available</span>;
    }
  
    if (product?.stock === 0) {
      return (
        <span className="text-[16px] text-[#f44336] font-[400]">
          Out of Stock
        </span>
      );
    } else if (product?.stock > 0 && product?.stock < 10) {
      return (
        <span className="text-[16px] text-[#ffeb3b] font-[400]">Low Stock</span>
      );
    } else {
      return (
        <span className="text-[16px] text-[#4caf50] font-[400]">In Stock</span>
      );
    }
  };
  

  const handelShowSection = () => {
    if (showSection === "description") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <ProductDescription description={product?.description} />
        </motion.div>
      );
    } else {
      return (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ProductReview />
        </motion.div>
      );
    }
  };

  return (
    <div>
      <div className="container py-1">
        <div className="flex items-center text-main-text pb-2 md:pb-3 text-[15px] ">
          <Link href={"/"} className="flex items-center gap-1">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight />
          <Link href={"/products"} className="flex items-center gap-1">
            <Box className="w-4 h-4" />
            Products
          </Link>
          <ChevronRight />
          <span className="font-[600] text-black">{product?.name}</span>
        </div>
        {/* product details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 border-b-[1px] md:pb-4">
          {/* product Images */}
          <ProductImages product={product} />
          <div>
            <div className="border-b-[1px] pb-6">
              <span className="text-[16px] text-[#a0a0a0] font-[600] uppercase">
                {product?.categories[0].name}
              </span>
              <h1 className="text-[30px] font-[500] leading-[40px]">
                {product?.name}
              </h1>
              <div className="flex items-center gap-3">
                <h4 className="text-[35px] font-[600]">${product?.price}</h4>
                <span className="text-[#a0a0a0]  text-[20px] line-through font-[600]">
                  $100.99
                </span>
                <span className="text-white bg-red-500 px-2 py-[2px] rounded-[20px]">
                  -25px
                </span>
              </div>
              <p className="text-[18px] leading-[22px] text-[#4d4e4f]">
                The garments labelled as Committed are products that have been
                produced using sustainable fibres or processes, reducing their
                environmental impact.
              </p>
            </div>
            {product && <ProductVariant product={product} />}
            <ProductConditions />
            <div className="py-5 md:py-3 text-[16px]">
              <h3 className="font-[500] text-[20px]">Product Details :</h3>
              <h4 className=" font-[500]">
                SKU :{" "}
                <span className="text-main-text font-[400]">
                  {product?._id}
                </span>
              </h4>
              <h4 className=" font-[500]">
                Avariable : {checkAvariableStock()}{" "}
              </h4>
              <h4 className=" font-[500]">
                Categories :{" "}
                {product?.categories.map((cate: Category) => {
                  return (
                    <span className="text-main-text font-[400]" key={cate._id}>
                      {cate.name},
                    </span>
                  );
                })}
              </h4>
            </div>
          </div>
        </div>

        <div className=" text-[20px] py-3 md:text-[30px] flex gap-10 items-center  text-main-text justify-center font-[500]">
          <h3
            onClick={() => setShowSection("description")}
            className={`${
              showSection === "description" &&
              "border-b-[1px] border-main-secondary text-main-secondary"
            } cursor-pointer`}
          >
            Description
          </h3>
          <h3
            onClick={() => setShowSection("reviews")}
            className={`${
              showSection === "reviews" &&
              "border-b-[1px] border-main-secondary text-main-secondary"
            } cursor-pointer`}
          >
            Customers Reviews
          </h3>
        </div>
        {handelShowSection()}
      </div>
       {product?.categories[0] && <RalatedProducts categories={product?.categories[0]} />}
    </div>
  );
}
