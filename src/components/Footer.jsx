import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Social Media */}
        <div className="footer-about">
          <span> <p>SANROVE</p>Technologies</span>
          <h2 className="solution">Innovative IT Solutions</h2>
          <div className="footer-social">
            <a href="#home"><FaFacebookF /></a>
            <a href="#home"><FaTwitter /></a>
            <a href="https://sanrove.com/" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
            <a href="#home"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/sanrove/posts/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3>Products</h3>
          <ul>
            <li>HRMS</li>
            <li>InnSwitch</li>
            <li>SAN LMS</li>
            <li>WERP</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3>Get In Touch</h3>
          <p>3/350, Chinnaverampatty, Udumalpet, Tiruppur – 642154.</p>
          <p>+91-95784 66234</p>
          <p className="footer-email">info@sanrove.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © 2025 SANROVE | Powered by SANROVE
      </div>
    </footer>
  );
};

export default Footer;
