import React, { useEffect } from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      id: 1,
      icon: process.env.PUBLIC_URL + "/icons/sameday.png",
      title: "Same-Day Service",
      description: "Most repairs in Bangalore are completed on the same day — minimizing downtime and restoring your appliance quickly."
    },
    {
      id: 2,
      icon: process.env.PUBLIC_URL + "/icons/technician1.png",
      title: "Verified & Skilled Technicians",
      description: "Our technicians are trained, background-verified, and equipped to handle all brands and models efficiently in Bangalore."
    },
    {
      id: 3,
      icon: process.env.PUBLIC_URL + "/icons/satisfaction.png",
      title: "Customer Satisfaction First",
      description: "Your satisfaction is our top priority. We ensure that the repair is completed to your expectations before we leave."
    },
    {
      id: 4,
      icon: process.env.PUBLIC_URL + "/icons/parts.png",
      title: "Genuine Spare Parts",
      description: "We use only original or brand-compatible parts to ensure long-lasting performance and manufacturer-level quality."
    },
    {
      id: 5,
      icon: process.env.PUBLIC_URL + "/icons/pricing.png",
      title: "Transparent Pricing",
      description: "No hidden charges. We provide clear upfront estimates and you pay only for what’s required — nothing extra."
    },
    {
      id: 6,
      icon: process.env.PUBLIC_URL + "/icons/doorstep.png",
      title: "Doorstep Service Across Bengaluru",
      description: "We come directly to your home and repair your appliances on-site, covering all major areas including Whitefield, Koramangala, BTM Layout, Marathahalli, and Electronic City."
    }
  ];

  return (
    <section
      id="why-choose-us"
      style={{
        background: 'linear-gradient(135deg, rgb(43, 62, 205) 0%, #030c50 50%, #223fc2 100%)',
        padding: '80px 0',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={8} color="#fff">
          <Typography variant="h4" fontWeight={800} gutterBottom>
            Why Choose Us
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg,#60a5fa,#3b82f6)',
              borderRadius: 2,
              margin: '0 auto',
              mb: 2,
              position: 'relative',
              '&::after': {
                content: '""',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#60a5fa',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              },
            }}
          />
          <Typography variant="subtitle1" color="rgba(255,255,255,0.85)" maxWidth={600} mx="auto">
            We're a Bangalore-based team with extensive experience in repairing all major home appliances — trusted by hundreds of happy customers across the city.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 4,
                  p: 4,
                  width: '100%',
                  maxWidth: 380,
                  minHeight: 320,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: '#fff', // White card
                  color: '#111827',    // Dark text
                  boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
                  }
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6 60%, #60a5fa 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3
                  }}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    style={{ width: 32, height: 32, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    loading="lazy"
                  />
                </Box>

                {/* Title */}
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.9 }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
