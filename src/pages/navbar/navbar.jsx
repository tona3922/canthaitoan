// import React, { useState } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import hamburger from "../../img/hamburger.png";
import "./navbar.scss";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 60) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavbarColor);
  return (
    // <div className={colorChange ? "navbarcolorChange" : "navbar"} id="navbar">
    <div className="navbar" id="navbar">
      <div className="leftnav">
        <div className="logonav">
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
        <button className="notActive" onClick={toggle}>
          <img src={hamburger} alt="" />
        </button>
      </div>

      <div className={isOpen ? "menuisActive" : "rightnav"}>
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
            to="/product/allscale"
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
      </div>
    </div>
  );
};
