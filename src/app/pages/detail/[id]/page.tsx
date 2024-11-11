"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TProduct } from "../../products/product";
export default function Page({ params }: { params: { id: string } }) {
  const [detail, setDetail] = useState<TProduct>();
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND}/product/${params.id}`
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
  }, [params.id]);
  return (
    <main className="min-h-screen pt-20 pb-10 flex justify-center items-center">
      <div className="w-2/3 flex flex-row gap-6">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={
              detail?.image ??
              "https://www.mt.com/images/WebShop/MainImage/30524635.jpg"
            }
            alt="item"
            className="w-2/3"
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
            <p className="text-md">{detail?.type}</p>
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

          <button className="mt-6 py-2 px-4 bg-gray-700 rounded-lg text-white text-lg font-semibold">
            Liên hệ báo giá
          </button>
        </div>
      </div>
    </main>
  );
}
