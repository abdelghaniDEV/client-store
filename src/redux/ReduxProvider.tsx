"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store"; // تأكد من أن هذا المسار صحيح
import CartInitializer from "@/components/CartInitializer";
import WishListInitializer from "@/components/WishListInitializer";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <WishListInitializer />
      <CartInitializer />
      {children}
    </Provider>
  );
}
