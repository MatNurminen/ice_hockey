import axios from 'axios';

export const fetchProtectedData =
  ({ url, method, data, body }) =>
  (callback, catchinger) => {
    const token = window.localStorage.getItem('token');
    const header = token ? { Authorization: 'Bearer ' + token } : {};
    axios({
      data: data,
      headers: header,
      url: url,
      method: method,
      data: body,
    })
      .then(({ data }) => {
        callback(data);
      })
      .catch((error) => {
        catchinger(error);
      });
  };
