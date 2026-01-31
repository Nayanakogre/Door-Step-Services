import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPhoneAlt, FaGlobe, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-logo-section">
          <img 
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Tirupati Service Zone Logo" 
            className="footer-logo" 
          />
          <p className="footer-description">
          Hyderabad Service Zone is an independent appliance repair service provider. We are not affiliated with or authorized by any specific brand or company. We offer trusted doorstep repair for washing machines, refrigerators, ACs, microwave ovens, dishwashers, and more in Hyderabad. All brand names are used for identification purposes only.
          </p>
          <div className="social-icons">
            <a href="mailto:hyderabadservicezone@gmail.com" title="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/hyderabadservicezone/" title="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/pricing">Pricing / Service Charges</Link></li>
            <li><Link to="/warranty">Warranty Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/service/washing-machine">Washing Machine Repair</Link></li>
            <li><Link to="/service/microwave">Microwave Oven Repair</Link></li>
            <li><Link to="/service/ac">Air Conditioner Repair</Link></li>
            <li><Link to="/service/refrigerator">Refrigerator Repair</Link></li>
            <li><Link to="/service/dishwasher">Dishwasher Repair</Link></li>
            <li><Link to="/service/air-cooler">Air Cooler Service</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column contact-section">
          <h4>Contact Us</h4>
          <p>Address: Door No : 5-16/46, Ganesh Nagar, Ameenpur, Bachupally, Hyderabad, Telangana 500049</p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +91 9542220772
          </p>
          <p className="flex items-center gap-2">
            <FaGlobe /> www.HyderabadServiceZone.com
          </p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942109.4269285207!2d75.22163035783817!3d15.228687635000588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d9c9cab2771%3A0x4e839c133d43853d!2s5-16%2F46%2C%20Ganesh%20Nagar%2C%20Ameenpur%2C%20Bachupally%2C%20Hyderabad%2C%20Telangana%20500049!5e0!3m2!1sen!2sin!4v1751397894509!5m2!1sen!2sin" 
            width="100%" 
            height="150" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Hyderabad Service Zone Location"
          ></iframe>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="footer-disclaimer">
        <h5>Disclaimer</h5>
        <p>
          We are an independent home appliance repair service provider and are not affiliated with or authorized by any specific brand. All brand names, logos, and trademarks used on this website are for identification purposes only and remain the property of their respective owners. We do not claim any official association, authorization, or endorsement from any manufacturer.
        </p>
        <div className="footer-bottom">
          <p>© Copyright {new Date().getFullYear()}, <span>Hyderabad Service Zone</span>. All Rights Reserved.</p>
          <div>
            <Link to="/terms">Terms of Services</Link> |
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;