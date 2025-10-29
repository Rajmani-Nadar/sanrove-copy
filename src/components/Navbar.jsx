// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Sanrove <br />Technologies</div>
    <ul className="navbar-links">
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/products">Products</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
    </ul>
    <button className="quote-btn">REQUEST QUOTE</button>
  </nav>
);

export default Navbar;
