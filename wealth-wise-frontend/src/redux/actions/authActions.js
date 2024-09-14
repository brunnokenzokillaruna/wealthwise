// wealth-wise-frontend/src/redux/actions/authActions.js

import axios from 'axios';

export const registerUser = (userData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    navigate('/dashboard'); // Redirect to dashboard after registration
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR', payload: err.response.data.message });
  }
};

export const loginUser = (userData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    navigate('/dashboard'); // Redirect to dashboard after login
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR', payload: err.response.data.message });
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
