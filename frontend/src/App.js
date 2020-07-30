import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Home from './components/pages/Home';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Home />

      <Footer />
    </Provider>
  );
};

export default App;
