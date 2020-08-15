import axios from 'axios';
import setAuthToken from '../utillis/setAuthtoken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER, GET_ERRORS, CURRENT_USER } from './types';

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('http://localhost:5000/signup', userData)
    .then((res) => history.push('/dashboard'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const signinUser = (userData) => (dispatch) => {
  axios
    .post('http://localhost:5000/login', userData)
    .then((res) => {
      // Save to localStorage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
export const currentUser = (id) => {
  return {
    type: CURRENT_USER,
    payload: id,
  };
};
// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user in user
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
