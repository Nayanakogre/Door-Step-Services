import React from 'react';
import { Box, Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    const message = "Hello! I need appliance repair service.";
    const whatsappURL = `https://wa.me/919542220772?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 65,
        right: 32,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        animation: 'pulse 1.5s infinite',
      }}
    >
      <span style={{
        marginRight: 12,
        background: '#25D366',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontWeight: 600,
        fontSize: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        letterSpacing: '0.5px',
      }}>
        Need help? Chat with us
      </span>
      <Fab
        color="success"
        aria-label="WhatsApp"
        onClick={openWhatsApp}
        sx={{ boxShadow: 6 }}
      >
        <WhatsAppIcon fontSize="large" />
      </Fab>
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
          70% { box-shadow: 0 0 0 16px rgba(76, 175, 80, 0); }
          100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
        }
      `}</style>
    </Box>
  );
};

export default FloatingWhatsApp;