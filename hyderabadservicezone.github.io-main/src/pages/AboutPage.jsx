import React from 'react';
import { Box, Typography, Grid, Paper} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

const AboutPage = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image-col">
            <img
              src={process.env.PUBLIC_URL+"/technician.png"}
              alt="Professional appliance technician at work"
              className="about-image"
              loading="lazy"
            />
          </div>
          <div className="about-details-col">
            <div className="about-badge">About Hyderabad Service Zone</div>
            <h2 className="about-title">
              Professional Appliance Repair Services You Can Count On
            </h2>
            <div className="about-desc">
              <p>
                At <span className="about-highlight">Hyderabad Service Zone</span>, we
                provide fast, reliable, and affordable repair services for all
                major home appliances — including washing machines, ACs, fridges,
                microwaves, dishwashers, and air coolers.
              </p>
              <p>
                Our trained technicians offer{' '}
                <span className="about-highlight">doorstep service across Hyderabad</span>,
                with transparent pricing and a customer-first approach you can trust.
              </p>
            </div>
            <div className="about-stats-row">
              <div className="about-stat">
                <div className="about-stat-value">5+ Years</div>
                <div className="about-stat-label">Years Experience in Home<br />Appliance Repairs</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">700+</div>
                <div className="about-stat-label">Successfully Repairs Finished<br />in Hyderabad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Why Choose Us Section */}
      <Box sx={{ background: '#fff', py: { xs: 5, md: 8 }, px: 2, maxWidth: 1100, mx: 'auto', borderRadius: 4, boxShadow: 2, mt: 5 }}>
        <Typography variant="h4" fontWeight={800} align="center" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                1000+ Happy Customers
              </Typography>
              <Typography variant="body1">across Hyderabad</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                Same-day Doorstep Service
              </Typography>
              <Typography variant="body1">(subject to availability)</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                ₹199 Inspection Charges
              </Typography>
              <Typography variant="body1">Lowest starting price</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
                <CheckCircleIcon color="success" sx={{ verticalAlign: 'middle', mr: 1 }} />
                Only Genuine Spare Parts
              </Typography>
              <Typography variant="body2">We use only original, quality parts</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
                <CheckCircleIcon color="success" sx={{ verticalAlign: 'middle', mr: 1 }} />
                Transparent Pricing
              </Typography>
              <Typography variant="body2">No hidden fees</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
                <CheckCircleIcon color="success" sx={{ verticalAlign: 'middle', mr: 1 }} />
                Skilled & Verified Technicians
              </Typography>
              <Typography variant="body2">Background-checked, experienced staff</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem' }}>
            We're committed to building long-term trust by providing quality service, clear communication, and full transparency in every interaction.
          </Typography>
          <Typography variant="h6" fontWeight={700} sx={{ mt: 2 }}>
            📍 Service Area: We serve customers across Hyderabad ,AP,Telangana AND nearby areas.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <b>Need Help?</b> <br />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <CallIcon color="primary" sx={{ mr: 1 }} />
              <a href="tel:+919542220772" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 600 }}>Call Us</a>
            </span>
            {' '}or{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <WhatsAppIcon color="success" sx={{ mr: 1 }} />
              <a href="https://wa.me/919542220772" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>WhatsApp Us</a>
            </span>
            <br />Affordable & Trusted by locals.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage; 