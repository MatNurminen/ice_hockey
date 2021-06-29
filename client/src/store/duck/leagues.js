import * as actions from './actions';
export const moduleName = 'leagues';

const initialState = {
  leagues: null,
  league: null,
  clubsByLeague: null,
  tableByLeague: null,
  statsByLeague: null,
  countriesByLeague: null,
  comparisonByLeague: null,
  statsPerSeasonByLeague: null,
  statsAllTimeByLeague: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LEAGUES_SUCCESS:
      return { ...state, leagues: action.payload };
    case actions.GET_LEAGUE_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        league: payload.league,
        clubsByLeague: payload.clubs,
        tableByLeague: payload.table,
        statsByLeague: payload.stats,
        countriesByLeague: payload.countries,
        comparisonByLeague: payload.comparison,
        statsPerSeasonByLeague: payload.statsPerSeason,
        statsAllTimeByLeague: payload.statsAllTime,
      };
    default:
      return state;
  }
};

export const getLeagues = () => ({ type: actions.GET_LEAGUES_REQUEST });

export const getLeague = (league_id, season) => ({
  type: actions.GET_LEAGUE_REQUEST,
  payload: [league_id, season],
});
