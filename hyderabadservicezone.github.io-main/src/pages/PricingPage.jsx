import React from 'react';
import { 
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Build,
  CheckCircle,
  Info,
  Warning
} from '@mui/icons-material';

const PricingPage = () => {
  const services = [
    { name: 'Doorstep Inspection', price: '₹199 onwards' },
    { name: 'Washing Machine Repair', price: '₹199 onwards' },
    { name: 'Refrigerator Repair', price: '₹199 onwards' },
    { name: 'Microwave Oven Repair', price: '₹199 onwards' },
    { name: 'Air Conditioner Repair', price: '₹199 onwards' },
    { name: 'Dishwasher Repair', price: '₹199 onwards' },
    { name: 'Air Cooler Repair', price: '₹199 onwards' },
  ];

  return (
    <Box sx={{ 
      padding: { xs: '24px 16px', md: '48px 32px' },
      maxWidth: 900,
      margin: '0 auto'
    }}>
      {/* Main Title */}
      <Typography variant="h4" component="h1" gutterBottom sx={{ 
        fontWeight: 'bold',
        mb: 3,
        color: 'primary.main'
      }}>
        Service Charges
      </Typography>

      {/* Intro Text */}
      <Typography variant="body1" paragraph sx={{ mb: 3 }}>
        At <strong> Hyderabad Service Zone</strong>, we offer transparent pricing with no hidden fees.
        Below are our standard service charges. Final pricing may vary based on the specific issue.
      </Typography>

      {/* Pricing Table */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ 
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            mb: 2
          }}>
            <Build sx={{ mr: 1 }} />
            Standard Service Charges
          </Typography>
          
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Service Type</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((service, index) => (
                  <TableRow key={index}>
                    <TableCell>{service.name}</TableCell>
                    <TableCell align="right">{service.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
            *Prices shown are for labor only. Spare parts will be quoted separately after inspection.
          </Typography>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                What's Included
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Professional diagnosis" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Quality spare parts (if needed)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="30-day labor warranty" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Important Notes
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Warning color="warning" />
                  </ListItemIcon>
                  <ListItemText primary="Inspection fee applicable if service is declined" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Info color="info" />
                  </ListItemIcon>
                  <ListItemText primary="Senior citizen discounts available" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingPage;