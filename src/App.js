// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section id="home">
        <div style={{ padding: "50px" }}>
          <h1>Technology partner,<br /> you can rely on!</h1>
          <p>Sanrove Technologies offers end-to-end technology services for your business needs.</p>
          <button className="req-btn" onClick={() => navigate("/services")}>
            CONTACT NOW
          </button>
        </div>
      </section>
      <Offer />
      <Products />
      <WhyUs />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Only Offer on Services page */}
        <Route path="/services" element={<Offer />} />
        <Route path="/about" element={<About />} />
        {/* Optional: other pages */}
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}
