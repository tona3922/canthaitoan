import React, { useEffect } from "react";
import { Navbar } from "../navbar/navbar";
import "./about.scss";
export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="about">
        <div>Về chúng tôi</div>
        <p>
          Cân Điện Tử Thái Toàn trân trọng kính chào quý khách. Lời nói đầu tiên
          chúng tôi xin cảm ơn Quý Khách Hàng đã tin tưởng và sử dụng dịch vụ
          của chúng tôi, kính chúc Quý Khách Hàng thành công và phát đạt trong
          mọi lĩnh vực.
        </p>
        <p>
          Chuyên dòng cân phân tích phòng thí nghiệm đến cân sàn, cân xe tải
          công nghiệp. Nhanh chóng, đáng tin cậy. Đơn giản & Hiệu quả. Dễ dàng
          sử dụng. Sản phẩm chất lượng cao. Mua cân điện tử giao tận nơi và tham
          khảo thêm nhiều sản phẩm khác...
        </p>
      </div>
    </div>
  );
};
