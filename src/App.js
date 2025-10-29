import React from "react";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "50px"}}>
        <h1>Technology partner,<br />
         you can rely on!</h1>
        <p>Sanrove Technologies offers end-to-end technology services for your business needs.</p>
        <button className="req-btn">CONTACT NOW</button>
      </div>
      <Offer />
      <Products />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default App;
