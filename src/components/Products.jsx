import React from "react";
import "./Products.css";
import {
    FaIndustry,      // for WERP - industry operations
    FaUserTie,       // for HRMS - people & HR
    FaChalkboardTeacher, // for SAN LMS - learning
    FaHotel          // for InnSwitch (HMS) - hotels/hospitality
} from "react-icons/fa";

const Products = () => {
    const products = [
        {
            title: "WERP",
            description:
                "Our comprehensive software has everything you need to streamline and elevate your textile industry operations.",
            icon: <FaIndustry />,
        },
        {
            title: "HRMS",
            description:
                "A complete Human Resource Management System to automate HR workflows efficiently.",
            icon: <FaUserTie />,
        },
        {
            title: "SAN LMS",
            description:
                "Discover the future of learning with our tailor-made Learning Management System (LMS)!",
            icon: <FaChalkboardTeacher />,
        },
        {
            title: "InnSwitch (HMS)",
            description:
                "Your one-stop solution for efficient and stress-free property management.",
            icon: <FaHotel />,
        },
    ];

    return (
        <div className="product-section">
            <div className="product-header">
                <h1>Our Products</h1>
            </div>

            <div className="product-cards">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-icon">{product.icon}</div>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <button className="product-btn">More Info</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
