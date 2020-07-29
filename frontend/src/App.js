import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Home from "./components/pages/Home";
import Signin from "./components/Loginpage/Signin";
import Signup from "./components/Register/Signup";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Signin} />
          <Route exact path="/Register" component={Signup} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
