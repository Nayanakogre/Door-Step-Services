import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

/* ================= SERVICE DATA ================= */

const serviceData = {
  'washing-machine': {
    hero: {
      image: process.env.PUBLIC_URL + '/washing.png',
      title: 'Trusted Washing Machine Repair',
      highlights: [
        { icon: 'star', text: '5★ Google Rating' },
        { icon: 'engineering', text: 'Certified Technicians' },
        { icon: 'calendar', text: 'Serving Since 2019' },
      ],
    },
    about: {
      title: 'Washing Machine Repair & Service',
      description: [
        'Expert doorstep washing machine repair.',
        'Front Load, Top Load, Semi & Fully Automatic serviced.',
        'Spinning, drainage, noise & electrical issues fixed fast.',
        'Transparent pricing & genuine spare parts.'
      ]
    },
    problems: {
      title: 'Common Problems We Fix',
      list: [
        'Machine not spinning',
        'Water leakage',
        'Machine not turning on',
        'Excess vibration',
        'Door lock issue',
        'Drum not rotating'
      ],
      images: [
        process.env.PUBLIC_URL + '/wm1.png',
        process.env.PUBLIC_URL + '/wm2.png',
        process.env.PUBLIC_URL + '/wm3.png'
      ]
    }
  },

  refrigerator: {
    hero: {
      image: process.env.PUBLIC_URL + '/Refrigerator.png',
      title: 'Trusted Refrigerator Repair',
      highlights: [
        { icon: 'star', text: '5★ Google Rating' },
        { icon: 'engineering', text: 'Certified Technicians' },
        { icon: 'calendar', text: 'Serving Since 2019' },
      ],
    },
    about: {
      title: 'Refrigerator Repair & Service',
      description: [
        'Single, Double & Side-by-Side fridge repair.',
        'Cooling, gas leakage & compressor issues fixed.',
        'Doorstep service with genuine parts.',
        'Fast & affordable service.'
      ]
    },
    problems: {
      title: 'Common Problems We Fix',
      list: [
        'Fridge not cooling',
        'Excess ice',
        'Water leakage',
        'Compressor issue',
        'Noisy operation',
        'Door sealing problem'
      ],
      images: [
        process.env.PUBLIC_URL + '/rf1.png',
        process.env.PUBLIC_URL + '/rf2.png',
        process.env.PUBLIC_URL + '/rf3.png'
      ]
    }
  },

  ac: {
    hero: {
      image: process.env.PUBLIC_URL + '/ac.png',
      title: 'Trusted AC Repair & Service',
      highlights: [
        { icon: 'star', text: '5★ Google Rating' },
        { icon: 'engineering', text: 'Certified Technicians' },
        { icon: 'calendar', text: 'Serving Since 2019' },
      ],
    },
    about: {
      title: 'AC Repair & Service',
      description: [
        'Split & Window AC repair at home.',
        'Cooling, gas filling & leakage fixed.',
        'Filter cleaning & maintenance.',
        'Affordable pricing guaranteed.'
      ]
    },
    problems: {
      title: 'Common Problems We Fix',
      list: [
        'AC not cooling',
        'Water dripping',
        'Gas leakage',
        'Bad smell',
        'Remote issue',
        'Power tripping'
      ],
      images: [
        process.env.PUBLIC_URL + '/ac1.png',
        process.env.PUBLIC_URL + '/ac2.png',
        process.env.PUBLIC_URL + '/ac3.png'
      ]
    }
  }
};

/* ================= ICON MAP ================= */

const iconMap = {
  star: <StarIcon sx={{ color: '#fbbf24', fontSize: 30 }} />,
  engineering: <EngineeringIcon sx={{ color: '#60a5fa', fontSize: 30 }} />,
  calendar: <CalendarMonthIcon sx={{ color: '#34d399', fontSize: 30 }} />,
};

/* ================= GRADIENT ================= */

const mainGradient =
  'linear-gradient(135deg, rgb(43,62,205) 0%, #030c50 50%, #223fc2 100%)';

/* ================= COMPONENT ================= */

const ServicePage = () => {

  const { serviceType } = useParams();
  const data = serviceData[serviceType];

  if (!data) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" color="error">
          Service Not Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box>

      {/* ================= HERO ================= */}

      <Box
        sx={{
          minHeight: '70vh',
          background: `
            linear-gradient(rgba(3,12,80,.75), rgba(3,12,80,.85)),
            url('${data.hero.image}') center/cover no-repeat
          `,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2
        }}
      >

        <Typography
          variant="h3"
          fontWeight={900}
          gutterBottom
          sx={{
            color: '#fff',
            textShadow: '0 4px 20px rgba(0,0,0,.6)'
          }}
        >
          {data.hero.title}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {data.hero.highlights.map((h, i) => (
            <Grid item key={i}>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 3,
                  py: 1.5,
                  borderRadius: 3,
                  background: '#fff',
                  color: '#000',
                  boxShadow: '0 8px 25px rgba(0,0,0,.25)',
                  transition: '.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 35px rgba(0,0,0,.35)'
                  }
                }}
              >
                {iconMap[h.icon]}
                <Typography fontWeight={700}>{h.text}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ================= ABOUT ================= */}

      <Box sx={{ py: 10, background: mainGradient }}>

        <Typography variant="h4" color="#fff" textAlign="center" mb={6}>
          {data.about.title}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {data.about.description.map((d, i) => (
            <Grid item xs={12} md={9} key={i}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: 'rgba(255,255,255,.95)',
                  boxShadow: '0 10px 30px rgba(0,0,0,.35)',
                }}
              >
                <Typography fontWeight={500}>{d}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ================= PROBLEMS ================= */}

      <Box sx={{ py: 10, background: mainGradient }}>

        <Typography variant="h4" color="#fff" textAlign="center" mb={6}>
          {data.problems.title}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {data.problems.list.map((p, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 4,
                  background: '#fff',
                  color: '#000',
                  boxShadow: '0 10px 30px rgba(0,0,0,.35)',
                  transition: '.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CheckCircleIcon sx={{ color: '#facc15', mb: 1 }} />
                <Typography fontWeight={700}>{p}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* IMAGES */}
        <Box sx={{ display: 'flex', mt: 8, flexWrap: 'wrap' }}>
          {data.problems.images.map((img, i) => (
            <Box key={i} sx={{ flex: 1, minWidth: '33.33%', overflow: 'hidden' }}>
              <Box
                component="img"
                src={img}
                sx={{
                  width: '100%',
                  height: 380,
                  objectFit: 'cover',
                  transition: 'transform .6s',
                  '&:hover': { transform: 'scale(1.1)' }
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* ================= CTA ================= */}

      <Box sx={{ py: 12, textAlign: 'center', background: mainGradient }}>

        <Typography variant="h4" color="#fff" gutterBottom>
          Book Your Repair Today
        </Typography>

        <Box
          component="a"
          href="tel:1800123456"
          sx={{
            px: 7,
            py: 2.2,
            background: '#f97316',
            color: '#fff',
            borderRadius: 50,
            textDecoration: 'none',
            fontWeight: 700,
            display: 'inline-block',
            mt: 3,
            boxShadow: '0 10px 30px rgba(0,0,0,.4)',
            transition: '.3s',
            '&:hover': {
              background: '#ea580c',
              transform: 'scale(1.05)'
            }
          }}
        >
          Call Toll-Free • 1800-123-456
        </Box>

      </Box>

    </Box>
  );
};

export default ServicePage;
