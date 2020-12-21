import axios from 'axios';
import * as actions from './index';

export const loginUser = (loginData) => async (dispatch) => {
  const res = await axios.post('/api/users/login', loginData);
  dispatch({ type: actions.SET_USER, user: res.data });
};
