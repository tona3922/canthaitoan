import React from "react";
import { Link } from "react-router-dom";
import data from "../../../../data/scale/phantich.json";
import { PageRepresent } from "../../represent/page_represent";
import "../../top8.scss";
export const Top8cpt = () => {
  const products = [...data.product];
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(products[i]);
  }
  return (
    <div>
      <PageRepresent state={[...arr]} />
      <Link to="/product/scale/canphantich/canphantich">
        <button className="moreproduct">More products</button>
      </Link>
    </div>
  );
};
