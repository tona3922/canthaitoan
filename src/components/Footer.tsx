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
    <div className="py-4 bg-gradient-to-b from-sky-700 to-sky-900 px-32">
      <div className="font-customTitle text-white  font-bold text-3xl mb-4">
        Can Thai Toan
      </div>
      <div className="flex flex-row gap-20">
        <div className="flex-[2_2_0%]">
          <div className="text-xl text-neutral-400 font-customCardTitle font-bold mb-4">
            Giới thiệu
          </div>
          <p className="text-white text-lg">
            <b>Công ty TNHH Sản xuất TMDV Thái Toàn</b> được thành lập năm 2003.
            Chúng tôi tự hào là một trong những đơn vị hàng đầu trong lĩnh vực
            Cân Điện Tử, chuyên phân phối và bán lẻ các dòng sản phẩm Cân Điện
            Tử của các thương hiệu hàng đầu thế giới.
          </p>
        </div>
        <div className="flex-[2_2_0%]">
          <div className="text-xl text-neutral-400 font-customCardTitle font-bold mb-4">
            Sản phẩm nổi bật
          </div>
          <div className="grid grid-cols-2 gap-3">
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
                  <span className="hover:underline font-medium text-neutral-200 whitespace-now text-md">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xl text-neutral-400 font-customCardTitle font-bold mb-4">
            Hỗ trợ kỹ thuật
          </div>
          <div className="flex flex-col gap-3">
            {service.map((item, idx) => {
              return (
                <Link
                  className="py-2"
                  href={{
                    pathname: `/pages/service`,
                  }}
                  key={idx}
                >
                  <span className="hover:underline font-medium text-neutral-200 whitespace-now text-md">
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
