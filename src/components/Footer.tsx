"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Category } from "@/types";
import Link from "next/link";
import logo from "../assets/ARWA.SHOP-logo.png"
import Image from "next/image";

export default function Footer() {
  const categories = useSelector((statu: RootState) => statu.categories);
  return (
    <div className="bg bg-main-primary w-full  text-black  pt-10 pb-20 md:pb-10 ">
      <div className="flex gap-4 flex-col lg:flex-row lg:justify-between  container">
        <div>
        <div className="w-[200px] md:w-[250px] h-[50px] ">
            <Image src={logo} alt="logo" width={100} height={100} className="w-[200px] md:w-[250px] bg-cover" unoptimized />
          </div>
          <p className="lg:w-[400px] uppercase  text-[25px] md:text-[35px] md:leading-[35px] lg:text-[25px] font-[400] leading-[22px]">
            Get Creative white clothes : <br /> stylish inspiration for every
            occation .
          </p>
          <div className="flex items-center gap-4 pt-3">
            <Link href="#" className=" hover:text-gray-500">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className=" hover:text-gray-500">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className=" hover:text-gray-500">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className=" hover:text-gray-500">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="flex gap-20 md:gap-[100px]">
          <div>
            <h4 className="pb-1 text-[20px] font-[500] text-">Pages</h4>
            <ul className="flex flex-col text-[18px] gap-2">
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li><Link href={'/shop'}>Shop</Link></li>
              <li><Link href={'/products'}>Product</Link></li>
              <li><Link href={'/about'}>About Us</Link></li>
              <li><Link href={'/contact'}>Contact US</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="pb-1 text-[20px] font-[500] text-">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <div>
                <h5 className="font-[500]">Address : </h5>
                <p>123 Street, City, Country</p>
              </div>
              <div>
                <h5 className="font-[500]">Email : </h5>
                <p>Example@gmail.com</p>
              </div>
              <div>
                <h5 className="font-[500]">Working Days/Hours:</h5>
                <p>Mon-Sat / 8:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="pb-1 text-[20px] font-[500] text-">Categories</h4>
          <ul className="flex items-center flex-wrap gap-4">
            {categories.map((category: Category) => {
              return (
                <Link href={`/products?category=${category.name}`}
                  className="border-[1px] py-1 px-3 border-main-secondary"
                  key={category._id}
                >
                  {category.name}
              </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="pt-4 md:pt-10">
        <p className="text-[14px] text-center text-gray-500">
          &copy; 2022 All rights reserved. Designed by{" "}
          <span className="text-main-text">BAGSTORE</span>
        </p>
      </div>
    </div>
  );
}
