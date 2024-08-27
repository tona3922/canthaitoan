import Item from "@/components/Item";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div className="my-20 flex flex-col min-h-screen px-32 gap-6">
      <p>products page</p>
      <div className="grid grid-cols-4 place-items-center gap-6">
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
  );
};

export default Products;
