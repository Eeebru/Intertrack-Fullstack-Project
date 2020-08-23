import { GET_PRODUCTS, GET_PRODUCT, CHECK } from '../actions/types';
const initialState = {
  products: null,
  productById: [],
  loading: false,
  verify: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        productById: action.payload,
        loading: false,
      };
    case CHECK:
      return {
        ...state,
        verify: action.payload,
      };
    default:
      return state;
  }
}
