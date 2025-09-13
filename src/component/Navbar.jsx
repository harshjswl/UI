import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Navbar() {
  const Location = useLocation();
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-div">
        <img src={logo} alt="logo" />
      </div>

      {/* Menu list (desktop visible, mobile toggle) */}
      <div className={"list-div "}>
        <ul>
          <li><a href="/" className={location.pathname === "/" ? "active" : ""}>Home</a></li>
          <li><a href="/about" className={location.pathname === "/about" ? "active" : ""}>About</a></li>
          <li><a href="/rooms" className={location.pathname === "/rooms" ? "active" : ""}>Rooms</a></li>
          <li><a href="/amenities" className={location.pathname === "/amenities" ? "active" : ""}>Amenities</a></li>
          <li><a href="/location" className={location.pathname === "/location" ? "active" : ""}>Location</a></li>
          <li><a href="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</a></li>
        </ul>
      </div>

      {/* Right side: user*/}
      <div className="right-side">
        <div className="user-icon">
          <FaRegUserCircle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
