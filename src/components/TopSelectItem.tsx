"use client";
import React, { Suspense, useEffect, useState } from "react";
import Item from "./Item";
import { TProduct } from "@/app/products/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
const API_BASE = "https://canthaitoan-be.click/api";

const TopSelectItem: React.FC<{ type: string; excludeId?: string }> = ({
  type,
  excludeId,
}) => {
  const [fetchData, setFetchData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const getAllProducts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${API_BASE}/product/filter?type=${encodeURIComponent(type)}`,
        );
        const data = await res.json();
        const products: TProduct[] = data.foundProduct ?? data;
        const filtered = excludeId
          ? products.filter((p: TProduct) => p._id !== excludeId)
          : products;
        setFetchData(filtered.slice(0, 10));
      } catch (error: any) {
        throw new Error(`Data failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, [type, excludeId]);
  return (
    <Suspense fallback={<>Loading</>}>
      {isLoading ? (
        <div className="flex">
          <div className="flex flex-row gap-2 items-center mx-auto mt-40">
            <div className="w-8 h-8 border-4 border-sky-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-lg font-customDetail">
              Đang tải sản phẩm, quý khách vui lòng chờ trong giây lát
            </p>
          </div>
        </div>
      ) : (
        fetchData.length > 0 && (
          <>
            <div className="phone:hidden lg:grid lg:grid-cols-3 xl:grid-cols-5 place-items-center gap-12">
              {fetchData.map((item: TProduct, index: any) => {
                return <Item props={item} key={index} />;
              })}
            </div>
            <div className="lg:hidden">
              <Swiper
                // navigation
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                scrollbar={{ draggable: true }}
                modules={[Pagination, Scrollbar]}
              >
                {fetchData.map((item: TProduct, index: any) => {
                  return (
                    <SwiperSlide key={index} style={{ paddingBottom: "36px" }}>
                      <div className="flex justify-center">
                        <Item props={item} key={index} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </>
        )
      )}
    </Suspense>
  );
};

export default TopSelectItem;
