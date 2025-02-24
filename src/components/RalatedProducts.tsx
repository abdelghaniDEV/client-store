"use client";
import { getAllProducts } from "@/actions/actions";
import React, { useEffect, useState } from "react";
import ListProducts from "./ListProducts";

export default function RalatedProducts({ categories }: any) {
  const [page, setPage] = useState("1");
  const [limit, setLimit] = useState("8");
  const [showSection, setShowSection] = useState<string>("description");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    setCategory(categories?.name);
  }, [categories]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (category) {
        try {
          setLoading(false);
          const response = await getAllProducts(
            page,
            limit,
            "",
            "",
            category,
            "",
            "",
            ""
          );
          console.log(response);
          setProducts(response.products);
          setLoading(true);
        } catch (err) {
          console.error(err);
          setLoading(true);
        }
      }
    };
    fetchProducts();
  }, [page, limit, category]);

  return (
    <div>
      <div className=" text-[20px] py-8 md:text-[30px] flex gap-10 items-center  text-main-text justify-center font-[500]">
        <h3
          onClick={() => setCategory(categories?.name)}
          className={`${
            category !== "All" &&
            "border-b-[1px] border-main-secondary text-main-secondary"
          } cursor-pointer`}
        >
          Ralated Products
        </h3>
        <h3
          onClick={() => setCategory("All")}
          className={`${
            category === "All" &&
            "border-b-[1px] border-main-secondary text-main-secondary"
          } cursor-pointer`}
        >
          New Products
        </h3>
      </div>
      <div>
        {/* Render products here */}
        <ListProducts
          products={products}
          limit={Number(limit)}
          loading={loading}
        />
      </div>
    </div>
  );
}
