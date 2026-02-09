import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import {
  FaShieldAlt,
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaUserShield,
} from "react-icons/fa";

const DisclaimerPage = () => {
  const theme = {
    primary: "#ffffff", // headings white
    accent: "#ff9800", // orange accent
    bg: "linear-gradient(0deg, rgb(43, 62, 205) 0%, #030c50 50%, #223fc2 100%)",
    card: "#ffffff",
    border: "#e2e8f0",
    textMain: "#1f2937",
    textMuted: "#cbd5e1",
  };

  const sectionWrapper = { maxWidth: "1200px", margin: "0 auto 60px auto" };

  const microCardStyle = {
    flex: 1,
    padding: "26px",
    borderRadius: "18px",
    background: theme.card,
    border: `1px solid ${theme.border}`,
    transition: "all 0.35s ease",
    textAlign: "center",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
      borderColor: theme.accent,
    },
  };

  const iconBadge = {
    width: 52,
    height: 52,
    borderRadius: "14px",
    background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 14px auto",
    color: "#fff",
    fontSize: "1.3rem",
    boxShadow: "0 6px 14px rgba(37,99,235,0.35)",
  };

  return (
    <Box sx={{ background: theme.bg, minHeight: "100vh", py: 10, px: 2 }}>
      <Container>

        {/* ================= HEADER ================= */}
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
              background:
                "radial-gradient(circle, rgba(255,152,0,0.18) 0%, rgba(255,152,0,0) 70%)",
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
            Disclaimer
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
            Transparency regarding our independent repair operations and brand
            usage policies.
          </Typography>
        </Box>

        {/* ================= SERVICE TERMS ================= */}
        <Box sx={sectionWrapper}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
            <FaUserShield style={{ color: theme.accent, fontSize: "1.8rem" }} />
            <Typography variant="h5" sx={{ fontWeight: 800, color: theme.primary }}>
              Service Terms
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              "Independent multi-brand repair specialists.",
              "Warranties valid for replaced parts only.",
              "Images used for illustrative purposes.",
              "100% private and secure customer data.",
            ].map((text, i) => (
              <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: "flex" }}>
                <Paper elevation={0} sx={microCardStyle}>
                  <Box sx={iconBadge}>
                    <FaCheckCircle />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.textMain,
                      fontWeight: 500,
                      lineHeight: 1.7,
                    }}
                  >
                    {text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ================= INDEPENDENT SERVICE ================= */}
        <Box sx={sectionWrapper}>
          <Paper elevation={0} sx={microCardStyle}>
            <Box sx={iconBadge}>
              <FaInfoCircle />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: theme.textMain }}>
              Independent Service Provider
            </Typography>
            <Typography
              sx={{
                color: theme.textMain,
                lineHeight: 1.8,
                maxWidth: "750px",
                margin: "0 auto",
              }}
            >
              <strong>Bengaluru Repair Services</strong> is an independent
              doorstep repair provider. We are not an authorized service center
              nor affiliated with any appliance manufacturer.
            </Typography>
          </Paper>
        </Box>

        {/* ================= BRAND NOTICE ================= */}
        {/* ================= BRAND NOTICE ================= */}
<Box sx={sectionWrapper}>
  <Paper elevation={0} sx={microCardStyle}>
    <Box sx={iconBadge}>
      <FaExclamationTriangle />
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: theme.textMain }}>
      Brand & Trademark Notice
    </Typography>
    <Typography
      sx={{
        color: theme.textMain,  
        lineHeight: 1.8,
        maxWidth: "780px",
        margin: "0 auto",
        fontSize: "0.95rem",
      }}
    >
      Logos, brand names, and trademarks such as LG, Samsung, Whirlpool,
      Bosch, etc. belong to their respective owners. Their usage is only
      for service identification and does not imply official partnership
      or endorsement.
    </Typography>
  </Paper>
</Box>


      </Container>
    </Box>
  );
};

export default DisclaimerPage;
