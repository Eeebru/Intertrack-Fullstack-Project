import {
  GET_USER,
  USER_LOADING,
  CLEAR_CURRENT_USER,
  GET_USER_STATUS,
} from '../actions/types';

const initialState = {
  User: {},
  status: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_USER:
      return {
        ...state,
        User: action.payload,
        loading: false,
      };
    case GET_USER_STATUS:
      return {
        ...state,
        status: action.payload,
        loading: false,
      };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        User: {},
      };
    default:
      return state;
  }
}
