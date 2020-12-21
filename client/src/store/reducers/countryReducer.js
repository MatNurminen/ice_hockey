import * as actions from '../actions';
const initialState = {
  countries: null,
  country: null,
  countrybyleague: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_COUNTRIES:
      return { ...state, countries: action.countries };
    case actions.GET_COUNTRY:
      return { ...state, country: action.country };
    case actions.GET_COUNTRY_BY_LEAGUE:
      return { ...state, countrybyleague: action.countrybyleague };
    default:
      return state;
  }
};
