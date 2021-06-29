import * as actions from './actions';
export const moduleName = 'countries';

const initialState = {
  countries: null,
  country: null,
  countrybyleague: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload };
    case actions.GET_COUNTRY_SUCCESS:
      return { ...state, country: action.payload };
    case actions.GET_COUNTRY_BY_LEAGUE_SUCCESS:
      return { ...state, countrybyleague: action.payload };
    default:
      return state;
  }
};

export const getCountries = () => ({ type: actions.GET_COUNTRIES_REQUEST });

export const getCountry = (country_id) => ({
  type: actions.GET_COUNTRY_REQUEST,
  payload: [country_id],
});

export const getCountryByLeague = (country_id, season) => ({
  type: actions.GET_COUNTRY_BY_LEAGUE_REQUEST,
  payload: { country_id, season },
});
