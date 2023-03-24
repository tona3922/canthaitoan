import React from "react";
import equipment from "../../data/equipment/allequipment.json";
import { PageRepresent } from "./represent/page_represent";
import { Equipnav } from "./equipnav";
import { Product } from "./product";
export const Allequipment = () => {
  return (
    <div>
      <Product />
      <div className="scalepage">
        <div className="nav">
          <Equipnav />
        </div>
        <PageRepresent state={[...equipment.product]} />
      </div>
    </div>
  );
};
