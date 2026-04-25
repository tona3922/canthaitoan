"use client";

import BrandName from "@/components/BrandName";
import WhyChooseUs from "@/components/WhyChooseUs";
import { sampleImages } from "@/asset/sample";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

const SwiperAd = dynamic(() => import("@/components/SwiperAd"), { ssr: false });
const TopSelectItem = dynamic(() => import("@/components/TopSelectItem"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="py-10 md:py-20 min-h-screen">
      <div className="flex justify-center pt-16 pb-12 bg-gradient-to-br from-sky-700 to-sky-600">
        <div className="text-white text-sm sm:text-lg px-6 md:w-3/4 lg:w-1/2">
          <p>
            <b>Công ty TNHH Sản xuất TMDV Thái Toàn</b> được thành lập năm 2003.
          </p>
          <p>
            Chúng tôi tự hào là một trong những đơn vị hàng đầu trong lĩnh vực
            Cân Điện Tử, chuyên phân phối và bán lẻ các dòng sản phẩm Cân Điện
            Tử của các thương hiệu hàng đầu thế giới.
          </p>
        </div>
      </div>
      <div className="phone:px-6 lg:px-32 py-10 flex flex-col gap-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {sampleImages.map((img, index) => {
            const aboveFold = index < 2;
            return (
              <article
                key={index}
                className="relative h-52 border-none cursor-pointer hover:border-sky-700 hover:scale-105 transition-all hover:duration-200 ease-in overflow-hidden rounded-sm"
              >
                <Image
                  src={img}
                  alt={`sample-${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain"
                  placeholder="blur"
                  priority={aboveFold}
                  loading={aboveFold ? "eager" : "lazy"}
                />
              </article>
            );
          })}
        </div>
      </div>
      <hr className="h-0.5 mx-auto w-1/3 my-6 bg-neutral-400 rounded-full" />
      <div className="lg:grid lg:grid-cols-2 lg:px-32 lg:gap-10 py-8 phone:flex phone:flex-col phone:gap-4 phone:px-6">
        <div className="flex pt-4 justify-center px-4">
          <Suspense
            fallback={
              <div className="h-[300px] w-full animate-pulse bg-gray-100 rounded-lg" />
            }
          >
            <SwiperAd />
          </Suspense>
        </div>
        <article className="flex flex-col gap-6 my-auto p-4 rounded-xl bg-gradient-to-br from-sky-900 to-sky-600 text-white">
          <p className="text-lg">
            Phương châm của chúng tôi :{" "}
            <b>Uy Tín - Chuyên nghiệp - Trách nhiệm</b>
          </p>
          <p className="text-lg">
            Trong quá trình phát triển, Cân Điện Tử Thái Toàn đã xây dựng cho
            mình nền tảng vững chắc, cam kết cung cấp các giải pháp kỹ thuật
            hoàn chỉnh với những thiết bị chất lượng và được khách hàng tin
            tưởng đánh giá cao.
          </p>
        </article>
      </div>
      <h2 className="text-center text-3xl text-sky-700 font-bold">
        Các thương hiệu cân có mặt tại cửa hàng
      </h2>
      <BrandName />
      <WhyChooseUs />
      <div className="phone:px-6 lg:px-32 phone:py-4 py-10 flex flex-col gap-5">
        <div className="text-3xl text-sky-600 font-bold font-customTitle">
          Cân phòng thí nghiệm
        </div>
        <article className="w-full">
          <Suspense>
            <TopSelectItem type="can phong thi nghiem" />
          </Suspense>
        </article>
      </div>
      <hr className="h-0.5 mx-auto w-1/3 my-8 bg-neutral-400 rounded-full" />
      <div className="phone:px-6 lg:px-32 phone:py-4 py-10 flex flex-col gap-5">
        <div className="text-3xl text-sky-600 font-bold font-customTitle">
          Cân kỹ thuật
        </div>
        <article className="w-full">
          <Suspense>
            <TopSelectItem type="can ky thuat" />
          </Suspense>
        </article>
      </div>
      <hr className="h-0.5 mx-auto w-1/3 my-8 bg-neutral-400 rounded-full" />
      <div className="phone:px-6 lg:px-32 phone:py-4 py-10 flex flex-col gap-5">
        <div className="text-3xl text-sky-600 font-bold font-customTitle">
          Cân bàn & cân sàn
        </div>
        <article className="w-full">
          <Suspense>
            <TopSelectItem type="can ban va can san" />
          </Suspense>
        </article>
      </div>
    </div>
  );
}
