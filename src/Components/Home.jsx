import React from 'react';
import Cards from '../Pages/Cards';
import Carosuel from './Carosuel';

const Home = () => {
  return (
    <>
      {/* import caroosuel component */}
      <Carosuel />

      {/* import cards component */}
      <Cards />
    </>
  );
};

export default Home;
