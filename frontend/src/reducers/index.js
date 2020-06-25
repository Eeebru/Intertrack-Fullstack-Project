import { combineReducers } from 'redux';
import productReducer from './ProductReducer';
export default combineReducers({
  product: productReducer,
});
