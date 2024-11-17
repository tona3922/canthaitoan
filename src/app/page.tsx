"use client";
import Item from "@/components/Item";
import SwiperAd from "@/components/SwiperAd";
import {
  CustomerServiceOutlined,
  DollarOutlined,
  FileProtectOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
// import delivery from '@/asset/delivery-van.png'
// import validProduct from '@/asset/validation.png'
// import supportService from '@/asset/24-hours-support.png'
// import price from '@/asset/cash.png'

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}`);
        if (response.ok) {
          // console.log("Data fetched");
        } else {
          throw new Error("Failed to load data");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mt-20 min-h-screen">
      <div className="flex pt-4 justify-center h-[630px] px-12">
        <SwiperAd />
      </div>
      <div className="px-32 py-10 grid grid-cols-3 gap-6">
        <div className="flex items-center">
          <p className="text-2xl font-bold font-customTitle">
            Vì sao nên chọn Cân Thái Toàn
          </p>
        </div>
        <div className="border-2 rounded-lg p-4 flex flex-row gap-4 items-center">
          <TruckOutlined style={{ fontSize: "36px", color: "GrayText" }} />
          <p className="text-lg font-customDetail">Giao hàng tận nơi</p>
        </div>
        <div className="border-2 rounded-lg p-4 flex flex-row gap-4 items-center">
          <CustomerServiceOutlined
            style={{ fontSize: "36px", color: "GrayText" }}
          />
          <p className="text-lg font-customDetail">Hỗ trợ online 24/7</p>
        </div>
        <div className="border-2 rounded-lg p-4 flex flex-row gap-4 items-center">
          <FileProtectOutlined
            style={{ fontSize: "36px", color: "GrayText" }}
          />
          <p className="text-lg font-customDetail">Hàng chính hãng</p>
        </div>
        <div className="border-2 rounded-lg p-4 flex flex-row gap-4 items-center">
          <DollarOutlined style={{ fontSize: "36px", color: "GrayText" }} />
          <p className="text-lg font-customDetail">Giá cạnh tranh</p>
        </div>
        <div className="rounded-lg p-4 flex justify-end items-center">
          <Link
            href="/pages/products"
            className="text-2xl font-semibold hover:underline"
          >
            Tìm kiếm sản phẩm tại đây
          </Link>
        </div>
      </div>
      <div className="bg-black border-t-2 border-b-2 px-32 py-10 flex flex-col gap-5">
        <div className="text-white text-3xl font-bold font-customTitle">
          News
        </div>
        <article className="bg-neutral-900 rounded-lg p-6 text-neutral-400 hover:text-white cursor-pointer flex flex-col gap-4">
          <h3 className="text-2xl font-customDetail font-semibold">Title</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            totam accusantium exercitationem quasi libero illum? Tempora
            repellendus vel odit mollitia sequi? Minus ad laborum cupiditate
            eum! Veritatis aspernatur maxime rem.
          </p>
        </article>
        <article className="bg-neutral-900 rounded-lg p-6 text-neutral-400 hover:text-white cursor-pointer flex flex-col gap-4">
          <h3 className="text-2xl font-customDetail font-semibold">Title</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            totam accusantium exercitationem quasi libero illum? Tempora
            repellendus vel odit mollitia sequi? Minus ad laborum cupiditate
            eum! Veritatis aspernatur maxime rem.
          </p>
        </article>
        <article className="bg-neutral-900 rounded-lg p-6 text-neutral-400 hover:text-white cursor-pointer flex flex-col gap-4">
          <h3 className="text-2xl font-customDetail font-semibold">Title</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            totam accusantium exercitationem quasi libero illum? Tempora
            repellendus vel odit mollitia sequi? Minus ad laborum cupiditate
            eum! Veritatis aspernatur maxime rem.
          </p>
        </article>
      </div>

      <div className="px-32 py-10">
        <div className="text-3xl font-bold font-customTitle">
          Services and Support
        </div>
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="col-span-2 border-2 rounded-lg p-4 flex flex-row gap-4 items-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              consequatur autem, sapiente recusandae tempora at libero maiores
              dolorem explicabo reprehenderit deserunt nostrum alias, qui,
              voluptas eveniet dignissimos. Unde, vitae quidem!
            </p>
          </div>
          <div className="border-2 rounded-lg p-4 flex flex-row gap-4 items-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              consequatur autem, sapiente recusandae tempora at libero maiores
              dolorem explicabo reprehenderit deserunt nostrum alias, qui,
              voluptas eveniet dignissimos. Unde, vitae quidem!
            </p>
          </div>
          <div className="border-2 rounded-lg p-4 flex flex-row gap-4 items-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              consequatur autem, sapiente recusandae tempora at libero maiores
              dolorem explicabo reprehenderit deserunt nostrum alias, qui,
              voluptas eveniet dignissimos. Unde, vitae quidem!
            </p>
          </div>
          <div className="col-span-2 border-2 rounded-lg p-4 flex flex-row gap-4 items-center">
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
