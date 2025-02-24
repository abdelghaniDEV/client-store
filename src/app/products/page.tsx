"use client";
import { getAllProducts } from "@/actions/actions";
import Filter from "@/components/Filter";
// import { getAllProducts } from "@/actions/product.action";
import ListProducts from "@/components/ListProducts";
import Pagination from "@/components/Pagination";
import { RootState } from "@/redux/store";
import { Category } from "@/types";
import { ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const [limit , setLimit] = useState('12')
  const [page, setPage] = useState(searchParams.get("page") || "1");
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [stock, setStock] = useState(searchParams.get("stock") || "");
  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [totalPages, setTotalPages] = useState();
  const [priceRange, setPriceRange] = useState<number[]>([1, 1000]);
  const [size, setSize] = useState<string>(searchParams.get("size") || "");
  const router = useRouter();

  const categories = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    router.push(
      `?page=${page}&search=${search}&stock=${stock}&category=${category}&size=${size}`
    );
  }, [page, search, category, stock, size , router]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoading(false);
        const response = await getAllProducts(
          page,
          limit,
          search,
          stock,
          category,
          priceRange[0].toString(),
          priceRange[1].toString(),
          size
        );
        if (response) {
          setProducts(response.products);
          setTotalPages(response.totalPages);
          setLoading(true);
          console.log("products", response);
        }
      } catch (err) {
        setLoading(false);
        console.error("Error", err);
      }
    };
    FetchData();
  }, [page, search, stock, category, priceRange, size, setLoading, setProducts, setTotalPages]);

  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh]   mb-[30px] relative bg-[url(/BannerShop.png)] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[35px] font-[600] lg:text-[55px] ">
              {category}
            </h1>
            <div className="flex gap-2 items-center  text-[15px] lg:text-[17px]">
              <h2>Products</h2>
              <ChevronRight />
              <h2 className="">{category}</h2>
            </div>
          </div>
          <div className="">
            <ul className="flex gap-[14px]  lg:gap-[20px]">
              <li
                id="All"
                onClick={() => setCategory("All")}
                className={`text-[17px] lg:text-[20px] cursor-pointer ${
                  category === "All" ? "border-b-[1.5px] border-black" : ""
                }`}
              >
                All
              </li>
              {categories.map((cate: Category) => {
                return (
                  <li
                    onClick={() => {
                      setCategory(cate.name);
                      setPage("1");
                      setSearch("");
                    }}
                    key={cate._id}
                    id={cate._id}
                    className={`text-[17px] lg:text-[20px] cursor-pointer ${
                      cate.name === category
                        ? "border-b-[1.5px] border-black"
                        : ""
                    }`}
                  >
                    {cate.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Filter
        stock={stock}
        setStock={setStock}
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        size={size}
        setSize={setSize}
      />
      {/* <div>~
         <h3><span>{products}</span> Products Found</h3>
      </div> */}
      <ListProducts
        products={products}
        loading={loading}
        limit={Number(limit)}
      />
      {Number(totalPages) > 1 && (
        <Pagination
          currentPage={Number(page)}
          totalPages={Number(totalPages)}
          setPage={setPage}
          page={Number(page)}
        />
      )}
    </div>
  );
}
