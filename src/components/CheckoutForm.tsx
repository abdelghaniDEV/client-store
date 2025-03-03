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
import { createOrder } from "@/actions/actions";
import loading from "../assets/loading.svg"
import Image from "next/image";

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
  const [errors, setErrors] = useState<order>(initialState);
  const [loadingData, setLoadingData] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const checkData = () => {
    let isValid = true;
    const errors: order = initialState;

    // Full Name
    if (!data.fullName) {
      isValid = false;
      errors.fullName = "Full Name is required";
    } else {
      errors.fullName = "";
    }

    // Address
    if (!data.address) {
      isValid = false;
      errors.address = "Address is required";
    } else {
      errors.address = "";
    }

    // City
    if (!data.city) {
      isValid = false;
      errors.city = "City is required";
    } else {
      errors.city = "";
    }

    // Zip Code
    if (!data.zipCode) {
      isValid = false;
      errors.zipCode = "Zip Code is required";
    } else {
      errors.zipCode = "";
    }

    // Phone Number
    if (!data.phone) {
      isValid = false;
      errors.phone = "Phone Number is required";
    } else {
      errors.phone = "";
    }

    // Country
    if (!data.country) {
      isValid = false;
      errors.country = "Country is required";
    } else {
      errors.country = "";
    }

    // Email
    if (!data.email) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/i.test(data.email)) {
      isValid = false;
      errors.email = "Invalid email format";
    } else {
      errors.email = "";
    }

    setErrors(errors);
    return isValid;
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    if (checkData()) {
      // Place order logic here
      try {
        setLoadingData(true);
        const response = await createOrder(data, cart);
        console.log("Order created successfully", response);
        // Clear cart and reset form
        setLoadingData(false);
      } catch (err) {
        console.error(err);
        setLoadingData(false);
        // Handle error here
      }
      //...
    }
  };

  return (
    <div className="lg:border-l-[1px] lg:pl-10">
      <h4 className="text-[25px] font-[500]">Shipping Information</h4>
      <p className="text-gray-400">
        Complete your order by providing your shipping details.
      </p>

      <div className="pt-4 pb-8">
        <form className="flex flex-col gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-2 relative">
            <Label>
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={data.fullName}
              onChange={handleChange}
              className={`${errors.fullName && "border-red-500"}`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-[12px] absolute bottom-[-18px]">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 relative">
            <Label>
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={data.email}
              onChange={handleChange}
              className={`${errors.email && "border-red-500"}`}
            />
            {errors.email && (
              <p className="text-red-500 text-[12px] absolute bottom-[-18px]">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Number & Country */}
          <PhoneNumberInput
            data={data}
            setData={setData}
            error={errors.phone}
          />
          <CountrySelect data={data} setData={setData} error={errors.country} />

          {/* Address */}
          <div className="flex flex-col gap-2 relative">
            <Label>
              Address <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={data.address}
              onChange={handleChange}
              className={`${errors.address && "border-red-500"}`}
            />
            {errors.address && (
              <p className="text-red-500 text-[12px] absolute bottom-[-18px]">
                {errors.address}
              </p>
            )}
          </div>
          {/* City & ZIP Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 relative">
              <Label>
                City <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                name="city"
                placeholder="Enter City"
                value={data.city}
                onChange={handleChange}
                className={`${errors.city && "border-red-500"}`}
              />
              {errors.city && (
                <p className="text-red-500 text-[12px] absolute bottom-[-18px]">
                  {errors.city}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 relative">
              <Label>
                ZIP Code <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                name="zipCode"
                placeholder="Enter ZIP Code"
                value={data.zipCode}
                onChange={handleChange}
                className={`${errors.zipCode && "border-red-500"}`}
              />
              {errors.zipCode && (
                <p className="text-red-500 text-[12px] absolute bottom-[-18px]">
                  {errors.zipCode}
                </p>
              )}
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
            <Button
              className="border-main-secondary border-[1px] text-[18px] flex items-center gap-2"
              onClick={handelSubmit}
            >
              {/* <Truck />
              <span>Cash on delivery</span> */}
              {loadingData ? (
                <Image src={loading} width={30} alt="loading" />
              ) : (
                 <><Truck />
                <span>Cash on delivery</span></>
              )}
            </Button>
            <Button className="bg-main-secondary text-white text-[18px]">
              <CreditCard className="w-[30px] h-[30px] " />
              <span>Pay Order</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
