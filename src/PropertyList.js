import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      image: '/House 1.jpg',
      title: 'Seymour VIC',
      price: '$450,000',
    },
    {
      id: 2,
      image: '/House 2.jpg',
      title: 'Hawthorn VIC',
      price: '$1,200,000',
    },
    {
      id: 3,
      image: '/House 3.jpg',
      title: 'Tamarama',
      price: '$850,000',
    },
  ];
  

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '40px' }}>
        Listed Properties
      </Typography>
      <Grid container spacing={4}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card style={{ padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardMedia
                component="img"
                height="180"
                image={property.image}
                alt={property.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {property.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {property.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PropertyList;
