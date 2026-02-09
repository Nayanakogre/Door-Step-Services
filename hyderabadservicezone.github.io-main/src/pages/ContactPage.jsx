import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaClock,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

const ContactPage = () => {
  const theme = {
    primary: "#ffffff",
    accent: "#2563eb",
    bg: "linear-gradient(0deg, #0f172a 0%, #1e293b 50%, #2563eb 100%)",
    card: "#ffffff",
    border: "#e2e8f0",
    textMain: "#1f2937",
    textMuted: "#cbd5e1",
  };

  const sectionWrapper = { maxWidth: "1200px", margin: "0 auto 60px auto" };
  const mainCard = {
    backgroundColor: theme.card,
    borderRadius: "26px",
    padding: "32px",
    border: `1px solid ${theme.border}`,
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    height: "100%",
    transition: "0.25s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
    },
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
            Contact Support
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
          <Typography sx={{ color: theme.textMuted, fontSize: "1.1rem", maxWidth: "640px", margin: "0 auto" }}>
            Fast, reliable doorstep appliance repair services across Bengaluru.
          </Typography>
        </Box>

        {/* ================= CONTACT CARDS ================= */}
        <Box sx={sectionWrapper}>
          <Grid container spacing={3}>

            {/* Phone */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={mainCard}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box sx={iconBadge("linear-gradient(135deg,#2563eb,#1d4ed8)")}>
                    <FaPhoneAlt />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Toll-Free
                  </Typography>
                </Box>
                <Typography sx={{ color: theme.textMuted, mb: 2 }}>
                  Speak directly with our service experts.
                </Typography>
                <Typography sx={{ fontWeight: 700, color: theme.accent }}>
                  1800 123 4567
                </Typography>
              </Paper>
            </Grid>

            {/* Email */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={mainCard}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box sx={iconBadge("linear-gradient(135deg,#0ea5e9,#0284c7)")}>
                    <FaEnvelope />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Email Support
                  </Typography>
                </Box>
                <Typography sx={{ color: theme.textMuted, mb: 2 }}>
                  Send us your service queries anytime.
                </Typography>
                <Typography sx={{ fontWeight: 700, color: theme.textMain }}>
                  bengalururepairservices@gmail.com
                </Typography>
              </Paper>
            </Grid>

            {/* Website */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={mainCard}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box sx={iconBadge("linear-gradient(135deg,#6366f1,#4f46e5)")}>
                    <FaGlobe />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Website
                  </Typography>
                </Box>
                <Typography sx={{ color: theme.textMuted, mb: 2 }}>
                  Book services online easily.
                </Typography>
                <Typography sx={{ fontWeight: 700 }}>
                  www.bengalururepairservices.com
                </Typography>
              </Paper>
            </Grid>

          </Grid>
        </Box>

        {/* ================= AVAILABILITY + MAP ================= */}
        <Box sx={sectionWrapper}>
          <Grid container spacing={3}>

            {/* Availability */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={mainCard}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box sx={iconBadge("linear-gradient(135deg,#10b981,#059669)")}>
                    <FaClock />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Open 24 / 7
                  </Typography>
                </Box>
                <Typography sx={{ color: theme.textMuted }}>
                  Weekends & holidays included for uninterrupted service.
                </Typography>
              </Paper>
            </Grid>

            {/* Map */}
            <Grid item xs={12} md={8}>
              <Paper elevation={0} sx={{ ...mainCard, p: 0, overflow: "hidden" }}>
                <Box sx={{ p: 3, pb: 0, display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={iconBadge("linear-gradient(135deg,#2563eb,#1d4ed8)")}>
                    <FaMapMarkedAlt />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Service Coverage Area
                  </Typography>
                </Box>
                <Box sx={{ height: 320, mt: 2 }}>
                  <iframe
                    title="Bengaluru Service Area"
                    src="https://www.google.com/maps?q=Bengaluru&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </Box>
              </Paper>
            </Grid>

          </Grid>
        </Box>

        {/* ================= TRUST + DISCLAIMER ================= */}
        <Box sx={sectionWrapper}>
          <Paper elevation={0} sx={{ ...mainCard, textAlign: "center" }}>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              color: theme.accent,
              fontWeight: 700,
              mb: 2,
            }}>
              <FaShieldAlt /> 100% Genuine Spare Parts
            </Box>
            <Box sx={{
              mt: 2,
              p: 2,
              borderRadius: "14px",
              background: "#1e293b",
              color: "#fff",
              border: `1px dashed ${theme.accent}`,
              fontSize: "0.85rem",
            }}>
              <strong>Disclaimer:</strong> Bengaluru Repair Services is an
              independent service provider. Brand names are used only for
              identification purposes.
            </Box>
          </Paper>
        </Box>

      </Container>
    </Box>
  );
};

export default ContactPage;
