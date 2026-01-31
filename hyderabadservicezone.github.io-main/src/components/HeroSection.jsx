import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const serviceImages = [
  process.env.PUBLIC_URL + "/washing.png",
  process.env.PUBLIC_URL + "/ac.png",
  process.env.PUBLIC_URL + "/Refrigerator.png",
  process.env.PUBLIC_URL + "/Microwave1.png",
  process.env.PUBLIC_URL + "/Dishwasher.png",
  process.env.PUBLIC_URL + "/AirCoolerRepair.png"
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % serviceImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => {
    const message = "Hello! I need appliance repair service.";
    const whatsappURL = `https://wa.me/919542220772?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${serviceImages[bgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        paddingTop: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="hero-content">
        <div className="hero-content-inner">
          <div className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold inline-block mb-6 sm:mb-8">
            # Hyderabad Service Zone
          </div>
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-5 leading-tight">
            Home Appliance Repair & Service Door-Step
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Lowest inspection charge - ₹199/-
          </p>
          <p className="hero-desc text-xl sm:text-2xl mb-8 sm:mb-10 font-medium">
            Same-Day Service Available Across Hyderabad ,Andhra Pradesh & Telangana
          </p>
          <div className="hero-actions">
            <button 
              onClick={openWhatsApp}
              className="hero-btn hero-btn-primary"
              aria-label="Contact via WhatsApp"
            >
              <span role="img" aria-label="phone">📱</span> WhatsApp
            </button>
            <a 
              href="tel:+919542220772" 
              className="hero-btn hero-btn-secondary"
              aria-label="Call us"
            >
              <span role="img" aria-label="telephone">📞</span> 9542220772
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;