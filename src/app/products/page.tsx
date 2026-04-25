"use client";
import Item from "@/components/Item";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import { TProduct } from "./product";
import { useSearchParams } from "next/navigation";
import { Empty, Pagination, Spin } from "antd";

const API_BASE = "https://canthaitoan-be.click/api";

export default function Page() {
  const [fetchData, setFetchData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const subtype = searchParams.get("subtype");
  const name = searchParams.get("name");
  const [page, setPage] = useState(1);
  const [showData, setShowData] = useState<any>([]);
  const setChange = (page: number, pageSize: number) => {
    setPage(page);
    setShowData(fetchData.slice((page - 1) * pageSize, page * pageSize));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const loadProducts = async () => {
      const params = new URLSearchParams();
      if (type) params.set("type", type);
      if (subtype) params.set("subtype", subtype);
      if (name) params.set("name", name);

      setIsLoading(true);
      try {
        const res = await fetch(
          `${API_BASE}/product/filter?${params.toString()}`,
        );
        const data = await res.json();
        const products: TProduct[] = data.foundProduct ?? [];
        setFetchData(products);
        setShowData(products.slice(0, 12));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [type, subtype, name]);
  return (
    <main className="pt-24 md:pt-32 pb-6 md:pb-10 mx-10">
      <div className="flex gap-4 phone:flex-col xl:flex-row">
        <div className="block md:hidden">
          <Filter setFetchData={setFetchData} setShowData={setShowData} />
        </div>
        <div className="w-full">
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
              <div>
                Kết quả tìm kiếm : <b>{fetchData.length}</b> sản phẩm
              </div>
              <div className="mt-4 phone:flex phone:flex-col phone:items-center md:grid md:grid-cols-2 md:place-items-center lg:grid-cols-3 xl:grid-cols-4 gap-12">
                {showData.map((item: TProduct, index: any) => {
                  return <Item props={item} key={index} />;
                })}
              </div>
              <div className="flex mt-4">
                <Pagination
                  defaultCurrent={page}
                  total={fetchData.length}
                  onChange={setChange}
                  pageSize={12}
                  showSizeChanger={false}
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
