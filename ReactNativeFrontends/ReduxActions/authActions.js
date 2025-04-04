// actions/authActions.js
import * as authSelectors from '../selectors/authSelectors.js.js';
import * as types from './authActionTypes';
import axios from 'axios';

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

export const loginSuccess = (user, accessToken) => ({
  type: types.LOGIN_SUCCESS,
  payload: { user, accessToken },
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOGOUT });

    // Send a POST request to your Django logout endpoint
    await axios.get('http://localhost:8000/api/v1.0/logout/'); // Replace with your actual endpoint
  } catch (error) {
    // Handle any error, if needed
    console.error('Logout failed:', error);
  }
};

export const registerRequest = () => ({
  type: types.REGISTER_REQUEST,
});

export const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const addToWatchlist = (symbol) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.ADD_TO_WATCHLIST_REQUEST });

    const accessToken = authSelectors.getAccessToken(getState());
    const response = await axios.post(
      'http://localhost:8000/api/v1.0/add-to-watchlist/',
      { symbol },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    dispatch({ type: types.ADD_TO_WATCHLIST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.ADD_TO_WATCHLIST_FAILURE, payload: error.message });
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const response = await axios.post('http://localhost:8000/api/v1.0/login/', { username, password });

    if (response.data.access) {
      const accessToken = response.data.user.token.access;
      const user = response.data.user; // Assuming your API response includes user details
      dispatch(loginSuccess(user, accessToken));
    } else {
      dispatch(loginFailure('Invalid credentials'));
    }
  } catch (error) {
    dispatch(loginFailure('An error occurred during login'));
  }
};
