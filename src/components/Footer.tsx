import { NavbarLayer } from "@/asset/NavbarLayer";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const data = NavbarLayer;
  return (
    <div className="border-t-2 px-32 py-6">
      <div className="font-customTitle font-bold text-3xl mb-6">
        Can Thai Toan
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="text-xl text-neutral-400 font-customCardTitle font-bold mb-4">
            Products
          </div>
          <div className="flex flex-row">
            <div className="flex-1 grid grid-cols-2 gap-2">
              {data.map((item, idx) => {
                return (
                  <Link
                    className="py-2"
                    href={{
                      pathname: "/pages/products",
                      query: { type: item.value },
                    }}
                    key={idx}
                  >
                    <span className="hover:underline text-gray-800 whitespace-now text-md">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-between">
          <div className="text-xl text-neutral-400 font-customCardTitle font-bold mb-4">
            Services & Support
          </div>
          <div className="text-xl text-neutral-400 font-customCardTitle font-bold mb-4">
            About us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
