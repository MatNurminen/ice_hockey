import * as actions from './index';

export const getCountries = () => ({ type: actions.GET_COUNTRIES_REQUEST });

export const getCountry = (country_id) => ({
  type: actions.GET_COUNTRY_REQUEST,
  payload: [country_id],
});

export const getCountryByLeague = (country_id, season) => ({
  type: actions.GET_COUNTRY_BY_LEAGUE_REQUEST,
  payload: { country_id, season },
});
