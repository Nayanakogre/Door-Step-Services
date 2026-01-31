import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,
  Alert,
  Typography
} from '@mui/material';
import './ContactSection.css'; // Optional if you use additional styling

// ✅ Replace this with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwHlEFM9f5-nmI8657akloVRkkF2vimPkGW28vz1hV7iCVOcEkhyLq45VUDzQyaDdv5/exec';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ type: '', message: '' });

    try {
      const formBody = Object.keys(form)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(form[key]))
        .join('&');

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
      });

      const data = await response.json();

      if (data.result === 'success') {
        setAlert({
          type: 'success',
          message: 'Thank you! Your message has been sent.'
        });
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setAlert({
          type: 'error',
          message:
            data.message || 'Failed to send message. Please try again later.'
        });
      }
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    }

    setLoading(false);
  };

  return (
    <section
      className="contact-hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Background animation */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 20% 30%, #00ffe7 0%, transparent 60%), radial-gradient(circle at 80% 70%, #ff4ecd 0%, transparent 60%)',
          opacity: 0.25,
          animation: 'moveBg 10s linear infinite'
        }}
      />
      <style>{`
        @keyframes moveBg {
          0% { background-position: 20% 30%, 80% 70%; }
          50% { background-position: 30% 40%, 70% 60%; }
          100% { background-position: 20% 30%, 80% 70%; }
        }
      `}</style>

      <div
        className="container"
        style={{
          zIndex: 2,
          width: '100%',
          maxWidth: 800,
          padding: '1rem'
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: { xs: 2, md: 6 },
            borderRadius: 5,
            background: 'rgba(30, 34, 54, 0.85)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255,255,255,0.18)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            mb={1}
            sx={{
              background: 'linear-gradient(90deg, #00ffe7, #ff4ecd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: 1,
              fontSize: { xs: '2rem', md: '2.5rem' },
              textAlign: 'center'
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="subtitle1"
            mb={3}
            sx={{
              color: '#b2b8d6',
              fontWeight: 500,
              textAlign: 'center'
            }}
          >
            Reach out for fast, expert service. We love solving your tech problems!
          </Typography>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            style={{ width: '100%' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                  autoComplete="name"
                  InputProps={{
                    style: {
                      background: 'rgba(255,255,255,0.07)',
                      color: '#fff',
                      borderRadius: 8
                    }
                  }}
                  InputLabelProps={{ style: { color: '#b2b8d6' } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  type="email"
                  variant="outlined"
                  autoComplete="email"
                  InputProps={{
                    style: {
                      background: 'rgba(255,255,255,0.07)',
                      color: '#fff',
                      borderRadius: 8
                    }
                  }}
                  InputLabelProps={{ style: { color: '#b2b8d6' } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  fullWidth
                  required
                  type="tel"
                  variant="outlined"
                  autoComplete="tel"
                  InputProps={{
                    style: {
                      background: 'rgba(255,255,255,0.07)',
                      color: '#fff',
                      borderRadius: 8
                    }
                  }}
                  InputLabelProps={{ style: { color: '#b2b8d6' } }}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }} />
              <Grid item xs={12} md={12}>
                <TextField
                  label="Message / Problem"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  fullWidth
                  required
                  multiline
                  minRows={3}
                  variant="outlined"
                  InputProps={{
                    style: {
                      background: 'rgba(255,255,255,0.07)',
                      color: '#fff',
                      borderRadius: 8
                    }
                  }}
                  InputLabelProps={{ style: { color: '#b2b8d6' } }}
                />
              </Grid>
            </Grid>
            {/* Separate grid for button and alert */}
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {alert.message && (
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Alert severity={alert.type} sx={{ mt: 2, mx: 'auto', textAlign: 'center', width: { xs: '100%', sm: '80%', md: '60%' } }}>
                    {alert.message}
                  </Alert>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  sx={{
                    borderRadius: 3,
                    fontWeight: 700,
                    py: 1.5,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(90deg, #00ffe7, #ff4ecd)',
                    color: '#222',
                    boxShadow: '0 4px 24px 0 rgba(0,255,231,0.15)',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    '&:hover': {
                      background: 'linear-gradient(90deg, #ff4ecd, #00ffe7)',
                      color: '#222'
                    }
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </section>
  );
};

export default ContactSection;
