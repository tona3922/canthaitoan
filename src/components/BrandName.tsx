import React from "react";
import StaticImg from "./StaticImg";
import { staticImages } from "@/asset/staticImages";

const BRANDS = [
  "brand/cas",
  "brand/excell",
  "brand/Mettler_Toledo",
  "brand/ohaus",
  "brand/vibra",
] as const;

const BrandName = () => {
  return (
    <div className="my-10 inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {Array.from({ length: 10 }).map((_, idx) => {
          return (
            <li key={idx}>
              <StaticImg
                image={staticImages[BRANDS[idx % 5]]}
                alt="brand"
                sizes="120px"
                className="h-[120px] w-auto object-contain"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrandName;
