import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Sanrove <br/>Technologies</div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>

      <button className="quote-btn">REQUEST QUOTE</button>
    </nav>
  );
};

export default Navbar;
