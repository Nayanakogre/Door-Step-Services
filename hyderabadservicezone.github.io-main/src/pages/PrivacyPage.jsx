import React from "react";
import { Box, Typography, Divider, Paper, Container, Grid } from "@mui/material";
import { FaShieldAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa";

const PrivacyPage = () => {
  const theme = {
    primary: "#ffffff", // white headings
    accent: "#ff9800",  // orange accent for icons/lines
    bg: "linear-gradient(0deg, rgb(43, 62, 205) 0%, #030c50 50%, #223fc2 100%)", // background
    card: "#ffffff",    // white microcards
    border: "#e2e8f0",
    textMain: "#1f2937",
    textMuted: "#cbd5e1",
    success: "#10b981",
  };

  const sectionWrapper = {
    maxWidth: "1200px",
    margin: "0 auto 60px auto",
  };

  const mainCategoryCard = {
    backgroundColor: theme.card,
    borderRadius: "26px",
    padding: "36px",
    border: `1px solid ${theme.border}`,
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  };

  const microCardStyle = {
    flex: 1,
    padding: "26px",
    borderRadius: "18px",
    background: "#ffffff",
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

  const TermGrid = ({ items }) => (
    <Grid container spacing={2} sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}>
      {items.map((text, i) => (
        <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: "flex" }}>
          <Paper elevation={0} sx={microCardStyle}>
            <Box sx={iconBadge}>
              <FaCheckCircle />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: theme.textMain,
                lineHeight: 1.7,
                fontWeight: 500,
                fontSize: "0.96rem",
              }}
            >
              {text}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ background: theme.bg, minHeight: "100vh", py: 10, px: 2 }}>
      <Container>
        {/* ================= HEADER ================= */}
        <Box sx={{ textAlign: "center", mb: 10, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "280px",
              height: "280px",
              background:
                "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0) 70%)",
              zIndex: 0,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.3rem", md: "3.2rem" },
              color: "#ffffff",
              letterSpacing: "-0.04em",
              position: "relative",
              zIndex: 1,
              mb: 2,
            }}
          >
            Privacy Policy
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
            Your privacy matters to us. This policy explains how
            Bengaluru Repair Services collects, uses, and protects
            your personal information.
          </Typography>
        </Box>

        {/* ================= DATA PROTECTION ================= */}
        <Box sx={sectionWrapper}>
          <Box sx={mainCategoryCard}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <Box sx={{ color: theme.accent, fontSize: "1.8rem" }}>
                <FaShieldAlt />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: theme.textMain }}>
                Data Protection
              </Typography>
            </Box>
            <TermGrid
              items={[
                "Your personal details are kept fully confidential.",
                "Data is shared only with assigned technicians.",
                "We never sell data to marketing agencies.",
                "All service records are securely maintained.",
              ]}
            />
          </Box>
        </Box>

        {/* ================= CONTACT ================= */}
        <Box sx={sectionWrapper}>
          <Box sx={mainCategoryCard}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <Box sx={{ color: theme.success, fontSize: "1.8rem" }}>
                <FaEnvelope />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: theme.textMain }}>
                Contact & Support
              </Typography>
            </Box>
            <Typography
              sx={{
                color: theme.textMain,
                fontWeight: 500,
                lineHeight: 1.9,
                mb: 2,
              }}
            >
              If you have any privacy concerns or data-related
              queries, feel free to contact our support team.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontWeight: 600 }}>
                  📧 Email: bengalururepairservices@gmail.com
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontWeight: 600 }}>
                  📞 Toll-Free: 1800 123 4567
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* ================= FOOTER ================= */}
        <Box sx={{ textAlign: "center", mt: 10, pt: 4, borderTop: `1px solid ${theme.border}` }}>
          <Typography variant="caption" sx={{ color: theme.textMuted }}>
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-IN", {
              month: "long",
              year: "numeric",
            })}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPage;
