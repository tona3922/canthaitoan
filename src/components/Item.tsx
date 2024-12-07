"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TProduct } from "@/app/pages/products/product";

const Item: React.FC<{ props: TProduct }> = ({ props }) => {
  return (
    <Link href={`/pages/detail/${props._id}`}>
      <article className="border-gray-300 border flex flex-col gap-2 cursor-pointer hover:border-sky-700 w-52 h-80 hover:scale-105 transition-all hover:duration-200 ease-in">
        <Image
          src={props.image}
          alt="item"
          className="w-full h-56"
          width={200}
          height={100}
        />
        <h2 className="font-semibold font-customCardTitle px-2 text-lg">
          {props.name}
        </h2>
        <p className="text-sm px-2 pb-2">{props.description}</p>
      </article>
    </Link>
  );
};

export default Item;
