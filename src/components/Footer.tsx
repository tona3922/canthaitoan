import { NavbarLayer } from "@/asset/NavbarLayer";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const data = NavbarLayer;
  const service = [
    "Phân Phối Nhập Khẩu Và Bán Lẻ",
    "Bảo Trì",
    "Vận Chuyển Lắp Đặt",
    "Hiệu Chuẩn - Kiểm Định",
  ];
  return (
    <div className="py-6 lg:px-32 phone:px-4 border-t-2 border-sky-700">
      <div className="flex lg:flex-row lg:gap-20 phone:flex-col phone:gap-4">
        <div className="flex-[2_2_0%] flex flex-col gap-2.5">
          <div className="font-customTitle text-sky-700 font-bold text-3xl mb-4">
            Cân Điện tử Thái Toàn
          </div>
          <p>
            <span className="font-semibold">Địa chỉ : </span>{" "}
            <a href="https://maps.app.goo.gl/EukQZtq8d9RXXFen8" target="_blank">
              183/14A Hoàng Hoa Thám, Phường 6, Quận Bình Thạnh, TP Hồ Chí Minh
            </a>
          </p>
          <p>
            <span className="font-semibold">Địa chỉ 2 : </span>
            <a href="https://maps.app.goo.gl/w3SeThkZz96vud5L7" target="_blank">
              108 Hùng Vương, TT. Hoà Thành, Hoà Thành, Tây Ninh, Vietnam
            </a>
          </p>
          <div className="flex items-center gap-1">
            <span className="font-semibold">Điện thoại : </span>
            <a className="text-sky-600" href="tel:0908699996">
              0908699986
            </a>
            -
            <a className="text-sky-600" href="tel:0903638421">
              0903638421
            </a>
            -
            <a className="text-sky-600" href="tel:0903638421">
              02835170598
            </a>
          </div>
          <p>
            <span className="font-semibold">Email : </span>
            <a href="mailto:nguyetthu@canthaitoan.com">
              nguyetthu@canthaitoan.com
            </a>
          </p>
        </div>
        <div className="flex-[2_2_0%]">
          <div className="text-2xl text-sky-700 font-customCardTitle font-bold mb-4">
            Sản phẩm nổi bật
          </div>
          <div className="grid grid-cols-2 gap-1">
            {data.map((item, idx) => {
              return (
                <Link
                  className="py-2"
                  href={{
                    pathname: "/products",
                    query: { type: item.value },
                  }}
                  key={idx}
                >
                  <span className="hover:underline font-medium text-neutral-800 whitespace-now text-md">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-2xl text-sky-700 font-customCardTitle font-bold mb-4">
            Hỗ trợ kỹ thuật
          </div>
          <div className="flex flex-col gap-1">
            {service.map((item, idx) => {
              return (
                <Link
                  className="py-2"
                  href={{
                    pathname: `/service`,
                  }}
                  key={idx}
                >
                  <span className="hover:underline font-medium text-neutral-800 whitespace-now text-md">
                    {item}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
