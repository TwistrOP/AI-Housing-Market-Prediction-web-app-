import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './Navbar';
import HeroSection from './herosection';
import HousingPrediction from './HousingPrediction';
import MarketSummary from './MarketSummary';
import PropertyList from './PropertyList';
import Trends from './trendpage'; 
import Footer from './Footer';
import LoginPage from './login';  
import SignupPage from './signup';  
import ForgotPasswordPage from './forgotpassword'; 
import ContactUsPage from './contactuspage';
import AboutPage  from './aboutuspage';

import './Global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={
          <>
            <HeroSection />
            <HousingPrediction />   
            <MarketSummary />
            <PropertyList />
          </>
        } />
        
        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Trends Page */}
        <Route path="/trendpage" element={<Trends />} /> 

        {/* Signup Page */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contactuspage" element={<ContactUsPage />} />  
        
        {/* Forgot Password Page */}
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path='/aboutuspage' element = {<AboutPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
