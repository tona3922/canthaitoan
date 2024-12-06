"use client";
import Item from "@/components/Item";
import React, { useCallback, useEffect, useState } from "react";
import Filter from "./components/Filter";
import { TProduct } from "./product";
import { useSearchParams } from "next/navigation";
import { Empty, Pagination, Spin } from "antd";

export default function Page() {
  const [fetchData, setFetchData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const subtype = searchParams.get("subtype");
  const paramsObj = { type: type ?? "", subtype: subtype ?? "" };
  const [page, setPage] = useState(1);
  const [showData, setShowData] = useState([]);
  const setChange = (page: number, pageSize: number) => {
    setPage(page);
    setShowData(fetchData.slice((page - 1) * pageSize, page * pageSize));
  };
  useEffect(() => {
    const getAllProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_BACKEND
          }/product/filter?${new URLSearchParams(paramsObj).toString()}`
        );
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
        setShowData(data.foundProduct.slice(0, 15));
      } catch (error: any) {
        setIsLoading(false);
        throw new Error(`Data failed: ${error.message}`);
      }
    };
    getAllProducts();
  }, [type, subtype]);
  return (
    <main className="mt-20 pb-6 my-10 mx-10">
      <div className="flex gap-4">
        <div className="basis-1/5 min-h-screen">
          <div className="sticky top-20">
            <Filter setFetchData={setFetchData} setShowData={setShowData} />
          </div>
        </div>
        <div className="basis-4/5">
          {isLoading ? (
            <div className="flex">
              <div className="flex flex-row gap-2 items-center mx-auto mt-40">
                <Spin size="large" />
                <p className="text-lg font-customDetail">
                  Đang tải sản phẩm, quý khách vui lòng chờ trong giây lát
                </p>
              </div>
            </div>
          ) : showData.length ? (
            <>
              <div className="grid grid-cols-5 place-items-center gap-4">
                {showData.map((item: TProduct, index: any) => {
                  return <Item props={item} key={index} />;
                })}
              </div>
              <div className="flex mt-4">
                <Pagination
                  defaultCurrent={page}
                  total={fetchData.length}
                  onChange={setChange}
                  pageSize={15}
                  className="mx-auto"
                />
              </div>
            </>
          ) : (
            <div className="mt-20">
              <Empty />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
