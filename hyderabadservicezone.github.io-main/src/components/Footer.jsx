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
      Bengaluru Repair Service is a trusted appliance repair provider in Bengaluru. We are independent and not affiliated with any specific brand or company. Our expert technicians offer reliable doorstep repairs for refrigerators, air conditioners, and washing machines. All brand names are used solely for identification purposes.
          </p>
          <div className="social-icons">
            <a href="mailto:bengalururepairservices@gmail.com" title="Email">
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
            {/* <li><Link to="/service/microwave">Microwave Oven Repair</Link></li> */}
            <li><Link to="/service/ac">Air Conditioner Repair</Link></li>
            <li><Link to="/service/refrigerator">Refrigerator Repair</Link></li>
            {/* <li><Link to="/service/dishwasher">Dishwasher Repair</Link></li> */}
            {/* <li><Link to="/service/air-cooler">Air Cooler Service</Link></li> */}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column contact-section">
          <h4>Contact Us</h4>
          <p>Address: Door No : 5-16/46, Ganesh Nagar, Ameenpur, Bachupally, Hyderabad, Telangana 500049</p>
          <p className="contact-info">
            <FaPhoneAlt /> +91 9542220772
          </p>
          <p className="contact-info">
            <FaGlobe /> www.bengalururepairservices.com
          </p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.528420109081!2d77.59053541526154!3d12.976230590911917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c5c9ef87%3A0x123456789abcdef!2sMG+Road%2C+Bengaluru%2C+Karnataka+560001!5e0!3m2!1sen!2sin!4v1751397894509!5m2!1sen!2sin"
            width="100%" 
            height="150" 
            style={{ border: 0, borderRadius: '12px', marginTop: '10px' }} 
            allowFullScreen 
            loading="lazy"
            title="Banglore  Zone Location"
          ></iframe>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="footer-disclaimer">
        <h5>Disclaimer</h5>
        <p>
         We are an independent appliance repair service and not affiliated with any brand. All brand names and logos are for reference only and belong to their owners.
        </p>
        <div className="footer-bottom">
          <p>© Copyright {new Date().getFullYear()}, <span>Bengaluru Repair Service</span>. All Rights Reserved.</p>
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
