import React from "react";
import "./Offer.css";
import { FaCogs, FaBrain, FaLaptopCode, FaProjectDiagram, FaChalkboardTeacher, FaHeadset } from "react-icons/fa";

const Offer = () => {
  const offers = [
    {
      title: "Product Development",
      description:
        "The design of your product should be user-friendly. We can guide you through design patterns and help you to come up with perfect interfaces.",
      icon: <FaCogs />,
    },
    {
      title: "LLM Consulting",
      description:
        "Large Language Models - Unleash the potential of AI for your business with our AI consulting services. We'll guide you through every step of the AI journey, from strategy to implementation.",
      icon: <FaBrain />,
    },
    {
      title: "Technical Consulting",
      description:
        "Whether you need help with architecture, LLD, or code reviews, we are ready to guide you. With specialist knowledge in multiple market sectors, we can deliver the right solution for now and future.",
      icon: <FaLaptopCode />,
    },
    {
      title: "End to End Software Dev",
      description:
        "Here we develop enterprise software for all markets. Let us know the requirement and we will develop it for your business.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Training Management",
      description:
        "We provide training to development teams and empower them with knowledge.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "IT Support",
      description:
        "We provide IT support for your business, We have talented and qualified support engineers in Operations.",
      icon: <FaHeadset />,
    },
  ];

  return (
    <div className="offer-section">
      <div className="offer-header">
        <h1>Everything we offer.</h1>
        <button className="offer-btn">View All</button>
      </div>
      <span>We offer product and service bundles that are designed to help you</span>

      <div className="offer-cards">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="offer-icon">{offer.icon}</div>
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
