"use client"; // تأكد من تشغيل هذا الكود فقط على العميل

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadFromLocalStorage } from "../utils/localStorage";
import { addItem } from "../redux/slices/cart.slice";
import { CartItem } from "@/types";



export default function CartInitializer() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const cartData  = loadFromLocalStorage("cartStore01");
    console.log("cartdata",cartData)
    if (Array.isArray(cartData)) {
      cartData.forEach((item: CartItem) => dispatch(addItem(item)));
    }
    setIsLoaded(true);
  }, [dispatch]);

  if (!isLoaded) return null; // لا يتم عرض أي شيء حتى يتم تحميل السلة

  return null;
}
