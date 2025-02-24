"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadFromLocalStorage } from "../utils/localStorage";
import { addToWishlist } from "@/redux/slices/wishlist.slice";

export default function WishListInitializer() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const wishlistData = loadFromLocalStorage("wishlistStore01");
    console.log(wishlistData);
    if (wishlistData) {
      wishlistData.items.forEach((item: any) => dispatch(addToWishlist(item)));
    }
    setIsLoaded(true);
  }, [dispatch]);

  if (!isLoaded) return null;

  return null;
}
