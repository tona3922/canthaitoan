import { TProduct } from "@/app/pages/products/product";
import { Dispatch } from "@reduxjs/toolkit";
import { SetStateAction } from "react";

let token = "";

if (typeof window !== "undefined") {
  token = window.localStorage.getItem("accessToken") ?? "";
}
const fetchProductById = async (
  id: string,
  setProduct: (value: SetStateAction<TProduct | undefined>) => void
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/product/${id}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data.product);
      setProduct(data.product);
    } else {
      console.log(response);
      throw new Error("Failed post data");
      // Handle error
    }
  } catch (error) {
    throw new Error("Failed post data");
  }
};
const data = {};
const editProductById = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/product/${id}`,
      // `http://localhost:3001/product/newproduct/product/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {}
};
export { fetchProductById, editProductById };
