import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg bg-main-primary w-full  text-black  ">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4  container">
        <div>
          <p className="lg:w-[300px] pt-5 uppercase text-[25px] font-[600] leading-[22px]">
            Get Creative white clothes : <br /> stylish inspiration for every
            occation .
          </p>
        </div>

        <div className="">
          <h4 className="pb-1 text-[20px] font-[500] text-">Categories</h4>
          <ul className="flex flex-col text-[18px] gap-2">
            <li>Men</li>
            <li>Women</li>
            <li>Shoes</li>
            <li>Accesoire</li>
            {/* <li>QR Code Integration for Easy Access</li> */}
          </ul>
        </div>
        <div className="">
          <h4 className="pb-1 text-[20px] font-[500]">Pages</h4>
          <ul className="flex flex-col text-[18px] gap-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="pb-4 text-[20px] text-">Get In Touch</h4>
          <div className="flex gap-2 mb-2 items-center">
            <Mail className="w-4 h-4" />
            <p className="">denioMenu@gmail.com</p>
          </div>
          <div className="flex gap-2 mb-2 items-center">
            <Phone className="w-4 h-4" />
            <p className="">+212636998077</p>
          </div>
          <ul className="flex  gap-1 text- items-center">
            <li className="b  p-[5px] rounded-[10px] ">
              <Linkedin className="h-[20px] w-[20px]" />
            </li>
            <li className="b p-[5px] rounded-[10px] ">
              <Instagram className="h-[20px] w-[20px]" />
            </li>
            <li className="b  p-[5px] rounded-[10px] ">
              <Facebook className="h-[20px] w-[20px]" />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="md:flex text-center justify-between pt-10">
        <div>
          <p>@2025 BagStor, All rights Reserved </p>
        </div>
        <div>
          <ul className="flex gap-2 justify-center">
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
