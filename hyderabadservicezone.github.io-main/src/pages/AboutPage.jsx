import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Button,
  Container
} from "@mui/material";
import {
  CheckCircle,
  WhatsApp,
  Call,
  Engineering,
  WorkspacePremium,
  LocationOn,
  Verified
} from "@mui/icons-material";

const AboutPage = () => {
  const theme = {
    primary: "#ffffff", // white for headings
    accent: "#2563eb",
    bg: "#0f172a", // dark background
    card: "#ffffff", // microcards white replaced with gradient
    border: "#333",
    textMain: "#ffffff",
    textMuted: "#cbd5e1",
    success: "#10b981"
  };

  const container = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px"
  };

  const mainCard = {
    background: theme.card,
    borderRadius: "26px",
    padding: "32px",
    border: `1px solid ${theme.border}`,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  };

  const microCard = {
    background: "linear-gradient(145deg,#2563eb,#1d4ed8)", // blue gradient
    color: "#fff", // white text
    borderRadius: "18px",
    padding: "24px",
    textAlign: "center",
    height: "100%",
    border: "1px solid #1e40af",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 12px 28px rgba(37,99,235,0.4)",
      borderColor: "#0ea5e9"
    }
  };

  const iconBadge = (bg) => ({
    width: 52,
    height: 52,
    borderRadius: 16,
    background: bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    margin: "0 auto 14px auto",
    fontSize: 24
  });

  return (
    <Box sx={{ background: theme.bg, minHeight: "100vh", py: 10 }}>
      <Container sx={container}>

        {/* HERO */}
        <Box sx={{ textAlign: "center", mb: 10, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0) 70%)",
              zIndex: 0
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.3rem", md: "3rem" },
              color: theme.primary, // white
              mb: 2,
              position: "relative",
              zIndex: 1
            }}
          >
            Bengaluru Repair Services
          </Typography>

          <Box sx={{ width: 80, height: 4, background: theme.accent, borderRadius: 2, mx: "auto", mb: 2 }} />
          <Typography sx={{ color: theme.textMuted, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Reliable home appliance repair solutions across Bengaluru for over 5+ years.
          </Typography>
        </Box>

        {/* EXPERTISE CARD */}
        {/* EXPERTISE CARD */}
<Box sx={{ ...mainCard, mb: 6 }}>
  <Grid container spacing={4} alignItems="center">
    <Grid item xs={12} md={8}>
      <Box sx={iconBadge(theme.accent)}>
        <Engineering />
      </Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: "#000000", mb: 2 }} // Black text
      >
        Expertise You Can Trust
      </Typography>
      <Typography sx={{ color: "#000000", mb: 3 }}> 
        We started with a mission to remove the stress of appliance breakdowns. Today we provide expert repair services for Washing Machines, Air Conditioners, Refrigerators and more.
      </Typography>
      <Box sx={{ display: "flex", gap: 6 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: theme.accent }}>5+</Typography>
          <Typography variant="caption" sx={{ color: theme.textMuted }}>Years Experience</Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: theme.success }}>1000+</Typography>
          <Typography variant="caption" sx={{ color: theme.textMuted }}>Repairs Completed</Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
</Box>


        {/* WHY CHOOSE US */}
        <Box sx={{ mb: 6 }}>
          <Box sx={mainCard}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary, display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <WorkspacePremium sx={{ color: theme.accent }} /> Why Choose Us
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {[
                "Verified Technicians",
                "Genuine Spare Parts",
                "Transparent Pricing",
                "Same‑Day Support",
                "Doorstep Service",
                "Warranty Repairs"
              ].map((item, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Box sx={microCard}>
                    <CheckCircle sx={{ color: theme.success, fontSize: 22, mb: 1 }} />
                    <Typography sx={{ fontWeight: 700 }}>{item}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* SERVICE AREA CTA */}
        <Box sx={{ ...mainCard, background: "linear-gradient(135deg,#0f172a 0%, #1e293b 100%)", color: "#fff", textAlign: "center", mb: 6 }}>
          <LocationOn sx={{ fontSize: 42, mb: 1, opacity: 0.9 }} />
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Service Area</Typography>
          <Typography sx={{ opacity: 0.8, mb: 3 }}>
            We cover all locations across Bengaluru city.
          </Typography>
          <Box sx={{ height: "300px", borderRadius: "18px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)", mb: 3 }}>
            <iframe
              title="Bengaluru Service Area"
              src="https://www.google.com/maps?q=Bengaluru&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Box>
          <Divider sx={{ background: "rgba(255,255,255,0.15)", mb: 3 }} />
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
            <Button
              href="tel:+18001234567"
              startIcon={<Call />}
              sx={{
                background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                color: "white",
                px: 3,
                py: 1.2,
                borderRadius: "12px",
                fontWeight: 700,
                '&:hover': { background: "linear-gradient(135deg,#1d4ed8,#0ea5e9)" }
              }}
            >
              Toll-Free
            </Button>
            <Button
              href="https://wa.me/919542220772"
              startIcon={<WhatsApp />}
              sx={{
                background: theme.success,
                color: "white",
                px: 3,
                py: 1.2,
                borderRadius: "12px",
                fontWeight: 700,
                '&:hover': { background: '#047857' }
              }}
            >
              WhatsApp
            </Button>
          </Box>
        </Box>

        {/* TRUST BADGE */}
        <Box sx={{ textAlign: "center", pb: 2 }}>
          <Typography
            variant="caption"
            sx={{
              color: theme.textMuted,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1
            }}
          >
            <Verified sx={{ fontSize: 16 }} /> Trusted by 1000+ households in Bengaluru
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default AboutPage;
