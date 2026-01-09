import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';

Chart.register(...registerables);

const Trends = () => {
  const [formData, setFormData] = useState({
    Distance: '',
    Postcode: 3141,
    Bedroom2: '',
    Bathroom: 2,
    Car: 1,
    Landsize: 300,
    BuildingArea: 150,
    YearBuilt: '',
    Lattitude: -37.8136,
    Longtitude: 144.9631,
  });

  const [classificationData, setClassificationData] = useState({
    Transfer_Year: '',
    Transaction_Count: 100,
  });

  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [{
      label: 'Predicted Prices',
      data: [],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
    }],
  });

  const [barData, setBarData] = useState({
    labels: ['Low', 'Medium', 'High'],
    datasets: [{
      label: 'House Classification',
      data: [0, 0, 0],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
  });

  const [prediction, setPrediction] = useState(null);
  const [classification, setClassification] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClassificationInputChange = (e) => {
    const { name, value } = e.target;
    setClassificationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePredictPrice = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict_price/linear_regression', formData);
      const predictedPrice = response.data.price;
      setPrediction(predictedPrice);

      setLineData((prevData) => ({
        ...prevData,
        labels: [...prevData.labels, formData.Landsize],
        datasets: [{
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data, predictedPrice],
        }],
      }));
    } catch (error) {
      console.error('Error predicting price:', error);
    }
  };

  const handleClassifyPrice = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/classify_price', classificationData);
      const classificationResult = response.data.classification;
      
      // Mapping classificationResult to readable classification strings
      const classificationMap = {
        "0": "Low",
        "1": "Medium",
        "2": "High"
      };
      
      const readableClassification = classificationMap[classificationResult];
      setClassification(readableClassification);

      // Update bar chart data based on classification result
      setBarData((prevData) => {
        const updatedData = [...prevData.datasets[0].data];
        if (readableClassification === 'Low') updatedData[0]++;
        if (readableClassification === 'Medium') updatedData[1]++;
        if (readableClassification === 'High') updatedData[2]++;
        return {
          ...prevData,
          datasets: [{ ...prevData.datasets[0], data: updatedData }],
        };
      });
    } catch (error) {
      console.error('Error classifying price:', error);
    }
  };

  const formValid = Object.values(formData).every((value) => value !== '') && Object.values(classificationData).every((value) => value !== '');

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Trends Prediction</Typography>
      
      {/* Prediction Form for Dataset 1 */}
      <form onSubmit={handlePredictPrice}>
        <Typography variant="h6" gutterBottom>Predict House Price</Typography>
        <Grid container spacing={3}>
          {Object.keys(formData).map((key) => (
            <Grid item xs={12} md={4} key={key}>
              <TextField 
                label={key} 
                variant="outlined" 
                fullWidth 
                name={key} 
                value={formData[key]} 
                onChange={handleInputChange} 
                required 
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" disabled={!formValid} fullWidth>
              Predict Price
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Display Predicted Price */}
      {prediction !== null && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Predicted Price: ${prediction.toFixed(2)}
        </Typography>
      )}

      {/* Classification Form for Dataset 2 */}
      <form onSubmit={handleClassifyPrice}>
        <Typography variant="h6" gutterBottom style={{ marginTop: '40px' }}>Classify House Price Range</Typography>
        <Grid container spacing={3}>
          {Object.keys(classificationData).map((key) => (
            <Grid item xs={12} md={4} key={key}>
              <TextField 
                label={key} 
                variant="outlined" 
                fullWidth 
                name={key} 
                value={classificationData[key]} 
                onChange={handleClassificationInputChange} 
                required 
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" disabled={!formValid} fullWidth>
              Classify Price
            </Button>
          </Grid>
        </Grid>
      </form>

      
      {classification && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Classification: {classification}
        </Typography>
      )}

      
      <Typography variant="h6" gutterBottom style={{ marginTop: '40px' }}>
        Predicted Prices Over Time
      </Typography>
      <Line data={lineData} />

      
      <Typography variant="h6" gutterBottom style={{ marginTop: '40px' }}>
        House Classification
      </Typography>
      <Bar data={barData} />
    </Container>
  );
};

export default Trends;
