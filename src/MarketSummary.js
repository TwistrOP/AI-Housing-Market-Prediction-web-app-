import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Container, Typography, Grid, Paper } from '@mui/material';
import styled from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StyledContainer = styled(Container)`
  margin-top: 40px;  /* Adds margin at the top of the section */
  padding-bottom: 30px;  /* Adds padding at the bottom for extra spacing */
`;

const StyledPaper = styled(Paper)`
  padding: 20px;  /* Adds padding inside the paper */
  margin-top: 20px;  /* Adds margin to create separation between the paper and other sections */
`;

const MarketSummary = () => {
  // Sample data for average house prices across Australian states
  const data = {
    labels: ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'],
    datasets: [
      {
        label: 'Average House Price (2023)',
        data: [850000, 780000, 650000, 600000, 570000, 540000, 730000, 480000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Average House Price (2024)',
        data: [880000, 800000, 670000, 620000, 590000, 560000, 750000, 500000],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
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
        text: 'Average House Prices by State (2023-2024)',
      },
    },
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Market Summary
      </Typography>
      <Grid container spacing={3}> 
        <Grid item xs={12} md={8}>
          <StyledPaper elevation={3}>
            <Bar data={data} options={options} />
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledPaper elevation={3}>
            <Typography variant="h6" gutterBottom> 
              Average Prices by State
            </Typography>
            <ul>
              <li>NSW: $850,000 (2023), $880,000 (2024)</li>
              <li>VIC: $780,000 (2023), $800,000 (2024)</li>
              <li>QLD: $650,000 (2023), $670,000 (2024)</li>
              <li>WA: $600,000 (2023), $620,000 (2024)</li>
              <li>SA: $570,000 (2023), $590,000 (2024)</li>
              <li>TAS: $540,000 (2023), $560,000 (2024)</li>
              <li>ACT: $730,000 (2023), $750,000 (2024)</li>
              <li>NT: $480,000 (2023), $500,000 (2024)</li>
            </ul>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default MarketSummary;
