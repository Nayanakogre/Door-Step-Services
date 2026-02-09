import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, Divider } from '@mui/material';
import { Star as StarIcon, StarHalf as StarHalfIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Thank you for your prompt service! The technician was professional and repaired my washing machine efficiently. Highly recommend Bangalore Service Zone for all appliance repairs.",
      author: "Ramesh Kumar",
      location: "Whitefield, Bangalore",
      rating: 5,
      avatar: '/avatars/man1.jpg'
    },
    {
      id: 2,
      text: "AC service was excellent! Technician arrived on time, diagnosed the issue quickly, and fixed it with genuine parts. Very satisfied with the service.",
      author: "Anita Singh",
      location: "BTM Layout, Bangalore",
      rating: 4.5,
      avatar: '/avatars/woman1.jpg'
    },
    {
      id: 3,
      text: "My refrigerator repair was hassle-free and cost-effective. The team explained everything clearly and completed the work on the same day. Great experience!",
      author: "Vijay Reddy",
      location: "Koramangala, Bangalore",
      rating: 5,
      avatar: '/avatars/man2.jpg'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} sx={{ color: '#facc15', fontSize: 18 }} />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalfIcon key="half" sx={{ color: '#facc15', fontSize: 18 }} />);
    }
    return stars;
  };

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(135deg, rgb(43,62,205) 0%, #030c50 50%, #223fc2 100%)',
        color: '#fff',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
        {/* Section Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight={800} gutterBottom>
            What Our Bangalore Customers Say
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
              mx: 'auto',
              borderRadius: 2,
              mb: 2
            }}
          />
          <Typography variant="subtitle1" color="rgba(255,255,255,0.85)" maxWidth={600} mx="auto">
            Hear from our satisfied customers across Bangalore
          </Typography>
        </Box>

        {/* Testimonial Cards */}
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} lg={4} key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    minHeight: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: 'rgba(255,255,255,0.96)',
                    color: '#111827',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }
                  }}
                >
                  <Box sx={{ mb: 2 }}>{renderStars(testimonial.rating)}</Box>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3, lineHeight: 1.6 }}>
                    {testimonial.text}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      sx={{ width: 56, height: 56, mr: 2, border: '2px solid #60a5fa' }}
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
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
