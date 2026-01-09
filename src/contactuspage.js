
import React from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import styled from 'styled-components';


const ImageContainer = styled(Box)`
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  height: 100vh;
  animation: fadeIn 1.5s ease-in-out;
`;

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 50px;
  background: rgba(255, 255, 255, 0.2); /* Increased opacity */
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: slideIn 1.5s ease-in-out;
`;

const GradientButton = styled(Button)`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  &:hover {
    background: linear-gradient(to right, #feb47b, #ff7e5f);
  }
`;

const ContactUsPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <ImageContainer />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormContainer>
          <Typography variant="h4" gutterBottom style={{ color: '#ff7e5f' }}>
            Contact Us
          </Typography>
          <Typography variant="h6" style={{ color: '#ff7e5f', marginBottom: '20px' }}>
            We’d love to hear from you!
          </Typography>
          <form>
            <TextField
              label="Your Name"
              type="text"
              fullWidth
              margin="normal"
              required
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            />
            <TextField
              label="Your Email"
              type="email"
              fullWidth
              margin="normal"
              required
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            />
            <TextField
              label="Your Message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              required
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            />
            <Box mt={3}>
              <GradientButton variant="contained" fullWidth>
                Send Message
              </GradientButton>
            </Box>
          </form>
        </FormContainer>
      </Grid>
    </Grid>
  );
};

export default ContactUsPage;
