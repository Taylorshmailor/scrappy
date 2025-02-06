import React from 'react';
import "./home.css";

const Home = ({ item, weight, season, yarnType }) => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <h2>Clothing Item: {item}</h2>
      <h2>Yarn weight: {weight}</h2>
      <h2>Season: {season}</h2>
      <h2>Yarn type: {yarnType}</h2>
    </div>
  );
};

export default Home;
