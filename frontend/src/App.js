import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utillis/setAuthtoken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentUser } from './actions/userActions';
import PrivateRoute from './components/common/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Home from './components/pages/Home';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import Signup from './components/auth/Signup';
import Insure from './components/pages/Insure';
import Aboutus from './components/pages/Aboutus';
import Signin from './components/auth/Signin';
import Dashboard from './components/pages/dashboard/Dashboard';
import EditDashboard from './components/pages/dashboard/EditDashboard';
import Products from './components/pages/products/Products';
import Claims from './components/pages/Claims';

//Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    //  Clear current Profile
    store.dispatch(clearCurrentUser());
    // Redirect to login
    window.location.href = '/signin';
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <NavBar />

          <Route exact path='/' component={Home} />
          <Route exact path='/insure' component={Insure} />
          <Route exact path='/aboutus' component={Aboutus} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/claims' component={Claims} />
          <Switch>
            <PrivateRoute exact path='/products' component={Products} />
          </Switch>
          <Switch>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path='/edit_profile'
              component={EditDashboard}
            />
          </Switch>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
