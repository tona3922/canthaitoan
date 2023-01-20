import React from "react";
import scale from "../../../../data/scale/sieuthi.json";
import { Scalenav } from "../../scalenav";
import { Product } from "../../product";
import { PageRepresent } from "../../represent/page_represent";
export const Cansieuthi = () => {
  return (
    <div>
      <Product />
      <div className="scalepage">
        <div className="nav">
          <Scalenav />
        </div>
        <PageRepresent state={[...scale.product]} />
      </div>
    </div>
  );
};
