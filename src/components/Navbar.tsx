"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="flex flex-row justify-around w-5/6 items-center fixed py-4 bg-white">
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-2"
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
            className="font-bold text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
          >
            Home
          </Link>
        </button>
        <button
          className="h-10"
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <Link
            href="/pages/products"
            className="font-bold text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
          >
            <span aria-expanded={open}>Products</span>
            {open && (
              <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl transition-all duration-200 ease-out transform opacity-100 translate-y-2.5">
                <li>
                  <a
                    className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                    href="#"
                  >
                    <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                      <svg
                        className="fill-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="12"
                      >
                        <path d="M8.724.053A.5.5 0 0 0 8.2.1L4.333 3H1.5A1.5 1.5 0 0 0 0 4.5v3A1.5 1.5 0 0 0 1.5 9h2.833L8.2 11.9a.5.5 0 0 0 .8-.4V.5a.5.5 0 0 0-.276-.447Z" />
                      </svg>
                    </div>
                    <span className="whitespace-nowrap">Priority Ratings</span>
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                    href="#"
                  >
                    <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                      <svg
                        className="fill-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="12"
                      >
                        <path d="M8.724.053A.5.5 0 0 0 8.2.1L4.333 3H1.5A1.5 1.5 0 0 0 0 4.5v3A1.5 1.5 0 0 0 1.5 9h2.833L8.2 11.9a.5.5 0 0 0 .8-.4V.5a.5.5 0 0 0-.276-.447Z" />
                      </svg>
                    </div>
                    <span className="whitespace-nowrap">Priority Ratings</span>
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                    href="#"
                  >
                    <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                      <svg
                        className="fill-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="12"
                      >
                        <path d="M8.724.053A.5.5 0 0 0 8.2.1L4.333 3H1.5A1.5 1.5 0 0 0 0 4.5v3A1.5 1.5 0 0 0 1.5 9h2.833L8.2 11.9a.5.5 0 0 0 .8-.4V.5a.5.5 0 0 0-.276-.447Z" />
                      </svg>
                    </div>
                    <span className="whitespace-nowrap">Priority Ratings</span>
                  </a>
                </li>
              </ul>
            )}
          </Link>
        </button>
        <button>
          <Link
            href="/pages/support"
            className="font-bold text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
          >
            Support
          </Link>
        </button>
        <button>
          <Link
            href="/pages/about"
            className="font-bold text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
          >
            About
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
