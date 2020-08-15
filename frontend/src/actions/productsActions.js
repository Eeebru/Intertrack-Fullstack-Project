import axios from 'axios';
import { GET_PRODUCTS } from './types';
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
