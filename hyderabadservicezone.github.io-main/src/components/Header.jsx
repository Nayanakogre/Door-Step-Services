import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Menu, MenuItem, IconButton, Box, Button, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';

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
  const location = useLocation();

  // Keep track of scroll only for elevation/shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force Scroll to Top on Navigation to prevent the "partial visibility" glitch
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleMouseEnter = (event) => setAnchorEl(event.currentTarget);
  const handleMouseLeave = () => setAnchorEl(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 8 : 0} // Shadow appears when scrolling
      sx={{
        backgroundColor: '#000 !important', // ALWAYS BLACK
        color: '#fff !important',           // ALWAYS WHITE TEXT
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
        borderBottom: 'none',
        borderRadius: '0 0 24px 24px',
        transition: 'all 0.3s ease-in-out',
        px: 2,
        zIndex: 9999, // Stay above all content
      }}
    >
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Logo"
              className="header-logo"
              style={{ width: '100%', maxWidth: '200px', height: '60px', objectFit: 'contain' }}
            />
          </Link>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box display="flex" alignItems="center" gap={2}>
            <Button 
              component={Link} to="/" 
              className="header-nav-btn"
              sx={{ color: '#fff', fontWeight: 600 }} // Forced White
            >
              HOME
            </Button>

            <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Button
                className="header-nav-btn"
                endIcon={<span style={{ fontSize: '10px' }}>▼</span>}
                sx={{ color: '#fff', fontWeight: 600 }} // Forced White
              >
                SERVICES
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMouseLeave}
                MenuListProps={{ onMouseLeave: handleMouseLeave }}
                PaperProps={{
                  style: {
                    background: '#fff',
                    borderRadius: '12px',
                    minWidth: '240px',
                  },
                }}
              >
                {serviceLinks.map(([to, label]) => (
                  <MenuItem key={to} component={Link} to={to} onClick={handleMouseLeave} sx={{ color: '#222' }}>
                    {label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Button component={Link} to="/about" sx={{ color: '#fff', fontWeight: 600 }}>
              ABOUT US
            </Button>

            <Button component={Link} to="/contact" sx={{ color: '#fff', fontWeight: 600 }}>
              CONTACT US
            </Button>
          </Box>
        )}

        {/* Mobile Toggle */}
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#fff' }}>
            <MenuIcon fontSize="large" />
          </IconButton>
        )}

        {/* Sidebar for Mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 260 }}>
            <Box display="flex" justifyContent="flex-end" p={2}>
              <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
            </Box>
            <List>
              <ListItem button component={Link} to="/" onClick={() => setDrawerOpen(false)}><ListItemText primary="HOME" /></ListItem>
              <Divider />
              <ListItem><ListItemText primary="SERVICES" primaryTypographyProps={{fontWeight: 'bold'}} /></ListItem>
              {serviceLinks.map(([to, label]) => (
                <ListItem button key={to} component={Link} to={to} onClick={() => setDrawerOpen(false)} sx={{pl: 4}}><ListItemText primary={label} /></ListItem>
              ))}
              <Divider />
              <ListItem button component={Link} to="/about" onClick={() => setDrawerOpen(false)}><ListItemText primary="ABOUT" /></ListItem>
              <ListItem button component={Link} to="/contact" onClick={() => setDrawerOpen(false)}><ListItemText primary="CONTACT" /></ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
