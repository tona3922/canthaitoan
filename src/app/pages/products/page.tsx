"use client";
import Item from "@/components/Item";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import { TProduct } from "./product";
import { useSearchParams } from "next/navigation";
import { Spin } from "antd";

export default function Page() {
  const [fetchData, setFetchData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const subtype = searchParams.get("subtype");
  const paramsObj = { type: type ?? "", subtype: subtype ?? "" };
  // const newSearchParams = new URLSearchParams(paramsObj);

  useEffect(() => {
    const getAllProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_BACKEND
          }/product/filter?${new URLSearchParams(paramsObj).toString()}`
        );
        // const response = await fetch("http://localhost:3001/product/");

        if (!response.ok) {
          const errorText = await response.text();
          setIsLoading(false);
          throw new Error(
            `Request failed with status ${response.status}: ${errorText}`
          );
        }
        const data = await response.json();
        setIsLoading(false);
        setFetchData(data.foundProduct);
      } catch (error: any) {
        setIsLoading(false);
        throw new Error(`Data failed: ${error.message}`);
      }
    };
    getAllProducts();
  }, [type, subtype]);
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <main className="mt-20 pb-6 my-10 mx-10">
      <div className="flex gap-4">
        <div className="basis-1/5 min-h-screen">
          <div className="sticky top-20">
            <Filter />
          </div>
        </div>
        <div className="basis-4/5 flex">
          {isLoading ? (
            <div className="flex flex-row gap-2 items-center mx-auto pb-64">
              <Spin size="large" />
              <p className="text-lg font-customDetail">
                Đang tải sản phẩm, quý khách vui lòng chờ trong giây lát
              </p>
            </div>
          ) : (
            <div className="flex-col gap-6">
              <div className="grid grid-cols-5 place-items-center gap-4">
                {fetchData &&
                  fetchData.length > 0 &&
                  fetchData.map((item: TProduct, index: any) => {
                    return <Item props={item} key={index} />;
                  })}
              </div>
            </div>
          )}
        </div>
      </div>

      <button>More</button>
    </main>
  );
}
