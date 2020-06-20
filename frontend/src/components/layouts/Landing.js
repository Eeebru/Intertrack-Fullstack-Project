import React from 'react';
import NavBar from './NavBar';

const Landing = () => {
  return (
    <div className='landing'>
      <NavBar />

      <div className='mt-5'>
        <h2 className='logo text-center'>Alles Insurance</h2>
        <h1 className='motto text-center'>We Promise To Keep You Alright</h1>
        <p className='saying text-center'>
          Instant everything. Great price. Big heart.
        </p>
      </div>
    </div>
  );
};

export default Landing;
