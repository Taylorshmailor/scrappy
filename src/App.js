import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/intro/Intro';
import Home from './components/home/Home';

const App = () => {
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState("");
  const [season, setSeason] = useState("");
  const [yarnType, setYarnType] = useState("");

  // Function to update the state when the form is completed
  const handleFormSubmit = (item, weight, season, yarnType) => {
    setItem(item);
    setWeight(weight);
    setSeason(season);
    setYarnType(yarnType);
  };

  return (
    <Router>
      <Routes>
        {/* Pass the form submit handler to Intro */}
        <Route path="/scrappy" element={<Intro onFormSubmit={handleFormSubmit} />} />
        
        {/* Pass the data as props to Home */}
        <Route 
          path="/home" 
          element={<Home item={item} weight={weight} season={season} yarnType={yarnType} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
