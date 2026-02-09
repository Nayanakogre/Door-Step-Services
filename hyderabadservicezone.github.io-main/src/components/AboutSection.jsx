import React from 'react';
import { Link } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TimerIcon from '@mui/icons-material/Timer';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-card">
        {/* IMAGE */}
        <div className="about-image-col">
          <img
            src={process.env.PUBLIC_URL + '/technician.png'}
            alt="Professional appliance technician at work"
            className="about-image"
            loading="lazy"
          />
        </div>

        {/* DETAILS */}
        <div className="about-details-col">
          <div className="about-badge">About Bangalore Service Zone</div>
          <h2 className="about-title">
            Professional Appliance Repair Services You Can Trust
          </h2>

          <div className="about-desc">
            <p>
              At <span className="about-highlight">Bangalore Service Zone</span>, we provide fast, reliable, and affordable repair services for all major home appliances — including washing machines, ACs, refrigerators, microwaves, dishwashers, and air coolers.
            </p>
            <p>
              Our trained technicians offer <span className="about-highlight">doorstep service across Bangalore</span>, ensuring transparent pricing, prompt repairs, and a customer-first approach.
            </p>
          </div>

          {/* STATS */}
          <div className="about-stats-row">
            <div className="about-stat-card">
              <VerifiedIcon className="about-stat-icon yellow" />
              <div className="about-stat-value">5+ Years</div>
              <div className="about-stat-label">Experience in Home Appliance Repairs</div>
            </div>
            <div className="about-stat-card">
              <SupportAgentIcon className="about-stat-icon blue" />
              <div className="about-stat-value">700+</div>
              <div className="about-stat-label">Repairs Completed Successfully in Bangalore</div>
            </div>
            <div className="about-stat-card">
              <TimerIcon className="about-stat-icon green" />
              <div className="about-stat-value">Same-Day Service</div>
              <div className="about-stat-label">Quick & Reliable Repairs at Your Doorstep</div>
            </div>
          </div>

          {/* LEARN MORE BUTTON */}
          <Link to="/about" className="about-learn-btn">
            <span>Learn More</span> <span className="about-learn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
