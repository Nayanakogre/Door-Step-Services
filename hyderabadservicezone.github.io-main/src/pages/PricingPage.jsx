import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  Divider 
} from '@mui/material';
import {
  Build,
  CheckCircle,
  Info,
  Warning,
  CurrencyRupee,
  ReceiptLong,
  WorkspacePremium
} from '@mui/icons-material';

const PricingPage = () => {
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

  const services = [
    { name: 'Doorstep Inspection', price: '₹199' },
    { name: 'Washing Machine Repair', price: '₹199+' },
    { name: 'Refrigerator Repair', price: '₹199+' },
    { name: 'Microwave Oven Repair', price: '₹199+' },
    { name: 'Air Conditioner Repair', price: '₹199+' },
    { name: 'Dishwasher Repair', price: '₹199+' },
    { name: 'Air Cooler Repair', price: '₹199+' },
  ];

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
          backgroundColor: '#dcfce7', 
          color: theme.success,
          mb: 2
        }}>
          <CurrencyRupee sx={{ fontSize: 14 }} />
          <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
            Transparent Pricing
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 800, color: theme.primary, mb: 1, letterSpacing: '-0.02em' }}>
          Service Charges
        </Typography>
        <Typography sx={{ color: theme.textMuted, fontSize: '1.1rem' }}>
          Affordable and honest doorstep appliance repairs in Bengaluru.
        </Typography>
      </Box>

      {/* 2. MAIN PRICING CARD (UX: Clean rows instead of heavy tables) */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Box sx={iconCircle(theme.accent)}><ReceiptLong /></Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary }}>Standard Rates</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>Labor charges only (Parts extra).</Typography>
            </Box>
          </Box>

          <List disablePadding>
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <ListItem sx={{ px: 0, py: 2, justifyContent: 'space-between' }}>
                  <Typography sx={{ fontWeight: 500, color: theme.textMain }}>{service.name}</Typography>
                  <Typography sx={{ fontWeight: 700, color: theme.accent }}>{service.price}</Typography>
                </ListItem>
                {index !== services.length - 1 && <Divider sx={{ opacity: 0.6 }} />}
              </React.Fragment>
            ))}
          </List>
          
          <Box sx={{ mt: 3, p: 2, borderRadius: '12px', backgroundColor: '#f1f5f9', display: 'flex', gap: 1.5 }}>
            <Info sx={{ color: theme.textMuted, fontSize: 20 }} />
            <Typography variant="caption" sx={{ color: theme.textMuted, lineHeight: 1.5 }}>
              Inspection fee is applicable if the customer chooses not to proceed with the repair after diagnosis.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 3. INCLUDED SERVICES */}
      <Box sx={sectionWrapper}>
        <Box sx={cardStyle}>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Box sx={iconCircle(theme.success)}><WorkspacePremium /></Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: theme.primary }}>What's Included</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>Value-added benefits with every visit.</Typography>
            </Box>
          </Box>
          <List disablePadding>
            {[
              'Comprehensive diagnosis by senior technicians',
              '30-Day Labor Warranty for all repairs',
              'High-quality & compatible spare parts',
              'Doorstep service across all Bengaluru zones'
            ].map((text, i) => (
              <ListItem key={i} sx={{ px: 0, gap: 2, mb: 1 }}>
                <CheckCircle sx={{ color: theme.success, fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: theme.textMain }}>{text}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* 4. IMPORTANT NOTES (UX: Yellow warning style) */}
      <Box sx={sectionWrapper}>
        <Box sx={{ ...cardStyle, border: '1px solid #fef08a', backgroundColor: '#fffbeb' }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Warning sx={{ color: '#ca8a04' }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#854d0e' }}>Important Notice</Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#a16207', lineHeight: 1.7 }}>
            Spare parts costs are not included in the above labor rates. Prices for parts vary based on the specific brand and model of your appliance. Technicians will provide a full quote after inspection.
          </Typography>
        </Box>
      </Box>

      {/* CALL TO ACTION */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" sx={{ color: theme.textMuted }}>
          Need a custom quote? Call us at <strong>+91 95422 20772</strong>
        </Typography>
      </Box>

    </Box>
  );
};

export default PricingPage;
