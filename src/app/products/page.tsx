"use client"
import React from "react";
import { Suspense } from "react";
import Products from "@/components/Products";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Products />
      </Suspense>
    </div>
  );
}
