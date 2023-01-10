import React from "react";
import data from "../../data/product.json";
import "./top8.scss";
export const Top8 = () => {
  const products = [...data.product];
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(products[i]);
  }
  return (
    <div className="container">
      {arr.map((product) => (
        <div className="card">
          <div className="cardimg">
            <img src={product.img} alt="" />
          </div>
          <div className="cardinfo">
            <em>Name: {product.name}</em>
            <em>{product.id}</em>
            <h3>Price: contact</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
