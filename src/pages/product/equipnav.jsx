import React from "react";
import { NavLink } from "react-router-dom";
import "./scalenav.scss";

// export const Scalenav = () => {
//   let char = "/product/scale/";
//   return (
//     <nav>
//       <div className="routes">
//         <div className="title">Danh muc san pham</div>
//         <NavLink className="nav--route" to={char}>
//           Tat ca
//         </NavLink>
//         <NavLink
//           className="nav--route"
//           to={char + "cancongnghiep/cancongnghiep"}
//         >
//           Can Cong Nghiep
//         </NavLink>
//         <NavLink className="nav--route" to={char + "cankythuat/cankythuat"}>
//           Can Ky Thuat
//         </NavLink>
//         <NavLink className="nav--route" to={char + "candodoam/candodoam"}>
//           Can Do do am
//         </NavLink>
//         <NavLink className="nav--route" to={char + "canphantich/canphantich"}>
//           Can Phan Tich
//         </NavLink>
//         <NavLink className="nav--route" to={char + "cansieuthi/cansieuthi"}>
//           Can Sieu Thi
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

export const Equipnav = () => {
  let char = "/product/allequipment/";
  return (
    <nav>
      <div className="routes">
        <div className="title">Danh muc san pham</div>
        <NavLink className="nav--route" to={char}>
          Tat ca
        </NavLink>
        <NavLink
          className="nav--route"
          to={char + "cancongnghiep/cancongnghiep"}
        >
          Can Cong Nghiep
        </NavLink>
        {/* <NavLink className="nav--route" to={char + "cankythuat/cankythuat"}>
          Can Ky Thuat
        </NavLink>
        <NavLink className="nav--route" to={char + "candodoam/candodoam"}>
          Can Do do am
        </NavLink>
        <NavLink className="nav--route" to={char + "canphantich/canphantich"}>
          Can Phan Tich
        </NavLink>
        <NavLink className="nav--route" to={char + "cansieuthi/cansieuthi"}>
          Can Sieu Thi
        </NavLink> */}
      </div>
    </nav>
  );
};
