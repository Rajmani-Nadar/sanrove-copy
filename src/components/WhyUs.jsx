import React from "react";
import "./WhyUs.css";
import { FaHandshake, FaClock, FaLightbulb } from "react-icons/fa";

const WhyUs = () => {
    const reasons = [
        {
            icon: <FaHandshake />,
            title: "Comprehensive software solutions",
            description:
                "Comprehensive software solutions catering to your specific requirements. It adds value to the backbone of your digital transformation initiatives.",
        },
        {
            icon: <FaClock />,
            title: "Deploy prototypes fast",
            description:
                "Take your prototype to the market fast with our streamlined solutions. This can help you to grow with Go-to-market plan much faster and offer the best output.",
        },
        {
            icon: <FaLightbulb />,
            title: "Upskill your resources",
            description:
                "We will upskill your resources to better serve your needs. Be it just plain development or data engineering, we have industry experts who will not just train on the subject, but also on industry best practices.",
        },
    ];

    return (
        <div className="whyus-section">
            <div className="whyus-header">
                <h1>Why should you work with us?</h1>
                <p>
                    Partnering with Sanrove Technologies
                    can help your business experience numerous benefits. Here are some of
                    the key advantages you’ll gain from our specialists.
                </p>
            </div>

            <div className="whyus-cards">
                {reasons.map((reason, index) => (
                    <div className="whyus-card" key={index}>
                        <div className="whyus-icon">{reason.icon}</div>
                        <h2>{reason.title}</h2>
                        <p>{reason.description}</p>
                    </div>
                ))}
            </div>

            <div className="whyus-btn-container">
                <button className="whyus-btn">EXPLORE MORE</button>
            </div>

        </div>
    );
};

export default WhyUs;
