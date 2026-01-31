import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-col">
          <img
            src={process.env.PUBLIC_URL+"/technician.png"}
            alt="Professional appliance technician at work"
            className="about-image"
            loading="lazy"
          />
        </div>
        <div className="about-details-col">
          <div className="about-badge">About Hyderabad Service Zone</div>
          <h2 className="about-title">
            Professional Appliance Repair Services You Can Count On
          </h2>
          <div className="about-desc">
            <p>
              At <span className="about-highlight">Hyderabad Service Zone</span>, we
              provide fast, reliable, and affordable repair services for all
              major home appliances — including washing machines, ACs, fridges,
              microwaves, dishwashers, and air coolers.
            </p>
            <p>
              Our trained technicians offer{' '}
              <span className="about-highlight">doorstep service across Hyderabad</span>,
              with transparent pricing and a customer-first approach you can trust.
            </p>
          </div>
          <div className="about-stats-row">
            <div className="about-stat">
              <div className="about-stat-value">5+ Years</div>
              <div className="about-stat-label">Years Experience in Home<br />Appliance Repairs</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-value">700+</div>
              <div className="about-stat-label">Successfully Repairs Finished<br />in Hyderabad</div>
            </div>
          </div>
          <Link 
            to="/about" 
            className="about-learn-btn"
            aria-label="Learn more about our services"
          >
            <span>LEARN MORE</span>
            <span className="about-learn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;