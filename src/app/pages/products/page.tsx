import Item from "@/components/Item";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { Fragment } from "react";
import Filter from "./components/Filter";

const Products = () => {
  return (
    <div className="py-12 my-10 mx-4 flex gap-4">
      <div className="basis-1/5">
        <Filter />
      </div>
      <div className="basis-4/5 flex flex-col gap-6">
        <div className="grid grid-cols-4 place-items-center gap-6">
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
  );
};

export default Products;
