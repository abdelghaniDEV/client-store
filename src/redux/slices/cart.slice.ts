// src/redux/cartSlice.ts
import { CartItem } from "@/types";
import { saveToLocalStorage } from "@/utils/localStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   size?: string;
//   color?: string;
//   image?: string;
//   quantity: number;
// }

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// const initialState: CartState = loadFromLocalStorage("cart") || {
//   items: [],
//   totalQuantity: 0,
//   totalPrice: 0,
// };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const { id } = action.payload; // Default quantity to 1 if not provided
      console.log(action.payload);

      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        // Replace the existing item with the new one
        state.items[itemIndex] = action.payload;
      } else {
        // Add the new item if it doesn't exist
        state.items.push(action.payload);
      }

      // Recalculate total quantity and total price
      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      // save in local stockage
      saveToLocalStorage("cartStore01", state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      console.log(action.payload);
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
      }
      // save in local stockage
      saveToLocalStorage("cartStore01", state.items);
    },
    incrementItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalPrice += existingItem.price;
      }
      // save in local stockage
      saveToLocalStorage("cartStore01", state.items);
    },
    decrementItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      }
      // save in local stockage
      saveToLocalStorage("cartStore01", state.items);
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      // save in local stockage
      saveToLocalStorage("cartStore01", state.items);
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
