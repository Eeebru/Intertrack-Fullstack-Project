import axios from 'axios';
import { GET_PRODUCT, GET_PRODUCTS, GET_ERRORS, CHECK } from './types';
import { setUserLoading } from './userActions';
export const getProducts = () => (dispatch) => {
  axios
    .get('http://localhost:5000/products')
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: {},
      })
    );
};
export const getProductById = ({ product_id }) => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .get(`http://localhost:5000/products/${product_id}`)
    .then((res) =>
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PRODUCT,
        payload: [],
      })
    );
};

export const buyProduct = (dataObj, history) => (dispatch) => {
  // const product = JSON.stringify(product_id);
  dispatch(setUserLoading());
  axios
    .post(`http://localhost:5000/orderproduct`, dataObj)
    .then((res) => history.push('/dashboard'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const verify = (dataObj) => (dispatch) => {
  // const product = JSON.stringify(product_id);
  axios
    .post(`http://localhost:5000/verify`, dataObj)
    .then((res) =>
      dispatch({
        type: CHECK,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: CHECK,
        payload: {},
      })
    );
};
