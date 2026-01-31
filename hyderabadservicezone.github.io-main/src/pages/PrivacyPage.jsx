import React from 'react';
import { 
  FaUserShield, 
  FaInfoCircle, 
  FaCookieBite, 
  FaLink, 
  FaEnvelope, 
  FaPhoneAlt,
  FaShieldAlt
} from 'react-icons/fa';

const PrivacyPage = () => (
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
        <FaUserShield /> Privacy Policy
      </h1>
      <p style={{ color: '#7f8c8d', fontWeight: '500' }}>
        Effective Date: 12-06-2025
      </p>
      <p style={{ fontSize: '18px' }}>
        At <strong> Hyderabad Service Zone</strong>, we are committed to protecting your privacy. 
        This policy explains how we collect, use, and safeguard your personal information.
      </p>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ 
        color: '#2980b9',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <FaInfoCircle /> 1. Information We Collect
      </h2>
      <p>We may collect the following information when you interact with us:</p>
      <ul style={{ 
        backgroundColor: '#f8f9fa',
        padding: '20px 20px 20px 40px',
        borderRadius: '8px',
        listStyleType: 'disc'
      }}>
        <li>Name</li>
        <li>Phone number</li>
        <li>Address or location for service</li>
        <li>Appliance details (brand, model, issue)</li>
        <li>Feedback or inquiries via contact forms, phone, WhatsApp, or email</li>
        <li>Website usage data through cookies and analytics (for improvement only)</li>
      </ul>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ 
        color: '#2980b9',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <FaInfoCircle /> 2. How We Use Your Information
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '16px'
      }}>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '16px',
          borderRadius: '8px'
        }}>
          Schedule and confirm service appointments
        </div>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '16px',
          borderRadius: '8px'
        }}>
          Assign technicians for doorstep service
        </div>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '16px',
          borderRadius: '8px'
        }}>
          Provide support or respond to queries
        </div>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '16px',
          borderRadius: '8px'
        }}>
          Send service updates or reminders
        </div>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '16px',
          borderRadius: '8px'
        }}>
          Improve website performance and experience
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ 
        color: '#2980b9',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <FaShieldAlt /> 3. Data Sharing & Security
      </h2>
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px'
      }}>
        <p><strong>We do not sell, rent, or share</strong> your personal information with third parties.</p>
        <p>Relevant information may be shared only with verified technicians to coordinate your service.</p>
        <p>While we implement security measures, no online system is completely secure.</p>
      </div>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ 
        color: '#2980b9',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <FaCookieBite /> 4. Cookies & Analytics
      </h2>
      <p>
        We may use cookies or analytics tools to track website usage patterns. 
        You can disable cookies through your browser settings.
      </p>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ 
        color: '#2980b9',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <FaLink /> 5. Third-Party Links
      </h2>
      <p>
        Our website may include links to third-party services like Google Maps or WhatsApp. 
        We are not responsible for their content or privacy practices.
      </p>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ 
        color: '#2980b9',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <FaUserShield /> 6. Your Rights
      </h2>
      <p>
        You may contact us to request data deletion or ask privacy-related questions.
      </p>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ 
        color: '#2980b9',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <FaEnvelope /> 7. Contact Information
      </h2>
      <div style={{
        backgroundColor: '#f0f7ff',
        padding: '20px',
        borderRadius: '8px',
        display: 'inline-block'
      }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaEnvelope /> Email: hyderabadservicezone@gmail.com
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaPhoneAlt /> Phone: +91 9542220772
        </p>
      </div>
    </div>

    <div style={{ 
      backgroundColor: '#e8f4fc',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '32px'
    }}>
      <p style={{ margin: 0 }}>
        <strong>Design & Icon Credits:</strong> Some icons used on this website are sourced from Flaticon under free license with attribution. 
        Others are designed via Canva using free and Pro assets for commercial use.
      </p>
    </div>

    <div style={{ 
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <p style={{ fontWeight: 'bold', margin: 0 }}>
        <FaInfoCircle /> We are an independent service provider not affiliated with any appliance manufacturers. 
        All brand names are used for identification purposes only.
      </p>
    </div>
  </div>
);

export default PrivacyPage;