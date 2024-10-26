import Item from "@/components/Item";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { Fragment } from "react";
import Filter from "./components/Filter";

const Products = () => {
  return (
    <div className="pt-12 pb-6 my-10 mx-10">
      <div className="flex gap-4">
        <div className="basis-1/5">
          <Filter />
        </div>
        <div className="basis-4/5 flex flex-col gap-6">
          <div className="grid grid-cols-5 place-items-center gap-4">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
      <button>More</button>
    </div>
  );
};

export default Products;
