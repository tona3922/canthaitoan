import React, { Suspense, useEffect, useState } from "react";
import Item from "./Item";
import { Spin } from "antd";
import { TProduct } from "@/app/pages/products/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

const TopSelectItem: React.FC<{ type: string }> = ({ type }) => {
  const [fetchData, setFetchData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const paramsObj = { type: type ?? "" };
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
        setFetchData(data.foundProduct.slice(0, 5));
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        throw new Error(`Data failed: ${error.message}`);
      }
    };
    getAllProducts();
  }, []);
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
            <div className="phone:hidden lg:grid grid-cols-5 place-items-center gap-4">
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
