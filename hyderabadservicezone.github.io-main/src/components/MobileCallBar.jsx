import React from 'react';

const barStyle = {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  background: '#FFD600',
  color: '#222',
  zIndex: 3000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '14px 0',
  fontWeight: 700,
  fontSize: '1.1rem',
  boxShadow: '0 -2px 12px rgba(0,0,0,0.08)',
};

const buttonStyle = {
  background: '#222',
  color: '#FFD600',
  border: 'none',
  borderRadius: '20px',
  padding: '8px 18px',
  marginLeft: '16px',
  fontWeight: 700,
  fontSize: '1rem',
  textDecoration: 'none',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
};

const MobileCallBar = () => (
  <div className="mobile-call-bar" style={barStyle}>
    Call Now
    <a href="tel:9542220772" style={buttonStyle}>
    9542220772
    </a>
    <style>{`
      @media (min-width: 768px) {
        .mobile-call-bar { display: none !important; }
      }
    `}</style>
  </div>
);

export default MobileCallBar; 