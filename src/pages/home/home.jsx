import React, { useEffect } from "react";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { Top8 } from "../product/top8";
import { Top8cst } from "../product/scale/cansieuthi/top8cst";
import { Top8ccn } from "../product/scale/cancongnghiep/top8ccn";
import { Top8ckt } from "../product/scale/cankythuat/top8ckt";
import { Top8cpt } from "../product/scale/canphantich/top8cpt";
import { Top8cdda } from "../product/scale/candodoam/top8cdda";
import "./home.scss";
import trial from "../../img/trial.png";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <a href="https://zalo.me/0908699986">
        <img src={trial} alt="" />
      </a>
      <h1>San pham</h1>
      <hr />
      <div className="title">Tat ca loai can</div>
      <Top8 />
      <div className="title">Can Sieu Thi</div>
      <Top8cst />
      <div className="title">Can Ky Thuat</div>
      <Top8ckt />
      <div className="title">Can Cong Nghiep</div>
      <Top8ccn />
      <div className="title">Can Phan Tich</div>
      <Top8cpt />
      <div className="title">Can Do do am</div>
      <Top8cdda />
      <div className="title">Thiet bi can</div>
      <Top8 />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};
