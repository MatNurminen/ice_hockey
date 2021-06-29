import * as actions from './actions';
import axios from 'axios';
export const moduleName = 'auth';

const initialState = {
  user:
    (window.localStorage.getItem('user') &&
      JSON.parse(window.localStorage.getItem('user'))) ||
    null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return { user: action.user };
    case actions.ACCESS_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};

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
