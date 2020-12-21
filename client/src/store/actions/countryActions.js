import axios from 'axios';
import * as actions from './index';

export const getCountries = () => async (dispatch) => {
  const res = await axios.get('/api/countries');
  dispatch({ type: actions.GET_COUNTRIES, countries: res.data });
};

export const getCountry = (country_id) => async (dispatch) => {
  const res = await axios.get(`/api/countries/${country_id}`);
  dispatch({ type: actions.GET_COUNTRY, country: res.data });
};

export const getCountryByLeague = (season, country_id) => async (dispatch) => {
  const res = await axios.get('/api/chart/', {
    params: { season, country_id },
  });
  dispatch({ type: actions.GET_COUNTRY_BY_LEAGUE, countrybyleague: res.data });
};

// useEffect(() => {
//   const GetData = async () => {
//     const res = await axios('http://localhost:51760/Api/Emp/employee');
//     setData(res.data);
//   };
//   GetData();
//   console.log(data);
// }, []);
