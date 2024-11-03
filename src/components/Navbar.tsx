"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import rightArrow from "../asset/right-arrow.png";
import { NavbarLayer } from "@/asset/NavbarLayer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const data = NavbarLayer;
  return (
    <div className="flex z-10 justify-center">
      <div className="flex flex-row justify-center gap-20 w-full items-center fixed py-1 bg-white z-10 border-b">
        <Link
          href="/"
          className="flex flex-row text-xl font-customTitle items-center justify-center gap-2"
        >
          Thai toan
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>
        <button>
          <Link
            href="/"
            className="font-medium font-customCardTitle text-gray-600 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
          >
            Home
          </Link>
        </button>
        <button
          className="h-12"
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <Link
            href="/pages/products"
            className="font-medium font-customCardTitle text-gray-600 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
          >
            <span aria-expanded={open}>Products</span>
            {open && (
              <ul className="origin-top absolute top-full left-1/2 -translate-x-1/2 min-w-[284px] bg-white border p-2 border-slate-200 rounded-lg shadow-xl transition-all duration-200 ease-out transform opacity-100 translate-y-2.5">
                {data.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className={`${item.children ? "relative group" : ""}`}
                    >
                      <a
                        className="text-slate-800 hover:bg-slate-50 flex items-center justify-between rounded text-md p-2"
                        href="#"
                      >
                        <span className="whitespace-nowrap text-md">
                          {item.label}
                        </span>
                        {item.children && (
                          <Image
                            alt="right arrow"
                            src={rightArrow}
                            className="h-4 w-4"
                          />
                        )}
                      </a>
                      {item.children && (
                        <div className="origin-top-left hidden group-hover:block ease-in-out absolute -top-2 translate-x-[16.5rem] px-3">
                          <ul className="bg-white border border-slate-200 p-2 rounded-lg shadow-xl transition duration-150">
                            {item.children.map((child, index) => {
                              return (
                                <li key={index}>
                                  <a
                                    className="text-slate-800 hover:bg-slate-50 flex rounded text-md p-2"
                                    href="#"
                                  >
                                    <span className="whitespace-nowrap text-md">
                                      {child.label}
                                    </span>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </Link>
        </button>
        <button>
          <Link
            href="/pages/support"
            className="font-medium font-customCardTitle text-gray-600 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
          >
            Support
          </Link>
        </button>
        <button>
          <Link
            href="/pages/about"
            className="font-medium font-customCardTitle text-gray-600 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
          >
            About
          </Link>
        </button>
        <button>
          <Link
            href="/pages/newproduct"
            className="font-medium font-customCardTitle text-gray-600 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
          >
            New Product
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
