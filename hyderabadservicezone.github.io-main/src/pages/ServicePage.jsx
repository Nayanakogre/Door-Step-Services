import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const serviceData = {
  'air-cooler': {
    hero: {
      image: process.env.PUBLIC_URL + '/AirCoolerRepair.png',
      title: 'Trusted Air Cooler Repair',
      subtitle: 'Lowest inspection charge - 199/-',
      highlights: [
        { icon: 'star', text: '5★ Google Rating' },
        { icon: 'engineering', text: 'Certified Technicians' },
        { icon: 'calendar', text: 'Serving Since 2019' },
      ],
    },
    about: {
      title: 'Air Cooler Service in Hyderabad ,AP & Telangana',
      description: [
        'We Service: Desert Cooler, Tower Cooler, Personal Cooler',
        'We provide doorstep service for all air cooler brands and models. Common issues like low airflow, water pump failure, foul smell, and wiring faults are handled by trained professionals.',
        'Our services are quick and budget-friendly, especially during peak summer season.',
        'Our goal is to provide fast, transparent, and convenient service — right at your home. We ensure clear communication, fair pricing, and no unnecessary repairs. Whether it\'s a minor glitch or a major breakdown, we\'re here to help.'
      ]
    },
    problems: {
      title: 'Common Air Cooler Problems We Fix',
      list: [
        'Cooler not turning on',
        'Motor or fan not working',
        'Foul smell from water tank',
        'Pump not circulating water',
        'Low airflow or cooling',
        'Wiring or switch issues',
        'Water leakage',
        'Noise during operation',
      ],
      image: process.env.PUBLIC_URL + '/AirCoolerRepair.png'
    }
  },
  'dishwasher': {
    hero: {
      image: process.env.PUBLIC_URL + '/Dishwasher.png',
      title: 'Trusted Dishwasher Repair',
      subtitle: 'Lowest inspection charge - 199/-',
      highlights: [
        { icon: 'star', text: '5★ Google Rating' },
        { icon: 'engineering', text: 'Certified Technicians' },
        { icon: 'calendar', text: 'Serving Since 2019' },
      ],
    },
    about: {
      title: 'Dishwasher Repair & Service in Hyderabad ,AP & Telangana',
      description: [
        'We Repair: Built-in & Countertop Dishwashers',
        'Our technicians provide reliable dishwasher repairs at home. Whether it\'s drainage issues, cleaning problems, foul smells, or control panel errors — we\'ll inspect, explain the problem, and fix it efficiently.',
        'We charge only after inspection and always take approval before replacement.',
        'Our goal is to provide fast, transparent, and convenient service — right at your home. We ensure clear communication, fair pricing, and no unnecessary repairs. Whether it\'s a minor glitch or a major breakdown, we\'re here to help.'
      ]
    },
    problems: {
      title: 'Common Dishwasher Problems We Fix',
      list: [
        'Water not draining',
        'Dishes not cleaning properly',
        'Error codes or blinking lights',
        'Bad smell inside dishwasher',
        'Door not closing or locking',
        'Detergent not dispensing',
        'Loud noise during wash',
        'Water leakage during cycle'
      ],
      image: process.env.PUBLIC_URL + '/Dishwasher1.png'
    }
  },
  'washing-machine': {
    hero: {
      image: process.env.PUBLIC_URL + '/washing.png',
      title: 'Trusted Washing Machine Repair',
      subtitle: 'Lowest inspection charge - 199/-',
      highlights: [
        { icon: 'star', text: '5★ Google Rating' },
        { icon: 'engineering', text: 'Certified Technicians' },
        { icon: 'calendar', text: 'Serving Since 2019' },
      ],
    },
    about: {
      title: 'Washing Machine Repair & Service in Hyderabad ,AP & Telangana',
      description: [
        'Our Washing Machine Repair & Service Offerings: Front Load Washing Machine, Top Load washing Machine, Semi-Automatic Washing machine, Fully Automatic washing machine.',
        'We offer reliable and affordable washing machine repair services at your doorstep in Tirupati. Our skilled technicians are experienced in handling most major brands and models, including front load, top load, semi-automatic, and fully automatic machines. We diagnose and fix common issues such as spinning problems, water leakage, power failures, noise, and more.',
        'Our goal is to provide fast, transparent, and convenient service — right at your home. We ensure clear communication, fair pricing, and no unnecessary repairs. Whether it\'s a minor glitch or a major breakdown, we\'re here to help.'
      ]
    },
    problems: {
      title: 'Common Washing Machine Problems We Fix',
      list: [
        'Washing machine not spinning or draining',
        'Water leaking from the machine',
        'Machine not turning on or sudden power cut-off',
        'Display panel showing error codes',
        'Excessive noise or vibration during wash',
        'Door not opening or locking properly',
        'Water not filling or not draining completely',
        'Drum not rotating',
        'Timer or cycle not functioning correctly',
        'Bad smell or detergent residue issues'
      ],
      image: process.env.PUBLIC_URL + '/washing1.png'
    }
  },
  'microwave': {
    hero: {
      image: process.env.PUBLIC_URL + '/Microwave.jpeg',
      title: 'Trusted Microwave Oven Repair',
      subtitle: 'Lowest inspection charge - 199/-',
      highlights: [
        { icon: 'star', text: '5★ Google Rating' },
        { icon: 'engineering', text: 'Certified Technicians' },
        { icon: 'calendar', text: 'Serving Since 2019' },
      ],
    },
    about: {
      title: 'Microwave Oven Repair & Service in Hyderabad ,AP & Telangana',
      description: [
        'Our Microwave Oven Repair & Service Offerings: Solo Microwave, Grill Microwave, Convection Microwave',
        'We provide fast and affordable microwave oven repair services at your home in Tirupati. Our experts can handle all major models and brands. We specialize in fixing heating issues, spark problems, control panel malfunctions, door problems, and more.',
        'Our goal is to deliver hassle-free service with honest pricing and no unnecessary part replacements. Whether it\'s a power issue or heating fault, we\'re here to help at your doorstep.'
      ]
    },
    problems: {
      title: 'Common Microwave Oven Problems We Fix',
      list: [
        'Microwave not heating properly',
        'Sparks or burning smell',
        'Display not working or blinking',
        'Turntable not rotating',
        'Door not closing or locking',
        'Control panel not responding',
        'Error codes on screen',
        'Loud noise during use'
      ],
      image: process.env.PUBLIC_URL + '/Microwave1.png'
    }
  },
  'refrigerator': {
    hero: {
      image: process.env.PUBLIC_URL + '/Refrigerator.png',
      title: 'Trusted Refrigerator Repair',
      subtitle: 'Lowest inspection charge - 199/-',
      highlights: [
        { icon: 'star', text: '5★ Google Rating' },
        { icon: 'engineering', text: 'Certified Technicians' },
        { icon: 'calendar', text: 'Serving Since 2019' },
      ],
    },
    about: {
      title: 'Refrigerator Repair & Service in Hyderabad ,AP & Telangana',
      description: [
        'We Repair: Single Door, Double Door, Side-by-Side Fridges',
        'Our experienced technicians provide fridge repair service at your doorstep across Tirupati. Whether your fridge is not cooling, leaking water, making noise, or displaying errors, we can fix it quickly.',
        'We use genuine spare parts only when needed, and always explain the issue clearly before starting repair.',
        'Our goal is to provide fast, transparent, and convenient service — right at your home. We ensure clear communication, fair pricing, and no unnecessary repairs. Whether it\'s a minor glitch or a major breakdown, we\'re here to help.'
      ]
    },
    problems: {
      title: 'Common Refrigerator Problems We Fix',
      list: [
        'Fridge not cooling or overcooling',
        'Excess ice or defrost issues',
        'Compressor not working',
        'Thermostat failure',
        'Water leaking inside',
        'Noisy operation',
        'Door not sealing properly',
        'Light not working'
      ],
      image: process.env.PUBLIC_URL + '/Refrigerator.png'
    }
  },
  'ac': {
    hero: {
      image: process.env.PUBLIC_URL + '/ac.png',  
      title: 'Trusted AC Repair & Service',
      subtitle: 'Lowest inspection charge - 199/-',
      highlights: [
        { icon: 'star', text: '5★ Google Rating' },
        { icon: 'engineering', text: 'Certified Technicians' },
        { icon: 'calendar', text: 'Serving Since 2019' },
      ],
    },
    about: {
      title: 'AC Repair & Service in Hyderabad ,AP & Telangana',
      description: [
        'Our AC Service Coverage: Split AC, Window AC, Inverter AC',
        'We offer professional air conditioner service at your home in Tirupati. From cooling issues and gas leakage to compressor faults and water leakage, we handle it all. We also provide cleaning and filter maintenance based on requirement.',
        'We focus on genuine issue detection, fast service, and affordable rates to keep your AC running at peak performance.'
      ]
    },
    problems: {
      title: 'Common AC Problems We Fix',
      list: [
        'AC not cooling properly',
        'Water dripping from AC',
        'Unusual noise or vibration',
        'Gas leakage or low refrigerant',
        'Remote or sensor not working',
        'Bad smell from the unit',
        'Frequent power tripping',
        'Outdoor unit not turning on'
      ],
      image: process.env.PUBLIC_URL + '/ac1.png'
    }
  }
};

// Add more services here...

const iconMap = {
  star: <StarIcon sx={{ color: '#fbc02d', fontSize: 30 }} />, // yellow
  engineering: <EngineeringIcon sx={{ color: '#1976d2', fontSize: 30 }} />, // blue
  calendar: <CalendarMonthIcon sx={{ color: '#2e7d32', fontSize: 30 }} />, // green
};

const ServicePage = () => {
  const { serviceType } = useParams();
  const data = serviceData[serviceType];

  if (!data) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" color="error">Service Not Found</Typography>
        <Typography variant="body1">Please select a valid service from the menu.</Typography>
      </Box>
    );
  }

  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          minHeight: '60vh',
          background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${data.hero.image}') center/cover no-repeat`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          flexDirection: 'column',
          pt: 10,
        }}
      >
        <Typography variant="h3" fontWeight={800} gutterBottom>
          {data.hero.title}
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {data.hero.subtitle}
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          {data.hero.highlights.map((h, i) => (
            <Grid item key={i}>
              <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: 18 }}>
                {iconMap[h.icon]}{h.text}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Highlight Section */}
      <Box sx={{ background: '#fff', py: 4 }}>
        <Box
          sx={{
            maxWidth: 800,
            mx: 'auto',
            p: 3,
            borderRadius: 4,
            boxShadow: 3,
            backgroundColor: '#fff',
            textAlign: 'center'
          }}
        >
          <Chip label={data.hero.subtitle} color="warning" sx={{ mb: 2, fontWeight: 600 }} />
          <Grid container spacing={4} justifyContent="center">
            {data.hero.highlights.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {iconMap[item.icon]}
                  <Typography fontWeight={600} mt={1}>{item.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography variant="caption" display="block" mt={2}>
            *We provide repair and maintenance services only in and around Hyderabad ,AP & Telangana.
          </Typography>
        </Box>
      </Box>

      {/* About Section */}
      <Box sx={{ textAlign: 'center', pt: 4, px: 2 }}>
        <Typography variant="h5" fontWeight={700} color="warning.main" gutterBottom>
          {data.about.title}
        </Typography>
        {data.about.description.map((text, index) => (
          <Typography key={index} sx={{ mb: 2, maxWidth: 800, mx: 'auto' }}>{text}</Typography>
        ))}
      </Box>

      {/* Problems We Fix Section */}
      <Box sx={{ py: 6, px: 2, maxWidth: 1000, mx: 'auto' }}>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ textAlign: 'center', mb: 4, color: 'orange' }}
        >
          {data.problems.title}
        </Typography>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <List>
              {data.problems.list.slice(0, Math.ceil(data.problems.list.length / 2)).map((problem, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#f9a825' }} />
                  </ListItemIcon>
                  <ListItemText primary={problem} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              {data.problems.list.slice(Math.ceil(data.problems.list.length / 2)).map((problem, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#f9a825' }} />
                  </ListItemIcon>
                  <ListItemText primary={problem} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
            <img
              src={data.problems.image}
              alt={`${serviceType} illustration`}
              style={{ maxWidth: 320, width: '100%', borderRadius: 8 }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ServicePage; 