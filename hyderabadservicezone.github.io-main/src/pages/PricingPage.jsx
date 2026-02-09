import React from "react";
import { Box, Typography, Container, Grid, Paper, Divider, List, ListItem } from "@mui/material";
import { CurrencyRupee, ReceiptLong, WorkspacePremium, CheckCircle, Info, Warning } from "@mui/icons-material";

const PricingPage = () => {
  const theme = {
    primary: "#ffffff", // headings white
    accent: "#ff9800",  // orange accent
    bg: "linear-gradient(0deg, rgb(43, 62, 205) 0%, #030c50 50%, #223fc2 100%)",
    card: "#ffffff",
    border: "#e2e8f0",
    textMain: "#1f2937",
    textMuted: "#cbd5e1",
    success: "#10b981",
  };

  const services = [
    { name: "Doorstep Inspection", price: "₹199+" },
    { name: "Washing Machine Repair", price: "₹199+" },
    { name: "Refrigerator Repair", price: "₹199+" },
    { name: "Microwave Oven Repair", price: "₹199+" },
    { name: "Air Conditioner Repair", price: "₹199+" },
    { name: "Dishwasher Repair", price: "₹199+" },
    { name: "Air Cooler Repair", price: "₹199+" },
  ];

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
            background: "radial-gradient(circle, rgba(255,152,0,0.18) 0%, rgba(255,152,0,0) 70%)",
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
            Service Pricing
          </Typography>
          <Box sx={{
            width: "130px",
            height: "6px",
            margin: "0 auto",
            borderRadius: "30px",
            background: theme.accent,
            boxShadow: "0 4px 14px rgba(255,152,0,0.4)",
            mb: 3,
          }}/>
          <Typography sx={{ color: theme.textMuted, fontSize: "1.1rem", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
            Affordable and transparent doorstep appliance repair charges across Bengaluru.
          </Typography>
        </Box>

        {/* ================= PRICING LIST ================= */}
        <Box sx={sectionWrapper}>
          <Box sx={mainCard}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <Box sx={iconBadge("linear-gradient(135deg,#2563eb,#1d4ed8)")}>
                <ReceiptLong />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800, color: theme.textMain }}>
                  Standard Rates
                </Typography>
                <Typography sx={{ color: theme.textMuted }}>
                  Labor charges only — spare parts extra.
                </Typography>
              </Box>
            </Box>

            <List disablePadding>
              {services.map((service, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={{ px: 0, py: 2.2, display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: 500, color: theme.textMain }}>{service.name}</Typography>
                    <Typography sx={{ fontWeight: 800, color: theme.accent }}>{service.price}</Typography>
                  </ListItem>
                  {index !== services.length - 1 && <Divider sx={{ opacity: 0.6 }} />}
                </React.Fragment>
              ))}
            </List>

            <Box sx={{ mt: 4, p: 2.2, borderRadius: "14px", backgroundColor: "#f1f5f9", display: "flex", gap: 1.5, alignItems: "center" }}>
              <Info sx={{ color: theme.textMuted }} />
              <Typography variant="caption" sx={{ color: theme.textMuted, lineHeight: 1.6 }}>
                Inspection fee applies if repair is not proceeded after diagnosis.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ================= INCLUDED BENEFITS ================= */}
        <Box sx={sectionWrapper}>
          <Box sx={mainCard}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <Box sx={iconBadge("linear-gradient(135deg,#10b981,#059669)")}>
                <WorkspacePremium />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: theme.textMain }}>
                What’s Included
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {[
                "Comprehensive diagnosis by senior technicians",
                "30‑Day labor warranty",
                "High‑quality spare parts",
                "Doorstep service across Bengaluru",
              ].map((text, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Paper elevation={0} sx={{
                    p: 3,
                    borderRadius: "18px",
                    textAlign: "center",
                    border: `1px solid ${theme.border}`,
                    background: theme.card,
                    "&:hover": { transform: "translateY(-6px)", boxShadow: "0 14px 30px rgba(0,0,0,0.08)", borderColor: theme.accent }
                  }}>
                    <CheckCircle sx={{ color: theme.success, fontSize: 28, mb: 1 }} />
                    <Typography variant="body2" sx={{ color: theme.textMain, fontWeight: 500 }}>{text}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* ================= IMPORTANT NOTICE ================= */}
        <Box sx={sectionWrapper}>
          <Box sx={{ ...mainCard, backgroundColor: "#fffbeb", border: `1px solid #fde68a` }}>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Warning sx={{ color: "#ca8a04" }} />
              <Typography variant="h6" sx={{ fontWeight: 800, color: "#92400e" }}>Important Notice</Typography>
            </Box>
            <Typography sx={{ color: "#a16207", lineHeight: 1.8 }}>
              Spare parts costs are not included in labor charges. Final pricing
              depends on appliance brand and model. A full quote will be shared
              after inspection.
            </Typography>
          </Box>
        </Box>

        {/* ================= FOOTER ================= */}
        <Box sx={{ textAlign: "center", mt: 10, pt: 4, borderTop: `1px solid ${theme.border}` }}>
          <Typography variant="caption" sx={{ color: theme.textMuted }}>
            Need a custom quote? Toll-Free: 1800 123 4567
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default PricingPage;
