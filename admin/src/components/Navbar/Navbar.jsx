/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../../assets/assets.js";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <img src={assets.profile_image} alt="" />
    </div>
  );
}

export default Navbar;
