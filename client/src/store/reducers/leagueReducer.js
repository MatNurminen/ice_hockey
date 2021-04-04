import * as actions from '../actions';
const initialState = {
  leagues: null,
  clubsByLeague: null,
  tableByLeague: null,
  statsByLeague: null,
  countriesByLeague: null,
  comparisonByLeague: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LEAGUES:
      return { ...state, leagues: action.leagues };
    case actions.GET_LEAGUE:
      return {
        ...state,
        league: action.leagueAndClubs.league,
        clubsByLeague: action.leagueAndClubs.clubs,
        tableByLeague: action.leagueAndClubs.table,
        statsByLeague: action.leagueAndClubs.stats,
        countriesByLeague: action.leagueAndClubs.countries,
        comparisonByLeague: action.leagueAndClubs.comparison,
      };
    default:
      return state;
  }
};
