// reducers/authReducer.js
import * as types from '../ReduxActions/authActionTypes.js';

const initialState = {
  isAuthenticated: false,
  user: null,
  accessToken: null, // New state to store the access token
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
      return { ...state, error: null };

    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        accessToken: action.payload.accessToken, // Set the access token
        error: null,
      };

    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
      return { ...state, isAuthenticated: false, user: null, accessToken: null, error: action.payload };

    case types.LOGOUT:
      return { ...state, isAuthenticated: false, user: null, accessToken: null, error: null };

    case types.ADD_TO_WATCHLIST_SUCCESS:
      return { ...state, watchlist: [...state.watchlist, action.payload] };

    case types.ADD_TO_WATCHLIST_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default authReducer;
