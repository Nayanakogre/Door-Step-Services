import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaClock,
  FaShieldAlt,
  FaUserCheck,
  FaMapMarkedAlt,
  FaArrowRight
} from "react-icons/fa";

const ContactPage = () => {
  const theme = {
    primary: "#0f172a",
    accent: "#2563eb",
    success: "#059669",
    bg: "#f8fafc",
    card: "#ffffff",
    border: "#e2e8ef",
    textMain: "#1e293b",
    textMuted: "#64748b",
  };

  const pageStyle = {
    backgroundColor: theme.bg,
    minHeight: "100vh",
    fontFamily: "'Inter', -apple-system, sans-serif",
    padding: "40px 16px",
    lineHeight: "1.6",
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
  };

  const cardBase = {
    backgroundColor: theme.card,
    borderRadius: "20px",
    padding: "28px",
    border: `1px solid ${theme.border}`,
    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
    marginBottom: "24px",
  };

  const actionButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    borderRadius: "16px",
    backgroundColor: "#f1f5f9",
    textDecoration: "none",
    color: theme.textMain,
    fontWeight: "600",
    marginBottom: "12px",
    border: "1px solid transparent",
  };

  const iconCircle = (bg) => ({
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    background: bg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.1rem",
  });

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>

        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ fontSize: "2.5rem", color: theme.primary, marginBottom: "10px" }}>
            Contact Support
          </h1>
          <p style={{ color: theme.textMuted, fontSize: "1.1rem" }}>
            Fast, reliable appliance repair services across Bengaluru
          </p>
        </div>

        {/* Contact Card */}
        <div style={cardBase}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={iconCircle(theme.accent)}><FaUserCheck /></div>
            <h2 style={{ margin: 0, fontSize: "1.3rem" }}>Reach Our Experts</h2>
          </div>

          <a
            href="tel:+919542220772"
            style={{ ...actionButtonStyle, backgroundColor: "#eff6ff", border: "1px solid #dbeafe" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FaPhoneAlt style={{ color: theme.accent }} />
              <span>+91 95422 20772</span>
            </div>
            <FaArrowRight style={{ opacity: 0.3 }} />
          </a>

          <a href="mailto:bengalururepairservices@gmail.com" style={actionButtonStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FaEnvelope style={{ color: theme.textMuted }} />
              <span>bengalururepairservices@gmail.com</span>
            </div>
            <FaArrowRight style={{ opacity: 0.3 }} />
          </a>

          <a
            href="https://www.bengalururepairservices.com"
            target="_blank"
            rel="noreferrer"
            style={actionButtonStyle}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FaGlobe style={{ color: theme.textMuted }} />
              <span>www.bengalururepairservices.com</span>
            </div>
            <FaArrowRight style={{ opacity: 0.3 }} />
          </a>
        </div>

        {/* Availability */}
        <div style={{ ...cardBase, display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ background: "#f0fdf4", color: theme.success, padding: "12px", borderRadius: "14px" }}>
            <FaClock size={22} />
          </div>
          <div>
            <h3 style={{ margin: 0 }}>Open 24 / 7</h3>
            <p style={{ margin: 0, color: theme.textMuted, fontSize: "0.9rem" }}>
              Weekends & Holidays included
            </p>
          </div>
        </div>

        {/* Service Area */}
        <div style={cardBase}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={iconCircle(theme.accent)}><FaMapMarkedAlt /></div>
            <h2 style={{ margin: 0, fontSize: "1.3rem" }}>Our Service Area</h2>
          </div>

          <div style={{ height: "280px", borderRadius: "16px", overflow: "hidden", border: `1px solid ${theme.border}` }}>
            <iframe
              title="Bengaluru Service Area"
              src="https://www.google.com/maps?q=Bengaluru&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Trust & Disclaimer */}
        <div style={{ ...cardBase, textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", color: theme.textMuted, display: "flex", justifyContent: "center", gap: "6px" }}>
            <FaShieldAlt /> 100% Genuine Spare Parts
          </p>
          <div
            style={{
              marginTop: "16px",
              padding: "16px",
              borderRadius: "12px",
              background: "#f1f5f9",
              fontSize: "0.8rem",
              color: "#64748b",
              border: "1px dashed #cbd5e1",
            }}
          >
            <strong>Disclaimer:</strong> Bengaluru Repair Service is an independent service provider.
            All brand names are used only for identification purposes.
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
