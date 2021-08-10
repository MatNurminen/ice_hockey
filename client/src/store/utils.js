import axios from 'axios';

export const fetchProtectedData =
  ({ url, method, data, body }) =>
  (callback, catchinger) => {
    const token =
      window.localStorage.getItem('user') &&
      JSON.parse(window.localStorage.getItem('user')).token;
    const header = token ? { Authorization: 'Bearer ' + token } : {};
    axios({
      data: data || body,
      headers: header,
      url: url,
      method: method,
    })
      .then(({ data }) => {
        callback(data);
      })
      .catch((error) => {
        catchinger(error);
      });
  };
