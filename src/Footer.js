import React from 'react';
import { Container, Grid, Typography, Box, IconButton } from '@mui/material';
import styled from 'styled-components';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const StyledFooter = styled.footer`
  background-color: #2c3e50;
  padding: 40px 0;
  color: #ecf0f1;
  text-align: left;
  animation: fadeIn 2s ease-in-out;
  margin-top: 40px;

  & h6 {
    margin-bottom: 20px;
    color: #1abc9c;
  }

  & p, & a {
    color: #bdc3c7;
    text-decoration: none;
    margin-bottom: 8px;
    display: block; /* Changed from inline-block for better stacking */
    padding-bottom: 6px;
  }

  & a:hover {
    color: #1abc9c;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {/* Members Section */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6">Members</Typography>
            <Box>
              <Typography style={{ marginBottom: '8px' }}>Phat Dam</Typography>
              <Typography style={{ marginBottom: '8px' }}>Chinmay Khokhar</Typography>
              <Typography>Ngoc Le</Typography>
            </Box>
          </Grid>

          {/* Menu Section */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6">Menu</Typography>
            <Box>
              <Typography><a href="/">Home</a></Typography>
              <Typography><a href="/aboutuspage">About</a></Typography>
              <Typography><a href="/trendpage">Trends</a></Typography>
              <Typography><a href="/contactuspage">Contact Us</a></Typography>
              <Typography><a href="/login">Login</a></Typography>
            </Box>
          </Grid>

          {/* Social Media and Contact Section */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6">Connect with Us</Typography>
            <Box display="flex" justifyContent="start" mt={1}>
              <IconButton href="https://facebook.com" target="_blank" color="inherit" aria-label="Facebook" sx={{ marginRight: '8px' }}>
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit" aria-label="Twitter" sx={{ marginRight: '8px' }}>
                <Twitter />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="inherit" aria-label="LinkedIn" sx={{ marginRight: '8px' }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Text */}
        <Box textAlign="center" pt={5}>
          <Typography variant="body2" style={{ color: '#7f8c8d' }}>
            © {new Date().getFullYear()} House Market Prediction | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
