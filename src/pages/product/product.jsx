import React from "react";
import { Navbar } from "../navbar/navbar";
import { NavLink } from "react-router-dom";
import "./product.scss";
export const Product = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="product">
      <Navbar />
      <div className="whole">
        <NavLink className="routes" to="/product/allscale/">
          Scale
        </NavLink>
        <NavLink className="routes" to="/product/allequipment/">
          Equipment
        </NavLink>
      </div>
    </div>
  );
};
