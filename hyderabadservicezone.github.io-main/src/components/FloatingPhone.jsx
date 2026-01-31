import React from 'react';
import { Box, Fab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const FloatingPhone = () => {
  const phoneNumber = 'tel:9542220772'; // Updated phone number

  const callPhone = () => {
    window.open(phoneNumber, '_self');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 65,
        left: 32,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        animation: 'pulse 1.5s infinite',
        '@media (max-width:600px)': {
          display: 'none',
        },
      }}
    >
      <Fab
        color="primary"
        aria-label="Phone"
        onClick={callPhone}
        sx={{ boxShadow: 6 }}
      >
        <PhoneIcon fontSize="large" />
      </Fab>
      <span style={{
        marginLeft: 12,
        background: '#1976d2',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontWeight: 600,
        fontSize: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        letterSpacing: '0.5px',
      }}>
        Call us now
      </span>
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.7); }
          70% { box-shadow: 0 0 0 16px rgba(25, 118, 210, 0); }
          100% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0); }
        }
      `}</style>
    </Box>
  );
};

export default FloatingPhone; 