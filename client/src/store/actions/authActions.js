import axios from 'axios';
import * as actions from './index';

export const loginUser = (loginData) => async (dispatch) => {
  const res = await axios.post('/api/auth', loginData, {
    // headers: {
    //   Authorization:
    //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTYxOTQyMTA0OX0.oDiunh1VBj-ZQuzayt85-hjpu21a_k-thZAZCpQVFiM',
    // },
  });
  dispatch({ type: actions.SET_USER, user: res.data });
  window.localStorage.setItem('token', res.data.token);
};

export const confirmError =
  (text = null) =>
  async (dispatch) => {
    dispatch({ type: actions.ACCESS_ERROR, payload: text });
  };
