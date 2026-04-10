import { useEffect, useState } from "react";
import { TProduct } from "@/app/products/product";
import { NavbarLayer } from "@/asset/NavbarLayer";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const API_BASE = "https://canthaitoan-be.click/api";

export function useProductDetail(id: string) {
  const router = useRouter();
  const [detail, setDetail] = useState<TProduct>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const cookie = Cookies.get("__session");

  useEffect(() => {
    const getDetailProduct = async () => {
      try {
        const res = await fetch(`${API_BASE}/product/${id}`);
        const data = await res.json();
        setDetail(data.product as TProduct);
      } catch (error: any) {
        throw new Error(`Data failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getDetailProduct();
  }, [id]);

  const showTypeLabel = (str: string | undefined) => {
    if (detail) {
      const findData = NavbarLayer.find((item) => item.value === str);
      return findData?.label;
    }
    return "";
  };

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleOk = async () => {
    try {
      const token = Cookies.get("__session");
      await fetch(`${API_BASE}/product/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {}
    router.push("/products");
    setIsModalOpen(false);
  };

  return { detail, isLoading, isModalOpen, cookie, showModal, handleOk, handleCancel, showTypeLabel };
}
