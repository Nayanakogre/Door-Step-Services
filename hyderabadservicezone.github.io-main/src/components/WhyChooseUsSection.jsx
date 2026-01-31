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
      description: "In most cases, we solve the problem on the same day — minimizing downtime and restoring your comfort fast."
    },
    {
      id: 2,
      icon: process.env.PUBLIC_URL + "/icons/technician1.png",
      title: "Verified & Skilled Technicians",
      description: "Our service professionals are trained, background-verified, and equipped to handle all brands and models efficiently."
    },
    {
      id: 3,
      icon: process.env.PUBLIC_URL + "/icons/satisfaction.png",
      title: "Customer Satisfaction First",
      description: "We stand by our service. Your satisfaction is our top priority, and we work until the job is done right."
    },
    {
      id: 4,
      icon: process.env.PUBLIC_URL + "/icons/parts.png",
      title: "Genuine Spare Parts",
      description: "We use 100% original parts for replacements to ensure long-lasting performance and manufacturer-level quality."
    },
    {
      id: 5,
      icon: process.env.PUBLIC_URL + "/icons/pricing.png",
      title: "Transparent Pricing",
      description: "Clear, upfront estimates with no hidden charges. You only pay for what's needed — nothing more."
    },
    {
      id: 6,
      icon: process.env.PUBLIC_URL + "/icons/doorstep.png",
      title: "Doorstep Service Across Hyderabad",
      description: "No need to transport your appliance. We come to your home and fix it on-site — quickly and reliably."
    }
  ];

  return (
    <section id="why-choose-us" style={{ background: '#fff', padding: '80px 0' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight={800} gutterBottom>
            Why choose us !
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              background: '#ffb400',
              borderRadius: 2,
              margin: '0 auto',
              mb: 2,
              position: 'relative',
              '&::after': {
                content: '""',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#ffb400',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              },
            }}
          />
          <Typography variant="subtitle1" color="text.secondary" maxWidth={600} mx="auto">
            We're a  Hyderabad-based team with hands-on experience in repairing all major home appliances — trusted by hundreds of happy customers.
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" sx={{ px: { xs: 2, sm: 3 } }}>
  {features.map((feature, index) => (
    <Grid
      item
      xs={12}       // 1 card on extra-small screens (<600px)
      sm={6}        // 2 cards on small screens (≥600px)
      md={4}        // 3 cards on medium+ screens (≥900px)
      key={feature.id}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)'
        }
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          p: 3,
          width: '100%',
          maxWidth: 400,
          minHeight: { xs: 280, sm: 320, md: 340 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          background: (theme) => 
            theme.palette.mode === 'dark' 
              ? 'rgba(30, 30, 30, 0.8)' 
              : 'rgba(255, 255, 255, 0.96)',
          boxShadow: (theme) => 
            theme.palette.mode === 'dark'
              ? '0 4px 24px rgba(255,180,0,0.05)'
              : '0 4px 24px rgba(255,180,0,0.10)',
          border: (theme) => 
            `1px solid ${
              theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.12)' 
                : 'rgba(255, 180, 0, 0.15)'
            }`,
          '&:hover': {
            boxShadow: (theme) => 
              theme.palette.mode === 'dark'
                ? '0 8px 32px rgba(255,180,0,0.12)'
                : '0 8px 32px rgba(255,180,0,0.18)',
            transform: 'translateY(-8px)'
          }
        }}
      >
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff9800 60%, #ffb347 100%)',
            boxShadow: '0 2px 12px rgba(255,152,0,0.10)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3
          }}
        >
          <img
            src={feature.icon}
            alt={feature.title}
            style={{ 
              width: 32, 
              height: 32, 
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)'
            }}
            loading="lazy"
          />
        </Box>
        <Typography 
          variant="h6" 
          fontWeight={700} 
          color="primary.main" 
          gutterBottom
          sx={{ textAlign: 'center' }}
        >
          {feature.title}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            fontSize: '1rem', 
            opacity: 0.9,
            textAlign: 'center',
            px: { xs: 1, sm: 0 }
          }}
        >
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
