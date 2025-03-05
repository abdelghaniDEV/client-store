"use client";
import React, { useEffect, useState } from "react";
import TitleHome from "./ui/TitleHome";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getAllProducts } from "@/actions/actions"
import Link from "next/link";
import ListProducts from "./ListProducts";

export default function BestSellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(false);
        const response = await getAllProducts("2", "8", "", "", "", "", "", "");
        setProducts(response.products);
        setLoading(true);
      } catch (err) {
        console.error(err);
        setLoading(false);
        // handle error here
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div className=" pt-10">
        <div className="flex items-center container justify-between">
          <div>
            <TitleHome>Best sellers</TitleHome>
            <p className="tmd:ext-[20px]">
              Our Best-Selling Bags, Handpicked for You
            </p>
          </div>
          <div className="hidden md:block">
            <Button className="flex items-center gap-3 ">
              <span className="text-[20px]">More Products</span>
              <ArrowRight className="h-10 w-10 " />
            </Button>
          </div>
        </div>
        <div className="pt-5">
          <ListProducts products={products} limit={8} loading={loading} />
          <Link href={'/products'} className="flex justify-center md:hidden">
            <Button className="flex items-center gap-2 ">
              <span className="text-[17px]">More Products</span>
              <ArrowRight className="h-10 w-10 " />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
