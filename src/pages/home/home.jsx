import React from "react";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { Cansieuthi } from "../product/cansieuthi";
import { Top8 } from "../product/top8";
import "../style/home.scss";
import trial from "../../img/trial.png";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1>Quang cao</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, mollitia
        nostrum dignissimos nulla cupiditate quisquam dolorum magni omnis
        deserunt neque libero? Eligendi consectetur, provident dignissimos a
        repellendus nisi nulla nobis.
      </p>
      <img src={trial} alt="" />
      <h1>San pham</h1>
      <hr />
      <div className="title">Can Sieu Thi</div>
      <Cansieuthi />
      <div className="title">Can Ky Thuat</div>
      <Top8 />
      <div className="title">Can Cong Nghiep</div>
      <Top8 />
      <div className="title">Can Phan Tich</div>
      <Top8 />
      <div className="title">Can Do do am</div>
      <Top8 />
      <Footer />
    </div>
  );
};
