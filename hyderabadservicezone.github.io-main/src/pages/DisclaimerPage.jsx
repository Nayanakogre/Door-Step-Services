import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const DisclaimerPage = () => (
  <Container maxWidth="md" sx={{ py: 6, px: 3 }}>
    <Box sx={{ 
      backgroundColor: '#f9f9f9', 
      borderRadius: 2, 
      p: 4,
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <Typography 
        variant="h3" 
        component="h1" 
        sx={{ 
          mb: 4,
          fontWeight: 700,
          color: '#2a4365',
          textAlign: 'center',
          '& span': {
            color: '#3182ce',
            fontStyle: 'italic'
          }
        }}
      >
        Disclaimer – <span>Hyderabad </span> | Service Zone
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
        <strong> Hyderabad Service Zone</strong> is an independent home appliance repair and maintenance service provider based in Hyderabad ,AP & Telangana. We are not affiliated with or authorized by any appliance brand or manufacturer.
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: '#2c5282', fontWeight: 600 }}>
          🔸 Brand Icons, Logos & Images
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 2, lineHeight: 1.8 }}>
          Our website may display brand names, icons, product images, or logos of appliances such as washing machines, refrigerators, air conditioners, microwave ovens, and other products. These are used strictly for identification purposes only, to help customers recognize the types of appliances we service.
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          We do not claim any official association, authorization, or partnership with brands like Samsung, LG, Whirlpool, IFB, Bosch, Haier, Godrej, Voltas, or any other manufacturers.
        </Typography>
      </Box>
      
      <Box>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: '#2c5282', fontWeight: 600 }}>
          🧾 Key Points:
        </Typography>
        <ul style={{ 
          paddingLeft: '24px',
          listStyleType: 'none',
          '& li': {
            marginBottom: '12px'
          }
        }}>
          <li style={{ marginBottom: '12px', position: 'relative', paddingLeft: '28px' }}>
            <span style={{ position: 'absolute', left: 0 }}>•</span>
            All trademarks, brand names, and logos used on this website belong to their respective owners.
          </li>
          <li style={{ marginBottom: '12px', position: 'relative', paddingLeft: '28px' }}>
            <span style={{ position: 'absolute', left: 0 }}>•</span>
            <strong>Hyderabad Service Zone</strong> does not represent or act on behalf of any brand.
          </li>
          <li style={{ marginBottom: '12px', position: 'relative', paddingLeft: '28px' }}>
            <span style={{ position: 'absolute', left: 0 }}>•</span>
            Product images shown are for illustration purposes only and may not represent the exact model or issue.
          </li>
          <li style={{ marginBottom: '12px', position: 'relative', paddingLeft: '28px' }}>
            <span style={{ position: 'absolute', left: 0 }}>•</span>
            Our services are performed by experienced independent technicians.
          </li>
        </ul>
      </Box>
    </Box>
  </Container>
);

export default DisclaimerPage;