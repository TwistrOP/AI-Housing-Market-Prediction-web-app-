import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Container, Typography, Grid, Paper } from '@mui/material';
import styled from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StyledContainer = styled(Container)`
  margin-top: 40px;  /* Adds margin at the top of the section */
  padding-bottom: 20px;  /* Adds padding at the bottom for extra spacing */
`;

const StyledPaper = styled(Paper)`
  padding: 20px;  /* Adds padding inside the paper for breathing room around the chart */
  margin-top: 20px;  /* Adds margin at the top to separate from other sections */
`;

const HousingPrediction = () => {
  // Sample data for housing market sentiment
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Housing Sentiment (%)',
        data: [10, 15, 8, 5, 12, 18],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Housing Market Sentiment Over the Years',
      },
    },
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Housing Predictions
      </Typography>
      <Grid container spacing={3}> 
        <Grid item xs={12}>
          <StyledPaper elevation={3}>
            <Line data={data} options={options} />
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default HousingPrediction;
