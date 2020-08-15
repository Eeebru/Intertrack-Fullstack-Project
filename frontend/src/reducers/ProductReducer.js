import { GET_PRODUCTS } from '../actions/types';
const initialState = {
  products: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
