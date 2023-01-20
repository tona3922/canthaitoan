import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/trial.png";
// import { Dropdown } from "./dropdown";
import "./navbar.scss";
export const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  // const [height, setHeight] = useState(0);
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={colorChange ? "navbarcolorChange" : "navbar"} id="navbar">
      <div className="leftnav">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="rightnav">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <button className="navbartab">Home</button>
        </Link>
        <div>
          <Link
            to="/product/allscale/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            <button className="navbartab">Product</button>
          </Link>
        </div>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <button className="navbartab">Contact</button>
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <button className="navbartab">About</button>
        </Link>
        {/* <a className="navlink" href="/">
          <button className="navbartab">Home</button>
        </a>
        <a className="navlink" href="/product">
          <button className="navbartab">Product</button>
        </a>
        <a className="navlink" href="/contact">
          <button className="navbartab">Contact</button>
        </a>
        <a className="navlink" href="/about">
          <button className="navbartab">About</button>
        </a> */}
      </div>
    </div>
  );
};
