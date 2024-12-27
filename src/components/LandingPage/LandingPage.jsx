import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Guide from "./Guide";
import Footer from "./Footer";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
    navigate('/resume-builder'); // Navigate to the form page
  };

  return (
    <div>
      <Header handleGetStartedClick={handleGetStartedClick} /> {/* Pass the click handler */}
      <Banner />
      <About />
      <Guide />
      <Footer />
    </div>
  );
}

export default LandingPage;