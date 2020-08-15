import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './ProductReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  product: productReducer,
  user: userReducer,
});
