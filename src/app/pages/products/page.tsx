"use client";
import Item from "@/components/Item";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import { TProduct } from "./product";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [fetchData, setFetchData] = useState<any>([]);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const subtype = searchParams.get("subtype");
  console.log("type: ", type);
  console.log("subtype: ", subtype);
  const paramsObj = { type: type ?? "", subtype: subtype ?? "" };
  const newSearchParams = new URLSearchParams(paramsObj);
  console.log(newSearchParams.toString());

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND}/product`
        );
        // const response = await fetch("http://localhost:3001/product/");

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Request failed with status ${response.status}: ${errorText}`
          );
        }
        const data = await response.json();
        setFetchData(data.allProducts);
      } catch (error: any) {
        throw new Error(`Data failed: ${error.message}`);
      }
    };
    getAllProducts();
  }, []);
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="pt-12 pb-6 my-10 mx-10">
      <div className="flex gap-4">
        <div className="basis-1/5 min-h-screen">
          <div className="sticky top-16">
            <Filter />
          </div>
        </div>
        <div className="basis-4/5 flex flex-col gap-6">
          <div className="grid grid-cols-5 place-items-center gap-4">
            {fetchData.length > 0 &&
              fetchData.map((item: TProduct, index: any) => {
                return <Item props={item} key={index} />;
              })}
          </div>
        </div>
      </div>

      <button>More</button>
    </div>
  );
}
