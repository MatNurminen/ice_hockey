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

// var axios = require('axios');
// var qs = require('qs');
// var data = qs.stringify({
//   login: 'test@mail.com',
//   password: '777',
// });
// var config = {
//   method: 'post',
//   url: 'http://localhost:3000/api/auth',
//   headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzQzMTQyfQ.nYjdVKVEVUnh904NE8wZQdXAIWe9l1yYnYJcAafnZio',
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   data: data,
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
