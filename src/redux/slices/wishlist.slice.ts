import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Product } from "@/types/product";
import { saveToLocalStorage } from "@/utils/localStorage";
import { Product } from "@/types";

// export interface Product {
//   _id?: string; // Optional since MongoDB assigns it automatically
//   name: string;
//   description?: string;
//   details?: string;
//   price: number;
//   size?: string[];
//   color?: string[];
//   images?: string[];
//   ShortDescription?: string;
//   stock?: number;
//   categories: string[]; // Store category IDs as strings
//   ratings?: string[]; // Store rating IDs as strings
//   created_at?: Date;
// }

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Product>) {
      const exists = state.items.some(
        (item) => item._id === action.payload._id
      );
      if (!exists) {
        state.items.push(action.payload);
        saveToLocalStorage("wishlistStore01", state);
      }
    },
    removeFromWishlist(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item._id !== action.payload);
      saveToLocalStorage("wishlistStore01", state);
    },
    clearWishlist(state) {
      state.items = [];
      saveToLocalStorage("wishlistStore01", state);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
