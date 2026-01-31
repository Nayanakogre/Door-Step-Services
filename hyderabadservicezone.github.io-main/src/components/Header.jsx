import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Menu, MenuItem, IconButton,Box, Button, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';
//import './Header.css'; // Add custom CSS for hover dropdown

const serviceLinks = [
  ['/service/washing-machine', 'Washing Machine Repair Service'],
  ['/service/ac', 'AC Repair Service'],
  ['/service/microwave', 'Microwave Oven Repair Service'],
  ['/service/refrigerator', 'Refrigerator Repair Service'],
  ['/service/air-cooler', 'Air Cooler Repair Service'],
  ['/service/dishwasher', 'Dishwasher Repair Service'],
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  // Responsive: detect if mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 6 : 0}
      sx={{
        backgroundColor: scrolled ? '#000' : 'rgba(255,255,255,0)',
        color: scrolled ? '#fff' : '#fff',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        borderRadius: '0 0 24px 24px',
        transition: 'all 0.3s ease-in-out',
        px: 2,
      }}
    >
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" sx={{ justifyContent: 'center' }}>
          <img
            src={process.env.PUBLIC_URL + "/logo-removebg-preview.png"}
            alt="Logo"
            className="header-logo"
            style={{ width: '100%', maxWidth: '320px', height: '60px', objectFit: 'contain', display: 'block' }}
          />
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box display="flex" alignItems="center" gap={3}>
            <Button 
              component={Link}
              to="/" 
              className="header-nav-btn"
              sx={{ color: scrolled ? '#fff' : '#fff', fontWeight: 600 }}
            >
              HOME
            </Button>

            <Box
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{ position: 'relative' }}
            >
              <Button
                className="header-nav-btn"
                endIcon={<span style={{ fontSize: '10px' }}>▼</span>}
                sx={{ color: scrolled ? '#fff' : '#fff', fontWeight: 600 }}
              >
                SERVICES
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMouseLeave}
                MenuListProps={{ onMouseLeave: handleMouseLeave }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                PaperProps={{
                  style: {
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '16px',
                    border: '1px solid #e0e0e0',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    minWidth: '260px',
                  },
                }}
              >
                {serviceLinks.map(([to, label]) => (
                  <MenuItem 
                    key={to} 
                    component={Link} 
                    to={to} 
                    className="header-menu-item"
                    sx={{ color: '#222', fontWeight: 500 }}
                  >
                    {label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Button 
              component={Link}
              to="/about" 
              className="header-nav-btn"
              sx={{ color: scrolled ? '#fff' : '#fff', fontWeight: 600 }}
            >
              ABOUT US
            </Button>

            <Button 
              component={Link}
              to="/contact" 
              className="header-nav-btn"
              sx={{ color: scrolled ? '#fff' : '#fff', fontWeight: 600 }}
            >
              CONTACT US
            </Button>
          </Box>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ ml: 1 }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: { width: 260, background: '#fff', color: '#222' },
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" px={2} py={2}>
            <img
              src={process.env.PUBLIC_URL + "/headerlogo.jpg"}
              alt="Logo"
              style={{ height: 40 }}
            />
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            <ListItem button component={Link} to="/" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem>
              <ListItemText primary="SERVICES" primaryTypographyProps={{ fontWeight: 700 }} />
            </ListItem>
            {serviceLinks.map(([to, label]) => (
              <ListItem button key={to} component={Link} to={to} onClick={() => setDrawerOpen(false)} sx={{ pl: 3 }}>
                <ListItemText primary={label} />
              </ListItem>
            ))}
            <Divider sx={{ my: 1 }} />
            <ListItem button component={Link} to="/about" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="ABOUT US" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="CONTACT US" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
