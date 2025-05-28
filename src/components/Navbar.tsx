"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import rightArrow from "@/asset/right-arrow.png";
import { NavbarLayer } from "@/asset/NavbarLayer";
import Cookies from "js-cookie";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { signOut, getAuth } from "firebase/auth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isShowBar, setIsShowBar] = useState(false);
  const data = NavbarLayer;
  const [cookie, setCookie] = useState("");
  useEffect(() => {
    const handleCookieUpdate = () => {
      setCookie(Cookies.get("__session") ?? "");
    };
    window.addEventListener("session-updated", handleCookieUpdate);
    handleCookieUpdate(); // on mount

    return () => {
      window.removeEventListener("session-updated", handleCookieUpdate);
    };
  }, []);
  return (
    <div className="flex top-0 justify-center">
      <div className="flex phone:flex-col md:flex-row phone:px-6 md:justify-around w-full fixed py-1 bg-white z-10 border-b">
        <div className="flex flex-row phone:justify-between w-full items-center">
          <Link
            href="/"
            className="flex flex-row text-2xl font-customTitle items-center justify-center gap-2"
          >
            Can Thai Toan
          </Link>
          <nav className="phone:hidden md:flex flex-row justify-center lg:gap-20 md:gap-6">
            <button>
              <Link
                href="/"
                className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
              >
                Trang chủ
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
                className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
              >
                <span aria-expanded={open}>Sản phẩm</span>
                {open && (
                  <ul className="origin-top absolute top-full left-1/2 -translate-x-1/2 min-w-[284px] bg-white border p-2 border-slate-200 rounded-lg shadow-xl transition-all duration-200 ease-out transform opacity-100 translate-y-2.5">
                    {data.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className={`${item.children ? "relative group" : ""}`}
                        >
                          <Link
                            className="text-slate-800 hover:bg-slate-50 flex items-center justify-between rounded text-md p-2"
                            href={{
                              pathname: "/pages/products",
                              query: { type: item.value },
                            }}
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
                          </Link>
                          {item.children && (
                            <div className="origin-top-left hidden group-hover:block ease-in-out absolute -top-2 translate-x-[16.5rem] px-3">
                              <ul className="bg-white border border-slate-200 p-2 rounded-lg shadow-xl transition duration-150">
                                {item.children.map((child, index) => {
                                  return (
                                    <li key={index}>
                                      <Link
                                        className="text-slate-800 hover:bg-slate-50 flex rounded text-md p-2"
                                        href={{
                                          pathname: "/pages/products",
                                          query: {
                                            type: item.value,
                                            subtype: child.value,
                                          },
                                        }}
                                      >
                                        <span className="whitespace-nowrap text-md">
                                          {child.label}
                                        </span>
                                      </Link>
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
                href="/pages/service"
                className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
              >
                Dịch vụ
              </Link>
            </button>
            <button>
              <Link
                href="/pages/about"
                className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
              >
                Liên hệ
              </Link>
            </button>
            {cookie.length > 0 && (
              <button>
                <Link
                  href="/pages/newproduct"
                  className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                >
                  Thêm sản phẩm
                </Link>
              </button>
            )}
          </nav>
          {cookie.length > 0 ? (
            <button
              className="phone:hidden md:flex"
              onClick={() => {
                Cookies.remove("__session");
                setCookie("");
                window.dispatchEvent(new Event("session-updated"));
                const auth = getAuth();
                signOut(auth)
                  .then(() => {
                    console.log("User signed out.");
                  })
                  .catch((error) => {
                    console.error("Sign out error:", error);
                  });
              }}
            >
              <Link
                href="/pages/auth"
                className="font-customDetail font-semibold text-xl "
              >
                Log out
              </Link>
            </button>
          ) : (
            <button className="phone:hidden md:flex">
              <Link
                href="/pages/auth"
                className="font-customDetail font-semibold text-xl hover:text-sky-600"
              >
                Login
              </Link>
            </button>
          )}
          <button
            className="phone:h-16 md:hidden"
            onClick={() => setIsShowBar(!isShowBar)}
          >
            {isShowBar ? (
              <CloseOutlined style={{ fontSize: "32px" }} />
            ) : (
              <MenuOutlined style={{ fontSize: "32px" }} />
            )}
          </button>
        </div>
        {isShowBar && (
          <div className="flex justify-center border-t-sky-700 border-t py-3">
            <nav className="flex flex-col items-center gap-4">
              <button onClick={() => setIsShowBar(!isShowBar)}>
                <Link
                  href="/"
                  className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                >
                  Trang chủ
                </Link>
              </button>
              <button onClick={() => setIsShowBar(!isShowBar)}>
                <Link
                  href="/pages/products"
                  className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                >
                  Sản phẩm
                </Link>
              </button>
              <button onClick={() => setIsShowBar(!isShowBar)}>
                <Link
                  href="/pages/service"
                  className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                >
                  Dịch vụ
                </Link>
              </button>
              <button onClick={() => setIsShowBar(!isShowBar)}>
                <Link
                  href="/pages/about"
                  className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                >
                  Liên hệ
                </Link>
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
