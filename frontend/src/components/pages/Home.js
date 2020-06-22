import React from 'react';
import Landing from '../layouts/Landing';
import ProductList from '../layouts/ProductList';
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <div>
      <Landing />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
