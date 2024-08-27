"use client";
import Item from "@/components/Item";
import SwiperAd from "@/components/SwiperAd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20 min-h-screen">
      <div className="flex pt-4 justify-center h-[630px] px-12">
        <SwiperAd />
      </div>
      <div className="px-32 py-10 grid grid-cols-3 gap-6">
        <div className="flex items-center">
          <p className="text-4xl font-bold font-customTitle">Products</p>
        </div>
        <div className="border-2 rounded-lg p-4">
          <p className=" font-customDetail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut
            vel beatae libero aliquam iusto enim obcaecati blanditiis, officia
            porro id voluptas perspiciatis labore minus optio neque voluptate
            eos eligendi.
          </p>
        </div>
        <div className="border-2 rounded-lg p-4">
          <p className=" font-customCardTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut
            vel beatae libero aliquam iusto enim obcaecati blanditiis, officia
            porro id voluptas perspiciatis labore minus optio neque voluptate
            eos eligendi.
          </p>
        </div>
        <div className="border-2 rounded-lg p-4">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut
            vel beatae libero aliquam iusto enim obcaecati blanditiis, officia
            porro id voluptas perspiciatis labore minus optio neque voluptate
            eos eligendi.
          </p>
        </div>
        <div className="border-2 rounded-lg p-4">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut
            vel beatae libero aliquam iusto enim obcaecati blanditiis, officia
            porro id voluptas perspiciatis labore minus optio neque voluptate
            eos eligendi.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/pages/products">
            <button className="bg-black text-white text-xl font-semibold px-12 py-4 rounded-lg hover:bg-sky-600">
              More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-sky-600 px-32 py-10 flex flex-col">
        <div className="text-white text-3xl font-bold font-customTitle">
          News
        </div>
      </div>

      <div className="px-32 py-10">
        <div className="text-3xl font-bold font-customTitle">
          Services and Support
        </div>
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="col-span-2 border-2 rounded-lg p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              consequatur autem, sapiente recusandae tempora at libero maiores
              dolorem explicabo reprehenderit deserunt nostrum alias, qui,
              voluptas eveniet dignissimos. Unde, vitae quidem!
            </p>
          </div>
          <div className="border-2 rounded-lg p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              consequatur autem, sapiente recusandae tempora at libero maiores
              dolorem explicabo reprehenderit deserunt nostrum alias, qui,
              voluptas eveniet dignissimos. Unde, vitae quidem!
            </p>
          </div>
          <div className="border-2 rounded-lg p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              consequatur autem, sapiente recusandae tempora at libero maiores
              dolorem explicabo reprehenderit deserunt nostrum alias, qui,
              voluptas eveniet dignissimos. Unde, vitae quidem!
            </p>
          </div>
          <div className="col-span-2 border-2 rounded-lg p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              consequatur autem, sapiente recusandae tempora at libero maiores
              dolorem explicabo reprehenderit deserunt nostrum alias, qui,
              voluptas eveniet dignissimos. Unde, vitae quidem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
