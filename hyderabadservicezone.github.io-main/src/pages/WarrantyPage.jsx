import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon 
} from '@mui/material';
import { 
  FaCheckCircle, 
  FaTimesCircle, 
  FaPhoneAlt, 
  FaEnvelope,
  FaTools,
  FaShieldAlt,
  FaExclamationTriangle,
  FaInfoCircle
} from 'react-icons/fa';

const WarrantyPage = () => {
  const theme = {
    primary: '#0f172a', // Deep Slate
    accent: '#2563eb',  // Trust Blue
    bg: '#f8fafc',
    card: '#ffffff',
    border: '#e2e8f0',
    textMain: '#1e293b',
    textMuted: '#64748b',
    success: '#059669',
    error: '#dc2626'
  };

  const sectionWrapper = {
    maxWidth: '650px',
    margin: '0 auto 28px auto',
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
      
      {/* 1. HEADER */}
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
          <FaShieldAlt fontSize="14px" />
          <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
            Service Protection
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 800, color: theme.primary, mb: 1, letterSpacing: '-0.02em' }}>
          Warranty Policy
        </Typography>
        <Typography sx={{ color: theme.textMuted, fontSize: '1.1rem' }}>
          Our commitment to quality and reliable appliance support.
        </Typography>
      </Box>

      {/* 2. WHAT IS COVERED (Labor & Parts) */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Box sx={iconCircle(theme.success)}><FaCheckCircle /></Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary }}>What's Covered</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>Guaranteed repairs for your peace of mind.</Typography>
            </Box>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle2" sx={{ color: theme.accent, fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              <FaTools /> Labor Warranty
            </Typography>
            <Typography variant="body2" sx={{ color: theme.textMain, backgroundColor: '#f0fdf4', p: 2, borderRadius: '12px', border: '1px solid #bbf7d0' }}>
              We provide a <strong>30-day limited warranty</strong> on repair labor. If the same issue reoccurs within 30 days, we fix it for free.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ color: theme.accent, fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              <FaTools /> Spare Parts Warranty
            </Typography>
            <Typography variant="body2" sx={{ color: theme.textMain, backgroundColor: '#f0fdf4', p: 2, borderRadius: '12px', border: '1px solid #bbf7d0' }}>
              Spare parts carry a <strong>3 to 6-month warranty</strong> depending on the specific component and manufacturer.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 3. WHAT IS NOT COVERED */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Box sx={iconCircle(theme.error)}><FaTimesCircle /></Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary }}>Exclusions</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>Situations where the warranty does not apply.</Typography>
            </Box>
          </Box>

          <List disablePadding>
            {[
              'Damage caused by high voltage or power surges.',
              'Issues unrelated to the specific part we repaired.',
              'Appliances handled by other technicians after our visit.',
              'Physical damage, water spillage, or rust issues.',
              'External factors like plumbing or wiring faults.'
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0, alignItems: 'flex-start', gap: 2, mb: 1.5 }}>
                <FaExclamationTriangle style={{ color: theme.error, marginTop: '4px', flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: theme.textMain }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* 4. HOW TO CLAIM */}
      <Box sx={sectionWrapper}>
        <Box sx={{ ...cardStyle, background: `linear-gradient(135deg, ${theme.primary} 0%, #1e293b 100%)`, color: 'white' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>How to Claim?</Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
            Simply reach out to us within the warranty period with your service bill details.
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <FaPhoneAlt color={theme.accent} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>+91 95422 20772</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <FaEnvelope color={theme.accent} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>bengalururepairservices@gmail.com</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 5. FOOTER NOTICE */}
      <Box sx={{ textAlign: 'center', maxWidth: 650, mx: 'auto', mt: 4 }}>
        <Typography variant="caption" sx={{ color: theme.textMuted, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <FaInfoCircle /> Independent Warranty provided by Bengaluru Repair Service.
        </Typography>
      </Box>

    </Box>
  );
};

export default WarrantyPage;
