// "use server";

// export const getAllProducts = async (
//   page: string,
//   limit: string,
//   search?: string,
//   stock?: string,
//   category?: string
// ) => {
//   try {
//     const response = await fetch(
//       `http://localhost:2000/api/products?page=${page}&limit=${limit}&search=${search}&stock=${stock}&category=${category}`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to get products");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
