"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TProduct } from "../../products/product";
import { deleteProduct } from "./hooks/deleteProduct";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Modal } from "antd";
import { usePathname } from "next/navigation";
import { NavbarLayer } from "@/asset/NavbarLayer";
export default function Page() {
  const pathname = usePathname();
  const id = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [detail, setDetail] = useState<TProduct>();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookie, setCookie] = useState(Cookies.get("session"));
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    deleteProduct(id);
    router.push("/pages/products");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND}/product/${id}`
        );
        // const response = await fetch("http://localhost:3001/product/");

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Request failed with status ${response.status}: ${errorText}`
          );
        }
        const data = await response.json();
        setDetail(data.product);
      } catch (error: any) {
        throw new Error(`Data failed: ${error.message}`);
      }
    };
    getAllProducts();
  }, [id]);
  const showTypeLabel = (str: string | undefined) => {
    if (detail) {
      const findData = NavbarLayer.find((item) => item.value === str);
      return findData?.label;
    }
    return "";
  };
  return (
    <main className="min-h-screen pt-20 pb-10 flex justify-center items-center">
      <div className="phone:w-4/5 lg:w-2/3 flex phone:flex-col lg:flex-row gap-6">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={
              detail?.image ??
              "https://www.mt.com/images/WebShop/MainImage/30524635.jpg"
            }
            alt="item"
            className="lg:w-2/3 phone:w-full"
            width={100}
            height={100}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl text-sky-600 font-bold font-customCardTitle">
            {detail?.name}
          </h1>
          <hr />
          <div className="flex flex-col gap-0.5 mt-2">
            <h2 className="text-lg font-semibold text-slate-500">Loại cân</h2>
            <p className="text-md">{showTypeLabel(detail?.type)}</p>
          </div>
          <div className="flex flex-col gap-0.5 mt-2">
            <h2 className="text-lg font-semibold text-slate-500">Mô tả</h2>
            <p className="text-md whitespace-pre">{detail?.description}</p>
          </div>
          {detail?.information && (
            <div className="flex flex-col gap-0.5 mt-2">
              <h2 className="text-lg font-semibold text-slate-500">
                Thông số kỹ thuật
              </h2>
              {detail?.information.map((criteria, index) => {
                return (
                  <div
                    className="flex flex-row gap-2 items-center mt-2"
                    key={index}
                  >
                    <h2 className="text-md">{criteria.noteName} :</h2>
                    <p className="text-md font-semibold">
                      {criteria.noteDescription}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
          <div className="mt-6 flex gap-3">
            <button
              className="p-2 bg-gray-700 rounded-lg text-white font-semibold"
              onClick={() => router.push("/pages/about")}
            >
              Liên hệ báo giá
            </button>
            {cookie !== undefined && (
              <>
                <button
                  className="bg-gray-700 text-white p-2 rounded-lg"
                  onClick={() => router.push(`/pages/edit/${id}`)}
                >
                  Chỉnh sửa sản phẩm
                </button>
                <button
                  className="bg-red-500 p-2 rounded-lg text-white font-semibold"
                  onClick={() => {
                    showModal();
                  }}
                >
                  Xóa sản phẩm
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        title="Xóa sản phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <p>Bạn có chắc chắn muốn xóa sản phẩm</p>
      </Modal>
    </main>
  );
}
