import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import {
  ExpandMore,
  CheckCircle,
  Cancel,
  VerifiedUser,
  SupportAgent,
  Phone,
  Email,
} from "@mui/icons-material";

const FaqsPage = () => {
  const theme = {
    primary: "#ffffff", // headings white
    accent: "#ff9800", // orange accent
    bg: "linear-gradient(0deg, rgb(43, 62, 205) 0%, #030c50 50%, #223fc2 100%)",
    card: "#ffffff", // microcards white
    border: "#e2e8f0",
    textMain: "#1f2937",
    textMuted: "#cbd5e1",
    success: "#10b981",
  };

  const sectionWrapper = { maxWidth: "1200px", margin: "0 auto 60px auto" };
  const mainCard = {
    backgroundColor: theme.card,
    borderRadius: "26px",
    padding: "36px",
    border: `1px solid ${theme.border}`,
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  };

  const faqs = [
    {
      question: "Do you offer doorstep service in Bengaluru?",
      answer:
        "Yes, we provide doorstep appliance repair services across Bengaluru city and nearby areas. Our technician visits your home to diagnose and fix the issue.",
    },
    {
      question: "What appliances do you repair?",
      answer: (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {[
            "Washing Machines",
            "Refrigerators",
            "Air Conditioners",
            "Microwave Ovens",
            "Dishwashers",
            "Air Coolers",
          ].map((item) => (
            <Box key={item} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircle sx={{ color: theme.success, fontSize: 18 }} />
              <Typography variant="body2">{item}</Typography>
            </Box>
          ))}
        </Box>
      ),
    },
    {
      question: "Are you an authorized service center?",
      answer:
        "No. Bengaluru Repair Services is an independent repair provider and is not affiliated with any specific brand.",
    },
    {
      question: "How much do you charge for inspection?",
      answer:
        "Inspection charges start from ₹199. Final repair cost depends on the issue and spare parts required.",
    },
    {
      question: "Is there a warranty on repairs?",
      answer:
        "Yes. We provide 30-day labor warranty and 3–6 months warranty on replaced spare parts.",
    },
    {
      question: "Can I cancel or reschedule booking?",
      answer: (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Cancel sx={{ color: "#ef4444", fontSize: 18 }} />
            <Typography variant="body2">Inform at least 2 hours before schedule.</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <VerifiedUser sx={{ color: theme.success, fontSize: 18 }} />
            <Typography variant="body2">No cancellation charges with prior notice.</Typography>
          </Box>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ background: theme.bg, minHeight: "100vh", py: 10, px: 2 }}>
      <Container>

        {/* ================= HERO HEADER ================= */}
        <Box sx={{ textAlign: "center", mb: 10, position: "relative" }}>
          {/* Glow */}
          <Box
            sx={{
              position: "absolute",
              top: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "280px",
              height: "280px",
              background: "radial-gradient(circle, rgba(255,152,0,0.18) 0%, rgba(255,152,0,0) 70%)",
              zIndex: 0,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.3rem", md: "3.2rem" },
              color: theme.primary,
              letterSpacing: "-0.04em",
              position: "relative",
              zIndex: 1,
              mb: 2,
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Box
            sx={{
              width: "130px",
              height: "6px",
              margin: "0 auto",
              borderRadius: "30px",
              background: theme.accent,
              boxShadow: "0 4px 14px rgba(255,152,0,0.4)",
              mb: 3,
            }}
          />
          <Typography
            sx={{
              color: theme.textMuted,
              fontSize: "1.1rem",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Quick answers to common questions about our appliance repair services in Bengaluru.
          </Typography>
        </Box>

        {/* ================= FAQ CARD ================= */}
        <Box sx={sectionWrapper}>
          <Box sx={mainCard}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                elevation={0}
                disableGutters
                sx={{
                  borderRadius: "16px !important",
                  border: `1px solid ${theme.border}`,
                  mb: 2,
                  overflow: "hidden",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: theme.accent }} />}
                  sx={{
                    backgroundColor: theme.card,
                    px: 3,
                    py: 1.5,
                    "& .MuiTypography-root": { fontWeight: 700, color: theme.textMain },
                  }}
                >
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{ px: 3, pb: 3, pt: 0, backgroundColor: theme.card }}
                >
                  <Divider sx={{ mb: 2, opacity: 0.3 }} />
                  <Typography variant="body2" component="div" sx={{ color: theme.textMain, lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        {/* ================= SUPPORT CARD ================= */}
       
<Box sx={{ ...mainCard, mt: 6, textAlign: "center" }}>
  <SupportAgent sx={{ fontSize: 46, color: theme.accent, mb: 2 }} />
  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: theme.textMain }}>
    Still have questions?
  </Typography>
  <Typography variant="body2" sx={{ color: theme.textMuted, mb: 3 }}>
    Our support team is available for doorstep help.
  </Typography>
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "center" }}>
    <Box sx={{ display: "flex", gap: 1 }}>
      <Phone sx={{ fontSize: 18, color: theme.accent }} />
      <Typography fontWeight={700} sx={{ color: theme.textMain }}>
        Toll-Free: 1800 123 4567
      </Typography>
    </Box>
    <Box sx={{ display: "flex", gap: 1 }}>
      <Email sx={{ fontSize: 18, color: theme.accent }} />
      <Typography fontWeight={700} sx={{ color: theme.textMain }}>
        bengalururepairservices@gmail.com
      </Typography>
    </Box>
  </Box>
</Box>

        {/* ================= DISCLAIMER ================= */}
        <Typography
          variant="caption"
          sx={{ display: "block", textAlign: "center", mt: 4, color: theme.textMuted, lineHeight: 1.5 }}
        >
          <strong>Note:</strong> Bengaluru Repair Services is an independent provider. Brand names are used for reference only.
        </Typography>
      </Container>
    </Box>
  );
};

export default FaqsPage;
