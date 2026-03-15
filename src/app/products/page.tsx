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
  const [page, setPage] = useState(1);
  const [showData, setShowData] = useState<any>([]);
  const setChange = (page: number, pageSize: number) => {
    setPage(page);
    setShowData(fetchData.slice((page - 1) * pageSize, page * pageSize));
  };
  useEffect(() => {
    const loadProducts = async () => {
      const params = new URLSearchParams();
      if (type) params.set("type", type);
      if (subtype) params.set("subtype", subtype);

      setIsLoading(true);
      try {
        const res = await fetch(`${API_BASE}/product?${params.toString()}`);
        const data = await res.json();
        const products: TProduct[] = data.allProducts ?? [];
        setFetchData(products);
        setShowData(products.slice(0, 12));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [type, subtype]);
  return (
    <main className="pt-20 pb-6 py-10 mx-10">
      <div className="flex gap-4 phone:flex-col xl:flex-row">
        <div className="xl:basis-1/5 xl:min-h-screen">
          <div className="sticky top-20">
            <Filter setFetchData={setFetchData} setShowData={setShowData} />
          </div>
        </div>
        <div className="xl:basis-4/5">
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
              <div className="phone:flex phone:flex-col phone:items-center md:grid md:grid-cols-2 md:place-items-center lg:grid-cols-3 xl:grid-cols-4 xl:place-items-start gap-4">
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
