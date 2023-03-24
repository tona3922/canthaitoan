import React from "react";
import "./footer.scss";
export const Footer = () => {
  return (
    <div className="footer">
      <h1>Thông tin liên hệ</h1>
      <div className="footer_info">
        <div className="leftfooter_info">
          <h2>CÔNG TY TNHH TM DV THÁI TOÀN</h2>
          <h3>VPĐD:183/14A Hoàng Hoa Thám, P.6, Q. Bình Thạnh, Tp HCM</h3>
          <h3>
            CN1: 108 Hùng Vương, Phường Long Hoa, Thành Phố Tây Ninh,Tỉnh Tây
            Ninh
          </h3>
          <h3>Điện thoại: 0283 5170 598 - 0908 699 986 - 0903 638 421 </h3>
          <h3>Email: nguyetthu@canthaitoan.com</h3>
        </div>
        {/* <div className="rightfooter_info">
          <div>
            <div>chinh sach ho tro</div>
            <h2>Đặt hàng</h2>
            <h2>Điều khoản và điều kiện</h2>
            <h2>Chính sách vận chuyển</h2>
          </div>
          <div>San pham</div>
          <div>Ve chung toi</div>
        </div> */}
      </div>
    </div>
  );
};
