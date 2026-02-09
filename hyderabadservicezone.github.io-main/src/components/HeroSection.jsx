import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";

const serviceImages = [
  process.env.PUBLIC_URL + "/washing.png",
  process.env.PUBLIC_URL + "/ac.png",
  process.env.PUBLIC_URL + "/Refrigerator.png",
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % serviceImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => {
    const message =
      "Hello! I need Washing Machine / AC / Refrigerator repair service in Bangalore.";
    const whatsappURL = `https://wa.me/919542220772?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${serviceImages[bgIndex]})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-card bigger-card">
          {/* Website Name */}
          <h1 className="hero-title gradient-text">Bengaluru Repair Service</h1>

          {/* Description */}
          <p className="hero-description light-blue-text">
            Appliance Repair Provider in Bengaluru
          </p>

          {/* Subtitle & Price */}
          <p className="subtitle dark-text">Same-Day Service | Doorstep Support</p>
          <p className="price dark-text">Inspection Charge ₹199/- Only</p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="tel:1800123456" className="btn primary">
              ☎ Call Toll Free: 1800-123-456
            </a>

            <button className="btn whatsapp" onClick={openWhatsApp}>
              <FaWhatsapp /> Chat on WhatsApp
            </button>
          </div>

          {/* Rating & Contact */}
          <div className="hero-info">
            <div className="rating dark-text">
              <FaStar color="#facc15" /> <FaStar color="#facc15" />{" "}
              <FaStar color="#facc15" /> <FaStar color="#facc15" />{" "}
              <FaStar color="#facc15" /> 4.8 Rating | 2,500+ Happy Customers
            </div>
            <div className="contact dark-text">
              🌐 www.bengalururepairservice.com <br />
              📧 info@bengalururepairservice.com
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HeroSection;
