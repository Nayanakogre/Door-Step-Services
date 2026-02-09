import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaTools,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

const WarrantyPage = () => {
  const theme = {
    primary: "#ffffff", // headings white
    accent: "#2563eb",
    bg: "linear-gradient(0deg, rgb(43, 62, 205) 0%, #030c50 50%, #223fc2 100%)",
    card: "#ffffff",
    border: "#e2e8f0",
    textMain: "#1f2937",
    textMuted: "#cbd5e1",
    success: "#10b981",
    error: "#ef4444",
  };

  const sectionWrapper = { maxWidth: "1200px", margin: "0 auto 60px auto" };

  const mainCard = {
    backgroundColor: theme.card,
    borderRadius: "26px",
    padding: "36px",
    border: `1px solid ${theme.border}`,
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  };

  const iconBadge = (gradient) => ({
    width: 52,
    height: 52,
    borderRadius: "14px",
    background: gradient,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "1.3rem",
    boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
  });

  return (
    <Box sx={{ background: theme.bg, minHeight: "100vh", py: 10, px: 2 }}>
      <Container>

        {/* ================= HEADER ================= */}
        <Box sx={{ textAlign: "center", mb: 10, position: "relative" }}>
          <Box sx={{
            position: "absolute",
            top: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "280px",
            height: "280px",
            background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0) 70%)",
            zIndex: 0,
          }}/>
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
            Warranty Policy
          </Typography>
          <Box sx={{
            width: "130px",
            height: "6px",
            margin: "0 auto",
            borderRadius: "30px",
            background: theme.accent,
            boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
            mb: 3,
          }}/>
          <Typography sx={{ color: theme.textMuted, fontSize: "1.1rem", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
            Our commitment to quality repairs and reliable appliance service support.
          </Typography>
        </Box>

        {/* ================= WHAT'S COVERED ================= */}
        <Box sx={sectionWrapper}>
          <Box sx={mainCard}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <Box sx={iconBadge("linear-gradient(135deg,#10b981,#059669)")}>
                <FaCheckCircle />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: theme.textMain }}>
                What’s Covered
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {[
                { icon: <FaTools />, title: "Labor Warranty", desc: "30‑day limited warranty on repair labor. If the same issue reoccurs within this period, we’ll fix it free of cost.", gradient: "linear-gradient(145deg,#ffffff,#f0fdf4)" },
                { icon: <FaTools />, title: "Spare Parts Warranty", desc: "Spare parts include a 3‑6 month warranty depending on the component and manufacturer terms.", gradient: "linear-gradient(145deg,#ffffff,#f0fdf4)" },
              ].map((item, i) => (
                <Grid item xs={12} md={6} key={i}>
                  <Paper elevation={0} sx={{
                    p: 3,
                    borderRadius: "18px",
                    border: `1px solid ${theme.border}`,
                    background: item.gradient,
                    height: "100%",
                  }}>
                    <Typography sx={{ fontWeight: 700, color: theme.accent, mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
                      {item.icon} {item.title}
                    </Typography>
                    <Typography sx={{ color: theme.textMain, lineHeight: 1.7 }}>
                      {item.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* ================= EXCLUSIONS ================= */}
        <Box sx={sectionWrapper}>
          <Box sx={mainCard}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <Box sx={iconBadge("linear-gradient(135deg,#ef4444,#dc2626)")}>
                <FaTimesCircle />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: theme.textMain }}>
                Exclusions
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {[
                "Damage due to voltage fluctuations or power surges",
                "Issues unrelated to repaired components",
                "Third-party technician interference",
                "Physical or water damage",
                "External plumbing or wiring faults",
                "Customer misuse or negligence",
              ].map((text, i) => (
                <Grid item xs={12} md={4} key={i}>
                  <Paper elevation={0} sx={{
                    p: 2.5,
                    height: "100%",
                    minHeight: "110px",
                    borderRadius: "16px",
                    border: `1px solid ${theme.border}`,
                    background: "linear-gradient(145deg,#ffffff,#fef2f2)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    transition: "0.25s",
                    "&:hover": { transform: "translateY(-4px)", boxShadow: "0 8px 18px rgba(0,0,0,0.08)" },
                  }}>
                    <FaExclamationTriangle style={{ color: theme.error, marginTop: 4, fontSize: "1.1rem" }} />
                    <Typography sx={{ color: theme.textMain, fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>
                      {text}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* ================= CLAIM SECTION ================= */}
        <Box sx={sectionWrapper}>
          <Box sx={{
            ...mainCard,
            background: "linear-gradient(135deg,#0f172a 0%,#1e293b 100%)",
            color: "#fff",
          }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
              How to Claim Warranty
            </Typography>
            <Typography sx={{ opacity: 0.85, mb: 3 }}>
              Contact us within the warranty period with your service bill.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <FaPhoneAlt color="#60a5fa" />
                <Typography sx={{ fontWeight: 700 }}>Toll-Free: 1800 123 4567</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <FaEnvelope color="#60a5fa" />
                <Typography sx={{ fontWeight: 700 }}>bengalururepairservices@gmail.com</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ================= FOOTER ================= */}
        <Box sx={{ textAlign: "center", mt: 10, pt: 4, borderTop: `1px solid ${theme.border}` }}>
          <Typography variant="caption" sx={{ color: theme.textMuted, display: "inline-flex", gap: 1 }}>
            <FaInfoCircle /> Independent warranty by Bengaluru Repair Services
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default WarrantyPage;
