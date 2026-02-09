import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Header.css';

/* ================= ENABLED SERVICES ONLY ================= */

const serviceLinks = [
  ['/service/washing-machine', 'Washing Machine Repair Service'],
  ['/service/ac', 'AC Repair Service'],
  ['/service/refrigerator', 'Refrigerator Repair Service'],

  /* DISABLED SERVICES
  ['/service/microwave', 'Microwave Oven Repair Service'],
  ['/service/air-cooler', 'Air Cooler Repair Service'],
  ['/service/dishwasher', 'Dishwasher Repair Service'],
  */
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  /* ===== Scroll Shadow ===== */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ===== Scroll To Top on Route Change ===== */
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
      elevation={scrolled ? 8 : 0}
      sx={{
        /* ===== PREMIUM NAVY GRADIENT ===== */
        background: `
          linear-gradient(
            135deg,
            rgb(43, 62, 205) 0%,
            #030c50 50%,
            #223fc2 100%
          )
        `,
        color: '#fff',
        boxShadow: scrolled
          ? '0 6px 25px rgba(0,0,0,0.5)'
          : 'none',
        borderRadius: '0 0 22px 22px',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        px: 2,
        zIndex: 9999,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>

        {/* ===== LOGO ===== */}
        <Box display="flex" alignItems="center">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Bengaluru Repair Service"
              className="header-logo"
            />
          </Link>
        </Box>

        {/* ===== DESKTOP NAV ===== */}
        {!isMobile && (
          <Box display="flex" alignItems="center" gap={2}>

            <Button component={Link} to="/" className="header-nav-btn">
              HOME
            </Button>

            {/* SERVICES DROPDOWN */}
            <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Button
                className="header-nav-btn"
                endIcon={<span style={{ fontSize: 10 }}>▼</span>}
              >
                SERVICES
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMouseLeave}
                MenuListProps={{ onMouseLeave: handleMouseLeave }}
                PaperProps={{
                  sx: {
                    background: '#ffffff',
                    borderRadius: '14px',
                    minWidth: 250,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  }
                }}
              >
                {serviceLinks.map(([to, label]) => (
                  <MenuItem
                    key={to}
                    component={Link}
                    to={to}
                    onClick={handleMouseLeave}
                    className="header-menu-item"
                  >
                    {label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Button component={Link} to="/about" className="header-nav-btn">
              ABOUT US
            </Button>

            <Button component={Link} to="/contact" className="header-nav-btn">
              CONTACT US
            </Button>

          </Box>
        )}

        {/* ===== MOBILE TOGGLE ===== */}
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#fff' }}>
            <MenuIcon fontSize="large" />
          </IconButton>
        )}

        {/* ===== MOBILE DRAWER ===== */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 270 }}>

            <Box display="flex" justifyContent="flex-end" p={2}>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            <List>

              <ListItem button component={Link} to="/" onClick={() => setDrawerOpen(false)}>
                <ListItemText primary="HOME" />
              </ListItem>

              <Divider />

              <ListItem>
                <ListItemText primary="SERVICES" primaryTypographyProps={{ fontWeight: 'bold' }} />
              </ListItem>

              {serviceLinks.map(([to, label]) => (
                <ListItem
                  button
                  key={to}
                  component={Link}
                  to={to}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={label} />
                </ListItem>
              ))}

              <Divider />

              <ListItem button component={Link} to="/about" onClick={() => setDrawerOpen(false)}>
                <ListItemText primary="ABOUT" />
              </ListItem>

              <ListItem button component={Link} to="/contact" onClick={() => setDrawerOpen(false)}>
                <ListItemText primary="CONTACT" />
              </ListItem>

            </List>
          </Box>
        </Drawer>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
