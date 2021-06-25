import axios from 'axios';
import * as actions from './index';

export const loginUser = (loginData) => async (dispatch) => {
  const res = await axios.post('/api/auth', loginData);
  dispatch({ type: actions.SET_USER, user: res.data });
  window.localStorage.setItem('user', JSON.stringify(res.data));
};

export const confirmError =
  (text = null) =>
  async (dispatch) => {
    dispatch({ type: actions.ACCESS_ERROR, payload: text });
  };

export const logoutUser = () => ({
  type: actions.SET_USER,
  user: null,
});
