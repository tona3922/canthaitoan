"use client";
import Item from "@/components/Item";
import React, { Fragment, useState } from "react";
import Filter from "./components/Filter";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
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
            <Item id="1" />
            <Item id="2" />
            <Item id="3" />
            <Item id="4" />
            <Item id="5" />
            <Item id="6" />
            <Item id="7" />
            <Item id="8" />
            <Item id="9" />
            <Item id="10" />
            <Item id="11" />
            <Item id="12" />
          </div>
        </div>
      </div>
      <button>More</button>
    </div>
  );
};

export default Products;
