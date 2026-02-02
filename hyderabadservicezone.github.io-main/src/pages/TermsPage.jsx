import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, Divider } from "@mui/material";
import {
  FaTools,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaTimesCircle,
  FaCreditCard,
  FaShieldAlt,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";

const TermsPage = () => {
  const theme = {
    primary: "#0f172a", // Your Signature Deep Slate
    accent: "#2563eb",  // Trust Blue
    bg: "#f8fafc",
    card: "#ffffff",
    border: "#e2e8f0",
    textMain: "#1e293b",
    textMuted: "#64748b",
  };

  const sectionWrapper = {
    maxWidth: "650px",
    margin: "0 auto 28px auto",
  };

  const cardStyle = {
    backgroundColor: theme.card,
    borderRadius: "24px",
    padding: "32px",
    border: `1px solid ${theme.border}`,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
  };

  const iconCircle = (bg) => ({
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    background: bg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.2rem",
    flexShrink: 0,
  });

  const termList = (items) => (
    <List disablePadding>
      {items.map((text, i) => (
        <ListItem key={i} sx={{ px: 0, alignItems: "flex-start", gap: 2, mb: 1 }}>
          <FaCheckCircle style={{ color: "#10b981", marginTop: "5px", fontSize: "14px", flexShrink: 0 }} />
          <Typography variant="body2" sx={{ color: theme.textMain, lineHeight: 1.6 }}>{text}</Typography>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ backgroundColor: theme.bg, minHeight: "100vh", py: 8, px: 2 }}>
      
      {/* 1. HEADER */}
      <Box sx={{ textAlign: "center", mb: 6, maxWidth: 650, mx: "auto" }}>
        <Box sx={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: 1, 
          px: 2, 
          py: 0.5, 
          borderRadius: "100px", 
          backgroundColor: "#dbeafe", 
          color: theme.accent,
          mb: 2
        }}>
          <FaShieldAlt fontSize="12px" />
          <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
            Legal Agreement
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 800, color: theme.primary, mb: 1, letterSpacing: "-0.02em" }}>
          Terms & Conditions
        </Typography>
        <Typography sx={{ color: theme.textMuted, fontSize: "1.1rem" }}>
          Rules and guidelines for using Bengaluru Repair Services.
        </Typography>
      </Box>

      {/* 2. SERVICES & BOOKING */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Box sx={iconCircle(theme.accent)}><FaTools /></Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary }}>Service & Booking</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>How we operate in Bengaluru.</Typography>
            </Box>
          </Box>
          {termList([
            "Doorstep repair for all major home appliances.",
            "Service coverage is strictly limited to Bengaluru city limits.",
            "Appointments are confirmed via phone or WhatsApp before dispatch.",
            "Independent technicians carry out all maintenance work."
          ])}
        </Box>
      </Box>

      {/* 3. PAYMENTS & CANCELLATIONS */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Box sx={iconCircle("#10b981")}><FaMoneyBillWave /></Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary }}>Payments & Fees</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>Pricing and cancellation policies.</Typography>
            </Box>
          </Box>
          {termList([
            "Inspection charges start from ₹199 (applicable if service is declined).",
            "Spare parts are billed separately from labor charges.",
            "Payments accepted via Cash, Google Pay, PhonePe, or UPI.",
            "Cancellations must be made at least 1 hour before the scheduled visit."
          ])}
        </Box>
      </Box>

      {/* 4. LIABILITY & DISCLAIMER */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Box sx={iconCircle("#f59e0b")}><FaInfoCircle /></Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary }}>Liability Notice</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>Legal boundaries and brand identity.</Typography>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ color: theme.textMain, lineHeight: 1.8, mb: 2 }}>
            <strong>Bengaluru Repair Services</strong> is an independent service provider. We are <strong>not affiliated</strong> with any appliance manufacturer.
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" sx={{ color: theme.textMuted, fontStyle: "italic", lineHeight: 1.6 }}>
            We are not responsible for pre-existing damages, manufacturer defects, or electrical surge issues. All brand names used are for identification purposes only.
          </Typography>
        </Box>
      </Box>

      {/* 5. ACCEPTANCE CARD */}
      <Box sx={sectionWrapper}>
        <Box sx={{ 
          ...cardStyle, 
          background: `linear-gradient(135deg, ${theme.primary} 0%, #1e293b 100%)`, 
          color: "white", 
          textAlign: "center" 
        }}>
          <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
            Agreement Confirmation
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            By booking our service, you confirm that you have read and agreed to these Terms & Conditions.
          </Typography>
        </Box>
      </Box>

      {/* FOOTER */}
      <Typography variant="caption" sx={{ display: "block", textAlign: "center", mt: 4, color: theme.textMuted }}>
        Last Updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
      </Typography>

    </Box>
  );
};

export default TermsPage;
