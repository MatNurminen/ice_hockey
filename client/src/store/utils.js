import axios from 'axios';

export const fetchProtectedData = ({ url, method, data }) => (callback) => {
  axios({
    data: data,
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    },
    url: url,
    method: method,
  }).then(({ data }) => {
    callback(data);
  });
};
