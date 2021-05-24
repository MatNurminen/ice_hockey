import * as actions from '../actions';
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
