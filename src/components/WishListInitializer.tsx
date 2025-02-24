"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadFromLocalStorage } from "../utils/localStorage";
import { addToWishlist } from "@/redux/slices/wishlist.slice";
import { Product } from "@/types";

interface WishlistData {
  items: Product[];
}

export default function WishListInitializer() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const wishlistData : WishlistData | null = loadFromLocalStorage("wishlistStore01");
   
    if (wishlistData) {
      wishlistData.items.forEach((item: Product) => dispatch(addToWishlist(item)));
    }
    setIsLoaded(true);
  }, [dispatch]);

  if (!isLoaded) return null;

  return null;
}
