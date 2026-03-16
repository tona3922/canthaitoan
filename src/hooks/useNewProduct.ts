import { useState } from "react";
import { notification } from "antd";
import Cookies from "js-cookie";
import { useProductForm } from "./useProductForm";

const API_BASE = "https://canthaitoan-be.click/api";

export function useNewProduct() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [api, contextHolder] = notification.useNotification();
  const form = useProductForm();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!imageUrl) {
      api.error({ message: "Error", description: "Chưa thêm hình ảnh" });
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const productData = {
        name: formData.get("name"),
        description: form.description,
        type: form.type,
        subtype: form.type2,
        image: imageUrl,
        information: form.note,
      };
      const token = Cookies.get("__session");
      const res = await fetch(`${API_BASE}/product/newproduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });
      if (!res.ok) throw new Error("Failed to add product");
      api.success({ message: "Success", description: "Thêm sản phẩm mới thành công" });
    } catch (error) {
      console.error("Error adding document: ", error);
      api.error({ message: "Error", description: "Fail to add product" });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    imageUrl, setImageUrl,
    isLoading,
    api, contextHolder,
    handleSubmit,
    ...form,
  };
}
