import React from 'react';
import { 
  FaCheckCircle, 
  FaTimesCircle, 
  FaPhoneAlt, 
  FaEnvelope,
  FaTools,
  FaShieldAlt,
  FaExclamationTriangle,
  FaInfoCircle
} from 'react-icons/fa';

const WarrantyPage = () => (
  <div style={{ 
    padding: '48px 16px', 
    maxWidth: 900, 
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    lineHeight: '1.6'
  }}>
    <div style={{ 
      backgroundColor: '#f0f7ff',
      padding: '24px',
      borderRadius: '8px',
      marginBottom: '32px',
      borderLeft: '4px solid #2980b9'
    }}>
      <h1 style={{ 
        color: '#2c3e50',
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <FaShieldAlt /> Warranty Policy
      </h1>
      <p style={{ fontSize: '18px' }}>
        At <strong> Hyderabad Service Zone</strong>, we stand behind our service quality with comprehensive warranty coverage.
      </p>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ 
        color: '#27ae60',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <FaCheckCircle /> What's Covered
      </h2>
      
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ 
          color: '#2980b9',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <FaTools /> Labor Warranty
        </h3>
        <div style={{
          backgroundColor: '#e8f8f5',
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0'
        }}>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
              <FaCheckCircle style={{ color: '#27ae60' }} />
              <span>30-day limited warranty on labor for all repairs</span>
            </li>
            <li style={{ display: 'flex', gap: '10px' }}>
              <FaCheckCircle style={{ color: '#27ae60' }} />
              <span>If the same issue reoccurs within 30 days, we'll recheck and service at no extra labor charge</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 style={{ 
          color: '#2980b9',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <FaTools /> Spare Parts Warranty
        </h3>
        <div style={{
          backgroundColor: '#e8f8f5',
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0'
        }}>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
              <FaCheckCircle style={{ color: '#27ae60' }} />
              <span>Spare parts carry 3-6 months manufacturer's warranty (varies by part)</span>
            </li>
            <li style={{ display: 'flex', gap: '10px' }}>
              <FaCheckCircle style={{ color: '#27ae60' }} />
              <span>Coverage applies only to parts we provide, not customer-supplied parts</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ 
        color: '#e74c3c',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <FaTimesCircle /> What's Not Covered
      </h2>
      <div style={{
        backgroundColor: '#fdedec',
        padding: '20px',
        borderRadius: '8px'
      }}>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
            <FaExclamationTriangle style={{ color: '#e74c3c' }} />
            <span>Damage from mishandling, electrical issues, or improper use</span>
          </li>
          <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
            <FaExclamationTriangle style={{ color: '#e74c3c' }} />
            <span>Issues unrelated to the original repair</span>
          </li>
          <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
            <FaExclamationTriangle style={{ color: '#e74c3c' }} />
            <span>Appliances opened/tampered with after our service</span>
          </li>
          <li style={{ display: 'flex', gap: '10px' }}>
            <FaExclamationTriangle style={{ color: '#e74c3c' }} />
            <span>Water damage or surge-related faults</span>
          </li>
        </ul>
      </div>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ 
        color: '#2980b9',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <FaShieldAlt /> Warranty Claims
      </h2>
      <div style={{
        backgroundColor: '#f0f7ff',
        padding: '20px',
        borderRadius: '8px'
      }}>
        <p style={{ marginBottom: '15px' }}>
          For any service-related complaints during the warranty period, please contact us immediately:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaPhoneAlt style={{ color: '#2980b9' }} />
            <span>Phone: +91 9542220772</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaEnvelope style={{ color: '#2980b9' }} />
            <span>Email: hyderabadservicezone@gmail.com</span>
          </div>
        </div>
      </div>
    </div>

    <div style={{ 
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <p style={{ fontWeight: 'bold', margin: 0 }}>
        <FaInfoCircle /> Note: This warranty is provided by Hyderabad Service Zone and is separate from any manufacturer's warranty.
      </p>
    </div>
  </div>
);

export default WarrantyPage;