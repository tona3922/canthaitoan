import React, { useEffect } from "react";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { Top8 } from "../product/top8";
import { Top8cst } from "../product/scale/cansieuthi/top8cst";
import { Top8ccn } from "../product/scale/cancongnghiep/top8ccn";
import { Top8ckt } from "../product/scale/cankythuat/top8ckt";
import { Top8cpt } from "../product/scale/canphantich/top8cpt";
import { Top8cdda } from "../product/scale/candodoam/top8cdda";
import "./home.scss";
import trial from "../../img/logo.jpg";
import advertising1 from "../../img/advertising1.jpg";
import advertising2 from "../../img/1.jpg";
import advertising3 from "../../img/advertising3.png";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Navbar />
      <div className="intro">
        <div className="introleft">
          <h2>CÔNG TY TNHH TM DV THÁI TOÀN</h2>
          <p>
            Cân Điện Tử Thái Toàn trân trọng kính chào quý khách. Lời nói đầu
            tiên chúng tôi xin cảm ơn Quý Khách Hàng đã tin tưởng và sử dụng
            dịch vụ của chúng tôi, kính chúc Quý Khách Hàng thành công và phát
            đạt trong mọi lĩnh vực.
          </p>
          <p>
            Chuyên dòng cân phân tích phòng thí nghiệm đến cân sàn, cân xe tải
            công nghiệp. Nhanh chóng, đáng tin cậy. Đơn giản & Hiệu quả. Dễ dàng
            sử dụng. Sản phẩm chất lượng cao. Mua cân điện tử giao tận nơi và
            tham khảo thêm nhiều sản phẩm khác...
          </p>
          <em>
            Chuyên cung cấp Cân Điện Tử chính hãng, chất lượng cao Luôn tận tâm
            vì khách hàng với khẩu hiệu Chất lượng tạo niềm tin Đội ngũ nhân
            viên xuất sắc và giàu kinh nghiệm
          </em>
        </div>
        <div className="introright">
          <a href="https://zalo.me/0908699986">
            <img src={trial} alt="" />
          </a>
        </div>
      </div>
      <div className="advertise">
        <img src={advertising1} alt="" />
      </div>
      <div className="title">Tất cả các loại cân</div>
      <hr />
      <Top8 />
      <div className="title">Cân siêu thị</div>
      <hr />
      <Top8cst />
      <div className="title">Cân kỹ thuật</div>
      <hr />
      <Top8ckt />
      <div className="title">Cân công nghiệp</div>
      <hr />
      <Top8ccn />
      <div className="advertise">
        <img src={advertising3} alt="" />
      </div>
      <div className="title">Cân phân tích</div>
      <hr />
      <Top8cpt />
      <div className="title">Cân đo độ ẩm</div>
      <hr />
      <Top8cdda />
      <div className="title">Thiết bị cân</div>
      <hr />
      <Top8 />
      <div className="advertise">
        <img src={advertising2} alt="" />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};
