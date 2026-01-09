
import React from 'react';
import { Box, TextField, Button, Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImageContainer = styled(Box)`
  position: relative;
  background-image: url('/path-to-your-image.jpg'); // Add your image here
  background-size: cover;
  background-position: center;
  height: 100vh;
  animation: fadeInLeft 1.5s ease-in-out;

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const FormContainer = styled(Box)`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  animation: fadeInRight 1.5s ease-in-out;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const GradientUnderline = styled.span`
  display: inline-block;
  background: linear-gradient(to right, #4caf50, #1e88e5);
  height: 3px;
  width: 60px;
  margin-top: 4px;
  animation: expand 1s ease-in-out;

  @keyframes expand {
    from {
      width: 0;
    }
    to {
      width: 60px;
    }
  }
`;

const LoginPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <ImageContainer />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormContainer>
          <Typography variant="h4" gutterBottom>
            Login <GradientUnderline />
          </Typography>
          <form>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <Box mt={2}>
              <Link to="/forgotpassword" style={{ textDecoration: 'none' }}>
                <Typography variant="caption">Forgot password?</Typography>
              </Link>
            </Box>
            <Box mt={3}>
              <Button variant="contained" color="primary" fullWidth>
                Sign In
              </Button>
            </Box>
          </form>
          <Box mt={3}>
            <Typography variant="body2">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </Typography>
          </Box>
        </FormContainer>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
