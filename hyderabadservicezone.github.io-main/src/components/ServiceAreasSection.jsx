import React from 'react';
import { Box, Typography, Grid, Paper, Chip, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';

const hyderabadAreas = [
  'Madhapur', 'Gachibowli', 'Kukatpally', 'Banjara Hills', 'Jubilee Hills',
  'Ameerpet', 'Begumpet', 'Secunderabad', 'Hitech City', 'Dilsukhnagar',
  'Mehdipatnam', 'LB Nagar', 'Miyapur', 'Uppal', 'Kondapur', 'Attapur',
  'Kompally', 'Tarnaka', 'SR Nagar', 'Chandanagar', 'Kothapet',
  'G.P.O', 'Anandnagar', 'Balapur', 'Kulsumpura', 'Golconda', 'Bowenpally',
  'Begum Bazar', 'Amberpet', 'Sanath Nagar', 'Lingampally', 'Ashok Nagar',
  'Yakutpura', 'Sahifa', 'Padmarao Nagar', 'Barkatpura', 'Murad Nagar',
  'Narayanaguda', 'Himayat Nagar', 'Rajendra Nagar', 'Ibrahim Bagh',
  'Saroornagar', 'Malakpet', 'Bala Nagar', 'Sanjeev Reddy Nagar', 'Raj Bhavan',
  'Hal', 'Bowrampet', 'Nallakunta', 'Yousufguda', 'Hasannagar', 'Uppuguda',
  'Falaknuma', 'HMT', 'Jeedimetla', 'Vijay Nagar', 'Badangpet', 'KPHB',
  'Gopanpally', 'Nizampet', 'Borabanda', 'Srinagar Colony'
];

const apCities = [
  'Vijayawada', 'Visakhapatnam', 'Guntur', 'Nellore', 'Kurnool',
  'Tirupati', 'Rajahmundry', 'Anantapur', 'Ongole', 'Eluru',
  'Thullur', 'Duggirala', 'Jonnalagadda', 'Ponnur', 'Mangalagiri',
  'Tenali', 'Sattenapalle', 'Gurazala', 'Amaravati', 'Macherla',
  'Piduguralla', 'Dhachapally', 'Vinukonda', 'Nasaraopeta', 'Karampudi',
  'Srisailam', 'Athamakuru', 'Nandhigama', 'Chirala', 'Bapatla',
  'Nandyala', 'Ibrahimpatnam', 'Machilipatnam', 'Srikakulam', 'Ganavaram',
  'Kavali', 'Chilakaluripet', 'Peramcharla', 'Kakani', 'East Godavari',
  'West Godavari', 'Yarragundapalem', 'Annavaram', 'Kandukur', 'Kanigiri',
  'Gudur', 'Rajanpet', 'Giddaluru', 'Mataru', 'Podili', 'Chittoor',
  'Gudivada', 'Repalle', 'Bhimavaram', 'Tanuku', 'Amalapuram',
  'Jaggampeta', 'Tuni', 'Narsipatnam', 'Anakapalle', 'Bhogapuram',
  'Vizianagaram', 'Palakonda', 'Achampet', 'Hanuman Junction', 'Tadipatri',
  'Markapur', 'Badvel', 'Kadapa'
];

const telanganaCities = [
  'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Ramagundam',
  'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Siddipet', 'Suryapet',
  'Sirisilla', 'Zaheerabad', 'Sadasivpet', 'Kodhda', 'Miryalaguda',
  'Chityala', 'Arketpally', 'Chottupal', 'Jangaon', 'Medak',
  'Kamareddy', 'Jagtial', 'Nirmal', 'Mincherial', 'Narsampet',
  'Jaggaihmpet', 'Yadagirigutta', 'Bhuvanagiri', 'Gajwel', 'Nacharam',
  'Narsapur', 'Daulatabad', 'Kothapet', 'Parigi', 'Narayanapeta',
  'Tandur', 'Shadnagar', 'Jadcherla', 'Kalwakurthy', 'Amangal',
  'Chintapalli', 'Huzurabad', 'Renigunta', 'Amalavada', 'Kanpur'
];

const ServiceAreasSection = () => (
  <Box
    sx={{
      py: { xs: 5, md: 8 },
      px: { xs: 2, md: 6 },
      background: 'linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)',
      borderRadius: 4,
      my: 6,
      boxShadow: 3,
      maxWidth: 1100,
      mx: 'auto',
    }}
  >
    <Typography
      variant="h4"
      fontWeight={800}
      mb={2}
      sx={{
        textAlign: 'center',
        background: 'linear-gradient(90deg, #0ea5e9, #a21caf)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: 1,
      }}
    >
      We Offer Doorstep Service Across Hyderabad , Andhra Pradesh & Telangana
    </Typography>
    <Typography variant="h6" color="text.secondary" textAlign="center" mb={4}>
      Hyderabad Service Zone proudly provides doorstep repair and service to customers across all major areas of Hyderabad, Andhra Pradesh, and Telangana. Our verified technicians are just a call away!
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={4}>
        <Paper elevation={4} sx={{ p: 3, borderRadius: 3, minHeight: 320 }}>
          <Typography variant="h6" fontWeight={700} mb={2} color="primary" display="flex" alignItems="center" gap={1}>
            <LocationOnIcon color="primary" /> Hyderabad (Top Localities)
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {hyderabadAreas.map(area => (
              <Chip key={area} label={area} color="secondary" variant="outlined" sx={{ mb: 1 }} />
            ))}
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={4} sx={{ p: 3, borderRadius: 3, minHeight: 320 }}>
          <Typography variant="h6" fontWeight={700} mb={2} color="primary" display="flex" alignItems="center" gap={1}>
            <LocalShippingIcon color="primary" /> Andhra Pradesh Cities
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {apCities.map(city => (
              <Chip key={city} label={city} color="info" variant="outlined" sx={{ mb: 1 }} />
            ))}
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={4} sx={{ p: 3, borderRadius: 3, minHeight: 320 }}>
          <Typography variant="h6" fontWeight={700} mb={2} color="primary" display="flex" alignItems="center" gap={1}>
            <LocalShippingIcon color="primary" /> Telangana Cities
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {telanganaCities.map(city => (
              <Chip key={city} label={city} color="success" variant="outlined" sx={{ mb: 1 }} />
            ))}
          </Box>
        </Paper>
      </Grid>
    </Grid>
    <Box textAlign="center" mt={5}>
      <Typography variant="body1" color="text.secondary" mb={2}>
        <strong>Is your area not listed?</strong> Don't worry! Call us and we'll confirm doorstep service availability in your location.
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="primary"
        startIcon={<PhoneIcon />}
        href="tel:+919542220772"
        sx={{ borderRadius: 3, fontWeight: 700, px: 4, py: 1.5, fontSize: '1.1rem' }}
      >
        Call Now for Service
      </Button>
    </Box>
  </Box>
);

export default ServiceAreasSection; 