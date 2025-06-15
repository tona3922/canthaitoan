import React from "react";
import Image from "next/image";
import { Cas, Excell, Metler, Ohaus, Vibra } from "@/asset/brand";

const BrandName = () => {
  const array = [Cas, Excell, Metler, Ohaus, Vibra];
  return (
    <div className="mt-10 inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {Array.from({ length: 20 }).map((_, idx) => {
          return (
            <li key={idx}>
              <Image src={array[idx % 5]} alt="next" width={200} height={200} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrandName;
