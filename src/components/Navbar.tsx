"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import rightArrow from "@/asset/right-arrow.png";
import { NavbarLayer } from "@/asset/NavbarLayer";
import Cookies from "js-cookie";
import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import logo from "@/asset/logo.jpg";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isShowBar, setIsShowBar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const data = NavbarLayer;
  const [cookie, setCookie] = useState("");

  const handleSearch = () => {
    if (searchInput.trim()) {
      router.push(`/products?name=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const handleClear = () => {
    setSearchInput("");
    router.push("/products");
  };
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
      <div className="flex phone:flex-col md:flex-row phone:px-6 md:justify-around w-full fixed py-2 bg-white z-10 border-b">
        <div className="flex flex-row phone:justify-between w-full items-center">
          <Link
            href="/"
            className="flex flex-row text-2xl font-bold font-customTitle items-center justify-center gap-2 text-sky-600"
          >
            <Image src={logo} alt="" width={32} height={32} />
            <span>Cân Thái Toàn</span>
          </Link>
          <div className="flex flex-col">
            <div className="phone:hidden md:flex rounded-lg border overflow-hidden">
              <input
                className="flex-1 h-10 outline-none px-2 min-w-0"
                placeholder="Nhập từ khoá sản phẩm..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              {searchInput && (
                <button
                  className="flex-shrink-0 h-10 px-2 text-gray-400 hover:text-gray-600"
                  onClick={handleClear}
                >
                  <CloseOutlined />
                </button>
              )}
              <button
                className="flex-shrink-0 text-white bg-sky-600 h-10 px-3 flex items-center gap-1"
                onClick={handleSearch}
              >
                <SearchOutlined />
                <span className="phone:hidden md:inline">Tìm kiếm</span>
              </button>
            </div>
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
                  href="/products"
                  className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                >
                  <span>Sản phẩm</span>
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
                                pathname: "/products",
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
                                            pathname: "/products",
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
                  href="/service"
                  className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                >
                  Dịch vụ
                </Link>
              </button>
              <button>
                <Link
                  href="/about"
                  className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                >
                  Liên hệ
                </Link>
              </button>
              {cookie.length > 0 && (
                <button>
                  <Link
                    href="/newproduct"
                    className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                  >
                    Thêm sản phẩm
                  </Link>
                </button>
              )}
            </nav>
          </div>
          {cookie.length > 0 ? (
            <button
              className="phone:hidden md:flex"
              onClick={() => {
                Cookies.remove("__session");
                setCookie("");
                window.dispatchEvent(new Event("session-updated"));
              }}
            >
              <Link
                href="/auth"
                className="font-customDetail font-semibold text-xl "
              >
                Log out
              </Link>
            </button>
          ) : (
            <button className="phone:hidden md:flex">
              <Link
                href="/auth"
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
                  href="/products"
                  className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                >
                  Sản phẩm
                </Link>
              </button>
              <button onClick={() => setIsShowBar(!isShowBar)}>
                <Link
                  href="/service"
                  className="font-customDetail font-semibold text-neutral-500 text-xl hover:text-sky-600 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
                >
                  Dịch vụ
                </Link>
              </button>
              <button onClick={() => setIsShowBar(!isShowBar)}>
                <Link
                  href="/about"
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
