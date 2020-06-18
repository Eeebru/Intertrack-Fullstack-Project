import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1>Alles Insurance</h1>
      </div>
    </Provider>
  );
};

export default App;
