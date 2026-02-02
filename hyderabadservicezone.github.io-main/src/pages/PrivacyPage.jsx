import React from 'react';
import { 
  FaUserShield, FaInfoCircle, FaCookieBite, 
  FaLink, FaEnvelope, FaPhoneAlt, FaShieldAlt, FaCheckCircle 
} from 'react-icons/fa';

const pageStyle = {
  background: '#f0f4f8', 
  minHeight: '100vh',
  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  // Removed top padding from here
  padding: '20px', 
};

const containerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  // 👇 Add specific top padding to account for fixed header height
  paddingTop: '100px', // <<< ADJUST THIS '100px' VALUE TO YOUR HEADER'S EXACT HEIGHT
};

// Main Card Design: White with subtle border and floating shadow
const modernCard = {
  background: '#ffffff',
  borderRadius: '20px',
  padding: '30px',
  marginBottom: '24px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
  border: '1px solid #e1e8ed',
  transition: 'transform 0.2s ease',
};

const titleWrapper = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const iconCircle = {
  width: '45px',
  height: '45px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #3498db, #2980b9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '1.2rem',
  marginRight: '15px',
  boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3)',
};

const h2Style = {
  margin: 0,
  fontSize: '1.4rem',
  color: '#1a2a3a',
  fontWeight: '700',
};

const gridContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '15px',
};

const bulletItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '12px 15px',
  background: '#f8fafc',
  borderRadius: '10px',
  color: '#475569',
  fontSize: '0.95rem',
  border: '1px solid #f1f5f9'
};

const PrivacyPage = () => (
  <div style={pageStyle}>
    <div style={containerStyle}>
      
      {/* Hero Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px' }}>Privacy Policy</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Last updated: June 2025 • Bengaluru Repair Service</p>
      </div>

      {/* Info Card */}
      <div style={modernCard}>
        <div style={titleWrapper}>
          <div style={iconCircle}><FaInfoCircle /></div>
          <h2 style={h2Style}>Information We Collect</h2>
        </div>
        <div style={gridContainer}>
          {['Customer Name', 'Service Address', 'Appliance Details', 'WhatsApp Messages', 'Browser Cookies'].map((text, i) => (
            <div key={i} style={bulletItem}>
              <FaCheckCircle style={{ color: '#2ecc71' }} /> {text}
            </div>
          ))}
        </div>
      </div>

      {/* Security Card - Highlighted Design */}
      <div style={{ ...modernCard, borderLeft: '6px solid #3498db' }}>
        <div style={titleWrapper}>
          <div style={{ ...iconCircle, background: '#1e293b' }}><FaShieldAlt /></div>
          <h2 style={h2Style}>Data Protection</h2>
        </div>
        <p style={{ color: '#475569', lineHeight: '1.8' }}>
          We prioritize your safety. Your data is only shared with <strong>verified technicians</strong> 
          dispatched to your home. We never sell your data to third-party marketing firms.
        </p>
      </div>

      {/* Contact Grid */}
      <div style={gridContainer}>
        <div style={modernCard}>
           <div style={titleWrapper}>
            <div style={{ ...iconCircle, background: '#e67e22' }}><FaEnvelope /></div>
            <h2 style={h2Style}>Email Us</h2>
          </div>
          <a href="mailto:support@service.com" style={{ color: '#3498db', textDecoration: 'none', fontWeight: '600' }}>
            bengalururepairservices@gmail.com
          </a>
        </div>

        <div style={modernCard}>
           <div style={titleWrapper}>
            <div style={{ ...iconCircle, background: '#27ae60' }}><FaPhoneAlt /></div>
            <h2 style={h2Style}>Call Support</h2>
          </div>
          <p style={{ margin: 0, fontWeight: '600', color: '#1a2a3a' }}>+91 98765 43210</p>
        </div>
      </div>

    </div>
  </div>
);

export default PrivacyPage;
