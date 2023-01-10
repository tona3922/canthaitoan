import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/trial.png";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftnav">
        <img src={logo} alt="" />
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
        <Link
          to="/product"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <button className="navbartab">Product</button>
        </Link>
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
