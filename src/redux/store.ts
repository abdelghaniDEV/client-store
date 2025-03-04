import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./slices/categories.slice";
import cartReducer from "./slices/cart.slice";
import openCart from "./slices/openCart.slice"
import wishlistReducer from "./slices/wishlist.slice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    openCart: openCart,
  }, // Enable Redux DevTools in development
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
