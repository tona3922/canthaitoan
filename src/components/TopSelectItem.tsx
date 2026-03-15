import React, { Suspense, useEffect, useState } from "react";
import Item from "./Item";
import { Spin } from "antd";
import { TProduct } from "@/app/products/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
const API_BASE = "https://canthaitoan-be.click/api";

const TopSelectItem: React.FC<{ type: string }> = ({ type }) => {
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
        setFetchData((data.foundProduct ?? data).slice(0, 5));
      } catch (error: any) {
        throw new Error(`Data failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, [type]);
  return (
    <Suspense fallback={<>Loading</>}>
      {isLoading ? (
        <div className="flex">
          <div className="flex flex-row gap-2 items-center mx-auto mt-40">
            <Spin size="large" />
            <p className="text-lg font-customDetail">
              Đang tải sản phẩm, quý khách vui lòng chờ trong giây lát
            </p>
          </div>
        </div>
      ) : (
        fetchData.length > 0 && (
          <>
            <div className="phone:hidden lg:grid lg:grid-cols-3 xl:grid-cols-5 place-items-center gap-4">
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
