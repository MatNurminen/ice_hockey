import * as actions from './index';

export const getLeagues = () => ({ type: actions.GET_LEAGUES_REQUEST });

export const getLeague = (league_id, season) => ({
  type: actions.GET_LEAGUE_REQUEST,
  payload: [league_id, season],
});
