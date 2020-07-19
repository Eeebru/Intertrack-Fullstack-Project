import React from 'react';
import Landing from '../layouts/Landing';
import ProductList from '../layouts/ProductList';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/NavBar';
import Dashboard from './dashboard/Dashboard';
import EditDashboard from './dashboard/EditDashboard';

const Home = () => {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <Dashboard /> */}
      {/* <EditDashboard /> */}
      {/* <Landing /> */}
      <ProductList />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
