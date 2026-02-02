import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar,
  useTheme,
  Divider
} from '@mui/material';
import { 
  FormatQuote as QuoteIcon,
  Star as StarIcon,
  StarHalf as StarHalfIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const theme = useTheme();

  const testimonials = [
    {
      id: 1,
      text: "Thank you for your prompt response and timely service. We're highly satisfied and would gladly recommend your services to fellow residents of Hyderabad. The technician was skilled, professional, and handled everything efficiently.",
      author: "Rahul Sharma",
      location: "Gachibowli, Hyderabad",
      rating: 5,
      avatar: '/avatars/man1.jpg' // Replace with actual path
    },
    {
      id: 2,
      text: "I had a fantastic experience with the washing machine service! The technician arrived on time and was extremely professional. The repair was done efficiently with high-quality workmanship. Highly recommended!",
      author: "Priya Patel",
      location: "Banjara Hills, Hyderabad",
      rating: 4.5,
      avatar: '/avatars/woman1.jpg' // Replace with actual path
    },
    {
      id: 3,
      text: "Excellent AC service! The team was professional, punctual, and handled the servicing with great care and expertise. The service was affordable and well worth the price.",
      author: "Arjun Reddy",
      location: "Secunderabad",
      rating: 5,
      avatar: '/avatars/man2.jpg' // Replace with actual path
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} sx={{ color: theme.palette.warning.main, fontSize: 18 }} />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalfIcon key="half" sx={{ color: theme.palette.warning.main, fontSize: 18 }} />);
    }
    
    return stars;
  };

  return (
    <Box 
      component="section" 
      id="testimonials"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box 
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        {/* Section Header */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 6, md: 8 },
          position: 'relative',
          zIndex: 1
        }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2,
              color: theme.palette.text.primary,
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '2px'
              }
            }}
          >Our Happy Customers
            
          </Typography>
          <Typography 
            variant="subtitle1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              mt: 2
            }}
          >
            Hear from our satisfied customers across Hyderabad
          </Typography>
        </Box>

        {/* Testimonial Cards */}
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={4} 
              key={testimonial.id}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: theme.shadows[4],
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8]
                    },
                    position: 'relative',
                    overflow: 'visible',
                    borderTop: `4px solid ${theme.palette.primary.main}`,
                    backgroundColor: theme.palette.background.paper
                  }}
                >
                  <QuoteIcon 
                    sx={{ 
                      position: 'absolute',
                      top: -20,
                      right: 20,
                      fontSize: 60,
                      color: theme.palette.primary.light,
                      opacity: 0.2,
                      zIndex: 0
                    }} 
                  />
                  <CardContent sx={{ p: 4, flexGrow: 1, position: 'relative', zIndex: 1 }}>
                    <Box sx={{ mb: 2 }}>
                      {renderStars(testimonial.rating)}
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontStyle: 'italic',
                        color: theme.palette.text.secondary,
                        mb: 3,
                        position: 'relative',
                        '&:before': {
                          content: '"\\201C"',
                          fontSize: 60,
                          position: 'absolute',
                          left: -20,
                          top: -20,
                          color: theme.palette.primary.light,
                          opacity: 0.3
                        }
                      }}
                    >
                      {testimonial.text}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Avatar 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        sx={{ 
                          width: 56, 
                          height: 56,
                          mr: 2,
                          border: `2px solid ${theme.palette.primary.main}`
                        }} 
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {testimonial.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;