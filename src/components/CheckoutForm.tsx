"use client";
import React, { useState } from "react";
import PhoneNumberInput from "@/components/PhoneSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CountrySelect from "@/components/CountrySelect";
import { CreditCard, Truck } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { order } from "@/types";

export default function CheckoutForm() {
  const cart = useSelector((state: RootState) => state.cart);

  const initialState: order = {
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    country: "",
  };

  const [data, setData] = useState<order>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="lg:border-l-[1px] lg:pl-10">
      <h4 className="text-[25px] font-[500]">Shipping Information</h4>
      <p className="text-gray-400">
        Complete your order by providing your shipping details.
      </p>

      <div className="pt-4 pb-8">
        <form className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <Label>
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={data.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label>
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone Number & Country */}
          <PhoneNumberInput data={data} setData={setData} />
          <CountrySelect data={data} setData={setData} />
          
          {/* Address */}
          <div className="flex flex-col gap-2">
            <Label>
              Address <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              name="adress"
              placeholder="Enter Address"
              value={data.address}
              onChange={handleChange}
            />
          </div>
          {/* City & ZIP Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label>
                City <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                name="city"
                placeholder="Enter City"
                value={data.city}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>
                ZIP Code <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                name="zipCode"
                placeholder="Enter ZIP Code"
                value={data.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Summary */}
          <div className="lg:px-10">
            <div className="flex items-center justify-between">
              <Label className="text-main-text text-[20px]">Total Items:</Label>
              <span className="font-[600]">{cart.totalQuantity} item</span>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-main-text text-[20px]">SubTotal:</Label>
              <span className="font-[600]">{cart.totalPrice.toFixed(2)} $</span>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-main-text text-[20px]">Shipping:</Label>
              <span className="font-[600]">5.00 $</span>
            </div>
            <div className="flex items-center justify-between">
              <Label className="font-[600] text-[20px]">Total:</Label>
              <span className="font-[600]">
                {(cart.totalPrice + 5).toFixed(2)} $
              </span>
            </div>
          </div>

          {/* Payment Buttons */}
          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            <Button className="bg-main-secondary text-white text-[18px] flex items-center gap-2">
              <Truck />
              <span>Cash on delivery</span>
            </Button>
            <Button className="border-main-secondary border-[1px] text-[18px] flex items-center gap-2">
              <CreditCard className="w-[30px] h-[30px]" />
              <span>Pay Order</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
