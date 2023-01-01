import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
        Contact
      </Link>
      <Link to="/product" style={{ textDecoration: "none", color: "black" }}>
        Product
      </Link>
    </div>
  );
};
