"use server";

import { CartState } from "@/redux/slices/cart.slice";
import { order, submitOrder } from "@/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type dataReview = {
  fullName: string;
  email: string;
  comment: string;
  rating: number;
  product: string;
  image?: File;
};

export const getAllProducts = async (
  page: string,
  limit: string,
  search?: string,
  stock?: string,
  category?: string,
  minPrice?: string,
  maxPrice?: string,
  size?: string
) => {
  console.log("categories", page, limit);
  try {
    const response = await fetch(
      `${apiUrl}/products?page=${page}&limit=${limit}&search=${search}&stock=${stock}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&size=${size}`
    );
    if (!response.ok) {
      throw new Error("Failed to get products");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductById = async (productId: string) => {
  try {
    const response = await fetch(`${apiUrl}/products/${productId}`);
    if (!response.ok) {
      throw new Error("Failed to get product");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${apiUrl}/categories`);

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const categories = await response.json();
    console.log("categories", categories);
    return await categories;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductReviews = async (productId: string) => {
  try {
    const response = await fetch(`${apiUrl}/ratings/${productId}`);
    if (!response.ok) {
      throw new Error("Failed to get reviews");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createReview = async (data: dataReview) => {
  console.log(data);
  const formData = new FormData();
  formData.append("fullName", data.fullName);
  formData.append("email", data.email);
  formData.append("comment", data.comment);
  formData.append("rating", String(data.rating));
  formData.append("product", data.product);
  if (data.image) {
    formData.append("image", data.image);
  }

  try {
    const response = await fetch(`${apiUrl}/ratings`, {
      method: "POST",
      body: formData,
    });
    // revalidatePath("/admin/categories"); // إعادة تحميل الصفحة بعد الإنشاء
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createOrder = async (data: order, cart: CartState) => {
  try {
    const formData: submitOrder = {
      fullName: data.fullName,
      email: data.email,
      address: data.address,
      city: data.city,
      zipCode: data.zipCode,
      phone: data.phone,
      country: data.country,
      products: cart.items.map((item) => ({
        product: item.id,
        quantity: item.quantity,
        totalPrice: item.price * item.quantity,
        size: item.size,
        color: item.color,
      })),
      totalItems: cart.totalQuantity,
      totalPrice: cart.totalPrice,
    };

    const response = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // ✅ إضافة هيدر `Content-Type`
      },
      body: JSON.stringify(formData), // ✅ تحويل البيانات إلى JSON
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
