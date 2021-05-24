import axios from 'axios';

export const fetchProtectedData =
  ({ url, method, data, body }) =>
  (callback) => {
    axios({
      data: data,
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      url: url,
      method: method,
      data: body,
    }).then(({ data }) => {
      callback(data);
    });
  };
