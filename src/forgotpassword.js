
import React from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import styled from 'styled-components';

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
  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ForgotPasswordPage = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <FormContainer>
          <Typography variant="h4" gutterBottom>
            Forgot Password
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
            <Box mt={3}>
              <Button variant="contained" color="primary" fullWidth>
                Reset Password
              </Button>
            </Box>
          </form>
        </FormContainer>
      </Grid>
    </Grid>
  );
};

export default ForgotPasswordPage;
