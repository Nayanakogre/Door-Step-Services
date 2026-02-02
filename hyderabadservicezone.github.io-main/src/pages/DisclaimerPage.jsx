import React from 'react';
import { Typography, Box, List, ListItem, ListItemIcon } from '@mui/material';
import { FaShieldAlt, FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaUserShield } from 'react-icons/fa';

const DisclaimerPage = () => {
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
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    background: bg,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.2rem',
    flexShrink: 0,
  });

  return (
    <Box sx={{ backgroundColor: theme.bg, minHeight: '100vh', py: 8, px: 2 }}>
      
      {/* 1. HERO HEADER - Same style as FAQ/Contact */}
      <Box sx={{ textAlign: 'center', mb: 6, maxWidth: 650, mx: 'auto' }}>
        <Box sx={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: 1, 
          px: 2, 
          py: 0.5, 
          borderRadius: '100px', 
          backgroundColor: '#fee2e2', 
          color: '#dc2626',
          mb: 2
        }}>
          <FaShieldAlt fontSize="14px" />
          <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
            Official Notice
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 800, color: theme.primary, mb: 1, letterSpacing: '-0.02em' }}>
          Disclaimer
        </Typography>
        <Typography sx={{ color: theme.textMuted, fontSize: '1.1rem' }}>
          Transparency regarding our independent service operations.
        </Typography>
      </Box>

      {/* 2. IDENTITY CARD */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Box sx={iconCircle(theme.accent)}><FaInfoCircle /></Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary }}>Independent Operation</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>Who we are and how we serve you.</Typography>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ color: theme.textMain, lineHeight: 1.8, mb: 2 }}>
            <strong>Bengaluru Repair Service</strong> is a locally owned, independent provider of home appliance maintenance. 
          </Typography>
          <Typography variant="body2" sx={{ color: theme.textMuted, lineHeight: 1.7 }}>
            We specialize in doorstep repairs for washing machines, refrigerators, and ACs across Bengaluru. Please note that we are <strong>not</strong> an authorized brand service center for any specific manufacturer.
          </Typography>
        </Box>
      </Box>

      {/* 3. POLICY POINTS - Using the Checkmark List style */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Box sx={iconCircle(theme.success)}><FaUserShield /></Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary }}>Service Terms</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>Important points for our customers.</Typography>
            </Box>
          </Box>
          
          <List disablePadding>
            {[
              'All logos and brand names are property of their respective owners.',
              'Technicians are independent experts trained for multi-brand repairs.',
              'Service images are for illustrative purposes only.',
              'We prioritize data privacy and never share customer details.',
              'Warranties provided apply only to the specific part replaced.'
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0, alignItems: 'flex-start', gap: 2, mb: 1.5 }}>
                <FaCheckCircle style={{ color: theme.success, marginTop: '4px', flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: theme.textMain, lineHeight: 1.5 }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* 4. FINAL LEGAL NOTICE - High Contrast for UX visibility */}
      <Box sx={sectionWrapper}>
        <Box sx={{ 
          ...cardStyle, 
          backgroundColor: '#f1f5f9', 
          border: `1px dashed ${theme.border}`,
          textAlign: 'center' 
        }}>
          <Box sx={{ display: 'inline-flex', p: 2, borderRadius: '50%', backgroundColor: '#cbd5e1', mb: 2 }}>
            <FaExclamationTriangle color="#475569" />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary, mb: 1 }}>Brand Trademark Notice</Typography>
          <Typography variant="body2" sx={{ color: theme.textMuted, lineHeight: 1.7, maxWidth: '500px', mx: 'auto' }}>
            Usage of brand names (LG, Samsung, Whirlpool, etc.) is strictly for identification purposes. 
            We do not claim affiliation with or endorsement by these manufacturers. All services are performed under our independent quality standards.
          </Typography>
        </Box>
      </Box>

      {/* FOOTER TEXT */}
      <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: theme.textMuted, mt: 4 }}>
        © {new Date().getFullYear()} Bengaluru Repair Service • Professional Doorstep Support
      </Typography>

    </Box>
  );
};

export default DisclaimerPage;
