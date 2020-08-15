import axios from 'axios';
import {
  GET_USER,
  CLEAR_CURRENT_USER,
  USER_LOADING,
  GET_ERRORS,
  GET_USER_STATUS,
} from './types';

export const getCurrentUser = () => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .get('http://localhost:5000/user')
    .then((res) =>
      dispatch({
        type: GET_USER,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_USER,
        payload: {},
      })
    );
};
export const getUserStatus = () => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .get('http://localhost:5000/orders')
    .then((res) =>
      dispatch({
        type: GET_USER_STATUS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_USER_STATUS,
        payload: {},
      })
    );
};

export const updatedUser = (updatedData, history) => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .patch(`http://localhost:5000/user/${updatedData.id}`, updatedData)
    .then((res) => history.push('/dashboard'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Profile loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Clear  profile
export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER,
  };
};
