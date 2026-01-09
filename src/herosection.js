import React from 'react';
import { Container, Button } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const StyledHero = styled.div`
  background-image: 
    linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
    url('/Herosectionpic.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 40px;
`;

const AnimatedText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  animation: ${fadeIn} 1.5s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const StyledButton = styled(Button)`
  background-color: #1abc9c;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 20px;
  &:hover {
    background-color: #16a085;
  }
`;

const HeroSection = () => {
  return (
    <StyledHero>
      <Container>
        <AnimatedText>Welcome to the Housing Prediction Hub</AnimatedText>
        <StyledButton component={Link} to="/trendpage" variant="contained">
          View Trends
        </StyledButton>
      </Container>
    </StyledHero>
  );
};

export default HeroSection;
