import React from 'react';
import { FaTools, FaCalendarAlt, FaMoneyBillWave, FaTimesCircle, FaCreditCard, FaShieldAlt, FaInfoCircle } from 'react-icons/fa';

const TermsPage = () => (
  <div style={{ 
    padding: '48px 16px', 
    maxWidth: 900, 
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333'
  }}>
    <h1 style={{ 
      color: '#2c3e50',
      borderBottom: '2px solid #3498db',
      paddingBottom: '12px',
      marginBottom: '32px'
    }}>
      Terms & Conditions
    </h1>
    
    <div style={{ 
      backgroundColor: '#f8f9fa',
      padding: '24px',
      borderRadius: '8px',
      marginBottom: '32px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <p style={{ fontSize: '18px' }}>
        Welcome to <strong> Hyderabad Service Zone</strong>. By booking our washing machine repair service, 
        you agree to the following terms and conditions.
      </p>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#2980b9', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaTools /> Services Offered
      </h2>
      <ul style={{ lineHeight: '1.8', listStyleType: 'circle', paddingLeft: '20px' }}>
        <li>Repair & maintenance of fully automatic and semi-automatic washing machines</li>
        <li>Home visits by trained technicians</li>
        <li>Use of genuine or compatible spare parts (as per availability)</li>
      </ul>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#2980b9', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaCalendarAlt /> Booking & Confirmation
      </h2>
      <ul style={{ lineHeight: '1.8', listStyleType: 'circle', paddingLeft: '20px' }}>
        <li>Book via phone or WhatsApp</li>
        <li>We confirm the appointment before dispatching a technician</li>
        <li>Inspection charges may apply</li>
      </ul>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#2980b9', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaMoneyBillWave /> Pricing
      </h2>
      <ul style={{ lineHeight: '1.8', listStyleType: 'circle', paddingLeft: '20px' }}>
        <li>Prices vary based on the issue</li>
        <li>Final service charges will be discussed before starting any repair</li>
        <li>Final charges depend on issue type</li>
        <li>Spare parts cost extra if needed</li>
      </ul>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#2980b9', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaTimesCircle /> Cancellations
      </h2>
      <ul style={{ lineHeight: '1.8', listStyleType: 'circle', paddingLeft: '20px' }}>
        <li>Cancel at least 1 hour before scheduled time</li>
        <li>No cancellation charges if informed on time</li>
      </ul>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#2980b9', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaCreditCard /> Payment
      </h2>
      <ul style={{ lineHeight: '1.8', listStyleType: 'circle', paddingLeft: '20px' }}>
        <li>Accepted via Cash, UPI, Google Pay, PhonePe, or Paytm</li>
      </ul>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#2980b9', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaShieldAlt /> Liability
      </h2>
      <p style={{ lineHeight: '1.8' }}>
        We are not responsible for pre-existing issues or damage due to misuse or manufacturer defects.
      </p>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#2980b9', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaInfoCircle /> Disclaimer
      </h2>
      <p style={{ lineHeight: '1.8' }}>
        We are an independent home appliance repair service provider. We are not affiliated with or authorized by any specific brand.
        All brand names, logos, and trademarks used are for identification purposes only and remain the property of their respective owners.
      </p>
    </div>

    <div style={{ 
      backgroundColor: '#e8f4fc',
      padding: '20px',
      borderRadius: '8px',
      borderLeft: '4px solid #3498db'
    }}>
      <p style={{ lineHeight: '1.8', margin: 0 }}>
        <strong>Design & Icon Credits:</strong> Some icons used on this website are sourced from Flaticon under free license with attribution. 
        Others are designed via Canva using free and Pro assets for commercial use. All images and icons are used solely for 
        illustration and service explanation purposes.
      </p>
    </div>

    <div style={{ 
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <p style={{ fontWeight: 'bold', margin: 0 }}>
        By booking our service, you agree to our Terms & Conditions and Privacy Policy.
      </p>
    </div>
  </div>
);

export default TermsPage;