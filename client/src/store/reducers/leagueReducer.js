import * as actions from '../actions';
const initialState = {
  leagues: null,
  clubsByLeague: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LEAGUES:
      return { ...state, leagues: action.leagues };
    case actions.GET_LEAGUE:
      return { ...state, league: action.league };
    case actions.GET_CLUBS_BY_LEAGUE:
      return { ...state, clubsByLeague: action.clubsByLeague };
    default:
      return state;
  }
};
