
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import styled from 'styled-components';


const StyledCard = styled(Card)`
  margin: 20px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Chinmay Khokhar",
      studentId: "Student ID: 104330769",
      program: "Bachelor of Computer Science [Major : Software Development]",
    },
    {
      name: "Phat Dam",
      studentId: "Student ID: 103508497",
      program: "Bachelor of Computer Science [Major : Data Science]",
    },
    {
      name: "Thuy Ngoc Le",
      studentId: "Student ID: 103822414",
      program: "Bachelor of Computer Science",
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Team 66 - The Goofy Giraffes
      </Typography>
      <Typography variant="h6" gutterBottom>
        Member Details
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5">{member.name}</Typography>
                <Typography variant="body2">{member.studentId}</Typography>
                <Typography variant="body2">{member.program}</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutPage;
