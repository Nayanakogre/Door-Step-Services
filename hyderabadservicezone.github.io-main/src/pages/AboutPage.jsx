import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, Divider } from '@mui/material';
import { 
  CheckCircle, 
  WhatsApp, 
  Call, 
  Engineering, 
  WorkspacePremium, 
  HistoryEdu,
  LocationOn,
  Verified
} from '@mui/icons-material';

const AboutPage = () => {
  const theme = {
    primary: '#0f172a', // Deep Slate
    accent: '#2563eb',  // Trust Blue
    bg: '#f8fafc',
    card: '#ffffff',
    border: '#e2e8f0',
    textMain: '#1e293b',
    textMuted: '#64748b',
    success: '#059669',
  };

  const sectionWrapper = {
    maxWidth: '650px',
    margin: '0 auto 32px auto',
  };

  const cardStyle = {
    backgroundColor: theme.card,
    borderRadius: '24px',
    padding: '32px',
    border: `1px solid ${theme.border}`,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  };

  const iconCircle = (bg) => ({
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: bg,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.5rem',
    mb: 2
  });

  return (
    <Box sx={{ backgroundColor: theme.bg, minHeight: '100vh', py: 8, px: 2 }}>
      
      {/* 1. HEADER & INTRO */}
      <Box sx={{ textAlign: 'center', mb: 6, maxWidth: 650, mx: 'auto' }}>
        <Box sx={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: 1, 
          px: 2, 
          py: 0.5, 
          borderRadius: '100px', 
          backgroundColor: '#dbeafe', 
          color: theme.accent,
          mb: 2
        }}>
          <HistoryEdu sx={{ fontSize: 14 }} />
          <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
            Our Story
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 800, color: theme.primary, mb: 1, letterSpacing: '-0.02em' }}>
          Bengaluru Repair Services
        </Typography>
        <Typography sx={{ color: theme.textMuted, fontSize: '1.1rem' }}>
          Providing reliable home appliance solutions across Bengaluru for over 5 years.
        </Typography>
      </Box>

      {/* 2. THE MISSION CARD */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Box sx={iconCircle(theme.accent)}><Engineering /></Box>
          <Typography variant="h5" sx={{ fontWeight: 700, color: theme.primary, mb: 2 }}>
            Expertise You Can Trust
          </Typography>
          <Typography variant="body1" sx={{ color: theme.textMain, lineHeight: 1.8, mb: 2 }}>
            We started with a simple mission: to eliminate the stress of appliance breakdowns for Bengaluru residents. 
            Today, we are a leading independent service provider for <strong>Washing Machines, ACs, Refrigerators, and more</strong>.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, mt: 3 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, color: theme.accent }}>5+</Typography>
              <Typography variant="caption" sx={{ color: theme.textMuted, textTransform: 'uppercase', fontWeight: 700 }}>Years Exp</Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, color: theme.success }}>1000+</Typography>
              <Typography variant="caption" sx={{ color: theme.textMuted, textTransform: 'uppercase', fontWeight: 700 }}>Repairs Done</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 3. WHY CHOOSE US (UX: The List Flow) */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            <WorkspacePremium sx={{ color: theme.accent }} /> Why Choose Our Service?
          </Typography>
          
          <List disablePadding>
            {[
              { title: 'Verified Technicians', desc: 'Experienced & background-checked professionals.' },
              { title: 'Genuine Parts', desc: 'We only use quality, compatible, and tested components.' },
              { title: 'Transparent Pricing', desc: 'Honest ₹199 inspection with no hidden fees.' },
              { title: 'Same-Day Support', desc: 'Quick doorstep visits across all Bengaluru localities.' }
            ].map((item, i) => (
              <React.Fragment key={i}>
                <ListItem sx={{ px: 0, py: 2, alignItems: 'flex-start', gap: 2 }}>
                  <CheckCircle sx={{ color: theme.success, mt: 0.5 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: theme.textMain }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: theme.textMuted }}>{item.desc}</Typography>
                  </Box>
                </ListItem>
                {i !== 3 && <Divider sx={{ opacity: 0.5 }} />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Box>

      {/* 4. SERVICE AREA & CTA */}
      <Box sx={sectionWrapper}>
        <Box sx={{ ...cardStyle, background: `linear-gradient(135deg, ${theme.primary} 0%, #1e293b 100%)`, color: 'white', textAlign: 'center' }}>
          <LocationOn sx={{ fontSize: 40, mb: 1, opacity: 0.8 }} />
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Service Area</Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
            We serve the entire Bengaluru city and surrounding nearby localities.
          </Typography>
          
          <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)', mb: 3 }} />
          
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Ready to book a technician?</Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Box 
              component="a" 
              href="tel:+919542220772"
              sx={{ 
                display: 'flex', alignItems: 'center', gap: 1, px: 3, py: 1.5, 
                borderRadius: '12px', backgroundColor: theme.accent, color: 'white', 
                textDecoration: 'none', fontWeight: 700, transition: '0.2s',
                '&:hover': { backgroundColor: '#1d4ed8' }
              }}
            >
              <Call fontSize="small" /> Call Now
            </Box>
            <Box 
              component="a" 
              href="https://wa.me/919542220772"
              sx={{ 
                display: 'flex', alignItems: 'center', gap: 1, px: 3, py: 1.5, 
                borderRadius: '12px', backgroundColor: theme.success, color: 'white', 
                textDecoration: 'none', fontWeight: 700, transition: '0.2s',
                '&:hover': { backgroundColor: '#047857' }
              }}
            >
              <WhatsApp fontSize="small" /> WhatsApp
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 5. FINAL TRUST BADGE */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="caption" sx={{ color: theme.textMuted, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Verified sx={{ fontSize: 16 }} /> Trusted by 1000+ Households in Bengaluru
        </Typography>
      </Box>

    </Box>
  );
};

export default AboutPage;
