import { useEffect, useState } from "react";
import { TProduct } from "@/app/products/product";
import { NavbarLayer } from "@/asset/NavbarLayer";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useProductForm } from "./useProductForm";

const API_BASE = "https://canthaitoan-be.click/api";

export function useEditProduct(id: string) {
  const router = useRouter();
  const [product, setProduct] = useState<TProduct>();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState<string>("");
  const [api, contextHolder] = notification.useNotification();
  const form = useProductForm();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await fetch(`${API_BASE}/product/${id}`);
        const data = await res.json();
        const p = data.product as TProduct;
        setProduct(p);
        setInput(p.name);
        form.setType(p.type);
        form.setNote(p.information);
        form.setDescription(p.description);
        if (p.type) {
          const findData = NavbarLayer.find((item) => item.value === p.type);
          if (findData) {
            form.setSubData(findData.children);
            form.setType2(p.subtype);
          }
        }
      } catch (error) {
        throw new Error("Failed to fetch product");
      }
    };
    fetchProductById();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    setIsLoading(true);
    try {
      const body = {
        name: formData.get("name"),
        description: form.description,
        type: form.type,
        subtype: form.type2,
        image: newImageUrl !== "" ? newImageUrl : product?.image,
        information: form.note,
      };
      const token = Cookies.get("__session");
      const res = await fetch(`${API_BASE}/product/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to update product");
      api.success({ message: "Success", description: "Cập nhật sản phẩm thành công" });
      setIsLoading(false);
      setTimeout(() => router.push(`/detail/${id}`), 1500);
    } catch (error) {
      api.error({ message: "Error", description: "Đã có lỗi xảy ra vui lòng thử lại" });
      setIsLoading(false);
    }
  };

  return {
    product,
    input, setInput,
    isLoading,
    newImageUrl, setNewImageUrl,
    api, contextHolder,
    handleSubmit,
    ...form,
  };
}
