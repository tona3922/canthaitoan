import React from "react";
import scale from "../../../../data/scale/kythuat.json";
import { Scalenav } from "../../scalenav";
import { Product } from "../../product";
import { PageRepresent } from "../../represent/page_represent";
export const Candodoam = () => {
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
