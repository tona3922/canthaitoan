import React from "react";
import scale from "../../../../data/scale/congnghiep.json";
import { Scalenav } from "../../scalenav";
import { Product } from "../../product";
import { NavLink } from "react-router-dom";
import { PageRepresent } from "../../represent/page_represent";
import "../../product.scss";
export const Cancongnghiep = () => {
  let char = "/product/scale/";
  return (
    <div>
      <Product />
      <div className="scalepage">
        <div className="nav">
          <Scalenav />
          <div className="filterbox">
            <nav>
              <div className="routes">
                <div className="title">Tuy chon</div>
                <NavLink
                  className="nav--route"
                  to={char + "cancongnghiep/cancongnghiep"}
                >
                  Tat ca
                </NavLink>
                <NavLink className="nav--route" to={char + "cancongnghiep/"}>
                  Can Cong Nghiep 1
                </NavLink>
                <NavLink
                  className="nav--route"
                  to={char + "cankythuat/cankythuat"}
                >
                  Can Cong Nghiep 2
                </NavLink>
                <NavLink
                  className="nav--route"
                  to={char + "candodoam/candodoam"}
                >
                  Khac
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
        <PageRepresent state={[...scale.product]} />
      </div>
    </div>
  );
};
