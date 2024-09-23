import React from 'react';
import Hero from '../Components/Hero/Hero';
import Card from '../Components/Card/Card';
import Trending from '../Components/Trending/Trending';
import Customer from '../Components/Customer/Customer';
import Latest from '../Components/Latest/Latest';
import Smallthings from '../Components/Smallthings/Smallthings'

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <Card />
      {/* <Trending /> */}
      <Customer />
      <Latest />
      <Smallthings />
    </div>
  );
};

export default HomePage;
