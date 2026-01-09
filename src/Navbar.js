import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom'; 
import { styled } from '@mui/system';  

const AnimatedAppBar = styled(AppBar)`
  background-color: black; /* Black navbar background */
  border: 3px solid transparent;
  border-image: linear-gradient(90deg, #6a11cb, #2575fc); /* Gradient border */
  border-image-slice: 1;
  background-clip: padding-box; /* Ensure background stays inside the padding */
  
  /* Animation */
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(90deg, #6a11cb, #2575fc, #6a11cb); /* Gradient Animation */
    background-size: 200% 200%;
    z-index: -1;
    animation: gradientBorder 5s ease infinite;
  }
  
  @keyframes gradientBorder {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AnimatedAppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            House Market
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                keepMounted
              >
                <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem> 
                <MenuItem onClick={handleMenuClose} component={Link} to="/aboutuspage">About</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/trendpage">Trends</MenuItem> 
                <MenuItem onClick={handleMenuClose} component={Link} to="/contactus">Contact Us</MenuItem> 
                <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/aboutuspage">About</Button> 
              <Button color="inherit" component={Link} to="/trendpage">Trends</Button>
              <Button color="inherit" component={Link} to="/contactuspage">Contact Us</Button> 
              <Button variant="contained" color="secondary" component={Link} to="/login">Login</Button> 
            </>
          )}
        </Toolbar>
      </Container>
    </AnimatedAppBar>
  );
};

export default Navbar;
