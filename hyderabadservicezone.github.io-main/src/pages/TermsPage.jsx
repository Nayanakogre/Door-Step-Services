import React from "react";
import { Box, Typography, Divider, Paper, Container, Grid } from "@mui/material";
import { FaTools, FaMoneyBillWave, FaInfoCircle, FaCheckCircle } from "react-icons/fa";

const TermsPage = () => {
  const themeColors = {
    primaryGradient: "linear-gradient(135deg, #2563eb, #1d4ed8, #0ea5e9)",
    cardBg: "#ffffff",
    cardBorder: "#e2e8f0",
    textMain: "#1e293b",
    textMuted: "#64748b",
    success: "#10b981",
  };

  /* ---------- MICRO CARD ---------- */
  const microCardStyle = {
    flex: 1,
    padding: "26px",
    borderRadius: "18px",
    background: themeColors.cardBg,
    border: `1px solid ${themeColors.cardBorder}`,
    transition: "all 0.35s ease",
    textAlign: "center",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
      borderColor: "#60a5fa",
    },
  };

  /* ---------- ICON BADGE ---------- */
  const iconBadge = {
    width: 52,
    height: 52,
    borderRadius: "14px",
    background: themeColors.primaryGradient,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 14px auto",
    color: "#fff",
    fontSize: "1.3rem",
    boxShadow: "0 6px 14px rgba(37,99,235,0.35)",
  };

  /* ---------- GRID (4 IN SINGLE ROW) ---------- */
  const TermGrid = ({ items }) => (
    <Grid container spacing={3}>
      {items.map((text, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Paper elevation={3} sx={microCardStyle}>
            <Box sx={iconBadge}>
              <FaCheckCircle />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: themeColors.textMain,
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
    <Box
      sx={{
        minHeight: "100vh",
        py: 10,
        px: 2,
        background: "linear-gradient(180deg, rgb(43, 62, 205) 0%, #030c50 50%, #223fc2 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 10, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "280px",
              height: "280px",
              background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0) 70%)",
              zIndex: 0,
            }}
          />
          <Typography
  variant="h2"
  sx={{
    fontWeight: 900,
    fontSize: { xs: "2.3rem", md: "3.2rem" },
    color: "#ffffff",           // <-- Changed to white
    letterSpacing: "-0.04em",
    mb: 2,
    position: "relative",
    zIndex: 1,
  }}
>
  Terms & Conditions
</Typography>

          <Box
            sx={{
              width: "130px",
              height: "6px",
              margin: "0 auto",
              borderRadius: "30px",
              background: themeColors.primaryGradient,
              boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
              mb: 3,
            }}
          />
          <Typography
            sx={{
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.7,
              color: "#cbd5e1",
              fontSize: "1.1rem",
            }}
          >
            Please read our service policies carefully before booking. These terms ensure transparent pricing, professional conduct, and customer trust at every step.
          </Typography>
        </Box>

        {/* SERVICE & BOOKING */}
        <Box sx={{ mb: 8 }}>
          <Paper
            sx={{
              background: "#ffffff",
              color: "#1e293b",
              p: 4,
              borderRadius: 4,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <Box sx={{ color: "#2563eb", fontSize: "1.8rem" }}>
                <FaTools />
              </Box>
              <Typography variant="h5" fontWeight={800}>
                Service & Booking
              </Typography>
            </Box>
            <TermGrid
              items={[
                "Doorstep repair for all major home appliances.",
                "Services available only within Bengaluru city.",
                "Appointments confirmed via phone or WhatsApp.",
                "Independent verified technicians handle repairs.",
              ]}
            />
          </Paper>
        </Box>

        {/* PAYMENTS & FEES */}
        <Box sx={{ mb: 8 }}>
          <Paper
            sx={{
              background: "#ffffff",
              color: "#1e293b",
              p: 4,
              borderRadius: 4,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <Box sx={{ color: "#10b981", fontSize: "1.8rem" }}>
                <FaMoneyBillWave />
              </Box>
              <Typography variant="h5" fontWeight={800}>
                Payments & Fees
              </Typography>
            </Box>
            <TermGrid
              items={[
                "Inspection charges ₹199 if service is declined.",
                "Spare parts billed separately from labor.",
                "Payments via Cash, UPI, Google Pay, PhonePe.",
                "Cancel at least 1 hour before visit.",
              ]}
            />
          </Paper>
        </Box>

        {/* LIABILITY */}
        <Box sx={{ mb: 8 }}>
          <Paper
            sx={{
              background: "#ffffff",
              color: "#1e293b",
              p: 4,
              borderRadius: 4,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <Box sx={{ color: "#f59e0b", fontSize: "1.8rem" }}>
                <FaInfoCircle />
              </Box>
              <Typography variant="h5" fontWeight={800}>
                Liability & Identity
              </Typography>
            </Box>
            <Typography sx={{ mb: 2, fontWeight: 500, lineHeight: 1.8 }}>
              Bengaluru Repair Services is an independent appliance repair provider and is not affiliated with any appliance brand. Logos are used strictly for identification purposes.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography sx={{ fontStyle: "italic", color: "#64748b" }}>
              We are not responsible for pre-existing damage, manufacturer defects, or electrical surge issues.
            </Typography>
          </Paper>
        </Box>

        {/* FOOTER NOTE */}
        <Box sx={{ textAlign: "center", mt: 10, pt: 4, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          <Typography sx={{ color: "#cbd5e1" }} variant="caption">
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

export default TermsPage;
