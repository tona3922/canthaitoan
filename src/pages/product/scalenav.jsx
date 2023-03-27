import React from "react";
import { NavLink } from "react-router-dom";
import "./scalenav.scss";

export const Scalenav = () => {
  let char = "/product/scale/";
  return (
    <nav>
      <div className="routes">
        <div className="title">Danh mục cân</div>
        <NavLink className="nav--route" to={"/product/allscale"}>
          Tất cả
        </NavLink>
        <NavLink
          className="nav--route"
          to={char + "cancongnghiep/cancongnghiep"}
        >
          Cân Công Nghiệp
        </NavLink>
        <NavLink className="nav--route" to={char + "cankythuat/cankythuat"}>
          Cân Kỹ Thuật
        </NavLink>
        <NavLink className="nav--route" to={char + "candodoam/candodoam"}>
          Can Đo Độ Ẩm
        </NavLink>
        <NavLink className="nav--route" to={char + "canphantich/canphantich"}>
          Can Phân Tích
        </NavLink>
        <NavLink className="nav--route" to={char + "cansieuthi/cansieuthi"}>
          Cân Siêu Thị
        </NavLink>
      </div>
    </nav>
  );
};
