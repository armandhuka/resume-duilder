import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import LandingPage from "./components/LandingPage/LandingPage";
import ResumeBuilder from "./components/Form/ResumeBuilder";
import ResumeTemplate from "./components/ResumeTemplet/ResumeTemplat"; // Import the ResumeTemplate component
import { ResumeProvider } from "./components/Context/ResumeContext"; // Import the ResumeProvider

function App() {
  return (
    <ResumeProvider> {/* Wrap your components with ResumeProvider */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Landing Page Route */}
            <Route path="/resume-builder" element={<ResumeBuilder />} /> {/* Form Page Route */}
            <Route path="/resume-template" element={<ResumeTemplate />} /> {/* Resume Template Route */}
          </Routes>
        </div>
      </Router>
    </ResumeProvider>
  );
}

export default App;